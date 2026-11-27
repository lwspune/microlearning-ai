import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A cockroach has no lungs, and its blood carries no oxygen. How does air reach its muscles?`,
    reveal: t`Through a network of air tubes, the tracheae and tracheoles, that run right into the tissues.`,
  },
  explanation: {
    intuition: [
      t`The cockroach breathes by a **tracheal system**.`,
      t`Air enters through openings called **spiracles**.`,
      t`Air tubes carry it straight to the cells.`,
    ],
    formal: [
      {
        title: "Air tubes",
        points: [
          t`**Spiracles**: ten pairs on the sides, two thoracic and eight abdominal.`,
          t`**Tracheae**: about 1 mm thick, with spiral or annular chitin thickenings that stop collapse.`,
          t`**Tracheoles**: fine tubes, not lined with chitin, ending blindly in cells in a watery fluid.`,
        ],
      },
      {
        title: "Gas exchange",
        points: [
          t`Gases pass directly between air and tissues.`,
          t`Body fluid does not carry gases; it is only a medium for diffusion.`,
          t`Thoracic and abdominal muscle movements renew the air.`,
        ],
      },
    ],
    worked: {
      prompt: t`A spiracle on one side is sealed with wax. Why does the cockroach still breathe?`,
      steps: [
        t`Air enters through any of the ten pairs.`,
        t`The other spiracles stay open.`,
      ],
      answer: t`The other spiracles admit air`,
    },
    visualSpec: t`Spiracles along the side opening into branching tracheae and fine tracheoles.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Says circulatory.",
      remediation: "Blood does not carry the air.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Says reproductive.",
      remediation: "Spiracles let air in.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Says nervous.",
      remediation: "Spiracles are air openings.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Counts abdomen only.",
      remediation: "Two thoracic pairs too.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Counts thorax only.",
      remediation: "Eight abdominal pairs too.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says ten abdominal.",
      remediation: "There are eight abdominal pairs.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Says blood pressure.",
      remediation: "Blood does not enter tracheae.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Says muscle wall.",
      remediation: "Chitin rings hold them open.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Says fluid-filled.",
      remediation: "Only tracheole ends hold fluid.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Says haemolymph.",
      remediation: "Body fluid does not carry gases.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Says lungs.",
      remediation: "Cockroach has no lungs.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says skin.",
      remediation: "Air enters by spiracles.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Says poison.",
      remediation: "It suffocates; soap is not poison.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Says skeleton dissolves.",
      remediation: "The spiracles get blocked.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Says lungs flood.",
      remediation: "It has tracheae, not lungs.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q1(C)" },
      stem: t`Spiracle is a part of ____ system of cockroach.`,
      verify: { kind: "value", inputs: {  }, params: { q: "spiracle" } },
      options: [
        { key: "A", text: t`reproductive`, correct: false, misconceptionId: "C04-M2", value: "reproductive_s" },
        { key: "B", text: t`nervous`, correct: false, misconceptionId: "C04-M3", value: "nervous_s" },
        { key: "C", text: t`respiratory`, correct: true, value: "respiratory_s" },
        { key: "D", text: t`circulatory`, correct: false, misconceptionId: "C04-M1", value: "circulatory_s" },
      ],
      solution: {
        steps: [
          t`Air openings.`,
          t`Respiratory.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(B)" },
      stem: t`The spiracles of a cockroach are`,
      verify: { kind: "value", inputs: {  }, params: { q: "pairs" } },
      options: [
        { key: "A", text: t`eight pairs, all abdominal`, correct: false, misconceptionId: "C04-M4", value: "eight_only" },
        { key: "B", text: t`two pairs, both thoracic`, correct: false, misconceptionId: "C04-M5", value: "two_only" },
        { key: "C", text: t`twelve pairs: two thoracic and ten abdominal`, correct: false, misconceptionId: "C04-M6", value: "two_ten" },
        { key: "D", text: t`ten pairs: two thoracic and eight abdominal`, correct: true, value: "two_eight" },
      ],
      solution: {
        steps: [
          t`Two thoracic, eight abdominal.`,
          t`Ten pairs.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(B)" },
      stem: t`The tracheae do not collapse because they have`,
      verify: { kind: "value", inputs: {  }, params: { q: "collapse" } },
      options: [
        { key: "A", text: t`a thick wall of muscle`, correct: false, misconceptionId: "C04-M8", value: "muscle_wall" },
        { key: "B", text: t`a watery fluid filling them`, correct: false, misconceptionId: "C04-M9", value: "fluid_filled" },
        { key: "C", text: t`spiral or annular thickenings of chitin`, correct: true, value: "chitin_rings" },
        { key: "D", text: t`blood pressing on them from inside`, correct: false, misconceptionId: "C04-M7", value: "blood_pressure" },
      ],
      solution: {
        steps: [
          t`Chitin thickenings.`,
          t`Spiral or annular.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q3(F)" },
      stem: t`In the cockroach, oxygen reaches the tissues`,
      verify: { kind: "value", inputs: {  }, params: { q: "transport" } },
      options: [
        { key: "A", text: t`carried by the haemolymph`, correct: false, misconceptionId: "C04-M10", value: "by_haemolymph" },
        { key: "B", text: t`from a pair of lungs`, correct: false, misconceptionId: "C04-M11", value: "by_lungs" },
        { key: "C", text: t`through the skin`, correct: false, misconceptionId: "C04-M12", value: "by_skin" },
        { key: "D", text: t`directly through the tracheoles, without blood`, correct: true, value: "direct_tracheoles" },
      ],
      solution: {
        steps: [
          t`Tracheoles reach cells.`,
          t`Directly, without blood.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/cockroach-11-bio/Ex Q2(F)" },
      stem: t`A cockroach put in soap water dies because`,
      verify: { kind: "value", inputs: {  }, params: { q: "soap" } },
      options: [
        { key: "A", text: t`water fills its lungs`, correct: false, misconceptionId: "C04-M15", value: "lungs_flooded" },
        { key: "B", text: t`the spiracles and air tubes get blocked, so it suffocates`, correct: true, value: "spiracles_blocked" },
        { key: "C", text: t`soap is a strong poison for it`, correct: false, misconceptionId: "C04-M13", value: "soap_poison" },
        { key: "D", text: t`soap dissolves its exoskeleton`, correct: false, misconceptionId: "C04-M14", value: "skeleton_dissolves" },
      ],
      solution: {
        steps: [
          t`Spiracles blocked.`,
          t`Suffocation.`,
        ],
      },
    },
  ],
};
