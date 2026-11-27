import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`The small intestine is about 6 m long. Why does it not get tangled when you jump and run?`,
    reveal: t`Its coils are held in place by mesenteries, which also carry its blood vessels, lymph vessels and nerves.`,
  },
  explanation: {
    intuition: [
      t`Food moves along one long tube: the alimentary canal.`,
      t`Muscle waves push food; sphincters let it pass one way.`,
      t`The wall's inner layer, the **mucosa**, makes and protects.`,
    ],
    formal: [
      {
        title: "Oesophagus and intestine",
        points: [
          t`The **oesophagus** is a muscular tube about 25 cm long carrying the bolus to the stomach.`,
          t`**Peristalsis**: rhythmic waves of longitudinal and circular muscles push the food; mucus lubricates it.`,
          t`The **gastro-oesophageal (cardiac) sphincter** prevents back flow; **mesenteries** hold the intestine's coils.`,
        ],
      },
      {
        title: "Stomach wall",
        points: [
          t`The innermost layer, the **mucosa**, is folded into **rugae** and forms the **gastric glands**.`,
          t`Chief cells secrete pepsinogen; parietal cells secrete $\ce{HCl}$ and intrinsic factor.`,
          t`Mucus of goblet cells protects the lining from $\ce{HCl}$; the mucosa absorbs very little.`,
        ],
      },
    ],
    worked: {
      prompt: t`Food in the stomach does not flow back up the oesophagus. Why?`,
      steps: [
        t`A sphincter guards the junction of oesophagus and stomach.`,
        t`It lets food in and prevents back flow.`,
      ],
      answer: t`The gastro-oesophageal (cardiac) sphincter`,
    },
    visualSpec: t`A cross-section of the stomach wall with the folded mucosa (rugae) as the innermost layer.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks peristalsis.",
      remediation: "Peristalsis moves food; it does not hold coils.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks sphincters.",
      remediation: "Sphincters guard openings.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks rugae.",
      remediation: "Rugae are stomach folds.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Says gravity alone.",
      remediation: "Muscle waves push the food.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks mucus.",
      remediation: "Mucus only lubricates.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks the cardiac sphincter.",
      remediation: "It guards the stomach entry.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Picks sphincter of Oddi.",
      remediation: "It guards the hepato-pancreatic duct.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Picks mesentery.",
      remediation: "Mesenteries hold the intestine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Picks rugae.",
      remediation: "Rugae are folds, not a valve.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Picks villi.",
      remediation: "Villi are in the small intestine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Picks mesenteries.",
      remediation: "Mesenteries hold the intestine.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Picks gastric glands.",
      remediation: "Glands lie in the mucosa.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Picks HCl.",
      remediation: "HCl is what attacks the lining.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Picks pepsinogen.",
      remediation: "Pepsinogen is an enzyme precursor.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Picks intrinsic factor.",
      remediation: "It does not coat the lining.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q2(D)" },
      stem: t`The small intestine is about 6 m long, yet it does not get twisted when we run. Its coils are held by`,
      verify: { kind: "value", inputs: {  }, params: { q: "coils" } },
      options: [
        { key: "A", text: t`mesenteries`, correct: true, value: "mesenteries_t" },
        { key: "B", text: t`peristalsis`, correct: false, misconceptionId: "C02-M1", value: "peristalsis_t" },
        { key: "C", text: t`sphincters`, correct: false, misconceptionId: "C02-M2", value: "sphincters_t" },
        { key: "D", text: t`rugae`, correct: false, misconceptionId: "C02-M3", value: "rugae_t" },
      ],
      solution: {
        steps: [
          t`Coils are held together.`,
          t`Mesenteries.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q8" },
      stem: t`The bolus is pushed down the oesophagus to the stomach by`,
      verify: { kind: "value", inputs: {  }, params: { q: "push" } },
      options: [
        { key: "A", text: t`gravity alone`, correct: false, misconceptionId: "C02-M4", value: "gravity_alone" },
        { key: "B", text: t`mucus`, correct: false, misconceptionId: "C02-M5", value: "mucus_t" },
        { key: "C", text: t`the cardiac sphincter`, correct: false, misconceptionId: "C02-M6", value: "cardiac_sphincter" },
        { key: "D", text: t`peristalsis`, correct: true, value: "peristalsis_t" },
      ],
      solution: {
        steps: [
          t`Rhythmic muscle waves.`,
          t`Peristalsis.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q8" },
      stem: t`Back flow of food from the stomach into the oesophagus is prevented by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "backflow" } },
      options: [
        { key: "A", text: t`rugae`, correct: false, misconceptionId: "C02-M9", value: "rugae_t" },
        { key: "B", text: t`gastro-oesophageal (cardiac) sphincter`, correct: true, value: "cardiac_sphincter" },
        { key: "C", text: t`sphincter of Oddi`, correct: false, misconceptionId: "C02-M7", value: "oddi_sphincter" },
        { key: "D", text: t`mesentery`, correct: false, misconceptionId: "C02-M8", value: "mesenteries_t" },
      ],
      solution: {
        steps: [
          t`Junction of oesophagus and stomach.`,
          t`Cardiac sphincter.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q5" },
      stem: t`The irregular folds of the stomach mucosa are called`,
      verify: { kind: "value", inputs: {  }, params: { q: "folds" } },
      options: [
        { key: "A", text: t`gastric glands`, correct: false, misconceptionId: "C02-M12", value: "gastric_glands" },
        { key: "B", text: t`rugae`, correct: true, value: "rugae_t" },
        { key: "C", text: t`villi`, correct: false, misconceptionId: "C02-M10", value: "villi_t" },
        { key: "D", text: t`mesenteries`, correct: false, misconceptionId: "C02-M11", value: "mesenteries_t" },
      ],
      solution: {
        steps: [
          t`Folds of gastric mucosa.`,
          t`Rugae.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q5" },
      stem: t`The inner lining of the stomach is protected from its own $\ce{HCl}$ by`,
      verify: { kind: "value", inputs: {  }, params: { q: "protect" } },
      options: [
        { key: "A", text: t`intrinsic factor`, correct: false, misconceptionId: "C02-M15", value: "intrinsic_factor" },
        { key: "B", text: t`mucus from goblet cells`, correct: true, value: "mucus_goblet" },
        { key: "C", text: t`$\ce{HCl}$ from parietal cells`, correct: false, misconceptionId: "C02-M13", value: "hcl_parietal" },
        { key: "D", text: t`pepsinogen from chief cells`, correct: false, misconceptionId: "C02-M14", value: "pepsinogen_chief" },
      ],
      solution: {
        steps: [
          t`Goblet cells line the mucosa.`,
          t`Their mucus protects it.`,
        ],
      },
    },
  ],
};
