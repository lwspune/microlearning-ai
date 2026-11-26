import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Below $0^\circ\mathrm{C}$ water freezes by itself, though ice is far more ordered than liquid water. If nature favours disorder, how can that be?`,
    reveal: t`Freezing gives out heat, and that heat makes the surroundings more disordered. Below $0^\circ\mathrm{C}$ the surroundings gain more entropy than the water loses, so the total entropy still rises.`,
  },
  explanation: {
    intuition: [
      t`A **spontaneous** process is one that goes on by itself once started, like ice melting at room temperature.`,
      t`**Entropy** $S$ measures the disorder, or randomness, of a system.`,
      t`Gases are more disordered than liquids, and liquids more than solids.`,
      t`Heat given to the surroundings makes them more disordered too.`,
      t`In every spontaneous change the total entropy, system plus surroundings, goes up.`,
    ],
    formal: [
      {
        title: "Entropy and its change",
        points: [
          t`Entropy is a state function; its unit is $\mathrm{J\,K^{-1}}$, or $\mathrm{J\,K^{-1}\,mol^{-1}}$ per mole.`,
          t`For heat $Q_{rev}$ taken in reversibly at temperature $T$: $\Delta S = \dfrac{Q_{rev}}{T}$.`,
          t`At its transition temperature a phase change is reversible, so $\Delta S = \dfrac{\Delta H}{T}$.`,
          t`$\Delta S > 0$ for melting, vaporisation, and reactions that make more moles of gas.`,
          t`$\Delta S < 0$ for freezing, condensation, and changes like $\ce{2H(g) -> H2(g)}$.`,
          t`**Third law**: a perfectly ordered crystal at $0\ \mathrm{K}$ has zero entropy.`,
        ],
      },
      {
        title: "The second law",
        points: [
          t`**Second law**: the total entropy of a system and its surroundings increases in a spontaneous process.`,
          t`$\Delta S_{total} = \Delta S_{sys} + \Delta S_{surr}$, and $\Delta S_{total} > 0$ for a spontaneous change.`,
          t`$\Delta S_{total} = 0$ only at equilibrium; entropy, unlike energy, is not conserved.`,
          t`So $\Delta S_{sys}$ may be negative if the surroundings gain more.`,
        ],
      },
      {
        title: "Entropy of the surroundings",
        points: [
          t`At constant $T$ and $P$ the surroundings take in heat $-\Delta H$ from the system.`,
          t`So $\Delta S_{surr} = -\dfrac{\Delta H}{T}$, with $\Delta H$ of the system.`,
          t`An exothermic change ($\Delta H < 0$) raises the entropy of the surroundings.`,
          t`Put $\Delta H$ in joules and $T$ in kelvin.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\ce{N2(g) + 3H2(g) -> 2NH3(g)}$, $\Delta H^0 = -92.2\ \mathrm{kJ}$ and $\Delta S^0 = -198.7\ \mathrm{J\,K^{-1}}$. Is it spontaneous at $298\ \mathrm{K}$?`,
      steps: [
        t`$\Delta S_{surr} = -\dfrac{\Delta H}{T}$ $= \dfrac{92200}{298}$ $= +309.4\ \mathrm{J\,K^{-1}}$.`,
        t`$\Delta S_{total} = -198.7 + 309.4$ $= +110.7\ \mathrm{J\,K^{-1}}$.`,
        t`$\Delta S_{total} > 0$, so the reaction is spontaneous though $\Delta S_{sys} < 0$.`,
      ],
      answer: t`$\Delta S_{total} = +110.7\ \mathrm{J\,K^{-1}}$: spontaneous`,
    },
    visualSpec: t`Slide the temperature and $\Delta H$ and watch the system and surroundings entropy bars add up to $\Delta S_{total}$, turning green when it is positive.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Gets the sign of $\dfrac{\Delta H}{T}$ wrong: takes $\Delta S_{surr} = +\dfrac{\Delta H}{T}$, or $\Delta S_{sys} = -\dfrac{\Delta H}{T}$ for a phase change.`,
      remediation: t`Heat given out by the system is taken in by the surroundings: $\Delta S_{surr} = -\dfrac{\Delta H}{T}$, while a phase change has $\Delta S = +\dfrac{\Delta H}{T}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C10-M2",
      mistake: t`Divides $\Delta H$ in kJ by $T$ and reports the result in $\mathrm{J\,K^{-1}}$.`,
      remediation: t`Entropy is in $\mathrm{J\,K^{-1}}$: turn $\Delta H$ into joules first ($1\ \mathrm{kJ} = 1000\ \mathrm{J}$).`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Uses the Celsius temperature.",
      remediation: t`$T$ is the absolute temperature: add $273$ to the Celsius figure.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Thinks only the entropy of the system decides spontaneity.",
      remediation: t`The second law is about $\Delta S_{total} = \Delta S_{sys} + \Delta S_{surr}$; include $\Delta S_{surr} = -\dfrac{\Delta H}{T}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Thinks every exothermic change is spontaneous.",
      remediation: t`$\Delta H < 0$ helps but does not decide: the test is $\Delta S_{total} > 0$, which also counts $\Delta S_{sys}$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C10-M6",
      mistake: "Thinks entropy is conserved, like energy.",
      remediation: t`Energy is conserved (first law), but entropy is created in every spontaneous change: $\Delta S_{total} > 0$.`,
      fallback: { kind: "concept", id: "C04" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.1 (vii)" },
      stem: t`The standard enthalpy of formation of methanol is $-238.9\ \mathrm{kJ\,mol^{-1}}$. When one mole of methanol forms at $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$), the entropy change of the surroundings is`,
      verify: { kind: "value", inputs: { dH: "-238.9", T: "298" }, params: { ask: "dS_surr", sf: "4" } },
      options: [
        { key: "A", text: t`$-801.7\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M1", value: "-801.700000000000" },
        { key: "B", text: t`$0.8017\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M2", value: "0.801700000000000" },
        { key: "C", text: t`$9556\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M3", value: "9556" },
        { key: "D", text: t`$801.7\ \mathrm{J\,K^{-1}}$`, correct: true, value: "801.700000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta H = -238.9\ \mathrm{kJ} = -238900\ \mathrm{J}$ and $T = 298\ \mathrm{K}$.`,
          t`$\Delta S_{surr} = -\dfrac{\Delta H}{T}$ $= \dfrac{238900}{298}$ $= 801.7\ \mathrm{J\,K^{-1}}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Solved Ex.4.19" },
      stem: t`For $\ce{HgS(s) + O2(g)}$ $\ce{-> Hg(l) + SO2(g)}$, $\Delta H^0 = -238.6\ \mathrm{kJ}$ and $\Delta S^0 = +36.7\ \mathrm{J\,K^{-1}}$. At $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$), $\Delta S_{total}$ is`,
      verify: { kind: "value", inputs: { dH: "-238.6", dS: "36.7", T: "298" }, params: { ask: "dS_total", sf: "4" } },
      options: [
        { key: "A", text: t`$837.4\ \mathrm{J\,K^{-1}}$`, correct: true, value: "837.400000000000" },
        { key: "B", text: t`$-764\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M1", value: "-764" },
        { key: "C", text: t`$9581\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M3", value: "9581" },
        { key: "D", text: t`$36.7\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M4", value: "36.7000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta S_{surr} = -\dfrac{\Delta H}{T}$ $= \dfrac{238600}{298}$ $= 800.7\ \mathrm{J\,K^{-1}}$.`,
          t`$\Delta S_{total} = 36.7 + 800.7$ $= 837.4\ \mathrm{J\,K^{-1}}$.`,
          t`$\Delta S_{total} > 0$, so the reaction is spontaneous.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.4 (iv)" },
      stem: t`For the formation of two moles of water from $\ce{H2}$ and $\ce{O2}$, $\Delta S = -327\ \mathrm{J\,K^{-1}}$ and $\Delta H = -572\ \mathrm{kJ}$. At $298\ \mathrm{K}$ ($25^\circ\mathrm{C}$), $\Delta S_{total}$ is`,
      verify: { kind: "value", inputs: { dH: "-572", dS: "-327", T: "298" }, params: { ask: "dS_total", sf: "4" } },
      options: [
        { key: "A", text: t`$22550\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M3", value: "22550" },
        { key: "B", text: t`$1592\ \mathrm{J\,K^{-1}}$`, correct: true, value: "1592" },
        { key: "C", text: t`$-2246\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M1", value: "-2246" },
        { key: "D", text: t`$-325.1\ \mathrm{J\,K^{-1}}$`, correct: false, misconceptionId: "C10-M2", value: "-325.100000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta S_{surr} = -\dfrac{\Delta H}{T}$ $= \dfrac{572000}{298}$ $= 1919.5\ \mathrm{J\,K^{-1}}$.`,
          t`$\Delta S_{total} = -327 + 1919.5$ $\approx 1592\ \mathrm{J\,K^{-1}}$.`,
          t`It is positive, so the reaction is spontaneous though $\Delta S_{sys} < 0$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#13" },
      stem: t`Ethanol boils at $351\ \mathrm{K}$ ($78^\circ\mathrm{C}$) with $\Delta_{vap} H = 38.6\ \mathrm{kJ\,mol^{-1}}$. The entropy change when one mole of ethanol vaporises at its boiling point is`,
      verify: { kind: "value", inputs: { dH: "38.6", T: "351" }, params: { ask: "dS_phase" } },
      options: [
        { key: "A", text: t`$0.11\ \mathrm{J\,K^{-1}\,mol^{-1}}$`, correct: false, misconceptionId: "C10-M2", value: "0.110000000000000" },
        { key: "B", text: t`$495\ \mathrm{J\,K^{-1}\,mol^{-1}}$`, correct: false, misconceptionId: "C10-M3", value: "495" },
        { key: "C", text: t`$110\ \mathrm{J\,K^{-1}\,mol^{-1}}$`, correct: true, value: "110" },
        { key: "D", text: t`$-110\ \mathrm{J\,K^{-1}\,mol^{-1}}$`, correct: false, misconceptionId: "C10-M1", value: "-110" },
      ],
      solution: {
        steps: [
          t`At the boiling point vaporisation is reversible: $\Delta S = \dfrac{\Delta_{vap} H}{T}$.`,
          t`$\Delta S = \dfrac{38600}{351}$ $= 110\ \mathrm{J\,K^{-1}\,mol^{-1}}$, positive as a gas forms.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.2 (vi)" },
      stem: t`By the second law of thermodynamics, a process is spontaneous when`,
      verify: { kind: "value", inputs: {  }, params: { ask: "second_law" } },
      options: [
        { key: "A", text: t`$\Delta S_{total} > 0$`, correct: true, value: "total_positive" },
        { key: "B", text: t`$\Delta S_{sys} > 0$`, correct: false, misconceptionId: "C10-M4", value: "system_positive" },
        { key: "C", text: t`$\Delta H < 0$`, correct: false, misconceptionId: "C10-M5", value: "enthalpy_negative" },
        { key: "D", text: t`$\Delta S_{total} = 0$`, correct: false, misconceptionId: "C10-M6", value: "total_zero" },
      ],
      solution: {
        steps: [
          t`The second law counts the system and its surroundings together.`,
          t`A spontaneous process increases the total entropy: $\Delta S_{total} > 0$.`,
        ],
      },
    },
  ],
};
