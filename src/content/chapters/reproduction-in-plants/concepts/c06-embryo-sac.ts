import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`The embryo sac is called 7-celled but 8-nucleate. How can it have more nuclei than cells?`,
    reveal: t`Its large central cell holds two nuclei, the polar nuclei; every other cell has one.`,
  },
  explanation: {
    intuition: [
      t`The functional megaspore grows into the **embryo sac**, the female gametophyte.`,
      t`Its nucleus divides three times by mitosis: 2, 4, then 8 nuclei.`,
      t`Walls form around six of them; two stay together in the middle.`,
      t`So the mature embryo sac has **7 cells** and **8 nuclei**, all haploid until the two polar nuclei fuse.`,
    ],
    formal: [
      {
        title: "Its cells",
        points: [
          t`At the micropylar end, the **egg apparatus**: the egg and two **synergids**.`,
          t`The synergids bear the **filiform apparatus**, which guides the pollen tube.`,
          t`At the chalazal end, three **antipodal cells**.`,
          t`In the middle, the **central cell** with two **polar nuclei**.`,
          t`The polar nuclei fuse into the diploid **secondary nucleus**.`,
        ],
      },
    ],
    worked: {
      prompt: t`A plant has $2n = 20$. How many chromosomes are in an antipodal cell and in the secondary nucleus?`,
      steps: [
        t`Antipodal cells are haploid: 10.`,
        t`The secondary nucleus is two polar nuclei fused: 20.`,
      ],
      answer: t`10 and 20`,
    },
    visualSpec: t`An embryo sac whose nuclei multiply 1 → 2 → 4 → 8 and then move to their places.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Counts the central cell.",
      remediation: "The central cell's secondary nucleus is diploid; six cells are haploid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Counts nuclei.",
      remediation: "Eight nuclei, but only six haploid cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Counts only the antipodals.",
      remediation: "The egg and two synergids are haploid too.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Counts cells.",
      remediation: "Seven cells, but eight nuclei: the central cell has two.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Counts haploid cells.",
      remediation: "Count every nucleus: eight.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Counts four megaspores.",
      remediation: "The functional megaspore's three mitoses give eight nuclei.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Adds the antipodals.",
      remediation: "The antipodals are at the other end; the egg apparatus is the egg and two synergids.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Adds the polar nuclei.",
      remediation: "Polar nuclei are in the central cell.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Takes the egg alone.",
      remediation: "The two synergids belong to the egg apparatus too.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks it nourishes the embryo.",
      remediation: "It guides the pollen tube; the endosperm nourishes the embryo.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks it forms the endosperm.",
      remediation: "The endosperm forms from the secondary nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Places it on the antipodals.",
      remediation: "The filiform apparatus is on the synergids.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Picks an endosperm cell.",
      remediation: "Endosperm is triploid: 18 chromosomes.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Picks a leaf cell.",
      remediation: "Leaf cells are diploid: 12.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Picks the zygote.",
      remediation: "The zygote is diploid: 12.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(2)" },
      stem: t`How many haploid cells are there in a mature embryo sac?`,
      verify: { kind: "value", inputs: {  }, params: { q: "haploid" } },
      options: [
        { key: "A", text: t`$7$`, correct: false, misconceptionId: "C06-M1", value: "7" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C06-M2", value: "8" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C06-M3", value: "3" },
        { key: "D", text: t`$6$`, correct: true, value: "6" },
      ],
      solution: {
        steps: [
          t`Egg, two synergids and three antipodals are haploid.`,
          t`$1 + 2 + 3 = 6$`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2024 Q. 2(iv)" },
      stem: t`How many haploid nuclei are formed in the embryo sac by the three mitotic divisions of the functional megaspore?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nuclei" } },
      options: [
        { key: "A", text: t`$8$`, correct: true, value: "8" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C06-M4", value: "7" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C06-M5", value: "6" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C06-M6", value: "4" },
      ],
      solution: {
        steps: [
          t`Three mitoses give 8 nuclei.`,
          t`All eight are haploid.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`The egg apparatus of the embryo sac consists of`,
      verify: { kind: "value", inputs: {  }, params: { q: "apparatus" } },
      options: [
        { key: "A", text: t`the egg and two synergids`, correct: true, value: "egg_two_synergids" },
        { key: "B", text: t`the egg and three antipodals`, correct: false, misconceptionId: "C06-M7", value: "egg_antipodals" },
        { key: "C", text: t`the egg and two polar nuclei`, correct: false, misconceptionId: "C06-M8", value: "egg_polar_nuclei" },
        { key: "D", text: t`the egg alone`, correct: false, misconceptionId: "C06-M9", value: "egg_alone" },
      ],
      solution: {
        steps: [
          t`The egg apparatus is at the micropylar end.`,
          t`The egg and two synergids.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(10)" },
      stem: t`The filiform apparatus`,
      verify: { kind: "value", inputs: {  }, params: { q: "filiform" } },
      options: [
        { key: "A", text: t`lies on the antipodals`, correct: false, misconceptionId: "C06-M12", value: "on_antipodals" },
        { key: "B", text: t`lies on the synergids and guides the pollen tube to the egg`, correct: true, value: "guides_tube" },
        { key: "C", text: t`nourishes the growing embryo`, correct: false, misconceptionId: "C06-M10", value: "nourishes_embryo" },
        { key: "D", text: t`forms the endosperm`, correct: false, misconceptionId: "C06-M11", value: "forms_endosperm" },
      ],
      solution: {
        steps: [
          t`The filiform apparatus is on the synergids.`,
          t`It guides the pollen tube.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q1(5)" },
      stem: t`In a flowering plant with $2n = 12$, which of these has 6 chromosomes?`,
      verify: { kind: "value", inputs: {  }, params: { q: "haploid_cell" } },
      options: [
        { key: "A", text: t`a synergid`, correct: true, value: "synergid" },
        { key: "B", text: t`an endosperm cell`, correct: false, misconceptionId: "C06-M13", value: "endosperm_cell" },
        { key: "C", text: t`a leaf cell`, correct: false, misconceptionId: "C06-M14", value: "leaf_cell" },
        { key: "D", text: t`the zygote`, correct: false, misconceptionId: "C06-M15", value: "zygote" },
      ],
      solution: {
        steps: [
          t`Haploid number $= 6$.`,
          t`Synergids are haploid.`,
        ],
      },
    },
  ],
};
