import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`When a cell divides, each daughter gets a full copy of its DNA. Does one daughter get the old molecule and the other a new one?`,
    reveal: t`No: each double helix unzips and each old strand templates a new one, so every daughter has one old and one new strand.`,
  },
  explanation: {
    intuition: [
      t`DNA copies itself before cell division, in the **S phase**.`,
      t`Replication is **semiconservative**.`,
      t`Meselson and Stahl proved it with heavy nitrogen ($^{15}\mathrm{N}$).`,
    ],
    formal: [
      {
        title: "The enzymes",
        points: [
          t`**Helicase** unwinds the double helix at the fork.`,
          t`**Topoisomerase** removes the supercoils this creates.`,
          t`**RNA primers** start each new strand.`,
          t`**DNA polymerase** adds nucleotides only $5' \to 3'$.`,
          t`**Ligase** joins pieces.`,
        ],
      },
      {
        title: "Two strands",
        points: [
          t`Leading strand: built continuously towards the fork.`,
          t`Lagging strand: built away from the fork in short **Okazaki fragments**.`,
          t`Ligase joins the Okazaki fragments.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does replication need an RNA primer?`,
      steps: [
        t`DNA polymerase can only extend an existing strand.`,
        t`The primer gives it a starting 3' end.`,
      ],
      answer: t`DNA polymerase can't start a strand`,
    },
    visualSpec: t`A replication fork opening, with the leading strand gliding and the lagging strand stitching.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says both new.",
      remediation: "Each old strand is kept as a template.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Keeps the old molecule whole.",
      remediation: "That is conservative replication, which was disproved.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Mixes pieces.",
      remediation: "That is dispersive replication.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks Watson and Crick.",
      remediation: "They proposed it; Meselson and Stahl proved it.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks Griffith.",
      remediation: "Griffith studied transformation.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks Hershey and Chase.",
      remediation: "They showed DNA is genetic material.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Blames damage.",
      remediation: "Direction, not damage, causes fragments.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks polymerase works both ways.",
      remediation: "It works only 5′→3′.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says no primer.",
      remediation: "Each fragment has its own primer.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks helicase.",
      remediation: "Helicase unwinds; topoisomerase removes supercoils.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks ligase.",
      remediation: "Ligase joins fragments.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Picks primase.",
      remediation: "Primase makes primers.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks G₁.",
      remediation: "G₁ is growth before synthesis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks M.",
      remediation: "M is division.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks G₂.",
      remediation: "G₂ follows synthesis.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2024 Q. 3" },
      stem: t`DNA replication is semiconservative: each daughter molecule has`,
      verify: { kind: "value", inputs: {  }, params: { q: "semi" } },
      options: [
        { key: "A", text: t`the old molecule kept whole in one daughter`, correct: false, misconceptionId: "C04-M2", value: "old_kept_whole" },
        { key: "B", text: t`old and new pieces mixed along each strand`, correct: false, misconceptionId: "C04-M3", value: "mixed_pieces" },
        { key: "C", text: t`one old strand and one new strand`, correct: true, value: "one_old_one_new" },
        { key: "D", text: t`two new strands`, correct: false, misconceptionId: "C04-M1", value: "both_new" },
      ],
      solution: {
        steps: [
          t`Each daughter keeps one parental strand.`,
          t`One old, one new.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Molecular Basis of Inheritance/2024 Q. 3" },
      stem: t`Semiconservative replication was proved experimentally by`,
      verify: { kind: "value", inputs: {  }, params: { q: "proved" } },
      options: [
        { key: "A", text: t`Watson and Crick`, correct: false, misconceptionId: "C04-M4", value: "watson_crick" },
        { key: "B", text: t`Griffith`, correct: false, misconceptionId: "C04-M5", value: "griffith" },
        { key: "C", text: t`Hershey and Chase`, correct: false, misconceptionId: "C04-M6", value: "hershey_chase" },
        { key: "D", text: t`Meselson and Stahl`, correct: true, value: "meselson_stahl" },
      ],
      solution: {
        steps: [
          t`Heavy-nitrogen experiments proved it.`,
          t`Meselson and Stahl.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q2(5)" },
      stem: t`Okazaki fragments form on the lagging strand because`,
      verify: { kind: "value", inputs: {  }, params: { q: "okazaki" } },
      options: [
        { key: "A", text: t`DNA polymerase builds in both directions`, correct: false, misconceptionId: "C04-M8", value: "both_directions" },
        { key: "B", text: t`the lagging strand gets no primer`, correct: false, misconceptionId: "C04-M9", value: "no_primer" },
        { key: "C", text: t`new DNA is built only $5' \to 3'$, away from the fork on that strand`, correct: true, value: "five_to_three_only" },
        { key: "D", text: t`the lagging strand is damaged`, correct: false, misconceptionId: "C04-M7", value: "lagging_damaged" },
      ],
      solution: {
        steps: [
          t`Polymerase works 5′→3′ only.`,
          t`On the lagging strand it must work in pieces.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q2(4)" },
      stem: t`The enzyme that removes supercoils from replicating DNA is`,
      verify: { kind: "value", inputs: {  }, params: { q: "topo" } },
      options: [
        { key: "A", text: t`helicase`, correct: false, misconceptionId: "C04-M10", value: "helicase" },
        { key: "B", text: t`ligase`, correct: false, misconceptionId: "C04-M11", value: "ligase" },
        { key: "C", text: t`primase`, correct: false, misconceptionId: "C04-M12", value: "primase" },
        { key: "D", text: t`topoisomerase`, correct: true, value: "topoisomerase" },
      ],
      solution: {
        steps: [
          t`Unwinding creates supercoils.`,
          t`Topoisomerase relieves them.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/molecular-inheritance-12-bio/Ex Q2(6)" },
      stem: t`DNA replication takes place in the`,
      verify: { kind: "value", inputs: {  }, params: { q: "phase" } },
      options: [
        { key: "A", text: t`G₂ phase`, correct: false, misconceptionId: "C04-M15", value: "g2_phase" },
        { key: "B", text: t`S phase`, correct: true, value: "s_phase" },
        { key: "C", text: t`G₁ phase`, correct: false, misconceptionId: "C04-M13", value: "g1_phase" },
        { key: "D", text: t`M phase`, correct: false, misconceptionId: "C04-M14", value: "m_phase" },
      ],
      solution: {
        steps: [
          t`DNA is made in the synthesis phase.`,
          t`S phase.`,
        ],
      },
    },
  ],
};
