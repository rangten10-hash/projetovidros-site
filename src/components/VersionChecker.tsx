/**
 * Detecta novas publicações comparando o HTML atual com o do servidor.
 * Se o bundle hash mudar (novo deploy), recarrega a página automaticamente
 * para evitar que o usuário continue vendo a versão antiga em cache.
 */
import { useEffect, useRef } from "react";

const CHECK_INTERVAL_MS = 60_000; // 1 minuto

function extractBundleHash(html: string): string | null {
  // Vite gera <script type="module" src="/assets/index-[hash].js">
  const match = html.match(/\/assets\/[^"']+\.js/);
  return match ? match[0] : null;
}

const VersionChecker = () => {
  const initialHashRef = useRef<string | null>(null);
  const reloadingRef = useRef(false);

  useEffect(() => {
    // Em dev não faz sentido (HMR já cuida)
    if (import.meta.env.DEV) return;

    // Captura o hash atual a partir do próprio DOM
    const currentScript = document.querySelector(
      'script[type="module"][src*="/assets/"]'
    ) as HTMLScriptElement | null;
    if (currentScript) {
      const m = currentScript.src.match(/\/assets\/[^"']+\.js/);
      initialHashRef.current = m ? m[0] : null;
    }

    const check = async () => {
      if (reloadingRef.current) return;
      try {
        const res = await fetch(`/?_=${Date.now()}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        });
        if (!res.ok) return;
        const html = await res.text();
        const newHash = extractBundleHash(html);
        if (
          newHash &&
          initialHashRef.current &&
          newHash !== initialHashRef.current
        ) {
          reloadingRef.current = true;
          // Pequeno delay para não interromper interação ativa
          setTimeout(() => window.location.reload(), 500);
        }
      } catch {
        // ignora falhas de rede
      }
    };

    const interval = window.setInterval(check, CHECK_INTERVAL_MS);
    const onVisible = () => {
      if (document.visibilityState === "visible") check();
    };
    document.addEventListener("visibilitychange", onVisible);

    // Primeira checagem rápida ao montar
    const firstTimeout = window.setTimeout(check, 5_000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(firstTimeout);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return null;
};

export default VersionChecker;
