import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Fill the box so the ratio carries on: $4 : 6 = 6 : \square$.`,
    reveal: t`$\dfrac{4}{6} = \dfrac{6}{c}$ gives $4c = 36$, so $c = 9$. Then $4$, $6$, $9$ are in continued proportion: $6^2 = 36 = 4 \times 9$.`,
  },
  explanation: {
    intuition: [
      t`In $2$, $6$, $18$, each number is $3$ times the one before.`,
      t`So $2 : 6$ and $6 : 18$ are the same ratio, $1 : 3$.`,
      t`The middle number $6$ belongs to both ratios.`,
      t`Such numbers are **in continued proportion**: one ratio carries on to the next.`,
      t`The middle number comes from multiplying, not adding: $6 \times 6 = 2 \times 18$.`,
    ],
    formal: [
      {
        title: "Continued proportion",
        points: [
          t`Three numbers $a$, $b$, $c$ are **in continued proportion** when $\dfrac{a}{b} = \dfrac{b}{c}$.`,
          t`Cross-multiply: $b \times b = a \times c$, so $b^2 = ac$.`,
          t`$b$ is called the **mean proportional** (or **geometric mean**) of $a$ and $c$.`,
          t`Example: $2$, $6$, $18$, since $\dfrac{2}{6} = \dfrac{6}{18} = \dfrac{1}{3}$.`,
          t`And $6^2 = 36 = 2 \times 18$.`,
        ],
      },
      {
        title: "Checking three numbers",
        points: [
          t`To check $a$, $b$, $c$, compare $b^2$ with $ac$.`,
          t`$2$, $4$, $8$: $4^2 = 16$ and $2 \times 8 = 16$. Equal, so they are in continued proportion.`,
          t`$3$, $5$, $8$: $5^2 = 25$ but $3 \times 8 = 24$. Not equal, so they are not.`,
          t`Equal steps are not enough: $1$, $2$, $3$ go up by $1$, but $2^2 \neq 1 \times 3$.`,
          t`Always square the **middle** term, never an end term.`,
        ],
      },
      {
        title: "Finding a missing term",
        points: [
          t`From $b^2 = ac$, the mean proportional is $b = \sqrt{ac}$.`,
          t`Mean proportional of $2$ and $18$: $b^2 = 36$, so $b = 6$.`,
          t`It is not the average: $\dfrac{2 + 18}{2} = 10$, and $10^2 \neq 2 \times 18$.`,
          t`For a missing end term, use $b^2 = ac$ and divide.`,
          t`Example: $5$, $10$, $c$ gives $10^2 = 5c$, so $c = 20$.`,
          t`With letters: $3a$, $6ab$, $c$ gives $36a^2b^2 = 3a \times c$, so $c = 12ab^2$.`,
        ],
      },
      {
        title: "The number to subtract",
        points: [
          t`Let $x$ be subtracted from each of three numbers.`,
          t`For continued proportion: $(\text{middle} - x)^2$ $= (\text{first} - x)(\text{last} - x)$.`,
          t`Expand with $(p - x)^2 = p^2 - 2px + x^2$. Keep the $2$.`,
          t`The $x^2$ terms cancel, leaving a simple equation in $x$.`,
          t`Divide by the coefficient of $x$ with its sign. The answer may be negative.`,
          t`Check by putting $x$ back: the middle term squared must equal the product of the ends.`,
        ],
      },
      {
        title: "More than three numbers",
        points: [
          t`Numbers are in continued proportion when each one is $k$ times the one before.`,
          t`So five such numbers are $a$, $ak$, $ak^2$, $ak^3$, $ak^4$.`,
          t`Example: first term $5$, last term $80$: $5k^4 = 80$, so $k^4 = 16$ and $k = 2$.`,
          t`The numbers are $5$, $10$, $20$, $40$, $80$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which number should be subtracted from $7$, $12$ and $18$ so that the resulting numbers are in continued proportion?`,
      steps: [
        t`Let $x$ be subtracted. Then $(7 - x)$, $(12 - x)$, $(18 - x)$ are in continued proportion.`,
        t`The middle term squared equals the product of the ends: $(12 - x)^2 = (7 - x)(18 - x)$.`,
        t`Expand: $144 - 24x + x^2$ $= 126 - 25x + x^2$.`,
        t`Cancel $x^2$: $-24x + 25x = 126 - 144$, so $x = -18$.`,
        t`Check: subtracting $-18$ gives $25$, $30$, $36$, and $30^2 = 900 = 25 \times 36$.`,
      ],
      answer: t`$-18$ should be subtracted (that is, $18$ should be added).`,
    },
    visualSpec: t`Three bars a, b, c whose lengths can be dragged; the ratios a : b and b : c are shown side by side, with a b-by-b square beside an a-by-c rectangle, and both light up when b^2 = ac.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Takes the mean proportional as the average of the two ends: b = (a + c)/2",
      remediation: t`In continued proportion the **ratios** are equal, not the differences. The middle term satisfies $b^2 = ac$, not $2b = a + c$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M2",
      mistake: "Forgets the square: writes b = ac instead of b^2 = ac",
      remediation: t`$\dfrac{a}{b} = \dfrac{b}{c}$ cross-multiplies to $b \times b = a \times c$. So $b^2 = ac$; then take the square root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Squares the first term instead of the middle one: writes a^2 = bc",
      remediation: t`Only the middle term, the one shared by both ratios, is squared. For $a$, $b$, $c$ the rule is $b^2 = ac$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Loses a minus sign while solving the last linear equation, so the answer has the wrong sign",
      remediation: t`Move terms and divide with their signs. Then check: put $x$ back and test that the middle term squared equals the product of the ends.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Expands (p - x)^2 as p^2 - px + x^2, forgetting the 2 in the middle term",
      remediation: t`$(p - x)^2 = p^2 - 2px + x^2$. The middle term is $2px$, not $px$.`,
      fallback: { kind: "ext", topic: "the square of a difference, (a - b)^2 (Std VIII)" },
    },
    {
      id: "C08-M6",
      mistake: "Halves the product instead of taking its square root: b = ac/2",
      remediation: t`$b^2 = ac$ means $b$ is the **square root** of $ac$. For example, $\sqrt{36} = 6$, not $18$.`,
      fallback: { kind: "ext", topic: "square roots (Std VIII)" },
    },
  ],
  engineNotes: [
    "C08-M1 and C08-M2 need a question that asks for the mean proportional or a missing term; C08-M6 needs a mean proportional question. C08-M3 needs a missing end term or a number to subtract. C08-M4 and C08-M5 need a number-to-subtract question.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q1(v)" },
      stem: t`What is the mean proportional of $4$ and $25$?`,
      verify: { kind: "value", inputs: { a: "4", c: "25" }, params: { kind: "mean" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$\frac{29}{2}$`, correct: false, misconceptionId: "C08-M1", value: "29/2" },
        { key: "C", text: t`$100$`, correct: false, misconceptionId: "C08-M2", value: "100" },
        { key: "D", text: t`$50$`, correct: false, misconceptionId: "C08-M6", value: "50" },
      ],
      solution: {
        steps: [
          t`Let $b$ be the mean proportional of $4$ and $25$. Then $b^2 = 4 \times 25 = 100$.`,
          t`$b = \sqrt{100} = 10$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Prob Q4(iii)" },
      stem: t`$x$, $12$, $16$ are in continued proportion. Find $x$.`,
      verify: { kind: "value", inputs: { b: "12", c: "16" }, params: { kind: "first" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C08-M1", value: "8" },
        { key: "B", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C08-M2", value: "3/4" },
        { key: "C", text: t`$8 \sqrt{3}$`, correct: false, misconceptionId: "C08-M3", value: "8*sqrt(3)" },
        { key: "D", text: t`$9$`, correct: true, value: "9" },
      ],
      solution: {
        steps: [
          t`$x$, $12$, $16$ are in continued proportion, so $12^2 = 16x$.`,
          t`$144 = 16x$, so $x = 9$.`,
          t`Check: $\dfrac{9}{12} = \dfrac{12}{16} = \dfrac{3}{4}$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.5 Q1" },
      stem: t`Which number should be subtracted from $12$, $16$ and $21$ so that the resulting numbers are in continued proportion?`,
      verify: { kind: "value", inputs: { a: "12", b: "16", c: "21" }, params: { kind: "sub" } },
      options: [
        { key: "A", text: t`$\frac{192}{13}$`, correct: false, misconceptionId: "C08-M3", value: "192/13" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C08-M4", value: "4" },
        { key: "C", text: t`$- \frac{4}{17}$`, correct: false, misconceptionId: "C08-M5", value: "-4/17" },
        { key: "D", text: t`$-4$`, correct: true, value: "-4" },
      ],
      solution: {
        steps: [
          t`Let $x$ be subtracted: $(16 - x)^2 = (12 - x)(21 - x)$.`,
          t`Expand: $256 - 32x + x^2$ $= 252 - 33x + x^2$.`,
          t`$-32x + 33x = 252 - 256$, so $x = -4$.`,
          t`Check: the numbers become $16$, $20$, $25$, and $20^2 = 400 = 16 \times 25$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/4.5 SolvedEx.2" },
      stem: t`If $4a^2b$, $8ab^2$, $p$ are in continued proportion, find $p$.`,
      verify: { kind: "value", inputs: { a: "4*a**2*b", b: "8*a*b**2" }, params: { kind: "third" } },
      options: [
        { key: "A", text: t`$\dfrac{2b}{a}$`, correct: false, misconceptionId: "C08-M2", value: "2*b/a" },
        { key: "B", text: t`$2a^3$`, correct: false, misconceptionId: "C08-M3", value: "2*a**3" },
        { key: "C", text: t`$16b^3$`, correct: true, value: "16*b**3" },
        { key: "D", text: t`$16ab^2 - 4a^2b$`, correct: false, misconceptionId: "C08-M1", value: "4*a*b*(-a + 4*b)" },
      ],
      solution: {
        steps: [
          t`$\dfrac{4a^2b}{8ab^2} = \dfrac{8ab^2}{p}$, so $(8ab^2)^2 = 4a^2b \times p$.`,
          t`$64a^2b^4 = 4a^2b \times p$.`,
          t`$p = \dfrac{64a^2b^4}{4a^2b} = 16b^3$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/ratio-proportion-9/Ex 4.5 Q2" },
      stem: t`If $(24 - x)$ is the mean proportional of $(20 - x)$ and $(12 - x)$, find $x$.`,
      verify: { kind: "value", inputs: { a: "20", b: "24", c: "12" }, params: { kind: "sub" } },
      options: [
        { key: "A", text: t`$-42$`, correct: false, misconceptionId: "C08-M5", value: "-42" },
        { key: "B", text: t`$21$`, correct: true, value: "21" },
        { key: "C", text: t`$28$`, correct: false, misconceptionId: "C08-M3", value: "28" },
        { key: "D", text: t`$-21$`, correct: false, misconceptionId: "C08-M4", value: "-21" },
      ],
      solution: {
        steps: [
          t`$(24 - x)^2 = (20 - x)(12 - x)$.`,
          t`Expand: $576 - 48x + x^2$ $= 240 - 32x + x^2$.`,
          t`$-48x + 32x = 240 - 576$, so $-16x = -336$.`,
          t`$x = 21$.`,
        ],
      },
    },
  ],
};
