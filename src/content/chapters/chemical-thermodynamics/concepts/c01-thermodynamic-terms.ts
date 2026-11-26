import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A bucket of sea water and a cupful scooped from it: which has the higher temperature, the higher density, the larger volume?`,
    reveal: t`Only the volume differs. Temperature and density do not depend on how much water you take; volume does.`,
  },
  explanation: {
    intuition: [
      t`The part of the universe we study is the **system**; everything else is its **surroundings**.`,
      t`Energy, and sometimes matter, can cross the **boundary** between the two.`,
      t`The **state** of a system is fixed by properties such as $P$, $V$, $T$ and amount.`,
      t`Some properties add up when you take more matter; others stay the same.`,
      t`A **state function** depends only on the state, not on how the system got there.`,
    ],
    formal: [
      {
        title: "Types of systems",
        points: [
          t`An **open system** exchanges both matter and energy with its surroundings: water boiling in an open pan.`,
          t`A **closed system** exchanges energy but not matter: hot water in a sealed flask.`,
          t`An **isolated system** exchanges neither matter nor energy: hot coffee in an ideal thermos flask.`,
        ],
      },
      {
        title: "Intensive and extensive properties",
        points: [
          t`An **extensive property** depends on the amount of matter: mass, volume, internal energy, heat capacity.`,
          t`Extensive properties add up: two $1\ \mathrm{L}$ samples make $2\ \mathrm{L}$.`,
          t`An **intensive property** does not depend on the amount: temperature, pressure, density, boiling point.`,
          t`Two samples at $300\ \mathrm{K}$ poured together are still at $300\ \mathrm{K}$, not $600\ \mathrm{K}$.`,
          t`A ratio of two extensive properties is intensive, like density $\rho = \dfrac{m}{V}$.`,
          t`Double the sample and both $m$ and $V$ double, so their ratio stays the same.`,
        ],
      },
      {
        title: "State and path functions",
        points: [
          t`A **state function** has a value fixed by the state alone: $P$, $V$, $T$, $U$, $H$, $S$, $G$.`,
          t`Its change depends only on the initial and final states: $\Delta U = U_2 - U_1$.`,
          t`A **path function** depends on the route taken: heat $Q$ and work $W$ are path functions.`,
          t`Their sum $Q + W$ equals $\Delta U$ (the first law), so it is the same on every path.`,
          t`Combinations of state functions, like $G = H - TS$, are also state functions.`,
        ],
      },
      {
        title: "Thermodynamic processes",
        points: [
          t`**Isothermal**: the temperature stays constant, $\Delta T = 0$.`,
          t`**Isobaric**: the pressure stays constant, $\Delta P = 0$.`,
          t`**Isochoric**: the volume stays constant, $\Delta V = 0$.`,
          t`**Adiabatic**: no heat enters or leaves the system, $Q = 0$.`,
          t`**Reversible**: carried out in infinitely small steps, so it can be reversed at any stage.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which of these are intensive: volume, pressure, internal energy, molar volume $V/n$?`,
      steps: [
        t`Volume doubles when the amount doubles: extensive.`,
        t`Pressure is the same in every part of a gas: intensive.`,
        t`Internal energy doubles with the amount: extensive.`,
        t`Molar volume is volume over moles, a ratio of two extensive properties: intensive.`,
      ],
      answer: t`Pressure and molar volume`,
    },
    visualSpec: t`Drag two samples together and watch which property bars add up and which stay level.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks every property grows with the amount of matter: a bigger sample is hotter or denser.",
      remediation: "Only extensive properties grow with the amount. Temperature, pressure and density are the same in a drop and in a bucket.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Takes a ratio of two extensive properties, like density, as extensive.",
      remediation: "When the amount changes, both parts of the ratio change in the same proportion, so the ratio is intensive.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Swaps the definitions: calls a property that does not depend on the amount extensive.",
      remediation: "**Ex**tensive properties depend on the **ex**tent (amount) of matter; intensive ones do not.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Takes heat $Q$ and work $W$ as state functions.`,
      remediation: t`$Q$ and $W$ depend on the path taken; only their sum $Q + W = \Delta U$ is fixed by the end states.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Thinks $Q + W$ cannot be a state function because $Q$ and $W$ are path functions.`,
      remediation: t`By the first law $Q + W = \Delta U$, so it is the same on every path, even though $Q$ and $W$ alone are not.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Thinks only measured properties like $P$, $V$, $T$ are state functions, not $U$, $H$ or $G$.`,
      remediation: t`Internal energy $U$, enthalpy $H$ and $G = H - TS$ are fixed by the state too: they are state functions.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.1 (viii)" },
      stem: t`Which of the following are **not** state functions? 1. $Q + W$, 2. $Q$, 3. $W$, 4. $H - TS$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "not_state" } },
      options: [
        { key: "A", text: t`2 and 3`, correct: true, value: "two_and_three" },
        { key: "B", text: t`None of them`, correct: false, misconceptionId: "C01-M4", value: "none_of_them" },
        { key: "C", text: t`1, 2 and 3`, correct: false, misconceptionId: "C01-M5", value: "one_two_three" },
        { key: "D", text: t`1, 2, 3 and 4`, correct: false, misconceptionId: "C01-M6", value: "all_four" },
      ],
      solution: {
        steps: [
          t`$Q$ and $W$ depend on the path: they are not state functions.`,
          t`$Q + W = \Delta U$ and $H - TS = G$ depend only on the state.`,
          t`So 2 and 3 are not state functions.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chem-thermodynamics-12-pyq#12" },
      stem: t`The specific heat of a substance is the heat needed to raise the temperature of $1\ \mathrm{g}$ of it by $1\ \mathrm{K}$. Specific heat is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "specific_heat" } },
      options: [
        { key: "A", text: t`Intensive: heat capacity and mass change in the same ratio`, correct: true, value: "intensive_same_ratio" },
        { key: "B", text: t`Extensive: a larger sample has a larger specific heat`, correct: false, misconceptionId: "C01-M1", value: "extensive_grows" },
        { key: "C", text: t`Extensive: it is heat capacity divided by mass, both extensive`, correct: false, misconceptionId: "C01-M2", value: "extensive_ratio" },
        { key: "D", text: t`Extensive: it does not depend on the amount of matter`, correct: false, misconceptionId: "C01-M3", value: "extensive_swapped" },
      ],
      solution: {
        steps: [
          t`Heat capacity and mass are both extensive: double the sample and both double.`,
          t`Specific heat is their ratio, so it stays the same: it is intensive.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.1 (viii)" },
      stem: t`A gas is taken from state A to state B along two different paths. Which of $\Delta U$, $Q + W$, $Q$ and $W$ have the same value along both paths?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "same_paths" } },
      options: [
        { key: "A", text: t`$\Delta U$ only`, correct: false, misconceptionId: "C01-M5", value: "dU_only" },
        { key: "B", text: t`None of them`, correct: false, misconceptionId: "C01-M6", value: "none_same" },
        { key: "C", text: t`$\Delta U$ and $Q + W$ only`, correct: true, value: "dU_and_QW" },
        { key: "D", text: t`All four`, correct: false, misconceptionId: "C01-M4", value: "all_four_same" },
      ],
      solution: {
        steps: [
          t`$\Delta U$ depends only on the states A and B.`,
          t`$Q + W = \Delta U$, so it is also the same on both paths.`,
          t`$Q$ and $W$ separately depend on the path. So only $\Delta U$ and $Q + W$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.3 (viii)" },
      stem: t`Density, $\rho = \dfrac{m}{V}$, of water at a given temperature is`,
      verify: { kind: "value", inputs: {  }, params: { ask: "density" } },
      options: [
        { key: "A", text: t`Intensive: mass and volume change in the same ratio`, correct: true, value: "intensive_same_ratio" },
        { key: "B", text: t`Extensive: a larger sample is denser`, correct: false, misconceptionId: "C01-M1", value: "extensive_grows" },
        { key: "C", text: t`Extensive: it is mass divided by volume, both extensive`, correct: false, misconceptionId: "C01-M2", value: "extensive_ratio" },
        { key: "D", text: t`Extensive: it does not depend on the amount of matter`, correct: false, misconceptionId: "C01-M3", value: "extensive_swapped" },
      ],
      solution: {
        steps: [
          t`Mass and volume are both extensive and change in the same ratio.`,
          t`So $\rho = \dfrac{m}{V}$ is the same for any amount of water: intensive.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-chem/Ex Q.1 (viii)" },
      stem: t`Which of the following are state functions? 1. pressure $P$, 2. enthalpy $H$, 3. heat $Q$, 4. $Q + W$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "state_list" } },
      options: [
        { key: "A", text: t`1, 2 and 4`, correct: true, value: "one_two_four" },
        { key: "B", text: t`1, 2, 3 and 4`, correct: false, misconceptionId: "C01-M4", value: "all_four_state" },
        { key: "C", text: t`1 and 2`, correct: false, misconceptionId: "C01-M5", value: "one_and_two" },
        { key: "D", text: t`1 only`, correct: false, misconceptionId: "C01-M6", value: "one_only" },
      ],
      solution: {
        steps: [
          t`Pressure and enthalpy are fixed by the state: state functions.`,
          t`Heat $Q$ depends on the path, but $Q + W = \Delta U$ does not.`,
          t`So 1, 2 and 4 are state functions.`,
        ],
      },
    },
  ],
};
