import type { GraphNode } from "../../types.ts";

const t = String.raw;

/**
 * Control and Coordination prerequisite graph (Balbharati Biology Std XII, Ch.9): neurons and glia, nerve impulses and synapses, nervous systems across animals, the brain, cranial nerves and reflexes, the autonomic system, senses and disorders, hormone action, and the endocrine glands.
 * Edges are hard prerequisites, transitively reduced.
 * `sources`: the book's sections, as PYQ Vault `mh-sb-12` subtopics.
 */
const S = (sub: string) => `mh-sb-12/control-coordination-12-bio#${sub}`;

export const graph: GraphNode[] = [
  // Nervous system
  {
    id: "C01", slug: "neural-tissue", title: "Neurons and glial cells", group: "Nervous system", tier: "core",
    oneLiner: t`Dendrons receive impulses and the axon carries them away; Schwann cells myelinate PNS fibres and oligodendrocytes CNS fibres; cell bodies outside the CNS form ganglia`,
    prereqs: [], ext: [], sources: [S("Neural Tissue")],
  },
  {
    id: "C02", slug: "nerve-impulse-synapse", title: "Nerve impulse and synapse", group: "Nervous system", tier: "core",
    oneLiner: t`A resting fibre has more Na⁺ outside; Na⁺ rushing in depolarizes it into an action potential; at a synapse Ca²⁺ entry releases acetylcholine by exocytosis`,
    prereqs: ["C01"], ext: [], sources: [S("Transmission of Nerve Impulse"), S("Synapse")],
  },
  {
    id: "C03", slug: "nervous-systems-animals", title: "Nervous systems in animals", group: "Nervous system", tier: "core",
    oneLiner: t`Hydra has a nerve net, Planaria a ladder of ventral nerve cords, the earthworm a ganglionated chain; in humans the brain and spinal cord form the CNS`,
    prereqs: ["C01"], ext: [], sources: [S("Nervous System in Planaria")],
  },
  {
    id: "C04", slug: "human-brain", title: "The human brain", group: "Nervous system", tier: "core",
    oneLiner: t`Three meninges (pia mater innermost) and CSF from choroid plexuses protect it; the corpus callosum joins the hemispheres, the cerebellum keeps balance and the medulla runs vital functions`,
    prereqs: ["C03"], ext: [], sources: [S("Human Nervous System")],
  },
  {
    id: "C05", slug: "cranial-nerves-reflex", title: "Cranial nerves and reflexes", group: "Nervous system", tier: "core",
    oneLiner: t`Twelve pairs of cranial nerves: I, II and VIII sensory, III, IV, VI, XI and XII motor, the rest mixed; the spinal cord is the centre for most reflexes, which can be inborn or conditioned`,
    prereqs: ["C04"], ext: [], sources: [S("Human Nervous System")],
  },
  {
    id: "C06", slug: "autonomic-nervous-system", title: "The autonomic nervous system", group: "Nervous system", tier: "core",
    oneLiner: t`Sympathetic: fight or flight, faster heart, adrenaline and noradrenaline; parasympathetic: rest, slower heart, bladder contracts; the adrenal medulla backs up the sympathetic system`,
    prereqs: ["C05"], ext: [], sources: [S("Human Nervous System")],
  },
  {
    id: "C07", slug: "senses-disorders", title: "Sense organs and nervous disorders", group: "Nervous system", tier: "core",
    oneLiner: t`Malleus, incus and stapes amplify sound; taste buds hold chemoreceptors; Parkinson's comes from loss of dopamine neurons, Alzheimer's is the commonest dementia`,
    prereqs: ["C02"], ext: [], sources: [S("Sensory Receptors"), S("Disorders of Nervous System")],
  },
  // Hormones
  {
    id: "C08", slug: "hormone-action", title: "Hormones and how they act", group: "Hormones", tier: "core",
    oneLiner: t`Hormones from ductless glands reach targets through blood; protein hormones bind surface receptors and use cAMP; steroids enter and bind DNA; thyroxine and adrenaline come from tyrosine`,
    prereqs: [], ext: [], sources: [S("Endocrine System")],
  },
  {
    id: "C09", slug: "pituitary-thyroid", title: "Pituitary, thyroid, parathyroid and thymus", group: "Hormones", tier: "core",
    oneLiner: t`Excess GH causes gigantism or acromegaly; lack of ADH causes diabetes insipidus; thyroid disorders range from cretinism and myxoedema to exophthalmic goitre; parathormone controls Ca²⁺`,
    prereqs: ["C08"], ext: [], sources: [S("Endocrine System")],
  },
  {
    id: "C10", slug: "adrenal-pancreas-gonads", title: "Adrenals, pancreas and gonads", group: "Hormones", tier: "core",
    oneLiner: t`Beta cells make insulin, alpha cells glucagon; lack of corticoids is Addison's disease; the corpus luteum makes progesterone, the anti-abortion hormone`,
    prereqs: ["C08"], ext: [], sources: [S("Endocrine System")],
  },
];
