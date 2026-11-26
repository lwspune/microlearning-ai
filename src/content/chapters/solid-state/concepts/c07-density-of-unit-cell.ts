import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`X-rays can measure the edge of a unit cell, a few hundred picometres long. How can that tiny length tell you the density of a whole block of metal?`,
    reveal: t`A block is the same unit cell repeated over and over, so the block's density is one cell's density: the mass of its atoms over its volume $a^3$.`,
  },
  explanation: {
    intuition: [
      t`A crystal is its unit cell repeated, so one cell's density is the crystal's density.`,
      t`Density is mass divided by volume: $\rho = \dfrac{m}{V}$.`,
      t`A cubic cell of edge length $a$ has volume $a^3$.`,
      t`One atom has mass $\dfrac{M}{N_A}$: $M$ is the molar mass and $N_A$ Avogadro's number.`,
      t`A cell holding $n$ atoms therefore has mass $\dfrac{nM}{N_A}$.`,
    ],
    formal: [
      {
        title: "Density of a unit cell",
        points: [
          t`Mass of the unit cell $= n \times \dfrac{M}{N_A}$, where $n$ is the number of atoms per unit cell.`,
          t`Volume of the unit cell $= a^3$.`,
          t`So $\rho = \dfrac{nM}{a^3 N_A}$.`,
          t`$n = 1$ for simple cubic, $2$ for bcc and $4$ for fcc.`,
          t`With $a$ in cm, $\rho$ comes in $\mathrm{g\,cm^{-3}}$; $1\ \mathrm{pm} = 10^{-10}\ \mathrm{cm}$.`,
        ],
      },
      {
        title: "Using the relation backwards",
        points: [
          t`Any one of $\rho$, $M$, $a$ and $n$ follows from the other three.`,
          t`$n = \dfrac{\rho a^3 N_A}{M}$ tells you the type of cubic cell: 1, 2 or 4.`,
          t`$a^3 = \dfrac{nM}{\rho N_A}$ gives the edge length; the edge then gives the radius.`,
          t`$M = \dfrac{\rho a^3 N_A}{n}$ gives the molar mass.`,
        ],
      },
      {
        title: "Counting unit cells and atoms",
        points: [
          t`$x$ grams of the solid fill a volume $\dfrac{x}{\rho}$.`,
          t`One unit cell fills $a^3$, so the number of unit cells is $\dfrac{x}{\rho a^3}$.`,
          t`Each unit cell holds $n$ atoms, so the number of atoms is $\dfrac{nx}{\rho a^3}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Copper (molar mass $63.5\ \mathrm{g\,mol^{-1}}$) has a cubic unit cell of edge length $361\ \mathrm{pm}$ and density $8.92\ \mathrm{g\,cm^{-3}}$. What type of cubic cell is it?`,
      steps: [
        t`Rearrange: $n = \dfrac{\rho a^3 N_A}{M}$.`,
        t`$a = 3.61 \times 10^{-8}\ \mathrm{cm}$, so $a^3 = 4.705 \times 10^{-23}\ \mathrm{cm^3}$.`,
        t`$a^3 N_A$ $= 4.705 \times 10^{-23} \times N_A$ $= 28.33\ \mathrm{cm^3\,mol^{-1}}$.`,
        t`$n = \dfrac{8.92 \times 28.33}{63.5}$ $= 3.98 \approx 4$.`,
        t`Four atoms per unit cell: the cell is fcc.`,
      ],
      answer: t`$n = 4$: face-centred cubic`,
    },
    visualSpec: t`Change the edge length and the atoms per cell and watch the density of the repeated cell change.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Counts every particle in the cell as a whole atom: simple cubic 8, bcc 9, fcc 14.",
      remediation: t`Shared particles count in part: a corner $\tfrac18$, a face centre $\tfrac12$, the body centre $1$. So $n$ is 1, 2 or 4.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M2",
      mistake: t`Takes $n$ as the coordination number: 6, 8 or 12.`,
      remediation: t`The coordination number counts an atom's nearest neighbours; $n$ counts the atoms belonging to one cell: 1, 2 or 4.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M3",
      mistake: t`Converts picometres to centimetres with $10^{-12}$.`,
      remediation: t`$1\ \mathrm{pm} = 10^{-12}\ \mathrm{m} = 10^{-10}\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Mixes up the number of atoms and the number of unit cells.",
      remediation: t`Each unit cell holds $n$ atoms: atoms $= n \times$ unit cells, and a unit cell's mass is $n$ atoms' mass.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M5",
      mistake: "Forgets to cube the edge length.",
      remediation: t`The unit cell is a cube: its volume is $a^3$, not $a$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: t`Multiplies by $N_A$ instead of dividing.`,
      remediation: t`A mole of atoms has mass $M$, so one atom has mass $\dfrac{M}{N_A}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Solved Ex.1.1" },
      stem: t`Gold crystallizes in a face-centred cubic lattice with unit cell edge length $408\ \mathrm{pm}$. The molar mass of gold is $197\ \mathrm{g\,mol^{-1}}$. What is the density of gold? Take $N_A = 6.022 \times 10^{23}\ \mathrm{mol^{-1}}$.`,
      verify: { kind: "value", inputs: { a: "408", M: "197" }, params: { lat: "fcc", ask: "rho" } },
      options: [
        { key: "A", text: t`$57.8\ \mathrm{g\,cm^{-3}}$`, correct: false, misconceptionId: "C07-M2", value: "57.8000000000000" },
        { key: "B", text: t`$1.93 \times 10^{7}\ \mathrm{g\,cm^{-3}}$`, correct: false, misconceptionId: "C07-M3", value: "19300000" },
        { key: "C", text: t`$19.3\ \mathrm{g\,cm^{-3}}$`, correct: true, value: "19.3000000000000" },
        { key: "D", text: t`$67.4\ \mathrm{g\,cm^{-3}}$`, correct: false, misconceptionId: "C07-M1", value: "67.4000000000000" },
      ],
      solution: {
        steps: [
          t`fcc has $n = 4$; $a = 408\ \mathrm{pm} = 4.08 \times 10^{-8}\ \mathrm{cm}$.`,
          t`$a^3 N_A$ $= 6.792 \times 10^{-23} \times N_A$ $= 40.90\ \mathrm{cm^3\,mol^{-1}}$.`,
          t`$\rho = \dfrac{4 \times 197}{40.90}$ $= 19.3\ \mathrm{g\,cm^{-3}}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.4" },
      stem: t`The density of iridium is $22.4\ \mathrm{g\,cm^{-3}}$ and its unit cell is fcc. The molar mass of iridium is $192.2\ \mathrm{g\,mol^{-1}}$. What is the radius of an iridium atom? Take $N_A = 6.022 \times 10^{23}\ \mathrm{mol^{-1}}$.`,
      verify: { kind: "value", inputs: { rho: "22.4", M: "192.2" }, params: { lat: "fcc", ask: "r" } },
      options: [
        { key: "A", text: t`$207\ \mathrm{pm}$`, correct: false, misconceptionId: "C07-M1", value: "207" },
        { key: "B", text: t`$196\ \mathrm{pm}$`, correct: false, misconceptionId: "C07-M2", value: "196" },
        { key: "C", text: t`$13600\ \mathrm{pm}$`, correct: false, misconceptionId: "C07-M3", value: "13600" },
        { key: "D", text: t`$136\ \mathrm{pm}$`, correct: true, value: "136" },
      ],
      solution: {
        steps: [
          t`fcc has $n = 4$: $a^3 = \dfrac{nM}{\rho N_A}$ $= \dfrac{4 \times 192.2}{22.4 \times N_A}$.`,
          t`$a^3 = 5.699 \times 10^{-23}\ \mathrm{cm^3}$, so $a = 3.847 \times 10^{-8}\ \mathrm{cm}$ $= 384.7\ \mathrm{pm}$.`,
          t`In fcc, $r = 0.3535a$ $= 136\ \mathrm{pm}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.10" },
      stem: t`An element has a bcc structure with unit cell edge length $288\ \mathrm{pm}$ and density $7.2\ \mathrm{g\,cm^{-3}}$. How many atoms are present in $200\ \mathrm{g}$ of the element?`,
      verify: { kind: "value", inputs: { a: "288", rho: "7.2", x: "200" }, params: { lat: "bcc", ask: "atoms" } },
      options: [
        { key: "A", text: t`$1.16 \times 10^{24}$`, correct: false, misconceptionId: "C07-M4", value: "1160000000000000050331648" },
        { key: "B", text: t`$2.33 \times 10^{24}$`, correct: true, value: "2330000000000000062914560" },
        { key: "C", text: t`$1.05 \times 10^{25}$`, correct: false, misconceptionId: "C07-M1", value: "10499999999999999555403776" },
        { key: "D", text: t`$9.3 \times 10^{24}$`, correct: false, misconceptionId: "C07-M2", value: "9299999999999999790284800" },
      ],
      solution: {
        steps: [
          t`$a = 2.88 \times 10^{-8}\ \mathrm{cm}$, so $a^3 = 2.389 \times 10^{-23}\ \mathrm{cm^3}$.`,
          t`Unit cells $= \dfrac{x}{\rho a^3}$ $= \dfrac{200}{7.2 \times 2.389 \times 10^{-23}}$ $= 1.163 \times 10^{24}$.`,
          t`bcc has $n = 2$: atoms $= 2 \times 1.163 \times 10^{24}$ $= 2.33 \times 10^{24}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Solved Ex.1.5" },
      stem: t`Niobium forms a bcc structure. Its density is $8.55\ \mathrm{g\,cm^{-3}}$ and its unit cell edge length is $330.6\ \mathrm{pm}$. How many unit cells are present in $0.5\ \mathrm{g}$ of niobium?`,
      verify: { kind: "value", inputs: { a: "330.6", rho: "8.55", x: "0.5" }, params: { lat: "bcc", ask: "cells" } },
      options: [
        { key: "A", text: t`$1.62 \times 10^{21}$`, correct: true, value: "1620000000000000000000" },
        { key: "B", text: t`$1.62 \times 10^{27}$`, correct: false, misconceptionId: "C07-M3", value: "1620000000000000005033164800" },
        { key: "C", text: t`$3.24 \times 10^{21}$`, correct: false, misconceptionId: "C07-M4", value: "3240000000000000000000" },
        { key: "D", text: t`$1.77 \times 10^{6}$`, correct: false, misconceptionId: "C07-M5", value: "1770000" },
      ],
      solution: {
        steps: [
          t`$a = 3.306 \times 10^{-8}\ \mathrm{cm}$, so $a^3 = 3.613 \times 10^{-23}\ \mathrm{cm^3}$.`,
          t`One unit cell has mass $\rho a^3$ $= 8.55 \times 3.613 \times 10^{-23}$ $= 3.089 \times 10^{-22}\ \mathrm{g}$.`,
          t`Unit cells $= \dfrac{0.5}{3.089 \times 10^{-22}}$ $= 1.62 \times 10^{21}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.9" },
      stem: t`An element forms an fcc unit cell with edge length $405\ \mathrm{pm}$. Its density is $2.7\ \mathrm{g\,cm^{-3}}$. What is its molar mass? Take $N_A = 6.022 \times 10^{23}\ \mathrm{mol^{-1}}$.`,
      verify: { kind: "value", inputs: { a: "405", rho: "2.7" }, params: { lat: "fcc", ask: "M" } },
      options: [
        { key: "A", text: t`$7.72\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M1", value: "7.72000000000000" },
        { key: "B", text: t`$9\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M2", value: "9" },
        { key: "C", text: t`$1.65 \times 10^{16}\ \mathrm{g\,mol^{-1}}$`, correct: false, misconceptionId: "C07-M5", value: "16500000000000000" },
        { key: "D", text: t`$27\ \mathrm{g\,mol^{-1}}$`, correct: true, value: "27" },
      ],
      solution: {
        steps: [
          t`Rearrange: $M = \dfrac{\rho a^3 N_A}{n}$, with $n = 4$ for fcc.`,
          t`$a^3 = (4.05 \times 10^{-8})^3$ $= 6.643 \times 10^{-23}\ \mathrm{cm^3}$, and $a^3 N_A = 40.00$.`,
          t`$M = \dfrac{2.7 \times 40.00}{4}$ $= 27\ \mathrm{g\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/solid-state-12-chem/Ex Q.3 (x)" },
      stem: t`A cubic unit cell of edge length $a$ holds $n$ atoms of molar mass $M$. Which expression gives the density $\rho$ of the substance?`,
      verify: { kind: "value", inputs: {  }, params: { lat: "fcc", ask: "rel" } },
      options: [
        { key: "A", text: t`$\rho = \dfrac{nM}{a^3 N_A}$`, correct: true, value: "M*n/(N_A*a**3)" },
        { key: "B", text: t`$\rho = \dfrac{M}{a^3 N_A}$`, correct: false, misconceptionId: "C07-M4", value: "M/(N_A*a**3)" },
        { key: "C", text: t`$\rho = \dfrac{nM}{a N_A}$`, correct: false, misconceptionId: "C07-M5", value: "M*n/(N_A*a)" },
        { key: "D", text: t`$\rho = \dfrac{nMN_A}{a^3}$`, correct: false, misconceptionId: "C07-M6", value: "M*N_A*n/a**3" },
      ],
      solution: {
        steps: [
          t`One atom has mass $\dfrac{M}{N_A}$, so the cell's $n$ atoms have mass $\dfrac{nM}{N_A}$.`,
          t`The cell's volume is $a^3$.`,
          t`$\rho = \dfrac{\text{mass}}{\text{volume}}$ $= \dfrac{nM}{a^3 N_A}$.`,
        ],
      },
    },
  ],
};
