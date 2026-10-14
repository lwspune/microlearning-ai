import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$2\sin 30^\circ = 2 \times \frac{1}{2} = 1$. **So is $\sin 60^\circ = 1$?**`,
    reveal: t`No: $\sin 60^\circ = \frac{\sqrt{3}}{2}$. Doubling the angle does not double the sine. Write $60^\circ = 30^\circ + 30^\circ$ and use the sum formula: $\sin 60^\circ = 2\sin 30^\circ\cos 30^\circ = 2 \cdot \frac{1}{2} \cdot \frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{2}$. The extra factor $\cos 30^\circ$ is what pulls it below $1$.`,
  },
  explanation: {
    intuition: t`A double angle is a sum: $2A = A + A$. Put $B = A$ in the formulas for $\sin(A + B)$, $\cos(A + B)$ and $\tan(A + B)$, and the double-angle formulas drop out. Because $\sin^2 A + \cos^2 A = 1$, you can trade one square for the other, so $\cos 2A$ has three faces; pick the one that cancels what you have. Read backwards, they turn $1 - \cos 2A$ into a single square and $\sin A\cos A$ into half of $\sin 2A$.`,
    formal: t`**The formulas** (put $B = A$ in the sum formulas)

$$\sin 2A = 2\sin A\cos A$$
$$\cos 2A = \cos^2 A - \sin^2 A = 1 - 2\sin^2 A = 2\cos^2 A - 1$$
$$\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$$

**Read backwards**

$1 - \cos 2A = 2\sin^2 A$, $\quad 1 + \cos 2A = 2\cos^2 A$, $\quad \sin A\cos A = \frac{1}{2}\sin 2A$. Sine squared goes with the minus sign: at $A = 0$, $1 - \cos 0 = 0 = 2\sin^2 0$.

**From one ratio and a quadrant**

Find $\sin A$ and $\cos A$ first, with the signs the quadrant gives them, then double. $\sin 2A$ and $\tan 2A$ depend on those signs; $\cos 2A$ uses only squares.

**Any angle can be the double**

