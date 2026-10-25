import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "draft",
  hook: {
    prompt: t`A heater coil at about $1000\ \mathrm{K}$ pours out heat you can feel across the room. The same coil at room temperature, $300\ \mathrm{K}$, radiates almost nothing you notice. Why such a huge difference?`,
    reveal: t`Radiated power grows as the fourth power of the absolute temperature. $\left(\dfrac{1000}{300}\right)^4 \approx 123$, so the hot coil radiates over a hundred times as much.`,
  },
  explanation: {
    intuition: [
      t`Hot bodies radiate far more than cool ones.`,
      t`**Stefan–Boltzmann law**: a blackbody's emissive power is proportional to $T^4$, with $T$ in kelvin.`,
      t`Double the absolute temperature, and it radiates $2^4 = 16$ times as much.`,
      t`Any other body radiates a fraction $e$ of that, its emissivity.`,
      t`A body also takes in radiation from its surroundings, so its net loss depends on both temperatures.`,
    ],
    formal: [
      {
        title: "Stefan–Boltzmann law",
        points: [
          t`A blackbody's emissive power is $R_B = \sigma T^4$.`,
          t`$\sigma = 5.67 \times 10^{-8}\ \mathrm{W\,m^{-2}K^{-4}}$ is **Stefan's constant**.`,
          t`A body of emissivity $e$ radiates $R = e\sigma T^4$.`,
          t`So a surface of area $A$ radiates power $P = e\sigma A T^4$.`,
          t`In time $t$, the energy radiated is $Q = e\sigma A T^4 t$.`,
        ],
      },
      {
        title: "Net loss to the surroundings",
        points: [
          t`A body also absorbs radiation from its surroundings, at temperature $T_0$.`,
          t`Its net rate of heat loss is $e\sigma A\left(T^4 - T_0^4\right)$.`,
          t`If $T = T_0$, it takes in as much as it gives out: no net loss.`,
          t`Use kelvin throughout; $T^4 - T_0^4$ is not $\left(T - T_0\right)^4$.`,
          t`A star of radius $r$ radiates $\sigma\left(4\pi r^2\right)T^4$: both its size and its temperature count.`,
        ],
      },
    ],
    worked: {
      prompt: t`How much energy does a blackbody of surface area $200\ \mathrm{cm^2}$ at $127^\circ\mathrm{C}$ radiate in one minute? (Take $\sigma = 5.67 \times 10^{-8}\ \mathrm{J\,m^{-2}s^{-1}K^{-4}}$.)`,
      steps: [
        t`$A = 200 \times 10^{-4} = 0.02\ \mathrm{m^2}$, $T = 127 + 273 = 400\ \mathrm{K}$, $t = 60\ \mathrm{s}$.`,
        t`For a blackbody, $Q = \sigma A T^4 t$.`,
        t`$Q = 5.67 \times 10^{-8} \times 0.02$ $\times (400)^4 \times 60$.`,
        t`$Q \approx 1742\ \mathrm{J}$.`,
      ],
      answer: t`$Q \approx 1742\ \mathrm{J}$`,
    },
    visualSpec: t`Raise a blackbody's temperature with a slider and watch the power it radiates climb as $T^4$, while a cooler enclosure around it pours some back.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Uses Celsius temperatures in the $T^4$ law.`,
      remediation: "The law needs absolute temperature: add 273 to each Celsius reading first.",
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Leaves the area in $\mathrm{cm^2}$.`,
      remediation: t`$\sigma$ is in SI units, so convert: $1\ \mathrm{cm^2} = 10^{-4}\ \mathrm{m^2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: "Leaves out the time, finding the power instead.",
      remediation: t`$\sigma A T^4$ is the energy per second; multiply by the time: $Q = \sigma A T^4 t$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M4",
      mistake: "Leaves out the emissivity.",
      remediation: t`Only a blackbody radiates $\sigma T^4$; a body of emissivity $e$ radiates $e\sigma T^4$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C11-M5",
      mistake: "Forgets to take the fourth root.",
      remediation: t`$P = e\sigma A T^4$ gives $T^4$; take the fourth root to find $T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: "Takes the square root instead of the fourth root.",
      remediation: t`The law has $T^4$, so $T = \left(\dfrac{P}{e\sigma A}\right)^{1/4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M7",
      mistake: t`Takes the power radiated to be proportional to $T$.`,
      remediation: t`The emissive power goes as $T^4$, not $T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M8",
      mistake: t`Takes the power radiated to be proportional to $T^2$.`,
      remediation: t`The emissive power goes as $T^4$, not $T^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M9",
      mistake: "Ignores the heat the body takes in from its surroundings.",
      remediation: t`The body also absorbs $\sigma A T_0^4$ from its surroundings: its net loss is $\sigma A\left(T^4 - T_0^4\right)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M10",
      mistake: "Subtracts the temperatures before raising to the fourth power.",
      remediation: t`Emission and absorption are $\sigma A T^4$ and $\sigma A T_0^4$; subtract those: $T^4 - T_0^4$, not $\left(T - T_0\right)^4$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M11",
      mistake: "Takes the power radiated to be proportional to the radius.",
      remediation: t`Power is proportional to the surface area, $4\pi r^2$, so to $r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M12",
      mistake: "Leaves out the change in temperature.",
      remediation: t`A cooler surface radiates less from each square metre: $P \propto r^2 T^4$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.19" },
      stem: t`How much energy does a blackbody of surface area $100\ \mathrm{cm^2}$ radiate in one minute when kept at $227^\circ\mathrm{C}$? (Take $\sigma = 5.67 \times 10^{-8}\ \mathrm{J\,m^{-2}s^{-1}K^{-4}}$.)`,
      verify: { kind: "value", inputs: { sigma: "5.67e-8", A_cm2: "100", T_C: "227", t: "60" }, params: { ask: "Q", sf: "4" } },
      options: [
        { key: "A", text: t`$2126\ \mathrm{J}$`, correct: true, value: "2126" },
        { key: "B", text: t`$90.33\ \mathrm{J}$`, correct: false, misconceptionId: "C11-M1", value: "90.3300000000000" },
        { key: "C", text: t`$2.126 \times 10^{7}\ \mathrm{J}$`, correct: false, misconceptionId: "C11-M2", value: "21260000" },
        { key: "D", text: t`$35.44\ \mathrm{J}$`, correct: false, misconceptionId: "C11-M3", value: "35.4400000000000" },
      ],
      solution: {
        steps: [
          t`$A = 100 \times 10^{-4} = 0.01\ \mathrm{m^2}$, $T = 227 + 273 = 500\ \mathrm{K}$, $t = 60\ \mathrm{s}$.`,
          t`$Q = \sigma A T^4 t = 5.67 \times 10^{-8} \times 0.01 \times (500)^4 \times 60 \approx 2126\ \mathrm{J}$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Solved Ex.3.7" },
      stem: t`A $60\ \mathrm{W}$ filament lamp loses all its energy by radiation from its surface, of area $5 \times 10^{-5}\ \mathrm{m^2}$ and emissivity $0.5$. Find the temperature of the filament. (Take $\sigma = 5.67 \times 10^{-8}\ \mathrm{J\,m^{-2}s^{-1}K^{-4}}$.)`,
      verify: { kind: "value", inputs: { P: "60", e: "0.5", A: "5e-5", sigma: "5.67e-8" }, params: { ask: "T" } },
      options: [
        { key: "A", text: t`$4.23 \times 10^{13}\ \mathrm{K}$`, correct: false, misconceptionId: "C11-M5", value: "42300000000000" },
        { key: "B", text: t`$6.51 \times 10^{6}\ \mathrm{K}$`, correct: false, misconceptionId: "C11-M6", value: "6510000" },
        { key: "C", text: t`$2550\ \mathrm{K}$`, correct: true, value: "2550" },
        { key: "D", text: t`$2140\ \mathrm{K}$`, correct: false, misconceptionId: "C11-M4", value: "2140" },
      ],
      solution: {
        steps: [
          t`$P = e\sigma A T^4$, so $T^4 = \dfrac{60}{0.5 \times 5.67 \times 10^{-8} \times 5 \times 10^{-5}} \approx 4.23 \times 10^{13}$.`,
          t`$T = \left(4.23 \times 10^{13}\right)^{1/4} \approx 2550\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.1 (v)" },
      stem: t`What is the ratio of the emissive powers of a perfect blackbody at $1327^\circ\mathrm{C}$ and at $527^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { T1_C: "1327", T2_C: "527" }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$40.2$`, correct: false, misconceptionId: "C11-M1", value: "40.2000000000000" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C11-M7", value: "2" },
        { key: "C", text: t`$4$`, correct: false, misconceptionId: "C11-M8", value: "4" },
        { key: "D", text: t`$16$`, correct: true, value: "16" },
      ],
      solution: {
        steps: [
          t`$T_1 = 1327 + 273 = 1600\ \mathrm{K}$ and $T_2 = 527 + 273 = 800\ \mathrm{K}$.`,
          t`$\dfrac{R_1}{R_2} = \left(\dfrac{1600}{800}\right)^4 = 2^4 = 16$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Ex Q.22" },
      stem: t`A blackbody sits in a black enclosure at $27^\circ\mathrm{C}$. What is the ratio of its rates of loss of heat when it is kept at $727^\circ\mathrm{C}$ and at $227^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { T1_C: "727", T2_C: "227", T0_C: "27" }, params: { ask: "net_ratio", sf: "4" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C11-M9", value: "16" },
        { key: "B", text: t`$150.1$`, correct: false, misconceptionId: "C11-M10", value: "150.100000000000" },
        { key: "C", text: t`$18.23$`, correct: true, value: "18.2300000000000" },
        { key: "D", text: t`$105.2$`, correct: false, misconceptionId: "C11-M1", value: "105.200000000000" },
      ],
      solution: {
        steps: [
          t`$T_1 = 1000\ \mathrm{K}$, $T_2 = 500\ \mathrm{K}$ and $T_0 = 300\ \mathrm{K}$.`,
          t`Ratio $= \dfrac{T_1^4 - T_0^4}{T_2^4 - T_0^4} = \dfrac{10^{12} - 8.1 \times 10^{9}}{6.25 \times 10^{10} - 8.1 \times 10^{9}} \approx 18.23$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/kinetic-theory-12-phy/Solved Ex.3.9" },
      stem: t`The Sun's surface is at $6000\ \mathrm{K}$. A star with a surface at $3000\ \mathrm{K}$ radiates $25$ times the Sun's power. Treating both as blackbodies, how many times the Sun's radius is the star's?`,
      verify: { kind: "value", inputs: { T_sun: "6000", T_star: "3000", P_ratio: "25" }, params: { ask: "radius" } },
      options: [
        { key: "A", text: t`$7.07$`, correct: false, misconceptionId: "C11-M7", value: "7.07000000000000" },
        { key: "B", text: t`$400$`, correct: false, misconceptionId: "C11-M11", value: "400" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C11-M12", value: "5" },
        { key: "D", text: t`$20$`, correct: true, value: "20" },
      ],
      solution: {
        steps: [
          t`$P = \sigma\left(4\pi r^2\right)T^4$, so $\dfrac{P_s}{P_\odot} = \left(\dfrac{r_s}{r_\odot}\right)^2\left(\dfrac{T_s}{T_\odot}\right)^4$.`,
          t`$25 = \left(\dfrac{r_s}{r_\odot}\right)^2 \times \left(\dfrac{1}{2}\right)^4$, so $\left(\dfrac{r_s}{r_\odot}\right)^2 = 400$ and $r_s = 20\,r_\odot$.`,
        ],
      },
    },
  ],
};
