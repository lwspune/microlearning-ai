import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Sodium acetate contains no $\ce{OH-}$, yet adding it to acetic acid raises the pH. How?`,
    reveal: t`The added $\ce{CH3COO-}$ is already in acetic acid's equilibrium. The equilibrium shifts back, so less $\ce{H+}$ forms and the pH rises.`,
  },
  explanation: {
    intuition: [
      t`A weak electrolyte such as acetic acid ionises only partly: $\ce{CH3COOH <=> H+ + CH3COO-}$.`,
      t`A strong electrolyte such as $\ce{CH3COONa}$ dissociates almost completely.`,
      t`A **common ion** is an ion that both of them give, here $\ce{CH3COO-}$.`,
      t`The strong electrolyte floods the solution with the common ion.`,
      t`By Le Chatelier's principle the weak equilibrium shifts to the left.`,
      t`So the weak electrolyte ionises less: this is the **common ion effect**.`,
    ],
    formal: [
      {
        title: "The common ion effect",
        points: [
          t`The ionisation of a weak electrolyte is suppressed by a strong electrolyte with a common ion.`,
          t`$\ce{HCl}$ suppresses $\ce{HCN}$ or $\ce{H2S}$: the common ion is $\ce{H+}$.`,
          t`$\ce{NH4Cl}$ suppresses $\ce{NH4OH}$: the common ion is $\ce{NH4+}$.`,
          t`The strong electrolyte stays fully dissociated; only the weak one is pushed back.`,
          t`$K_a$ (or $K_b$) does not change: it depends only on temperature.`,
        ],
      },
      {
        title: "How much it ionises now",
        points: [
          t`Take acid $c$ with salt $s$; then $[\ce{A-}] \approx s$ and $[\ce{HA}] \approx c$.`,
          t`$K_a = \dfrac{[\ce{H+}][\ce{A-}]}{[\ce{HA}]}$ $\approx \dfrac{[\ce{H+}]\, s}{c}$.`,
          t`So $[\ce{H+}] = \dfrac{K_a c}{s}$.`,
          t`And $\alpha = \dfrac{[\ce{H+}]}{c} = \dfrac{K_a}{s}$.`,
          t`Without the salt, $\alpha = \sqrt{K_a / c}$ is far larger.`,
          t`For a weak base with its salt: $[\ce{OH-}] = \dfrac{K_b c}{s}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find $\alpha$ and $[\ce{H+}]$ for $0.2\ \mathrm{M}$ formic acid with $0.4\ \mathrm{M}$ $\ce{HCOONa}$ ($K_a = 1.8 \times 10^{-4}$).`,
      steps: [
        t`The common ion is $\ce{HCOO-}$, so $s = 0.4\ \mathrm{M}$ and $c = 0.2\ \mathrm{M}$.`,
        t`$\alpha = \dfrac{K_a}{s}$ $= \dfrac{1.8 \times 10^{-4}}{0.4}$ $= 4.5 \times 10^{-4}$.`,
        t`$[\ce{H+}] = \alpha c$ $= 4.5 \times 10^{-4} \times 0.2$ $= 9 \times 10^{-5}\ \mathrm{M}$.`,
        t`Alone, $\alpha = \sqrt{K_a / c} = 0.03$: the salt cut it about 67-fold.`,
      ],
      answer: t`$\alpha = 4.5 \times 10^{-4}$, $[\ce{H+}] = 9 \times 10^{-5}\ \mathrm{M}$`,
    },
    visualSpec: t`Add a common ion to a weak acid and watch the ionised fraction shrink while K_a stays fixed.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks the added ions push the weak electrolyte to ionise more.",
      remediation: "Adding a product ion shifts the equilibrium to the left (Le Chatelier), so the weak electrolyte ionises less.",
      fallback: { kind: "ext", topic: "Le Chatelier's principle (Std XI Chemistry)" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks the strong electrolyte is the one whose dissociation is suppressed.",
      remediation: "A strong electrolyte stays almost fully dissociated; it is the weak electrolyte's equilibrium that shifts back.",
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M3",
      mistake: t`Thinks the common ion lowers $K_a$ itself.`,
      remediation: t`$K_a$ depends only on temperature; the common ion lowers the degree of ionisation, not the constant.`,
      fallback: { kind: "ext", topic: "equilibrium constant (Std XI Chemistry)" },
    },
    {
      id: "C06-M4",
      mistake: t`Ignores the common ion and uses Ostwald's $\alpha = \sqrt{K_a / c}$.`,
      remediation: t`With a common ion at $s$, $[\ce{A-}] \approx s$, so $\alpha = K_a / s$ and $[\ce{H+}] = K_a c / s$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M5",
      mistake: "Swaps the weak electrolyte's and the common ion's concentrations.",
      remediation: t`The common ion's concentration goes in the denominator: $[\ce{H+}] = \dfrac{K_a \times [\text{acid}]}{[\text{salt}]}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Mixes up $\alpha$ and the ion concentration: gives $K_a c / s$ as $\alpha$, or $K_a / s$ as $[\ce{H+}]$.`,
      remediation: t`$\alpha = K_a / s$ is a fraction; the ion concentration is $\alpha c = K_a c / s$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.4 (iv)" },
      stem: t`$\ce{HCl}$ is added to an aqueous solution of the weak acid $\ce{HCN}$. What happens?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "named", q: "hcn" } },
      options: [
        { key: "A", text: t`$\ce{HCN}$ ionises more, as $\ce{HCl}$ adds ions`, correct: false, misconceptionId: "C06-M1", value: "hcn_increased" },
        { key: "B", text: t`$\ce{HCl}$ ionises less; $\ce{HCN}$ is unaffected`, correct: false, misconceptionId: "C06-M2", value: "hcl_suppressed" },
        { key: "C", text: t`$\ce{HCN}$ ionises less because its $K_a$ falls`, correct: false, misconceptionId: "C06-M3", value: "hcn_suppressed_ka_falls" },
        { key: "D", text: t`$\ce{HCN}$ ionises less; its $K_a$ stays the same`, correct: true, value: "hcn_suppressed_ka_same" },
      ],
      solution: {
        steps: [
          t`$\ce{HCl}$ is strong and gives a large $[\ce{H+}]$, the ion common to $\ce{HCN <=> H+ + CN-}$.`,
          t`The $\ce{HCN}$ equilibrium shifts left, so $\ce{HCN}$ ionises less.`,
          t`$K_a$ of $\ce{HCN}$ depends only on temperature, so it stays the same.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.2 (viii)" },
      stem: t`$\ce{HCl}$ is added to a solution of $\ce{H2S}$, a weak acid that gives $\ce{S^2-}$ ions. What happens to $[\ce{S^2-}]$ and to the $K_a$ of $\ce{H2S}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "named", q: "h2s" } },
      options: [
        { key: "A", text: t`$[\ce{S^2-}]$ falls; $K_a$ is unchanged`, correct: true, value: "s2_falls_ka_same" },
        { key: "B", text: t`$[\ce{S^2-}]$ rises; $K_a$ is unchanged`, correct: false, misconceptionId: "C06-M1", value: "s2_rises" },
        { key: "C", text: t`$[\ce{S^2-}]$ is unchanged; only $\ce{HCl}$ is suppressed`, correct: false, misconceptionId: "C06-M2", value: "s2_same_hcl_suppressed" },
        { key: "D", text: t`$[\ce{S^2-}]$ falls, and so does $K_a$`, correct: false, misconceptionId: "C06-M3", value: "s2_falls_ka_falls" },
      ],
      solution: {
        steps: [
          t`$\ce{HCl}$ supplies $\ce{H+}$, common to $\ce{H2S <=> 2H+ + S^2-}$.`,
          t`The equilibrium shifts left, so $[\ce{S^2-}]$ falls.`,
          t`$K_a$ is fixed at a given temperature, so it is unchanged.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`What is the degree of dissociation of $0.1\ \mathrm{M}$ acetic acid in a solution that also has $0.05\ \mathrm{M}$ $\ce{CH3COONa}$? ($K_a = 1.8 \times 10^{-5}$)`,
      verify: { kind: "value", inputs: { K: "1.8e-5", c: "0.1", s: "0.05" }, params: { ask: "alpha" } },
      options: [
        { key: "A", text: t`$3.6 \times 10^{-4}$`, correct: true, value: "0.000360000000000000" },
        { key: "B", text: t`$0.0134$`, correct: false, misconceptionId: "C06-M4", value: "0.0134000000000000" },
        { key: "C", text: t`$1.8 \times 10^{-4}$`, correct: false, misconceptionId: "C06-M5", value: "0.000180000000000000" },
        { key: "D", text: t`$3.6 \times 10^{-5}$`, correct: false, misconceptionId: "C06-M6", value: "3.60000000000000e-5" },
      ],
      solution: {
        steps: [
          t`The common ion $\ce{CH3COO-}$ comes from the salt: $s = 0.05\ \mathrm{M}$.`,
          t`$\alpha = \dfrac{K_a}{s}$ $= \dfrac{1.8 \times 10^{-5}}{0.05}$ $= 3.6 \times 10^{-4}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`What is $[\ce{H+}]$ in a $0.001\ \mathrm{M}$ acetic acid solution that also has $0.01\ \mathrm{M}$ $\ce{CH3COONa}$? ($K_a = 1.8 \times 10^{-5}$)`,
      verify: { kind: "value", inputs: { K: "1.8e-5", c: "0.001", s: "0.01" }, params: { ask: "ion" } },
      options: [
        { key: "A", text: t`$0.0018\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C06-M6", value: "0.00180000000000000" },
        { key: "B", text: t`$1.8 \times 10^{-6}\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "1.80000000000000e-6" },
        { key: "C", text: t`$1.34 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C06-M4", value: "0.000134000000000000" },
        { key: "D", text: t`$1.8 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C06-M5", value: "0.000180000000000000" },
      ],
      solution: {
        steps: [
          t`$[\ce{H+}] = \dfrac{K_a c}{s}$, with $c = 0.001$ and $s = 0.01$.`,
          t`$[\ce{H+}] = \dfrac{1.8 \times 10^{-5} \times 0.001}{0.01}$.`,
          t`$[\ce{H+}] = 1.8 \times 10^{-6}\ \mathrm{mol\,L^{-1}}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`What is $[\ce{OH-}]$ in a solution that is $0.15\ \mathrm{M}$ in $\ce{NH4OH}$ and $0.05\ \mathrm{M}$ in $\ce{NH4Cl}$? ($K_b = 1.8 \times 10^{-5}$)`,
      verify: { kind: "value", inputs: { K: "1.8e-5", c: "0.15", s: "0.05" }, params: { ask: "ion" } },
      options: [
        { key: "A", text: t`$5.4 \times 10^{-5}\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "5.40000000000000e-5" },
        { key: "B", text: t`$0.00164\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C06-M4", value: "0.00164000000000000" },
        { key: "C", text: t`$6 \times 10^{-6}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C06-M5", value: "6.00000000000000e-6" },
        { key: "D", text: t`$3.6 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C06-M6", value: "0.000360000000000000" },
      ],
      solution: {
        steps: [
          t`The common ion $\ce{NH4+}$ comes from $\ce{NH4Cl}$: $s = 0.05\ \mathrm{M}$.`,
          t`$[\ce{OH-}] = \dfrac{K_b c}{s}$ $= \dfrac{1.8 \times 10^{-5} \times 0.15}{0.05}$.`,
          t`$[\ce{OH-}] = 5.4 \times 10^{-5}\ \mathrm{mol\,L^{-1}}$.`,
        ],
      },
    },
  ],
};
