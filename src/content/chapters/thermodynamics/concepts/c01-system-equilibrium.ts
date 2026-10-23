import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`A doctor's thermometer is left under your tongue for a minute before it is read. Why wait, and how does it tell your temperature at all?`,
    reveal: t`The thermometer and your body exchange heat until they reach the same temperature: **thermal equilibrium**. Only then does its reading equal your temperature.`,
  },
  explanation: {
    intuition: [
      t`Thermodynamics studies how heat and work change a chosen part of the world: the **system**.`,
      t`Everything outside it that can exchange energy with it is the **surroundings**.`,
      t`Left alone, a system settles into **equilibrium**: its pressure, temperature and composition stop changing.`,
      t`Two bodies in contact exchange heat until their temperatures match.`,
      t`That is why a thermometer works: it reaches your temperature, then shows its own.`,
    ],
    formal: [
      {
        title: "System and surroundings",
        points: [
          t`A **thermodynamic system** is a collection of a very large number of particles within a boundary, with definite pressure, volume and temperature.`,
          t`The **surroundings** are everything outside the system that can exchange energy with it.`,
          t`An **open system** exchanges both energy and matter with its surroundings: an open pan of boiling water.`,
          t`A **closed system** exchanges energy but not matter: a sealed pressure cooker.`,
          t`An **isolated system** exchanges neither: an ideal thermos flask.`,
        ],
      },
      {
        title: "Equilibrium and the zeroth law",
        points: [
          t`**Mechanical equilibrium**: no unbalanced forces, so the pressure is the same throughout and equals the surroundings'.`,
          t`**Chemical equilibrium**: no chemical reactions, so the composition stays the same.`,
          t`**Thermal equilibrium**: the temperature is the same throughout and equals the surroundings'.`,
          t`A system in all three is in **thermodynamic equilibrium**.`,
          t`**Zeroth law**: if two systems are each in thermal equilibrium with a third, they are in thermal equilibrium with each other.`,
        ],
      },
    ],
    worked: {
      prompt: t`Bodies A and B are each in thermal equilibrium with a thermometer C that reads $40^\circ\mathrm{C}$. A and B are then put in contact. Will heat flow between them?`,
      steps: [
        t`A is in thermal equilibrium with C, so A is at $40^\circ\mathrm{C}$.`,
        t`B is in thermal equilibrium with C, so B is also at $40^\circ\mathrm{C}$.`,
        t`By the zeroth law, A and B are in thermal equilibrium with each other.`,
        t`They are at the same temperature, so no heat flows between them.`,
      ],
      answer: t`No: A and B are already in thermal equilibrium.`,
    },
    visualSpec: t`Drop a hot and a cold block into the same box and watch their temperatures meet; then add a thermometer touching each in turn.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes the zeroth law for the first law.",
      remediation: "The first law is about energy conservation; the zeroth law is about thermal equilibrium, and lets us define temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Takes the zeroth law for the second law.",
      remediation: "The second law is about the direction of heat flow; the zeroth law is about thermal equilibrium.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Takes the zeroth law for Newton's law of cooling.",
      remediation: "Newton's law says how fast a body cools; the zeroth law says when two bodies are in equilibrium.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Takes the system's walls to be its surroundings.",
      remediation: "The walls are the boundary; the surroundings are everything outside it that can exchange energy with the system.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Counts the system as part of its own surroundings.",
      remediation: "The surroundings are everything outside the system, not the system itself.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks the surroundings are only the air around the system.",
      remediation: "The surroundings are everything outside the system that can exchange energy with it, such as the stove under a pan.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks a closed system exchanges nothing with its surroundings.",
      remediation: "A closed system exchanges energy, such as heat, but not matter. One that exchanges neither is isolated.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks any system that takes in heat is open.",
      remediation: "An open system exchanges matter too. Exchanging only energy makes a system closed.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks a thermodynamic system must be a gas.",
      remediation: "A system can be any collection of particles with definite pressure, volume and temperature: a gas, a liquid, a cooker of food.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Mixes up mechanical and thermal equilibrium.",
      remediation: "Mechanical equilibrium means equal pressure, with no unbalanced forces; thermal equilibrium means equal temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Mixes up chemical equilibrium with the other kinds.",
      remediation: "Chemical equilibrium means no reactions, so a fixed composition; it says nothing about pressure or temperature.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks equilibrium means the molecules are at rest.",
      remediation: "In equilibrium the molecules keep moving; only the large-scale properties, such as pressure and temperature, stop changing.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.1(i)" },
      stem: t`“If two systems are each in thermal equilibrium with a third system, they are also in thermal equilibrium with each other.” Which law is this?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "zeroth" } },
      options: [
        { key: "A", text: t`The zeroth law of thermodynamics`, correct: true, value: "zeroth_law" },
        { key: "B", text: t`The first law of thermodynamics`, correct: false, misconceptionId: "C01-M1", value: "first_law" },
        { key: "C", text: t`The second law of thermodynamics`, correct: false, misconceptionId: "C01-M2", value: "second_law" },
        { key: "D", text: t`Newton's law of cooling`, correct: false, misconceptionId: "C01-M3", value: "newtons_cooling" },
      ],
      solution: {
        steps: [
          t`The statement is about systems in thermal equilibrium with a common third system.`,
          t`That is the zeroth law of thermodynamics.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.2(vi)" },
      stem: t`In thermodynamics, what are the surroundings of a system?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "surroundings" } },
      options: [
        { key: "A", text: t`Everything outside the system that can exchange energy with it`, correct: true, value: "everything_outside" },
        { key: "B", text: t`The walls that enclose the system`, correct: false, misconceptionId: "C01-M4", value: "the_walls" },
        { key: "C", text: t`The system together with everything around it`, correct: false, misconceptionId: "C01-M5", value: "system_and_all_around" },
        { key: "D", text: t`Only the air around the system`, correct: false, misconceptionId: "C01-M6", value: "only_the_air" },
      ],
      solution: {
        steps: [
          t`The surroundings are everything outside the system's boundary.`,
          t`Only what can exchange energy with the system counts.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.2(iv)" },
      stem: t`A sealed pressure cooker sits on a stove. It takes in heat from the flame, but no steam escapes. What kind of system is it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "closed" } },
      options: [
        { key: "A", text: t`An open system`, correct: false, misconceptionId: "C01-M8", value: "open_system" },
        { key: "B", text: t`Not a thermodynamic system, as it is not just a gas`, correct: false, misconceptionId: "C01-M9", value: "not_a_system" },
        { key: "C", text: t`A closed system`, correct: true, value: "closed_system" },
        { key: "D", text: t`An isolated system`, correct: false, misconceptionId: "C01-M7", value: "isolated_system" },
      ],
      solution: {
        steps: [
          t`The cooker exchanges energy (heat) with the stove, but no matter escapes.`,
          t`So it is a closed system.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.9" },
      stem: t`When is a system in mechanical equilibrium?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mechanical" } },
      options: [
        { key: "A", text: t`When there are no unbalanced forces: its pressure is the same throughout, and equals the surroundings'`, correct: true, value: "same_pressure" },
        { key: "B", text: t`When its temperature is the same throughout, and equals the surroundings'`, correct: false, misconceptionId: "C01-M10", value: "same_temperature" },
        { key: "C", text: t`When no chemical reaction takes place in it`, correct: false, misconceptionId: "C01-M11", value: "no_reaction" },
        { key: "D", text: t`When its molecules have stopped moving`, correct: false, misconceptionId: "C01-M12", value: "molecules_at_rest" },
      ],
      solution: {
        steps: [
          t`Mechanical equilibrium means no unbalanced forces.`,
          t`So the pressure is the same throughout the system and equals the surroundings'.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.16" },
      stem: t`When is a system in thermal equilibrium?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "thermal" } },
      options: [
        { key: "A", text: t`When its temperature is the same throughout, and equals the surroundings'`, correct: true, value: "same_temperature" },
        { key: "B", text: t`When its pressure is the same throughout, and equals the surroundings'`, correct: false, misconceptionId: "C01-M10", value: "same_pressure" },
        { key: "C", text: t`When no chemical reaction takes place in it`, correct: false, misconceptionId: "C01-M11", value: "no_reaction" },
        { key: "D", text: t`When its molecules have stopped moving`, correct: false, misconceptionId: "C01-M12", value: "molecules_at_rest" },
      ],
      solution: {
        steps: [
          t`Thermal equilibrium means no net flow of heat.`,
          t`So the temperature is the same throughout the system and equals the surroundings'.`,
        ],
      },
    },
  ],
};
