import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Is there an angle with $\sec\theta = \frac{1}{2}$? One with $\tan\theta = 100$?`,
    reveal: t`No angle has $\sec\theta = \frac{1}{2}$: $\sec\theta = \frac{r}{x}$ and $x$ is never bigger than $r$ in size, so $\sec\theta$ is never between $-1$ and $1$. But $\tan\theta = 100$ is fine: take the point $(1, 100)$, then $\tan\theta = \frac{y}{x} = 100$. Each function has its own **range**.`,
  },
  explanation: {
    intuition: t`Take $P(x, y)$ on a circle of radius $r$. Neither $x$ nor $y$ can be bigger than $r$ in size, so $\sin\theta = \frac{y}{r}$ and $\cos\theta = \frac{x}{r}$ stay between $-1$ and $1$, ends included. Their reciprocals $\sec\theta$ and $\operatorname{cosec}\theta$ are then at least $1$ in size, while $\frac{y}{x}$ can be any number at all. One full turn brings $P$ back to the same place, so every function repeats after $2\pi$. Half a turn sends $P$ to $(-x, -y)$: $\frac{y}{x}$ is unchanged, so $\tan\theta$ already repeats after $\pi$.`,
    formal: t`**Ranges**

- $-1 \le \sin\theta \le 1$ and $-1 \le \cos\theta \le 1$ (the ends are reached: $\sin 90^\circ = 1$, $\cos 180^\circ = -1$).
- $\sec\theta, \operatorname{cosec}\theta \le -1$ or $\ge 1$.
- $\tan\theta$ and $\cot\theta$ take every real value.

**Rejecting impossible roots.** Turn the equation into a quadratic in one function, solve it, then test each root against that function's range. A root outside the range gives no angle: drop it.

**Least values.** $\tan\theta$ and $\cot\theta$ are tied: $\tan\theta \cot\theta = 1$. So $\tan^2\theta + \cot^2\theta = (\tan\theta - \cot\theta)^2 + 2 \ge 2$, and $1 - 2\sin\theta\cos\theta = (\sin\theta - \cos\theta)^2 \ge 0$.

