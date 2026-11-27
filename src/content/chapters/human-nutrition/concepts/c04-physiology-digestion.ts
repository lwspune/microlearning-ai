import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`You feel hungry at your usual lunch time even before you see food. Why?`,
    reveal: t`Digestive secretions are under nerve and hormone control; the tenth cranial nerve and gastrin start gastric juice on time.`,
  },
  explanation: {
    intuition: [
      t`Each enzyme works only in its own pH.`,
      t`Some enzymes are made inactive and switched on where needed.`,
      t`Nerves and hormones release each juice at the right time.`,
    ],
    formal: [
      {
        title: "Enzymes and pH",
        points: [
          t`**Pepsin** acts in the acid of the stomach, at pH 1.8, turning proteins into peptones and proteoses.`,
          t`Salivary amylase acts at pH 6.8; trypsin and nucleotidase act in the alkaline small intestine.`,
          t`$\ce{HCl}$ activates pepsinogen to pepsin; **enterokinase** activates trypsinogen to trypsin.`,
        ],
      },
      {
        title: "Neurohormonal control",
        points: [
          t`Sight, smell or thought of food start saliva; the tenth cranial nerve and **gastrin** start gastric juice.`,
          t`**Secretin** inhibits gastric juice and stimulates bile, pancreatic and intestinal juice.`,
          t`**CCK** acts similarly and induces satiety; **GIP** also inhibits gastric secretion.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange pepsin, salivary amylase and trypsin by the pH of the medium they act in, lowest first.`,
      steps: [
        t`Pepsin acts at pH 1.8; amylase at 6.8.`,
        t`Trypsin acts in an alkaline medium, above 7.`,
      ],
      answer: t`Pepsin, salivary amylase, trypsin`,
    },
    visualSpec: t`A pH scale from 1 to 14 with pepsin near 1.8, salivary amylase at 6.8 and trypsin above 7.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks lipase.",
      remediation: "Lipase digests fats.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks galactose.",
      remediation: "Galactose is a sugar.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks proenzyme.",
      remediation: "The proenzyme is pepsinogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks salivary amylase.",
      remediation: "It acts at pH 6.8.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks trypsin.",
      remediation: "Trypsin acts in alkali.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks nucleotidase.",
      remediation: "It acts in alkali.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says more acidic.",
      remediation: "Bile salts make it alkaline.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says no protein left.",
      remediation: "Trypsin continues protein digestion.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says pepsin is absorbed.",
      remediation: "Pepsin stops in alkali.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks HCl.",
      remediation: "HCl activates pepsinogen.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks bile salts.",
      remediation: "Bile salts neutralise acidity.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks secretin.",
      remediation: "Secretin is a hormone.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks gastrin.",
      remediation: "Gastrin starts gastric juice.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks secretin.",
      remediation: "Secretin does not induce satiety.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks GIP.",
      remediation: "GIP inhibits gastric secretion.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q1(D)" },
      stem: t`Complete the analogy. Ptyalin : Amylase :: Pepsin : ....`,
      verify: { kind: "value", inputs: {  }, params: { q: "analogy" } },
      options: [
        { key: "A", text: t`Galactose`, correct: false, misconceptionId: "C04-M2", value: "galactose_t" },
        { key: "B", text: t`Proenzyme`, correct: false, misconceptionId: "C04-M3", value: "proenzyme_t" },
        { key: "C", text: t`Protease`, correct: true, value: "protease_t" },
        { key: "D", text: t`Lipase`, correct: false, misconceptionId: "C04-M1", value: "lipase_t" },
      ],
      solution: {
        steps: [
          t`Ptyalin is an amylase.`,
          t`Pepsin is a protease.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q6" },
      stem: t`Which of these enzymes works in a strongly acidic medium?`,
      verify: { kind: "value", inputs: {  }, params: { q: "acidic" } },
      options: [
        { key: "A", text: t`Salivary amylase`, correct: false, misconceptionId: "C04-M4", value: "salivary_amylase" },
        { key: "B", text: t`Trypsin`, correct: false, misconceptionId: "C04-M5", value: "trypsin_t" },
        { key: "C", text: t`Nucleotidase`, correct: false, misconceptionId: "C04-M6", value: "nucleotidase_t" },
        { key: "D", text: t`Pepsin`, correct: true, value: "pepsin_t" },
      ],
      solution: {
        steps: [
          t`Stomach acid, pH 1.8.`,
          t`Pepsin.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q2(C)" },
      stem: t`The digestive action of pepsin stops when food reaches the small intestine because`,
      verify: { kind: "value", inputs: {  }, params: { q: "pepsin_stop" } },
      options: [
        { key: "A", text: t`no protein is left to digest`, correct: false, misconceptionId: "C04-M8", value: "no_protein_left" },
        { key: "B", text: t`pepsin is absorbed in the stomach`, correct: false, misconceptionId: "C04-M9", value: "pepsin_absorbed" },
        { key: "C", text: t`the medium there becomes alkaline`, correct: true, value: "alkaline_medium" },
        { key: "D", text: t`the medium there becomes more acidic`, correct: false, misconceptionId: "C04-M7", value: "more_acidic" },
      ],
      solution: {
        steps: [
          t`Bile salts make chyme alkaline.`,
          t`Pepsin cannot act.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q3(A)" },
      stem: t`In the small intestine, inactive trypsinogen is activated to trypsin by`,
      verify: { kind: "value", inputs: {  }, params: { q: "trypsinogen" } },
      options: [
        { key: "A", text: t`$\ce{HCl}$`, correct: false, misconceptionId: "C04-M10", value: "hcl_t" },
        { key: "B", text: t`bile salts`, correct: false, misconceptionId: "C04-M11", value: "bile_salts" },
        { key: "C", text: t`secretin`, correct: false, misconceptionId: "C04-M12", value: "secretin_t" },
        { key: "D", text: t`enterokinase`, correct: true, value: "enterokinase_t" },
      ],
      solution: {
        steps: [
          t`Intestinal activator.`,
          t`Enterokinase.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q3(A)" },
      stem: t`The intestinal hormone that also induces satiety, the feeling of fullness, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "satiety" } },
      options: [
        { key: "A", text: t`GIP`, correct: false, misconceptionId: "C04-M15", value: "gip_t" },
        { key: "B", text: t`cholecystokinin (CCK)`, correct: true, value: "cck_t" },
        { key: "C", text: t`gastrin`, correct: false, misconceptionId: "C04-M13", value: "gastrin_t" },
        { key: "D", text: t`secretin`, correct: false, misconceptionId: "C04-M14", value: "secretin_t" },
      ],
      solution: {
        steps: [
          t`Feeling of fullness.`,
          t`CCK.`,
        ],
      },
    },
  ],
};
