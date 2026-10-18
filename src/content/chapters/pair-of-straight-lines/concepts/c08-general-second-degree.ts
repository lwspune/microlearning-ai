import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "draft",
  hook: {
    prompt: t`$x^2 - 4y^2 + 4y - 1 = 0$ and $x^2 - 4y^2 + 4y + 1 = 0$ differ only in the constant. **Which one is a pair of straight lines?**`,
    reveal: t`The first: $x^2 - (2y - 1)^2$ $= (x - 2y + 1)(x + 2y - 1)$. The second is $(2y - 1)^2 - x^2 = 2$, a curve. The constant must be just right, and a determinant finds it.`,
  },
  explanation: {
    intuition: [
      t`A **second-degree equation** in $x$, $y$ has $x^2$, $xy$, $y^2$ terms, and maybe $x$, $y$ terms and a constant.`,
      t`Multiply two line equations, like $(x - 2y + 1)(x + 2y - 1)$, and you get one.`,
      t`Its graph is the two lines: a product is $0$ when either factor is $0$.`,
      t`Most second-degree equations don't factor: change the constant and the graph becomes a curve.`,
      t`So we want a test on the coefficients that says when the equation splits into two lines.`,
      t`The test, coming next: one determinant of the coefficients is $0$, and the lines are real.`,
    ],
    formal: [
      {
        title: "The general equation",
        points: [
          t`The **general second-degree equation** is $ax^2 + 2hxy + by^2$ $+ 2gx + 2fy + c = 0$.`,
          t`First bring every term to the left, so the right side is $0$.`,
          t`$h$, $g$, $f$ are **half** the coefficients of $xy$, $x$, $y$: in $4xy$, $h = 2$.`,
          t`Example: in $x^2 + 3xy - 6x + 5 = 0$, $a = 1$, $h = \dfrac{3}{2}$ and $b = 0$.`,
          t`Also $g = -3$, half of $-6$, while $f = 0$ and $c = 5$.`,
          t`With $g = f = c = 0$ it is $ax^2 + 2hxy + by^2 = 0$, a pair through the origin.`,
        ],
      },
      {
        title: "The determinant condition",
        points: [
          t`If the equation is a pair of lines, its six coefficients satisfy one condition.`,
          t`Write them in a **symmetric determinant**, rows $(a, h, g)$, $(h, b, f)$, $(g, f, c)$.`,
          t`**Condition:** $\begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = 0$.`,
          t`Expanded: $abc + 2fgh$ $- af^2 - bg^2 - ch^2 = 0$.`,
          t`Mind the pairs: $a(bc - f^2)$ puts $a$ with $f^2$, and likewise $b$ goes with $g^2$.`,
          t`The product $fgh$ comes up twice in the expansion, so the term is $2fgh$.`,
        ],
      },
      {
        title: "Why the determinant",
        points: [
          t`Treat the equation as a quadratic in $x$; for two lines, its roots must be linear in $y$.`,
          t`So the discriminant, a quadratic in $y$, must be a perfect square.`,
          t`A quadratic is a perfect square when its own discriminant is $0$.`,
          t`Simplifying that gives $abc + 2fgh$ $- af^2 - bg^2 - ch^2 = 0$.`,
        ],
      },
      {
        title: "Real lines need h² ≥ ab",
        points: [
          t`The determinant being $0$ is necessary, but not enough.`,
          t`If it is a pair, its lines are parallel to the pair $ax^2 + 2hxy + by^2 = 0$.`,
          t`Their slopes solve $bm^2 + 2hm + a = 0$, real only when $h^2 \ge ab$.`,
          t`Example: $x^2 + 2xy + 2y^2 + 2x + 2y + 1 = 0$ has determinant $0$.`,
          t`But $h^2 - ab = 1 - 2 < 0$: it is $(x + y + 1)^2 + y^2 = 0$, just the point $(-1, 0)$.`,
          t`Also, a pair needs a second-degree term: if $a$, $h$, $b$ are all $0$, it is one line.`,
        ],
      },
      {
        title: "Finding an unknown coefficient",
        points: [
          t`Write the equation with $0$ on the right, then read off $a$, $h$, $b$, $g$, $f$, $c$.`,
          t`Substitute into $abc + 2fgh$ $- af^2 - bg^2 - ch^2 = 0$ and solve for the unknown.`,
          t`Check every value you get: $h^2 \ge ab$, and some second-degree term left.`,
          t`Drop any value that fails a check; if none passes, no value works.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $k$ if $2x^2 + 4xy - 2y^2 + 4x + 8y + k = 0$ represents a pair of lines.`,
      steps: [
        t`Compare: $a = 2$, $h = 2$, $b = -2$, $g = 2$, $f = 4$, $c = k$.`,
        t`$abc = -4k$, and $2fgh = 2(4)(2)(2) = 32$.`,
        t`$af^2 = 32$, $bg^2 = -8$, $ch^2 = 4k$.`,
        t`$-4k + 32 - 32 + 8 - 4k = 0$, so $8k = 8$ and $k = 1$.`,
        t`Check: $h^2 - ab = 4 + 4 = 8 \ge 0$, so the lines are real.`,
      ],
      answer: t`$k = 1$`,
    },
    figure: {
      alt: "The lines x − 2y + 1 = 0 and x + 2y − 1 = 0 cross at (0, 1/2), labelled: constant −1, two lines. Then the curve x² − 4y² + 4y + 1 = 0 appears: two branches, one above and one below the lines, hugging them far out, labelled: constant +1, a curve.",
      axes: "xy",
      view: { x: [-3, 3], y: [-2, 3] },
      elements: [
        { kind: "line", through: [[-1, 0], [1, 1]], step: 2 },
        { kind: "line", through: [[1, 0], [-1, 1]], step: 2 },
        { kind: "point", at: [0, 0.5], label: "constant −1: two lines", labelAt: "e", step: 2 },
        { kind: "curve", points: [[-3, 2.158], [-2.925, 2.124], [-2.85, 2.091], [-2.775, 2.057], [-2.7, 2.024], [-2.625, 1.991], [-2.55, 1.958], [-2.475, 1.925], [-2.4, 1.893], [-2.325, 1.861], [-2.25, 1.829], [-2.175, 1.797], [-2.1, 1.766], [-2.025, 1.735], [-1.95, 1.704], [-1.875, 1.674], [-1.8, 1.645], [-1.725, 1.615], [-1.65, 1.587], [-1.575, 1.558], [-1.5, 1.531], [-1.425, 1.504], [-1.35, 1.478], [-1.275, 1.452], [-1.2, 1.427], [-1.125, 1.404], [-1.05, 1.381], [-0.975, 1.359], [-0.9, 1.338], [-0.825, 1.319], [-0.75, 1.3], [-0.675, 1.284], [-0.6, 1.268], [-0.525, 1.254], [-0.45, 1.242], [-0.375, 1.232], [-0.3, 1.223], [-0.225, 1.216], [-0.15, 1.211], [-0.075, 1.208], [0, 1.207], [0.075, 1.208], [0.15, 1.211], [0.225, 1.216], [0.3, 1.223], [0.375, 1.232], [0.45, 1.242], [0.525, 1.254], [0.6, 1.268], [0.675, 1.284], [0.75, 1.3], [0.825, 1.319], [0.9, 1.338], [0.975, 1.359], [1.05, 1.381], [1.125, 1.404], [1.2, 1.427], [1.275, 1.452], [1.35, 1.478], [1.425, 1.504], [1.5, 1.531], [1.575, 1.558], [1.65, 1.587], [1.725, 1.615], [1.8, 1.645], [1.875, 1.674], [1.95, 1.704], [2.025, 1.735], [2.1, 1.766], [2.175, 1.797], [2.25, 1.829], [2.325, 1.861], [2.4, 1.893], [2.475, 1.925], [2.55, 1.958], [2.625, 1.991], [2.7, 2.024], [2.775, 2.057], [2.85, 2.091], [2.925, 2.124], [3, 2.158]], step: 4, tone: "good" },
        { kind: "curve", points: [[-3, -1.158], [-2.925, -1.124], [-2.85, -1.091], [-2.775, -1.057], [-2.7, -1.024], [-2.625, -0.991], [-2.55, -0.958], [-2.475, -0.925], [-2.4, -0.893], [-2.325, -0.861], [-2.25, -0.829], [-2.175, -0.797], [-2.1, -0.766], [-2.025, -0.735], [-1.95, -0.704], [-1.875, -0.674], [-1.8, -0.645], [-1.725, -0.615], [-1.65, -0.587], [-1.575, -0.558], [-1.5, -0.531], [-1.425, -0.504], [-1.35, -0.478], [-1.275, -0.452], [-1.2, -0.427], [-1.125, -0.404], [-1.05, -0.381], [-0.975, -0.359], [-0.9, -0.338], [-0.825, -0.319], [-0.75, -0.3], [-0.675, -0.284], [-0.6, -0.268], [-0.525, -0.254], [-0.45, -0.242], [-0.375, -0.232], [-0.3, -0.223], [-0.225, -0.216], [-0.15, -0.211], [-0.075, -0.208], [0, -0.207], [0.075, -0.208], [0.15, -0.211], [0.225, -0.216], [0.3, -0.223], [0.375, -0.232], [0.45, -0.242], [0.525, -0.254], [0.6, -0.268], [0.675, -0.284], [0.75, -0.3], [0.825, -0.319], [0.9, -0.338], [0.975, -0.359], [1.05, -0.381], [1.125, -0.404], [1.2, -0.427], [1.275, -0.452], [1.35, -0.478], [1.425, -0.504], [1.5, -0.531], [1.575, -0.558], [1.65, -0.587], [1.725, -0.615], [1.8, -0.645], [1.875, -0.674], [1.95, -0.704], [2.025, -0.735], [2.1, -0.766], [2.175, -0.797], [2.25, -0.829], [2.325, -0.861], [2.4, -0.893], [2.475, -0.925], [2.55, -0.958], [2.625, -0.991], [2.7, -1.024], [2.775, -1.057], [2.85, -1.091], [2.925, -1.124], [3, -1.158]], step: 4, tone: "good" },
        { kind: "label", at: [0.1, 2.6], label: "constant +1: a curve", labelAt: "e", step: 4, tone: "good" },
      ],
    },
    visualSpec: t`Slide the constant $c$: the curve $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ bends into two crossing lines at the one value where the determinant is $0$.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Takes $g$ and $f$ as the whole coefficients of $x$ and $y$, not half of them.`,
      remediation: t`In $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ the $x$ coefficient is $2g$, so in $10x$, $g = 5$. Halve the $x$ and $y$ coefficients, just as you halve the $xy$ one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Takes the determinant being $0$ as the whole test, keeping values that make $h^2 < ab$ or leave no second-degree term.`,
      remediation: t`The determinant being $0$ is necessary, not enough. Check each value: $h^2 \ge ab$ for real lines, and some $x^2$, $xy$ or $y^2$ term left for a pair.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C08-M3",
      mistake: t`Pairs $a$ with $g^2$ and $b$ with $f^2$, writing $abc + 2fgh - ag^2 - bf^2 - ch^2$.`,
      remediation: t`Expanding along the first row, $a(bc - f^2)$ gives $-af^2$: $a$ goes with $f^2$ and $b$ with $g^2$. The condition is $abc + 2fgh - af^2 - bg^2 - ch^2 = 0$.`,
      fallback: { kind: "ext", topic: "3 by 3 determinants" },
    },
    {
      id: "C08-M4",
      mistake: t`Writes the middle term as $fgh$ instead of $2fgh$.`,
      remediation: t`The product $fgh$ appears twice when the determinant is expanded, so the term is $2fgh$: $abc + 2fgh - af^2 - bg^2 - ch^2 = 0$.`,
      fallback: { kind: "ext", topic: "3 by 3 determinants" },
    },
    {
      id: "C08-M5",
      mistake: t`Leaves the right-hand constant where it is, taking $c$ as the constant on the left alone.`,
      remediation: t`First bring every term to the left so the right side is $0$: $\dots + c = 1$ becomes $\dots + (c - 1) = 0$, so the constant term is $c - 1$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C08-M3 gives the key when $a = b$ or $g^2 = f^2$; C08-M4 gives the key when $fgh = 0$; C08-M1 gives the key when $g = f = 0$.`,
    t`C08-M5 needs a nonzero right-hand side. C08-M2 differs from the key only when a root of the determinant condition makes $h^2 < ab$ or removes every second-degree term.`,
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.3 Q6 ii)" },
      stem: t`If $kxy + 10x + 6y + 4 = 0$ represents a pair of lines, then:`,
      verify: { kind: "value", inputs: { a: "0", H: "k", b: "0", G: "10", F: "6", c: "4" } },
      options: [
        { key: "A", text: t`$k = 15$`, correct: true, value: "15" },
        { key: "B", text: t`$k = 0$ or $k = 15$`, correct: false, misconceptionId: "C08-M2", value: "{0, 15}" },
        { key: "C", text: t`$k = 60$`, correct: false, misconceptionId: "C08-M1", value: "60" },
        { key: "D", text: t`$k = \dfrac{15}{2}$`, correct: false, misconceptionId: "C08-M4", value: "15/2" },
      ],
      solution: {
        steps: [
          t`Compare: $a = b = 0$, $h = \dfrac{k}{2}$, $g = 5$, $f = 3$, $c = 4$.`,
          t`Only $2fgh$ and $ch^2$ survive: $15k - k^2 = 0$, so $k = 0$ or $k = 15$.`,
          t`$k = 0$ leaves $10x + 6y + 4 = 0$, a single line, not a pair.`,
          t`So $k = 15$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc II Q.26" },
      stem: t`If $x^2 - y^2 + 2y + c = 1$ represents a pair of lines, then:`,
      verify: { kind: "value", inputs: { a: "1", H: "0", b: "-1", G: "0", F: "2", c: "k", r: "1" } },
      options: [
        { key: "A", text: t`$c = -1$`, correct: false, misconceptionId: "C08-M5", value: "-1" },
        { key: "B", text: t`$c = -3$`, correct: false, misconceptionId: "C08-M1", value: "-3" },
        { key: "C", text: t`$c = 2$`, correct: false, misconceptionId: "C08-M3", value: "2" },
        { key: "D", text: t`$c = 0$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`Bring $1$ to the left: $x^2 - y^2 + 2y + (c - 1) = 0$.`,
          t`So $a = 1$, $b = -1$, $h = g = 0$, $f = 1$, and the constant is $c - 1$.`,
          t`Condition: $(1)(-1)(c - 1) - (1)(1)^2 = 0$, so $c - 1 = -1$ and $c = 0$.`,
          t`Check: $x^2 - (y - 1)^2 = 0$ is the pair $x = \pm(y - 1)$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.3 Q6 iii)" },
      stem: t`If $x^2 + 3xy + 2y^2 - 3x - 4y + k = 0$ represents a pair of lines, then:`,
      verify: { kind: "value", inputs: { a: "1", H: "3", b: "2", G: "-3", F: "-4", c: "k" } },
      options: [
        { key: "A", text: t`$k = 8$`, correct: false, misconceptionId: "C08-M1", value: "8" },
        { key: "B", text: t`$k = -5$`, correct: false, misconceptionId: "C08-M3", value: "-5" },
        { key: "C", text: t`$k = -16$`, correct: false, misconceptionId: "C08-M4", value: "-16" },
        { key: "D", text: t`$k = 2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Compare: $a = 1$, $h = \dfrac{3}{2}$, $b = 2$, $g = -\dfrac{3}{2}$, $f = -2$, $c = k$.`,
          t`$abc = 2k$, $2fgh = 9$, $af^2 = 4$, $bg^2 = \dfrac{9}{2}$, $ch^2 = \dfrac{9k}{4}$.`,
          t`$2k + 9 - 4 - \dfrac{9}{2}$ $- \dfrac{9k}{4} = 0$ gives $-\dfrac{k}{4} + \dfrac{1}{2} = 0$, so $k = 2$.`,
          t`Check: $(x + y - 1)(x + 2y - 2)$ $= x^2 + 3xy + 2y^2 - 3x - 4y + 2$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/Misc I (9)" },
      stem: t`If $3x^2 - 8xy - 3y^2 + 10x + 10y + p = 1$ represents a pair of lines, then:`,
      verify: { kind: "value", inputs: { a: "3", H: "-8", b: "-3", G: "10", F: "10", c: "k", r: "1" } },
      options: [
        { key: "A", text: t`$p = -31$`, correct: false, misconceptionId: "C08-M1", value: "-31" },
        { key: "B", text: t`$p = -3$`, correct: false, misconceptionId: "C08-M4", value: "-3" },
        { key: "C", text: t`$p = -7$`, correct: true, value: "-7" },
        { key: "D", text: t`$p = -8$`, correct: false, misconceptionId: "C08-M5", value: "-8" },
      ],
      solution: {
        steps: [
          t`Bring $1$ over: the constant is $p - 1$; $a = 3$, $h = -4$, $b = -3$, $g = f = 5$.`,
          t`$abc = -9(p - 1)$, $2fgh = -200$, $af^2 = 75$, $bg^2 = -75$, $ch^2 = 16(p - 1)$.`,
          t`$-25(p - 1) - 200 = 0$, so $p - 1 = -8$ and $p = -7$.`,
          t`Check: $(3x + y - 2)(x - 3y + 4)$ $= 3x^2 - 8xy - 3y^2$ $+ 10x + 10y - 8$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.3 Q2" },
      stem: t`For which value of $k$ does $kx^2 + y^2 + 4x + 2y + 3 = 0$ represent a pair of lines?`,
      verify: { kind: "value", inputs: { a: "k", H: "0", b: "1", G: "4", F: "2", c: "3" } },
      options: [
        { key: "A", text: t`$k = -1$`, correct: false, misconceptionId: "C08-M3", value: "-1" },
        { key: "B", text: t`No value of $k$`, correct: true, value: "EmptySet" },
        { key: "C", text: t`$k = 2$`, correct: false, misconceptionId: "C08-M2", value: "2" },
        { key: "D", text: t`$k = -16$`, correct: false, misconceptionId: "C08-M1", value: "-16" },
      ],
      solution: {
        steps: [
          t`Compare: $a = k$, $h = 0$, $b = 1$, $g = 2$, $f = 1$, $c = 3$.`,
          t`Condition: $3k - k - 4 = 0$, so $k = 2$ is the only candidate.`,
          t`But then $h^2 - ab = 0 - 2 < 0$: the lines would not be real.`,
          t`Indeed $2x^2 + y^2 + 4x + 2y + 3$ $= 2(x + 1)^2 + (y + 1)^2$, zero only at $(-1, -1)$. No value of $k$ works.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/pair-lines-12/4.3 Ex.3" },
      stem: t`If $2x^2 + 4xy - 2y^2 + 4x + qy + 1 = 0$ represents a pair of lines, then:`,
      verify: { kind: "value", inputs: { a: "2", H: "4", b: "-2", G: "4", F: "k", c: "1" } },
      options: [
        { key: "A", text: t`$q = 4 \pm 2\sqrt{7}$`, correct: false, misconceptionId: "C08-M1", value: "{4 - 2*sqrt(7), 4 + 2*sqrt(7)}" },
        { key: "B", text: t`$q = -4 \pm 4\sqrt{3}$`, correct: false, misconceptionId: "C08-M3", value: "{-4 + 4*sqrt(3), -4*sqrt(3) - 4}" },
        { key: "C", text: t`$q = 0$ or $q = 8$`, correct: true, value: "{0, 8}" },
        { key: "D", text: t`$q = 0$ or $q = 4$`, correct: false, misconceptionId: "C08-M4", value: "{0, 4}" },
      ],
      solution: {
        steps: [
          t`Compare: $a = 2$, $h = 2$, $b = -2$, $g = 2$, $f = \dfrac{q}{2}$, $c = 1$.`,
          t`$abc = -4$, $2fgh = 4q$, $af^2 = \dfrac{q^2}{2}$, $bg^2 = -8$, $ch^2 = 4$.`,
          t`$-4 + 4q - \dfrac{q^2}{2} + 8 - 4 = 0$, so $q(8 - q) = 0$: $q = 0$ or $q = 8$.`,
          t`Both keep $h^2 - ab = 4 + 4 = 8 \ge 0$, so both give real lines.`,
        ],
      },
    },
  ],
};
