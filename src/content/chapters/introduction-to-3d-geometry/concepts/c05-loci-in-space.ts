import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A drone must stay equally far from two beacons, at $(0, 0, 0)$ and $(0, 0, 4)$. **Where in space can it fly?**`,
    reveal: t`For the drone at $P(x, y, z)$: $x^2 + y^2 + z^2$ $= x^2 + y^2 + (z - 4)^2$. Everything cancels except $0 = -8z + 16$, so $z = 2$. The drone can be anywhere on the plane $z = 2$, halfway up.`,
  },
  explanation: {
    intuition: [
      t`A condition on distances, such as $PA = PB$, picks out a set of points in space.`,
      t`Name a general point of the set $P(x, y, z)$.`,
      t`Write each distance with the distance formula, in terms of $x$, $y$ and $z$.`,
      t`Square to clear the square roots.`,
      t`Expand and simplify: what is left is the **equation of the set**.`,
      t`A point is in the set exactly when its coordinates satisfy that equation.`,
    ],
    formal: [
      {
        title: "Equidistant from two points",
        points: [
          t`Distances are never negative, so $PA = PB$ is the same as $PA^2 = PB^2$.`,
          t`Each side is then a sum of three squares, with no roots.`,
          t`Expand every square in full: $(x - a)^2 = x^2 - 2ax + a^2$.`,
          t`With a negative coordinate, $(z - (-1))^2 = (z + 1)^2$ $= z^2 + 2z + 1$.`,
          t`The $x^2$, $y^2$ and $z^2$ terms appear on both sides and cancel.`,
          t`What is left has only first powers of $x$, $y$, $z$: the set is a plane.`,
        ],
      },
      {
        title: "Example: equal distances",
        points: [
          t`Take $A(1, 2, 3)$ and $B(3, 2, -1)$, and $PA^2 = PB^2$.`,
          t`$(x - 1)^2 + (y - 2)^2 + (z - 3)^2$ $= (x - 3)^2 + (y - 2)^2$ $+ (z + 1)^2$.`,
          t`Cancel $x^2$, $z^2$ and the two $(y - 2)^2$ terms.`,
          t`Left: $-2x + 1 - 6z + 9$ $= -6x + 9 + 2z + 1$.`,
          t`So $4x - 8z = 0$, that is, $x - 2z = 0$.`,
        ],
      },
      {
        title: "A sum of squared distances",
        points: [
          t`For $PA^2 + PB^2 = k^2$ there is no root to clear: write both squares straight away.`,
          t`Now the square terms add instead of cancelling: $2(x^2 + y^2 + z^2)$.`,
          t`Collect the $x$, $y$, $z$ terms, and add up the constants from both squares.`,
          t`Example: $A(1, 0, 0)$, $B(-1, 0, 0)$ and $PA^2 + PB^2 = 10$.`,
          t`$PA^2 = x^2 - 2x + 1 + y^2 + z^2$ and $PB^2 = x^2 + 2x + 1 + y^2 + z^2$.`,
          t`Adding: $2(x^2 + y^2 + z^2) + 2 = 10$, so $x^2 + y^2 + z^2 = 4$.`,
        ],
      },
      {
        title: "A sum of two distances",
        points: [
          t`$PA + PB = s$ has two roots, and squaring it as it stands still leaves $2 \cdot PA \cdot PB$.`,
          t`So first **isolate** one root, that is, get it alone on one side: $PA = s - PB$.`,
          t`Square both whole sides: $PA^2 = s^2 - 2s \cdot PB + PB^2$.`,
          t`The squares of $x$, $y$, $z$ cancel, leaving one root, $PB$, and first powers.`,
          t`Isolate $PB$ again and square both sides a second time.`,
          t`Only after the second squaring is the equation free of roots.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the equation of the set of points $P$ the sum of whose distances from $A(0, 3, 0)$ and $B(0, -3, 0)$ is $10$.`,
      steps: [
        t`Let $P(x, y, z)$. Isolate one root: $PA = 10 - PB$, where $PB = \sqrt{x^2 + (y + 3)^2 + z^2}$.`,
        t`Square both sides: $PA^2 = 100 - 20\,PB + PB^2$.`,
        t`$PA^2 - PB^2 = (y - 3)^2 - (y + 3)^2$ $= -12y$, so $20\,PB = 100 + 12y$, that is, $5\,PB = 25 + 3y$.`,
        t`Square again: $25(x^2 + y^2 + 6y + 9 + z^2)$ $= 625 + 150y + 9y^2$.`,
        t`The $150y$ terms cancel, and $25y^2 - 9y^2 = 16y^2$: $25x^2 + 16y^2 + 25z^2 = 400$.`,
      ],
      answer: t`$25x^2 + 16y^2 + 25z^2 = 400$.`,
    },
    visualSpec: t`Drag two points $A$ and $B$ and a slider for $PA + PB$, and watch the set of points $P$ redraw as the equation changes.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Squaring a sum term by term: $(x - a)^2 = x^2 + a^2$, or $(PA + PB)^2 = PA^2 + PB^2$`,
      remediation: t`Squaring a sum keeps a middle term: $(p + q)^2 = p^2 + 2pq + q^2$. So $(x - a)^2 = x^2 - 2ax + a^2$, and for $PA + PB = s$, isolate one root before squaring.`,
      fallback: { kind: "ext", topic: "expanding (a + b)^2 and (a - b)^2" },
    },
    {
      id: "C05-M2",
      mistake: t`Expanding $(x - a)^2$ as $x^2 + 2ax + a^2$, with the wrong sign on the middle term`,
      remediation: t`The middle term takes the sign inside the bracket: $(x - a)^2 = x^2 - 2ax + a^2$. For a negative coordinate, $(x + 2)^2 = x^2 + 4x + 4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Dropping the constant $a^2$ when expanding $(x - a)^2$, as if $(x - a)^2 = x^2 - 2ax$`,
      remediation: t`Each square gives three terms: $(x - a)^2 = x^2 - 2ax + a^2$. Keep every $a^2$ and add them up; the constants decide where the set lies.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Halving the middle term: $(x - a)^2 = x^2 - ax + a^2$`,
      remediation: t`The middle term is twice the product: $(x - a)^2 = x^2 - 2ax + a^2$. For example, $(x - 3)^2 = x^2 - 6x + 9$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: t`At the second squaring, squaring only the side with the root: from $PB = L$, writing $PB^2 = L$`,
      remediation: t`Square both whole sides every time: $PB = L$ gives $PB^2 = L^2$. Then expand $L^2$ in full, middle term included.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M2 (sign slip) gives the key when $B = -A$, as on Ex 11.2 Q5 (foci $(\pm 4, 0, 0)$), so C05-Q5 leaves it out.`,
    t`For $PA = PB$ with $OA = OB$ (Ex 11.2 Q4), C05-M2 and C05-M3 both give the key: the plane passes through the origin.`,
    t`C05-M1 has no equation for $PA = PB$ (x, y, z all cancel); C05-M4 is modelled only for $PA = PB$ and $PA^2 + PB^2$; C05-M5 only for $PA + PB$.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Misc Eg.8" },
      stem: t`The set of points $P$ whose distances from $A(3, 4, -5)$ and $B(-2, 1, 4)$ are equal has the equation:`,
      verify: { kind: "value", inputs: { A: "(3, 4, -5)", B: "(-2, 1, 4)" }, params: { ask: "equi" } },
      options: [
        { key: "A", text: t`$5x + 3y - 9z - 29 = 0$`, correct: false, misconceptionId: "C05-M4", value: "5*x + 3*y - 9*z - 29" },
        { key: "B", text: t`$10x + 6y - 18z - 29 = 0$`, correct: true, value: "10*x + 6*y - 18*z - 29" },
        { key: "C", text: t`$10x + 6y - 18z + 29 = 0$`, correct: false, misconceptionId: "C05-M2", value: "10*x + 6*y - 18*z + 29" },
        { key: "D", text: t`$5x + 3y - 9z = 0$`, correct: false, misconceptionId: "C05-M3", value: "5*x + 3*y - 9*z" },
      ],
      solution: {
        steps: [
          t`$PA^2 = x^2 + y^2 + z^2$ $- 6x - 8y + 10z + 50$.`,
          t`$PB^2 = x^2 + y^2 + z^2$ $+ 4x - 2y - 8z + 21$.`,
          t`Set $PA^2 = PB^2$ and cancel the squares: $-6x - 8y + 10z + 50$ $= 4x - 2y - 8z + 21$.`,
          t`So $10x + 6y - 18z - 29 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The set of points equidistant from the origin and $(2, -4, 6)$ has the equation:`,
      verify: { kind: "value", inputs: { A: "(0, 0, 0)", B: "(2, -4, 6)" }, params: { ask: "equi" } },
      options: [
        { key: "A", text: t`$x - 2y + 3z + 14 = 0$`, correct: false, misconceptionId: "C05-M2", value: "x - 2*y + 3*z + 14" },
        { key: "B", text: t`$x - 2y + 3z = 0$`, correct: false, misconceptionId: "C05-M3", value: "x - 2*y + 3*z" },
        { key: "C", text: t`$x - 2y + 3z - 28 = 0$`, correct: false, misconceptionId: "C05-M4", value: "x - 2*y + 3*z - 28" },
        { key: "D", text: t`$x - 2y + 3z - 14 = 0$`, correct: true, value: "x - 2*y + 3*z - 14" },
      ],
      solution: {
        steps: [
          t`$PO^2 = x^2 + y^2 + z^2$ and $PB^2 = x^2 + y^2 + z^2$ $- 4x + 8y - 12z + 56$.`,
          t`Set them equal and cancel the squares: $0 = -4x + 8y - 12z + 56$.`,
          t`Divide by $4$: $x - 2y + 3z - 14 = 0$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Misc Q4" },
      stem: t`$A$ and $B$ are the points $(3, 4, 5)$ and $(-1, 3, -7)$. The set of points $P$ with $PA^2 + PB^2 = k^2$, where $k$ is a constant, has the equation:`,
      verify: { kind: "value", inputs: { A: "(3, 4, 5)", B: "(-1, 3, -7)", c: "k**2" }, params: { ask: "sumsq" } },
      options: [
        { key: "A", text: t`$2(x^2 + y^2 + z^2) - 4x - 14y$ $+ 4z = k^2 - 109$`, correct: true, value: "-k**2 + 2*x**2 - 4*x + 2*y**2 - 14*y + 2*z**2 + 4*z + 109" },
        { key: "B", text: t`$2(x^2 + y^2 + z^2) = k^2 - 109$`, correct: false, misconceptionId: "C05-M1", value: "-k**2 + 2*x**2 + 2*y**2 + 2*z**2 + 109" },
        { key: "C", text: t`$2(x^2 + y^2 + z^2) + 4x + 14y$ $- 4z = k^2 - 109$`, correct: false, misconceptionId: "C05-M2", value: "-k**2 + 2*x**2 + 4*x + 2*y**2 + 14*y + 2*z**2 - 4*z + 109" },
        { key: "D", text: t`$2(x^2 + y^2 + z^2) - 4x - 14y$ $+ 4z = k^2$`, correct: false, misconceptionId: "C05-M3", value: "-k**2 + 2*x**2 - 4*x + 2*y**2 - 14*y + 2*z**2 + 4*z" },
      ],
      solution: {
        steps: [
          t`$PA^2 = x^2 + y^2 + z^2$ $- 6x - 8y - 10z + 50$.`,
          t`$PB^2 = x^2 + y^2 + z^2$ $+ 2x - 6y + 14z + 59$.`,
          t`Add: $2(x^2 + y^2 + z^2) - 4x - 14y$ $+ 4z + 109 = k^2$.`,
          t`So $2(x^2 + y^2 + z^2) - 4x - 14y$ $+ 4z = k^2 - 109$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`$A$ and $B$ are the points $(1, 0, -2)$ and $(-3, 2, 0)$. The set of points $P$ with $PA^2 + PB^2 = 30$ has the equation:`,
      verify: { kind: "value", inputs: { A: "(1, 0, -2)", B: "(-3, 2, 0)", c: "30" }, params: { ask: "sumsq" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 + z^2 + 2x - 2y + 2z$ $= 15$`, correct: false, misconceptionId: "C05-M3", value: "x**2 + 2*x + y**2 - 2*y + z**2 + 2*z - 15" },
        { key: "B", text: t`$x^2 + y^2 + z^2 + x - y + z$ $= 6$`, correct: false, misconceptionId: "C05-M4", value: "x**2 + x + y**2 - y + z**2 + z - 6" },
        { key: "C", text: t`$x^2 + y^2 + z^2 + 2x - 2y + 2z$ $= 6$`, correct: true, value: "x**2 + 2*x + y**2 - 2*y + z**2 + 2*z - 6" },
        { key: "D", text: t`$x^2 + y^2 + z^2 = 6$`, correct: false, misconceptionId: "C05-M1", value: "x**2 + y**2 + z**2 - 6" },
      ],
      solution: {
        steps: [
          t`$PA^2 = x^2 + y^2 + z^2 - 2x + 4z + 5$.`,
          t`$PB^2 = x^2 + y^2 + z^2 + 6x - 4y + 13$.`,
          t`Add: $2(x^2 + y^2 + z^2) + 4x - 4y$ $+ 4z + 18 = 30$.`,
          t`Divide by $2$: $x^2 + y^2 + z^2 + 2x - 2y + 2z$ $= 6$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "cbse-11/introduction-to-3d-geometry/Ex 11.2 Q5" },
      stem: t`The sum of the distances of a point $P$ from $A(4, 0, 0)$ and $B(-4, 0, 0)$ is $10$. The set of such points $P$ has the equation:`,
      verify: { kind: "value", inputs: { A: "(4, 0, 0)", B: "(-4, 0, 0)", s: "10" }, params: { ask: "sumdist" } },
      options: [
        { key: "A", text: t`$9x^2 + 25y^2 + 25z^2 = 225$`, correct: true, value: "9*x**2 + 25*y**2 + 25*z**2 - 225" },
        { key: "B", text: t`$x^2 + y^2 + z^2 = 34$`, correct: false, misconceptionId: "C05-M1", value: "x**2 + y**2 + z**2 - 34" },
        { key: "C", text: t`$9x^2 + 25y^2 + 25z^2 = 625$`, correct: false, misconceptionId: "C05-M3", value: "9*x**2 + 25*y**2 + 25*z**2 - 625" },
        { key: "D", text: t`$5(x^2 + y^2 + z^2) + 36x = -55$`, correct: false, misconceptionId: "C05-M5", value: "5*x**2 + 36*x + 5*y**2 + 5*z**2 + 55" },
      ],
      solution: {
        steps: [
          t`Isolate one root, $PA = 10 - PB$, and square: $PA^2 = 100 - 20\,PB + PB^2$.`,
          t`$PA^2 - PB^2 = (x - 4)^2 - (x + 4)^2$ $= -16x$, so $20\,PB = 100 + 16x$, that is, $5\,PB = 25 + 4x$.`,
          t`Square again: $25(x^2 + 8x + 16 + y^2 + z^2)$ $= 625 + 200x + 16x^2$.`,
          t`The $200x$ terms cancel: $9x^2 + 25y^2 + 25z^2 = 225$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "exam-style", exam: "CBSE" },
      stem: t`The sum of the distances of a point $P$ from the origin $O$ and from $B(6, 0, 0)$ is $10$. The set of such points $P$ has the equation:`,
      verify: { kind: "value", inputs: { A: "(0, 0, 0)", B: "(6, 0, 0)", s: "10" }, params: { ask: "sumdist" } },
      options: [
        { key: "A", text: t`$16x^2 + 25y^2 + 25z^2 - 96x$ $= 256$`, correct: true, value: "16*x**2 - 96*x + 25*y**2 + 25*z**2 - 256" },
        { key: "B", text: t`$x^2 + y^2 + z^2 - 6x = 32$`, correct: false, misconceptionId: "C05-M1", value: "x**2 - 6*x + y**2 + z**2 - 32" },
        { key: "C", text: t`$16x^2 + 25y^2 + 25z^2 + 96x$ $= 256$`, correct: false, misconceptionId: "C05-M2", value: "16*x**2 + 96*x + 25*y**2 + 25*z**2 - 256" },
        { key: "D", text: t`$5(x^2 + y^2 + z^2) - 57x$ $= -146$`, correct: false, misconceptionId: "C05-M5", value: "5*x**2 - 57*x + 5*y**2 + 5*z**2 + 146" },
      ],
      solution: {
        steps: [
          t`Isolate one root, $PO = 10 - PB$, and square: $PO^2 = 100 - 20\,PB + PB^2$.`,
          t`$PO^2 - PB^2 = x^2 - (x - 6)^2$ $= 12x - 36$, so $20\,PB = 136 - 12x$, that is, $5\,PB = 34 - 3x$.`,
          t`Square again: $25(x^2 - 12x + 36 + y^2 + z^2)$ $= 1156 - 204x + 9x^2$.`,
          t`Collect: $16x^2 + 25y^2 + 25z^2 - 96x$ $= 256$.`,
        ],
      },
    },
  ],
};
