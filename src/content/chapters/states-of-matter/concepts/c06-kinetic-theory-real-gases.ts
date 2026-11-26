import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Carbon dioxide can be liquefied by pressure in a fire extinguisher, but squeezing hydrogen at room temperature never makes it liquid. Why not?`,
    reveal: t`Every gas has a critical temperature above which no pressure can liquefy it. Room temperature is below $\ce{CO2}$'s but far above hydrogen's.`,
  },
  explanation: {
    intuition: [
      t`Kinetic theory pictures a gas as tiny molecules in constant random motion.`,
      t`It assumes they take up no space and do not attract each other.`,
      t`Real molecules do both, so real gases deviate from ideal behaviour.`,
      t`Deviations are largest when molecules are pushed close together.`,
    ],
    formal: [
      {
        title: "Kinetic theory postulates",
        points: [
          t`Molecules' own volume is negligible compared with the gas volume.`,
          t`No attractive forces between molecules.`,
          t`Molecules move randomly; collisions are perfectly elastic.`,
          t`Average kinetic energy is proportional to kelvin temperature.`,
        ],
      },
      {
        title: "Real gases",
        points: [
          t`Deviate most at high pressure and low temperature.`,
          t`Critical temperature $T_c$: above it a gas cannot be liquefied by pressure.`,
          t`Water: $T_c$ = 647.1 K, $P_c$ = 220.6 bar.`,
        ],
      },
    ],
    worked: {
      prompt: t`$\ce{CO2}$ has $T_c$ = 31 °C. Can it be liquefied at 50 °C by pressure?`,
      steps: [
        t`50 °C is above $T_c$.`,
        t`No pressure can liquefy it there.`,
      ],
      answer: t`No`,
    },
    visualSpec: t`Crowd gas molecules together and see their size and attractions start to matter.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Says the forces are small.",
      remediation: "Ideal gases are defined as having no forces at all.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says the forces are large.",
      remediation: "Ideal gas molecules do not attract at all.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says they are the same as in real gases.",
      remediation: "Real gases have attractions; ideal gases do not.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Gives strong attractions.",
      remediation: "Kinetic theory assumes no attractions.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Makes collisions lose energy.",
      remediation: "Collisions are perfectly elastic.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Puts molecules at rest.",
      remediation: "Molecules move constantly and randomly.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Swaps the conditions.",
      remediation: "Low pressure and high temperature make gases most ideal.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Says low pressure and low temperature.",
      remediation: "High pressure crowds molecules; both conditions matter.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Says high pressure and high temperature.",
      remediation: "High temperature keeps molecules moving fast, reducing deviations.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Puts water above its critical temperature.",
      remediation: "373 K is below 647.1 K.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks pressure alone liquefies any gas.",
      remediation: t`Above $T_c$ no pressure can liquefy a gas.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: t`Limits $T_c$ to $\ce{CO2}$.`,
      remediation: "Every gas has a critical temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: t`Calls $T_c$ the boiling point.`,
      remediation: t`Boiling point depends on pressure; $T_c$ is a fixed limit.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Calls it the ideal temperature.",
      remediation: t`$T_c$ is the highest temperature for liquefaction.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Calls it the lowest temperature.",
      remediation: t`$T_c$ is the highest temperature at which a gas can be liquefied.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.1 (D)" },
      stem: t`In an ideal gas, the forces between molecules are`,
      verify: { kind: "value", inputs: {  }, params: { q: "ideal_forces" } },
      options: [
        { key: "A", text: t`small`, correct: false, misconceptionId: "C06-M1", value: "small" },
        { key: "B", text: t`nil`, correct: true, value: "nil" },
        { key: "C", text: t`the same as in real gases`, correct: false, misconceptionId: "C06-M3", value: "same_as_real" },
        { key: "D", text: t`large`, correct: false, misconceptionId: "C06-M2", value: "large" },
      ],
      solution: {
        steps: [
          t`An ideal gas follows kinetic theory exactly.`,
          t`No intermolecular forces.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.4 (D)" },
      stem: t`Which is a postulate of the kinetic theory of gases?`,
      verify: { kind: "value", inputs: {  }, params: { q: "postulate" } },
      options: [
        { key: "A", text: t`collisions between molecules lose energy`, correct: false, misconceptionId: "C06-M5", value: "inelastic" },
        { key: "B", text: t`the molecules attract each other strongly`, correct: false, misconceptionId: "C06-M4", value: "strong_attraction" },
        { key: "C", text: t`the molecules' own volume is negligible compared with the gas's volume`, correct: true, value: "negligible_volume" },
        { key: "D", text: t`the molecules are at rest`, correct: false, misconceptionId: "C06-M6", value: "at_rest" },
      ],
      solution: {
        steps: [
          t`Molecules are treated as points.`,
          t`Their own volume is negligible.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Ex Q.3 (K)" },
      stem: t`Real gases deviate most from ideal behaviour at`,
      verify: { kind: "value", inputs: {  }, params: { q: "deviate" } },
      options: [
        { key: "A", text: t`high pressure and high temperature`, correct: false, misconceptionId: "C06-M9", value: "high_p_high_t" },
        { key: "B", text: t`low pressure and high temperature`, correct: false, misconceptionId: "C06-M7", value: "low_p_high_t" },
        { key: "C", text: t`low pressure and low temperature`, correct: false, misconceptionId: "C06-M8", value: "low_p_low_t" },
        { key: "D", text: t`high pressure and low temperature`, correct: true, value: "high_p_low_t" },
      ],
      solution: {
        steps: [
          t`High pressure crowds molecules; low temperature slows them.`,
          t`Attractions and size then matter.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Solved Ex.10.5b" },
      stem: t`Water has a critical temperature of 647.1 K. At 373 K, water vapour`,
      verify: { kind: "value", inputs: {  }, params: { q: "water_tc" } },
      options: [
        { key: "A", text: t`can be liquefied by pressure, being below its critical temperature`, correct: true, value: "below_tc" },
        { key: "B", text: t`has no critical temperature: only $\ce{CO2}$ has one`, correct: false, misconceptionId: "C06-M12", value: "only_co2" },
        { key: "C", text: t`cannot be liquefied, being above its critical temperature`, correct: false, misconceptionId: "C06-M10", value: "above_tc" },
        { key: "D", text: t`can be liquefied at any temperature by pressure alone`, correct: false, misconceptionId: "C06-M11", value: "pressure_alone" },
      ],
      solution: {
        steps: [
          t`373 K is below 647.1 K.`,
          t`Pressure can liquefy it.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/states-of-matter-11-chem/Solved Ex.10.6" },
      stem: t`The critical temperature of a gas is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tc_define" } },
      options: [
        { key: "A", text: t`its boiling point`, correct: false, misconceptionId: "C06-M13", value: "boiling_point" },
        { key: "B", text: t`the temperature above which it cannot be liquefied, however great the pressure`, correct: true, value: "no_liquefaction_above" },
        { key: "C", text: t`the temperature at which it becomes ideal`, correct: false, misconceptionId: "C06-M14", value: "becomes_ideal" },
        { key: "D", text: t`the lowest temperature it can reach`, correct: false, misconceptionId: "C06-M15", value: "lowest" },
      ],
      solution: {
        steps: [
          t`Above $T_c$, molecules move too fast to condense.`,
          t`No pressure can liquefy the gas.`,
        ],
      },
    },
  ],
};
