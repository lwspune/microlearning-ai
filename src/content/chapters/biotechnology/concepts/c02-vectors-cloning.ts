import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A cut-out gene on its own is lost inside a bacterium. What carries it in and makes it copy itself?`,
    reveal: t`A vector: usually a small ring of bacterial DNA, a plasmid, that copies itself and carries the gene with it.`,
  },
  explanation: {
    intuition: [
      t`A **vector** carries foreign DNA into a host.`,
      t`Plasmids, the Ti plasmid of *Agrobacterium*, YAC and MAC are vectors.`,
      t`The result is **recombinant DNA** (rDNA).`,
    ],
    formal: [
      {
        title: "A good vector",
        points: [
          t`An **ori** for independent replication.`,
          t`A **marker gene** (e.g. $amp^r$) to select transformed cells.`,
          t`A unique cutting site; **pBR322** is a constructed plasmid.`,
        ],
      },
      {
        title: "Steps of cloning",
        points: [
          t`Cut donor DNA and vector with the **same** restriction enzyme; join with **DNA ligase**.`,
          t`$\ce{Ca^{2+}}$ ions help host cells take up the rDNA: **transformation**.`,
          t`Select transformants, grow them, and harvest the product. *Agrobacterium tumefaciens* (crown gall) carries genes into plants.`,
        ],
      },
    ],
    worked: {
      prompt: t`After transformation, bacteria are grown on ampicillin. Which survive?`,
      steps: [
        t`Only cells with the plasmid carry $amp^r$.`,
        t`Others are killed.`,
      ],
      answer: t`Transformed cells only`,
    },
    visualSpec: t`A plasmid opened by a restriction enzyme, a gene inserted, ligase sealing the ring.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Picks *Helicobacter*.",
      remediation: "That causes ulcers.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Picks *Thermus*.",
      remediation: "That gives *Taq* polymerase.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Picks Bt.",
      remediation: "Bt kills insects.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Picks the Ti plasmid.",
      remediation: "Ti is for plants.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Picks YAC.",
      remediation: "YAC is for yeast.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Picks MAC.",
      remediation: "MAC is for mammals.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Says it cuts DNA.",
      remediation: "Restriction enzymes cut.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Says it joins DNA.",
      remediation: "Ligase joins.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Says it kills bacteria.",
      remediation: "It makes them competent.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Says DNA destroyed.",
      remediation: "The DNA is intact.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Says too many copies.",
      remediation: "Copying is not the problem.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Says no problem.",
      remediation: "Different ends do not pair.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Says it replicates.",
      remediation: "That is the ori.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Says it cuts.",
      remediation: "That is the enzyme.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M15",
      mistake: "Says it makes the protein.",
      remediation: "That is the inserted gene.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q1(1)" },
      stem: t`The soil bacterium that causes crown gall in plants is`,
      verify: { kind: "value", inputs: {  }, params: { q: "crown_gall" } },
      options: [
        { key: "A", text: t`*Agrobacterium tumefaciens*`, correct: true, value: "agrobacterium_b" },
        { key: "B", text: t`*Helicobacter pylori*`, correct: false, misconceptionId: "C02-M1", value: "helicobacter_b" },
        { key: "C", text: t`*Thermus aquaticus*`, correct: false, misconceptionId: "C02-M2", value: "thermus_b" },
        { key: "D", text: t`*Bacillus thuringiensis*`, correct: false, misconceptionId: "C02-M3", value: "bt_b" },
      ],
      solution: {
        steps: [
          t`Causes tumours in plants.`,
          t`*Agrobacterium tumefaciens*.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q2(1)" },
      stem: t`The vector used to make human insulin by rDNA technology is`,
      verify: { kind: "value", inputs: {  }, params: { q: "insulin_vector" } },
      options: [
        { key: "A", text: t`the Ti plasmid`, correct: false, misconceptionId: "C02-M4", value: "ti_plasmid_v" },
        { key: "B", text: t`YAC`, correct: false, misconceptionId: "C02-M5", value: "yac_v" },
        { key: "C", text: t`MAC`, correct: false, misconceptionId: "C02-M6", value: "mac_v" },
        { key: "D", text: t`plasmid pBR322`, correct: true, value: "pbr322_v" },
      ],
      solution: {
        steps: [
          t`The constructed plasmid.`,
          t`pBR322.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q2(3)" },
      stem: t`In gene cloning, $\ce{Ca^{2+}}$ ions`,
      verify: { kind: "value", inputs: {  }, params: { q: "calcium" } },
      options: [
        { key: "A", text: t`kill the bacteria`, correct: false, misconceptionId: "C02-M9", value: "kills_bacteria" },
        { key: "B", text: t`help host bacteria take up the recombinant DNA`, correct: true, value: "helps_uptake" },
        { key: "C", text: t`cut the DNA`, correct: false, misconceptionId: "C02-M7", value: "cuts_dna" },
        { key: "D", text: t`join DNA fragments`, correct: false, misconceptionId: "C02-M8", value: "joins_dna" },
      ],
      solution: {
        steps: [
          t`Makes cells competent.`,
          t`Helps uptake of rDNA.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q3(3)" },
      stem: t`If the vector and donor DNA are cut with two different restriction enzymes,`,
      verify: { kind: "value", inputs: {  }, params: { q: "two_enzymes" } },
      options: [
        { key: "A", text: t`there is no problem`, correct: false, misconceptionId: "C02-M12", value: "no_problem" },
        { key: "B", text: t`their sticky ends do not match, so rDNA does not form`, correct: true, value: "ends_mismatch" },
        { key: "C", text: t`the DNA is destroyed`, correct: false, misconceptionId: "C02-M10", value: "dna_destroyed" },
        { key: "D", text: t`too many copies form`, correct: false, misconceptionId: "C02-M11", value: "too_many_copies" },
      ],
      solution: {
        steps: [
          t`Each enzyme cuts its own way.`,
          t`The ends do not match.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/biotechnology-12-bio/Ex Q3(1)" },
      stem: t`A vector carries a marker gene such as $amp^r$ in order to`,
      verify: { kind: "value", inputs: {  }, params: { q: "marker" } },
      options: [
        { key: "A", text: t`make the desired protein`, correct: false, misconceptionId: "C02-M15", value: "make_protein" },
        { key: "B", text: t`select the transformed cells`, correct: true, value: "select_transformants" },
        { key: "C", text: t`replicate the vector`, correct: false, misconceptionId: "C02-M13", value: "replicate_vector" },
        { key: "D", text: t`cut the DNA`, correct: false, misconceptionId: "C02-M14", value: "cut_dna" },
      ],
      solution: {
        steps: [
          t`Antibiotic resistance.`,
          t`To select transformed cells.`,
        ],
      },
    },
  ],
};
