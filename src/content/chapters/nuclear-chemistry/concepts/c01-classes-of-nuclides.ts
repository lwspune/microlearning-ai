import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Tritium has 1 proton and 2 neutrons; helium-3 has 2 protons and 1 neutron. They look like reflections of each other. Is there a name for such a pair?`,
    reveal: t`Yes: mirror nuclei. Nuclides are grouped by which of $Z$, $A$ and $N$ they share.`,
  },
  explanation: {
    intuition: [
      t`A nuclide is described by $Z$ (protons), $N$ (neutrons) and $A = Z + N$.`,
      t`Nuclides sharing one of these numbers get special names.`,
      t`Isotopes share $Z$; isobars share $A$; isotones share $N$.`,
      t`Mirror nuclei swap their proton and neutron numbers.`,
    ],
    formal: [
      {
        title: "Classes",
        points: [
          t`Isotopes: $^{12}\mathrm{C}$, $^{13}\mathrm{C}$ (same $Z$).`,
          t`Isobars: $^{14}\mathrm{C}$, $^{14}\mathrm{N}$ (same $A$).`,
          t`Isotones: $^{27}\mathrm{Al}$, $^{28}\mathrm{Si}$ (14 neutrons each).`,
          t`Mirror nuclei: $^{3}\mathrm{H}$ (1p, 2n) and $^{3}\mathrm{He}$ (2p, 1n).`,
        ],
      },
    ],
    worked: {
      prompt: t`Classify $^{39}_{19}\mathrm{K}$ and $^{40}_{20}\mathrm{Ca}$.`,
      steps: [
        t`K: 39 − 19 = 20 neutrons; Ca: 40 − 20 = 20.`,
        t`Same neutron number.`,
      ],
      answer: t`Isotones`,
    },
    visualSpec: t`Place nuclides on a grid of protons against neutrons and trace rows, columns and diagonals.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks isotopes.",
      remediation: t`$^{12}\mathrm{C}$ and $^{13}\mathrm{C}$ share Z; mirror nuclei swap Z and N.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks isobars.",
      remediation: t`$^{14}\mathrm{C}$ (6p, 8n) and $^{14}\mathrm{N}$ (7p, 7n) do not swap numbers.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks isotones.",
      remediation: t`$^{14}\mathrm{C}$ and $^{16}\mathrm{O}$ share N only.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Calls isotones isotopes.",
      remediation: "Al and Si have different Z.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Calls them isobars.",
      remediation: "A = 27 and 28 differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Calls them mirror nuclei.",
      remediation: "Al: 13p, 14n; Si: 14p, 14n. Not swapped.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says atomic number.",
      remediation: "Same Z means isotopes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says neutron number.",
      remediation: "Same N means isotones.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Describes mirror nuclei.",
      remediation: "Isobars simply share A.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Calls them isotopes.",
      remediation: "Z = 6 and 7 differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Calls them isotones.",
      remediation: "N = 7 and 6 differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Calls them isoelectronic.",
      remediation: "These are nuclei; electrons are not compared.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Gives Z.",
      remediation: "Neutrons = A − Z = 235 − 92.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Gives A.",
      remediation: "Subtract the protons from A.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Adds A and Z.",
      remediation: "Neutrons = A − Z.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (A)" },
      stem: t`Which pair are mirror nuclei?`,
      verify: { kind: "value", inputs: {  }, params: { q: "mirror" } },
      options: [
        { key: "A", text: t`$^{14}_{6}\mathrm{C}$ and $^{16}_{8}\mathrm{O}$`, correct: false, misconceptionId: "C01-M3", value: "c14_o16" },
        { key: "B", text: t`$^{12}_{6}\mathrm{C}$ and $^{13}_{6}\mathrm{C}$`, correct: false, misconceptionId: "C01-M1", value: "c12_c13" },
        { key: "C", text: t`$^{14}_{6}\mathrm{C}$ and $^{14}_{7}\mathrm{N}$`, correct: false, misconceptionId: "C01-M2", value: "c14_n14" },
        { key: "D", text: t`$^{3}_{1}\mathrm{H}$ and $^{3}_{2}\mathrm{He}$`, correct: true, value: "h3_he3" },
      ],
      solution: {
        steps: [
          t`$^{3}\mathrm{H}$: 1p, 2n; $^{3}\mathrm{He}$: 2p, 1n.`,
          t`Swapped: mirror nuclei.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/nuclear-chemistry-11-chem/Ex Q.3 (G)" },
      stem: t`$^{27}_{13}\mathrm{Al}$ and $^{28}_{14}\mathrm{Si}$ are`,
      verify: { kind: "value", inputs: {  }, params: { q: "al_si" } },
      options: [
        { key: "A", text: t`isotones`, correct: true, value: "isotones" },
        { key: "B", text: t`isotopes`, correct: false, misconceptionId: "C01-M4", value: "isotopes" },
        { key: "C", text: t`isobars`, correct: false, misconceptionId: "C01-M5", value: "isobars" },
        { key: "D", text: t`mirror nuclei`, correct: false, misconceptionId: "C01-M6", value: "mirror_nuclei" },
      ],
      solution: {
        steps: [
          t`Al: 27 − 13 = 14 n; Si: 28 − 14 = 14 n.`,
          t`Isotones.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`Isobars have the same`,
      verify: { kind: "value", inputs: {  }, params: { q: "isobars" } },
      options: [
        { key: "A", text: t`number of neutrons`, correct: false, misconceptionId: "C01-M8", value: "neutron_number" },
        { key: "B", text: t`mass number`, correct: true, value: "mass_number" },
        { key: "C", text: t`numbers of protons and neutrons, swapped`, correct: false, misconceptionId: "C01-M9", value: "swapped" },
        { key: "D", text: t`atomic number`, correct: false, misconceptionId: "C01-M7", value: "atomic_number" },
      ],
      solution: {
        steps: [
          t`Iso-bar: same weight.`,
          t`Same mass number.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`$^{13}_{6}\mathrm{C}$ (6 p, 7 n) and $^{13}_{7}\mathrm{N}$ (7 p, 6 n) are`,
      verify: { kind: "value", inputs: {  }, params: { q: "c13_n13" } },
      options: [
        { key: "A", text: t`isotones`, correct: false, misconceptionId: "C01-M11", value: "isotones" },
        { key: "B", text: t`isotopes`, correct: false, misconceptionId: "C01-M10", value: "isotopes" },
        { key: "C", text: t`mirror nuclei`, correct: true, value: "mirror_nuclei" },
        { key: "D", text: t`isoelectronic species`, correct: false, misconceptionId: "C01-M12", value: "isoelectronic" },
      ],
      solution: {
        steps: [
          t`6p, 7n and 7p, 6n.`,
          t`Swapped numbers: mirror nuclei.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`How many neutrons are there in $^{235}_{92}\mathrm{U}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "uranium" } },
      options: [
        { key: "A", text: t`327`, correct: false, misconceptionId: "C01-M15", value: "n_327" },
        { key: "B", text: t`92`, correct: false, misconceptionId: "C01-M13", value: "n_92" },
        { key: "C", text: t`235`, correct: false, misconceptionId: "C01-M14", value: "n_235" },
        { key: "D", text: t`143`, correct: true, value: "n_143" },
      ],
      solution: {
        steps: [
          t`N = A − Z.`,
          t`235 − 92 = 143.`,
        ],
      },
    },
  ],
};
