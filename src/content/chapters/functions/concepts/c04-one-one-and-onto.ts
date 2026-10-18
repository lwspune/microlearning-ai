import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`Each of $3$ friends picks one of $2$ ice-cream flavours. **How many ways can the choices go: $2^3$ or $3^2$?**`,
    reveal: t`Each friend has $2$ choices, made independently: $2 \times 2 \times 2 = 2^3 = 8$ ways. Each way is a function from the $3$ friends to the $2$ flavours. With only $2$ flavours, two friends always share one, so none of these functions is one-one.`,
  },
  explanation: {
    intuition: [
      t`A **function** $f : A \to B$ sends every element of $A$ to exactly one **image** in $B$.`,
      t`$f$ is **one-one** when different inputs always have different images; here $2$ and $3$ share $b$, so it is not.`,
      t`$f$ is **onto** when every element of $B$ is the image of some input; here nothing reaches $c$ or $d$.`,
      t`Both depend on the sets: $f(x) = 2x$ from $\mathrm{Z}$ to $\mathrm{Z}$ never gives $3$, but from $\mathrm{R}$ to $\mathrm{R}$, $3 = f(1.5)$.`,
      t`To count functions, each of the $m$ elements of $A$ picks one of the $n$ elements of $B$: $n^m$ in all.`,
    ],
    formal: [
      {
        title: "Testing one-one",
        points: [
          t`To test **one-one**, suppose $f(x_1) = f(x_2)$ and see whether this forces $x_1 = x_2$.`,
          t`If it does, $f$ is one-one, also called **injective**.`,
          t`If two different inputs share an image, $f$ is not one-one; it is called **many-one**.`,
          t`One such pair is enough: for $f(x) = x^2 - 4x$ on $\mathrm{R}$, $f(0) = f(4) = 0$.`,
          t`On a graph, a horizontal line meeting it twice shows two inputs with one image.`,
        ],
      },
      {
        title: "Testing onto",
        points: [
          t`In $f : A \to B$, the **co-domain** is $B$; the **range** is the set of images actually reached.`,
          t`$f$ is **onto**, also called **surjective**, when its range is the whole co-domain.`,
          t`To test it, take any $y$ in $B$, solve $y = f(x)$ for $x$, and check that $x$ lies in $A$.`,
          t`If some $y$ in $B$ has no such $x$, $f$ is not onto; it is called an **into** function.`,
          t`A function that is both one-one and onto is a **bijection**, or one-one onto function.`,
        ],
      },
      {
        title: "Same rule, different sets",
        points: [
          t`The same rule can change type when $A$ or $B$ changes; take $f(x) = x^2$.`,
          t`From $\mathrm{R}$ to $\mathrm{R}$: $f(-2) = f(2) = 4$, so $f$ is not one-one.`,
          t`Also $-1$ is never reached, since a square is never negative, so $f$ is not onto.`,
          t`From $[0, \infty)$ to $[0, \infty)$, only the right half is left: one-one and onto.`,
          t`So read $A$ and $B$ before you test, never the formula alone.`,
        ],
        figure: {
          alt: "The graph of y = x² over the real numbers. The dashed line y = 4 meets it twice, at (−2, 4) and (2, 4): not one-one. The dashed line y = −1 never meets it: not onto. Then only the right half, from (0, 0), is kept: one-one and onto from [0, ∞) to [0, ∞).",
          axes: "xy",
          view: { x: [-4, 4], y: [-1.8, 6.8] },
          elements: [
            { kind: "curve", points: [[-2.55, 6.502], [-2.486, 6.181], [-2.422, 5.869], [-2.359, 5.564], [-2.295, 5.267], [-2.231, 4.978], [-2.167, 4.698], [-2.104, 4.426], [-2.04, 4.162], [-1.976, 3.906], [-1.912, 3.658], [-1.849, 3.418], [-1.785, 3.186], [-1.721, 2.963], [-1.657, 2.747], [-1.594, 2.54], [-1.53, 2.341], [-1.466, 2.15], [-1.402, 1.967], [-1.339, 1.792], [-1.275, 1.626], [-1.211, 1.467], [-1.147, 1.317], [-1.084, 1.175], [-1.02, 1.04], [-0.956, 0.914], [-0.892, 0.797], [-0.829, 0.687], [-0.765, 0.585], [-0.701, 0.492], [-0.637, 0.406], [-0.574, 0.329], [-0.51, 0.26], [-0.446, 0.199], [-0.383, 0.146], [-0.319, 0.102], [-0.255, 0.065], [-0.191, 0.037], [-0.127, 0.016], [-0.064, 0.004], [0, 0], [0.064, 0.004], [0.127, 0.016], [0.191, 0.037], [0.255, 0.065], [0.319, 0.102], [0.383, 0.146], [0.446, 0.199], [0.51, 0.26], [0.574, 0.329], [0.637, 0.406], [0.701, 0.492], [0.765, 0.585], [0.829, 0.687], [0.893, 0.797], [0.956, 0.914], [1.02, 1.04], [1.084, 1.175], [1.147, 1.317], [1.211, 1.467], [1.275, 1.626], [1.339, 1.792], [1.402, 1.967], [1.466, 2.15], [1.53, 2.341], [1.594, 2.54], [1.657, 2.747], [1.721, 2.963], [1.785, 3.186], [1.849, 3.418], [1.913, 3.658], [1.976, 3.906], [2.04, 4.162], [2.104, 4.426], [2.167, 4.698], [2.231, 4.978], [2.295, 5.267], [2.359, 5.564], [2.422, 5.869], [2.486, 6.181], [2.55, 6.502]], step: 1 },
            { kind: "line", through: [[0, 4], [1, 4]], tone: "muted", dashed: true, step: 2 },
            { kind: "point", at: [-2, 4], label: "(−2, 4)", labelAt: "nw", tone: "bad", step: 2 },
            { kind: "point", at: [2, 4], label: "(2, 4)", labelAt: "ne", tone: "bad", step: 2 },
            { kind: "line", through: [[0, -1], [1, -1]], tone: "bad", dashed: true, step: 3 },
            { kind: "label", at: [1, -1], label: "y = −1", labelAt: "se", tone: "bad", step: 3 },
            { kind: "curve", points: [[0, 0], [0.032, 0.001], [0.064, 0.004], [0.096, 0.009], [0.128, 0.016], [0.159, 0.025], [0.191, 0.037], [0.223, 0.05], [0.255, 0.065], [0.287, 0.082], [0.319, 0.102], [0.351, 0.123], [0.382, 0.146], [0.414, 0.172], [0.446, 0.199], [0.478, 0.229], [0.51, 0.26], [0.542, 0.294], [0.574, 0.329], [0.606, 0.367], [0.637, 0.406], [0.669, 0.448], [0.701, 0.492], [0.733, 0.537], [0.765, 0.585], [0.797, 0.635], [0.829, 0.687], [0.861, 0.741], [0.892, 0.797], [0.924, 0.854], [0.956, 0.914], [0.988, 0.976], [1.02, 1.04], [1.052, 1.106], [1.084, 1.175], [1.116, 1.245], [1.147, 1.317], [1.179, 1.391], [1.211, 1.467], [1.243, 1.545], [1.275, 1.626], [1.307, 1.708], [1.339, 1.792], [1.371, 1.879], [1.402, 1.967], [1.434, 2.057], [1.466, 2.15], [1.498, 2.244], [1.53, 2.341], [1.562, 2.439], [1.594, 2.54], [1.626, 2.643], [1.657, 2.747], [1.689, 2.854], [1.721, 2.963], [1.753, 3.073], [1.785, 3.186], [1.817, 3.301], [1.849, 3.418], [1.881, 3.537], [1.913, 3.658], [1.944, 3.781], [1.976, 3.906], [2.008, 4.033], [2.04, 4.162], [2.072, 4.293], [2.104, 4.426], [2.136, 4.561], [2.167, 4.698], [2.199, 4.837], [2.231, 4.978], [2.263, 5.122], [2.295, 5.267], [2.327, 5.414], [2.359, 5.564], [2.391, 5.715], [2.422, 5.869], [2.454, 6.024], [2.486, 6.181], [2.518, 6.341], [2.55, 6.502]], tone: "good", step: 4 },
            { kind: "point", at: [0, 0], tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Counting functions",
        points: [
          t`Let $A$ have $m$ elements and $B$ have $n$ elements.`,
          t`Each element of $A$ chooses its image from the $n$ elements of $B$.`,
          t`The $m$ choices are independent, so there are $n \times n \times \cdots \times n = n^m$ functions.`,
          t`The base is $n(B)$ and the power is $n(A)$: from $\{1, 2\}$ to $\{a, b, c\}$ there are $3^2 = 9$.`,
          t`Different elements may share an image, so these are all functions, one-one or not.`,
          t`There are $2^{mn}$ relations from $A$ to $B$; only $n^m$ of them are functions.`,
        ],
      },
    ],
    worked: {
      prompt: t`Check whether $f : \mathrm{Z} \to \mathrm{Z}$, $f(x) = 6x - 7$, is one-one and whether it is onto.`,
      steps: [
        t`**One-one?** $6x_1 - 7 = 6x_2 - 7$ gives $6x_1 = 6x_2$, so $x_1 = x_2$. One-one.`,
        t`**Onto?** Take $y$ in $\mathrm{Z}$: $y = 6x - 7$ gives $x = \frac{y + 7}{6}$.`,
        t`For $y = 0$, $x = \frac{7}{6}$, which is not an integer, so $0$ has no pre-image in $\mathrm{Z}$. Not onto.`,
        t`Over $\mathrm{R}$ the same rule would be onto: the domain $\mathrm{Z}$ is what stops it here.`,
      ],
      answer: t`$f$ is one-one but not onto (an into function).`,
    },
    figure: {
      alt: "An arrow diagram from A = {1, 2, 3} to B = {a, b, c, d}: 1 goes to a, 2 and 3 both go to b. Then b is marked: two inputs share it, so the function is not one-one. Then c and d are marked: nothing goes to them, so it is not onto.",
      axes: "none",
      view: { x: [-1, 7.5], y: [-0.3, 4.5] },
      elements: [
        { kind: "label", at: [0, 4.2], label: "A", labelAt: "n", step: 1 },
        { kind: "label", at: [4, 4.2], label: "B", labelAt: "n", step: 1 },
        { kind: "point", at: [0, 3], label: "1", labelAt: "w", step: 1 },
        { kind: "point", at: [0, 2], label: "2", labelAt: "w", step: 1 },
        { kind: "point", at: [0, 1], label: "3", labelAt: "w", step: 1 },
        { kind: "point", at: [4, 3.5], label: "a", labelAt: "e", step: 1 },
        { kind: "point", at: [4, 2.5], label: "b", labelAt: "e", step: 1 },
        { kind: "point", at: [4, 1.5], label: "c", labelAt: "e", step: 1 },
        { kind: "point", at: [4, 0.5], label: "d", labelAt: "e", step: 1 },
        { kind: "vector", from: [0.15, 3], to: [3.85, 3.48], step: 1 },
        { kind: "vector", from: [0.15, 2], to: [3.85, 2.48], step: 1 },
        { kind: "vector", from: [0.15, 1], to: [3.85, 2.45], step: 1 },
        { kind: "point", at: [4, 2.5], tone: "bad", step: 2 },
        { kind: "label", at: [4.5, 2.5], label: "2 and 3 share b", labelAt: "e", tone: "bad", step: 2 },
        { kind: "point", at: [4, 1.5], tone: "bad", hollow: true, step: 3 },
        { kind: "point", at: [4, 0.5], tone: "bad", hollow: true, step: 3 },
        { kind: "label", at: [4.5, 1], label: "nothing reaches c, d", labelAt: "e", tone: "bad", step: 3 },
      ],
    },
    visualSpec: t`An arrow diagram from $A$ to $B$: drag arrows between the elements; the diagram flags a shared image (not one-one) and any element of $B$ left unreached (not onto), and counts the possible functions.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Judges the formula alone, as if f went from R to R, ignoring the given domain and co-domain",
      remediation: t`One-one and onto depend on the sets $A$ and $B$, not just the formula. Test only inputs from the given domain, and check every element of the given co-domain.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks onto means every element of A has an image in B, so every function is onto",
      remediation: t`Every element of $A$ having an image is what makes $f$ a function. Onto asks the reverse: every element of $B$ must be the image of some element of $A$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks one-one means each input has only one image (the definition of a function), so every function is one-one; counting, lets only functions with different images count",
      remediation: t`Each input having exactly one image is what makes $f$ a function; different inputs may still share an image. One-one is the extra demand that $f(x_1) = f(x_2)$ forces $x_1 = x_2$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: "Swaps the two tests: uses the onto test for one-one and the one-one test for onto",
      remediation: "One-one is about the inputs: no two of them share an image. Onto is about the co-domain: every element of it is reached.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Counts m^n functions, with n(A) as the base",
      remediation: t`Each of the $m$ elements of $A$ picks one of $n$ images, giving $n \times n \times \cdots$ ($m$ times) $= n^m$. The base is $n(B)$, the power $n(A)$.`,
      fallback: { kind: "ext", topic: "fundamental principle of counting" },
    },
    {
      id: "C04-M6",
      mistake: "Counts every relation from A to B, 2^(mn), not only the functions",
      remediation: t`$2^{mn}$ counts all relations from $A$ to $B$. A function is a special relation, with exactly one image for each element of $A$, so there are only $n^m$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    "C04-M1 gives the key whenever the domain and co-domain are R, and on any rule whose type does not change between the given sets and R to R.",
    "C04-M2 gives the key on onto functions; C04-M3 gives the key on one-one functions; C04-M4 gives the key on bijections and on functions that are neither.",
    "No item has the key 'one-one and onto' or 'neither': C04-M1 can't give 'one-one and onto' when the key is 'neither' (a restriction of a many-one rule stays many-one), and C04-M2 to C04-M4 each give the key on one of those two.",
    "C04-M5 gives the key when n(A) = n(B), or when the sizes are 2 and 4. C04-M3 on a count gives nPm, which is 0 when n(A) > n(B).",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Ex 6.1 Q13(a)" },
      stem: t`$f : \mathrm{N} \to \mathrm{N}$ is given by $f(x) = x^2$. Then $f$ is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "classify", rule: "x**2", dom: "N", cod: "N" } },
      options: [
        { key: "A", text: t`one-one and onto`, correct: false, misconceptionId: "C04-M2", value: "bijective" },
        { key: "B", text: t`onto but not one-one`, correct: false, misconceptionId: "C04-M4", value: "onto_only" },
        { key: "C", text: t`one-one but not onto`, correct: true, value: "one_one_only" },
        { key: "D", text: t`neither one-one nor onto`, correct: false, misconceptionId: "C04-M1", value: "neither" },
      ],
      solution: {
        steps: [
          t`**One-one?** If $x_1^2 = x_2^2$ with $x_1, x_2$ natural numbers, then $x_1 = x_2$, since $-x_2$ is not in $\mathrm{N}$. One-one.`,
          t`**Onto?** $2$ is in the co-domain $\mathrm{N}$, but $x^2 = 2$ gives $x = \sqrt{2}$, not a natural number. Not onto.`,
          t`So $f$ is one-one but not onto.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/functions-11/Misc II Q2(i)" },
      stem: t`$f : \mathrm{R} \to [5, \infty)$ is given by $f(x) = x^2 + 5$. Then $f$ is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "classify", rule: "x**2 + 5", dom: "R", cod: "[5, oo)" } },
      options: [
        { key: "A", text: t`neither one-one nor onto`, correct: false, misconceptionId: "C04-M1", value: "neither" },
        { key: "B", text: t`one-one and onto`, correct: false, misconceptionId: "C04-M3", value: "bijective" },
        { key: "C", text: t`one-one but not onto`, correct: false, misconceptionId: "C04-M4", value: "one_one_only" },
        { key: "D", text: t`onto but not one-one`, correct: true, value: "onto_only" },
      ],
      solution: {
        steps: [
          t`**One-one?** $f(-1) = f(1) = 6$: two inputs share an image. Not one-one.`,
          t`**Onto?** Take $y \ge 5$: $x^2 + 5 = y$ gives $x = \sqrt{y - 5}$, a real number. Every element of $[5, \infty)$ is reached.`,
          t`So $f$ is onto but not one-one.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`$A = \{-1, 0, 1, 2\}$, $B = \{0, 1, 4\}$ and $f : A \to B$ is given by $f(x) = x^2$. Then $f$ is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "classify", rule: "x**2", dom: ["-1", "0", "1", "2"], cod: ["0", "1", "4"] } },
      options: [
        { key: "A", text: t`one-one and onto`, correct: false, misconceptionId: "C04-M3", value: "bijective" },
        { key: "B", text: t`one-one but not onto`, correct: false, misconceptionId: "C04-M4", value: "one_one_only" },
        { key: "C", text: t`onto but not one-one`, correct: true, value: "onto_only" },
        { key: "D", text: t`neither one-one nor onto`, correct: false, misconceptionId: "C04-M1", value: "neither" },
      ],
      solution: {
        steps: [
          t`The images: $f(-1) = 1$, $f(0) = 0$, $f(1) = 1$, $f(2) = 4$.`,
          t`**One-one?** $-1$ and $1$ share the image $1$. Not one-one.`,
          t`**Onto?** The images $0, 1, 4$ fill all of $B$. Onto. So $f$ is onto but not one-one.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`$A = \{1, 2, 3\}$, $B = \{2, 5, 10, 17\}$ and $f : A \to B$ is given by $f(x) = x^2 + 1$. Then $f$ is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "classify", rule: "x**2 + 1", dom: ["1", "2", "3"], cod: ["2", "5", "10", "17"] } },
      options: [
        { key: "A", text: t`neither one-one nor onto`, correct: false, misconceptionId: "C04-M1", value: "neither" },
        { key: "B", text: t`one-one and onto`, correct: false, misconceptionId: "C04-M2", value: "bijective" },
        { key: "C", text: t`onto but not one-one`, correct: false, misconceptionId: "C04-M4", value: "onto_only" },
        { key: "D", text: t`one-one but not onto`, correct: true, value: "one_one_only" },
      ],
      solution: {
        steps: [
          t`The images: $f(1) = 2$, $f(2) = 5$, $f(3) = 10$.`,
          t`**One-one?** The three images are different. One-one.`,
          t`**Onto?** Nothing in $A$ goes to $17$. Not onto. So $f$ is one-one but not onto.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`$A = \{a, b\}$ and $B = \{1, 2, 3, 4, 5\}$. The number of functions from $A$ to $B$ is:`,
      verify: { kind: "value", inputs: { m: "2", n: "5" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$1024$`, correct: false, misconceptionId: "C04-M6", value: "1024" },
        { key: "B", text: t`$25$`, correct: true, value: "25" },
        { key: "C", text: t`$20$`, correct: false, misconceptionId: "C04-M3", value: "20" },
        { key: "D", text: t`$32$`, correct: false, misconceptionId: "C04-M5", value: "32" },
      ],
      solution: {
        steps: [
          t`Each of the $2$ elements of $A$ picks its image from the $5$ elements of $B$.`,
          t`So there are $5 \times 5 = 5^2 = 25$ functions.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "authored" },
      stem: t`$A = \{1, 2, 3, 4\}$ and $B = \{p, q, r\}$. The number of functions from $A$ to $B$ is:`,
      verify: { kind: "value", inputs: { m: "4", n: "3" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$81$`, correct: true, value: "81" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C04-M3", value: "0" },
        { key: "C", text: t`$64$`, correct: false, misconceptionId: "C04-M5", value: "64" },
        { key: "D", text: t`$4096$`, correct: false, misconceptionId: "C04-M6", value: "4096" },
      ],
      solution: {
        steps: [
          t`Each of the $4$ elements of $A$ picks its image from the $3$ elements of $B$; sharing an image is allowed.`,
          t`So there are $3 \times 3 \times 3 \times 3 = 3^4 = 81$ functions.`,
        ],
      },
    },
  ],
};
