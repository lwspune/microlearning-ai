import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`2-Bromo-2-methylpropane is too crowded for backside attack, yet in water it turns into an alcohol quickly. How does $\ce{OH-}$ get in?`,
    reveal: t`It does not need to push its way in. The $\ce{C-Br}$ bond first breaks on its own, leaving a flat carbocation, and water or $\ce{OH-}$ then joins it from either side.`,
  },
  explanation: {
    intuition: [
      t`Some alkyl halides lose the halide ion before any nucleophile arrives.`,
      t`This leaves a **carbocation**, a carbon with only three bonds and a positive charge.`,
      t`A carbocation is flat ($sp^2$), so the nucleophile can join it from either face.`,
      t`Breaking the $\ce{C-X}$ bond is slow; the nucleophile's attack is fast.`,
      t`So the rate depends only on the alkyl halide: this is the $\mathrm{S_N1}$ route.`,
    ],
    formal: [
      {
        title: "Two steps",
        points: [
          t`$\mathrm{S_N1}$ means substitution, nucleophilic, unimolecular.`,
          t`Step 1 (slow): $\ce{(CH3)3C-Br -> (CH3)3C+ + Br-}$.`,
          t`Step 2 (fast): $\ce{(CH3)3C+ + OH-}$ $\ce{-> (CH3)3C-OH}$.`,
          t`Only the halide is in the slow step, so rate $= k[\ce{RX}]$: first order.`,
        ],
      },
      {
        title: "Racemisation",
        points: [
          t`The carbocation is planar, so the nucleophile attacks either face equally.`,
          t`From an optically active halide, half the product has each configuration.`,
          t`The result is a **racemic mixture**: optically inactive.`,
        ],
      },
      {
        title: "Carbocation stability",
        points: [
          t`Alkyl groups push electrons to the positive carbon and stabilise it.`,
          t`So tertiary > secondary > primary carbocations, and $\mathrm{S_N1}$ follows the same order.`,
          t`**Allylic** and **benzylic** carbocations are stabilised by resonance, so even primary ones react fast.`,
          t`Tertiary, allylic and benzylic halides react mainly by $\mathrm{S_N1}$.`,
        ],
      },
      {
        title: "Vinylic and aryl halides",
        points: [
          t`In $\ce{CH2=CH-Cl}$ and $\ce{C6H5-Cl}$ the $\ce{C-Cl}$ bond has partial double bond character.`,
          t`It is hard to break, and the vinylic or phenyl cation is very unstable.`,
          t`So vinylic and aryl halides do not react by $\mathrm{S_N1}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange $\ce{CH3CH2Br}$, $\ce{(CH3)3CBr}$ and $\ce{(CH3)2CHBr}$ in increasing order of $\mathrm{S_N1}$ reactivity.`,
      steps: [
        t`$\mathrm{S_N1}$ speed follows the stability of the carbocation formed.`,
        t`$\ce{CH3CH2+}$ is primary, $\ce{(CH3)2CH+}$ secondary, $\ce{(CH3)3C+}$ tertiary.`,
        t`More alkyl groups, more stable cation, faster ionisation.`,
      ],
      answer: t`$\ce{CH3CH2Br}$ < $\ce{(CH3)2CHBr}$ < $\ce{(CH3)3CBr}$`,
    },
    visualSpec: t`Watch the halide drop off to leave a flat carbocation, then let nucleophiles land on the top and bottom faces to build a racemic mixture.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Applies the $\mathrm{S_N2}$ idea of crowding to $\mathrm{S_N1}$: less substituted halides react faster, and tertiary ones barely react.`,
      remediation: t`In $\mathrm{S_N1}$ the halide ionises on its own, so crowding does not block it; a more substituted carbon gives a more stable carbocation and a faster reaction.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: t`Thinks the nucleophile controls the $\mathrm{S_N1}$ rate, as in $\mathrm{S_N2}$.`,
      remediation: t`The slow step is the halide breaking away; the nucleophile joins afterwards, so rate $= k[\ce{RX}]$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: t`Thinks $\mathrm{S_N1}$ inverts the configuration, as $\mathrm{S_N2}$ does.`,
      remediation: "The carbocation is planar and is attacked from both faces, so an optically active halide gives a racemic mixture.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C07-M4",
      mistake: "Ignores resonance: thinks allylic and benzylic halides react like other primary halides.",
      remediation: "An allylic or benzylic carbocation spreads its charge by resonance, so these halides ionise fast even when primary.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks vinylic and aryl halides ionise easily to carbocations.",
      remediation: t`Their $\ce{C-X}$ bond has partial double bond character and their cations are unstable, so they do not react by $\mathrm{S_N1}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Judges $\mathrm{S_N1}$ by the $\ce{C-X}$ bond alone, ignoring the carbon it sits on.`,
      remediation: t`The stability of the carbocation decides the $\mathrm{S_N1}$ rate: tertiary, allylic and benzylic halides are fastest.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Thinks the nucleophile simply takes the halide's place, so the configuration is retained.",
      remediation: "The halide leaves first; the flat carbocation is then attacked from both faces, giving both configurations equally.",
      fallback: { kind: "concept", id: "C05" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.1 (viii)" },
      stem: t`Which reacts faster by the $\mathrm{S_N1}$ mechanism, 2-bromo-2-methylpropane, $\ce{(CH3)3CBr}$, or 1-bromopropane, $\ce{CH3CH2CH2Br}$, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "tert" } },
      options: [
        { key: "A", text: t`1-Bromopropane: the nucleophile reaches its carbon more easily`, correct: false, misconceptionId: "C07-M2", value: "primary_nu_reaches" },
        { key: "B", text: t`Both equally fast: each has the same $\ce{C-Br}$ bond`, correct: false, misconceptionId: "C07-M6", value: "equal_same_bond" },
        { key: "C", text: t`2-Bromo-2-methylpropane: it ionises to a stable tertiary carbocation`, correct: true, value: "tertiary_stable_cation" },
        { key: "D", text: t`1-Bromopropane: its carbon is less crowded`, correct: false, misconceptionId: "C07-M1", value: "primary_less_crowded" },
      ],
      solution: {
        steps: [
          t`$\mathrm{S_N1}$ speed follows the carbocation formed in the slow step.`,
          t`$\ce{(CH3)3CBr}$ gives a tertiary cation; $\ce{CH3CH2CH2Br}$ only a primary one.`,
          t`The tertiary cation is far more stable, so 2-bromo-2-methylpropane reacts faster.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Solved Ex.10.4" },
      stem: t`Which reacts faster by the $\mathrm{S_N1}$ mechanism, 3-chloropropene, $\ce{CH2=CH-CH2Cl}$, or 1-chloropropane, $\ce{CH3CH2CH2Cl}$, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "allyl" } },
      options: [
        { key: "A", text: t`Both equally slow: both are primary chlorides`, correct: false, misconceptionId: "C07-M4", value: "equal_both_primary" },
        { key: "B", text: t`3-Chloropropene: its $\pi$ electrons attract the nucleophile`, correct: false, misconceptionId: "C07-M2", value: "allyl_pi_attracts_nu" },
        { key: "C", text: t`1-Chloropropane: its carbon is less crowded`, correct: false, misconceptionId: "C07-M1", value: "propyl_less_crowded" },
        { key: "D", text: t`3-Chloropropene: its allylic carbocation is stabilised by resonance`, correct: true, value: "allyl_resonance_cation" },
      ],
      solution: {
        steps: [
          t`Both are primary, but 3-chloropropene gives the allylic cation $\ce{CH2=CH-CH2+}$.`,
          t`Resonance spreads its charge over two carbons, stabilising it.`,
          t`So 3-chloropropene reacts faster by $\mathrm{S_N1}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.1 (iii)" },
      stem: t`An optically active sample of 3-bromo-3-methylhexane is hydrolysed by the $\mathrm{S_N1}$ mechanism. The alcohol formed is`,
      verify: { kind: "value", inputs: {  }, params: { q: "stereo" } },
      options: [
        { key: "A", text: t`not formed at all: a tertiary halide is too crowded to react`, correct: false, misconceptionId: "C07-M1", value: "no_reaction" },
        { key: "B", text: t`a racemic mixture: the planar carbocation is attacked from both faces`, correct: true, value: "racemic" },
        { key: "C", text: t`optically active, with the configuration inverted`, correct: false, misconceptionId: "C07-M3", value: "inverted_only" },
        { key: "D", text: t`optically active, with the configuration retained`, correct: false, misconceptionId: "C07-M7", value: "retained_only" },
      ],
      solution: {
        steps: [
          t`The tertiary halide ionises to a planar carbocation.`,
          t`Water or $\ce{OH-}$ attacks both faces equally.`,
          t`So the alcohol is a racemic mixture, optically inactive.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/halogen-derivatives-12-pyq#17" },
      stem: t`Which statement about the $\mathrm{S_N1}$ mechanism is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "features" } },
      options: [
        { key: "A", text: t`Two steps through a planar carbocation; rate $= k[\ce{RX}]$; racemisation`, correct: true, value: "two_steps_rx_racemic" },
        { key: "B", text: t`Two steps through a planar carbocation; rate $= k[\ce{RX}][\ce{Nu-}]$`, correct: false, misconceptionId: "C07-M2", value: "two_steps_rx_nu" },
        { key: "C", text: t`Two steps through a carbocation; the product's configuration is inverted`, correct: false, misconceptionId: "C07-M3", value: "two_steps_inversion" },
        { key: "D", text: t`It is fastest for methyl and primary halides, which are least crowded`, correct: false, misconceptionId: "C07-M1", value: "fastest_methyl_primary" },
      ],
      solution: {
        steps: [
          t`Step 1, slow: $\ce{R-X -> R+ + X-}$; step 2, fast: $\ce{R+ + Nu-}$ $\ce{-> R-Nu}$.`,
          t`Only $\ce{RX}$ is in the slow step, so rate $= k[\ce{RX}]$.`,
          t`The planar cation is attacked from both faces: racemisation.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.7 (iii-c)" },
      stem: t`Can chloroethene, $\ce{CH2=CH-Cl}$, react by the $\mathrm{S_N1}$ mechanism?`,
      verify: { kind: "value", inputs: {  }, params: { q: "vinyl" } },
      options: [
        { key: "A", text: t`Yes: the $\pi$ electrons stabilise the vinylic carbocation`, correct: false, misconceptionId: "C07-M5", value: "yes_pi_stabilises" },
        { key: "B", text: t`Yes: its carbon carries no bulky groups`, correct: false, misconceptionId: "C07-M1", value: "yes_uncrowded" },
        { key: "C", text: t`Yes: like any alkyl chloride, it has a $\ce{C-Cl}$ bond to break`, correct: false, misconceptionId: "C07-M6", value: "yes_has_c_cl" },
        { key: "D", text: t`No: its $\ce{C-Cl}$ bond has partial double bond character, and a vinylic carbocation is unstable`, correct: true, value: "no_partial_double_bond" },
      ],
      solution: {
        steps: [
          t`In $\ce{CH2=CH-Cl}$ a lone pair on Cl is shared with the double bond.`,
          t`So the $\ce{C-Cl}$ bond is partly double and hard to break.`,
          t`The vinylic cation would be very unstable, so no $\mathrm{S_N1}$ reaction occurs.`,
        ],
      },
    },
  ],
};
