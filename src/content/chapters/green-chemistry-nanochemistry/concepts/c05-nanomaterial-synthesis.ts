import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`To make a statue you can carve a block of marble down, or build it up from clay. Nanoparticles are made both ways too. Which way is the sol-gel method?`,
    reveal: t`Bottom-up: it builds particles from molecules in solution, through a colloidal sol that sets into a gel.`,
  },
  explanation: {
    intuition: [
      t`**Top-down** methods break bulk material into nanoscale pieces.`,
      t`**Bottom-up** methods build nanoparticles from atoms or molecules.`,
      t`The sol-gel method is a bottom-up route to oxide nanomaterials.`,
      t`Instruments then confirm that nanoparticles formed and reveal their size, shape and structure.`,
    ],
    formal: [
      {
        title: "Sol-gel method",
        points: [
          t`A **sol** is a colloidal dispersion of solid particles 1–100 nm across in a liquid.`,
          t`A **gel** is a rigid, porous network.`,
          t`Steps: hydrolysis, polycondensation, drying, thermal decomposition.`,
          t`Hydrolysis: $\ce{M-OR + H2O -> M-OH + ROH}$.`,
        ],
      },
      {
        title: "Characterisation",
        points: [
          t`UV-visible spectroscopy: first confirmation that nanoparticles formed.`,
          t`XRD: particle size, crystal structure, geometry.`,
          t`FTIR: absorption by functional groups.`,
          t`SEM: structure of the surface; TEM: size and shape.`,
        ],
      },
    ],
    worked: {
      prompt: t`Grinding a metal block in a ball mill down to nanoparticles is which kind of method?`,
      steps: [
        t`It starts from bulk material.`,
        t`It breaks it down.`,
      ],
      answer: t`Top-down`,
    },
    visualSpec: t`Follow a metal alkoxide solution as it turns into a sol, then a gel, then a fine oxide powder.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks FTIR gives particle size.",
      remediation: "XRD gives particle size; FTIR shows functional groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks FTIR confirms nanoparticle formation.",
      remediation: "UV-visible spectroscopy gives that first confirmation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks FTIR gives crystal structure.",
      remediation: "XRD gives crystal structure; FTIR shows functional groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks FTIR.",
      remediation: "FTIR shows functional groups, not geometry or surfaces.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks UV-visible spectroscopy.",
      remediation: "UV-visible spectroscopy only confirms that nanoparticles formed.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Equates surface structure with geometry.",
      remediation: "SEM shows the surface; XRD gives the geometry.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks XRD for the surface.",
      remediation: "XRD gives crystal structure and size; SEM shows the surface.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Swaps the first two steps.",
      remediation: "Hydrolysis must make M-OH groups before they can condense.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Starts with drying.",
      remediation: "The gel must form before it can be dried.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Starts with thermal decomposition.",
      remediation: "Heating comes last, turning the dried gel into the oxide.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Calls sol-gel top-down.",
      remediation: "It builds up from molecules: bottom-up.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Calls it a characterisation technique.",
      remediation: "Sol-gel makes nanomaterials; XRD and others characterise them.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks it grows large single crystals.",
      remediation: "Sol-gel gives nanoparticles and fine powders.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.1 (iv)" },
      stem: t`What information does the FTIR technique give about nanoparticles?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ftir" } },
      options: [
        { key: "A", text: t`crystal structure`, correct: false, misconceptionId: "C05-M3", value: "crystal_structure" },
        { key: "B", text: t`confirmation that nanoparticles formed`, correct: false, misconceptionId: "C05-M2", value: "confirm_formation" },
        { key: "C", text: t`particle size`, correct: false, misconceptionId: "C05-M1", value: "particle_size" },
        { key: "D", text: t`absorption by functional groups`, correct: true, value: "functional_groups" },
      ],
      solution: {
        steps: [
          t`FTIR measures infrared absorption.`,
          t`It shows functional groups.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/green-nano-12-pyq#3" },
      stem: t`Which technique tells the geometry of nanoparticles?`,
      verify: { kind: "value", inputs: {  }, params: { q: "geometry" } },
      options: [
        { key: "A", text: t`X-ray diffraction (XRD)`, correct: true, value: "xrd" },
        { key: "B", text: t`UV-visible spectroscopy`, correct: false, misconceptionId: "C05-M5", value: "uv_visible" },
        { key: "C", text: t`scanning electron microscopy (SEM)`, correct: false, misconceptionId: "C05-M6", value: "sem" },
        { key: "D", text: t`FTIR spectroscopy`, correct: false, misconceptionId: "C05-M4", value: "ftir" },
      ],
      solution: {
        steps: [
          t`XRD gives size, crystal structure and geometry.`,
          t`So XRD.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.2 (iii)" },
      stem: t`Ridhima wants to study the structure of a material's surface. Which technique should she use?`,
      verify: { kind: "value", inputs: {  }, params: { q: "surface" } },
      options: [
        { key: "A", text: t`X-ray diffraction (XRD)`, correct: false, misconceptionId: "C05-M7", value: "xrd" },
        { key: "B", text: t`scanning electron microscopy (SEM)`, correct: true, value: "sem" },
        { key: "C", text: t`FTIR spectroscopy`, correct: false, misconceptionId: "C05-M4", value: "ftir" },
        { key: "D", text: t`UV-visible spectroscopy`, correct: false, misconceptionId: "C05-M5", value: "uv_visible" },
      ],
      solution: {
        steps: [
          t`SEM scans the surface with electrons.`,
          t`It shows surface structure.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.4 (iv)" },
      stem: t`In what order do the steps of the sol-gel process occur?`,
      verify: { kind: "value", inputs: {  }, params: { q: "solgel" } },
      options: [
        { key: "A", text: t`drying, hydrolysis, polycondensation, thermal decomposition`, correct: false, misconceptionId: "C05-M9", value: "dry_hydro_poly_thermal" },
        { key: "B", text: t`thermal decomposition, hydrolysis, polycondensation, drying`, correct: false, misconceptionId: "C05-M10", value: "thermal_hydro_poly_dry" },
        { key: "C", text: t`hydrolysis, polycondensation, drying, thermal decomposition`, correct: true, value: "hydro_poly_dry_thermal" },
        { key: "D", text: t`polycondensation, hydrolysis, drying, thermal decomposition`, correct: false, misconceptionId: "C05-M8", value: "poly_hydro_dry_thermal" },
      ],
      solution: {
        steps: [
          t`Hydrolysis, then polycondensation form the gel.`,
          t`Drying, then heating give the product.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/green-nano-12-pyq#7" },
      stem: t`The sol-gel method builds nanoparticles up from molecules in solution. It is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bottom_up" } },
      options: [
        { key: "A", text: t`a way to grow large single crystals`, correct: false, misconceptionId: "C05-M13", value: "bulk_crystals" },
        { key: "B", text: t`a top-down method`, correct: false, misconceptionId: "C05-M11", value: "top_down_method" },
        { key: "C", text: t`a characterisation technique, like XRD`, correct: false, misconceptionId: "C05-M12", value: "characterisation" },
        { key: "D", text: t`a bottom-up method`, correct: true, value: "bottom_up_method" },
      ],
      solution: {
        steps: [
          t`Sol-gel starts from molecules.`,
          t`It is bottom-up.`,
        ],
      },
    },
  ],
};
