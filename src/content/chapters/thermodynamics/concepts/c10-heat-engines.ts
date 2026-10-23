import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "draft",
  hook: {
    prompt: t`A car engine burns fuel to make heat, yet its exhaust and radiator pour much of that heat out into the air. Why can't a better design turn all of it into work?`,
    reveal: t`No engine working in cycles can do that. It must reject some heat to something colder: the **second law of thermodynamics**.`,
  },
  explanation: {
    intuition: [
      t`A **heat engine** works in cycles, turning heat into work.`,
      t`Each cycle it takes heat $Q_H$ from a hot reservoir and does work $W$.`,
      t`It must reject the rest, $Q_C$, to a cold reservoir: $W = Q_H - Q_C$.`,
      t`Its **efficiency** is the fraction of the heat taken in that becomes work: $\eta = \dfrac{W}{Q_H}$.`,
      t`The **second law** says no engine can reach $\eta = 1$: some heat always goes to the cold reservoir.`,
    ],
    formal: [
      {
        title: "Heat engines",
        points: [
          t`A heat engine has a working substance taken round a cycle between a hot and a cold reservoir.`,
          t`Over a cycle $\Delta U = 0$, so the work done is $W = Q_H - Q_C$.`,
          t`**Efficiency**: $\eta = \dfrac{W}{Q_H} = 1 - \dfrac{Q_C}{Q_H}$.`,
          t`Since $Q_C$ can never be zero, $\eta < 1$; car engines reach only about $30\%$.`,
        ],
      },
      {
        title: "The second law",
        points: [
          t`**Kelvin–Planck**: no engine working in a cycle can turn all the heat it takes in into work.`,
          t`**Clausius**: heat cannot flow by itself from a colder body to a hotter one.`,
          t`The two statements are equivalent: if one could be broken, so could the other.`,
          t`The first law says energy is conserved; the second says which way heat and energy flow.`,
          t`What limits an engine is the temperatures of its reservoirs, not just friction.`,
        ],
      },
    ],
    worked: {
      prompt: t`A heat engine takes in $5000\ \mathrm{J}$ from its hot reservoir each cycle and has an efficiency of $20\%$. How much work does it do, and how much heat does it reject, per cycle?`,
      steps: [
        t`$\eta = \dfrac{W}{Q_H}$, so $W = \eta Q_H$.`,
        t`$W = 0.20 \times 5000 = 1000\ \mathrm{J}$.`,
        t`Over a cycle, $Q_C = Q_H - W$.`,
        t`$Q_C = 5000 - 1000 = 4000\ \mathrm{J}$ rejected to the cold reservoir.`,
      ],
      answer: t`$W = 1000\ \mathrm{J}$, $Q_C = 4000\ \mathrm{J}$`,
    },
    visualSpec: t`Run an engine between a hot and a cold reservoir and watch each cycle's heat split into a work arrow and a rejected-heat arrow.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Thinks the second law forbids heat flowing from hot to cold.",
      remediation: "Heat flows from hot to cold by itself. The second law rules out the reverse without work.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Thinks the second law forbids turning heat into work at all.",
      remediation: "Engines do turn heat into work; the second law only rules out turning **all** of it into work.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Thinks the second law forbids refrigerators.",
      remediation: "A refrigerator moves heat from cold to hot using work. Only doing it **by itself**, with no work, is ruled out.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Takes the efficiency as $\dfrac{Q_C}{Q_H}$.`,
      remediation: t`$\dfrac{Q_C}{Q_H}$ is the fraction wasted. Efficiency is $\dfrac{W}{Q_H} = 1 - \dfrac{Q_C}{Q_H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Divides the work by the heat rejected.",
      remediation: t`Efficiency compares the work with the heat **taken in**: $\eta = \dfrac{W}{Q_H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Divides the work by all the heat exchanged.",
      remediation: t`Only the heat taken in from the hot reservoir counts: $\eta = \dfrac{W}{Q_H}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Multiplies by the efficiency instead of dividing.",
      remediation: t`$\eta = \dfrac{W}{Q_H}$, so $Q_H = \dfrac{W}{\eta}$, which is larger than $W$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Gives the heat rejected instead of the heat taken in.",
      remediation: t`$Q_H = \dfrac{W}{\eta}$ is the heat taken in; $Q_H - W$ is what is rejected.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Thinks only friction limits an engine's efficiency.",
      remediation: t`Even a perfect, frictionless engine must reject heat to its cold reservoir: $\eta < 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Thinks the fuel burned limits an engine's efficiency.",
      remediation: "More fuel gives more heat and more work, but the same fraction of it can become work.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Thinks an engine's size limits its efficiency.",
      remediation: "Efficiency is a fraction; the reservoir temperatures limit it, not the engine's size.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Mixes up the second law with the first.",
      remediation: "Energy conservation is the first law. The second law is about which way heat flows.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C10-M13",
      mistake: t`Uses $1 - \eta$ for the efficiency.`,
      remediation: t`$\eta$ itself is the fraction that becomes work: $Q_H = \dfrac{W}{\eta}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.1 (iv)" },
      stem: t`Which of these does the second law of thermodynamics rule out?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "forbids" } },
      options: [
        { key: "A", text: t`Heat flowing by itself from a hot body to a cold one`, correct: false, misconceptionId: "C10-M1", value: "hot_to_cold" },
        { key: "B", text: t`An engine that turns part of the heat it takes in into work, rejecting the rest`, correct: false, misconceptionId: "C10-M2", value: "partial_engine" },
        { key: "C", text: t`A refrigerator using work to move heat from a cold body to a hot one`, correct: false, misconceptionId: "C10-M3", value: "refrigerator" },
        { key: "D", text: t`An engine that turns all the heat it takes in into work`, correct: true, value: "all_heat_to_work" },
      ],
      solution: {
        steps: [
          t`Kelvin–Planck: no cyclic engine can turn all the heat it takes in into work.`,
          t`Heat flowing from hot to cold, ordinary engines and refrigerators driven by work are all allowed.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`In each cycle, a heat engine takes in $2000\ \mathrm{J}$ of heat from its hot reservoir and rejects $1400\ \mathrm{J}$ to its cold reservoir. What is its efficiency?`,
      verify: { kind: "value", inputs: { Q_H: "2000", Q_C: "1400" }, params: { ask: "eta" } },
      options: [
        { key: "A", text: t`$30\%$`, correct: true, value: "0.300000000000000" },
        { key: "B", text: t`$70\%$`, correct: false, misconceptionId: "C10-M4", value: "0.700000000000000" },
        { key: "C", text: t`$42.9\%$`, correct: false, misconceptionId: "C10-M5", value: "0.429000000000000" },
        { key: "D", text: t`$17.6\%$`, correct: false, misconceptionId: "C10-M6", value: "0.176000000000000" },
      ],
      solution: {
        steps: [
          t`$W = Q_H - Q_C = 2000 - 1400 = 600\ \mathrm{J}$.`,
          t`$\eta = \dfrac{W}{Q_H} = \dfrac{600}{2000} = 0.30 = 30\%$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`A heat engine of efficiency $25\%$ does $200\ \mathrm{J}$ of work in each cycle. How much heat does it take in from its hot reservoir per cycle?`,
      verify: { kind: "value", inputs: { eta: "0.25", W: "200" }, params: { ask: "Q_H" } },
      options: [
        { key: "A", text: t`$267\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M13", value: "267" },
        { key: "B", text: t`$800\ \mathrm{J}$`, correct: true, value: "800" },
        { key: "C", text: t`$50\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M7", value: "50" },
        { key: "D", text: t`$600\ \mathrm{J}$`, correct: false, misconceptionId: "C10-M8", value: "600" },
      ],
      solution: {
        steps: [
          t`$\eta = \dfrac{W}{Q_H}$, so $Q_H = \dfrac{W}{\eta}$.`,
          t`$Q_H = \dfrac{200}{0.25} = 800\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/thermodynamics-12-phy/Ex Q.2 (iv)" },
      stem: t`What sets the limit on the efficiency of a heat engine?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "limit" } },
      options: [
        { key: "A", text: t`How much fuel it burns each cycle`, correct: false, misconceptionId: "C10-M10", value: "fuel_burned" },
        { key: "B", text: t`How big the engine is`, correct: false, misconceptionId: "C10-M11", value: "engine_size" },
        { key: "C", text: t`The temperatures of its hot and cold reservoirs: it must always reject some heat`, correct: true, value: "reservoir_temperatures" },
        { key: "D", text: t`Only friction: a frictionless engine could reach $100\%$`, correct: false, misconceptionId: "C10-M9", value: "friction_only" },
      ],
      solution: {
        steps: [
          t`Every cyclic engine must reject some heat to its cold reservoir, so $\eta < 1$.`,
          t`How much it must reject depends on the reservoir temperatures, which set the limit.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`Which is Clausius's statement of the second law of thermodynamics?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "clausius" } },
      options: [
        { key: "A", text: t`Heat cannot flow by itself from a colder body to a hotter one`, correct: true, value: "not_cold_to_hot" },
        { key: "B", text: t`Heat cannot flow by itself from a hotter body to a colder one`, correct: false, misconceptionId: "C10-M1", value: "not_hot_to_cold" },
        { key: "C", text: t`Heat cannot be turned into work at all`, correct: false, misconceptionId: "C10-M2", value: "no_heat_to_work" },
        { key: "D", text: t`Energy can be neither created nor destroyed`, correct: false, misconceptionId: "C10-M12", value: "energy_conserved" },
      ],
      solution: {
        steps: [
          t`Clausius: heat cannot flow by itself from a colder body to a hotter one.`,
          t`To make it flow that way takes work, as in a refrigerator.`,
        ],
      },
    },
  ],
};
