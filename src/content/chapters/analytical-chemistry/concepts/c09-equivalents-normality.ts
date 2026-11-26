import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`One mole of HCl and one mole of $\ce{H2SO4}$ are each poured into sodium hydroxide. Do they neutralise the same amount?`,
    reveal: t`No: $\ce{H2SO4}$ gives two $\ce{H+}$ per molecule, so it neutralises twice as much. Equivalents count that reacting capacity.`,
  },
  explanation: {
    intuition: [
      t`Substances react by what they can give or take: $\ce{H+}$, $\ce{OH-}$ or electrons.`,
      t`The **n-factor** counts that per formula unit.`,
      t`An **equivalent** is the amount that supplies one mole of $\ce{H+}$, $\ce{OH-}$ or electrons.`,
      t`At a titration's end point, the equivalents of the two reactants are equal.`,
    ],
    formal: [
      {
        title: "Equivalent mass",
        points: [
          t`Equivalent mass $=$ molar mass ÷ n-factor.`,
          t`An acid's n-factor is its replaceable H: $\ce{H2SO4}$ 2, $\ce{H3PO3}$ 2 (one H is on P).`,
          t`A base's is its replaceable $\ce{OH-}$: $\ce{Ca(OH)2}$ 2.`,
          t`An oxidant's is the electrons it takes: $\ce{MnO4-}$ to $\ce{Mn^2+}$ is 5 (in acid).`,
        ],
      },
      {
        title: "Normality",
        points: [
          t`**Normality** $N$ is gram equivalents per litre of solution.`,
          t`$N = n \times M$, with $M$ the molarity.`,
          t`At the end point: $N_1V_1 = N_2V_2$.`,
          t`Volumes may stay in mL on both sides, since they cancel.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the normality of a solution of $7.4\ \mathrm{g}$ of $\ce{Ca(OH)2}$ (molar mass $74$) in $1\ \mathrm{L}$.`,
      steps: [
        t`Molarity $= 7.4 / 74 = 0.1\ \mathrm{M}$`,
        t`n-factor of $\ce{Ca(OH)2}$ is 2.`,
        t`$N = 2 \times 0.1 = 0.2\ \mathrm{N}$`,
      ],
      answer: t`$0.2\ \mathrm{N}$`,
    },
    visualSpec: t`Two burettes emptying until their equivalents match, with the end point marked.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Counts every H as acidic.",
      remediation: t`In $\ce{H3PO3}$ one H is bonded to P and is not replaceable: n = 2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Gives the molar mass.",
      remediation: "Divide the molar mass by the n-factor.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Multiplies by the n-factor.",
      remediation: "Equivalent mass is molar mass divided by n, so it is smaller.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Uses n = 3.",
      remediation: t`Three electrons is $\ce{MnO4-}$ to $\ce{MnO2}$, in neutral solution; in acid it is 5.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Uses n = 1.",
      remediation: t`One electron is $\ce{MnO4-}$ to $\ce{MnO4^2-}$, in alkali; in acid it is 5.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Uses the oxidation state, 7.",
      remediation: "The n-factor is the change in oxidation state: +7 to +2 is 5.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Gives the molarity.",
      remediation: t`Normality $= n \times$ molarity, and $\ce{H2SO4}$ has n = 2.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M8",
      mistake: "Keeps the volume in mL.",
      remediation: "Normality is per litre: 500 mL is 0.5 L.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Divides by the n-factor.",
      remediation: "Normality multiplies molarity by n.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Takes molarity as normality.",
      remediation: t`$\ce{H2SO4}$ of $0.04\ \mathrm{M}$ is $0.08\ \mathrm{N}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Inverts the ratio.",
      remediation: t`$V_2 = N_1V_1 / N_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Forgets to divide by the base's normality.",
      remediation: t`$V_2 = N_1V_1 / N_2$: divide by $N_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Uses n = 1.",
      remediation: t`Going all the way to $\ce{CO2}$, $\ce{CO3^2-}$ takes two $\ce{H+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Counts the O atoms.",
      remediation: t`The n-factor counts the $\ce{H+}$ taken, 2, not oxygen atoms.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Counts every charge.",
      remediation: t`Count only the $\ce{H+}$ that react, 2.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "authored" },
      stem: t`Phosphorous acid, $\ce{H3PO3}$ (molar mass $82\ \mathrm{g\,mol^{-1}}$), is dibasic: one of its three H is bonded to P. Its equivalent mass as an acid is`,
      verify: { kind: "value", inputs: {  }, params: { q: "h3po3" } },
      options: [
        { key: "A", text: t`$82\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M2", value: "82" },
        { key: "B", text: t`$164\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M3", value: "164" },
        { key: "C", text: t`$41\ \mathrm{g\,eq^{-1}}$`, correct: true, value: "41" },
        { key: "D", text: t`$27.3\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M1", value: "27.3000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{H3PO3}$ has two replaceable H: n = 2.`,
          t`$82 / 2 = 41\ \mathrm{g\,eq^{-1}}$`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`In acid solution $\ce{MnO4-}$ is reduced to $\ce{Mn^2+}$. The equivalent mass of $\ce{KMnO4}$ (molar mass $158\ \mathrm{g\,mol^{-1}}$) is`,
      verify: { kind: "value", inputs: {  }, params: { q: "kmno4" } },
      options: [
        { key: "A", text: t`$31.6\ \mathrm{g\,eq^{-1}}$`, correct: true, value: "31.6000000000000" },
        { key: "B", text: t`$52.7\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M4", value: "52.7000000000000" },
        { key: "C", text: t`$158\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M5", value: "158" },
        { key: "D", text: t`$22.6\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M6", value: "22.6000000000000" },
      ],
      solution: {
        steps: [
          t`Mn goes from +7 to +2: n = 5.`,
          t`$158 / 5 = 31.6\ \mathrm{g\,eq^{-1}}$`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`$4.9\ \mathrm{g}$ of $\ce{H2SO4}$ (molar mass $98\ \mathrm{g\,mol^{-1}}$) is dissolved to make $500\ \mathrm{mL}$ of solution. Its normality is`,
      verify: { kind: "value", inputs: { V: "500", m: "4.9" }, params: { q: "normality" } },
      options: [
        { key: "A", text: t`$0.1\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M7", value: "0.100000000000000" },
        { key: "B", text: t`$2 \times 10^{-4}\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M8", value: "0.000200000000000000" },
        { key: "C", text: t`$0.05\ \mathrm{N}$`, correct: false, misconceptionId: "C09-M9", value: "0.0500000000000000" },
        { key: "D", text: t`$0.2\ \mathrm{N}$`, correct: true, value: "0.200000000000000" },
      ],
      solution: {
        steps: [
          t`Moles $= 4.9 / 98 = 0.05$; $M = 0.05 / 0.5 = 0.1$`,
          t`$N = 2 \times 0.1 = 0.2\ \mathrm{N}$`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`The volume of $0.1\ \mathrm{N}$ NaOH needed to neutralise $25\ \mathrm{mL}$ of $0.04\ \mathrm{M}$ $\ce{H2SO4}$ is`,
      verify: { kind: "value", inputs: { M: "0.04", N: "0.1", V: "25" }, params: { q: "titration" } },
      options: [
        { key: "A", text: t`$20\ \mathrm{mL}$`, correct: true, value: "20" },
        { key: "B", text: t`$10\ \mathrm{mL}$`, correct: false, misconceptionId: "C09-M10", value: "10" },
        { key: "C", text: t`$31.2\ \mathrm{mL}$`, correct: false, misconceptionId: "C09-M11", value: "31.2000000000000" },
        { key: "D", text: t`$2\ \mathrm{mL}$`, correct: false, misconceptionId: "C09-M12", value: "2" },
      ],
      solution: {
        steps: [
          t`Acid: $N_1 = 2 \times 0.04 = 0.08\ \mathrm{N}$`,
          t`$V_2 = 0.08 \times 25 / 0.1$`,
          t`$= 20\ \mathrm{mL}$`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`$\ce{Na2CO3}$ (molar mass $106\ \mathrm{g\,mol^{-1}}$) is titrated with HCl all the way to $\ce{CO2}$ (methyl orange). Its equivalent mass is`,
      verify: { kind: "value", inputs: {  }, params: { q: "na2co3" } },
      options: [
        { key: "A", text: t`$35.3\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M14", value: "35.3000000000000" },
        { key: "B", text: t`$26.5\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M15", value: "26.5000000000000" },
        { key: "C", text: t`$53\ \mathrm{g\,eq^{-1}}$`, correct: true, value: "53" },
        { key: "D", text: t`$106\ \mathrm{g\,eq^{-1}}$`, correct: false, misconceptionId: "C09-M13", value: "106" },
      ],
      solution: {
        steps: [
          t`$\ce{CO3^2-}$ takes two $\ce{H+}$ to become $\ce{CO2}$: n = 2.`,
          t`$106 / 2 = 53\ \mathrm{g\,eq^{-1}}$`,
        ],
      },
    },
  ],
};
