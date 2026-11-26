import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Methanal reacts with sodium bisulfite almost at once, propanone slowly, and many larger ketones hardly at all. All have the same $\ce{C=O}$ group. What slows the ketones down?`,
    reveal: t`Nucleophiles attack the carbonyl carbon. In ketones two alkyl groups crowd it and push electrons onto it, making it less positive and harder to reach.`,
  },
  explanation: {
    intuition: [
      t`Oxygen is more electronegative than carbon, so it pulls the $\ce{C=O}$ electrons towards itself.`,
      t`The carbon becomes $\delta+$ and the oxygen $\delta-$.`,
      t`A **nucleophile**, a lone-pair donor, attacks the $\delta+$ carbon.`,
      t`So the typical reaction of aldehydes and ketones is **nucleophilic addition**.`,
    ],
    formal: [
      {
        title: "Polarity and resonance",
        points: [
          t`The carbonyl group is a hybrid of $\ce{>C=O}$ and $\ce{>C+-O-}$.`,
          t`In $\ce{>C=O}$ oxygen has two lone pairs (4 electrons); in $\ce{>C+-O-}$ it has three (6).`,
          t`So C is $\delta+$ and O $\delta-$.`,
        ],
      },
      {
        title: "Aldehydes versus ketones",
        points: [
          t`Alkyl groups push electrons to the carbonyl carbon, making it less positive.`,
          t`They also crowd the carbon, blocking the nucleophile.`,
          t`A ketone has two alkyl groups, an aldehyde one, methanal none.`,
          t`So reactivity: $\ce{HCHO}$ > other aldehydes > ketones.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which reacts faster with HCN: ethanal or propanone? Why?`,
      steps: [
        t`Ethanal has one methyl group on its carbonyl carbon; propanone has two.`,
        t`Two methyls make propanone's carbon less positive and more crowded.`,
      ],
      answer: t`Ethanal`,
    },
    visualSpec: t`Shade the charge on a carbonyl group, then add alkyl groups and watch the carbon's positive charge fade and the space around it shrink.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Counts lone pairs when unshared electrons are asked.",
      remediation: "Each lone pair is two electrons: two lone pairs are four unshared electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Swaps the two resonance structures.",
      remediation: t`In $\ce{>C=O}$ oxygen has two lone pairs; in $\ce{>C+-O-}$ it gains a third.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks alkyl groups make the carbonyl carbon more positive, so ketones react faster.",
      remediation: "Alkyl groups release electrons and crowd the carbon, so ketones react more slowly than aldehydes.",
      fallback: { kind: "ext", topic: "inductive effect (Std XI Chemistry)" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks every carbonyl compound reacts at the same rate.",
      remediation: "The groups on the carbonyl carbon change how positive and how crowded it is.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks more carbons make a carbonyl compound more reactive.",
      remediation: "Methanal, with no alkyl group, is the most reactive; each alkyl group slows the reaction.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: t`Reverses the polarity: makes the carbon $\delta-$.`,
      remediation: t`Oxygen is more electronegative, so it takes the $\delta-$ charge; the carbon is $\delta+$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: "Thinks nucleophiles attack the oxygen.",
      remediation: "Nucleophiles bring electrons, so they attack the electron-poor carbon.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Thinks the $\ce{C=O}$ bond is non-polar.`,
      remediation: t`O pulls the electrons, so $\ce{C=O}$ is strongly polar.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.1 (i)" },
      stem: t`The carbonyl group is a resonance hybrid of (A) $\ce{>C=O}$ and (B) $\ce{>C+-O-}$. How many unshared electrons does oxygen carry in A and in B?`,
      verify: { kind: "value", inputs: {  }, params: { q: "electrons" } },
      options: [
        { key: "A", text: t`2 in A, 3 in B`, correct: false, misconceptionId: "C02-M1", value: "e2_3" },
        { key: "B", text: t`4 in A, 6 in B`, correct: true, value: "e4_6" },
        { key: "C", text: t`6 in A, 4 in B`, correct: false, misconceptionId: "C02-M2", value: "e6_4" },
        { key: "D", text: t`4 in both`, correct: false, misconceptionId: "C02-M8", value: "e4_4" },
      ],
      solution: {
        steps: [
          t`In $\ce{>C=O}$ oxygen has two lone pairs: 4 electrons.`,
          t`In $\ce{>C+-O-}$ it has three: 6 electrons.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.3 (v)" },
      stem: t`Why are aldehydes more reactive than ketones towards nucleophilic addition?`,
      verify: { kind: "value", inputs: {  }, params: { q: "why" } },
      options: [
        { key: "A", text: t`They are not: two alkyl groups make a ketone's carbon more positive`, correct: false, misconceptionId: "C02-M3", value: "ketone_more" },
        { key: "B", text: t`They are not: every $\ce{C=O}$ group reacts alike`, correct: false, misconceptionId: "C02-M4", value: "equal" },
        { key: "C", text: t`Their carbonyl carbon is less crowded and carries fewer electron-releasing alkyl groups`, correct: true, value: "less_crowded_fewer_alkyl" },
        { key: "D", text: t`Their $\ce{C=O}$ bond is non-polar, so it opens more easily`, correct: false, misconceptionId: "C02-M8", value: "nonpolar" },
      ],
      solution: {
        steps: [
          t`Alkyl groups release electrons and crowd the carbonyl carbon.`,
          t`Aldehydes have fewer, so they react faster.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.3 (v)" },
      stem: t`Arrange methanal, ethanal and propanone in decreasing order of reactivity towards nucleophilic addition.`,
      verify: { kind: "value", inputs: {  }, params: { q: "order" } },
      options: [
        { key: "A", text: t`all three react equally`, correct: false, misconceptionId: "C02-M4", value: "all_equal" },
        { key: "B", text: t`ethanal > methanal > propanone`, correct: false, misconceptionId: "C02-M5", value: "ald_hcho_ket" },
        { key: "C", text: t`propanone > ethanal > methanal`, correct: false, misconceptionId: "C02-M3", value: "ket_ald_hcho" },
        { key: "D", text: t`methanal > ethanal > propanone`, correct: true, value: "hcho_ald_ket" },
      ],
      solution: {
        steps: [
          t`Methanal has no alkyl group, ethanal one, propanone two.`,
          t`Fewer alkyl groups, faster addition.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.3 (v)" },
      stem: t`In a nucleophilic addition to $\ce{C=O}$, which atom does the nucleophile attack, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "attack" } },
      options: [
        { key: "A", text: t`The carbon, which is $\delta+$ because O pulls the bond electrons`, correct: true, value: "carbon" },
        { key: "B", text: t`Neither: the $\ce{C=O}$ bond is non-polar`, correct: false, misconceptionId: "C02-M8", value: "neither" },
        { key: "C", text: t`The oxygen, which carries the lone pairs`, correct: false, misconceptionId: "C02-M7", value: "oxygen" },
        { key: "D", text: t`The carbon, which is $\delta-$ because it shares the double bond`, correct: false, misconceptionId: "C02-M6", value: "carbon_negative" },
      ],
      solution: {
        steps: [
          t`Oxygen pulls the bond electrons, leaving carbon $\delta+$.`,
          t`The nucleophile's lone pair attacks that carbon.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Which is the most reactive towards nucleophilic addition: methanal, propanal or propanone?`,
      verify: { kind: "value", inputs: {  }, params: { q: "most" } },
      options: [
        { key: "A", text: t`all react equally`, correct: false, misconceptionId: "C02-M4", value: "same" },
        { key: "B", text: t`methanal`, correct: true, value: "methanal" },
        { key: "C", text: t`propanone`, correct: false, misconceptionId: "C02-M3", value: "propanone" },
        { key: "D", text: t`propanal`, correct: false, misconceptionId: "C02-M5", value: "propanal" },
      ],
      solution: {
        steps: [
          t`Methanal has no electron-releasing, crowding alkyl group.`,
          t`So it is the most reactive.`,
        ],
      },
    },
  ],
};
