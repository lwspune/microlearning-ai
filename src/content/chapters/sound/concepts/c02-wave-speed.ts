import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Put your ear to a long iron railing while a friend taps the far end. You hear two taps, one through the iron and one through the air. Which arrives first?`,
    reveal: t`The one through the iron, by a long way. A wave's speed is set by the medium, not the source: iron is so stiff for its density that sound runs along it about fifteen times faster than through air.`,
  },
  explanation: {
    intuition: [
      t`How fast a wave travels depends on the medium it travels in, not on the source that made it.`,
      t`Two things decide it: how strongly the medium springs back when disturbed, and how heavy it is.`,
      t`A stiffer or tighter medium carries the wave faster; a heavier one carries it slower.`,
      t`Sound is fastest in solids, slower in liquids, slowest in gases, and cannot cross a vacuum.`,
      t`Light and radio waves need no medium: they travel at $3 \times 10^8\ \mathrm{m/s}$, far faster than sound.`,
    ],
    formal: [
      {
        title: "Waves on a stretched string",
        points: [
          t`Here $T$ stands for the **tension** in the string, the force stretching it, in newtons.`,
          t`The string's **linear density** $m$ is its mass per unit length: $m$ $= \dfrac{\text{mass}}{\text{length}}$, in $\mathrm{kg/m}$.`,
          t`A transverse wave on the string travels at $v = \sqrt{\dfrac{T}{m}}$.`,
          t`So a tighter string carries a faster wave, and a heavier string a slower one.`,
          t`Units: $\dfrac{\mathrm{N}}{\mathrm{kg/m}}$ $= \dfrac{\mathrm{m^2}}{\mathrm{s^2}}$, so the square root is a speed.`,
        ],
      },
      {
        title: "Longitudinal waves in a solid rod",
        points: [
          t`A long solid rod carries a longitudinal wave at $v = \sqrt{\dfrac{Y}{\rho}}$.`,
          t`$Y$ is the rod's **Young's modulus**, its stiffness against stretching, in $\mathrm{N/m^2}$.`,
          t`$\rho$ is its **density**, in $\mathrm{kg/m^3}$: $1\ \mathrm{g/cm^3}$ $= 1000\ \mathrm{kg/m^3}$.`,
          t`In a liquid or a gas the bulk modulus $K$ takes the place of $Y$: $v = \sqrt{\dfrac{K}{\rho}}$.`,
          t`Solids are far stiffer for their density than liquids and gases, so sound is fastest in solids.`,
        ],
      },
      {
        title: "The medium sets the speed",
        points: [
          t`Typical speeds of sound: air about $340\ \mathrm{m/s}$, water about $1500\ \mathrm{m/s}$, steel about $5000\ \mathrm{m/s}$.`,
          t`When sound passes into another medium its frequency stays that of the source.`,
          t`Its speed changes to the new medium's, so its wavelength $\lambda = \dfrac{v}{n}$ changes too.`,
          t`Light and radio waves are electromagnetic: they need no medium and travel at $3 \times 10^8\ \mathrm{m/s}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Aluminium has Young's modulus $7 \times 10^{10}\ \mathrm{N/m^2}$ and density $2700\ \mathrm{kg/m^3}$. Find the speed of sound along a long aluminium rod, and the wavelength in it of a $1000\ \mathrm{Hz}$ note.`,
      steps: [
        t`$v = \sqrt{\dfrac{Y}{\rho}}$ $= \sqrt{\dfrac{7 \times 10^{10}}{2700}}$.`,
        t`$= \sqrt{2.59 \times 10^{7}}$ $\approx 5090\ \mathrm{m/s}$.`,
        t`$\lambda = \dfrac{v}{n}$ $= \dfrac{5090}{1000}$ $\approx 5.09\ \mathrm{m}$.`,
      ],
      answer: t`$v \approx 5090\ \mathrm{m/s}$, $\lambda \approx 5.09\ \mathrm{m}$`,
    },
    visualSpec: t`Tighten a string or load it with beads and watch a pulse speed up or slow down; then send a pulse along a steel rod and through air side by side.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Thinks sound is fastest in a vacuum, where nothing is in its way.",
      remediation: "Sound is a vibration of the medium itself: with no particles to vibrate, it cannot travel through a vacuum at all.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Thinks a lighter, less dense medium such as air carries sound fastest.",
      remediation: t`Speed depends on stiffness as well as density: $v = \sqrt{\dfrac{Y}{\rho}}$. Solids are so much stiffer that sound is fastest in them, slowest in gases.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks a liquid carries sound faster than a solid.",
      remediation: t`Water carries sound at about $1500\ \mathrm{m/s}$ but steel at about $5000\ \mathrm{m/s}$: a solid is far stiffer for its density.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks the speed of a wave is set by its source and stays the same in every medium.",
      remediation: "The speed is set by the medium: sound in water is about four times as fast as in air. It is the frequency that the source fixes.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks the wavelength stays the same when sound enters a new medium.",
      remediation: t`The frequency stays the same and the speed changes, so $\lambda = \dfrac{v}{n}$ changes in step with the speed.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M6",
      mistake: "Thinks nothing about the wave changes as it crosses into another medium.",
      remediation: "The new medium has a different speed of sound; only the frequency, set by the source, stays the same.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M7",
      mistake: "Leaves the mass in grams.",
      remediation: t`Work in SI units: $1\ \mathrm{g}$ $= 10^{-3}\ \mathrm{kg}$, and a linear density must be in $\mathrm{kg/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Forgets the square root.",
      remediation: t`$\dfrac{T}{m}$ or $\dfrac{Y}{\rho}$ is the square of the speed, in $\mathrm{m^2/s^2}$: take its square root.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Turns the ratio upside down.",
      remediation: t`Stiffness or tension speeds the wave up, so it goes on top: $v = \sqrt{\dfrac{T}{m}}$, $v = \sqrt{\dfrac{Y}{\rho}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Uses the whole mass of the wire instead of its mass per unit length.",
      remediation: t`$m$ is the linear density: divide the mass by the length, $\dfrac{0.012}{1.5}$ $= 0.008\ \mathrm{kg/m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: t`Leaves the density in $\mathrm{g/cm^3}$.`,
      remediation: t`$1\ \mathrm{g/cm^3}$ $= 1000\ \mathrm{kg/m^3}$, so $7.8\ \mathrm{g/cm^3}$ $= 7800\ \mathrm{kg/m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Leaves the radio distance in kilometres.",
      remediation: t`$3000\ \mathrm{km}$ $= 3 \times 10^6\ \mathrm{m}$; divide by $3 \times 10^8\ \mathrm{m/s}$ to get $0.01\ \mathrm{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Adds the two times instead of subtracting them.",
      remediation: "How much earlier is a difference: subtract the radio time from the sound time.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Takes the radio signal to travel at the speed of sound.",
      remediation: t`Radio waves are electromagnetic waves, not sound: they travel at $3 \times 10^8\ \mathrm{m/s}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.1 (iv)" },
      stem: t`In which of these does sound travel fastest?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "fastest" } },
      options: [
        { key: "A", text: t`A solid, such as steel`, correct: true, value: "solid_medium" },
        { key: "B", text: t`A vacuum, where nothing gets in its way`, correct: false, misconceptionId: "C02-M1", value: "vacuum_medium" },
        { key: "C", text: t`Air, the least dense of them`, correct: false, misconceptionId: "C02-M2", value: "air_medium" },
        { key: "D", text: t`Water, a liquid`, correct: false, misconceptionId: "C02-M3", value: "water_medium" },
      ],
      solution: {
        steps: [
          t`Speed depends on the medium's stiffness and density: $v = \sqrt{\dfrac{Y}{\rho}}$.`,
          t`Solids are far stiffer for their density, so sound is fastest in a solid; it cannot cross a vacuum at all.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.1 (ii)" },
      stem: t`A sound wave travels from air into water. Which of these stays the same?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "same" } },
      options: [
        { key: "A", text: t`Its speed`, correct: false, misconceptionId: "C02-M4", value: "speed_same" },
        { key: "B", text: t`Its wavelength`, correct: false, misconceptionId: "C02-M5", value: "wavelength_same" },
        { key: "C", text: t`Its speed, frequency and wavelength, all three`, correct: false, misconceptionId: "C02-M6", value: "all_same" },
        { key: "D", text: t`Its frequency`, correct: true, value: "freq_same" },
      ],
      solution: {
        steps: [
          t`The frequency is the number of vibrations per second made by the source; the water vibrates at the same rate.`,
          t`The speed rises in water, so the wavelength $\dfrac{v}{n}$ grows; only the frequency stays the same.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`A string of linear density $5\ \mathrm{g/m}$ is stretched with a tension of $80\ \mathrm{N}$. What is the speed of a transverse wave along it?`,
      verify: { kind: "value", inputs: { T: "80", m_g: "5" }, params: { ask: "string" } },
      options: [
        { key: "A", text: t`$0.00791\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M9", value: "0.00791000000000000" },
        { key: "B", text: t`$126\ \mathrm{m/s}$`, correct: true, value: "126" },
        { key: "C", text: t`$4\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M7", value: "4" },
        { key: "D", text: t`$16000\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M8", value: "16000" },
      ],
      solution: {
        steps: [
          t`$m = 5\ \mathrm{g/m}$ $= 0.005\ \mathrm{kg/m}$.`,
          t`$v = \sqrt{\dfrac{T}{m}}$ $= \sqrt{\dfrac{80}{0.005}}$ $= \sqrt{16000}$ $\approx 126\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`A wire $1.5\ \mathrm{m}$ long has a mass of $12\ \mathrm{g}$. It is stretched with a tension of $72\ \mathrm{N}$. How fast does a transverse wave travel along it?`,
      verify: { kind: "value", inputs: { L: "3/2", M_g: "12", T: "72" }, params: { ask: "wire" } },
      options: [
        { key: "A", text: t`$9000\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M8", value: "9000" },
        { key: "B", text: t`$94.9\ \mathrm{m/s}$`, correct: true, value: "94.9000000000000" },
        { key: "C", text: t`$77.5\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M10", value: "77.5000000000000" },
        { key: "D", text: t`$3\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M7", value: "3" },
      ],
      solution: {
        steps: [
          t`$m$ $= \dfrac{0.012\ \mathrm{kg}}{1.5\ \mathrm{m}}$ $= 0.008\ \mathrm{kg/m}$.`,
          t`$v = \sqrt{\dfrac{72}{0.008}}$ $= \sqrt{9000}$ $\approx 94.9\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Steel has Young's modulus $2 \times 10^{11}\ \mathrm{N/m^2}$ and density $7.8\ \mathrm{g/cm^3}$. What is the speed of a longitudinal wave along a long steel rod?`,
      verify: { kind: "value", inputs: { Y: "2*10**11", rho_gcc: "39/5" }, params: { ask: "rod" } },
      options: [
        { key: "A", text: t`$1.97 \times 10^{-4}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M9", value: "0.000197000000000000" },
        { key: "B", text: t`$5060\ \mathrm{m/s}$`, correct: true, value: "5060" },
        { key: "C", text: t`$1.6 \times 10^{5}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M11", value: "160000" },
        { key: "D", text: t`$2.56 \times 10^{7}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C02-M8", value: "25600000" },
      ],
      solution: {
        steps: [
          t`$\rho = 7.8\ \mathrm{g/cm^3}$ $= 7800\ \mathrm{kg/m^3}$.`,
          t`$v$ $= \sqrt{\dfrac{2 \times 10^{11}}{7800}}$ $\approx 5060\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Solved Ex.8.2" },
      stem: t`You sit $150\ \mathrm{m}$ from the speakers at an open-air concert. A friend in another country hears it live on the radio; the radio signal travels $3000\ \mathrm{km}$ to reach him. Sound travels at $330\ \mathrm{m/s}$ and radio waves at $3 \times 10^8\ \mathrm{m/s}$. Your friend hears each note first. How much earlier?`,
      verify: { kind: "value", inputs: { d1: "150", vs: "330", d2_km: "3000", c: "3*10**8" }, params: { ask: "radio" } },
      options: [
        { key: "A", text: t`$0.445\ \mathrm{s}$`, correct: true, value: "0.445000000000000" },
        { key: "B", text: t`$0.455\ \mathrm{s}$`, correct: false, misconceptionId: "C02-M12", value: "0.455000000000000" },
        { key: "C", text: t`$0.465\ \mathrm{s}$`, correct: false, misconceptionId: "C02-M13", value: "0.465000000000000" },
        { key: "D", text: t`$9090\ \mathrm{s}$`, correct: false, misconceptionId: "C02-M14", value: "9090" },
      ],
      solution: {
        steps: [
          t`Your sound: $\dfrac{150}{330}$ $\approx 0.4545\ \mathrm{s}$.`,
          t`The radio signal: $\dfrac{3 \times 10^6}{3 \times 10^8}$ $= 0.01\ \mathrm{s}$.`,
          t`Difference: $0.4545 - 0.01$ $\approx 0.445\ \mathrm{s}$.`,
        ],
      },
    },
  ],
};
