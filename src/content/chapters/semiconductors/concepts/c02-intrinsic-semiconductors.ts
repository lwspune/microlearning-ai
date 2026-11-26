import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A crystal of perfectly pure silicon is a poor conductor when cold, yet it conducts better and better as it warms. And it does so with two kinds of carrier, one of which is not a particle at all. What is it?`,
    reveal: t`A **hole**: the empty place left in a bond when heat frees an electron. Neighbouring electrons hop into it, so the hole moves like a positive charge.`,
  },
  explanation: {
    intuition: [
      t`In a silicon or germanium crystal, each atom shares its four valence electrons with four neighbours in **covalent bonds**.`,
      t`Heat breaks a few bonds; each freed electron leaves a vacancy, a **hole**.`,
      t`Electrons and holes are made in pairs, so in a pure crystal their numbers are equal.`,
      t`Under a voltage, electrons drift one way and holes the other: both carry current.`,
    ],
    formal: [
      {
        title: "Intrinsic semiconductors",
        points: [
          t`An **intrinsic** semiconductor is a pure crystal of Si or Ge, with no impurity.`,
          t`Electrons and holes are made in pairs, so $n_e = n_h = n_i$, the **intrinsic carrier density**.`,
          t`The total number of free carriers is $n_e + n_h = 2n_i$.`,
        ],
      },
      {
        title: "Holes",
        points: [
          t`A **hole** is the vacancy in a covalent bond left by an electron that has broken free.`,
          t`It behaves as a positive charge $+e$.`,
          t`A hole moves when an electron from a neighbouring bond jumps into it, leaving a new vacancy behind.`,
          t`Under a field, holes drift towards the negative terminal, opposite to the electrons.`,
        ],
      },
      {
        title: "Conduction",
        points: [
          t`The total current is the electron current plus the hole current: $I = I_e + I_h$.`,
          t`Raising the temperature breaks more bonds, so $n_i$ and the conductivity rise steeply.`,
        ],
      },
    ],
    worked: {
      prompt: t`A pure germanium crystal at room temperature has $2.4 \times 10^{19}$ holes per $\mathrm{m^3}$. How many conduction electrons does it have, and how many free carriers in all?`,
      steps: [
        t`In a pure crystal, electrons and holes are made in pairs: $n_e = n_h$ $= 2.4 \times 10^{19}\ \mathrm{m^{-3}}$.`,
        t`Total carriers $= n_e + n_h$ $= 4.8 \times 10^{19}\ \mathrm{m^{-3}}$.`,
      ],
      answer: t`$2.4 \times 10^{19}$ electrons; $4.8 \times 10^{19}$ carriers per $\mathrm{m^3}$`,
    },
    visualSpec: t`Warm a silicon crystal and watch bonds break into electron-hole pairs that drift in opposite directions.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Thinks only electrons conduct.",
      remediation: "Each freed electron leaves a hole, and holes carry current too.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Thinks only holes conduct.",
      remediation: "The freed electrons are carriers as well: both kinds conduct.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks a semiconductor has no free carriers.",
      remediation: "At room temperature heat frees some electrons, each leaving a hole.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks a pure crystal has more electrons than holes.",
      remediation: "Each broken bond gives one electron and one hole, so their numbers are equal.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Forgets the holes.",
      remediation: "Every freed electron leaves a vacancy, so there are as many holes as free electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Confuses intrinsic with extrinsic.",
      remediation: "*Intrinsic* means pure: no impurity. Impurities make an *extrinsic* semiconductor.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Counts only the electrons.",
      remediation: t`Each electron has a partner hole: the total is $2 \times 1.5 \times 10^{16}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Splits the electrons into electrons and holes.",
      remediation: "The holes are extra, not a share of the electrons: each freed electron adds one hole.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Multiplies the two densities.",
      remediation: t`$n_e n_h = n_i^2$ is a product rule, but the number of carriers is the sum $n_e + n_h$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Thinks a hole is a free proton.",
      remediation: "Protons stay in the nuclei; a hole is a missing electron in a bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks a hole is a positive ion.",
      remediation: "An ion is fixed in the lattice; a hole is a vacancy that moves from bond to bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks a hole is a missing atom.",
      remediation: "The atom is still there; only one electron has left its bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Thinks the ions drift.",
      remediation: "The ions are fixed in the crystal; the hole moves as electrons hop from bond to bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Thinks the nuclei move.",
      remediation: "Only bound electrons move, jumping into the vacancy from neighbouring bonds.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Thinks holes cannot move.",
      remediation: "A neighbouring electron fills the hole and leaves a new one behind, so the hole moves and carries current.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/semiconductors-11-phy/Ex Q.1 (i)" },
      stem: t`Electric conduction through a semiconductor is due to`,
      verify: { kind: "value", inputs: {  }, params: { ask: "carriers" } },
      options: [
        { key: "A", text: t`both electrons and holes`, correct: true, value: "both_eh" },
        { key: "B", text: t`electrons only`, correct: false, misconceptionId: "C02-M1", value: "electrons_only" },
        { key: "C", text: t`holes only`, correct: false, misconceptionId: "C02-M2", value: "holes_only" },
        { key: "D", text: t`neither: a semiconductor has no free carriers`, correct: false, misconceptionId: "C02-M3", value: "neither" },
      ],
      solution: {
        steps: [
          t`Heat frees electrons and leaves holes, and both drift under a field.`,
          t`So conduction is due to both electrons and holes.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/semiconductors-11-phy/Ex Q.3 (ii)" },
      stem: t`Which statement is true of an intrinsic (pure) semiconductor?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "intrinsic" } },
      options: [
        { key: "A", text: t`It has more free electrons than holes, $n_e > n_h$`, correct: false, misconceptionId: "C02-M4", value: "ne_more" },
        { key: "B", text: t`It has free electrons but no holes`, correct: false, misconceptionId: "C02-M5", value: "no_holes" },
        { key: "C", text: t`Impurity atoms in it supply its carriers`, correct: false, misconceptionId: "C02-M6", value: "has_impurity" },
        { key: "D", text: t`Its electron and hole densities are equal, $n_e = n_h$`, correct: true, value: "ne_eq_nh" },
      ],
      solution: {
        steps: [
          t`In a pure crystal every freed electron leaves exactly one hole.`,
          t`So $n_e = n_h = n_i$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`In a pure silicon crystal, $1.5 \times 10^{16}$ electrons per $\mathrm{m^3}$ have crossed into the conduction band. How many free charge carriers per $\mathrm{m^3}$ does the crystal have in all?`,
      verify: { kind: "value", inputs: { ne: "1.5e16" }, params: { ask: "total" } },
      options: [
        { key: "A", text: t`$2.25 \times 10^{32}$`, correct: false, misconceptionId: "C02-M9", value: "225000000000000016577464587255808" },
        { key: "B", text: t`$3 \times 10^{16}$`, correct: true, value: "30000000000000000" },
        { key: "C", text: t`$1.5 \times 10^{16}$`, correct: false, misconceptionId: "C02-M7", value: "15000000000000000" },
        { key: "D", text: t`$7.5 \times 10^{15}$`, correct: false, misconceptionId: "C02-M8", value: "7500000000000000" },
      ],
      solution: {
        steps: [
          t`Each conduction electron has left a hole: $n_h = n_e$ $= 1.5 \times 10^{16}\ \mathrm{m^{-3}}$.`,
          t`Total carriers $= 2 \times 1.5 \times 10^{16}$ $= 3 \times 10^{16}\ \mathrm{m^{-3}}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`What is a hole in a semiconductor?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "hole" } },
      options: [
        { key: "A", text: t`A place where an atom is missing from the crystal`, correct: false, misconceptionId: "C02-M12", value: "missing_atom" },
        { key: "B", text: t`The vacancy left in a covalent bond when an electron breaks free; it acts as a positive charge`, correct: true, value: "vacancy" },
        { key: "C", text: t`A free proton moving through the crystal`, correct: false, misconceptionId: "C02-M10", value: "proton" },
        { key: "D", text: t`A positive ion of the crystal`, correct: false, misconceptionId: "C02-M11", value: "positive_ion" },
      ],
      solution: {
        steps: [
          t`When heat frees an electron from a covalent bond, the bond is left one electron short.`,
          t`That vacancy is a hole; it behaves as a positive charge.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`How does a hole move through a semiconductor?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "hole_move" } },
      options: [
        { key: "A", text: t`It does not move, so holes carry no current`, correct: false, misconceptionId: "C02-M15", value: "never_moves" },
        { key: "B", text: t`An electron from a neighbouring bond jumps into it, leaving a new vacancy behind`, correct: true, value: "neighbour_fills" },
        { key: "C", text: t`The positive ions of the crystal drift along`, correct: false, misconceptionId: "C02-M13", value: "ions_drift" },
        { key: "D", text: t`The nuclei of the atoms move`, correct: false, misconceptionId: "C02-M14", value: "nuclei_move" },
      ],
      solution: {
        steps: [
          t`An electron from a neighbouring bond jumps into the hole.`,
          t`It leaves a new vacancy where it was, so the hole has moved, opposite to the electron.`,
        ],
      },
    },
  ],
};
