import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`For decades the noble gases were called inert: they formed no compounds at all. Then in 1962 a chemist made a compound of xenon. Why xenon, and not helium or neon?`,
    reveal: t`Xenon is the largest of them. Its outer electrons are far from the nucleus and easiest to remove, so fluorine and oxygen can pull them into bonds.`,
  },
  explanation: {
    intuition: [
      t`Group 18, He, Ne, Ar, Kr, Xe and Rn, are the **noble gases**.`,
      t`Each has a full outer shell, $ns^2np^6$ (helium $1s^2$), so they are very unreactive.`,
      t`Ionisation enthalpy falls down the group; xenon's outer electrons are the easiest to remove.`,
      t`So the most electronegative elements, fluorine and oxygen, can bond to xenon.`,
      t`Xenon forms fluorides, an oxide and oxyfluorides, with xenon in $+2$, $+4$, $+6$ and even $+8$.`,
      t`Their shapes follow from xenon's bond pairs and lone pairs, by VSEPR.`,
    ],
    formal: [
      {
        title: "Uses of noble gases",
        points: [
          t`Helium: in balloons, and mixed with oxygen in divers' breathing gas.`,
          t`Neon: in discharge lamps and advertising signs, whose light passes through fog, and in fluorescent tubes.`,
          t`Argon: an inert atmosphere for welding, and a filling for electric bulbs.`,
          t`Bartlett saw that xenon's ionisation enthalpy is close to that of $\ce{O2}$, and made the first xenon compound.`,
        ],
      },
      {
        title: "Xenon fluorides",
        points: [
          t`Xenon and fluorine combine directly; the ratio of the two gases decides the product.`,
          t`$\ce{Xe + F2 -> XeF2}$: xenon in excess, sealed nickel tube, $400\,^\circ\mathrm{C}$.`,
          t`$\ce{Xe + 2F2 -> XeF4}$: ratio $1 : 5$, $400\,^\circ\mathrm{C}$, $5$–$6$ atm.`,
          t`$\ce{Xe + 3F2 -> XeF6}$: electric discharge at low temperature.`,
          t`The more fluorine relative to xenon, the higher the fluoride.`,
          t`All three are colourless solids that sublime easily and are strong fluorinating agents.`,
        ],
      },
      {
        title: "Hydrolysis: oxide and oxyfluorides",
        points: [
          t`In **hydrolysis**, water replaces Xe–F bonds by Xe=O bonds, giving HF.`,
          t`Complete hydrolysis: $\ce{XeF6 + 3H2O}$ $\ce{-> XeO3 + 6HF}$.`,
          t`Partial hydrolysis, with one water molecule: $\ce{XeF6 + H2O}$ $\ce{-> XeOF4 + 2HF}$.`,
          t`$\ce{XeF4}$ also gives $\ce{XeO3}$, but part of its xenon is set free as the element.`,
        ],
      },
      {
        title: "Oxidation state of xenon",
        points: [
          t`Take F as $-1$ and O as $-2$; in a neutral molecule the states add up to zero.`,
          t`$\ce{XeF2}$, $\ce{XeF4}$, $\ce{XeF6}$: xenon is $+2$, $+4$, $+6$.`,
          t`$\ce{XeO3}$: $x - 6 = 0$, so xenon is $+6$.`,
          t`$\ce{XeOF4}$: $x - 2 - 4 = 0$, so xenon is $+6$ again.`,
        ],
      },
      {
        title: "Shapes by VSEPR",
        points: [
          t`Xenon has $8$ valence electrons: each F bond uses one, each O double bond two; the rest form lone pairs.`,
          t`$\ce{XeF2}$: $2$ bond pairs and $3$ lone pairs, all lone pairs equatorial: linear.`,
          t`$\ce{XeF4}$: $4$ bond pairs and $2$ lone pairs, opposite each other: square planar.`,
          t`$\ce{XeF6}$: $6$ bond pairs and $1$ lone pair: distorted octahedral.`,
          t`$\ce{XeO3}$: $3$ bond pairs and $1$ lone pair: trigonal pyramidal.`,
          t`$\ce{XeOF4}$: $5$ bond pairs and $1$ lone pair: square pyramidal, with O at the apex.`,
        ],
      },
    ],
    worked: {
      prompt: t`Xenon trioxydifluoride is $\ce{XeO3F2}$. Find the oxidation state of xenon and the shape of the molecule.`,
      steps: [
        t`Take O as $-2$ and F as $-1$: $x - 6 - 2 = 0$, so xenon is $+8$.`,
        t`Three Xe=O bonds use $6$ of xenon's $8$ electrons and two Xe–F bonds the other $2$: no lone pair.`,
        t`Five bond pairs and no lone pair point to the corners of a trigonal bipyramid.`,
      ],
      answer: t`Xenon is $+8$; the molecule is trigonal bipyramidal.`,
    },
    visualSpec: t`Add F and O atoms to a xenon atom one at a time and watch its oxidation state, lone pairs and shape change together.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Ignores xenon's lone pairs and names the shape from the bond pairs alone.",
      remediation: "Xenon's lone pairs take up room too. Count bond pairs plus lone pairs to find the arrangement, then name the shape from the atoms.",
      fallback: { kind: "ext", topic: "VSEPR theory (Std XI Chemistry)" },
    },
    {
      id: "C10-M2",
      mistake: "Gives the arrangement of all the electron pairs as the shape of the molecule.",
      remediation: t`The shape describes only where the atoms are. $\ce{XeF4}$'s six pairs make an octahedron, but its atoms form a square plane.`,
      fallback: { kind: "ext", topic: "VSEPR theory (Std XI Chemistry)" },
    },
    {
      id: "C10-M3",
      mistake: "Counts each oxygen as -1, like fluorine, when finding xenon's oxidation state.",
      remediation: t`Oxygen is $-2$: each Xe=O double bond takes two of xenon's electrons. So xenon is $+6$ in both $\ce{XeO3}$ and $\ce{XeOF4}$.`,
      fallback: { kind: "ext", topic: "oxidation number (Std XI Chemistry)" },
    },
    {
      id: "C10-M4",
      mistake: "Puts the lone pairs in the axial positions of a trigonal bipyramid.",
      remediation: t`Lone pairs go equatorial, where they have the most room. In $\ce{XeF2}$ all three are equatorial, so the molecule is linear.`,
      fallback: { kind: "ext", topic: "VSEPR theory (Std XI Chemistry)" },
    },
    {
      id: "C10-M5",
      mistake: "Ignores the xenon-to-fluorine ratio: thinks any excess of fluorine gives the highest fluoride, XeF6.",
      remediation: t`The ratio and conditions decide the fluoride. A $1 : 5$ mixture at $400\,^\circ\mathrm{C}$ gives $\ce{XeF4}$; $\ce{XeF6}$ needs still more fluorine.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Swaps the complete and partial hydrolysis of XeF6.",
      remediation: t`With enough water all six fluorines go: $\ce{XeO3}$. With one water molecule only two go: $\ce{XeOF4}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C10-M1 and C10-M2 are caught on every shape item; C10-M3 on the oxidation-state item, C10-M5 and C10-M6 on the preparation items.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.2 (xii)" },
      stem: t`$\ce{XeOF4 + H2O -> XeO2F2 + 2HF}$. What is the oxidation state of xenon in $\ce{XeO2F2}$, and what is its shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ox_shape", formula: "XeO2F2" } },
      options: [
        { key: "A", text: t`$+6$; trigonal bipyramidal`, correct: false, misconceptionId: "C10-M2", value: "p6_trigonal_bipyramidal" },
        { key: "B", text: t`$+4$; see-saw`, correct: false, misconceptionId: "C10-M3", value: "p4_see_saw" },
        { key: "C", text: t`$+6$; trigonal pyramidal`, correct: false, misconceptionId: "C10-M4", value: "p6_trigonal_pyramidal" },
        { key: "D", text: t`$+6$; see-saw`, correct: true, value: "p6_see_saw" },
      ],
      solution: {
        steps: [
          t`Take O as $-2$ and F as $-1$: $x - 4 - 2 = 0$, so xenon is $+6$.`,
          t`Two Xe=O bonds use $4$ electrons and two Xe–F bonds $2$: $2$ are left, $1$ lone pair.`,
          t`$5$ pairs make a trigonal bipyramid; the lone pair takes an equatorial position.`,
          t`The four atoms then form a see-saw.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (xvii)" },
      stem: t`Xenon hexafluoride is completely hydrolysed by water. Which xenon compound forms, and what is its shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "product_shape", reaction: "xef6_complete" } },
      options: [
        { key: "A", text: t`$\ce{XeO3}$, trigonal planar`, correct: false, misconceptionId: "C10-M1", value: "xeo3_trigonal_planar" },
        { key: "B", text: t`$\ce{XeO3}$, trigonal pyramidal`, correct: true, value: "xeo3_trigonal_pyramidal" },
        { key: "C", text: t`$\ce{XeO3}$, tetrahedral`, correct: false, misconceptionId: "C10-M2", value: "xeo3_tetrahedral" },
        { key: "D", text: t`$\ce{XeOF4}$, square pyramidal`, correct: false, misconceptionId: "C10-M6", value: "xeof4_square_pyramidal" },
      ],
      solution: {
        steps: [
          t`Complete hydrolysis replaces all six fluorines: $\ce{XeF6 + 3H2O}$ $\ce{-> XeO3 + 6HF}$.`,
          t`In $\ce{XeO3}$ three Xe=O bonds use $6$ electrons, leaving $1$ lone pair.`,
          t`$4$ pairs make a tetrahedron; with one corner a lone pair, the shape is trigonal pyramidal.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (x)" },
      stem: t`How many lone pairs does xenon carry in $\ce{XeF2}$, and what is the molecule's shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lp_shape", formula: "XeF2" } },
      options: [
        { key: "A", text: t`3 lone pairs; linear`, correct: true, value: "lp3_linear" },
        { key: "B", text: t`No lone pairs; linear`, correct: false, misconceptionId: "C10-M1", value: "lp0_linear" },
        { key: "C", text: t`3 lone pairs; trigonal bipyramidal`, correct: false, misconceptionId: "C10-M2", value: "lp3_trigonal_bipyramidal" },
        { key: "D", text: t`3 lone pairs; bent`, correct: false, misconceptionId: "C10-M4", value: "lp3_bent" },
      ],
      solution: {
        steps: [
          t`Two Xe–F bonds use $2$ of xenon's $8$ electrons; $6$ are left, $3$ lone pairs.`,
          t`$5$ pairs make a trigonal bipyramid, with the three lone pairs equatorial.`,
          t`The two fluorines are axial, so $\ce{XeF2}$ is linear.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (xvi)" },
      stem: t`Xenon and fluorine in the volume ratio $1 : 5$ are heated in a nickel tube at $400\,^\circ\mathrm{C}$ and $5$–$6$ atm. What forms, and what is its shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "product_shape", reaction: "xe_f2_1_5" } },
      options: [
        { key: "A", text: t`$\ce{XeF4}$, octahedral`, correct: false, misconceptionId: "C10-M2", value: "xef4_octahedral" },
        { key: "B", text: t`$\ce{XeF6}$, distorted octahedral`, correct: false, misconceptionId: "C10-M5", value: "xef6_distorted_octahedral" },
        { key: "C", text: t`$\ce{XeF4}$, square planar`, correct: true, value: "xef4_square_planar" },
        { key: "D", text: t`$\ce{XeF4}$, tetrahedral`, correct: false, misconceptionId: "C10-M1", value: "xef4_tetrahedral" },
      ],
      solution: {
        steps: [
          t`A $1 : 5$ mixture at $400\,^\circ\mathrm{C}$ and $5$–$6$ atm gives xenon tetrafluoride: $\ce{Xe + 2F2 -> XeF4}$.`,
          t`Four Xe–F bonds use $4$ electrons; $4$ are left, $2$ lone pairs.`,
          t`$6$ pairs make an octahedron with the lone pairs opposite: square planar.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (xvii)" },
      stem: t`Xenon hexafluoride is partly hydrolysed with just one molecule of water. Which xenon compound forms, and what is its shape?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "product_shape", reaction: "xef6_partial" } },
      options: [
        { key: "A", text: t`$\ce{XeOF4}$, trigonal bipyramidal`, correct: false, misconceptionId: "C10-M1", value: "xeof4_trigonal_bipyramidal" },
        { key: "B", text: t`$\ce{XeOF4}$, octahedral`, correct: false, misconceptionId: "C10-M2", value: "xeof4_octahedral" },
        { key: "C", text: t`$\ce{XeO3}$, trigonal pyramidal`, correct: false, misconceptionId: "C10-M6", value: "xeo3_trigonal_pyramidal" },
        { key: "D", text: t`$\ce{XeOF4}$, square pyramidal`, correct: true, value: "xeof4_square_pyramidal" },
      ],
      solution: {
        steps: [
          t`One water molecule replaces only two fluorines: $\ce{XeF6 + H2O}$ $\ce{-> XeOF4 + 2HF}$.`,
          t`In $\ce{XeOF4}$, one Xe=O and four Xe–F bonds use $6$ electrons, leaving $1$ lone pair.`,
          t`$6$ pairs make an octahedron with one corner a lone pair: square pyramidal.`,
        ],
      },
    },
  ],
};
