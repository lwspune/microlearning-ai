import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** The column heads T₁ to T₇, one term a unit apart (term k at x = k), above the two rows. */
const heads: FigureElement[] = ["T₁", "T₂", "T₃", "T₄", "T₅", "T₆", "T₇"].map(
  (label, i): FigureElement => ({ kind: "label", at: [i + 1, 4.1], label, labelAt: "n", tone: "muted", step: 1 }),
);

/** A row of seven terms: its expansion named at height `y`, and below it a dot per term with its power of x. */
const row = (y: number, name: string, powers: string[], step: number): FigureElement[] => [
  { kind: "label", at: [0.4, y], label: name, labelAt: "e", step },
  ...powers.map((label, i): FigureElement => ({ kind: "point", at: [i + 1, y - 0.7], label, labelAt: "s", step })),
];

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`In $\left(x + \dfrac{1}{x}\right)^6$ the term with no $x$ is the middle one, $T_4 = 20$. **Is the term with no $x$ in $\left(x^2 + \dfrac{1}{x}\right)^6$ the middle one too?**`,
    reveal: t`No. In $T_{r+1} = {}^6C_r (x^2)^{6-r}\left(\dfrac{1}{x}\right)^r$ the power of $x$ is $12 - 2r - r = 12 - 3r$. It is $0$ when $r = 4$, so the term is $T_5 = {}^6C_4 = 15$, not the middle term $T_4$. The $x^2$ pulls harder than the $\dfrac{1}{x}$, so the balance point moves.`,
  },
  explanation: {
    intuition: [
      t`Each term of an expansion like $\left(x^2 + \frac{1}{x}\right)^6$ is a number times a power of $x$.`,
      t`The **term independent of $x$**, or **constant term**, has no $x$ in it: its power of $x$ is $0$.`,
      t`Recall: the general term of $(a + b)^n$ is $T_{r+1} = {}^nC_r\,a^{n-r}\,b^r$.`,
      t`Its power of $x$ is $0$ where the powers of $x$ from $a$ and from $b$ cancel exactly.`,
      t`So write the power of $x$ in $T_{r+1}$, set it equal to $0$, and solve for $r$.`,
      t`The term is the number left, with everything from $^nC_r$, $a^{n-r}$ and $b^r$: constants and signs.`,
    ],
    formal: [
      {
        title: "Finding the constant term",
        points: [
          t`Step 1: write $T_{r+1} = {}^nC_r\,a^{n-r}\,b^r$.`,
          t`Split it into a number times a power of $x$.`,
          t`Step 2: set the power of $x$ equal to $0$, and solve for $r$.`,
          t`Step 3: the term independent of $x$ is $T_{r+1}$, the $(r+1)^{\text{th}}$ term.`,
          t`Its value is the number part, worked out at that $r$.`,
        ],
      },
      {
        title: "Keep the constants and sign",
        points: [
          t`The sign belongs to $b$: in $\left(x - \frac{2}{x^2}\right)^n$, $b = -\frac{2}{x^2}$.`,
          t`So the number part is $^nC_r(-2)^r$, which is negative when $r$ is odd.`,
          t`A constant inside a bracket is raised to the power too.`,
          t`So $(3x^2)^4 = 81x^8$, not $3x^8$.`,
        ],
      },
      {
        title: "Not always the middle term",
        points: [
          t`The **middle term** has as many terms before it as after it: of $7$ terms, $T_4$.`,
          t`In $\left(x + \frac{1}{x}\right)^6$ the powers of $x$ in $T_1$ to $T_7$ are $6, 4, 2, 0, -2, -4, -6$.`,
          t`The powers $1$ and $-1$ cancel evenly, so in any $\left(x + \frac{1}{x}\right)^{2m}$ the middle term is the constant.`,
          t`In $\left(x^2 + \frac{1}{x}\right)^6$ they are $12, 9, 6, 3, 0, -3, -6$.`,
          t`The $x^2$ pulls harder than the $\frac{1}{x}$, so the power $0$ moves to $T_5$, past the middle.`,
          t`So with unequal powers, don't take the middle term: solve for $r$.`,
        ],
        figure: {
          alt: "Two rows of seven dots, one dot for each term T1 to T7, with a dashed line down the middle term T4. Under each dot is its power of x. In the top row, for (x + 1/x)⁶, the powers go 6, 4, 2, 0, −2, −4, −6, and the power 0 on T4, the middle, is circled. In the bottom row, for (x² + 1/x)⁶, they go 12, 9, 6, 3, 0, −3, −6, and the power 0 on T5, one past the middle, is circled.",
          axes: "none",
          view: { x: [0.3, 7.7], y: [-0.9, 4.6] },
          elements: [
            ...heads,
            // The middle line, broken where it would cross T₄'s dots and their powers.
            { kind: "segment", from: [4, 2.85], to: [4, 3.9], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [4, 0.85], to: [4, 1.85], dashed: true, tone: "muted", step: 1 },
            { kind: "segment", from: [4, -0.5], to: [4, -0.15], dashed: true, tone: "muted", step: 1 },
            { kind: "label", at: [4, -0.5], label: "middle", labelAt: "s", tone: "muted", step: 1 },
            ...row(3.3, "(x + 1/x)⁶", ["x⁶", "x⁴", "x²", "x⁰", "x⁻²", "x⁻⁴", "x⁻⁶"], 2),
            { kind: "circle", centre: [4, 2.35], r: 0.5, tone: "good", step: 3 },
            ...row(1.3, "(x² + 1/x)⁶", ["x¹²", "x⁹", "x⁶", "x³", "x⁰", "x⁻³", "x⁻⁶"], 4),
            { kind: "circle", centre: [5, 0.35], r: 0.5, tone: "good", step: 5 },
          ],
        },
      },
      {
        title: "When there is no constant term",
        points: [
          t`$r$ counts terms, so it must be a whole number from $0$ to $n$.`,
          t`In $\left(x^2 - \frac{1}{x}\right)^8$ the power of $x$ in $T_{r+1}$ is $16 - 3r$.`,
          t`Setting $16 - 3r = 0$ gives $r = \frac{16}{3}$, not a whole number.`,
          t`So no term of this expansion is independent of $x$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the term independent of $x$ in the expansion of $\left(x - \dfrac{1}{2x^2}\right)^9$.`,
      steps: [
        t`$T_{r+1} = {}^9C_r\,x^{9-r}$ $\times \left(-\dfrac{1}{2x^2}\right)^r$ $= {}^9C_r\left(-\dfrac{1}{2}\right)^r x^{9-r-2r}$ $= {}^9C_r\left(-\dfrac{1}{2}\right)^r x^{9-3r}$.`,
        t`No $x$ means $9 - 3r = 0$, so $r = 3$: the term is $T_4$, the $4^{\text{th}}$ term.`,
        t`$T_4 = {}^9C_3\left(-\dfrac{1}{2}\right)^3$ $= 84 \times \left(-\dfrac{1}{8}\right)$ $= -\dfrac{21}{2}$. The sign stays: $r = 3$ is odd.`,
      ],
      answer: t`The term independent of $x$ is $T_4 = -\dfrac{21}{2}$.`,
    },
    visualSpec: t`A row of the terms $T_1, T_2, \ldots, T_{n+1}$, each labelled with its power of $x$; drag the powers $p$ and $q$ in $(ax^p + bx^q)^n$ and watch which term's power lands on $0$.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "The constant term is just nCr, without the constants of the two terms",
      remediation: t`$T_{r+1} = {}^nC_r\,a^{n-r}\,b^r$ includes the numbers inside $a$ and $b$. Raise each one to its power and multiply them with $^nC_r$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M2",
      mistake: "Dropping the minus sign of the second term",
      remediation: t`The sign belongs to $b$: with $b = -\dfrac{2}{x^2}$ the number part is $(-2)^r$, which is negative when $r$ is odd.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Taking the r found from the power of x as the term number",
      remediation: t`Solving the power of $x$ gives $r$, but the term is $T_{r+1}$, the $(r+1)^{\text{th}}$ term. Work out $T_{r+1}$ with that same $r$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: "Swapping the powers in the general term (nCr a^r b^(n-r)), so the term is counted from the wrong end",
      remediation: t`In $T_{r+1} = {}^nC_r\,a^{n-r}\,b^r$ the power $r$ goes on the second term $b$, and $r$ counts from the start: $T_1$ has $b^0$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M5",
      mistake: "Raising only x to the power, not the constant with it",
      remediation: t`A power applies to everything in the bracket: $(2x^2)^3 = 8x^6$, not $2x^6$. Raise the constants of $a$ and $b$ to $n - r$ and $r$.`,
      fallback: { kind: "ext", topic: "laws of indices" },
    },
    {
      id: "C04-M6",
      mistake: "Taking the middle term as the term independent of x",
      remediation: t`The middle term is constant only in expansions like $\left(x + \dfrac{1}{x}\right)^{2m}$, where the powers cancel evenly. Otherwise set the power of $x$ in $T_{r+1}$ equal to $0$ and solve for $r$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    t`C04-M2 shows only when $b$ is negative and $r$ is odd; for even $r$ it gives the key.`,
    t`C04-M4 and C04-M6 are position mistakes (which term); C04-M1, C04-M2 and C04-M5 are value mistakes; C04-M3 has both forms. C04-M4 and C04-M6 both give the key when $r = \frac{n}{2}$ (the constant term is the middle one, as in $\left(x + \frac{1}{x}\right)^{2m}$), and C04-M6 needs $n$ even.`,
    t`C04-M5 gives the key when $a^{n-r-1}b^{r-1} = 1$ (e.g. both constants $1$); draw items with a constant other than $\pm 1$.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q3(ii)" },
      stem: t`The term independent of $x$ in the expansion of $\left(x - \dfrac{2}{x^2}\right)^{15}$ is:`,
      verify: { kind: "value", inputs: { a: "1", p: "1", b: "-2", q: "-2", n: "15" } },
      options: [
        { key: "A", text: t`$96096$`, correct: false, misconceptionId: "C04-M2", value: "96096" },
        { key: "B", text: t`$-6006$`, correct: false, misconceptionId: "C04-M5", value: "-6006" },
        { key: "C", text: t`$-96096$`, correct: true, value: "-96096" },
        { key: "D", text: t`$3003$`, correct: false, misconceptionId: "C04-M1", value: "3003" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^{15}C_r\,x^{15-r}\left(-\dfrac{2}{x^2}\right)^r = {}^{15}C_r(-2)^r x^{15-3r}$.`,
          t`$15 - 3r = 0$ gives $r = 5$, so the term is $T_6$.`,
          t`$T_6 = {}^{15}C_5(-2)^5 = 3003 \times (-32) = -96096$. The sign stays because $r = 5$ is odd.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q3(v)" },
      stem: t`The constant term in the expansion of $\left(2x^2 - \dfrac{5}{x}\right)^{9}$ is:`,
      verify: { kind: "value", inputs: { a: "2", p: "2", b: "-5", q: "-1", n: "9" } },
      options: [
        { key: "A", text: t`$84$`, correct: false, misconceptionId: "C04-M1", value: "84" },
        { key: "B", text: t`$-6300000$`, correct: false, misconceptionId: "C04-M3", value: "-6300000" },
        { key: "C", text: t`$-840$`, correct: false, misconceptionId: "C04-M5", value: "-840" },
        { key: "D", text: t`$10500000$`, correct: true, value: "10500000" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^9C_r(2x^2)^{9-r}\left(-\dfrac{5}{x}\right)^r = {}^9C_r\,2^{9-r}(-5)^r x^{18-2r-r} = {}^9C_r\,2^{9-r}(-5)^r x^{18-3r}$.`,
          t`$18 - 3r = 0$ gives $r = 6$, so the term is $T_7$.`,
          t`$T_7 = {}^9C_6 \times 2^3 \times (-5)^6 = 84 \times 8 \times 15625 = 10500000$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q10(ii)" },
      stem: t`In the expansion of $\left(2x^2 - \dfrac{1}{x}\right)^{12}$, which term is independent of $x$?`,
      verify: { kind: "value", inputs: { a: "2", p: "2", b: "-1", q: "-1", n: "12" }, params: { ask: "position" } },
      options: [
        { key: "A", text: t`the $5^{\text{th}}$ term, $T_{5}$`, correct: false, misconceptionId: "C04-M4", value: "5" },
        { key: "B", text: t`the $7^{\text{th}}$ term, $T_{7}$`, correct: false, misconceptionId: "C04-M6", value: "7" },
        { key: "C", text: t`the $9^{\text{th}}$ term, $T_{9}$`, correct: true, value: "9" },
        { key: "D", text: t`the $8^{\text{th}}$ term, $T_{8}$`, correct: false, misconceptionId: "C04-M3", value: "8" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^{12}C_r(2x^2)^{12-r}\left(-\dfrac{1}{x}\right)^r = {}^{12}C_r\,2^{12-r}(-1)^r x^{24-3r}$.`,
          t`$24 - 3r = 0$ gives $r = 8$.`,
          t`The term is $T_{r+1} = T_9$, the $9^{\text{th}}$ term. (Its value is $^{12}C_8 \times 2^4 = 7920$.)`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q3(iii)" },
      stem: t`In the expansion of $\left(\sqrt{x} - \dfrac{3}{x^2}\right)^{10}$, which term is independent of $x$?`,
      verify: { kind: "value", inputs: { a: "1", p: "1/2", b: "-3", q: "-2", n: "10" }, params: { ask: "position" } },
      options: [
        { key: "A", text: t`the $2^{\text{nd}}$ term, $T_{2}$`, correct: false, misconceptionId: "C04-M3", value: "2" },
        { key: "B", text: t`the $9^{\text{th}}$ term, $T_{9}$`, correct: false, misconceptionId: "C04-M4", value: "9" },
        { key: "C", text: t`the $6^{\text{th}}$ term, $T_{6}$`, correct: false, misconceptionId: "C04-M6", value: "6" },
        { key: "D", text: t`the $3^{\text{rd}}$ term, $T_{3}$`, correct: true, value: "3" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^{10}C_r\left(\sqrt{x}\right)^{10-r}\left(-\dfrac{3}{x^2}\right)^r = {}^{10}C_r(-3)^r x^{\frac{10-r}{2}-2r} = {}^{10}C_r(-3)^r x^{\frac{10-5r}{2}}$.`,
          t`$\dfrac{10 - 5r}{2} = 0$ gives $r = 2$.`,
          t`The term is $T_{r+1} = T_3$, the $3^{\text{rd}}$ term. (Its value is $^{10}C_2(-3)^2 = 405$.)`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc II Q10(i)" },
      stem: t`The constant term in the expansion of $\left(\dfrac{4x^2}{3} + \dfrac{3}{2x}\right)^{9}$ is:`,
      verify: { kind: "value", inputs: { a: "4/3", p: "2", b: "3/2", q: "-1", n: "9" } },
      options: [
        { key: "A", text: t`$168$`, correct: false, misconceptionId: "C04-M5", value: "168" },
        { key: "B", text: t`$2268$`, correct: true, value: "2268" },
        { key: "C", text: t`$84$`, correct: false, misconceptionId: "C04-M1", value: "84" },
        { key: "D", text: t`$3024$`, correct: false, misconceptionId: "C04-M3", value: "3024" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^9C_r\left(\dfrac{4x^2}{3}\right)^{9-r}\left(\dfrac{3}{2x}\right)^r = {}^9C_r\left(\dfrac{4}{3}\right)^{9-r}\left(\dfrac{3}{2}\right)^r x^{18-3r}$.`,
          t`$18 - 3r = 0$ gives $r = 6$, so the term is $T_7$.`,
          t`$T_7 = {}^9C_6\left(\dfrac{4}{3}\right)^3\left(\dfrac{3}{2}\right)^6 = 84 \times \dfrac{64}{27} \times \dfrac{729}{64} = 84 \times 27 = 2268$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.3 Q3(i)" },
      stem: t`The term independent of $x$ in the expansion of $\left(2x + \dfrac{1}{3x^2}\right)^{9}$ is:`,
      verify: { kind: "value", inputs: { a: "2", p: "1", b: "1/3", q: "-2", n: "9" } },
      options: [
        { key: "A", text: t`$\frac{1792}{9}$`, correct: true, value: "1792/9" },
        { key: "B", text: t`$84$`, correct: false, misconceptionId: "C04-M1", value: "84" },
        { key: "C", text: t`$512$`, correct: false, misconceptionId: "C04-M3", value: "512" },
        { key: "D", text: t`$56$`, correct: false, misconceptionId: "C04-M5", value: "56" },
      ],
      solution: {
        steps: [
          t`$T_{r+1} = {}^9C_r(2x)^{9-r}\left(\dfrac{1}{3x^2}\right)^r = {}^9C_r\,2^{9-r}\left(\dfrac{1}{3}\right)^r x^{9-3r}$.`,
          t`$9 - 3r = 0$ gives $r = 3$, so the term is $T_4$.`,
          t`$T_4 = {}^9C_3 \times 2^6 \times \left(\dfrac{1}{3}\right)^3 = 84 \times 64 \times \dfrac{1}{27} = \dfrac{1792}{9}$.`,
        ],
      },
    },
  ],
};
