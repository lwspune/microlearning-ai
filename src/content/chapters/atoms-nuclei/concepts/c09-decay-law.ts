import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Two samples of the same radioactive isotope: one has twice as many nuclei as the other. In the next second, which loses more nuclei, and which loses a bigger fraction of its nuclei?`,
    reveal: t`The bigger sample loses twice as many, but both lose the same fraction. Every nucleus has the same chance of decaying each second, so the rate of decay is proportional to the number of nuclei present.`,
  },
  explanation: {
    intuition: [
      t`Each unstable nucleus has a fixed chance of decaying in each second; nothing outside changes it.`,
      t`So the more undecayed nuclei a sample has, the more of them decay each second.`,
      t`The **decay constant** $\lambda$ is that chance per unit time, the same for every nucleus of an isotope.`,
      t`The number left falls fast at first, then more and more slowly: an exponential fall.`,
      t`The **activity**, the number of decays per second, falls in exactly the same way.`,
    ],
    formal: [
      {
        title: "The law of radioactive decay",
        points: [
          t`The rate of decay at any instant is proportional to the number $N$ of undecayed nuclei present.`,
          t`So $-\dfrac{dN}{dt} = \lambda N$; the minus sign shows that $N$ falls.`,
          t`The rate does not depend on temperature, pressure or the chemical state of the element.`,
        ],
      },
      {
        title: "Integrating the law",
        points: [
          t`Separate the variables: $\dfrac{dN}{N} = -\lambda\,dt$.`,
          t`Integrate from $N_0$ at $t = 0$ to $N$ at time $t$: $\ln N - \ln N_0 = -\lambda t$.`,
          t`So $\ln\dfrac{N}{N_0} = -\lambda t$, that is, $N = N_0e^{-\lambda t}$.`,
          t`The graph of $N$ against $t$ starts at $N_0$ and falls ever more slowly towards zero.`,
          t`$e^{-\lambda t}$ is the fraction left; $1 - e^{-\lambda t}$ is the fraction that has decayed.`,
        ],
      },
      {
        title: "Activity and its units",
        points: [
          t`The **activity** is $A = -\dfrac{dN}{dt} = \lambda N$, the number of decays per second.`,
          t`Since $N$ falls exponentially, so does $A$: $A = A_0e^{-\lambda t}$, with $A_0 = \lambda N_0$.`,
          t`Its SI unit is the **becquerel**: $1\ \mathrm{Bq}$ is one decay per second.`,
          t`The older unit is the **curie**: $1\ \mathrm{Ci}$ $= 3.7 \times 10^{10}\ \mathrm{Bq}$, about the activity of $1\ \mathrm{g}$ of radium.`,
        ],
      },
      {
        title: "Nuclei in a sample",
        points: [
          t`A mass $m$ of an isotope of molar mass $M$ holds $N = \dfrac{m}{M}N_A$ nuclei.`,
          t`Take $m$ in g with $M$ in g/mol, and $N_A$ $= 6.02 \times 10^{23}\ \mathrm{mol^{-1}}$.`,
          t`Then $A = \lambda N$; with $\lambda$ in $\mathrm{s^{-1}}$, $A$ comes out in Bq.`,
        ],
      },
      {
        title: "Decay constant from two activities",
        points: [
          t`Divide $A_1 = A_0e^{-\lambda t_1}$ by $A_2 = A_0e^{-\lambda t_2}$: $A_0$ cancels.`,
          t`$\dfrac{A_1}{A_2}$ $= e^{\lambda\left(t_2 - t_1\right)}$, so $\lambda$ $= \dfrac{\ln\left(A_1/A_2\right)}{t_2 - t_1}$.`,
          t`$\lambda$ comes out per unit of the time used: per hour if $t$ is in hours.`,
        ],
      },
    ],
    worked: {
      prompt: t`The disintegration rate of a sample is $10^{10}$ per hour at $20$ hours from the start, and $6.3 \times 10^9$ per hour at $30$ hours. Find its decay constant and the number of radioactive nuclei at the start.`,
      steps: [
        t`$\dfrac{A_2}{A_1} = e^{-10\lambda}$ $= 0.63$, so $10\lambda = -\ln 0.63 = 0.462$.`,
        t`$\lambda = 0.0462$ per hour.`,
        t`Run back 20 hours: $A_0$ $= 10^{10} \times e^{20 \times 0.0462}$ $\approx 2.52 \times 10^{10}$ per hour.`,
        t`$N_0 = \dfrac{A_0}{\lambda}$ $= \dfrac{2.52 \times 10^{10}}{0.0462}$ $\approx 5.45 \times 10^{11}$.`,
      ],
      answer: t`$\lambda \approx 0.0462$ per hour; $N_0 \approx 5.45 \times 10^{11}$`,
    },
    visualSpec: t`Watch a grid of nuclei where each one flips with the same chance every tick, while a graph of the number left traces out $N_0e^{-\lambda t}$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Takes milligrams as grams.",
      remediation: t`$5\ \mathrm{mg}$ $= 5 \times 10^{-3}\ \mathrm{g}$: with $M$ in g/mol, the mass must be in g.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Forgets to divide by the molar mass.",
      remediation: t`$\dfrac{m}{M}$ is the number of moles; only then multiply by $N_A$.`,
      fallback: { kind: "ext", topic: "mole concept (Std XI Chemistry)" },
    },
    {
      id: "C09-M3",
      mistake: "Takes the activity as the number of nuclei.",
      remediation: t`Activity is decays per second, $A = \lambda N$: only a tiny fraction $\lambda$ of the nuclei decays each second.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Takes a curie as one decay per second.",
      remediation: t`$1\ \mathrm{Ci}$ $= 3.7 \times 10^{10}\ \mathrm{Bq}$; convert to becquerel before using $A = \lambda N$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Multiplies the activity by $\lambda$ instead of dividing.`,
      remediation: t`$A = \lambda N$, so $N = \dfrac{A}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Uses $t_2$ for the time between the two readings.`,
      remediation: t`$A_0$ cancels in the ratio, leaving $e^{-\lambda\left(t_2 - t_1\right)}$: use the gap, $30 - 20 = 10$ hours.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Treats the decay as linear in time.",
      remediation: t`The rate is proportional to $N$, so $N$ falls exponentially, $N = N_0e^{-\lambda t}$, not by equal amounts each hour.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: t`Uses base 10 in place of $e$.`,
      remediation: t`The law integrates to a natural exponential: use $e$ and $\ln$, not $10$ and $\log_{10}$.`,
      fallback: { kind: "ext", topic: "exponential and logarithmic functions (Std XI Maths)" },
    },
    {
      id: "C09-M9",
      mistake: "Gives the fraction decayed when the fraction left is asked.",
      remediation: t`$e^{-\lambda t}$ is the fraction left; $1 - e^{-\lambda t}$ is the fraction that has decayed.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Drops the minus sign in the exponent.",
      remediation: t`$\dfrac{dN}{N} = -\lambda\,dt$ integrates to $\ln\dfrac{N}{N_0} = -\lambda t$: $N$ falls, so the exponent is negative.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: t`Takes $\lambda$ as a time.`,
      remediation: t`$\lambda$ is a rate, per second, so $\lambda t$ is a pure number and the exponent is $-\lambda t$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Confuses the becquerel with the curie.",
      remediation: t`$1\ \mathrm{Bq}$ is one decay per second; $3.7 \times 10^{10}$ decays per second is $1\ \mathrm{Ci}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Confuses the activity with the decay constant.",
      remediation: t`Activity counts the decays per second in the whole sample, $A = \lambda N$; $\lambda$ is the chance per nucleus.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.17" },
      stem: t`The decay constant of $^{90}_{38}\mathrm{Sr}$ is $7.85 \times 10^{-10}\ \mathrm{s^{-1}}$. What is the activity of a $5\ \mathrm{mg}$ sample of it? (Its molar mass is $90\ \mathrm{g/mol}$; take $N_A = 6.02 \times 10^{23}\ \mathrm{mol^{-1}}$.)`,
      verify: { kind: "value", inputs: { lam: "785*10**-12", m_mg: "5", M: "90", NA: "602*10**21" }, params: { ask: "act_mass" } },
      options: [
        { key: "A", text: t`$2.36 \times 10^{12}\ \mathrm{Bq}$`, correct: false, misconceptionId: "C09-M2", value: "2360000000000" },
        { key: "B", text: t`$3.34 \times 10^{19}\ \mathrm{Bq}$`, correct: false, misconceptionId: "C09-M3", value: "33400000000000000000" },
        { key: "C", text: t`$2.63 \times 10^{10}\ \mathrm{Bq}$`, correct: true, value: "26300000000" },
        { key: "D", text: t`$2.63 \times 10^{13}\ \mathrm{Bq}$`, correct: false, misconceptionId: "C09-M1", value: "26300000000000" },
      ],
      solution: {
        steps: [
          t`$N$ $= \dfrac{5 \times 10^{-3}}{90} \times 6.02 \times 10^{23}$ $\approx 3.34 \times 10^{19}$.`,
          t`$A = \lambda N$ $= 7.85 \times 10^{-10} \times 3.34 \times 10^{19}$ $\approx 2.63 \times 10^{10}\ \mathrm{Bq}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/atoms-nuclei-12-phy/Ex Q.18" },
      stem: t`The decay constant of $^{60}_{27}\mathrm{Co}$ is $4.15 \times 10^{-9}\ \mathrm{s^{-1}}$. What mass of it makes a source of strength $10.0\ \mathrm{mCi}$? (Its molar mass is $60\ \mathrm{g/mol}$; take $1\ \mathrm{Ci} = 3.7 \times 10^{10}\ \mathrm{Bq}$ and $N_A = 6.02 \times 10^{23}\ \mathrm{mol^{-1}}$.)`,
      verify: { kind: "value", inputs: { mCi: "10", lam: "415*10**-11", M: "60", NA: "602*10**21" }, params: { ask: "mass_ci" } },
      options: [
        { key: "A", text: t`$8.89 \times 10^{-6}\ \mathrm{g}$`, correct: true, value: "8.89000000000000e-6" },
        { key: "B", text: t`$2.4 \times 10^{-16}\ \mathrm{g}$`, correct: false, misconceptionId: "C09-M4", value: "2.40000000000000e-16" },
        { key: "C", text: t`$3.69 \times 10^{-14}\ \mathrm{g}$`, correct: false, misconceptionId: "C09-M3", value: "3.69000000000000e-14" },
        { key: "D", text: t`$1.53 \times 10^{-22}\ \mathrm{g}$`, correct: false, misconceptionId: "C09-M5", value: "1.53000000000000e-22" },
      ],
      solution: {
        steps: [
          t`$A$ $= 10.0 \times 10^{-3} \times 3.7 \times 10^{10}$ $= 3.7 \times 10^8\ \mathrm{Bq}$.`,
          t`$N = \dfrac{A}{\lambda}$ $= \dfrac{3.7 \times 10^8}{4.15 \times 10^{-9}}$ $\approx 8.92 \times 10^{16}$.`,
          t`$m = \dfrac{N}{N_A}M$ $= \dfrac{8.92 \times 10^{16}}{6.02 \times 10^{23}} \times 60$ $\approx 8.89 \times 10^{-6}\ \mathrm{g}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.14" },
      stem: t`The disintegration rate of a radioactive sample is $10^{10}$ per hour at $20$ hours from the start. It falls to $5 \times 10^9$ per hour at $30$ hours. What is its decay constant?`,
      verify: { kind: "value", inputs: { A1: "10**10", A2: "5*10**9", t1: "20", t2: "30" }, params: { ask: "lam2" } },
      options: [
        { key: "A", text: t`$0.0231\ \mathrm{h^{-1}}$`, correct: false, misconceptionId: "C09-M6", value: "0.0231000000000000" },
        { key: "B", text: t`$0.05\ \mathrm{h^{-1}}$`, correct: false, misconceptionId: "C09-M7", value: "0.0500000000000000" },
        { key: "C", text: t`$0.0301\ \mathrm{h^{-1}}$`, correct: false, misconceptionId: "C09-M8", value: "0.0301000000000000" },
        { key: "D", text: t`$0.0693\ \mathrm{h^{-1}}$`, correct: true, value: "0.0693000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{A_2}{A_1}$ $= e^{-\lambda\left(30 - 20\right)}$ $= \dfrac{5 \times 10^9}{10^{10}}$ $= \dfrac{1}{2}$.`,
          t`$10\lambda = \ln 2 = 0.693$, so $\lambda = 0.0693$ per hour.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`A radioactive substance has decay constant $\lambda = 0.02$ per day. What fraction of its nuclei is still undecayed after $30$ days?`,
      verify: { kind: "value", inputs: { lam: "2/100", t: "30" }, params: { ask: "frac" } },
      options: [
        { key: "A", text: t`$0.549$`, correct: true, value: "0.549000000000000" },
        { key: "B", text: t`$0.4$`, correct: false, misconceptionId: "C09-M7", value: "0.400000000000000" },
        { key: "C", text: t`$0.251$`, correct: false, misconceptionId: "C09-M8", value: "0.251000000000000" },
        { key: "D", text: t`$0.451$`, correct: false, misconceptionId: "C09-M9", value: "0.451000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{N}{N_0} = e^{-\lambda t}$ $= e^{-0.02 \times 30}$ $= e^{-0.6}$.`,
          t`$e^{-0.6} \approx 0.549$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.26OR" },
      stem: t`The law of radioactive decay gives $-\dfrac{dN}{dt} = \lambda N$. Integrating it, with $N = N_0$ at $t = 0$, gives`,
      verify: { kind: "value", inputs: {  }, params: { ask: "law" } },
      options: [
        { key: "A", text: t`$N = N_0e^{\lambda t}$`, correct: false, misconceptionId: "C09-M10", value: "N_exp_plus_lt" },
        { key: "B", text: t`$N = N_0e^{-t/\lambda}$`, correct: false, misconceptionId: "C09-M11", value: "N_exp_t_over_l" },
        { key: "C", text: t`$N = N_0e^{-\lambda t}$`, correct: true, value: "N_exp_minus_lt" },
        { key: "D", text: t`$N = N_0\left(1 - \lambda t\right)$`, correct: false, misconceptionId: "C09-M7", value: "N_linear_lt" },
      ],
      solution: {
        steps: [
          t`Separate: $\dfrac{dN}{N} = -\lambda\,dt$; integrate from $N_0$ to $N$ and from $0$ to $t$.`,
          t`$\ln\dfrac{N}{N_0} = -\lambda t$, so $N = N_0e^{-\lambda t}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.18" },
      stem: t`One becquerel (Bq) is the activity of a sample in which`,
      verify: { kind: "value", inputs: {  }, params: { ask: "bq" } },
      options: [
        { key: "A", text: t`the decay constant is $1\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C09-M13", value: "lambda_one_bq" },
        { key: "B", text: t`one nucleus decays per second`, correct: true, value: "one_decay_per_s" },
        { key: "C", text: t`$3.7 \times 10^{10}$ nuclei decay per second`, correct: false, misconceptionId: "C09-M12", value: "curie_rate_bq" },
        { key: "D", text: t`one undecayed nucleus is left`, correct: false, misconceptionId: "C09-M3", value: "one_nucleus_bq" },
      ],
      solution: {
        steps: [
          t`The becquerel is the SI unit of activity, the number of decays per second.`,
          t`So $1\ \mathrm{Bq}$ is one disintegration per second; the curie is $3.7 \times 10^{10}\ \mathrm{Bq}$.`,
        ],
      },
    },
  ],
};
