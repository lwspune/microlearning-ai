import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c28: Concept = {
  id: "C28",
  status: "draft",
  hook: {
    prompt: t`Pin a loop of string at two points and pull it tight with a pencil. **What curve does the pencil draw?**`,
    reveal: t`An ellipse: the total distance to the two pins stays fixed. With complex numbers that is $|z - a| + |z - b| = k$.`,
  },
  explanation: {
    intuition: t`A constant **sum** of distances to two fixed points (the foci) traces an ellipse; a constant **difference** traces one branch of a hyperbola. But always compare the constant with the distance between the foci first: it decides whether the curve exists at all.`,
    formal: t`Let $d = |a - b|$, the distance between the foci.

**Sum** $|z - a| + |z - b| = k$:
- $k > d$: an ellipse (major axis $k$)
- $k = d$: the line segment from $a$ to $b$
- $k < d$: no points

**Difference** $|z - a| - |z - b| = k$ (with $k > 0$):
- $k < d$: **one** branch of a hyperbola, the branch nearer $b$
- $k = d$: a ray from $b$, pointing away from $a$
- $k > d$: no points

Both branches appear only for $\big||z - a| - |z - b|\big| = k$.`,
    worked: {
      prompt: t`Describe $|z - 2i| + |z + 2i| = 6$.`,
      steps: [
        t`The foci are $2i$ and $-2i$, so $d = 4$.`,
        t`$k = 6 > 4$, so it is an ellipse.`,
        t`Its major axis is $6$, along the imaginary axis, so it reaches $\pm 3i$.`,
      ],
      answer: t`An ellipse with foci $\pm 2i$, reaching $\pm 3i$.`,
    },
    visualSpec: t`Two draggable foci and a slider for $k$. A toggle switches between sum and difference; as $k$ passes $d$, the ellipse squashes to a segment and vanishes (or the hyperbola branch flattens to a ray).`,
  },
  misconceptions: [
    {
      id: "C28-M1",
      mistake: "Not comparing the constant with the distance between the foci",
      remediation: t`Find $d = |a - b|$ first: $k$ compared with $d$ decides between a curve, a segment or ray, and nothing at all.`,
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M2",
      mistake: "Mixing up the sum and the difference",
      remediation: "A constant **sum** gives an ellipse; a constant **difference** gives a hyperbola branch.",
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M3",
      mistake: "Giving both branches for a difference without absolute value",
      remediation: t`$|z - a| - |z - b| = k$ with $k > 0$ fixes which focus is farther: one branch only.`,
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M4",
      mistake: "Calling every locus with two moduli a circle",
      remediation: "A circle needs one centre and one distance. Two foci with a fixed sum or difference give an ellipse or a hyperbola.",
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C28-M5",
      mistake: t`Using half the focal distance as the greatest $|z|$`,
      remediation: t`The ellipse reaches out to half the sum, $\frac k2$, beyond the foci.`,
      fallback: { kind: "ext", topic: "conics" },
    },
    {
      id: "C28-M6",
      mistake: t`Using the whole sum as the greatest $|z|$`,
      remediation: t`The sum $k$ is the whole major axis; from the centre the ellipse reaches $\frac k2$.`,
      fallback: { kind: "ext", topic: "conics" },
    },
  ],
  items: [
    {
      id: "C28-Q1",
      source: { kind: "authored" },
      stem: t`$|z - 3| + |z + 3| = 10$ is:`,
      verify: { kind: "value", inputs: { a: "3", b: "-3", k: "10" }, params: { op: "classify", sign: "+" } },
      options: [
        { key: "A", text: t`one branch of a hyperbola`, correct: false, misconceptionId: "C28-M2", value: "2" },
        { key: "B", text: t`a circle`, correct: false, misconceptionId: "C28-M4", value: "6" },
        { key: "C", text: t`an ellipse`, correct: true, value: "1" },
      ],
    },
    {
      id: "C28-Q2",
      source: { kind: "authored" },
      stem: t`$|z - 3| + |z + 3| = 6$ is:`,
      verify: { kind: "value", inputs: { a: "3", b: "-3", k: "6" }, params: { op: "classify", sign: "+" } },
      options: [
        { key: "A", text: t`a circle`, correct: false, misconceptionId: "C28-M4", value: "6" },
        { key: "B", text: t`the line segment joining $3$ and $-3$`, correct: true, value: "3" },
        { key: "C", text: t`an ellipse`, correct: false, misconceptionId: "C28-M1", value: "1" },
        { key: "D", text: t`one branch of a hyperbola`, correct: false, misconceptionId: "C28-M2", value: "2" },
      ],
    },
    {
      id: "C28-Q3",
      source: { kind: "authored" },
      stem: t`$|z - 2| + |z + 2| = 3$ is:`,
      verify: { kind: "value", inputs: { a: "2", b: "-2", k: "3" }, params: { op: "classify", sign: "+" } },
      options: [
        { key: "A", text: t`an ellipse`, correct: false, misconceptionId: "C28-M1", value: "1" },
        { key: "B", text: t`one branch of a hyperbola`, correct: false, misconceptionId: "C28-M2", value: "2" },
        { key: "C", text: t`a circle`, correct: false, misconceptionId: "C28-M4", value: "6" },
        { key: "D", text: t`no points at all`, correct: true, value: "5" },
      ],
    },
    {
      id: "C28-Q4",
      source: { kind: "authored" },
      stem: t`$|z - 4| - |z + 4| = 6$ is:`,
      verify: { kind: "value", inputs: { a: "4", b: "-4", k: "6" }, params: { op: "classify", sign: "-" } },
      options: [
        { key: "A", text: t`one branch of a hyperbola`, correct: true, value: "2" },
        { key: "B", text: t`both branches of a hyperbola`, correct: false, misconceptionId: "C28-M3", value: "7" },
        { key: "C", text: t`an ellipse`, correct: false, misconceptionId: "C28-M2", value: "1" },
        { key: "D", text: t`a circle`, correct: false, misconceptionId: "C28-M4", value: "6" },
      ],
    },
    {
      id: "C28-Q5",
      source: { kind: "authored" },
      stem: t`$|z + 3| - |z - 3| = 6$ is:`,
      verify: { kind: "value", inputs: { a: "-3", b: "3", k: "6" }, params: { op: "classify", sign: "-" } },
      options: [
        { key: "A", text: t`one branch of a hyperbola`, correct: false, misconceptionId: "C28-M1", value: "2" },
        { key: "B", text: t`both branches of a hyperbola`, correct: false, misconceptionId: "C28-M3", value: "7" },
        { key: "C", text: t`an ellipse`, correct: false, misconceptionId: "C28-M2", value: "1" },
        { key: "D", text: t`a ray along the real axis, starting at $3$`, correct: true, value: "4" },
      ],
    },
    {
      id: "C28-Q6",
      source: { kind: "authored" },
      stem: t`On the locus $|z - 4| + |z + 4| = 10$, the greatest value of $|z|$ is:`,
      verify: { kind: "value", inputs: { a: "4", b: "-4", k: "10" }, params: { op: "max_mod" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C28-M5", value: "4" },
        { key: "C", text: t`$10$`, correct: false, misconceptionId: "C28-M6", value: "10" },
      ],
    },
  ],
};
