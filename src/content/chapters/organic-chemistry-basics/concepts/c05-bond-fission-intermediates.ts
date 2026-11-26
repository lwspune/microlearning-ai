import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`When a C–Cl bond breaks, the pieces can be two radicals or two ions. What decides which?`,
    reveal: t`Whether the shared pair is split evenly (homolysis, radicals) or kept by one atom (heterolysis, ions).`,
  },
  explanation: {
    intuition: [
      t`Reactions start by breaking bonds.`,
      t`Homolysis gives each atom one electron: free radicals.`,
      t`Heterolysis gives one atom both: a cation and an anion.`,
      t`These short-lived species are reactive intermediates.`,
    ],
    formal: [
      {
        title: "Intermediates",
        points: [
          t`Free radical: neutral, with an unpaired electron.`,
          t`Carbocation: positive C, $sp^2$, planar; stability 3° > 2° > 1° > methyl.`,
          t`Carbanion: negative C with a lone pair.`,
        ],
      },
      {
        title: "Reagents",
        points: [
          t`Electrophile: electron-pair acceptor ($\ce{CH3+}$, $\ce{H+}$).`,
          t`Nucleophile: electron-pair donor ($\ce{NH3}$, $\ce{OH-}$).`,
        ],
      },
    ],
    worked: {
      prompt: t`Is $\ce{OH-}$ a nucleophile or an electrophile?`,
      steps: [
        t`It has lone pairs and a negative charge.`,
        t`It donates electron pairs: a nucleophile.`,
      ],
      answer: t`A nucleophile`,
    },
    visualSpec: t`Break a bond both ways and compare the pieces.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Describes heterolysis.",
      remediation: "Homolysis shares the electrons equally.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Gives two anions.",
      remediation: "Homolysis gives two neutral radicals.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks a catalyst is needed.",
      remediation: "Heat or light usually causes homolysis.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Calls the carbocation linear.",
      remediation: t`Three groups around an $sp^2$ carbon: planar.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Calls it tetrahedral.",
      remediation: "The cationic carbon has three bonds and an empty p orbital.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Calls it octahedral.",
      remediation: "Carbon has only three groups here.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Picks methyl.",
      remediation: "Methyl cation is the least stable.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Picks ethyl.",
      remediation: "More alkyl groups stabilise more.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Picks secondary.",
      remediation: "Tertiary is more stable than secondary.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Swaps the roles.",
      remediation: t`$\ce{NH3}$ has a lone pair to donate.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Calls both electrophiles.",
      remediation: t`$\ce{NH3}$ donates; it is a nucleophile.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Calls both nucleophiles.",
      remediation: t`$\ce{CH3+}$ has an empty orbital: an electrophile.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Calls radicals negative.",
      remediation: "Radicals are neutral.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Calls them positive.",
      remediation: "Radicals carry no charge.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Gives them only a lone pair.",
      remediation: "A radical has an unpaired electron.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.8 (A)" },
      stem: t`In homolytic fission of a covalent bond,`,
      verify: { kind: "value", inputs: {  }, params: { q: "homolysis" } },
      options: [
        { key: "A", text: t`a catalyst is always needed`, correct: false, misconceptionId: "C05-M3", value: "needs_catalyst" },
        { key: "B", text: t`two anions form`, correct: false, misconceptionId: "C05-M2", value: "two_anions" },
        { key: "C", text: t`one atom takes both electrons, giving ions`, correct: false, misconceptionId: "C05-M1", value: "unequal_ions" },
        { key: "D", text: t`each atom takes one electron of the pair, giving free radicals`, correct: true, value: "equal_radicals" },
      ],
      solution: {
        steps: [
          t`The pair splits evenly.`,
          t`Each atom becomes a radical.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.15 (E)" },
      stem: t`The geometry of a carbocation is`,
      verify: { kind: "value", inputs: {  }, params: { q: "geometry" } },
      options: [
        { key: "A", text: t`planar`, correct: true, value: "planar" },
        { key: "B", text: t`tetrahedral`, correct: false, misconceptionId: "C05-M5", value: "tetrahedral" },
        { key: "C", text: t`octahedral`, correct: false, misconceptionId: "C05-M6", value: "octahedral" },
        { key: "D", text: t`linear`, correct: false, misconceptionId: "C05-M4", value: "linear" },
      ],
      solution: {
        steps: [
          t`The carbon is $sp^2$.`,
          t`Planar.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.1 (G)" },
      stem: t`Which carbocation is the most stable?`,
      verify: { kind: "value", inputs: {  }, params: { q: "stable_cation" } },
      options: [
        { key: "A", text: t`$\ce{CH3+}$`, correct: false, misconceptionId: "C05-M7", value: "methyl" },
        { key: "B", text: t`$\ce{(CH3)3C+}$`, correct: true, value: "tert_butyl" },
        { key: "C", text: t`$\ce{CH3CH2+}$`, correct: false, misconceptionId: "C05-M8", value: "ethyl" },
        { key: "D", text: t`$\ce{(CH3)2CH+}$`, correct: false, misconceptionId: "C05-M9", value: "isopropyl" },
      ],
      solution: {
        steps: [
          t`Three methyls push electrons to $\ce{C+}$.`,
          t`Tertiary is most stable.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Solved Ex.14.5" },
      stem: t`Of $\ce{NH3}$ and $\ce{CH3+}$,`,
      verify: { kind: "value", inputs: {  }, params: { q: "nh3_ch3" } },
      options: [
        { key: "A", text: t`both are electrophiles`, correct: false, misconceptionId: "C05-M11", value: "both_electrophiles" },
        { key: "B", text: t`both are nucleophiles`, correct: false, misconceptionId: "C05-M12", value: "both_nucleophiles" },
        { key: "C", text: t`$\ce{NH3}$ is the nucleophile and $\ce{CH3+}$ the electrophile`, correct: true, value: "nh3_nucleophile" },
        { key: "D", text: t`$\ce{CH3+}$ is the nucleophile and $\ce{NH3}$ the electrophile`, correct: false, misconceptionId: "C05-M10", value: "swapped" },
      ],
      solution: {
        steps: [
          t`$\ce{NH3}$ donates its lone pair.`,
          t`$\ce{CH3+}$ accepts it.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/organic-basics-11-chem/Ex Q.8 (C)" },
      stem: t`A free radical is`,
      verify: { kind: "value", inputs: {  }, params: { q: "radical" } },
      options: [
        { key: "A", text: t`a species with a lone pair and no unpaired electron`, correct: false, misconceptionId: "C05-M15", value: "lone_pair_only" },
        { key: "B", text: t`a negatively charged species`, correct: false, misconceptionId: "C05-M13", value: "negative" },
        { key: "C", text: t`a positively charged species`, correct: false, misconceptionId: "C05-M14", value: "positive" },
        { key: "D", text: t`a neutral species with an unpaired electron`, correct: true, value: "neutral_unpaired" },
      ],
      solution: {
        steps: [
          t`An odd electron, no charge.`,
          t`A neutral free radical.`,
        ],
      },
    },
  ],
};
