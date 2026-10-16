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
    intuition: [
      t`Treat $i$ like a letter, such as $x$, and use the algebra you already know.`,
      t`Collect **like terms**, terms of the same kind: numbers with numbers, $i$ terms with $i$ terms.`,
      t`So $(3 + i)(1 + i)$ multiplies out to $3 + 3i + i + i^2$, which is $3 + 4i + i^2$.`,
      t`Picture $3 + 4i$ as an arrow from where the axes cross: real part $3$ across, imaginary part $4$ up.`,
      t`The one new rule is $i^2 = -1$: the $i^2$ term is just the number $-1$.`,
      t`That number joins the real part: $3 - 1 = 2$, so the product is $2 + 4i$.`,
    ],
    figure: {
      alt: "Multiplying out (3 + i)(1 + i) gives 3 + 4i + i². The arrow to 3 + 4i goes 3 across and 4 up. The i² term is −1, so it moves the point one unit left, to the product 2 + 4i.",
      view: { x: [-1, 5], y: [-1, 5] },
      elements: [
        { kind: "segment", from: [0, 0], to: [3, 0], dashed: true, label: "3 across", labelAt: "n", tone: "muted", step: 4 },
        { kind: "segment", from: [3, 0], to: [3, 4], dashed: true, label: "4 up", labelAt: "e", tone: "muted", step: 4 },
        { kind: "vector", to: [3, 4], label: "3 + 4i", labelAt: "e", tone: "muted", step: 4 },
        { kind: "vector", from: [3, 4], to: [2, 4], step: 5 },
        { kind: "label", at: [2.5, 4.1], label: "i² = −1", labelAt: "n", step: 5 },
        { kind: "vector", to: [2, 4], label: "2 + 4i", labelAt: "w", step: 6 },
      ],
    },
    formal: [
      {
        title: "Adding complex numbers",
        points: [
          t`Take $z_1 = a + ib$ and $z_2 = c + id$, with $a, b, c, d$ real.`,
          t`To add them, add the real parts, then add the imaginary parts.`,
          t`So $z_1 + z_2 = (a + c) + i(b + d)$.`,
          t`For example, take $2 + i$ and $1 + 3i$.`,
          t`Their sum is $(2 + 1) + i(1 + 3)$, which is $3 + 4i$.`,
          t`Placing the arrow of $1 + 3i$ at the tip of $2 + i$ also ends at the sum.`,
        ],
        figure: {
          alt: "The arrows to 2 + i and 1 + 3i, and their sum 3 + 4i: real parts add to 3 and imaginary parts to 4. The arrow of 1 + 3i, moved to start at the tip of 2 + i, ends at 3 + 4i.",
          view: { x: [-1, 4.5], y: [-1, 5] },
          elements: [
            { kind: "vector", to: [2, 1], label: "2 + i", labelAt: "se", tone: "muted", step: 4 },
            { kind: "vector", to: [1, 3], label: "1 + 3i", labelAt: "nw", tone: "muted", step: 4 },
            { kind: "vector", to: [3, 4], label: "3 + 4i", labelAt: "ne", step: 5 },
            { kind: "vector", from: [2, 1], to: [3, 4], tone: "muted", step: 6 },
          ],
        },
      },
      {
        title: "Subtracting complex numbers",
        points: [
          t`To subtract, subtract the real parts, then subtract the imaginary parts.`,
          t`So $z_1 - z_2 = (a - c) + i(b - d)$.`,
          t`The minus applies to **both** parts of $z_2$: $-(c + id) = -c - id$.`,
          t`For example, start from $4 + 3i$ and take away $1 + 2i$.`,
          t`Taking away $1 + 2i$ moves the point $1$ left and $2$ down.`,
          t`It lands on $(4 - 1) + i(3 - 2)$, which is $3 + i$.`,
        ],
        figure: {
          alt: "The arrow to 4 + 3i. Taking away 1 + 2i moves its tip one unit left and two units down, to 3 + i.",
          view: { x: [-1, 5.5], y: [-1, 4] },
          elements: [
            { kind: "vector", to: [4, 3], label: "4 + 3i", labelAt: "ne", tone: "muted", step: 4 },
            { kind: "vector", from: [4, 3], to: [3, 1], step: 5 },
            { kind: "label", at: [3.6, 2], label: "− (1 + 2i)", labelAt: "e", step: 5 },
            { kind: "vector", to: [3, 1], label: "3 + i", labelAt: "se", step: 6 },
          ],
        },
      },
      {
        title: "Multiplying complex numbers",
        points: [
          t`Multiply every term by every term, as with $(x + 2)(x + 3)$: four products.`,
          t`For $(a + ib)(c + id)$, they are $ac + iad + ibc + i^2bd$.`,
          t`For $(1 + i)(4 + 2i)$, they are $4 + 2i + 4i + 2i^2$.`,
          t`Laid tip to tail, the first three reach $4 + 6i$.`,
          t`Use $i^2 = -1$: $i^2bd$ is the real number $-bd$, so $2i^2 = -2$.`,
          t`So the product is $(ac - bd) + i(ad + bc)$, here $2 + 6i$.`,
        ],
        figure: {
          alt: "The products 4, 2i and 4i of (1 + i)(4 + 2i), laid tip to tail: 4 across, then 2 up, then 4 up, reaching 4 + 6i. The last product, 2i², is −2, so it moves the point two units left, to the product 2 + 6i.",
          view: { x: [-1, 6], y: [-1, 7] },
          elements: [
            { kind: "vector", to: [4, 0], tone: "muted", step: 3 },
            { kind: "label", at: [2, 0.1], label: "4", labelAt: "n", tone: "muted", step: 3 },
            { kind: "vector", from: [4, 0], to: [4, 2], tone: "muted", step: 3 },
            { kind: "label", at: [4.1, 1], label: "2i", labelAt: "e", tone: "muted", step: 3 },
            { kind: "vector", from: [4, 2], to: [4, 6], tone: "muted", step: 3 },
            { kind: "label", at: [4.1, 4], label: "4i", labelAt: "e", tone: "muted", step: 3 },
            { kind: "point", at: [4, 6], label: "4 + 6i", labelAt: "e", tone: "muted", step: 4 },
            { kind: "vector", from: [4, 6], to: [2, 6], step: 5 },
            { kind: "label", at: [3, 6.1], label: "2i² = −2", labelAt: "n", step: 5 },
            { kind: "vector", to: [2, 6], label: "2 + 6i", labelAt: "w", step: 6 },
          ],
        },
      },
      {
        title: "Squaring a complex number",
        points: [
          t`To square $a + ib$, expand it like $(x + y)^2 = x^2 + 2xy + y^2$.`,
          t`So $(a + ib)^2$ equals $a^2 + 2abi + i^2b^2$: keep the middle term.`,
          t`For example, $(2 + i)^2$ is $4 + 4i + i^2$.`,
          t`Use $i^2 = -1$: the last term is the real number $-b^2$, here $-1$.`,
          t`So $(a + ib)^2 = (a^2 - b^2) + 2abi$.`,
          t`Here $(2 + i)^2 = 3 + 4i$.`,
        ],
        figure: {
          alt: "The arrow to 2 + i. Its square multiplies out to 4 + 4i + i²; the i² term is −1, so it moves the point 4 + 4i one unit left, to the square 3 + 4i.",
          view: { x: [-1, 5.5], y: [-1, 5] },
          elements: [
            { kind: "vector", to: [2, 1], label: "2 + i", labelAt: "se", tone: "muted", step: 3 },
            { kind: "point", at: [4, 4], label: "4 + 4i", labelAt: "e", tone: "muted", step: 3 },
            { kind: "vector", from: [4, 4], to: [3, 4], step: 4 },
            { kind: "label", at: [3.5, 4.1], label: "i² = −1", labelAt: "n", step: 4 },
            { kind: "vector", to: [3, 4], label: "3 + 4i", labelAt: "w", step: 6 },
          ],
        },
      },
    ],
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
