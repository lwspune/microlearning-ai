import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Water poured on a lotus leaf beads up and rolls off, taking the dust with it. Engineers now copy that leaf to make self-cleaning glass. What is the leaf's secret?`,
    reveal: t`Its surface is covered with nanoscale wax bumps. Water touches only their tips, so it forms beads that roll off.`,
  },
  explanation: {
    intuition: [
      t`Nanomaterials do jobs that bulk materials cannot.`,
      t`Their large surface and new properties make them useful in medicine, water, tyres and coatings.`,
      t`Nature uses nanostructures too, as in the lotus leaf.`,
      t`Their small size also brings health and environmental risks.`,
    ],
    formal: [
      {
        title: "Applications",
        points: [
          t`Silver nanoparticles in water filters kill bacteria such as E. coli.`,
          t`Carbon black nanoparticles make car tyres last longer.`,
          t`ZnO and $\ce{TiO2}$ nanoparticles in sunscreens block UV rays.`,
          t`Pd and Pt nanoparticles catalyse hydrogenation.`,
          t`Lotus-leaf-like surfaces clean themselves.`,
        ],
      },
      {
        title: "Risks",
        points: [
          t`Nanoparticles can enter the body through skin and lungs.`,
          t`Some may be toxic, and their long-term effects are not fully known.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why do silver nanoparticles disinfect better than a silver plate?`,
      steps: [
        t`Nanoparticles have a far larger surface for their mass.`,
        t`More silver contacts the bacteria.`,
      ],
      answer: t`Their large surface area`,
    },
    visualSpec: t`Match each nanomaterial to the product it improves.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Confuses carbon black with the disinfectant.",
      remediation: "Carbon black strengthens tyres; silver kills bacteria.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Thinks gold is the disinfectant.",
      remediation: "Silver nanoparticles are the disinfectant.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Thinks copper is the disinfectant.",
      remediation: "The disinfectant used in water purifiers is silver.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Puts silver in tyres.",
      remediation: "Silver disinfects water; carbon black goes into tyres.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Puts sunscreen oxides in tyres.",
      remediation: t`$\ce{TiO2}$ blocks UV in sunscreens; carbon black goes into tyres.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks a precious metal strengthens tyres.",
      remediation: "Cheap carbon black does that job.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Puts carbon black in sunscreen.",
      remediation: t`Sunscreens use ZnO and $\ce{TiO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Puts silver in sunscreen.",
      remediation: t`Silver disinfects; ZnO and $\ce{TiO2}$ block UV.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Confuses hydrogenation catalysts with sunscreen.",
      remediation: t`Pd and Pt catalyse hydrogenation; ZnO and $\ce{TiO2}$ block UV.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks the leaf secretes a detergent.",
      remediation: "The effect is physical: nanoscale bumps repel water.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Credits static charge.",
      remediation: "Water beads on the waxy bumps and carries the dirt away.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Thinks the leaf absorbs the dirt.",
      remediation: "Dirt is carried away by rolling water drops.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Thinks nanoparticles are too large to enter cells.",
      remediation: "Nanoparticles are small enough to pass through skin, lungs and cells.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Thinks nanomaterials always break down quickly.",
      remediation: "Many persist in the environment.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Thinks nanoparticles are inert.",
      remediation: "Their large surface often makes them more reactive, not less.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/green-nano-12-pyq#5" },
      stem: t`Which metal nanoparticle is a highly effective bacterial disinfectant in water purification?`,
      verify: { kind: "value", inputs: {  }, params: { q: "silver" } },
      options: [
        { key: "A", text: t`carbon black`, correct: false, misconceptionId: "C06-M1", value: "carbon_black" },
        { key: "B", text: t`silver`, correct: true, value: "silver" },
        { key: "C", text: t`copper`, correct: false, misconceptionId: "C06-M3", value: "copper" },
        { key: "D", text: t`gold`, correct: false, misconceptionId: "C06-M2", value: "gold" },
      ],
      solution: {
        steps: [
          t`Silver nanoparticles kill bacteria.`,
          t`They are used in water purifiers.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/green-nano-12-pyq#10" },
      stem: t`Which nanomaterial is added to car tyres to make them last longer?`,
      verify: { kind: "value", inputs: {  }, params: { q: "tyres" } },
      options: [
        { key: "A", text: t`titanium dioxide nanoparticles`, correct: false, misconceptionId: "C06-M5", value: "titanium_dioxide" },
        { key: "B", text: t`silver nanoparticles`, correct: false, misconceptionId: "C06-M4", value: "silver" },
        { key: "C", text: t`carbon black`, correct: true, value: "carbon_black" },
        { key: "D", text: t`gold nanoparticles`, correct: false, misconceptionId: "C06-M6", value: "gold" },
      ],
      solution: {
        steps: [
          t`Carbon black strengthens rubber.`,
          t`Tyres last longer.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.3 (vi)" },
      stem: t`Which nanomaterials are used in sunscreen lotions to block UV rays?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sunscreen" } },
      options: [
        { key: "A", text: t`palladium and platinum`, correct: false, misconceptionId: "C06-M9", value: "pd_pt" },
        { key: "B", text: t`carbon black`, correct: false, misconceptionId: "C06-M7", value: "carbon_black" },
        { key: "C", text: t`silver`, correct: false, misconceptionId: "C06-M8", value: "silver" },
        { key: "D", text: t`zinc oxide and titanium dioxide`, correct: true, value: "zno_tio2" },
      ],
      solution: {
        steps: [
          t`ZnO and $\ce{TiO2}$ nanoparticles absorb or reflect UV.`,
          t`They protect the skin.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/green-chemistry-12-chem/Ex Q.4 (v)" },
      stem: t`The lotus leaf stays clean in muddy water because`,
      verify: { kind: "value", inputs: {  }, params: { q: "lotus" } },
      options: [
        { key: "A", text: t`nanoscale wax bumps make water bead up and roll off, carrying dirt`, correct: true, value: "wax_bumps" },
        { key: "B", text: t`it absorbs the dirt into its cells`, correct: false, misconceptionId: "C06-M12", value: "absorbs" },
        { key: "C", text: t`it secretes a detergent`, correct: false, misconceptionId: "C06-M10", value: "detergent" },
        { key: "D", text: t`static charge repels the dirt`, correct: false, misconceptionId: "C06-M11", value: "static" },
      ],
      solution: {
        steps: [
          t`Nanoscale wax bumps repel water.`,
          t`Rolling drops carry the dirt away.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/green-nano-12-pyq#4" },
      stem: t`Which is a real risk of nanotechnology?`,
      verify: { kind: "value", inputs: {  }, params: { q: "risk" } },
      options: [
        { key: "A", text: t`nanoparticles are too large to enter cells`, correct: false, misconceptionId: "C06-M13", value: "too_large" },
        { key: "B", text: t`nanoparticles can enter the body through the skin or lungs and may be toxic`, correct: true, value: "toxic_entry" },
        { key: "C", text: t`nanomaterials always break down quickly in nature`, correct: false, misconceptionId: "C06-M14", value: "biodegradable" },
        { key: "D", text: t`nanoparticles are chemically inert, so they cannot harm`, correct: false, misconceptionId: "C06-M15", value: "inert" },
      ],
      solution: {
        steps: [
          t`Nanoparticles are tiny and reactive.`,
          t`They can enter the body and may be toxic.`,
        ],
      },
    },
  ],
};
