import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`*E. coli* makes the enzymes to digest lactose only when lactose is around. How does it know?`,
    reveal: t`Lactose itself switches the genes on by pulling the repressor off the operator: the lac operon is inducible.`,
  },
  explanation: {
    intuition: [
      t`Cells switch genes on and off as needed.`,
      t`In bacteria, genes for one pathway form an **operon**.`,
      t`**Jacob and Monod** explained the lac operon of *E. coli*.`,
    ],
    formal: [
      {
        title: "Parts",
        points: [
          t`**Regulator gene** (i): makes the repressor protein.`,
          t`**Promoter**: where RNA polymerase binds.`,
          t`**Operator**: the switch the repressor binds.`,
          t`**Structural genes** z, y and a: the enzymes.`,
        ],
      },
      {
        title: "Switching",
        points: [
          t`No lactose: the repressor sits on the operator; genes are off.`,
          t`Lactose (the **inducer**) binds the repressor and frees the operator.`,
          t`So the lac operon is **inducible**; the trp operon is **repressible**.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a mutant whose repressor can't bind the operator, are the lac genes on or off?`,
      steps: [
        t`Nothing blocks the operator.`,
        t`RNA polymerase transcribes all the time.`,
      ],
      answer: t`Always on`,
    },
    visualSpec: t`A repressor sitting on the operator until lactose pulls it away.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Picks the promoter.",
      remediation: "The promoter is part of the operon.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Picks the regulator.",
      remediation: "The regulator gene is part of it.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Picks the operator.",
      remediation: "The operator is part of it.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Picks glucose.",
      remediation: "Glucose doesn't induce it.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Picks tryptophan.",
      remediation: "Tryptophan controls the trp operon.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Picks the repressor.",
      remediation: "The repressor switches it off.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Picks the promoter.",
      remediation: "The repressor binds the operator.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Picks the regulator.",
      remediation: "The regulator makes the repressor.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Picks the structural genes.",
      remediation: "The repressor blocks at the operator.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Picks lactose.",
      remediation: "The lac operon is inducible.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Picks arabinose.",
      remediation: "The arabinose operon is inducible.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Picks galactose.",
      remediation: "The galactose operon is inducible.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Picks Watson and Crick.",
      remediation: "They described DNA.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Picks Sutton and Boveri.",
      remediation: "They proposed the chromosome theory.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Picks Meselson and Stahl.",
      remediation: "They studied replication.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2024 Q. 1(ii)" },
      stem: t`Which one is not a part of the lac operon?`,
      verify: { kind: "value", inputs: {  }, params: { q: "notpart" } },
      options: [
        { key: "A", text: t`inducer`, correct: true, value: "inducer" },
        { key: "B", text: t`promoter`, correct: false, misconceptionId: "C08-M1", value: "promoter" },
        { key: "C", text: t`regulator`, correct: false, misconceptionId: "C08-M2", value: "regulator" },
        { key: "D", text: t`operator`, correct: false, misconceptionId: "C08-M3", value: "operator" },
      ],
      solution: {
        steps: [
          t`The inducer is a chemical, not a gene.`,
          t`The inducer.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q3(4)" },
      stem: t`The lac operon is switched on by`,
      verify: { kind: "value", inputs: {  }, params: { q: "inducer" } },
      options: [
        { key: "A", text: t`glucose`, correct: false, misconceptionId: "C08-M4", value: "glucose" },
        { key: "B", text: t`tryptophan`, correct: false, misconceptionId: "C08-M5", value: "tryptophan" },
        { key: "C", text: t`the repressor`, correct: false, misconceptionId: "C08-M6", value: "repressor" },
        { key: "D", text: t`lactose (the inducer)`, correct: true, value: "lactose" },
      ],
      solution: {
        steps: [
          t`Lactose induces its own breakdown.`,
          t`Lactose.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q4(2)" },
      stem: t`When lactose is absent, the repressor protein binds to the`,
      verify: { kind: "value", inputs: {  }, params: { q: "binds" } },
      options: [
        { key: "A", text: t`promoter`, correct: false, misconceptionId: "C08-M7", value: "promoter" },
        { key: "B", text: t`regulator gene`, correct: false, misconceptionId: "C08-M8", value: "regulator" },
        { key: "C", text: t`structural genes`, correct: false, misconceptionId: "C08-M9", value: "structural_genes" },
        { key: "D", text: t`operator`, correct: true, value: "operator" },
      ],
      solution: {
        steps: [
          t`The repressor blocks the operator.`,
          t`The operator.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q1(9)" },
      stem: t`An example of a repressible operon is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "repressible" } },
      options: [
        { key: "A", text: t`arabinose operon`, correct: false, misconceptionId: "C08-M11", value: "arabinose" },
        { key: "B", text: t`galactose operon`, correct: false, misconceptionId: "C08-M12", value: "galactose" },
        { key: "C", text: t`tryptophan operon`, correct: true, value: "tryptophan" },
        { key: "D", text: t`lactose operon`, correct: false, misconceptionId: "C08-M10", value: "lactose" },
      ],
      solution: {
        steps: [
          t`The trp operon is switched off by tryptophan.`,
          t`Repressible.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q5(4)" },
      stem: t`The operon concept was proposed by`,
      verify: { kind: "value", inputs: {  }, params: { q: "proposed" } },
      options: [
        { key: "A", text: t`Meselson and Stahl`, correct: false, misconceptionId: "C08-M15", value: "meselson_stahl" },
        { key: "B", text: t`Jacob and Monod`, correct: true, value: "jacob_monod" },
        { key: "C", text: t`Watson and Crick`, correct: false, misconceptionId: "C08-M13", value: "watson_crick" },
        { key: "D", text: t`Sutton and Boveri`, correct: false, misconceptionId: "C08-M14", value: "sutton_boveri" },
      ],
      solution: {
        steps: [
          t`The lac operon was explained in 1961.`,
          t`Jacob and Monod.`,
        ],
      },
    },
  ],
};
