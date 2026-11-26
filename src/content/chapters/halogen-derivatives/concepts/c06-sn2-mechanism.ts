import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Bromomethane reacts with $\ce{OH-}$ in seconds, yet 2-bromo-2-methylpropane barely reacts by the same route. Both have a $\ce{C-Br}$ bond. What stops the second one?`,
    reveal: t`Crowding. In the $\mathrm{S_N2}$ route $\ce{OH-}$ must reach the carbon from the back, opposite the bromine. Three methyl groups around that carbon block the way.`,
  },
  explanation: {
    intuition: [
      t`A **nucleophile** ($\ce{Nu-}$) is a species with a lone pair that seeks a positive carbon, such as $\ce{OH-}$ or $\ce{CN-}$.`,
      t`In an alkyl halide the carbon bonded to the halogen carries a partial positive charge.`,
      t`In the $\mathrm{S_N2}$ route the nucleophile attacks that carbon from the side opposite the halogen.`,
      t`The new bond forms as the old one breaks, in one single step.`,
      t`So both the alkyl halide and the nucleophile take part in the slow step.`,
      t`The other three groups flip over, like an umbrella turning inside out in the wind.`,
    ],
    formal: [
      {
        title: "One step, backside attack",
        points: [
          t`$\mathrm{S_N2}$ means substitution, nucleophilic, bimolecular.`,
          t`$\ce{OH- + CH3Br}$ $\ce{-> CH3OH + Br-}$ goes in a single step.`,
          t`In the **transition state** carbon is partly bonded to both $\ce{OH}$ and $\ce{Br}$: five groups, so it is pentacoordinate.`,
          t`$\ce{OH}$ and $\ce{Br}$ lie on opposite sides; the three hydrogens lie in one plane between them.`,
        ],
      },
      {
        title: "Rate law",
        points: [
          t`Both reactants are in the one, slow step.`,
          t`So rate $= k[\ce{RX}][\ce{Nu-}]$: second order overall.`,
          t`Doubling $[\ce{OH-}]$ doubles the rate, just as doubling $[\ce{RX}]$ does.`,
        ],
      },
      {
        title: "Inversion of configuration",
        points: [
          t`Attack from the back pushes the other three groups through to the other side.`,
          t`So the product has the opposite configuration: **inversion** (Walden inversion).`,
          t`An optically active halide gives an optically active product, not a racemic mixture.`,
        ],
      },
      {
        title: "What makes it fast",
        points: [
          t`Crowding: alkyl groups on the carbon block the backside attack.`,
          t`Reactivity: $\ce{CH3X}$ > primary > secondary > tertiary.`,
          t`Leaving group: the weaker the $\ce{C-X}$ bond, the faster: $\ce{R-I}$ > $\ce{R-Br}$ > $\ce{R-Cl}$.`,
          t`Methyl and primary halides react mainly by $\mathrm{S_N2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange $\ce{CH3CH2Br}$, $\ce{(CH3)3CBr}$, $\ce{CH3Br}$ and $\ce{(CH3)2CHBr}$ in decreasing order of $\mathrm{S_N2}$ reactivity.`,
      steps: [
        t`All four have the same leaving group, $\ce{Br}$, so crowding decides.`,
        t`$\ce{CH3Br}$ has no alkyl groups on the carbon; $\ce{CH3CH2Br}$ has one.`,
        t`$\ce{(CH3)2CHBr}$ has two, and $\ce{(CH3)3CBr}$ has three.`,
        t`Fewer groups, easier backside attack, faster reaction.`,
      ],
      answer: t`$\ce{CH3Br}$ > $\ce{CH3CH2Br}$ > $\ce{(CH3)2CHBr}$ > $\ce{(CH3)3CBr}$`,
    },
    visualSpec: t`Drag a nucleophile towards the back of the carbon and watch the three groups flip like an umbrella as the halide leaves.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Runs the $\mathrm{S_N2}$ reaction through a carbocation, as in $\mathrm{S_N1}$: two steps, racemisation, rate set by the halide alone.`,
      remediation: t`$\mathrm{S_N2}$ has no carbocation: the nucleophile pushes the halide out in one step, so carbocation stability does not matter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Thinks tertiary halides react fastest by $\mathrm{S_N2}$.`,
      remediation: t`Alkyl groups crowd the back of the carbon, so $\mathrm{S_N2}$ is fastest for methyl and primary halides and slowest for tertiary ones.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks the nucleophile attacks from the same side as the halogen, so the configuration is retained.",
      remediation: "The nucleophile attacks from the side opposite the halogen, so the configuration is inverted.",
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: t`Thinks the $\mathrm{S_N2}$ rate depends on the alkyl halide alone: rate $= k[\ce{RX}]$.`,
      remediation: t`Both the halide and the nucleophile are in the one slow step, so rate $= k[\ce{RX}][\ce{Nu-}]$.`,
      fallback: { kind: "ext", topic: "rate law and order (Chemical Kinetics)" },
    },
    {
      id: "C06-M5",
      mistake: t`Thinks a more polar $\ce{C-Cl}$ bond reacts faster than $\ce{C-I}$.`,
      remediation: t`The bond must break: the weaker $\ce{C-I}$ bond breaks most easily, so $\ce{R-I}$ > $\ce{R-Br}$ > $\ce{R-Cl}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Judges the rate by one feature alone, the halogen or the carbon, and calls two halides equal when that feature matches.",
      remediation: "Both matter: crowding at the carbon and how easily the halide leaves.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Solved Ex.10.5" },
      stem: t`Which reacts faster by the $\mathrm{S_N2}$ mechanism, 1-chlorobutane, $\ce{CH3CH2CH2CH2Cl}$, or 2-chlorobutane, $\ce{CH3CHClCH2CH3}$, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "chain" } },
      options: [
        { key: "A", text: t`2-Chlorobutane: secondary halides react faster than primary ones`, correct: false, misconceptionId: "C06-M2", value: "secondary_faster" },
        { key: "B", text: t`2-Chlorobutane: it gives the more stable carbocation`, correct: false, misconceptionId: "C06-M1", value: "secondary_carbocation" },
        { key: "C", text: t`Both equally fast: each has the same $\ce{C-Cl}$ bond`, correct: false, misconceptionId: "C06-M6", value: "equal_same_bond" },
        { key: "D", text: t`1-Chlorobutane: its primary carbon gives a less crowded transition state`, correct: true, value: "primary_less_crowded" },
      ],
      solution: {
        steps: [
          t`Both have the same leaving group, $\ce{Cl}$.`,
          t`1-Chlorobutane's $\ce{Cl}$ is on a primary carbon; 2-chlorobutane's is on a secondary one.`,
          t`Fewer alkyl groups crowd the primary carbon, so 1-chlorobutane reacts faster.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (iv-b)" },
      stem: t`Which reacts faster by the $\mathrm{S_N2}$ mechanism, 1-iodopropane or 1-chloropropane, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "leaving" } },
      options: [
        { key: "A", text: t`Both equally fast: both are primary halides`, correct: false, misconceptionId: "C06-M6", value: "equal_both_primary" },
        { key: "B", text: t`1-Chloropropane: the more polar $\ce{C-Cl}$ bond attracts the nucleophile more`, correct: false, misconceptionId: "C06-M5", value: "chloride_more_polar" },
        { key: "C", text: t`1-Iodopropane: the $\ce{C-I}$ bond is weaker and $\ce{I-}$ leaves more easily`, correct: true, value: "iodide_weaker_bond" },
        { key: "D", text: t`1-Iodopropane: it ionises to a carbocation faster`, correct: false, misconceptionId: "C06-M1", value: "iodide_carbocation" },
      ],
      solution: {
        steps: [
          t`Both are primary, so crowding is the same.`,
          t`The $\ce{C-I}$ bond is weaker than $\ce{C-Cl}$, and $\ce{I-}$ is the better leaving group.`,
          t`So 1-iodopropane reacts faster.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/halogen-derivatives-12-pyq#20" },
      stem: t`Which statement describes the $\mathrm{S_N2}$ reaction $\ce{CH3Br + OH-}$ $\ce{-> CH3OH + Br-}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "features" } },
      options: [
        { key: "A", text: t`One step, $\ce{OH-}$ attacking from the side opposite $\ce{Br}$; rate $= k[\ce{CH3Br}][\ce{OH-}]$`, correct: true, value: "one_step_both_inversion" },
        { key: "B", text: t`Two steps through a planar carbocation; rate $= k[\ce{CH3Br}]$`, correct: false, misconceptionId: "C06-M1", value: "two_steps_carbocation" },
        { key: "C", text: t`One step, $\ce{OH-}$ attacking from the side opposite $\ce{Br}$; rate $= k[\ce{CH3Br}]$`, correct: false, misconceptionId: "C06-M4", value: "one_step_rx_only" },
        { key: "D", text: t`One step, $\ce{OH-}$ attacking from the same side as $\ce{Br}$; rate $= k[\ce{CH3Br}][\ce{OH-}]$`, correct: false, misconceptionId: "C06-M3", value: "one_step_retention" },
      ],
      solution: {
        steps: [
          t`$\mathrm{S_N2}$ is one step: $\ce{C-O}$ forms as $\ce{C-Br}$ breaks.`,
          t`$\ce{OH-}$ attacks from the side opposite $\ce{Br}$.`,
          t`Both reactants are in that step, so rate $= k[\ce{CH3Br}][\ce{OH-}]$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.4" },
      stem: t`An optically active sample of 2-bromooctane reacts with $\ce{OH-}$ by the $\mathrm{S_N2}$ mechanism. The octan-2-ol formed is`,
      verify: { kind: "value", inputs: {  }, params: { q: "stereo" } },
      options: [
        { key: "A", text: t`inverted, formed at a rate that depends on $[\text{2-bromooctane}]$ alone`, correct: false, misconceptionId: "C06-M4", value: "inverted_rx_only" },
        { key: "B", text: t`optically active, with the configuration inverted`, correct: true, value: "inverted" },
        { key: "C", text: t`optically active, with the configuration retained`, correct: false, misconceptionId: "C06-M3", value: "retained" },
        { key: "D", text: t`a racemic mixture, as the carbocation is attacked from both sides`, correct: false, misconceptionId: "C06-M1", value: "racemic" },
      ],
      solution: {
        steps: [
          t`$\mathrm{S_N2}$ attack comes from the back, opposite $\ce{Br}$.`,
          t`The other three groups flip over, so the configuration is inverted.`,
          t`No carbocation forms, so every molecule inverts: the product stays optically active.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`Which reacts faster by the $\mathrm{S_N2}$ mechanism, bromomethane, $\ce{CH3Br}$, or 2-bromo-2-methylpropane, $\ce{(CH3)3CBr}$, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "methyl" } },
      options: [
        { key: "A", text: t`Both equally fast: each has the same $\ce{C-Br}$ bond`, correct: false, misconceptionId: "C06-M6", value: "equal_same_bond" },
        { key: "B", text: t`2-Bromo-2-methylpropane: tertiary halides react fastest`, correct: false, misconceptionId: "C06-M2", value: "tertiary_faster" },
        { key: "C", text: t`2-Bromo-2-methylpropane: it gives a stable tertiary carbocation`, correct: false, misconceptionId: "C06-M1", value: "tertiary_carbocation" },
        { key: "D", text: t`Bromomethane: its carbon carries no alkyl groups to block the nucleophile`, correct: true, value: "methyl_least_crowded" },
      ],
      solution: {
        steps: [
          t`Both have the same leaving group, $\ce{Br}$.`,
          t`$\ce{CH3Br}$'s carbon has no alkyl groups; $\ce{(CH3)3CBr}$'s has three.`,
          t`The nucleophile reaches $\ce{CH3Br}$'s carbon easily, so bromomethane reacts faster.`,
        ],
      },
    },
  ],
};
