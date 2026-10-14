import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`The points $P(4, 3)$ and $Q(8, 6)$ lie on the same terminal arm. Measured from $P$, $\sin\theta = \frac{3}{OP}$; from $Q$, $\sin\theta = \frac{6}{OQ}$. **Which point gives the bigger value?**`,
    reveal: t`Neither. $OP = \sqrt{16 + 9} = 5$ and $OQ = \sqrt{64 + 36} = 10$, so $\sin\theta = \frac{3}{5}$ from $P$ and $\frac{6}{10} = \frac{3}{5}$ from $Q$. Doubling the point doubles $y$ and $r$ together, so the ratio stays the same. The trigonometric functions depend only on the arm, not on which point of it you pick.`,
  },
  explanation: {
    intuition: t`Put the angle in standard position: vertex at the origin, initial arm along the positive $X$-axis, turned anticlockwise to the terminal arm. Pick any point $P(x, y)$ on that arm and drop a perpendicular to the $X$-axis: you get a right triangle with hypotenuse $r = OP$. The six trigonometric functions are ratios of $x$, $y$ and $r$. Unlike a triangle's sides, $x$ and $y$ carry signs, so for angles past $90^\circ$ some ratios come out negative. $r$ is a distance, so it is always positive.`,
    formal: t`**The definitions.** For $\theta$ in standard position, with $P(x, y) \ne O$ on its terminal arm and $r = OP = \sqrt{x^2 + y^2}$:

$$\sin\theta = \frac{y}{r}, \quad \cos\theta = \frac{x}{r}, \quad \tan\theta = \frac{y}{x}\ (x \ne 0)$$

**The reciprocals.** $\operatorname{cosec}\theta = \frac{r}{y}$, $\sec\theta = \frac{r}{x}$, $\cot\theta = \frac{x}{y}$, wherever the bottom is not $0$. $\operatorname{cosec}$ pairs with $\sin$ (both use $y$), $\sec$ with $\cos$ (both use $x$).

**Signs come from the coordinates.** Put $x$ and $y$ in with their signs; $r$ is always positive. For $P(-12, 35)$: $r = \sqrt{144 + 1225} = 37$, so $\sin\theta = \frac{35}{37}$, $\cos\theta = -\frac{12}{37}$, $\tan\theta = -\frac{35}{12}$.

**On the unit circle** $x^2 + y^2 = 1$, $r = 1$: $\cos\theta = x$ and $\sin\theta = y$, so $P = (\cos\theta, \sin\theta)$.`,
    worked: {
      prompt: t`Find all the trigonometric functions of the angle $\theta$ in standard position whose terminal arm passes through $P(-20, -21)$.`,
      steps: [
        t`$x = -20$, $y = -21$, so $r = \sqrt{(-20)^2 + (-21)^2} = \sqrt{400 + 441} = \sqrt{841} = 29$.`,
        t`$\sin\theta = \frac{y}{r} = -\frac{21}{29}$ and $\cos\theta = \frac{x}{r} = -\frac{20}{29}$: both negative, because $x$ and $y$ are.`,
        t`$\tan\theta = \frac{y}{x} = \frac{-21}{-20} = \frac{21}{20}$: the two minus signs cancel.`,
        t`Turn each one over for the reciprocals: $\operatorname{cosec}\theta = -\frac{29}{21}$, $\sec\theta = -\frac{29}{20}$, $\cot\theta = \frac{20}{21}$.`,
      ],
      answer: t`$\sin\theta = -\frac{21}{29}$, $\cos\theta = -\frac{20}{29}$, $\tan\theta = \frac{21}{20}$, $\operatorname{cosec}\theta = -\frac{29}{21}$, $\sec\theta = -\frac{29}{20}$, $\cot\theta = \frac{20}{21}$.`,
      figure: {
        alt: "The terminal arm from the origin through P(−20, −21) in the third quadrant, with the angle θ marked from the positive x-axis. The legs x = −20 along the axis and y = −21 down to P, and OP = r = 29. Beside it, the six values: sin θ = −21/29, cos θ = −20/29, tan θ = 21/20, cosec θ = −29/21, sec θ = −29/20, cot θ = 20/21.",
        axes: "xy",
        view: { x: [-26.3, 18.3], y: [-27.3, 6.3] },
        elements: [
          { kind: "angle", at: [0, 0], from: 0, to: 226.4, tone: "muted" },
          { kind: "label", at: [2.74, 1.919], label: "θ", labelAt: "e", tone: "muted" },
          { kind: "vector", to: [-20, -21] },
          { kind: "point", at: [-20, -21], label: "P(−20, −21)", labelAt: "s" },
          { kind: "segment", from: [0, 0], to: [-20, 0], label: "x = −20", labelAt: "n", tone: "muted", step: 1 },
          { kind: "segment", from: [-20, 0], to: [-20, -21], dashed: true, label: "y = −21", labelAt: "w", tone: "muted", step: 1 },
          { kind: "label", at: [-10, -10.5], label: "r = 29", labelAt: "se", step: 1 },
          { kind: "label", at: [2, -6], label: "sin θ = −21/29", labelAt: "e", tone: "good", step: 2 },
          { kind: "label", at: [2, -9.5], label: "cos θ = −20/29", labelAt: "e", tone: "good", step: 2 },
          { kind: "label", at: [2, -13], label: "tan θ = 21/20", labelAt: "e", tone: "good", step: 3 },
          { kind: "label", at: [2, -16.5], label: "cosec θ = −29/21", labelAt: "e", step: 4 },
          { kind: "label", at: [2, -20], label: "sec θ = −29/20", labelAt: "e", step: 4 },
          { kind: "label", at: [2, -23.5], label: "cot θ = 20/21", labelAt: "e", step: 4 },
        ],
      },
    },
    figure: {
      alt: "An angle θ in standard position: the initial arm along the positive x-axis, the terminal arm from the origin O through a point P(x, y) in the second quadrant. The perpendicular from P to the x-axis makes a right triangle with a horizontal leg x along the axis, a vertical leg y, and the hypotenuse OP = r = √(x² + y²).",
      axes: "xy",
      view: { x: [-6, 3], y: [-1.5, 5] },
      elements: [
        { kind: "vector", to: [-4, 3], step: 1 },
        { kind: "angle", at: [0, 0], from: 0, to: 143.13, step: 1 },
        { kind: "label", at: [0.553, 0.387], label: "θ", labelAt: "e", step: 1 },
        { kind: "point", at: [-4, 3], label: "P(x, y)", labelAt: "n", step: 1 },
        { kind: "segment", from: [0, 0], to: [-4, 0], label: "x", labelAt: "n", tone: "muted", step: 2 },
        { kind: "segment", from: [-4, 0], to: [-4, 3], dashed: true, label: "y", labelAt: "w", tone: "muted", step: 3 },
        { kind: "label", at: [-3.2, 2.4], label: "r = √(x²+y²)", labelAt: "ne", tone: "good", step: 4 },
      ],
    },
    visualSpec: t`Drag $P$ anywhere in the plane: the terminal arm, the right triangle and $r$ follow it, and the six ratios update live, with their signs.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Takes $r = x^2 + y^2$, forgetting the square root`,
      remediation: t`$r$ is the distance $OP$, so $r = \sqrt{x^2 + y^2}$. Add the squares, then take the square root before you divide.`,
      fallback: { kind: "ext", topic: "Pythagoras theorem" },
    },
    {
      id: "C01-M2",
      mistake: t`Mixes up the coordinates: takes $\sin\theta = \frac{x}{r}$ and $\cos\theta = \frac{y}{r}$ (and so $\operatorname{cosec}\theta = \frac{r}{x}$, $\sec\theta = \frac{r}{y}$)`,
      remediation: t`$\sin\theta$ uses the vertical coordinate, $\sin\theta = \frac{y}{r}$, and $\cos\theta$ the horizontal one, $\cos\theta = \frac{x}{r}$. Their reciprocals keep the same coordinate: $\operatorname{cosec}\theta = \frac{r}{y}$, $\sec\theta = \frac{r}{x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Treats $x$ and $y$ as side lengths and drops their signs, so every ratio comes out positive`,
      remediation: t`Put $x$ and $y$ in with their signs; only $r$ is always positive. So $\sin\theta$ and $\operatorname{cosec}\theta$ take the sign of $y$, and $\cos\theta$ and $\sec\theta$ the sign of $x$.`,
      fallback: { kind: "ext", topic: "directed angles" },
    },
    {
      id: "C01-M4",
      mistake: t`Turns the ratio upside down, giving the reciprocal function's value ($\sin\theta$ as $\frac{r}{y}$, $\sec\theta$ as $\frac{x}{r}$)`,
      remediation: t`$\sin\theta$ and $\cos\theta$ have $r$ on the bottom; their reciprocals $\operatorname{cosec}\theta$ and $\sec\theta$ have $r$ on top. Check which function is asked for before you divide.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M1 gives the key when $r = 1$ (a point on the unit circle) and does not apply to $\tan$ or $\cot$, which don't use $r$: diagnose it with $\sin$, $\cos$, $\sec$ or $\operatorname{cosec}$ at a point with $r \ne 1$.`,
    t`C01-M3 gives the key whenever the ratio asked for is positive ($\sin$, $\operatorname{cosec}$ with $y > 0$; $\cos$, $\sec$ with $x > 0$; $\tan$, $\cot$ with $x$, $y$ of the same sign): diagnose it only where the ratio is negative.`,
    t`C01-M2 gives the key when $x = y$, and C01-M4 when the ratio is $\pm 1$. For $\tan$ and $\cot$ the two models always agree (each gives the other function), so an item on those can tag only one of them.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q6" },
      stem: t`The terminal arm of an angle $\theta$ in standard position passes through the point $(3, -4)$. Then $\sin\theta =$`,
      verify: { kind: "value", inputs: { x: "3", y: "-4" }, params: { f: "sin" } },
      options: [
        { key: "A", text: t`$- \frac{4}{5}$`, correct: true, value: "-4/5" },
        { key: "B", text: t`$- \frac{4}{25}$`, correct: false, misconceptionId: "C01-M1", value: "-4/25" },
        { key: "C", text: t`$\frac{4}{5}$`, correct: false, misconceptionId: "C01-M3", value: "4/5" },
        { key: "D", text: t`$- \frac{5}{4}$`, correct: false, misconceptionId: "C01-M4", value: "-5/4" },
      ],
      solution: {
        steps: [
          t`$x = 3$, $y = -4$, so $r = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5$.`,
          t`$\sin\theta = \frac{y}{r} = \frac{-4}{5} = -\frac{4}{5}$. The minus sign comes from $y$; $r$ is positive.`,
        ],
        figure: {
          alt: "The terminal arm from the origin through P(3, −4), with the angle θ marked from the positive x-axis. The legs x = 3 along the axis and y = −4 to P, and OP = r = 5. sin θ = y/r uses y = −4 and r = 5, shown in green.",
          axes: "xy",
          view: { x: [-1.7, 4.7], y: [-5.2, 1.2] },
          elements: [
            { kind: "angle", at: [0, 0], from: 0, to: 306.87, tone: "muted" },
            { kind: "label", at: [0.393, 0.275], label: "θ", labelAt: "e", tone: "muted" },
            { kind: "vector", to: [3, -4] },
            { kind: "point", at: [3, -4], label: "P(3, −4)", labelAt: "s" },
            { kind: "segment", from: [0, 0], to: [3, 0], tone: "muted", step: 1 },
            { kind: "label", at: [1.5, 0], label: "x = 3", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [3, 0], to: [3, -4], dashed: true, label: "y = −4", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [1.5, -2], label: "r = 5", labelAt: "sw", step: 1 },
            { kind: "segment", from: [0, 0], to: [3, -4], tone: "good", step: 2 },
            { kind: "segment", from: [3, 0], to: [3, -4], tone: "good", dashed: true, step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.1 SolvedEx.4" },
      stem: t`$\theta$ is the angle in standard position made by $OP$ with the $X$-axis, where $P$ is $(-5, 12)$. Then $\sec\theta =$`,
      verify: { kind: "value", inputs: { x: "-5", y: "12" }, params: { f: "sec" } },
      options: [
        { key: "A", text: t`$- \frac{13}{5}$`, correct: true, value: "-13/5" },
        { key: "B", text: t`$\frac{13}{12}$`, correct: false, misconceptionId: "C01-M2", value: "13/12" },
        { key: "C", text: t`$\frac{13}{5}$`, correct: false, misconceptionId: "C01-M3", value: "13/5" },
        { key: "D", text: t`$- \frac{5}{13}$`, correct: false, misconceptionId: "C01-M4", value: "-5/13" },
      ],
      solution: {
        steps: [
          t`$x = -5$, $y = 12$, so $r = \sqrt{(-5)^2 + 12^2} = \sqrt{169} = 13$.`,
          t`$\sec\theta$ is the reciprocal of $\cos\theta = \frac{x}{r}$, so $\sec\theta = \frac{r}{x} = \frac{13}{-5} = -\frac{13}{5}$.`,
        ],
        figure: {
          alt: "The terminal arm from the origin through P(−5, 12), with the angle θ marked from the positive x-axis. The legs x = −5 along the axis and y = 12 to P, and OP = r = 13. sec θ = r/x uses r = 13 and x = −5, shown in green.",
          axes: "xy",
          view: { x: [-12.1, 7.1], y: [-3.6, 15.6] },
          elements: [
            { kind: "angle", at: [0, 0], from: 0, to: 112.62, tone: "muted" },
            { kind: "label", at: [1.18, 0.826], label: "θ", labelAt: "e", tone: "muted" },
            { kind: "vector", to: [-5, 12] },
            { kind: "point", at: [-5, 12], label: "P(−5, 12)", labelAt: "n" },
            { kind: "segment", from: [0, 0], to: [-5, 0], tone: "muted", step: 1 },
            { kind: "label", at: [-2.664, 0], label: "x = −5", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [-5, 0], to: [-5, 12], dashed: true, label: "y = 12", labelAt: "w", tone: "muted", step: 1 },
            { kind: "label", at: [-2.5, 6], label: "r = 13", labelAt: "ne", step: 1 },
            { kind: "segment", from: [0, 0], to: [-5, 12], tone: "good", step: 2 },
            { kind: "segment", from: [0, 0], to: [-5, 0], tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.1 SolvedEx.4" },
      stem: t`The terminal arm of an angle $\theta$ in standard position passes through the point $(-8, 15)$. Then $\cos\theta =$`,
      verify: { kind: "value", inputs: { x: "-8", y: "15" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$\frac{15}{17}$`, correct: false, misconceptionId: "C01-M2", value: "15/17" },
        { key: "B", text: t`$\frac{8}{17}$`, correct: false, misconceptionId: "C01-M3", value: "8/17" },
        { key: "C", text: t`$- \frac{8}{17}$`, correct: true, value: "-8/17" },
        { key: "D", text: t`$- \frac{8}{289}$`, correct: false, misconceptionId: "C01-M1", value: "-8/289" },
      ],
      solution: {
        steps: [
          t`$x = -8$, $y = 15$, so $r = \sqrt{(-8)^2 + 15^2} = \sqrt{289} = 17$.`,
          t`$\cos\theta = \frac{x}{r} = \frac{-8}{17} = -\frac{8}{17}$. It uses the horizontal coordinate, and keeps its minus sign.`,
        ],
        figure: {
          alt: "The terminal arm from the origin through P(−8, 15), with the angle θ marked from the positive x-axis. The legs x = −8 along the axis and y = 15 to P, and OP = r = 17. cos θ = x/r uses x = −8 and r = 17, shown in green.",
          axes: "xy",
          view: { x: [-16, 8], y: [-4.5, 19.5] },
          elements: [
            { kind: "angle", at: [0, 0], from: 0, to: 118.07, tone: "muted" },
            { kind: "label", at: [1.474, 1.032], label: "θ", labelAt: "e", tone: "muted" },
            { kind: "vector", to: [-8, 15] },
            { kind: "point", at: [-8, 15], label: "P(−8, 15)", labelAt: "n" },
            { kind: "segment", from: [0, 0], to: [-8, 0], tone: "muted", step: 1 },
            { kind: "label", at: [-4, 0], label: "x = −8", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [-8, 0], to: [-8, 15], dashed: true, label: "y = 15", labelAt: "w", tone: "muted", step: 1 },
            { kind: "label", at: [-4, 7.5], label: "r = 17", labelAt: "ne", step: 1 },
            { kind: "segment", from: [0, 0], to: [-8, 15], tone: "good", step: 2 },
            { kind: "segment", from: [0, 0], to: [-8, 0], tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q6" },
      stem: t`The terminal arm of an angle $\theta$ in standard position passes through the point $(-7, -24)$. Then $\operatorname{cosec}\theta =$`,
      verify: { kind: "value", inputs: { x: "-7", y: "-24" }, params: { f: "cosec" } },
      options: [
        { key: "A", text: t`$- \frac{25}{24}$`, correct: true, value: "-25/24" },
        { key: "B", text: t`$- \frac{625}{24}$`, correct: false, misconceptionId: "C01-M1", value: "-625/24" },
        { key: "C", text: t`$- \frac{25}{7}$`, correct: false, misconceptionId: "C01-M2", value: "-25/7" },
        { key: "D", text: t`$- \frac{24}{25}$`, correct: false, misconceptionId: "C01-M4", value: "-24/25" },
      ],
      solution: {
        steps: [
          t`$x = -7$, $y = -24$, so $r = \sqrt{(-7)^2 + (-24)^2} = \sqrt{625} = 25$.`,
          t`$\operatorname{cosec}\theta$ is the reciprocal of $\sin\theta = \frac{y}{r}$, so $\operatorname{cosec}\theta = \frac{r}{y} = \frac{25}{-24} = -\frac{25}{24}$.`,
        ],
        figure: {
          alt: "The terminal arm from the origin through P(−7, −24), with the angle θ marked from the positive x-axis. The legs x = −7 along the axis and y = −24 to P, and OP = r = 25. cosec θ = r/y uses r = 25 and y = −24, shown in green.",
          axes: "xy",
          view: { x: [-22.7, 15.7], y: [-31.2, 7.2] },
          elements: [
            { kind: "angle", at: [0, 0], from: 0, to: 253.74, tone: "muted" },
            { kind: "label", at: [2.359, 1.652], label: "θ", labelAt: "e", tone: "muted" },
            { kind: "vector", to: [-7, -24] },
            { kind: "point", at: [-7, -24], label: "P(−7, −24)", labelAt: "s" },
            { kind: "segment", from: [0, 0], to: [-7, 0], tone: "muted", step: 1 },
            { kind: "label", at: [-5.328, 0], label: "x = −7", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [-7, 0], to: [-7, -24], dashed: true, label: "y = −24", labelAt: "w", tone: "muted", step: 1 },
            { kind: "label", at: [-3.5, -12], label: "r = 25", labelAt: "se", step: 1 },
            { kind: "segment", from: [0, 0], to: [-7, -24], tone: "good", step: 2 },
            { kind: "segment", from: [-7, 0], to: [-7, -24], tone: "good", dashed: true, step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q6" },
      stem: t`The terminal arm of an angle $\theta$ in standard position passes through the point $(12, -5)$. Then $\cos\theta =$`,
      verify: { kind: "value", inputs: { x: "12", y: "-5" }, params: { f: "cos" } },
      options: [
        { key: "A", text: t`$\frac{12}{13}$`, correct: true, value: "12/13" },
        { key: "B", text: t`$\frac{12}{169}$`, correct: false, misconceptionId: "C01-M1", value: "12/169" },
        { key: "C", text: t`$- \frac{5}{13}$`, correct: false, misconceptionId: "C01-M2", value: "-5/13" },
        { key: "D", text: t`$\frac{13}{12}$`, correct: false, misconceptionId: "C01-M4", value: "13/12" },
      ],
      solution: {
        steps: [
          t`$x = 12$, $y = -5$, so $r = \sqrt{12^2 + (-5)^2} = \sqrt{169} = 13$.`,
          t`$\cos\theta = \frac{x}{r} = \frac{12}{13}$. It is positive because $x$ is; the negative $y$ does not enter $\cos\theta$.`,
        ],
        figure: {
          alt: "The terminal arm from the origin through P(12, −5), with the angle θ marked from the positive x-axis. The legs x = 12 along the axis and y = −5 to P, and OP = r = 13. cos θ = x/r uses x = 12 and r = 13, shown in green.",
          axes: "xy",
          view: { x: [-3.6, 15.6], y: [-8.6, 3.6] },
          elements: [
            { kind: "angle", at: [0, 0], from: 0, to: 337.38, tone: "muted" },
            { kind: "label", at: [1.18, 0.826], label: "θ", labelAt: "e", tone: "muted" },
            { kind: "vector", to: [12, -5] },
            { kind: "point", at: [12, -5], label: "P(12, −5)", labelAt: "s" },
            { kind: "segment", from: [0, 0], to: [12, 0], tone: "muted", step: 1 },
            { kind: "label", at: [6, 0], label: "x = 12", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [12, 0], to: [12, -5], dashed: true, label: "y = −5", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [6, -2.5], label: "r = 13", labelAt: "sw", step: 1 },
            { kind: "segment", from: [0, 0], to: [12, -5], tone: "good", step: 2 },
            { kind: "segment", from: [0, 0], to: [12, 0], tone: "good", step: 2 },
          ],
        },
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q6" },
      stem: t`The terminal arm of an angle $\theta$ in standard position passes through the point $(2, -1)$. Then $\operatorname{cosec}\theta =$`,
      verify: { kind: "value", inputs: { x: "2", y: "-1" }, params: { f: "cosec" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{5}}{2}$`, correct: false, misconceptionId: "C01-M2", value: "sqrt(5)/2" },
        { key: "B", text: t`$\sqrt{5}$`, correct: false, misconceptionId: "C01-M3", value: "sqrt(5)" },
        { key: "C", text: t`$- \sqrt{5}$`, correct: true, value: "-sqrt(5)" },
        { key: "D", text: t`$-5$`, correct: false, misconceptionId: "C01-M1", value: "-5" },
      ],
      solution: {
        steps: [
          t`$x = 2$, $y = -1$, so $r = \sqrt{2^2 + (-1)^2} = \sqrt{5}$. Not a perfect square: keep the surd.`,
          t`$\operatorname{cosec}\theta = \frac{r}{y} = \frac{\sqrt{5}}{-1} = -\sqrt{5}$.`,
        ],
        figure: {
          alt: "The terminal arm from the origin through P(2, −1), with the angle θ marked from the positive x-axis. The legs x = 2 along the axis and y = −1 to P, and OP = r = √5. cosec θ = r/y uses r = √5 and y = −1, shown in green.",
          axes: "xy",
          view: { x: [-0.6, 2.6], y: [-1.6, 0.6] },
          elements: [
            { kind: "angle", at: [0, 0], from: 0, to: 333.43, tone: "muted" },
            { kind: "label", at: [0.197, 0.138], label: "θ", labelAt: "e", tone: "muted" },
            { kind: "vector", to: [2, -1] },
            { kind: "point", at: [2, -1], label: "P(2, −1)", labelAt: "s" },
            { kind: "segment", from: [0, 0], to: [2, 0], tone: "muted", step: 1 },
            { kind: "label", at: [1, 0], label: "x = 2", labelAt: "n", tone: "muted", step: 1 },
            { kind: "segment", from: [2, 0], to: [2, -1], dashed: true, label: "y = −1", labelAt: "e", tone: "muted", step: 1 },
            { kind: "label", at: [1, -0.5], label: "r = √5", labelAt: "sw", step: 1 },
            { kind: "segment", from: [0, 0], to: [2, -1], tone: "good", step: 2 },
            { kind: "segment", from: [2, 0], to: [2, -1], tone: "good", dashed: true, step: 2 },
          ],
        },
      },
    },
  ],
};
