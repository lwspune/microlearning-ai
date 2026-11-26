import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$\ce{K4[Fe(CN)6]}$ is a neutral compound, and its iron is $+2$. Yet it is called an anionic complex. Which part is anionic?`,
    reveal: t`The class goes by the coordination sphere alone. $\ce{[Fe(CN)6]^4-}$ carries $-4$; the four $\ce{K+}$ outside only balance it.`,
  },
  explanation: {
    intuition: [
      t`Complexes are sorted in two ways: by the charge on the coordination sphere, and by the kinds of ligand.`,
      t`Only the part inside the square bracket decides either class.`,
      t`The whole compound is always neutral, so look at the bracket, not the compound.`,
      t`Counter ions outside the bracket are never ligands.`,
    ],
    formal: [
      {
        title: "Cationic, anionic and neutral",
        points: [
          t`Charge on the sphere = the metal's oxidation state + the ligands' charges.`,
          t`**Cationic complex**: the sphere is positive, as in $\ce{[Zn(NH3)4]^2+}$ or $\ce{[Co(NH3)6]Cl3}$.`,
          t`**Anionic complex**: the sphere is negative, as in $\ce{[Ni(CN)4]^2-}$ or $\ce{K4[Fe(CN)6]}$.`,
          t`**Neutral complex**: the sphere has no charge and no counter ions, as in $\ce{[Ni(CO)4]}$.`,
          t`A cationic sphere has anions outside; an anionic sphere has cations outside.`,
        ],
      },
      {
        title: "Homoleptic and heteroleptic",
        points: [
          t`A **homoleptic** complex has only one kind of ligand: $\ce{[Co(NH3)6]^3+}$.`,
          t`A **heteroleptic** complex has more than one kind of ligand: $\ce{[Co(NH3)4Cl2]+}$.`,
          t`Compare the ligands themselves, not their donor atoms: $\ce{H2O}$ and $\ce{OH-}$ both bond through O, but differ.`,
          t`Only the ligands inside the bracket count; $\ce{Cl-}$ in $\ce{[Co(NH3)6]Cl3}$ is a counter ion.`,
        ],
      },
    ],
    worked: {
      prompt: t`Classify $\ce{[Co(NH3)5Cl]SO4}$ by the charge on its coordination sphere and by its ligands.`,
      steps: [
        t`One $\ce{SO4^2-}$ outside balances the sphere, so the sphere is $\ce{[Co(NH3)5Cl]^2+}$.`,
        t`A positive sphere: the complex is cationic.`,
        t`Inside are two kinds of ligand, $\ce{NH3}$ and $\ce{Cl-}$, so it is heteroleptic.`,
      ],
      answer: t`cationic and heteroleptic`,
    },
    visualSpec: t`Drop a complex into two sorting trays, one for the sphere's charge and one for its ligands, with the counter ions greyed out so only the bracket decides.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Classes the complex by the metal's own charge, so any complex of a positive metal ion looks cationic.",
      remediation: t`The class depends on the whole sphere: metal's charge plus the ligands' charges. Six $\ce{CN-}$ around $\ce{Fe^2+}$ make the sphere $-4$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: t`Names the class after the counter ion, so a complex with $\ce{Cl-}$ or $\ce{SO4^2-}$ outside looks anionic.`,
      remediation: "The counter ion has the opposite charge to the sphere. Anions outside mean the sphere itself is cationic.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: "Counts the counter ions as ligands when deciding homoleptic or heteroleptic.",
      remediation: "Only the ligands inside the bracket count. Counter ions are outside the coordination sphere.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M4",
      mistake: "Judges homoleptic by the donor atom, so ligands that both bond through N or through O look like one kind.",
      remediation: t`Compare the ligands, not their donor atoms. $\ce{NH3}$ and $\ce{NO2-}$ both bond through N but are different ligands.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C04-M5",
      mistake: "Classes the complex by the sign of its ligands' total charge, ignoring the metal's charge.",
      remediation: "Add the metal's oxidation state to the ligands' charges. Only that total decides cationic, anionic or neutral.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks the coordination sphere is neutral because the whole compound is neutral.",
      remediation: "The compound is neutral only because counter ions balance the sphere. A sphere with counter ions always carries a charge.",
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.2 (vi)" },
      stem: t`In $\ce{K3[CoF6]}$ cobalt is in the $+3$ state. Classify the complex by the charge on its coordination sphere and by its ligands.`,
      verify: { kind: "value", inputs: {  }, params: { lig: "F:6", out: "K:3" } },
      options: [
        { key: "A", text: t`anionic and heteroleptic`, correct: false, misconceptionId: "C04-M3", value: "anionic_heteroleptic" },
        { key: "B", text: t`neutral and homoleptic`, correct: false, misconceptionId: "C04-M6", value: "neutral_homoleptic" },
        { key: "C", text: t`anionic and homoleptic`, correct: true, value: "anionic_homoleptic" },
        { key: "D", text: t`cationic and homoleptic`, correct: false, misconceptionId: "C04-M1", value: "cationic_homoleptic" },
      ],
      solution: {
        steps: [
          t`Sphere charge $= +3 + 6(-1) = -3$: $\ce{[CoF6]^3-}$ is anionic, balanced by three $\ce{K+}$.`,
          t`Its only ligand is $\ce{F-}$, so it is homoleptic.`,
          t`So the complex is anionic and homoleptic.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.3 (iv)" },
      stem: t`Consider $\ce{[Cu(NH3)4]SO4}$. Classify the complex by the charge on its coordination sphere and by its ligands.`,
      verify: { kind: "value", inputs: {  }, params: { lig: "NH3:4", out: "SO4:1" } },
      options: [
        { key: "A", text: t`cationic and homoleptic`, correct: true, value: "cationic_homoleptic" },
        { key: "B", text: t`anionic and homoleptic`, correct: false, misconceptionId: "C04-M2", value: "anionic_homoleptic" },
        { key: "C", text: t`cationic and heteroleptic`, correct: false, misconceptionId: "C04-M3", value: "cationic_heteroleptic" },
        { key: "D", text: t`neutral and homoleptic`, correct: false, misconceptionId: "C04-M6", value: "neutral_homoleptic" },
      ],
      solution: {
        steps: [
          t`One $\ce{SO4^2-}$ outside, so the sphere is $\ce{[Cu(NH3)4]^2+}$: cationic.`,
          t`Its only ligand is $\ce{NH3}$; sulphate is a counter ion, so it is homoleptic.`,
          t`So the complex is cationic and homoleptic.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#8" },
      stem: t`Consider $\ce{[Co(NO2)3(NH3)3]}$, in which each nitro ligand bonds through N. Classify the complex by the charge on its coordination sphere and by its ligands.`,
      verify: { kind: "value", inputs: {  }, params: { lig: "NO2:3,NH3:3" } },
      options: [
        { key: "A", text: t`neutral and homoleptic`, correct: false, misconceptionId: "C04-M4", value: "neutral_homoleptic" },
        { key: "B", text: t`anionic and heteroleptic`, correct: false, misconceptionId: "C04-M5", value: "anionic_heteroleptic" },
        { key: "C", text: t`neutral and heteroleptic`, correct: true, value: "neutral_heteroleptic" },
        { key: "D", text: t`cationic and heteroleptic`, correct: false, misconceptionId: "C04-M1", value: "cationic_heteroleptic" },
      ],
      solution: {
        steps: [
          t`No counter ions; $x + 3(-1) + 3(0) = 0$ gives cobalt $+3$, and the sphere is neutral.`,
          t`Its ligands are $\ce{NO2-}$ and $\ce{NH3}$, two different kinds, so it is heteroleptic.`,
          t`So the complex is neutral and heteroleptic.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#32" },
      stem: t`Consider $\ce{[Pt(NH3)2(en)]Cl2}$. Classify the complex by the charge on its coordination sphere and by its ligands.`,
      verify: { kind: "value", inputs: {  }, params: { lig: "NH3:2,en:1", out: "Cl:2" } },
      options: [
        { key: "A", text: t`anionic and heteroleptic`, correct: false, misconceptionId: "C04-M2", value: "anionic_heteroleptic" },
        { key: "B", text: t`cationic and homoleptic`, correct: false, misconceptionId: "C04-M4", value: "cationic_homoleptic" },
        { key: "C", text: t`neutral and heteroleptic`, correct: false, misconceptionId: "C04-M6", value: "neutral_heteroleptic" },
        { key: "D", text: t`cationic and heteroleptic`, correct: true, value: "cationic_heteroleptic" },
      ],
      solution: {
        steps: [
          t`Two $\ce{Cl-}$ outside, so the sphere is $\ce{[Pt(NH3)2(en)]^2+}$: cationic.`,
          t`Its ligands are $\ce{NH3}$ and en, two different kinds, so it is heteroleptic.`,
          t`So the complex is cationic and heteroleptic.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.4 (vi)" },
      stem: t`Consider $\ce{K[Cr(C2O4)2(H2O)2]}$. Classify the complex by the charge on its coordination sphere and by its ligands.`,
      verify: { kind: "value", inputs: {  }, params: { lig: "ox:2,H2O:2", out: "K:1" } },
      options: [
        { key: "A", text: t`neutral and heteroleptic`, correct: false, misconceptionId: "C04-M6", value: "neutral_heteroleptic" },
        { key: "B", text: t`anionic and heteroleptic`, correct: true, value: "anionic_heteroleptic" },
        { key: "C", text: t`cationic and heteroleptic`, correct: false, misconceptionId: "C04-M1", value: "cationic_heteroleptic" },
        { key: "D", text: t`anionic and homoleptic`, correct: false, misconceptionId: "C04-M4", value: "anionic_homoleptic" },
      ],
      solution: {
        steps: [
          t`One $\ce{K+}$ outside, so the sphere is $\ce{[Cr(C2O4)2(H2O)2]-}$: anionic.`,
          t`Its ligands are oxalate and water, two different kinds, so it is heteroleptic.`,
          t`So the complex is anionic and heteroleptic.`,
        ],
      },
    },
  ],
};
