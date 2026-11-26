import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Millions of carbon compounds exist, built on long carbon chains. Silicon, right below carbon, forms only short chains. What does carbon have that silicon lacks?`,
    reveal: t`Strong C–C bonds. Carbon atoms are small and bond strongly to each other; Si–Si bonds are weaker.`,
  },
  explanation: {
    intuition: [
      t`**Catenation** is an element's atoms bonding to one another into chains and rings.`,
      t`Carbon catenates far more than any other element.`,
      t`Small C and N also form strong π bonds.`,
      t`Larger atoms form weak π bonds and prefer single bonds.`,
    ],
    formal: [
      {
        title: "Catenation",
        points: [
          t`C–C bond enthalpy (348 kJ/mol) far exceeds Si–Si (about 222).`,
          t`Catenation falls sharply down group 14.`,
        ],
      },
      {
        title: "π bonds",
        points: [
          t`C and N form strong $p\pi$–$p\pi$ bonds: C=C, C≡C, N≡N.`,
          t`P, Si and heavier atoms overlap poorly sideways.`,
          t`So $\ce{N2}$ is diatomic but phosphorus is $\ce{P4}$; $\ce{CO2}$ is molecular but $\ce{SiO2}$ a network.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is $\ce{N2}$ unreactive at room temperature?`,
      steps: [
        t`N≡N is one σ and two strong π bonds.`,
        t`Its bond enthalpy is very high: 946 kJ/mol.`,
      ],
      answer: t`Its very strong triple bond`,
    },
    visualSpec: t`Bring pairs of small and large p orbitals side by side and compare their overlap.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Gives silicon more valence electrons.",
      remediation: "Both have four; the bond strength differs.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Calls carbon larger.",
      remediation: "Carbon is smaller, which strengthens its bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Denies silicon p orbitals.",
      remediation: "Si has 3p orbitals; its Si–Si bond is weaker.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks phosphorus.",
      remediation: "P's large orbitals overlap poorly sideways.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks silicon.",
      remediation: "Si forms weak π bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks lead.",
      remediation: "Heavy metals do not form strong π bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Calls phosphorus a metal.",
      remediation: "P is a nonmetal; its size limits π bonding.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Calls nitrogen larger.",
      remediation: "Nitrogen is smaller, so its p orbitals overlap well.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Denies phosphorus lone pairs.",
      remediation: t`Each P in $\ce{P4}$ has a lone pair.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Credits hydrogen bonds.",
      remediation: t`$\ce{SiO2}$ has no H; it is a covalent network.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Calls silicon more electronegative.",
      remediation: "Si is less electronegative than C.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Calls $\ce{CO2}$ ionic.`,
      remediation: t`$\ce{CO2}$ is covalent and molecular.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Confuses catenation with oxidation.",
      remediation: "Catenation is self-linking of atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Confuses it with ion formation.",
      remediation: "Catenation is covalent bonding between like atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Confuses it with allotropy.",
      remediation: "Allotropes are forms of an element; catenation is chain forming.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.15 (B)" },
      stem: t`Carbon shows far more catenation than silicon because`,
      verify: { kind: "value", inputs: {  }, params: { q: "c_si" } },
      options: [
        { key: "A", text: t`carbon atoms are larger`, correct: false, misconceptionId: "C04-M2", value: "c_larger" },
        { key: "B", text: t`the C–C bond is much stronger than the Si–Si bond`, correct: true, value: "strong_c_c" },
        { key: "C", text: t`silicon has no p orbitals`, correct: false, misconceptionId: "C04-M3", value: "si_no_p" },
        { key: "D", text: t`silicon has more valence electrons`, correct: false, misconceptionId: "C04-M1", value: "si_more_electrons" },
      ],
      solution: {
        steps: [
          t`C–C bonds are strong; Si–Si bonds weaker.`,
          t`Carbon catenates more.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.2 (D)" },
      stem: t`Which element forms strong $p\pi$–$p\pi$ multiple bonds?`,
      verify: { kind: "value", inputs: {  }, params: { q: "pi_bonds" } },
      options: [
        { key: "A", text: t`phosphorus`, correct: false, misconceptionId: "C04-M4", value: "phosphorus" },
        { key: "B", text: t`silicon`, correct: false, misconceptionId: "C04-M5", value: "silicon" },
        { key: "C", text: t`nitrogen`, correct: true, value: "nitrogen" },
        { key: "D", text: t`lead`, correct: false, misconceptionId: "C04-M6", value: "lead" },
      ],
      solution: {
        steps: [
          t`Small N atoms overlap well sideways.`,
          t`Nitrogen forms strong π bonds.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`Nitrogen exists as $\ce{N2}$ but phosphorus as $\ce{P4}$ because`,
      verify: { kind: "value", inputs: {  }, params: { q: "n2_p4" } },
      options: [
        { key: "A", text: t`nitrogen atoms are larger`, correct: false, misconceptionId: "C04-M8", value: "n_larger" },
        { key: "B", text: t`phosphorus has no lone pairs`, correct: false, misconceptionId: "C04-M9", value: "p_no_lone_pairs" },
        { key: "C", text: t`phosphorus is a metal`, correct: false, misconceptionId: "C04-M7", value: "p_metal" },
        { key: "D", text: t`small N atoms form a strong N≡N bond; large P atoms form weak π bonds, so P bonds singly`, correct: true, value: "triple_vs_weak_pi" },
      ],
      solution: {
        steps: [
          t`N forms N≡N; P's π bonds are weak.`,
          t`P forms single-bonded $\ce{P4}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`$\ce{CO2}$ is a gas but $\ce{SiO2}$ a hard solid because`,
      verify: { kind: "value", inputs: {  }, params: { q: "co2_sio2" } },
      options: [
        { key: "A", text: t`C forms C=O π bonds giving small molecules; Si forms single Si–O bonds in a network`, correct: true, value: "pi_vs_network" },
        { key: "B", text: t`silicon is more electronegative`, correct: false, misconceptionId: "C04-M11", value: "si_electronegative" },
        { key: "C", text: t`$\ce{CO2}$ is ionic`, correct: false, misconceptionId: "C04-M12", value: "co2_ionic" },
        { key: "D", text: t`$\ce{SiO2}$ has hydrogen bonds`, correct: false, misconceptionId: "C04-M10", value: "hydrogen_bonds" },
      ],
      solution: {
        steps: [
          t`C=O gives separate $\ce{CO2}$ molecules.`,
          t`Si forms Si–O single bonds in a giant network.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.15 (B)" },
      stem: t`Catenation means`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`an element having several allotropes`, correct: false, misconceptionId: "C04-M15", value: "allotropes" },
        { key: "B", text: t`atoms of an element bonding to one another in chains or rings`, correct: true, value: "self_chains" },
        { key: "C", text: t`an element combining with oxygen`, correct: false, misconceptionId: "C04-M13", value: "with_oxygen" },
        { key: "D", text: t`an element forming ions`, correct: false, misconceptionId: "C04-M14", value: "forms_ions" },
      ],
      solution: {
        steps: [
          t`Atoms of one element link to each other.`,
          t`In chains or rings.`,
        ],
      },
    },
  ],
};
