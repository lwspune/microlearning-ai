import { describe, expect, it } from "vitest";
import { BRAND } from "@/lib/brand";
import manifest from "./manifest";

describe("brand", () => {
  it("is Concept Ladder, matching the live domain conceptladder.in", () => {
    expect(BRAND.name).toBe("Concept Ladder");
  });

  it("names the installed app after the brand", () => {
    const app = manifest();
    expect(app.name).toBe(BRAND.name);
    expect(app.short_name).toBe(BRAND.shortName);
    expect(app.description).toBe(BRAND.tagline);
  });

  it("keeps the home-screen label short enough for launchers", () => {
    expect(BRAND.shortName.length).toBeLessThanOrEqual(13);
  });
});
