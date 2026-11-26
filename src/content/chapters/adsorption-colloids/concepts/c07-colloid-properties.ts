import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Car headlights pierce fog as visible beams, but in clear air you cannot see the beam itself. What does fog do to the light?`,
    reveal: t`Its droplets are colloidal and scatter the light sideways into your eyes: the Tyndall effect.`,
  },
  explanation: {
    intuition: [
      t`Colloidal particles scatter light: the Tyndall effect.`,
      t`They jiggle constantly: Brownian motion.`,
      t`They carry charge, so they move in an electric field: electrophoresis.`,
      t`Added ions can neutralise them and make them coagulate.`,
    ],
    formal: [
      {
        title: "Properties",
        points: [
          t`**Tyndall effect**: the path of light through a colloid is visible.`,
          t`**Brownian motion**: zig-zag motion from uneven bombardment by medium molecules.`,
          t`**Electrophoresis**: charged particles move to the oppositely charged electrode.`,
        ],
      },
      {
        title: "Coagulation and emulsions",
        points: [
          t`**Hardy-Schulze rule**: the higher the charge of the oppositely charged ion, the stronger its coagulating power.`,
          t`For a negative sol: $\ce{Al^{3+}}$ > $\ce{Ba^{2+}}$ > $\ce{Na+}$.`,
          t`Emulsions: oil-in-water (milk) and water-in-oil (butter).`,
        ],
      },
    ],
    worked: {
      prompt: t`A sol of $\ce{Fe(OH)3}$ is positive. Which coagulates it best: $\ce{Cl-}$, $\ce{SO4^{2-}}$ or $\ce{PO4^{3-}}$?`,
      steps: [
        t`Negative ions coagulate a positive sol.`,
        t`Highest charge: $\ce{PO4^{3-}}$.`,
      ],
      answer: t`$\ce{PO4^{3-}}$`,
    },
    visualSpec: t`Shine a beam through a sol, then switch on an electric field and watch the particles drift.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Thinks the beam is invisible.",
      remediation: "Colloidal particles scatter light, so the path shows.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Thinks the light is absorbed.",
      remediation: "The light is scattered, not absorbed.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Thinks the sol glows.",
      remediation: "The sol scatters the incoming light; it makes none.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Credits convection.",
      remediation: "The motion is random, from collisions with medium molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks the particles are alive.",
      remediation: "Lifeless particles show it: the medium's molecules push them.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Credits charge attraction.",
      remediation: "Like-charged particles repel; the jiggling comes from molecular collisions.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Describes electro-osmosis.",
      remediation: "In electrophoresis the particles move, not the solvent.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Describes coagulation by heat.",
      remediation: "Electrophoresis is movement in an electric field.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Describes light scattering.",
      remediation: "That is the Tyndall effect.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks the smallest ion.",
      remediation: t`Charge, not size, decides: $\ce{Al^{3+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks an ion of the sol's own sign.",
      remediation: "Coagulating ions must be oppositely charged: cations for a negative sol.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks a heavier ion with lower charge.",
      remediation: t`$\ce{Al^{3+}}$'s triple charge beats $\ce{Ba^{2+}}$'s double.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says water-in-oil.",
      remediation: "Butter is water-in-oil; milk is oil-in-water.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says gel.",
      remediation: "Milk flows: it is an emulsion.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says foam.",
      remediation: "A foam is gas in liquid; milk is fat in water.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (K)" },
      stem: t`A beam of light is passed through a colloidal sol. Seen from the side,`,
      verify: { kind: "value", inputs: {  }, params: { q: "tyndall" } },
      options: [
        { key: "A", text: t`the light is fully absorbed`, correct: false, misconceptionId: "C07-M2", value: "absorbed" },
        { key: "B", text: t`the sol glows by itself`, correct: false, misconceptionId: "C07-M3", value: "glows" },
        { key: "C", text: t`the beam cannot be seen at all`, correct: false, misconceptionId: "C07-M1", value: "invisible" },
        { key: "D", text: t`its path is visible: the Tyndall effect`, correct: true, value: "path_visible" },
      ],
      solution: {
        steps: [
          t`Colloidal particles scatter light.`,
          t`The beam's path is visible: Tyndall effect.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (F)" },
      stem: t`Brownian motion of colloidal particles is caused by`,
      verify: { kind: "value", inputs: {  }, params: { q: "brownian" } },
      options: [
        { key: "A", text: t`uneven bombardment by molecules of the medium`, correct: true, value: "uneven_bombardment" },
        { key: "B", text: t`the particles being alive`, correct: false, misconceptionId: "C07-M5", value: "alive" },
        { key: "C", text: t`attraction between charged particles`, correct: false, misconceptionId: "C07-M6", value: "charge_attraction" },
        { key: "D", text: t`convection currents`, correct: false, misconceptionId: "C07-M4", value: "convection" },
      ],
      solution: {
        steps: [
          t`Medium molecules strike particles unevenly.`,
          t`The particles move in zig-zags.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (G)" },
      stem: t`Electrophoresis is`,
      verify: { kind: "value", inputs: {  }, params: { q: "electrophoresis" } },
      options: [
        { key: "A", text: t`the scattering of light by a sol`, correct: false, misconceptionId: "C07-M9", value: "scattering" },
        { key: "B", text: t`the movement of colloidal particles to an electrode in an electric field`, correct: true, value: "particles_to_electrode" },
        { key: "C", text: t`the movement of the solvent through a membrane`, correct: false, misconceptionId: "C07-M7", value: "solvent_moves" },
        { key: "D", text: t`coagulation of a sol by heating`, correct: false, misconceptionId: "C07-M8", value: "coagulation_heat" },
      ],
      solution: {
        steps: [
          t`Charged particles feel the field.`,
          t`They move to the oppositely charged electrode.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (F)" },
      stem: t`Which ion coagulates a negatively charged $\ce{As2S3}$ sol most effectively?`,
      verify: { kind: "value", inputs: {  }, params: { q: "hardy" } },
      options: [
        { key: "A", text: t`$\ce{PO4^{3-}}$`, correct: false, misconceptionId: "C07-M11", value: "phosphate" },
        { key: "B", text: t`$\ce{Na+}$`, correct: false, misconceptionId: "C07-M10", value: "na_ion" },
        { key: "C", text: t`$\ce{Al^{3+}}$`, correct: true, value: "al3" },
        { key: "D", text: t`$\ce{Ba^{2+}}$`, correct: false, misconceptionId: "C07-M12", value: "ba2" },
      ],
      solution: {
        steps: [
          t`A negative sol is coagulated by cations.`,
          t`Highest charge: $\ce{Al^{3+}}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/adsorption-colloids-11-chem/Ex Q.3 (O)" },
      stem: t`Milk is`,
      verify: { kind: "value", inputs: {  }, params: { q: "milk_type" } },
      options: [
        { key: "A", text: t`a water-in-oil emulsion`, correct: false, misconceptionId: "C07-M13", value: "water_in_oil" },
        { key: "B", text: t`a gel`, correct: false, misconceptionId: "C07-M14", value: "gel" },
        { key: "C", text: t`a foam`, correct: false, misconceptionId: "C07-M15", value: "foam" },
        { key: "D", text: t`an oil-in-water emulsion`, correct: true, value: "oil_in_water" },
      ],
      solution: {
        steps: [
          t`Fat droplets in water.`,
          t`Oil-in-water emulsion.`,
        ],
      },
    },
  ],
};
