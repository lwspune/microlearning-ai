import { describe, expect, it } from "vitest";
import { complexNumbers } from "@/content/chapters/complex-numbers";
import { refresherFrom } from "./refresher";

describe("refresherFrom", () => {
  it("accepts a published prerequisite of the concept the learner came from", () => {
    // C05 Conjugate needs C04 Arithmetic.
    expect(refresherFrom(complexNumbers, "arithmetic", "conjugate")).toEqual({ fromSlug: "conjugate", fromTitle: "Conjugate" });
  });

  it("accepts an indirect prerequisite", () => {
    // C06 Division needs C05, which needs C04.
    expect(refresherFrom(complexNumbers, "arithmetic", "division")).not.toBeNull();
  });

  it("rejects a concept that is not a prerequisite of the source", () => {
    // C10 Argand plane is not a prerequisite of C05 Conjugate.
    expect(refresherFrom(complexNumbers, "argand-plane", "conjugate")).toBeNull();
  });

  it("rejects a source that is not published", () => {
    expect(refresherFrom(complexNumbers, "arithmetic", "purely-real-imaginary")).toBeNull();
  });

  it("rejects unknown or malformed slugs", () => {
    expect(refresherFrom(complexNumbers, "arithmetic", "https://evil.example")).toBeNull();
    expect(refresherFrom(complexNumbers, "nope", "conjugate")).toBeNull();
  });
});
