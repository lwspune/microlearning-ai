import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A plant can make ATP with only one photosystem working. Why does it need two?`,
    reveal: t`One photosystem cycling electrons makes only ATP; both are needed to split water and make $\ce{NADPH2}$.`,
  },
  explanation: {
    intuition: [
      t`**Photophosphorylation** makes ATP from ADP using light energy.`,
      t`**Cyclic**: electrons leave PS-I and return to it.`,
      t`**Non-cyclic**: electrons run from water to PS-II to PS-I to $\ce{NADP+}$.`,
    ],
    formal: [
      {
        title: "Cyclic flow",
        points: [
          t`Only PS-I is involved.`,
          t`No water is split, so no oxygen is evolved.`,
          t`Only ATP is formed.`,
        ],
      },
      {
        title: "Non-cyclic flow",
        points: [
          t`Both PS-II and PS-I work; electrons from PS-II never return to it.`,
          t`Water refills PS-II, so oxygen is evolved.`,
          t`ATP and $\ce{NADPH2}$ form; ATP forms as protons diffuse out into the stroma.`,
        ],
      },
    ],
    worked: {
      prompt: t`Light reaches only PS-I. Will oxygen be evolved?`,
      steps: [
        t`Only cyclic flow runs.`,
        t`No water is split.`,
      ],
      answer: t`No: only ATP forms.`,
    },
    visualSpec: t`The scheme: water to PS-II, up to an acceptor, through the cytochrome complex (ATP), to PS-I, then to NADP⁺.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says only PS-I.",
      remediation: "That is cyclic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says only ATP.",
      remediation: "That is cyclic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Says electrons return.",
      remediation: "That is cyclic.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Adds NADPH₂.",
      remediation: "NADPH₂ needs non-cyclic flow.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says NADPH₂ only.",
      remediation: "Cyclic flow makes ATP alone.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Adds oxygen.",
      remediation: "No water is split.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says water makes ATP.",
      remediation: "ATP forms as protons diffuse.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says PS-I uses water.",
      remediation: "Water refills PS-II.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says light alone.",
      remediation: "Electron-deficient PS-II oxidises water.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks PS-I.",
      remediation: "Water refills PS-II; PS-I gets its electrons from PS-II.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks NADP⁺.",
      remediation: "NADP⁺ is the end of the chain.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks cytochrome.",
      remediation: "It lies between the photosystems.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says NADP⁺ reduced.",
      remediation: "That makes NADPH₂.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says water split.",
      remediation: "That gives electrons and oxygen.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says light on ADP.",
      remediation: "A proton gradient drives ATP formation.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q1(D)" },
      stem: t`Non-cyclic photophosphorylation differs from cyclic photophosphorylation in that it`,
      verify: { kind: "value", inputs: {  }, params: { q: "non_cyclic" } },
      options: [
        { key: "A", text: t`forms only ATP`, correct: false, misconceptionId: "C04-M2", value: "atp_only" },
        { key: "B", text: t`returns electrons to the same photosystem`, correct: false, misconceptionId: "C04-M3", value: "electrons_return" },
        { key: "C", text: t`evolves oxygen and forms ATP and $\ce{NADPH2}$`, correct: true, value: "oxygen_and_power" },
        { key: "D", text: t`involves only PS-I`, correct: false, misconceptionId: "C04-M1", value: "only_ps1" },
      ],
      solution: {
        steps: [
          t`Non-cyclic flow splits water.`,
          t`Oxygen, ATP and $\ce{NADPH2}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(B)" },
      stem: t`Cyclic photophosphorylation forms`,
      verify: { kind: "value", inputs: {  }, params: { q: "cyclic" } },
      options: [
        { key: "A", text: t`ATP and $\ce{NADPH2}$`, correct: false, misconceptionId: "C04-M4", value: "atp_nadph" },
        { key: "B", text: t`$\ce{NADPH2}$ only`, correct: false, misconceptionId: "C04-M5", value: "nadph_only" },
        { key: "C", text: t`ATP, $\ce{NADPH2}$ and oxygen`, correct: false, misconceptionId: "C04-M6", value: "atp_nadph_oxygen" },
        { key: "D", text: t`ATP only`, correct: true, value: "atp_only" },
      ],
      solution: {
        steps: [
          t`Electrons return to PS-I.`,
          t`ATP only.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(J)" },
      stem: t`Photolysis of water goes with non-cyclic photophosphorylation because`,
      verify: { kind: "value", inputs: {  }, params: { q: "photolysis" } },
      options: [
        { key: "A", text: t`PS-I takes its electrons from water`, correct: false, misconceptionId: "C04-M8", value: "ps1_refilled" },
        { key: "B", text: t`light splits water on its own, apart from electron flow`, correct: false, misconceptionId: "C04-M9", value: "light_alone" },
        { key: "C", text: t`PS-II loses electrons that never return and water replaces them`, correct: true, value: "ps2_refilled" },
        { key: "D", text: t`splitting water makes the ATP directly`, correct: false, misconceptionId: "C04-M7", value: "makes_atp_directly" },
      ],
      solution: {
        steps: [
          t`PS-II's electrons go on to PS-I.`,
          t`Water replaces them.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q4" },
      stem: t`In a correct scheme of non-cyclic photophosphorylation, the electrons from water go to`,
      verify: { kind: "value", inputs: {  }, params: { q: "scheme" } },
      options: [
        { key: "A", text: t`PS-I`, correct: false, misconceptionId: "C04-M10", value: "ps1_c" },
        { key: "B", text: t`$\ce{NADP+}$`, correct: false, misconceptionId: "C04-M11", value: "nadp_c" },
        { key: "C", text: t`the cytochrome complex`, correct: false, misconceptionId: "C04-M12", value: "cytochrome_c" },
        { key: "D", text: t`PS-II`, correct: true, value: "ps2_c" },
      ],
      solution: {
        steps: [
          t`The flow starts at PS-II.`,
          t`PS-II.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/photosynthesis-11-bio/Ex Q2(A)" },
      stem: t`In the light reaction, ATP is formed from ADP when`,
      verify: { kind: "value", inputs: {  }, params: { q: "atp_formed" } },
      options: [
        { key: "A", text: t`light falls directly on ADP`, correct: false, misconceptionId: "C04-M15", value: "light_on_adp" },
        { key: "B", text: t`protons diffuse from the thylakoid into the stroma`, correct: true, value: "protons_diffuse" },
        { key: "C", text: t`$\ce{NADP+}$ is reduced`, correct: false, misconceptionId: "C04-M13", value: "nadp_reduced" },
        { key: "D", text: t`water is split`, correct: false, misconceptionId: "C04-M14", value: "water_split" },
      ],
      solution: {
        steps: [
          t`Protons build up in the thylakoid.`,
          t`ATP forms as they diffuse out.`,
        ],
      },
    },
  ],
};
