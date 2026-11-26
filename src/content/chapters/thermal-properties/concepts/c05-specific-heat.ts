import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`At noon on a beach the sand is too hot to walk on, but the sea is pleasantly cool. Both got the same sunshine. Why is the sand so much hotter?`,
    reveal: t`Water needs about five times as much heat as sand to warm each kilogram by one degree. The same heat raises the sand's temperature far more. That property is the **specific heat capacity**.`,
  },
  explanation: {
    intuition: [
      t`Heating a body raises its temperature; the heat needed depends on how much there is and what it is made of.`,
      t`Twice the mass needs twice the heat for the same rise in temperature.`,
      t`Some materials, like water, need a lot of heat to warm up; metals need little.`,
      t`When a hot body and a cold body are put together, the hot one loses heat and the cold one gains it.`,
      t`If no heat escapes, the heat lost equals the heat gained.`,
    ],
    formal: [
      {
        title: "Specific heat capacity",
        points: [
          t`The heat $Q$ needed to warm a body of mass $m$ by $\Delta T$ is $Q = m\,s\,\Delta T$.`,
          t`$s$, the **specific heat capacity**, is the heat needed to warm $1\ \mathrm{kg}$ of the substance by $1\ ^\circ\mathrm{C}$ (or $1\ \mathrm{K}$).`,
          t`Its SI unit is $\mathrm{J/(kg\,K)}$; for water, $s \approx 4186\ \mathrm{J/(kg\,K)}$, or $1\ \mathrm{cal/(g\,^\circ C)}$.`,
          t`$\Delta T$ is the rise in temperature, the same number in $^\circ\mathrm{C}$ and in $\mathrm{K}$.`,
        ],
      },
      {
        title: "Thermal capacity",
        points: [
          t`The **thermal capacity** (heat capacity) of a body is the heat needed to raise the whole body's temperature by $1\ ^\circ\mathrm{C}$.`,
          t`Thermal capacity $= m\,s$, in $\mathrm{J/^\circ C}$ or $\mathrm{J/K}$.`,
          t`Specific heat belongs to a material; thermal capacity belongs to a particular body.`,
          t`A gas has two specific heats: one at constant volume, and a larger one at constant pressure, where it also does work expanding.`,
        ],
      },
      {
        title: "Calorimetry",
        points: [
          t`A **calorimeter** is an insulated metal vessel in which hot and cold bodies exchange heat.`,
          t`The principle: heat lost by the hot bodies $=$ heat gained by the cold bodies.`,
          t`The calorimeter itself warms up too, so its own $m\,s\,\Delta T$ counts as heat gained.`,
          t`Every body ends at the same final temperature $T$; each $\Delta T$ is measured from its own starting temperature to $T$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A $0.06\ \mathrm{kg}$ aluminium sphere at $100\ ^\circ\mathrm{C}$ is dropped into a $0.12\ \mathrm{kg}$ copper calorimeter holding $0.30\ \mathrm{kg}$ of water at $25\ ^\circ\mathrm{C}$. The final temperature is $28\ ^\circ\mathrm{C}$. Find the specific heat of aluminium. ($s_{Cu} = 387$, $s_w = 4180$, both in $\mathrm{J/(kg\,K)}$)`,
      steps: [
        t`Heat gained by calorimeter and water: $(0.12 \times 387 + 0.30 \times 4180) \times 3$ $= 3901.3\ \mathrm{J}$.`,
        t`Heat lost by the sphere: $0.06 \times s \times (100 - 28)$ $= 4.32\,s$.`,
        t`Heat lost $=$ heat gained: $s = \dfrac{3901.3}{4.32}$ $\approx 903\ \mathrm{J/(kg\,K)}$.`,
      ],
      answer: t`About $903\ \mathrm{J/(kg\,K)}$`,
    },
    visualSpec: t`Pour a hot block into a calorimeter and watch the two temperatures meet, with bars showing heat lost and heat gained staying equal.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Uses the final temperature in place of the rise in temperature.",
      remediation: t`$\Delta T$ is the change: final temperature minus starting temperature.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Adds 273 to a temperature difference.",
      remediation: t`A rise of $1\ ^\circ\mathrm{C}$ is a rise of $1\ \mathrm{K}$: $\Delta T$ needs no $273$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Leaves out the mass.",
      remediation: t`$s$ is per kilogram: the heat for the whole body is $Q = m\,s\,\Delta T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Divides the specific heat by the mass.",
      remediation: t`A bigger body needs more heat per degree: thermal capacity $= m \times s$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Takes thermal capacity to be the same as specific heat capacity.",
      remediation: t`Specific heat is per kilogram of the material; the block's thermal capacity is $m\,s$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Divides the mass by the specific heat.",
      remediation: t`Thermal capacity $= m \times s$, in $\mathrm{J/^\circ C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: t`Turns $Q = m\,s\,\Delta T$ upside down.`,
      remediation: t`From $Q = m\,s\,\Delta T$: $s = \dfrac{Q}{m\,\Delta T}$ and $\Delta T = \dfrac{Q}{m\,s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Takes the potential energy per kilogram as h instead of gh.",
      remediation: t`Potential energy is $mgh$: $mgh = m\,s\,\Delta T$, so $\Delta T = \dfrac{gh}{s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: t`Takes the potential energy as $\dfrac{1}{2}mgh$.`,
      remediation: t`Potential energy is $mgh$; the $\dfrac{1}{2}$ belongs to kinetic energy, $\dfrac{1}{2}mv^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Forgets the heat taken up by the calorimeter.",
      remediation: t`The calorimeter warms from $20$ to $26\ ^\circ\mathrm{C}$ too: add $m_{Cu}\,s_{Cu}\,\Delta T$ to the heat gained.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Takes the sphere's drop in temperature as from its start to the water's starting temperature.",
      remediation: t`The sphere cools only to the final temperature: its drop is $100 - 26$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Uses the final temperature as the water's rise.",
      remediation: t`The water warms from $20$ to $26\ ^\circ\mathrm{C}$: its rise is $6\ ^\circ\mathrm{C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Averages the two temperatures, ignoring the masses.",
      remediation: t`More water has more say: heat lost $=$ heat gained gives a mass-weighted mean.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Weights each temperature by the other mass.",
      remediation: t`Each water's own mass multiplies its own temperature: $T$ $= \dfrac{m_1T_1 + m_2T_2}{m_1 + m_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Gives the rise in temperature of the cold water as the answer.",
      remediation: t`The question asks for the final temperature: add the rise to the cold water's $20\ ^\circ\mathrm{C}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.13" },
      stem: t`A $4\ \mathrm{kg}$ block of a material with specific heat capacity $300\ \mathrm{J/(kg\,^\circ C)}$ is warmed from $20\ ^\circ\mathrm{C}$ to $30\ ^\circ\mathrm{C}$. How much heat does it receive?`,
      verify: { kind: "value", inputs: { m: "4", s: "300", T1: "20", T2: "30" }, params: { ask: "heat" } },
      options: [
        { key: "A", text: t`$3000\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M3", value: "3000" },
        { key: "B", text: t`$12000\ \mathrm{J}$`, correct: true, value: "12000" },
        { key: "C", text: t`$36000\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M1", value: "36000" },
        { key: "D", text: t`$3.4 \times 10^{5}\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "340000" },
      ],
      solution: {
        steps: [
          t`$\Delta T = 30 - 20$ $= 10\ ^\circ\mathrm{C}$.`,
          t`$Q = m\,s\,\Delta T$ $= 4 \times 300 \times 10$ $= 12000\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.14" },
      stem: t`A copper block has a mass of $0.2\ \mathrm{kg}$. The specific heat capacity of copper is $290\ \mathrm{J/(kg\,^\circ C)}$. What is the thermal capacity of the block?`,
      verify: { kind: "value", inputs: { m: "0.2", s: "290" }, params: { ask: "capacity" } },
      options: [
        { key: "A", text: t`$1450\ \mathrm{J/^\circ C}$`, correct: false, misconceptionId: "C05-M4", value: "1450" },
        { key: "B", text: t`$290\ \mathrm{J/^\circ C}$`, correct: false, misconceptionId: "C05-M5", value: "290" },
        { key: "C", text: t`$6.9 \times 10^{-4}\ \mathrm{J/^\circ C}$`, correct: false, misconceptionId: "C05-M6", value: "0.000690000000000000" },
        { key: "D", text: t`$58\ \mathrm{J/^\circ C}$`, correct: true, value: "58" },
      ],
      solution: {
        steps: [
          t`Thermal capacity $= m\,s$.`,
          t`$= 0.2 \times 290$ $= 58\ \mathrm{J/^\circ C}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (xi)" },
      stem: t`$50\ \mathrm{cal}$ of heat raises the temperature of $6\ \mathrm{kg}$ of a metal from $20\ ^\circ\mathrm{C}$ to $62\ ^\circ\mathrm{C}$. What is the specific heat of the metal?`,
      verify: { kind: "value", inputs: { Q: "50", m: "6", T1: "20", T2: "62" }, params: { ask: "spec" } },
      options: [
        { key: "A", text: t`$0.198\ \mathrm{cal/(kg\,^\circ C)}$`, correct: true, value: "0.198000000000000" },
        { key: "B", text: t`$0.134\ \mathrm{cal/(kg\,^\circ C)}$`, correct: false, misconceptionId: "C05-M1", value: "0.134000000000000" },
        { key: "C", text: t`$1.19\ \mathrm{cal/(kg\,^\circ C)}$`, correct: false, misconceptionId: "C05-M3", value: "1.19000000000000" },
        { key: "D", text: t`$5.04\ \mathrm{cal/(kg\,^\circ C)}$`, correct: false, misconceptionId: "C05-M7", value: "5.04000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta T = 62 - 20$ $= 42\ ^\circ\mathrm{C}$.`,
          t`$s = \dfrac{Q}{m\,\Delta T}$ $= \dfrac{50}{6 \times 42}$ $\approx 0.198\ \mathrm{cal/(kg\,^\circ C)}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.1 (vi)" },
      stem: t`Water falls from a height of $200\ \mathrm{m}$. If all its potential energy turns into heat in the water, how much warmer is it at the bottom than at the top? ($s_{water} = 4200\ \mathrm{J/(kg\,^\circ C)}$, $g = 9.8\ \mathrm{m/s^2}$)`,
      verify: { kind: "value", inputs: { h: "200", s: "4200" }, params: { ask: "fall" } },
      options: [
        { key: "A", text: t`$0.0476\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C05-M8", value: "0.0476000000000000" },
        { key: "B", text: t`$0.233\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C05-M9", value: "0.233000000000000" },
        { key: "C", text: t`$0.467\ \mathrm{^\circ C}$`, correct: true, value: "0.467000000000000" },
        { key: "D", text: t`$2.14\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C05-M7", value: "2.14000000000000" },
      ],
      solution: {
        steps: [
          t`Potential energy lost $=$ heat gained: $mgh = m\,s\,\Delta T$, so the mass cancels.`,
          t`$\Delta T = \dfrac{gh}{s}$ $= \dfrac{9.8 \times 200}{4200}$ $\approx 0.467\ ^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.15" },
      stem: t`A $0.10\ \mathrm{kg}$ metal sphere at $100\ ^\circ\mathrm{C}$ is dropped into a $0.50\ \mathrm{kg}$ copper calorimeter holding $0.20\ \mathrm{kg}$ of water, both at $20\ ^\circ\mathrm{C}$. The final steady temperature is $26\ ^\circ\mathrm{C}$. What is the specific heat capacity of the metal? ($s_{Cu} = 387\ \mathrm{J/(kg\,K)}$, $s_{water} = 4180\ \mathrm{J/(kg\,K)}$)`,
      verify: { kind: "value", inputs: { m1: "0.10", T1: "100", m2: "0.50", s2: "387", m3: "0.20", s3: "4180", T2: "20", T: "26" }, params: { ask: "calor" } },
      options: [
        { key: "A", text: t`$835\ \mathrm{J/(kg\,K)}$`, correct: true, value: "835" },
        { key: "B", text: t`$678\ \mathrm{J/(kg\,K)}$`, correct: false, misconceptionId: "C05-M10", value: "678" },
        { key: "C", text: t`$772\ \mathrm{J/(kg\,K)}$`, correct: false, misconceptionId: "C05-M11", value: "772" },
        { key: "D", text: t`$3620\ \mathrm{J/(kg\,K)}$`, correct: false, misconceptionId: "C05-M12", value: "3620" },
      ],
      solution: {
        steps: [
          t`Heat gained: $(0.50 \times 387 + 0.20 \times 4180) \times 6$ $= 1029.5 \times 6$ $= 6177\ \mathrm{J}$.`,
          t`Heat lost by the sphere: $0.10 \times s \times (100 - 26)$ $= 7.4\,s$.`,
          t`$s = \dfrac{6177}{7.4}$ $\approx 835\ \mathrm{J/(kg\,K)}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "authored" },
      stem: t`$0.2\ \mathrm{kg}$ of water at $80\ ^\circ\mathrm{C}$ is mixed with $0.3\ \mathrm{kg}$ of water at $20\ ^\circ\mathrm{C}$ in a vessel that takes negligible heat. What is the final temperature?`,
      verify: { kind: "value", inputs: { m1: "0.2", T1: "80", m2: "0.3", T2: "20" }, params: { ask: "mix" } },
      options: [
        { key: "A", text: t`$44\ \mathrm{^\circ C}$`, correct: true, value: "44" },
        { key: "B", text: t`$50\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C05-M13", value: "50" },
        { key: "C", text: t`$56\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C05-M14", value: "56" },
        { key: "D", text: t`$24\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C05-M15", value: "24" },
      ],
      solution: {
        steps: [
          t`Heat lost by hot water $=$ heat gained by cold: $0.2\,s\,(80 - T)$ $= 0.3\,s\,(T - 20)$.`,
          t`$16 - 0.2T = 0.3T - 6$, so $0.5T = 22$ and $T = 44\ ^\circ\mathrm{C}$.`,
        ],
      },
    },
  ],
};
