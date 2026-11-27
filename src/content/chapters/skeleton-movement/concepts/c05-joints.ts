import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Your skull bones never move, your spine bends a little, and your elbow swings freely. Why the difference?`,
    reveal: t`They are joined differently: sutures, cartilage and synovial joints.`,
  },
  explanation: {
    intuition: [
      t`Skull bones meet at **sutures**.`,
      t`**Cartilaginous joints** are slightly movable.`,
      t`**Synovial joints** have a fluid-filled cavity and move freely.`,
    ],
    formal: [
      {
        title: "Sutures and cartilage",
        points: [
          t`Sutures: **butt** (square edges, nasal bones), **lap** (overlapping), **scarf** (slanting), **serrate** (zig-zag).`,
          t`**Synchondrosis**: hyaline cartilage joins bones, as at the epiphyseal plate; it ossifies after growth.`,
          t`**Symphysis**: a disc of **fibrocartilage**, as in intervertebral discs and the pubic symphysis.`,
        ],
      },
      {
        title: "Synovial joints",
        points: [
          t`A capsule of an outer **fibrous layer** and inner **synovial membrane** encloses the synovial cavity.`,
          t`The membrane secretes **synovial fluid**; **hyaline cartilage** reduces friction; ligaments prevent dislocation.`,
          t`The elbow is a **hinge** (flexion, extension); the atlas on the axis is a **pivot**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Lifting a dumbbell bends the forearm at the elbow. What kind of lever is this?`,
      steps: [
        t`The elbow is the fulcrum; the forearm and dumbbell are the resistance.`,
        t`The biceps pulls between them, so force is in the middle.`,
      ],
      answer: t`Class III`,
    },
    visualSpec: t`A synovial joint in section: two bone ends capped with cartilage, a fluid-filled cavity, a two-layer capsule and ligaments.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Picks scarf.",
      remediation: "A scarf joint tapers and slants.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Picks lap.",
      remediation: "A lap joint overlaps.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Picks serrate.",
      remediation: "A serrate joint interlocks in a zig-zag.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Picks fibrocartilage.",
      remediation: "That is the symphysis.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Picks synovial fluid.",
      remediation: "That is a synovial joint.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Picks ligament.",
      remediation: "Cartilage joins these bones.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks synchondrosis.",
      remediation: "That uses hyaline cartilage.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks suture.",
      remediation: "Sutures join skull bones.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks synovial joint.",
      remediation: "There is no cavity here.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Picks articular cartilage.",
      remediation: "It reduces friction and absorbs shock.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Picks fibrous layer.",
      remediation: "It is the outer capsule.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Picks ligament.",
      remediation: "Ligaments prevent dislocation.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says shoulder moves.",
      remediation: "The upper arm must stay still.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says all move.",
      remediation: "Other muscles then share the work.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says wrist moves.",
      remediation: "The biceps moves the forearm at the elbow.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q1(H)" },
      stem: t`The two nasal bones meet with square edges that simply abut. This suture is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "nasal" } },
      options: [
        { key: "A", text: t`serrate joint`, correct: false, misconceptionId: "C05-M3", value: "serrate_joint" },
        { key: "B", text: t`butt joint`, correct: true, value: "butt_joint" },
        { key: "C", text: t`scarf joint`, correct: false, misconceptionId: "C05-M1", value: "scarf_joint" },
        { key: "D", text: t`lap joint`, correct: false, misconceptionId: "C05-M2", value: "lap_joint" },
      ],
      solution: {
        steps: [
          t`Square edges abut.`,
          t`Butt joint.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q5(B)" },
      stem: t`In a synchondrosis, as at the epiphyseal plate of a long bone, the bones are held together by`,
      verify: { kind: "value", inputs: {  }, params: { q: "synchondrosis" } },
      options: [
        { key: "A", text: t`fibrocartilage`, correct: false, misconceptionId: "C05-M4", value: "fibrocartilage_t" },
        { key: "B", text: t`synovial fluid`, correct: false, misconceptionId: "C05-M5", value: "synovial_fluid" },
        { key: "C", text: t`a ligament`, correct: false, misconceptionId: "C05-M6", value: "ligament_t" },
        { key: "D", text: t`hyaline cartilage`, correct: true, value: "hyaline_cartilage" },
      ],
      solution: {
        steps: [
          t`Epiphyseal plate.`,
          t`Hyaline cartilage.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q5(B)" },
      stem: t`The intervertebral discs and the pubic symphysis join bones by a flat disc of fibrocartilage. Such a joint is a`,
      verify: { kind: "value", inputs: {  }, params: { q: "disc" } },
      options: [
        { key: "A", text: t`symphysis`, correct: true, value: "symphysis_t" },
        { key: "B", text: t`synchondrosis`, correct: false, misconceptionId: "C05-M7", value: "synchondrosis_t" },
        { key: "C", text: t`suture`, correct: false, misconceptionId: "C05-M8", value: "suture_t" },
        { key: "D", text: t`synovial joint`, correct: false, misconceptionId: "C05-M9", value: "synovial_joint" },
      ],
      solution: {
        steps: [
          t`Fibrocartilage disc.`,
          t`Symphysis.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q5(A)" },
      stem: t`In a synovial joint, the synovial fluid is secreted by the`,
      verify: { kind: "value", inputs: {  }, params: { q: "secretes" } },
      options: [
        { key: "A", text: t`fibrous layer of the capsule`, correct: false, misconceptionId: "C05-M11", value: "fibrous_layer" },
        { key: "B", text: t`ligament`, correct: false, misconceptionId: "C05-M12", value: "ligament_s" },
        { key: "C", text: t`synovial membrane`, correct: true, value: "synovial_membrane" },
        { key: "D", text: t`articular cartilage`, correct: false, misconceptionId: "C05-M10", value: "articular_cartilage" },
      ],
      solution: {
        steps: [
          t`Lines the capsule.`,
          t`Synovial membrane.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/skeleton-movement-11-bio/Ex Q2(C)" },
      stem: t`Raju trains his biceps with dumbbells. Which joint should move?`,
      verify: { kind: "value", inputs: {  }, params: { q: "biceps" } },
      options: [
        { key: "A", text: t`The elbow; the shoulder and wrist stay still`, correct: true, value: "elbow_only" },
        { key: "B", text: t`The shoulder; the elbow stays still`, correct: false, misconceptionId: "C05-M13", value: "shoulder_moves" },
        { key: "C", text: t`The shoulder, elbow and wrist together`, correct: false, misconceptionId: "C05-M14", value: "all_move" },
        { key: "D", text: t`The wrist; the elbow stays still`, correct: false, misconceptionId: "C05-M15", value: "wrist_moves" },
      ],
      solution: {
        steps: [
          t`Biceps bends the elbow.`,
          t`Only the elbow moves.`,
        ],
      },
    },
  ],
};
