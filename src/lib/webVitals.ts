import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from "web-vitals";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    __webVitals?: Record<string, Metric>;
  }
}

const RATING_COLOR: Record<string, string> = {
  good: "#10b981",
  "needs-improvement": "#f59e0b",
  poor: "#ef4444",
};

/**
 * Sends a Core Web Vitals metric to GA4 (event "web_vitals") and logs it
 * to the console with color-coded rating so you can spot regressions live.
 *
 * Inspect the latest values at any time via `window.__webVitals` in DevTools.
 */
function report(metric: Metric) {
  // Cache last value of each metric for quick console inspection
  if (typeof window !== "undefined") {
    window.__webVitals = window.__webVitals || {};
    window.__webVitals[metric.name] = metric;
  }

  // Round value (CLS is unitless, others are ms)
  const value = Math.round(
    metric.name === "CLS" ? metric.value * 1000 : metric.value,
  );

  // Console log with rating color
  if (typeof console !== "undefined") {
    const color = RATING_COLOR[metric.rating] ?? "#6b7280";
    // eslint-disable-next-line no-console
    console.log(
      `%c[Web Vitals] ${metric.name} ${metric.rating}`,
      `color:${color};font-weight:bold`,
      `${metric.name === "CLS" ? metric.value.toFixed(3) : `${value}ms`}`,
      metric,
    );
  }

  // Forward to GA4
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "web_vitals", {
      event_category: "Web Vitals",
      event_label: metric.id,
      metric_id: metric.id,
      metric_name: metric.name,
      metric_value: value,
      metric_rating: metric.rating,
      metric_delta: Math.round(metric.delta * 1000) / 1000,
      navigation_type: metric.navigationType,
      non_interaction: true,
    });
  }
}

export function initWebVitals() {
  try {
    onLCP(report);
    onCLS(report);
    onINP(report);
    onFCP(report);
    onTTFB(report);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn("[Web Vitals] failed to init", err);
  }
}
