import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Your body digests a meal in hours at 37 °C; in a lab the same breakdown needs strong acid and boiling. What is the body's secret?`,
    reveal: t`Enzymes: protein catalysts that speed reactions millions of times at body temperature.`,
  },
  explanation: {
    intuition: [
      t`**Enzymes** are biocatalysts, nearly all proteins (**ribozymes** are RNA).`,
      t`They are unchanged by the reaction.`,
      t`Each acts on a particular substrate.`,
    ],
    formal: [
      {
        title: "Structure and action",
        points: [
          t`**Apoenzyme** (protein) + cofactor = **holoenzyme**.`,
          t`Fischer's lock and key; **Koshland's induced fit**: the enzyme changes shape as the substrate binds.`,
          t`$K_m$: substrate concentration at half $V_{max}$; **low $K_m$ = high affinity**.`,
        ],
      },
      {
        title: "Factors and classes",
        points: [
          t`Substrate concentration, temperature, pH and inhibitors affect rate.`,
          t`Six classes: oxidoreductases, transferases, **hydrolases**, lyases, isomerases, ligases.`,
          t`Sucrase, which splits sucrose with water, is a hydrolase.`,
        ],
      },
    ],
    worked: {
      prompt: t`Enzyme A has $K_m$ 2 mM, enzyme B 10 mM for the same substrate. Which binds it more strongly?`,
      steps: [
        t`Lower $K_m$ means higher affinity.`,
        t`A has the lower value.`,
      ],
      answer: t`Enzyme A`,
    },
    visualSpec: t`An enzyme changing shape as its substrate fits into the active site.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks isoenzyme.",
      remediation: "Isoenzymes are variants.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks denatured.",
      remediation: "Denatured enzymes are inactive.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks none.",
      remediation: "It is a holoenzyme.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Reverses it.",
      remediation: t`Low $K_m$ is high affinity.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Says no product.",
      remediation: "The reaction still runs.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Says saturated.",
      remediation: t`That is at $V_{max}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks Fischer.",
      remediation: "Fischer gave lock and key.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks Singer.",
      remediation: "Singer modelled membranes.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks Chargaff.",
      remediation: "Chargaff studied DNA bases.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks ligase.",
      remediation: "Ligases join molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks isomerase.",
      remediation: "Isomerases rearrange.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks transferase.",
      remediation: "Transferases move groups.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Picks proteases.",
      remediation: "Those are proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Picks holoenzymes.",
      remediation: "Those have protein parts.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Picks apoenzymes.",
      remediation: "Those are proteins.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q1(G)" },
      stem: t`An apoenzyme bound to its inorganic ion or metallo-organic group forms a`,
      verify: { kind: "value", inputs: {  }, params: { q: "holo" } },
      options: [
        { key: "A", text: t`none of these`, correct: false, misconceptionId: "C05-M3", value: "none_e" },
        { key: "B", text: t`holoenzyme`, correct: true, value: "holoenzyme_e" },
        { key: "C", text: t`isoenzyme`, correct: false, misconceptionId: "C05-M1", value: "isoenzyme_e" },
        { key: "D", text: t`denatured enzyme`, correct: false, misconceptionId: "C05-M2", value: "denatured_e" },
      ],
      solution: {
        steps: [
          t`Apoenzyme plus cofactor.`,
          t`Holoenzyme.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q1(H)" },
      stem: t`A lower Km value means the enzyme has`,
      verify: { kind: "value", inputs: {  }, params: { q: "km" } },
      options: [
        { key: "A", text: t`less affinity for its substrate`, correct: false, misconceptionId: "C05-M4", value: "less_affinity" },
        { key: "B", text: t`no product formed`, correct: false, misconceptionId: "C05-M5", value: "no_product" },
        { key: "C", text: t`all active sites saturated`, correct: false, misconceptionId: "C05-M6", value: "all_saturated" },
        { key: "D", text: t`a higher affinity for its substrate`, correct: true, value: "higher_affinity" },
      ],
      solution: {
        steps: [
          t`Low $K_m$.`,
          t`Higher affinity.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q3(I)" },
      stem: t`The induced fit model of enzyme action was proposed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "induced" } },
      options: [
        { key: "A", text: t`Koshland`, correct: true, value: "koshland_s" },
        { key: "B", text: t`Fischer`, correct: false, misconceptionId: "C05-M7", value: "fischer_s" },
        { key: "C", text: t`Singer`, correct: false, misconceptionId: "C05-M8", value: "singer_s" },
        { key: "D", text: t`Chargaff`, correct: false, misconceptionId: "C05-M9", value: "chargaff_s" },
      ],
      solution: {
        steps: [
          t`Flexible enzyme.`,
          t`Koshland.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q4(C)" },
      stem: t`Sucrase, which splits sucrose with water, is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "sucrase" } },
      options: [
        { key: "A", text: t`isomerase`, correct: false, misconceptionId: "C05-M11", value: "isomerase_c" },
        { key: "B", text: t`transferase`, correct: false, misconceptionId: "C05-M12", value: "transferase_c" },
        { key: "C", text: t`hydrolase`, correct: true, value: "hydrolase_c" },
        { key: "D", text: t`ligase`, correct: false, misconceptionId: "C05-M10", value: "ligase_c" },
      ],
      solution: {
        steps: [
          t`Splits with water.`,
          t`Hydrolase.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/biomolecules-11-bio/Ex Q5(G)" },
      stem: t`Enzymes that are not proteins are`,
      verify: { kind: "value", inputs: {  }, params: { q: "ribozyme" } },
      options: [
        { key: "A", text: t`ribozymes`, correct: true, value: "ribozymes_e" },
        { key: "B", text: t`proteases`, correct: false, misconceptionId: "C05-M13", value: "proteases_e" },
        { key: "C", text: t`holoenzymes`, correct: false, misconceptionId: "C05-M14", value: "holoenzymes_e" },
        { key: "D", text: t`apoenzymes`, correct: false, misconceptionId: "C05-M15", value: "apoenzymes_e" },
      ],
      solution: {
        steps: [
          t`RNA catalysts.`,
          t`Ribozymes.`,
        ],
      },
    },
  ],
};
