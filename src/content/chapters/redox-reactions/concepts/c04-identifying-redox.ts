import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Mixing barium chloride and sulfuric acid gives a dramatic white precipitate. Is anything oxidised?`,
    reveal: t`No. Every element keeps its oxidation number; ions just swap partners. Only a change in oxidation number marks a redox reaction.`,
  },
  explanation: {
    intuition: [
      t`Assign oxidation numbers to every element on both sides.`,
      t`If any change, the reaction is redox.`,
      t`A rise means oxidation, a fall reduction.`,
      t`Precipitation and neutralisation usually involve no change.`,
    ],
    formal: [
      {
        title: "Testing for redox",
        points: [
          t`Compare each element's oxidation number before and after.`,
          t`The species whose number rises is oxidised: it is the reducing agent.`,
          t`The species whose number falls is reduced: it is the oxidising agent.`,
          t`$\ce{CH4 + 2O2 -> CO2 + 2H2O}$: C rises −4 → +4; O falls 0 → −2.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is $\ce{CuO + H2 -> Cu + H2O}$ a redox reaction?`,
      steps: [
        t`Cu: +2 → 0 (reduced); H: 0 → +1 (oxidised).`,
        t`Numbers change: yes.`,
      ],
      answer: t`Yes; $\ce{H2}$ is the reducing agent`,
    },
    visualSpec: t`Write oxidation numbers above each element and draw arrows for the ones that change.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks a precipitate means redox.",
      remediation: "Ions swap partners; no oxidation number changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks neutralisation is redox.",
      remediation: "H stays +1 and O −2 throughout.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: "Thinks decomposition is always redox.",
      remediation: t`Ca, C and O keep their numbers in $\ce{CaCO3}$ decomposition.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Picks the oxide as the reductant.",
      remediation: t`In $\ce{Cu2O}$ only Cu changes, and it is reduced.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Picks a product metal.",
      remediation: t`Agents are reactants; S in $\ce{Cu2S}$ is oxidised.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: "Picks a product oxide.",
      remediation: t`$\ce{SO2}$ is formed; $\ce{Cu2S}$ supplied the electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Reverses which is oxidised.",
      remediation: "Zn goes 0 → +2: Zn is oxidised.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Thinks the spectator ion changes.",
      remediation: t`$\ce{SO4^{2-}}$ is unchanged.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Picks a product.",
      remediation: t`Cu is formed by reduction of $\ce{Cu^{2+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Swaps both process and agent.",
      remediation: "A rise is oxidation, and the species is the reducing agent.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Swaps the agent.",
      remediation: "The species oxidised reduces the other: reducing agent.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Swaps the process.",
      remediation: "A rise in oxidation number is oxidation.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Starts carbon at 0 and stops at +2.",
      remediation: "Elemental C is 0, and CO is +2; methane is −4.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Picks a +4 to +2 change.",
      remediation: t`In $\ce{CO2 + C}$, C goes +4 → +2 and 0 → +2.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Starts carbon at 0.",
      remediation: "Elemental carbon is 0; carbon is −4 only in methane.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.1 (B)" },
      stem: t`Which of these is a redox reaction?`,
      verify: { kind: "value", inputs: {  }, params: { q: "is_redox" } },
      options: [
        { key: "A", text: t`$\ce{NaOH + HCl}$ $\ce{-> NaCl + H2O}$`, correct: false, misconceptionId: "C04-M2", value: "naoh_hcl" },
        { key: "B", text: t`$\ce{2K + F2 -> 2KF}$`, correct: true, value: "k_f2" },
        { key: "C", text: t`$\ce{CaCO3 -> CaO + CO2}$`, correct: false, misconceptionId: "C04-M3", value: "caco3" },
        { key: "D", text: t`$\ce{BaCl2 + H2SO4}$ $\ce{-> BaSO4 + 2HCl}$`, correct: false, misconceptionId: "C04-M1", value: "bacl2_h2so4" },
      ],
      solution: {
        steps: [
          t`K: 0 → +1; F: 0 → −1.`,
          t`Numbers change: redox.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (D)" },
      stem: t`In $\ce{2Cu2O + Cu2S}$ $\ce{-> 6Cu + SO2}$, the reducing agent is`,
      verify: { kind: "value", inputs: {  }, params: { q: "copper" } },
      options: [
        { key: "A", text: t`$\ce{Cu2O}$`, correct: false, misconceptionId: "C04-M4", value: "cu2o" },
        { key: "B", text: t`Cu`, correct: false, misconceptionId: "C04-M5", value: "cu" },
        { key: "C", text: t`$\ce{Cu2S}$`, correct: true, value: "cu2s" },
        { key: "D", text: t`$\ce{SO2}$`, correct: false, misconceptionId: "C04-M6", value: "so2" },
      ],
      solution: {
        steps: [
          t`S: −2 → +4, a rise.`,
          t`$\ce{Cu2S}$ is the reducing agent.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`In $\ce{Zn + CuSO4 -> ZnSO4 + Cu}$, the species oxidised is`,
      verify: { kind: "value", inputs: {  }, params: { q: "zinc" } },
      options: [
        { key: "A", text: t`$\ce{SO4^{2-}}$`, correct: false, misconceptionId: "C04-M8", value: "sulfate" },
        { key: "B", text: t`Cu`, correct: false, misconceptionId: "C04-M9", value: "cu_metal" },
        { key: "C", text: t`$\ce{Cu^{2+}}$`, correct: false, misconceptionId: "C04-M7", value: "cu2_ion" },
        { key: "D", text: t`Zn`, correct: true, value: "zn" },
      ],
      solution: {
        steps: [
          t`Zn: 0 → +2.`,
          t`Zn is oxidised.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Solved Ex.6.4" },
      stem: t`A species whose oxidation number rises in a reaction is`,
      verify: { kind: "value", inputs: {  }, params: { q: "rise" } },
      options: [
        { key: "A", text: t`oxidised, and it is the reducing agent`, correct: true, value: "oxidised_reductant" },
        { key: "B", text: t`oxidised, and it is the oxidising agent`, correct: false, misconceptionId: "C04-M11", value: "oxidised_oxidant" },
        { key: "C", text: t`reduced, and it is the reducing agent`, correct: false, misconceptionId: "C04-M12", value: "reduced_reductant" },
        { key: "D", text: t`reduced, and it is the oxidising agent`, correct: false, misconceptionId: "C04-M10", value: "reduced_oxidant" },
      ],
      solution: {
        steps: [
          t`A rise is oxidation.`,
          t`The species oxidised is the reducing agent.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (A)" },
      stem: t`In which reaction does carbon's oxidation number change from −4 to +4?`,
      verify: { kind: "value", inputs: {  }, params: { q: "carbon" } },
      options: [
        { key: "A", text: t`$\ce{C + O2 -> CO2}$`, correct: false, misconceptionId: "C04-M15", value: "c_o2" },
        { key: "B", text: t`$\ce{CH4 + 2O2}$ $\ce{-> CO2 + 2H2O}$`, correct: true, value: "methane_burns" },
        { key: "C", text: t`$\ce{2C + O2 -> 2CO}$`, correct: false, misconceptionId: "C04-M13", value: "c_to_co" },
        { key: "D", text: t`$\ce{CO2 + C -> 2CO}$`, correct: false, misconceptionId: "C04-M14", value: "co2_c" },
      ],
      solution: {
        steps: [
          t`C is −4 in $\ce{CH4}$ and +4 in $\ce{CO2}$.`,
          t`Burning methane.`,
        ],
      },
    },
  ],
};
