import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Without a calculator: is $\cos 100^\circ$ equal to $\cos 10^\circ$, $-\cos 10^\circ$, $\sin 10^\circ$ or $-\sin 10^\circ$?`,
    reveal: t`$100^\circ = 90^\circ + 10^\circ$. Adding $90^\circ$ switches cos to sin. And $100^\circ$ is in the second quadrant, where cos is negative. So $\cos 100^\circ = -\sin 10^\circ$. Two questions settle every allied angle: does the function switch, and what sign does the quadrant give?`,
  },
  explanation: {
    intuition: t`Picture the angle's point on the unit circle. Add $90^\circ$ and the point makes a quarter turn: its $x$ and $y$ coordinates trade places, so cos and sin trade places too. Add $180^\circ$ or $360^\circ$ and the point only flips through the centre or comes back round: the coordinates keep their roles and at most change sign. So an odd multiple of $90^\circ$ switches the function, an even multiple keeps it, and the quadrant you land in gives the sign.`,
    formal: t`**The rule** for $f(n \cdot 90^\circ \pm \theta)$, treating $\theta$ as acute:

- **Function:** $n$ odd ($90^\circ$, $270^\circ$): switch $\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$, $\sec \leftrightarrow \operatorname{cosec}$. $n$ even ($180^\circ$, $360^\circ$): keep it.
- **Sign:** the sign of the **original** function in the quadrant where $n \cdot 90^\circ \pm \theta$ lies.

$$\begin{array}{c|ccc} & \sin & \cos & \tan \\ \hline 90^\circ - \theta & \cos\theta & \sin\theta & \cot\theta \\ 90^\circ + \theta & \cos\theta & -\sin\theta & -\cot\theta \\ 180^\circ - \theta & \sin\theta & -\cos\theta & -\tan\theta \\ 180^\circ + \theta & -\sin\theta & -\cos\theta & \tan\theta \\ 270^\circ - \theta & -\cos\theta & -\sin\theta & \cot\theta \\ 270^\circ + \theta & -\cos\theta & \sin\theta & -\cot\theta \\ 360^\circ - \theta & -\sin\theta & \cos\theta & -\tan\theta \end{array}$$

**Large and negative angles.** Remove full turns first: $f(k \cdot 360^\circ + \theta) = f(\theta)$. Only cos and sec are even: $\cos(-\theta) = \cos\theta$, $\sec(-\theta) = \sec\theta$. The other four change sign: $\sin(-\theta) = -\sin\theta$.

**Where it comes from.** Each line is the sum formula with special values: $\cos(90^\circ + \theta) = \cos 90^\circ\cos\theta - \sin 90^\circ\sin\theta = -\sin\theta$.

**Sums that pair off.** Look for angles adding to $180^\circ$ or $360^\circ$: $\cos 125^\circ = \cos(180^\circ - 55^\circ) = -\cos 55^\circ$, so $\cos 55^\circ + \cos 125^\circ = 0$.`,
    worked: {
      prompt: t`Find the value of $\sec(-855^\circ)$.`,
      steps: [
        t`sec is even: $\sec(-855^\circ) = \sec 855^\circ$.`,
        t`Remove full turns: $855^\circ - 2 \times 360^\circ = 135^\circ$, so this is $\sec 135^\circ$.`,
        t`$135^\circ = 90^\circ + 45^\circ$, an odd multiple of $90^\circ$: sec switches to cosec. $135^\circ$ is in the second quadrant, where sec (like cos) is negative.`,
        t`$\sec 135^\circ = -\operatorname{cosec} 45^\circ = -\sqrt{2}$.`,
      ],
      answer: t`$\sec(-855^\circ) = -\sqrt{2}$.`,
    },
    visualSpec: t`Drag $\theta$ round the unit circle and watch the point for $90^\circ + \theta$ (or $180^\circ + \theta$, $270^\circ - \theta$, ...) move with it: its coordinates swap for an odd multiple of $90^\circ$ and only flip sign for an even one, with the quadrant's sign lit up.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Switching the function at the wrong multiples: keeping it at $90^\circ$ or $270^\circ$, or switching it at $180^\circ$ or $360^\circ$`,
      remediation: t`Only an odd multiple of $90^\circ$ ($90^\circ$, $270^\circ$) switches the function: $\sin \leftrightarrow \cos$, $\tan \leftrightarrow \cot$, $\sec \leftrightarrow \operatorname{cosec}$. At $180^\circ$ and $360^\circ$ the function stays the same.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Taking the sign from the new function after switching, instead of from the original one",
      remediation: t`Fix the sign before you switch: it is the sign of the function you started with, in the quadrant where the angle lies. $\cos(90^\circ + \theta)$ is negative because cos is negative in the second quadrant, so it equals $-\sin\theta$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: "Leaving out the quadrant sign, as if every allied angle gave a positive value",
      remediation: t`Every allied angle lands in a quadrant, and the original function's sign there goes in front: $\sin(180^\circ + \theta) = -\sin\theta$ because sin is negative in the third quadrant.`,
      fallback: { kind: "ext", topic: "signs in the four quadrants" },
    },
    {
      id: "C03-M4",
      mistake: t`Dropping the minus sign of a negative angle: taking $f(-\theta) = f(\theta)$ for every function`,
      remediation: t`Only cos and sec are even: $\cos(-\theta) = \cos\theta$, $\sec(-\theta) = \sec\theta$. sin, tan, cot and cosec are odd, so the minus comes outside: $\tan(-\theta) = -\tan\theta$.`,
      fallback: { kind: "ext", topic: "trigonometric functions of negative angles" },
    },
    {
      id: "C03-M5",
      mistake: t`Dropping the multiple of $90^\circ$ altogether, as if the function repeated every $90^\circ$`,
      remediation: t`You may drop only full turns of $360^\circ$. A leftover $90^\circ$, $180^\circ$ or $270^\circ$ still switches the function or changes its sign: $\cos 200^\circ = \cos(180^\circ + 20^\circ) = -\cos 20^\circ$, not $\cos 20^\circ$.`,
      fallback: { kind: "ext", topic: "periodicity of trigonometric functions" },
    },
  ],
  engineNotes: [
    t`C03-M1 gives the key when $\theta = 45^\circ$ ($\sin 45^\circ = \cos 45^\circ$, $\tan 45^\circ = \cot 45^\circ$): diagnose it with other angles.`,
    "C03-M2 shows only when the switch pairs functions of different sign in that quadrant (sin and cos, sec and cosec); tan and cot always share a sign. On a single negative value it gives the same answer as C03-M3, so it is drawn from items where the terms combine (C03-Q3, C03-Q5).",
    "C03-M4 changes nothing for cos and sec, or under an even power: it needs a negative angle inside sin, tan, cot or cosec, and on a single value it matches C03-M3, so it is drawn from products (C03-Q4, C03-Q6).",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.2 Q1(i)" },
      stem: t`The value of $\sin 690^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sin(690)" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M3", value: "1/2" },
        { key: "B", text: t`$\frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M5", value: "sqrt(3)/2" },
        { key: "C", text: t`$- \frac{1}{2}$`, correct: true, value: "-1/2" },
        { key: "D", text: t`$- \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M1", value: "-sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`Remove a full turn: $690^\circ - 360^\circ = 330^\circ$, so $\sin 690^\circ = \sin 330^\circ$.`,
          t`$330^\circ = 360^\circ - 30^\circ$, an even multiple of $90^\circ$: sin stays sin. $330^\circ$ is in the fourth quadrant, where sin is negative.`,
          t`$\sin 690^\circ = -\sin 30^\circ = -\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.2 SolvedEx.1(iii)" },
      stem: t`The value of $\tan 840^\circ$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "tan(840)" } },
      options: [
        { key: "A", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C03-M3", value: "sqrt(3)" },
        { key: "B", text: t`$\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C03-M5", value: "sqrt(3)/3" },
        { key: "C", text: t`$-\sqrt{3}$`, correct: true, value: "-sqrt(3)" },
        { key: "D", text: t`$-\frac{1}{\sqrt{3}}$`, correct: false, misconceptionId: "C03-M1", value: "-sqrt(3)/3" },
      ],
      solution: {
        steps: [
          t`Remove full turns: $840^\circ - 2 \times 360^\circ = 120^\circ$, so $\tan 840^\circ = \tan 120^\circ$.`,
          t`$120^\circ = 90^\circ + 30^\circ$, an odd multiple of $90^\circ$: tan switches to cot. $120^\circ$ is in the second quadrant, where tan is negative.`,
          t`$\tan 840^\circ = -\cot 30^\circ = -\sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.2 Q2(iii)" },
      stem: t`The value of $\sin(-150^\circ) \cdot \tan(-600^\circ)$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sin(-150)*tan(-600)" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M1", value: "1/2" },
        { key: "B", text: t`$- \frac{\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M2", value: "-sqrt(3)/2" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: false, misconceptionId: "C03-M5", value: "3/2" },
        { key: "D", text: t`$\frac{\sqrt{3}}{2}$`, correct: true, value: "sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`sin and tan are odd: $\sin(-150^\circ) = -\sin 150^\circ$ and $\tan(-600^\circ) = -\tan 600^\circ$.`,
          t`$\sin 150^\circ = \sin(90^\circ + 60^\circ) = \cos 60^\circ = \frac{1}{2}$: sin switches to cos, and sin is positive in the second quadrant.`,
          t`$\tan 600^\circ = \tan 240^\circ = \tan(180^\circ + 60^\circ) = \tan 60^\circ = \sqrt{3}$: tan is positive in the third quadrant.`,
          t`The product is $\left(-\frac{1}{2}\right)\left(-\sqrt{3}\right) = \frac{\sqrt{3}}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.2 Q2(iii)" },
      stem: t`The value of $\sec 840^\circ \cdot \cot(-945^\circ) + \sin 600^\circ \cdot \tan(-690^\circ)$ is:`,
      verify: { kind: "value", inputs: {  }, params: { e: "sec(840)*cot(-945) + sin(600)*tan(-690)", route: "x" } },
      options: [
        { key: "A", text: t`$- \frac{5}{2}$`, correct: false, misconceptionId: "C03-M3", value: "-5/2" },
        { key: "B", text: t`$- \frac{3}{2}$`, correct: false, misconceptionId: "C03-M4", value: "-3/2" },
        { key: "C", text: t`$\frac{3}{2}$`, correct: true, value: "3/2" },
        { key: "D", text: t`$\frac{\sqrt{3}}{6}$`, correct: false, misconceptionId: "C03-M1", value: "sqrt(3)/6" },
      ],
      solution: {
        steps: [
          t`$\sec 840^\circ = \sec 120^\circ = \sec(180^\circ - 60^\circ) = -\sec 60^\circ = -2$, and $\cot(-945^\circ) = -\cot 225^\circ = -\cot(180^\circ + 45^\circ) = -1$.`,
          t`$\sin 600^\circ = \sin 240^\circ = \sin(180^\circ + 60^\circ) = -\frac{\sqrt{3}}{2}$, and $\tan(-690^\circ) = -\tan 330^\circ = -(-\tan 30^\circ) = \frac{1}{\sqrt{3}}$.`,
          t`The value is $(-2)(-1) + \left(-\frac{\sqrt{3}}{2}\right)\left(\frac{1}{\sqrt{3}}\right) = 2 - \frac{1}{2} = \frac{3}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.2 Q2(i)" },
      stem: t`$\dfrac{\cos(\pi + x)\cos(-x)}{\sin(\pi - x)\cos\left(\dfrac{\pi}{2} + x\right)}$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { e: "cos(180 + x)*cos(-x)/(sin(180 - x)*cos(90 + x))" } },
      options: [
        { key: "A", text: t`$\cot^2 x$`, correct: true, value: "tan(x)**(-2)" },
        { key: "B", text: t`$\tan x$`, correct: false, misconceptionId: "C03-M1", value: "tan(x)" },
        { key: "C", text: t`$-\cot^2 x$`, correct: false, misconceptionId: "C03-M2", value: "-1/tan(x)**2" },
        { key: "D", text: t`$-\cot x$`, correct: false, misconceptionId: "C03-M5", value: "-1/tan(x)" },
      ],
      solution: {
        steps: [
          t`Numerator: $\cos(\pi + x) = -\cos x$ and $\cos(-x) = \cos x$, so it is $-\cos^2 x$.`,
          t`Denominator: $\sin(\pi - x) = \sin x$ and $\cos\left(\frac{\pi}{2} + x\right) = -\sin x$, so it is $-\sin^2 x$.`,
          t`$\dfrac{-\cos^2 x}{-\sin^2 x} = \cot^2 x$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.2 SolvedEx.2(iv)" },
      stem: t`$\dfrac{\cot\left(\dfrac{\pi}{2} + \theta\right)\sin(-\theta)\cot(\pi - \theta)}{\cos(2\pi - \theta)\sin(\pi + \theta)\tan(2\pi - \theta)}$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { e: "cot(90 + x)*sin(-x)*cot(180 - x)/(cos(360 - x)*sin(180 + x)*tan(360 - x))" } },
      options: [
        { key: "A", text: t`$-\operatorname{cosec}\theta$`, correct: true, value: "-1/sin(x)" },
        { key: "B", text: t`$-\sec\theta\tan\theta$`, correct: false, misconceptionId: "C03-M1", value: "-tan(x)/cos(x)" },
        { key: "C", text: t`$\operatorname{cosec}\theta$`, correct: false, misconceptionId: "C03-M4", value: "1/sin(x)" },
        { key: "D", text: t`$-\cot^2\theta\operatorname{cosec}\theta$`, correct: false, misconceptionId: "C03-M5", value: "-cos(x)**2/sin(x)**3" },
      ],
      solution: {
        steps: [
          t`Numerator: $\cot\left(\frac{\pi}{2} + \theta\right) = -\tan\theta$, $\sin(-\theta) = -\sin\theta$, $\cot(\pi - \theta) = -\cot\theta$. As $\tan\theta\cot\theta = 1$, it is $-\sin\theta$.`,
          t`Denominator: $\cos(2\pi - \theta) = \cos\theta$, $\sin(\pi + \theta) = -\sin\theta$, $\tan(2\pi - \theta) = -\tan\theta$. It is $\cos\theta\sin\theta\tan\theta = \sin^2\theta$.`,
          t`$\dfrac{-\sin\theta}{\sin^2\theta} = -\dfrac{1}{\sin\theta} = -\operatorname{cosec}\theta$.`,
        ],
      },
    },
  ],
};
