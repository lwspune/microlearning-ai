import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`At $\theta = 200^\circ$, **how many of the six trigonometric functions are positive?**`,
    reveal: t`Two. The arm of $200^\circ$ is in Quadrant III, where a point on it has $x < 0$ and $y < 0$, while $r > 0$. So $\sin\theta = \frac{y}{r}$ and $\cos\theta = \frac{x}{r}$ are negative, and so are cosec and sec. But $\tan\theta = \frac{y}{x}$ is a negative over a negative: positive, and so is $\cot\theta$.`,
  },
  explanation: {
    intuition: t`Put the angle in standard position and take any point $P(x, y)$ on its terminal arm. The distance $r = OP$ is always positive, so each function's sign comes only from $x$ and $y$. sin and cosec follow $y$, cos and sec follow $x$, and tan and cot follow $\frac{y}{x}$: positive when $x$ and $y$ have the same sign. As the arm turns from one quadrant to the next, $x$ or $y$ changes sign, and the functions change with it.`,
    formal: t`**Signs of $x$ and $y$**

Quadrant I: $x > 0$, $y > 0$. Quadrant II: $x < 0$, $y > 0$. Quadrant III: $x < 0$, $y < 0$. Quadrant IV: $x > 0$, $y < 0$.

**All Sin Tan Cos** (anticlockwise from Quadrant I)

$$\begin{array}{c|c} \text{Quadrant} & \text{Positive} \\ \hline \text{I} & \text{all six} \\ \text{II} & \sin, \operatorname{cosec} \\ \text{III} & \tan, \cot \\ \text{IV} & \cos, \sec \end{array}$$

The others are negative there. A reciprocal always has its partner's sign.

**Placing the angle**

Drop whole turns of $360^\circ$, never $180^\circ$. Then $0^\circ$ to $90^\circ$ is Quadrant I, $90^\circ$ to $180^\circ$ is II, $180^\circ$ to $270^\circ$ is III and $270^\circ$ to $360^\circ$ is IV. So $400^\circ = 360^\circ + 40^\circ$ is in Quadrant I. In radians the boundaries are $\frac{\pi}{2} \approx 1.57$, $\pi \approx 3.14$ and $\frac{3\pi}{2} \approx 4.71$.

**Two conditions**

Each sign condition allows two quadrants; $\theta$ lies in the one they share. $\sin\theta < 0$ (III or IV) and $\tan\theta > 0$ (I or III) put $\theta$ in Quadrant III.`,
    worked: {
      prompt: t`Which is greater, $\sin 1856^\circ$ or $\sin 2006^\circ$?`,
      steps: [
        t`$1856^\circ = 5 \times 360^\circ + 56^\circ$: coterminal with $56^\circ$, in Quadrant I. There $y > 0$, so $\sin 1856^\circ = \frac{y}{r} > 0$.`,
        t`$2006^\circ = 5 \times 360^\circ + 206^\circ$: coterminal with $206^\circ$, in Quadrant III. There $y < 0$, so $\sin 2006^\circ < 0$.`,
        t`A positive number is greater than a negative one.`,
      ],
      answer: t`$\sin 1856^\circ$ is greater.`,
      figure: {
        alt: "A circle about the origin. Step 1: the terminal arm of 1856°, which is 5 turns plus 56°, in Quadrant I, with a dashed height above the x-axis: y > 0. Step 2: the arm of 2006°, which is 5 turns plus 206°, in Quadrant III, with a dashed height below the x-axis: y < 0. Step 3: sin 1856° is marked as the greater.",
        axes: "xy",
        view: { x: [-4.4, 4.4], y: [-3.2, 3.2] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
          { kind: "label", at: [3.6, 2.4], label: "I", labelAt: "n", tone: "muted" },
          { kind: "label", at: [-3.6, 2.4], label: "II", labelAt: "n", tone: "muted" },
          { kind: "label", at: [-3.6, -2.4], label: "III", labelAt: "s", tone: "muted" },
          { kind: "vector", to: [1.118, 1.658], step: 1 },
          { kind: "angle", at: [0, 0], from: 0, to: 56, step: 1 },
          { kind: "segment", from: [1.118, 0], to: [1.118, 1.658], dashed: true, tone: "good", step: 1 },
          { kind: "label", at: [2.35, 1.7], label: "1856° → 56°", labelAt: "e", step: 1 },
          { kind: "label", at: [2.35, 1.1], label: "y > 0", labelAt: "e", step: 1, tone: "good" },
          { kind: "vector", to: [-1.798, -0.877], step: 2 },
          { kind: "angle", at: [0, 0], from: 0, to: 206, step: 2 },
          { kind: "segment", from: [-1.798, 0], to: [-1.798, -0.877], dashed: true, tone: "bad", step: 2 },
          { kind: "label", at: [-2.35, -0.9], label: "2006° → 206°", labelAt: "w", step: 2 },
          { kind: "label", at: [-2.35, -1.5], label: "y < 0", labelAt: "w", step: 2, tone: "bad" },
          { kind: "label", at: [0.3, -2.75], label: "sin 1856° is greater", labelAt: "e", tone: "good", step: 3 },
        ],
      },
    },
    figure: {
      alt: "A circle about the origin split into the four quadrants, shaded one at a time, anticlockwise. Quadrant I: all six functions positive. Quadrant II: sin and cosec positive. Quadrant III: tan and cot positive. Quadrant IV: cos and sec positive.",
      axes: "xy",
      view: { x: [-4.4, 4.4], y: [-3.2, 3.2] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
        { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 0, to: 90 }], step: 1, tone: "good" },
        { kind: "label", at: [1.6, 2.4], label: "I: all six +", labelAt: "e", tone: "good", step: 1 },
        { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 90, to: 180 }], step: 2 },
        { kind: "label", at: [-1.6, 2.4], label: "II: sin, cosec +", labelAt: "w", step: 2 },
        { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], step: 3 },
        { kind: "label", at: [-1.6, -2.4], label: "III: tan, cot +", labelAt: "w", step: 3 },
        { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 270, to: 360 }], step: 4 },
        { kind: "label", at: [1.6, -2.4], label: "IV: cos, sec +", labelAt: "e", step: 4 },
      ],
    },
    visualSpec: t`Drag the terminal arm round the circle: its quadrant lights up, the signs of $x$ and $y$ show at its tip, and the six functions show $+$ or $-$ as they change.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Reads sin from $x$ and cos from $y$ (cosec and sec follow), so sin and cos swap signs in Quadrants II and IV`,
      remediation: t`$\sin\theta = \frac{y}{r}$ and $\cos\theta = \frac{x}{r}$: sin and cosec take the sign of $y$, cos and sec the sign of $x$. In Quadrant II, $x < 0 < y$, so sin is positive and cos is negative.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: "Swaps Tan and Cos in All Sin Tan Cos: takes cos and sec as positive in Quadrant III, tan and cot in Quadrant IV",
      remediation: t`Anticlockwise from Quadrant I the order is All, Sin, Tan, Cos. In Quadrant III both $x$ and $y$ are negative, so $\frac{y}{x}$ is positive: tan and cot. In Quadrant IV only $x$ is positive: cos and sec.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: "Gives a reciprocal the opposite sign: cosec opposite to sin, sec to cos, cot to tan",
      remediation: t`A reciprocal keeps the sign, since $\frac{1}{\text{a negative}}$ is negative. cosec has the sign of sin, sec the sign of cos, and cot the sign of tan.`,
      fallback: { kind: "ext", topic: "signs of products and quotients" },
    },
    {
      id: "C02-M4",
      mistake: t`Takes the number of complete right angles as the quadrant number ($300^\circ$ has passed three, so Quadrant III)`,
      remediation: t`An angle between $0^\circ$ and $90^\circ$ is already in Quadrant I, so after $n$ complete right angles the arm is in quadrant $n + 1$. For example, $270^\circ < 315^\circ < 360^\circ$ puts $315^\circ$ in Quadrant IV.`,
      fallback: { kind: "ext", topic: "directed angles" },
    },
    {
      id: "C02-M5",
      mistake: t`Drops multiples of $180^\circ$ as if they were whole turns`,
      remediation: t`Only a whole turn of $360^\circ$ brings the arm back to the same place; a half turn of $180^\circ$ takes it to the opposite quadrant. Subtract multiples of $360^\circ$ only.`,
      fallback: { kind: "ext", topic: "coterminal angles" },
    },
    {
      id: "C02-M6",
      mistake: t`Reads an angle in radians as degrees ($4^c$ as $4^\circ$)`,
      remediation: t`$4^c$ means 4 radians, and $1^c = \frac{180^\circ}{\pi} \approx 57.3^\circ$, so $4^c \approx 229^\circ$. Compare a radian angle with $\frac{\pi}{2} \approx 1.57$, $\pi \approx 3.14$ and $\frac{3\pi}{2} \approx 4.71$.`,
      fallback: { kind: "ext", topic: "radian measure" },
    },
  ],
  engineNotes: [
    "C02-M1 changes only sin, cos, cosec and sec in Quadrants II and IV; C02-M2 changes only cos, sec, tan and cot in Quadrants III and IV; C02-M3 changes only cosec, sec and cot. Elsewhere each gives the key's sign, so draw diagnosing items from those cases.",
    t`C02-M5 gives the key unless the angle left after removing whole turns is between $180^\circ$ and $360^\circ$. C02-M4 cannot apply in Quadrant I. C02-M6 needs an angle written in radians.`,
    t`Some sign mistakes coincide: on C02-Q2 ($\sec$ in Quadrant IV) the C02-M1 option is also what C02-M2 and C02-M3 give; on C02-Q4 ($\cot$ in Quadrant III) the C02-M2 option is also what C02-M3 gives.`,
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.1 SolvedEx.1" },
      stem: t`In which quadrant does the terminal arm of $300^\circ$ lie, and what is the sign of $\sin 300^\circ$?`,
      verify: { kind: "value", inputs: { t: "5*pi/3" }, params: { ask: "qs", f: "sin" } },
      options: [
        { key: "A", text: t`Quadrant IV, negative`, correct: true, value: "(4, -1)" },
        { key: "B", text: t`Quadrant III, negative`, correct: false, misconceptionId: "C02-M4", value: "(3, -1)" },
        { key: "C", text: t`Quadrant IV, positive`, correct: false, misconceptionId: "C02-M1", value: "(4, 1)" },
        { key: "D", text: t`Quadrant II, positive`, correct: false, misconceptionId: "C02-M5", value: "(2, 1)" },
      ],
      solution: {
        steps: [
          t`$270^\circ < 300^\circ < 360^\circ$, so the terminal arm of $300^\circ$ lies in Quadrant IV. It has passed three right angles, so it is in the fourth quadrant.`,
          t`In Quadrant IV, $y < 0$ and $r > 0$, so $\sin 300^\circ = \frac{y}{r}$ is negative. Quadrant IV, negative.`,
        ],
        figure: {
          alt: "The terminal arm of 300° in Quadrant IV, which is shaded. Step 2: a dashed height below the x-axis to the arm's tip: y < 0, so sin 300° is negative.",
          axes: "xy",
          view: { x: [-4.4, 4.4], y: [-3.2, 3.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "label", at: [3.6, 2.4], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, 2.4], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, -2.4], label: "III", labelAt: "s", tone: "muted" },
            { kind: "vector", to: [1, -1.732], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 300, step: 1 },
            { kind: "label", at: [2.35, -0.9], label: "300°", labelAt: "e", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 270, to: 360 }], step: 1 },
            { kind: "label", at: [3.6, -2.4], label: "IV", labelAt: "s", step: 1 },
            { kind: "segment", from: [1, 0], to: [1, -1.732], dashed: true, tone: "bad", step: 2 },
            { kind: "label", at: [2.35, -1.5], label: "y < 0", labelAt: "e", step: 2, tone: "bad" },
          ],
        },
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q2(iii)" },
      stem: t`In which quadrant does the terminal arm of $640^\circ$ lie, and what is the sign of $\sec 640^\circ$?`,
      verify: { kind: "value", inputs: { t: "32*pi/9" }, params: { ask: "qs", f: "sec" } },
      options: [
        { key: "A", text: t`Quadrant II, negative`, correct: false, misconceptionId: "C02-M5", value: "(2, -1)" },
        { key: "B", text: t`Quadrant III, negative`, correct: false, misconceptionId: "C02-M4", value: "(3, -1)" },
        { key: "C", text: t`Quadrant IV, negative`, correct: false, misconceptionId: "C02-M1", value: "(4, -1)" },
        { key: "D", text: t`Quadrant IV, positive`, correct: true, value: "(4, 1)" },
      ],
      solution: {
        steps: [
          t`$640^\circ = 360^\circ + 280^\circ$. Drop the whole turn: $640^\circ$ is coterminal with $280^\circ$.`,
          t`$270^\circ < 280^\circ < 360^\circ$, so the arm lies in Quadrant IV, where $x > 0$.`,
          t`$\sec 640^\circ = \frac{r}{x}$ with $r > 0$ and $x > 0$, so it is positive. Quadrant IV, positive.`,
        ],
        figure: {
          alt: "Step 1: the terminal arm of 640°, the same as 280°. Step 2: Quadrant IV is shaded. Step 3: a dashed run from the y-axis to the arm's tip: x > 0, so sec 640° is positive.",
          axes: "xy",
          view: { x: [-4.4, 4.4], y: [-3.2, 3.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "label", at: [3.6, 2.4], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, 2.4], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, -2.4], label: "III", labelAt: "s", tone: "muted" },
            { kind: "vector", to: [0.347, -1.97], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 280, step: 1 },
            { kind: "label", at: [2.35, -0.9], label: "640° → 280°", labelAt: "e", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 270, to: 360 }], step: 2 },
            { kind: "label", at: [3.6, -2.4], label: "IV", labelAt: "s", step: 2 },
            { kind: "segment", from: [0, -1.97], to: [0.347, -1.97], dashed: true, tone: "good", step: 3 },
            { kind: "label", at: [2.35, -1.5], label: "x > 0", labelAt: "e", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q2(i)" },
      stem: t`In which quadrant does the terminal arm of $600^\circ$ lie, and what is the sign of $\operatorname{cosec} 600^\circ$?`,
      verify: { kind: "value", inputs: { t: "10*pi/3" }, params: { ask: "qs", f: "cosec" } },
      options: [
        { key: "A", text: t`Quadrant III, positive`, correct: false, misconceptionId: "C02-M3", value: "(3, 1)" },
        { key: "B", text: t`Quadrant III, negative`, correct: true, value: "(3, -1)" },
        { key: "C", text: t`Quadrant I, positive`, correct: false, misconceptionId: "C02-M5", value: "(1, 1)" },
        { key: "D", text: t`Quadrant II, positive`, correct: false, misconceptionId: "C02-M4", value: "(2, 1)" },
      ],
      solution: {
        steps: [
          t`$600^\circ = 360^\circ + 240^\circ$. Drop the whole turn: $600^\circ$ is coterminal with $240^\circ$.`,
          t`$180^\circ < 240^\circ < 270^\circ$, so the arm lies in Quadrant III, where $y < 0$.`,
          t`$\operatorname{cosec} 600^\circ = \frac{r}{y}$ with $r > 0$ and $y < 0$, so it is negative, the same sign as $\sin 600^\circ$. Quadrant III, negative.`,
        ],
        figure: {
          alt: "Step 1: the terminal arm of 600°, the same as 240°. Step 2: Quadrant III is shaded. Step 3: a dashed height below the x-axis to the arm's tip: y < 0, so cosec 600° is negative.",
          axes: "xy",
          view: { x: [-4.4, 4.4], y: [-3.2, 3.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "label", at: [3.6, 2.4], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, 2.4], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.6, -2.4], label: "IV", labelAt: "s", tone: "muted" },
            { kind: "vector", to: [-1, -1.732], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 240, step: 1 },
            { kind: "label", at: [-2.35, -0.9], label: "600° → 240°", labelAt: "w", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], step: 2 },
            { kind: "label", at: [-3.6, -2.4], label: "III", labelAt: "s", step: 2 },
            { kind: "segment", from: [-1, 0], to: [-1, -1.732], dashed: true, tone: "bad", step: 3 },
            { kind: "label", at: [-2.35, -1.5], label: "y < 0", labelAt: "w", step: 3, tone: "bad" },
          ],
        },
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q2(ii)" },
      stem: t`In which quadrant does the terminal arm of $1999^\circ$ lie, and what is the sign of $\cot 1999^\circ$?`,
      verify: { kind: "value", inputs: { t: "1999*pi/180" }, params: { ask: "qs", f: "cot" } },
      options: [
        { key: "A", text: t`Quadrant III, negative`, correct: false, misconceptionId: "C02-M2", value: "(3, -1)" },
        { key: "B", text: t`Quadrant III, positive`, correct: true, value: "(3, 1)" },
        { key: "C", text: t`Quadrant I, positive`, correct: false, misconceptionId: "C02-M5", value: "(1, 1)" },
        { key: "D", text: t`Quadrant II, negative`, correct: false, misconceptionId: "C02-M4", value: "(2, -1)" },
      ],
      solution: {
        steps: [
          t`$1999^\circ = 5 \times 360^\circ + 199^\circ$. Drop the five whole turns: $1999^\circ$ is coterminal with $199^\circ$.`,
          t`$180^\circ < 199^\circ < 270^\circ$, so the arm lies in Quadrant III, where $x < 0$ and $y < 0$.`,
          t`$\cot 1999^\circ = \frac{x}{y}$ is a negative over a negative, so it is positive: tan and cot are the positive pair in Quadrant III. Quadrant III, positive.`,
        ],
        figure: {
          alt: "Step 1: the terminal arm of 1999°, the same as 199°. Step 2: Quadrant III is shaded. Step 3: dashed lines show x < 0 and y < 0 at the arm's tip, so cot 1999° = x/y is positive.",
          axes: "xy",
          view: { x: [-4.4, 4.4], y: [-3.2, 3.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "label", at: [3.6, 2.4], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, 2.4], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.6, -2.4], label: "IV", labelAt: "s", tone: "muted" },
            { kind: "vector", to: [-1.891, -0.651], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 199, step: 1 },
            { kind: "label", at: [-2.35, -0.9], label: "1999° → 199°", labelAt: "w", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], step: 2 },
            { kind: "label", at: [-3.6, -2.4], label: "III", labelAt: "s", step: 2 },
            { kind: "segment", from: [0, -0.651], to: [-1.891, -0.651], dashed: true, tone: "bad", step: 3 },
            { kind: "label", at: [-2.35, -1.5], label: "x < 0", labelAt: "w", step: 3, tone: "bad" },
            { kind: "segment", from: [-1.891, 0], to: [-1.891, -0.651], dashed: true, tone: "bad", step: 3 },
            { kind: "label", at: [-2.35, -2.1], label: "y < 0", labelAt: "w", step: 3, tone: "bad" },
          ],
        },
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q3" },
      stem: t`$4^c$ means $4$ radians. In which quadrant does the terminal arm of $4^c$ lie, and what is the sign of $\cos 4^c$?`,
      verify: { kind: "value", inputs: { t: "4" }, params: { ask: "qs", f: "cos", unit: "rad" } },
      options: [
        { key: "A", text: t`Quadrant III, positive`, correct: false, misconceptionId: "C02-M2", value: "(3, 1)" },
        { key: "B", text: t`Quadrant III, negative`, correct: true, value: "(3, -1)" },
        { key: "C", text: t`Quadrant I, positive`, correct: false, misconceptionId: "C02-M6", value: "(1, 1)" },
        { key: "D", text: t`Quadrant II, negative`, correct: false, misconceptionId: "C02-M4", value: "(2, -1)" },
      ],
      solution: {
        steps: [
          t`$4^c = 4 \times \frac{180^\circ}{\pi} \approx 229^\circ$. In radians: $\pi \approx 3.14 < 4 < 4.71 \approx \frac{3\pi}{2}$.`,
          t`$180^\circ < 229^\circ < 270^\circ$, so the arm of $4^c$ lies in Quadrant III, where $x < 0$. So $\cos 4^c = \frac{x}{r}$ is negative. Quadrant III, negative.`,
          t`$4^\circ$ is in Quadrant I, so $\cos 4^\circ > 0 > \cos 4^c$: of the two, $\cos 4^\circ$ is greater.`,
        ],
        figure: {
          alt: "Step 1: the terminal arm of 4 radians, about 229°, and Quadrant III shaded. Step 2: a dashed run from the y-axis to the arm's tip: x < 0, so cos 4 radians is negative. Step 3: the arm of 4° lies just above the positive x-axis, in Quadrant I, where cos is positive.",
          axes: "xy",
          view: { x: [-4.4, 4.4], y: [-3.2, 3.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "label", at: [3.6, 2.4], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, 2.4], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.6, -2.4], label: "IV", labelAt: "s", tone: "muted" },
            { kind: "vector", to: [-1.307, -1.514], step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 229.18, step: 1 },
            { kind: "label", at: [-2.35, -0.9], label: "4ᶜ ≈ 229°", labelAt: "w", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 180, to: 270 }], step: 1 },
            { kind: "label", at: [-3.6, -2.4], label: "III", labelAt: "s", step: 1 },
            { kind: "segment", from: [0, -1.514], to: [-1.307, -1.514], dashed: true, tone: "bad", step: 2 },
            { kind: "label", at: [-2.35, -1.5], label: "x < 0", labelAt: "w", step: 2, tone: "bad" },
            { kind: "vector", to: [1.995, 0.14], tone: "good", step: 3 },
            { kind: "label", at: [2.35, 0.5], label: "4°", labelAt: "e", step: 3, tone: "good" },
          ],
        },
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q3(i)" },
      stem: t`If $\cos\theta > 0$ and $\cot\theta < 0$, then $\theta$ lies in:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cond", cond: ["cos>0", "cot<0"] } },
      options: [
        { key: "A", text: t`Quadrant IV`, correct: true, value: "4" },
        { key: "B", text: t`Quadrant II`, correct: false, misconceptionId: "C02-M1", value: "2" },
        { key: "C", text: t`Quadrant I`, correct: false, misconceptionId: "C02-M3", value: "1" },
        { key: "D", text: t`Quadrant III`, correct: false, misconceptionId: "C02-M2", value: "3" },
      ],
      solution: {
        steps: [
          t`$\cos\theta = \frac{x}{r} > 0$ means $x > 0$: Quadrant I or IV.`,
          t`$\cot\theta = \frac{x}{y} < 0$ means $x$ and $y$ have opposite signs: Quadrant II or IV.`,
          t`Both hold only in Quadrant IV, so $\theta$ lies in Quadrant IV.`,
        ],
        figure: {
          alt: "Step 1: Quadrants I and IV are shaded, where cos θ > 0. Step 2: Quadrants II and IV are shaded, where cot θ < 0. Step 3: Quadrant IV, shaded by both, is marked as the answer.",
          axes: "xy",
          view: { x: [-4.4, 4.4], y: [-3.2, 3.2] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "label", at: [3.6, 2.4], label: "I", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, 2.4], label: "II", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.6, -2.4], label: "III", labelAt: "s", tone: "muted" },
            { kind: "label", at: [3.6, -2.4], label: "IV", labelAt: "s", tone: "muted" },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 0, to: 90 }], step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 270, to: 360 }], step: 1 },
            { kind: "label", at: [0.3, 2.8], label: "cos θ > 0: I, IV", labelAt: "e", step: 1 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 90, to: 180 }], step: 2, tone: "muted" },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 270, to: 360 }], step: 2, tone: "muted" },
            { kind: "label", at: [-0.3, 2.8], label: "cot θ < 0: II, IV", labelAt: "w", tone: "muted", step: 2 },
            { kind: "region", within: [{ kind: "disc", centre: [0, 0], r: 2 }, { kind: "sector", centre: [0, 0], from: 270, to: 360 }], step: 3, tone: "good" },
            { kind: "label", at: [0.3, -2.8], label: "θ in IV", labelAt: "e", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
