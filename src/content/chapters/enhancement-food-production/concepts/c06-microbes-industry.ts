import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Penicillin was found growing on a mould in a dish. How is it made by the tonne today?`,
    reveal: t`In huge fermenters: the same mould is grown in tanks, and the antibiotic it makes is extracted.`,
  },
  explanation: {
    intuition: [
      t`Industry grows microbes in large **fermenters**.`,
      t`They make drinks, acids, enzymes, vitamins and medicines.`,
      t`Each product has its own microbe.`,
    ],
    formal: [
      {
        title: "Drinks and acids",
        points: [
          t`*Saccharomyces cerevisiae* (brewer's yeast) ferments malted **barley** to beer, and makes ethanol, wine and whisky.`,
          t`*Acetobacter aceti*: acetic acid (vinegar).`,
          t`*Aspergillus niger*: citric acid.`,
        ],
      },
      {
        title: "Medicines and vitamins",
        points: [
          t`Penicillin: *Penicillium chrysogenum*; streptomycin: *Streptomyces griseus*; chloromycetin: ***S. venezuelae***.`,
          t`Vitamin $\ce{B12}$: *Pseudomonas denitrificans*.`,
          t`Streptokinase from *Streptococcus* is a **clot buster**; invertase comes from yeast.`,
        ],
      },
    ],
    worked: {
      prompt: t`A heart patient has a clot in a coronary artery. Which microbial enzyme can dissolve it?`,
      steps: [
        t`Streptokinase is fibrinolytic.`,
        t`It breaks down fibrin clots.`,
      ],
      answer: t`Streptokinase`,
    },
    visualSpec: t`A stirred fermenter tank with inlets for air and nutrients and an outlet for product.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Picks *S. erythreus*.",
      remediation: "That gives erythromycin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Picks *P. chrysogenum*.",
      remediation: "That gives penicillin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Picks *S. griseus*.",
      remediation: "That gives streptomycin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Picks wheat.",
      remediation: "Beer uses barley malt.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Picks corn.",
      remediation: "Beer uses barley malt.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Picks molasses.",
      remediation: "Molasses is for ethanol and rum.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Picks *S. venezuelae*.",
      remediation: "That makes an antibiotic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Picks *A. niger*.",
      remediation: "That makes citric acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Picks *S. griseus*.",
      remediation: "That makes streptomycin.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Picks yeast.",
      remediation: "Yeast makes invertase.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Picks *Acetobacter*.",
      remediation: "It makes vinegar.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Picks *A. niger*.",
      remediation: "It makes citric acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Says antibiotic.",
      remediation: "It dissolves clots.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Says vaccine.",
      remediation: "It dissolves clots.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Says painkiller.",
      remediation: "It dissolves clots.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q1(1)" },
      stem: t`The antibiotic chloromycetin is obtained from`,
      verify: { kind: "value", inputs: {  }, params: { q: "chloromycetin" } },
      options: [
        { key: "A", text: t`*Streptomyces erythreus*`, correct: false, misconceptionId: "C06-M1", value: "s_erythreus" },
        { key: "B", text: t`*Penicillium chrysogenum*`, correct: false, misconceptionId: "C06-M2", value: "p_chrysogenum" },
        { key: "C", text: t`*Streptomyces griseus*`, correct: false, misconceptionId: "C06-M3", value: "s_griseus" },
        { key: "D", text: t`*Streptomyces venezuelae*`, correct: true, value: "s_venezuelae" },
      ],
      solution: {
        steps: [
          t`From *Streptomyces*.`,
          t`*S. venezuelae*.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q1(4)" },
      stem: t`The most common substrate for the industrial production of beer is`,
      verify: { kind: "value", inputs: {  }, params: { q: "beer" } },
      options: [
        { key: "A", text: t`barley`, correct: true, value: "barley_s" },
        { key: "B", text: t`wheat`, correct: false, misconceptionId: "C06-M4", value: "wheat_s" },
        { key: "C", text: t`corn`, correct: false, misconceptionId: "C06-M5", value: "corn_s" },
        { key: "D", text: t`sugarcane molasses`, correct: false, misconceptionId: "C06-M6", value: "molasses_s" },
      ],
      solution: {
        steps: [
          t`Malted cereal.`,
          t`Barley.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Enhancement of Food Production/2026 Q. 1(i)" },
      stem: t`The microbe used to make beverages such as wine and whisky is`,
      verify: { kind: "value", inputs: {  }, params: { q: "beverages" } },
      options: [
        { key: "A", text: t`*Saccharomyces cerevisiae*`, correct: true, value: "saccharomyces_c" },
        { key: "B", text: t`*Streptomyces venezuelae*`, correct: false, misconceptionId: "C06-M7", value: "s_venezuelae" },
        { key: "C", text: t`*Aspergillus niger*`, correct: false, misconceptionId: "C06-M8", value: "aspergillus_niger" },
        { key: "D", text: t`*Streptomyces griseus*`, correct: false, misconceptionId: "C06-M9", value: "s_griseus" },
      ],
      solution: {
        steps: [
          t`Brewer's yeast.`,
          t`*Saccharomyces cerevisiae*.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(3)" },
      stem: t`Vitamin $\ce{B12}$ is made commercially by`,
      verify: { kind: "value", inputs: {  }, params: { q: "b12" } },
      options: [
        { key: "A", text: t`*Aspergillus niger*`, correct: false, misconceptionId: "C06-M12", value: "aspergillus_niger" },
        { key: "B", text: t`*Pseudomonas denitrificans*`, correct: true, value: "pseudomonas_d" },
        { key: "C", text: t`*Saccharomyces cerevisiae*`, correct: false, misconceptionId: "C06-M10", value: "saccharomyces_c" },
        { key: "D", text: t`*Acetobacter aceti*`, correct: false, misconceptionId: "C06-M11", value: "acetobacter_aceti" },
      ],
      solution: {
        steps: [
          t`A bacterium.`,
          t`*Pseudomonas denitrificans*.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/food-production-12-bio/Ex Q2(6)" },
      stem: t`Streptokinase, made by *Streptococcus*, is used in medicine as a`,
      verify: { kind: "value", inputs: {  }, params: { q: "streptokinase" } },
      options: [
        { key: "A", text: t`clot buster`, correct: true, value: "clot_buster" },
        { key: "B", text: t`antibiotic`, correct: false, misconceptionId: "C06-M13", value: "antibiotic_u" },
        { key: "C", text: t`vaccine`, correct: false, misconceptionId: "C06-M14", value: "vaccine_u" },
        { key: "D", text: t`painkiller`, correct: false, misconceptionId: "C06-M15", value: "painkiller_u" },
      ],
      solution: {
        steps: [
          t`Fibrinolytic.`,
          t`Clot buster.`,
        ],
      },
    },
  ],
};
