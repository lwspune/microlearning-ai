import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`People with AIDS rarely die of HIV itself. What kills them?`,
    reveal: t`Other infections. HIV destroys the helper T cells that run the immune system, so ordinary germs become deadly.`,
  },
  explanation: {
    intuition: [
      t`**AIDS**: Acquired Immuno Deficiency Syndrome, caused by **HIV**.`,
      t`**Cancer**: uncontrolled division of cells.`,
      t`Both are major health problems.`,
    ],
    formal: [
      {
        title: "AIDS",
        points: [
          t`HIV is an **RNA retrovirus**; it infects **helper T cells**.`,
          t`It spreads by sex, blood, shared needles, and mother to child.`,
          t`**ELISA** screens; the **Western blot** confirms.`,
        ],
      },
      {
        title: "Cancer",
        points: [
          t`A **benign** tumour stays in place; a **malignant** one invades other tissues and spreads (metastasis).`,
          t`**Carcinogens**: chemicals, radiation, oncogenic viruses, smoking.`,
          t`Asbestos affects the **lungs**.`,
        ],
      },
    ],
    worked: {
      prompt: t`An ELISA test for HIV is positive. What next?`,
      steps: [
        t`ELISA can give false positives.`,
        t`The Western blot confirms.`,
      ],
      answer: t`A Western blot test`,
    },
    visualSpec: t`HIV particles budding from a helper T cell.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says 'acute'.",
      remediation: "The A is 'acquired'.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says 'antibody'.",
      remediation: "The A is 'acquired'.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Says 'infection disease'.",
      remediation: "It is immuno deficiency.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks ELISA.",
      remediation: "ELISA is the first screen.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks Widal.",
      remediation: "Widal is for typhoid.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks Eastern blot.",
      remediation: "That is not used.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says a DNA virus.",
      remediation: "HIV's genome is RNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says a bacterium.",
      remediation: "HIV is a virus.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says a protozoan.",
      remediation: "HIV is a virus.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says it stays local.",
      remediation: "That is benign.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says it never divides.",
      remediation: "Cancer cells divide fast.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says it is harmless.",
      remediation: "Malignant tumours are dangerous.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks liver.",
      remediation: "Asbestos is inhaled.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks skin.",
      remediation: "Asbestos is inhaled.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks blood.",
      remediation: "Asbestos is inhaled.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q2(4)" },
      stem: t`AIDS stands for`,
      verify: { kind: "value", inputs: {  }, params: { q: "aids" } },
      options: [
        { key: "A", text: t`Antibody Immuno Deficiency Syndrome`, correct: false, misconceptionId: "C04-M2", value: "aids_antibody" },
        { key: "B", text: t`Acquired Infection Disease Syndrome`, correct: false, misconceptionId: "C04-M3", value: "aids_infection" },
        { key: "C", text: t`Acquired Immuno Deficiency Syndrome`, correct: true, value: "aids_full" },
        { key: "D", text: t`Acute Immune Disorder Syndrome`, correct: false, misconceptionId: "C04-M1", value: "aids_acute" },
      ],
      solution: {
        steps: [
          t`Acquired, immune, deficiency.`,
          t`Acquired Immuno Deficiency Syndrome.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(9)" },
      stem: t`The confirmatory test for HIV infection is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "test" } },
      options: [
        { key: "A", text: t`ELISA`, correct: false, misconceptionId: "C04-M4", value: "elisa_test" },
        { key: "B", text: t`Widal test`, correct: false, misconceptionId: "C04-M5", value: "widal_test" },
        { key: "C", text: t`Eastern blot`, correct: false, misconceptionId: "C04-M6", value: "eastern_blot" },
        { key: "D", text: t`Western blot`, correct: true, value: "western_blot" },
      ],
      solution: {
        steps: [
          t`After ELISA.`,
          t`Western blot.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q4(3)" },
      stem: t`HIV is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hiv" } },
      options: [
        { key: "A", text: t`a bacterium`, correct: false, misconceptionId: "C04-M8", value: "bacterium_c" },
        { key: "B", text: t`a protozoan`, correct: false, misconceptionId: "C04-M9", value: "protozoan_c" },
        { key: "C", text: t`an RNA retrovirus`, correct: true, value: "rna_retrovirus" },
        { key: "D", text: t`a DNA virus`, correct: false, misconceptionId: "C04-M7", value: "dna_virus" },
      ],
      solution: {
        steps: [
          t`RNA, reverse transcriptase.`,
          t`An RNA retrovirus.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q6(3)" },
      stem: t`A malignant tumour differs from a benign one because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "malignant" } },
      options: [
        { key: "A", text: t`stays in one place`, correct: false, misconceptionId: "C04-M10", value: "stays_local" },
        { key: "B", text: t`never divides`, correct: false, misconceptionId: "C04-M11", value: "never_divides" },
        { key: "C", text: t`is always harmless`, correct: false, misconceptionId: "C04-M12", value: "always_harmless" },
        { key: "D", text: t`invades other tissues and spreads`, correct: true, value: "invades_tissues" },
      ],
      solution: {
        steps: [
          t`Malignant means invasive.`,
          t`It invades and spreads.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q3(7)" },
      stem: t`Asbestos is a chemical carcinogen that affects the`,
      verify: { kind: "value", inputs: {  }, params: { q: "asbestos" } },
      options: [
        { key: "A", text: t`blood`, correct: false, misconceptionId: "C04-M15", value: "blood_t" },
        { key: "B", text: t`lungs`, correct: true, value: "lungs_t" },
        { key: "C", text: t`liver`, correct: false, misconceptionId: "C04-M13", value: "liver_t" },
        { key: "D", text: t`skin`, correct: false, misconceptionId: "C04-M14", value: "skin_t" },
      ],
      solution: {
        steps: [
          t`Inhaled fibres.`,
          t`Lungs.`,
        ],
      },
    },
  ],
};
