import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`A boat bobs on two sets of ripples at once, both with the same period but slightly out of step. Does it bob with the two amplitudes simply added?`,
    reveal: t`Only if the ripples are exactly in step. Two S.H.M.s of the same frequency combine into one S.H.M., whose amplitude depends on their phase difference.`,
  },
  explanation: {
    intuition: [
      t`A particle can be pushed into two S.H.M.s at once, along the same line and with the same frequency.`,
      t`Its displacement is the sum of the two: $x = x_1 + x_2$.`,
      t`The sum is itself an S.H.M. of the same frequency, with a new amplitude $R$ and epoch $\delta$.`,
      t`In step, the amplitudes add; half a cycle apart, they subtract.`,
      t`In between, $R^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\left(\alpha_1 - \alpha_2\right)$.`,
    ],
    formal: [
      {
        title: "Adding two S.H.M.s",
        points: [
          t`$x_1 = A_1\sin\left(\omega t + \alpha_1\right)$ and $x_2 = A_2\sin\left(\omega t + \alpha_2\right)$.`,
          t`Expanding and collecting, $x = R\sin\left(\omega t + \delta\right)$: an S.H.M. of the same $\omega$.`,
          t`$R\cos\delta = A_1\cos\alpha_1 + A_2\cos\alpha_2$ and $R\sin\delta = A_1\sin\alpha_1 + A_2\sin\alpha_2$.`,
          t`So $R^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\left(\alpha_1 - \alpha_2\right)$ and $\tan\delta = \dfrac{A_1\sin\alpha_1 + A_2\sin\alpha_2}{A_1\cos\alpha_1 + A_2\cos\alpha_2}$.`,
        ],
      },
      {
        title: "Special cases",
        points: [
          t`In phase, $\alpha_1 - \alpha_2 = 0$: $R = A_1 + A_2$, the largest possible.`,
          t`Opposite, $\alpha_1 - \alpha_2 = \pi$: $R = \left|A_1 - A_2\right|$, the smallest.`,
          t`A quarter cycle apart, $\dfrac{\pi}{2}$: $R = \sqrt{A_1^2 + A_2^2}$.`,
          t`So $x = a\sin\omega t + b\cos\omega t$ is S.H.M. with amplitude $\sqrt{a^2 + b^2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Two S.H.M.s of the same frequency, $x_1 = 4\sin\omega t$ and $x_2 = 3\sin\left(\omega t + \dfrac{\pi}{2}\right)$, act on a particle. Find the resultant amplitude and epoch.`,
      steps: [
        t`The phase difference is $\dfrac{\pi}{2}$, so $\cos\left(\alpha_1 - \alpha_2\right) = 0$.`,
        t`$R = \sqrt{4^2 + 3^2} = 5$.`,
        t`$\tan\delta = \dfrac{4\sin 0 + 3\sin\frac{\pi}{2}}{4\cos 0 + 3\cos\frac{\pi}{2}} = \dfrac{3}{4}$.`,
        t`$\delta = \tan^{-1}\dfrac{3}{4} \approx 36.9^\circ$.`,
      ],
      answer: t`$R = 5$, $\delta \approx 36.9^\circ$`,
    },
    visualSpec: t`Add two rotating arrows of fixed lengths, tip to tail, and watch their sum turn steadily: its length is the resultant amplitude.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Adds the amplitudes, ignoring the phase difference.",
      remediation: t`$R = A_1 + A_2$ only when the two are in phase; in general include $2A_1A_2\cos\left(\alpha_1 - \alpha_2\right)$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C12-M2",
      mistake: "Adds the squares, as if the motions were a quarter cycle apart.",
      remediation: t`$\sqrt{A_1^2 + A_2^2}$ holds only for a phase difference of $\dfrac{\pi}{2}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C12-M3",
      mistake: "Uses the sine of the phase difference.",
      remediation: t`$R^2 = A_1^2 + A_2^2 + 2A_1A_2\cos\left(\alpha_1 - \alpha_2\right)$, with cosine.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Averages the two epochs.",
      remediation: t`The larger amplitude pulls the resultant's epoch towards its own: use $\tan\delta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M5",
      mistake: "Turns the tangent upside down.",
      remediation: t`$\tan\delta = \dfrac{A_1\sin\alpha_1 + A_2\sin\alpha_2}{A_1\cos\alpha_1 + A_2\cos\alpha_2}$: sines on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "Adds the two epochs.",
      remediation: t`The resultant's epoch lies between the two epochs: find it from $\tan\delta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: "Leaves out the square root.",
      remediation: t`$R^2 = a^2 + b^2$, so $R = \sqrt{a^2 + b^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M8",
      mistake: "Subtracts the amplitudes, as if the motions were opposite.",
      remediation: t`$\left|A_1 - A_2\right|$ holds only for a phase difference of $\pi$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C12-M9",
      mistake: "Takes the larger amplitude.",
      remediation: t`Both motions contribute: in phase, $R = A_1 + A_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M10",
      mistake: "Thinks opposite S.H.M.s cancel completely.",
      remediation: t`They cancel only if their amplitudes are equal; otherwise $R = \left|A_1 - A_2\right|$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.20" },
      stem: t`Two parallel S.H.M.s, $x_1 = 5\sin\left(4\pi t + \dfrac{\pi}{3}\right)$ cm and $x_2 = 3\sin\left(4\pi t + \dfrac{\pi}{4}\right)$ cm, act on a particle. What is the amplitude of the resultant motion?`,
      verify: { kind: "value", inputs: { A1: "5", A2: "3", d: "15" }, params: { ask: "R" } },
      options: [
        { key: "A", text: t`$8\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M1", value: "8" },
        { key: "B", text: t`$5.831\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M2", value: "5.83100000000000" },
        { key: "C", text: t`$6.463\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M3", value: "6.46300000000000" },
        { key: "D", text: t`$7.936\ \mathrm{cm}$`, correct: true, value: "7.93600000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha_1 - \alpha_2 = \dfrac{\pi}{3} - \dfrac{\pi}{4} = \dfrac{\pi}{12} = 15^\circ$.`,
          t`$R = \sqrt{25 + 9 + 30\cos 15^\circ} = \sqrt{34 + 28.98} \approx 7.936\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.20" },
      stem: t`For the same two S.H.M.s, $x_1 = 5\sin\left(4\pi t + \dfrac{\pi}{3}\right)$ cm and $x_2 = 3\sin\left(4\pi t + \dfrac{\pi}{4}\right)$ cm, what is the epoch of the resultant motion?`,
      verify: { kind: "value", inputs: { A1: "5", A2: "3", a1: "60", a2: "45" }, params: { ask: "eps", sf: "3" } },
      options: [
        { key: "A", text: t`$105\ \mathrm{{}^\circ}$`, correct: false, misconceptionId: "C12-M6", value: "105" },
        { key: "B", text: t`$54.4\ \mathrm{{}^\circ}$`, correct: true, value: "54.4000000000000" },
        { key: "C", text: t`$52.5\ \mathrm{{}^\circ}$`, correct: false, misconceptionId: "C12-M4", value: "52.5000000000000" },
        { key: "D", text: t`$35.6\ \mathrm{{}^\circ}$`, correct: false, misconceptionId: "C12-M5", value: "35.6000000000000" },
      ],
      solution: {
        steps: [
          t`$\tan\delta = \dfrac{5\sin 60^\circ + 3\sin 45^\circ}{5\cos 60^\circ + 3\cos 45^\circ} = \dfrac{4.330 + 2.121}{2.5 + 2.121} \approx 1.396$.`,
          t`$\delta \approx 54.4^\circ$, that is $54^\circ\,23'$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/oscillations-12-phy/Ex Q.19" },
      stem: t`A particle's displacement is $x = a\sin\omega t + b\cos\omega t$. It performs S.H.M. What is its amplitude?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "R_sym" } },
      options: [
        { key: "A", text: t`$|a - b|$`, correct: false, misconceptionId: "C12-M8", value: "Abs(a - b)" },
        { key: "B", text: t`$\sqrt{a^2 + b^2}$`, correct: true, value: "sqrt(a**2 + b**2)" },
        { key: "C", text: t`$a + b$`, correct: false, misconceptionId: "C12-M1", value: "a + b" },
        { key: "D", text: t`$a^2 + b^2$`, correct: false, misconceptionId: "C12-M7", value: "a**2 + b**2" },
      ],
      solution: {
        steps: [
          t`$a\sin\omega t + b\cos\omega t = R\sin\left(\omega t + \delta\right)$ with $R\cos\delta = a$ and $R\sin\delta = b$.`,
          t`Squaring and adding, $R = \sqrt{a^2 + b^2}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "authored" },
      stem: t`Two S.H.M.s of the same frequency along the same line, with amplitudes $3\ \mathrm{cm}$ and $4\ \mathrm{cm}$, are in phase. What is the resultant amplitude?`,
      verify: { kind: "value", inputs: { A1: "3", A2: "4", d: "0" }, params: { ask: "R" } },
      options: [
        { key: "A", text: t`$4\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M9", value: "4" },
        { key: "B", text: t`$7\ \mathrm{cm}$`, correct: true, value: "7" },
        { key: "C", text: t`$5\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M2", value: "5" },
        { key: "D", text: t`$1\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M8", value: "1" },
      ],
      solution: {
        steps: [
          t`In phase, $\cos 0 = 1$: $R^2 = 9 + 16 + 24 = 49$.`,
          t`$R = 7\ \mathrm{cm}$, the sum of the amplitudes.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "authored" },
      stem: t`Two S.H.M.s of the same frequency along the same line, with amplitudes $5\ \mathrm{cm}$ and $3\ \mathrm{cm}$, differ in phase by $\pi$. What is the resultant amplitude?`,
      verify: { kind: "value", inputs: { A1: "5", A2: "3", d: "180" }, params: { ask: "R" } },
      options: [
        { key: "A", text: t`$5.831\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M2", value: "5.83100000000000" },
        { key: "B", text: t`$0\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M10", value: "0" },
        { key: "C", text: t`$2\ \mathrm{cm}$`, correct: true, value: "2" },
        { key: "D", text: t`$8\ \mathrm{cm}$`, correct: false, misconceptionId: "C12-M1", value: "8" },
      ],
      solution: {
        steps: [
          t`Phase difference $\pi$, $\cos\pi = -1$: $R^2 = 25 + 9 - 30 = 4$.`,
          t`$R = 2\ \mathrm{cm}$, the difference of the amplitudes.`,
        ],
      },
    },
  ],
};
