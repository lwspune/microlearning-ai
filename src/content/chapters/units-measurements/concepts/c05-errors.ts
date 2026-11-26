import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Five students time the same pendulum and get five slightly different answers. None of them made a mistake. So what is the period, and how far can we trust it?`,
    reveal: t`Every measurement has some **error**. Take the mean of the readings as the best value, and the mean of how far they stray from it as the **mean absolute error**: then the result reads, say, $2.50 \pm 0.05\ \mathrm{s}$.`,
  },
  explanation: {
    intuition: [
      t`No measurement is exact: instruments, methods and people all add small errors.`,
      t`Repeating a measurement and taking the **mean** gives the most probable value.`,
      t`Each reading's **absolute error** is how far it lies from the mean, ignoring sign.`,
      t`The average of these is the **mean absolute error**: the result is mean $\pm$ mean absolute error.`,
      t`Dividing by the mean shows how big the error is compared with the value itself.`,
    ],
    formal: [
      {
        title: "Mean value and absolute errors",
        points: [
          t`Mean of $n$ readings: $a_m$ $= \dfrac{a_1 + a_2 + \dots + a_n}{n}$.`,
          t`Absolute error of a reading: $\left|\Delta a_i\right|$ $= \left|a_i - a_m\right|$.`,
          t`Mean absolute error: $\Delta a_m$ $= \dfrac{\left|\Delta a_1\right| + \dots + \left|\Delta a_n\right|}{n}$.`,
          t`Report the result as $a_m \pm \Delta a_m$.`,
        ],
      },
      {
        title: "Relative and percentage error",
        points: [
          t`**Relative error** $= \dfrac{\Delta a_m}{a_m}$, a pure number.`,
          t`**Percentage error** $= \dfrac{\Delta a_m}{a_m} \times 100\%$.`,
          t`They let us compare measurements of different sizes: $1\ \mathrm{mm}$ in $1\ \mathrm{m}$ is far better than in $1\ \mathrm{cm}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The thickness of a wire is measured as $1.20$, $1.24$, $1.22$ and $1.18\ \mathrm{mm}$. Find the mean, the mean absolute error and the percentage error.`,
      steps: [
        t`Mean $= \dfrac{1.20 + 1.24 + 1.22 + 1.18}{4}$ $= 1.21\ \mathrm{mm}$.`,
        t`Absolute errors: $0.01$, $0.03$, $0.01$, $0.03$; mean $= \dfrac{0.08}{4}$ $= 0.02\ \mathrm{mm}$.`,
        t`Percentage error $= \dfrac{0.02}{1.21} \times 100$ $\approx 1.65\%$.`,
      ],
      answer: t`$\left(1.21 \pm 0.02\right)\ \mathrm{mm}$; about $1.65\%$`,
    },
    visualSpec: t`Scatter several readings about their mean and watch the mean absolute error mark out the band of trust.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Keeps the signs of the deviations.",
      remediation: t`Positive and negative deviations cancel exactly; use their sizes, $\left|a_i - a_m\right|$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gives the largest deviation.",
      remediation: "The mean absolute error is the *average* of all the deviations' sizes.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: t`Divides by $n - 1$.`,
      remediation: t`Average over all $n$ readings: divide by $n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Gives the relative error instead of the percentage.",
      remediation: t`Percentage error is the relative error times $100$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Divides the mean by the error.",
      remediation: t`The error goes on top: $\dfrac{\Delta a_m}{a_m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Uses the spread of the readings.",
      remediation: "Use the mean absolute error, not the largest minus the smallest reading.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Gives the mean absolute error.",
      remediation: t`Relative error divides that by the mean: $\dfrac{\Delta a_m}{a_m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Gives the percentage as the relative error.",
      remediation: t`The relative error is the plain ratio; times $100$ it becomes the percentage.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Turns the ratio upside down.",
      remediation: t`Relative error is error over value, a small number: $\dfrac{\Delta a_m}{a_m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Forgets to divide by the mean.",
      remediation: t`Relative error compares the error with the value: divide by $a_m$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Gives one reading's absolute error.",
      remediation: "The relative error uses the *mean* absolute error and the mean value.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Multiplies the error by 100 without dividing by the value.",
      remediation: t`$\dfrac{0.05}{2.50} \times 100$ $= 2\%$: divide by the value first.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Solved Ex.1.5" },
      stem: t`Repeated measurements of the radius of a sphere give $5.63$, $5.54$, $5.44$, $5.40$ and $5.35\ \mathrm{m}$. What is the mean absolute error?`,
      verify: { kind: "value", inputs: { xs: "5.63,5.54,5.44,5.40,5.35" }, params: { ask: "mae" } },
      options: [
        { key: "A", text: t`$0.113\ \mathrm{m}$`, correct: false, misconceptionId: "C05-M3", value: "0.113000000000000" },
        { key: "B", text: t`$0.0904\ \mathrm{m}$`, correct: true, value: "0.0904000000000000" },
        { key: "C", text: t`$0\ \mathrm{m}$`, correct: false, misconceptionId: "C05-M1", value: "0" },
        { key: "D", text: t`$0.158\ \mathrm{m}$`, correct: false, misconceptionId: "C05-M2", value: "0.158000000000000" },
      ],
      solution: {
        steps: [
          t`Mean $= \dfrac{27.36}{5}$ $= 5.472\ \mathrm{m}$; absolute errors $0.158$, $0.068$, $0.032$, $0.072$, $0.122$.`,
          t`Mean absolute error $= \dfrac{0.452}{5}$ $\approx 0.0904\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (vi)" },
      stem: t`Four measurements of the length of a steel plate with Vernier callipers give $3.11$, $3.13$, $3.14$ and $3.14\ \mathrm{cm}$. What is the percentage error?`,
      verify: { kind: "value", inputs: { xs: "3.11,3.13,3.14,3.14" }, params: { ask: "pct" } },
      options: [
        { key: "A", text: t`$0.00319\ \mathrm{\%}$`, correct: false, misconceptionId: "C05-M4", value: "0.00319000000000000" },
        { key: "B", text: t`$313\ \mathrm{\%}$`, correct: false, misconceptionId: "C05-M5", value: "313" },
        { key: "C", text: t`$0.958\ \mathrm{\%}$`, correct: false, misconceptionId: "C05-M6", value: "0.958000000000000" },
        { key: "D", text: t`$0.319\ \mathrm{\%}$`, correct: true, value: "0.319000000000000" },
      ],
      solution: {
        steps: [
          t`Mean $= \dfrac{12.52}{4}$ $= 3.13\ \mathrm{cm}$; absolute errors $0.02$, $0$, $0.01$, $0.01$, so $\Delta a_m = 0.01\ \mathrm{cm}$.`,
          t`Percentage error $= \dfrac{0.01}{3.13} \times 100$ $\approx 0.32\%$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.3 (viii)" },
      stem: t`In Ohm's experiment the unknown resistance was found as $6.12$, $6.09$, $6.22$ and $6.15\ \Omega$. What is the relative error?`,
      verify: { kind: "value", inputs: { xs: "6.12,6.09,6.22,6.15" }, params: { ask: "rel" } },
      options: [
        { key: "A", text: t`$0.00651$`, correct: true, value: "0.00651000000000000" },
        { key: "B", text: t`$154$`, correct: false, misconceptionId: "C05-M5", value: "154" },
        { key: "C", text: t`$0.04$`, correct: false, misconceptionId: "C05-M7", value: "0.0400000000000000" },
        { key: "D", text: t`$0.651$`, correct: false, misconceptionId: "C05-M8", value: "0.651000000000000" },
      ],
      solution: {
        steps: [
          t`Mean $= \dfrac{24.58}{4} = 6.145\ \Omega$; absolute errors $0.025$, $0.055$, $0.075$, $0.005$, so $\Delta R_m = 0.04\ \Omega$.`,
          t`Relative error $= \dfrac{0.04}{6.145}$ $\approx 0.0065$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/units-measurements-11-phy/Ex Q.2 (iii)" },
      stem: t`A quantity is measured several times, with mean $a_m$ and mean absolute error $\Delta a_m$. What is its relative error?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "def" } },
      options: [
        { key: "A", text: t`$\Delta a_m \times 100$`, correct: false, misconceptionId: "C05-M10", value: "da_times_100" },
        { key: "B", text: t`$a_i - a_m$, for any one reading`, correct: false, misconceptionId: "C05-M11", value: "a_minus_mean" },
        { key: "C", text: t`$\dfrac{\Delta a_m}{a_m}$`, correct: true, value: "da_over_a" },
        { key: "D", text: t`$\dfrac{a_m}{\Delta a_m}$`, correct: false, misconceptionId: "C05-M9", value: "a_over_da" },
      ],
      solution: {
        steps: [
          t`Relative error compares the mean absolute error with the mean value.`,
          t`It is $\dfrac{\Delta a_m}{a_m}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`The period of a pendulum is measured as $2.50\ \mathrm{s}$ with a mean absolute error of $0.05\ \mathrm{s}$. What is the percentage error?`,
      verify: { kind: "value", inputs: { a: "2.50", da: "0.05" }, params: { ask: "pct2" } },
      options: [
        { key: "A", text: t`$2\ \mathrm{\%}$`, correct: true, value: "2" },
        { key: "B", text: t`$0.02\ \mathrm{\%}$`, correct: false, misconceptionId: "C05-M4", value: "0.0200000000000000" },
        { key: "C", text: t`$50\ \mathrm{\%}$`, correct: false, misconceptionId: "C05-M5", value: "50" },
        { key: "D", text: t`$5\ \mathrm{\%}$`, correct: false, misconceptionId: "C05-M12", value: "5" },
      ],
      solution: {
        steps: [
          t`Percentage error $= \dfrac{0.05}{2.50} \times 100$.`,
          t`$= 2\%$.`,
        ],
      },
    },
  ],
};
