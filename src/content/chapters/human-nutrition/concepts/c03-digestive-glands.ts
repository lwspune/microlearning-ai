import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Your mouth waters at the smell of food. Where does that saliva come from?`,
    reveal: t`From three pairs of salivary glands: the parotid, submandibular and sublingual glands.`,
  },
  explanation: {
    intuition: [
      t`Glands outside the canal pour juices into it.`,
      t`Salivary glands, the liver and the pancreas are the main ones.`,
      t`The pancreas makes both a juice and hormones.`,
    ],
    formal: [
      {
        title: "Salivary glands and liver",
        points: [
          t`**Parotid** (in front of the ear), **submandibular** and **sublingual** glands open into the buccal cavity.`,
          t`**Salivary amylase** converts starch to **maltose** at pH 6.8; **lysozyme** fights bacteria.`,
          t`The liver makes **bile**, which emulsifies fats; its **Kupffer cells** detoxify.`,
        ],
      },
      {
        title: "Pancreas",
        points: [
          t`A **heterocrine** gland: **acini** secrete pancreatic juice, carried by ducts to the duodenum.`,
          t`**Islets of Langerhans** are ductless: $\alpha$-cells make glucagon, $\beta$-cells make insulin.`,
          t`$\delta$-cells make somatostatin, which inhibits glucagon and insulin secretion.`,
        ],
      },
    ],
    worked: {
      prompt: t`Name the duct that carries bile and pancreatic juice into the duodenum.`,
      steps: [
        t`The pancreatic duct joins the common bile duct.`,
        t`Together they form the hepato-pancreatic duct, guarded by the sphincter of Oddi.`,
      ],
      answer: t`The hepato-pancreatic duct`,
    },
    visualSpec: t`The liver, gall bladder and pancreas with their ducts joining at the duodenum.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks liver.",
      remediation: "The liver has hepatic cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks gastric glands.",
      remediation: "They have chief and parietal cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks intestinal glands.",
      remediation: "Acini belong to the pancreas.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Says glucose.",
      remediation: "Salivary amylase gives maltose.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Says sucrose.",
      remediation: "Sucrose is not made from starch.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Says peptones.",
      remediation: "Peptones come from proteins.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Says only exocrine.",
      remediation: "The islets are endocrine too.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Says only endocrine.",
      remediation: "The acini are exocrine too.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Says it makes bile.",
      remediation: "Bile comes from the liver.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks alpha cells.",
      remediation: "Alpha cells make glucagon.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks delta cells.",
      remediation: "Delta cells make somatostatin.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks acinar cells.",
      remediation: "Acini make pancreatic juice.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says they make bile.",
      remediation: "Hepatic cells make bile.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says they store bile.",
      remediation: "The gall bladder stores bile.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says they make insulin.",
      remediation: "Beta cells make insulin.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q1(A)" },
      stem: t`Acinar cells are present in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "acinar" } },
      options: [
        { key: "A", text: t`gastric glands`, correct: false, misconceptionId: "C03-M2", value: "gastric_glands" },
        { key: "B", text: t`intestinal glands`, correct: false, misconceptionId: "C03-M3", value: "intestinal_glands" },
        { key: "C", text: t`pancreas`, correct: true, value: "pancreas_t" },
        { key: "D", text: t`liver`, correct: false, misconceptionId: "C03-M1", value: "liver_t" },
      ],
      solution: {
        steps: [
          t`Acini make pancreatic juice.`,
          t`Pancreas.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q4(A)" },
      stem: t`In the mouth, salivary amylase converts starch into`,
      verify: { kind: "value", inputs: {  }, params: { q: "starch" } },
      options: [
        { key: "A", text: t`sucrose`, correct: false, misconceptionId: "C03-M5", value: "sucrose_t" },
        { key: "B", text: t`peptones`, correct: false, misconceptionId: "C03-M6", value: "peptones_t" },
        { key: "C", text: t`maltose`, correct: true, value: "maltose_t" },
        { key: "D", text: t`glucose`, correct: false, misconceptionId: "C03-M4", value: "glucose_t" },
      ],
      solution: {
        steps: [
          t`Amylase acts on starch.`,
          t`Maltose.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q3(C)" },
      stem: t`The pancreas is called a heterocrine gland because`,
      verify: { kind: "value", inputs: {  }, params: { q: "heterocrine" } },
      options: [
        { key: "A", text: t`it is only an exocrine gland`, correct: false, misconceptionId: "C03-M7", value: "only_exocrine" },
        { key: "B", text: t`it is only an endocrine gland`, correct: false, misconceptionId: "C03-M8", value: "only_endocrine" },
        { key: "C", text: t`it makes bile`, correct: false, misconceptionId: "C03-M9", value: "makes_bile" },
        { key: "D", text: t`its acini pour juice through ducts and its islets make hormones`, correct: true, value: "both_exo_endo" },
      ],
      solution: {
        steps: [
          t`Ducts and ductless parts.`,
          t`Exocrine and endocrine.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q3(C)" },
      stem: t`In the islets of Langerhans, insulin is secreted by`,
      verify: { kind: "value", inputs: {  }, params: { q: "insulin" } },
      options: [
        { key: "A", text: t`$\delta$-cells`, correct: false, misconceptionId: "C03-M11", value: "delta_cells" },
        { key: "B", text: t`acinar cells`, correct: false, misconceptionId: "C03-M12", value: "acinar_cells" },
        { key: "C", text: t`$\beta$-cells`, correct: true, value: "beta_cells" },
        { key: "D", text: t`$\alpha$-cells`, correct: false, misconceptionId: "C03-M10", value: "alpha_cells" },
      ],
      solution: {
        steps: [
          t`Islet cell types.`,
          t`$\beta$-cells.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q8" },
      stem: t`The Kupffer cells of the liver`,
      verify: { kind: "value", inputs: {  }, params: { q: "kupffer" } },
      options: [
        { key: "A", text: t`destroy toxins, worn-out RBCs and microbes`, correct: true, value: "detoxification_t" },
        { key: "B", text: t`produce bile juice`, correct: false, misconceptionId: "C03-M13", value: "produce_bile" },
        { key: "C", text: t`store bile`, correct: false, misconceptionId: "C03-M14", value: "store_bile" },
        { key: "D", text: t`secrete insulin`, correct: false, misconceptionId: "C03-M15", value: "secrete_insulin" },
      ],
      solution: {
        steps: [
          t`Liver's defence cells.`,
          t`Detoxification.`,
        ],
      },
    },
  ],
};
