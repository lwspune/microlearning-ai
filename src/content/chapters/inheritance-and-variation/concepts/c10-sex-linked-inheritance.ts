import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Colour blindness is far commoner in men than in women. Why should a trait favour one sex?`,
    reveal: t`Its gene is on the X: a man's single X shows any recessive allele, but a woman needs it on both Xs.`,
  },
  explanation: {
    intuition: [
      t`**Sex-linked genes** lie on the sex chromosomes.`,
      t`**X-linked** genes: on the non-homologous part of the X.`,
      t`**Y-linked** (holandric) genes: on the Y, passing father to son.`,
    ],
    formal: [
      {
        title: "X-linked recessive",
        points: [
          t`Colour blindness and haemophilia.`,
          t`A male shows it with one recessive allele.`,
          t`A female needs two; with one she is a **carrier**.`,
          t`No male is a carrier: he has only one X.`,
        ],
      },
      {
        title: "Criss-cross inheritance",
        points: [
          t`An affected father passes his X to his daughter.`,
          t`She, a carrier, passes it to half her sons.`,
          t`So it goes father → daughter → grandson.`,
          t`Y-linked example: hypertrichosis (hairy ear rims).`,
        ],
      },
    ],
    worked: {
      prompt: t`A colour-blind father has a daughter with normal vision. What is she?`,
      steps: [
        t`She gets her father's X.`,
        t`She is a carrier.`,
      ],
      answer: t`A carrier`,
    },
    visualSpec: t`A pedigree with the X-linked allele highlighted as it skips a generation.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Gives 25%.",
      remediation: "Sons get their X from the mother, who is normal.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Gives 50%.",
      remediation: "The mother is homozygous normal.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Gives 100%.",
      remediation: "The father passes his Y to sons, not his X.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Picks X-linked.",
      remediation: "X-linked genes don't pass father to son.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Picks autosomal.",
      remediation: "Autosomal genes go to both sexes.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Picks mitochondrial.",
      remediation: "Mitochondrial genes come from the mother.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Says to his son.",
      remediation: "A son gets his father's Y.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Says through his son.",
      remediation: "A son gets the Y, not the X.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Stops at the daughter.",
      remediation: "The daughter passes it on to her sons.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Thinks Y suppresses it.",
      remediation: "The Y has no matching gene.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Thinks males are immune.",
      remediation: "Males show it most often.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Thinks it is lethal.",
      remediation: "Colour blindness is not lethal.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Gives 25%.",
      remediation: "25% is of all children; of sons it is 50%.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Gives 100%.",
      remediation: "Each son gets one of the mother's two Xs.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Gives 0%.",
      remediation: "The carrier mother passes it to half her sons.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q1(9)" },
      stem: t`A colour-blind man marries a woman homozygous for normal vision. The chance of their son being colour-blind is`,
      verify: { kind: "value", inputs: {  }, params: { q: "son" } },
      options: [
        { key: "A", text: t`$25\%$`, correct: false, misconceptionId: "C10-M1", value: "25" },
        { key: "B", text: t`$50\%$`, correct: false, misconceptionId: "C10-M2", value: "50" },
        { key: "C", text: t`$100\%$`, correct: false, misconceptionId: "C10-M3", value: "100" },
        { key: "D", text: t`$0\%$`, correct: true, value: "0" },
      ],
      solution: {
        steps: [
          t`Sons get their X from the mother.`,
          t`She is normal: 0%.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Inheritance and Variation/2026 Q. 2(iii)" },
      stem: t`A gene inherited directly from father to son is`,
      verify: { kind: "value", inputs: {  }, params: { q: "holandric" } },
      options: [
        { key: "A", text: t`Y-linked (holandric)`, correct: true, value: "y_linked" },
        { key: "B", text: t`X-linked`, correct: false, misconceptionId: "C10-M4", value: "x_linked" },
        { key: "C", text: t`autosomal`, correct: false, misconceptionId: "C10-M5", value: "autosomal" },
        { key: "D", text: t`mitochondrial`, correct: false, misconceptionId: "C10-M6", value: "mitochondrial" },
      ],
      solution: {
        steps: [
          t`Father to son only.`,
          t`Y-linked (holandric).`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q5(7)" },
      stem: t`In criss-cross inheritance, an X-linked gene passes from a man to his`,
      verify: { kind: "value", inputs: {  }, params: { q: "criss" } },
      options: [
        { key: "A", text: t`daughter only, never further`, correct: false, misconceptionId: "C10-M9", value: "daughter_only" },
        { key: "B", text: t`grandson, through his daughter`, correct: true, value: "grandson_via_daughter" },
        { key: "C", text: t`son`, correct: false, misconceptionId: "C10-M7", value: "son" },
        { key: "D", text: t`grandson, through his son`, correct: false, misconceptionId: "C10-M8", value: "grandson_via_son" },
      ],
      solution: {
        steps: [
          t`Father → daughter → grandson.`,
          t`Criss-cross.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/inheritance-12-bio/Ex Q5(5)" },
      stem: t`There is no carrier male for an X-linked recessive trait because`,
      verify: { kind: "value", inputs: {  }, params: { q: "carrier" } },
      options: [
        { key: "A", text: t`males cannot inherit it`, correct: false, misconceptionId: "C10-M11", value: "males_immune" },
        { key: "B", text: t`the gene kills carriers`, correct: false, misconceptionId: "C10-M12", value: "gene_lethal" },
        { key: "C", text: t`a male has only one X, so a recessive gene on it always shows`, correct: true, value: "one_x" },
        { key: "D", text: t`the Y suppresses the gene`, correct: false, misconceptionId: "C10-M10", value: "y_suppresses" },
      ],
      solution: {
        steps: [
          t`A male has one X.`,
          t`A recessive gene on it always shows.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`A carrier woman marries a man with normal vision. The chance that a son of theirs is colour-blind is`,
      verify: { kind: "value", inputs: {  }, params: { q: "carrier_son" } },
      options: [
        { key: "A", text: t`$50\%$`, correct: true, value: "50" },
        { key: "B", text: t`$25\%$`, correct: false, misconceptionId: "C10-M13", value: "25" },
        { key: "C", text: t`$100\%$`, correct: false, misconceptionId: "C10-M14", value: "100" },
        { key: "D", text: t`$0\%$`, correct: false, misconceptionId: "C10-M15", value: "0" },
      ],
      solution: {
        steps: [
          t`The mother passes either X.`,
          t`Half the sons: 50%.`,
        ],
      },
    },
  ],
};
