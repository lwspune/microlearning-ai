import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`The complex ion $\ce{[Co(en)3]^3+}$ has only three ligands, yet the coordination number of cobalt in it is 6. How can three ligands make six bonds?`,
    reveal: t`Each ethylenediamine (en) molecule has two nitrogen atoms with lone pairs, and both bond to the cobalt. Three en ligands give $3 \times 2 = 6$ donor atoms.`,
  },
  explanation: {
    intuition: [
      t`A ligand bonds by giving an electron pair to the metal ion.`,
      t`So a ligand is a **Lewis base** (pair donor), and the metal ion is a **Lewis acid** (pair acceptor).`,
      t`The atom of the ligand that gives the pair is its **donor atom**.`,
      t`Some ligands have one donor atom; others have two or more that bond to the same metal.`,
      t`The coordination number counts donor atoms, not ligand molecules.`,
    ],
    formal: [
      {
        title: "Monodentate and polydentate",
        points: [
          t`A **monodentate** ligand bonds through one donor atom: $\ce{Cl-}$, $\ce{OH-}$, $\ce{CN-}$, $\ce{H2O}$, $\ce{NH3}$.`,
          t`A **polydentate** ligand has two or more donor atoms that bond to the same metal ion.`,
          t`**Bidentate** (two donors): ethylenediamine (en), $\ce{H2N-CH2-CH2-NH2}$, through its two N atoms.`,
          t`The oxalate ion $\ce{C2O4^2-}$ is also bidentate: it bonds through two O atoms.`,
          t`**Tridentate** (three donors): diethylenetriamine (dien), through its three N atoms.`,
          t`**Hexadentate** (six donors): $\ce{EDTA^4-}$, through two N atoms and four O atoms.`,
        ],
      },
      {
        title: "Counting donor atoms",
        points: [
          t`A ligand's **denticity** is the number of its donor atoms that bond to the metal.`,
          t`Coordination number = the sum of (number of each ligand) $\times$ (its denticity).`,
          t`$\ce{[Co(en)3]^3+}$: $3 \times 2 = 6$.`,
          t`In a carboxylate group only one oxygen bonds, so oxalate is bidentate, not tetradentate.`,
          t`Count donor atoms, not electrons: each donor atom gives one pair.`,
        ],
      },
      {
        title: "Chelating and ambidentate",
        points: [
          t`A polydentate ligand bonded through two or more atoms forms a ring with the metal ion.`,
          t`Such a ligand is a **chelating ligand**, and the complex is a **chelate**.`,
          t`An **ambidentate** ligand has two different donor atoms but bonds through only one at a time.`,
          t`$\ce{NO2-}$ bonds through N (nitro) or through O (nitrito).`,
          t`$\ce{SCN-}$ bonds through S (thiocyanato) or through N (isothiocyanato).`,
          t`So an ambidentate ligand is still monodentate: it adds 1 to the coordination number.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the coordination number and the oxidation state of iron in $\ce{[Fe(C2O4)3]^3-}$.`,
      steps: [
        t`Oxalate, $\ce{C2O4^2-}$, is bidentate: it bonds through two O atoms.`,
        t`Three oxalates give $3 \times 2 = 6$ donor atoms, so the coordination number is 6.`,
        t`Charge balance: $x + 3(-2) = -3$.`,
        t`So $x = +3$: iron is in the $+3$ state.`,
      ],
      answer: t`C.N. 6; iron is $+3$`,
    },
    visualSpec: t`Drag ligands onto a metal ion and watch each donor atom snap into a bond, so en takes two places, EDTA wraps round to take six, and NO2⁻ flips between its N end and its O end.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Counts ligands instead of donor atoms, so every ligand adds 1 to the coordination number.",
      remediation: "The coordination number counts donor atoms bonded to the metal. A bidentate ligand such as en adds 2; EDTA adds 6.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: t`Treats an ambidentate ligand such as $\ce{NO2-}$ as bidentate, counting both of its donor atoms.`,
      remediation: "An ambidentate ligand has two possible donor atoms but bonds through only one of them at a time, so it adds 1.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: t`Takes a ligand's denticity to be the size of its charge, so $\ce{EDTA^4-}$ looks tetradentate and en monodentate.`,
      remediation: "Denticity is the number of donor atoms that bond, not the charge. EDTA bonds through six atoms; neutral en through two.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Counts every atom with a lone pair as a donor, including both oxygens of each carboxylate group.",
      remediation: "Only one oxygen of each carboxylate group bonds to the metal. Oxalate is bidentate and EDTA hexadentate.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Counts the electrons donated, two per donor atom, instead of the donor atoms.",
      remediation: "Each donor atom gives one electron pair and counts once. The coordination number is the number of donor atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Reads the denticity off a number prefix in the ligand's name, so diethylenetriamine looks bidentate.",
      remediation: "Count the donor atoms in the structure, not the prefixes. Diethylenetriamine has three N donors, so it is tridentate.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#31" },
      stem: t`How many donor atoms does one EDTA ion, $\ce{EDTA^4-}$, use to bind a metal ion?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dent", lig: "EDTA:1" } },
      options: [
        { key: "A", text: t`$6$`, correct: true, value: "6" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C02-M1", value: "1" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C02-M3", value: "4" },
        { key: "D", text: t`$10$`, correct: false, misconceptionId: "C02-M4", value: "10" },
      ],
      solution: {
        steps: [
          t`EDTA has two N atoms, one at each end of its $\ce{-CH2-CH2-}$ bridge.`,
          t`It has four carboxylate groups, each bonding through one O atom.`,
          t`So it uses $2 + 4 = 6$ donor atoms: it is hexadentate.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.1 (viii)" },
      stem: t`What is the sum of the coordination number and the oxidation number of M in $\ce{[M(en)2(C2O4)]Cl}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "sum", lig: "en:2,ox:1", out: "Cl:1" } },
      options: [
        { key: "A", text: t`$6$`, correct: false, misconceptionId: "C02-M1", value: "6" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C02-M3", value: "7" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C02-M6", value: "8" },
        { key: "D", text: t`$9$`, correct: true, value: "9" },
      ],
      solution: {
        steps: [
          t`en and oxalate are both bidentate, so C.N. $= 2 \times 2 + 1 \times 2 = 6$.`,
          t`One $\ce{Cl-}$ outside makes the sphere $+1$: $x + 2(0) + (-2) = +1$, so $x = +3$.`,
          t`The sum is $6 + 3 = 9$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.4 (v)" },
      stem: t`In $\ce{[Co(en)2(NO2)Cl]+}$ the nitrite ion is bonded through nitrogen. What is the coordination number of cobalt?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cn", lig: "en:2,NO2:1,Cl:1", charge: "1" } },
      options: [
        { key: "A", text: t`$12$`, correct: false, misconceptionId: "C02-M5", value: "12" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C02-M1", value: "4" },
        { key: "C", text: t`$6$`, correct: true, value: "6" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C02-M2", value: "7" },
      ],
      solution: {
        steps: [
          t`Each en is bidentate: $2 \times 2 = 4$ donor atoms.`,
          t`$\ce{NO2-}$ is ambidentate but bonds only through N here, so it adds 1; $\ce{Cl-}$ adds 1.`,
          t`So the coordination number is $4 + 1 + 1 = 6$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.3 (i)" },
      stem: t`What is the coordination number of platinum in $\ce{[Pt(C2O4)(NH3)2]}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cn", lig: "ox:1,NH3:2" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C02-M5", value: "8" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C02-M1", value: "3" },
        { key: "D", text: t`$6$`, correct: false, misconceptionId: "C02-M4", value: "6" },
      ],
      solution: {
        steps: [
          t`Oxalate is bidentate, bonding through two O atoms: 2 donor atoms.`,
          t`The two $\ce{NH3}$ are monodentate: 2 more.`,
          t`So the coordination number is $2 + 2 = 4$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#28" },
      stem: t`The ligand diethylenetriamine, $\ce{H2N-CH2-CH2-NH}$ $\ce{-CH2-CH2-NH2}$, is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "type", lig: "dien:1" } },
      options: [
        { key: "A", text: t`bidentate`, correct: false, misconceptionId: "C02-M6", value: "bidentate" },
        { key: "B", text: t`monodentate`, correct: false, misconceptionId: "C02-M1", value: "monodentate" },
        { key: "C", text: t`hexadentate`, correct: false, misconceptionId: "C02-M5", value: "hexadentate" },
        { key: "D", text: t`tridentate`, correct: true, value: "tridentate" },
      ],
      solution: {
        steps: [
          t`The molecule has three N atoms, each with a lone pair.`,
          t`All three bond to the same metal ion.`,
          t`So diethylenetriamine is tridentate.`,
        ],
      },
    },
  ],
};
