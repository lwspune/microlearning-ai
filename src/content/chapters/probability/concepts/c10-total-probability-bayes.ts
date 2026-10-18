import type { Concept, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** Probability-tree layout: the start, the column of causes, the column of results. */
const ROOT: Pt = [0.3, 0];
const CAUSE_X = 2.8;
const LEAF_X = 5.3;
/** Products sit right of the leaves' "A" labels; a branch's chance sits above its leaf. */
const PRODUCT_X = 5.9;
const SUB = ["₁", "₂", "₃"];

const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const cause = (y: number): Pt => [CAUSE_X, y];
const leafA = (y: number, d: number): Pt => [LEAF_X, y + d];

/**
 * A probability tree with a cause at each height in `ys`; from each, a branch up to A and one
 * down to "not A", `d` apart. `steps` says when the causes, their chances and the A branches appear.
 */
function tree(ys: number[], d: number, steps: { cause?: number; prior?: number; branch?: number }): FigureElement[] {
  const els: FigureElement[] = [{ kind: "point", at: ROOT, tone: "muted" }];
  ys.forEach((y, k) => {
    const s = SUB[k];
    const c = cause(y);
    const a = leafA(y, d);
    const notA: Pt = [LEAF_X, y - d];
    els.push(
      { kind: "segment", from: ROOT, to: c, step: steps.cause },
      { kind: "point", at: c, label: `E${s}`, labelAt: y < 0 ? "s" : "n", step: steps.cause },
      { kind: "label", at: mid(ROOT, c), label: `P(E${s})`, labelAt: y > 0 ? "nw" : y < 0 ? "sw" : "n", step: steps.prior },
      { kind: "segment", from: c, to: a, step: steps.branch },
      { kind: "point", at: a, label: "A", labelAt: "e", step: steps.branch },
      { kind: "label", at: a, label: `P(A | E${s})`, labelAt: "nw", step: steps.branch },
      { kind: "segment", from: c, to: notA, tone: "muted", step: steps.branch },
      { kind: "point", at: notA, label: "not A", labelAt: "e", tone: "muted", step: steps.branch },
    );
  });
  return els;
}

/** The chance of the route through cause k (0-based), written right of its A leaf. */
const product = (y: number, d: number, k: number, step?: number): FigureElement => ({
  kind: "label",
  at: [PRODUCT_X, y + d],
  label: `P(E${SUB[k]})·P(A | E${SUB[k]})`,
  labelAt: "e",
  step,
});

/** The route through a cause, from the start to its A leaf, redrawn in the "good" tone. */
const route = (y: number, d: number, step?: number): FigureElement[] => [
  { kind: "segment", from: ROOT, to: cause(y), tone: "good", step },
  { kind: "segment", from: cause(y), to: leafA(y, d), tone: "good", step },
];

/** The formal slides' tree: three causes. */
const YS3 = [2.4, 0, -2.4];
const D3 = 0.6;
const VIEW3 = { x: [0, 10] as [number, number], y: [-4.7, 3.5] as [number, number] };

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A disease affects $1$ person in $100$. A test is positive for $99\%$ of people who have it, and also for $1\%$ of people who don't. You test positive. **Is it $99\%$ likely that you have the disease?**`,
    reveal: t`No, only $50\%$. Picture $10000$ people: $100$ have the disease and $99$ of them test positive; $9900$ don't, and $1\%$ of them, another $99$, test positive too. Of the $198$ positives, only $99$ are ill. By Bayes' theorem, $\frac{(0.01)(0.99)}{(0.01)(0.99) + (0.99)(0.01)} = \frac{1}{2}$.`,
  },
  explanation: {
    intuition: [
      t`An event $A$ can happen through several **causes**: a ball may be drawn from bag I, $E_1$, or from bag II, $E_2$.`,
      t`In a **probability tree**, each branch from the start is a cause, marked with its chance $P(E_j)$.`,
      t`From each cause, branches lead to $A$ and to not $A$; the $A$ branch carries $P(A \mid E_j)$, the chance of $A$ given $E_j$.`,
      t`A **route** runs from the start to an $A$; its chance is its two branches multiplied, $P(E_j)\,P(A \mid E_j)$.`,
      t`Add the routes that end in $A$, and you have $P(A)$.`,
      t`Now work backwards: once $A$ has happened, the chance it came through $E_1$ is that route's share of $P(A)$.`,
    ],
    figure: {
      alt: "A probability tree. From the start, two branches lead to the causes E₁ (bag I) and E₂ (bag II), marked P(E₁) and P(E₂). From each cause one branch leads to A, marked P(A | E₁) or P(A | E₂), and one to not A. Beside each A is its route's chance, P(E₁)·P(A | E₁) and P(E₂)·P(A | E₂). Below: P(A) is the sum of both A routes, and the route through E₁, picked out, divided by P(A) gives P(E₁ | A).",
      axes: "none",
      view: { x: [0, 10], y: [-4.3, 3.3] },
      elements: [
        ...tree([1.6, -1.6], 0.8, { cause: 1, prior: 2, branch: 3 }),
        product(1.6, 0.8, 0, 4),
        product(-1.6, 0.8, 1, 4),
        { kind: "label", at: [0.2, -3.2], label: "P(A) = sum of both A routes", labelAt: "e", step: 5 },
        ...route(1.6, 0.8, 6),
        { kind: "label", at: [0.2, -3.95], label: "P(E₁ | A) = E₁ route ÷ P(A)", labelAt: "e", tone: "good", step: 6 },
      ],
    },
    formal: [
      {
        title: "Causes that split the space",
        points: [
          t`Take causes $E_1, E_2, \dots, E_n$ that are mutually exclusive and exhaustive.`,
          t`Recall: then exactly one of them happens, so they split the sample space $S$ into parts.`,
          t`Each cause has a chance above zero: $P(E_j) > 0$.`,
          t`Then $A$ splits into the pieces $A \cap E_1, \dots, A \cap E_n$, no two of which overlap.`,
          t`By the multiplication theorem, $P(A \cap E_j)$ equals $P(E_j)\,P(A \mid E_j)$.`,
          t`The book writes $P(A \mid E_j)$ as $P(A/E_j)$.`,
        ],
        figure: {
          alt: "A rectangle, the sample space S, cut by two upright lines into three strips, the causes E₁, E₂ and E₃. An oval, the event A, crosses all three strips, so it splits into the pieces A ∩ E₁, A ∩ E₂ and A ∩ E₃.",
          axes: "none",
          view: { x: [-0.4, 9.4], y: [-0.9, 4.8] },
          elements: [
            { kind: "segment", from: [0, 0], to: [9, 0], tone: "muted" },
            { kind: "segment", from: [9, 0], to: [9, 4.4], tone: "muted" },
            { kind: "segment", from: [9, 4.4], to: [0, 4.4], tone: "muted" },
            { kind: "segment", from: [0, 4.4], to: [0, 0], tone: "muted" },
            { kind: "label", at: [0, 4.4], label: "S", labelAt: "se", tone: "muted" },
            { kind: "segment", from: [3, 0], to: [3, 4.4], step: 1 },
            { kind: "segment", from: [6, 0], to: [6, 4.4], step: 1 },
            { kind: "label", at: [1.5, 0], label: "E₁", labelAt: "s", step: 1 },
            { kind: "label", at: [4.5, 0], label: "E₂", labelAt: "s", step: 1 },
            { kind: "label", at: [7.5, 0], label: "E₃", labelAt: "s", step: 1 },
            { kind: "ellipse", centre: [4.5, 2.2], rx: 3, ry: 1.3, tone: "good", step: 4 },
            { kind: "label", at: [4.5, 3.5], label: "A", labelAt: "n", tone: "good", step: 4 },
            { kind: "label", at: [2.25, 2], label: "A ∩ E₁", labelAt: "n", step: 4 },
            { kind: "label", at: [4.5, 2], label: "A ∩ E₂", labelAt: "n", step: 4 },
            { kind: "label", at: [6.75, 2], label: "A ∩ E₃", labelAt: "n", step: 4 },
          ],
        },
      },
      {
        title: "The total probability theorem",
        points: [
          t`The **total probability theorem** finds $P(A)$ by adding the chances of all the routes to $A$.`,
          t`The routes don't overlap, because the causes are mutually exclusive, so their chances add.`,
          t`$P(A)$ equals $P(E_1)\,P(A \mid E_1)$ $+ \dots + P(E_n)\,P(A \mid E_n)$.`,
          t`$\sum_j$, read "sum over $j$", means: add up the term for every cause $E_j$.`,
          t`In short, $P(A) = \sum_j P(E_j)\,P(A \mid E_j)$.`,
        ],
        figure: {
          alt: "A probability tree with three causes, E₁, E₂ and E₃, marked P(E₁), P(E₂), P(E₃); from each, a branch to A marked P(A | E₁), P(A | E₂), P(A | E₃), and a branch to not A. The three routes to A are picked out, each with its chance beside it, P(E₁)·P(A | E₁) and so on. Below: P(A) is the sum of the three routes.",
          axes: "none",
          view: VIEW3,
          elements: [
            ...tree(YS3, D3, {}),
            ...YS3.flatMap((y) => route(y, D3, 1)),
            ...YS3.map((y, k) => product(y, D3, k, 3)),
            { kind: "label", at: [0.2, -3.75], label: "P(A) = sum of the three routes", labelAt: "e", step: 5 },
          ],
        },
      },
      {
        title: "Bayes' theorem",
        points: [
          t`**Bayes' theorem** works backwards: given that $A$ has happened, how likely is a cause $E_i$?`,
          t`Take the route through $E_i$, here $E_2$: its chance is $P(E_i)\,P(A \mid E_i)$.`,
          t`Divide it by all the routes to $A$ together, $\sum_j P(E_j)\,P(A \mid E_j)$, which is $P(A)$.`,
          t`So $P(E_i \mid A)$ equals $\frac{P(E_i)\,P(A \mid E_i)}{P(A)}$.`,
        ],
        figure: {
          alt: "The same probability tree with three causes. The route through E₂ to A is picked out, with its chance P(E₂)·P(A | E₂). Then the chances of the other two routes to A appear, and P(A) as the sum of the three routes. Below: P(E₂ | A) is the E₂ route divided by P(A).",
          axes: "none",
          view: VIEW3,
          elements: [
            ...tree(YS3, D3, {}),
            ...route(0, D3, 2),
            product(0, D3, 1, 2),
            product(2.4, D3, 0, 3),
            product(-2.4, D3, 2, 3),
            { kind: "label", at: [0.2, -3.75], label: "P(A) = sum of the three routes", labelAt: "e", step: 3 },
            { kind: "label", at: [0.2, -4.45], label: "P(E₂ | A) = E₂ route ÷ P(A)", labelAt: "e", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Prior and posterior",
        points: [
          t`$P(E_i)$ is the **prior**: the chance of the cause before $A$ is seen.`,
          t`$P(E_i \mid A)$ is the **posterior**: its chance after $A$ is seen.`,
          t`A rare cause gets a small share of $P(A)$, even when it produces $A$ easily.`,
        ],
      },
      {
        title: "Lay it out as a table",
        points: [
          t`Make a table with one row per cause.`,
          t`Each row holds $P(E_j)$, $P(A \mid E_j)$ and their product.`,
          t`The products add up to $P(A)$.`,
          t`Each posterior is its row's product divided by that sum.`,
          t`Check: the posteriors add up to $1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The chances of X, Y, Z becoming the manager of a company are in the ratio $4 : 2 : 3$. If X, Y, Z becomes manager, a bonus scheme is introduced with probability $0.3$, $0.5$, $0.8$ respectively. The bonus scheme has been introduced. What is the probability that X is the manager?`,
      steps: [
        t`Let $E_1$, $E_2$, $E_3$ be X, Y, Z becoming manager, and $A$ the bonus scheme. The ratio adds to $9$, so $P(E_1) = \frac{4}{9}$, $P(E_2) = \frac{2}{9}$, $P(E_3) = \frac{3}{9}$, and $P(A \mid E_1) = 0.3$, $P(A \mid E_2) = 0.5$, $P(A \mid E_3) = 0.8$.`,
        t`The routes: $\frac{4}{9}(0.3) = \frac{12}{90}$, $\frac{2}{9}(0.5) = \frac{10}{90}$, $\frac{3}{9}(0.8) = \frac{24}{90}$.`,
        t`Total probability: $P(A) = \frac{12 + 10 + 24}{90}$ $= \frac{46}{90} = \frac{23}{45}$.`,
        t`Bayes: $P(E_1 \mid A) = \frac{12/90}{46/90}$ $= \frac{12}{46} = \frac{6}{23}$.`,
      ],
      answer: t`$P(\text{X is manager} \mid \text{bonus})$ $= \frac{6}{23}$.`,
    },
    visualSpec: t`Drag the chances of the causes and of $A$ on each branch of a probability tree; each route's width shows $P(E_j)\,P(A \mid E_j)$, and a bar splits $P(A)$ into the routes' shares, which are the posteriors.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Swapping the condition: taking $P(A \mid E_k)$, the chance of the result given the cause, as $P(E_k \mid A)$`,
      remediation: t`$P(E_k \mid A)$ and $P(A \mid E_k)$ are different numbers: a test can be positive for almost every sufferer while most positives are not sufferers. Find $P(E_k \cap A) = P(E_k)\,P(A \mid E_k)$ and divide it by the total $P(A)$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M2",
      mistake: t`Leaving out the priors: adding or comparing only the $P(A \mid E_j)$, without the chances $P(E_j)$ of the causes`,
      remediation: t`Each route to $A$ has probability $P(E_j)\,P(A \mid E_j)$, so multiply by the chance of the cause before you add or compare. A rare cause gets a small share even when $P(A \mid E_j)$ is large.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C10-M3",
      mistake: t`Stopping at the numerator: giving $P(E_k)\,P(A \mid E_k) = P(E_k \cap A)$ as $P(E_k \mid A)$`,
      remediation: t`$P(E_k)\,P(A \mid E_k)$ is $P(E_k \cap A)$, only the top of Bayes' formula. Divide it by $P(A)$, the sum over all the causes, to get $P(E_k \mid A)$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C10-M4",
      mistake: "Pooling the bags: treating every ball in every bag as equally likely to be drawn",
      remediation: t`A bag is chosen first, so a ball in a smaller bag is more likely to be drawn than one in a bigger bag. Work out $P(A \mid E_j)$ inside each bag, then weight by the bag's chance: $P(A) = \sum_j P(E_j)\,P(A \mid E_j)$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M5",
      mistake: t`Counting one route only: taking $P(E_k)\,P(A \mid E_k)$ as $P(A)$`,
      remediation: t`$A$ can happen through every cause, and these routes are mutually exclusive. Add $P(E_j)\,P(A \mid E_j)$ over all the causes to get $P(A)$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C10-M6",
      mistake: t`Stopping at the denominator: giving the total $P(A)$ when $P(E_k \mid A)$ is asked`,
      remediation: t`$P(A)$ is only the bottom of Bayes' formula. The question asks what share of $P(A)$ came through $E_k$: divide $P(E_k)\,P(A \mid E_k)$ by $P(A)$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C10-M2 gives the key on a $P(E_k \mid A)$ question when the causes are equally likely (a bag chosen at random): diagnose it with unequal priors, or on a $P(A)$ question.`,
    "C10-M4 gives the key when the bags are equally likely and hold the same number of balls (Ex 9.4 Q1): diagnose it with bags of different sizes.",
    t`C10-M3 and C10-M5 give the same number, $P(E_k \cap A)$, on different questions: M3 on a $P(E_k \mid A)$ question, M5 on a $P(A)$ question.`,
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.4 Q5" },
      stem: t`Jar I contains $5$ white and $7$ black balls. Jar II contains $3$ white and $12$ black balls. A fair coin is flipped: if it shows Head, a ball is drawn from Jar I; if Tail, from Jar II. The probability that the ball drawn is white is:`,
      verify: { kind: "value", inputs: { pri: "(1/2, 1/2)", fav: "(5, 3)", tot: "(12, 15)", k: "1" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`$\frac{37}{60}$`, correct: false, misconceptionId: "C10-M2", value: "37/60" },
        { key: "B", text: t`$\frac{8}{27}$`, correct: false, misconceptionId: "C10-M4", value: "8/27" },
        { key: "C", text: t`$\frac{5}{24}$`, correct: false, misconceptionId: "C10-M5", value: "5/24" },
        { key: "D", text: t`$\frac{37}{120}$`, correct: true, value: "37/120" },
      ],
      solution: {
        steps: [
          t`Let $H$ be the event that Jar I is used and $T$ that Jar II is used: $P(H) = P(T) = \frac{1}{2}$. For a white ball $W$: $P(W \mid H) = \frac{5}{12}$ and $P(W \mid T) = \frac{3}{15} = \frac{1}{5}$.`,
          t`A white ball comes through Jar I or through Jar II, so $P(W) = \frac{1}{2} \cdot \frac{5}{12} + \frac{1}{2} \cdot \frac{1}{5} = \frac{5}{24} + \frac{1}{10}$.`,
          t`$P(W) = \frac{25}{120} + \frac{12}{120} = \frac{37}{120}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.4 Q2" },
      stem: t`A box contains $2$ blue and $3$ pink balls, and another box contains $4$ blue and $5$ pink balls. One of the two boxes is chosen at random and a ball is drawn from it. The ball is pink. The probability that it was drawn from the first box is:`,
      verify: { kind: "value", inputs: { pri: "(1/2, 1/2)", fav: "(3, 5)", tot: "(5, 9)", k: "1" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{27}{52}$`, correct: true, value: "27/52" },
        { key: "B", text: t`$\frac{3}{5}$`, correct: false, misconceptionId: "C10-M1", value: "3/5" },
        { key: "C", text: t`$\frac{3}{8}$`, correct: false, misconceptionId: "C10-M4", value: "3/8" },
        { key: "D", text: t`$\frac{26}{45}$`, correct: false, misconceptionId: "C10-M6", value: "26/45" },
      ],
      solution: {
        steps: [
          t`Let $E_1$, $E_2$ be choosing the first and the second box, $P(E_1) = P(E_2) = \frac{1}{2}$, and $A$ a pink ball: $P(A \mid E_1) = \frac{3}{5}$, $P(A \mid E_2) = \frac{5}{9}$.`,
          t`Total probability: $P(A) = \frac{1}{2} \cdot \frac{3}{5} + \frac{1}{2} \cdot \frac{5}{9} = \frac{27}{90} + \frac{25}{90} = \frac{52}{90}$.`,
          t`Bayes: $P(E_1 \mid A) = \frac{27/90}{52/90} = \frac{27}{52}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc II Q22" },
      stem: t`In a bulb factory, machines A, B and C make $25\%$, $35\%$ and $40\%$ of the bulbs. Of their outputs, $5\%$, $4\%$ and $2\%$ respectively are defective. A bulb drawn at random is found to be defective. The probability that it was made by machine B is:`,
      verify: { kind: "value", inputs: { pri: "(1/4, 7/20, 2/5)", lik: "(1/20, 1/25, 1/50)", k: "2" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{7}{500}$`, correct: false, misconceptionId: "C10-M3", value: "7/500" },
        { key: "B", text: t`$\frac{28}{69}$`, correct: true, value: "28/69" },
        { key: "C", text: t`$\frac{1}{25}$`, correct: false, misconceptionId: "C10-M1", value: "1/25" },
        { key: "D", text: t`$\frac{4}{11}$`, correct: false, misconceptionId: "C10-M2", value: "4/11" },
      ],
      solution: {
        steps: [
          t`Let $E_1$, $E_2$, $E_3$ be the bulb coming from A, B, C and $D$ a defective bulb: $P(E_j) = 0.25, 0.35, 0.40$ and $P(D \mid E_j) = 0.05, 0.04, 0.02$.`,
          t`The routes: $0.25 \times 0.05 = 0.0125$, $0.35 \times 0.04 = 0.014$, $0.40 \times 0.02 = 0.008$, so $P(D) = 0.0345$.`,
          t`Bayes: $P(E_2 \mid D) = \frac{0.014}{0.0345} = \frac{140}{345} = \frac{28}{69}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.4 Q7" },
      stem: t`Of the sick children in an area, $80\%$ have flu and $20\%$ have measles; there is no other disease. A child with measles has a rash with probability $0.95$; a child with flu has a rash with probability $0.08$. A sick child is found to have a rash. The probability that the child has measles is:`,
      verify: { kind: "value", inputs: { pri: "(4/5, 1/5)", lik: "(2/25, 19/20)", k: "2" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{19}{100}$`, correct: false, misconceptionId: "C10-M3", value: "19/100" },
        { key: "B", text: t`$\frac{127}{500}$`, correct: false, misconceptionId: "C10-M6", value: "127/500" },
        { key: "C", text: t`$\frac{95}{127}$`, correct: true, value: "95/127" },
        { key: "D", text: t`$\frac{95}{103}$`, correct: false, misconceptionId: "C10-M2", value: "95/103" },
      ],
      solution: {
        steps: [
          t`Let $F$ be flu and $M$ measles, $P(F) = 0.8$, $P(M) = 0.2$, and $R$ a rash: $P(R \mid F) = 0.08$, $P(R \mid M) = 0.95$.`,
          t`The routes: $0.8 \times 0.08 = 0.064$ and $0.2 \times 0.95 = 0.19$, so $P(R) = 0.254$.`,
          t`Bayes: $P(M \mid R) = \frac{0.19}{0.254} = \frac{190}{254} = \frac{95}{127}$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Ex 9.4 Q8" },
      stem: t`$2\%$ of a population have a blood disease in a serious form, $10\%$ in a mild form, and $88\%$ don't have it. A test is positive with probability $\frac{9}{10}$ for the serious form, $\frac{6}{10}$ for the mild form, and $\frac{1}{10}$ without the disease. A person tests positive. The probability that they have the serious form is:`,
      verify: { kind: "value", inputs: { pri: "(1/50, 1/10, 22/25)", lik: "(9/10, 3/5, 1/10)", k: "1" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{9}{83}$`, correct: true, value: "9/83" },
        { key: "B", text: t`$\frac{9}{10}$`, correct: false, misconceptionId: "C10-M1", value: "9/10" },
        { key: "C", text: t`$\frac{9}{500}$`, correct: false, misconceptionId: "C10-M3", value: "9/500" },
        { key: "D", text: t`$\frac{83}{500}$`, correct: false, misconceptionId: "C10-M6", value: "83/500" },
      ],
      solution: {
        steps: [
          t`Let $S$, $M$, $N$ be the serious form, the mild form and no disease: $P(S) = 0.02$, $P(M) = 0.10$, $P(N) = 0.88$. A positive test $T$ has $P(T \mid S) = 0.9$, $P(T \mid M) = 0.6$, $P(T \mid N) = 0.1$.`,
          t`The routes: $0.02 \times 0.9 = 0.018$, $0.10 \times 0.6 = 0.06$, $0.88 \times 0.1 = 0.088$, so $P(T) = 0.166$.`,
          t`Bayes: $P(S \mid T) = \frac{0.018}{0.166} = \frac{18}{166} = \frac{9}{83}$.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/probability-11/Misc I Q7" },
      stem: t`The probability that a student knows the correct answer to a multiple choice question is $\frac{2}{3}$. If the student does not know it, they guess, and a guess is correct with probability $\frac{1}{4}$. Given that the student answered correctly, the probability that they knew the answer is:`,
      verify: { kind: "value", inputs: { pri: "(2/3, 1/3)", lik: "(1, 1/4)", k: "1" }, params: { ask: "post" } },
      options: [
        { key: "A", text: t`$\frac{8}{9}$`, correct: true, value: "8/9" },
        { key: "B", text: t`$\frac{4}{5}$`, correct: false, misconceptionId: "C10-M2", value: "4/5" },
        { key: "C", text: t`$\frac{2}{3}$`, correct: false, misconceptionId: "C10-M3", value: "2/3" },
        { key: "D", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C10-M6", value: "3/4" },
      ],
      solution: {
        steps: [
          t`Let $K$ be knowing the answer and $G$ guessing: $P(K) = \frac{2}{3}$, $P(G) = \frac{1}{3}$. For a correct answer $C$: $P(C \mid K) = 1$, $P(C \mid G) = \frac{1}{4}$.`,
          t`Total probability: $P(C) = \frac{2}{3} \cdot 1 + \frac{1}{3} \cdot \frac{1}{4} = \frac{8}{12} + \frac{1}{12} = \frac{3}{4}$.`,
          t`Bayes: $P(K \mid C) = \frac{2/3}{3/4} = \frac{8}{9}$.`,
        ],
      },
    },
  ],
};
