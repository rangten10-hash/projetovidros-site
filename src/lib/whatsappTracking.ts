/**
 * Rastreamento global de cliques em WhatsApp.
 *
 * Garante que TODO link/botão que aponte para wa.me ou api.whatsapp.com
 * dispare o evento GA4 `click_whatsapp` com o parâmetro `product`,
 * identificando de qual produto/página veio o clique.
 */

const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com", "web.whatsapp.com", "whatsapp.com"];

export function isWhatsAppUrl(url: string | null | undefined): boolean {
  if (!url) return false;
  try {
    const { hostname } = new URL(url, window.location.origin);
    return WHATSAPP_HOSTS.some((h) => hostname === h || hostname.endsWith(`.${h}`));
  } catch {
    return /wa\.me|whatsapp\.com/i.test(url);
  }
}

/** Regras de rota -> nome do produto enviado ao GA4. */
const ROUTE_RULES: { test: RegExp; product: string }[] = [
  { test: /^\/box-seguro/, product: "box_seguro" },
  { test: /^\/box-fume/, product: "box_fume" },
  { test: /^\/box-incolor/, product: "box_incolor" },
  { test: /^\/box-verde/, product: "box_verde" },
  { test: /^\/box-bronze/, product: "box_bronze" },
  { test: /^\/box-para-banheiro-zona-norte/, product: "box_zona_norte" },
  { test: /^\/box-de-vidro-zona-sul/, product: "box_zona_sul" },
  { test: /^\/box-de-vidro-zona-oeste/, product: "box_zona_oeste" },
  { test: /^\/box-de-vidro-zona-leste/, product: "box_zona_leste" },
  { test: /^\/box-de-banheiro-/, product: "box_de_banheiro_bairro" },
  { test: /^\/box-de-banheiro/, product: "box_de_banheiro" },
  { test: /^\/box-/, product: "box_de_banheiro" },
  { test: /^\/envidracamento-de-sacada.*zona-norte/, product: "sacada_zona_norte" },
  { test: /^\/envidracamento-de-sacada.*zona-sul/, product: "sacada_zona_sul" },
  { test: /^\/envidracamento-de-sacada.*zona-oeste/, product: "sacada_zona_oeste" },
  { test: /^\/envidracamento-de-sacada.*zona-leste/, product: "sacada_zona_leste" },
  { test: /^\/(envidracamento-de-sacada|sacada)/, product: "sacada" },
  { test: /^\/espelhos-led/, product: "espelhos_led" },
  { test: /^\/espelhos\/.+/, product: "espelhos_bairro" },
  { test: /^\/espelhos/, product: "espelhos" },
  { test: /^\/portas-de-vidro\/.+/, product: "portas_de_vidro_bairro" },
  { test: /^\/portas-de-vidro/, product: "portas_de_vidro" },
  { test: /^\/projetos\/.+/, product: "projetos_bairro" },
  { test: /^\/projetos/, product: "projetos" },
  { test: /^\/servicos\/.+/, product: "servicos_bairro" },
  { test: /^\/blog\/.+/, product: "blog_post" },
  { test: /^\/blog/, product: "blog" },
  { test: /^\/simulador/, product: "simulador" },
  { test: /^\/$/, product: "home" },
];

export function productFromPath(pathname: string = window.location.pathname): string {
  const path = pathname.replace(/\/+$/, "") || "/";
  const rule = ROUTE_RULES.find((r) => r.test.test(path));
  return rule ? rule.product : path.slice(1).replace(/[^a-z0-9]+/gi, "_").toLowerCase() || "site";
}

/** Contexto estrutural (header, footer, botão flutuante) tem prioridade sobre a rota. */
function productFromElement(el: Element | null): string | null {
  if (!el) return null;
  const explicit = el.closest<HTMLElement>("[data-wa-product]");
  if (explicit?.dataset.waProduct) return explicit.dataset.waProduct;
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("[data-wa-floating]")) return "botao_flutuante";
  return null;
}

export function resolveWhatsAppProduct(el?: Element | null): string {
  return productFromElement(el ?? null) ?? productFromPath();
}

/** Marca de tempo do último evento enviado manualmente, para evitar duplicidade. */
let lastTrackedAt = 0;
export function markWhatsAppTracked() {
  lastTrackedAt = Date.now();
}

export function trackWhatsAppClick(product: string, url?: string) {
  markWhatsAppTracked();
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "click_whatsapp", {
    product,
    event_category: "engagement",
    event_label: url ?? window.location.pathname,
    page_path: window.location.pathname,
    transport_type: "beacon",
  });
}

/**
 * Listener delegado: cobre qualquer link de WhatsApp do site,
 * inclusive os renderizados dinamicamente (blog, bairros, zonas).
 */
export function installWhatsAppTracking() {
  if (typeof document === "undefined") return;
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor || !isWhatsAppUrl(anchor.getAttribute("href"))) return;
      // Já rastreado pelo handler do próprio botão (gtagReportConversion).
      if (Date.now() - lastTrackedAt < 800) return;
      trackWhatsAppClick(resolveWhatsAppProduct(anchor), anchor.href);
    },
    true,
  );
}
