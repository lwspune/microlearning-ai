import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Iron is magnetic, yet no current flows in a bar of iron. Where do its magnetic moments come from?`,
    reveal: t`From the electrons inside its atoms. Each orbiting electron is a tiny current loop, a magnetic dipole of moment $\dfrac{evr}{2}$, and electrons also spin.`,
  },
  explanation: {
    intuition: [
      t`An electron circling a nucleus is a charge going round a loop: a tiny current.`,
      t`A current loop is a magnetic dipole, so the orbiting electron has a **magnetic moment**.`,
      t`The electron is negative, so the current runs opposite to its motion.`,
      t`Its magnetic moment is tied to its angular momentum by a fixed ratio, $\dfrac{e}{2m_e}$.`,
    ],
    formal: [
      {
        title: "Orbital magnetic moment",
        points: [
          t`Period $T = \dfrac{2\pi r}{v}$, so the current is $I = \dfrac{e}{T}$ $= \dfrac{ev}{2\pi r}$.`,
          t`Moment $=$ current $\times$ area: $m_{orb}$ $= \dfrac{ev}{2\pi r} \times \pi r^2$ $= \dfrac{evr}{2}$.`,
          t`Its direction comes from the right-hand rule for the current, opposite to the electron's motion.`,
        ],
      },
      {
        title: "Gyromagnetic ratio and Bohr magneton",
        points: [
          t`Angular momentum $L = m_evr$, so $m_{orb} = \dfrac{e}{2m_e}L$.`,
          t`The **gyromagnetic ratio** $\dfrac{m_{orb}}{L}$ $= \dfrac{e}{2m_e} \approx 8.8 \times 10^{10}\ \mathrm{C/kg}$.`,
          t`In the $n$th Bohr orbit $L = \dfrac{nh}{2\pi}$, so $m_{orb} = \dfrac{neh}{4\pi m_e}$.`,
          t`For $n = 1$ this is the **Bohr magneton**, $\dfrac{eh}{4\pi m_e} \approx 9.27 \times 10^{-24}\ \mathrm{A\,m^2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`An electron circles in an orbit of radius $1 \times 10^{-10}\ \mathrm{m}$ at $1.5 \times 10^6\ \mathrm{m/s}$. Find its orbital magnetic moment. (Take $e$ $= 1.6 \times 10^{-19}\ \mathrm{C}$.)`,
      steps: [
        t`$m_{orb} = \dfrac{evr}{2}$.`,
        t`$m_{orb} = \dfrac{1}{2} \times 1.6 \times 10^{-19}$ $\times 1.5 \times 10^6 \times 10^{-10}$.`,
        t`$m_{orb}$ $= 1.2 \times 10^{-23}\ \mathrm{A\,m^2}$.`,
      ],
      answer: t`$1.2 \times 10^{-23}\ \mathrm{A\,m^2}$`,
    },
    visualSpec: t`Spin an electron round a nucleus and watch the equivalent current loop and its magnetic moment arrow appear.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Forgets the factor $\dfrac{1}{2}$.`,
      remediation: t`The loop's area $\pi r^2$ over its length $2\pi r$ gives the $\dfrac{1}{2}$: $m_{orb} = \dfrac{evr}{2}$, ratio $\dfrac{e}{2m_e}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Turns $\dfrac{e}{2m_e}$ upside down.`,
      remediation: t`The gyromagnetic ratio is moment per angular momentum: $\dfrac{m_{orb}}{L}$ $= \dfrac{e}{2m_e}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Uses the proton's mass for the electron.",
      remediation: t`The orbiting particle is the electron: use $m_e$ $= 9.1 \times 10^{-31}\ \mathrm{kg}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Gives the current instead of the magnetic moment.",
      remediation: t`Moment $=$ current $\times$ area: multiply $\dfrac{ev}{2\pi r}$ by $\pi r^2$.`,
      fallback: { kind: "ext", topic: "magnetic dipole moment of a loop (Magnetic Fields due to Electric Current, Ch.10)" },
    },
    {
      id: "C03-M5",
      mistake: "Multiplies the current by the circumference instead of the area.",
      remediation: t`A loop's moment uses its area, $\pi r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Uses the charge in place of the mass in the angular momentum.",
      remediation: t`$L = m_evr$: angular momentum depends on mass, not charge.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: t`Forgets $r$: gives the linear momentum.`,
      remediation: t`Angular momentum is momentum times radius: $L = m_evr$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: t`Divides by $r$ instead of multiplying.`,
      remediation: t`$L = m_evr$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: t`Drops $n$.`,
      remediation: t`In the $n$th orbit $L = \dfrac{nh}{2\pi}$, so $m_{orb} = \dfrac{neh}{4\pi m_e}$; $\dfrac{eh}{4\pi m_e}$ is the first orbit's.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Treats the electron as a positive charge.",
      remediation: "The electron is negative, so the current runs opposite to its motion; the right-hand rule then gives the moment.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Puts the magnetic moment along the orbit.",
      remediation: "A loop's moment is along its axis, at right angles to the plane of the orbit.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Thinks a circling charge has no magnetic moment.",
      remediation: "A circling charge is a current loop, and every current loop is a magnetic dipole.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Solved Ex.11.2" },
      stem: t`What is the gyromagnetic ratio of an orbiting electron, its orbital magnetic moment per unit angular momentum? (Take $e = 1.6 \times 10^{-19}\ \mathrm{C}$ and $m_e = 9.1 \times 10^{-31}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "gyro" } },
      options: [
        { key: "A", text: t`$1.14 \times 10^{-11}\ \mathrm{C/kg}$`, correct: false, misconceptionId: "C03-M2", value: "1.14000000000000e-11" },
        { key: "B", text: t`$4.79 \times 10^{7}\ \mathrm{C/kg}$`, correct: false, misconceptionId: "C03-M3", value: "47900000" },
        { key: "C", text: t`$8.79 \times 10^{10}\ \mathrm{C/kg}$`, correct: true, value: "87900000000" },
        { key: "D", text: t`$1.76 \times 10^{11}\ \mathrm{C/kg}$`, correct: false, misconceptionId: "C03-M1", value: "176000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{m_{orb}}{L}$ $= \dfrac{e}{2m_e}$ $= \dfrac{1.6 \times 10^{-19}}{2 \times 9.1 \times 10^{-31}}$.`,
          t`$\approx 8.79 \times 10^{10}\ \mathrm{C/kg}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.6" },
      stem: t`An electron circles a nucleus in an orbit of radius $5.3 \times 10^{-11}\ \mathrm{m}$ at $2 \times 10^6\ \mathrm{m/s}$. What is its orbital magnetic moment? (Take $e = 1.6 \times 10^{-19}\ \mathrm{C}$ and $m_e = 9.1 \times 10^{-31}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: { r: "5.3e-11", v: "2e6" }, params: { ask: "moment" } },
      options: [
        { key: "A", text: t`$9.61 \times 10^{-4}\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C03-M4", value: "0.000961000000000000" },
        { key: "B", text: t`$3.2 \times 10^{-13}\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C03-M5", value: "3.20000000000000e-13" },
        { key: "C", text: t`$8.48 \times 10^{-24}\ \mathrm{A\,m^2}$`, correct: true, value: "8.48000000000000e-24" },
        { key: "D", text: t`$1.7 \times 10^{-23}\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C03-M1", value: "1.70000000000000e-23" },
      ],
      solution: {
        steps: [
          t`$m_{orb} = \dfrac{evr}{2}$ $= \dfrac{1.6 \times 10^{-19} \times 2 \times 10^6 \times 5.3 \times 10^{-11}}{2}$.`,
          t`$m_{orb} \approx 8.48 \times 10^{-24}\ \mathrm{A\,m^2}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/magnetic-materials-12-phy/Ex Q.6" },
      stem: t`An electron circles a nucleus in an orbit of radius $5.3 \times 10^{-11}\ \mathrm{m}$ at $2 \times 10^6\ \mathrm{m/s}$. What is its orbital angular momentum? (Take $e = 1.6 \times 10^{-19}\ \mathrm{C}$ and $m_e = 9.1 \times 10^{-31}\ \mathrm{kg}$.)`,
      verify: { kind: "value", inputs: { r: "5.3e-11", v: "2e6" }, params: { ask: "L" } },
      options: [
        { key: "A", text: t`$1.7 \times 10^{-23}\ \mathrm{kg\,m^2/s}$`, correct: false, misconceptionId: "C03-M6", value: "1.70000000000000e-23" },
        { key: "B", text: t`$1.82 \times 10^{-24}\ \mathrm{kg\,m^2/s}$`, correct: false, misconceptionId: "C03-M7", value: "1.82000000000000e-24" },
        { key: "C", text: t`$3.43 \times 10^{-14}\ \mathrm{kg\,m^2/s}$`, correct: false, misconceptionId: "C03-M8", value: "3.43000000000000e-14" },
        { key: "D", text: t`$9.65 \times 10^{-35}\ \mathrm{kg\,m^2/s}$`, correct: true, value: "9.65000000000000e-35" },
      ],
      solution: {
        steps: [
          t`$L = m_evr$ $= 9.1 \times 10^{-31} \times 2 \times 10^6 \times 5.3 \times 10^{-11}$.`,
          t`$L \approx 9.65 \times 10^{-35}\ \mathrm{kg\,m^2/s}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.2(viii)" },
      stem: t`What is the orbital magnetic moment of an electron in the $n$th Bohr orbit?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "bohr" } },
      options: [
        { key: "A", text: t`$\dfrac{neh}{4\pi m_p}$, with $m_p$ the proton's mass`, correct: false, misconceptionId: "C03-M3", value: "proton" },
        { key: "B", text: t`$\dfrac{eh}{4\pi m_e}$`, correct: false, misconceptionId: "C03-M9", value: "no_n" },
        { key: "C", text: t`$\dfrac{neh}{4\pi m_e}$`, correct: true, value: "neh_4pim" },
        { key: "D", text: t`$\dfrac{neh}{2\pi m_e}$`, correct: false, misconceptionId: "C03-M1", value: "neh_2pim" },
      ],
      solution: {
        steps: [
          t`$m_{orb} = \dfrac{e}{2m_e}L$, with $L = \dfrac{nh}{2\pi}$ in the $n$th orbit.`,
          t`$m_{orb} = \dfrac{neh}{4\pi m_e}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`Seen from above, an electron circles a nucleus clockwise. Which way does its orbital magnetic moment point?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dir" } },
      options: [
        { key: "A", text: t`Upwards, towards the viewer`, correct: true, value: "up" },
        { key: "B", text: t`Downwards, away from the viewer`, correct: false, misconceptionId: "C03-M10", value: "down" },
        { key: "C", text: t`Along the orbit, the way the electron moves`, correct: false, misconceptionId: "C03-M11", value: "along" },
        { key: "D", text: t`Nowhere: a circling charge has no magnetic moment`, correct: false, misconceptionId: "C03-M12", value: "none" },
      ],
      solution: {
        steps: [
          t`The electron is negative, so the current circles anticlockwise seen from above.`,
          t`By the right-hand rule an anticlockwise current gives a moment pointing up, towards the viewer.`,
        ],
      },
    },
  ],
};
