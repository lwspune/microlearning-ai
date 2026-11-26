import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`On a cold morning a steel bench feels much colder than a wooden one, though both have sat outside all night at the same temperature. Why?`,
    reveal: t`Both are at the same temperature, but steel **conducts** heat away from your hand far faster than wood. Your skin senses how fast it loses heat, not the bench's temperature.`,
  },
  explanation: {
    intuition: [
      t`Heat moves from hot to cold in three ways: conduction, convection and radiation.`,
      t`In **conduction**, heat passes through a material from particle to particle, with no flow of the material.`,
      t`Metals are good conductors; wood, plastic and still air are poor ones, called **insulators**.`,
      t`In **convection**, a heated fluid (liquid or gas) moves and carries its heat with it.`,
      t`In **radiation**, heat travels as electromagnetic waves, which need no medium at all.`,
    ],
    formal: [
      {
        title: "Conduction through a slab",
        points: [
          t`Take a slab of area $A$ and thickness $x$, with faces at $T_1$ and $T_2$, $T_1 > T_2$.`,
          t`In the **steady state** each section's temperature stays constant, so heat flows at a steady rate.`,
          t`Rate of flow: $\dfrac{Q}{t}$ $= \dfrac{kA(T_1 - T_2)}{x}$.`,
          t`$k$ is the **thermal conductivity** of the material, in $\mathrm{W/(m\,K)}$.`,
          t`A thicker slab passes heat more slowly; a larger area or temperature difference, faster.`,
        ],
      },
      {
        title: "Thermal resistance",
        points: [
          t`**Thermal resistance** $R_T$ is the opposition a body offers to heat flow.`,
          t`$R_T = \dfrac{T_1 - T_2}{Q/t}$, like electrical resistance $\dfrac{V}{I}$.`,
          t`From the conduction law, $R_T = \dfrac{x}{kA}$.`,
          t`Its SI unit is $\mathrm{K\,s/J}$ (that is, $\mathrm{K/W}$); good insulators have a large $R_T$.`,
        ],
      },
      {
        title: "Convection",
        points: [
          t`Heated fluid expands, becomes less dense and rises; cooler, denser fluid sinks to take its place.`,
          t`This circulation, a **convection current**, carries heat through the fluid.`,
          t`**Natural convection** is driven by gravity alone; in **forced convection** a pump or fan moves the fluid.`,
          t`Sea breezes and the heating of water in a pot are natural convection.`,
        ],
      },
      {
        title: "Radiation",
        points: [
          t`Every body gives out energy as electromagnetic waves, more at higher temperature.`,
          t`These waves travel even through a vacuum, which is how the Sun warms the Earth.`,
          t`Bodies also absorb radiation that falls on them; dark rough surfaces absorb and emit best.`,
          t`A shiny surface reflects most radiation, so it absorbs and emits poorly.`,
        ],
      },
    ],
    worked: {
      prompt: t`The two faces of an iron plate $2\ \mathrm{cm}$ thick differ in temperature by $10\ ^\circ\mathrm{C}$. In the steady state, heat passes through it at $600\ \mathrm{kcal}$ per minute per square metre. Find the thermal conductivity of iron.`,
      steps: [
        t`Per second: $\dfrac{Q}{At} = \dfrac{600}{60}$ $= 10\ \mathrm{kcal/(s\,m^2)}$; $x = 0.02\ \mathrm{m}$.`,
        t`From $\dfrac{Q}{t}$ $= \dfrac{kA(T_1 - T_2)}{x}$: $k$ $= \dfrac{Q}{At} \times \dfrac{x}{T_1 - T_2}$.`,
        t`$k = \dfrac{10 \times 0.02}{10}$ $= 0.02\ \mathrm{kcal/(m\,s\,^\circ C)}$.`,
      ],
      answer: t`$0.02\ \mathrm{kcal/(m\,s\,^\circ C)}$`,
    },
    visualSpec: t`Change a slab's thickness, area and temperature difference with sliders and watch the rate of heat flow through it change.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "Puts a thickness in millimetres into the formula as if it were metres.",
      remediation: t`$5\ \mathrm{mm}$ $= 5 \times 10^{-3}\ \mathrm{m}$: with $k$ in $\mathrm{W/(m\,K)}$, $x$ must be in metres.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Ignores the minus sign of a temperature below zero.",
      remediation: t`The difference from $25\ ^\circ\mathrm{C}$ to $-20\ ^\circ\mathrm{C}$ is $25 - (-20) = 45$ degrees, not $5$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Multiplies by the thickness instead of dividing.",
      remediation: t`A thicker slab slows the flow: $\dfrac{Q}{t}$ $= \dfrac{kA\,\Delta T}{x}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Leaves the heat flow per minute while k is per second.",
      remediation: t`$k$ is per second: $400\ \mathrm{kcal/min}$ is $\dfrac{400}{60}\ \mathrm{kcal/s}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M5",
      mistake: "Puts a thickness in centimetres into the formula as if it were metres.",
      remediation: t`$4\ \mathrm{cm} = 0.04\ \mathrm{m}$: $k$ is per metre.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M6",
      mistake: "Divides the heat flow by k times x.",
      remediation: t`Rearrange $\dfrac{Q}{At}$ $= \dfrac{k\,\Delta T}{x}$: $\Delta T$ $= \dfrac{Q}{At} \times \dfrac{x}{k}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M7",
      mistake: "Divides the heat flow by the temperature difference.",
      remediation: t`Resistance is the push over the flow: $R_T = \dfrac{\Delta T}{Q/t}$, like $R = \dfrac{V}{I}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M8",
      mistake: "Multiplies the temperature difference by the heat flow.",
      remediation: t`$R_T = \dfrac{\Delta T}{Q/t}$: a bigger flow for the same difference means less resistance.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M9",
      mistake: "Leaves out the temperature difference.",
      remediation: t`$R_T = \dfrac{\Delta T}{Q/t}$ $= \dfrac{30}{1500}$: the difference belongs on top.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M10",
      mistake: "Puts a thickness in millimetres in as centimetres.",
      remediation: t`With $k$ in $\mathrm{cal/(s\,cm\,^\circ C)}$ use centimetres: $4\ \mathrm{mm} = 0.4\ \mathrm{cm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M11",
      mistake: "Mixes units: area in square metres with k per centimetre.",
      remediation: t`Keep one system: with $k$ per cm, use $A$ in $\mathrm{cm^2}$ and $x$ in cm.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M12",
      mistake: "Thinks heat crosses empty space by conduction.",
      remediation: "Conduction needs particles to pass energy on; space has almost none. Radiation needs no medium.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M13",
      mistake: "Thinks heat crosses empty space by convection.",
      remediation: "Convection needs a fluid that can move; empty space has none. Radiation needs no medium.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M14",
      mistake: "Thinks heat is carried by hot particles flying from the Sun.",
      remediation: "The Sun's heat arrives as electromagnetic waves, travelling at the speed of light.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M15",
      mistake: "Thinks the steady state means the whole rod is at one temperature.",
      remediation: "In the steady state the temperature still falls from the hot end to the cold end; it just stops changing with time.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M16",
      mistake: "Thinks heat stops flowing in the steady state.",
      remediation: "Heat flows steadily from hot end to cold end; each section passes on as much as it receives.",
      fallback: { kind: "none" },
    },
    {
      id: "C07-M17",
      mistake: "Thinks every section keeps warming in the steady state.",
      remediation: "Sections warm only at first; in the steady state no section's temperature changes.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.17" },
      stem: t`A glass window is $5\ \mathrm{mm}$ thick. It is $25\ ^\circ\mathrm{C}$ inside and $-20\ ^\circ\mathrm{C}$ outside. At what rate is heat lost through each square metre of the window? ($k_{glass} = 1\ \mathrm{W/(m\,K)}$)`,
      verify: { kind: "value", inputs: { k: "1", x_mm: "5", Tin: "25", Tout: "-20" }, params: { ask: "window" } },
      options: [
        { key: "A", text: t`$1000\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C07-M2", value: "1000" },
        { key: "B", text: t`$0.225\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C07-M3", value: "0.225000000000000" },
        { key: "C", text: t`$9000\ \mathrm{W/m^2}$`, correct: true, value: "9000" },
        { key: "D", text: t`$9\ \mathrm{W/m^2}$`, correct: false, misconceptionId: "C07-M1", value: "9" },
      ],
      solution: {
        steps: [
          t`$\Delta T = 25 - (-20)$ $= 45\ \mathrm{K}$; $x = 5 \times 10^{-3}\ \mathrm{m}$.`,
          t`$\dfrac{Q}{At}$ $= \dfrac{k\,\Delta T}{x}$ $= \dfrac{1 \times 45}{5 \times 10^{-3}}$ $= 9000\ \mathrm{W/m^2}$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (xiv)" },
      stem: t`Heat passes through a steel plate $4\ \mathrm{cm}$ thick at $400\ \mathrm{kcal}$ per minute per square metre, in the steady state. The thermal conductivity of steel is $0.026\ \mathrm{kcal/(m\,s\,K)}$. What is the temperature difference between its faces?`,
      verify: { kind: "value", inputs: { q: "400", x_cm: "4", k: "0.026" }, params: { ask: "dT" } },
      options: [
        { key: "A", text: t`$615\ \mathrm{K}$`, correct: false, misconceptionId: "C07-M4", value: "615" },
        { key: "B", text: t`$1030\ \mathrm{K}$`, correct: false, misconceptionId: "C07-M5", value: "1030" },
        { key: "C", text: t`$6410\ \mathrm{K}$`, correct: false, misconceptionId: "C07-M6", value: "6410" },
        { key: "D", text: t`$10.3\ \mathrm{K}$`, correct: true, value: "10.3000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{Q}{At} = \dfrac{400}{60}$ $\approx 6.667\ \mathrm{kcal/(s\,m^2)}$; $x = 0.04\ \mathrm{m}$.`,
          t`$\Delta T$ $= \dfrac{Q}{At} \times \dfrac{x}{k}$ $= \dfrac{6.667 \times 0.04}{0.026}$ $\approx 10.3\ \mathrm{K}$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (xii)" },
      stem: t`Heat flows through a copper rod at $1500\ \mathrm{cal/s}$ when the temperature difference across it is $30\ ^\circ\mathrm{C}$. What is the thermal resistance of the rod?`,
      verify: { kind: "value", inputs: { dT: "30", H: "1500" }, params: { ask: "resist" } },
      options: [
        { key: "A", text: t`$6.67 \times 10^{-4}\ \mathrm{^\circ C\,s/cal}$`, correct: false, misconceptionId: "C07-M9", value: "0.000667000000000000" },
        { key: "B", text: t`$0.02\ \mathrm{^\circ C\,s/cal}$`, correct: true, value: "0.0200000000000000" },
        { key: "C", text: t`$50\ \mathrm{^\circ C\,s/cal}$`, correct: false, misconceptionId: "C07-M7", value: "50" },
        { key: "D", text: t`$45000\ \mathrm{^\circ C\,s/cal}$`, correct: false, misconceptionId: "C07-M8", value: "45000" },
      ],
      solution: {
        steps: [
          t`$R_T = \dfrac{T_1 - T_2}{Q/t}$.`,
          t`$R_T = \dfrac{30}{1500}$ $= 0.02\ \mathrm{^\circ C\,s/cal}$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.19" },
      stem: t`A glass window has an area of $1000\ \mathrm{cm^2}$ and is $4\ \mathrm{mm}$ thick. It is $27\ ^\circ\mathrm{C}$ inside and $-5\ ^\circ\mathrm{C}$ outside. At what rate is heat lost through it? ($k = 0.022\ \mathrm{cal/(s\,cm\,^\circ C)}$)`,
      verify: { kind: "value", inputs: { k: "0.022", A_cm2: "1000", x_mm: "4", Tin: "27", Tout: "-5" }, params: { ask: "glass" } },
      options: [
        { key: "A", text: t`$1760\ \mathrm{cal/s}$`, correct: true, value: "1760" },
        { key: "B", text: t`$1210\ \mathrm{cal/s}$`, correct: false, misconceptionId: "C07-M2", value: "1210" },
        { key: "C", text: t`$176\ \mathrm{cal/s}$`, correct: false, misconceptionId: "C07-M10", value: "176" },
        { key: "D", text: t`$0.176\ \mathrm{cal/s}$`, correct: false, misconceptionId: "C07-M11", value: "0.176000000000000" },
      ],
      solution: {
        steps: [
          t`Work in cm: $A = 1000\ \mathrm{cm^2}$, $x = 0.4\ \mathrm{cm}$, $\Delta T = 27 - (-5)$ $= 32\ ^\circ\mathrm{C}$.`,
          t`$\dfrac{Q}{t}$ $= \dfrac{kA\,\Delta T}{x}$ $= \dfrac{0.022 \times 1000 \times 32}{0.4}$ $= 1760\ \mathrm{cal/s}$.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.2 (xiv)" },
      stem: t`Space between the Sun and the Earth is almost empty. How does the Sun's heat reach the Earth?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "space" } },
      options: [
        { key: "A", text: t`By conduction, passed from particle to particle through space`, correct: false, misconceptionId: "C07-M12", value: "conduction_space" },
        { key: "B", text: t`By convection currents rising from the Sun through space`, correct: false, misconceptionId: "C07-M13", value: "convection_space" },
        { key: "C", text: t`Carried by hot particles that fly from the Sun to the Earth`, correct: false, misconceptionId: "C07-M14", value: "hot_particles" },
        { key: "D", text: t`As electromagnetic waves, which need no medium`, correct: true, value: "em_waves" },
      ],
      solution: {
        steps: [
          t`Conduction and convection both need matter, and space is almost empty.`,
          t`Radiation travels as electromagnetic waves, which need no medium.`,
        ],
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.2 (x)" },
      stem: t`One end of a metal rod is kept in a flame and the other end in ice. After a while the rod reaches the **steady state**. What does that mean?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "steady" } },
      options: [
        { key: "A", text: t`The temperature at each section stops changing, though it still falls along the rod`, correct: true, value: "constant_each_section" },
        { key: "B", text: t`The whole rod has come to one temperature`, correct: false, misconceptionId: "C07-M15", value: "same_everywhere" },
        { key: "C", text: t`Heat has stopped flowing along the rod`, correct: false, misconceptionId: "C07-M16", value: "no_flow" },
        { key: "D", text: t`Every section keeps warming at the same steady rate`, correct: false, misconceptionId: "C07-M17", value: "all_warming" },
      ],
      solution: {
        steps: [
          t`At first each section warms, using up some of the heat it receives.`,
          t`In the steady state each section passes on all the heat it receives, so its temperature stays fixed, still falling along the rod.`,
        ],
      },
    },
  ],
};
