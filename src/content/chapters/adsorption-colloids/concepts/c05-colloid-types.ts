import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Milk looks uniform, yet a torch beam through it lights up a visible path, which salt water never does. Is milk a solution?`,
    reveal: t`No. Milk is a colloid: fat droplets 1–1000 nm across, too small to settle but big enough to scatter light.`,
  },
  explanation: {
    intuition: [
      t`Colloids lie between true solutions and suspensions.`,
      t`Their particles are about 1 nm to 1000 nm across.`,
      t`A **dispersed phase** is spread through a **dispersion medium**.`,
      t`Sols, gels, emulsions and foams are types of colloid.`,
    ],
    formal: [
      {
        title: "Types",
        points: [
          t`Particle size $10^{-9}$ to $10^{-6}$ m.`,
          t`Sol: solid in liquid; gel: liquid in solid (jam); emulsion: liquid in liquid (milk); foam: gas in liquid.`,
          t`Lyophilic sols (gum, starch) attract the medium and are stable.`,
          t`Lyophobic sols (gold, $\ce{As2S3}$) repel it and coagulate easily.`,
        ],
      },
      {
        title: "Micelles",
        points: [
          t`Above a certain concentration soap ions cluster into micelles.`,
          t`Hydrocarbon tails point inward; ionic heads face the water.`,
          t`Oily dirt is trapped inside micelles and washed away.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the dispersed phase and medium in fog.`,
      steps: [
        t`Fog is tiny water droplets in air.`,
        t`Liquid in gas: an aerosol.`,
      ],
      answer: t`Water droplets in air`,
    },
    visualSpec: t`Zoom from a true solution to a colloid to a suspension and compare particle sizes.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Gives true-solution sizes.",
      remediation: "Particles below 1 nm form true solutions.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gives suspension sizes.",
      remediation: "Particles above 1000 nm settle as suspensions.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Gives visible sizes.",
      remediation: "Colloidal particles are 1 nm to 1 µm.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Calls gum a true solution.",
      remediation: "Gum's large molecules are colloidal.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Calls gum a suspension.",
      remediation: "Gum does not settle; it forms a stable sol.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Calls gum a lyophobic sol.",
      remediation: "Gum attracts water: lyophilic.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Calls jam a sol.",
      remediation: "Jam is set: liquid in a solid network, a gel.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Calls jam an emulsion.",
      remediation: "An emulsion is liquid in liquid; jam is a gel.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Calls jam a true solution.",
      remediation: "Jam is a semi-solid colloid: a gel.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Swaps phase and medium.",
      remediation: "Water is the continuous medium in milk.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Says gas in liquid.",
      remediation: "That is a foam; milk is fat in water.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Says solid in gas.",
      remediation: "That is smoke; milk is fat in water.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Turns the heads inward.",
      remediation: "The ionic heads face the water; the tails hide inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Lays the molecules flat.",
      remediation: "In water above a certain concentration they cluster into spheres.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Thinks soap never clusters.",
      remediation: "Above a certain concentration soap forms micelles.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.1 (A)" },
      stem: t`Colloidal particles have diameters between`,
      verify: { kind: "value", inputs: {  }, params: { q: "size" } },
      options: [
        { key: "A", text: t`$10^{-3}$ m and $10^{-1}$ m`, correct: false, misconceptionId: "C05-M3", value: "e3_e1" },
        { key: "B", text: t`$10^{-6}$ m and $10^{-4}$ m`, correct: false, misconceptionId: "C05-M2", value: "e6_e4" },
        { key: "C", text: t`$10^{-10}$ m and $10^{-9}$ m`, correct: false, misconceptionId: "C05-M1", value: "e10_e9" },
        { key: "D", text: t`$10^{-9}$ m and $10^{-6}$ m`, correct: true, value: "e9_e6" },
      ],
      solution: {
        steps: [
          t`Colloidal particles are 1 to 1000 nm.`,
          t`$10^{-9}$ to $10^{-6}$ m.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.1 (B)" },
      stem: t`Gum in water is an example of`,
      verify: { kind: "value", inputs: {  }, params: { q: "gum" } },
      options: [
        { key: "A", text: t`a lyophilic sol`, correct: true, value: "lyophilic" },
        { key: "B", text: t`a suspension`, correct: false, misconceptionId: "C05-M5", value: "suspension" },
        { key: "C", text: t`a lyophobic sol`, correct: false, misconceptionId: "C05-M6", value: "lyophobic" },
        { key: "D", text: t`a true solution`, correct: false, misconceptionId: "C05-M4", value: "true_solution" },
      ],
      solution: {
        steps: [
          t`Gum attracts water and forms a stable sol.`,
          t`Lyophilic.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.1 (D)" },
      stem: t`Fruit jam is an example of`,
      verify: { kind: "value", inputs: {  }, params: { q: "jam" } },
      options: [
        { key: "A", text: t`a sol`, correct: false, misconceptionId: "C05-M7", value: "sol" },
        { key: "B", text: t`a gel`, correct: true, value: "gel" },
        { key: "C", text: t`an emulsion`, correct: false, misconceptionId: "C05-M8", value: "emulsion" },
        { key: "D", text: t`a true solution`, correct: false, misconceptionId: "C05-M9", value: "true_solution" },
      ],
      solution: {
        steps: [
          t`Jam is liquid held in a solid network.`,
          t`A gel.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (E)" },
      stem: t`In milk, the dispersed phase and the dispersion medium are`,
      verify: { kind: "value", inputs: {  }, params: { q: "milk" } },
      options: [
        { key: "A", text: t`a gas dispersed in a liquid`, correct: false, misconceptionId: "C05-M11", value: "gas_in_liquid" },
        { key: "B", text: t`a solid dispersed in a gas`, correct: false, misconceptionId: "C05-M12", value: "solid_in_gas" },
        { key: "C", text: t`liquid fat dispersed in water`, correct: true, value: "fat_in_water" },
        { key: "D", text: t`water dispersed in liquid fat`, correct: false, misconceptionId: "C05-M10", value: "water_in_fat" },
      ],
      solution: {
        steps: [
          t`Fat droplets are spread through water.`,
          t`Liquid fat in water.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.9" },
      stem: t`In a soap micelle in water,`,
      verify: { kind: "value", inputs: {  }, params: { q: "micelle" } },
      options: [
        { key: "A", text: t`soap never gathers into clusters`, correct: false, misconceptionId: "C05-M15", value: "never_aggregates" },
        { key: "B", text: t`the ionic heads point inward`, correct: false, misconceptionId: "C05-M13", value: "heads_in" },
        { key: "C", text: t`the soap molecules lie flat in a single layer`, correct: false, misconceptionId: "C05-M14", value: "flat_layer" },
        { key: "D", text: t`the hydrocarbon tails point inward and the ionic heads face the water`, correct: true, value: "tails_in" },
      ],
      solution: {
        steps: [
          t`Tails avoid water; heads attract it.`,
          t`Tails inward, heads outward.`,
        ],
      },
    },
  ],
};
