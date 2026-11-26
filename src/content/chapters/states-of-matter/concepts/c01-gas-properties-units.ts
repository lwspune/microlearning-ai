import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Open a bottle of perfume in one corner of a room and soon it can be smelt in the other, with no fan. How does the scent travel?`,
    reveal: t`Gas molecules move fast and randomly, colliding constantly, so they spread through the room: diffusion.`,
  },
  explanation: {
    intuition: [
      t`Gases fill any container and are easily compressed.`,
      t`Their molecules are far apart and move fast and randomly.`,
      t`Gas pressure comes from molecules striking the container walls.`,
      t`Gas laws need temperatures in kelvin.`,
    ],
    formal: [
      {
        title: "Properties",
        points: [
          t`Gases have no fixed shape or volume; they fill their container.`,
          t`They are highly compressible and mix by **diffusion**.`,
        ],
      },
      {
        title: "Units",
        points: [
          t`Pressure: Pa ($\mathrm{N\,m^{-2}}$), bar ($10^5$ Pa), atm, mm Hg.`,
          t`$1\ \mathrm{atm} = 1.013 \times 10^5\ \mathrm{Pa} = 760$ mm Hg.`,
          t`$T(\mathrm{K}) = t(^\circ\mathrm{C}) + 273.15$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Convert 2 atm to kPa.`,
      steps: [
        t`$2 \times 1.013 \times 10^5 = 2.026 \times 10^5$ Pa.`,
        t`$= 202.6$ kPa.`,
      ],
      answer: t`202.6 kPa`,
    },
    visualSpec: t`Release gas molecules into a box and watch them spread and push on the walls.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes 1 atm as 760 Pa.",
      remediation: t`760 is the value in mm Hg; 1 atm is $1.013 \times 10^5$ Pa.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Divides by the factor.",
      remediation: t`Converting atm to Pa multiplies by $1.013 \times 10^5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Takes 1 atm as exactly $10^5$ Pa.`,
      remediation: t`$10^5$ Pa is 1 bar; 1 atm is $1.013 \times 10^5$ Pa.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Subtracts 273.15.",
      remediation: t`Add: $T = t + 273.15$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Keeps the Celsius number.",
      remediation: "Kelvin readings are 273.15 higher.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Adds the magnitudes.",
      remediation: t`$-197 + 273.15 = 76.15$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says effusion.",
      remediation: "Effusion is escape through a tiny hole; mixing is diffusion.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says condensation.",
      remediation: "Condensation is gas turning to liquid.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says sublimation.",
      remediation: "Sublimation is solid turning to gas.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks low pressure pulls water up.",
      remediation: "Air pressure pushes water up the straw; less air pressure pushes less.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Sees no difference.",
      remediation: "Air pressure falls with height, so drinking is harder at the top.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks water is lighter up high.",
      remediation: "Water's density barely changes; air pressure is lower.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Gives gases a fixed volume.",
      remediation: "Gases expand to fill any container.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Gives gases a fixed shape.",
      remediation: "Gases take the shape of their container.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Thinks gases cannot be compressed.",
      remediation: "Gas molecules are far apart, so gases compress easily.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.2 (F)" },
      stem: t`Convert 10 atm to pascals. ($1\ \mathrm{atm} = 1.013 \times 10^5$ Pa)`,
      verify: { kind: "value", inputs: { p: "10" }, params: { q: "atm_pa" } },
      options: [
        { key: "A", text: t`$1 \times 10^{6}\ \mathrm{Pa}$`, correct: false, misconceptionId: "C01-M3", value: "1000000" },
        { key: "B", text: t`$7600\ \mathrm{Pa}$`, correct: false, misconceptionId: "C01-M1", value: "7600" },
        { key: "C", text: t`$9.87 \times 10^{-5}\ \mathrm{Pa}$`, correct: false, misconceptionId: "C01-M2", value: "9.87000000000000e-5" },
        { key: "D", text: t`$1.01 \times 10^{6}\ \mathrm{Pa}$`, correct: true, value: "1010000" },
      ],
      solution: {
        steps: [
          t`$10 \times 1.013 \times 10^5$.`,
          t`$= 1.013 \times 10^6$ Pa.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.2 (E)" },
      stem: t`Convert $-197\ ^\circ\mathrm{C}$ to kelvin.`,
      verify: { kind: "value", inputs: { c: "-197" }, params: { q: "c_to_k" } },
      options: [
        { key: "A", text: t`$76.15\ \mathrm{K}$`, correct: true, value: "76.1500000000000" },
        { key: "B", text: t`$-470.15\ \mathrm{K}$`, correct: false, misconceptionId: "C01-M4", value: "-470.150000000000" },
        { key: "C", text: t`$-197\ \mathrm{K}$`, correct: false, misconceptionId: "C01-M5", value: "-197" },
        { key: "D", text: t`$470.15\ \mathrm{K}$`, correct: false, misconceptionId: "C01-M6", value: "470.150000000000" },
      ],
      solution: {
        steps: [
          t`$T = -197 + 273.15$.`,
          t`$= 76.15$ K.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.2 (A)" },
      stem: t`The mixing of different gases by random molecular motion and frequent collisions is called`,
      verify: { kind: "value", inputs: {  }, params: { q: "mixing" } },
      options: [
        { key: "A", text: t`condensation`, correct: false, misconceptionId: "C01-M8", value: "condensation" },
        { key: "B", text: t`diffusion`, correct: true, value: "diffusion" },
        { key: "C", text: t`sublimation`, correct: false, misconceptionId: "C01-M9", value: "sublimation" },
        { key: "D", text: t`effusion`, correct: false, misconceptionId: "C01-M7", value: "effusion" },
      ],
      solution: {
        steps: [
          t`Random motion spreads the gases through each other.`,
          t`That is diffusion.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.3 (F)" },
      stem: t`Is it easier to drink water through a straw at the top of Mount Everest or at its base?`,
      verify: { kind: "value", inputs: {  }, params: { q: "straw" } },
      options: [
        { key: "A", text: t`there is no difference`, correct: false, misconceptionId: "C01-M11", value: "no_difference" },
        { key: "B", text: t`at the top: low pressure pulls water up`, correct: false, misconceptionId: "C01-M10", value: "top_low_pressure" },
        { key: "C", text: t`at the base: higher air pressure pushes the water up the straw`, correct: true, value: "base_higher_pressure" },
        { key: "D", text: t`at the top: water is lighter there`, correct: false, misconceptionId: "C01-M12", value: "top_lighter" },
      ],
      solution: {
        steps: [
          t`Air pressure pushes water up the straw.`,
          t`It is higher at the base.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.3 (D)" },
      stem: t`Which is a characteristic property of gases?`,
      verify: { kind: "value", inputs: {  }, params: { q: "property" } },
      options: [
        { key: "A", text: t`they cannot be compressed`, correct: false, misconceptionId: "C01-M15", value: "incompressible" },
        { key: "B", text: t`they have a fixed volume`, correct: false, misconceptionId: "C01-M13", value: "fixed_volume" },
        { key: "C", text: t`they have a fixed shape`, correct: false, misconceptionId: "C01-M14", value: "fixed_shape" },
        { key: "D", text: t`they fill their container completely and are easily compressed`, correct: true, value: "fill_compress" },
      ],
      solution: {
        steps: [
          t`Gas molecules are far apart and free.`,
          t`They fill the container and compress easily.`,
        ],
      },
    },
  ],
};
