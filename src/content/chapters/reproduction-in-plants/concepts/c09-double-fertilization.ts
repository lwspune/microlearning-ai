import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Each pollen grain brings two male gametes, so why can't 10 pollen grains fertilize 20 ovules?`,
    reveal: t`Every ovule uses both gametes of one pollen tube: one for the egg, one for the secondary nucleus.`,
  },
  explanation: {
    intuition: [
      t`The pollen tube carries the two male gametes to the embryo sac.`,
      t`This tube delivery of non-motile gametes is **siphonogamy**.`,
      t`In flowering plants **both** male gametes fuse: **double fertilization**.`,
      t`It was discovered by Nawaschin in *Lilium* and *Fritillaria*.`,
    ],
    formal: [
      {
        title: "The two fusions",
        points: [
          t`The tube usually enters through the **micropyle**, then a synergid.`,
          t`**Syngamy**: one male gamete + egg → **zygote** ($2n$).`,
          t`**Triple fusion**: the other + secondary nucleus → **primary endosperm nucleus** ($3n$).`,
          t`So one ovule uses both gametes of one pollen grain.`,
        ],
      },
      {
        title: "Ploidy",
        points: [
          t`Zygote and embryo: $2n$.`,
          t`Endosperm: $3n$, so with $2n = 16$ it has 24.`,
          t`Egg, synergids, antipodals: $n$.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a plant with $2n = 14$, how many chromosomes are in the zygote and in the primary endosperm nucleus?`,
      steps: [
        t`Zygote: $2n = 14$.`,
        t`Primary endosperm nucleus: $3n = 21$.`,
      ],
      answer: t`14 and 21`,
    },
    visualSpec: t`A pollen tube entering the embryo sac, its two gametes going to the egg and the central cell.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Picks the egg.",
      remediation: "Fusion with the egg is syngamy; triple fusion is with the secondary nucleus.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Picks a synergid.",
      remediation: "The synergid receives the tube and degenerates.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Picks an antipodal.",
      remediation: "Antipodals take no part in fertilization.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Gives the diploid number.",
      remediation: t`Endosperm is $3n$: $\frac{3}{2} \times 16$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Gives the haploid number.",
      remediation: "Endosperm has three sets, not one.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Adds two diploid sets.",
      remediation: t`Triple fusion is $n + 2n = 3n$, not $4n$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Uses one gamete per ovule.",
      remediation: "Each ovule uses both gametes of one tube.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Takes two pollen grains per ovule.",
      remediation: "One pollen grain's two gametes do for one ovule.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Divides by four.",
      remediation: "One pollen grain fertilizes one ovule.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Picks the chalaza.",
      remediation: "Entry through the chalaza is rare; most tubes use the micropyle.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Picks the integuments.",
      remediation: "The tube enters through the micropyle, the gap in the integuments.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Picks the funicle.",
      remediation: "The funicle is the stalk; the tube enters at the micropyle.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Picks zoidogamy.",
      remediation: "Zoidogamy uses swimming gametes, as in mosses and ferns.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Picks syngamy.",
      remediation: "Syngamy is the fusion itself, not the tube delivery.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Picks triple fusion.",
      remediation: "Triple fusion forms the endosperm nucleus.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q1(6)" },
      stem: t`In triple fusion, a male gamete fuses with the`,
      verify: { kind: "value", inputs: {  }, params: { q: "triple" } },
      options: [
        { key: "A", text: t`synergid`, correct: false, misconceptionId: "C09-M2", value: "synergid" },
        { key: "B", text: t`antipodal cell`, correct: false, misconceptionId: "C09-M3", value: "antipodal" },
        { key: "C", text: t`secondary nucleus`, correct: true, value: "secondary_nucleus" },
        { key: "D", text: t`egg`, correct: false, misconceptionId: "C09-M1", value: "egg_cell" },
      ],
      solution: {
        steps: [
          t`Triple fusion joins three haploid nuclei.`,
          t`A male gamete fuses with the two-nucleus secondary nucleus.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q1(3)" },
      stem: t`A flowering plant has $2n = 16$. The number of chromosomes in its endosperm cells is`,
      verify: { kind: "value", inputs: { d: "16" }, params: { q: "ploidy" } },
      options: [
        { key: "A", text: t`$24$`, correct: true, value: "24" },
        { key: "B", text: t`$16$`, correct: false, misconceptionId: "C09-M4", value: "16" },
        { key: "C", text: t`$8$`, correct: false, misconceptionId: "C09-M5", value: "8" },
        { key: "D", text: t`$32$`, correct: false, misconceptionId: "C09-M6", value: "32" },
      ],
      solution: {
        steps: [
          t`Endosperm is $3n$.`,
          t`$\frac{3}{2} \times 16 = 24$`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/repro-plants-12-bio/Ex Q2(3)" },
      stem: t`A carpel has 20 ovules. The least number of pollen grains needed to fertilize all of them is`,
      verify: { kind: "value", inputs: { o: "20" }, params: { q: "grains" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C09-M7", value: "10" },
        { key: "B", text: t`$40$`, correct: false, misconceptionId: "C09-M8", value: "40" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C09-M9", value: "5" },
        { key: "D", text: t`$20$`, correct: true, value: "20" },
      ],
      solution: {
        steps: [
          t`Each ovule needs both gametes of one pollen tube.`,
          t`So 20 pollen grains.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`The pollen tube usually enters the ovule through the`,
      verify: { kind: "value", inputs: {  }, params: { q: "entry" } },
      options: [
        { key: "A", text: t`micropyle`, correct: true, value: "micropyle" },
        { key: "B", text: t`chalaza`, correct: false, misconceptionId: "C09-M10", value: "chalaza" },
        { key: "C", text: t`integuments`, correct: false, misconceptionId: "C09-M11", value: "integument" },
        { key: "D", text: t`funicle`, correct: false, misconceptionId: "C09-M12", value: "funicle" },
      ],
      solution: {
        steps: [
          t`The micropyle is the opening in the integuments.`,
          t`The pollen tube usually enters through it.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/Reproduction in Lower and Higher Plants/2026 Q. 18" },
      stem: t`Non-motile male gametes carried to the egg through a pollen tube: this mode of fertilization is`,
      verify: { kind: "value", inputs: {  }, params: { q: "siphonogamy" } },
      options: [
        { key: "A", text: t`syngamy`, correct: false, misconceptionId: "C09-M14", value: "syngamy" },
        { key: "B", text: t`triple fusion`, correct: false, misconceptionId: "C09-M15", value: "triple_fusion" },
        { key: "C", text: t`siphonogamy`, correct: true, value: "siphonogamy" },
        { key: "D", text: t`zoidogamy`, correct: false, misconceptionId: "C09-M13", value: "zoidogamy" },
      ],
      solution: {
        steps: [
          t`The male gametes cannot swim.`,
          t`Carried in a pollen tube: siphonogamy.`,
        ],
      },
    },
  ],
};
