import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Warming a mole of helium by $1\ \mathrm{K}$ at constant volume takes $12.5\ \mathrm{J}$; a mole of nitrogen takes about $20.8\ \mathrm{J}$. Why does nitrogen need more?`,
    reveal: t`A nitrogen molecule can also spin. Its energy is shared among 5 ways of moving instead of 3, so more heat goes in for the same rise in temperature.`,
  },
  explanation: {
    intuition: [
      t`A molecule can hold energy in separate ways: moving, spinning and vibrating.`,
      t`Each separate way is a **degree of freedom**.`,
      t`**Law of equipartition**: each degree of freedom gets the same average energy, $\dfrac{1}{2}k_BT$.`,
      t`More degrees of freedom store more energy at the same temperature.`,
      t`So a gas of more complex molecules needs more heat to warm up.`,
    ],
    formal: [
      {
        title: "Degrees of freedom",
        points: [
          t`A monatomic molecule, such as He or Ar, can only move: 3 translational degrees of freedom.`,
          t`A rigid diatomic molecule, such as $\mathrm{O_2}$ or $\mathrm{N_2}$, also spins about two axes: $3 + 2 = 5$.`,
          t`Spin about the line joining its atoms stores almost no energy, so it does not count.`,
          t`At high temperatures a diatomic molecule also vibrates, adding 2 more (kinetic and potential): 7.`,
          t`A non-linear polyatomic molecule has $3 + 3 = 6$, plus 2 for each vibrational mode.`,
        ],
      },
      {
        title: "Equipartition and specific heats",
        points: [
          t`Each degree of freedom carries $\dfrac{1}{2}k_BT$ per molecule, or $\dfrac{1}{2}RT$ per mole.`,
          t`With $f$ degrees of freedom, a mole has $U = \dfrac{f}{2}RT$, so $C_V = \dfrac{f}{2}R$.`,
          t`Then $C_P = C_V + R$ (Mayer's relation, in the next concept) and $\gamma = \dfrac{C_P}{C_V}$.`,
          t`Monatomic: $C_V = \dfrac{3}{2}R$, $\gamma = \dfrac{5}{3}$. Rigid diatomic: $C_V = \dfrac{5}{2}R$, $\gamma = \dfrac{7}{5}$.`,
          t`Non-linear polyatomic with $f$ vibrational modes: $C_V = (3 + f)R$, $\gamma = \dfrac{4 + f}{3 + f}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`What is the internal energy of $3$ moles of helium at $400\ \mathrm{K}$? Take $R = 8.31\ \mathrm{J\,mol^{-1}K^{-1}}$.`,
      steps: [
        t`Helium is monatomic, with 3 degrees of freedom.`,
        t`Energy per mole $= \dfrac{3}{2}RT$.`,
        t`$U = 3 \times \dfrac{3}{2} \times 8.31 \times 400$.`,
        t`$U \approx 1.50 \times 10^4\ \mathrm{J}$.`,
      ],
      answer: t`$U \approx 1.50 \times 10^4\ \mathrm{J}$`,
    },
    visualSpec: t`Give a monatomic, a diatomic and a polyatomic molecule the same temperature and watch the energy share out equally over each one's ways of moving, spinning and vibrating.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Counts only the translational degrees of freedom.",
      remediation: "A diatomic molecule also spins about two axes, adding 2 rotational degrees of freedom: 5 in all.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: t`Gives each degree of freedom $k_BT$ instead of $\dfrac{1}{2}k_BT$.`,
      remediation: t`Equipartition gives $\dfrac{1}{2}k_BT$ per degree of freedom, so $\dfrac{3}{2}k_BT$ for three directions of motion.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M3",
      mistake: "Counts vibration for a diatomic gas at ordinary temperatures.",
      remediation: "At ordinary temperatures a diatomic molecule behaves as rigid; vibration needs much higher temperatures.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Counts three rotations for a linear molecule.",
      remediation: "Spin about the line joining the atoms stores almost no energy, so a linear molecule has only 2 rotational degrees of freedom.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Counts each vibrational mode as a single degree of freedom.",
      remediation: t`A vibration stores both kinetic and potential energy, so each mode counts twice: $k_BT$ per molecule.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: t`Gives $C_P$ when $C_V$ is asked.`,
      remediation: t`$C_V = \dfrac{f}{2}R$; $C_P = C_V + R$ is larger.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Counts only one degree of freedom.",
      remediation: "A monatomic molecule moves in three independent directions, so it has 3 degrees of freedom.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Leaves out the vibrational modes.",
      remediation: t`Each vibrational mode adds $R$ to $C_V$, so $C_V = (3 + f)R$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: t`Turns $\gamma$ upside down.`,
      remediation: t`$\gamma = \dfrac{C_P}{C_V}$, which is always greater than 1.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.2 (ii)" },
      stem: t`How many degrees of freedom does a rigid diatomic molecule, such as oxygen at room temperature, have?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dof_diatomic" } },
      options: [
        { key: "A", text: t`$3$`, correct: false, misconceptionId: "C06-M1", value: "3" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C06-M3", value: "7" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C06-M4", value: "6" },
        { key: "D", text: t`$5$`, correct: true, value: "5" },
      ],
      solution: {
        steps: [
          t`A diatomic molecule moves in 3 directions and spins about 2 axes; spin about its own axis does not count.`,
          t`At ordinary temperatures it does not vibrate, so it has $3 + 2 = 5$ degrees of freedom.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.6" },
      stem: t`Using the law of equipartition of energy, what is the molar specific heat at constant volume of a monatomic gas?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "cv_mono" } },
      options: [
        { key: "A", text: t`$\dfrac{3}{2}R$`, correct: true, value: "3/2" },
        { key: "B", text: t`$3R$`, correct: false, misconceptionId: "C06-M2", value: "3" },
        { key: "C", text: t`$\dfrac{5}{2}R$`, correct: false, misconceptionId: "C06-M6", value: "5/2" },
        { key: "D", text: t`$\dfrac{1}{2}R$`, correct: false, misconceptionId: "C06-M7", value: "1/2" },
      ],
      solution: {
        steps: [
          t`A monatomic gas has 3 degrees of freedom, so $U = \dfrac{3}{2}RT$ per mole.`,
          t`$C_V = \dfrac{dU}{dT} = \dfrac{3}{2}R$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.6" },
      stem: t`What is the ratio $\gamma = \dfrac{C_P}{C_V}$ for a gas of rigid diatomic molecules?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "gamma_di" } },
      options: [
        { key: "A", text: t`$\dfrac{7}{5}$`, correct: true, value: "7/5" },
        { key: "B", text: t`$\dfrac{5}{3}$`, correct: false, misconceptionId: "C06-M1", value: "5/3" },
        { key: "C", text: t`$\dfrac{9}{7}$`, correct: false, misconceptionId: "C06-M3", value: "9/7" },
        { key: "D", text: t`$\dfrac{4}{3}$`, correct: false, misconceptionId: "C06-M4", value: "4/3" },
      ],
      solution: {
        steps: [
          t`Rigid diatomic: 5 degrees of freedom, so $C_V = \dfrac{5}{2}R$ and $C_P = \dfrac{7}{2}R$.`,
          t`$\gamma = \dfrac{7}{5}$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`What is the internal energy of $2$ moles of oxygen at $300\ \mathrm{K}$, treating its molecules as rigid? Take $R = 8.31\ \mathrm{J\,mol^{-1}K^{-1}}$.`,
      verify: { kind: "value", inputs: { n: "2", R: "8.31", T: "300" }, params: { ask: "U" } },
      options: [
        { key: "A", text: t`$15000\ \mathrm{J}$`, correct: false, misconceptionId: "C06-M4", value: "15000" },
        { key: "B", text: t`$12500\ \mathrm{J}$`, correct: true, value: "12500" },
        { key: "C", text: t`$7480\ \mathrm{J}$`, correct: false, misconceptionId: "C06-M1", value: "7480" },
        { key: "D", text: t`$24900\ \mathrm{J}$`, correct: false, misconceptionId: "C06-M2", value: "24900" },
      ],
      solution: {
        steps: [
          t`Rigid oxygen molecules have 5 degrees of freedom: $U = \dfrac{5}{2}nRT$.`,
          t`$U = \dfrac{5}{2} \times 2 \times 8.31 \times 300$ $\approx 1.25 \times 10^4\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.2(vi)" },
      stem: t`A polyatomic gas has non-linear molecules with $f$ vibrational modes. What is the ratio $\dfrac{C_P}{C_V}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "gamma_poly" } },
      options: [
        { key: "A", text: t`$\dfrac{4 + f}{3 + f}$`, correct: true, value: "(f + 4)/(f + 3)" },
        { key: "B", text: t`$\dfrac{8 + f}{6 + f}$`, correct: false, misconceptionId: "C06-M5", value: "(f + 8)/(f + 6)" },
        { key: "C", text: t`$\dfrac{4}{3}$`, correct: false, misconceptionId: "C06-M8", value: "4/3" },
        { key: "D", text: t`$\dfrac{3 + f}{4 + f}$`, correct: false, misconceptionId: "C06-M9", value: "(f + 3)/(f + 4)" },
      ],
      solution: {
        steps: [
          t`Degrees of freedom: 3 translational, 3 rotational and 2 for each of the $f$ vibrational modes.`,
          t`$C_V = (3 + f)R$ and $C_P = (4 + f)R$, so $\gamma = \dfrac{4 + f}{3 + f}$.`,
        ],
      },
    },
  ],
};
