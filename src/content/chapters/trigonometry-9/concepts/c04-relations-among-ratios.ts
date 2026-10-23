import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`No table, no calculator: what is $\frac{\sin 18^\circ}{\cos 72^\circ}$?`,
    reveal: t`It is $1$. $18^\circ + 72^\circ = 90^\circ$, so $\cos 72^\circ = \sin 18^\circ$. A number divided by itself is $1$.`,
  },
  explanation: {
    intuition: [
      t`The three ratios of an angle are linked: knowing one fixes the other two.`,
      t`$\tan\theta$ is just $\sin\theta$ divided by $\cos\theta$.`,
      t`The two acute angles of a right triangle add up to $90^\circ$.`,
      t`The side opposite one acute angle is next to the other, so $\sin$ of one is $\cos$ of the other.`,
      t`Pythagoras' theorem, written with ratios, gives $\sin^2\theta + \cos^2\theta = 1$.`,
      t`So one ratio of an acute angle gives you the other two.`,
    ],
    formal: [
      {
        title: "Tangent is sine over cosine",
        points: [
          t`$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}$ and $\cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}$.`,
          t`Divide them: the hypotenuse cancels and leaves $\frac{\text{opposite}}{\text{adjacent}}$.`,
          t`So $\tan\theta = \frac{\sin\theta}{\cos\theta}$.`,
          t`Example: $\sin\theta = \frac{3}{5}$, $\cos\theta = \frac{4}{5}$ give $\tan\theta = \frac{3}{4}$.`,
          t`Keep $\sin\theta$ on top: $\frac{\cos\theta}{\sin\theta}$ is not $\tan\theta$.`,
        ],
      },
      {
        title: "Complementary angles",
        points: [
          t`In $\triangle ABC$, $\angle B = 90^\circ$, so $\angle A + \angle C = 90^\circ$.`,
          t`Two angles that add up to $90^\circ$ are **complementary**: $\angle C = \theta$ makes $\angle A = 90^\circ - \theta$.`,
          t`$AB$ is opposite $\angle C$ and adjacent to $\angle A$.`,
          t`So $\sin\theta = \frac{AB}{AC}$ $= \cos(90^\circ - \theta)$.`,
          t`In the same way, $\cos\theta = \sin(90^\circ - \theta)$.`,
          t`The complement is $90^\circ - \theta$, not $180^\circ - \theta$: that is the supplement.`,
        ],
        figure: {
          alt: "Right triangle ABC with the right angle at B. The angle at C is θ and the angle at A is 90° − θ. The side AB is opposite the angle at C and next to the angle at A.",
          axes: "none",
          view: { x: [-1.4, 5], y: [-0.9, 3.6] },
          elements: [
            { kind: "segment", from: [0, 0], to: [4, 0], step: 1 },
            { kind: "segment", from: [0, 0], to: [0, 3], step: 1 },
            { kind: "segment", from: [4, 0], to: [0, 3], step: 1 },
            { kind: "point", at: [0, 0], label: "B", labelAt: "sw", step: 1 },
            { kind: "point", at: [4, 0], label: "C", labelAt: "se", step: 1 },
            { kind: "point", at: [0, 3], label: "A", labelAt: "nw", step: 1 },
            { kind: "rightAngle", at: [0, 0], from: 0, step: 1 },
            { kind: "angle", at: [4, 0], from: 143.13, to: 180, label: "θ", labelAt: "w", step: 2 },
            { kind: "angle", at: [0, 3], from: 270, to: 323.13, step: 2 },
            { kind: "label", at: [0.15, 1.8], label: "90° − θ", labelAt: "e", step: 2 },
            { kind: "segment", from: [0, 0], to: [0, 3], tone: "good", step: 3 },
          ],
        },
      },
      {
        title: "Tangent of the complement",
        points: [
          t`$\tan(90^\circ - \theta) = \frac{\sin(90^\circ - \theta)}{\cos(90^\circ - \theta)}$.`,
          t`Swap each ratio for its partner: this is $\frac{\cos\theta}{\sin\theta} = \frac{1}{\tan\theta}$.`,
          t`So $\tan\theta \times \tan(90^\circ - \theta) = 1$.`,
          t`Example: $\tan 30^\circ \times \tan 60^\circ = 1$.`,
        ],
      },
      {
        title: "Sine squared plus cosine squared",
        points: [
          t`$\sin^2\theta$ means $(\sin\theta)^2$, the square of $\sin\theta$.`,
          t`Pythagoras: $\text{opposite}^2 + \text{adjacent}^2 = \text{hypotenuse}^2$.`,
          t`Divide each term by $\text{hypotenuse}^2$: $\sin^2\theta + \cos^2\theta = 1$.`,
          t`It holds for every angle $\theta$, so it is called an **identity**.`,
          t`Check at $\sin\theta = \frac{3}{5}$, $\cos\theta = \frac{4}{5}$: $\frac{9}{25} + \frac{16}{25} = 1$.`,
          t`It is about squares: $\sin\theta + \cos\theta$ is not $1$.`,
        ],
      },
      {
        title: "One ratio gives the others",
        points: [
          t`Given $\sin\theta$: $\cos^2\theta = 1 - \sin^2\theta$.`,
          t`Given $\cos\theta$: $\sin^2\theta = 1 - \cos^2\theta$.`,
          t`Then take the square root; for an acute angle the ratio is positive.`,
          t`Example: $\cos\theta = \frac{3}{5}$ gives $\sin^2\theta = \frac{16}{25}$, so $\sin\theta = \frac{4}{5}$.`,
          t`Last, $\tan\theta = \frac{\sin\theta}{\cos\theta}$ $= \frac{4}{3}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`$\theta$ is an acute angle and $\sin\theta = \frac{8}{17}$. Find $\cos\theta$ and $\tan\theta$.`,
      steps: [
        t`Use $\sin^2\theta + \cos^2\theta = 1$: $\cos^2\theta = 1 - \sin^2\theta$.`,
        t`$\cos^2\theta = 1 - \frac{64}{289}$ $= \frac{225}{289}$.`,
        t`$\theta$ is acute, so $\cos\theta$ is positive: $\cos\theta = \sqrt{\frac{225}{289}} = \frac{15}{17}$.`,
        t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ $= \frac{8}{17} \div \frac{15}{17} = \frac{8}{15}$.`,
      ],
      answer: t`$\cos\theta = \frac{15}{17}$ and $\tan\theta = \frac{8}{15}$.`,
    },
    visualSpec: t`Drag the angle $\theta$ of a right triangle; bars for $\sin^2\theta$ and $\cos^2\theta$ always add up to $1$, and the other acute angle shows $90^\circ - \theta$ with $\sin$ and $\cos$ swapped.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Takes the complement of $\theta$ as $180^\circ - \theta$: mixes up complementary and supplementary angles.`,
      remediation: t`Complementary angles add up to $90^\circ$, so the partner of $\theta$ is $90^\circ - \theta$. Angles that add up to $180^\circ$ are supplementary.`,
      fallback: { kind: "ext", topic: "complementary and supplementary angles (Std VIII)" },
    },
    {
      id: "C04-M2",
      mistake: t`Keeps the same angle when the ratio changes: believes $\sin\theta = \cos\theta$.`,
      remediation: t`$\sin\theta$ equals $\cos$ of the other acute angle, $90^\circ - \theta$: the side opposite $\theta$ is adjacent to that angle.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: t`Drops the squares: uses $\sin\theta + \cos\theta = 1$.`,
      remediation: t`The identity comes from Pythagoras, so it is about squares: $\sin^2\theta + \cos^2\theta = 1$. Square the given ratio before subtracting it from $1$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: t`Forgets the square root: uses $1 - \sin^2\theta$ as $\cos\theta$ (or $1 - \cos^2\theta$ as $\sin\theta$).`,
      remediation: t`$1 - \sin^2\theta$ is $\cos^2\theta$, the square. Take its square root to get $\cos\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Turns the quotient upside down: uses $\tan\theta = \frac{\cos\theta}{\sin\theta}$.`,
      remediation: t`$\tan\theta$ is opposite over adjacent, so $\sin\theta$ goes on top: $\tan\theta = \frac{\sin\theta}{\cos\theta}$, and $\sin\theta = \tan\theta \times \cos\theta$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M6",
      mistake: t`Adds the angle to $90^\circ$: takes the partner of $\theta$ as $90^\circ + \theta$.`,
      remediation: t`The partner angle is $90^\circ - \theta$, because the two acute angles of a right triangle add up to $90^\circ$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Prob Q5(i)" },
      stem: t`Fill in the blank: $\sin 20^\circ = \cos$ ____.`,
      verify: { kind: "value", inputs: { a: "20" }, params: { kind: "co", rel: "sin_cos" } },
      options: [
        { key: "A", text: t`$20^\circ$`, correct: false, misconceptionId: "C04-M2", value: "20" },
        { key: "B", text: t`$110^\circ$`, correct: false, misconceptionId: "C04-M6", value: "110" },
        { key: "C", text: t`$70^\circ$`, correct: true, value: "70" },
        { key: "D", text: t`$160^\circ$`, correct: false, misconceptionId: "C04-M1", value: "160" },
      ],
      solution: {
        steps: [
          t`For an acute angle $\theta$, $\sin\theta = \cos(90^\circ - \theta)$.`,
          t`With $\theta = 20^\circ$: $\sin 20^\circ = \cos(90^\circ - 20^\circ)$ $= \cos 70^\circ$.`,
          t`So the blank is $70^\circ$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Prob Q5(ii)" },
      stem: t`Fill in the blank: $\tan 35^\circ \times \tan$ ____ $= 1$.`,
      verify: { kind: "value", inputs: { a: "35" }, params: { kind: "co", rel: "tan_tan" } },
      options: [
        { key: "A", text: t`$145^\circ$`, correct: false, misconceptionId: "C04-M1", value: "145" },
        { key: "B", text: t`$35^\circ$`, correct: false, misconceptionId: "C04-M2", value: "35" },
        { key: "C", text: t`$125^\circ$`, correct: false, misconceptionId: "C04-M6", value: "125" },
        { key: "D", text: t`$55^\circ$`, correct: true, value: "55" },
      ],
      solution: {
        steps: [
          t`$\tan(90^\circ - \theta) = \frac{\sin(90^\circ - \theta)}{\cos(90^\circ - \theta)}$ $= \frac{\cos\theta}{\sin\theta}$.`,
          t`So $\tan(90^\circ - \theta) = \frac{1}{\tan\theta}$, and $\tan\theta \times \tan(90^\circ - \theta) = 1$.`,
          t`With $\theta = 35^\circ$: $90^\circ - 35^\circ = 55^\circ$, so the blank is $55^\circ$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Ex 8.2 Q1" },
      stem: t`$\theta$ is an acute angle and $\cos\theta = \frac{35}{37}$. Find $\tan\theta$.`,
      verify: { kind: "value", inputs: { c: "35/37" }, params: { kind: "id", given: "cos", find: "tan" } },
      options: [
        { key: "A", text: t`$\frac{144}{1295}$`, correct: false, misconceptionId: "C04-M4", value: "144/1295" },
        { key: "B", text: t`$\frac{35}{12}$`, correct: false, misconceptionId: "C04-M5", value: "35/12" },
        { key: "C", text: t`$\frac{12}{35}$`, correct: true, value: "12/35" },
        { key: "D", text: t`$\frac{2}{35}$`, correct: false, misconceptionId: "C04-M3", value: "2/35" },
      ],
      solution: {
        steps: [
          t`$\sin^2\theta = 1 - \cos^2\theta$ $= 1 - \frac{1225}{1369} = \frac{144}{1369}$.`,
          t`$\theta$ is acute, so $\sin\theta$ is positive: $\sin\theta = \frac{12}{37}$.`,
          t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ $= \frac{12}{37} \div \frac{35}{37} = \frac{12}{35}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/8.2 SolvedEx.4" },
      stem: t`In right-angled $\triangle PQR$, $\angle Q = 90^\circ$, $\angle R = \theta$ and $\sin\theta = \frac{5}{13}$. Find $\tan\theta$.`,
      verify: { kind: "value", inputs: { s: "5/13" }, params: { kind: "id", given: "sin", find: "tan" } },
      options: [
        { key: "A", text: t`$\frac{5}{8}$`, correct: false, misconceptionId: "C04-M3", value: "5/8" },
        { key: "B", text: t`$\frac{65}{144}$`, correct: false, misconceptionId: "C04-M4", value: "65/144" },
        { key: "C", text: t`$\frac{12}{5}$`, correct: false, misconceptionId: "C04-M5", value: "12/5" },
        { key: "D", text: t`$\frac{5}{12}$`, correct: true, value: "5/12" },
      ],
      solution: {
        steps: [
          t`$\cos^2\theta = 1 - \sin^2\theta$ $= 1 - \frac{25}{169} = \frac{144}{169}$.`,
          t`$\theta$ is acute, so $\cos\theta$ is positive: $\cos\theta = \frac{12}{13}$.`,
          t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$ $= \frac{5}{13} \div \frac{12}{13} = \frac{5}{12}$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Prob Q4" },
      stem: t`In right-angled $\triangle LMN$, $\angle M = 90^\circ$, $\angle N = \theta$, $\cos\theta = \frac{24}{25}$ and $\tan\theta = \frac{7}{24}$. Find $\sin\theta$.`,
      verify: { kind: "value", inputs: { c: "24/25", t: "7/24" }, params: { kind: "id", given: "cos", find: "sin" } },
      options: [
        { key: "A", text: t`$\frac{576}{175}$`, correct: false, misconceptionId: "C04-M5", value: "576/175" },
        { key: "B", text: t`$\frac{7}{25}$`, correct: true, value: "7/25" },
        { key: "C", text: t`$\frac{1}{25}$`, correct: false, misconceptionId: "C04-M3", value: "1/25" },
        { key: "D", text: t`$\frac{49}{625}$`, correct: false, misconceptionId: "C04-M4", value: "49/625" },
      ],
      solution: {
        steps: [
          t`$\tan\theta = \frac{\sin\theta}{\cos\theta}$, so $\sin\theta = \tan\theta \times \cos\theta$.`,
          t`$\sin\theta = \frac{7}{24} \times \frac{24}{25}$ $= \frac{7}{25}$.`,
          t`Check: $\frac{49}{625} + \frac{576}{625} = 1$, so $\sin^2\theta + \cos^2\theta = 1$ holds.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/trigonometry-9/Prob Q5(iii)" },
      stem: t`Fill in the blank: $\cos 40^\circ = \sin$ ____.`,
      verify: { kind: "value", inputs: { a: "40" }, params: { kind: "co", rel: "cos_sin" } },
      options: [
        { key: "A", text: t`$50^\circ$`, correct: true, value: "50" },
        { key: "B", text: t`$140^\circ$`, correct: false, misconceptionId: "C04-M1", value: "140" },
        { key: "C", text: t`$40^\circ$`, correct: false, misconceptionId: "C04-M2", value: "40" },
        { key: "D", text: t`$130^\circ$`, correct: false, misconceptionId: "C04-M6", value: "130" },
      ],
      solution: {
        steps: [
          t`For an acute angle $\theta$, $\cos\theta = \sin(90^\circ - \theta)$.`,
          t`With $\theta = 40^\circ$: $\cos 40^\circ = \sin(90^\circ - 40^\circ)$ $= \sin 50^\circ$.`,
          t`So the blank is $50^\circ$.`,
        ],
      },
    },
  ],
};
