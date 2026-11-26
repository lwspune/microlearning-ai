import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Chlorine and fluorine are both halogens, yet they combine to form $\ce{ClF3}$. Why is there no $\ce{FCl3}$?`,
    reveal: t`The larger, less electronegative halogen is always the central atom. Fluorine, the smallest and most electronegative, forms only one bond, so it is never central.`,
  },
  explanation: {
    intuition: [
      t`An **interhalogen compound** is a neutral compound of two different halogens.`,
      t`They form because the halogens differ in size and electronegativity.`,
      t`The larger, more electropositive halogen X is the central atom; the smaller halogen X′ surrounds it.`,
      t`There are four types: $\ce{XX'}$, $\ce{XX'3}$, $\ce{XX'5}$ and $\ce{XX'7}$.`,
      t`Fluorine is never the central atom.`,
      t`Each shape follows from the central atom's bond pairs and lone pairs, by VSEPR.`,
    ],
    formal: [
      {
        title: "Types and preparation",
        points: [
          t`**Type $\ce{XX'}$**: ClF, BrF, BrCl, ICl, IBr. Equal volumes give these: $\ce{Cl2 + F2 -> 2ClF}$.`,
          t`**Type $\ce{XX'3}$**: $\ce{ClF3}$, $\ce{BrF3}$, $\ce{IF3}$, $\ce{ICl3}$.`,
          t`**Type $\ce{XX'5}$**: $\ce{BrF5}$, $\ce{IF5}$. **Type $\ce{XX'7}$**: only $\ce{IF7}$, the most atoms, $8$.`,
          t`With the smaller halogen in excess, more of its atoms surround X: $\ce{Cl2 + 3F2 -> 2ClF3}$.`,
          t`So the proportions decide the type, and a larger X has room for more atoms.`,
        ],
      },
      {
        title: "Properties and hydrolysis",
        points: [
          t`Interhalogens are more reactive than the halogens except fluorine: the X–X′ bond is weaker than X–X.`,
          t`They are covalent: gases, volatile liquids or solids.`,
          t`Water **hydrolyses** them: the larger halogen gives its oxoacid, the smaller its halogen acid.`,
          t`$\ce{BrCl + H2O -> HOBr + HCl}$`,
          t`ICl adds across a C=C double bond: $\ce{CH2=CH2 + ICl}$ $\ce{-> ICH2-CH2Cl}$.`,
        ],
      },
      {
        title: "Counting pairs on X",
        points: [
          t`The central halogen has $7$ valence electrons, and each single bond uses one of them.`,
          t`The electrons left over pair up as **lone pairs**: $(7 - n)/2$ for $n$ bonds.`,
          t`For an anion such as $\ce{[ICl4]-}$, first add the extra electron of the charge.`,
          t`The pairs spread out as far apart as possible: $5$ pairs make a trigonal bipyramid, $6$ an octahedron.`,
          t`The **shape** names where the atoms are; the lone pairs bend it but are not part of it.`,
        ],
      },
      {
        title: "Where the lone pairs go",
        points: [
          t`In a trigonal bipyramid, lone pairs take the **equatorial** positions, where they have the most room.`,
          t`In an octahedron, two lone pairs sit opposite each other.`,
          t`$\ce{XX'}$: linear. $\ce{XX'3}$: $3$ bond pairs and $2$ lone pairs, bent T-shaped.`,
          t`$\ce{XX'5}$: $5$ bond pairs and $1$ lone pair, square pyramidal.`,
          t`$\ce{IF7}$: $7$ bond pairs and no lone pair, pentagonal bipyramidal.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the number of lone pairs on iodine in $\ce{IF5}$, and the shape of the molecule.`,
      steps: [
        t`Iodine has $7$ valence electrons; five go into the five I–F bonds.`,
        t`Two electrons are left: $1$ lone pair. So iodine has $6$ electron pairs.`,
        t`Six pairs point to the corners of an octahedron; the lone pair takes one corner.`,
        t`The five fluorines sit at the other corners: a square pyramid.`,
      ],
      answer: t`$1$ lone pair; square pyramidal.`,
    },
    visualSpec: t`Drop bond pairs and lone pairs onto a central halogen and watch the lone pairs take their places, leaving the molecule's shape.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Takes the smaller, more electronegative halogen as the central atom.",
      remediation: "The central atom is the larger, less electronegative halogen, which can hold several neighbours. Fluorine, the smallest, is never central.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M2",
      mistake: "Ignores the central atom's lone pairs and names the shape from the bond pairs alone.",
      remediation: "Lone pairs take up room too. Count bond pairs plus lone pairs to find the arrangement, then name the shape from the atoms.",
      fallback: { kind: "ext", topic: "VSEPR theory (Std XI Chemistry)" },
    },
    {
      id: "C09-M3",
      mistake: "Gives the arrangement of all the electron pairs as the shape of the molecule.",
      remediation: "The shape describes only where the atoms are. Five pairs make a trigonal bipyramid, but with two lone pairs the atoms form a bent T.",
      fallback: { kind: "ext", topic: "VSEPR theory (Std XI Chemistry)" },
    },
    {
      id: "C09-M4",
      mistake: "Puts the lone pairs in the axial positions of a trigonal bipyramid.",
      remediation: t`Lone pairs go equatorial, where they are $120^\circ$ from their neighbours and have the most room.`,
      fallback: { kind: "ext", topic: "VSEPR theory (Std XI Chemistry)" },
    },
    {
      id: "C09-M5",
      mistake: "Ignores the charge of a polyhalide ion when counting the central atom's electrons.",
      remediation: "An anion's negative charge is one extra electron on the central atom. Add it before you count lone pairs.",
      fallback: { kind: "ext", topic: "VSEPR theory (Std XI Chemistry)" },
    },
    {
      id: "C09-M6",
      mistake: "Ignores the proportions: thinks two halogens always give the 1:1 compound XX'.",
      remediation: t`The proportions decide the type. With the smaller halogen in excess, more of its atoms surround X: $\ce{XX'3}$, $\ce{XX'5}$ or $\ce{XX'7}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C09-M1 and C09-M6 are caught on the preparation items; C09-M2 to C09-M5 on the shape items.",
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#25" },
      stem: t`How many lone pairs does chlorine carry in chlorine trifluoride, $\ce{ClF3}$, and what is the molecule's shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lp_shape", n: "3" } },
      options: [
        { key: "A", text: t`2 lone pairs; trigonal bipyramidal`, correct: false, misconceptionId: "C09-M3", value: "lp2_trigonal_bipyramidal" },
        { key: "B", text: t`2 lone pairs; trigonal planar`, correct: false, misconceptionId: "C09-M4", value: "lp2_trigonal_planar" },
        { key: "C", text: t`2 lone pairs; bent T-shaped`, correct: true, value: "lp2_t_shaped" },
        { key: "D", text: t`0 lone pairs; trigonal planar`, correct: false, misconceptionId: "C09-M2", value: "lp0_trigonal_planar" },
      ],
      solution: {
        steps: [
          t`Chlorine has $7$ valence electrons; three form the Cl–F bonds, leaving $4$: $2$ lone pairs.`,
          t`$5$ pairs point to the corners of a trigonal bipyramid, with both lone pairs equatorial.`,
          t`The three fluorines, one equatorial and two axial, make a bent T shape.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.1 (xiii)" },
      stem: t`What is the shape of the $\ce{[BrF4]-}$ ion?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "shape", n: "4", charge: "-1" } },
      options: [
        { key: "A", text: t`Square planar`, correct: true, value: "square_planar" },
        { key: "B", text: t`Tetrahedral`, correct: false, misconceptionId: "C09-M2", value: "tetrahedral" },
        { key: "C", text: t`Octahedral`, correct: false, misconceptionId: "C09-M3", value: "octahedral" },
        { key: "D", text: t`See-saw`, correct: false, misconceptionId: "C09-M5", value: "see_saw" },
      ],
      solution: {
        steps: [
          t`Bromine has $7$ valence electrons, plus $1$ for the charge: $8$.`,
          t`Four go into the Br–F bonds; $4$ are left, $2$ lone pairs. So there are $6$ pairs.`,
          t`In the octahedron the two lone pairs sit opposite each other, so the four fluorines lie in a square plane.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.1 (xiii)" },
      stem: t`How many lone pairs does the central iodine carry in the triiodide ion, $\ce{[I3]-}$, and what is its shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lp_shape", n: "2", charge: "-1" } },
      options: [
        { key: "A", text: t`3 lone pairs; trigonal bipyramidal`, correct: false, misconceptionId: "C09-M3", value: "lp3_trigonal_bipyramidal" },
        { key: "B", text: t`3 lone pairs; bent`, correct: false, misconceptionId: "C09-M4", value: "lp3_bent" },
        { key: "C", text: t`2 lone pairs; bent`, correct: false, misconceptionId: "C09-M5", value: "lp2_bent" },
        { key: "D", text: t`3 lone pairs; linear`, correct: true, value: "lp3_linear" },
      ],
      solution: {
        steps: [
          t`The central iodine has $7$ valence electrons, plus $1$ for the charge: $8$.`,
          t`Two go into the bonds; $6$ are left, $3$ lone pairs. So there are $5$ pairs.`,
          t`The three lone pairs take the equatorial positions, and the two iodines are axial: linear.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#27" },
      stem: t`Iodine reacts with excess chlorine. Which interhalogen forms, and what is its shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "product", x: "I", y: "Cl", n: "3" } },
      options: [
        { key: "A", text: t`$\ce{ClI3}$, with Cl central, bent T-shaped`, correct: false, misconceptionId: "C09-M1", value: "cli3_t_shaped" },
        { key: "B", text: t`$\ce{ICl3}$, bent T-shaped`, correct: true, value: "icl3_t_shaped" },
        { key: "C", text: t`$\ce{ICl3}$, trigonal planar`, correct: false, misconceptionId: "C09-M2", value: "icl3_trigonal_planar" },
        { key: "D", text: t`ICl, linear`, correct: false, misconceptionId: "C09-M6", value: "icl_linear" },
      ],
      solution: {
        steps: [
          t`Iodine is the larger, less electronegative halogen, so it is central.`,
          t`With chlorine in excess, the $\ce{XX'3}$ type forms: $\ce{I2 + 3Cl2 -> 2ICl3}$.`,
          t`Iodine has $3$ bond pairs and $2$ lone pairs, so $\ce{ICl3}$ is bent T-shaped.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (xv)" },
      stem: t`Bromine reacts with excess fluorine. Which interhalogen forms, and what is its shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "product", x: "Br", y: "F", n: "5" } },
      options: [
        { key: "A", text: t`$\ce{BrF5}$, octahedral`, correct: false, misconceptionId: "C09-M3", value: "brf5_octahedral" },
        { key: "B", text: t`BrF, linear`, correct: false, misconceptionId: "C09-M6", value: "brf_linear" },
        { key: "C", text: t`$\ce{BrF5}$, square pyramidal`, correct: true, value: "brf5_square_pyramidal" },
        { key: "D", text: t`$\ce{BrF5}$, trigonal bipyramidal`, correct: false, misconceptionId: "C09-M2", value: "brf5_trigonal_bipyramidal" },
      ],
      solution: {
        steps: [
          t`Bromine is central; with fluorine in excess, the $\ce{XX'5}$ type forms.`,
          t`$\ce{Br2 + 5F2 -> 2BrF5}$`,
          t`Bromine has $5$ bond pairs and $1$ lone pair: square pyramidal.`,
        ],
      },
    },
  ],
};
