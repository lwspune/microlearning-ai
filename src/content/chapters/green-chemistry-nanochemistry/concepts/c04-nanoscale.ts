import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A gold ring is yellow. Gold particles a few nanometres across are red. Same element, different colour. What changed?`,
    reveal: t`Only the size. At the nanoscale, a large share of atoms sit at the surface, and the material's properties change.`,
  },
  explanation: {
    intuition: [
      t`1 nm is a billionth of a metre, about the width of ten hydrogen atoms in a row.`,
      t`The nanoscale runs from about 1 to 100 nm.`,
      t`Smaller pieces have far more surface for their volume.`,
      t`Surface atoms behave differently, so nanomaterials have new properties.`,
    ],
    formal: [
      {
        title: "Terms",
        points: [
          t`$1\ \text{nm} = 10^{-9}\ \text{m}$; 'nano' is from the Greek for dwarf.`,
          t`**Nanoscience**: studying materials at the nanoscale, where properties differ from bulk.`,
          t`**Nanotechnology**: designing and making devices by controlling size and shape at the nanoscale.`,
          t`**Nanomaterial**: a material with at least one dimension in the nanoscale.`,
        ],
      },
      {
        title: "Dimensions",
        points: [
          t`Zero-dimensional: all three dimensions nanoscale, e.g. nanoparticles.`,
          t`One-dimensional: two dimensions nanoscale, e.g. nanorods, nanowires.`,
          t`Two-dimensional: one dimension nanoscale, e.g. thin films.`,
        ],
      },
      {
        title: "Surface-to-volume ratio",
        points: [
          t`For a cube of side $a$: surface ÷ volume $= 6a^2 / a^3 = 6/a$.`,
          t`Shrinking $a$ by a factor of $10^6$ raises the ratio by $10^6$.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many nanometres are there in 1 mm?`,
      steps: [
        t`1 mm $= 10^{-3}$ m; 1 nm $= 10^{-9}$ m.`,
        t`$10^{-3} / 10^{-9} = 10^6$.`,
      ],
      answer: t`$10^{6}$ nm`,
    },
    visualSpec: t`Cut a cube into smaller and smaller cubes and watch the total surface grow.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Confuses the nanometre with the micrometre.",
      remediation: t`1 µm $= 10^{-6}$ m; 1 nm $= 10^{-9}$ m.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Confuses the nanometre with the ångström.",
      remediation: t`1 Å $= 10^{-10}$ m; 1 nm $= 10$ Å.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Confuses the nanometre with the picometre.",
      remediation: t`1 pm $= 10^{-12}$ m; 1 nm $= 1000$ pm.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks 'nano' is French for billion.",
      remediation: "'Nano' comes from the Greek *nanos*, dwarf.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Thinks 'nano' is Spanish for particle.",
      remediation: "'Nano' comes from the Greek for dwarf.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Thinks 'nano' is Latin for invisible.",
      remediation: "'Nano' comes from the Greek for dwarf.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Thinks nanoparticles are one-dimensional.",
      remediation: "All three dimensions of a nanoparticle are nanoscale: zero-dimensional.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks films are one-dimensional.",
      remediation: "A film is nanoscale in one dimension only: two-dimensional.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Thinks any wire is a nanostructure.",
      remediation: "A 1 mm wire is far larger than 100 nm.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Thinks the element changes.",
      remediation: "Nano gold is still gold; only its size changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Thinks the atoms get heavier.",
      remediation: "Atoms are unchanged; their share at the surface changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks all the bonds are broken.",
      remediation: "Nanoparticles are still bonded solids, just very small.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Squares the size ratio.",
      remediation: t`Surface ÷ volume is $6/a$, so it scales with $1/a$, not $1/a^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks the ratio is the same for every cube.",
      remediation: t`$6/a$ depends on $a$: the smaller the cube, the larger the ratio.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Thinks smaller cubes have the smaller ratio.",
      remediation: t`$6/a$ grows as $a$ shrinks.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.2 (vi)" },
      stem: t`1 nm equals`,
      verify: { kind: "value", inputs: {  }, params: { q: "nm" } },
      options: [
        { key: "A", text: t`$10^{-10}$ m`, correct: false, misconceptionId: "C04-M2", value: "e_minus_10" },
        { key: "B", text: t`$10^{-9}$ m`, correct: true, value: "e_minus_9" },
        { key: "C", text: t`$10^{-12}$ m`, correct: false, misconceptionId: "C04-M3", value: "e_minus_12" },
        { key: "D", text: t`$10^{-6}$ m`, correct: false, misconceptionId: "C04-M1", value: "e_minus_6" },
      ],
      solution: {
        steps: [
          t`Nano means $10^{-9}$.`,
          t`1 nm $= 10^{-9}$ m.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.1 (iii)" },
      stem: t`The prefix 'nano' comes from`,
      verify: { kind: "value", inputs: {  }, params: { q: "greek" } },
      options: [
        { key: "A", text: t`a French word meaning billion`, correct: false, misconceptionId: "C04-M4", value: "french_billion" },
        { key: "B", text: t`a Spanish word meaning particle`, correct: false, misconceptionId: "C04-M5", value: "spanish_particle" },
        { key: "C", text: t`a Greek word meaning dwarf`, correct: true, value: "greek_dwarf" },
        { key: "D", text: t`a Latin word meaning invisible`, correct: false, misconceptionId: "C04-M6", value: "latin_invisible" },
      ],
      solution: {
        steps: [
          t`'Nano' is from the Greek *nanos*.`,
          t`It means dwarf.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/green-nano-12-pyq#9" },
      stem: t`Which of these is a one-dimensional nanostructure?`,
      verify: { kind: "value", inputs: {  }, params: { q: "one_d" } },
      options: [
        { key: "A", text: t`nanofilms`, correct: false, misconceptionId: "C04-M8", value: "nanofilms" },
        { key: "B", text: t`a copper wire 1 mm thick`, correct: false, misconceptionId: "C04-M9", value: "copper_wire" },
        { key: "C", text: t`nanoparticles`, correct: false, misconceptionId: "C04-M7", value: "nanoparticles" },
        { key: "D", text: t`nanorods`, correct: true, value: "nanorods" },
      ],
      solution: {
        steps: [
          t`A nanorod is nanoscale in two dimensions.`,
          t`So it is one-dimensional.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.3 (iv)" },
      stem: t`Why do nanoparticles of a substance behave differently from a lump of it?`,
      verify: { kind: "value", inputs: {  }, params: { q: "surface" } },
      options: [
        { key: "A", text: t`a large share of their atoms is on the surface`, correct: true, value: "surface_atoms" },
        { key: "B", text: t`their atoms are heavier`, correct: false, misconceptionId: "C04-M11", value: "heavier" },
        { key: "C", text: t`all their chemical bonds are broken`, correct: false, misconceptionId: "C04-M12", value: "bonds_broken" },
        { key: "D", text: t`their atoms are of a different element`, correct: false, misconceptionId: "C04-M10", value: "different_element" },
      ],
      solution: {
        steps: [
          t`Small particles have a large surface-to-volume ratio.`,
          t`Surface atoms behave differently.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`For a cube of side $a$, surface area ÷ volume $= 6/a$. How many times larger is this ratio for a 10 nm cube than for a 1 cm cube?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ratio" } },
      options: [
        { key: "A", text: t`$10^{-6}$`, correct: false, misconceptionId: "C04-M15", value: "ratio_1e_minus_6" },
        { key: "B", text: t`$10^{6}$`, correct: true, value: "ratio_1e6" },
        { key: "C", text: t`$10^{12}$`, correct: false, misconceptionId: "C04-M13", value: "ratio_1e12" },
        { key: "D", text: t`1: the ratio is the same`, correct: false, misconceptionId: "C04-M14", value: "ratio_1" },
      ],
      solution: {
        steps: [
          t`1 cm $= 10^7$ nm; the ratio is $6/a$.`,
          t`$(6/10)/(6/10^7) = 10^6$.`,
        ],
      },
    },
  ],
};
