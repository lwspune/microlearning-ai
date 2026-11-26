import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Benzene needs bromine and an iron catalyst to take on even one bromine atom. Aniline, shaken with plain bromine water, at once gives a white precipitate carrying three. Why is aniline so reactive?`,
    reveal: t`The lone pair on $\ce{NH2}$ feeds electrons into the ring, piling charge onto the ortho and para positions and making all three easy targets.`,
  },
  explanation: {
    intuition: [
      t`The $\ce{NH2}$ group's lone pair flows into the ring by resonance.`,
      t`That makes the ring very rich in electrons, mainly at the ortho and para positions.`,
      t`So aniline is substituted fast, often more than once.`,
      t`To get one substituent, the $\ce{NH2}$ is first tamed by acetylation.`,
    ],
    formal: [
      {
        title: "Bromination",
        points: [
          t`Bromine water gives 2,4,6-tribromoaniline at once, with no catalyst.`,
          t`For 4-bromoaniline: acetylate to acetanilide, brominate, then hydrolyse.`,
          t`The $\ce{NHCOCH3}$ group still directs ortho and para but activates less.`,
        ],
      },
      {
        title: "Nitration and sulfonation",
        points: [
          t`Direct nitration oxidises aniline and gives much 3-nitroaniline.`,
          t`In strong acid aniline becomes the anilinium ion, $\ce{C6H5NH3+}$, which directs meta.`,
          t`For 4-nitroaniline, acetylate first.`,
          t`Heating aniline with conc. $\ce{H2SO4}$ at 453–473 K gives sulphanilic acid.`,
        ],
      },
      {
        title: "No Friedel-Crafts",
        points: [
          t`$\ce{NH2}$ is a Lewis base and forms a salt with $\ce{AlCl3}$.`,
          t`The positive N then deactivates the ring, so no reaction occurs.`,
        ],
      },
    ],
    worked: {
      prompt: t`How is 4-nitroaniline made from aniline?`,
      steps: [
        t`Acetylate aniline to acetanilide.`,
        t`Nitrate: the para product is the main one.`,
        t`Hydrolyse the amide back to $\ce{NH2}$.`,
      ],
      answer: t`Acetylate, nitrate, then hydrolyse`,
    },
    visualSpec: t`Follow the lone pair of $\ce{NH2}$ around the ring and see where negative charge builds up.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Stops at one bromine, as for benzene.",
      remediation: t`$\ce{NH2}$ activates the ring so strongly that all ortho and para positions are brominated.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Thinks $\ce{NH2}$ directs meta.`,
      remediation: t`$\ce{NH2}$ donates electrons to the ortho and para positions and directs there.`,
      fallback: { kind: "ext", topic: "directing groups (Std XI Hydrocarbons)" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks a Lewis acid catalyst is needed.",
      remediation: "Aniline's ring is so activated that bromine reacts without a catalyst.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: t`Forgets that $\ce{NH2}$ over-activates the ring.`,
      remediation: "Bromine water brominates all three positions; acetylation is needed for one.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M5",
      mistake: "Thinks the anilinium ion still directs para.",
      remediation: t`$\ce{-NH3+}$ has no lone pair, deactivates the ring and directs meta.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Thinks nitric acid turns the $\ce{NH2}$ into $\ce{NO2}$.`,
      remediation: t`The meta product comes from the anilinium ion; the $\ce{NH2}$ stays on.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Blames crowding at the ring positions.",
      remediation: "The effect is electronic: protonated or complexed N withdraws electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: t`Thinks the $\ce{NH2}$ group is replaced.`,
      remediation: t`The $\ce{SO3H}$ group replaces a ring hydrogen; $\ce{NH2}$ stays.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks the salt does not change on heating.",
      remediation: "On heating, anilinium hydrogensulfate rearranges to sulphanilic acid.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: t`Thinks the $\ce{NH2}$ group itself deactivates the ring.`,
      remediation: t`Free $\ce{NH2}$ activates the ring; only its salt with $\ce{AlCl3}$ deactivates it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: t`Thinks $\ce{AlCl3}$ oxidises aniline.`,
      remediation: t`$\ce{AlCl3}$ is a Lewis acid; it forms a salt with the $\ce{NH2}$ lone pair.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.3 (ix)" },
      stem: t`Aniline is shaken with bromine water at room temperature. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "bromine" } },
      options: [
        { key: "A", text: t`4-bromoaniline only`, correct: false, misconceptionId: "C06-M1", value: "p_bromo" },
        { key: "B", text: t`2,4,6-tribromoaniline, a white precipitate`, correct: true, value: "tribromo" },
        { key: "C", text: t`nothing: a $\ce{FeBr3}$ catalyst is needed`, correct: false, misconceptionId: "C06-M3", value: "no_reaction" },
        { key: "D", text: t`3-bromoaniline`, correct: false, misconceptionId: "C06-M2", value: "m_bromo" },
      ],
      solution: {
        steps: [
          t`$\ce{NH2}$ strongly activates positions 2, 4 and 6.`,
          t`All three are brominated: 2,4,6-tribromoaniline.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.3 (viii)" },
      stem: t`How is 4-bromoaniline best made from aniline?`,
      verify: { kind: "value", inputs: {  }, params: { q: "para" } },
      options: [
        { key: "A", text: t`treat aniline with $\ce{Br2}$ and $\ce{FeBr3}$`, correct: false, misconceptionId: "C06-M3", value: "br2_febr3" },
        { key: "B", text: t`shake aniline with bromine water`, correct: false, misconceptionId: "C06-M4", value: "bromine_water" },
        { key: "C", text: t`acetylate the $\ce{NH2}$, brominate, then hydrolyse the amide`, correct: true, value: "acetylate_first" },
        { key: "D", text: t`dissolve aniline in HCl first, then brominate`, correct: false, misconceptionId: "C06-M5", value: "protonate_first" },
      ],
      solution: {
        steps: [
          t`Acetylation tames the $\ce{NH2}$ group.`,
          t`Brominate (para), then hydrolyse back to $\ce{NH2}$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "authored" },
      stem: t`Nitrating aniline directly with conc. $\ce{HNO3}$ and $\ce{H2SO4}$ gives a large share of 3-nitroaniline. Why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "nitration" } },
      options: [
        { key: "A", text: t`the ortho and para positions are too crowded`, correct: false, misconceptionId: "C06-M7", value: "crowding" },
        { key: "B", text: t`the $\ce{NH2}$ group directs meta`, correct: false, misconceptionId: "C06-M2", value: "nh2_meta" },
        { key: "C", text: t`nitric acid first turns the $\ce{NH2}$ into $\ce{NO2}$`, correct: false, misconceptionId: "C06-M6", value: "nh2_oxidised" },
        { key: "D", text: t`in the acid aniline is protonated to the anilinium ion, which directs meta`, correct: true, value: "anilinium_meta" },
      ],
      solution: {
        steps: [
          t`In strong acid, $\ce{C6H5NH2}$ becomes $\ce{C6H5NH3+}$.`,
          t`$\ce{-NH3+}$ directs meta.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/amines-12-chem/Ex Q.4 (viii)" },
      stem: t`Aniline is heated with conc. $\ce{H2SO4}$ at 453–473 K. The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sulphanilic" } },
      options: [
        { key: "A", text: t`sulphanilic acid (4-aminobenzenesulfonic acid)`, correct: true, value: "sulphanilic" },
        { key: "B", text: t`only anilinium hydrogensulfate`, correct: false, misconceptionId: "C06-M9", value: "salt_only" },
        { key: "C", text: t`3-aminobenzenesulfonic acid`, correct: false, misconceptionId: "C06-M2", value: "meta_acid" },
        { key: "D", text: t`benzenesulfonic acid`, correct: false, misconceptionId: "C06-M8", value: "benzenesulfonic" },
      ],
      solution: {
        steps: [
          t`Aniline first forms anilinium hydrogensulfate.`,
          t`Heating rearranges it to 4-aminobenzenesulfonic acid.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`Aniline does not undergo the Friedel-Crafts reaction because`,
      verify: { kind: "value", inputs: {  }, params: { q: "friedel" } },
      options: [
        { key: "A", text: t`the $\ce{NH2}$ group itself deactivates the ring`, correct: false, misconceptionId: "C06-M10", value: "nh2_deactivates" },
        { key: "B", text: t`its $\ce{NH2}$ forms a salt with $\ce{AlCl3}$, and the positive N deactivates the ring`, correct: true, value: "lewis_salt" },
        { key: "C", text: t`the ring positions are too crowded`, correct: false, misconceptionId: "C06-M7", value: "crowding" },
        { key: "D", text: t`$\ce{AlCl3}$ oxidises aniline`, correct: false, misconceptionId: "C06-M11", value: "oxidised" },
      ],
      solution: {
        steps: [
          t`$\ce{NH2}$ gives its lone pair to $\ce{AlCl3}$.`,
          t`The positive N deactivates the ring: no reaction.`,
        ],
      },
    },
  ],
};
