import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Mix two clear solutions, silver nitrate and sodium chloride, and a white solid appears at once. Mix them very dilute and nothing appears. What decides?`,
    reveal: t`Compare the ions' product with $K_{sp}$: the white $\ce{AgCl}$ forms only when $[\ce{Ag+}][\ce{Cl-}]$ goes above $K_{sp}$.`,
  },
  explanation: {
    intuition: [
      t`The **ionic product** $IP$ is written like $K_{sp}$, but with the concentrations present right now.`,
      t`$K_{sp}$ uses only the equilibrium concentrations of a saturated solution.`,
      t`If $IP > K_{sp}$, the solution holds too many ions: a precipitate forms.`,
      t`If $IP = K_{sp}$, the solution is just saturated.`,
      t`If $IP < K_{sp}$, it is unsaturated: no precipitate, and more salt can dissolve.`,
    ],
    formal: [
      {
        title: "Mixing two solutions",
        points: [
          t`First find each ion's concentration in the combined volume.`,
          t`Mixing equal volumes doubles the volume, so each concentration is halved.`,
          t`Write $IP$ with the same powers as $K_{sp}$: for $\ce{BaF2}$, $IP = [\ce{Ba^2+}][\ce{F-}]^2$.`,
          t`Compare: $IP > K_{sp}$ means the salt precipitates.`,
        ],
      },
      {
        title: "Common ion lowers solubility",
        points: [
          t`$\ce{AgCl(s) <=> Ag+ + Cl-}$ is the equilibrium in a saturated solution.`,
          t`Adding $\ce{AgNO3}$ adds the common ion $\ce{Ag+}$, so $IP$ exceeds $K_{sp}$.`,
          t`$\ce{AgCl}$ precipitates until $IP = K_{sp}$ again, so less stays dissolved.`,
          t`$K_{sp}$ itself does not change; only the solubility falls.`,
          t`For $\ce{CaF2}$ in $c\ \mathrm{M}$ $\ce{NaF}$: $[\ce{F-}] \approx c$, so $S = K_{sp} / c^2$.`,
        ],
      },
      {
        title: "Use in group analysis",
        points: [
          t`$\ce{H2S}$ is a weak acid that gives $\ce{S^2-}$ ions.`,
          t`In $\ce{HCl}$, the common ion $\ce{H+}$ suppresses it, so $[\ce{S^2-}]$ is very low.`,
          t`Only sulfides with very low $K_{sp}$ (group II) precipitate then.`,
          t`In ammonia, $\ce{H+}$ is removed, $[\ce{S^2-}]$ rises, and group IIIB sulfides precipitate.`,
        ],
      },
    ],
    worked: {
      prompt: t`Equal volumes of $0.1\ \mathrm{M}$ $\ce{MgCl2}$ and $0.3\ \mathrm{M}$ $\ce{Na2C2O4}$ are mixed. Does $\ce{MgC2O4}$ precipitate? ($K_{sp} = 8.56 \times 10^{-5}$)`,
      steps: [
        t`Mixing equal volumes halves each: $[\ce{Mg^2+}] = 0.05\ \mathrm{M}$.`,
        t`And $[\ce{C2O4^2-}] = 0.15\ \mathrm{M}$.`,
        t`$IP = [\ce{Mg^2+}][\ce{C2O4^2-}]$ $= 0.05 \times 0.15$ $= 7.5 \times 10^{-3}$.`,
        t`$7.5 \times 10^{-3} > 8.56 \times 10^{-5}$, so $IP > K_{sp}$.`,
      ],
      answer: t`Yes, $\ce{MgC2O4}$ precipitates.`,
    },
    visualSpec: t`Mix two salt solutions with sliders and watch IP rise past the K_sp line as the precipitate appears.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Ignores the dilution on mixing and uses the concentrations before mixing.",
      remediation: t`Mixing increases the volume; equal volumes halve each ion's concentration before you find $IP$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: t`Leaves out the powers in $IP$ or $K_{sp}$, writing $[\ce{Ba^2+}][\ce{F-}]$ for $\ce{BaF2}$.`,
      remediation: t`$IP$ has the same powers as $K_{sp}$: two $\ce{F-}$ per formula unit means $[\ce{F-}]^2$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M3",
      mistake: t`Reverses the test: thinks $IP > K_{sp}$ keeps the salt dissolved.`,
      remediation: t`$IP > K_{sp}$ means more ions than a saturated solution can hold, so a precipitate forms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Thinks a common ion raises the solubility or the ionisation.",
      remediation: "A common ion shifts the equilibrium back (common ion effect), so the solubility falls.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M5",
      mistake: t`Ignores the common ion: takes the solubility as in pure water, since $K_{sp}$ is constant.`,
      remediation: t`$K_{sp}$ is constant, but the common ion is already large, so the salt's own ions must fall: $S = K_{sp} / c^2$ for $\ce{CaF2}$.`,
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C09-M6",
      mistake: t`Carries the formula's 2 into the common ion: takes $[\ce{F-}] = 2c$ from $c\ \mathrm{M}$ $\ce{NaF}$.`,
      remediation: t`The 2 in $\ce{CaF2}$ counts the fluoride from the dissolving salt; $\ce{NaF}$ gives one $\ce{F-}$ each, so $[\ce{F-}] = c$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.13" },
      stem: t`Equal volumes of $0.02\ \mathrm{M}$ $\ce{Pb(NO3)2}$ and $0.04\ \mathrm{M}$ $\ce{NaCl}$ are mixed. Will $\ce{PbCl2}$ precipitate? ($K_{sp} = 1.7 \times 10^{-5}$)`,
      verify: { kind: "value", inputs: { cA: "0.02", cB: "0.04", x: "1", y: "2", Ksp: "1.7e-5" }, params: { ask: "verdict" } },
      options: [
        { key: "A", text: t`Yes: $IP = 2 \times 10^{-4}$, above $K_{sp}$`, correct: false, misconceptionId: "C09-M2", value: "yes_ip_2em4" },
        { key: "B", text: t`Yes: $IP = 4 \times 10^{-6}$, below $K_{sp}$`, correct: false, misconceptionId: "C09-M3", value: "yes_ip_4em6" },
        { key: "C", text: t`No: $IP = 4 \times 10^{-6}$, below $K_{sp}$`, correct: true, value: "no_ip_4em6" },
        { key: "D", text: t`Yes: $IP = 3.2 \times 10^{-5}$, above $K_{sp}$`, correct: false, misconceptionId: "C09-M1", value: "yes_ip_3p2em5" },
      ],
      solution: {
        steps: [
          t`Equal volumes halve each: $[\ce{Pb^2+}] = 0.01\ \mathrm{M}$, $[\ce{Cl-}] = 0.02\ \mathrm{M}$.`,
          t`$IP = [\ce{Pb^2+}][\ce{Cl-}]^2$ $= 0.01 \times (0.02)^2$ $= 4 \times 10^{-6}$.`,
          t`$4 \times 10^{-6} < 1.7 \times 10^{-5}$, so no $\ce{PbCl2}$ precipitates.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.13" },
      stem: t`$20.0\ \mathrm{cm^3}$ of $0.050\ \mathrm{M}$ $\ce{Ba(NO3)2}$ is mixed with $20.0\ \mathrm{cm^3}$ of $0.020\ \mathrm{M}$ $\ce{NaF}$. What is the ionic product of $\ce{BaF2}$ in the mixture?`,
      verify: { kind: "value", inputs: { cA: "0.05", cB: "0.02", x: "1", y: "2" }, params: { ask: "ip" } },
      options: [
        { key: "A", text: t`$2.5 \times 10^{-6}$`, correct: true, value: "2.50000000000000e-6" },
        { key: "B", text: t`$2 \times 10^{-5}$`, correct: false, misconceptionId: "C09-M1", value: "2.00000000000000e-5" },
        { key: "C", text: t`$2.5 \times 10^{-4}$`, correct: false, misconceptionId: "C09-M2", value: "0.000250000000000000" },
        { key: "D", text: t`$1 \times 10^{-5}$`, correct: false, misconceptionId: "C09-M6", value: "1.00000000000000e-5" },
      ],
      solution: {
        steps: [
          t`The volume doubles to $40\ \mathrm{cm^3}$: $[\ce{Ba^2+}] = 0.025\ \mathrm{M}$, $[\ce{F-}] = 0.010\ \mathrm{M}$.`,
          t`$IP = [\ce{Ba^2+}][\ce{F-}]^2$ $= 0.025 \times (0.01)^2$.`,
          t`$IP = 2.5 \times 10^{-6}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`What is the molar solubility of $\ce{CaF2}$ in $0.1\ \mathrm{M}$ $\ce{NaF}$ solution? ($K_{sp} = 4 \times 10^{-11}$)`,
      verify: { kind: "value", inputs: { Ksp: "4e-11", c: "0.1", y: "2" }, params: { ask: "s_common" } },
      options: [
        { key: "A", text: t`$4 \times 10^{-10}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C09-M2", value: "4.00000000000000e-10" },
        { key: "B", text: t`$2.15 \times 10^{-4}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C09-M5", value: "0.000215000000000000" },
        { key: "C", text: t`$1 \times 10^{-9}\ \mathrm{mol\,L^{-1}}$`, correct: false, misconceptionId: "C09-M6", value: "1.00000000000000e-9" },
        { key: "D", text: t`$4 \times 10^{-9}\ \mathrm{mol\,L^{-1}}$`, correct: true, value: "4.00000000000000e-9" },
      ],
      solution: {
        steps: [
          t`$\ce{NaF}$ gives $[\ce{F-}] \approx 0.1\ \mathrm{M}$; $\ce{CaF2}$ adds very little.`,
          t`$K_{sp} = [\ce{Ca^2+}][\ce{F-}]^2$, so $S = \dfrac{4 \times 10^{-11}}{(0.1)^2}$.`,
          t`$S = 4 \times 10^{-9}\ \mathrm{mol\,L^{-1}}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.4 (viii)" },
      stem: t`A little $\ce{AgNO3}$ is added to a saturated solution of $\ce{AgCl}$. What happens to the solubility of $\ce{AgCl}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "named", q: "agcl" } },
      options: [
        { key: "A", text: t`It decreases; $K_{sp}$ stays the same`, correct: true, value: "decreases_ksp_same" },
        { key: "B", text: t`It increases, as $IP$ now exceeds $K_{sp}$`, correct: false, misconceptionId: "C09-M3", value: "increases_ip_exceeds" },
        { key: "C", text: t`It increases, as more ions draw more $\ce{AgCl}$ in`, correct: false, misconceptionId: "C09-M4", value: "increases_more_ions" },
        { key: "D", text: t`It is unchanged, as $K_{sp}$ is constant`, correct: false, misconceptionId: "C09-M5", value: "unchanged_ksp_constant" },
      ],
      solution: {
        steps: [
          t`$\ce{AgNO3}$ adds $\ce{Ag+}$, common to $\ce{AgCl(s) <=> Ag+ + Cl-}$.`,
          t`$IP$ exceeds $K_{sp}$, so $\ce{AgCl}$ precipitates and the equilibrium shifts left.`,
          t`Less $\ce{AgCl}$ stays dissolved; $K_{sp}$ is unchanged at that temperature.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.4 (vii)" },
      stem: t`Group II sulfides precipitate with $\ce{H2S}$ in acid ($\ce{HCl}$); group IIIB sulfides only with $\ce{H2S}$ in ammonia. What does this show?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "named", q: "sulfide" } },
      options: [
        { key: "A", text: t`$\ce{HCl}$ raises $[\ce{S^2-}]$, which group II sulfides need`, correct: false, misconceptionId: "C09-M4", value: "acid_raises_s2" },
        { key: "B", text: t`Their $K_{sp}$ values are similar; only the medium differs`, correct: false, misconceptionId: "C09-M5", value: "ksp_similar_medium_only" },
        { key: "C", text: t`Group II sulfides have much lower $K_{sp}$: the little $\ce{S^2-}$ in acid is enough`, correct: true, value: "group2_lower_ksp" },
        { key: "D", text: t`Group II sulfides have higher $K_{sp}$: they exceed it in acid first`, correct: false, misconceptionId: "C09-M3", value: "group2_higher_ksp" },
      ],
      solution: {
        steps: [
          t`In $\ce{HCl}$, the common ion $\ce{H+}$ suppresses $\ce{H2S}$, so $[\ce{S^2-}]$ is very low.`,
          t`Group II sulfides still precipitate, so even this small $IP$ exceeds their $K_{sp}$.`,
          t`Group IIIB sulfides need the larger $[\ce{S^2-}]$ in ammonia, so their $K_{sp}$ is higher.`,
        ],
      },
    },
  ],
};
