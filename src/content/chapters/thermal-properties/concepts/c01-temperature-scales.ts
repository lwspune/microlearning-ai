import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A Celsius thermometer and a Fahrenheit thermometer hang side by side in a freezer. Is there a temperature at which both show the same number?`,
    reveal: t`Yes: at $-40$ both read $-40$. The two scales give different numbers because they start at different points and use different-sized degrees; one relation links them.`,
  },
  explanation: {
    intuition: [
      t`**Temperature** tells how hot or cold a body is.`,
      t`**Heat** is energy that flows from a hotter body to a colder one only because of their temperature difference.`,
      t`Heat stops flowing when the two bodies reach the same temperature: they are then in **thermal equilibrium**.`,
      t`A **thermometer** uses a property that changes steadily with temperature, such as the length of a mercury column.`,
      t`Three scales are in use: Celsius ($^\circ\mathrm{C}$), Fahrenheit ($^\circ\mathrm{F}$) and Kelvin ($\mathrm{K}$).`,
    ],
    formal: [
      {
        title: "Heat and temperature",
        points: [
          t`Heat is energy in transit, measured in joule ($\mathrm{J}$) or calorie ($\mathrm{cal}$).`,
          t`Temperature decides the direction of heat flow: always from higher temperature to lower.`,
          t`A big cool body can hold more energy than a small hot one, yet heat still flows from the hot one.`,
          t`Temperature measures the average kinetic energy of a body's molecules.`,
        ],
      },
      {
        title: "Calibrating a thermometer",
        points: [
          t`Two **fixed points** are chosen: the **ice point** (ice melts) and the **steam point** (water boils), at normal pressure.`,
          t`On the Celsius scale they are marked $0$ and $100$, and the gap is split into $100$ equal parts.`,
          t`Let a property read $P_1$ at the ice point, $P_2$ at the steam point and $P$ at the unknown temperature.`,
          t`Then $T$ $= \dfrac{100\,(P - P_1)}{P_2 - P_1}\ ^\circ\mathrm{C}$.`,
          t`Any two linear scales agree on the same **fraction** of the gap between their fixed points.`,
        ],
      },
      {
        title: "The three scales",
        points: [
          t`Celsius: ice point $0\ ^\circ\mathrm{C}$, steam point $100\ ^\circ\mathrm{C}$, so $100$ divisions.`,
          t`Fahrenheit: ice point $32\ ^\circ\mathrm{F}$, steam point $212\ ^\circ\mathrm{F}$, so $180$ divisions.`,
          t`Kelvin: ice point $273.15\ \mathrm{K}$, steam point $373.15\ \mathrm{K}$, so $100$ divisions.`,
          t`$\dfrac{T_C}{100}$ $= \dfrac{T_F - 32}{180}$ $= \dfrac{T_K - 273.15}{100}$.`,
        ],
      },
      {
        title: "Converting readings and differences",
        points: [
          t`From Celsius: $T_F = \dfrac{9}{5}T_C + 32$ and $T_K = T_C + 273.15$.`,
          t`A temperature **difference** has no starting point, so the offsets $32$ and $273.15$ drop out.`,
          t`A difference of $1\ ^\circ\mathrm{C}$ equals $1\ \mathrm{K}$, but equals $1.8\ ^\circ\mathrm{F}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Normal human body temperature is $98.4\ ^\circ\mathrm{F}$. Express it in degrees Celsius and in kelvin.`,
      steps: [
        t`$\dfrac{T_C}{100}$ $= \dfrac{T_F - 32}{180}$, so $T_C = \dfrac{100}{180}(T_F - 32)$.`,
        t`$T_C = \dfrac{100}{180}(98.4 - 32)$ $= \dfrac{100}{180} \times 66.4$ $= 36.89\ ^\circ\mathrm{C}$.`,
        t`$T_K = T_C + 273.15$ $= 36.89 + 273.15$ $= 310.04\ \mathrm{K}$.`,
      ],
      answer: t`$36.89\ ^\circ\mathrm{C}$, $310.04\ \mathrm{K}$`,
    },
    visualSpec: t`Drag a marker up one thermometer and watch the matching readings move on Celsius, Fahrenheit and Kelvin scales side by side.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Adds 32 when converting a temperature difference.",
      remediation: t`A difference has no starting point: $\Delta T_F$ $= \dfrac{9}{5}\Delta T_C$, with no $+32$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Uses $\dfrac{100}{180}$ where $\dfrac{180}{100}$ belongs.`,
      remediation: t`A Fahrenheit degree is smaller, so there are more of them: multiply Celsius by $\dfrac{9}{5}$ to get Fahrenheit.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Forgets the 32 when converting a reading.",
      remediation: t`The Fahrenheit ice point is $32$: $T_F = \dfrac{9}{5}T_C + 32$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Adds the 32 before scaling: $T_F = \dfrac{9}{5}(T_C + 32)$.`,
      remediation: t`The $32$ is on the Fahrenheit side: scale first, then add, $T_F = \dfrac{9}{5}T_C + 32$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Thinks a temperature difference is the same number on both scales.",
      remediation: t`One Celsius degree is $1.8$ Fahrenheit degrees, so a difference of $25\ ^\circ\mathrm{C}$ is $45\ ^\circ\mathrm{F}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Adds 273.15 to a kelvin reading to get Celsius.",
      remediation: t`The kelvin number is the larger one: $T_C = T_K - 273.15$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Treats the reading as proportional to temperature, starting from zero.",
      remediation: "Neither scale starts at zero at the ice point: use the same fraction of the gap between the fixed points on both.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Forgets to add the lower fixed point of the new scale.",
      remediation: "The fraction of the gap gives the distance above the ice point: add the ice-point reading back.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Takes the whole steam-point reading as the size of the gap.",
      remediation: "The gap between the fixed points is steam reading minus ice reading.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks heat flows from the body that holds more heat.",
      remediation: "Temperature, not the amount of energy, decides the direction: heat flows from the hotter body to the colder one.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks cold flows from a cold body into a hot one.",
      remediation: "Only heat flows, and it flows from hot to cold; the colder body warms by receiving heat.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks heat flows until both bodies hold the same amount of heat.",
      remediation: "Heat stops flowing when the temperatures are equal: that is thermal equilibrium.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.1" },
      stem: t`On a hot afternoon a thermometer reads $35\ ^\circ\mathrm{C}$. What is this temperature on the Fahrenheit scale?`,
      verify: { kind: "value", inputs: { C: "35" }, params: { ask: "c2f" } },
      options: [
        { key: "A", text: t`$95\ \mathrm{^\circ F}$`, correct: true, value: "95" },
        { key: "B", text: t`$51.4\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M2", value: "51.4000000000000" },
        { key: "C", text: t`$63\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M3", value: "63" },
        { key: "D", text: t`$121\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M4", value: "121" },
      ],
      solution: {
        steps: [
          t`$T_F = \dfrac{9}{5}T_C + 32$.`,
          t`$T_F = \dfrac{9}{5} \times 35 + 32$ $= 63 + 32 = 95\ ^\circ\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.5" },
      stem: t`A gas is cooled to $24.57\ \mathrm{K}$. What is this temperature on the Fahrenheit scale? (Take $0\ ^\circ\mathrm{C} = 273.15\ \mathrm{K}$.)`,
      verify: { kind: "value", inputs: { K: "24.57" }, params: { ask: "k2f" } },
      options: [
        { key: "A", text: t`$-415\ \mathrm{^\circ F}$`, correct: true, value: "-415" },
        { key: "B", text: t`$-447\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M3", value: "-447" },
        { key: "C", text: t`$-390\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M4", value: "-390" },
        { key: "D", text: t`$568\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M6", value: "568" },
      ],
      solution: {
        steps: [
          t`$T_C = T_K - 273.15$ $= 24.57 - 273.15$ $= -248.58\ ^\circ\mathrm{C}$.`,
          t`$T_F = \dfrac{9}{5}(-248.58) + 32$ $= -447.44 + 32$ $\approx -415\ ^\circ\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.1 (iii)" },
      stem: t`Two temperatures differ by $25$ degrees on the Celsius scale. By how many degrees do they differ on the Fahrenheit scale?`,
      verify: { kind: "value", inputs: { dC: "25" }, params: { ask: "diff" } },
      options: [
        { key: "A", text: t`$13.9\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M2", value: "13.9000000000000" },
        { key: "B", text: t`$25\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M5", value: "25" },
        { key: "C", text: t`$45\ \mathrm{^\circ F}$`, correct: true, value: "45" },
        { key: "D", text: t`$77\ \mathrm{^\circ F}$`, correct: false, misconceptionId: "C01-M1", value: "77" },
      ],
      solution: {
        steps: [
          t`For a difference the $32$ drops out: $\Delta T_F$ $= \dfrac{180}{100}\Delta T_C$.`,
          t`$\Delta T_F = 1.8 \times 25$ $= 45\ ^\circ\mathrm{F}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (viii)" },
      stem: t`On a temperature scale X, water freezes at $20\ ^\circ\mathrm{X}$ and boils at $200\ ^\circ\mathrm{X}$. A liquid boils at $62\ ^\circ\mathrm{C}$. What is its boiling point on scale X?`,
      verify: { kind: "value", inputs: { L: "0", U: "100", x: "62", l2: "20", u2: "200" }, params: { ask: "fixed", sf: "4" } },
      options: [
        { key: "A", text: t`$131.6\ \mathrm{^\circ X}$`, correct: true, value: "131.600000000000" },
        { key: "B", text: t`$124\ \mathrm{^\circ X}$`, correct: false, misconceptionId: "C01-M7", value: "124" },
        { key: "C", text: t`$111.6\ \mathrm{^\circ X}$`, correct: false, misconceptionId: "C01-M8", value: "111.600000000000" },
        { key: "D", text: t`$144\ \mathrm{^\circ X}$`, correct: false, misconceptionId: "C01-M9", value: "144" },
      ],
      solution: {
        steps: [
          t`$62\ ^\circ\mathrm{C}$ is $\dfrac{62}{100} = 0.62$ of the way from the ice point to the steam point.`,
          t`On scale X the gap is $200 - 20 = 180$ degrees, starting at $20$.`,
          t`$T_X = 20 + 0.62 \times 180$ $= 20 + 111.6$ $= 131.6\ ^\circ\mathrm{X}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.4" },
      stem: t`A resistance thermometer reads $95.2\ \Omega$ at the ice point and $138.6\ \Omega$ at the steam point. Its resistance changes uniformly with temperature. What does it read at $27\ ^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { L: "0", U: "100", x: "27", l2: "95.2", u2: "138.6" }, params: { ask: "fixed", sf: "4" } },
      options: [
        { key: "A", text: t`$106.9\ \mathrm{\Omega}$`, correct: true, value: "106.900000000000" },
        { key: "B", text: t`$37.42\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C01-M7", value: "37.4200000000000" },
        { key: "C", text: t`$11.72\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C01-M8", value: "11.7200000000000" },
        { key: "D", text: t`$132.6\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C01-M9", value: "132.600000000000" },
      ],
      solution: {
        steps: [
          t`$27\ ^\circ\mathrm{C}$ is $0.27$ of the gap; the gap in resistance is $138.6 - 95.2 = 43.4\ \Omega$.`,
          t`$R = 95.2 + 0.27 \times 43.4$ $= 95.2 + 11.72$ $\approx 106.9\ \Omega$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.2 (i)" },
      stem: t`A small hot iron nail is dropped into a large bucket of cool water. Which statement about the heat is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "flow" } },
      options: [
        { key: "A", text: t`Cold flows from the water into the nail until the nail is as cold as the water`, correct: false, misconceptionId: "C01-M11", value: "cold_flows" },
        { key: "B", text: t`Heat flows from the nail to the water until both hold the same amount of heat`, correct: false, misconceptionId: "C01-M12", value: "equal_heat" },
        { key: "C", text: t`Heat flows from the nail to the water until both are at the same temperature`, correct: true, value: "hot_to_cold" },
        { key: "D", text: t`Heat flows from the water to the nail, because the large bucket of water holds more heat`, correct: false, misconceptionId: "C01-M10", value: "more_heat_to_less" },
      ],
      solution: {
        steps: [
          t`Heat flows from the hotter body to the colder one, whatever their sizes.`,
          t`It stops when the nail and the water reach the same temperature, not when they hold equal heat.`,
        ],
      },
    },
  ],
};
