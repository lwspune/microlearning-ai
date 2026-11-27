import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`You nod 'yes' and shake your head 'no'. Do both movements use the same joint?`,
    reveal: t`No. Nodding is at the skull and atlas; turning is at the atlas and axis.`,
  },
  explanation: {
    intuition: [
      t`The **atlas** and **axis** are the first two cervical vertebrae.`,
      t`They carry the head, let it move and protect the spinal cord.`,
      t`In the limbs, **tarsals** form the ankle and **carpals** the wrist.`,
    ],
    formal: [
      {
        title: "Atlas",
        points: [
          t`Ring-like, with anterior and posterior arches and **no centrum** or spinous process.`,
          t`The **transverse ligament** divides its foramen: odontoid process in front, spinal cord behind.`,
          t`Facets hold the **occipital condyles**: the **'Yes joint'**, a class I lever for nodding.`,
        ],
      },
      {
        title: "Axis and limb bones",
        points: [
          t`The axis centrum gives a tooth-like **odontoid process** that fits into the atlas.`,
          t`It forms the pivot **'No joint'**, letting the head turn sideways.`,
          t`Seven **tarsals** form the ankle; metatarsals the sole; carpals and metacarpals the wrist and palm.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which bone gives the peg on which the head turns sideways?`,
      steps: [
        t`Turning sideways is the pivot 'No joint'.`,
        t`The peg is the odontoid process, from the centrum of the axis.`,
      ],
      answer: t`The axis`,
    },
    visualSpec: t`The atlas seen from above: a ring split by the transverse ligament, the odontoid process in front and the spinal cord behind.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Picks carpals.",
      remediation: "Carpals are wrist bones.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Picks metacarpals.",
      remediation: "Metacarpals form the palm.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Picks metatarsals.",
      remediation: "Metatarsals form the sole.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks odontoid process.",
      remediation: "That is on the axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Says second cervical.",
      remediation: "The atlas is the first.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Says pivot bone.",
      remediation: "The atlas rotates on the axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Picks spinal cord.",
      remediation: "The spinal cord runs through the neural canal.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Picks odontoid process.",
      remediation: "It is a peg on the axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks occipital condyle.",
      remediation: "The occipital condyles are on the skull.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Picks class II.",
      remediation: "In class II the resistance is in the middle.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Picks class III.",
      remediation: "That is the elbow, force in the middle.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Says no lever.",
      remediation: "Joint, muscle and head form a lever.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Picks spinal cord.",
      remediation: "It runs through the vertebral foramen.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks odontoid process.",
      remediation: "It fits in the anterior part.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Picks transverse ligament.",
      remediation: "It divides the vertebral foramen.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q1(B)" },
      stem: t`A person slips on the staircase and breaks his ankle bone. Which bones are involved?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ankle" } },
      options: [
        { key: "A", text: t`Metacarpals`, correct: false, misconceptionId: "C04-M2", value: "metacarpals_t" },
        { key: "B", text: t`Metatarsals`, correct: false, misconceptionId: "C04-M3", value: "metatarsals_t" },
        { key: "C", text: t`Tarsals`, correct: true, value: "tarsals_t" },
        { key: "D", text: t`Carpals`, correct: false, misconceptionId: "C04-M1", value: "carpals_t" },
      ],
      solution: {
        steps: [
          t`Ankle bones.`,
          t`Tarsals.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q3(D)" },
      stem: t`Which feature belongs to the atlas and not to the axis?`,
      verify: { kind: "value", inputs: {  }, params: { q: "atlas" } },
      options: [
        { key: "A", text: t`a tooth-like odontoid process`, correct: false, misconceptionId: "C04-M4", value: "odontoid_process" },
        { key: "B", text: t`it is the second cervical vertebra`, correct: false, misconceptionId: "C04-M5", value: "second_cervical" },
        { key: "C", text: t`it is the pivot on which the head rotates`, correct: false, misconceptionId: "C04-M6", value: "pivot_bone" },
        { key: "D", text: t`a ring with no centrum and no spinous process`, correct: true, value: "ring_no_centrum" },
      ],
      solution: {
        steps: [
          t`No centrum.`,
          t`The atlas is a ring.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q2(B)" },
      stem: t`In a cervical vertebra, the vertebrarterial canal at the base of each transverse process carries the`,
      verify: { kind: "value", inputs: {  }, params: { q: "cord" } },
      options: [
        { key: "A", text: t`odontoid process of the axis`, correct: false, misconceptionId: "C04-M8", value: "odontoid_axis" },
        { key: "B", text: t`occipital condyle`, correct: false, misconceptionId: "C04-M9", value: "occipital_condyle" },
        { key: "C", text: t`vertebral artery`, correct: true, value: "vertebral_artery" },
        { key: "D", text: t`spinal cord`, correct: false, misconceptionId: "C04-M7", value: "spinal_cord_a" },
      ],
      solution: {
        steps: [
          t`Canal named for the artery.`,
          t`The vertebral artery.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q3(D)" },
      stem: t`In the 'Yes joint' between the skull and the atlas, the joint is the fulcrum, the back muscles give the force and the head is the resistance. It is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "lever" } },
      options: [
        { key: "A", text: t`class II lever`, correct: false, misconceptionId: "C04-M10", value: "class_two" },
        { key: "B", text: t`class III lever`, correct: false, misconceptionId: "C04-M11", value: "class_three" },
        { key: "C", text: t`joint that works as no lever`, correct: false, misconceptionId: "C04-M12", value: "no_lever" },
        { key: "D", text: t`class I lever`, correct: true, value: "class_one" },
      ],
      solution: {
        steps: [
          t`Fulcrum in the middle.`,
          t`Class I.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q3(D)" },
      stem: t`The large transverse foramina of the atlas allow the passage of the`,
      verify: { kind: "value", inputs: {  }, params: { q: "foramen" } },
      options: [
        { key: "A", text: t`transverse ligament`, correct: false, misconceptionId: "C04-M15", value: "transverse_ligament" },
        { key: "B", text: t`vertebral artery`, correct: true, value: "vertebral_artery" },
        { key: "C", text: t`spinal cord`, correct: false, misconceptionId: "C04-M13", value: "spinal_cord" },
        { key: "D", text: t`odontoid process`, correct: false, misconceptionId: "C04-M14", value: "odontoid_peg" },
      ],
      solution: {
        steps: [
          t`Large foramina.`,
          t`Vertebral artery.`,
        ],
      },
    },
  ],
};
