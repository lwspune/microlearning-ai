import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Plants take in $\ce{CO2}$ and give out oxygen. Which molecule does that oxygen come from?`,
    reveal: t`From water: the light reaction splits water to refill a photosystem, and oxygen is set free.`,
  },
  explanation: {
    intuition: [
      t`Light excites an electron in the reaction-centre chlorophyll.`,
      t`The lost electron is replaced by splitting water; oxygen is a byproduct.`,
      t`The energy is stored in **ATP** and $\ce{NADPH2}$, the assimilatory power.`,
    ],
    formal: [
      {
        title: "Photosystems",
        points: [
          t`**PS-II** has reaction centre $\mathrm{P_{680}}$; **PS-I** has $\mathrm{P_{700}}$.`,
          t`A photon boosts a centre electron; the chlorophyll gives it out and is oxidised.`,
          t`Electrons from PS-II pass along carriers and are trapped by $\mathrm{P_{700}}$ of PS-I.`,
        ],
      },
      {
        title: "Photolysis and products",
        points: [
          t`Oxidised $\mathrm{P_{680}}$ splits water, releasing protons, electrons and oxygen.`,
          t`Electrons from excited PS-I reduce $\ce{NADP+}$ to $\ce{NADPH2}$, the reducing power.`,
          t`ATP and $\ce{NADPH2}$ move into the stroma for the dark reaction.`,
        ],
      },
    ],
    worked: {
      prompt: t`What does the photolysis of water give?`,
      steps: [
        t`$\ce{4H2O}$ gives $\ce{2H2O}$ and $\ce{O2}$,`,
        t`plus $\ce{4H+}$ and $\ce{4e-}$.`,
      ],
      answer: t`Oxygen, protons and electrons.`,
    },
    visualSpec: t`PS-II and PS-I side by side on a thylakoid membrane, water split at PS-II and NADP⁺ reduced after PS-I.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks chlorophyll.",
      remediation: "It traps light but stays in the thylakoid.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks ADP.",
      remediation: "ADP is the spent form returned to the light reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks RuBP.",
      remediation: "RuBP accepts CO₂ in the stroma.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Leaves out oxygen.",
      remediation: "Oxygen is set free.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Leaves out electrons.",
      remediation: "Electrons refill PS-II.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Leaves out protons.",
      remediation: "Protons go to NADP⁺.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks P₇₀₀.",
      remediation: "P₇₀₀ is the centre of PS-I.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks chlorophyll b.",
      remediation: "It is an antenna pigment.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks carotene.",
      remediation: "It is an accessory pigment.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks NADP⁺.",
      remediation: "NADP⁺ accepts electrons; it does not give them.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks PS-I.",
      remediation: "PS-I passes electrons on to NADP⁺.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks CO₂.",
      remediation: "CO₂ is used in the dark reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks oxygen.",
      remediation: "Oxygen is released, not reduced.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Picks ADP.",
      remediation: "ADP forms ATP; it is not reduced.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Picks PS-II.",
      remediation: "Electrons do not go back to PS-II.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(B)" },
      stem: t`Energy is carried from the light reaction to the dark reaction by`,
      verify: { kind: "value", inputs: {  }, params: { q: "carrier" } },
      options: [
        { key: "A", text: t`ADP`, correct: false, misconceptionId: "C03-M2", value: "adp_c" },
        { key: "B", text: t`RuBP`, correct: false, misconceptionId: "C03-M3", value: "rubp_c" },
        { key: "C", text: t`ATP`, correct: true, value: "atp_c" },
        { key: "D", text: t`chlorophyll`, correct: false, misconceptionId: "C03-M1", value: "chlorophyll_c" },
      ],
      solution: {
        steps: [
          t`ATP and $\ce{NADPH2}$ carry the energy.`,
          t`ATP.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(H)" },
      stem: t`The net result of the photo-oxidation of water is the release of`,
      verify: { kind: "value", inputs: {  }, params: { q: "photo_oxidation" } },
      options: [
        { key: "A", text: t`protons and oxygen`, correct: false, misconceptionId: "C03-M5", value: "proton_oxygen" },
        { key: "B", text: t`electrons and oxygen`, correct: false, misconceptionId: "C03-M6", value: "electron_oxygen" },
        { key: "C", text: t`protons, electrons and oxygen`, correct: true, value: "proton_electron_oxygen" },
        { key: "D", text: t`electrons and protons`, correct: false, misconceptionId: "C03-M4", value: "electron_proton" },
      ],
      solution: {
        steps: [
          t`Water gives $\ce{O2}$, $\ce{H+}$ and $\ce{e-}$.`,
          t`Protons, electrons and oxygen.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(A)" },
      stem: t`The reaction centre of photosystem II is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ps2_centre" } },
      options: [
        { key: "A", text: t`$\mathrm{P_{700}}$`, correct: false, misconceptionId: "C03-M7", value: "p700" },
        { key: "B", text: t`chlorophyll b`, correct: false, misconceptionId: "C03-M8", value: "chlorophyll_b" },
        { key: "C", text: t`carotene`, correct: false, misconceptionId: "C03-M9", value: "carotene_c" },
        { key: "D", text: t`$\mathrm{P_{680}}$`, correct: true, value: "p680" },
      ],
      solution: {
        steps: [
          t`PS-II has P₆₈₀.`,
          t`$\mathrm{P_{680}}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(J)" },
      stem: t`The oxidised reaction centre of PS-II regains its electrons from`,
      verify: { kind: "value", inputs: {  }, params: { q: "refill" } },
      options: [
        { key: "A", text: t`PS-I`, correct: false, misconceptionId: "C03-M11", value: "ps1_c" },
        { key: "B", text: t`$\ce{CO2}$`, correct: false, misconceptionId: "C03-M12", value: "co2_c" },
        { key: "C", text: t`water`, correct: true, value: "water_c" },
        { key: "D", text: t`$\ce{NADP+}$`, correct: false, misconceptionId: "C03-M10", value: "nadp_c" },
      ],
      solution: {
        steps: [
          t`Oxidised P₆₈₀ splits water.`,
          t`Water.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(A)" },
      stem: t`Electrons from excited PS-I are finally used to reduce`,
      verify: { kind: "value", inputs: {  }, params: { q: "acceptor" } },
      options: [
        { key: "A", text: t`$\ce{NADP+}$`, correct: true, value: "nadp_c" },
        { key: "B", text: t`oxygen`, correct: false, misconceptionId: "C03-M13", value: "oxygen_c" },
        { key: "C", text: t`ADP`, correct: false, misconceptionId: "C03-M14", value: "adp_c" },
        { key: "D", text: t`PS-II`, correct: false, misconceptionId: "C03-M15", value: "ps2_c" },
      ],
      solution: {
        steps: [
          t`Electrons go to $\ce{NADP+}$.`,
          t`It forms $\ce{NADPH2}$.`,
        ],
      },
    },
  ],
};
