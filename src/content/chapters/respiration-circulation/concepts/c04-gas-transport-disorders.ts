import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A person in a closed garage with a running engine grows breathless and faints, though the air still has oxygen. Why?`,
    reveal: t`Carbon monoxide: haemoglobin grabs it far more readily than oxygen, so the blood stops carrying oxygen.`,
  },
  explanation: {
    intuition: [
      t`Blood carries oxygen from the lungs and $\ce{CO2}$ back.`,
      t`Haemoglobin in RBCs does most of the work.`,
      t`Disorders of the airways or alveoli reduce exchange.`,
    ],
    formal: [
      {
        title: "Transport",
        points: [
          t`About **97%** of $\ce{O2}$ goes as **oxyhaemoglobin**; 3% dissolved in plasma.`,
          t`$\ce{CO}$ binds haemoglobin about **250 times** more strongly than $\ce{O2}$, forming carboxyhaemoglobin.`,
          t`Most $\ce{CO2}$ travels as bicarbonate.`,
        ],
      },
      {
        title: "Disorders",
        points: [
          t`**Asthma**: constricted bronchioles, mucus, wheezing; often an allergy.`,
          t`**Emphysema**: breakdown of alveoli; shortness of breath.`,
          t`**Sinusitis**: inflamed sinuses; **laryngitis**: inflamed larynx, hoarse voice.`,
        ],
      },
    ],
    worked: {
      prompt: t`How is a person with CO poisoning treated?`,
      steps: [
        t`Move them to fresh air.`,
        t`Give pure oxygen to displace the CO.`,
      ],
      answer: t`Fresh air and oxygen`,
    },
    visualSpec: t`A haemoglobin molecule with $\ce{O2}$ at three sites and $\ce{CO}$ locked at the fourth.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says equal.",
      remediation: "CO binds far more strongly.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says less.",
      remediation: "CO binds more strongly.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Says twice.",
      remediation: "It is about 250 times.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks emphysema.",
      remediation: "Emphysema breaks alveoli.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks sinusitis.",
      remediation: "Sinusitis is in the sinuses.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks laryngitis.",
      remediation: "Laryngitis is in the larynx.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks asthma.",
      remediation: "Asthma narrows bronchioles.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks sinusitis.",
      remediation: "Sinusitis is in the sinuses.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks silicosis.",
      remediation: "Silicosis is dust scarring.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks laryngitis.",
      remediation: "Laryngitis is in the larynx.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks asthma.",
      remediation: "Asthma is in the bronchioles.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks emphysema.",
      remediation: "Emphysema is in the alveoli.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says dissolved.",
      remediation: "Only 3% is dissolved.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says bicarbonate.",
      remediation: t`That is how $\ce{CO2}$ travels.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says carbamino.",
      remediation: t`That carries $\ce{CO2}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q7(1)" },
      stem: t`Working with an engine running in a closed garage, Smita faints. Compared with oxygen, haemoglobin binds carbon monoxide`,
      verify: { kind: "value", inputs: {  }, params: { q: "co" } },
      options: [
        { key: "A", text: t`about 250 times less strongly`, correct: false, misconceptionId: "C04-M2", value: "aff_250_less" },
        { key: "B", text: t`about twice as strongly`, correct: false, misconceptionId: "C04-M3", value: "aff_2_more" },
        { key: "C", text: t`about 250 times more strongly`, correct: true, value: "aff_250_more" },
        { key: "D", text: t`equally strongly`, correct: false, misconceptionId: "C04-M1", value: "aff_equal" },
      ],
      solution: {
        steps: [
          t`CO poisoning blocks haemoglobin.`,
          t`About 250 times more strongly.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2025 Q. 7" },
      stem: t`Constricted bronchioles, mucus in the bronchioles and periodic wheezing are symptoms of`,
      verify: { kind: "value", inputs: {  }, params: { q: "asthma" } },
      options: [
        { key: "A", text: t`emphysema`, correct: false, misconceptionId: "C04-M4", value: "emphysema_d" },
        { key: "B", text: t`sinusitis`, correct: false, misconceptionId: "C04-M5", value: "sinusitis_d" },
        { key: "C", text: t`laryngitis`, correct: false, misconceptionId: "C04-M6", value: "laryngitis_d" },
        { key: "D", text: t`asthma`, correct: true, value: "asthma_d" },
      ],
      solution: {
        steps: [
          t`Wheezing, narrowed bronchioles.`,
          t`Asthma.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2024 Q. 13" },
      stem: t`Breakdown of the alveoli with shortness of breath is`,
      verify: { kind: "value", inputs: {  }, params: { q: "alveoli" } },
      options: [
        { key: "A", text: t`sinusitis`, correct: false, misconceptionId: "C04-M8", value: "sinusitis_d" },
        { key: "B", text: t`silicosis`, correct: false, misconceptionId: "C04-M9", value: "silicosis_d" },
        { key: "C", text: t`emphysema`, correct: true, value: "emphysema_d" },
        { key: "D", text: t`asthma`, correct: false, misconceptionId: "C04-M7", value: "asthma_d" },
      ],
      solution: {
        steps: [
          t`Alveoli break down.`,
          t`Emphysema.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Respiration and Circulation/2024 Q. 13" },
      stem: t`Inflammation of the sinuses with mucous discharge is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sinus" } },
      options: [
        { key: "A", text: t`laryngitis`, correct: false, misconceptionId: "C04-M10", value: "laryngitis_d" },
        { key: "B", text: t`asthma`, correct: false, misconceptionId: "C04-M11", value: "asthma_d" },
        { key: "C", text: t`emphysema`, correct: false, misconceptionId: "C04-M12", value: "emphysema_d" },
        { key: "D", text: t`sinusitis`, correct: true, value: "sinusitis_d" },
      ],
      solution: {
        steps: [
          t`Inflamed sinuses.`,
          t`Sinusitis.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/respiration-circulation-12-bio/Ex Q7(10)" },
      stem: t`About 97% of the oxygen in blood is carried`,
      verify: { kind: "value", inputs: {  }, params: { q: "oxygen" } },
      options: [
        { key: "A", text: t`as carbaminohaemoglobin`, correct: false, misconceptionId: "C04-M15", value: "carbamino_t" },
        { key: "B", text: t`as oxyhaemoglobin in RBCs`, correct: true, value: "oxyhaemoglobin_t" },
        { key: "C", text: t`dissolved in plasma`, correct: false, misconceptionId: "C04-M13", value: "dissolved_plasma" },
        { key: "D", text: t`as bicarbonate`, correct: false, misconceptionId: "C04-M14", value: "bicarbonate_t" },
      ],
      solution: {
        steps: [
          t`Bound to haemoglobin.`,
          t`As oxyhaemoglobin.`,
        ],
      },
    },
  ],
};
