import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Give a person the wrong blood type and their blood clumps. Why does blood reject blood?`,
    reveal: t`RBCs carry antigens. If the plasma has antibodies against them, the cells are clumped and destroyed.`,
  },
  explanation: {
    intuition: [
      t`**Antibodies** (immunoglobulins) are made by plasma cells.`,
      t`Each binds one antigen, like a lock and key.`,
      t`**Blood groups** depend on antigens on RBCs.`,
    ],
    formal: [
      {
        title: "Antibody structure",
        points: [
          t`A **Y-shaped** glycoprotein of **two heavy and two light** chains.`,
          t`The variable tips are **paratopes**.`,
          t`They bind the antigen's **epitopes**.`,
        ],
      },
      {
        title: "Blood groups",
        points: [
          t`ABO: group A has antigen A and **anti-B** antibodies; group B the reverse.`,
          t`Group AB has both antigens, no antibodies; O has neither antigen, both antibodies.`,
          t`**Rh factor** is an antigen on RBCs (from the Rhesus monkey).`,
        ],
      },
    ],
    worked: {
      prompt: t`Group O has both anti-A and anti-B. Why can it be given to anyone?`,
      steps: [
        t`Group O RBCs carry no A or B antigen.`,
        t`So the recipient's antibodies have nothing to bind.`,
      ],
      answer: t`Universal donor`,
    },
    visualSpec: t`A Y-shaped antibody with heavy and light chains, paratopes at the tips binding an epitope.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks a WBC.",
      remediation: "An antibody is a molecule.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks an RBC secretion.",
      remediation: "Plasma cells make antibodies.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Picks a blood cell.",
      remediation: "An antibody is a molecule.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks isotope.",
      remediation: "Isotopes are atoms.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks epitope.",
      remediation: "Epitopes are on antigens.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks octamer.",
      remediation: "Octamers are histones.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Says two chains.",
      remediation: "It has four.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Says one chain.",
      remediation: "It has four.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Says four heavy.",
      remediation: "Two are light.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says plasma antibody.",
      remediation: "Rh is an antigen.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says WBC protein.",
      remediation: "Rh is on RBCs.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says hormone.",
      remediation: "Rh is an antigen.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says anti-A.",
      remediation: "That would attack its own RBCs.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says both.",
      remediation: "That is group O.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says neither.",
      remediation: "That is group AB.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q1(5)" },
      stem: t`An antibody is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "antibody" } },
      options: [
        { key: "A", text: t`secretion of mammalian RBCs`, correct: false, misconceptionId: "C07-M2", value: "rbc_secretion" },
        { key: "B", text: t`cellular component of blood`, correct: false, misconceptionId: "C07-M3", value: "blood_cell" },
        { key: "C", text: t`molecule that binds specifically to an antigen`, correct: true, value: "binds_antigen" },
        { key: "D", text: t`WBC which invades bacteria`, correct: false, misconceptionId: "C07-M1", value: "wbc_invader" },
      ],
      solution: {
        steps: [
          t`It binds one antigen.`,
          t`A molecule that binds an antigen.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Human Health and Diseases/2025 Q. 1(ix)" },
      stem: t`The part of an antibody that binds the specific antigen is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "paratope" } },
      options: [
        { key: "A", text: t`isotope`, correct: false, misconceptionId: "C07-M4", value: "isotopes_a" },
        { key: "B", text: t`epitope`, correct: false, misconceptionId: "C07-M5", value: "epitopes_a" },
        { key: "C", text: t`octamer`, correct: false, misconceptionId: "C07-M6", value: "octamer_a" },
        { key: "D", text: t`paratope`, correct: true, value: "paratopes_a" },
      ],
      solution: {
        steps: [
          t`The antibody's binding site.`,
          t`Paratope.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Human Health and Diseases/2026 Q. 5" },
      stem: t`An antibody molecule is made of`,
      verify: { kind: "value", inputs: {  }, params: { q: "chains" } },
      options: [
        { key: "A", text: t`four heavy chains`, correct: false, misconceptionId: "C07-M9", value: "four_heavy" },
        { key: "B", text: t`two heavy and two light polypeptide chains`, correct: true, value: "two_heavy_two_light" },
        { key: "C", text: t`two polypeptide chains`, correct: false, misconceptionId: "C07-M7", value: "two_chains" },
        { key: "D", text: t`one polypeptide chain`, correct: false, misconceptionId: "C07-M8", value: "one_chain" },
      ],
      solution: {
        steps: [
          t`H2L2.`,
          t`Two heavy and two light chains.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q2(6)" },
      stem: t`The Rh factor is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rh" } },
      options: [
        { key: "A", text: t`an antigen on the surface of RBCs`, correct: true, value: "rbc_antigen" },
        { key: "B", text: t`an antibody in plasma`, correct: false, misconceptionId: "C07-M10", value: "plasma_antibody" },
        { key: "C", text: t`a protein of WBCs`, correct: false, misconceptionId: "C07-M11", value: "wbc_protein" },
        { key: "D", text: t`a hormone`, correct: false, misconceptionId: "C07-M12", value: "hormone_r" },
      ],
      solution: {
        steps: [
          t`Found on RBCs.`,
          t`An RBC surface antigen.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/human-health-12-bio/Ex Q4(5)" },
      stem: t`A person of blood group A has, in the plasma,`,
      verify: { kind: "value", inputs: {  }, params: { q: "group_a" } },
      options: [
        { key: "A", text: t`anti-A antibodies`, correct: false, misconceptionId: "C07-M13", value: "anti_a" },
        { key: "B", text: t`both anti-A and anti-B`, correct: false, misconceptionId: "C07-M14", value: "anti_both" },
        { key: "C", text: t`neither antibody`, correct: false, misconceptionId: "C07-M15", value: "anti_none" },
        { key: "D", text: t`anti-B antibodies`, correct: true, value: "anti_b" },
      ],
      solution: {
        steps: [
          t`Opposite of its antigen.`,
          t`Anti-B.`,
        ],
      },
    },
  ],
};
