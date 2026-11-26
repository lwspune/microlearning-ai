import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A glass-cutter's tool is tipped with a tiny chip of diamond, and it scores a line on a sheet of glass. A steel nail drawn across the same glass barely marks it. Why does the diamond win?`,
    reveal: t`Diamond is the **hardest** known material: it resists permanent denting and scratching better than anything else, so it marks every other material while nothing marks it.`,
  },
  explanation: {
    intuition: [
      t`**Hardness** is a material's resistance to permanent (plastic) deformation of its surface: denting and scratching.`,
      t`A harder material scratches a softer one; the softer one cannot scratch it back.`,
      t`Hardness is not the same as stiffness, strength or toughness.`,
      t`Diamond is the hardest known material; aluminium is a metal of very low hardness.`,
    ],
    formal: [
      {
        title: "Hardness and related properties",
        points: [
          t`**Hardness**: resistance to plastic deformation, such as a dent or a scratch.`,
          t`**Elasticity**: the ability to return to the original shape when the force is removed.`,
          t`**Plasticity**: the ability to stay deformed after the force is removed.`,
          t`**Toughness**: the ability to resist fracturing, absorbing energy without breaking.`,
          t`**Ductility**: the ability to be drawn into wires.`,
        ],
      },
      {
        title: "Measuring hardness",
        points: [
          t`**Scratch test**: a material that scratches another is the harder of the two.`,
          t`Mohs' scale ranks minerals this way from talc ($1$, softest) to diamond ($10$, hardest).`,
          t`**Indentation test**: a hard indenter is pressed into the metal under a known load.`,
          t`A smaller, shallower dent means a harder metal.`,
        ],
      },
      {
        title: "Why hardness matters",
        points: [
          t`Cutting and drilling tools need a tip harder than what they cut: diamond and tungsten carbide.`,
          t`Gears, bearings and rails are hardened so they do not wear away.`,
          t`Hard materials are often brittle: glass is hard but not tough.`,
        ],
      },
    ],
    worked: {
      prompt: t`Quartz scratches glass, and glass scratches copper, but neither copper nor glass can scratch quartz. Put copper, glass and quartz in order of hardness.`,
      steps: [
        t`The material that scratches another is the harder one.`,
        t`Quartz scratches glass, so quartz is harder than glass.`,
        t`Glass scratches copper, so glass is harder than copper.`,
      ],
      answer: t`Quartz $>$ glass $>$ copper`,
    },
    visualSpec: t`Draw one material across another and see which one is scratched.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Confuses hardness with elasticity.",
      remediation: "Elasticity is springing back after deformation; hardness is resisting a permanent dent in the first place.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Confuses hardness with plasticity.",
      remediation: "Plasticity is staying deformed, the opposite of resisting deformation.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Confuses hardness with ductility.",
      remediation: "Ductility is being drawn into wires, which needs plastic flow, not resistance to it.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Confuses toughness with hardness.",
      remediation: "Hardness resists dents and scratches; resisting fracture is **toughness**. Glass is hard but not tough.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Confuses toughness with elasticity.",
      remediation: "Elasticity is returning to shape; a tough material may deform a lot and still not break.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Confuses toughness with plasticity.",
      remediation: "Plasticity is staying deformed; the ability to resist breaking is toughness.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Thinks the stiffest, strongest metal is the hardest material.",
      remediation: "Steel is strong and stiff, but diamond scratches it: diamond is the hardest known material.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Thinks a heavy, dense material is hard.",
      remediation: "Lead is dense but very soft: a fingernail can mark it. Density does not decide hardness.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks a material that springs back is hard.",
      remediation: "Rubber springs back because it is elastic, but it is very soft: it dents at a touch.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks the scratched material is the harder one.",
      remediation: "The harder material does the scratching; the softer one is scratched.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks a scratch depends only on the force, not the materials.",
      remediation: "However hard B is pressed, it cannot scratch A: the result depends on which is harder.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Confuses hardness with toughness.",
      remediation: "Scratching tests hardness; toughness is about resisting fracture.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Confuses hardness with stiffness, measured by Young's modulus.",
      remediation: "Hanging loads on a wire measures its elastic stretch, Young's modulus, not surface hardness.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Confuses hardness with toughness.",
      remediation: "Hammering until it cracks tests toughness; hardness is measured by the dent an indenter makes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Confuses hardness with elasticity.",
      remediation: "Springing back after bending shows elasticity; hardness is measured by the dent an indenter makes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.1 (iv)" },
      stem: t`Which property of a material enables it to resist plastic deformation?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "resist_plastic" } },
      options: [
        { key: "A", text: t`Elasticity`, correct: false, misconceptionId: "C06-M1", value: "elasticity" },
        { key: "B", text: t`Plasticity`, correct: false, misconceptionId: "C06-M2", value: "plasticity" },
        { key: "C", text: t`Ductility`, correct: false, misconceptionId: "C06-M3", value: "ductility" },
        { key: "D", text: t`Hardness`, correct: true, value: "hardness" },
      ],
      solution: {
        steps: [
          t`Resisting plastic (permanent) deformation of the surface is the definition of hardness.`,
          t`So the property is hardness.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.1 (v)" },
      stem: t`What is the ability of a material to resist fracturing when a force is applied to it called?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "resist_fracture" } },
      options: [
        { key: "A", text: t`Toughness`, correct: true, value: "toughness" },
        { key: "B", text: t`Hardness`, correct: false, misconceptionId: "C06-M4", value: "hardness_f" },
        { key: "C", text: t`Elasticity`, correct: false, misconceptionId: "C06-M5", value: "elasticity_f" },
        { key: "D", text: t`Plasticity`, correct: false, misconceptionId: "C06-M6", value: "plasticity_f" },
      ],
      solution: {
        steps: [
          t`Resisting fracture, breaking apart, is different from resisting a dent.`,
          t`It is called toughness.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/mech-props-solids-11-phy/Ex Q.2 (xii)" },
      stem: t`Which of these is the hardest known material?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "hardest" } },
      options: [
        { key: "A", text: t`Diamond`, correct: true, value: "diamond" },
        { key: "B", text: t`Steel`, correct: false, misconceptionId: "C06-M7", value: "steel" },
        { key: "C", text: t`Lead`, correct: false, misconceptionId: "C06-M8", value: "lead" },
        { key: "D", text: t`Rubber`, correct: false, misconceptionId: "C06-M9", value: "rubber" },
      ],
      solution: {
        steps: [
          t`Diamond scratches every other material, and none scratches it.`,
          t`So diamond is the hardest known material.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`Mineral A leaves a scratch on mineral B, but B cannot scratch A. What does this show?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "scratch" } },
      options: [
        { key: "A", text: t`A is tougher than B, but they may be equally hard`, correct: false, misconceptionId: "C06-M12", value: "A_tougher" },
        { key: "B", text: t`A is harder than B, so it stands higher on Mohs' scale`, correct: true, value: "A_harder" },
        { key: "C", text: t`B is harder than A, since B resisted being worn away`, correct: false, misconceptionId: "C06-M10", value: "B_harder" },
        { key: "D", text: t`They are equally hard; the scratch depends only on how hard A was pressed`, correct: false, misconceptionId: "C06-M11", value: "equal_hard" },
      ],
      solution: {
        steps: [
          t`The harder material scratches the softer one, never the other way round.`,
          t`So A is harder than B, and stands higher on Mohs' scale.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`How is the hardness of a metal usually measured?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "test" } },
      options: [
        { key: "A", text: t`By pressing a hard indenter into it and measuring the dent`, correct: true, value: "indent" },
        { key: "B", text: t`By hanging loads on a wire of it and measuring the extension`, correct: false, misconceptionId: "C06-M13", value: "stretch" },
        { key: "C", text: t`By hammering it until it cracks`, correct: false, misconceptionId: "C06-M14", value: "hammer" },
        { key: "D", text: t`By bending it and seeing whether it springs back`, correct: false, misconceptionId: "C06-M15", value: "bend_back" },
      ],
      solution: {
        steps: [
          t`Hardness is resistance to a permanent dent.`,
          t`So a hard indenter is pressed into the metal; the smaller the dent, the harder the metal.`,
        ],
      },
    },
  ],
};
