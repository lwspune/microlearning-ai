import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Skeleton and Movement prerequisite graph (Balbharati Biology Std XI, Ch.16): the sarcomere with its actin and myosin filaments, the sliding filament theory and the role of calcium, tetanus and fatigue, the atlas and axis, the types of joints, and disorders such as osteoporosis, gout and sprain.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-11` subtopics.
 */
const S = (sub: string) => `mh-sb-11/skeleton-movement-11-bio#${sub}`;

export const graph: GraphNode[] = [
  // Muscle
  {
    id: "C01", slug: "skeletal-muscle-structure", title: "Structure of skeletal muscle", group: "Muscle", tier: "core",
    oneLiner: t`The sarcomere, between two Z lines, is the functional unit: thin actin filaments (F actin, tropomyosin, troponin) overlap thick myosin filaments whose heads form cross bridges`,
    prereqs: [], ext: [], sources: [S("Structure of Skeletal Muscle")],
  },
  {
    id: "C02", slug: "muscle-contraction", title: "Muscle contraction and relaxation", group: "Muscle", tier: "core",
    oneLiner: t`Calcium ions from the sarcoplasmic reticulum bind troponin, uncovering actin's active sites; ATP-powered myosin heads pull actin inward, and removing calcium relaxes the muscle`,
    prereqs: ["C01"], ext: [], sources: [S("Muscle Contraction and Relaxation")],
  },
  {
    id: "C03", slug: "muscle-properties", title: "Properties of muscles", group: "Muscle", tier: "core",
    oneLiner: t`Rapid stimuli give a sustained contraction called tetanus; lactic acid from anaerobic work causes fatigue, so myoglobin-rich red fibres outlast white fibres`,
    prereqs: ["C02"], ext: [], sources: [S("Properties of Muscles")],
  },
  // Skeleton
  {
    id: "C04", slug: "axial-appendicular-skeleton", title: "Axial and appendicular skeleton", group: "Skeleton", tier: "core",
    oneLiner: t`The ring-like atlas carries the skull on its facets (the 'Yes joint'), the axis gives the odontoid process for the pivot ('No joint'), and tarsals form the ankle`,
    prereqs: [], ext: [], sources: [S("Axial and Appendicular Skeleton")],
  },
  {
    id: "C05", slug: "joints", title: "Joints", group: "Skeleton", tier: "core",
    oneLiner: t`Sutures (butt, lap, scarf, serrate) are immovable, cartilaginous joints (synchondrosis, symphysis) slightly movable, and synovial joints such as the hinge and pivot freely movable`,
    prereqs: ["C01", "C04"], ext: [], sources: [S("Joints")],
  },
  // Health
  {
    id: "C06", slug: "muscle-bone-disorders", title: "Disorders of muscles and bones", group: "Health", tier: "core",
    oneLiner: t`Osteoporosis makes bones porous and brittle, gout deposits sodium urate in joints, a sprain tears ligaments, and a splint keeps a fractured bone still`,
    prereqs: ["C05"], ext: [], sources: [S("Disorders of Muscles and Bones")],
  },
];
