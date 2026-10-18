import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

/**
 * Pages read Supabase in sequence, so every query pays the round trip between
 * the server and the database. The database is in ap-south-1 (Mumbai); Vercel's
 * default function region is iad1 (Washington, D.C.), about 250 ms away per
 * query. vercel.json pins functions to bom1, next to the database. Move both
 * together if the database ever moves.
 */

const file = new URL("../../../vercel.json", import.meta.url);

describe("deploy region", () => {
  it("runs functions in Mumbai, next to the Supabase database", () => {
    expect(existsSync(file)).toBe(true);
    const config = JSON.parse(readFileSync(file, "utf8")) as { regions?: string[] };
    expect(config.regions).toEqual(["bom1"]);
  });
});
