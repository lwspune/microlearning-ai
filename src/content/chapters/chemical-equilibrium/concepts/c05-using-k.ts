import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`A chemist mixes some reactants and products and wants to know: will the mixture react forward, backward, or not at all? Is there a quick test?`,
    reveal: t`Calculate $Q$, the same ratio as K but with the current concentrations, and compare it with K.`,
  },
  explanation: {
    intuition: [
      t`The size of K tells how far a reaction goes.`,
      t`Large K: mostly products; small K: mostly reactants.`,
      t`$Q$ compared with K tells the direction a mixture will move.`,
      t`K and starting amounts give the equilibrium amounts.`,
    ],
    formal: [
      {
        title: "Size of K",
        points: [
          t`$K > 10^3$: nearly complete; $K < 10^{-3}$: hardly any reaction.`,
          t`In between: appreciable amounts of both.`,
          t`$K = k_f / k_r$.`,
        ],
      },
      {
        title: "Reaction quotient",
        points: [
          t`$Q$: K's expression with current concentrations.`,
          t`$Q < K$: goes forward; $Q > K$: goes backward; $Q = K$: at equilibrium.`,
        ],
      },
    ],
    worked: {
      prompt: t`For $\ce{H2 + I2 <=> 2HI}$, $K = 54$. A mixture has $Q = 20$. Which way will it go?`,
      steps: [
        t`$Q < K$.`,
        t`More products must form: forward.`,
      ],
      answer: t`Forward`,
    },
    visualSpec: t`Place $Q$ on a number line beside K and see which way the mixture must move.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks a large K means mostly reactants.",
      remediation: "K has products on top: large K means mostly products.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks a large K means a fast reaction.",
      remediation: "K tells how far, not how fast.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks it means equal amounts.",
      remediation: "K far above 1 means products dominate.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Goes backward.",
      remediation: t`$Q < K$: too few products; the reaction goes forward.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks it is at equilibrium.",
      remediation: t`Equilibrium needs $Q = K$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks it stops.",
      remediation: t`It moves forward until $Q = K$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: t`Inverts $Q$.`,
      remediation: "Products over reactants.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Drops the powers.",
      remediation: "Raise each concentration to its coefficient.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Multiplies by the coefficients.",
      remediation: "Coefficients are powers, not factors.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: t`Divides $k_r$ by K.`,
      remediation: t`$k_f = K \times k_r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: t`Takes $k_f$ = K.`,
      remediation: t`$K = k_f/k_r$, so multiply by $k_r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: t`Divides K by $k_r$.`,
      remediation: t`$k_f = K \times k_r$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Says the rate.",
      remediation: "K gives amounts at equilibrium, not rates.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Says activation energy.",
      remediation: "K says nothing about the energy barrier.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Says the time taken.",
      remediation: "K gives amounts at equilibrium, not timing.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (E)" },
      stem: t`A reaction has $K = 10^{30}$. This means`,
      verify: { kind: "value", inputs: {  }, params: { q: "large_k" } },
      options: [
        { key: "A", text: t`reactants and products are equal`, correct: false, misconceptionId: "C05-M3", value: "equal_amounts" },
        { key: "B", text: t`it is very fast`, correct: false, misconceptionId: "C05-M2", value: "fast" },
        { key: "C", text: t`mostly reactants remain`, correct: false, misconceptionId: "C05-M1", value: "mostly_reactants" },
        { key: "D", text: t`it goes almost to completion: mostly products`, correct: true, value: "mostly_products" },
      ],
      solution: {
        steps: [
          t`K is enormous.`,
          t`Products dominate: nearly complete.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (E)" },
      stem: t`If the reaction quotient $Q$ is less than $K$, the reaction`,
      verify: { kind: "value", inputs: {  }, params: { q: "q_less" } },
      options: [
        { key: "A", text: t`goes forward, forming more products`, correct: true, value: "forward" },
        { key: "B", text: t`is already at equilibrium`, correct: false, misconceptionId: "C05-M5", value: "at_equilibrium" },
        { key: "C", text: t`stops`, correct: false, misconceptionId: "C05-M6", value: "stops" },
        { key: "D", text: t`goes backward`, correct: false, misconceptionId: "C05-M4", value: "backward" },
      ],
      solution: {
        steps: [
          t`$Q < K$: too few products.`,
          t`The reaction goes forward.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`For $\ce{N2 + 3H2 <=> 2NH3}$, a mixture has $[\ce{N2}] = 1$, $[\ce{H2}] = 1$ and $[\ce{NH3}] = 2$ M. Find $Q$.`,
      verify: { kind: "value", inputs: { n2: "1", h2: "1", nh3: "2" }, params: { q: "quotient" } },
      options: [
        { key: "A", text: t`$0.25$`, correct: false, misconceptionId: "C05-M7", value: "0.250000000000000" },
        { key: "B", text: t`$4$`, correct: true, value: "4" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C05-M8", value: "2" },
        { key: "D", text: t`$1.33$`, correct: false, misconceptionId: "C05-M9", value: "1.33000000000000" },
      ],
      solution: {
        steps: [
          t`$Q = [\ce{NH3}]^2/([\ce{N2}][\ce{H2}]^3)$.`,
          t`$= 4/(1 \times 1) = 4$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Solved Ex.12.6" },
      stem: t`For $\ce{H2 + I2 <=> 2HI}$, $K_c = 54.0$ and the backward rate constant $k_r = 1.16 \times 10^{-3}$. Find $k_f$.`,
      verify: { kind: "value", inputs: { K: "54.0", kr: "1.16e-3" }, params: { q: "kf" } },
      options: [
        { key: "A", text: t`$54$`, correct: false, misconceptionId: "C05-M11", value: "54" },
        { key: "B", text: t`$46600$`, correct: false, misconceptionId: "C05-M12", value: "46600" },
        { key: "C", text: t`$0.0626$`, correct: true, value: "0.0626000000000000" },
        { key: "D", text: t`$2.15 \times 10^{-5}$`, correct: false, misconceptionId: "C05-M10", value: "2.15000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$k_f = K_c \times k_r$.`,
          t`$54.0 \times 1.16 \times 10^{-3} = 0.0626$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-equilibrium-11-chem/Ex Q.2 (E)" },
      stem: t`From $K$ and the starting amounts one can calculate`,
      verify: { kind: "value", inputs: {  }, params: { q: "use" } },
      options: [
        { key: "A", text: t`the time taken to reach equilibrium`, correct: false, misconceptionId: "C05-M15", value: "time" },
        { key: "B", text: t`the rate of the reaction`, correct: false, misconceptionId: "C05-M13", value: "rate" },
        { key: "C", text: t`the activation energy`, correct: false, misconceptionId: "C05-M14", value: "activation_energy" },
        { key: "D", text: t`the equilibrium concentrations`, correct: true, value: "equilibrium_conc" },
      ],
      solution: {
        steps: [
          t`K fixes the equilibrium ratio.`,
          t`With starting amounts, it gives equilibrium concentrations.`,
        ],
      },
    },
  ],
};
