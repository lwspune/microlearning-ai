import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Milk keeps for a week in a fridge at $4^\circ\mathrm{C}$ but turns sour in a day at $35^\circ\mathrm{C}$. How can a modest rise in temperature speed the souring so much?`,
    reveal: t`The souring reactions need collisions with energy at least $E_a$. The fraction of such collisions, $e^{-E_a/RT}$, grows steeply with $T$, so the rate constant climbs far faster than the temperature itself.`,
  },
  explanation: {
    intuition: [
      t`Raising the temperature raises the rate constant $k$, usually steeply.`,
      t`Hotter molecules move faster, so more collisions carry at least $E_a$.`,
      t`That fraction, $e^{-E_a/RT}$, grows rapidly as $T$ rises.`,
      t`Arrhenius wrote $k = A\,e^{-E_a/RT}$, where $A$ reflects how often molecules collide in the right orientation.`,
      t`A larger $E_a$ makes $k$ smaller and more sensitive to temperature.`,
      t`$k$ depends on temperature and $E_a$, not on the concentrations.`,
    ],
    formal: [
      {
        title: "The Arrhenius equation",
        points: [
          t`$k = A\,e^{-E_a/RT}$ is the **Arrhenius equation**.`,
          t`$A$, the **frequency factor** (pre-exponential factor), has the same units as $k$.`,
          t`$e^{-E_a/RT}$ is the fraction of collisions with energy at least $E_a$.`,
          t`Use $E_a$ in $\mathrm{J\,mol^{-1}}$, $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$ and $T$ in kelvin.`,
          t`Taking logs: $\ln k = \ln A - \dfrac{E_a}{RT}$.`,
          t`In base 10: $\log_{10}k = \log_{10}A - \dfrac{E_a}{2.303RT}$.`,
        ],
      },
      {
        title: "Activation energy from a graph",
        points: [
          t`A plot of $\log_{10}k$ against $\dfrac{1}{T}$ is a straight line.`,
          t`Its slope is $-\dfrac{E_a}{2.303R}$, so $E_a = -2.303R \times \text{slope}$.`,
          t`Its intercept on the $\log_{10}k$ axis is $\log_{10}A$.`,
          t`A steeper line means a larger $E_a$, and a $k$ more sensitive to $T$.`,
        ],
      },
      {
        title: "Rate constants at two temperatures",
        points: [
          t`Write the log form at $T_1$ and at $T_2$ and subtract: $A$ cancels.`,
          t`$\log_{10}\dfrac{k_2}{k_1}$ $= \dfrac{E_a}{2.303R}$ $\times \dfrac{T_2 - T_1}{T_1 T_2}$.`,
          t`With $T_2 > T_1$ the right side is positive, so $k_2 > k_1$.`,
          t`Convert Celsius to kelvin first: $T = t + 273$.`,
          t`First order: $t_{1/2} = \dfrac{0.693}{k}$, so $\dfrac{(t_{1/2})_1}{(t_{1/2})_2}$ $= \dfrac{k_2}{k_1}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The rate constants of a first order reaction are $0.045\ \mathrm{s^{-1}}$ at $293\ \mathrm{K}$ and $0.6\ \mathrm{s^{-1}}$ at $313\ \mathrm{K}$. Find the activation energy.`,
      steps: [
        t`$\dfrac{k_2}{k_1} = \dfrac{0.6}{0.045}$ $= 13.33$, and $\log_{10}13.33 = 1.125$.`,
        t`$\dfrac{T_2 - T_1}{T_1 T_2} = \dfrac{20}{293 \times 313}$ $= 2.181 \times 10^{-4}\ \mathrm{K^{-1}}$.`,
        t`$E_a = 2.303 \times 8.314 \times 1.125$ $\div (2.181 \times 10^{-4})$.`,
        t`$E_a = 98800\ \mathrm{J\,mol^{-1}}$ $= 98.8\ \mathrm{kJ\,mol^{-1}}$.`,
      ],
      answer: t`$E_a = 98.8\ \mathrm{kJ\,mol^{-1}}$`,
    },
    visualSpec: t`Drag the temperature up and watch the tail of the energy distribution beyond $E_a$ swell, with $k$ climbing on a $\log_{10}k$ against $1/T$ line beside it.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Puts $E_a$ in $\mathrm{kJ\,mol^{-1}}$ while $R$ is in $\mathrm{J\,K^{-1}\,mol^{-1}}$.`,
      remediation: t`Convert $E_a$ to $\mathrm{J\,mol^{-1}}$ (multiply by $1000$) so it matches $R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Leaves a temperature in degrees Celsius, or a time in minutes, where the equation needs kelvin or seconds.",
      remediation: t`Use $T = t + 273$ in kelvin, and put the time in the unit of $A$ (seconds for $\mathrm{s^{-1}}$) before comparing $k$ with $A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: t`Gets the direction backwards: thinks $k$ falls as $T$ rises, or turns the ratio of rate constants upside down.`,
      remediation: t`$k = A\,e^{-E_a/RT}$ grows with $T$: a higher temperature always gives a larger $k$ and a shorter half life.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M4",
      mistake: t`Uses $\log_{10}$ without the factor $2.303$.`,
      remediation: t`$\ln x = 2.303\log_{10}x$, so in base 10 the equation reads $\log_{10}k = \log_{10}A - \dfrac{E_a}{2.303RT}$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C09-M5",
      mistake: t`Thinks $k$ rises with the concentration of a reactant, as the rate does.`,
      remediation: t`Concentrations change the rate, not $k$: the rate constant depends only on the temperature and the path's $E_a$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C09-M6",
      mistake: "Thinks a higher activation energy gives a larger rate constant.",
      remediation: t`A higher barrier lets fewer collisions over it: $e^{-E_a/RT}$, and so $k$, falls as $E_a$ rises.`,
      fallback: { kind: "concept", id: "C08" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.4 (iv)" },
      stem: t`The rate constant of a reaction doubles when the temperature rises from $30^\circ\mathrm{C}$ to $40^\circ\mathrm{C}$. Its activation energy ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$) is`,
      verify: { kind: "value", inputs: { r: "2", T1: "303", T2: "313" }, params: { ask: "Ea" } },
      options: [
        { key: "A", text: t`$-54.7\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M3", value: "-54.7000000000000" },
        { key: "B", text: t`$23.7\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M4", value: "23.7000000000000" },
        { key: "C", text: t`$54.7\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "54.7000000000000" },
        { key: "D", text: t`$0.692\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C09-M2", value: "0.692000000000000" },
      ],
      solution: {
        steps: [
          t`$T_1 = 303\ \mathrm{K}$, $T_2 = 313\ \mathrm{K}$ and $\dfrac{k_2}{k_1} = 2$.`,
          t`$E_a = 2.303 \times 8.314 \times \log_{10}2$ $\times \dfrac{303 \times 313}{10}$.`,
          t`$E_a = 54700\ \mathrm{J\,mol^{-1}}$ $= 54.7\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.4 (iii)" },
      stem: t`The activation energy of a first order reaction is $104\ \mathrm{kJ\,mol^{-1}}$, and its rate constant at $25^\circ\mathrm{C}$ is $3.7 \times 10^{-5}\ \mathrm{s^{-1}}$. Its rate constant at $30^\circ\mathrm{C}$ ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$) is`,
      verify: { kind: "value", inputs: { k1: "3.7e-5", Ea: "104", T1: "298", T2: "303" }, params: { ask: "k2" } },
      options: [
        { key: "A", text: t`$7.4 \times 10^{-5}\ \mathrm{s^{-1}}$`, correct: true, value: "7.40000000000000e-5" },
        { key: "B", text: t`$3.7 \times 10^{-5}\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C09-M1", value: "3.70000000000000e-5" },
        { key: "C", text: t`$1.85 \times 10^{-5}\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C09-M3", value: "1.85000000000000e-5" },
        { key: "D", text: t`$1.82 \times 10^{-4}\ \mathrm{s^{-1}}$`, correct: false, misconceptionId: "C09-M4", value: "0.000182000000000000" },
      ],
      solution: {
        steps: [
          t`$T_1 = 298\ \mathrm{K}$, $T_2 = 303\ \mathrm{K}$, $E_a = 104000\ \mathrm{J\,mol^{-1}}$.`,
          t`$\log_{10}\dfrac{k_2}{k_1} = \dfrac{104000}{2.303 \times 8.314}$ $\times \dfrac{5}{298 \times 303}$ $= 0.301$.`,
          t`$\dfrac{k_2}{k_1} = 2.00$, so $k_2 = 7.4 \times 10^{-5}\ \mathrm{s^{-1}}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.4 (v)" },
      stem: t`The rate constant of a reaction at $500^\circ\mathrm{C}$ is $1.6 \times 10^{3}\ \mathrm{M^{-1}\,s^{-1}}$, and its activation energy is $56\ \mathrm{kJ\,mol^{-1}}$. Its frequency factor $A$ ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$) is`,
      verify: { kind: "value", inputs: { k: "1.6e3", Ea: "56", T: "773" }, params: { ask: "A" } },
      options: [
        { key: "A", text: t`$1610\ \mathrm{M^{-1}\,s^{-1}}$`, correct: false, misconceptionId: "C09-M1", value: "1610" },
        { key: "B", text: t`$1.13 \times 10^{9}\ \mathrm{M^{-1}\,s^{-1}}$`, correct: false, misconceptionId: "C09-M2", value: "1130000000" },
        { key: "C", text: t`$0.263\ \mathrm{M^{-1}\,s^{-1}}$`, correct: false, misconceptionId: "C09-M3", value: "0.263000000000000" },
        { key: "D", text: t`$9.72 \times 10^{6}\ \mathrm{M^{-1}\,s^{-1}}$`, correct: true, value: "9720000" },
      ],
      solution: {
        steps: [
          t`$T = 500 + 273$ $= 773\ \mathrm{K}$.`,
          t`$\dfrac{E_a}{RT} = \dfrac{56000}{8.314 \times 773}$ $= 8.71$.`,
          t`$A = k\,e^{E_a/RT}$ $= 1.6 \times 10^3 \times e^{8.71}$ $= 9.72 \times 10^{6}\ \mathrm{M^{-1}\,s^{-1}}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Solved Ex.6.14" },
      stem: t`The half life of a first order reaction is $900\ \mathrm{min}$ at $820\ \mathrm{K}$, and its activation energy is $250\ \mathrm{kJ\,mol^{-1}}$. Its half life at $720\ \mathrm{K}$ ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$) is`,
      verify: { kind: "value", inputs: { th1: "900", Ea: "250", T1: "820", T2: "720" }, params: { ask: "th2" } },
      options: [
        { key: "A", text: t`$1.46 \times 10^{5}\ \mathrm{min}$`, correct: true, value: "146000" },
        { key: "B", text: t`$905\ \mathrm{min}$`, correct: false, misconceptionId: "C09-M1", value: "905" },
        { key: "C", text: t`$5.53\ \mathrm{min}$`, correct: false, misconceptionId: "C09-M3", value: "5.53000000000000" },
        { key: "D", text: t`$1.12 \times 10^{8}\ \mathrm{min}$`, correct: false, misconceptionId: "C09-M4", value: "112000000" },
      ],
      solution: {
        steps: [
          t`$\log_{10}\dfrac{k_{820}}{k_{720}} = \dfrac{250000}{2.303 \times 8.314}$ $\times \dfrac{100}{820 \times 720}$ $= 2.21$.`,
          t`$\dfrac{k_{820}}{k_{720}} = 163$: the reaction is $163$ times slower at $720\ \mathrm{K}$.`,
          t`$t_{1/2}$ at $720\ \mathrm{K}$ $= 900 \times 163$ $= 1.46 \times 10^{5}\ \mathrm{min}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/chemical-kinetics-12-pyq#24" },
      stem: t`For a first order reaction $A = 4 \times 10^{13}\ \mathrm{s^{-1}}$ and $E_a = 98.6\ \mathrm{kJ\,mol^{-1}}$. The temperature at which its half life is $10$ minutes ($R = 8.314\ \mathrm{J\,K^{-1}\,mol^{-1}}$) is`,
      verify: { kind: "value", inputs: { A: "4e13", Ea: "98.6", th: "10" }, params: { ask: "T" } },
      options: [
        { key: "A", text: t`$349\ \mathrm{K}$`, correct: false, misconceptionId: "C09-M2", value: "349" },
        { key: "B", text: t`$717\ \mathrm{K}$`, correct: false, misconceptionId: "C09-M4", value: "717" },
        { key: "C", text: t`$311\ \mathrm{K}$`, correct: true, value: "311" },
        { key: "D", text: t`$0.311\ \mathrm{K}$`, correct: false, misconceptionId: "C09-M1", value: "0.311000000000000" },
      ],
      solution: {
        steps: [
          t`$k = \dfrac{0.693}{600\ \mathrm{s}}$ $= 1.155 \times 10^{-3}\ \mathrm{s^{-1}}$.`,
          t`$\dfrac{A}{k} = 3.46 \times 10^{16}$, and $\log_{10}\dfrac{A}{k} = \dfrac{E_a}{2.303RT}$ $= 16.54$.`,
          t`$T = \dfrac{98600}{2.303 \times 8.314 \times 16.54}$ $= 311\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetics-12-chem/Ex Q.1 (ix)" },
      stem: t`For $\ce{2NO + Cl2 -> 2NOCl}$, rate $= k[\ce{NO}]^2[\ce{Cl2}]$. The rate constant $k$ increases with`,
      verify: { kind: "value", inputs: {  }, params: { ask: "raise" } },
      options: [
        { key: "A", text: t`a change to a path of higher activation energy`, correct: false, misconceptionId: "C09-M6", value: "higher_Ea" },
        { key: "B", text: t`a rise in temperature`, correct: true, value: "raise_T" },
        { key: "C", text: t`a fall in temperature`, correct: false, misconceptionId: "C09-M3", value: "lower_T" },
        { key: "D", text: t`a rise in the concentration of $\ce{NO}$`, correct: false, misconceptionId: "C09-M5", value: "raise_conc" },
      ],
      solution: {
        steps: [
          t`$k = A\,e^{-E_a/RT}$ contains no concentration: more $\ce{NO}$ raises the rate, not $k$.`,
          t`As $T$ rises, $e^{-E_a/RT}$ grows, so $k$ increases; a higher $E_a$ would lower it.`,
        ],
      },
    },
  ],
};
