import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Cut a square along its diagonal. Each half is a right triangle with a $45^\circ$ angle. **Does $\tan 45^\circ$ depend on the size of the square?**`,
    reveal: t`No. The two sides at the right angle are sides of the square, so they are equal. Opposite over adjacent is then $1$, so $\tan 45^\circ = 1$ for every square.`,
  },
  explanation: {
    intuition: [
      t`The ratios of an angle do not depend on the size of the right triangle.`,
      t`So for some angles we can pick a handy triangle and find the ratios exactly.`,
      t`An **equilateral triangle** has all sides equal and all angles $60^\circ$.`,
      t`Half of an equilateral triangle has angles $30^\circ$, $60^\circ$ and $90^\circ$.`,
      t`Half of a square, cut along its diagonal, has angles $45^\circ$, $45^\circ$ and $90^\circ$.`,
      t`For $0^\circ$ and $90^\circ$, we let the angle shrink or grow as far as it can go.`,
    ],
    formal: [
      {
        title: "Ratios of 30° and 60°",
        points: [
          t`In a $30^\circ$-$60^\circ$-$90^\circ$ triangle, the side opposite $30^\circ$ is half the hypotenuse.`,
          t`The side opposite $60^\circ$ is $\frac{\sqrt{3}}{2}$ times the hypotenuse.`,
          t`Take the hypotenuse $2$: the side opposite $30^\circ$ is $1$, and the side opposite $60^\circ$ is $\sqrt{3}$.`,
          t`For $30^\circ$: $\sin 30^\circ = \frac{1}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\tan 30^\circ = \frac{1}{\sqrt{3}}$.`,
          t`For $60^\circ$, the opposite and adjacent sides change places.`,
          t`So $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{1}{2}$, $\tan 60^\circ = \sqrt{3}$.`,
        ],
      },
      {
        title: "Ratios of 45°",
        points: [
          t`In a $45^\circ$-$45^\circ$-$90^\circ$ triangle, the two sides at the right angle are equal.`,
          t`Take each of them $1$.`,
          t`By Pythagoras' theorem, the hypotenuse is $\sqrt{1^2 + 1^2} = \sqrt{2}$.`,
          t`So $\sin 45^\circ = \frac{1}{\sqrt{2}}$ and $\cos 45^\circ = \frac{1}{\sqrt{2}}$.`,
          t`And $\tan 45^\circ = \frac{1}{1} = 1$.`,
          t`The hypotenuse is $\sqrt{2}$ times a side here, not $2$ times.`,
        ],
      },
      {
        title: "Ratios of 0° and 90°",
        points: [
          t`Keep the hypotenuse fixed and let the angle $\theta$ shrink towards $0^\circ$.`,
          t`The opposite side shrinks to $0$, and the adjacent side becomes as long as the hypotenuse.`,
          t`So $\sin 0^\circ = 0$, $\cos 0^\circ = 1$ and $\tan 0^\circ = 0$.`,
          t`Now let $\theta$ grow towards $90^\circ$: the opposite side becomes the hypotenuse, and the adjacent side shrinks to $0$.`,
          t`So $\sin 90^\circ = 1$ and $\cos 90^\circ = 0$.`,
          t`$\tan 90^\circ$ would mean dividing by $0$, so it is **not defined**.`,
        ],
      },
      {
        title: "The table of values",
        points: [
          t`Read each row for $0^\circ$, $30^\circ$, $45^\circ$, $60^\circ$ and $90^\circ$, in that order.`,
          t`$\sin$: $0$, $\frac{1}{2}$, $\frac{1}{\sqrt{2}}$, $\frac{\sqrt{3}}{2}$, $1$. It grows with the angle.`,
          t`$\cos$: $1$, $\frac{\sqrt{3}}{2}$, $\frac{1}{\sqrt{2}}$, $\frac{1}{2}$, $0$. It is the sine row reversed.`,
          t`$\tan$: $0$, $\frac{1}{\sqrt{3}}$, $1$, $\sqrt{3}$, not defined.`,
          t`Sine and cosine have the hypotenuse below, so they are never more than $1$.`,
        ],
      },
      {
        title: "Finding the value of expressions",
        points: [
          t`Put in the value of each ratio from the table, then do the arithmetic.`,
          t`$\tan^2\theta$ means $(\tan\theta)^2$: the value multiplied by itself.`,
          t`For example, $\tan^2 30^\circ = \left(\frac{1}{\sqrt{3}}\right)^2 = \frac{1}{3}$.`,
          t`$4\cos 60^\circ$ means $4 \times \cos 60^\circ = 4 \times \frac{1}{2} = 2$.`,
          t`If a surd is left in a denominator, multiply above and below to rationalise it.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the value of $\cos 60^\circ \times \cos 30^\circ$ $+ \sin 60^\circ \times \sin 30^\circ$.`,
      steps: [
        t`From the table: $\cos 60^\circ = \frac{1}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\sin 30^\circ = \frac{1}{2}$.`,
        t`First product: $\frac{1}{2} \times \frac{\sqrt{3}}{2} = \frac{\sqrt{3}}{4}$.`,
        t`Second product: $\frac{\sqrt{3}}{2} \times \frac{1}{2} = \frac{\sqrt{3}}{4}$.`,
        t`Add: $\frac{\sqrt{3}}{4} + \frac{\sqrt{3}}{4}$ $= \frac{2\sqrt{3}}{4} = \frac{\sqrt{3}}{2}$.`,
      ],
      answer: t`$\frac{\sqrt{3}}{2}$`,
    },
    visualSpec: t`A right triangle with a fixed hypotenuse whose angle the student drags from 0° to 90°, beside a table of sin, cos and tan that shows exact values at 0°, 30°, 45°, 60° and 90°.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Reads each ratio from the other acute angle, using the value of $90^\circ - \theta$: takes $\sin 30^\circ = \frac{\sqrt{3}}{2}$ and $\cos 0^\circ = 0$.`,
      remediation: t`The side opposite $30^\circ$ is the short side, half the hypotenuse, so $\sin 30^\circ = \frac{1}{2}$. Read the opposite and adjacent sides from the angle that is asked.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: t`Writes each ratio upside down, such as hypotenuse over opposite for sine: takes $\sin 30^\circ = 2$ and $\tan 60^\circ = \frac{1}{\sqrt{3}}$.`,
      remediation: t`$\sin\theta$ is opposite over hypotenuse, so $\sin 30^\circ = \frac{1}{2}$, never more than $1$. $\tan\theta$ is opposite over adjacent, so $\tan 60^\circ = \sqrt{3}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Takes the hypotenuse of a $45^\circ$-$45^\circ$-$90^\circ$ triangle as twice a side, so $\sin 45^\circ = \cos 45^\circ = \frac{1}{2}$.`,
      remediation: t`With equal sides $1$, Pythagoras' theorem gives the hypotenuse $\sqrt{2}$. So $\sin 45^\circ = \cos 45^\circ = \frac{1}{\sqrt{2}}$.`,
      fallback: { kind: "ext", topic: "45°-45°-90° triangle theorem (Std IX Triangles)" },
    },
    {
      id: "C03-M4",
      mistake: t`Reads $\sin^2\theta$ as $2\sin\theta$: doubles the value instead of squaring it.`,
      remediation: t`$\sin^2\theta$ means $(\sin\theta)^2$, the value multiplied by itself. For example, $\tan^2 30^\circ = \frac{1}{3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Thinks every ratio of $0^\circ$ is $0$ and every ratio of $90^\circ$ is $1$, so takes $\cos 0^\circ = 0$.`,
      remediation: t`At $0^\circ$ the adjacent side is as long as the hypotenuse, so $\cos 0^\circ = 1$. At $90^\circ$ it shrinks to $0$, so $\cos 90^\circ = 0$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M6",
      mistake: t`Takes $\tan\theta$ as opposite over hypotenuse, so uses the value of $\sin\theta$ for it: $\tan 60^\circ = \frac{\sqrt{3}}{2}$.`,
      remediation: t`$\tan\theta$ is opposite over adjacent; the hypotenuse is not in it. So $\tan 60^\circ = \sqrt{3}$ and $\tan 45^\circ = 1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  engineNotes: [
    t`C03-M1 gives the key on expressions in $45^\circ$ alone and on symmetric ones like $\sin 30^\circ + \sin 60^\circ$: diagnose it with $30^\circ$, $60^\circ$, $0^\circ$ or $90^\circ$ used unevenly.`,
    t`C03-M3 shows only with $\sin 45^\circ$ or $\cos 45^\circ$, C03-M5 only with a ratio of $0^\circ$ or $90^\circ$, C03-M4 only with a squared ratio, and C03-M6 only with $\tan$ of $30^\circ$, $45^\circ$ or $60^\circ$.`,
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Ex 8.2 Q2(i)" },
      stem: t`Find the value of $5\sin 30^\circ + 3\tan 45^\circ$.`,
      verify: { kind: "value", inputs: { e: "5*s30 + 3*t45" } },
      options: [
        { key: "A", text: t`$13$`, correct: false, misconceptionId: "C03-M2", value: "13" },
        { key: "B", text: t`$\frac{5 + 3\sqrt{2}}{2}$`, correct: false, misconceptionId: "C03-M6", value: "3*sqrt(2)/2 + 5/2" },
        { key: "C", text: t`$\frac{11}{2}$`, correct: true, value: "11/2" },
        { key: "D", text: t`$\frac{6 + 5\sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M1", value: "3 + 5*sqrt(3)/2" },
      ],
      solution: {
        steps: [
          t`$\sin 30^\circ = \frac{1}{2}$ and $\tan 45^\circ = 1$.`,
          t`$5 \times \frac{1}{2} + 3 \times 1 = \frac{5}{2} + 3$.`,
          t`$\frac{5}{2} + \frac{6}{2} = \frac{11}{2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Ex 8.2 Q2(ii)" },
      stem: t`Find the value of $\frac{4}{5}\tan^2 60^\circ$ $+ 3\sin^2 60^\circ$.`,
      verify: { kind: "value", inputs: { e: "Rational(4, 5)*t60**2 + 3*s60**2" } },
      options: [
        { key: "A", text: t`$\frac{64}{15}$`, correct: false, misconceptionId: "C03-M2", value: "64/15" },
        { key: "B", text: t`$\frac{23 \sqrt{3}}{5}$`, correct: false, misconceptionId: "C03-M4", value: "23*sqrt(3)/5" },
        { key: "C", text: t`$\frac{93}{20}$`, correct: true, value: "93/20" },
        { key: "D", text: t`$\frac{61}{60}$`, correct: false, misconceptionId: "C03-M1", value: "61/60" },
      ],
      solution: {
        steps: [
          t`$\tan 60^\circ = \sqrt{3}$, so $\tan^2 60^\circ = 3$.`,
          t`$\sin 60^\circ = \frac{\sqrt{3}}{2}$, so $\sin^2 60^\circ = \frac{3}{4}$.`,
          t`$\frac{4}{5} \times 3 + 3 \times \frac{3}{4}$ $= \frac{12}{5} + \frac{9}{4}$.`,
          t`$\frac{48}{20} + \frac{45}{20} = \frac{93}{20}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Ex 8.2 Q2(iii)" },
      stem: t`Find the value of $2\sin 30^\circ + \cos 0^\circ$ $+ 3\sin 90^\circ$.`,
      verify: { kind: "value", inputs: { e: "2*s30 + c0 + 3*s90" } },
      options: [
        { key: "A", text: t`$\sqrt{3}$`, correct: false, misconceptionId: "C03-M1", value: "sqrt(3)" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C03-M2", value: "8" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C03-M5", value: "4" },
        { key: "D", text: t`$5$`, correct: true, value: "5" },
      ],
      solution: {
        steps: [
          t`$\sin 30^\circ = \frac{1}{2}$, $\cos 0^\circ = 1$ and $\sin 90^\circ = 1$.`,
          t`$2 \times \frac{1}{2} + 1 + 3 \times 1$ $= 1 + 1 + 3 = 5$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Ex 8.2 Q2(iv)" },
      stem: t`Find the value of $\dfrac{\tan 60^\circ}{\sin 60^\circ + \cos 60^\circ}$.`,
      verify: { kind: "value", inputs: { e: "t60/(s60 + c60)" } },
      options: [
        { key: "A", text: t`$\frac{\sqrt{3} - 1}{4}$`, correct: false, misconceptionId: "C03-M2", value: "-1/4 + sqrt(3)/4" },
        { key: "B", text: t`$\frac{3 - \sqrt{3}}{2}$`, correct: false, misconceptionId: "C03-M6", value: "3/2 - sqrt(3)/2" },
        { key: "C", text: t`$3 - \sqrt{3}$`, correct: true, value: "3 - sqrt(3)" },
        { key: "D", text: t`$\frac{3 - \sqrt{3}}{3}$`, correct: false, misconceptionId: "C03-M1", value: "1 - sqrt(3)/3" },
      ],
      solution: {
        steps: [
          t`$\tan 60^\circ = \sqrt{3}$, $\sin 60^\circ = \frac{\sqrt{3}}{2}$ and $\cos 60^\circ = \frac{1}{2}$.`,
          t`Denominator: $\frac{\sqrt{3}}{2} + \frac{1}{2} = \frac{\sqrt{3} + 1}{2}$.`,
          t`Value: $\sqrt{3} \div \frac{\sqrt{3} + 1}{2}$ $= \frac{2\sqrt{3}}{\sqrt{3} + 1}$.`,
          t`Multiply above and below by $\sqrt{3} - 1$: $\frac{2\sqrt{3}(\sqrt{3} - 1)}{3 - 1}$ $= \frac{6 - 2\sqrt{3}}{2} = 3 - \sqrt{3}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Ex 8.2 Q2(v)" },
      stem: t`Find the value of $\cos^2 45^\circ + \sin^2 30^\circ$.`,
      verify: { kind: "value", inputs: { e: "c45**2 + s30**2" } },
      options: [
        { key: "A", text: t`$\frac{3}{4}$`, correct: true, value: "3/4" },
        { key: "B", text: t`$\frac{5}{4}$`, correct: false, misconceptionId: "C03-M1", value: "5/4" },
        { key: "C", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C03-M3", value: "1/2" },
        { key: "D", text: t`$1 + \sqrt{2}$`, correct: false, misconceptionId: "C03-M4", value: "1 + sqrt(2)" },
      ],
      solution: {
        steps: [
          t`$\cos 45^\circ = \frac{1}{\sqrt{2}}$, so $\cos^2 45^\circ = \frac{1}{2}$.`,
          t`$\sin 30^\circ = \frac{1}{2}$, so $\sin^2 30^\circ = \frac{1}{4}$.`,
          t`$\frac{1}{2} + \frac{1}{4} = \frac{2}{4} + \frac{1}{4} = \frac{3}{4}$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "authored" },
      stem: t`Find the value of $2\sin^2 45^\circ + 3\cos 0^\circ$.`,
      verify: { kind: "value", inputs: { e: "2*s45**2 + 3*c0" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$\frac{7}{2}$`, correct: false, misconceptionId: "C03-M3", value: "7/2" },
        { key: "C", text: t`$3 + 2\sqrt{2}$`, correct: false, misconceptionId: "C03-M4", value: "2*sqrt(2) + 3" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C03-M5", value: "1" },
      ],
      solution: {
        steps: [
          t`$\sin 45^\circ = \frac{1}{\sqrt{2}}$, so $\sin^2 45^\circ = \frac{1}{2}$.`,
          t`$\cos 0^\circ = 1$.`,
          t`$2 \times \frac{1}{2} + 3 \times 1 = 1 + 3 = 4$.`,
        ],
      },
    },
  ],
};
