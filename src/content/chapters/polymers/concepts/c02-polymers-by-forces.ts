import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A rubber band stretches and snaps back. A nylon thread barely stretches. A plastic bottle softens in hot water. A Bakelite switch stays hard in a flame. Why do polymers behave so differently?`,
    reveal: t`The forces between their chains differ, from weak to very strong, and some have permanent cross-links.`,
  },
  explanation: {
    intuition: [
      t`Polymers are also classed by the forces between their chains.`,
      t`Weak forces let chains slide and spring back: **elastomers**.`,
      t`Strong forces hold chains rigidly side by side: **fibres**.`,
      t`In between: **thermoplastics**, which soften on heating, and **thermosetting** polymers, which set for good.`,
    ],
    formal: [
      {
        title: "Four classes",
        points: [
          t`**Elastomers**: weakest van der Waals forces; stretch and recover. Natural rubber, Buna-S, neoprene.`,
          t`**Fibres**: strongest forces (H bonds, dipole forces); high tensile strength. Nylon, terylene.`,
          t`**Thermoplastics**: intermediate forces; soften on heating, harden on cooling, again and again. Polythene, PVC, PET.`,
          t`**Thermosetting polymers**: cross-link on heating and set permanently. Bakelite, urea- and melamine-formaldehyde.`,
        ],
      },
    ],
    worked: {
      prompt: t`Polystyrene softens when heated and can be moulded again. Classify it.`,
      steps: [
        t`It softens on heating, repeatedly.`,
        t`No cross-links form.`,
      ],
      answer: t`A thermoplastic`,
    },
    visualSpec: t`Heat and stretch each kind of polymer and watch how its chains respond.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Reverses the order of forces.",
      remediation: "Elastomers have the weakest forces; fibres the strongest.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Thinks thermoplastics have the strongest forces.",
      remediation: "Thermoplastics have intermediate forces; fibres have the strongest.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Counts cross-links as intermolecular forces.",
      remediation: "Cross-links are covalent bonds; among forces between chains, fibres' are strongest.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks condensation polymers are thermosetting.",
      remediation: "PET is a condensation polymer, yet a thermoplastic.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks any rigid plastic is thermosetting.",
      remediation: "Rigid PVC still softens on heating: a thermoplastic.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Thinks thermosetting polymers melt on heating.",
      remediation: "Thermosets cross-link and stay hard; polythene melts.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Confuses elastomers with thermoplastics.",
      remediation: "Softening on heating marks a thermoplastic; elastomers stretch and recover.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Confuses elastomers with thermosetting polymers.",
      remediation: "Rigid networks are thermosets; elastomers are flexible.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Reverses thermoplastic and thermosetting.",
      remediation: "Thermoplastics soften on heating; thermosets set permanently.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Gives thermoplastics cross-links.",
      remediation: "Thermoplastics have no cross-links, which is why they soften.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks thermoplastics are always copolymers.",
      remediation: "Polythene is a homopolymer and a thermoplastic.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Credits weak van der Waals forces.",
      remediation: "Weak forces give elastomers; nylon's chains are held by strong hydrogen bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Credits covalent cross-links.",
      remediation: "Nylon fibres are not cross-linked; hydrogen bonds hold the chains.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Credits being a copolymer.",
      remediation: "Nylon 6 is a homopolymer and also a fibre; hydrogen bonds matter.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#7" },
      stem: t`Which class of polymers has the strongest intermolecular forces?`,
      verify: { kind: "value", inputs: {  }, params: { q: "strongest" } },
      options: [
        { key: "A", text: t`elastomers`, correct: false, misconceptionId: "C02-M1", value: "elastomers" },
        { key: "B", text: t`fibres`, correct: true, value: "fibres" },
        { key: "C", text: t`thermoplastics`, correct: false, misconceptionId: "C02-M2", value: "thermoplastics" },
        { key: "D", text: t`thermosetting polymers`, correct: false, misconceptionId: "C02-M3", value: "thermosetting" },
      ],
      solution: {
        steps: [
          t`Fibres have hydrogen bonds or strong dipole forces.`,
          t`Theirs are the strongest.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.2 (ix)" },
      stem: t`Which of these is a thermosetting polymer?`,
      verify: { kind: "value", inputs: {  }, params: { q: "thermoset" } },
      options: [
        { key: "A", text: t`PET`, correct: false, misconceptionId: "C02-M4", value: "pet" },
        { key: "B", text: t`PVC`, correct: false, misconceptionId: "C02-M5", value: "pvc" },
        { key: "C", text: t`phenol-formaldehyde resin (Bakelite)`, correct: true, value: "bakelite" },
        { key: "D", text: t`polythene`, correct: false, misconceptionId: "C02-M6", value: "polythene" },
      ],
      solution: {
        steps: [
          t`Phenol-formaldehyde resin cross-links on heating.`,
          t`It sets for good: thermosetting.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#4" },
      stem: t`Elastomers are polymers`,
      verify: { kind: "value", inputs: {  }, params: { q: "elastomer" } },
      options: [
        { key: "A", text: t`that form rigid three-dimensional networks`, correct: false, misconceptionId: "C02-M8", value: "rigid_network" },
        { key: "B", text: t`that soften on heating and can be remoulded`, correct: false, misconceptionId: "C02-M7", value: "remouldable" },
        { key: "C", text: t`with the strongest intermolecular forces`, correct: false, misconceptionId: "C02-M1", value: "strongest" },
        { key: "D", text: t`with the weakest intermolecular forces, which stretch and spring back`, correct: true, value: "weakest_stretch" },
      ],
      solution: {
        steps: [
          t`Elastomers have the weakest forces.`,
          t`Their chains stretch and spring back.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.3 (xi)" },
      stem: t`Thermoplastic polymers differ from thermosetting ones in that thermoplastics`,
      verify: { kind: "value", inputs: {  }, params: { q: "thermoplastic" } },
      options: [
        { key: "A", text: t`soften on heating and can be remoulded again and again`, correct: true, value: "remould" },
        { key: "B", text: t`are always copolymers`, correct: false, misconceptionId: "C02-M11", value: "copolymers" },
        { key: "C", text: t`set permanently on heating`, correct: false, misconceptionId: "C02-M9", value: "set_permanently" },
        { key: "D", text: t`have strong cross-links between chains`, correct: false, misconceptionId: "C02-M10", value: "cross_links" },
      ],
      solution: {
        steps: [
          t`Thermoplastics have no cross-links.`,
          t`They soften on heating and can be remoulded.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.3 (i)" },
      stem: t`Nylon is a fibre with high tensile strength because of`,
      verify: { kind: "value", inputs: {  }, params: { q: "nylon" } },
      options: [
        { key: "A", text: t`its being a copolymer`, correct: false, misconceptionId: "C02-M14", value: "copolymer" },
        { key: "B", text: t`strong hydrogen bonds between its chains`, correct: true, value: "h_bonds" },
        { key: "C", text: t`weak van der Waals forces between its chains`, correct: false, misconceptionId: "C02-M12", value: "van_der_waals" },
        { key: "D", text: t`covalent cross-links between its chains`, correct: false, misconceptionId: "C02-M13", value: "cross_links" },
      ],
      solution: {
        steps: [
          t`Nylon's $\ce{-CO-NH-}$ groups hydrogen bond between chains.`,
          t`So its fibres are strong.`,
        ],
      },
    },
  ],
};
