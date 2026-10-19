import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A ball rests on a flat floor, the plane $z = 0$, and its centre is at $(3, 4, 2)$. **Nobody told you its radius. Can you still find it?**`,
    reveal: t`Yes. The ball touches the floor at the point straight below its centre, $(3, 4, 0)$, so the radius is the centre's height above the floor: $2$. Conditions such as touching a plane, being concentric with another sphere or passing through the origin fix a sphere's centre or radius just as surely as the numbers do.`,
  },
  explanation: {
    intuition: [
      t`A sphere is fixed by its **centre** and its **radius**, the distance from the centre to every point on it.`,
      t`Questions often give conditions instead of these two, and each condition hands you one of them.`,
      t`**Concentric** spheres have the same centre; only their radii differ.`,
      t`A plane **touches** a sphere when they meet at just one point.`,
      t`Then the radius is the centre's distance from the plane; a plane nearer the centre cuts the sphere in a circle.`,
      t`A sphere through the origin meets each axis at one more point, and those points fix it.`,
    ],
    formal: [
      {
        title: "Concentric spheres",
        points: [
          t`Write a sphere as $x^2 + y^2 + z^2$ $+ 2ux + 2vy + 2wz + d = 0$; its centre is $(-u, -v, -w)$.`,
          t`A sphere **concentric** with it has the same centre, so it keeps the same $2ux + 2vy + 2wz$.`,
          t`Only the constant $d$ changes: find it by putting the given point into the equation.`,
          t`Through the origin every other term is $0$, so the new $d$ is $0$.`,
          t`So the sphere concentric with $x^2 + y^2 + z^2$ $- 2x - 6y - 8z - 5 = 0$ through $O$ is $x^2 + y^2 + z^2$ $- 2x - 6y - 8z = 0$.`,
          t`Its radius is the distance from the centre to the given point.`,
        ],
      },
      {
        title: "The ends of a diameter",
        points: [
          t`A **diameter** is a segment through the centre joining two points of the sphere; call its ends $A$ and $B$.`,
          t`The centre is the midpoint of $AB$, and the radius is $\frac{1}{2}AB$.`,
          t`Ends $(1, -1, 2)$ and $(2, 1, -1)$ give the centre $\left(\frac{3}{2}, 0, \frac{1}{2}\right)$.`,
          t`So $u = -\frac{3}{2}$, $v = 0$, $w = -\frac{1}{2}$: the signs flip.`,
          t`For any other point $P$ of the sphere, $\angle APB = 90^\circ$, so $PA^2 + PB^2 = AB^2$.`,
        ],
      },
      {
        title: "Distance from centre to plane",
        points: [
          t`The **perpendicular distance** $p$ from a point to a plane is its shortest distance to the plane.`,
          t`It is measured along the **normal** $(l, m, n)$ of $lx + my + nz + k = 0$, the direction square to the plane.`,
          t`From the point $(a, b, c)$:`,
          t`$p = \frac{|la + mb + nc + k|}{\sqrt{l^2 + m^2 + n^2}}$.`,
          t`To test whether the centre lies on a plane, put it into the plane's equation: it must give $0$.`,
        ],
      },
      {
        title: "A tangent plane",
        points: [
          t`A plane is **tangent** to a sphere, or touches it, when they meet at exactly one point.`,
          t`That happens exactly when $p = r$: the radius to that point is perpendicular to the plane.`,
          t`So a sphere with a known centre touching a plane has radius $p$ and diameter $2p$.`,
          t`If $p > r$, the plane misses the sphere altogether.`,
          t`With centre $(a, b, c)$, the sphere touches the $xy$-plane when $r = |c|$.`,
          t`It touches the $z$-axis when $r = \sqrt{a^2 + b^2}$, the centre's distance from that axis.`,
        ],
      },
      {
        title: "A plane cutting a sphere",
        points: [
          t`If $p < r$, the plane cuts the sphere in a circle, the **circle of section**.`,
          t`Its centre is the **foot** of the perpendicular, where the perpendicular from the sphere's centre meets the plane.`,
          t`The sphere's centre, the foot and a point of the circle make a right angle at the foot.`,
          t`So, by Pythagoras, the circle's radius is $\sqrt{r^2 - p^2}$.`,
          t`A plane through the centre has $p = 0$ and cuts a **great circle**, of radius $r$.`,
        ],
      },
      {
        title: "Through the origin and axes",
        points: [
          t`A sphere through $O$ has $d = 0$: $x^2 + y^2 + z^2$ $+ 2ux + 2vy + 2wz = 0$.`,
          t`On the $x$-axis $y = z = 0$, so $x^2 + 2ux = 0$: $x = 0$ or $x = -2u$.`,
          t`So it meets the axes again at $A(-2u, 0, 0)$, $B(0, -2v, 0)$ and $C(0, 0, -2w)$.`,
          t`Each intercept is **twice** the centre's coordinate: the centre $(-u, -v, -w)$ is halfway out.`,
          t`The **centroid** of triangle $ABC$, the average of its three vertices, is $\frac{1}{3}(-2u, -2v, -2w)$.`,
          t`That is $\frac{2}{3}$ of the centre's coordinates, so the centroid is not the centre.`,
        ],
      },
      {
        title: "Touching all three axes",
        points: [
          t`Take radius $r$ and centre $(a, b, c)$; its distance from the $x$-axis is $\sqrt{b^2 + c^2}$.`,
          t`Touching all three axes needs $b^2 + c^2 = c^2 + a^2$ $= a^2 + b^2 = r^2$.`,
          t`So $a^2 = b^2 = c^2 = \frac{r^2}{2}$, and each of $a, b, c$ is $\pm\frac{r}{\sqrt{2}}$.`,
          t`Three free signs give $2^3 = 8$ spheres, one in each **octant**, the eight regions the coordinate planes make.`,
          t`Touching the three coordinate planes instead needs centre $(\pm r, \pm r, \pm r)$: again $8$ spheres.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sphere of radius $r$ passes through the origin and meets the axes again at $A$, $B$ and $C$. Find the locus of the centroid of triangle $ABC$.`,
      steps: [
        t`Through $O$: $x^2 + y^2 + z^2$ $+ 2ux + 2vy + 2wz = 0$, with $r^2 = u^2 + v^2 + w^2$.`,
        t`It meets the axes again at $A(-2u, 0, 0)$, $B(0, -2v, 0)$ and $C(0, 0, -2w)$.`,
        t`Call the centroid $(x, y, z)$: $x = -\frac{2u}{3}$, so $u = -\frac{3x}{2}$; likewise $v = -\frac{3y}{2}$, $w = -\frac{3z}{2}$.`,
        t`Put these into $u^2 + v^2 + w^2 = r^2$: $\frac{9}{4}(x^2 + y^2 + z^2) = r^2$.`,
      ],
      answer: t`The centroid moves on the sphere $9(x^2 + y^2 + z^2) = 4r^2$, with centre $O$ and radius $\frac{2r}{3}$.`,
    },
    visualSpec: t`Slide a plane towards a sphere's centre: the circle of section grows from a single point, where the plane is tangent, to a great circle, its radius always $\sqrt{r^2 - p^2}$.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Reading the centre of $x^2 + y^2 + z^2 + 2ux + 2vy + 2wz + d = 0$ as $(u, v, w)$, keeping the signs`,
      remediation: t`Complete the squares: $(x + u)^2 + (y + v)^2 + (z + w)^2$ $= u^2 + v^2 + w^2 - d$, so the centre is $(-u, -v, -w)$. Halve each coefficient and change its sign.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Taking $|la + mb + nc + k|$ as the distance from $(a, b, c)$ to the plane, without dividing`,
      remediation: t`The distance from $(a, b, c)$ to $lx + my + nz + k = 0$ is $\frac{|la + mb + nc + k|}{\sqrt{l^2 + m^2 + n^2}}$: always divide by the length of the normal.`,
      fallback: { kind: "ext", topic: "distance of a point from a plane (Line and Plane)" },
    },
    {
      id: "C02-M3",
      mistake: "Mixing up the radius and the diameter of a tangent sphere",
      remediation: t`The distance from the centre to a tangent plane is the **radius** $r$; the diameter is $2r$. Check which one the question asks for.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Taking $r - p$ as the radius of the circle of section`,
      remediation: t`The sphere's centre, the foot of the perpendicular and a point of the circle make a right angle at the foot, so the circle's radius is $\sqrt{r^2 - p^2}$, not $r - p$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Thinking a sphere through $O$ meets the $x$-axis at the centre's $x$-coordinate, $-u$`,
      remediation: t`Put $y = z = 0$: $x^2 + 2ux = 0$ gives $x = 0$ or $x = -2u$. Each intercept is twice the centre's coordinate.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Taking the centroid of triangle $ABC$ to be the centre of the sphere`,
      remediation: t`The centroid is $\frac{1}{3}(A + B + C)$, the average of the three vertices. The centre is half of each intercept, $\frac{3}{2}$ times the centroid.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C02-M1 (centre read as $(u, v, w)$) leaves every radius from the equation, $\sqrt{u^2 + v^2 + w^2 - d}$, unchanged, and gives the key for a concentric sphere's radius through the origin; it shows only through a distance to a plane, a point other than $O$, or the axis intercepts.`,
    t`C02-M2 gives the key whenever $l^2 + m^2 + n^2 = 1$ (planes such as $z = 3$); diagnose it with a normal longer than $1$.`,
    "C02-M3 applies only to a tangent sphere, C02-M4 only to a circle of section, C02-M5 and C02-M6 only to a sphere through O meeting the axes.",
    t`The count of spheres of radius $r$ touching the three axes (2021 Sep Q64, $8$) is on a formal slide, not an item: no misconception model gives the other counts. The locus of the centroid (2018 Apr Q60) is the worked example; C02-Q5 asks it backwards with numbers.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q61" },
      stem: t`A sphere is concentric with $x^2 + y^2 + z^2$ $- 4x + 6y - 2z - 2 = 0$ and touches the plane $6x - 3y + 2z - 2 = 0$. Its diameter is:`,
      verify: { kind: "value", inputs: { u: "-2", v: "3", w: "-1", d: "-2", l: "6", m: "-3", n: "2", k: "-2" }, params: { ask: "tan_diam" } },
      options: [
        { key: "A", text: t`$6$`, correct: true, value: "6" },
        { key: "B", text: t`$\frac{50}{7}$`, correct: false, misconceptionId: "C02-M1", value: "50/7" },
        { key: "C", text: t`$42$`, correct: false, misconceptionId: "C02-M2", value: "42" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C02-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`Concentric, so same centre: halve and flip $-4$, $6$, $-2$ to get the centre $(2, -3, 1)$.`,
          t`Touching, so $r = p = \frac{|6(2) - 3(-3) + 2(1) - 2|}{\sqrt{36 + 9 + 4}}$ $= \frac{21}{7} = 3$.`,
          t`The diameter is $2r = 6$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q92" },
      stem: t`The plane $2x - 2y + z - 9 = 0$ cuts the sphere $x^2 + y^2 + z^2$ $- 8x - 6y - 8z - 8 = 0$ in a circle. The radius of the circle is:`,
      verify: { kind: "value", inputs: { u: "-4", v: "-3", w: "-4", d: "-8", l: "2", m: "-2", n: "1", k: "-9" }, params: { ask: "section" } },
      options: [
        { key: "A", text: t`$2 \sqrt{6}$`, correct: false, misconceptionId: "C02-M1", value: "2*sqrt(6)" },
        { key: "B", text: t`$2 \sqrt{10}$`, correct: false, misconceptionId: "C02-M2", value: "2*sqrt(10)" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C02-M4", value: "6" },
        { key: "D", text: t`$4 \sqrt{3}$`, correct: true, value: "4*sqrt(3)" },
      ],
      solution: {
        steps: [
          t`The centre is $(4, 3, 4)$, and $r^2 = 16 + 9 + 16 + 8 = 49$, so $r = 7$.`,
          t`$p = \frac{|2(4) - 2(3) + 4 - 9|}{\sqrt{4 + 4 + 1}}$ $= \frac{3}{3} = 1$.`,
          t`The circle's radius is $\sqrt{r^2 - p^2}$ $= \sqrt{49 - 1} = \sqrt{48} = 4\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Apr Q91" },
      stem: t`The sphere $x^2 + y^2 + z^2$ $- 6x + 3y - 9z = 0$ passes through the origin $O$ and meets the $x$-, $y$- and $z$-axes again at $A$, $B$ and $C$. The centroid of triangle $ABC$ is:`,
      verify: { kind: "value", inputs: { u: "-3", v: "3/2", w: "-9/2" }, params: { ask: "centroid" } },
      options: [
        { key: "A", text: t`$\left(3, -\frac{3}{2}, \frac{9}{2}\right)$`, correct: false, misconceptionId: "C02-M6", value: "(3, -3/2, 9/2)" },
        { key: "B", text: t`$(2, -1, 3)$`, correct: true, value: "(2, -1, 3)" },
        { key: "C", text: t`$(-2, 1, -3)$`, correct: false, misconceptionId: "C02-M1", value: "(-2, 1, -3)" },
        { key: "D", text: t`$\left(1, -\frac{1}{2}, \frac{3}{2}\right)$`, correct: false, misconceptionId: "C02-M5", value: "(1, -1/2, 3/2)" },
      ],
      solution: {
        steps: [
          t`On the $x$-axis, $x^2 - 6x = 0$, so $x = 0$ (that is $O$) or $x = 6$: $A = (6, 0, 0)$.`,
          t`Likewise $y^2 + 3y = 0$ gives $B = (0, -3, 0)$, and $z^2 - 9z = 0$ gives $C = (0, 0, 9)$.`,
          t`The centroid is $\frac{1}{3}(6, -3, 9) = (2, -1, 3)$; the centre is $\left(3, -\frac{3}{2}, \frac{9}{2}\right)$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2026 Apr Q64" },
      stem: t`The sphere $x^2 + y^2 + z^2$ $- 8x - 8y - 8z + k = 0$ touches the plane $2x - y + 2z + 6 = 0$. The value of $k$ is:`,
      verify: { kind: "value", inputs: { u: "-4", v: "-4", w: "-4", l: "2", m: "-1", n: "2", k: "6" }, params: { ask: "tan_k" } },
      options: [
        { key: "A", text: t`$39$`, correct: false, misconceptionId: "C02-M3", value: "39" },
        { key: "B", text: t`$12$`, correct: true, value: "12" },
        { key: "C", text: t`$44$`, correct: false, misconceptionId: "C02-M1", value: "44" },
        { key: "D", text: t`$-276$`, correct: false, misconceptionId: "C02-M2", value: "-276" },
      ],
      solution: {
        steps: [
          t`The centre is $(4, 4, 4)$, and $r^2 = 16 + 16 + 16 - k$ $= 48 - k$.`,
          t`Touching, so $r = \frac{|2(4) - 4 + 2(4) + 6|}{\sqrt{4 + 1 + 4}}$ $= \frac{18}{3} = 6$.`,
          t`So $48 - k = 36$, and $k = 12$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q60" },
      stem: t`A sphere through the origin meets the $x$-, $y$- and $z$-axes again at $A$, $B$ and $C$. The centroid of triangle $ABC$ is $(1, 2, -2)$. The equation of the sphere is:`,
      verify: { kind: "value", inputs: { gx: "1", gy: "2", gz: "-2" }, params: { ask: "from_g" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 + z^2 - 2x - 4y + 4z = 0$`, correct: false, misconceptionId: "C02-M6", value: "x**2 - 2*x + y**2 - 4*y + z**2 + 4*z" },
        { key: "B", text: t`$x^2 + y^2 + z^2 - 3x - 6y + 6z = 0$`, correct: true, value: "x**2 - 3*x + y**2 - 6*y + z**2 + 6*z" },
        { key: "C", text: t`$x^2 + y^2 + z^2 + 3x + 6y - 6z = 0$`, correct: false, misconceptionId: "C02-M1", value: "x**2 + 3*x + y**2 + 6*y + z**2 - 6*z" },
        { key: "D", text: t`$x^2 + y^2 + z^2 - 6x - 12y + 12z = 0$`, correct: false, misconceptionId: "C02-M5", value: "x**2 - 6*x + y**2 - 12*y + z**2 + 12*z" },
      ],
      solution: {
        steps: [
          t`The centroid is $\frac{1}{3}(A + B + C)$, so $A = (3, 0, 0)$, $B = (0, 6, 0)$ and $C = (0, 0, -6)$.`,
          t`Through $O$, so $d = 0$, and each intercept is $-2u$, $-2v$, $-2w$: $2u = -3$, $2v = -6$, $2w = 6$.`,
          t`The sphere is $x^2 + y^2 + z^2$ $- 3x - 6y + 6z = 0$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2026 Apr Q63" },
      stem: t`A sphere $S$ is concentric with $x^2 + y^2 + z^2$ $- 8x - 6y + 2z - 10 = 0$ and passes through the origin. The plane $2x + y + 2z - 6 = 0$ cuts $S$ in a circle. The radius of that circle is:`,
      verify: { kind: "value", inputs: { u: "-4", v: "-3", w: "1", px: "0", py: "0", pz: "0", l: "2", m: "1", n: "2", k: "-6" }, params: { ask: "section" } },
      options: [
        { key: "A", text: t`$5$`, correct: true, value: "5" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "C", text: t`$\sqrt{17}$`, correct: false, misconceptionId: "C02-M2", value: "sqrt(17)" },
        { key: "D", text: t`$\sqrt{26} - 1$`, correct: false, misconceptionId: "C02-M4", value: "-1 + sqrt(26)" },
      ],
      solution: {
        steps: [
          t`The centre is $(4, 3, -1)$; through $O$, so $r = \sqrt{16 + 9 + 1} = \sqrt{26}$.`,
          t`$p = \frac{|2(4) + 3 + 2(-1) - 6|}{\sqrt{4 + 1 + 4}}$ $= \frac{3}{3} = 1$.`,
          t`The circle's radius is $\sqrt{26 - 1} = 5$.`,
        ],
      },
    },
  ],
};
