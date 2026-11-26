import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`A farmer's soil, a building's walls, its windows and the paint on them are all made by chemists. What goes into each?`,
    reveal: t`Fertilisers bring N, P and K; cement is baked limestone and clay; glass is melted sand, soda and lime; paint is pigment in an oil binder.`,
  },
  explanation: {
    intuition: [
      t`Plants need nitrogen, phosphorus and potassium in larger amounts than soil may hold.`,
      t`**Fertilisers** supply them.`,
      t`**Cement** sets hard with water and binds buildings.`,
      t`**Glass** is a hard, clear solid made by melting sand with other minerals.`,
      t`**Paints** protect and colour surfaces.`,
    ],
    formal: [
      {
        title: "Fertilisers",
        points: [
          t`Nitrogen: urea, $\ce{CO(NH2)2}$; ammonium sulfate; ammonium nitrate.`,
          t`Phosphorus: superphosphate of lime.`,
          t`Potassium: potash, such as potassium chloride.`,
          t`NPK fertilisers mix all three.`,
        ],
      },
      {
        title: "Cement and glass",
        points: [
          t`Portland cement: limestone and clay heated strongly give clinker.`,
          t`Clinker is calcium silicates and aluminates; a little gypsum slows its setting.`,
          t`Ordinary glass: sand ($\ce{SiO2}$) fused with soda ash and limestone.`,
          t`Glass is amorphous: it has no sharp melting point.`,
        ],
      },
      {
        title: "Paints",
        points: [
          t`**Pigment**: gives colour and covers, such as titanium dioxide (white).`,
          t`**Binder**: a drying oil such as linseed oil, which hardens to a film.`,
          t`**Thinner**: turpentine, to make it easy to spread.`,
          t`**Drier**: speeds up the drying of the oil.`,
        ],
      },
    ],
    worked: {
      prompt: t`Ammonium sulfate is spread on a field. Which plant nutrient does it supply, and from which part of its formula?`,
      steps: [
        t`Its formula is $\ce{(NH4)2SO4}$.`,
        t`The $\ce{NH4+}$ ions carry nitrogen.`,
      ],
      answer: t`Nitrogen, from the ammonium ions`,
    },
    visualSpec: t`Three production lines, for fertiliser, cement and glass, each fed by its raw materials.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Says phosphorus.",
      remediation: t`Urea, $\ce{CO(NH2)2}$, contains no phosphorus; it is rich in nitrogen.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Says potassium.",
      remediation: "Urea has no potassium; it supplies nitrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Says calcium.",
      remediation: "Urea has no calcium; it supplies nitrogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Says nitrogen.",
      remediation: "Superphosphate supplies phosphorus.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Says potassium.",
      remediation: "Potassium comes from potash; superphosphate supplies phosphorus.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Says sulfur.",
      remediation: "Its main nutrient is phosphorus.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Says sand alone.",
      remediation: "Sand alone melts too high; soda and lime are added.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Gives cement's raw materials.",
      remediation: "Limestone and clay make cement; glass is sand, soda and lime.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Says bauxite.",
      remediation: "Bauxite is aluminium ore, not a glass raw material.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks gypsum speeds setting.",
      remediation: "Gypsum slows setting so the cement can be worked.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks gypsum colours it.",
      remediation: "Gypsum is added to control setting, not colour.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Thinks gypsum waterproofs it.",
      remediation: "Gypsum slows setting; it does not waterproof.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Calls the oil the pigment.",
      remediation: "The pigment gives colour; the oil binds it into a film.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Calls the oil the thinner.",
      remediation: "Turpentine is the thinner; linseed oil is the binder.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Calls the oil the drier.",
      remediation: "The drier speeds drying; linseed oil is the binder.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "authored" },
      stem: t`Urea is used as a fertiliser to supply`,
      verify: { kind: "value", inputs: {  }, params: { q: "urea" } },
      options: [
        { key: "A", text: t`nitrogen`, correct: true, value: "nitrogen" },
        { key: "B", text: t`phosphorus`, correct: false, misconceptionId: "C08-M1", value: "phosphorus" },
        { key: "C", text: t`potassium`, correct: false, misconceptionId: "C08-M2", value: "potassium" },
        { key: "D", text: t`calcium`, correct: false, misconceptionId: "C08-M3", value: "calcium" },
      ],
      solution: {
        steps: [
          t`Urea is $\ce{CO(NH2)2}$, about 46 % nitrogen.`,
          t`It supplies nitrogen.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`Superphosphate of lime is used as a fertiliser to supply`,
      verify: { kind: "value", inputs: {  }, params: { q: "superphosphate" } },
      options: [
        { key: "A", text: t`nitrogen`, correct: false, misconceptionId: "C08-M4", value: "nitrogen" },
        { key: "B", text: t`potassium`, correct: false, misconceptionId: "C08-M5", value: "potassium" },
        { key: "C", text: t`sulfur`, correct: false, misconceptionId: "C08-M6", value: "sulfur" },
        { key: "D", text: t`phosphorus`, correct: true, value: "phosphorus" },
      ],
      solution: {
        steps: [
          t`Superphosphate is made from phosphate rock.`,
          t`It supplies phosphorus.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`Ordinary (soda-lime) glass is made by fusing`,
      verify: { kind: "value", inputs: {  }, params: { q: "glass" } },
      options: [
        { key: "A", text: t`sand alone`, correct: false, misconceptionId: "C08-M7", value: "sand_only" },
        { key: "B", text: t`limestone and clay`, correct: false, misconceptionId: "C08-M8", value: "limestone_clay" },
        { key: "C", text: t`bauxite`, correct: false, misconceptionId: "C08-M9", value: "bauxite" },
        { key: "D", text: t`sand, soda ash and limestone`, correct: true, value: "sand_soda_lime" },
      ],
      solution: {
        steps: [
          t`Sand melts with soda ash and limestone.`,
          t`They form soda-lime glass.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`Gypsum is added to cement clinker to`,
      verify: { kind: "value", inputs: {  }, params: { q: "gypsum" } },
      options: [
        { key: "A", text: t`give it colour`, correct: false, misconceptionId: "C08-M11", value: "adds_colour" },
        { key: "B", text: t`make it waterproof`, correct: false, misconceptionId: "C08-M12", value: "waterproofs" },
        { key: "C", text: t`slow down its setting`, correct: true, value: "slows_setting" },
        { key: "D", text: t`speed up its setting`, correct: false, misconceptionId: "C08-M10", value: "speeds_setting" },
      ],
      solution: {
        steps: [
          t`Clinker alone sets too fast.`,
          t`Gypsum slows its setting.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`In an oil paint, linseed oil acts as the`,
      verify: { kind: "value", inputs: {  }, params: { q: "linseed" } },
      options: [
        { key: "A", text: t`drier`, correct: false, misconceptionId: "C08-M15", value: "drier" },
        { key: "B", text: t`binder, which dries to a film`, correct: true, value: "binder" },
        { key: "C", text: t`pigment`, correct: false, misconceptionId: "C08-M13", value: "pigment" },
        { key: "D", text: t`thinner`, correct: false, misconceptionId: "C08-M14", value: "thinner" },
      ],
      solution: {
        steps: [
          t`Linseed oil hardens to a film on drying.`,
          t`It is the binder.`,
        ],
      },
    },
  ],
};
