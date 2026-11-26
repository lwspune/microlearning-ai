import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Bright red light shone on a zinc plate for an hour frees no electrons, yet a faint ultraviolet lamp frees them at once. Why does brightness lose to colour?`,
    reveal: t`Each electron is freed by one photon, and a photon's energy $h\nu$ depends on frequency, not brightness; red photons are each too weak.`,
  },
  explanation: {
    intuition: [
      t`Light falling on a metal can knock electrons out: the **photoelectric effect**.`,
      t`Light arrives as photons, each with energy $E = h\nu$.`,
      t`One photon frees at most one electron.`,
      t`Below a **threshold frequency** $\nu_0$, no electron leaves, however bright the light.`,
      t`Above it, electrons leave at once, with the energy left over as kinetic energy.`,
    ],
    formal: [
      {
        title: "Einstein's equation",
        points: [
          t`The **work function** $W_0 = h\nu_0$ is the least energy that frees an electron.`,
          t`$h\nu = h\nu_0 + \tfrac12 mv^2$: photon energy pays the work function first.`,
          t`So the largest kinetic energy is $\tfrac12 mv^2 = h(\nu - \nu_0)$.`,
          t`In wavelengths: $\tfrac12 mv^2 = \dfrac{hc}{\lambda} - W_0$.`,
        ],
      },
      {
        title: "Brightness and frequency",
        points: [
          t`Brighter light means more photons, so more electrons per second.`,
          t`Each electron's kinetic energy depends only on the frequency.`,
          t`Below $\nu_0$, more photons still free nothing: no electrons, no delay.`,
          t`Light behaving as particles here is why it is said to have a **dual nature**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Sodium's threshold frequency is $5.5 \times 10^{14}\ \mathrm{Hz}$. Light of $8.0 \times 10^{14}\ \mathrm{Hz}$ falls on it. Find the largest kinetic energy of an electron ($h = 6.626 \times 10^{-34}\ \mathrm{J\,s}$).`,
      steps: [
        t`$\nu > \nu_0$, so electrons are ejected.`,
        t`$\tfrac12 mv^2 = h(\nu - \nu_0)$`,
        t`$= 6.626 \times 10^{-34} \times 2.5 \times 10^{14}$`,
        t`$= 1.66 \times 10^{-19}\ \mathrm{J}$`,
      ],
      answer: t`$1.66 \times 10^{-19}\ \mathrm{J}$`,
    },
    visualSpec: t`Slide the frequency past the threshold and watch electrons start to leave; slide the brightness and watch only their number change.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Multiplies the work function by h.",
      remediation: t`$W_0 = h\nu_0$, so $\nu_0 = W_0 / h$: divide by $h$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C08-M2",
      mistake: "Gives the threshold wavelength.",
      remediation: t`$hc/W_0$ is the threshold wavelength; the frequency is $W_0/h$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Drops the power of ten.",
      remediation: t`Keep the $10^{-19}$ of the work function in the division.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Forgets the work function.",
      remediation: t`The photon first pays $h\nu_0$; only $h(\nu - \nu_0)$ is left as kinetic energy.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Adds the work function.",
      remediation: t`The work function is used up, so subtract $h\nu_0$, never add it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Gives the work function as the kinetic energy.",
      remediation: t`$h\nu_0$ is the energy spent freeing the electron; the kinetic energy is $h(\nu - \nu_0)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M7",
      mistake: "Thinks brighter light frees electrons below the threshold.",
      remediation: "Brighter light adds photons, but each is still too weak: no electrons come out.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M8",
      mistake: "Thinks brightness speeds the electrons.",
      remediation: "An electron's energy depends on its photon's frequency, not on how many photons there are.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M9",
      mistake: "Expects electrons after a delay.",
      remediation: "Energy is not stored up: below the threshold no electron ever leaves.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M10",
      mistake: "Thinks the kinetic energy doubles.",
      remediation: "Doubling intensity doubles the photons, not each photon's energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M11",
      mistake: "Thinks both number and energy double.",
      remediation: "Only the number doubles; each electron's energy is set by the frequency.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M12",
      mistake: "Expects no change.",
      remediation: "Twice the photons free twice the electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M13",
      mistake: "Forgets the work function.",
      remediation: t`Subtract $W_0$ from $hc/\lambda$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M14",
      mistake: "Adds the work function.",
      remediation: t`The kinetic energy is $hc/\lambda - W_0$, not $hc/\lambda + W_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M15",
      mistake: "Subtracts the wrong way round.",
      remediation: t`A kinetic energy is never negative: $hc/\lambda - W_0$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "authored" },
      stem: t`A metal's work function is $3.0 \times 10^{-19}\ \mathrm{J}$. Taking $h = 6.626 \times 10^{-34}\ \mathrm{J\,s}$, its threshold frequency is`,
      verify: { kind: "value", inputs: { W: "3.0" }, params: { q: "threshold" } },
      options: [
        { key: "A", text: t`$4.53 \times 10^{14}\ \mathrm{Hz}$`, correct: true, value: "453000000000000" },
        { key: "B", text: t`$1.99 \times 10^{-52}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C08-M1", value: "1.99000000000000e-52" },
        { key: "C", text: t`$6.63 \times 10^{-7}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C08-M2", value: "6.63000000000000e-7" },
        { key: "D", text: t`$4.53 \times 10^{33}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C08-M3", value: "4529999999999999920629414539296768" },
      ],
      solution: {
        steps: [
          t`$\nu_0 = W_0 / h$`,
          t`$= 3.0 \times 10^{-19} / 6.626 \times 10^{-34}$`,
          t`$= 4.53 \times 10^{14}\ \mathrm{Hz}$`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "authored" },
      stem: t`Light of frequency $1.2 \times 10^{15}\ \mathrm{Hz}$ falls on a metal whose threshold frequency is $5.0 \times 10^{14}\ \mathrm{Hz}$. With $h = 6.626 \times 10^{-34}\ \mathrm{J\,s}$, the largest kinetic energy of an ejected electron is`,
      verify: { kind: "value", inputs: { n: "12", n0: "5" }, params: { q: "kinetic" } },
      options: [
        { key: "A", text: t`$7.95 \times 10^{-19}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M4", value: "7.95000000000000e-19" },
        { key: "B", text: t`$1.13 \times 10^{-18}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M5", value: "1.13000000000000e-18" },
        { key: "C", text: t`$3.31 \times 10^{-19}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M6", value: "3.31000000000000e-19" },
        { key: "D", text: t`$4.64 \times 10^{-19}\ \mathrm{J}$`, correct: true, value: "4.64000000000000e-19" },
      ],
      solution: {
        steps: [
          t`$\nu - \nu_0 = 7.0 \times 10^{14}\ \mathrm{Hz}$`,
          t`$\tfrac12 mv^2 = 6.626 \times 10^{-34} \times 7.0 \times 10^{14}$`,
          t`$= 4.64 \times 10^{-19}\ \mathrm{J}$`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "authored" },
      stem: t`Red light below a metal's threshold frequency falls on it, and the light is made ten times brighter. Then`,
      verify: { kind: "value", inputs: {  }, params: { q: "below" } },
      options: [
        { key: "A", text: t`more electrons are ejected`, correct: false, misconceptionId: "C08-M7", value: "more_electrons" },
        { key: "B", text: t`faster electrons are ejected`, correct: false, misconceptionId: "C08-M8", value: "faster_electrons" },
        { key: "C", text: t`electrons come out after a short delay`, correct: false, misconceptionId: "C08-M9", value: "after_delay" },
        { key: "D", text: t`no electrons are ejected`, correct: true, value: "no_electrons" },
      ],
      solution: {
        steps: [
          t`Each photon is below the threshold energy.`,
          t`More of them still free no electron.`,
          t`No electrons are ejected.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`Light above the threshold frequency falls on a metal. If its intensity is doubled at the same frequency,`,
      verify: { kind: "value", inputs: {  }, params: { q: "intensity" } },
      options: [
        { key: "A", text: t`twice as many come out, with twice the kinetic energy`, correct: false, misconceptionId: "C08-M11", value: "both_double" },
        { key: "B", text: t`nothing changes`, correct: false, misconceptionId: "C08-M12", value: "no_change" },
        { key: "C", text: t`twice as many electrons come out, with the same kinetic energy`, correct: true, value: "more_same_energy" },
        { key: "D", text: t`the same number come out, with twice the kinetic energy`, correct: false, misconceptionId: "C08-M10", value: "energy_doubles" },
      ],
      solution: {
        steps: [
          t`Double intensity means twice the photons.`,
          t`Each photon has the same energy.`,
          t`Twice as many electrons, same kinetic energy.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "authored" },
      stem: t`Light of wavelength $300\ \mathrm{nm}$ falls on a metal of work function $4.0 \times 10^{-19}\ \mathrm{J}$ ($h = 6.626 \times 10^{-34}\ \mathrm{J\,s}$, $c = 3 \times 10^8\ \mathrm{m\,s^{-1}}$). The largest kinetic energy of an ejected electron is`,
      verify: { kind: "value", inputs: { l: "300", W: "4.0" }, params: { q: "wavelength" } },
      options: [
        { key: "A", text: t`$-2.63 \times 10^{-19}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M15", value: "-2.63000000000000e-19" },
        { key: "B", text: t`$2.63 \times 10^{-19}\ \mathrm{J}$`, correct: true, value: "2.63000000000000e-19" },
        { key: "C", text: t`$6.63 \times 10^{-19}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M13", value: "6.63000000000000e-19" },
        { key: "D", text: t`$1.06 \times 10^{-18}\ \mathrm{J}$`, correct: false, misconceptionId: "C08-M14", value: "1.06000000000000e-18" },
      ],
      solution: {
        steps: [
          t`$hc/\lambda = 6.626 \times 10^{-34} \times 3 \times 10^8 / 3 \times 10^{-7}$`,
          t`$= 6.63 \times 10^{-19}\ \mathrm{J}$`,
          t`$\tfrac12 mv^2 = 6.63 - 4.0 = 2.63 \times 10^{-19}\ \mathrm{J}$`,
        ],
      },
    },
  ],
};
