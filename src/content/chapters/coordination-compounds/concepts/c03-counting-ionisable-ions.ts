import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`$\ce{CoCl3.6NH3}$ and $\ce{CoCl3.3NH3}$ both have three chlorides per cobalt. With excess $\ce{AgNO3}$, one mole of the first gives three moles of $\ce{AgCl}$, and the second gives none. Why?`,
    reveal: t`In $\ce{[Co(NH3)6]Cl3}$ all three chlorides are outside the coordination sphere and free in solution. In $\ce{[CoCl3(NH3)3]}$ all three are bonded to cobalt, so none can reach the silver ions.`,
  },
  explanation: {
    intuition: [
      t`Ions outside the square bracket are free in solution; they are **ionisable**.`,
      t`Ligands inside the bracket stay bonded to the metal; they are **non-ionisable**.`,
      t`Silver ions precipitate only free chloride ions: $\ce{Ag+ + Cl- -> AgCl v}$.`,
      t`So the moles of $\ce{AgCl}$ count the chlorides outside the bracket, not every chloride in the formula.`,
      t`Werner used exactly this test to work out the formulas of cobalt ammine chlorides.`,
    ],
    formal: [
      {
        title: "Werner's two valencies",
        points: [
          t`Werner said a metal in a complex shows two kinds of valency.`,
          t`The **primary valency** is ionisable and is satisfied by negative ions; it equals the metal's oxidation state.`,
          t`The **secondary valency** is non-ionisable and is satisfied by ligands; it equals the coordination number.`,
          t`Secondary valencies point in fixed directions in space, which gives the complex its shape.`,
          t`A ligand anion inside the bracket, like $\ce{Cl-}$, satisfies both a primary and a secondary valency.`,
        ],
      },
      {
        title: "Werner's cobalt ammine chlorides",
        points: [
          t`$\ce{CoCl3.6NH3}$ gives 3 mol $\ce{AgCl}$ per mole, so it is $\ce{[Co(NH3)6]Cl3}$.`,
          t`$\ce{CoCl3.5NH3}$ gives 2 mol $\ce{AgCl}$, so it is $\ce{[Co(NH3)5Cl]Cl2}$.`,
          t`$\ce{CoCl3.4NH3}$ gives 1 mol $\ce{AgCl}$, so it is $\ce{[Co(NH3)4Cl2]Cl}$.`,
          t`$\ce{CoCl3.3NH3}$ gives no $\ce{AgCl}$, so it is $\ce{[CoCl3(NH3)3]}$.`,
        ],
      },
      {
        title: "From AgCl to a formula",
        points: [
          t`Moles of $\ce{AgCl}$ per mole of complex = number of $\ce{Cl-}$ outside the bracket.`,
          t`Put that many $\ce{Cl-}$ outside; the remaining chlorides go inside as ligands.`,
          t`Fill the coordination sphere with the $\ce{NH3}$ to reach the coordination number.`,
          t`Mass of $\ce{AgCl}$ = moles of $\ce{AgCl}$ $\times$ $143.5\ \mathrm{g\,mol^{-1}}$ (Ag 108, Cl 35.5).`,
        ],
      },
    ],
    worked: {
      prompt: t`One mole of $\ce{PtCl4.5NH3}$ gives three moles of $\ce{AgCl}$ with excess $\ce{AgNO3}$. Platinum's coordination number is 6. Write the formula and Werner's two valencies.`,
      steps: [
        t`Three moles of $\ce{AgCl}$, so three $\ce{Cl-}$ are outside the bracket.`,
        t`The fourth chloride is a ligand, with the five $\ce{NH3}$: $5 + 1 = 6$ fills the sphere.`,
        t`Formula: $\ce{[Pt(NH3)5Cl]Cl3}$.`,
        t`Charge balance: $x + 5(0) + (-1) = +3$, so $x = +4$: primary valency 4, secondary valency 6.`,
      ],
      answer: t`$\ce{[Pt(NH3)5Cl]Cl3}$; primary 4, secondary 6`,
    },
    visualSpec: t`Pour silver nitrate into a beaker of each cobalt ammine chloride and watch only the chlorides outside the bracket drop out as white $\ce{AgCl}$, while the bonded ones stay locked to the cobalt.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks every chloride in the formula ionises and precipitates, inside the bracket or not.",
      remediation: "Only ions outside the coordination sphere are free in solution. Chlorides bonded inside the bracket do not reach the silver ions.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M2",
      mistake: "Takes the chlorides inside the bracket to be the ionisable ones.",
      remediation: "It is the other way round: ions outside the bracket are ionisable, and the ligands inside stay bonded to the metal.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: "Takes the primary valency to be the number of ions outside the bracket, not the oxidation state.",
      remediation: "The primary valency equals the metal's oxidation state. A chloride inside the bracket satisfies a primary valency too.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Swaps Werner's valencies: primary for the coordination number, secondary for the oxidation state.",
      remediation: "Primary valency is the ionisable one and equals the oxidation state; secondary valency equals the coordination number.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: t`Uses the molar mass of silver, 108, for the precipitate instead of $\ce{AgCl}$.`,
      remediation: t`The precipitate is silver chloride: use $108 + 35.5 = 143.5\ \mathrm{g\,mol^{-1}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Thinks a chloride can satisfy only one valency, so counts only the neutral ligands as the secondary valency.",
      remediation: "A chloride inside the bracket satisfies both valencies. The secondary valency counts every ligand atom bonded to the metal.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Solved Ex.9.1" },
      stem: t`$0.0200$ mol of $\ce{[Co(NH3)5Cl]Cl2}$ is treated with excess $\ce{AgNO3}$. What mass of $\ce{AgCl}$ precipitates? (Ag = 108, Cl = 35.5)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mass", mol: "0.0200", lig: "NH3:5,Cl:1", out: "Cl:2" } },
      options: [
        { key: "A", text: t`$2.87\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M2", value: "2.87000000000000" },
        { key: "B", text: t`$4.32\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M5", value: "4.32000000000000" },
        { key: "C", text: t`$5.74\ \mathrm{g}$`, correct: true, value: "5.74000000000000" },
        { key: "D", text: t`$8.61\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M1", value: "8.61000000000000" },
      ],
      solution: {
        steps: [
          t`Two $\ce{Cl-}$ are outside the bracket, so 1 mol of complex gives 2 mol $\ce{AgCl}$.`,
          t`$0.0200$ mol gives $0.0400$ mol $\ce{AgCl}$.`,
          t`Mass $= 0.0400 \times 143.5 = 5.74\ \mathrm{g}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#25" },
      stem: t`By Werner's theory, what are the primary and secondary valencies of cobalt in $\ce{[CoCl2(NH3)4]Cl}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "val", lig: "Cl:2,NH3:4", out: "Cl:1" } },
      options: [
        { key: "A", text: t`primary $6$, secondary $3$`, correct: false, misconceptionId: "C03-M4", value: "primary6_secondary3" },
        { key: "B", text: t`primary $3$, secondary $4$`, correct: false, misconceptionId: "C03-M6", value: "primary3_secondary4" },
        { key: "C", text: t`primary $3$, secondary $6$`, correct: true, value: "primary3_secondary6" },
        { key: "D", text: t`primary $1$, secondary $6$`, correct: false, misconceptionId: "C03-M3", value: "primary1_secondary6" },
      ],
      solution: {
        steps: [
          t`One $\ce{Cl-}$ outside: $x + 2(-1) + 4(0) = +1$, so $x = +3$.`,
          t`Primary valency = oxidation state = 3.`,
          t`Two $\ce{Cl-}$ and four $\ce{NH3}$ inside: secondary valency = C.N. = 6.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#21" },
      stem: t`$0.0140$ mol of $\ce{[CrCl2(H2O)4]Cl}$ is treated with excess $\ce{AgNO3}$. What mass of $\ce{AgCl}$ precipitates? (Ag = 108, Cl = 35.5)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mass", mol: "0.0140", lig: "Cl:2,H2O:4", out: "Cl:1" } },
      options: [
        { key: "A", text: t`$6.03\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M1", value: "6.03000000000000" },
        { key: "B", text: t`$4.02\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M2", value: "4.02000000000000" },
        { key: "C", text: t`$1.51\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M5", value: "1.51000000000000" },
        { key: "D", text: t`$2.01\ \mathrm{g}$`, correct: true, value: "2.01000000000000" },
      ],
      solution: {
        steps: [
          t`Only one $\ce{Cl-}$ is outside the bracket, so 1 mol of complex gives 1 mol $\ce{AgCl}$.`,
          t`$0.0140$ mol gives $0.0140$ mol $\ce{AgCl}$.`,
          t`Mass $= 0.0140 \times 143.5 = 2.01\ \mathrm{g}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#9" },
      stem: t`By Werner's theory, what are the primary and secondary valencies of platinum in $\ce{[Pt(NH3)4Cl2]Cl2}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "val", lig: "NH3:4,Cl:2", out: "Cl:2" } },
      options: [
        { key: "A", text: t`primary $4$, secondary $4$`, correct: false, misconceptionId: "C03-M6", value: "primary4_secondary4" },
        { key: "B", text: t`primary $4$, secondary $6$`, correct: true, value: "primary4_secondary6" },
        { key: "C", text: t`primary $2$, secondary $6$`, correct: false, misconceptionId: "C03-M3", value: "primary2_secondary6" },
        { key: "D", text: t`primary $6$, secondary $4$`, correct: false, misconceptionId: "C03-M4", value: "primary6_secondary4" },
      ],
      solution: {
        steps: [
          t`Two $\ce{Cl-}$ outside: $x + 4(0) + 2(-1) = +2$, so $x = +4$.`,
          t`Primary valency = oxidation state = 4.`,
          t`Four $\ce{NH3}$ and two $\ce{Cl-}$ inside: secondary valency = C.N. = 6.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`$0.0170$ mol of $\ce{[Pt(NH3)3Cl3]Cl}$ is treated with excess $\ce{AgNO3}$. What mass of $\ce{AgCl}$ precipitates? (Ag = 108, Cl = 35.5)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mass", mol: "0.0170", lig: "NH3:3,Cl:3", out: "Cl:1" } },
      options: [
        { key: "A", text: t`$2.44\ \mathrm{g}$`, correct: true, value: "2.44000000000000" },
        { key: "B", text: t`$9.76\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M1", value: "9.76000000000000" },
        { key: "C", text: t`$7.32\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M2", value: "7.32000000000000" },
        { key: "D", text: t`$1.84\ \mathrm{g}$`, correct: false, misconceptionId: "C03-M5", value: "1.84000000000000" },
      ],
      solution: {
        steps: [
          t`Only one $\ce{Cl-}$ is outside the bracket, so 1 mol of complex gives 1 mol $\ce{AgCl}$.`,
          t`$0.0170$ mol gives $0.0170$ mol $\ce{AgCl}$.`,
          t`Mass $= 0.0170 \times 143.5 = 2.44\ \mathrm{g}$.`,
        ],
      },
    },
  ],
};
