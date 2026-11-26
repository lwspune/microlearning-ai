import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`At the top of Mount Everest water boils at about 70 °C, too cool to cook rice properly. Why does water boil cooler up there?`,
    reveal: t`Air pressure is lower, so water's vapour pressure reaches it at a lower temperature.`,
  },
  explanation: {
    intuition: [
      t`Molecules escaping from a liquid exert a **vapour pressure**.`,
      t`It rises with temperature.`,
      t`A liquid boils when its vapour pressure equals the outside pressure.`,
      t`Surface tension and viscosity reflect how strongly molecules attract.`,
    ],
    formal: [
      {
        title: "Vapour pressure and boiling",
        points: [
          t`Boiling: vapour pressure = external pressure.`,
          t`Lower external pressure, lower boiling point (mountains); higher, higher (pressure cookers).`,
        ],
      },
      {
        title: "Surface tension and viscosity",
        points: [
          t`Surface tension: inward pull on surface molecules; higher for stronger forces.`,
          t`Viscosity: resistance to flow; higher for stronger forces; unit poise.`,
          t`Both decrease as temperature rises.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does food cook faster in a pressure cooker?`,
      steps: [
        t`The pressure inside is above 1 atm.`,
        t`Water boils above 100 °C, so food is hotter.`,
      ],
      answer: t`Water boils at a higher temperature`,
    },
    visualSpec: t`Heat liquids under different pressures and watch when bubbles form.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks the dyne.",
      remediation: "The dyne is a unit of force.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks the newton.",
      remediation: "The newton is a unit of force.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks the gram.",
      remediation: "The gram is a unit of mass.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks the open vessel.",
      remediation: "A pressure cooker's higher pressure raises the boiling point more.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks the mountain top.",
      remediation: "Low pressure on a mountain lowers the boiling point.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Thinks water always boils at 100 °C.",
      remediation: "100 °C is the boiling point only at 1 atm.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Ties boiling to 100 °C.",
      remediation: "A liquid boils when its vapour pressure equals the outside pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Thinks all molecules move alike at boiling.",
      remediation: "Molecules always have a range of speeds.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Thinks vapour pressure becomes zero.",
      remediation: "Vapour pressure rises to equal the outside pressure.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Thinks heating raises surface tension.",
      remediation: "Heating weakens the attractions, lowering surface tension.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Thinks weaker forces raise it.",
      remediation: "Stronger attractions pull surface molecules in more.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Credits size alone.",
      remediation: "Intermolecular forces decide surface tension.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Thinks viscosity rises on heating.",
      remediation: "Faster molecules flow more easily: viscosity falls.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Thinks viscosity is unchanged.",
      remediation: "Warm honey flows faster than cold.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Thinks it rises, then falls.",
      remediation: "Viscosity falls steadily on heating.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.1 (A)" },
      stem: t`The unit of viscosity is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "unit" } },
      options: [
        { key: "A", text: t`newton`, correct: false, misconceptionId: "C07-M2", value: "newton" },
        { key: "B", text: t`gram`, correct: false, misconceptionId: "C07-M3", value: "gram" },
        { key: "C", text: t`dyne`, correct: false, misconceptionId: "C07-M1", value: "dyne" },
        { key: "D", text: t`poise`, correct: true, value: "poise" },
      ],
      solution: {
        steps: [
          t`Viscosity has its own unit.`,
          t`The poise.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Solved Ex.10.7" },
      stem: t`Water has its highest boiling point when it is boiled`,
      verify: { kind: "value", inputs: {  }, params: { q: "highest_bp" } },
      options: [
        { key: "A", text: t`in a pressure cooker`, correct: true, value: "pressure_cooker" },
        { key: "B", text: t`in an open vessel on a mountain top`, correct: false, misconceptionId: "C07-M5", value: "mountain_top" },
        { key: "C", text: t`anywhere: water always boils at $100\ ^\circ\mathrm{C}$`, correct: false, misconceptionId: "C07-M6", value: "always_100" },
        { key: "D", text: t`in an open vessel at sea level`, correct: false, misconceptionId: "C07-M4", value: "open_vessel" },
      ],
      solution: {
        steps: [
          t`The pressure cooker has the highest pressure.`,
          t`So the highest boiling point.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.4 (E)" },
      stem: t`A liquid boils when`,
      verify: { kind: "value", inputs: {  }, params: { q: "boils" } },
      options: [
        { key: "A", text: t`its vapour pressure becomes zero`, correct: false, misconceptionId: "C07-M9", value: "vp_zero" },
        { key: "B", text: t`its vapour pressure equals the external pressure`, correct: true, value: "vp_equals_external" },
        { key: "C", text: t`it reaches $100\ ^\circ\mathrm{C}$`, correct: false, misconceptionId: "C07-M7", value: "reaches_100" },
        { key: "D", text: t`all its molecules move at the same speed`, correct: false, misconceptionId: "C07-M8", value: "same_speed" },
      ],
      solution: {
        steps: [
          t`Bubbles of vapour can form when vapour pressure matches the outside.`,
          t`That is boiling.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.4 (E)" },
      stem: t`The surface tension of a liquid is higher when`,
      verify: { kind: "value", inputs: {  }, params: { q: "surface_tension" } },
      options: [
        { key: "A", text: t`its intermolecular forces are weaker`, correct: false, misconceptionId: "C07-M11", value: "weaker_forces" },
        { key: "B", text: t`it is heated`, correct: false, misconceptionId: "C07-M10", value: "heating" },
        { key: "C", text: t`its intermolecular forces are stronger`, correct: true, value: "stronger_forces" },
        { key: "D", text: t`its molecules are larger, whatever the forces`, correct: false, misconceptionId: "C07-M12", value: "size_alone" },
      ],
      solution: {
        steps: [
          t`Stronger attractions pull surface molecules inward.`,
          t`Surface tension rises.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.4 (E)" },
      stem: t`As a liquid is heated, its viscosity`,
      verify: { kind: "value", inputs: {  }, params: { q: "viscosity_heat" } },
      options: [
        { key: "A", text: t`increases`, correct: false, misconceptionId: "C07-M13", value: "increases" },
        { key: "B", text: t`stays the same`, correct: false, misconceptionId: "C07-M14", value: "unchanged" },
        { key: "C", text: t`first increases, then decreases`, correct: false, misconceptionId: "C07-M15", value: "rises_falls" },
        { key: "D", text: t`decreases`, correct: true, value: "decreases" },
      ],
      solution: {
        steps: [
          t`Heat helps molecules overcome attractions.`,
          t`Viscosity decreases.`,
        ],
      },
    },
  ],
};
