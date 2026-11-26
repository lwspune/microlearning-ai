import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Diluting vinegar makes it less sour, yet a larger fraction of its acetic acid molecules ionise. How can both be true?`,
    reveal: t`On dilution the fraction ionised, $\alpha = \sqrt{K_a / c}$, rises. But $[\ce{H3O+}] = \alpha c = \sqrt{K_a c}$ still falls, because $c$ falls faster.`,
  },
  explanation: {
    intuition: [
      t`A **strong electrolyte** ionises almost completely in water; a **weak electrolyte**, like acetic acid, only partly.`,
      t`The **degree of dissociation**, $\alpha$, is the fraction of dissolved molecules that ionise.`,
      t`**Percent dissociation** is $\alpha \times 100$.`,
      t`Ions and molecules reach an equilibrium, with constant $K_a$ for an acid and $K_b$ for a base.`,
      t`Adding water pulls this equilibrium towards the ions, so $\alpha$ grows on dilution.`,
    ],
    formal: [
      {
        title: "The weak acid equilibrium",
        points: [
          t`A weak acid HA ionises as $\ce{HA + H2O}$ $\ce{<=> H3O+ + A-}$.`,
          t`Start with $c\ \mathrm{mol\,dm^{-3}}$ of HA, of which a fraction $\alpha$ ionises.`,
          t`At equilibrium $[\ce{H3O+}] = [\ce{A-}] = \alpha c$, and $[\ce{HA}] = (1 - \alpha)c$.`,
          t`The **dissociation constant** is $K_a = \dfrac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]}$.`,
        ],
      },
      {
        title: "Ostwald's dilution law",
        points: [
          t`Substituting: $K_a = \dfrac{\alpha c \times \alpha c}{(1 - \alpha)c}$ $= \dfrac{\alpha^2 c}{1 - \alpha}$.`,
          t`For a weak acid $\alpha$ is small, so $1 - \alpha \approx 1$ and $K_a \approx \alpha^2 c$.`,
          t`So $\alpha = \sqrt{\dfrac{K_a}{c}}$: this is **Ostwald's dilution law**.`,
          t`For a weak base BOH the same steps give $\alpha = \sqrt{\dfrac{K_b}{c}}$.`,
          t`When $\alpha$ is not small, keep the exact form $K_a = \dfrac{\alpha^2 c}{1 - \alpha}$.`,
        ],
      },
      {
        title: "Dilution raises alpha",
        points: [
          t`$K_a$ is fixed at a given temperature, so $\alpha$ varies as $\dfrac{1}{\sqrt{c}}$.`,
          t`Making a solution 4 times more dilute doubles $\alpha$.`,
          t`For two concentrations of one acid: $\dfrac{\alpha_2}{\alpha_1} = \sqrt{\dfrac{c_1}{c_2}}$.`,
          t`Yet $[\ce{H3O+}] = \alpha c = \sqrt{K_a c}$ still falls on dilution.`,
        ],
      },
    ],
    worked: {
      prompt: t`Formic acid has $K_a = 1.8 \times 10^{-4}$. Find its percent dissociation in $0.2\ \mathrm{M}$ and in $0.05\ \mathrm{M}$ solution.`,
      steps: [
        t`$\alpha = \sqrt{\dfrac{K_a}{c}}$ $= \sqrt{\dfrac{1.8 \times 10^{-4}}{0.2}}$.`,
        t`$\alpha = \sqrt{9 \times 10^{-4}} = 0.03$, so $3\%$ in $0.2\ \mathrm{M}$.`,
        t`$0.05\ \mathrm{M}$ is 4 times more dilute, so $\alpha$ doubles to $0.06$.`,
        t`Check: $\sqrt{\dfrac{1.8 \times 10^{-4}}{0.05}}$ $= \sqrt{3.6 \times 10^{-3}}$ $= 0.06$, or $6\%$.`,
      ],
      answer: t`$3\%$ in $0.2\ \mathrm{M}$; $6\%$ in $0.05\ \mathrm{M}$`,
    },
    visualSpec: t`Slide the concentration down and watch the fraction of ionised molecules rise while the hydronium count per litre falls.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Drops the square root: takes $\alpha = K_a / c$.`,
      remediation: t`$K_a \approx \alpha^2 c$, so $\alpha = \sqrt{K_a / c}$; on dilution $\alpha$ changes as $1/\sqrt{c}$, not $1/c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Puts $c$ on the wrong side: $\alpha = \sqrt{c / K_a}$, or $K_a = \alpha^2 / c$.`,
      remediation: t`From $K_a = \alpha^2 c$: $\alpha = \sqrt{K_a / c}$, and $\alpha$, a fraction, can never exceed 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Multiplies by $c$: takes $\alpha = \sqrt{K_a c}$, which is really $[\ce{H3O+}]$.`,
      remediation: t`$\sqrt{K_a c}$ is $[\ce{H3O+}] = \alpha c$; divide by $c$ for $\alpha$: $\alpha = \sqrt{K_a / c}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: t`Does not square $\alpha$: takes $K_a = \dfrac{\alpha c}{1 - \alpha}$.`,
      remediation: t`Both ions are at $\alpha c$, so the top of $K_a$ is $(\alpha c)^2$: $K_a = \dfrac{\alpha^2 c}{1 - \alpha}$.`,
      fallback: { kind: "ext", topic: "equilibrium constant (Std XI Chemistry)" },
    },
    {
      id: "C02-M5",
      mistake: t`Mixes up $\alpha$ and percent dissociation.`,
      remediation: t`Percent dissociation $= \alpha \times 100$: $0.05\%$ means $\alpha = 5 \times 10^{-4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Thinks $\alpha$ falls on dilution.`,
      remediation: t`Adding water shifts the equilibrium towards the ions, so $\alpha$ rises: $\alpha_2 = \alpha_1\sqrt{c_1 / c_2}$.`,
      fallback: { kind: "ext", topic: "Le Chatelier's principle (Std XI Chemistry)" },
    },
    {
      id: "C02-M7",
      mistake: t`Thinks $\alpha$ is the same at every concentration.`,
      remediation: t`$K_a$ is the constant, not $\alpha$: $\alpha = \sqrt{K_a / c}$ changes with $c$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/ionic-equilibria-12-pyq#9" },
      stem: t`Which formula relates the degree of dissociation $\alpha$ and the concentration $c$ of a weak acid with dissociation constant $K_a$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "formula" } },
      options: [
        { key: "A", text: t`$\alpha = \sqrt{\dfrac{K_a}{c}}$`, correct: true, value: "sqrt_K_over_c" },
        { key: "B", text: t`$\alpha = \dfrac{K_a}{c}$`, correct: false, misconceptionId: "C02-M1", value: "K_over_c" },
        { key: "C", text: t`$\alpha = \sqrt{\dfrac{c}{K_a}}$`, correct: false, misconceptionId: "C02-M2", value: "sqrt_c_over_K" },
        { key: "D", text: t`$\alpha = \sqrt{K_a c}$`, correct: false, misconceptionId: "C02-M3", value: "sqrt_K_times_c" },
      ],
      solution: {
        steps: [
          t`With $[\ce{H3O+}] = [\ce{A-}] = \alpha c$: $K_a = \dfrac{\alpha^2 c}{1 - \alpha}$ $\approx \alpha^2 c$.`,
          t`So $\alpha = \sqrt{\dfrac{K_a}{c}}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.2" },
      stem: t`The dissociation constant of $\ce{NH4OH}$ is $1.8 \times 10^{-5}$. What is its degree of dissociation in a $0.01\ \mathrm{M}$ solution?`,
      verify: { kind: "value", inputs: { K: "1.8e-5", c: "0.01" }, params: { ask: "alpha" } },
      options: [
        { key: "A", text: t`$0.0018$`, correct: false, misconceptionId: "C02-M1", value: "0.00180000000000000" },
        { key: "B", text: t`$23.6$`, correct: false, misconceptionId: "C02-M2", value: "23.6000000000000" },
        { key: "C", text: t`$4.24 \times 10^{-4}$`, correct: false, misconceptionId: "C02-M3", value: "0.000424000000000000" },
        { key: "D", text: t`$0.0424$`, correct: true, value: "0.0424000000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha = \sqrt{\dfrac{K_b}{c}}$ $= \sqrt{\dfrac{1.8 \times 10^{-5}}{0.01}}$.`,
          t`$\alpha = \sqrt{1.8 \times 10^{-3}}$ $= 0.0424$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.2 (iv)" },
      stem: t`The dissociation constant of acetic acid is $1.8 \times 10^{-5}$. What is its percent dissociation in a $0.05\ \mathrm{M}$ solution?`,
      verify: { kind: "value", inputs: { K: "1.8e-5", c: "0.05" }, params: { ask: "pct" } },
      options: [
        { key: "A", text: t`$0.019\%$`, correct: false, misconceptionId: "C02-M5", value: "0.0190000000000000" },
        { key: "B", text: t`$1.9\%$`, correct: true, value: "1.90000000000000" },
        { key: "C", text: t`$0.036\%$`, correct: false, misconceptionId: "C02-M1", value: "0.0360000000000000" },
        { key: "D", text: t`$0.0949\%$`, correct: false, misconceptionId: "C02-M3", value: "0.0949000000000000" },
      ],
      solution: {
        steps: [
          t`$\alpha = \sqrt{\dfrac{1.8 \times 10^{-5}}{0.05}}$ $= \sqrt{3.6 \times 10^{-4}}$ $= 0.019$.`,
          t`Percent dissociation $= 0.019 \times 100 = 1.9\%$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.1" },
      stem: t`A weak monobasic acid is $0.05\%$ dissociated in a $0.02\ \mathrm{M}$ solution. What is its dissociation constant?`,
      verify: { kind: "value", inputs: { pct: "0.05", c: "0.02" }, params: { ask: "K_from_pct" } },
      options: [
        { key: "A", text: t`$1.25 \times 10^{-5}$`, correct: false, misconceptionId: "C02-M2", value: "1.25000000000000e-5" },
        { key: "B", text: t`$5 \times 10^{-9}$`, correct: true, value: "5.00000000000000e-9" },
        { key: "C", text: t`$1 \times 10^{-5}$`, correct: false, misconceptionId: "C02-M4", value: "1.00000000000000e-5" },
        { key: "D", text: t`$5.26 \times 10^{-5}$`, correct: false, misconceptionId: "C02-M5", value: "5.26000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$\alpha = \dfrac{0.05}{100} = 5 \times 10^{-4}$.`,
          t`$\alpha$ is tiny, so $K_a = \dfrac{\alpha^2 c}{1 - \alpha}$ $\approx \alpha^2 c$.`,
          t`$K_a = (5 \times 10^{-4})^2 \times 0.02$ $= 5 \times 10^{-9}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.3" },
      stem: t`A weak monobasic acid is $12\%$ dissociated in a $0.05\ \mathrm{M}$ solution. What is its percent dissociation in a $0.15\ \mathrm{M}$ solution?`,
      verify: { kind: "value", inputs: { pct1: "12", c1: "0.05", c2: "0.15" }, params: { ask: "dilute" } },
      options: [
        { key: "A", text: t`$12\%$`, correct: false, misconceptionId: "C02-M7", value: "12" },
        { key: "B", text: t`$6.93\%$`, correct: true, value: "6.93000000000000" },
        { key: "C", text: t`$4\%$`, correct: false, misconceptionId: "C02-M1", value: "4" },
        { key: "D", text: t`$20.8\%$`, correct: false, misconceptionId: "C02-M6", value: "20.8000000000000" },
      ],
      solution: {
        steps: [
          t`$K_a$ is the same in both, so $\alpha_1^2 c_1 = \alpha_2^2 c_2$.`,
          t`$\alpha_2 = 0.12 \times \sqrt{\dfrac{0.05}{0.15}}$ $= 0.0693$.`,
          t`Percent dissociation $= 6.93\%$.`,
        ],
      },
    },
  ],
};
