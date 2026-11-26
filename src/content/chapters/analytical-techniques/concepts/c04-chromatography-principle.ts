import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "draft",
  hook: {
    prompt: t`A drop of black ink on wet paper spreads into rings of blue, pink and yellow. Black ink was a mixture all along. Why did its colours separate?`,
    reveal: t`Each dye clings to the paper to a different extent, so the moving water carries each one a different distance.`,
  },
  explanation: {
    intuition: [
      t`Chromatography has a **stationary phase** that stays put and a **mobile phase** that moves.`,
      t`Each component shares itself between the two.`,
      t`Components held more by the stationary phase move more slowly.`,
      t`So the components travel different distances and separate.`,
    ],
    formal: [
      {
        title: "Retention factor",
        points: [
          t`$R_f = \dfrac{\text{distance moved by the substance}}{\text{distance moved by the solvent}}$`,
          t`$R_f$ lies between 0 and 1.`,
          t`A larger $R_f$ means the substance moves further with the solvent.`,
          t`Under the same conditions a substance has a fixed $R_f$, which helps identify it.`,
        ],
      },
    ],
    worked: {
      prompt: t`A spot moves 4.5 cm while the solvent moves 9.0 cm. Find $R_f$.`,
      steps: [
        t`$R_f = 4.5 \div 9.0$.`,
        t`= 0.5.`,
      ],
      answer: t`0.5`,
    },
    visualSpec: t`Run a mixture up a strip and measure each spot's distance against the solvent front.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Inverts the ratio.",
      remediation: t`$R_f$ = spot distance ÷ solvent distance, never more than 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Subtracts the distances.",
      remediation: t`$R_f$ is a ratio, not a difference.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Uses the gap to the solvent front.",
      remediation: "Use the distance the spot moved from the start line.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Thinks $R_f$ is a whole number.`,
      remediation: t`$R_f$ is a fraction between 0 and 1.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Thinks $R_f$ can be negative.`,
      remediation: t`Distances are positive, so $R_f$ is too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Credits boiling points.",
      remediation: "Nothing is boiled; components share between two phases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Credits colour alone.",
      remediation: "Colourless substances separate too; it depends on the phases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks components react with the paper.",
      remediation: "Components are held reversibly, not changed.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks steam distillation.",
      remediation: "Chromatography is the technique widely used to separate and purify.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks solvent extraction.",
      remediation: "Extraction separates by solubility only; chromatography separates and purifies widely.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks filtration.",
      remediation: "Filtration only removes insoluble solids.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks stronger holding means faster movement.",
      remediation: "Held more strongly, a component moves more slowly.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks affinity does not matter.",
      remediation: "Affinity for the stationary phase sets how far a component moves.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks the component moves with the solvent front.",
      remediation: "Only a component not held at all keeps up with the front.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "authored" },
      stem: t`On a chromatogram a spot moves 3.2 cm while the solvent front moves 8.0 cm. What is its $R_f$?`,
      verify: { kind: "value", inputs: { s: "3.2", f: "8.0" }, params: { q: "rf" } },
      options: [
        { key: "A", text: t`$4.8$`, correct: false, misconceptionId: "C04-M2", value: "4.80000000000000" },
        { key: "B", text: t`$0.4$`, correct: true, value: "0.400000000000000" },
        { key: "C", text: t`$0.6$`, correct: false, misconceptionId: "C04-M3", value: "0.600000000000000" },
        { key: "D", text: t`$2.5$`, correct: false, misconceptionId: "C04-M1", value: "2.50000000000000" },
      ],
      solution: {
        steps: [
          t`$R_f = 3.2 \div 8.0$.`,
          t`= 0.4.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "authored" },
      stem: t`An $R_f$ value is always`,
      verify: { kind: "value", inputs: {  }, params: { q: "range" } },
      options: [
        { key: "A", text: t`greater than 1`, correct: false, misconceptionId: "C04-M1", value: "above_1" },
        { key: "B", text: t`a whole number`, correct: false, misconceptionId: "C04-M4", value: "whole_number" },
        { key: "C", text: t`between 0 and 1`, correct: true, value: "between_0_and_1" },
        { key: "D", text: t`negative`, correct: false, misconceptionId: "C04-M5", value: "negative" },
      ],
      solution: {
        steps: [
          t`A spot never passes the solvent front.`,
          t`So $0 \le R_f \le 1$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.2 (N)" },
      stem: t`Chromatography separates the components of a mixture because they`,
      verify: { kind: "value", inputs: {  }, params: { q: "principle" } },
      options: [
        { key: "A", text: t`have different colours`, correct: false, misconceptionId: "C04-M7", value: "colour" },
        { key: "B", text: t`react with the paper`, correct: false, misconceptionId: "C04-M8", value: "react_paper" },
        { key: "C", text: t`have different boiling points`, correct: false, misconceptionId: "C04-M6", value: "boiling_points" },
        { key: "D", text: t`share differently between the stationary and mobile phases, so they move at different rates`, correct: true, value: "different_rates" },
      ],
      solution: {
        steps: [
          t`Components share differently between the two phases.`,
          t`So they move at different rates.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-techniques-11-chem/Ex Q.1 (C)" },
      stem: t`Which technique is widely used in industry both to separate the components of a mixture and to purify them?`,
      verify: { kind: "value", inputs: {  }, params: { q: "industry" } },
      options: [
        { key: "A", text: t`chromatography`, correct: true, value: "chromatography" },
        { key: "B", text: t`solvent extraction`, correct: false, misconceptionId: "C04-M10", value: "solvent_extraction" },
        { key: "C", text: t`filtration`, correct: false, misconceptionId: "C04-M11", value: "filtration" },
        { key: "D", text: t`steam distillation`, correct: false, misconceptionId: "C04-M9", value: "steam_distillation" },
      ],
      solution: {
        steps: [
          t`Chromatography both separates and purifies.`,
          t`It is widely used in industry.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`A component that is held more strongly by the stationary phase`,
      verify: { kind: "value", inputs: {  }, params: { q: "affinity" } },
      options: [
        { key: "A", text: t`moves with the solvent front`, correct: false, misconceptionId: "C04-M14", value: "with_front" },
        { key: "B", text: t`moves more slowly and has a lower $R_f$`, correct: true, value: "slower_lower_rf" },
        { key: "C", text: t`moves faster and has a higher $R_f$`, correct: false, misconceptionId: "C04-M12", value: "faster_higher_rf" },
        { key: "D", text: t`has the same $R_f$ as the others`, correct: false, misconceptionId: "C04-M13", value: "no_effect" },
      ],
      solution: {
        steps: [
          t`Held more strongly, it spends less time moving.`,
          t`It moves less far: lower $R_f$.`,
        ],
      },
    },
  ],
};
