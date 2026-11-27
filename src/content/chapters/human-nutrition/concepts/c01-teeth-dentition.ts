import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`You lose your milk teeth as a child, but the new ones must last for life. How many sets of teeth do we get?`,
    reveal: t`Only two: milk teeth and permanent teeth. That is why human dentition is called diphyodont.`,
  },
  explanation: {
    intuition: [
      t`Teeth crush food in the buccal cavity before it is swallowed.`,
      t`A tooth has a **crown** above the gum and a **root** below.`,
      t`We have four kinds of teeth, each with its own job.`,
    ],
    formal: [
      {
        title: "Structure of a tooth",
        points: [
          t`A short **neck** joins the **crown** to the **root** of two or three projections.`,
          t`**Enamel**, the hardest substance of the body, covers the crown; **dentin** gives the tooth its shape.`,
          t`The **pulp cavity** has blood vessels and nerves; **cementum** attaches the root to its socket.`,
        ],
      },
      {
        title: "Human dentition",
        points: [
          t`**Thecodont**: each tooth sits in a separate socket of the jaw bone (gomphosis joint).`,
          t`**Diphyodont**: two sets of teeth, milk and permanent. **Heterodont**: incisors, canines, premolars, molars.`,
          t`Per half-jaw: $\mathrm{I}\,2$, $\mathrm{C}\,1$, $\mathrm{PM}\,2$, $\mathrm{M}\,3$; that is 16 per jaw, 32 in all.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many molars does an adult have?`,
      steps: [
        t`Each half of each jaw has 3 molars.`,
        t`There are 4 half-jaws: $4 \times 3 = 12$.`,
      ],
      answer: t`12`,
    },
    visualSpec: t`A tooth cut lengthwise: enamel, dentin, pulp cavity, root canal and cementum, with the dental formula beside it.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Picks premolars.",
      remediation: "There are 8 premolars but 12 molars.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Picks incisors.",
      remediation: "There are 8 incisors but 12 molars.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Picks canines.",
      remediation: "There are only 4 canines.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Picks dentin.",
      remediation: "Dentin lies under the enamel.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Picks cementum.",
      remediation: "Cementum covers the root.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Picks pulp.",
      remediation: "Pulp is soft tissue inside.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Says two sets.",
      remediation: "That is diphyodont.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Says four types.",
      remediation: "That is heterodont.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Says roots in the gum.",
      remediation: "In thecodont dentition each tooth sits in its own socket of the jaw bone.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Says four types.",
      remediation: "That is heterodont.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Says separate sockets.",
      remediation: "That is thecodont.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Says one set.",
      remediation: "We get two sets.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Counts one half-jaw.",
      remediation: "Multiply by 4 half-jaws.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Counts one jaw.",
      remediation: "There are two jaws.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Multiplies by 8.",
      remediation: "There are only 4 half-jaws.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q1(B)" },
      stem: t`Which type of teeth is maximum in number in the human buccal cavity?`,
      verify: { kind: "value", inputs: {  }, params: { q: "most" } },
      options: [
        { key: "A", text: t`Molars`, correct: true, value: "molars_t" },
        { key: "B", text: t`Premolars`, correct: false, misconceptionId: "C01-M1", value: "premolars_t" },
        { key: "C", text: t`Incisors`, correct: false, misconceptionId: "C01-M2", value: "incisors_t" },
        { key: "D", text: t`Canines`, correct: false, misconceptionId: "C01-M3", value: "canines_t" },
      ],
      solution: {
        steps: [
          t`2 + 1 + 2 + 3 per half-jaw.`,
          t`Molars, 12 in all.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q3(B)" },
      stem: t`The crown of a tooth is covered by the hardest substance of the body. It is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hardest" } },
      options: [
        { key: "A", text: t`enamel`, correct: true, value: "enamel_t" },
        { key: "B", text: t`dentin`, correct: false, misconceptionId: "C01-M4", value: "dentin_t" },
        { key: "C", text: t`cementum`, correct: false, misconceptionId: "C01-M5", value: "cementum_t" },
        { key: "D", text: t`pulp`, correct: false, misconceptionId: "C01-M6", value: "pulp_t" },
      ],
      solution: {
        steps: [
          t`Hardest substance, on the crown.`,
          t`Enamel.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q3(B)" },
      stem: t`Human dentition is called thecodont because`,
      verify: { kind: "value", inputs: {  }, params: { q: "thecodont" } },
      options: [
        { key: "A", text: t`we have four types of teeth`, correct: false, misconceptionId: "C01-M8", value: "four_types" },
        { key: "B", text: t`each tooth is fused to the top of the jaw bone, without a socket`, correct: false, misconceptionId: "C01-M9", value: "embedded_gum" },
        { key: "C", text: t`each tooth is fixed in a separate socket of the jaw bone`, correct: true, value: "socket_jaw" },
        { key: "D", text: t`we get two sets of teeth`, correct: false, misconceptionId: "C01-M7", value: "two_sets" },
      ],
      solution: {
        steps: [
          t`Gomphosis joint.`,
          t`Separate socket in the jaw bone.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q3(B)" },
      stem: t`Human dentition is called diphyodont because`,
      verify: { kind: "value", inputs: {  }, params: { q: "diphyodont" } },
      options: [
        { key: "A", text: t`we get two sets of teeth: milk and permanent`, correct: true, value: "two_sets" },
        { key: "B", text: t`we have four types of teeth`, correct: false, misconceptionId: "C01-M10", value: "four_types" },
        { key: "C", text: t`each tooth sits in its own socket`, correct: false, misconceptionId: "C01-M11", value: "socket_jaw" },
        { key: "D", text: t`one set of teeth lasts for life`, correct: false, misconceptionId: "C01-M12", value: "one_set" },
      ],
      solution: {
        steps: [
          t`Milk teeth, then permanent.`,
          t`Two sets.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/human-nutrition-11-bio/Ex Q3(B)" },
      stem: t`Each half of each jaw has 2 incisors, 1 canine, 2 premolars and 3 molars. How many teeth does an adult have in all?`,
      verify: { kind: "value", inputs: { inc: "2", can: "1", pre: "2", mol: "3" }, params: { q: "total" } },
      options: [
        { key: "A", text: t`$32$`, correct: true, value: "32" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C01-M13", value: "8" },
        { key: "C", text: t`$16$`, correct: false, misconceptionId: "C01-M14", value: "16" },
        { key: "D", text: t`$64$`, correct: false, misconceptionId: "C01-M15", value: "64" },
      ],
      solution: {
        steps: [
          t`$2 + 1 + 2 + 3 = 8$ per half-jaw.`,
          t`$4 \times 8 = 32$.`,
        ],
      },
    },
  ],
};
