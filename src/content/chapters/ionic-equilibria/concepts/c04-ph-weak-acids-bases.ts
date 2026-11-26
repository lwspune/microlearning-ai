import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A $0.01\ \mathrm{M}$ $\ce{HCl}$ solution has pH 2, but $0.01\ \mathrm{M}$ acetic acid has pH about $3.4$. Why does the same concentration give a different pH?`,
    reveal: t`Acetic acid is weak: only about $4\%$ of it ionises. So $[\ce{H3O+}] = \alpha c$ is about $4.2 \times 10^{-4}\ \mathrm{M}$, not $0.01\ \mathrm{M}$.`,
  },
  explanation: {
    intuition: [
      t`A weak acid ionises only partly, so $[\ce{H3O+}]$ is much less than the acid's concentration.`,
      t`The fraction ionised is $\alpha$, so $[\ce{H3O+}] = \alpha c$.`,
      t`Ostwald's law gives $\alpha$ from $K_a$: $\alpha = \sqrt{K_a / c}$.`,
      t`Combining the two: $[\ce{H3O+}] = \sqrt{K_a c}$.`,
      t`Then the pH follows as for any solution: $\mathrm{pH} = -\log_{10}[\ce{H3O+}]$.`,
    ],
    formal: [
      {
        title: "Weak acids: from Ka to pH",
        points: [
          t`$[\ce{H3O+}] = \alpha c$ $= \sqrt{\dfrac{K_a}{c}} \times c$ $= \sqrt{K_a c}$.`,
          t`Then $\mathrm{pH} = -\log_{10}\sqrt{K_a c}$.`,
          t`If $\alpha$ or the percent dissociation is given, use $[\ce{H3O+}] = \alpha c$ directly.`,
          t`This holds while $\alpha$ is small, so that $1 - \alpha \approx 1$.`,
        ],
      },
      {
        title: "Weak bases",
        points: [
          t`A weak base BOH gives $[\ce{OH-}] = \alpha c = \sqrt{K_b c}$.`,
          t`Find the pOH from $[\ce{OH-}]$ first.`,
          t`Then $\mathrm{pH} = 14 - \mathrm{pOH}$.`,
        ],
      },
      {
        title: "Working back from pH",
        points: [
          t`From the pH: $[\ce{H3O+}] = 10^{-\mathrm{pH}}$.`,
          t`Then $\alpha = \dfrac{[\ce{H3O+}]}{c}$, and the percent dissociation is $100\alpha$.`,
          t`And $K_a = \alpha^2 c$ $= \dfrac{[\ce{H3O+}]^2}{c}$.`,
          t`For a base, use $\mathrm{pOH} = 14 - \mathrm{pH}$ and $[\ce{OH-}]$ the same way.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the pH of a $0.2\ \mathrm{M}$ $\ce{NH4OH}$ solution ($K_b = 1.8 \times 10^{-5}$).`,
      steps: [
        t`$[\ce{OH-}] = \sqrt{K_b c}$ $= \sqrt{1.8 \times 10^{-5} \times 0.2}$.`,
        t`$[\ce{OH-}] = \sqrt{3.6 \times 10^{-6}}$ $= 1.90 \times 10^{-3}\ \mathrm{M}$.`,
        t`$\mathrm{pOH} = 3 - \log_{10} 1.90$ $= 3 - 0.28 = 2.72$.`,
        t`$\mathrm{pH} = 14 - 2.72 = 11.28$.`,
      ],
      answer: t`$\mathrm{pH} = 11.28$`,
    },
    visualSpec: t`Slide K_a and the concentration and watch the hydronium level and the pH meter follow.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Drops the square root: takes $[\ce{H3O+}] = K_a c$, or $K_a = [\ce{H3O+}] / c$.`,
      remediation: t`$[\ce{H3O+}] = \alpha c$ with $\alpha = \sqrt{K_a / c}$, so $[\ce{H3O+}] = \sqrt{K_a c}$ and $K_a = [\ce{H3O+}]^2 / c$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M2",
      mistake: t`Uses the formula for $\alpha$, $\sqrt{K_a / c}$, as $[\ce{H3O+}]$.`,
      remediation: t`$\sqrt{K_a / c}$ is $\alpha$, a fraction; multiply by $c$: $[\ce{H3O+}] = \alpha c = \sqrt{K_a c}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M3",
      mistake: "Treats the weak acid or base as strong, fully dissociated.",
      remediation: t`A weak electrolyte ionises only partly: $[\ce{H3O+}] = \alpha c$, far less than $c$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M4",
      mistake: t`Mixes up pH and pOH, or $[\ce{H3O+}]$ and $[\ce{OH-}]$.`,
      remediation: t`For a base, find $[\ce{OH-}]$ from $\mathrm{pOH} = 14 - \mathrm{pH}$; the pH itself gives $[\ce{H3O+}]$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M5",
      mistake: t`Mixes up $\alpha$ and percent dissociation.`,
      remediation: t`Percent dissociation $= 100\alpha$: $0.04\%$ means $\alpha = 4 \times 10^{-4}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M6",
      mistake: "Takes the decimal part of a negative logarithm with the wrong sign.",
      remediation: t`Make the decimal part positive: $-3.2 = -4 + 0.8$, so $10^{-3.2} = 10^{0.8} \times 10^{-4}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/ionic-equilibria-12-pyq#4" },
      stem: t`What is $[\ce{H+}]$ in a $0.001\ \mathrm{M}$ acetic acid solution? ($K_a = 1.8 \times 10^{-5}$)`,
      verify: { kind: "value", inputs: { Ka: "1.8e-5", c: "0.001" }, params: { ask: "H_weak" } },
      options: [
        { key: "A", text: t`$1.34 \times 10^{-1}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C04-M2", value: "0.134000000000000" },
        { key: "B", text: t`$1 \times 10^{-3}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C04-M3", value: "0.00100000000000000" },
        { key: "C", text: t`$1.34 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "0.000134000000000000" },
        { key: "D", text: t`$1.8 \times 10^{-8}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C04-M1", value: "1.80000000000000e-8" },
      ],
      solution: {
        steps: [
          t`$[\ce{H+}] = \sqrt{K_a c}$ $= \sqrt{1.8 \times 10^{-5} \times 0.001}$.`,
          t`$[\ce{H+}] = \sqrt{1.8 \times 10^{-8}}$ $= 1.34 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.4" },
      stem: t`What is the pH of a $0.1\ \mathrm{M}$ acetic acid solution? ($K_a = 1.8 \times 10^{-5}$)`,
      verify: { kind: "value", inputs: { Ka: "1.8e-5", c: "0.1" }, params: { ask: "pH_weak" } },
      options: [
        { key: "A", text: t`$5.74$`, correct: false, misconceptionId: "C04-M1", value: "5.74000000000000" },
        { key: "B", text: t`$1.87$`, correct: false, misconceptionId: "C04-M2", value: "1.87000000000000" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C04-M3", value: "1" },
        { key: "D", text: t`$2.87$`, correct: true, value: "2.87000000000000" },
      ],
      solution: {
        steps: [
          t`$[\ce{H3O+}]$ $= \sqrt{1.8 \times 10^{-5} \times 0.1}$ $= 1.34 \times 10^{-3}\ \mathrm{M}$.`,
          t`$\mathrm{pH} = 3 - \log_{10} 1.34$ $= 3 - 0.13 = 2.87$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.7" },
      stem: t`A weak monobasic acid is $0.04\%$ dissociated in a $0.025\ \mathrm{M}$ solution. What is the pH of the solution?`,
      verify: { kind: "value", inputs: { pct: "0.04", c: "0.025" }, params: { ask: "pH_from_pct" } },
      options: [
        { key: "A", text: t`$1.60$`, correct: false, misconceptionId: "C04-M3", value: "1.60000000000000" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C04-M4", value: "9" },
        { key: "C", text: t`$5$`, correct: true, value: "5" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C04-M5", value: "3" },
      ],
      solution: {
        steps: [
          t`$\alpha = \dfrac{0.04}{100} = 4 \times 10^{-4}$.`,
          t`$[\ce{H3O+}] = \alpha c$ $= 4 \times 10^{-4} \times 0.025$ $= 10^{-5}\ \mathrm{M}$.`,
          t`$\mathrm{pH} = -\log_{10} 10^{-5} = 5$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.8" },
      stem: t`The pH of a $0.02\ \mathrm{M}$ solution of a weak monoacidic base is $11.2$. What is its percent dissociation?`,
      verify: { kind: "value", inputs: { pH: "11.2", c: "0.02" }, params: { ask: "pct_base_from_pH" } },
      options: [
        { key: "A", text: t`$0.0792\%$`, correct: false, misconceptionId: "C04-M5", value: "0.0792000000000000" },
        { key: "B", text: t`$3.15 \times 10^{-8}\%$`, correct: false, misconceptionId: "C04-M4", value: "3.15000000000000e-8" },
        { key: "C", text: t`$100\%$`, correct: false, misconceptionId: "C04-M3", value: "100" },
        { key: "D", text: t`$7.92\%$`, correct: true, value: "7.92000000000000" },
      ],
      solution: {
        steps: [
          t`$\mathrm{pOH} = 14 - 11.2 = 2.8$, so $[\ce{OH-}] = 10^{-2.8}$ $= 1.585 \times 10^{-3}\ \mathrm{M}$.`,
          t`$\alpha = \dfrac{[\ce{OH-}]}{c}$ $= \dfrac{1.585 \times 10^{-3}}{0.02}$ $= 0.0792$.`,
          t`Percent dissociation $= 100\alpha = 7.92\%$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.3 (ix)" },
      stem: t`The pH of a $0.05\ \mathrm{M}$ solution of a weak monobasic acid is $4.4$. What is its dissociation constant?`,
      verify: { kind: "value", inputs: { pH: "4.4", c: "0.05" }, params: { ask: "Ka_from_pH" } },
      options: [
        { key: "A", text: t`$1.26 \times 10^{-6}$`, correct: false, misconceptionId: "C04-M6", value: "1.26000000000000e-6" },
        { key: "B", text: t`$3.17 \times 10^{-8}$`, correct: true, value: "3.17000000000000e-8" },
        { key: "C", text: t`$7.96 \times 10^{-4}$`, correct: false, misconceptionId: "C04-M1", value: "0.000796000000000000" },
        { key: "D", text: t`$7.92 \times 10^{-11}$`, correct: false, misconceptionId: "C04-M2", value: "7.92000000000000e-11" },
      ],
      solution: {
        steps: [
          t`$[\ce{H3O+}] = 10^{-4.4}$ $= 10^{0.6} \times 10^{-5}$ $= 3.98 \times 10^{-5}\ \mathrm{M}$.`,
          t`$K_a = \dfrac{[\ce{H3O+}]^2}{c}$ $= \dfrac{(3.98 \times 10^{-5})^2}{0.05}$.`,
          t`$K_a = 3.17 \times 10^{-8}$.`,
        ],
      },
    },
  ],
};