**Periods.** $\sin(\theta + 2\pi) = \sin\theta$ and $\cos(\theta + 2\pi) = \cos\theta$: period $2\pi$ (so also for $\operatorname{cosec}$, $\sec$). $\tan(\theta + \pi) = \tan\theta$: period $\pi$ (so also for $\cot$). For example, $\sin\frac{41\pi}{4} = \sin\left(10\pi + \frac{\pi}{4}\right) = \sin\frac{\pi}{4} = \frac{1}{\sqrt{2}}$.`,
    worked: {
      prompt: t`If $2\sin^2\theta + 7\cos\theta = 5$, find the permissible values of $\cos\theta$.`,
      steps: [
        t`Write everything in $\cos\theta$: $2(1 - \cos^2\theta) + 7\cos\theta = 5$.`,
        t`Tidy up: $2\cos^2\theta - 7\cos\theta + 3 = 0$, so $(2\cos\theta - 1)(\cos\theta - 3) = 0$.`,
        t`The roots are $\cos\theta = \frac{1}{2}$ and $\cos\theta = 3$.`,
        t`$\cos\theta$ can never be more than $1$, so $3$ is impossible. $\frac{1}{2}$ is fine ($\theta = 60^\circ$).`,
      ],
      answer: t`$\cos\theta = \frac{1}{2}$`,
    },
    visualSpec: t`Drag $P$ round a circle and watch $\frac{y}{r}$ slide between $-1$ and $1$ while $\frac{y}{x}$ runs off to very large values as $P$ nears the $y$-axis.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Accepts every root of the quadratic without checking it against the function's range.",
      remediation: t`After solving, test each root: $\sin\theta$ and $\cos\theta$ lie in $[-1, 1]$; $\sec\theta$ and $\operatorname{cosec}\theta$ are $\le -1$ or $\ge 1$. A root outside the range gives no angle, so drop it.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M2",
      mistake: t`Thinks every trigonometric function stays between $-1$ and $1$, as $\sin\theta$ and $\cos\theta$ do.`,
      remediation: t`Only $\sin\theta$ and $\cos\theta$ are trapped in $[-1, 1]$. $\sec\theta = \frac{r}{x}$ and $\operatorname{cosec}\theta = \frac{r}{y}$ are at least $1$ in size, and $\tan\theta$, $\cot\theta$ take every real value.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M3",
      mistake: t`Right-triangle habit: thinks $\sin\theta$ and $\cos\theta$ lie between $0$ and $1$ (and $\sec\theta \ge 1$, $\tan\theta \ge 0$), so rejects negative values.`,
      remediation: t`Beyond $90^\circ$ the co-ordinates $x$ and $y$ can be negative, so $\sin\theta$ and $\cos\theta$ run from $-1$ to $1$ and $\tan\theta$ can be negative. The range caps the size, not the sign.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M4",
      mistake: t`Thinks $\sin\theta$ and $\cos\theta$ never actually reach $1$ or $-1$, so rejects a root equal to $\pm 1$.`,
      remediation: t`The range includes its ends: $\sin 90^\circ = 1$, $\sin 270^\circ = -1$, $\cos 0^\circ = 1$, $\cos 180^\circ = -1$. A root of exactly $1$ or $-1$ is allowed.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C09-M5",
      mistake: t`Takes the least value of a sum as the sum of each term's least value, forgetting that $\tan\theta \cot\theta = 1$.`,
      remediation: t`$\tan^2\theta$ and $\cot^2\theta$ can't both be $0$: their product is $1$. Write the sum as a perfect square plus a number, e.g. $\tan^2\theta + \cot^2\theta = (\tan\theta - \cot\theta)^2 + 2$.`,
      fallback: { kind: "ext", topic: "completing the square" },
    },
    {
      id: "C09-M6",
      mistake: t`Slips the sign of the middle term: factorises $at^2 + bt + c$ as if it were $at^2 - bt + c$ (every root changes sign), or completes a square with $(p + q)^2$ where $(p - q)^2$ is needed.`,
      remediation: "Check the factors by expanding them back: the middle term must come out with the same sign as in the equation.",
      fallback: { kind: "ext", topic: "quadratic equations" },
    },
  ],
  engineNotes: [
    "C09-M1 shows only when a root lies outside the range (Q1, Q2); when every root is allowed it gives the key.",
    "C09-M2 shows only on sec, cosec, tan, cot items (Q2, Q4, Q6); on sin and cos items it gives the key.",
    "C09-M3 shows only when an allowed value is negative (Q1, Q3, Q4, Q5).",
    "C09-M4 shows only when a root is exactly 1 or -1 for sin or cos (Q3, Q5).",
    "C09-M5 is caught by the least-value item (Q6) only.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q6" },
      stem: t`If $2\cos^2\theta + 11\cos\theta + 5 = 0$, which values can $\cos\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "2*cos(x)**2 + 11*cos(x) + 5", q: "2*t**2 + 11*t + 5" }, params: { type: "quad", f: "cos" } },
      options: [
        { key: "A", text: t`No value: no angle fits`, correct: false, misconceptionId: "C09-M3", value: "EmptySet" },
        { key: "B", text: t`$\cos\theta = \frac{1}{2}$ only`, correct: false, misconceptionId: "C09-M6", value: "{1/2}" },
        { key: "C", text: t`$\cos\theta = -\frac{1}{2}$ only`, correct: true, value: "{-1/2}" },
        { key: "D", text: t`$\cos\theta = -\frac{1}{2}$ or $\cos\theta = -5$`, correct: false, misconceptionId: "C09-M1", value: "{-5, -1/2}" },
      ],
      solution: {
        steps: [
          t`Factorise: $(2\cos\theta + 1)(\cos\theta + 5) = 0$, so $\cos\theta = -\frac{1}{2}$ or $\cos\theta = -5$.`,
          t`$\cos\theta$ is never below $-1$, so $-5$ is impossible.`,
          t`$-\frac{1}{2}$ is allowed (for example $\theta = 120^\circ$). So $\cos\theta = -\frac{1}{2}$ only.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q8" },
      stem: t`If $5\tan^2\theta + 3 = 9\sec\theta$, which values can $\sec\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "5*tan(x)**2 + 3 - 9*sec(x)", q: "5*t**2 - 9*t - 2" }, params: { type: "quad", f: "sec" } },
      options: [
        { key: "A", text: t`$\sec\theta = 2$ only`, correct: true, value: "{2}" },
        { key: "B", text: t`$\sec\theta = 2$ or $\sec\theta = -\frac{1}{5}$`, correct: false, misconceptionId: "C09-M1", value: "{-1/5, 2}" },
        { key: "C", text: t`$\sec\theta = -\frac{1}{5}$ only`, correct: false, misconceptionId: "C09-M2", value: "{-1/5}" },
        { key: "D", text: t`$\sec\theta = -2$ only`, correct: false, misconceptionId: "C09-M6", value: "{-2}" },
      ],
      solution: {
        steps: [
          t`Put $\tan^2\theta = \sec^2\theta - 1$: $5\sec^2\theta - 5 + 3 = 9\sec\theta$, so $5\sec^2\theta - 9\sec\theta - 2 = 0$.`,
          t`Factorise: $(5\sec\theta + 1)(\sec\theta - 2) = 0$, so $\sec\theta = -\frac{1}{5}$ or $\sec\theta = 2$.`,
          t`$\sec\theta$ is never between $-1$ and $1$, so $-\frac{1}{5}$ is impossible. So $\sec\theta = 2$ only (the acute angle is $\theta = 60^\circ$).`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q9" },
      stem: t`If $3\cos\theta - 4\sin\theta = 4$, which values can $\sin\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "3*cos(x) - 4*sin(x) - 4", q: "25*t**2 + 32*t + 7" }, params: { type: "quad", f: "sin" } },
      options: [
        { key: "A", text: t`No value: no angle fits`, correct: false, misconceptionId: "C09-M3", value: "EmptySet" },
        { key: "B", text: t`$\sin\theta = -\frac{7}{25}$ only`, correct: false, misconceptionId: "C09-M4", value: "{-7/25}" },
        { key: "C", text: t`$\sin\theta = 1$ or $\sin\theta = \frac{7}{25}$`, correct: false, misconceptionId: "C09-M6", value: "{7/25, 1}" },
        { key: "D", text: t`$\sin\theta = -1$ or $\sin\theta = -\frac{7}{25}$`, correct: true, value: "{-1, -7/25}" },
      ],
      solution: {
        steps: [
          t`Write $3\cos\theta = 4(1 + \sin\theta)$ and square: $9(1 - \sin^2\theta) = 16(1 + \sin\theta)^2$.`,
          t`Tidy up: $25\sin^2\theta + 32\sin\theta + 7 = 0$, so $(25\sin\theta + 7)(\sin\theta + 1) = 0$: $\sin\theta = -\frac{7}{25}$ or $\sin\theta = -1$.`,
          t`Squaring can add roots, so check both. $\sin\theta = -1$ gives $\cos\theta = 0$: $0 + 4 = 4$. $\sin\theta = -\frac{7}{25}$ with $\cos\theta = \frac{24}{25}$: $\frac{72}{25} + \frac{28}{25} = 4$.`,
          t`$-1$ is the lowest value of $\sin\theta$, not outside the range. So $\sin\theta = -1$ or $\sin\theta = -\frac{7}{25}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`If $\sec^2\theta = \tan\theta + 3$, which values can $\tan\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "sec(x)**2 - tan(x) - 3", q: "t**2 - t - 2" }, params: { type: "quad", f: "tan" } },
      options: [
        { key: "A", text: t`$\tan\theta = 2$ or $\tan\theta = -1$`, correct: true, value: "{-1, 2}" },
        { key: "B", text: t`$\tan\theta = -1$ only`, correct: false, misconceptionId: "C09-M2", value: "{-1}" },
        { key: "C", text: t`$\tan\theta = 2$ only`, correct: false, misconceptionId: "C09-M3", value: "{2}" },
        { key: "D", text: t`$\tan\theta = -2$ or $\tan\theta = 1$`, correct: false, misconceptionId: "C09-M6", value: "{-2, 1}" },
      ],
      solution: {
        steps: [
          t`Put $\sec^2\theta = 1 + \tan^2\theta$: $1 + \tan^2\theta = \tan\theta + 3$, so $\tan^2\theta - \tan\theta - 2 = 0$.`,
          t`Factorise: $(\tan\theta - 2)(\tan\theta + 1) = 0$, so $\tan\theta = 2$ or $\tan\theta = -1$.`,
          t`$\tan\theta$ takes every real value, so both stand ($\tan 135^\circ = -1$). So $\tan\theta = 2$ or $\tan\theta = -1$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q5" },
      stem: t`If $2\sin^2\theta + \cos\theta = 1$, which values can $\cos\theta$ take?`,
      verify: { kind: "value", inputs: { eq: "2*sin(x)**2 + cos(x) - 1", q: "2*t**2 - t - 1" }, params: { type: "quad", f: "cos" } },
      options: [
        { key: "A", text: t`$\cos\theta = -\frac{1}{2}$ only`, correct: false, misconceptionId: "C09-M4", value: "{-1/2}" },
        { key: "B", text: t`$\cos\theta = -1$ or $\cos\theta = \frac{1}{2}$`, correct: false, misconceptionId: "C09-M6", value: "{-1, 1/2}" },
        { key: "C", text: t`$\cos\theta = 1$ or $\cos\theta = -\frac{1}{2}$`, correct: true, value: "{-1/2, 1}" },
        { key: "D", text: t`$\cos\theta = 1$ only`, correct: false, misconceptionId: "C09-M3", value: "{1}" },
      ],
      solution: {
        steps: [
          t`Put $\sin^2\theta = 1 - \cos^2\theta$: $2 - 2\cos^2\theta + \cos\theta = 1$, so $2\cos^2\theta - \cos\theta - 1 = 0$.`,
          t`Factorise: $(2\cos\theta + 1)(\cos\theta - 1) = 0$, so $\cos\theta = -\frac{1}{2}$ or $\cos\theta = 1$.`,
          t`Both lie in $[-1, 1]$; $1$ is the top of the range and is reached at $\theta = 0^\circ$. So $\cos\theta = 1$ or $\cos\theta = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc II Q7" },
      stem: t`What is the least value of $4\tan^2\theta + 9\cot^2\theta$ (for $\theta$ where both are defined)?`,
      verify: { kind: "value", inputs: { a: "4", b: "9" }, params: { type: "least" } },
      options: [
        { key: "A", text: t`$-12$`, correct: false, misconceptionId: "C09-M6", value: "-12" },
        { key: "B", text: t`$12$`, correct: true, value: "12" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C09-M2", value: "13" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C09-M5", value: "0" },
      ],
      solution: {
        steps: [
          t`$2\tan\theta \cdot 3\cot\theta = 6$, so $4\tan^2\theta + 9\cot^2\theta = (2\tan\theta - 3\cot\theta)^2 + 12$.`,
          t`A square is never negative, so the expression is at least $12$.`,
          t`It equals $12$ when $2\tan\theta = 3\cot\theta$, that is $\tan^2\theta = \frac{3}{2}$, which some $\theta$ gives. The least value is $12$.`,
        ],
      },
    },
  ],
};
