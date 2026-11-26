import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Your electricity bill charges you for so many **units**. Is a unit a measure of power, or of energy?`,
    reveal: t`Of energy: one unit is $1\ \mathrm{kWh}$, the energy a $1\ \mathrm{kW}$ appliance uses in one hour, $3.6 \times 10^6\ \mathrm{J}$.`,
  },
  explanation: {
    intuition: [
      t`A cell does work pushing charge through a resistor, and the resistor turns that energy into heat.`,
      t`Each coulomb that falls through a potential difference $V$ gives up $V$ joules.`,
      t`A current $I$ sends $I$ coulombs a second, so energy is delivered at $VI$ joules a second.`,
      t`That rate is the **electrical power** $P = VI$, in watts.`,
      t`Energy used is power times time: a heater left on longer costs more.`,
    ],
    formal: [
      {
        title: "Electrical energy",
        points: [
          t`Moving a charge $q$ through a potential difference $V$ takes work $W = qV$.`,
          t`In time $t$ a current $I$ carries $q = It$, so $W = VIt$.`,
          t`In a resistor this energy becomes heat: the **heating effect** of a current.`,
          t`Heat in calories is $H = \dfrac{W}{J}$, where $J = 4.2\ \mathrm{J/cal}$.`,
        ],
      },
      {
        title: "Electrical power",
        points: [
          t`**Power** is the rate of using energy: $P = \dfrac{W}{t}$ $= VI$.`,
          t`With $V = IR$: $P = I^2R$ $= \dfrac{V^2}{R}$.`,
          t`Its unit is the **watt**: $1\ \mathrm{W} = 1\ \mathrm{J/s}$; $1\ \mathrm{kW} = 1000\ \mathrm{W}$.`,
        ],
      },
      {
        title: "Rated values",
        points: [
          t`A bulb marked $60\ \mathrm{W}$, $230\ \mathrm{V}$ takes $60\ \mathrm{W}$ only when run at $230\ \mathrm{V}$.`,
          t`Its resistance is $R = \dfrac{V^2}{P}$, which stays about the same.`,
          t`At the same voltage, a higher power rating means a lower resistance.`,
          t`On another voltage $V'$ it takes $P' = \dfrac{V'^2}{R}$: half the voltage gives a quarter of the power.`,
        ],
      },
      {
        title: "The commercial unit",
        points: [
          t`Energy is billed in **kilowatt hours**: $1\ \mathrm{kWh}$ is one **unit**.`,
          t`$1\ \mathrm{kWh}$ $= 1000\ \mathrm{W} \times 3600\ \mathrm{s}$ $= 3.6 \times 10^6\ \mathrm{J}$.`,
          t`Energy in $\mathrm{kWh}$ $=$ power in $\mathrm{kW}$ $\times$ time in hours.`,
          t`The $\mathrm{kWh}$ is a unit of energy; the $\mathrm{kW}$ is a unit of power.`,
        ],
      },
    ],
    worked: {
      prompt: t`An electric iron is rated $1000\ \mathrm{W}$, $250\ \mathrm{V}$. Find the current it draws and its resistance, and the cost of using it $2$ hours a day for $30$ days at Rs $6$ per unit.`,
      steps: [
        t`$I = \dfrac{P}{V}$ $= \dfrac{1000}{250}$ $= 4\ \mathrm{A}$.`,
        t`$R = \dfrac{V^2}{P}$ $= \dfrac{250^2}{1000}$ $= 62.5\ \Omega$.`,
        t`Energy $= 1\ \mathrm{kW} \times 60\ \mathrm{h}$ $= 60\ \mathrm{kWh}$, that is $60$ units.`,
        t`Cost $= 60 \times 6$ $=$ Rs $360$.`,
      ],
      answer: t`$4\ \mathrm{A}$; $62.5\ \Omega$; Rs $360$`,
    },
    visualSpec: t`Pick appliances and how long each runs, and watch the power, the kWh used and the bill add up.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Takes the power in $\mathrm{kW}$ as the energy in $\mathrm{kWh}$.`,
      remediation: t`The $\mathrm{kWh}$ is energy: multiply the power in $\mathrm{kW}$ by the time in hours.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Forgets to convert between watts and kilowatts.",
      remediation: t`$1\ \mathrm{kW} = 1000\ \mathrm{W}$: use $\mathrm{kW}$ for $\mathrm{kWh}$ and $\mathrm{W}$ for joules.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Divides the power by the time.",
      remediation: t`Energy $= Pt$: the longer an appliance runs, the more energy it uses.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: t`Multiplies by $J$ to get calories.`,
      remediation: t`One calorie is $4.2\ \mathrm{J}$, so there are fewer calories than joules: $H = \dfrac{W}{J}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Leaves the time in hours or minutes when working in joules.",
      remediation: t`With $P$ in watts, $W = Pt$ is in joules only when $t$ is in seconds.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Takes the power as $\dfrac{V}{I}$.`,
      remediation: t`$\dfrac{V}{I}$ is the resistance; the power is $P = VI$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Takes the power as proportional to the voltage.",
      remediation: t`$P = \dfrac{V^2}{R}$ with $R$ fixed: half the voltage gives a quarter of the power.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Thinks a bulb always takes its rated power.",
      remediation: "The rating holds only at the rated voltage; the resistance is what stays fixed.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: t`Forgets to square the voltage in $\dfrac{V^2}{R}$.`,
      remediation: t`$P = VI$ and $I = \dfrac{V}{R}$, so $P = \dfrac{V^2}{R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Thinks a higher power rating means a higher resistance.",
      remediation: t`At a fixed voltage $R = \dfrac{V^2}{P}$: the higher the power, the lower the resistance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Thinks lamps rated for the same voltage have the same resistance.",
      remediation: "The same voltage across a lower resistance drives more current and gives more power.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks the currents must be known to compare the resistances.",
      remediation: t`The voltage and power are enough: $R = \dfrac{V^2}{P}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Solved Ex.11.4" },
      stem: t`An electric heater takes a current of $6\ \mathrm{A}$ from a $230\ \mathrm{V}$ supply. How much electrical energy does it use in $5$ hours?`,
      verify: { kind: "value", inputs: { V: "230", I: "6", h: "5" }, params: { ask: "energy" } },
      options: [
        { key: "A", text: t`$0.276\ \mathrm{kWh}$`, correct: false, misconceptionId: "C05-M3", value: "0.276000000000000" },
        { key: "B", text: t`$6.9\ \mathrm{kWh}$`, correct: true, value: "6.90000000000000" },
        { key: "C", text: t`$1.38\ \mathrm{kWh}$`, correct: false, misconceptionId: "C05-M1", value: "1.38000000000000" },
        { key: "D", text: t`$6900\ \mathrm{kWh}$`, correct: false, misconceptionId: "C05-M2", value: "6900" },
      ],
      solution: {
        steps: [
          t`$P = VI$ $= 230 \times 6$ $= 1380\ \mathrm{W}$ $= 1.38\ \mathrm{kW}$.`,
          t`Energy $= 1.38\ \mathrm{kW} \times 5\ \mathrm{h}$ $= 6.9\ \mathrm{kWh}$, or $6.9$ units.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.4 (xii)" },
      stem: t`A heating element on a $230\ \mathrm{V}$ supply draws a current of $5\ \mathrm{A}$. How much heat does it give out in $1$ hour? (Take $J = 4.2\ \mathrm{J/cal}$.)`,
      verify: { kind: "value", inputs: { V: "230", I: "5", h: "1", J: "4.2" }, params: { ask: "heat" } },
      options: [
        { key: "A", text: t`$17400\ \mathrm{kcal}$`, correct: false, misconceptionId: "C05-M4", value: "17400" },
        { key: "B", text: t`$0.274\ \mathrm{kcal}$`, correct: false, misconceptionId: "C05-M5", value: "0.274000000000000" },
        { key: "C", text: t`$39.4\ \mathrm{kcal}$`, correct: false, misconceptionId: "C05-M6", value: "39.4000000000000" },
        { key: "D", text: t`$986\ \mathrm{kcal}$`, correct: true, value: "986" },
      ],
      solution: {
        steps: [
          t`$P = VI$ $= 230 \times 5$ $= 1150\ \mathrm{W}$; $t = 3600\ \mathrm{s}$.`,
          t`$W = Pt$ $= 1150 \times 3600$ $= 4.14 \times 10^6\ \mathrm{J}$.`,
          t`$H = \dfrac{W}{J}$ $= \dfrac{4.14 \times 10^6}{4.2}$ $\approx 9.86 \times 10^5\ \mathrm{cal}$ $\approx 986\ \mathrm{kcal}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electric-current-11-phy/Ex Q.1 (i)" },
      stem: t`You are given four bulbs of $25\ \mathrm{W}$, $40\ \mathrm{W}$, $60\ \mathrm{W}$ and $100\ \mathrm{W}$, all rated for $230\ \mathrm{V}$. Which of them has the lowest resistance?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "lowR" } },
      options: [
        { key: "A", text: t`The $100\ \mathrm{W}$ bulb`, correct: true, value: "highest_power" },
        { key: "B", text: t`The $25\ \mathrm{W}$ bulb`, correct: false, misconceptionId: "C05-M10", value: "lowest_power" },
        { key: "C", text: t`All four have the same resistance, as they work at the same voltage`, correct: false, misconceptionId: "C05-M11", value: "all_equal" },
        { key: "D", text: t`It cannot be found without knowing the current in each bulb`, correct: false, misconceptionId: "C05-M12", value: "need_current" },
      ],
      solution: {
        steps: [
          t`At a fixed voltage, $R = \dfrac{V^2}{P}$.`,
          t`The largest $P$ gives the smallest $R$: $\dfrac{230^2}{100}$ $= 529\ \Omega$ for the $100\ \mathrm{W}$ bulb.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`A bulb is rated $100\ \mathrm{W}$, $220\ \mathrm{V}$. What power does it take when run on a $110\ \mathrm{V}$ supply, if its resistance does not change?`,
      verify: { kind: "value", inputs: { P: "100", V0: "220", V: "110" }, params: { ask: "half" } },
      options: [
        { key: "A", text: t`$100\ \mathrm{W}$`, correct: false, misconceptionId: "C05-M8", value: "100" },
        { key: "B", text: t`$0.227\ \mathrm{W}$`, correct: false, misconceptionId: "C05-M9", value: "0.227000000000000" },
        { key: "C", text: t`$25\ \mathrm{W}$`, correct: true, value: "25" },
        { key: "D", text: t`$50\ \mathrm{W}$`, correct: false, misconceptionId: "C05-M7", value: "50" },
      ],
      solution: {
        steps: [
          t`$R = \dfrac{V^2}{P}$ $= \dfrac{220^2}{100}$ $= 484\ \Omega$.`,
          t`At $110\ \mathrm{V}$: $P = \dfrac{110^2}{484}$ $= 25\ \mathrm{W}$, a quarter of the rating.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`A $2\ \mathrm{kW}$ heater is switched on for $45$ minutes. How much electrical energy does it use, in joules?`,
      verify: { kind: "value", inputs: { P: "2", m: "45" }, params: { ask: "joule" } },
      options: [
        { key: "A", text: t`$5.4 \times 10^{6}\ \mathrm{J}$`, correct: true, value: "5400000" },
        { key: "B", text: t`$5400\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M2", value: "5400" },
        { key: "C", text: t`$0.741\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M3", value: "0.741000000000000" },
        { key: "D", text: t`$90000\ \mathrm{J}$`, correct: false, misconceptionId: "C05-M5", value: "90000" },
      ],
      solution: {
        steps: [
          t`$P = 2000\ \mathrm{W}$; $t = 45 \times 60$ $= 2700\ \mathrm{s}$.`,
          t`$W = Pt$ $= 2000 \times 2700$ $= 5.4 \times 10^6\ \mathrm{J}$.`,
        ],
      },
    },
  ],
};
