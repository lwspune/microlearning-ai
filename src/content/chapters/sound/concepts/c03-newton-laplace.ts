import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Does sound travel faster on a hot afternoon or on a cold winter morning? And would squeezing the air to a higher pressure speed it up?`,
    reveal: t`Faster on the hot afternoon: in a gas the speed of sound grows as the square root of the absolute temperature. Squeezing the air does nothing by itself, because its density rises in step with its pressure.`,
  },
  explanation: {
    intuition: [
      t`Sound in air is a train of compressions and rarefactions, so its speed depends on the air's elasticity and density.`,
      t`Newton assumed the air's temperature stays the same as sound passes: an **isothermal** change.`,
      t`His formula gave about $280\ \mathrm{m/s}$, but sound in air at $0\ ^\circ\mathrm{C}$ really travels at about $332\ \mathrm{m/s}$.`,
      t`Laplace saw that the changes are too quick for heat to flow in or out: an **adiabatic** change.`,
      t`His corrected formula matches experiment, and shows that sound is faster in warmer air.`,
    ],
    formal: [
      {
        title: "Newton's formula",
        points: [
          t`Newton wrote $v = \sqrt{\dfrac{E}{\rho}}$, where $E$ is the medium's modulus of elasticity and $\rho$ its density.`,
          t`For a gas whose temperature stays constant, $E$ equals the gas pressure $P$.`,
          t`So Newton's formula for air is $v = \sqrt{\dfrac{P}{\rho}}$.`,
          t`At NTP it gives about $280\ \mathrm{m/s}$, some $16\%$ below the measured $332\ \mathrm{m/s}$.`,
        ],
      },
      {
        title: "Laplace's correction",
        points: [
          t`A compression warms the air a little, and a rarefaction cools it.`,
          t`They follow one another so quickly that no heat can flow in or out: the change is **adiabatic**.`,
          t`For an adiabatic change $E = \gamma P$, where $\gamma$ is the ratio of the gas's two specific heats.`,
          t`So the speed of sound in a gas is $v = \sqrt{\dfrac{\gamma P}{\rho}}$.`,
          t`For air $\gamma = 1.41$, and at NTP the formula gives about $332\ \mathrm{m/s}$.`,
        ],
      },
      {
        title: "Pressure, temperature and moisture",
        points: [
          t`**Pressure**: at constant temperature $\rho$ rises in step with $P$ (Boyle's law), so $\dfrac{P}{\rho}$ and $v$ do not change.`,
          t`In a sealed rigid box $\rho$ is fixed, so heating raises $P$ and $v \propto \sqrt{P}$.`,
          t`**Temperature**: $v \propto \sqrt{T}$, with $T$ in kelvin, so $\dfrac{v_1}{v_2}$ $= \sqrt{\dfrac{T_1}{T_2}}$.`,
          t`**Moisture**: moist air is less dense than dry air, and $v \propto \dfrac{1}{\sqrt{\rho}}$, so sound is faster in moist air.`,
          t`For $k$ times the speed, the quantity under the root must change $k^2$ times.`,
        ],
      },
    ],
    worked: {
      prompt: t`Sound travels at $332\ \mathrm{m/s}$ in air at $0\ ^\circ\mathrm{C}$. Find its speed at $27\ ^\circ\mathrm{C}$.`,
      steps: [
        t`In kelvin: $T_1 = 273\ \mathrm{K}$ and $T_2 = 27 + 273$ $= 300\ \mathrm{K}$.`,
        t`$\dfrac{v_2}{v_1}$ $= \sqrt{\dfrac{T_2}{T_1}}$ $= \sqrt{\dfrac{300}{273}}$ $\approx 1.048$.`,
        t`$v_2 = 332 \times 1.048$ $\approx 348\ \mathrm{m/s}$.`,
      ],
      answer: t`About $348\ \mathrm{m/s}$`,
    },
    visualSpec: t`Drag a temperature slider and watch the speed of sound in air rise along a square-root curve; drag a pressure slider and see it stay put.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks sound passes through air isothermally, at constant temperature, as Newton assumed.",
      remediation: t`Compressions and rarefactions follow too quickly for heat to flow: the change is adiabatic, so $v = \sqrt{\dfrac{\gamma P}{\rho}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks Laplace's correction was needed because sound is longitudinal.",
      remediation: "Newton already treated sound as compressions and rarefactions. His error was to assume the temperature stays constant.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks Laplace's correction was needed because sound has a long wavelength.",
      remediation: "The wavelength plays no part. Newton's error was to assume an isothermal change, where the change is really adiabatic.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Puts $\gamma$ outside the square root.`,
      remediation: t`$\gamma$ multiplies $P$ under the root: $v = \sqrt{\dfrac{\gamma P}{\rho}}$, so it raises the speed by $\sqrt{\gamma}$, not $\gamma$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Forgets the square root.",
      remediation: t`$\dfrac{\gamma P}{\rho}$ is the square of the speed, in $\mathrm{m^2/s^2}$: take its square root.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M6",
      mistake: "Takes the speed to be proportional to the pressure, temperature or one over the density, not to its square root.",
      remediation: t`The speed goes as a square root, $v \propto \sqrt{P}$ or $\sqrt{T}$, so for $k$ times the speed the quantity must change $k^2$ times.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Takes the square root of the speed ratio instead of squaring it.",
      remediation: t`Square both sides of $\dfrac{v}{v_0}$ $= \sqrt{\dfrac{P}{P_0}}$: the quantity changes by the square of the speed ratio.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Turns the dependence round: thinks a higher pressure slows sound, or a denser gas speeds it up.",
      remediation: t`In $v = \sqrt{\dfrac{\gamma P}{\rho}}$, $P$ is on top and $\rho$ below: more pressure at fixed density is faster, a denser gas at fixed pressure slower.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Gives the kelvin temperature as degrees Celsius.",
      remediation: t`$v \propto \sqrt{T}$ gives $T$ in kelvin; subtract $273$ to turn it into $^\circ\mathrm{C}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks a higher pressure at constant temperature raises the speed, forgetting the density.",
      remediation: t`Doubling the pressure at constant temperature also doubles the density (Boyle's law), so $\dfrac{P}{\rho}$, and the speed, stay the same.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.1 (iii)" },
      stem: t`Newton's formula gave a speed of sound in air well below the measured value. Laplace corrected it. What did Laplace see that Newton had missed?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "laplace" } },
      options: [
        { key: "A", text: t`Sound waves are longitudinal, not transverse`, correct: false, misconceptionId: "C03-M2", value: "longitudinal_reason" },
        { key: "B", text: t`Sound waves have a long wavelength`, correct: false, misconceptionId: "C03-M3", value: "long_wavelength" },
        { key: "C", text: t`Sound waves travel adiabatically: compressions come too fast for heat to escape, so the temperature changes`, correct: true, value: "adiabatic_change" },
        { key: "D", text: t`Sound waves travel isothermally: the temperature of the air stays the same throughout`, correct: false, misconceptionId: "C03-M1", value: "isothermal_change" },
      ],
      solution: {
        steps: [
          t`Newton took the change to be isothermal, so $E = P$ and his speed came out too low.`,
          t`Laplace saw that compressions and rarefactions are too fast for heat to flow: the change is adiabatic, $E = \gamma P$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.2 (xx)" },
      stem: t`At NTP hydrogen has pressure $1.013 \times 10^5\ \mathrm{N/m^2}$ and density $0.09\ \mathrm{kg/m^3}$, and for hydrogen $\gamma = 1.41$. What speed of sound in hydrogen does Laplace's formula give?`,
      verify: { kind: "value", inputs: { P: "101300", rho: "0.09", g: "1.41" }, params: { ask: "vair" } },
      options: [
        { key: "A", text: t`$1500\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M4", value: "1500" },
        { key: "B", text: t`$1.59 \times 10^{6}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M5", value: "1590000" },
        { key: "C", text: t`$1260\ \mathrm{m/s}$`, correct: true, value: "1260" },
        { key: "D", text: t`$1060\ \mathrm{m/s}$`, correct: false, misconceptionId: "C03-M1", value: "1060" },
      ],
      solution: {
        steps: [
          t`$v = \sqrt{\dfrac{\gamma P}{\rho}}$ $= \sqrt{\dfrac{1.41 \times 1.013 \times 10^5}{0.09}}$.`,
          t`$= \sqrt{1.587 \times 10^6}$ $\approx 1260\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Solved Ex.8.3" },
      stem: t`Air is shut in a closed box with rigid walls, so its density cannot change. It is heated until sound travels through it $1.5$ times as fast as before. If the pressure was $P_0$ and is now $P$, what is $\dfrac{P}{P_0}$?`,
      verify: { kind: "value", inputs: { k: "3/2" }, params: { ask: "pbox" } },
      options: [
        { key: "A", text: t`$1.5$`, correct: false, misconceptionId: "C03-M6", value: "1.50000000000000" },
        { key: "B", text: t`$1.22$`, correct: false, misconceptionId: "C03-M7", value: "1.22000000000000" },
        { key: "C", text: t`$0.444$`, correct: false, misconceptionId: "C03-M8", value: "0.444000000000000" },
        { key: "D", text: t`$2.25$`, correct: true, value: "2.25000000000000" },
      ],
      solution: {
        steps: [
          t`With $\rho$ fixed, $v \propto \sqrt{P}$, so $\dfrac{v}{v_0}$ $= \sqrt{\dfrac{P}{P_0}}$.`,
          t`$\dfrac{P}{P_0} = 1.5^2$ $= 2.25$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.3 (vii)" },
      stem: t`At what temperature is the speed of sound in air $1.75$ times its speed at $0\ ^\circ\mathrm{C}$ ($273\ \mathrm{K}$)?`,
      verify: { kind: "value", inputs: { k: "7/4", T0: "273" }, params: { ask: "temp" } },
      options: [
        { key: "A", text: t`$88.1\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C03-M7", value: "88.1000000000000" },
        { key: "B", text: t`$836\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C03-M9", value: "836" },
        { key: "C", text: t`$563\ \mathrm{^\circ C}$`, correct: true, value: "563" },
        { key: "D", text: t`$205\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C03-M6", value: "205" },
      ],
      solution: {
        steps: [
          t`$\dfrac{T}{273} = 1.75^2$ $= 3.0625$, so $T \approx 836\ \mathrm{K}$.`,
          t`In Celsius: $836 - 273$ $\approx 563\ ^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.3 (ix)" },
      stem: t`At one place the speeds of sound on two days are in the ratio $1 : 1.1$. The temperature and pressure are the same on both days, so the difference comes from moisture in the air. How many times as dense is the air on the slower day as on the faster day?`,
      verify: { kind: "value", inputs: { k: "11/10" }, params: { ask: "humid" } },
      options: [
        { key: "A", text: t`$1.21$`, correct: true, value: "1.21000000000000" },
        { key: "B", text: t`$1.1$`, correct: false, misconceptionId: "C03-M6", value: "1.10000000000000" },
        { key: "C", text: t`$1.05$`, correct: false, misconceptionId: "C03-M7", value: "1.05000000000000" },
        { key: "D", text: t`$0.826$`, correct: false, misconceptionId: "C03-M8", value: "0.826000000000000" },
      ],
      solution: {
        steps: [
          t`At the same temperature and pressure, $v \propto \dfrac{1}{\sqrt{\rho}}$, so the slower day has the denser air.`,
          t`$\dfrac{\rho_{slow}}{\rho_{fast}}$ $= 1.1^2$ $= 1.21$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sound-11-phy/Ex Q.2 (vi)" },
      stem: t`Air is compressed to twice its pressure while its temperature is kept the same. What happens to the speed of sound in it?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pressure" } },
      options: [
        { key: "A", text: t`It stays the same`, correct: true, value: "speed_unchanged" },
        { key: "B", text: t`It becomes $\sqrt{2}$ times as large`, correct: false, misconceptionId: "C03-M10", value: "speed_root2" },
        { key: "C", text: t`It doubles`, correct: false, misconceptionId: "C03-M6", value: "speed_doubles" },
        { key: "D", text: t`It falls to $\dfrac{1}{\sqrt{2}}$ of its value`, correct: false, misconceptionId: "C03-M8", value: "speed_falls" },
      ],
      solution: {
        steps: [
          t`At constant temperature, doubling $P$ also doubles $\rho$ (Boyle's law).`,
          t`So $\dfrac{\gamma P}{\rho}$ is unchanged, and so is the speed of sound.`,
        ],
      },
    },
  ],
};
