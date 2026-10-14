import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`You know $(x + 2)(x + 3) = x^2 + 5x + 6$. **What changes when the letter is $i$?**`,
    reveal: t`Only one thing: $i \cdot i = i^2 = -1$. So $(2 + i)(3 + i) = 6 + 5i + i^2 = 5 + 5i$.`,
  },
  explanation: {
    intuition: t`Treat $i$ like a letter: collect like terms and multiply out brackets as usual. The one new rule is $i^2 = -1$. It turns an $i^2$ term into an ordinary number, which then joins the real part.`,
    formal: t`For $z_1 = a + ib$ and $z_2 = c + id$:
- Add: $z_1 + z_2 = (a + c) + i(b + d)$
- Subtract: $z_1 - z_2 = (a - c) + i(b - d)$. The minus applies to **both** parts of $z_2$.
- Multiply: $(a + ib)(c + id) = ac + iad + ibc + i^2bd = (ac - bd) + i(ad + bc)$
- Square: $(a + ib)^2 = a^2 + 2abi + i^2b^2 = (a^2 - b^2) + 2abi$`,
    worked: {
      prompt: t`Simplify $(4 - i)(2 + 3i) - (1 + 2i)$.`,
      steps: [
        t`Multiply out all four terms: $8 + 12i - 2i - 3i^2$.`,
        t`Use $i^2 = -1$: $-3i^2 = +3$, so the product is $11 + 10i$.`,
        t`Subtract both parts: $(11 - 1) + i(10 - 2) = 10 + 8i$.`,
      ],
      answer: t`$10 + 8i$`,
      figure: {
        alt: "The product 11 + 10i as a point; subtracting 1 + 2i moves it one unit left and two down, to 10 + 8i.",
        view: { x: [-1, 14], y: [-1, 12] },
        elements: [
          { kind: "vector", to: [11, 10], tone: "muted", step: 2 },
          { kind: "point", at: [11, 10], label: "11 + 10i", labelAt: "e", step: 2 },
          { kind: "vector", from: [11, 10], to: [10, 8], step: 3 },
          { kind: "label", at: [10.5, 9], label: "− (1 + 2i)", labelAt: "e", tone: "muted", step: 3 },
          { kind: "point", at: [10, 8], label: "10 + 8i", labelAt: "se", step: 3 },
        ],
      },
    },
    figure: {
      alt: "Adding 2 + i and 1 + 3i: the real parts add to 3 and the imaginary parts to 4, so the sum 3 + 4i is the far corner of the parallelogram the two arrows make.",
      view: { x: [-1, 5], y: [-1, 5] },
      elements: [
        { kind: "vector", to: [2, 1], label: "2 + i", labelAt: "se", tone: "muted", step: 1 },
        { kind: "vector", to: [1, 3], label: "1 + 3i", labelAt: "nw", tone: "muted", step: 2 },
        { kind: "segment", from: [2, 1], to: [3, 4], dashed: true, tone: "muted", step: 3 },
        { kind: "segment", from: [1, 3], to: [3, 4], dashed: true, tone: "muted", step: 3 },
        { kind: "vector", to: [3, 4], label: "3 + 4i", labelAt: "ne", step: 4 },
      ],
    },
    visualSpec: t`Two sliders set $z_1$ and $z_2$. The product's four partial terms ($ac$, $iad$, $ibc$, $i^2bd$) appear as tiles; the $i^2bd$ tile visibly flips its sign and slides across into the real part.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Using $i^2 = +1$ when multiplying`,
      remediation: t`$i^2 = -1$, so the $i \cdot i$ term changes sign when it joins the real part. Recheck that term.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: t`Multiplying real parts together and imaginary parts together, with no cross terms`,
      remediation: t`Multiply every term by every term, as with $(x + 2)(x + 3)$. There are four products, including the two cross terms $iad$ and $ibc$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: "Applying a minus sign to the real part only",
      remediation: t`Subtracting $c + id$ subtracts both parts: $-(c + id) = -c - id$. Put the second number in brackets first.`,
      fallback: { kind: "ext", topic: "removing brackets after a minus sign" },
    },
    {
      id: "C04-M4",
      mistake: t`Dropping the $i^2$ term`,
      remediation: t`The $i \cdot i$ term doesn't vanish. It becomes $-1$ times its coefficient, a real number that changes the real part.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M5",
      mistake: t`Squaring term by term: $(a + ib)^2 = a^2 - b^2$`,
      remediation: t`$(a + ib)^2$ has a middle term, just like $(x + y)^2 = x^2 + 2xy + y^2$. You're missing $2abi$.`,
      fallback: { kind: "ext", topic: "expanding (x + y)²" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "authored" },
      stem: t`$(2 + 3i)(1 - i) = ?$`,
      verify: { kind: "value", inputs: { p: "2+3*I", q: "1-I" }, params: { op: "mul" } },
      options: [
        { key: "A", text: t`$5 + i$`, correct: true, value: "5+I" },
        { key: "B", text: t`$-1 + i$`, correct: false, misconceptionId: "C04-M1", value: "-1+I" },
        { key: "C", text: t`$2 - 3i$`, correct: false, misconceptionId: "C04-M2", value: "2-3*I" },
        { key: "D", text: t`$2 + i$`, correct: false, misconceptionId: "C04-M4", value: "2+I" },
      ],
      solution: {
        steps: [
          t`Multiply out all four terms: $2 - 2i + 3i - 3i^2$.`,
          t`Use $i^2 = -1$: $-3i^2 = +3$.`,
          t`Collect: $(2 + 3) + (-2 + 3)i = 5 + i$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "authored" },
      stem: t`$(3 + 2i)^2 = ?$`,
      verify: { kind: "value", inputs: { p: "3+2*I" }, params: { op: "sq" } },
      options: [
        { key: "A", text: t`$5 + 12i$`, correct: true, value: "5+12*I" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C04-M5", value: "5" },
        { key: "C", text: t`$13 + 12i$`, correct: false, misconceptionId: "C04-M1", value: "13+12*I" },
        { key: "D", text: t`$9 + 12i$`, correct: false, misconceptionId: "C04-M4", value: "9+12*I" },
      ],
      solution: {
        steps: [
          t`Expand like $(x + y)^2$: $9 + 12i + 4i^2$.`,
          t`Use $i^2 = -1$: $4i^2 = -4$.`,
          t`Collect: $(9 - 4) + 12i = 5 + 12i$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`$(6 + i) - (2 - 3i)(1 + i) = ?$`,
      verify: { kind: "value", inputs: { p: "6+I", q: "2-3*I", r: "1+I" }, params: { op: "sub_mul" } },
      options: [
        { key: "A", text: t`$1 + 2i$`, correct: true, value: "1+2*I" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C04-M3", value: "1" },
        { key: "C", text: t`$7 + 2i$`, correct: false, misconceptionId: "C04-M1", value: "7+2*I" },
        { key: "D", text: t`$4 + 2i$`, correct: false, misconceptionId: "C04-M4", value: "4+2*I" },
      ],
      solution: {
        steps: [
          t`Multiply first: $(2 - 3i)(1 + i) = 2 + 2i - 3i - 3i^2$.`,
          t`Use $i^2 = -1$: the product is $5 - i$.`,
          t`Subtract both parts: $(6 - 5) + \big(1 - (-1)\big)i = 1 + 2i$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`$(1 + 2i)(3 + i) = ?$`,
      verify: { kind: "value", inputs: { p: "1+2*I", q: "3+I" }, params: { op: "mul" } },
      options: [
        { key: "A", text: t`$1 + 7i$`, correct: true, value: "1+7*I" },
        { key: "B", text: t`$5 + 7i$`, correct: false, misconceptionId: "C04-M1", value: "5+7*I" },
        { key: "C", text: t`$3 + 2i$`, correct: false, misconceptionId: "C04-M2", value: "3+2*I" },
        { key: "D", text: t`$3 + 7i$`, correct: false, misconceptionId: "C04-M4", value: "3+7*I" },
      ],
      solution: {
        steps: [
          t`Multiply out all four terms: $3 + i + 6i + 2i^2$.`,
          t`Use $i^2 = -1$: $2i^2 = -2$.`,
          t`Collect: $(3 - 2) + 7i = 1 + 7i$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`$(1 - 2i)^2 = ?$`,
      verify: { kind: "value", inputs: { p: "1-2*I" }, params: { op: "sq" } },
      options: [
        { key: "A", text: t`$-3 - 4i$`, correct: true, value: "-3-4*I" },
        { key: "B", text: t`$-3$`, correct: false, misconceptionId: "C04-M5", value: "-3" },
        { key: "C", text: t`$5 - 4i$`, correct: false, misconceptionId: "C04-M1", value: "5-4*I" },
        { key: "D", text: t`$1 - 4i$`, correct: false, misconceptionId: "C04-M4", value: "1-4*I" },
      ],
      solution: {
        steps: [
          t`Expand like $(x - y)^2$: $1 - 4i + 4i^2$.`,
          t`Use $i^2 = -1$: $4i^2 = -4$.`,
          t`Collect: $(1 - 4) - 4i = -3 - 4i$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "authored" },
      stem: t`$(3 - 2i) - (1 + i)(2 - i) = ?$`,
      verify: { kind: "value", inputs: { p: "3-2*I", q: "1+I", r: "2-I" }, params: { op: "sub_mul" } },
      options: [
        { key: "A", text: t`$-3i$`, correct: true, value: "-3*I" },
        { key: "B", text: t`$-i$`, correct: false, misconceptionId: "C04-M3", value: "-I" },
        { key: "C", text: t`$2 - 3i$`, correct: false, misconceptionId: "C04-M1", value: "2-3*I" },
        { key: "D", text: t`$1 - 3i$`, correct: false, misconceptionId: "C04-M4", value: "1-3*I" },
      ],
      solution: {
        steps: [
          t`Multiply first: $(1 + i)(2 - i) = 2 - i + 2i - i^2$.`,
          t`Use $i^2 = -1$: the product is $3 + i$.`,
          t`Subtract both parts: $(3 - 3) + (-2 - 1)i = -3i$.`,
        ],
      },
    },
  ],
};
