import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A radio, a microwave oven, a TV remote, your eyes, a sunbed and a hospital X-ray machine all use the same kind of wave. How can one kind of wave do so many different jobs?`,
    reveal: t`They all use **electromagnetic waves**, differing only in wavelength. Laid out by wavelength, they form the **electromagnetic spectrum**, from radio waves to gamma rays.`,
  },
  explanation: {
    intuition: [
      t`All EM waves travel at $c$ in vacuum and differ only in frequency and wavelength, with $c = f\lambda$.`,
      t`In order of decreasing wavelength: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays.`,
      t`The shorter the wavelength, the higher the frequency and the energy each wave carries.`,
      t`Each band has its own sources and its own uses.`,
    ],
    formal: [
      {
        title: "Radio waves, microwaves and infrared",
        points: [
          t`**Radio waves** ($\lambda > 0.1\ \mathrm{m}$): from oscillating currents in antennas; radio and TV broadcasting.`,
          t`**Microwaves** ($1\ \mathrm{mm}$ to $0.1\ \mathrm{m}$): radar, satellite communication and microwave ovens.`,
          t`**Infrared**: given out by hot bodies; it warms the Earth's surface and atmosphere (the greenhouse effect).`,
        ],
      },
      {
        title: "Light, UV, X-rays and gamma rays",
        points: [
          t`**Visible light**: about $400\ \mathrm{nm}$ (violet) to $700\ \mathrm{nm}$ (red).`,
          t`**Ultraviolet**: from the Sun; mostly absorbed by the ozone layer, it kills germs and can harm living tissue.`,
          t`**X-rays**: from fast electrons striking a target; used to image bones.`,
          t`**Gamma rays**: from atomic nuclei; the most energetic, used in treating cancer.`,
        ],
      },
      {
        title: "Working with c = fλ",
        points: [
          t`$f = \dfrac{c}{\lambda}$ and $\lambda = \dfrac{c}{f}$, with $c = 3 \times 10^{8}\ \mathrm{m/s}$.`,
          t`$1\ \mathrm{MHz}$ $= 10^{6}\ \mathrm{Hz}$, $1\ \mathrm{GHz}$ $= 10^{9}\ \mathrm{Hz}$, $1\ \mathrm{nm}$ $= 10^{-9}\ \mathrm{m}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Red light has a wavelength of $6.5 \times 10^{-7}\ \mathrm{m}$. Find its frequency. ($c = 3 \times 10^{8}\ \mathrm{m/s}$)`,
      steps: [
        t`$f = \dfrac{c}{\lambda}$ $= \dfrac{3 \times 10^{8}}{6.5 \times 10^{-7}}$.`,
        t`$f \approx 4.6 \times 10^{14}\ \mathrm{Hz}$.`,
      ],
      answer: t`$\approx 4.6 \times 10^{14}\ \mathrm{Hz}$`,
    },
    visualSpec: t`Slide along the electromagnetic spectrum and watch the wavelength, frequency and uses change together.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Thinks X-rays warm the atmosphere.",
      remediation: "X-rays from space are absorbed high up; the warming is done by infrared.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Thinks microwaves warm the atmosphere.",
      remediation: "The Sun gives out little microwave radiation; infrared does the warming.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks visible light itself causes the greenhouse warming.",
      remediation: "Visible light warms the ground, which then gives out infrared; the atmosphere traps that infrared.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks satellites use AM radio waves.",
      remediation: "AM radio waves are reflected by the ionosphere; satellites need waves that pass through it: microwaves.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks satellites use FM radio waves.",
      remediation: "Satellites use the shorter microwaves, which pass the ionosphere and form narrow beams.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Thinks satellites use X-rays.",
      remediation: "X-rays are absorbed by the atmosphere and are harmful; microwaves are used.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M7",
      mistake: t`Turns $c = f\lambda$ round.`,
      remediation: t`$f = \dfrac{c}{\lambda}$ and $\lambda = \dfrac{c}{f}$: divide $c$ by the other quantity.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: t`Multiplies $c$ by $\lambda$.`,
      remediation: t`$c = f\lambda$, so $f = \dfrac{c}{\lambda}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Leaves the answer in SI base units.",
      remediation: t`Convert to the unit asked for: $1\ \mathrm{MHz}$ $= 10^{6}\ \mathrm{Hz}$, $1\ \mathrm{nm}$ $= 10^{-9}\ \mathrm{m}$, $1\ \mathrm{m} = 100\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: "Converts metres to nanometres the wrong way.",
      remediation: t`There are $10^{9}$ nm in a metre, so multiply by $10^{9}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M11",
      mistake: "Thinks microwaves travel faster than other EM waves.",
      remediation: t`All EM waves travel at the same speed $c$ in vacuum.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M12",
      mistake: "Thinks microwaves bend round obstacles.",
      remediation: "Short wavelengths travel in straight lines; it is long radio waves that bend round obstacles.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M13",
      mistake: "Thinks the ionosphere reflects microwaves.",
      remediation: "Microwaves pass through the ionosphere; it reflects longer radio waves.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M14",
      mistake: "Takes GHz as MHz.",
      remediation: t`$1\ \mathrm{GHz}$ $= 10^{9}\ \mathrm{Hz}$, so $8.0\ \mathrm{GHz}$ $= 8.0 \times 10^{9}\ \mathrm{Hz}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.1 (i)" },
      stem: t`Which radiation from the Sun is responsible for warming the Earth's atmosphere through the greenhouse effect?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "green" } },
      options: [
        { key: "A", text: t`Infrared radiation`, correct: true, value: "infrared" },
        { key: "B", text: t`X-rays`, correct: false, misconceptionId: "C02-M1", value: "x_ray" },
        { key: "C", text: t`Microwaves`, correct: false, misconceptionId: "C02-M2", value: "microwave_g" },
        { key: "D", text: t`Visible light`, correct: false, misconceptionId: "C02-M3", value: "visible" },
      ],
      solution: {
        steps: [
          t`The ground, warmed by sunlight, gives out infrared, which the atmosphere's gases trap.`,
          t`So infrared radiation is responsible for the greenhouse warming.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.1 (vi)" },
      stem: t`Which waves do artificial satellites use for communication?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "satellite" } },
      options: [
        { key: "A", text: t`AM radio waves`, correct: false, misconceptionId: "C02-M4", value: "am_radio" },
        { key: "B", text: t`FM radio waves`, correct: false, misconceptionId: "C02-M5", value: "fm_radio" },
        { key: "C", text: t`X-rays`, correct: false, misconceptionId: "C02-M6", value: "x_rays" },
        { key: "D", text: t`Microwaves`, correct: true, value: "microwaves" },
      ],
      solution: {
        steps: [
          t`Satellite signals must pass through the ionosphere and travel in narrow beams.`,
          t`Microwaves do both, so satellites use microwaves.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2b (i)" },
      stem: t`What is the frequency, in MHz, of a radio wave of wavelength $250\ \mathrm{m}$? ($c = 3.0 \times 10^{8}\ \mathrm{m/s}$)`,
      verify: { kind: "value", inputs: { lam: "250" }, params: { ask: "f_MHz" } },
      options: [
        { key: "A", text: t`$1.2 \times 10^{6}\ \mathrm{MHz}$`, correct: false, misconceptionId: "C02-M9", value: "1200000" },
        { key: "B", text: t`$1.2\ \mathrm{MHz}$`, correct: true, value: "1.20000000000000" },
        { key: "C", text: t`$8.33 \times 10^{-13}\ \mathrm{MHz}$`, correct: false, misconceptionId: "C02-M7", value: "8.33000000000000e-13" },
        { key: "D", text: t`$75000\ \mathrm{MHz}$`, correct: false, misconceptionId: "C02-M8", value: "75000" },
      ],
      solution: {
        steps: [
          t`$f = \dfrac{c}{\lambda}$ $= \dfrac{3 \times 10^{8}}{250}$ $= 1.2 \times 10^{6}\ \mathrm{Hz}$.`,
          t`$f = 1.2\ \mathrm{MHz}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2b (ii)" },
      stem: t`What is the wavelength, in nm, of X-rays of frequency $2.0 \times 10^{18}\ \mathrm{Hz}$? ($c = 3.0 \times 10^{8}\ \mathrm{m/s}$)`,
      verify: { kind: "value", inputs: { f: "2.0e18" }, params: { ask: "lam_nm" } },
      options: [
        { key: "A", text: t`$1.5 \times 10^{-19}\ \mathrm{nm}$`, correct: false, misconceptionId: "C02-M10", value: "1.50000000000000e-19" },
        { key: "B", text: t`$0.15\ \mathrm{nm}$`, correct: true, value: "0.150000000000000" },
        { key: "C", text: t`$6.67 \times 10^{18}\ \mathrm{nm}$`, correct: false, misconceptionId: "C02-M7", value: "6670000000000000000" },
        { key: "D", text: t`$1.5 \times 10^{-10}\ \mathrm{nm}$`, correct: false, misconceptionId: "C02-M9", value: "1.50000000000000e-10" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{c}{f}$ $= \dfrac{3 \times 10^{8}}{2 \times 10^{18}}$ $= 1.5 \times 10^{-10}\ \mathrm{m}$.`,
          t`$\lambda = 0.15\ \mathrm{nm}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2 (ii)" },
      stem: t`Why are microwaves used in radar?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "radar" } },
      options: [
        { key: "A", text: t`The ionosphere reflects them back down to the ground`, correct: false, misconceptionId: "C02-M13", value: "ionosphere" },
        { key: "B", text: t`Their short wavelength lets them travel in narrow straight beams and reflect even from small objects`, correct: true, value: "narrow_beam" },
        { key: "C", text: t`They travel faster than other electromagnetic waves`, correct: false, misconceptionId: "C02-M11", value: "faster" },
        { key: "D", text: t`They bend round obstacles to reach hidden objects`, correct: false, misconceptionId: "C02-M12", value: "bend_round" },
      ],
      solution: {
        steps: [
          t`Microwaves have short wavelengths, so they travel in straight, narrow beams.`,
          t`They reflect well even from small objects such as aircraft, which is what radar needs.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/em-waves-comm-11-phy/Ex Q.2b (iv)" },
      stem: t`What is the wavelength, in cm, of a microwave of frequency $8.0\ \mathrm{GHz}$? ($c = 3.0 \times 10^{8}\ \mathrm{m/s}$)`,
      verify: { kind: "value", inputs: { f_GHz: "8.0" }, params: { ask: "lam_cm" } },
      options: [
        { key: "A", text: t`$3.75\ \mathrm{cm}$`, correct: true, value: "3.75000000000000" },
        { key: "B", text: t`$2670\ \mathrm{cm}$`, correct: false, misconceptionId: "C02-M7", value: "2670" },
        { key: "C", text: t`$0.0375\ \mathrm{cm}$`, correct: false, misconceptionId: "C02-M9", value: "0.0375000000000000" },
        { key: "D", text: t`$3750\ \mathrm{cm}$`, correct: false, misconceptionId: "C02-M14", value: "3750" },
      ],
      solution: {
        steps: [
          t`$\lambda = \dfrac{c}{f}$ $= \dfrac{3 \times 10^{8}}{8.0 \times 10^{9}}$ $= 0.0375\ \mathrm{m}$.`,
          t`$\lambda = 3.75\ \mathrm{cm}$.`,
        ],
      },
    },
  ],
};
