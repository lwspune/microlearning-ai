import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`The equation $x^2 + y^2 + z^2 - 2x + 4y + 6 = 0$ looks just like a sphere's. **Where is its centre, and how big is it?**`,
    reveal: t`Complete the squares: $(x - 1)^2 + (y + 2)^2 + z^2 = -1$. A sum of squares is never negative, so no point fits: it only looks like a sphere. You will learn to spot this straight from the coefficients, before completing any squares.`,
  },
  explanation: {
    intuition: [
      t`A **sphere** is the surface of a ball: every point on it is the same distance from one fixed point.`,
      t`That fixed point is the **centre**, and the common distance is the **radius** $r$.`,
      t`A point in space has three coordinates $(x, y, z)$, one along each of three perpendicular axes.`,
      t`A sphere's equation says just one thing: the distance from $(x, y, z)$ to the centre is $r$.`,
      t`Squaring both sides clears the square root and leaves a sum of three squares.`,
      t`Multiplied out, the centre and radius hide in the coefficients; you learn to read them back.`,
    ],
    formal: [
      {
        title: "Centre-radius form",
        points: [
          t`Take a point $P(x, y, z)$ and the centre $C(a, b, c)$.`,
          t`By the distance formula, $CP^2 = (x - a)^2 + (y - b)^2$ $+ (z - c)^2$.`,
          t`$P$ is on the sphere exactly when $CP = r$, that is when $CP^2 = r^2$.`,
          t`So the sphere is $(x - a)^2 + (y - b)^2$ $+ (z - c)^2 = r^2$, the **centre-radius form**.`,
          t`Example: centre $(1, -2, 0)$ and radius $3$ give $(x - 1)^2 + (y + 2)^2 + z^2 = 9$.`,
          t`Watch the signs: the centre's $y = -2$ shows up as $y + 2$.`,
        ],
      },
      {
        title: "Expanding to the general form",
        points: [
          t`Expand each square: $(x - a)^2 = x^2 - 2ax + a^2$, and the same for $y$ and $z$.`,
          t`Collect terms: $x^2 + y^2 + z^2 - 2ax - 2by - 2cz$ $+ (a^2 + b^2 + c^2 - r^2) = 0$.`,
          t`Name the coefficients $2u = -2a$, $2v = -2b$, $2w = -2c$ and the constant $d = a^2 + b^2 + c^2 - r^2$.`,
          t`This gives the **general form** $x^2 + y^2 + z^2 + 2ux$ $+ 2vy + 2wz + d = 0$.`,
          t`Example: $(x - 1)^2 + (y + 2)^2 + z^2 = 9$ becomes $x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$.`,
        ],
      },
      {
        title: "Reading the centre and radius",
        points: [
          t`Going back, $a = -u$, $b = -v$, $c = -w$: the centre is $(-u, -v, -w)$.`,
          t`In words: halve each linear coefficient, then change its sign.`,
          t`From $d = a^2 + b^2 + c^2 - r^2$ we get $r^2 = u^2 + v^2 + w^2 - d$.`,
          t`So $r = \sqrt{u^2 + v^2 + w^2 - d}$: subtract $d$, then take the square root.`,
          t`Example: $x^2 + y^2 + z^2 - 4x + 2z - 4 = 0$ has $u = -2$, $v = 0$, $w = 1$, $d = -4$.`,
          t`Its centre is $(2, 0, -1)$ and $r = \sqrt{4 + 0 + 1 + 4} = 3$.`,
        ],
      },
      {
        title: "When the equation is a sphere",
        points: [
          t`The coefficients of $x^2$, $y^2$ and $z^2$ must be equal, with no $xy$, $yz$ or $zx$ terms.`,
          t`If that common coefficient is not $1$, divide the whole equation by it first, constant included.`,
          t`Example: $4x^2 + 4y^2 + 4z^2 - 8y - 5 = 0$ becomes $x^2 + y^2 + z^2 - 2y$ $- \frac{5}{4} = 0$.`,
          t`Its centre is $(0, 1, 0)$ and $r^2 = 1 + \frac{5}{4} = \frac{9}{4}$, so $r = \frac{3}{2}$.`,
          t`A **real sphere** needs $u^2 + v^2 + w^2 - d > 0$.`,
          t`If it is $0$, only the centre fits; if it is negative, no point fits at all.`,
        ],
      },
      {
        title: "The ends of a diameter",
        points: [
          t`A **diameter** is a segment through the centre with both ends on the sphere.`,
          t`With ends $A(x_1, y_1, z_1)$ and $B(x_2, y_2, z_2)$, the centre is the midpoint of $AB$.`,
          t`The radius is half its length: $r = \frac{AB}{2}$, not $AB$.`,
          t`For any other point $P$ on the sphere, the angle $APB$ is $90^\circ$: the angle in a semicircle.`,
        ],
      },
      {
        title: "The diameter form",
        points: [
          t`**Direction ratios** of a line are three numbers in proportion to its steps along $x$, $y$ and $z$.`,
          t`$PA$ has direction ratios $x - x_1$, $y - y_1$, $z - z_1$; $PB$ has $x - x_2$, $y - y_2$, $z - z_2$.`,
          t`Two lines are perpendicular when the products of their direction ratios add up to $0$.`,
          t`So $(x - x_1)(x - x_2)$ $+ (y - y_1)(y - y_2)$ $+ (z - z_1)(z - z_2) = 0$, the **diameter form**.`,
          t`It holds at $A$ and $B$ too, so it is the whole sphere.`,
          t`Example: ends $(0, 0, 0)$ and $(2, 4, 0)$ give $x(x - 2) + y(y - 4) + z^2 = 0$.`,
        ],
      },
      {
        title: "Inside, on or outside",
        points: [
          t`Write $S(x, y, z)$ for the left side of the general form, with $x^2$, $y^2$, $z^2$ coefficients $1$.`,
          t`Completing the squares shows $S(x, y, z) = CP^2 - r^2$ for the point $P(x, y, z)$.`,
          t`So put the point's coordinates into $S$ and look at the sign.`,
          t`$S < 0$ means $CP < r$: the point is **inside**.`,
          t`$S = 0$ means the point is **on** the sphere; $S > 0$ means it is **outside**.`,
          t`Example: for $x^2 + y^2 + z^2 - 4x + 2z - 4 = 0$, the origin gives $S = -4 < 0$: inside.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the centre and radius of the sphere $2x^2 + 2y^2 + 2z^2 - 8x$ $+ 4y - 12z + 10 = 0$, and say whether the point $(1, 1, 2)$ lies inside, on or outside it.`,
      steps: [
        t`Divide by $2$: $x^2 + y^2 + z^2 - 4x + 2y$ $- 6z + 5 = 0$.`,
        t`Halve the linear coefficients: $u = -2$, $v = 1$, $w = -3$, and $d = 5$. So the centre is $(2, -1, 3)$.`,
        t`$r^2 = 4 + 1 + 9 - 5 = 9$, so $r = 3$.`,
        t`Put $(1, 1, 2)$ into the left side: $1 + 1 + 4 - 4 + 2$ $- 12 + 5 = -3$.`,
        t`$-3 < 0$, so the point is inside. Check: $CP^2 = 1 + 4 + 1 = 6 < 9$.`,
      ],
      answer: t`The centre is $(2, -1, 3)$ and the radius is $3$; the point $(1, 1, 2)$ lies inside.`,
    },
    visualSpec: t`Drag the centre and stretch the radius of a sphere in 3D while its centre-radius and general equations update term by term.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Taking the centre of $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$ as $(u, v, w)$, without changing the sign`,
      remediation: t`The centre is $(-u, -v, -w)$: halve each linear coefficient, then change its sign. So $-6x$ puts the centre at $x = 3$, and a centre at $x = a$ gives the term $-2ax$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Taking minus the whole coefficient of $x$ as the centre's $x$ (no halving): $-6x$ gives $x = 6$`,
      remediation: t`The coefficient of $x$ is $2u$, so halve it first: $-6x$ means $u = -3$ and the centre's $x = 3$. Expanding $(x - a)^2$ gives $-2ax$, not $-ax$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Adding the constant: $r^2 = u^2 + v^2 + w^2 + d$`,
      remediation: t`Expanding gives $d = a^2 + b^2 + c^2 - r^2$, so $r^2 = u^2 + v^2 + w^2 - d$: the constant is subtracted.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Reading $u, v, w, d$ off $qx^2 + qy^2 + qz^2 + \ldots = 0$ without dividing by $q$ first`,
      remediation: t`The formulae need $x^2$, $y^2$ and $z^2$ with coefficient $1$. Divide the whole equation by that coefficient first, constant included.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Mixing up $r$ and $r^2$: stopping before the square root, or putting $r$ where $r^2$ belongs`,
      remediation: t`$u^2 + v^2 + w^2 - d$ is $r^2$: take its square root to get $r$. In $(x - a)^2 + (y - b)^2$ $+ (z - c)^2 = r^2$ the right side is the radius squared.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Taking the whole length $AB$ of a diameter as the radius`,
      remediation: t`A diameter is twice the radius: the centre is the midpoint of $AB$ and $r = \frac{AB}{2}$. The diameter form $(x - x_1)(x - x_2) + \ldots = 0$ needs neither.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M1 (the centre's sign) leaves the radius unchanged, so only centre and equation items catch it.",
    t`C01-M2 (no halving) and C01-M4 (no dividing) give the same centre when the $x^2$ coefficient is $2$; C01-Q5 uses $3$. C01-M4 needs a coefficient other than $1$.`,
    t`C01-Q2 rebuilds the sphere of 2024 Sep Q65 from its solution, $2x^2 + 2y^2 + 2z^2 + 3x + 3y + 3z - 6 = 0$. C01-Q5 changes 2024 Sep Q66 (which plane holds that sphere's centre) to coefficient $3$ and asks the centre directly.`,
    t`C01-Q4 rebuilds the passage sphere $S$ of 2026 Apr Q64 from its solution: $x^2 + y^2 + z^2 - 4x - 6y - 12z + k = 0$, centre $(2, 3, 6)$.`,
    t`C01-Q6 keeps the diameter ends of 2024 Apr Q52 but asks the equation instead of $u + v + w$: on $u + v + w$ only C01-M1 and C01-M2 give distinct wrong answers.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Apr Q62" },
      stem: t`The radius of the sphere $x^2 + y^2 + z^2 - 6x$ $+ 8y - 10z + 1 = 0$ is:`,
      verify: { kind: "value", inputs: { L: "(-6, 8, -10)", D: "1" }, params: { ask: "radius" } },
      options: [
        { key: "A", text: t`$7$`, correct: true, value: "7" },
        { key: "B", text: t`$\sqrt{199}$`, correct: false, misconceptionId: "C01-M2", value: "sqrt(199)" },
        { key: "C", text: t`$\sqrt{51}$`, correct: false, misconceptionId: "C01-M3", value: "sqrt(51)" },
        { key: "D", text: t`$49$`, correct: false, misconceptionId: "C01-M5", value: "49" },
      ],
      solution: {
        steps: [
          t`Halve the linear coefficients: $u = -3$, $v = 4$, $w = -5$, and $d = 1$.`,
          t`$r^2 = u^2 + v^2 + w^2 - d$ $= 9 + 16 + 25 - 1 = 49$.`,
          t`So $r = 7$, and the centre is $(3, -4, 5)$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Sep Q65" },
      stem: t`The diameter of the sphere $2x^2 + 2y^2 + 2z^2 + 3x$ $+ 3y + 3z - 6 = 0$ is:`,
      verify: { kind: "value", inputs: { q: "2", L: "(3, 3, 3)", D: "-6" }, params: { ask: "diameter" } },
      options: [
        { key: "A", text: t`$\frac{5 \sqrt{3}}{2}$`, correct: true, value: "5*sqrt(3)/2" },
        { key: "B", text: t`$\sqrt{39}$`, correct: false, misconceptionId: "C01-M2", value: "sqrt(39)" },
        { key: "C", text: t`$\sqrt{51}$`, correct: false, misconceptionId: "C01-M4", value: "sqrt(51)" },
        { key: "D", text: t`$\frac{75}{8}$`, correct: false, misconceptionId: "C01-M5", value: "75/8" },
      ],
      solution: {
        steps: [
          t`Divide by $2$ first: $x^2 + y^2 + z^2 + \frac{3}{2}x$ $+ \frac{3}{2}y + \frac{3}{2}z - 3 = 0$.`,
          t`Then $u = v = w = \frac{3}{4}$ and $d = -3$.`,
          t`$r^2 = 3 \times \frac{9}{16} + 3 = \frac{75}{16}$, so $r = \frac{5\sqrt{3}}{4}$.`,
          t`The diameter is $2r = \frac{5\sqrt{3}}{2}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q65" },
      stem: t`The equation of the sphere with centre $(-2, 3, 4)$ and radius $6$ is:`,
      verify: { kind: "value", inputs: { C: "(-2, 3, 4)", r: "6" }, params: { ask: "eq" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 + z^2 + 2x - 3y - 4z = 7$`, correct: false, misconceptionId: "C01-M2", value: "(2, -3, -4, -7)" },
        { key: "B", text: t`$x^2 + y^2 + z^2 + 4x - 6y - 8z = -23$`, correct: false, misconceptionId: "C01-M5", value: "(4, -6, -8, 23)" },
        { key: "C", text: t`$x^2 + y^2 + z^2 + 4x - 6y - 8z = 7$`, correct: true, value: "(4, -6, -8, -7)" },
        { key: "D", text: t`$x^2 + y^2 + z^2 - 4x + 6y + 8z = 7$`, correct: false, misconceptionId: "C01-M1", value: "(-4, 6, 8, -7)" },
      ],
      solution: {
        steps: [
          t`Centre-radius form: $(x + 2)^2 + (y - 3)^2$ $+ (z - 4)^2 = 36$.`,
          t`Expand: $x^2 + 4x + 4 + y^2 - 6y + 9$ $+ z^2 - 8z + 16 = 36$.`,
          t`Collect: $x^2 + y^2 + z^2 + 4x - 6y - 8z$ $= 36 - 29 = 7$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2026 Apr Q64" },
      stem: t`The sphere $x^2 + y^2 + z^2 - 4x$ $- 6y - 12z + k = 0$ has radius $8$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { L: "(-4, -6, -12)", r: "8" }, params: { ask: "const" } },
      options: [
        { key: "A", text: t`$-15$`, correct: true, value: "-15" },
        { key: "B", text: t`$132$`, correct: false, misconceptionId: "C01-M2", value: "132" },
        { key: "C", text: t`$15$`, correct: false, misconceptionId: "C01-M3", value: "15" },
        { key: "D", text: t`$41$`, correct: false, misconceptionId: "C01-M5", value: "41" },
      ],
      solution: {
        steps: [
          t`$u = -2$, $v = -3$, $w = -6$ and $d = k$, so the centre is $(2, 3, 6)$.`,
          t`$r^2 = 4 + 9 + 36 - k = 49 - k$.`,
          t`$49 - k = 8^2 = 64$, so $k = -15$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Sep Q66" },
      stem: t`The centre of the sphere $3x^2 + 3y^2 + 3z^2 - 6x$ $+ 12y - 18z + 2 = 0$ is:`,
      verify: { kind: "value", inputs: { q: "3", L: "(-6, 12, -18)", D: "2" }, params: { ask: "centre" } },
      options: [
        { key: "A", text: t`$(1, -2, 3)$`, correct: true, value: "(1, -2, 3)" },
        { key: "B", text: t`$(-1, 2, -3)$`, correct: false, misconceptionId: "C01-M1", value: "(-1, 2, -3)" },
        { key: "C", text: t`$(2, -4, 6)$`, correct: false, misconceptionId: "C01-M2", value: "(2, -4, 6)" },
        { key: "D", text: t`$(3, -6, 9)$`, correct: false, misconceptionId: "C01-M4", value: "(3, -6, 9)" },
      ],
      solution: {
        steps: [
          t`Divide by $3$: $x^2 + y^2 + z^2 - 2x + 4y$ $- 6z + \frac{2}{3} = 0$.`,
          t`Halve the linear coefficients: $u = -1$, $v = 2$, $w = -3$.`,
          t`The centre is $(-u, -v, -w) = (1, -2, 3)$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q52" },
      stem: t`The points $A(1, -1, 2)$ and $B(2, 1, -1)$ are the ends of a diameter of a sphere. The sphere's equation is:`,
      verify: { kind: "value", inputs: { A: "(1, -1, 2)", B: "(2, 1, -1)" }, params: { ask: "eq_diam" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 + z^2 - \frac{3}{2}x - \frac{1}{2}z = 1$`, correct: false, misconceptionId: "C01-M2", value: "(-3/2, 0, -1/2, -1)" },
        { key: "B", text: t`$x^2 + y^2 + z^2 - 3x - z = \frac{23}{2}$`, correct: false, misconceptionId: "C01-M6", value: "(-3, 0, -1, -23/2)" },
        { key: "C", text: t`$x^2 + y^2 + z^2 - 3x - z = 1$`, correct: true, value: "(-3, 0, -1, -1)" },
        { key: "D", text: t`$x^2 + y^2 + z^2 + 3x + z = 1$`, correct: false, misconceptionId: "C01-M1", value: "(3, 0, 1, -1)" },
      ],
      solution: {
        steps: [
          t`Diameter form: $(x - 1)(x - 2) + (y + 1)(y - 1)$ $+ (z - 2)(z + 1) = 0$.`,
          t`Expand: $x^2 - 3x + 2 + y^2 - 1$ $+ z^2 - z - 2 = 0$.`,
          t`So $x^2 + y^2 + z^2 - 3x - z = 1$.`,
          t`Check: the centre $(\frac{3}{2}, 0, \frac{1}{2})$ is the midpoint of $AB$, and $r^2 = \frac{9}{4} + \frac{1}{4} + 1 = \frac{7}{2}$ $= \frac{AB^2}{4}$, as $AB^2 = 14$.`,
        ],
      },
    },
  ],
};
