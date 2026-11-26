import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A tellurium nucleus has 52 protons; an oxygen nucleus has only 8. Which atom is smaller?`,
    reveal: t`Oxygen, by far: 66 pm against 137 pm. Tellurium's electrons fill three more shells, and the extra shells outweigh the extra protons.`,
  },
  explanation: {
    intuition: [
      t`Groups 16, 17 and 18 sit at the right of the p-block.`,
      t`Going down a group, each element adds one more shell of electrons.`,
      t`So the atoms get bigger and their outer electrons are held less tightly.`,
      t`Bigger atoms lose electrons more easily and attract shared electrons less.`,
      t`The first member of each group is very small, so it sometimes breaks the pattern.`,
    ],
    formal: [
      {
        title: "Electronic configuration",
        points: [
          t`Group 16 (O, S, Se, Te, Po) has the outer configuration $ns^2np^4$.`,
          t`Group 17, the **halogens** (F, Cl, Br, I, At), has $ns^2np^5$.`,
          t`Group 18, the **noble gases** (He to Rn), has a full $ns^2np^6$; helium has $1s^2$.`,
          t`Sulfur is $\mathrm{[Ne]3s^23p^4}$ and chlorine is $\mathrm{[Ne]3s^23p^5}$.`,
        ],
      },
      {
        title: "Atomic radius",
        points: [
          t`**Atomic radius** is the distance from the nucleus to the outermost electrons.`,
          t`It rises down a group because a new shell is added at each step.`,
          t`Group 16: O 66, S 104, Se 117, Te 137 pm.`,
          t`Across a period it falls: the nuclear charge rises but the new electron enters the same shell.`,
          t`So S (104 pm) is larger than Cl (99 pm).`,
        ],
      },
      {
        title: "Ionisation enthalpy",
        points: [
          t`**Ionisation enthalpy** (IE) is the energy needed to remove an electron from a gaseous atom.`,
          t`It falls down a group: O 1314, S 1000, Se 941, Te 869 $\mathrm{kJ\,mol^{-1}}$.`,
          t`The outer electron is farther away and **shielded** (screened) by more inner electrons.`,
          t`It rises across a period: S 1000 < Cl 1256 < Ar 1520 $\mathrm{kJ\,mol^{-1}}$.`,
          t`Group 18 has the highest values: its full $ns^2np^6$ shell is extra stable.`,
        ],
      },
      {
        title: "Group 16 against group 15",
        points: [
          t`Group 15 has $ns^2np^3$: three p electrons, one in each p orbital.`,
          t`This **half-filled** set is extra stable, so its electron is hard to remove.`,
          t`In group 16 ($ns^2np^4$) the fourth p electron is paired and repelled by its partner.`,
          t`So group 16 has the lower IE: O 1314 < N 1402, S 1000 < P 1012 $\mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
      {
        title: "Electronegativity",
        points: [
          t`**Electronegativity** (EN) is an atom's pull on the electron pair it shares in a bond.`,
          t`It falls down a group: F 4.0, Cl 3.2, Br 3.0, I 2.7.`,
          t`Fluorine is the most electronegative element; oxygen (3.50) comes next.`,
          t`Across a period EN rises, so O 3.50 is below F 4.0.`,
        ],
      },
      {
        title: "Electron gain enthalpy",
        points: [
          t`**Electron gain enthalpy** (EGE) is the enthalpy change when a gaseous atom gains an electron.`,
          t`A more negative EGE means more energy is released.`,
          t`Halogens have the most negative values: one electron completes their octet.`,
          t`Chlorine is the most negative of all: Cl $-349$, F $-333$, Br $-325$, I $-296$.`,
          t`Fluorine's small 2p orbitals are crowded, so electron repulsion makes its EGE less negative.`,
          t`Likewise O ($-141$) is less negative than S ($-200\ \mathrm{kJ\,mol^{-1}}$).`,
        ],
      },
      {
        title: "Melting and boiling points",
        points: [
          t`These molecules are held together by weak **van der Waals forces**.`,
          t`These forces grow with molecular size, so melting and boiling points rise down a group.`,
          t`$\ce{F2}$ and $\ce{Cl2}$ are gases, $\ce{Br2}$ is a liquid and $\ce{I2}$ is a solid.`,
          t`Noble gases are single atoms with very weak forces, so they boil very low.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange I, F, Br and Cl in increasing order of atomic radius.`,
      steps: [
        t`All four are in group 17, so one shell is added at each step down.`,
        t`Order down the group: F, then Cl, then Br, then I.`,
        t`Radius rises down the group: F 64, Cl 99, Br 114, I 133 pm.`,
      ],
      answer: t`F < Cl < Br < I`,
    },
    visualSpec: t`Slide an element down a group and watch its radius grow while IE and EN fall on two bars.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Treats electron gain enthalpy and electronegativity as the same property, so F has the most negative EGE.",
      remediation: "EN is the pull on a shared pair; EGE is the energy released by a free atom gaining an electron. F has the highest EN, but Cl has the most negative EGE.",
      fallback: { kind: "ext", topic: "periodic trends (Std XI Chemistry)" },
    },
    {
      id: "C01-M2",
      mistake: "Lets nuclear charge decide everything: thinks IE and EN rise and EGE grows more negative with atomic number.",
      remediation: "Down a group each new shell puts the outer electrons farther out and shields them, which outweighs the extra protons. So IE and EN fall down a group.",
      fallback: { kind: "ext", topic: "periodic trends (Std XI Chemistry)" },
    },
    {
      id: "C01-M3",
      mistake: "Knows F's EGE is less negative than Cl's but puts fluorine at the least negative end.",
      remediation: t`Fluorine's EGE ($-333$) is less negative than chlorine's ($-349$) only. It is still more negative than Br ($-325$) and I ($-296$).`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Thinks IE always rises across a period, ignoring the half-filled $np^3$ set of group 15.`,
      remediation: t`Group 15 has an extra-stable half-filled $np^3$ set, so its IE is higher than group 16's in the same period: N > O and P > S.`,
      fallback: { kind: "ext", topic: "periodic trends (Std XI Chemistry)" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks atoms grow across a period as electrons are added, so IE and EN fall across a period.",
      remediation: "Across a period the new electron enters the same shell while the nuclear charge rises. Atoms shrink, so IE and EN rise.",
      fallback: { kind: "ext", topic: "periodic trends (Std XI Chemistry)" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.1 (i)" },
      stem: t`Arrange F, Cl, Br and I by electron gain enthalpy, from the most negative to the least negative.`,
      verify: { kind: "value", inputs: {  }, params: { set: "F,Cl,Br,I", prop: "ege" } },
      options: [
        { key: "A", text: t`Cl, F, Br, I`, correct: true, value: "ord_cl_f_br_i" },
        { key: "B", text: t`F, Cl, Br, I`, correct: false, misconceptionId: "C01-M1", value: "ord_f_cl_br_i" },
        { key: "C", text: t`I, Br, Cl, F`, correct: false, misconceptionId: "C01-M2", value: "ord_i_br_cl_f" },
        { key: "D", text: t`Cl, Br, I, F`, correct: false, misconceptionId: "C01-M3", value: "ord_cl_br_i_f" },
      ],
      solution: {
        steps: [
          t`Book values: Cl $-349$, F $-333$, Br $-325$, I $-296\ \mathrm{kJ\,mol^{-1}}$.`,
          t`Chlorine comes first: crowding in fluorine's small 2p shell makes F less negative.`,
          t`Order: Cl, F, Br, I.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#1" },
      stem: t`Arrange O, S, F and Cl by electron gain enthalpy, from the most negative to the least negative.`,
      verify: { kind: "value", inputs: {  }, params: { set: "O,S,F,Cl", prop: "ege" } },
      options: [
        { key: "A", text: t`Cl, F, S, O`, correct: true, value: "ord_cl_f_s_o" },
        { key: "B", text: t`F, O, Cl, S`, correct: false, misconceptionId: "C01-M1", value: "ord_f_o_cl_s" },
        { key: "C", text: t`Cl, S, F, O`, correct: false, misconceptionId: "C01-M2", value: "ord_cl_s_f_o" },
        { key: "D", text: t`Cl, S, O, F`, correct: false, misconceptionId: "C01-M3", value: "ord_cl_s_o_f" },
      ],
      solution: {
        steps: [
          t`Values: Cl $-349$, F $-333$, S $-200$, O $-141\ \mathrm{kJ\,mol^{-1}}$.`,
          t`Halogens release more energy than group 16: one electron completes their octet.`,
          t`In each group the small first member is less negative than the second.`,
          t`Order: Cl, F, S, O.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#1" },
      stem: t`Arrange S, Cl, O and F in increasing order of electronegativity.`,
      verify: { kind: "value", inputs: {  }, params: { set: "S,Cl,O,F", prop: "en" } },
      options: [
        { key: "A", text: t`O < F < S < Cl`, correct: false, misconceptionId: "C01-M2", value: "ord_o_f_s_cl" },
        { key: "B", text: t`Cl < S < F < O`, correct: false, misconceptionId: "C01-M5", value: "ord_cl_s_f_o" },
        { key: "C", text: t`S < Cl < O < F`, correct: true, value: "ord_s_cl_o_f" },
        { key: "D", text: t`O < S < F < Cl`, correct: false, misconceptionId: "C01-M1", value: "ord_o_s_f_cl" },
      ],
      solution: {
        steps: [
          t`EN rises across a period and falls down a group.`,
          t`Values: S 2.44, Cl 3.2, O 3.50, F 4.0.`,
          t`Order: S < Cl < O < F.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#4" },
      stem: t`Arrange N, O, S and Cl in increasing order of first ionisation enthalpy.`,
      verify: { kind: "value", inputs: {  }, params: { set: "N,O,S,Cl", prop: "ie" } },
      options: [
        { key: "A", text: t`S < Cl < O < N`, correct: true, value: "ord_s_cl_o_n" },
        { key: "B", text: t`S < Cl < N < O`, correct: false, misconceptionId: "C01-M4", value: "ord_s_cl_n_o" },
        { key: "C", text: t`N < O < S < Cl`, correct: false, misconceptionId: "C01-M2", value: "ord_n_o_s_cl" },
        { key: "D", text: t`Cl < S < O < N`, correct: false, misconceptionId: "C01-M5", value: "ord_cl_s_o_n" },
      ],
      solution: {
        steps: [
          t`Period 3 atoms are larger, so S and Cl have lower IE than N and O.`,
          t`In each period the half-filled $np^3$ set makes group 15 higher than group 16: N > O.`,
          t`Values: S 1000, Cl 1256, O 1314, N 1402 $\mathrm{kJ\,mol^{-1}}$.`,
          t`Order: S < Cl < O < N.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Solved Ex.7.2" },
      stem: t`Arrange P, S, O and F in increasing order of first ionisation enthalpy.`,
      verify: { kind: "value", inputs: {  }, params: { set: "P,S,O,F", prop: "ie" } },
      options: [
        { key: "A", text: t`S < P < O < F`, correct: true, value: "ord_s_p_o_f" },
        { key: "B", text: t`P < S < O < F`, correct: false, misconceptionId: "C01-M4", value: "ord_p_s_o_f" },
        { key: "C", text: t`O < F < P < S`, correct: false, misconceptionId: "C01-M2", value: "ord_o_f_p_s" },
        { key: "D", text: t`S < P < F < O`, correct: false, misconceptionId: "C01-M5", value: "ord_s_p_f_o" },
      ],
      solution: {
        steps: [
          t`Half-filled $np^3$ makes P (1012) a little higher than S (1000).`,
          t`Period 2 atoms are smaller, so O (1314) and F (1681) are higher still.`,
          t`Across period 2 IE rises from O to F.`,
          t`Order: S < P < O < F.`,
        ],
      },
    },
  ],
};
