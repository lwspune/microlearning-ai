import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Epithelial cells sit packed edge to edge, yet the sheet does not tear. What holds them together?`,
    reveal: t`Cell junctions: small complexes that join each cell to its neighbours and to the basement membrane.`,
  },
  explanation: {
    intuition: [
      t`**Cell junctions** (junctional complexes) join epithelial cells.`,
      t`They join cells sideways and to the **basement membrane**.`,
      t`There are five types, each with its own job.`,
    ],
    formal: [
      {
        title: "Sealing and passing",
        points: [
          t`**Tight junctions**: keep cell polarity; stop lateral diffusion of proteins and ions.`,
          t`**Gap junctions**: let ions and small molecules pass between cells.`,
          t`**Adherens junctions**: work in signalling pathways and transcriptional regulation.`,
        ],
      },
      {
        title: "Anchoring",
        points: [
          t`**Desmosomes**: give mechanical strength to epithelia, cardiac muscle and meninges.`,
          t`**Hemidesmosomes**: fix cells firmly to the basement membrane.`,
          t`Hemidesmosomes are mediated by **integrin**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which junction fixes a cell to the basement membrane rather than to another cell?`,
      steps: [
        t`Desmosomes join cell to cell.`,
        t`Hemidesmosomes join cell to basement membrane.`,
      ],
      answer: t`Hemidesmosome`,
    },
    visualSpec: t`A row of cells with a seal at the top, channels between cells, studs between cells, and half-studs on the base.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Picks gap junctions.",
      remediation: "Those are channels between cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Picks desmosomes.",
      remediation: "Those join cell to cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Picks adherens.",
      remediation: "Those join cell to cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks tight junctions.",
      remediation: "Tight junctions stop diffusion.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks desmosomes.",
      remediation: "Desmosomes give strength.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks hemidesmosomes.",
      remediation: "Those anchor to the base.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Picks gap junctions.",
      remediation: "Gap junctions let ions pass.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Picks adherens.",
      remediation: "Adherens work in signalling.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Picks hemidesmosomes.",
      remediation: "Those anchor to the base.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Picks tight junctions.",
      remediation: "Tight junctions keep polarity.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Picks gap junctions.",
      remediation: "Gap junctions pass ions.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks hemidesmosomes.",
      remediation: "Those anchor to the base.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Says basement membrane.",
      remediation: "That is hemidesmosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Says passing ions.",
      remediation: "That is gap junctions.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Says polarity.",
      remediation: "That is tight junctions.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q1(C)" },
      stem: t`Which cell junction is mediated by integrin?`,
      verify: { kind: "value", inputs: {  }, params: { q: "integrin" } },
      options: [
        { key: "A", text: t`Desmosomes`, correct: false, misconceptionId: "C03-M2", value: "desmosomes_j" },
        { key: "B", text: t`Adherens junctions`, correct: false, misconceptionId: "C03-M3", value: "adherens_j" },
        { key: "C", text: t`Hemidesmosomes`, correct: true, value: "hemidesmosomes_j" },
        { key: "D", text: t`Gap junctions`, correct: false, misconceptionId: "C03-M1", value: "gap_j" },
      ],
      solution: {
        steps: [
          t`Cell to basement membrane.`,
          t`Hemidesmosomes.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(A)" },
      stem: t`Ions and small molecules pass from one cell to the next through`,
      verify: { kind: "value", inputs: {  }, params: { q: "ions" } },
      options: [
        { key: "A", text: t`Desmosomes`, correct: false, misconceptionId: "C03-M5", value: "desmosomes_j" },
        { key: "B", text: t`Hemidesmosomes`, correct: false, misconceptionId: "C03-M6", value: "hemidesmosomes_j" },
        { key: "C", text: t`Gap junctions`, correct: true, value: "gap_j" },
        { key: "D", text: t`Tight junctions`, correct: false, misconceptionId: "C03-M4", value: "tight_j" },
      ],
      solution: {
        steps: [
          t`Channels between cells.`,
          t`Gap junctions.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(A)" },
      stem: t`Cell polarity is kept, and lateral diffusion of proteins and ions is stopped, by`,
      verify: { kind: "value", inputs: {  }, params: { q: "polarity" } },
      options: [
        { key: "A", text: t`Gap junctions`, correct: false, misconceptionId: "C03-M7", value: "gap_j" },
        { key: "B", text: t`Adherens junctions`, correct: false, misconceptionId: "C03-M8", value: "adherens_j" },
        { key: "C", text: t`Hemidesmosomes`, correct: false, misconceptionId: "C03-M9", value: "hemidesmosomes_j" },
        { key: "D", text: t`Tight junctions`, correct: true, value: "tight_j" },
      ],
      solution: {
        steps: [
          t`Seal keeps polarity.`,
          t`Tight junctions.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(A)" },
      stem: t`Mechanical strength to epithelia, cardiac muscle and meninges is given by`,
      verify: { kind: "value", inputs: {  }, params: { q: "strength" } },
      options: [
        { key: "A", text: t`Gap junctions`, correct: false, misconceptionId: "C03-M11", value: "gap_j" },
        { key: "B", text: t`Hemidesmosomes`, correct: false, misconceptionId: "C03-M12", value: "hemidesmosomes_j" },
        { key: "C", text: t`Desmosomes`, correct: true, value: "desmosomes_j" },
        { key: "D", text: t`Tight junctions`, correct: false, misconceptionId: "C03-M10", value: "tight_j" },
      ],
      solution: {
        steps: [
          t`Strength to epithelia.`,
          t`Desmosomes.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(A)" },
      stem: t`Adherens junctions are mainly involved in`,
      verify: { kind: "value", inputs: {  }, params: { q: "adherens" } },
      options: [
        { key: "A", text: t`signalling pathways and transcriptional regulation`, correct: true, value: "signalling_regulation" },
        { key: "B", text: t`attaching cells to the basement membrane`, correct: false, misconceptionId: "C03-M13", value: "mechanical_strength" },
        { key: "C", text: t`passing ions between cells`, correct: false, misconceptionId: "C03-M14", value: "ion_passage" },
        { key: "D", text: t`keeping cell polarity`, correct: false, misconceptionId: "C03-M15", value: "polarity_t" },
      ],
      solution: {
        steps: [
          t`Signalling role.`,
          t`Signalling and regulation.`,
        ],
      },
    },
  ],
};
