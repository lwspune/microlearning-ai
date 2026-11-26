import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Rutherford fired α-particles at gold foil. A few bounced straight back. He said it was as if a shell fired at tissue paper had rebounded. What did that reveal?`,
    reveal: t`That the atom's positive charge and mass are packed into a tiny, dense nucleus.`,
  },
  explanation: {
    intuition: [
      t`Most α-particles passed straight through: the atom is mostly empty.`,
      t`A few were deflected strongly: a small, dense, positive nucleus.`,
      t`Electrons move around the nucleus.`,
      t`But the model left unanswered questions.`,
    ],
    formal: [
      {
        title: "The model",
        points: [
          t`A tiny nucleus holds the positive charge and almost all the mass.`,
          t`The nucleus is about $10^{-15}$ m across; the atom about $10^{-10}$ m.`,
          t`Electrons revolve around the nucleus.`,
        ],
      },
      {
        title: "Drawbacks",
        points: [
          t`A revolving charge should radiate energy and spiral into the nucleus, so atoms would collapse.`,
          t`It cannot explain why atoms give line spectra.`,
          t`It says nothing about how electrons are arranged.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why did Thomson's model fail Rutherford's test?`,
      steps: [
        t`A spread-out positive charge cannot turn back a fast α-particle.`,
        t`Only a concentrated nucleus can.`,
      ],
      answer: t`It could not explain the rebounds`,
    },
    visualSpec: t`Fire α-particles at a row of atoms and trace which pass, which swerve and which rebound.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks gold atoms have no nucleus.",
      remediation: "The rare rebounds prove a nucleus; most particles miss it.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks α-particles are too small to be deflected.",
      remediation: "Some were deflected strongly; most simply met empty space.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks the nucleus is negative.",
      remediation: "A positive nucleus repels positive α-particles.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Thinks electrons are heavy.",
      remediation: "Electrons are far too light to turn back an α-particle.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Keeps Thomson's uniform sphere.",
      remediation: "A spread-out charge cannot cause rebounds.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Blames holes in the foil.",
      remediation: "Holes would let particles through, not bounce them back.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks the orbiting electron keeps its energy.",
      remediation: "Classically an accelerating charge radiates energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks the electron flies off.",
      remediation: "Losing energy, it would fall inward, not escape.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks the electron stops.",
      remediation: "It would spiral into the nucleus as it loses energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks the model could not explain the nucleus.",
      remediation: "Explaining the nucleus was its success.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks the model could not explain scattering.",
      remediation: "Scattering was exactly what it explained.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Thinks the model could not explain empty space.",
      remediation: "The model explained the empty space; line spectra were its failure.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Inverts the ratio.",
      remediation: t`Atom ÷ nucleus $= 10^{-10} / 10^{-15} = 10^5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Multiplies the sizes.",
      remediation: "Divide to compare sizes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Takes the nucleus's exponent.",
      remediation: t`Divide the two sizes: $10^{-10} \div 10^{-15}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "authored" },
      stem: t`In Rutherford's experiment most α-particles passed straight through the gold foil. This showed that`,
      verify: { kind: "value", inputs: {  }, params: { q: "most_through" } },
      options: [
        { key: "A", text: t`α-particles are too small to be deflected`, correct: false, misconceptionId: "C03-M2", value: "too_small" },
        { key: "B", text: t`the nucleus is negatively charged`, correct: false, misconceptionId: "C03-M3", value: "negative_nucleus" },
        { key: "C", text: t`gold atoms have no nucleus`, correct: false, misconceptionId: "C03-M1", value: "no_nucleus" },
        { key: "D", text: t`most of the atom is empty space`, correct: true, value: "empty_space" },
      ],
      solution: {
        steps: [
          t`Most particles met nothing.`,
          t`The atom is mostly empty space.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "authored" },
      stem: t`A very few α-particles bounced straight back from the foil. This showed that`,
      verify: { kind: "value", inputs: {  }, params: { q: "bounce_back" } },
      options: [
        { key: "A", text: t`the positive charge and mass are packed into a tiny nucleus`, correct: true, value: "tiny_nucleus" },
        { key: "B", text: t`the foil had holes in it`, correct: false, misconceptionId: "C03-M6", value: "holes" },
        { key: "C", text: t`the atom is a uniform sphere of positive charge`, correct: false, misconceptionId: "C03-M5", value: "uniform_sphere" },
        { key: "D", text: t`electrons are very heavy`, correct: false, misconceptionId: "C03-M4", value: "heavy_electrons" },
      ],
      solution: {
        steps: [
          t`Only a dense positive centre can turn a particle back.`,
          t`A tiny nucleus.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (E)" },
      stem: t`By classical physics, an electron orbiting a nucleus should`,
      verify: { kind: "value", inputs: {  }, params: { q: "orbiting" } },
      options: [
        { key: "A", text: t`orbit for ever without losing energy`, correct: false, misconceptionId: "C03-M7", value: "keeps_energy" },
        { key: "B", text: t`radiate energy and spiral into the nucleus`, correct: true, value: "spiral_in" },
        { key: "C", text: t`stop moving`, correct: false, misconceptionId: "C03-M9", value: "stops" },
        { key: "D", text: t`fly off into space`, correct: false, misconceptionId: "C03-M8", value: "flies_off" },
      ],
      solution: {
        steps: [
          t`A charge moving in a circle radiates.`,
          t`It loses energy and spirals in.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/structure-of-atom-11-chem/Ex Q.6 (E)" },
      stem: t`Rutherford's model could not explain`,
      verify: { kind: "value", inputs: {  }, params: { q: "cannot_explain" } },
      options: [
        { key: "A", text: t`the scattering of α-particles`, correct: false, misconceptionId: "C03-M11", value: "scattering" },
        { key: "B", text: t`why the atom is mostly empty`, correct: false, misconceptionId: "C03-M12", value: "empty_space" },
        { key: "C", text: t`the line spectra of atoms`, correct: true, value: "line_spectra" },
        { key: "D", text: t`the existence of the nucleus`, correct: false, misconceptionId: "C03-M10", value: "nucleus" },
      ],
      solution: {
        steps: [
          t`Atoms give sharp lines of light.`,
          t`The model had no explanation.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`A nucleus is about $10^{-15}$ m across and an atom about $10^{-10}$ m. The atom is about how many times wider?`,
      verify: { kind: "value", inputs: {  }, params: { q: "size" } },
      options: [
        { key: "A", text: t`$10^{15}$`, correct: false, misconceptionId: "C03-M15", value: "e_15" },
        { key: "B", text: t`$10^{-5}$`, correct: false, misconceptionId: "C03-M13", value: "e_minus_5" },
        { key: "C", text: t`$10^{-25}$`, correct: false, misconceptionId: "C03-M14", value: "e_minus_25" },
        { key: "D", text: t`$10^{5}$`, correct: true, value: "e_5" },
      ],
      solution: {
        steps: [
          t`$10^{-10} \div 10^{-15}$.`,
          t`$= 10^{5}$.`,
        ],
      },
    },
  ],
};
