import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Two compounds share the formula $\ce{CoBrSO4.5NH3}$. One gives a white precipitate with $\ce{BaCl2}$, the other a cream one with $\ce{AgNO3}$. How can one formula make two compounds?`,
    reveal: t`The bromide and the sulphate swap places. $\ce{[Co(NH3)5Br]SO4}$ sets $\ce{SO4^2-}$ free; $\ce{[Co(NH3)5SO4]Br}$ sets $\ce{Br-}$ free. They are **ionisation isomers**.`,
  },
  explanation: {
    intuition: [
      t`**Isomers** have the same formula but are different compounds.`,
      t`A complex's formula alone does not say which groups are bonded to the metal.`,
      t`**Structural isomers** differ in which groups are bonded to the metal, or through which atom.`,
      t`Four ways this happens: an ion crosses the bracket, a donor atom changes, ligands swap metals, or water moves.`,
      t`Each kind behaves differently, for example in the ions it gives in water.`,
    ],
    formal: [
      {
        title: "Ionisation isomers",
        points: [
          t`**Ionisation isomers** swap an anion between the coordination sphere and the ionisation sphere outside the bracket.`,
          t`Example: $\ce{[Co(NH3)5SO4]Br}$ and $\ce{[Co(NH3)5Br]SO4}$.`,
          t`In water the first gives $\ce{Br-}$ ions, the second $\ce{SO4^2-}$ ions.`,
          t`So only the second gives white $\ce{BaSO4}$ with $\ce{BaCl2}$.`,
        ],
      },
      {
        title: "Linkage isomers",
        points: [
          t`An **ambidentate** ligand can bind through either of two donor atoms.`,
          t`$\ce{NO2-}$ binds through N (nitro) or through O (nitrito, written $\ce{ONO-}$).`,
          t`$\ce{SCN-}$ binds through S (thiocyanato) or through N (isothiocyanato, $\ce{NCS-}$).`,
          t`**Linkage isomers** differ only in that donor atom: $\ce{[Mn(CO)5(SCN)]}$ and $\ce{[Mn(CO)5(NCS)]}$.`,
        ],
      },
      {
        title: "Coordination isomers",
        points: [
          t`These need two complex ions in one compound, a complex cation and a complex anion.`,
          t`**Coordination isomers** exchange ligands between the two metals.`,
          t`Example: $\ce{[Co(NH3)6][Cr(CN)6]}$ and $\ce{[Cr(NH3)6][Co(CN)6]}$.`,
        ],
      },
      {
        title: "Solvate (hydrate) isomers",
        points: [
          t`Water can be a ligand inside the sphere, or water of crystallisation outside it.`,
          t`**Solvate isomers** differ in how many water molecules are ligands; called hydrate isomers when the solvent is water.`,
          t`$\ce{[Cr(H2O)6]Cl3}$, $\ce{[Cr(H2O)5Cl]Cl2.H2O}$ and $\ce{[Cr(H2O)4Cl2]Cl.2H2O}$ are hydrate isomers.`,
          t`One mole of each gives $3$, $2$ and $1$ mole of $\ce{AgCl}$: only the outside $\ce{Cl-}$ precipitates.`,
        ],
      },
    ],
    worked: {
      prompt: t`What type of isomers are $\ce{[Zn(NH3)4][CuCl4]}$ and $\ce{[Cu(NH3)4][ZnCl4]}$?`,
      steps: [
        t`Both have the same atoms: one Zn, one Cu, four $\ce{NH3}$ and four $\ce{Cl}$.`,
        t`Each is a complex cation with a complex anion.`,
        t`$\ce{NH3}$ is on Zn in the first and on Cu in the second; $\ce{Cl-}$ moves the other way.`,
        t`Ligands are exchanged between the two metals, so they are coordination isomers.`,
      ],
      answer: t`Coordination isomers`,
    },
    visualSpec: t`Drag a ligand across the bracket, to the other metal, or flip its donor atom, and see which kind of isomer you make.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Calls any pair where a ligand changes place (to another metal, or across the bracket) linkage isomers.",
      remediation: t`Linkage isomers keep every ligand in place; only an ambidentate ligand changes its donor atom, as $\ce{NO2-}$ and $\ce{ONO-}$ do.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks any change inside the coordination sphere makes coordination isomers.",
      remediation: "Coordination isomers need two complex ions, a cation and an anion, that swap ligands between their metals.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M3",
      mistake: "Calls every exchange across the bracket ionisation isomerism, whatever moved.",
      remediation: "Ionisation isomers swap an anion with the outside; when water moves it is solvate isomerism, and ligands swapping metals is coordination isomerism.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Confuses structural isomers with geometric (cis–trans) isomers.",
      remediation: "Cis and trans isomers have the same bonds arranged differently in space; here the bonds themselves differ, so these are structural isomers.",
      fallback: { kind: "ext", topic: "isomerism (Std XI Chemistry)" },
    },
    {
      id: "C06-M5",
      mistake: t`Takes nitro and nitrito (or $\ce{SCN-}$ and $\ce{NCS-}$) as different ligands, so not isomers.`,
      remediation: t`$\ce{NO2-}$ is one ambidentate ligand that binds through N or O; the two complexes have the same formula, so they are linkage isomers.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#26" },
      stem: t`What type of isomers are $\ce{[Pt(NH3)4Cl2]Br2}$ and $\ce{[Pt(NH3)4Br2]Cl2}$?`,
      verify: { kind: "value", inputs: {  }, params: { a: "[Pt(NH3)4Cl2]Br2", b: "[Pt(NH3)4Br2]Cl2" } },
      options: [
        { key: "A", text: t`Linkage isomers`, correct: false, misconceptionId: "C06-M1", value: "linkage" },
        { key: "B", text: t`Coordination isomers`, correct: false, misconceptionId: "C06-M2", value: "coordination" },
        { key: "C", text: t`Geometric (cis–trans) isomers`, correct: false, misconceptionId: "C06-M4", value: "geometric" },
        { key: "D", text: t`Ionisation isomers`, correct: true, value: "ionisation" },
      ],
      solution: {
        steps: [
          t`Inside the bracket: $\ce{Cl-}$ in the first, $\ce{Br-}$ in the second.`,
          t`Outside: $\ce{Br-}$ in the first, $\ce{Cl-}$ in the second, so they give different ions in water.`,
          t`An anion has swapped between the sphere and the outside: ionisation isomers.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#23" },
      stem: t`What type of isomers are $\ce{[Co(NH3)5(NO2)]Cl2}$ and $\ce{[Co(NH3)5(ONO)]Cl2}$?`,
      verify: { kind: "value", inputs: {  }, params: { a: "[Co(NH3)5(NO2)]Cl2", b: "[Co(NH3)5(ONO)]Cl2" } },
      options: [
        { key: "A", text: t`Linkage isomers`, correct: true, value: "linkage" },
        { key: "B", text: t`Coordination isomers`, correct: false, misconceptionId: "C06-M2", value: "coordination" },
        { key: "C", text: t`Geometric (cis–trans) isomers`, correct: false, misconceptionId: "C06-M4", value: "geometric" },
        { key: "D", text: t`Not isomers: the ligands are different`, correct: false, misconceptionId: "C06-M5", value: "not_isomers" },
      ],
      solution: {
        steps: [
          t`The ligands and the ions outside are the same in both.`,
          t`$\ce{NO2-}$ binds through N in the first and through O (nitrito) in the second.`,
          t`$\ce{NO2-}$ is ambidentate, so these are linkage isomers.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.2 (vii)" },
      stem: t`What type of isomers are $\ce{[Cu(NH3)4][PtCl4]}$ and $\ce{[Pt(NH3)4][CuCl4]}$?`,
      verify: { kind: "value", inputs: {  }, params: { a: "[Cu(NH3)4][PtCl4]", b: "[Pt(NH3)4][CuCl4]" } },
      options: [
        { key: "A", text: t`Linkage isomers`, correct: false, misconceptionId: "C06-M1", value: "linkage" },
        { key: "B", text: t`Ionisation isomers`, correct: false, misconceptionId: "C06-M3", value: "ionisation" },
        { key: "C", text: t`Geometric (cis–trans) isomers`, correct: false, misconceptionId: "C06-M4", value: "geometric" },
        { key: "D", text: t`Coordination isomers`, correct: true, value: "coordination" },
      ],
      solution: {
        steps: [
          t`Each compound is a complex cation with a complex anion.`,
          t`$\ce{NH3}$ is on Cu in the first and on Pt in the second; $\ce{Cl-}$ moves the other way.`,
          t`Ligands are exchanged between the metals: coordination isomers.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`What type of isomers are $\ce{[Cr(H2O)6]Cl3}$ and $\ce{[Cr(H2O)5Cl]Cl2.H2O}$?`,
      verify: { kind: "value", inputs: {  }, params: { a: "[Cr(H2O)6]Cl3", b: "[Cr(H2O)5Cl]Cl2.H2O" } },
      options: [
        { key: "A", text: t`Ionisation isomers`, correct: false, misconceptionId: "C06-M3", value: "ionisation" },
        { key: "B", text: t`Solvate (hydrate) isomers`, correct: true, value: "solvate" },
        { key: "C", text: t`Linkage isomers`, correct: false, misconceptionId: "C06-M1", value: "linkage" },
        { key: "D", text: t`Coordination isomers`, correct: false, misconceptionId: "C06-M2", value: "coordination" },
      ],
      solution: {
        steps: [
          t`In $\ce{[Cr(H2O)6]Cl3}$ all six water molecules are ligands.`,
          t`In the second, one water is outside as water of crystallisation and a $\ce{Cl-}$ has taken its place.`,
          t`Water has moved between the sphere and the outside: solvate (hydrate) isomers.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.4 (iii)" },
      stem: t`What type of isomers are $\ce{[Pt(NH3)2Cl(NO2)]}$ and $\ce{[Pt(NH3)2Cl(ONO)]}$?`,
      verify: { kind: "value", inputs: {  }, params: { a: "[Pt(NH3)2Cl(NO2)]", b: "[Pt(NH3)2Cl(ONO)]" } },
      options: [
        { key: "A", text: t`Coordination isomers`, correct: false, misconceptionId: "C06-M2", value: "coordination" },
        { key: "B", text: t`Geometric (cis–trans) isomers`, correct: false, misconceptionId: "C06-M4", value: "geometric" },
        { key: "C", text: t`Linkage isomers`, correct: true, value: "linkage" },
        { key: "D", text: t`Not isomers: the ligands are different`, correct: false, misconceptionId: "C06-M5", value: "not_isomers" },
      ],
      solution: {
        steps: [
          t`Same metal, same ligands, and no ions outside the bracket.`,
          t`$\ce{NO2-}$ binds through N in the first and through O in the second.`,
          t`Only the donor atom of an ambidentate ligand differs: linkage isomers.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#21" },
      stem: t`Only one of these two complexes gives a white precipitate with barium nitrate. What type of isomers are $\ce{[Cr(NH3)5SO4]Cl}$ and $\ce{[Cr(NH3)5Cl]SO4}$?`,
      verify: { kind: "value", inputs: {  }, params: { a: "[Cr(NH3)5SO4]Cl", b: "[Cr(NH3)5Cl]SO4" } },
      options: [
        { key: "A", text: t`Coordination isomers`, correct: false, misconceptionId: "C06-M2", value: "coordination" },
        { key: "B", text: t`Geometric (cis–trans) isomers`, correct: false, misconceptionId: "C06-M4", value: "geometric" },
        { key: "C", text: t`Ionisation isomers`, correct: true, value: "ionisation" },
        { key: "D", text: t`Linkage isomers`, correct: false, misconceptionId: "C06-M1", value: "linkage" },
      ],
      solution: {
        steps: [
          t`Sulphate is inside the first bracket and outside the second; chloride the other way.`,
          t`Only $\ce{[Cr(NH3)5Cl]SO4}$ sets $\ce{SO4^2-}$ free, giving white $\ce{BaSO4}$.`,
          t`An anion has swapped between the sphere and the outside: ionisation isomers.`,
        ],
      },
    },
  ],
};
