import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`A hospital's radioactive iodine loses half its activity every 8 days. After 16 days, is it gone?`,
    reveal: t`No: a quarter is left. Each half life halves what remains, so the activity never quite reaches zero.`,
  },
  explanation: {
    intuition: [
      t`Radioactive decay is first order: a fixed fraction decays in each interval.`,
      t`The **half life** is the time for half to decay.`,
      t`After $n$ half lives, $(\tfrac12)^n$ is left.`,
      t`Activity is measured in becquerel or curie.`,
    ],
    formal: [
      {
        title: "Equations",
        points: [
          t`$N = N_0e^{-\lambda t}$.`,
          t`$t_{1/2} = \dfrac{0.693}{\lambda}$.`,
          t`$t = \dfrac{2.303}{\lambda}\log_{10}\dfrac{N_0}{N}$.`,
        ],
      },
      {
        title: "Units",
        points: [
          t`1 Bq = 1 disintegration per second.`,
          t`1 Ci = $3.7 \times 10^{10}$ Bq.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sample's half life is 10 min. What fraction remains after 30 min?`,
      steps: [
        t`30 min = 3 half lives.`,
        t`$(\tfrac12)^3 = \tfrac18$.`,
      ],
      answer: t`$\tfrac18$`,
    },
    visualSpec: t`Halve a pile of atoms again and again and plot what is left.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Inverts the relation.",
      remediation: t`$\lambda = 0.693/t_{1/2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Multiplies.",
      remediation: "Divide 0.693 by the half life.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Leaves out 0.693.",
      remediation: t`$\lambda = 0.693/t_{1/2}$, from ln 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Divides 100 by the number of half lives.",
      remediation: t`Each half life halves the amount: $(\tfrac12)^n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Gives the percentage decayed.",
      remediation: "The question asks what remains.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Uses $e^{-t/t_{1/2}}$.`,
      remediation: t`Use $(\tfrac12)^{t/t_{1/2}}$, or $e^{-\lambda t}$ with $\lambda = 0.693/t_{1/2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Uses the fraction decayed in the log.",
      remediation: t`Use $N_0/N$ = 100/0.1 = 1000.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Counts three half lives.",
      remediation: "99.9 % decayed needs about 10 half lives.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Leaves out 2.303.",
      remediation: t`With $\log_{10}$, multiply by 2.303.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Takes three quarters of the time.",
      remediation: "Three quarters gone means two half lives.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Takes the whole time.",
      remediation: "One quarter left = two half lives in 60 min.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Counts three half lives.",
      remediation: t`$\tfrac14 = (\tfrac12)^2$: two half lives.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says 1 Bq.",
      remediation: t`The curie is far larger: $3.7 \times 10^{10}$ Bq.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: t`Says $10^6$ Bq.`,
      remediation: t`1 Ci = $3.7 \times 10^{10}$ Bq.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Flips the exponent.",
      remediation: t`1 Ci is a large activity: $3.7 \times 10^{10}$ Bq.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (K)" },
      stem: t`The half life of $^{24}\mathrm{Na}$ is 900 min. What is its decay constant?`,
      verify: { kind: "value", inputs: { th: "900" }, params: { q: "lambda" } },
      options: [
        { key: "A", text: t`$0.00111\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C05-M3", value: "0.00111000000000000" },
        { key: "B", text: t`$624\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C05-M2", value: "624" },
        { key: "C", text: t`$1300\ \mathrm{min^{-1}}$`, correct: false, misconceptionId: "C05-M1", value: "1300" },
        { key: "D", text: t`$7.7 \times 10^{-4}\ \mathrm{min^{-1}}$`, correct: true, value: "0.000770000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = 0.693 \div 900$.`,
          t`$= 7.70 \times 10^{-4}\ \mathrm{min^{-1}}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Solved Ex.13.3" },
      stem: t`The half life of $^{32}\mathrm{P}$ is 14.26 d. What percentage of a sample remains after 40 d?`,
      verify: { kind: "value", inputs: { th: "14.26", t: "40" }, params: { q: "pct_left" } },
      options: [
        { key: "A", text: t`$14.3\%$`, correct: true, value: "14.3000000000000" },
        { key: "B", text: t`$85.7\%$`, correct: false, misconceptionId: "C05-M5", value: "85.7000000000000" },
        { key: "C", text: t`$6.05\%$`, correct: false, misconceptionId: "C05-M6", value: "6.05000000000000" },
        { key: "D", text: t`$35.6\%$`, correct: false, misconceptionId: "C05-M4", value: "35.6000000000000" },
      ],
      solution: {
        steps: [
          t`$40 \div 14.26 = 2.81$ half lives.`,
          t`$100 \times (\tfrac12)^{2.81} = 14.3\%$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Solved Ex.13.4" },
      stem: t`The half life of $^{34}\mathrm{Cl}$ is 1.53 s. How long does it take for 99.9 % of a sample to decay?`,
      verify: { kind: "value", inputs: { th: "1.53", pct: "99.9" }, params: { q: "time_decay" } },
      options: [
        { key: "A", text: t`$0.00221\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M7", value: "0.00221000000000000" },
        { key: "B", text: t`$15.3\ \mathrm{s}$`, correct: true, value: "15.3000000000000" },
        { key: "C", text: t`$4.59\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M8", value: "4.59000000000000" },
        { key: "D", text: t`$6.62\ \mathrm{s}$`, correct: false, misconceptionId: "C05-M9", value: "6.62000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda = 0.693/1.53 = 0.453\ \mathrm{s^{-1}}$; $N_0/N = 1000$.`,
          t`$t = (2.303/0.453) \times 3 = 15.3$ s.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.4 (H)" },
      stem: t`Three quarters of a radioisotope decays in 60 min. What is its half life?`,
      verify: { kind: "value", inputs: { t: "60" }, params: { q: "three_quarters" } },
      options: [
        { key: "A", text: t`$60\ \mathrm{min}$`, correct: false, misconceptionId: "C05-M11", value: "60" },
        { key: "B", text: t`$20\ \mathrm{min}$`, correct: false, misconceptionId: "C05-M12", value: "20" },
        { key: "C", text: t`$30\ \mathrm{min}$`, correct: true, value: "30" },
        { key: "D", text: t`$45\ \mathrm{min}$`, correct: false, misconceptionId: "C05-M10", value: "45" },
      ],
      solution: {
        steps: [
          t`$\tfrac14$ left = two half lives.`,
          t`60 ÷ 2 = 30 min.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (J)" },
      stem: t`One curie equals`,
      verify: { kind: "value", inputs: {  }, params: { q: "curie" } },
      options: [
        { key: "A", text: t`$3.7 \times 10^{-10}$ Bq`, correct: false, misconceptionId: "C05-M15", value: "bq_3_7e_minus10" },
        { key: "B", text: t`1 Bq`, correct: false, misconceptionId: "C05-M13", value: "bq_1" },
        { key: "C", text: t`$10^{6}$ Bq`, correct: false, misconceptionId: "C05-M14", value: "bq_1e6" },
        { key: "D", text: t`$3.7 \times 10^{10}$ Bq`, correct: true, value: "bq_3_7e10" },
      ],
      solution: {
        steps: [
          t`The curie is based on radium's activity.`,
          t`1 Ci = $3.7 \times 10^{10}$ Bq.`,
        ],
      },
    },
  ],
};
