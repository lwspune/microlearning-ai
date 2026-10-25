import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { LANGS } from "../translate";
import { chapters } from "./index";

describe("translation files", () => {
  it("are all registered in their chapter", () => {
    const unregistered: string[] = [];
    for (const ch of chapters) {
      for (const lang of LANGS) {
        const dir = join(__dirname, ch.slug, "translations", lang);
        if (!existsSync(dir)) continue;
        const registered = new Set((ch.translations ?? []).filter((t) => t.lang === lang).map((t) => t.id.toLowerCase()));
        for (const f of readdirSync(dir).filter((f) => /^c\d\d\.ts$/.test(f))) {
          if (!registered.has(f.slice(0, -3))) unregistered.push(`${ch.slug}/translations/${lang}/${f}`);
        }
      }
    }
    expect(unregistered).toEqual([]);
  });
});
