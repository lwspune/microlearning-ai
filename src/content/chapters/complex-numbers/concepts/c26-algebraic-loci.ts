import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c26: Concept = {
  id: "C26",
  status: "approved",
  hook: {
    prompt: t`Think of the points twice as far from $4$ as from $1$. **Is that a straight line, like equal distances gave?**`,
    reveal: t`No, it's a circle. Equal distances give a line, but any other ratio gives a circle (the circle of Apollonius).`,
  },
  explanation: {
    intuition: [
      t`Recall: a **locus** is the set of all points $z$ that satisfy a condition.`,
      t`Here the condition is $|z + 3| = 2|z|$: $z$ is twice as far from $-3$ as from $0$.`,
      t`The point $1 + 2i$ is $2\sqrt5$ from $-3$ and $\sqrt5$ from $0$, so it is on the locus.`,
      t`All such points form a circle, centre $1$ and radius $2$, though the condition is not $|z - a| = r$.`,
      t`To find such a curve, put $z = x + iy$, simplify, and read the **Cartesian equation**, the equation in $x$ and $y$.`,
      t`Two patterns come up often: a **ratio of distances**, like this one, and a part of a **quotient**, a division, being zero.`,
    ],
    formal: [
      {
        title: "Ratio of distances",
        points: [
          t`The condition $|z - a| = k|z - b|$, for a positive number $k$, is a ratio of distances.`,
          t`It says the distance from $a$ is $k$ times the distance from $b$.`,
          t`Recall: for $k = 1$ the distances are equal, so the locus is the perpendicular bisector of $ab$.`,
          t`For $k = 2$, twice as far from $a$ as from $b$, the locus is a circle round $b$.`,
          t`For $k = \frac12$, half as far, it is a circle round $a$.`,
          t`So only $k = 1$ gives a line: any $k \ne 1$ gives a circle.`,
        ],
        figure: {
          alt: "The points a = −3 and b = 0. For k = 1 the locus |z − a| = k|z − b| is the perpendicular bisector, the line x = −1.5. For k = 2 it is the circle with centre 1 and radius 2, round b. For k = ½ it is the circle with centre −4 and radius 2, round a.",
          view: { x: [-6.6, 4], y: [-2.6, 2.8] },
          elements: [
            { kind: "point", at: [-3, 0], label: "a = −3", labelAt: "n", step: 1 },
            { kind: "point", at: [0, 0], label: "b = 0", labelAt: "ne", step: 1 },
            { kind: "line", through: [[-1.5, -1], [-1.5, 1]], label: "k = 1", labelAt: "w", dashed: true, step: 3 },
            { kind: "circle", centre: [1, 0], r: 2, label: "k = 2", labelAt: "ne", step: 4 },
            { kind: "circle", centre: [-4, 0], r: 2, step: 5 },
            { kind: "label", at: [-5.414, 1.414], label: "k = ½", labelAt: "nw", step: 5 },
          ],
        },
      },
      {
        title: "Squaring squares k too",
        points: [
          t`To find the curve, put $z = x + iy$ and square both sides.`,
          t`The factor $k$ is squared too: $|z - a|^2 = k^2|z - b|^2$.`,
          t`Check with $1 + 2i$, on the circle $|z + 3| = 2|z|$: it is $2\sqrt5$ from $-3$ and $\sqrt5$ from $0$.`,
          t`Squared, these distances are $20$ and $5$: the ratio $2$ has become $2^2 = 4$.`,
          t`Keep $k$ on the distance from $b$: don't move it to $|z - a|$.`,
          t`For $k = 1$ the $x^2$ and $y^2$ terms cancel, leaving a line; for $k \ne 1$ they don't, leaving a circle.`,
        ],
        figure: {
          alt: "The circle |z + 3| = 2|z|, centre 1 and radius 2. Its point 1 + 2i is 2√5 from −3 and √5 from 0; squared, 20 = 4 × 5.",
          view: { x: [-4, 3.6], y: [-2.6, 2.9] },
          elements: [
            { kind: "point", at: [-3, 0], label: "−3", labelAt: "nw" },
            { kind: "point", at: [0, 0], label: "0", labelAt: "nw" },
            { kind: "circle", centre: [1, 0], r: 2 },
            { kind: "segment", from: [1, 2], to: [-3, 0], label: "2√5", labelAt: "nw", tone: "muted", step: 3 },
            { kind: "segment", from: [1, 2], to: [0, 0], label: "√5", labelAt: "e", tone: "muted", step: 3 },
            { kind: "point", at: [1, 2], label: "1 + 2i", labelAt: "ne", step: 3 },
            { kind: "label", at: [-1.3, -1.8], label: "20 = 4 × 5", labelAt: "w", tone: "good", step: 4 },
          ],
        },
      },
      {
        title: "Part of a quotient",
        points: [
          t`The second pattern sets a part of a quotient $\frac{z - a}{z - b}$ to zero, say its real part.`,
          t`To read that part, multiply top and bottom by $\overline{z - b}$, the conjugate of the bottom.`,
          t`The bottom becomes $|z - b|^2$, which is real and positive.`,
          t`So the condition moves to the top: $\operatorname{Re}\big((z - a)\overline{(z - b)}\big) = 0$.`,
          t`The point $z = b$ is left out, since there the bottom is zero.`,
          t`The same steps work when the imaginary part, $\operatorname{Im}$, is set to zero.`,
        ],
        figure: {
          alt: "The points a = 2 and b = −2 of the quotient (z − a)/(z − b). The point b is drawn hollow: it is left out of the locus, because there the bottom is zero.",
          view: { x: [-3.5, 3.5], y: [-1.6, 1.6] },
          elements: [
            { kind: "point", at: [2, 0], label: "a = 2", labelAt: "n", step: 1 },
            { kind: "point", at: [-2, 0], label: "b = −2", labelAt: "n", hollow: true, step: 1 },
            { kind: "label", at: [-2, -0.45], label: "left out", labelAt: "s", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "A quotient giving a circle",
        points: [
          t`Take $\operatorname{Re}\left(\frac{z - 2}{z + 2}\right) = 0$, with $z = x + iy$.`,
          t`Multiply top and bottom by $\overline{z + 2} = \bar z + 2$.`,
          t`The top is $(z - 2)(\bar z + 2)$, which equals $(x^2 + y^2 - 4) + 4iy$.`,
          t`Its real part is zero: $x^2 + y^2 - 4 = 0$.`,
          t`So the locus is the circle with centre $0$ and radius $2$, without $-2$.`,
        ],
        figure: {
          alt: "The locus Re((z − 2)/(z + 2)) = 0: the circle x² + y² = 4, centre 0 and radius 2, through 2 and −2, with −2 left out.",
          view: { x: [-3.5, 4], y: [-2.6, 2.6] },
          elements: [
            { kind: "point", at: [2, 0], label: "2", labelAt: "nw", step: 1 },
            { kind: "point", at: [-2, 0], label: "−2", labelAt: "nw", hollow: true, step: 1 },
            { kind: "circle", centre: [0, 0], r: 2, label: "x² + y² = 4", labelAt: "ne", step: 5 },
            { kind: "label", at: [-2, -0.45], label: "left out", labelAt: "s", tone: "bad", step: 5 },
          ],
        },
      },
      {
        title: "Purely real or purely imaginary",
        points: [
          t`Recall: a number with real part $0$ is **purely imaginary**; with imaginary part $0$, **purely real**.`,
          t`So "$\frac{z - a}{z - b}$ is purely imaginary" means its real part is $0$.`,
          t`For $\frac{z - 2}{z + 2}$ that gives the circle $x^2 + y^2 = 4$.`,
          t`And "purely real" means its imaginary part is $0$.`,
          t`For $\frac{z - 2}{z + 2}$ the top's imaginary part is $4y$, so $y = 0$: the real axis, without $-2$.`,
          t`Use the part the question names: the other part gives a different curve.`,
        ],
        figure: {
          alt: "For (z − 2)/(z + 2): real part zero gives the circle x² + y² = 4; imaginary part zero gives the real axis, y = 0. Both leave out −2.",
          view: { x: [-3.5, 4.5], y: [-2.6, 2.6] },
          elements: [
            { kind: "point", at: [2, 0], label: "2", labelAt: "nw" },
            { kind: "point", at: [-2, 0], label: "−2, left out", labelAt: "nw", hollow: true },
            { kind: "circle", centre: [0, 0], r: 2, label: "Re = 0", labelAt: "ne", step: 3 },
            { kind: "line", through: [[-1, 0], [1, 0]], label: "Im = 0", labelAt: "n", tone: "good", step: 5 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the locus $|z - 3| = 2|z|$.`,
      steps: [
        t`Square: $(x - 3)^2 + y^2 = 4(x^2 + y^2)$.`,
        t`Expand and collect: $3x^2 + 6x + 3y^2 = 9$.`,
        t`Divide by 3 and complete the square: $(x + 1)^2 + y^2 = 4$.`,
      ],
      answer: t`The circle with centre $-1$ and radius $2$.`,
      figure: {
        alt: "The locus |z − 3| = 2|z|: the circle with centre −1 and radius 2. Every point on it is twice as far from 3 as from 0.",
        view: { x: [-3.5, 4], y: [-2.6, 2.6] },
        elements: [
          { kind: "point", at: [3, 0], label: "3", labelAt: "ne" },
          { kind: "point", at: [0, 0], label: "0", labelAt: "ne" },
          { kind: "circle", centre: [-1, 0], r: 2, step: 3 },
          { kind: "point", at: [-1, 0], label: "centre −1", labelAt: "nw", tone: "muted", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The points −3 and 0. The points z with |z + 3| = 2|z| (twice as far from −3 as from 0) form a circle, centre 1 and radius 2. For example 1 + 2i is 2√5 from −3 and √5 from 0.",
      view: { x: [-4, 4], y: [-2.6, 2.9] },
      elements: [
        { kind: "point", at: [-3, 0], label: "−3", labelAt: "nw", step: 2 },
        { kind: "point", at: [0, 0], label: "0", labelAt: "nw", step: 2 },
        { kind: "segment", from: [1, 2], to: [-3, 0], label: "2√5", labelAt: "nw", tone: "muted", step: 3 },
        { kind: "segment", from: [1, 2], to: [0, 0], label: "√5", labelAt: "e", tone: "muted", step: 3 },
        { kind: "point", at: [1, 2], label: "1 + 2i", labelAt: "ne", step: 3 },
        { kind: "circle", centre: [1, 0], r: 2, step: 4 },
        { kind: "point", at: [1, 0], label: "centre 1", labelAt: "se", tone: "muted", step: 4 },
      ],
    },
    visualSpec: t`Two fixed points $a$ and $b$ with a ratio slider $k$. The locus redraws live: a straight line at $k = 1$, and circles round $a$ or $b$ as $k$ moves away from 1.`,
  },
  misconceptions: [
    {
      id: "C26-M1",
      mistake: t`Calling $|z - a| = k|z - b|$ a line when $k \ne 1$`,
      remediation: t`Only $k = 1$ gives the perpendicular bisector. Square both sides: for $k \ne 1$ the $x^2$ and $y^2$ terms don't cancel, so it's a circle.`,
      fallback: { kind: "concept", id: "C25" },
    },
    {
      id: "C26-M2",
      mistake: "Applying the condition to the numerator only",
      remediation: t`Multiply by $\overline{z - b}$ first; the condition is on $(z - a)\overline{(z - b)}$, not on $z - a$.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C26-M3",
      mistake: t`Using $k$ instead of $k^2$ after squaring`,
      remediation: t`Squaring $k|z - b|$ gives $k^2|z - b|^2$.`,
      fallback: { kind: "concept", id: "C24" },
    },
    {
      id: "C26-M4",
      mistake: "Setting the other part to zero",
      remediation: t`$\operatorname{Re} = 0$ makes the number purely imaginary; $\operatorname{Im} = 0$ makes it purely real. Use the part the question names.`,
      fallback: { kind: "concept", id: "C07" },
    },
    {
      id: "C26-M5",
      mistake: t`Putting $k$ on the wrong modulus`,
      remediation: t`In $|z - a| = k|z - b|$ the factor $k$ multiplies the distance from $b$. Squaring gives $|z - a|^2 = k^2|z - b|^2$, not $k^2|z - a|^2 = |z - b|^2$.`,
      fallback: { kind: "concept", id: "C24" },
    },
    {
      id: "C26-M6",
      mistake: t`Multiplying by $z - b$ instead of its conjugate`,
      remediation: t`Only $\overline{z - b}$ makes the bottom real: $(z - b)\overline{(z - b)} = |z - b|^2$. Multiplying by $z - b$ leaves a complex bottom, so the part of the top tells you nothing.`,
      fallback: { kind: "concept", id: "C06" },
    },
  ],
  items: [
    {
      id: "C26-Q1",
      source: { kind: "authored" },
      stem: t`$|z - 2| = 2|z + 1|$ is:`,
      verify: { kind: "locus", inputs: { a: "2", b: "-1", k: "2" }, params: { op: "apollonius" } },
      options: [
        { key: "A", text: t`$\left(x + 2\right)^2 + y^2 = 4$`, correct: true, value: "-3*x**2 - 12*x - 3*y**2" },
        { key: "B", text: t`$x = \frac{1}{2}$`, correct: false, misconceptionId: "C26-M1", value: "3 - 6*x" },
        { key: "C", text: t`$\left(x + 4\right)^2 + y^2 = 18$`, correct: false, misconceptionId: "C26-M3", value: "-x**2 - 8*x - y**2 + 2" },
        { key: "D", text: t`$\left(x - 3\right)^2 + y^2 = 4$`, correct: false, misconceptionId: "C26-M5", value: "x**2 - 6*x + y**2 + 5" },
      ],
      solution: {
        steps: [
          t`Square, with $k$ squared too: $(x - 2)^2 + y^2 = 4\big((x + 1)^2 + y^2\big)$.`,
          t`Expand and collect: $3x^2 + 12x + 3y^2 = 0$.`,
          t`Divide by 3 and complete the square: $(x + 2)^2 + y^2 = 4$, a circle with centre $-2$ and radius $2$.`,
        ],
        figure: {
          alt: "The points 2 and −1, and the locus |z − 2| = 2|z + 1|: the circle with centre −2 and radius 2.",
          view: { x: [-4.6, 3], y: [-2.6, 2.6] },
          elements: [
            { kind: "point", at: [2, 0], label: "2", labelAt: "n" },
            { kind: "point", at: [-1, 0], label: "−1", labelAt: "n" },
            { kind: "circle", centre: [-2, 0], r: 2, step: 3 },
            { kind: "point", at: [-2, 0], label: "centre −2", labelAt: "nw", tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C26-Q2",
      source: { kind: "authored" },
      stem: t`$\operatorname{Re}\left(\dfrac{z - 1}{z + 1}\right) = 0$ describes (apart from $z = -1$):`,
      verify: { kind: "locus", inputs: { a: "1", b: "-1" }, params: { op: "quotient_part", part: "re" } },
      options: [
        { key: "A", text: t`$x = 1$`, correct: false, misconceptionId: "C26-M2", value: "x - 1" },
        { key: "B", text: t`$y = 0$`, correct: false, misconceptionId: "C26-M4", value: "2*y" },
        { key: "C", text: t`$x^2 + y^2 = 1$`, correct: true, value: "x**2 + y**2 - 1" },
        { key: "D", text: t`$x^2 - y^2 = 1$`, correct: false, misconceptionId: "C26-M6", value: "x**2 - y**2 - 1" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $\overline{z + 1}$: the bottom becomes $|z + 1|^2$, real and positive.`,
          t`Top: $(z - 1)(\bar z + 1) = |z|^2 + z - \bar z - 1 = (x^2 + y^2 - 1) + 2iy$.`,
          t`Real part zero: $x^2 + y^2 - 1 = 0$, the unit circle (without $z = -1$).`,
        ],
        figure: {
          alt: "The unit circle through 1 and −1, with −1 left out: the locus Re((z − 1)/(z + 1)) = 0.",
          view: { x: [-2, 2], y: [-1.6, 1.6] },
          elements: [
            { kind: "point", at: [1, 0], label: "1", labelAt: "ne" },
            { kind: "circle", centre: [0, 0], r: 1, step: 3 },
            { kind: "point", at: [-1, 0], label: "−1, left out", labelAt: "nw", hollow: true },
          ],
        },
      },
    },
    {
      id: "C26-Q3",
      source: { kind: "authored" },
      stem: t`$\operatorname{Im}\left(\dfrac{z - i}{z + i}\right) = 0$ describes (apart from $z = -i$):`,
      verify: { kind: "locus", inputs: { a: "I", b: "-I" }, params: { op: "quotient_part", part: "im" } },
      options: [
        { key: "A", text: t`$x^2 + y^2 = 1$`, correct: false, misconceptionId: "C26-M4", value: "x**2 + y**2 - 1" },
        { key: "B", text: t`$x = 0$`, correct: true, value: "-2*x" },
        { key: "C", text: t`$y = 1$`, correct: false, misconceptionId: "C26-M2", value: "y - 1" },
        { key: "D", text: t`$xy = 0$`, correct: false, misconceptionId: "C26-M6", value: "2*x*y" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $\overline{z + i} = \bar z - i$: the bottom becomes $|z + i|^2$, real and positive.`,
          t`Top: $(z - i)(\bar z - i) = |z|^2 - i(z + \bar z) - 1 = (x^2 + y^2 - 1) - 2ix$.`,
          t`Imaginary part zero: $-2x = 0$, so $x = 0$: the imaginary axis (without $z = -i$).`,
        ],
        figure: {
          alt: "The imaginary axis, x = 0, through i and −i, with −i left out: the locus Im((z − i)/(z + i)) = 0.",
          view: { x: [-1.8, 1.8], y: [-1.8, 1.8] },
          elements: [
            { kind: "point", at: [0, 1], label: "i", labelAt: "e" },
            { kind: "line", through: [[0, -1], [0, 1]], label: "x = 0", labelAt: "e", step: 3 },
            { kind: "point", at: [0, -1], label: "−i, left out", labelAt: "e", hollow: true },
          ],
        },
      },
    },
    {
      id: "C26-Q4",
      source: { kind: "authored" },
      stem: t`$|z + 1| = 3|z - 1|$ is:`,
      verify: { kind: "locus", inputs: { a: "-1", b: "1", k: "3" }, params: { op: "apollonius" } },
      options: [
        { key: "A", text: t`$\left(x - \frac{5}{4}\right)^2 + y^2 = \frac{9}{16}$`, correct: true, value: "-8*x**2 + 20*x - 8*y**2 - 8" },
        { key: "B", text: t`$x = 0$`, correct: false, misconceptionId: "C26-M1", value: "4*x" },
        { key: "C", text: t`$\left(x - 2\right)^2 + y^2 = 3$`, correct: false, misconceptionId: "C26-M3", value: "-2*x**2 + 8*x - 2*y**2 - 2" },
        { key: "D", text: t`$\left(x + \frac{5}{4}\right)^2 + y^2 = \frac{9}{16}$`, correct: false, misconceptionId: "C26-M5", value: "x**2 + 5*x/2 + y**2 + 1" },
      ],
      solution: {
        steps: [
          t`Square, with $k$ squared too: $(x + 1)^2 + y^2 = 9\big((x - 1)^2 + y^2\big)$.`,
          t`Expand and collect: $8x^2 - 20x + 8y^2 + 8 = 0$.`,
          t`Divide by 8 and complete the square: $\left(x - \dfrac54\right)^2 + y^2 = \dfrac{9}{16}$, a circle with centre $\dfrac54$ and radius $\dfrac34$.`,
        ],
        figure: {
          alt: "The points −1 and 1, and the locus |z + 1| = 3|z − 1|: a small circle around 1, with centre 5/4 and radius 3/4.",
          view: { x: [-1.8, 2.6], y: [-1.5, 1.5] },
          elements: [
            { kind: "point", at: [-1, 0], label: "−1", labelAt: "n" },
            { kind: "point", at: [1, 0], label: "1", labelAt: "nw" },
            { kind: "circle", centre: [1.25, 0], r: 0.75, step: 3 },
            { kind: "point", at: [1.25, 0], label: "5/4", labelAt: "ne", tone: "muted", step: 3 },
          ],
        },
      },
    },
    {
      id: "C26-Q5",
      source: { kind: "authored" },
      stem: t`$\operatorname{Re}\left(\dfrac{z - 2}{z - 2i}\right) = 0$ describes (apart from $z = 2i$):`,
      verify: { kind: "locus", inputs: { a: "2", b: "2*I" }, params: { op: "quotient_part", part: "re" } },
      options: [
        { key: "A", text: t`$x = 2$`, correct: false, misconceptionId: "C26-M2", value: "x - 2" },
        { key: "B", text: t`$y = 2 - x$`, correct: false, misconceptionId: "C26-M4", value: "2*x + 2*y - 4" },
        { key: "C", text: t`$\left(x - 1\right)^2 + \left(y - 1\right)^2 = 2$`, correct: true, value: "x**2 - 2*x + y**2 - 2*y" },
        { key: "D", text: t`$\left(x - 1\right)^2 = \left(y - 1\right)^2$`, correct: false, misconceptionId: "C26-M6", value: "x**2 - 2*x - y**2 + 2*y" },
      ],
      solution: {
        steps: [
          t`Multiply top and bottom by $\overline{z - 2i} = \bar z + 2i$: the bottom becomes $|z - 2i|^2$, real and positive.`,
          t`Real part of the top: $\operatorname{Re}\big((z - 2)(\bar z + 2i)\big) = x^2 + y^2 - 2x - 2y$.`,
          t`Set it to zero and complete the squares: $(x - 1)^2 + (y - 1)^2 = 2$, the circle through $2$ and $2i$ (without $z = 2i$).`,
        ],
        figure: {
          alt: "The circle with centre 1 + i and radius √2, through 0, 2 and 2i, with 2i left out.",
          view: { x: [-1.2, 3.4], y: [-1.2, 3.4] },
          elements: [
            { kind: "point", at: [2, 0], label: "2", labelAt: "se" },
            { kind: "circle", centre: [1, 1], r: 1.414, step: 3 },
            { kind: "point", at: [1, 1], label: "1 + i", labelAt: "ne", tone: "muted", step: 3 },
            { kind: "point", at: [0, 2], label: "2i, left out", labelAt: "nw", hollow: true },
          ],
        },
      },
    },
  ],
};
