import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Things can be heated to millions of degrees, yet nothing can be cooled below about $-273\ ^\circ\mathrm{C}$. Why is there a lowest temperature but no highest?`,
    reveal: t`Cool a gas and its volume (or pressure) shrinks along a straight line that reaches zero at $-273.15\ ^\circ\mathrm{C}$. A volume cannot go below zero, so this is the lowest temperature possible: **absolute zero**.`,
  },
  explanation: {
    intuition: [
      t`A gas's state is described by its **pressure** $P$, **volume** $V$ and temperature $T$.`,
      t`Squeeze a gas at a fixed temperature and its pressure rises.`,
      t`Heat a gas at a fixed pressure and it expands; heat it in a closed rigid box and its pressure rises.`,
      t`Extended backwards, these straight lines all reach zero at one temperature, $-273.15\ ^\circ\mathrm{C}$, called **absolute zero**.`,
      t`Measured from absolute zero, temperature is called **absolute temperature**, in kelvin.`,
      t`The gas laws work only with absolute temperature.`,
    ],
    formal: [
      {
        title: "Boyle's and Charles' laws",
        points: [
          t`**Boyle's law**: for a fixed mass of gas at constant temperature, $PV$ = constant.`,
          t`**Charles' law**: at constant pressure, $V$ grows linearly with temperature.`,
          t`At constant volume, $P$ also grows linearly with temperature.`,
          t`These laws hold well for gases at low density, called **ideal gases**.`,
        ],
      },
      {
        title: "Absolute zero and the kelvin scale",
        points: [
          t`Plot $V$ against $T$ in $^\circ\mathrm{C}$ for any gas and extend the line backwards.`,
          t`Every line meets $V = 0$ at the same point, $-273.15\ ^\circ\mathrm{C}$, whatever the gas or its amount.`,
          t`The kelvin scale puts its zero there: $T_K = T_C + 273.15$.`,
          t`On this scale $V \propto T$ at constant pressure, and $P \propto T$ at constant volume.`,
          t`The triple point of water, where ice, water and vapour coexist, is fixed at $273.16\ \mathrm{K}$.`,
        ],
      },
      {
        title: "The ideal gas equation",
        points: [
          t`Combining the laws, for a fixed mass of gas $\dfrac{PV}{T}$ = constant.`,
          t`So $\dfrac{P_1V_1}{T_1}$ $= \dfrac{P_2V_2}{T_2}$, with $T$ always in kelvin.`,
          t`For $n$ moles, $PV = nRT$, where $R = 8.314\ \mathrm{J/(mol\,K)}$ is the **universal gas constant**.`,
          t`Use SI units: $P$ in pascal, $V$ in cubic metre, $T$ in kelvin.`,
        ],
      },
    ],
    worked: {
      prompt: t`A constant-volume gas thermometer reads $1.367 \times 10^3\ \mathrm{Pa}$ at the steam point. Its pressure is proportional to absolute temperature. What does it read at the triple point of water, $273.16\ \mathrm{K}$?`,
      steps: [
        t`The steam point is $100\ ^\circ\mathrm{C}$ $= 373.15\ \mathrm{K}$.`,
        t`$P \propto T$, so $\dfrac{P_{tr}}{P}$ $= \dfrac{273.16}{373.15}$.`,
        t`$P_{tr}$ $= 1.367 \times 10^3 \times \dfrac{273.16}{373.15}$ $= 1.000 \times 10^3\ \mathrm{Pa}$.`,
      ],
      answer: t`$1.000 \times 10^3\ \mathrm{Pa}$`,
    },
    visualSpec: t`Slide a gas's temperature down and watch its V-T line head for zero volume at -273.15 degrees Celsius, whatever the gas.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Puts temperatures into the gas laws in degrees Celsius.",
      remediation: t`The gas laws hold only for absolute temperature: add $273.15$ to every Celsius reading first.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M2",
      mistake: "Applies only one of the two changes.",
      remediation: t`$T_2$ $= T_1 \times \dfrac{P_2}{P_1} \times \dfrac{V_2}{V_1}$: both halvings act, so $T$ falls to a quarter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Thinks halving both pressure and volume leaves the temperature unchanged.",
      remediation: t`Boyle's law is for constant temperature; here $\dfrac{PV}{T}$ is constant, and $PV$ falls to a quarter.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks a gas's volume would vanish at 0 degrees Celsius.",
      remediation: t`$0\ ^\circ\mathrm{C}$ is only where ice melts; the extended line reaches zero volume at $-273.15\ ^\circ\mathrm{C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: "Thinks each gas reaches zero volume at its own temperature.",
      remediation: t`The lines have different slopes but all meet $V = 0$ at $-273.15\ ^\circ\mathrm{C}$: that is why absolute zero is universal.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Mixes up the units: writes absolute zero as -273.15 K.",
      remediation: t`Absolute zero is $0\ \mathrm{K}$, which is $-273.15\ ^\circ\mathrm{C}$; no temperature is below $0\ \mathrm{K}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M7",
      mistake: "Takes volume (or pressure) as inversely proportional to temperature.",
      remediation: t`Heating makes a gas expand at constant pressure, or press harder at constant volume: $V \propto T$, $P \propto T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M8",
      mistake: "Gives the change instead of the new value.",
      remediation: "The ratio of absolute temperatures gives the new value itself, not the increase.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M9",
      mistake: "Leaves the volume in litres.",
      remediation: t`$PV = nRT$ needs SI units: $20\ \mathrm{L}$ $= 0.020\ \mathrm{m^3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M10",
      mistake: t`Inverts $PV = nRT$.`,
      remediation: t`$n = \dfrac{PV}{RT}$: more pressure or volume means more gas.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (ix)" },
      stem: t`A fixed mass of gas at $900\ ^\circ\mathrm{C}$ is cooled until both its pressure and its volume are halved. What is its final temperature, in degrees Celsius? (Take $0\ ^\circ\mathrm{C} = 273.15\ \mathrm{K}$.)`,
      verify: { kind: "value", inputs: { Tc: "900", fP: "1/2", fV: "1/2" }, params: { ask: "both" } },
      options: [
        { key: "A", text: t`$20.1\ \mathrm{^\circ C}$`, correct: true, value: "20.1000000000000" },
        { key: "B", text: t`$225\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C02-M1", value: "225" },
        { key: "C", text: t`$313\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C02-M2", value: "313" },
        { key: "D", text: t`$900\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C02-M3", value: "900" },
      ],
      solution: {
        steps: [
          t`$T_1 = 900 + 273.15$ $= 1173.15\ \mathrm{K}$.`,
          t`$\dfrac{P_1V_1}{T_1}$ $= \dfrac{P_2V_2}{T_2}$ with $P_2V_2 = \dfrac{1}{4}P_1V_1$, so $T_2 = \dfrac{T_1}{4}$.`,
          t`$T_2 = 293.29\ \mathrm{K}$ $= 293.29 - 273.15$ $\approx 20.1\ ^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (v)" },
      stem: t`At constant pressure, the volume of a fixed mass of gas varies linearly with its temperature in $^\circ\mathrm{C}$. If the gas never liquefied, at what temperature would the straight line reach zero volume?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "zero" } },
      options: [
        { key: "A", text: t`At $0\ ^\circ\mathrm{C}$, the ice point, for every gas`, correct: false, misconceptionId: "C02-M4", value: "zero_celsius" },
        { key: "B", text: t`At a different temperature for each gas, set by its slope`, correct: false, misconceptionId: "C02-M5", value: "depends_on_gas" },
        { key: "C", text: t`At $-273.15\ \mathrm{K}$, the same for every gas`, correct: false, misconceptionId: "C02-M6", value: "minus_273_kelvin" },
        { key: "D", text: t`At $-273.15\ ^\circ\mathrm{C}$, the same for every gas`, correct: true, value: "minus_273_celsius" },
      ],
      solution: {
        steps: [
          t`The lines for all gases, and all amounts of gas, meet the temperature axis at one point.`,
          t`That point is $-273.15\ ^\circ\mathrm{C}$, absolute zero, $0\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "authored" },
      stem: t`A gas occupies $300\ \mathrm{cm^3}$ at $27\ ^\circ\mathrm{C}$. It is heated to $127\ ^\circ\mathrm{C}$ at constant pressure. What is its new volume? (Take $0\ ^\circ\mathrm{C} = 273.15\ \mathrm{K}$.)`,
      verify: { kind: "value", inputs: { V1: "300", T1: "27", T2: "127" }, params: { ask: "charles" } },
      options: [
        { key: "A", text: t`$100\ \mathrm{cm^3}$`, correct: false, misconceptionId: "C02-M8", value: "100" },
        { key: "B", text: t`$400\ \mathrm{cm^3}$`, correct: true, value: "400" },
        { key: "C", text: t`$1410\ \mathrm{cm^3}$`, correct: false, misconceptionId: "C02-M1", value: "1410" },
        { key: "D", text: t`$225\ \mathrm{cm^3}$`, correct: false, misconceptionId: "C02-M7", value: "225" },
      ],
      solution: {
        steps: [
          t`$T_1 = 300.15\ \mathrm{K}$, $T_2 = 400.15\ \mathrm{K}$.`,
          t`At constant pressure $V \propto T$: $V_2$ $= 300 \times \dfrac{400.15}{300.15}$ $\approx 400\ \mathrm{cm^3}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`A cylinder of volume $20\ \mathrm{L}$ holds a gas at a pressure of $3.0 \times 10^5\ \mathrm{Pa}$ and a temperature of $27\ ^\circ\mathrm{C}$. How many moles of gas does it hold? ($R = 8.314\ \mathrm{J/(mol\,K)}$, $1\ \mathrm{L} = 10^{-3}\ \mathrm{m^3}$, $0\ ^\circ\mathrm{C} = 273.15\ \mathrm{K}$.)`,
      verify: { kind: "value", inputs: { P: "300000", VL: "20", Tc: "27" }, params: { ask: "moles" } },
      options: [
        { key: "A", text: t`$0.416\ \mathrm{mol}$`, correct: false, misconceptionId: "C02-M10", value: "0.416000000000000" },
        { key: "B", text: t`$2.4\ \mathrm{mol}$`, correct: true, value: "2.40000000000000" },
        { key: "C", text: t`$26.7\ \mathrm{mol}$`, correct: false, misconceptionId: "C02-M1", value: "26.7000000000000" },
        { key: "D", text: t`$2400\ \mathrm{mol}$`, correct: false, misconceptionId: "C02-M9", value: "2400" },
      ],
      solution: {
        steps: [
          t`$V = 20 \times 10^{-3}$ $= 0.020\ \mathrm{m^3}$, $T = 300.15\ \mathrm{K}$.`,
          t`$n = \dfrac{PV}{RT}$ $= \dfrac{3.0 \times 10^5 \times 0.020}{8.314 \times 300.15}$ $\approx 2.40\ \mathrm{mol}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`A sealed steel tank holds air at $2.0 \times 10^5\ \mathrm{Pa}$ at $27\ ^\circ\mathrm{C}$. In the sun the air warms to $57\ ^\circ\mathrm{C}$. What is the new pressure? (Take $0\ ^\circ\mathrm{C} = 273.15\ \mathrm{K}$; the tank does not expand.)`,
      verify: { kind: "value", inputs: { P1: "200000", T1: "27", T2: "57" }, params: { ask: "lussac" } },
      options: [
        { key: "A", text: t`$20000\ \mathrm{Pa}$`, correct: false, misconceptionId: "C02-M8", value: "20000" },
        { key: "B", text: t`$2.2 \times 10^{5}\ \mathrm{Pa}$`, correct: true, value: "220000" },
        { key: "C", text: t`$4.22 \times 10^{5}\ \mathrm{Pa}$`, correct: false, misconceptionId: "C02-M1", value: "422000" },
        { key: "D", text: t`$1.82 \times 10^{5}\ \mathrm{Pa}$`, correct: false, misconceptionId: "C02-M7", value: "182000" },
      ],
      solution: {
        steps: [
          t`$T_1 = 300.15\ \mathrm{K}$, $T_2 = 330.15\ \mathrm{K}$.`,
          t`At constant volume $P \propto T$: $P_2$ $= 2.0 \times 10^5 \times \dfrac{330.15}{300.15}$ $\approx 2.20 \times 10^5\ \mathrm{Pa}$.`,
        ],
      },
    },
  ],
};
