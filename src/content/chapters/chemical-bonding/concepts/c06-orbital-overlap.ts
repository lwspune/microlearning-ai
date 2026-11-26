import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A double bond is not simply two single bonds: C=C (612 kJ/mol) is less than twice C–C (348). Why is the second bond weaker?`,
    reveal: t`The first is a σ bond from head-on overlap. The second is a π bond from sideways overlap, which overlaps less.`,
  },
  explanation: {
    intuition: [
      t`A covalent bond forms where two half-filled orbitals overlap.`,
      t`The shared pair sits in the overlap region, between the nuclei.`,
      t`Head-on overlap gives a strong **σ bond**.`,
      t`Sideways overlap of p orbitals gives a weaker **π bond**.`,
    ],
    formal: [
      {
        title: "σ and π bonds",
        points: [
          t`σ: head-on overlap (s–s, s–p, p–p); electron density on the axis.`,
          t`π: sideways overlap of parallel p orbitals; density above and below.`,
          t`A single bond is σ; a double bond σ + π; a triple bond σ + 2π.`,
          t`Head-on overlap is greater, so σ bonds are stronger.`,
        ],
      },
      {
        title: "Examples",
        points: [
          t`$\ce{H2}$: 1s–1s; HF: H 1s with F 2p; $\ce{F2}$: 2p–2p, all head-on.`,
          t`Overlapping orbitals point in definite directions, so covalent bonds are directional.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many σ and π bonds are in ethene, $\ce{CH2=CH2}$?`,
      steps: [
        t`Four C–H σ bonds and one C=C (σ + π).`,
        t`5 σ and 1 π.`,
      ],
      answer: t`5 σ, 1 π`,
    },
    visualSpec: t`Bring two orbitals together end-on and side-on and compare how much they overlap.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Takes head-on s–s overlap for π.",
      remediation: "Head-on overlap gives σ; π needs sideways p overlap.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Takes head-on p–p overlap for π.",
      remediation: "Head-on p–p overlap gives a σ bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Takes s–p overlap for π.",
      remediation: "s–p overlap is head-on: σ.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks σ bonds hold more electrons.",
      remediation: "Each holds one pair; σ overlaps more.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks π bonds are ionic.",
      remediation: "π bonds are shared pairs: covalent.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks σ bonds are longer.",
      remediation: "Strength comes from the greater head-on overlap.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Uses F's 2s orbital.",
      remediation: "F's half-filled orbital is a 2p.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks two p orbitals overlap.",
      remediation: "H has only a 1s orbital.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks the overlap is sideways.",
      remediation: "s–p overlap is head-on: σ.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Swaps the counts.",
      remediation: "Two C–H σ plus one σ in C≡C: 3 σ; the triple bond adds 2 π.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Counts every bond as σ.",
      remediation: "A triple bond is one σ and two π.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Forgets the C–H bonds.",
      remediation: "Count both C–H σ bonds too: 3 σ in all.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Credits one-way electron transfer.",
      remediation: "Bonds are directional because orbitals have direction.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Thinks repulsion is equal in all directions.",
      remediation: "Overlap happens only along the orbitals' directions.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Thinks ionic bonds are directional too.",
      remediation: "Ionic attraction acts equally in all directions.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (F)" },
      stem: t`A π bond is formed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "pi" } },
      options: [
        { key: "A", text: t`head-on overlap of s orbitals`, correct: false, misconceptionId: "C06-M1", value: "head_on_s" },
        { key: "B", text: t`sideways overlap of p orbitals`, correct: true, value: "sideways_p" },
        { key: "C", text: t`overlap of an s and a p orbital`, correct: false, misconceptionId: "C06-M3", value: "s_p" },
        { key: "D", text: t`head-on overlap of p orbitals`, correct: false, misconceptionId: "C06-M2", value: "head_on_p" },
      ],
      solution: {
        steps: [
          t`Parallel p orbitals overlap side by side.`,
          t`That gives a π bond.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (H)" },
      stem: t`A σ bond is stronger than a π bond because`,
      verify: { kind: "value", inputs: {  }, params: { q: "sigma_stronger" } },
      options: [
        { key: "A", text: t`π bonds are ionic`, correct: false, misconceptionId: "C06-M5", value: "pi_ionic" },
        { key: "B", text: t`a σ bond holds more electrons`, correct: false, misconceptionId: "C06-M4", value: "more_electrons" },
        { key: "C", text: t`head-on overlap is greater than sideways overlap`, correct: true, value: "greater_overlap" },
        { key: "D", text: t`σ bonds are longer`, correct: false, misconceptionId: "C06-M6", value: "sigma_longer" },
      ],
      solution: {
        steps: [
          t`Head-on overlap is larger.`,
          t`More overlap, stronger bond.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (J)" },
      stem: t`The H–F bond forms by overlap of`,
      verify: { kind: "value", inputs: {  }, params: { q: "hf" } },
      options: [
        { key: "A", text: t`the H 1s orbital with an F 2p orbital, sideways`, correct: false, misconceptionId: "C06-M9", value: "sideways" },
        { key: "B", text: t`the H 1s orbital with the F 2s orbital`, correct: false, misconceptionId: "C06-M7", value: "h1s_f2s" },
        { key: "C", text: t`two p orbitals`, correct: false, misconceptionId: "C06-M8", value: "p_p" },
        { key: "D", text: t`the H 1s orbital with an F 2p orbital, head-on`, correct: true, value: "h1s_f2p" },
      ],
      solution: {
        steps: [
          t`H uses 1s; F uses a half-filled 2p.`,
          t`They overlap head-on.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (M)" },
      stem: t`How many σ and π bonds are there in ethyne, H–C≡C–H?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ethyne" } },
      options: [
        { key: "A", text: t`3 σ and 2 π`, correct: true, value: "s3_p2" },
        { key: "B", text: t`1 σ and 2 π`, correct: false, misconceptionId: "C06-M12", value: "s1_p2" },
        { key: "C", text: t`2 σ and 3 π`, correct: false, misconceptionId: "C06-M10", value: "s2_p3" },
        { key: "D", text: t`5 σ and no π`, correct: false, misconceptionId: "C06-M11", value: "s5_p0" },
      ],
      solution: {
        steps: [
          t`Two C–H σ; C≡C has 1 σ and 2 π.`,
          t`3 σ and 2 π.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (D)" },
      stem: t`Covalent bonds are directional because`,
      verify: { kind: "value", inputs: {  }, params: { q: "directional" } },
      options: [
        { key: "A", text: t`electrons are transferred in one direction`, correct: false, misconceptionId: "C06-M13", value: "one_way_transfer" },
        { key: "B", text: t`the overlapping orbitals point in definite directions`, correct: true, value: "orbitals_point" },
        { key: "C", text: t`the nuclei repel equally in all directions`, correct: false, misconceptionId: "C06-M14", value: "equal_repulsion" },
        { key: "D", text: t`ionic bonds are directional too`, correct: false, misconceptionId: "C06-M15", value: "ionic_too" },
      ],
      solution: {
        steps: [
          t`Orbitals have definite directions.`,
          t`Bonds form along them.`,
        ],
      },
    },
  ],
};
