import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Mohr's salt and $\ce{K4[Fe(CN)6]}$ both contain iron(II). A solution of Mohr's salt gives the tests for $\ce{Fe^2+}$, but a solution of $\ce{K4[Fe(CN)6]}$ does not. Where has the iron gone?`,
    reveal: t`Mohr's salt is a double salt: it splits completely into simple ions, $\ce{Fe^2+}$ among them. In $\ce{K4[Fe(CN)6]}$ the iron stays locked inside the complex ion $\ce{[Fe(CN)6]^4-}$, so no free $\ce{Fe^2+}$ is there to test.`,
  },
  explanation: {
    intuition: [
      t`A **coordination compound** has a metal ion bonded to a group of ions or molecules that stay attached in water.`,
      t`A **double salt** such as Mohr's salt splits completely into simple ions in water.`,
      t`A complex keeps at least one **complex ion** whole, such as $\ce{[Fe(CN)6]^4-}$.`,
      t`The square bracket marks what stays together; ions written outside it move freely in solution.`,
      t`Two numbers describe the metal: how many atoms bond to it, and its oxidation state.`,
    ],
    formal: [
      {
        title: "Parts of a complex",
        points: [
          t`The **central metal ion** sits at the centre, like $\ce{Co^3+}$ in $\ce{[Co(NH3)6]Cl3}$.`,
          t`**Ligands** are the ions or molecules bonded to it, such as $\ce{NH3}$, $\ce{H2O}$, $\ce{Cl-}$, $\ce{CN-}$.`,
          t`A ligand gives an electron pair to the metal, forming a coordinate bond.`,
          t`The metal ion and its ligands, written inside the square bracket, form the **coordination sphere**.`,
          t`**Counter ions** are written outside the bracket: $\ce{Cl-}$ in $\ce{[Co(NH3)6]Cl3}$, $\ce{K+}$ in $\ce{K4[Fe(CN)6]}$.`,
          t`Counter ions balance the charge of the coordination sphere, so the compound is neutral.`,
        ],
      },
      {
        title: "Coordination number",
        points: [
          t`The **coordination number** (C.N.) is the number of ligand atoms bonded directly to the metal.`,
          t`With one-atom ligands, it is simply the number of ligands inside the bracket.`,
          t`Neutral ligands and anionic ligands both count: $\ce{[Co(NH3)4Cl2]+}$ has C.N. 6.`,
          t`Counter ions are outside the sphere, so they never count.`,
          t`Common values are 4 (tetrahedral or square planar) and 6 (octahedral).`,
        ],
      },
      {
        title: "Oxidation state of the metal",
        points: [
          t`The charge on the coordination sphere is the metal's oxidation state plus the ligands' charges.`,
          t`Find the sphere's charge from the counter ions: $\ce{SO4^2-}$ outside means the sphere is $+2$.`,
          t`Neutral ligands ($\ce{NH3}$, $\ce{H2O}$, $\ce{CO}$) add 0; $\ce{Cl-}$, $\ce{Br-}$, $\ce{CN-}$ add $-1$ each.`,
          t`For $\ce{[Co(NH3)6]^3+}$: $x + 6(0) = +3$, so $x = +3$.`,
          t`The oxidation state and the coordination number are different numbers; don't swap them.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\ce{K2[Ni(CN)4]}$, name the central ion, the ligands and the counter ions, and find the coordination number and the oxidation state of nickel.`,
      steps: [
        t`Inside the bracket: nickel is the central ion and four $\ce{CN-}$ are the ligands; the two $\ce{K+}$ are counter ions.`,
        t`Four one-atom ligands bond to nickel, so the coordination number is 4.`,
        t`Two $\ce{K+}$ outside mean the sphere is $\ce{[Ni(CN)4]^2-}$, charge $-2$.`,
        t`$x + 4(-1) = -2$, so $x = +2$.`,
      ],
      answer: t`C.N. 4; nickel is $+2$`,
    },
    visualSpec: t`Tap each part of a complex's formula to light up the central ion, the ligands, the coordination sphere and the counter ions, with the sphere's charge adding up as each piece is placed.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes the metal's oxidation state to be the charge on the coordination sphere, forgetting the ligands' charges.",
      remediation: t`The sphere's charge is the metal's oxidation state plus every ligand's charge. Subtract the ligand charges: $x = $ (sphere charge) $-$ (ligand charges).`,
      fallback: { kind: "ext", topic: "oxidation numbers (Std XI Chemistry)" },
    },
    {
      id: "C01-M2",
      mistake: "Forgets the counter ions and treats the coordination sphere as neutral.",
      remediation: "The counter ions outside the bracket balance the sphere's charge. Find that charge first, then solve for the metal.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Mixes up the oxidation state and the coordination number, giving one when asked for the other.",
      remediation: "The coordination number counts the ligand atoms bonded to the metal; the oxidation state is the metal's charge from the charge balance.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Counts the counter ions outside the bracket as ligands.",
      remediation: "Only what is inside the square bracket is bonded to the metal. Counter ions are outside the coordination sphere and never count.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks only neutral molecules are ligands, so leaves anions inside the bracket out of the coordination number.",
      remediation: t`Every ion or molecule inside the bracket is a ligand, charged or not: $\ce{Cl-}$ inside counts just as $\ce{NH3}$ does.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.1 (i)" },
      stem: t`What is the oxidation state of cobalt in the complex $\ce{[Co(NH3)5Br]SO4}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox", lig: "NH3:5,Br:1", out: "SO4:1" } },
      options: [
        { key: "A", text: t`$+3$`, correct: true, value: "3" },
        { key: "B", text: t`$+2$`, correct: false, misconceptionId: "C01-M1", value: "2" },
        { key: "C", text: t`$+1$`, correct: false, misconceptionId: "C01-M2", value: "1" },
        { key: "D", text: t`$+6$`, correct: false, misconceptionId: "C01-M3", value: "6" },
      ],
      solution: {
        steps: [
          t`One $\ce{SO4^2-}$ outside, so the sphere is $\ce{[Co(NH3)5Br]^2+}$.`,
          t`$\ce{NH3}$ is neutral and $\ce{Br-}$ is $-1$: $x + 5(0) + (-1) = +2$.`,
          t`So $x = +3$: cobalt is in the $+3$ state.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.3 (ii)" },
      stem: t`What is the oxidation state of platinum in the complex ion $\ce{[Pt(NH3)Cl5]-}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox", lig: "NH3:1,Cl:5", charge: "-1" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C01-M1", value: "-1" },
        { key: "B", text: t`$+4$`, correct: true, value: "4" },
        { key: "C", text: t`$+5$`, correct: false, misconceptionId: "C01-M2", value: "5" },
        { key: "D", text: t`$+6$`, correct: false, misconceptionId: "C01-M3", value: "6" },
      ],
      solution: {
        steps: [
          t`The complex ion carries $-1$; $\ce{NH3}$ is neutral and each $\ce{Cl-}$ is $-1$.`,
          t`$x + 1(0) + 5(-1) = -1$.`,
          t`So $x = +4$: platinum is in the $+4$ state (its C.N. is 6).`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Solved Ex.9.1" },
      stem: t`What is the coordination number of cobalt in $\ce{[Co(NH3)5Cl]Cl2}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cn", lig: "NH3:5,Cl:1", out: "Cl:2" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C01-M4", value: "8" },
        { key: "B", text: t`$5$`, correct: false, misconceptionId: "C01-M5", value: "5" },
        { key: "C", text: t`$6$`, correct: true, value: "6" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C01-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`Inside the bracket: five $\ce{NH3}$ and one $\ce{Cl-}$, each bonded through one atom.`,
          t`The two $\ce{Cl-}$ outside are counter ions and do not count.`,
          t`So the coordination number is $5 + 1 = 6$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.3 (v)" },
      stem: t`What is the oxidation state of platinum in $\ce{K[PtCl3(NH3)]}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox", lig: "Cl:3,NH3:1", out: "K:1" } },
      options: [
        { key: "A", text: t`$-1$`, correct: false, misconceptionId: "C01-M1", value: "-1" },
        { key: "B", text: t`$+3$`, correct: false, misconceptionId: "C01-M2", value: "3" },
        { key: "C", text: t`$+4$`, correct: false, misconceptionId: "C01-M3", value: "4" },
        { key: "D", text: t`$+2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`One $\ce{K+}$ outside, so the sphere is $\ce{[PtCl3(NH3)]-}$, charge $-1$.`,
          t`$x + 3(-1) + 1(0) = -1$.`,
          t`So $x = +2$: platinum is in the $+2$ state.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#21" },
      stem: t`What is the oxidation state of chromium in $\ce{[CrCl2(H2O)4]Cl}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox", lig: "Cl:2,H2O:4", out: "Cl:1" } },
      options: [
        { key: "A", text: t`$+1$`, correct: false, misconceptionId: "C01-M1", value: "1" },
        { key: "B", text: t`$+3$`, correct: true, value: "3" },
        { key: "C", text: t`$+2$`, correct: false, misconceptionId: "C01-M2", value: "2" },
        { key: "D", text: t`$+6$`, correct: false, misconceptionId: "C01-M3", value: "6" },
      ],
      solution: {
        steps: [
          t`One $\ce{Cl-}$ outside, so the sphere is $\ce{[CrCl2(H2O)4]+}$, charge $+1$.`,
          t`$x + 2(-1) + 4(0) = +1$.`,
          t`So $x = +3$: chromium is in the $+3$ state.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`What is the coordination number of platinum in $\ce{[Pt(NH3)3Cl]Cl}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cn", lig: "NH3:3,Cl:1", out: "Cl:1" } },
      options: [
        { key: "A", text: t`$5$`, correct: false, misconceptionId: "C01-M4", value: "5" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C01-M5", value: "3" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C01-M3", value: "2" },
        { key: "D", text: t`$4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`Inside the bracket: three $\ce{NH3}$ and one $\ce{Cl-}$.`,
          t`The $\ce{Cl-}$ outside is a counter ion and does not count.`,
          t`So the coordination number is $3 + 1 = 4$.`,
        ],
      },
    },
  ],
};
