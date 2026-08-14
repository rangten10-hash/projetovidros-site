// Centralized route chunk prefetcher.
// Each entry returns the same dynamic import used by React.lazy in App.tsx,
// so calling prefetch warms the module cache without forcing eager load.

type Loader = () => Promise<unknown>;

export const routeLoaders: Record<string, Loader> = {
  "/box-de-banheiro": () => import("@/pages/BoxBanheiro"),
  "/box-flex": () => import("@/pages/BoxFlex"),
  "/box-seguro": () => import("@/pages/BoxSeguro"),
  "/portas-de-vidro": () => import("@/pages/PortasVidro"),
  "/espelhos": () => import("@/pages/Espelhos"),
  "/espelhos-led": () => import("@/pages/EspelhosLed"),
  "/projetos": () => import("@/pages/Projetos"),
  "/blog": () => import("@/pages/Blog"),
  "/simulador": () => import("@/pages/Simulador"),
};

const prefetched = new Set<string>();

export const prefetchRoute = (path: string) => {
  if (prefetched.has(path)) return;
  const loader = routeLoaders[path];
  if (!loader) return;
  prefetched.add(path);
  // Swallow errors silently — prefetch is best-effort.
  loader().catch(() => prefetched.delete(path));
};

export const prefetchImage = (src: string) => {
  if (typeof window === "undefined") return;
  const img = new Image();
  img.decoding = "async";
  img.src = src;
};

type IdleCb = () => void;
const onIdle = (cb: IdleCb, timeout = 2500) => {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    requestIdleCallback?: (cb: IdleCb, opts?: { timeout: number }) => void;
  };
  if (w.requestIdleCallback) w.requestIdleCallback(cb, { timeout });
  else setTimeout(cb, 1500);
};

/**
 * Prefetch the most-likely next routes after the page is idle.
 * Runs only once per session.
 */
let scheduled = false;
export const schedulePrefetch = (paths: string[], imageUrls: string[] = []) => {
  if (scheduled || typeof window === "undefined") return;
  scheduled = true;

  // Prefetch ONE item per idle slot so chunk parsing never forms a long task
  // during the TBT measurement window.
  const queue: Array<() => void> = [
    ...paths.map((p) => () => prefetchRoute(p)),
    ...imageUrls.map((u) => () => prefetchImage(u)),
  ];

  const pump = () => {
    const next = queue.shift();
    if (!next) return;
    next();
    onIdle(pump, 4000);
  };

  const run = () => setTimeout(() => onIdle(pump, 4000), 3500);
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run, { once: true });
};
