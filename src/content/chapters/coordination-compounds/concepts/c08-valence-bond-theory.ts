import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Both $\ce{[Fe(CN)6]^4-}$ and $\ce{[Fe(H2O)6]^2+}$ contain $\ce{Fe^2+}$. One is diamagnetic; the other is strongly attracted by a magnet. Why?`,
    reveal: t`$\ce{CN-}$ is a strong field ligand: it pairs all six 3d electrons ($d^2sp^3$, no unpaired electrons). Water is weak field: four electrons stay unpaired ($sp^3d^2$).`,
  },
  explanation: {
    intuition: [
      t`Each ligand gives a lone pair to the metal ion, forming a coordinate bond.`,
      t`So the metal ion needs one empty orbital for each bond.`,
      t`**Valence bond theory**: these empty orbitals mix (**hybridise**) into a set of equal hybrid orbitals.`,
      t`The kind of hybrid fixes the shape: tetrahedral or square planar for four bonds, octahedral for six.`,
      t`Any 3d electrons left unpaired make the complex attracted by a magnet.`,
    ],
    formal: [
      {
        title: "The metal ion's d electrons",
        points: [
          t`First find the metal's oxidation state from the charges of the ligands.`,
          t`A transition metal loses its 4s electrons first: Co is $3d^7 4s^2$, so $\ce{Co^3+}$ is $3d^6$.`,
          t`Draw the 3d, 4s, 4p and 4d orbitals as boxes, with $\uparrow$ or $\uparrow\downarrow$ for electrons.`,
          t`A **strong field** ligand (donor atom C, N or P) makes the 3d electrons pair up.`,
          t`A **weak field** ligand (donor atom a halogen, O or S) leaves them unpaired.`,
        ],
      },
      {
        title: "Hybridisation and shape",
        points: [
          t`$sp^3$: the 4s and three 4p orbitals; **tetrahedral**, as in $\ce{[CoCl4]^2-}$.`,
          t`$dsp^2$: one 3d, the 4s and two 4p orbitals; **square planar**.`,
          t`$d^2sp^3$: two 3d, the 4s and three 4p; **octahedral**, an **inner orbital** complex.`,
          t`$sp^3d^2$: the 4s, three 4p and two 4d; **octahedral**, an **outer orbital** complex.`,
          t`A strong field ligand frees 3d orbitals by pairing, so it gives $dsp^2$ or $d^2sp^3$.`,
        ],
      },
      {
        title: "Magnetic moment",
        points: [
          t`A complex with unpaired electrons is **paramagnetic**: a magnet attracts it.`,
          t`With every electron paired it is **diamagnetic**: a magnet weakly repels it.`,
          t`Spin-only magnetic moment: $\mu = \sqrt{n(n + 2)}$ BM, with $n$ unpaired electrons.`,
          t`For example, $n = 3$ gives $\mu = \sqrt{15} = 3.87$ BM.`,
        ],
      },
    ],
    worked: {
      prompt: t`Describe the bonding in $\ce{[Ni(CN)4]^2-}$ by valence bond theory. ($Z$ of Ni $= 28$)`,
      steps: [
        t`$x + 4(-1) = -2$, so $x = +2$: $\ce{Ni^2+}$ is $3d^8$.`,
        t`$\ce{CN-}$ is strong field: the eight 3d electrons pair into four orbitals, leaving one 3d empty.`,
        t`That 3d, the 4s and two 4p orbitals hybridise: $dsp^2$, square planar.`,
        t`Every electron is paired, $n = 0$, so the complex is diamagnetic.`,
      ],
      answer: t`$dsp^2$, square planar, diamagnetic`,
    },
    visualSpec: t`Pick a metal ion and a ligand, watch the electrons pair or stay apart in the boxes, and see the hybrid and the shape.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Treats every ligand as weak field: never pairs the 3d electrons.",
      remediation: t`A C, N or P donor ($\ce{CN-}$, $\ce{NH3}$, en) is strong field: it pairs the 3d electrons, giving an inner orbital complex.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: "Treats every ligand as strong field: always pairs the 3d electrons.",
      remediation: t`A halogen, O or S donor ($\ce{F-}$, $\ce{Cl-}$, $\ce{H2O}$) is weak field: the 3d electrons stay unpaired.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Uses the neutral atom's 3d electrons, forgetting the metal's oxidation state.",
      remediation: t`Find the oxidation state first, then remove that many electrons: $\ce{Co^3+}$ is $3d^6$, not $3d^7$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M4",
      mistake: "Removes the ion's electrons from 3d instead of 4s.",
      remediation: t`A transition metal loses its 4s electrons first: $\ce{Fe^3+}$ is $3d^5$, not $3d^3 4s^2$.`,
      fallback: { kind: "ext", topic: "electronic configuration of transition metal ions (Transition and Inner Transition Elements)" },
    },
    {
      id: "C08-M5",
      mistake: t`Swaps the shapes of $sp^3$ and $dsp^2$ hybrids.`,
      remediation: t`$sp^3$ hybrids point to the corners of a tetrahedron; $dsp^2$ hybrids lie in one plane, at the corners of a square.`,
      fallback: { kind: "ext", topic: "hybridisation (Std XI Chemistry)" },
    },
    {
      id: "C08-M6",
      mistake: t`Uses $\sqrt{n(n + 1)}$ for the spin-only magnetic moment.`,
      remediation: t`The spin-only formula is $\mu = \sqrt{n(n + 2)}$ BM.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#15" },
      stem: t`How many unpaired electrons does the metal ion in $\ce{[Co(NH3)6]^3+}$ have? ($Z$ of Co $= 27$)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "n", metal: "Co", lig: "NH3:6", charge: "3" } },
      options: [
        { key: "A", text: t`$0$`, correct: true, value: "0" },
        { key: "B", text: t`$4$`, correct: false, misconceptionId: "C08-M1", value: "4" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C08-M3", value: "1" },
        { key: "D", text: t`$2$`, correct: false, misconceptionId: "C08-M4", value: "2" },
      ],
      solution: {
        steps: [
          t`Co is $3d^7 4s^2$, so $\ce{Co^3+}$ is $3d^6$.`,
          t`$\ce{NH3}$ is strong field: the six electrons pair in three 3d orbitals, leaving two for $d^2sp^3$.`,
          t`So there are $0$ unpaired electrons.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#8" },
      stem: t`What is the spin-only magnetic moment of $\ce{[CoF6]^3-}$? ($Z$ of Co $= 27$)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mu", metal: "Co", lig: "F:6", charge: "-3" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M2", value: "0" },
        { key: "B", text: t`$3.87\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M3", value: "3.87000000000000" },
        { key: "C", text: t`$4.47\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M6", value: "4.47000000000000" },
        { key: "D", text: t`$4.90\ \mathrm{BM}$`, correct: true, value: "4.90000000000000" },
      ],
      solution: {
        steps: [
          t`$x + 6(-1) = -3$ gives $\ce{Co^3+}$, which is $3d^6$.`,
          t`$\ce{F-}$ is weak field: no pairing, so $sp^3d^2$ with $n = 4$.`,
          t`$\mu = \sqrt{4 \times 6}$ $= \sqrt{24} = 4.90$ BM.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#19" },
      stem: t`What are the geometry and the number of unpaired electrons of $\ce{[NiCl4]^2-}$? ($Z$ of Ni $= 28$)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "shape", metal: "Ni", lig: "Cl:4", charge: "-2" } },
      options: [
        { key: "A", text: t`Square planar, 0 unpaired electrons`, correct: false, misconceptionId: "C08-M2", value: "square_planar_0" },
        { key: "B", text: t`Tetrahedral, 4 unpaired electrons`, correct: false, misconceptionId: "C08-M4", value: "tetrahedral_4" },
        { key: "C", text: t`Square planar, 2 unpaired electrons`, correct: false, misconceptionId: "C08-M5", value: "square_planar_2" },
        { key: "D", text: t`Tetrahedral, 2 unpaired electrons`, correct: true, value: "tetrahedral_2" },
      ],
      solution: {
        steps: [
          t`$x + 4(-1) = -2$ gives $\ce{Ni^2+}$, which is $3d^8$.`,
          t`$\ce{Cl-}$ is weak field, so no 3d orbital is freed: the 4s and three 4p give $sp^3$.`,
          t`$sp^3$ is tetrahedral, with $2$ unpaired electrons.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.4 (i)" },
      stem: t`What is the spin-only magnetic moment of $\ce{[VCl4]-}$? ($Z$ of V $= 23$)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mu", metal: "V", lig: "Cl:4", charge: "-1" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M4", value: "0" },
        { key: "B", text: t`$2.45\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M6", value: "2.45000000000000" },
        { key: "C", text: t`$2.83\ \mathrm{BM}$`, correct: true, value: "2.83000000000000" },
        { key: "D", text: t`$3.87\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M3", value: "3.87000000000000" },
      ],
      solution: {
        steps: [
          t`$x + 4(-1) = -1$ gives $\ce{V^3+}$; V is $3d^3 4s^2$, so $\ce{V^3+}$ is $3d^2$.`,
          t`Two unpaired electrons, with $sp^3$ (tetrahedral) bonding.`,
          t`$\mu = \sqrt{2 \times 4}$ $= \sqrt{8} = 2.83$ BM.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/coordination-12-pyq#33" },
      stem: t`What is the spin-only magnetic moment of $\ce{[Mn(H2O)6]^2+}$? ($Z$ of Mn $= 25$)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mu", metal: "Mn", lig: "H2O:6", charge: "2" } },
      options: [
        { key: "A", text: t`$5.48\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M6", value: "5.48000000000000" },
        { key: "B", text: t`$5.92\ \mathrm{BM}$`, correct: true, value: "5.92000000000000" },
        { key: "C", text: t`$1.73\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M2", value: "1.73000000000000" },
        { key: "D", text: t`$3.87\ \mathrm{BM}$`, correct: false, misconceptionId: "C08-M4", value: "3.87000000000000" },
      ],
      solution: {
        steps: [
          t`Mn is $3d^5 4s^2$, so $\ce{Mn^2+}$ is $3d^5$.`,
          t`Water is weak field: all five electrons stay unpaired, with $sp^3d^2$ bonding.`,
          t`$\mu = \sqrt{5 \times 7}$ $= \sqrt{35} = 5.92$ BM.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "authored" },
      stem: t`How many unpaired electrons does the metal ion in $\ce{[Fe(CN)6]^3-}$ have? ($Z$ of Fe $= 26$)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "n", metal: "Fe", lig: "CN:6", charge: "-3" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C08-M3", value: "0" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C08-M4", value: "3" },
        { key: "C", text: t`$1$`, correct: true, value: "1" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C08-M1", value: "5" },
      ],
      solution: {
        steps: [
          t`$x + 6(-1) = -3$ gives $\ce{Fe^3+}$, which is $3d^5$.`,
          t`$\ce{CN-}$ is strong field: the five electrons pair into three 3d orbitals, leaving two for $d^2sp^3$.`,
          t`That leaves $1$ unpaired electron.`,
        ],
      },
    },
  ],
};
