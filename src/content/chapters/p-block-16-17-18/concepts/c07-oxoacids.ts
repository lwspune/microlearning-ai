import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`$\ce{HOCl}$ and $\ce{HClO4}$ each have just one hydrogen to give away. Yet $\ce{HOCl}$ is a weaker acid than vinegar, and $\ce{HClO4}$ is one of the strongest acids known. What makes the difference?`,
    reveal: t`The extra oxygens. In $\ce{HClO4}$ chlorine is $+7$: four oxygens pull electron density away from the O–H bond, so the proton leaves far more easily.`,
  },
  explanation: {
    intuition: [
      t`An **oxoacid** is an acid that contains oxygen, with its ionisable hydrogen joined to an oxygen atom.`,
      t`Sulfur and chlorine each form a family of oxoacids.`,
      t`Within a family, the central atom's oxidation state changes with the number of oxygens.`,
      t`The name tells you the formula: its prefix and ending mark more or fewer oxygens.`,
      t`More oxygens means a higher oxidation state, and a stronger acid.`,
    ],
    formal: [
      {
        title: "Oxoacids of sulfur",
        points: [
          t`Sulfurous acid, $\ce{H2SO3}$: sulfur is $+4$.`,
          t`Sulfuric acid, $\ce{H2SO4}$: sulfur is $+6$, its highest state.`,
          t`Peroxymonosulfuric acid (Caro's acid), $\ce{H2SO5}$, carries one $\ce{-O-O-H}$ group.`,
          t`Pyrosulfuric (disulfuric) acid, $\ce{H2S2O7}$, is two $\ce{-SO3H}$ units joined through one oxygen.`,
          t`Peroxydisulfuric acid (Marshall's acid), $\ce{H2S2O8}$, is two such units joined by $\ce{-O-O-}$.`,
          t`Dithionous acid, $\ce{H2S2O4}$, and dithionic acid, $\ce{H2S2O6}$, have a direct S–S bond.`,
        ],
      },
      {
        title: "Finding the oxidation state",
        points: [
          t`Take H as $+1$ and O as $-2$; the states in a neutral molecule add up to zero.`,
          t`In a **peroxide link**, $\ce{-O-O-}$, two oxygens are bonded to each other, and each is $-1$, not $-2$.`,
          t`A single bridging oxygen, as in a pyro acid, is an ordinary $-2$ oxygen.`,
          t`$\ce{H2SO4}$: $2 + x - 8 = 0$, so $x = +6$.`,
          t`With two sulfur atoms, divide the total by two to get the state of each.`,
          t`Sulfur cannot exceed $+6$: a result of $+7$ or $+8$ means a peroxide oxygen was counted as $-2$.`,
        ],
      },
      {
        title: "Oxoacids of chlorine",
        points: [
          t`Hypochlorous acid, $\ce{HOCl}$: chlorine is $+1$.`,
          t`Chlorous acid, $\ce{HClO2}$, $+3$; chloric acid, $\ce{HClO3}$, $+5$.`,
          t`Perchloric acid, $\ce{HClO4}$: chlorine is $+7$, its highest state.`,
          t`**Hypo-** means below: one oxygen fewer than the -ous acid. **Per-** means beyond: one more than the -ic acid.`,
          t`In each, the ionisable H is on an oxygen; the other oxygens are joined to Cl by double bonds.`,
          t`Only $\ce{HClO4}$ is isolated pure; the others exist only in solution or as salts.`,
        ],
      },
      {
        title: "Acid strength and oxidation state",
        points: [
          t`Acid strength rises with the central atom's oxidation state.`,
          t`$\ce{HOCl} < \ce{HClO2} < \ce{HClO3} < \ce{HClO4}$`,
          t`Each extra oxygen pulls electron density from the O–H bond, so $\ce{H+}$ leaves more easily.`,
          t`The anion's negative charge also spreads over more oxygens, which makes it more stable.`,
          t`The **acid dissociation constant**, $K_a$, measures strength: $\ce{HOCl}$ has $3.5 \times 10^{-8}$, $\ce{HClO4}$ far above $1$.`,
          t`In the same way, $\ce{H2SO4}$ $(+6)$ is a stronger acid than $\ce{H2SO3}$ $(+4)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is the oxidation state of chlorine in chlorous acid, $\ce{HClO2}$? Is it a stronger or weaker acid than $\ce{HOCl}$?`,
      steps: [
        t`Take H as $+1$ and each O as $-2$; there is no peroxide link.`,
        t`$1 + x + 2(-2) = 0$, so $x = +3$.`,
        t`In $\ce{HOCl}$ chlorine is only $+1$.`,
        t`The higher oxidation state pulls more electron density from the O–H bond, so $\ce{HClO2}$ gives up its proton more easily.`,
      ],
      answer: t`Chlorine is $+3$; $\ce{HClO2}$ is the stronger acid.`,
    },
    visualSpec: t`Add oxygens one at a time to chlorine's oxoacid and watch the oxidation state, the O–H bond's pull and the acid strength rise together.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Mixes up the two kinds of oxygen link: counts the oxygens of a peroxide link as -2, or takes a pyro acid's single bridging oxygen for a peroxide link.",
      remediation: t`Only an $\ce{-O-O-}$ peroxide link has $-1$ oxygens. A single oxygen bridging two sulfurs, as in $\ce{H2S2O7}$, is an ordinary $-2$ oxygen.`,
      fallback: { kind: "ext", topic: "oxidation number (Std XI Chemistry)" },
    },
    {
      id: "C07-M2",
      mistake: "Gives the total oxidation number of both sulfur atoms instead of dividing it between them.",
      remediation: "The sum you find is for all the sulfur atoms together. Divide it by the number of sulfur atoms to get the state of each.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Reads hypo- as the most oxygen (like hyper) and per- as the least.",
      remediation: t`Hypo- means below: hypochlorous acid, $\ce{HOCl}$, has the fewest oxygens. Per- means beyond: perchloric acid, $\ce{HClO4}$, has the most.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks acid strength falls as oxygens are added, as if the oxygens held the hydrogen more tightly.",
      remediation: t`Acid strength rises with the oxidation state: each added oxygen pulls electron density from the O–H bond, so $\ce{HClO4}$ is the strongest.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks acids with the same number of ionisable hydrogens are equally strong.",
      remediation: t`Strength is how readily the proton leaves, not how many there are. $\ce{HOCl}$ and $\ce{HClO4}$ each have one H, but $\ce{HClO4}$ is far stronger.`,
      fallback: { kind: "ext", topic: "strength of acids and Ka (Ionic Equilibria)" },
    },
    {
      id: "C07-M6",
      mistake: "Reads the oxidation state off the name ending alone: every -ic acid of sulfur is +6 and every -ous acid +4.",
      remediation: t`The ending is only a guide. Work the state out from the formula: dithionic acid, $\ce{H2S2O6}$, is $+5$ and dithionous acid, $\ce{H2S2O4}$, is $+3$.`,
      fallback: { kind: "concept", id: "C03" },
    },
  ],
  engineNotes: [
    "C07-M3, M4 and M5 are caught on the acid-strength items; C07-M1, M2 and M6 on the oxidation-state items.",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#28" },
      stem: t`Arrange hypochlorous, chlorous, chloric and perchloric acids in increasing order of acid strength.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cl_order" } },
      options: [
        { key: "A", text: t`All four are equally strong`, correct: false, misconceptionId: "C07-M5", value: "all_equal" },
        { key: "B", text: t`Hypochlorous < chlorous < chloric < perchloric`, correct: true, value: "hypochlorous_chlorous_chloric_perchloric" },
        { key: "C", text: t`Perchloric < chlorous < chloric < hypochlorous`, correct: false, misconceptionId: "C07-M3", value: "perchloric_chlorous_chloric_hypochlorous" },
        { key: "D", text: t`Perchloric < chloric < chlorous < hypochlorous`, correct: false, misconceptionId: "C07-M4", value: "perchloric_chloric_chlorous_hypochlorous" },
      ],
      solution: {
        steps: [
          t`The oxidation states of chlorine are hypochlorous $+1$, chlorous $+3$, chloric $+5$ and perchloric $+7$.`,
          t`Acid strength rises with the oxidation state of chlorine.`,
          t`So hypochlorous < chlorous < chloric < perchloric.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#9" },
      stem: t`What is the oxidation state of each sulfur atom in peroxydisulfuric acid, $\ce{H2S2O8}$, and in dithionic acid, $\ce{H2S2O6}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox_pair", acids: "H2S2O8,H2S2O6" } },
      options: [
        { key: "A", text: t`$+7$ and $+5$`, correct: false, misconceptionId: "C07-M1", value: "s_p7_p5" },
        { key: "B", text: t`$+12$ and $+10$`, correct: false, misconceptionId: "C07-M2", value: "s_p12_p10" },
        { key: "C", text: t`$+6$ and $+6$`, correct: false, misconceptionId: "C07-M6", value: "s_p6_p6" },
        { key: "D", text: t`$+6$ and $+5$`, correct: true, value: "s_p6_p5" },
      ],
      solution: {
        steps: [
          t`$\ce{H2S2O8}$ has one peroxide link: two oxygens at $-1$ and six at $-2$.`,
          t`$2 + 2x - 12 - 2 = 0$, so $2x = 12$ and each S is $+6$.`,
          t`$\ce{H2S2O6}$ has no peroxide link: $2 + 2x - 12 = 0$, so $2x = 10$ and each S is $+5$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#10" },
      stem: t`What is the oxidation state of each sulfur atom in dithionous acid, $\ce{H2S2O4}$, and in peroxymonosulfuric acid, $\ce{H2SO5}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox_pair", acids: "H2S2O4,H2SO5" } },
      options: [
        { key: "A", text: t`$+3$ and $+6$`, correct: true, value: "s_p3_p6" },
        { key: "B", text: t`$+3$ and $+8$`, correct: false, misconceptionId: "C07-M1", value: "s_p3_p8" },
        { key: "C", text: t`$+6$ and $+6$`, correct: false, misconceptionId: "C07-M2", value: "s_p6_p6" },
        { key: "D", text: t`$+4$ and $+6$`, correct: false, misconceptionId: "C07-M6", value: "s_p4_p6" },
      ],
      solution: {
        steps: [
          t`$\ce{H2S2O4}$ has no peroxide link: $2 + 2x - 8 = 0$, so $2x = 6$ and each S is $+3$.`,
          t`$\ce{H2SO5}$ has one $\ce{-O-O-H}$ group: two oxygens at $-1$, three at $-2$.`,
          t`$2 + x - 6 - 2 = 0$, so S is $+6$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.1 (vii)" },
      stem: t`What is the oxidation state of each sulfur atom in pyrosulfuric acid, $\ce{H2S2O7}$, and in dithionous acid, $\ce{H2S2O4}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox_pair", acids: "H2S2O7,H2S2O4" } },
      options: [
        { key: "A", text: t`$+5$ and $+3$`, correct: false, misconceptionId: "C07-M1", value: "s_p5_p3" },
        { key: "B", text: t`$+12$ and $+6$`, correct: false, misconceptionId: "C07-M2", value: "s_p12_p6" },
        { key: "C", text: t`$+6$ and $+3$`, correct: true, value: "s_p6_p3" },
        { key: "D", text: t`$+6$ and $+4$`, correct: false, misconceptionId: "C07-M6", value: "s_p6_p4" },
      ],
      solution: {
        steps: [
          t`In $\ce{H2S2O7}$ the bridging oxygen is an ordinary oxygen, so all seven are $-2$.`,
          t`$2 + 2x - 14 = 0$, so $2x = 12$ and each S is $+6$.`,
          t`$\ce{H2S2O4}$: $2 + 2x - 8 = 0$, so $2x = 6$ and each S is $+3$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (xiv)" },
      stem: t`Which is the stronger acid in each pair: hypochlorous or perchloric acid; sulfurous or sulfuric acid?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "stronger" } },
      options: [
        { key: "A", text: t`Hypochlorous acid; sulfurous acid`, correct: false, misconceptionId: "C07-M4", value: "hypochlorous_sulfurous" },
        { key: "B", text: t`Neither: the two in each pair are equally strong`, correct: false, misconceptionId: "C07-M5", value: "equal_both" },
        { key: "C", text: t`Perchloric acid; sulfuric acid`, correct: true, value: "perchloric_sulfuric" },
        { key: "D", text: t`Hypochlorous acid; sulfuric acid`, correct: false, misconceptionId: "C07-M3", value: "hypochlorous_sulfuric" },
      ],
      solution: {
        steps: [
          t`Chlorine is $+1$ in hypochlorous acid and $+7$ in perchloric acid.`,
          t`Sulfur is $+4$ in sulfurous acid and $+6$ in sulfuric acid.`,
          t`The higher oxidation state gives the stronger acid: perchloric acid and sulfuric acid.`,
        ],
      },
    },
  ],
};
