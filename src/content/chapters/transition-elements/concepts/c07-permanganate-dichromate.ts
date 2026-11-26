import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A few drops of purple $\ce{KMnO4}$ solution go into an acidified iron(II) solution, and the colour vanishes at once. Where does the purple go?`,
    reveal: t`Permanganate is an oxidising agent: it takes electrons from $\ce{Fe^2+}$ and is reduced to the nearly colourless $\ce{Mn^2+}$ ion. The purple lasts only once all the iron(II) is used up.`,
  },
  explanation: {
    intuition: [
      t`Manganese and chromium reach their highest states in two oxoanions, $\ce{MnO4-}$ and $\ce{Cr2O7^2-}$.`,
      t`An **oxoanion** is a negative ion of a metal (or non-metal) bonded to oxygen atoms.`,
      t`A metal in such a high state badly wants electrons, so these ions are strong **oxidising agents**.`,
      t`An oxidising agent takes electrons from another substance and is itself reduced.`,
      t`In acid, $\ce{MnO4-}$ is reduced to $\ce{Mn^2+}$ and $\ce{Cr2O7^2-}$ to $\ce{Cr^3+}$.`,
      t`$\ce{K2Cr2O7}$ is made from chromite ore, and $\ce{KMnO4}$ from pyrolusite ore.`,
    ],
    formal: [
      {
        title: "Oxidation states in oxoanions",
        points: [
          t`Oxygen is taken as $-2$.`,
          t`The oxidation numbers of all the atoms add up to the ion's charge.`,
          t`$\ce{MnO4-}$ (purple permanganate): $x + 4(-2) = -1$, so Mn is $+7$.`,
          t`$\ce{CrO4^2-}$ (yellow chromate): $x + 4(-2) = -2$, so Cr is $+6$.`,
          t`With two metal atoms, the sum counts both, so divide by 2 at the end.`,
          t`$\ce{MnO4^2-}$ is a different ion, green **manganate**; don't confuse it with permanganate.`,
        ],
      },
      {
        title: "Potassium dichromate from chromite",
        points: [
          t`Chromite ore, $\ce{FeO.Cr2O3}$ ($\ce{FeCr2O4}$), is fused with sodium carbonate in air.`,
          t`$\ce{4FeCr2O4 + 8Na2CO3 + 7O2}$ $\ce{-> 8Na2CrO4 + 2Fe2O3 + 8CO2}$: yellow sodium chromate.`,
          t`Acid turns chromate into orange dichromate: $\ce{2Na2CrO4 + H2SO4}$ $\ce{-> Na2Cr2O7 + Na2SO4 + H2O}$.`,
          t`Potassium chloride then gives the less soluble potassium salt: $\ce{Na2Cr2O7 + 2KCl}$ $\ce{-> K2Cr2O7 + 2NaCl}$.`,
          t`Orange-red crystals of $\ce{K2Cr2O7}$ separate and are purified by recrystallisation.`,
        ],
      },
      {
        title: "Potassium permanganate from pyrolusite",
        points: [
          t`Pyrolusite, $\ce{MnO2}$, is fused with KOH and an oxidant such as $\ce{KClO3}$.`,
          t`$\ce{3MnO2 + 6KOH + KClO3}$ $\ce{-> 3K2MnO4 + KCl + 3H2O}$: green potassium manganate.`,
          t`The green manganate is then oxidised, for example electrolytically, to purple permanganate.`,
          t`$\ce{MnO4^2- -> MnO4- + e-}$: each manganese loses one more electron.`,
        ],
      },
      {
        title: "Oxidising action in acid",
        points: [
          t`Electrons gained = fall in oxidation state × number of metal atoms.`,
          t`$\ce{MnO4- + 8H+ + 5e-}$ $\ce{-> Mn^2+ + 4H2O}$: purple to almost colourless.`,
          t`$\ce{Cr2O7^2- + 14H+ + 6e-}$ $\ce{-> 2Cr^3+ + 7H2O}$: orange to green.`,
          t`Two Cr atoms each fall by 3, so one dichromate ion gains 6 electrons.`,
          t`In neutral or alkaline solution permanganate stops at $\ce{MnO2}$, gaining only 3 electrons.`,
        ],
      },
      {
        title: "Balancing by electrons",
        points: [
          t`In a redox reaction, electrons gained by the oxidant equal electrons lost by the reductant.`,
          t`$\ce{Fe^2+ -> Fe^3+ + e-}$: each iron(II) ion gives one electron.`,
          t`$\ce{2I- -> I2 + 2e-}$ and $\ce{H2S -> S + 2H+ + 2e-}$.`,
          t`Moles of reductant = electrons the oxidant gains ÷ electrons each reductant gives.`,
        ],
      },
      {
        title: "Uses of potassium permanganate",
        points: [
          t`As an antiseptic.`,
          t`To test for unsaturation: dilute alkaline $\ce{KMnO4}$ is decolourised by $\ce{C=C}$ or $\ce{C#C}$.`,
          t`In volumetric analysis of reducing agents, where its own purple colour is the indicator.`,
          t`To detect halides in qualitative analysis, and as a strong oxidant in industry.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many moles of $\ce{Fe^2+}$ are oxidised to $\ce{Fe^3+}$ by 0.3 mol of $\ce{K2Cr2O7}$ in acid?`,
      steps: [
        t`Cr is $+6$ in $\ce{Cr2O7^2-}$ and falls to $+3$ in $\ce{Cr^3+}$.`,
        t`Two Cr atoms each gain 3 electrons: 6 electrons per $\ce{Cr2O7^2-}$.`,
        t`So 0.3 mol of dichromate gains $0.3 \times 6 = 1.8$ mol of electrons.`,
        t`Each $\ce{Fe^2+}$ gives one electron, so 1.8 mol of $\ce{Fe^2+}$ is oxidised.`,
      ],
      answer: t`$1.8$ mol of $\ce{Fe^2+}$`,
    },
    visualSpec: t`A titration flask where each drop of purple permanganate or orange dichromate takes electrons from iron(II), with an electron counter that balances both sides.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Ignores the ion's charge and makes the oxidation numbers add up to zero.",
      remediation: t`In an ion the oxidation numbers add up to the ion's charge, not to zero: for $\ce{MnO4-}$, $x - 8 = -1$.`,
      fallback: { kind: "ext", topic: "oxidation number (Std XI Chemistry)" },
    },
    {
      id: "C07-M2",
      mistake: "Forgets that dichromate has two chromium atoms.",
      remediation: t`$\ce{Cr2O7^2-}$ has two Cr atoms: solve $2x - 14 = -2$, and count 3 electrons for each Cr, 6 in all.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Takes $\ce{MnO2}$ as the product of permanganate in acid.`,
      remediation: t`In acid, $\ce{MnO4-}$ goes all the way to $\ce{Mn^2+}$ and gains 5 electrons. It stops at $\ce{MnO2}$ (3 electrons) only in neutral or alkaline solution.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: t`Mixes up permanganate ($\ce{MnO4-}$) and manganate ($\ce{MnO4^2-}$).`,
      remediation: t`Permanganate, $\ce{MnO4-}$, is purple with Mn at $+7$; manganate, $\ce{MnO4^2-}$, is green with Mn at $+6$. In acid, permanganate is reduced to $\ce{Mn^2+}$, not to manganate.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Uses the ion's charge with the wrong sign when finding the oxidation state.",
      remediation: t`Put the charge in with its sign: for $\ce{Cr2O7^2-}$, $2x + 7(-2) = -2$, not $+2$.`,
      fallback: { kind: "ext", topic: "oxidation number (Std XI Chemistry)" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.2 (i)" },
      stem: t`What is the oxidation state of manganese in the manganate ion, $\ce{MnO4^2-}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox", sp: "MnO4^2-" } },
      options: [
        { key: "A", text: t`$+10$`, correct: false, misconceptionId: "C07-M5", value: "10" },
        { key: "B", text: t`$+7$`, correct: false, misconceptionId: "C07-M4", value: "7" },
        { key: "C", text: t`$+6$`, correct: true, value: "6" },
        { key: "D", text: t`$+8$`, correct: false, misconceptionId: "C07-M1", value: "8" },
      ],
      solution: {
        steps: [
          t`Oxygen is $-2$, and the sum must equal the charge, $-2$.`,
          t`$x + 4(-2) = -2$, so $x = +6$.`,
          t`Mn is $+6$ in manganate; it is $+7$ in permanganate, $\ce{MnO4-}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.2 (iv)" },
      stem: t`What is the oxidation state of chromium in the dichromate ion, $\ce{Cr2O7^2-}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox", sp: "Cr2O7^2-" } },
      options: [
        { key: "A", text: t`$+7$`, correct: false, misconceptionId: "C07-M1", value: "7" },
        { key: "B", text: t`$+12$`, correct: false, misconceptionId: "C07-M2", value: "12" },
        { key: "C", text: t`$+8$`, correct: false, misconceptionId: "C07-M5", value: "8" },
        { key: "D", text: t`$+6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Two Cr atoms and seven O atoms; the sum must equal $-2$.`,
          t`$2x + 7(-2) = -2$, so $2x = 12$.`,
          t`$x = +6$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.2 (ii)" },
      stem: t`In acidic solution, how many electrons does one permanganate ion, $\ce{MnO4-}$, gain when it acts as an oxidising agent?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "e", sp: "MnO4-" } },
      options: [
        { key: "A", text: t`$6$ electrons`, correct: false, misconceptionId: "C07-M1", value: "6" },
        { key: "B", text: t`$5$ electrons`, correct: true, value: "5" },
        { key: "C", text: t`$3$ electrons`, correct: false, misconceptionId: "C07-M3", value: "3" },
        { key: "D", text: t`$1$ electron`, correct: false, misconceptionId: "C07-M4", value: "1" },
      ],
      solution: {
        steps: [
          t`Mn is $+7$ in $\ce{MnO4-}$; in acid it is reduced to $\ce{Mn^2+}$.`,
          t`The fall is $7 - 2 = 5$, for one Mn atom.`,
          t`$\ce{MnO4- + 8H+ + 5e-}$ $\ce{-> Mn^2+ + 4H2O}$: 5 electrons.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.2 (v)" },
      stem: t`Acidified potassium dichromate oxidises potassium iodide: $\ce{K2Cr2O7 + KI + H2SO4}$ $\ce{-> K2SO4 + Cr2(SO4)3}$ $\ce{+ H2O + I2}$. In the balanced equation, how many moles of $\ce{KI}$ react with 1 mol of $\ce{K2Cr2O7}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ratio", sp: "Cr2O7^2-", red: "I-", mol: "1" } },
      options: [
        { key: "A", text: t`$6$ mol`, correct: true, value: "6" },
        { key: "B", text: t`$3$ mol`, correct: false, misconceptionId: "C07-M2", value: "3" },
        { key: "C", text: t`$8$ mol`, correct: false, misconceptionId: "C07-M1", value: "8" },
        { key: "D", text: t`$10$ mol`, correct: false, misconceptionId: "C07-M5", value: "10" },
      ],
      solution: {
        steps: [
          t`Each Cr falls from $+6$ to $+3$, so one $\ce{K2Cr2O7}$ gains $2 \times 3 = 6$ electrons.`,
          t`Each $\ce{I-}$ gives one electron: $\ce{2I- -> I2 + 2e-}$.`,
          t`So 6 mol of KI: $\ce{K2Cr2O7 + 6KI + 7H2SO4}$ $\ce{-> 4K2SO4 + Cr2(SO4)3}$ $\ce{+ 7H2O + 3I2}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.2 (v)" },
      stem: t`In acid, $\ce{KMnO4}$ oxidises oxalic acid, $\ce{H2C2O4}$, to $\ce{CO2}$. How many moles of oxalic acid does 2 mol of $\ce{KMnO4}$ oxidise?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ratio", sp: "MnO4-", red: "H2C2O4", mol: "2" } },
      options: [
        { key: "A", text: t`$3$ mol`, correct: false, misconceptionId: "C07-M3", value: "3" },
        { key: "B", text: t`$1$ mol`, correct: false, misconceptionId: "C07-M4", value: "1" },
        { key: "C", text: t`$6$ mol`, correct: false, misconceptionId: "C07-M1", value: "6" },
        { key: "D", text: t`$5$ mol`, correct: true, value: "5" },
      ],
      solution: {
        steps: [
          t`Each $\ce{MnO4-}$ gains 5 electrons going to $\ce{Mn^2+}$, so 2 mol gain 10 mol of electrons.`,
          t`Each $\ce{H2C2O4}$ gives 2 electrons: its two C atoms go from $+3$ to $+4$.`,
          t`$10 \div 2 = 5$ mol: $\ce{2KMnO4 + 5H2C2O4 + 3H2SO4}$ $\ce{-> 2MnSO4 + K2SO4}$ $\ce{+ 8H2O + 10CO2}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#22" },
      stem: t`Acidified $\ce{K2Cr2O7}$ oxidises hydrogen sulphide, $\ce{H2S}$, to sulphur. How many moles of $\ce{H2S}$ does 1 mol of $\ce{K2Cr2O7}$ oxidise?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ratio", sp: "Cr2O7^2-", red: "H2S", mol: "1" } },
      options: [
        { key: "A", text: t`$3$ mol`, correct: true, value: "3" },
        { key: "B", text: t`$\frac{3}{2}$ mol`, correct: false, misconceptionId: "C07-M2", value: "3/2" },
        { key: "C", text: t`$4$ mol`, correct: false, misconceptionId: "C07-M1", value: "4" },
        { key: "D", text: t`$5$ mol`, correct: false, misconceptionId: "C07-M5", value: "5" },
      ],
      solution: {
        steps: [
          t`Two Cr atoms each fall from $+6$ to $+3$: 6 electrons per $\ce{K2Cr2O7}$.`,
          t`Each $\ce{H2S}$ gives 2 electrons, as S goes from $-2$ to $0$.`,
          t`$6 \div 2 = 3$ mol of $\ce{H2S}$, giving 3 mol of sulphur.`,
        ],
      },
    },
  ],
};
