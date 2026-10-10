import { describe, expect, it } from "vitest";
import { MAX_SYSTEM, maxSystemSchemas } from "@/lib/maxSystem";
import { productFromPath } from "@/lib/whatsappTracking";

describe("Max System product rules", () => {
  it("limits the supplied maximum height to 3.00 meters", () => {
    expect(MAX_SYSTEM.maxHeightMeters).toBe(3);
    expect(maxSystemSchemas[0].additionalProperty?.[0].value).toBe(3);
  });
  it("identifies WhatsApp clicks from the dedicated product route", () => {
    expect(productFromPath("/portas/max-system-pivotante")).toBe("porta_max_system_pivotante");
  });
});