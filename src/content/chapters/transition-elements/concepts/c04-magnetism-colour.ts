import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Copper sulphate crystals are blue, but zinc sulphate crystals are white. Both contain a dipositive $3d$ ion, $\ce{Cu^2+}$ and $\ce{Zn^2+}$. Why is one coloured and the other not?`,
    reveal: t`$\ce{Cu^2+}$ is $3d^9$: its $d$ subshell has a vacancy, so a $d$ electron can absorb visible light and jump to a higher $d$ orbital. $\ce{Zn^2+}$ is $3d^{10}$: every $d$ orbital is full, no such jump is possible, and no visible light is absorbed.`,
  },
  explanation: {
    intuition: [
      t`A spinning electron behaves like a tiny magnet.`,
      t`Two electrons paired in one orbital cancel each other's magnetism.`,
      t`So the unpaired electrons of an ion decide how strongly a magnet attracts it.`,
      t`Colour needs a $d$ electron that can jump to an empty $d$ orbital of slightly higher energy.`,
      t`So ions with partly filled $d$ subshells are coloured; empty ($d^0$) or full ($d^{10}$) ones are not.`,
    ],
    formal: [
      {
        title: "Paramagnetic and diamagnetic",
        points: [
          t`A **paramagnetic** substance has unpaired electrons and is attracted by a magnetic field.`,
          t`A **diamagnetic** substance has all its electrons paired and is weakly repelled by a field.`,
          t`More unpaired electrons make a substance more strongly paramagnetic.`,
          t`Zinc ($3d^{10}\,4s^2$) and $\ce{Sc^3+}$ ($3d^0$) are diamagnetic.`,
          t`Many transition-metal ions, such as $\ce{Fe^3+}$ ($3d^5$), are paramagnetic.`,
        ],
      },
      {
        title: "Spin-only magnetic moment",
        points: [
          t`For $n$ unpaired electrons, the spin-only moment is $\mu = \sqrt{n(n+2)}\ \mathrm{B.M.}$`,
          t`Its unit is the **Bohr magneton**, B.M.`,
          t`To find $n$, write the ion's configuration, removing $4s$ electrons first.`,
          t`Fill the five $3d$ orbitals singly before pairing (Hund's rule).`,
          t`So $d^1$ to $d^5$ have $1$ to $5$ unpaired electrons, and $d^6$ to $d^9$ have $4$ down to $1$.`,
          t`Working back: $\mu = 5.9$ B.M. means $n(n+2) \approx 35$, so $n = 5$.`,
        ],
      },
      {
        title: "Unpaired electrons and moments",
        points: [
          t`$d^1$ or $d^9$: $n = 1$, $\mu = \sqrt{3} = 1.73$ B.M.`,
          t`$d^2$ or $d^8$: $n = 2$, $\mu = \sqrt{8} = 2.83$ B.M.`,
          t`$d^3$ or $d^7$: $n = 3$, $\mu = \sqrt{15} = 3.87$ B.M.`,
          t`$d^4$ or $d^6$: $n = 4$, $\mu = \sqrt{24} = 4.90$ B.M.`,
          t`$d^5$: $n = 5$, $\mu = \sqrt{35} = 5.92$ B.M.`,
          t`$d^0$ or $d^{10}$: $n = 0$, $\mu = 0$, so the ion is diamagnetic.`,
        ],
      },
      {
        title: "Why transition-metal ions are coloured",
        points: [
          t`In a salt or complex, the five $d$ orbitals split into sets of slightly different energy.`,
          t`A $d$ electron absorbs visible light to jump to a higher $d$ orbital: a **d–d transition**.`,
          t`We see the complementary colour of the light absorbed.`,
          t`A d–d transition needs a partly filled $d$ subshell, $d^1$ to $d^9$.`,
          t`$d^0$ ions ($\ce{Sc^3+}$, $\ce{Ti^4+}$) and $d^{10}$ ions ($\ce{Zn^2+}$, $\ce{Cu+}$) are colourless.`,
          t`The colour depends on the number of $d$ electrons and on the groups around the ion.`,
        ],
      },
    ],
    worked: {
      prompt: t`Calculate the spin-only magnetic moment of the $\ce{Ni^2+}$ ion ($Z$ of Ni $= 28$).`,
      steps: [
        t`Ni is $[\mathrm{Ar}]\,3d^8\,4s^2$; $\ce{Ni^2+}$ loses the two $4s$ electrons: $3d^8$.`,
        t`Eight electrons in five $3d$ orbitals: five go in singly, three pair up.`,
        t`So $n = 5 - 3 = 2$ unpaired electrons.`,
        t`$\mu = \sqrt{2(2+2)} = \sqrt{8}$ $= 2.83$ B.M.`,
      ],
      answer: t`$2.83$ B.M.`,
    },
    visualSpec: t`Pick a 3d ion, drop its electrons into five d boxes by Hund's rule, read off n and mu = sqrt(n(n+2)), then shine white light and see which colour a partly filled d subshell absorbs.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Removes the ion's electrons from $3d$ first, because $3d$ fills after $4s$, so the unpaired count is wrong.`,
      remediation: t`An ion loses its $4s$ electrons first, then $3d$. $\ce{Mn^2+}$ is $3d^5\,4s^0$, with five unpaired electrons.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M2",
      mistake: t`Counts every $d$ electron as unpaired, ignoring pairing beyond $d^5$.`,
      remediation: t`There are only five $3d$ orbitals. After each holds one electron, the sixth onwards pair up, so $d^6$ has $4$ unpaired electrons.`,
      fallback: { kind: "ext", topic: "Hund's rule (Std XI Chemistry)" },
    },
    {
      id: "C04-M3",
      mistake: t`Takes the magnetic moment in B.M. to equal the number of unpaired electrons, $\mu = n$.`,
      remediation: t`The spin-only moment is $\mu = \sqrt{n(n+2)}$ B.M., not $n$. Five unpaired electrons give $\sqrt{35} = 5.92$ B.M.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Forgets the square root, taking $\mu = n(n+2)$.`,
      remediation: t`Take the square root at the end: $\mu = \sqrt{n(n+2)}$ B.M. For $n = 3$, $\mu = \sqrt{15} = 3.87$ B.M.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Thinks any ion with $d$ electrons is coloured, so $d^{10}$ ions are coloured too.`,
      remediation: t`Colour comes from a d–d transition, which needs an empty place in a higher $d$ orbital. A full $d^{10}$ ion, like a $d^0$ ion, is colourless.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Thinks an ion loses only its $4s$ electrons, whatever its charge, so its $3d$ count stays the atom's.`,
      remediation: t`The charge says how many electrons go: after the $4s$ electrons, the rest come from $3d$. $\ce{Cr^3+}$ is $3d^3$, not $3d^5$.`,
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#11" },
      stem: t`The spin-only magnetic moment of the $\ce{Mn^2+}$ ion ($Z$ of Mn $= 25$) is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mu", Z: "25", q: "2" } },
      options: [
        { key: "A", text: t`$5\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M3", value: "5" },
        { key: "B", text: t`$35\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M4", value: "35" },
        { key: "C", text: t`$5.92\ \mathrm{B.M.}$`, correct: true, value: "5.92000000000000" },
        { key: "D", text: t`$3.87\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M1", value: "3.87000000000000" },
      ],
      solution: {
        steps: [
          t`Mn is $[\mathrm{Ar}]\,3d^5\,4s^2$; $\ce{Mn^2+}$ loses both $4s$ electrons: $3d^5$.`,
          t`Five electrons in five $3d$ orbitals, all unpaired: $n = 5$.`,
          t`$\mu = \sqrt{5(5+2)} = \sqrt{35}$ $= 5.92$ B.M.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#13" },
      stem: t`The spin-only magnetic moment of the $\ce{Cr^3+}$ ion ($Z$ of Cr $= 24$) is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mu", Z: "24", q: "3" } },
      options: [
        { key: "A", text: t`$3.87\ \mathrm{B.M.}$`, correct: true, value: "3.87000000000000" },
        { key: "B", text: t`$3\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M3", value: "3" },
        { key: "C", text: t`$15\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M4", value: "15" },
        { key: "D", text: t`$5.92\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M6", value: "5.92000000000000" },
      ],
      solution: {
        steps: [
          t`Cr is $[\mathrm{Ar}]\,3d^5\,4s^1$; $\ce{Cr^3+}$ loses the $4s$ electron and two $3d$ electrons: $3d^3$.`,
          t`Three electrons in separate $3d$ orbitals: $n = 3$.`,
          t`$\mu = \sqrt{3(3+2)} = \sqrt{15}$ $= 3.87$ B.M.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#16" },
      stem: t`Calculate the spin-only magnetic moment of the $\ce{M^2+}$ ion of the metal M with atomic number $26$.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mu", Z: "26", q: "2" } },
      options: [
        { key: "A", text: t`$4\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M3", value: "4" },
        { key: "B", text: t`$24\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M4", value: "24" },
        { key: "C", text: t`$6.93\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M2", value: "6.93000000000000" },
        { key: "D", text: t`$4.90\ \mathrm{B.M.}$`, correct: true, value: "4.90000000000000" },
      ],
      solution: {
        steps: [
          t`The metal with $Z = 26$ is iron, $[\mathrm{Ar}]\,3d^6\,4s^2$; $\ce{Fe^2+}$ is $3d^6$.`,
          t`Five $3d$ electrons go in singly and the sixth pairs up: $n = 4$.`,
          t`$\mu = \sqrt{4(4+2)} = \sqrt{24}$ $= 4.90$ B.M.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Solved Problem (p.172)" },
      stem: t`Calculate the spin-only magnetic moment of the divalent cation of the transition metal with atomic number $27$.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mu", Z: "27", q: "2" } },
      options: [
        { key: "A", text: t`$7.94\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M2", value: "7.94000000000000" },
        { key: "B", text: t`$15\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M4", value: "15" },
        { key: "C", text: t`$3.87\ \mathrm{B.M.}$`, correct: true, value: "3.87000000000000" },
        { key: "D", text: t`$5.92\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M1", value: "5.92000000000000" },
      ],
      solution: {
        steps: [
          t`$Z = 27$ is cobalt, $[\mathrm{Ar}]\,3d^7\,4s^2$; $\ce{Co^2+}$ is $3d^7$.`,
          t`Five $3d$ electrons go in singly and two pair up: $n = 5 - 2 = 3$.`,
          t`$\mu = \sqrt{3(3+2)} = \sqrt{15}$ $= 3.87$ B.M.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.1 (i)" },
      stem: t`Calculate the spin-only magnetic moment of the $\ce{Cu^2+}$ ion ($Z$ of Cu $= 29$).`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mu", Z: "29", q: "2" } },
      options: [
        { key: "A", text: t`$0\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M6", value: "0" },
        { key: "B", text: t`$1.73\ \mathrm{B.M.}$`, correct: true, value: "1.73000000000000" },
        { key: "C", text: t`$3.87\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M1", value: "3.87000000000000" },
        { key: "D", text: t`$9.95\ \mathrm{B.M.}$`, correct: false, misconceptionId: "C04-M2", value: "9.95000000000000" },
      ],
      solution: {
        steps: [
          t`Cu is $[\mathrm{Ar}]\,3d^{10}\,4s^1$; $\ce{Cu^2+}$ loses the $4s$ electron and one $3d$ electron: $3d^9$.`,
          t`Nine electrons in five $3d$ orbitals leave one unpaired: $n = 1$.`,
          t`$\mu = \sqrt{1(1+2)} = \sqrt{3}$ $= 1.73$ B.M.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#14" },
      stem: t`How many of these ions give coloured salts: $\ce{Sc^3+}$, $\ce{Ti^4+}$, $\ce{V^5+}$, $\ce{V^3+}$, $\ce{Fe^3+}$, $\ce{Cu+}$ and $\ce{Zn^2+}$? ($Z$: Sc 21, Ti 22, V 23, Fe 26, Cu 29, Zn 30)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "colour", ions: "21:3,22:4,23:5,23:3,26:3,29:1,30:2" } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C04-M1", value: "3" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C04-M5", value: "4" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C04-M6", value: "5" },
      ],
      solution: {
        steps: [
          t`$\ce{Sc^3+}$, $\ce{Ti^4+}$ and $\ce{V^5+}$ are $3d^0$; $\ce{Cu+}$ and $\ce{Zn^2+}$ are $3d^{10}$: all colourless.`,
          t`$\ce{V^3+}$ is $3d^2$ and $\ce{Fe^3+}$ is $3d^5$: partly filled, so coloured.`,
          t`So $2$ of the ions give coloured salts.`,
        ],
      },
    },
  ],
};
