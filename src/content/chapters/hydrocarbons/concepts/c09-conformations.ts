import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`The two $\ce{CH3}$ groups of ethane spin about the C–C bond millions of times a second. Is every position of that spin equally comfortable for the molecule?`,
    reveal: t`No: when the hydrogens line up face to face the molecule is about 12.5 kJ/mol higher in energy, so it spends most of its time staggered.`,
  },
  explanation: {
    intuition: [
      t`A C–C $\sigma$ bond allows the two ends to rotate.`,
      t`Each arrangement reached by rotation is a **conformation**.`,
      t`In **staggered** ethane, the H atoms on the two carbons sit as far apart as possible.`,
      t`In **eclipsed** ethane, they line up one behind the other.`,
      t`Rotation is so easy that conformations change into each other all the time.`,
    ],
    formal: [
      {
        title: "Showing conformations",
        points: [
          t`A **Newman projection** looks straight down the C–C bond: front carbon a dot, back carbon a circle.`,
          t`A **sawhorse projection** draws the C–C bond slanting away from you.`,
          t`The **dihedral angle** is the angle between C–H bonds on the two carbons, seen end on.`,
          t`Staggered: $60^\circ$. Eclipsed: $0^\circ$. Anything between is **skew**.`,
        ],
      },
      {
        title: "Stability",
        points: [
          t`Bond pairs of C–H bonds on adjacent carbons repel: **torsional strain**.`,
          t`It is greatest when they are eclipsed and least when staggered.`,
          t`So staggered ethane is the most stable, eclipsed the least.`,
          t`The energy difference is only about $12.5\ \mathrm{kJ\,mol^{-1}}$.`,
          t`That barrier is small, so the forms interconvert and cannot be isolated.`,
        ],
      },
    ],
    worked: {
      prompt: t`Ethane's back carbon is turned $60^\circ$ from the staggered form. What conformation results, and is it more or less stable?`,
      steps: [
        t`Staggered: each back H sits $60^\circ$ from the nearest front H.`,
        t`Turning $60^\circ$ more puts each back H right behind a front H.`,
        t`That is eclipsed, with the most torsional strain.`,
      ],
      answer: t`Eclipsed: less stable`,
    },
    visualSpec: t`Turn the back carbon of a Newman projection and watch the energy rise and fall every $60^\circ$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Picks eclipsed.",
      remediation: "Eclipsed bond pairs repel most, so it is the least stable.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Picks skew.",
      remediation: "Skew lies between the two; staggered is lowest in energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Thinks all are equally stable.",
      remediation: "Rotation is free but not equally comfortable: staggered is lowest.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Gives the staggered angle.",
      remediation: t`Eclipsed bonds line up: $0^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: "Gives 180°.",
      remediation: t`$180^\circ$ is anti in butane; eclipsed ethane is $0^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Gives 120°.",
      remediation: t`$120^\circ$ separates the H atoms on one carbon; eclipsed partners are at $0^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Thinks there is no difference.",
      remediation: t`Torsional strain makes eclipsed about $12.5\ \mathrm{kJ\,mol^{-1}}$ higher.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Is ten times too large.",
      remediation: t`The barrier is small, about $12.5\ \mathrm{kJ\,mol^{-1}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M9",
      mistake: "Gives the C–C bond enthalpy.",
      remediation: t`Rotation breaks no bond; the barrier is only about $12.5\ \mathrm{kJ\,mol^{-1}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Blames angle strain.",
      remediation: "Bond angles stay the same on rotation; the strain is torsional.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: "Thinks rotation breaks the bond.",
      remediation: t`A $\sigma$ bond is symmetric about its axis, so rotation keeps it whole.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M12",
      mistake: "Blames hydrogen bonding.",
      remediation: "C–H hydrogens do not hydrogen bond; the repulsion is between bond pairs.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M13",
      mistake: "Calls them separable isomers.",
      remediation: "They interconvert too fast to separate at room temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M14",
      mistake: "Thinks only staggered exists.",
      remediation: "Ethane passes through eclipsed and skew forms all the time.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M15",
      mistake: "Thinks a bond must break.",
      remediation: t`Rotation about the $\sigma$ bond needs no bond breaking.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "authored" },
      stem: t`Of the conformations of ethane, the most stable is`,
      verify: { kind: "value", inputs: {  }, params: { q: "stable" } },
      options: [
        { key: "A", text: t`skew`, correct: false, misconceptionId: "C09-M2", value: "skew" },
        { key: "B", text: t`none: all are equally stable`, correct: false, misconceptionId: "C09-M3", value: "all_equal" },
        { key: "C", text: t`staggered`, correct: true, value: "staggered" },
        { key: "D", text: t`eclipsed`, correct: false, misconceptionId: "C09-M1", value: "eclipsed" },
      ],
      solution: {
        steps: [
          t`Staggered keeps the bond pairs farthest apart.`,
          t`It has the least torsional strain: most stable.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "authored" },
      stem: t`In the eclipsed conformation of ethane, the dihedral angle between a C–H bond on one carbon and the nearest C–H bond on the other is`,
      verify: { kind: "value", inputs: {  }, params: { q: "angle" } },
      options: [
        { key: "A", text: t`$0^\circ$`, correct: true, value: "deg_0" },
        { key: "B", text: t`$60^\circ$`, correct: false, misconceptionId: "C09-M4", value: "deg_60" },
        { key: "C", text: t`$180^\circ$`, correct: false, misconceptionId: "C09-M5", value: "deg_180" },
        { key: "D", text: t`$120^\circ$`, correct: false, misconceptionId: "C09-M6", value: "deg_120" },
      ],
      solution: {
        steps: [
          t`In eclipsed ethane the bonds line up end on.`,
          t`The dihedral angle is $0^\circ$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "authored" },
      stem: t`The energy difference between the staggered and eclipsed conformations of ethane is about`,
      verify: { kind: "value", inputs: {  }, params: { q: "energy" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M7", value: "kj_0" },
        { key: "B", text: t`$125\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M8", value: "kj_125" },
        { key: "C", text: t`$348\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M9", value: "kj_348" },
        { key: "D", text: t`$12.5\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "kj_12_5" },
      ],
      solution: {
        steps: [
          t`The barrier comes only from torsional strain.`,
          t`It is about $12.5\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "authored" },
      stem: t`The eclipsed conformation of ethane is less stable than the staggered one because of`,
      verify: { kind: "value", inputs: {  }, params: { q: "cause" } },
      options: [
        { key: "A", text: t`torsional strain between the C–H bond pairs on adjacent carbons`, correct: true, value: "torsional_strain" },
        { key: "B", text: t`angle strain in its bond angles`, correct: false, misconceptionId: "C09-M10", value: "angle_strain" },
        { key: "C", text: t`a partly broken C–C sigma bond`, correct: false, misconceptionId: "C09-M11", value: "broken_sigma" },
        { key: "D", text: t`hydrogen bonding between its H atoms`, correct: false, misconceptionId: "C09-M12", value: "h_bonding" },
      ],
      solution: {
        steps: [
          t`Eclipsed bond pairs are closest.`,
          t`Their repulsion is torsional strain.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "authored" },
      stem: t`Can the staggered and eclipsed forms of ethane be separated at room temperature?`,
      verify: { kind: "value", inputs: {  }, params: { q: "isolate" } },
      options: [
        { key: "A", text: t`No: only the staggered form exists`, correct: false, misconceptionId: "C09-M14", value: "only_staggered" },
        { key: "B", text: t`Yes, by breaking and remaking the C–C bond`, correct: false, misconceptionId: "C09-M15", value: "needs_bond_break" },
        { key: "C", text: t`No: the rotation barrier is small, so they interconvert rapidly`, correct: true, value: "no_interconvert" },
        { key: "D", text: t`Yes: they are separate isomers`, correct: false, misconceptionId: "C09-M13", value: "yes_isomers" },
      ],
      solution: {
        steps: [
          t`The barrier, about $12.5\ \mathrm{kJ\,mol^{-1}}$, is small.`,
          t`They interconvert rapidly and cannot be isolated.`,
        ],
      },
    },
  ],
};