$6\theta = 2(3\theta)$, so $\sin 6\theta = 2\sin 3\theta\cos 3\theta$. Cosines whose angles keep doubling fold up one at a time: $2\sin\theta\cos\theta = \sin 2\theta$, then $2\sin 2\theta\cos 2\theta = \sin 4\theta$, so $8\sin\theta\cos\theta\cos 2\theta\cos 4\theta = \sin 8\theta$.`,
    worked: {
      prompt: t`If $\tan A = -\frac{3}{4}$ and $\frac{3\pi}{2} < A < 2\pi$, find $\sin 2A$, $\cos 2A$ and $\tan 2A$.`,
      steps: [
        t`In the fourth quadrant $\cos A > 0$ and $\sin A < 0$. $\sec^2 A = 1 + \frac{9}{16} = \frac{25}{16}$, so $\cos A = \frac{4}{5}$ and $\sin A = \tan A\cos A = -\frac{3}{5}$.`,
        t`$\sin 2A = 2\sin A\cos A = 2\left(-\frac{3}{5}\right)\left(\frac{4}{5}\right) = -\frac{24}{25}$.`,
        t`$\cos 2A = \cos^2 A - \sin^2 A = \frac{16}{25} - \frac{9}{25} = \frac{7}{25}$.`,
        t`$\tan 2A = \dfrac{2\tan A}{1 - \tan^2 A} = \dfrac{-\frac{3}{2}}{1 - \frac{9}{16}} = -\frac{3}{2} \cdot \frac{16}{7} = -\frac{24}{7}$. Check: $\frac{\sin 2A}{\cos 2A} = \frac{-24/25}{7/25} = -\frac{24}{7}$.`,
      ],
      answer: t`$\sin 2A = -\frac{24}{25}$, $\cos 2A = \frac{7}{25}$, $\tan 2A = -\frac{24}{7}$.`,
    },
    visualSpec: t`Drag $A$ round a unit circle and watch the point at angle $2A$: its height $\sin 2A$ is shown beside $2\sin A$ and $2\sin A\cos A$, and only the second always matches.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Taking the 2 out front: $\sin 2A = 2\sin A$, $\cos 2A = 2\cos A$, $\tan 2A = 2\tan A$`,
      remediation: t`$\sin 2A$ is $\sin(A + A)$, not twice $\sin A$: the sum formula gives $\sin 2A = 2\sin A\cos A$. Check with $A = 30^\circ$: $\sin 60^\circ = \frac{\sqrt{3}}{2}$, not $1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: t`Swapping the squares in $\cos 2A$: $\cos 2A = \sin^2 A - \cos^2 A$, so $1 - \cos 2A = 2\cos^2 A$`,
      remediation: t`$\cos 2A = \cos(A + A) = \cos^2 A - \sin^2 A$, cosine first. So $1 - \cos 2A = 2\sin^2 A$ and $1 + \cos 2A = 2\cos^2 A$; test with $A = 0$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: t`Dropping the 2: $\sin 2A = \sin A\cos A$, $\tan 2A = \frac{\tan A}{1 - \tan^2 A}$`,
      remediation: t`The two equal terms of $\sin(A + A)$ add up: $\sin 2A = 2\sin A\cos A$ and $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$. Read backwards, $\sin A\cos A = \frac{1}{2}\sin 2A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Taking $\tan 2A = \frac{2\tan A}{1 + \tan^2 A}$, which is the formula for $\sin 2A$ in terms of $\tan A$`,
      remediation: t`From $\tan(A + A) = \frac{\tan A + \tan A}{1 - \tan A\tan A}$, the denominator of $\tan 2A$ is $1 - \tan^2 A$. The form $\frac{2\tan A}{1 + \tan^2 A}$ is $\sin 2A$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M5",
      mistake: t`Ignoring the quadrant: taking $\sin x$ and $\cos x$ both positive`,
      remediation: t`Fix the signs of $\sin x$ and $\cos x$ from the quadrant before you double. In $\frac{\pi}{2} < x < \pi$, $\sin x > 0$ and $\cos x < 0$, so $\sin 2x$ and $\tan x$ are negative.`,
      fallback: { kind: "ext", topic: "signs in the four quadrants" },
    },
    {
      id: "C04-M6",
      mistake: t`Reading $\sin 2A$ as $\sin^2 A$ (and $\cos 2A$ as $\cos^2 A$)`,
      remediation: t`$\sin 2A$ is the sine of the angle $2A$; $\sin^2 A$ means $(\sin A)^2$. They are different: $\sin 2A = 2\sin A\cos A$ and $\cos 2A = \cos^2 A - \sin^2 A$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M5 gives the key when x is in quadrant I or III (sin x and cos x share a sign) and on every cos 2x: diagnose it with sin 2x or tan 2x for x in quadrant II or IV.",
    "C04-M2 changes only cos 2A, C04-M3 only sin 2A and tan 2A, C04-M4 only tan 2A (and cot 2A): each is caught only on an item where its ratio appears.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.3 Q2" },
      stem: t`If $\sec x = -\frac{13}{5}$ and $\frac{\pi}{2} < x < \pi$, then $\sin 2x =$`,
      verify: { kind: "value", inputs: { sec: "-13/5", q: "2" }, params: { form: "ratio", ask: "sin" } },
      options: [
        { key: "A", text: t`$- \frac{60}{169}$`, correct: false, misconceptionId: "C04-M3", value: "-60/169" },
        { key: "B", text: t`$\frac{120}{169}$`, correct: false, misconceptionId: "C04-M5", value: "120/169" },
        { key: "C", text: t`$- \frac{120}{169}$`, correct: true, value: "-120/169" },
        { key: "D", text: t`$\frac{24}{13}$`, correct: false, misconceptionId: "C04-M1", value: "24/13" },
      ],
      solution: {
        steps: [
          t`In $\frac{\pi}{2} < x < \pi$, $\cos x < 0$ and $\sin x > 0$: $\cos x = \frac{1}{\sec x} = -\frac{5}{13}$ and $\sin x = \sqrt{1 - \frac{25}{169}} = \frac{12}{13}$.`,
          t`$\sin 2x = 2\sin x\cos x = 2 \cdot \frac{12}{13} \cdot \left(-\frac{5}{13}\right) = -\frac{120}{169}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.3 Q2" },
      stem: t`If $\sec x = -\frac{13}{5}$ and $\frac{\pi}{2} < x < \pi$, then $\tan 2x =$`,
      verify: { kind: "value", inputs: { sec: "-13/5", q: "2" }, params: { form: "ratio", ask: "tan" } },
      options: [
        { key: "A", text: t`$\frac{60}{119}$`, correct: false, misconceptionId: "C04-M3", value: "60/119" },
        { key: "B", text: t`$- \frac{120}{169}$`, correct: false, misconceptionId: "C04-M4", value: "-120/169" },
        { key: "C", text: t`$- \frac{120}{119}$`, correct: false, misconceptionId: "C04-M5", value: "-120/119" },
        { key: "D", text: t`$\frac{120}{119}$`, correct: true, value: "120/119" },
      ],
      solution: {
        steps: [
          t`In $\frac{\pi}{2} < x < \pi$: $\cos x = -\frac{5}{13}$, $\sin x = \frac{12}{13}$, so $\tan x = -\frac{12}{5}$.`,
          t`$\tan 2x = \dfrac{2\tan x}{1 - \tan^2 x} = \dfrac{-\frac{24}{5}}{1 - \frac{144}{25}} = \dfrac{-\frac{24}{5}}{-\frac{119}{25}}$.`,
          t`$= \frac{24}{5} \cdot \frac{25}{119} = \frac{120}{119}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.3 Q3(i)" },
      stem: t`$\dfrac{1 - \cos 2\theta}{1 + \cos 2\theta}$ simplifies to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "expr", e: "(1 - cos(2*x))/(1 + cos(2*x))" } },
      options: [
        { key: "A", text: t`$\cot^2\theta$`, correct: false, misconceptionId: "C04-M2", value: "cot(x)**2" },
        { key: "B", text: t`$\dfrac{\sin^2\theta}{1 + \cos^2\theta}$`, correct: false, misconceptionId: "C04-M6", value: "sin(x)**2/(1 + cos(x)**2)" },
        { key: "C", text: t`$\tan^2\theta$`, correct: true, value: "tan(x)**2" },
        { key: "D", text: t`$\dfrac{1 - 2\cos\theta}{1 + 2\cos\theta}$`, correct: false, misconceptionId: "C04-M1", value: "(1 - 2*cos(x))/(1 + 2*cos(x))" },
      ],
      solution: {
        steps: [
          t`Read the cosine formulas backwards: $1 - \cos 2\theta = 2\sin^2\theta$ and $1 + \cos 2\theta = 2\cos^2\theta$.`,
          t`$\dfrac{1 - \cos 2\theta}{1 + \cos 2\theta} = \dfrac{2\sin^2\theta}{2\cos^2\theta} = \tan^2\theta$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Ex 3.3 Q3(v)" },
      stem: t`$2\operatorname{cosec} 2x$ is equal to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "expr", e: "2*cosec(2*x)" } },
      options: [
        { key: "A", text: t`$\operatorname{cosec} x$`, correct: false, misconceptionId: "C04-M1", value: "1/sin(x)" },
        { key: "B", text: t`$2(\tan x + \cot x)$`, correct: false, misconceptionId: "C04-M3", value: "2/(sin(x)*cos(x))" },
        { key: "C", text: t`$2\operatorname{cosec}^2 x$`, correct: false, misconceptionId: "C04-M6", value: "2/sin(x)**2" },
        { key: "D", text: t`$\tan x + \cot x$`, correct: true, value: "1/(sin(x)*cos(x))" },
      ],
      solution: {
        steps: [
          t`$\sin 2x = 2\sin x\cos x$, so $2\operatorname{cosec} 2x = \dfrac{2}{2\sin x\cos x} = \dfrac{1}{\sin x\cos x}$.`,
          t`Write $1 = \sin^2 x + \cos^2 x$: $\dfrac{\sin^2 x + \cos^2 x}{\sin x\cos x} = \dfrac{\sin x}{\cos x} + \dfrac{\cos x}{\sin x} = \tan x + \cot x$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/Misc II Q18" },
      stem: t`$2\cot 2A$ is equal to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "expr", e: "2*cot(2*x)" } },
      options: [
        { key: "A", text: t`$\cot A + \tan A$`, correct: false, misconceptionId: "C04-M4", value: "cos(x)/sin(x) + sin(x)/cos(x)" },
        { key: "B", text: t`$\cot A - \tan A$`, correct: true, value: "cos(x)/sin(x) - sin(x)/cos(x)" },
        { key: "C", text: t`$\cot A$`, correct: false, misconceptionId: "C04-M1", value: "cos(x)/sin(x)" },
        { key: "D", text: t`$2(\cot A - \tan A)$`, correct: false, misconceptionId: "C04-M3", value: "2*(cos(x)/sin(x) - sin(x)/cos(x))" },
      ],
      solution: {
        steps: [
          t`$2\cot 2A = \dfrac{2}{\tan 2A} = 2 \cdot \dfrac{1 - \tan^2 A}{2\tan A} = \dfrac{1 - \tan^2 A}{\tan A}$.`,
          t`Split the fraction: $\dfrac{1}{\tan A} - \tan A = \cot A - \tan A$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-2-11/3.3.2 SolvedEx.7" },
      stem: t`$\sin 4\theta$ is equal to:`,
      verify: { kind: "value", inputs: {  }, params: { form: "expr", e: "sin(4*x)" } },
      options: [
        { key: "A", text: t`$4\sin\theta\cos^3\theta - 4\cos\theta\sin^3\theta$`, correct: true, value: "4*sin(x)*cos(x)**3 - 4*cos(x)*sin(x)**3" },
        { key: "B", text: t`$4\sin\theta$`, correct: false, misconceptionId: "C04-M1", value: "4*sin(x)" },
        { key: "C", text: t`$4\cos\theta\sin^3\theta - 4\sin\theta\cos^3\theta$`, correct: false, misconceptionId: "C04-M2", value: "4*cos(x)*sin(x)**3 - 4*sin(x)*cos(x)**3" },
        { key: "D", text: t`$\sin\theta\cos^3\theta - \cos\theta\sin^3\theta$`, correct: false, misconceptionId: "C04-M3", value: "sin(x)*cos(x)**3 - cos(x)*sin(x)**3" },
      ],
      solution: {
        steps: [
          t`$4\theta$ is twice $2\theta$: $\sin 4\theta = 2\sin 2\theta\cos 2\theta$.`,
          t`Double again: $= 2(2\sin\theta\cos\theta)(\cos^2\theta - \sin^2\theta)$.`,
          t`Multiply out: $= 4\sin\theta\cos^3\theta - 4\cos\theta\sin^3\theta$.`,
        ],
      },
    },
  ],
};
