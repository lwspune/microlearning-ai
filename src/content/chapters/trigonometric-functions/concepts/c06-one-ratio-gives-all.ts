import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`$\cos\theta = \frac{8}{17}$. **Is $\sin\theta = \frac{15}{17}$?**`,
    reveal: t`Not necessarily. $\sin^2\theta = 1 - \frac{64}{289} = \frac{225}{289}$, so $\sin\theta = \frac{15}{17}$ or $-\frac{15}{17}$. Both fit: $\cos\theta$ is positive in the first quadrant and in the fourth. In the first, $\sin\theta = \frac{15}{17}$; in the fourth, $\sin\theta = -\frac{15}{17}$. One value fixes the size of every other ratio, but only the quadrant fixes its sign.`,
  },
  explanation: {
    intuition: t`One ratio fixes the shape: $\cos\theta = \frac{8}{17}$ means the point on the terminal arm has $|x| = 8$, $r = 17$, so $|y| = 15$. That fixes the size of all six ratios. It does not fix where the point is: it could be above or below the $x$-axis. So the identity gives you a square, and the quadrant tells you which square root to take.`,
    formal: t`**1. The size, from an identity.** Use the identity that links the given ratio to the next one:
$$\sin^2\theta + \cos^2\theta = 1, \quad \sec^2\theta = 1 + \tan^2\theta, \quad \operatorname{cosec}^2\theta = 1 + \cot^2\theta$$
It gives a square, so there are two roots, $\pm$.

**2. The sign, from the quadrant.** Keep the root whose sign fits: all positive in I; $\sin$, $\operatorname{cosec}$ in II; $\tan$, $\cot$ in III; $\cos$, $\sec$ in IV. Read the quadrant off the interval: $\frac{\pi}{2} < \theta < \pi$ is II, $\pi < \theta < \frac{3\pi}{2}$ is III, $\frac{3\pi}{2} < \theta < 2\pi$ is IV. If $\cos\theta$ is a root of a quadratic, keep the root with the right sign.

**3. The rest, with no more roots.** $\tan\theta = \frac{\sin\theta}{\cos\theta}$, and the reciprocals $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$, $\sec\theta = \frac{1}{\cos\theta}$, $\cot\theta = \frac{1}{\tan\theta}$. These carry the signs along by themselves.

**The value of an expression.** Find each ratio it uses, with its sign, then substitute. For $\tan\theta = -\frac{20}{21}$ in the fourth quadrant: $\sec^2\theta = 1 + \frac{400}{441} = \frac{841}{441}$, and $\sec\theta$ is positive in IV, so $\sec\theta = \frac{29}{21}$, $\cos\theta = \frac{21}{29}$ and $\sin\theta = \tan\theta\cos\theta = -\frac{20}{29}$. Then $2\sin\theta + 3\cos\theta = -\frac{40}{29} + \frac{63}{29} = \frac{23}{29}$.`,
    worked: {
      prompt: t`If $\sec\theta = -3$ and $\pi < \theta < \frac{3\pi}{2}$, find the other five trigonometric functions of $\theta$.`,
      steps: [
        t`$\cos\theta = \frac{1}{\sec\theta} = -\frac{1}{3}$.`,
        t`$\tan^2\theta = \sec^2\theta - 1 = 9 - 1 = 8$, so $\tan\theta = \pm 2\sqrt{2}$.`,
        t`$\pi < \theta < \frac{3\pi}{2}$ is the third quadrant, where $\tan$ is positive: $\tan\theta = 2\sqrt{2}$ and $\cot\theta = \frac{1}{2\sqrt{2}}$.`,
        t`$\sin\theta = \tan\theta\cos\theta = 2\sqrt{2}\left(-\frac{1}{3}\right) = -\frac{2\sqrt{2}}{3}$, so $\operatorname{cosec}\theta = -\frac{3}{2\sqrt{2}}$.`,
      ],
      answer: t`$\cos\theta = -\frac{1}{3}$, $\tan\theta = 2\sqrt{2}$, $\cot\theta = \frac{1}{2\sqrt{2}}$, $\sin\theta = -\frac{2\sqrt{2}}{3}$, $\operatorname{cosec}\theta = -\frac{3}{2\sqrt{2}}$.`,
    },
    visualSpec: t`Hold $|\cos\theta|$ fixed and drag the terminal arm into each quadrant: the right triangle under it keeps its sides, so every ratio keeps its size, while a sign table lights up the ratios that turn negative.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Takes every square root as positive, ignoring the quadrant",
      remediation: t`An identity gives a square, so the ratio is $\pm$ its root. The quadrant picks the sign: in the third quadrant, for example, $\sin$ and $\cos$ are both negative.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M2",
      mistake: t`Takes $\tan\theta = \frac{\cos\theta}{\sin\theta}$: the quotient upside down`,
      remediation: t`$\tan\theta = \frac{y}{x} = \frac{\sin\theta}{\cos\theta}$, with $\sin$ on top. Its reciprocal is $\cot\theta = \frac{\cos\theta}{\sin\theta}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M3",
      mistake: t`Pairs the reciprocals the wrong way: $\sec\theta = \frac{1}{\sin\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\cos\theta}$`,
      remediation: t`$\sec\theta = \frac{1}{\cos\theta}$ and $\operatorname{cosec}\theta = \frac{1}{\sin\theta}$: each pair has exactly one **co**. So from $\sec\theta$ you get $\cos\theta$ first.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M4",
      mistake: t`Stops at the square: takes the value of $\tan^2\theta$ (or $\cos^2\theta$) as $\tan\theta$ itself`,
      remediation: t`The identity gives the square of the ratio. Take the square root before going on: $\cos^2\theta = \frac{4}{9}$ gives $\cos\theta = \pm\frac{2}{3}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C06-M1 gives the key whenever the root it takes is really positive (every first-quadrant item, or $\tan\theta$ from $\sec\theta$ in the third quadrant). Diagnose it where the root must be negative.`,
    t`C06-M2 is modelled only where $\tan$ or $\cot$ comes from $\sin$ and $\cos$; with $\tan$ or $\cot$ given it doesn't apply. It gives the key when $|\sin\theta| = |\cos\theta|$.`,
    t`C06-M3 shows only when $\sec$ or $\operatorname{cosec}$ is given or asked.`,
    t`C06-M4 gives the key when the square is $0$ or $1$ (e.g. $\sec\theta = \sqrt{2}$, where $\tan^2\theta = 1$).`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q9(i)" },
      stem: t`If $\cos\theta = -\frac{3}{5}$ and $180^\circ < \theta < 270^\circ$, then $\tan\theta =$`,
      verify: { kind: "value", inputs: { A: "-3/5" }, params: { given: "cos", q: "3", ask: "tanA" } },
      options: [
        { key: "A", text: t`$- \frac{4}{3}$`, correct: false, misconceptionId: "C06-M1", value: "-4/3" },
        { key: "B", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C06-M2", value: "3/4" },
        { key: "C", text: t`$\frac{16}{15}$`, correct: false, misconceptionId: "C06-M4", value: "16/15" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: true, value: "4/3" },
      ],
      solution: {
        steps: [
          t`$\sin^2\theta = 1 - \cos^2\theta = 1 - \frac{9}{25} = \frac{16}{25}$, so $\sin\theta = \pm\frac{4}{5}$.`,
          t`$180^\circ < \theta < 270^\circ$ is the third quadrant, where $\sin$ is negative: $\sin\theta = -\frac{4}{5}$.`,
          t`$\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{-4/5}{-3/5} = \frac{4}{3}$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.1 Q9(ii)" },
      stem: t`If $\sec A = -\frac{25}{7}$ and $A$ lies in the second quadrant, then $\tan A =$`,
      verify: { kind: "value", inputs: { A: "-25/7" }, params: { given: "sec", q: "2", ask: "tanA" } },
      options: [
        { key: "A", text: t`$- \frac{24}{7}$`, correct: true, value: "-24/7" },
        { key: "B", text: t`$\frac{24}{7}$`, correct: false, misconceptionId: "C06-M1", value: "24/7" },
        { key: "C", text: t`$\frac{7}{24}$`, correct: false, misconceptionId: "C06-M3", value: "7/24" },
        { key: "D", text: t`$- \frac{576}{49}$`, correct: false, misconceptionId: "C06-M4", value: "-576/49" },
      ],
      solution: {
        steps: [
          t`$\tan^2 A = \sec^2 A - 1 = \frac{625}{49} - 1 = \frac{576}{49}$, so $\tan A = \pm\frac{24}{7}$.`,
          t`In the second quadrant only $\sin$ and $\operatorname{cosec}$ are positive, so $\tan A = -\frac{24}{7}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.1 SolvedEx.6" },
      stem: t`If $\sec x = \frac{13}{5}$ and $x$ lies in the fourth quadrant, then $\cot x =$`,
      verify: { kind: "value", inputs: { A: "13/5" }, params: { given: "sec", q: "4", ask: "cotA" } },
      options: [
        { key: "A", text: t`$- \frac{5}{12}$`, correct: true, value: "-5/12" },
        { key: "B", text: t`$\frac{5}{12}$`, correct: false, misconceptionId: "C06-M1", value: "5/12" },
        { key: "C", text: t`$\frac{12}{5}$`, correct: false, misconceptionId: "C06-M3", value: "12/5" },
        { key: "D", text: t`$- \frac{25}{144}$`, correct: false, misconceptionId: "C06-M4", value: "-25/144" },
      ],
      solution: {
        steps: [
          t`$\tan^2 x = \sec^2 x - 1 = \frac{169}{25} - 1 = \frac{144}{25}$, so $\tan x = \pm\frac{12}{5}$.`,
          t`In the fourth quadrant $\tan$ is negative: $\tan x = -\frac{12}{5}$.`,
          t`$\cot x = \frac{1}{\tan x} = -\frac{5}{12}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q11" },
      stem: t`If $\cot\theta = \frac{3}{4}$ and $\pi < \theta < \frac{3\pi}{2}$, then $4\operatorname{cosec}\theta + 5\cos\theta =$`,
      verify: { kind: "value", inputs: { A: "3/4" }, params: { given: "cot", q: "3", ask: "4*cscA + 5*cosA" } },
      options: [
        { key: "A", text: t`$- \frac{173}{20}$`, correct: false, misconceptionId: "C06-M4", value: "-173/20" },
        { key: "B", text: t`$-8$`, correct: true, value: "-8" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C06-M1", value: "8" },
        { key: "D", text: t`$-9$`, correct: false, misconceptionId: "C06-M3", value: "-9" },
      ],
      solution: {
        steps: [
          t`$\operatorname{cosec}^2\theta = 1 + \cot^2\theta = 1 + \frac{9}{16} = \frac{25}{16}$. In the third quadrant $\operatorname{cosec}$ is negative: $\operatorname{cosec}\theta = -\frac{5}{4}$, so $\sin\theta = -\frac{4}{5}$.`,
          t`$\cos\theta = \cot\theta\sin\theta = \frac{3}{4}\left(-\frac{4}{5}\right) = -\frac{3}{5}$.`,
          t`$4\operatorname{cosec}\theta + 5\cos\theta = 4\left(-\frac{5}{4}\right) + 5\left(-\frac{3}{5}\right) = -5 - 3 = -8$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q2" },
      stem: t`If $\frac{\sin A}{3} = \frac{\sin B}{4} = \frac{1}{5}$ and $A$, $B$ are angles in the second quadrant, then $4\tan A + 3\tan B =$`,
      verify: { kind: "value", inputs: { A: "3/5", B: "4/5" }, params: { given: "sin,sin", q: "2,2", ask: "4*tanA + 3*tanB" } },
      options: [
        { key: "A", text: t`$-7$`, correct: true, value: "-7" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C06-M1", value: "7" },
        { key: "C", text: t`$- \frac{91}{12}$`, correct: false, misconceptionId: "C06-M2", value: "-91/12" },
        { key: "D", text: t`$- \frac{125}{12}$`, correct: false, misconceptionId: "C06-M4", value: "-125/12" },
      ],
      solution: {
        steps: [
          t`$\sin A = \frac{3}{5}$ and $\sin B = \frac{4}{5}$. In the second quadrant $\cos$ is negative.`,
          t`$\cos^2 A = 1 - \frac{9}{25} = \frac{16}{25}$, so $\cos A = -\frac{4}{5}$ and $\tan A = \frac{3/5}{-4/5} = -\frac{3}{4}$.`,
          t`$\cos^2 B = 1 - \frac{16}{25} = \frac{9}{25}$, so $\cos B = -\frac{3}{5}$ and $\tan B = \frac{4/5}{-3/5} = -\frac{4}{3}$.`,
          t`$4\tan A + 3\tan B = 4\left(-\frac{3}{4}\right) + 3\left(-\frac{4}{3}\right) = -3 - 4 = -7$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc I Q3" },
      stem: t`If $\alpha$ is a root of $25\cos^2\theta + 5\cos\theta - 12 = 0$ and $\frac{\pi}{2} < \alpha < \pi$, then $\tan\alpha =$`,
      verify: { kind: "value", inputs: { p2: "25", p1: "5", p0: "-12" }, params: { given: "cosroot", q: "2", ask: "tanA" } },
      options: [
        { key: "A", text: t`$- \frac{4}{3}$`, correct: false, misconceptionId: "C06-M2", value: "-4/3" },
        { key: "B", text: t`$- \frac{9}{20}$`, correct: false, misconceptionId: "C06-M4", value: "-9/20" },
        { key: "C", text: t`$- \frac{3}{4}$`, correct: true, value: "-3/4" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C06-M1", value: "4/3" },
      ],
      solution: {
        steps: [
          t`$25\cos^2\theta + 5\cos\theta - 12 = (5\cos\theta - 3)(5\cos\theta + 4) = 0$, so $\cos\theta = \frac{3}{5}$ or $-\frac{4}{5}$.`,
          t`$\frac{\pi}{2} < \alpha < \pi$ is the second quadrant, where $\cos$ is negative: $\cos\alpha = -\frac{4}{5}$.`,
          t`$\sin^2\alpha = 1 - \frac{16}{25} = \frac{9}{25}$, and $\sin$ is positive in the second quadrant: $\sin\alpha = \frac{3}{5}$.`,
          t`$\tan\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{3/5}{-4/5} = -\frac{3}{4}$.`,
        ],
      },
    },
  ],
};
