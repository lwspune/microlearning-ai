import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`Your arm moves when you decide, but your gut and heart work on their own. Are they different muscles?`,
    reveal: t`Yes: skeletal muscle is voluntary; smooth and cardiac muscles are involuntary.`,
  },
  explanation: {
    intuition: [
      t`Muscle fibres contract to cause movement.`,
      t`There are three kinds: **smooth**, **skeletal** and **cardiac**.`,
      t`Each muscle fibre is covered by a **sarcolemma**.`,
    ],
    formal: [
      {
        title: "Smooth vs skeletal",
        points: [
          t`**Smooth**: spindle-shaped, one central nucleus, no striations; in visceral organs and blood vessels.`,
          t`Smooth muscle is slow and involuntary; the autonomic nervous system controls it.`,
          t`**Skeletal**: long syncytial fibre, peripheral nuclei, striated; attached to bones; quick and voluntary.`,
        ],
      },
      {
        title: "Cardiac muscle",
        points: [
          t`Forms the **myocardium** of the heart wall.`,
          t`Striated and involuntary; **intercalated discs** pass the stimulus quickly.`,
          t`Some cardiac muscles make their own impulses: the heart is **myogenic**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Bright light shrinks the pupil without your choosing. What kind of muscle acts?`,
      steps: [
        t`The response is involuntary.`,
        t`The iris has circular smooth muscles.`,
      ],
      answer: t`Smooth muscle`,
    },
    visualSpec: t`Three fibres side by side: spindle-shaped smooth, long striated skeletal, and cardiac fibres joined by discs.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Picks skeletal.",
      remediation: "Skeletal muscle is voluntary.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Picks cardiac.",
      remediation: "Cardiac muscle is only in the heart.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Says neurons alone.",
      remediation: "Neurons signal; a muscle contracts.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Picks syncytial.",
      remediation: "That is skeletal muscle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Picks striated.",
      remediation: "Smooth muscle has no striations.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Picks attached to bones.",
      remediation: "That is skeletal muscle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Picks slow, involuntary.",
      remediation: "That is smooth muscle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Picks autonomic.",
      remediation: "That controls smooth muscle.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Picks more actin.",
      remediation: "Skeletal has more myosin.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Says bone attachment.",
      remediation: "Tendons attach muscle to bone.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Says voluntary.",
      remediation: "Cardiac muscle is involuntary.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Says striations.",
      remediation: "Striations come from A and I bands.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Says nerves start it.",
      remediation: "Myogenic means the muscle starts it.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Says voluntary.",
      remediation: "The heart is involuntary.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Says smooth wall.",
      remediation: "The wall is cardiac muscle.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q2(F)" },
      stem: t`Supriya stepped into bright light and her pupil shrank. The muscle responsible is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pupil" } },
      options: [
        { key: "A", text: t`cardiac muscle`, correct: false, misconceptionId: "C07-M2", value: "cardiac_muscle" },
        { key: "B", text: t`no muscle: neurons alone did it`, correct: false, misconceptionId: "C07-M3", value: "neuron_only" },
        { key: "C", text: t`smooth muscle (circular muscles of the iris)`, correct: true, value: "smooth_muscle" },
        { key: "D", text: t`skeletal muscle`, correct: false, misconceptionId: "C07-M1", value: "skeletal_muscle" },
      ],
      solution: {
        steps: [
          t`Involuntary, circular.`,
          t`Smooth muscle.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(D)" },
      stem: t`Which is a feature of a smooth muscle fibre?`,
      verify: { kind: "value", inputs: {  }, params: { q: "smooth_fibre" } },
      options: [
        { key: "A", text: t`Long syncytial fibre, many peripheral nuclei`, correct: false, misconceptionId: "C07-M4", value: "syncytial_many" },
        { key: "B", text: t`Dark and light bands, so striated`, correct: false, misconceptionId: "C07-M5", value: "striated_bands" },
        { key: "C", text: t`Attached to bones`, correct: false, misconceptionId: "C07-M6", value: "attached_bones" },
        { key: "D", text: t`Spindle-shaped, with one central nucleus`, correct: true, value: "spindle_single" },
      ],
      solution: {
        steps: [
          t`Spindle, one nucleus.`,
          t`Spindle-shaped, central nucleus.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q3(D)" },
      stem: t`Which is true of skeletal muscles?`,
      verify: { kind: "value", inputs: {  }, params: { q: "skeletal" } },
      options: [
        { key: "A", text: t`Less myosin and more actin than smooth muscle`, correct: false, misconceptionId: "C07-M9", value: "more_actin" },
        { key: "B", text: t`Quick, strong, voluntary contractions`, correct: true, value: "quick_voluntary" },
        { key: "C", text: t`Slow, sustained, involuntary contractions`, correct: false, misconceptionId: "C07-M7", value: "slow_involuntary" },
        { key: "D", text: t`Innervated by the autonomic nervous system`, correct: false, misconceptionId: "C07-M8", value: "autonomic_t" },
      ],
      solution: {
        steps: [
          t`Attached to bones.`,
          t`Quick, voluntary.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q4" },
      stem: t`In cardiac muscle, the intercalated discs help in`,
      verify: { kind: "value", inputs: {  }, params: { q: "discs" } },
      options: [
        { key: "A", text: t`quick transfer of the stimulus`, correct: true, value: "quick_transfer" },
        { key: "B", text: t`attaching the muscle to bone`, correct: false, misconceptionId: "C07-M10", value: "bone_attachment" },
        { key: "C", text: t`making the muscle voluntary`, correct: false, misconceptionId: "C07-M11", value: "voluntary_control" },
        { key: "D", text: t`forming the striations`, correct: false, misconceptionId: "C07-M12", value: "forming_striations" },
      ],
      solution: {
        steps: [
          t`Join cardiac fibres.`,
          t`Quick transfer of stimulus.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/animal-tissue-11-bio/Ex Q4" },
      stem: t`The mammalian heart is called myogenic because`,
      verify: { kind: "value", inputs: {  }, params: { q: "myogenic" } },
      options: [
        { key: "A", text: t`nerves start every beat`, correct: false, misconceptionId: "C07-M13", value: "nerve_starts" },
        { key: "B", text: t`it is under voluntary control`, correct: false, misconceptionId: "C07-M14", value: "voluntary_heart" },
        { key: "C", text: t`its wall is smooth muscle`, correct: false, misconceptionId: "C07-M15", value: "smooth_wall" },
        { key: "D", text: t`some cardiac muscles generate impulses on their own`, correct: true, value: "self_impulse" },
      ],
      solution: {
        steps: [
          t`Own impulses.`,
          t`Myogenic.`,
        ],
      },
    },
  ],
};
