import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`Nickel metal, a neutral atom, warmed in carbon monoxide gives a volatile liquid, $\ce{Ni(CO)4}$. CO is a weak Lewis base. Why does it bind a neutral metal so firmly?`,
    reveal: t`Because the bonding goes both ways: CO gives the metal a lone pair, and the metal gives electrons back into CO's empty $\pi^*$ orbitals.`,
  },
  explanation: {
    intuition: [
      t`**Metal carbonyls** are complexes of a metal with only CO ligands.`,
      t`The metal is usually neutral: oxidation state $0$.`,
      t`CO gives the metal a lone pair from its carbon.`,
      t`The metal gives some d electrons back to CO.`,
      t`Each bond strengthens the other, so the complex is stable.`,
    ],
    formal: [
      {
        title: "Synergic bonding",
        points: [
          t`**$\sigma$ bond**: CO's carbon lone pair goes into an empty metal orbital.`,
          t`**$\pi$ back bond**: filled metal d orbitals give electrons to CO's empty $\pi^*$ orbitals.`,
          t`Each helps the other, so the bonding is called **synergic**.`,
          t`Electrons in $\pi^*$ weaken the C–O bond, so it is longer than in free CO.`,
        ],
      },
      {
        title: "Common carbonyls",
        points: [
          t`$\ce{[Ni(CO)4]}$: tetrahedral, $sp^3$.`,
          t`$\ce{[Fe(CO)5]}$: trigonal bipyramidal, $dsp^3$.`,
          t`$\ce{[Cr(CO)6]}$: octahedral, $d^2sp^3$.`,
          t`In each, the metal and CO are neutral, so the metal's oxidation state is $0$.`,
        ],
      },
    ],
    worked: {
      prompt: t`What are the oxidation state of chromium and the shape of $\ce{[Cr(CO)6]}$?`,
      steps: [
        t`CO is neutral and the complex has no charge.`,
        t`So Cr is $0$.`,
        t`Six ligands, $d^2sp^3$: octahedral.`,
      ],
      answer: t`Oxidation state $0$; octahedral`,
    },
    visualSpec: t`Arrows of electron density flowing from CO to the metal and back, with the C–O bond stretching as back donation grows.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Picks square planar.",
      remediation: t`Ni(0) bonds its four CO through $sp^3$ hybrids: tetrahedral.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C11-M2",
      mistake: "Picks octahedral.",
      remediation: "Four ligands cannot be octahedral: tetrahedral.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Picks trigonal bipyramidal.",
      remediation: "That shape needs five ligands; here there are four.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Picks octahedral.",
      remediation: "Five ligands around Fe give a trigonal bipyramid.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M5",
      mistake: "Picks square pyramidal.",
      remediation: t`$\ce{[Fe(CO)5]}$ is $dsp^3$: trigonal bipyramidal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Picks tetrahedral.",
      remediation: "Tetrahedral has four ligands; this has five.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: "Sees only the sigma bond.",
      remediation: t`The metal also gives d electrons back to CO's $\pi^*$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: t`Has CO's $\pi$ electrons go to the metal.`,
      remediation: t`The back bond runs from the metal's d orbitals into CO's empty $\pi^*$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Calls it ionic.",
      remediation: "The metal and CO are neutral; the bonds are covalent, both ways.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Expects a shorter bond.",
      remediation: t`Electrons in $\pi^*$ weaken C–O, so it lengthens.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Expects no change.",
      remediation: t`Back donation puts electrons in C–O's $\pi^*$, lengthening it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Thinks C–O breaks.",
      remediation: "C–O is weakened, not broken: CO stays a ligand.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M13",
      mistake: "Counts +1 per ligand.",
      remediation: t`CO is neutral, so it adds nothing: Fe is $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M14",
      mistake: "Assumes +2.",
      remediation: t`The complex is neutral and CO is neutral, so Fe is $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M15",
      mistake: "Counts −1 per ligand.",
      remediation: t`CO carries no charge: Fe is $0$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "authored" },
      stem: t`The shape of $\ce{[Ni(CO)4]}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ni" } },
      options: [
        { key: "A", text: t`tetrahedral`, correct: true, value: "tetrahedral" },
        { key: "B", text: t`square planar`, correct: false, misconceptionId: "C11-M1", value: "square_planar" },
        { key: "C", text: t`octahedral`, correct: false, misconceptionId: "C11-M2", value: "octahedral" },
        { key: "D", text: t`trigonal bipyramidal`, correct: false, misconceptionId: "C11-M3", value: "trigonal_bipyramidal" },
      ],
      solution: {
        steps: [
          t`Four CO around Ni(0): $sp^3$.`,
          t`Tetrahedral.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "authored" },
      stem: t`The shape of $\ce{[Fe(CO)5]}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "fe" } },
      options: [
        { key: "A", text: t`square pyramidal`, correct: false, misconceptionId: "C11-M5", value: "square_pyramidal" },
        { key: "B", text: t`tetrahedral`, correct: false, misconceptionId: "C11-M6", value: "tetrahedral" },
        { key: "C", text: t`trigonal bipyramidal`, correct: true, value: "trigonal_bipyramidal" },
        { key: "D", text: t`octahedral`, correct: false, misconceptionId: "C11-M4", value: "octahedral" },
      ],
      solution: {
        steps: [
          t`Five CO around Fe(0): $dsp^3$.`,
          t`Trigonal bipyramidal.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "authored" },
      stem: t`In a metal carbonyl, back bonding means`,
      verify: { kind: "value", inputs: {  }, params: { q: "back" } },
      options: [
        { key: "A", text: t`CO only gives its lone pair to the metal`, correct: false, misconceptionId: "C11-M7", value: "sigma_only" },
        { key: "B", text: t`CO's filled $\pi$ orbitals give electrons to the metal`, correct: false, misconceptionId: "C11-M8", value: "co_pi_to_metal" },
        { key: "C", text: t`the metal ion and CO attract as ions`, correct: false, misconceptionId: "C11-M9", value: "ionic" },
        { key: "D", text: t`the metal's filled d orbitals give electrons to CO's empty $\pi^*$ orbitals`, correct: true, value: "d_to_pi_star" },
      ],
      solution: {
        steps: [
          t`The metal's filled d orbitals overlap CO's empty $\pi^*$.`,
          t`Electrons flow back from metal to CO.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "authored" },
      stem: t`Compared with free CO, the C–O bond in a metal carbonyl is`,
      verify: { kind: "value", inputs: {  }, params: { q: "length" } },
      options: [
        { key: "A", text: t`the same length`, correct: false, misconceptionId: "C11-M11", value: "same_length" },
        { key: "B", text: t`broken`, correct: false, misconceptionId: "C11-M12", value: "broken" },
        { key: "C", text: t`longer`, correct: true, value: "longer" },
        { key: "D", text: t`shorter`, correct: false, misconceptionId: "C11-M10", value: "shorter" },
      ],
      solution: {
        steps: [
          t`Back donation fills C–O's antibonding $\pi^*$.`,
          t`The bond weakens and lengthens.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "authored" },
      stem: t`The oxidation state of iron in $\ce{[Fe(CO)5]}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ox" } },
      options: [
        { key: "A", text: t`$+5$`, correct: false, misconceptionId: "C11-M13", value: "ox_plus_five" },
        { key: "B", text: t`$+2$`, correct: false, misconceptionId: "C11-M14", value: "ox_plus_two" },
        { key: "C", text: t`$-5$`, correct: false, misconceptionId: "C11-M15", value: "ox_minus_five" },
        { key: "D", text: t`$0$`, correct: true, value: "ox_zero" },
      ],
      solution: {
        steps: [
          t`$x + 5(0) = 0$`,
          t`Fe is $0$.`,
        ],
      },
    },
  ],
};
