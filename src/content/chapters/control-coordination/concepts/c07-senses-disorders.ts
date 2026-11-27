import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`An elderly man's hands shake whenever he holds a cup. What may be failing in his brain?`,
    reveal: t`Neurons that make dopamine. Their loss causes Parkinson's disease, with tremors and stiffness.`,
  },
  explanation: {
    intuition: [
      t`**Sense organs** hold receptors for particular stimuli.`,
      t`The ear and tongue are examples.`,
      t`Some disorders come from loss of neurons.`,
    ],
    formal: [
      {
        title: "Senses",
        points: [
          t`Middle ear: **malleus, incus, stapes** amplify vibrations; the stapes is the smallest bone.`,
          t`Taste buds hold **chemoreceptors** (gustatoreceptors).`,
          t`Tastes: sweet, salt, sour, bitter and umami.`,
        ],
      },
      {
        title: "Disorders",
        points: [
          t`**Parkinson's**: loss of dopamine-producing neurons; tremors, stiffness.`,
          t`**Alzheimer's**: the commonest **dementia**; memory and reasoning fade.`,
          t`Both increase with age.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why does the middle ear need three ossicles?`,
      steps: [
        t`They link the eardrum to the inner ear.`,
        t`They amplify the vibrations.`,
      ],
      answer: t`To amplify sound`,
    },
    visualSpec: t`The middle ear with its three ossicles between the eardrum and the cochlea.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks cochlea set.",
      remediation: "Those are in the inner ear.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks pinna set.",
      remediation: "Those are outer parts.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Includes cochlea.",
      remediation: "The third is the stapes.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks malleus.",
      remediation: "Malleus is the largest.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks incus.",
      remediation: "Incus is the middle one.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks hyoid.",
      remediation: "The hyoid is in the neck.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks mechanoreceptors.",
      remediation: "Those sense touch.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks photoreceptors.",
      remediation: "Those sense light.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks thermoreceptors.",
      remediation: "Those sense heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Picks Alzheimer's.",
      remediation: "That is dementia.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Picks Addison's.",
      remediation: "That is adrenal.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Picks Grave's.",
      remediation: "That is thyroid.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Picks epilepsy.",
      remediation: "Epilepsy is seizures.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Picks paralysis.",
      remediation: "Paralysis is loss of movement.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Picks tremor.",
      remediation: "Tremor is Parkinson's.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q2(4)" },
      stem: t`The three ear ossicles are the`,
      verify: { kind: "value", inputs: {  }, params: { q: "ossicles" } },
      options: [
        { key: "A", text: t`pinna, eardrum and cochlea`, correct: false, misconceptionId: "C07-M2", value: "pinna_set" },
        { key: "B", text: t`malleus, incus and cochlea`, correct: false, misconceptionId: "C07-M3", value: "incus_cochlea_set" },
        { key: "C", text: t`malleus, incus and stapes`, correct: true, value: "malleus_incus_stapes" },
        { key: "D", text: t`cochlea, utricle and saccule`, correct: false, misconceptionId: "C07-M1", value: "cochlea_set" },
      ],
      solution: {
        steps: [
          t`Hammer, anvil, stirrup.`,
          t`Malleus, incus and stapes.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q2(4)" },
      stem: t`The smallest bone of the body, an ear ossicle, is the`,
      verify: { kind: "value", inputs: {  }, params: { q: "smallest" } },
      options: [
        { key: "A", text: t`malleus`, correct: false, misconceptionId: "C07-M4", value: "malleus_b" },
        { key: "B", text: t`incus`, correct: false, misconceptionId: "C07-M5", value: "incus_b" },
        { key: "C", text: t`hyoid`, correct: false, misconceptionId: "C07-M6", value: "hyoid_b" },
        { key: "D", text: t`stapes`, correct: true, value: "stapes_b" },
      ],
      solution: {
        steps: [
          t`The stirrup.`,
          t`Stapes.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/control-coordination-12-bio/Ex Q5(6)" },
      stem: t`Taste is detected by`,
      verify: { kind: "value", inputs: {  }, params: { q: "taste" } },
      options: [
        { key: "A", text: t`thermoreceptors`, correct: false, misconceptionId: "C07-M9", value: "thermoreceptors_r" },
        { key: "B", text: t`chemoreceptors`, correct: true, value: "chemoreceptors_r" },
        { key: "C", text: t`mechanoreceptors`, correct: false, misconceptionId: "C07-M7", value: "mechanoreceptors_r" },
        { key: "D", text: t`photoreceptors`, correct: false, misconceptionId: "C07-M8", value: "photoreceptors_r" },
      ],
      solution: {
        steps: [
          t`Chemicals dissolved in saliva.`,
          t`Chemoreceptors.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2024 Q. 1(viii)" },
      stem: t`Degeneration of dopamine-producing neurons in the CNS causes`,
      verify: { kind: "value", inputs: {  }, params: { q: "dopamine" } },
      options: [
        { key: "A", text: t`Parkinson's disease`, correct: true, value: "parkinsons_d" },
        { key: "B", text: t`Alzheimer's disease`, correct: false, misconceptionId: "C07-M10", value: "alzheimers_d" },
        { key: "C", text: t`Addison's disease`, correct: false, misconceptionId: "C07-M11", value: "addisons_d" },
        { key: "D", text: t`Grave's disease`, correct: false, misconceptionId: "C07-M12", value: "graves_d" },
      ],
      solution: {
        steps: [
          t`Dopamine neurons lost.`,
          t`Parkinson's disease.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Control and Coordination/2026 Q. 13" },
      stem: t`Alzheimer's disease is the most common form of`,
      verify: { kind: "value", inputs: {  }, params: { q: "dementia" } },
      options: [
        { key: "A", text: t`epilepsy`, correct: false, misconceptionId: "C07-M13", value: "epilepsy_d" },
        { key: "B", text: t`paralysis`, correct: false, misconceptionId: "C07-M14", value: "paralysis_d" },
        { key: "C", text: t`tremor`, correct: false, misconceptionId: "C07-M15", value: "tremor_d" },
        { key: "D", text: t`dementia`, correct: true, value: "dementia_d" },
      ],
      solution: {
        steps: [
          t`Memory loss with age.`,
          t`Dementia.`,
        ],
      },
    },
  ],
};
