declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export interface EnhancedConversionUserData {
  email?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  street?: string;
  city?: string;
  region?: string;
  postal_code?: string;
  country?: string;
}

/**
 * Normalizes a phone number to E.164-ish format expected by Google Ads
 * Enhanced Conversions (only digits, prefixed with +).
 */
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  // Assume Brazil if no country code provided
  if (digits.length <= 11) return `+55${digits}`;
  return `+${digits}`;
}

function buildUserData(data?: EnhancedConversionUserData) {
  if (!data) return undefined;
  const userData: Record<string, string> = {};
  if (data.email) userData.email = data.email.trim().toLowerCase();
  if (data.phone_number) {
    const normalized = normalizePhone(data.phone_number);
    if (normalized) userData.phone_number = normalized;
  }
  const address: Record<string, string> = {};
  if (data.first_name) address.first_name = data.first_name.trim().toLowerCase();
  if (data.last_name) address.last_name = data.last_name.trim().toLowerCase();
  if (data.street) address.street = data.street.trim().toLowerCase();
  if (data.city) address.city = data.city.trim().toLowerCase();
  if (data.region) address.region = data.region.trim().toLowerCase();
  if (data.postal_code) address.postal_code = data.postal_code.trim();
  if (data.country) address.country = data.country.trim().toUpperCase();
  if (Object.keys(address).length > 0) {
    (userData as Record<string, unknown>).address = address;
  }
  return Object.keys(userData).length > 0 ? userData : undefined;
}

/**
 * Reports a Google Ads conversion for a WhatsApp click and then opens the URL.
 * Supports Enhanced Conversions: if user-provided data (email/phone/etc.) is
 * available on the page, pass it via `userData` to enrich the conversion.
 */
export function gtagReportConversion(
  url: string,
  userData?: EnhancedConversionUserData,
) {
  const openUrl = () => window.open(url, "_blank");

  if (typeof window === "undefined" || typeof window.gtag === "undefined") {
    openUrl();
    return;
  }

  const enhanced = buildUserData(userData);

  // Set user-provided data at the page level so the tag can attach it to
  // subsequent conversion events (required for Enhanced Conversions).
  if (enhanced) {
    window.gtag("set", "user_data", enhanced);
  }

  window.gtag("event", "conversion", {
    send_to: "AW-18016443240/HvZMCJmZg4wcEOi29I5D",
    allow_enhanced_conversions: true,
    ...(enhanced ? { user_data: enhanced } : {}),
    event_callback: openUrl,
  });

  // Safety net: ensure navigation happens even if gtag never fires the callback
  setTimeout(openUrl, 1200);
}
