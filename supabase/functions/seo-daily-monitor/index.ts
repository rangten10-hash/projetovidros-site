// SEO daily monitor — queries Google Search Console, stores snapshots, and emails alerts on regressions.
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GSC_GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const GSC_PROPERTY = "sc-domain:projetovidros.com.br";
const ALERT_EMAIL_TO = "rangten10@gmail.com";

function todayISO(offsetDays = 0): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

async function gscFetch(path: string, init: RequestInit = {}): Promise<any> {
  const lovableKey = Deno.env.get("LOVABLE_API_KEY");
  const gscKey = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!lovableKey) throw new Error("LOVABLE_API_KEY missing");
  if (!gscKey) throw new Error("GOOGLE_SEARCH_CONSOLE_API_KEY missing");

  const res = await fetch(`${GSC_GATEWAY}${path}`, {
    ...init,
    headers: {
      "Authorization": `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": gscKey,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`GSC ${path} ${res.status}: ${text}`);
  return text ? JSON.parse(text) : {};
}

async function querySearchAnalytics(url: string, startDate: string, endDate: string) {
  const body = {
    startDate,
    endDate,
    dimensions: ["page"],
    dimensionFilterGroups: [{ filters: [{ dimension: "page", operator: "equals", expression: url }] }],
    rowLimit: 1,
  };
  const data = await gscFetch(`/webmasters/v3/sites/${encodeURIComponent(GSC_PROPERTY)}/searchAnalytics/query`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const row = data.rows?.[0];
  return {
    clicks: row?.clicks ?? 0,
    impressions: row?.impressions ?? 0,
    ctr: row?.ctr ?? 0,
    position: row?.position ?? 0,
  };
}

async function inspectUrl(url: string) {
  try {
    const data = await gscFetch(`/v1/urlInspection/index:inspect`, {
      method: "POST",
      body: JSON.stringify({ inspectionUrl: url, siteUrl: GSC_PROPERTY }),
    });
    const r = data.inspectionResult?.indexStatusResult ?? {};
    return {
      verdict: r.verdict ?? "UNKNOWN",
      coverageState: r.coverageState ?? null,
      lastCrawlTime: r.lastCrawlTime ?? null,
    };
  } catch (e) {
    console.warn("inspectUrl failed", url, String(e));
    return { verdict: "UNKNOWN", coverageState: null, lastCrawlTime: null };
  }
}

async function listSitemapErrors() {
  try {
    const data = await gscFetch(`/webmasters/v3/sites/${encodeURIComponent(GSC_PROPERTY)}/sitemaps`);
    const issues: { path: string; errors: number; warnings: number }[] = [];
    for (const sm of data.sitemap || []) {
      const errors = parseInt(sm.errors || "0", 10);
      const warnings = parseInt(sm.warnings || "0", 10);
      if (errors > 0 || warnings > 0) issues.push({ path: sm.path, errors, warnings });
    }
    return issues;
  } catch (e) {
    console.warn("listSitemapErrors failed", String(e));
    return [];
  }
}

async function sendAlertEmail(subject: string, html: string) {
  const url = `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-transactional-email`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
      },
      body: JSON.stringify({
        to: ALERT_EMAIL_TO,
        subject,
        html,
        purpose: "transactional",
        idempotency_key: `seo-alert-${todayISO()}`,
      }),
    });
    const text = await res.text();
    console.log("email response", res.status, text);
    return res.ok;
  } catch (e) {
    console.error("Failed to send email", String(e));
    return false;
  }
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Authenticate caller against the internal monitor secret stored server-side.
    const provided = req.headers.get("x-monitor-secret") ?? "";
    const { data: cfg } = await supabase
      .from("_monitor_config")
      .select("value")
      .eq("key", "monitor_secret")
      .maybeSingle();
    const expected = cfg?.value ?? "";
    if (!expected || !provided || !timingSafeEqual(provided, expected)) {
      return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: pages, error: pagesError } = await supabase
      .from("seo_tracked_pages")
      .select("url,label")
      .eq("active", true);
    if (pagesError) throw pagesError;

    const today = todayISO(-1); // yesterday (GSC has 2-3 day delay but yesterday is safest)
    const compareDate = todayISO(-8); // same weekday previous week
    const alerts: { url: string; type: string; severity: string; message: string; details: any }[] = [];

    for (const page of pages || []) {
      try {
        // 1d window
        const todayStats = await querySearchAnalytics(page.url, today, today);
        // 7d average window
        const weekStats = await querySearchAnalytics(page.url, todayISO(-8), todayISO(-2));
        // Index status
        const inspection = await inspectUrl(page.url);

        // Save snapshot
        await supabase.from("seo_daily_snapshots").upsert({
          url: page.url,
          snapshot_date: today,
          clicks: todayStats.clicks,
          impressions: todayStats.impressions,
          ctr: todayStats.ctr,
          position: todayStats.position,
          index_status: inspection.verdict,
          coverage_state: inspection.coverageState,
          last_crawl_time: inspection.lastCrawlTime,
          raw: { todayStats, weekStats, inspection },
        }, { onConflict: "url,snapshot_date" });

        // Previous snapshot for comparison
        const { data: prev } = await supabase
          .from("seo_daily_snapshots")
          .select("*")
          .eq("url", page.url)
          .eq("snapshot_date", compareDate)
          .maybeSingle();

        // Alert: not indexed
        if (inspection.verdict && inspection.verdict !== "PASS" && inspection.verdict !== "UNKNOWN") {
          alerts.push({
            url: page.url, type: "not_indexed", severity: "critical",
            message: `${page.label} fora do índice (${inspection.verdict})`,
            details: inspection,
          });
        }

        // Alert: position drop > 5
        if (prev && prev.position > 0 && todayStats.position > 0 && todayStats.position - Number(prev.position) > 5) {
          alerts.push({
            url: page.url, type: "position_drop", severity: "warning",
            message: `${page.label}: posição caiu de ${Number(prev.position).toFixed(1)} para ${todayStats.position.toFixed(1)}`,
            details: { previous: prev.position, current: todayStats.position },
          });
        }

        // Alert: clicks drop > 50% vs week avg
        const weekAvgClicks = weekStats.clicks / 7;
        if (weekAvgClicks >= 2 && todayStats.clicks < weekAvgClicks * 0.5) {
          alerts.push({
            url: page.url, type: "clicks_drop", severity: "warning",
            message: `${page.label}: ${todayStats.clicks} cliques hoje vs. média ${weekAvgClicks.toFixed(1)} (-${(100 - (todayStats.clicks / weekAvgClicks) * 100).toFixed(0)}%)`,
            details: { today: todayStats.clicks, weekAvg: weekAvgClicks },
          });
        }
      } catch (e) {
        console.error(`Page ${page.url} failed:`, String(e));
      }
    }

    // Sitemap coverage errors
    const sitemapIssues = await listSitemapErrors();
    for (const s of sitemapIssues) {
      alerts.push({
        url: s.path, type: "sitemap_error", severity: "warning",
        message: `Sitemap ${s.path}: ${s.errors} erros, ${s.warnings} avisos`,
        details: s,
      });
    }

    // Persist alerts
    if (alerts.length > 0) {
      await supabase.from("seo_alerts").insert(alerts.map(a => ({
        url: a.url, alert_type: a.type, severity: a.severity, message: a.message, details: a.details,
      })));

      // Build email
      const rowsHtml = alerts.map(a => `
        <tr>
          <td style="padding:8px;border-bottom:1px solid #eee;font-weight:600;color:${a.severity === 'critical' ? '#c00' : '#b67800'}">${a.severity.toUpperCase()}</td>
          <td style="padding:8px;border-bottom:1px solid #eee">${a.message}</td>
          <td style="padding:8px;border-bottom:1px solid #eee"><a href="${a.url}">${a.url}</a></td>
        </tr>
      `).join("");

      const html = `
        <div style="font-family:Arial,sans-serif;color:#002B36;max-width:640px">
          <h2>🚨 Alertas SEO — ${today}</h2>
          <p>${alerts.length} alerta(s) detectado(s) no monitoramento diário do Google Search Console.</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <thead><tr style="background:#f5f5f5"><th align="left" style="padding:8px">Severidade</th><th align="left" style="padding:8px">Mensagem</th><th align="left" style="padding:8px">URL</th></tr></thead>
            <tbody>${rowsHtml}</tbody>
          </table>
          <p style="margin-top:20px;color:#666;font-size:12px">Site: projetovidros.com.br · Verificação automática diária</p>
        </div>
      `;

      await sendAlertEmail(`🚨 SEO: ${alerts.length} alerta(s) em projetovidros.com.br`, html);
    }

    return new Response(JSON.stringify({
      ok: true,
      pagesChecked: pages?.length || 0,
      alertsGenerated: alerts.length,
      alerts,
    }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    console.error("Monitor failed:", String(e));
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
