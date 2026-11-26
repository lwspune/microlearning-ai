import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Old electric switches and pan handles were made of a dark, hard plastic that never softened, even when hot. What was it, and why did it never melt?`,
    reveal: t`Bakelite. When it is made, its chains are cross-linked into one rigid network, so heat cannot make them slide.`,
  },
  explanation: {
    intuition: [
      t`Phenol and formaldehyde condense, losing water.`,
      t`First they form linear chains, **Novolac**.`,
      t`On further heating with formaldehyde, the chains cross-link into **Bakelite**.`,
      t`Similar resins come from melamine and formaldehyde.`,
    ],
    formal: [
      {
        title: "Phenol-formaldehyde",
        points: [
          t`Phenol + HCHO (acid or base) → o- and p-hydroxymethylphenol.`,
          t`These condense into linear Novolac, used in paints.`,
          t`Heating with more HCHO cross-links Novolac into Bakelite.`,
          t`Bakelite: thermosetting; for switches, handles and combs.`,
        ],
      },
      {
        title: "Other resins",
        points: [
          t`Melamine-formaldehyde: unbreakable crockery.`,
          t`Glyptal (ethylene glycol + phthalic acid): paints and lacquers.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is Bakelite a thermoplastic or a thermosetting polymer?`,
      steps: [
        t`Its chains are cross-linked into a network.`,
        t`Heat cannot make them slide.`,
      ],
      answer: t`Thermosetting`,
    },
    visualSpec: t`Link phenol rings with $\ce{CH2}$ bridges, first in a line, then in every direction.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Swaps formaldehyde for benzaldehyde.",
      remediation: "Bakelite uses formaldehyde, HCHO, the simplest aldehyde.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Swaps formaldehyde for acetaldehyde.",
      remediation: t`Bakelite uses formaldehyde: its $\ce{CH2}$ bridges link the rings.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Swaps phenol for benzyl alcohol.",
      remediation: t`Phenol's activated ring takes the $\ce{CH2}$ bridges.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks Novolac is the final cross-linked resin.",
      remediation: "Novolac is linear; more heating with HCHO cross-links it into Bakelite.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks Novolac is a polyamide.",
      remediation: "Novolac contains no amide links; it is a phenol-formaldehyde polymer.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks Novolac is a rubber.",
      remediation: "Novolac is a phenol-formaldehyde resin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Credits weak van der Waals forces.",
      remediation: "Weak forces would let it soften; covalent cross-links stop that.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks Bakelite is linear.",
      remediation: "Linear chains could slide when hot; Bakelite is cross-linked.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks Bakelite has no oxygen.",
      remediation: "Its phenol units carry OH groups; the network, not the elements, makes it rigid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Confuses melamine resin with rubber.",
      remediation: "Tyres are made of rubber; melamine resin makes hard crockery.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Confuses melamine resin with nylon.",
      remediation: "Clothing fibres are nylon or polyester; melamine resin is a hard thermoset.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Confuses melamine resin with Teflon.",
      remediation: "Teflon gives non-stick coatings; melamine resin makes crockery.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Confuses glyptal with Nomex.",
      remediation: "Nomex is a heat-resistant fibre; glyptal is used in paints.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Confuses glyptal with Thiokol.",
      remediation: "Thiokol is a synthetic rubber; glyptal is used in paints.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Confuses glyptal with Saran.",
      remediation: "Saran is a packaging film; glyptal is used in paints.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#15" },
      stem: t`Bakelite is a polymer of`,
      verify: { kind: "value", inputs: {  }, params: { q: "bakelite" } },
      options: [
        { key: "A", text: t`benzaldehyde and phenol`, correct: false, misconceptionId: "C06-M1", value: "benzaldehyde_phenol" },
        { key: "B", text: t`formaldehyde and phenol`, correct: true, value: "formaldehyde_phenol" },
        { key: "C", text: t`formaldehyde and benzyl alcohol`, correct: false, misconceptionId: "C06-M3", value: "formaldehyde_benzyl_alcohol" },
        { key: "D", text: t`acetaldehyde and phenol`, correct: false, misconceptionId: "C06-M2", value: "acetaldehyde_phenol" },
      ],
      solution: {
        steps: [
          t`Bakelite forms from phenol and formaldehyde.`,
          t`$\ce{CH2}$ bridges link the phenol rings.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.2 (ii)" },
      stem: t`Novolac is`,
      verify: { kind: "value", inputs: {  }, params: { q: "novolac" } },
      options: [
        { key: "A", text: t`a polyamide`, correct: false, misconceptionId: "C06-M5", value: "polyamide" },
        { key: "B", text: t`the final, fully cross-linked phenol-formaldehyde resin`, correct: false, misconceptionId: "C06-M4", value: "final_resin" },
        { key: "C", text: t`a linear phenol-formaldehyde polymer that cross-links to Bakelite on heating`, correct: true, value: "linear_intermediate" },
        { key: "D", text: t`a synthetic rubber`, correct: false, misconceptionId: "C06-M6", value: "rubber" },
      ],
      solution: {
        steps: [
          t`Novolac is the linear stage.`,
          t`Heating with more HCHO cross-links it into Bakelite.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.3 (xi)" },
      stem: t`Bakelite cannot be softened and remoulded because`,
      verify: { kind: "value", inputs: {  }, params: { q: "thermoset" } },
      options: [
        { key: "A", text: t`it contains no oxygen`, correct: false, misconceptionId: "C06-M9", value: "no_oxygen" },
        { key: "B", text: t`its chains are held only by weak van der Waals forces`, correct: false, misconceptionId: "C06-M7", value: "van_der_waals" },
        { key: "C", text: t`its chains are linear`, correct: false, misconceptionId: "C06-M8", value: "linear" },
        { key: "D", text: t`its chains are cross-linked into a three-dimensional network`, correct: true, value: "network" },
      ],
      solution: {
        steps: [
          t`Bakelite's chains are cross-linked.`,
          t`The network cannot soften or flow.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.3 (x)" },
      stem: t`Melamine-formaldehyde resin is mainly used to make`,
      verify: { kind: "value", inputs: {  }, params: { q: "melamine" } },
      options: [
        { key: "A", text: t`unbreakable crockery`, correct: true, value: "crockery" },
        { key: "B", text: t`non-stick coatings`, correct: false, misconceptionId: "C06-M12", value: "non_stick" },
        { key: "C", text: t`tyres`, correct: false, misconceptionId: "C06-M10", value: "tyres" },
        { key: "D", text: t`fibres for clothing`, correct: false, misconceptionId: "C06-M11", value: "clothing" },
      ],
      solution: {
        steps: [
          t`Melamine-formaldehyde resin is hard and tough.`,
          t`It makes unbreakable crockery.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#17" },
      stem: t`A polymer used in paints and lacquers is`,
      verify: { kind: "value", inputs: {  }, params: { q: "paint" } },
      options: [
        { key: "A", text: t`Nomex`, correct: false, misconceptionId: "C06-M13", value: "nomex" },
        { key: "B", text: t`glyptal`, correct: true, value: "glyptal" },
        { key: "C", text: t`Thiokol`, correct: false, misconceptionId: "C06-M14", value: "thiokol" },
        { key: "D", text: t`Saran`, correct: false, misconceptionId: "C06-M15", value: "saran" },
      ],
      solution: {
        steps: [
          t`Glyptal is a polyester resin.`,
          t`It forms tough films in paints and lacquers.`,
        ],
      },
    },
  ],
};
