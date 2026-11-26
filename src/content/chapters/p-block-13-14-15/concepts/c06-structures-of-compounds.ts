import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Diborane, $\ce{B2H6}$, has 12 valence electrons but would need 14 to bond all its atoms with ordinary two-electron bonds. How does it hold together?`,
    reveal: t`Two of its bonds are three-centre bonds: a single pair of electrons holds a B–H–B bridge.`,
  },
  explanation: {
    intuition: [
      t`Boron compounds are often electron deficient.`,
      t`$\ce{BCl3}$ is planar, with an empty p orbital.`,
      t`Diborane uses three-centre two-electron 'banana' bonds.`,
      t`Oxoacids like $\ce{H3PO4}$ and $\ce{HNO3}$ have definite structures, sometimes with resonance.`,
    ],
    formal: [
      {
        title: "Boron and aluminium",
        points: [
          t`$\ce{BCl3}$ and monomeric $\ce{AlCl3}$: $sp^2$, trigonal planar.`,
          t`Diborane: four terminal B–H bonds and two B–H–B bridges (3c–2e).`,
        ],
      },
      {
        title: "Oxoacids",
        points: [
          t`$\ce{H3PO4}$: P with one P=O and three P–OH; tribasic.`,
          t`$\ce{HNO3}$: the two N–O bonds without H are equal through resonance.`,
          t`$\ce{CO2}$ is linear; $\ce{SiO2}$ is a network of $\ce{SiO4}$ tetrahedra.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many replaceable H atoms does $\ce{H3PO4}$ have?`,
      steps: [
        t`All three H are on O (P–OH).`,
        t`So three are replaceable.`,
      ],
      answer: t`3`,
    },
    visualSpec: t`Build diborane and see two hydrogens bridge the borons above and below the plane.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Picks $sp^3$.`,
      remediation: t`Monomeric $\ce{AlCl3}$ has three bonds and no lone pair: $sp^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Picks $sp$.`,
      remediation: t`Three groups need $sp^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Picks $sp^3d$.`,
      remediation: "Al uses only s and p orbitals here.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Gives a B=B bond.",
      remediation: "The borons are linked only through H bridges.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Calls the B–H bonds ionic.",
      remediation: "They are covalent; two are three-centre bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Counts six ordinary B–H bonds.",
      remediation: "12 electrons are too few; two bonds are three-centre.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: t`Calls $\ce{BCl3}$ angular.`,
      remediation: "Three bond pairs, no lone pair: trigonal planar.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Calls it linear.",
      remediation: t`Three Cl atoms spread at $120^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Calls it tetrahedral.",
      remediation: "B has three pairs, not four.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Gives four P–OH groups.",
      remediation: t`$\ce{H3PO4}$ has three OH and one P=O.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Gives P–H bonds.",
      remediation: t`All H in $\ce{H3PO4}$ are on O.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Gives a P–P bond.",
      remediation: t`$\ce{H3PO4}$ has only one P atom.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Calls both bonds single.",
      remediation: "Resonance makes both intermediate between single and double.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Gives nitrogen five bonds.",
      remediation: "N cannot exceed four bonds; resonance explains it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Calls both bonds double.",
      remediation: "That would give N five bonds; they are resonance hybrids.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.6 (A)" },
      stem: t`What is the hybridisation of Al in $\ce{AlCl3}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "alcl3" } },
      options: [
        { key: "A", text: t`$sp^3$`, correct: false, misconceptionId: "C06-M1", value: "sp3" },
        { key: "B", text: t`$sp^2$`, correct: true, value: "sp2" },
        { key: "C", text: t`$sp^3d$`, correct: false, misconceptionId: "C06-M3", value: "sp3d" },
        { key: "D", text: t`$sp$`, correct: false, misconceptionId: "C06-M2", value: "sp" },
      ],
      solution: {
        steps: [
          t`Al forms three bonds, no lone pair.`,
          t`$sp^2$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.12" },
      stem: t`The bridges in diborane, $\ce{B2H6}$, are`,
      verify: { kind: "value", inputs: {  }, params: { q: "diborane" } },
      options: [
        { key: "A", text: t`ionic B–H bonds`, correct: false, misconceptionId: "C06-M5", value: "ionic" },
        { key: "B", text: t`a B=B double bond`, correct: false, misconceptionId: "C06-M4", value: "b_b_double" },
        { key: "C", text: t`two three-centre two-electron B–H–B (banana) bonds`, correct: true, value: "three_centre" },
        { key: "D", text: t`none: it has six ordinary B–H bonds`, correct: false, misconceptionId: "C06-M6", value: "six_ordinary" },
      ],
      solution: {
        steps: [
          t`12 valence electrons cannot make eight 2e bonds.`,
          t`Two B–H–B bridges are 3c–2e bonds.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.16" },
      stem: t`The shape of $\ce{BCl3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bcl3" } },
      options: [
        { key: "A", text: t`tetrahedral`, correct: false, misconceptionId: "C06-M9", value: "tetrahedral" },
        { key: "B", text: t`angular`, correct: false, misconceptionId: "C06-M7", value: "angular" },
        { key: "C", text: t`linear`, correct: false, misconceptionId: "C06-M8", value: "linear" },
        { key: "D", text: t`trigonal planar`, correct: true, value: "trigonal_planar" },
      ],
      solution: {
        steps: [
          t`B has three bond pairs.`,
          t`Trigonal planar.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.7 (A)" },
      stem: t`Orthophosphoric acid, $\ce{H3PO4}$, has`,
      verify: { kind: "value", inputs: {  }, params: { q: "h3po4" } },
      options: [
        { key: "A", text: t`one P=O group and three P–OH groups`, correct: true, value: "one_po_three_oh" },
        { key: "B", text: t`a P–P bond`, correct: false, misconceptionId: "C06-M12", value: "p_p_bond" },
        { key: "C", text: t`four P–OH groups`, correct: false, misconceptionId: "C06-M10", value: "four_oh" },
        { key: "D", text: t`three P–H bonds`, correct: false, misconceptionId: "C06-M11", value: "p_h_bonds" },
      ],
      solution: {
        steps: [
          t`P carries one =O and three OH.`,
          t`Tribasic acid.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.7 (B)" },
      stem: t`In $\ce{HNO3}$ the two N–O bonds not bonded to H have equal lengths because`,
      verify: { kind: "value", inputs: {  }, params: { q: "hno3" } },
      options: [
        { key: "A", text: t`both are single bonds`, correct: false, misconceptionId: "C06-M13", value: "both_single" },
        { key: "B", text: t`of resonance between two structures`, correct: true, value: "resonance" },
        { key: "C", text: t`nitrogen forms five bonds`, correct: false, misconceptionId: "C06-M14", value: "five_bonds" },
        { key: "D", text: t`both are double bonds`, correct: false, misconceptionId: "C06-M15", value: "both_double" },
      ],
      solution: {
        steps: [
          t`Two Lewis structures differ in which O is double-bonded.`,
          t`Resonance makes the bonds equal.`,
        ],
      },
    },
  ],
};
