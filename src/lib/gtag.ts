declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function gtagReportConversion(url: string) {
  if (typeof window.gtag === "undefined") {
    window.open(url, "_blank");
    return;
  }

  window.gtag("event", "conversion", {
    send_to: "AW-18016443240/HvZMCJmZg4wcEOi29I5D",
    event_callback: () => {
      window.open(url, "_blank");
    },
  });
}
