import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`In a cold winter a pond freezes on top, yet the fish below survive in water at about $4\ ^\circ\mathrm{C}$. Why doesn't the pond freeze from the bottom up?`,
    reveal: t`Water is unusual: below $4\ ^\circ\mathrm{C}$ it **expands** as it cools, so the coldest water is lighter and floats. Ice forms on top and shields the water beneath.`,
  },
  explanation: {
    intuition: [
      t`When a solid is heated, every length grows, so its area and volume grow too.`,
      t`The growth of a surface is **area expansion**; the growth of a volume is **volume expansion**.`,
      t`Each length grows by the fraction $\alpha\Delta T$, so an area grows by about twice that and a volume by about three times.`,
      t`Liquids and gases have no shape of their own, so only their volume expansion matters.`,
      t`Water is an exception: from $0$ to $4\ ^\circ\mathrm{C}$ it shrinks as it warms.`,
    ],
    formal: [
      {
        title: "Area and volume coefficients",
        points: [
          t`Area: $\Delta A = \beta A\,\Delta T$, where $\beta$ is the **coefficient of area expansion**.`,
          t`Volume: $\Delta V = \gamma V\,\Delta T$, where $\gamma$ is the **coefficient of volume expansion**.`,
          t`Like $\alpha$, both are in $\mathrm{K^{-1}}$ or $/^\circ\mathrm{C}$.`,
          t`After heating: $A_2 = A_1[1 + \beta(T_2 - T_1)]$ and $V_2 = V_1[1 + \gamma(T_2 - T_1)]$.`,
        ],
      },
      {
        title: "Why beta is 2 alpha",
        points: [
          t`A square of side $l$ heated by $\Delta T$ gets side $l(1 + \alpha\Delta T)$.`,
          t`Its area becomes $l^2(1 + \alpha\Delta T)^2$ $= l^2(1 + 2\alpha\Delta T + \alpha^2\Delta T^2)$.`,
          t`$\alpha\Delta T$ is tiny, so its square can be dropped: $\beta = 2\alpha$.`,
          t`A cube's volume becomes $l^3(1 + \alpha\Delta T)^3 \approx l^3(1 + 3\alpha\Delta T)$, so $\gamma = 3\alpha$.`,
          t`So $\alpha : \beta : \gamma$ $= 1 : 2 : 3$.`,
        ],
      },
      {
        title: "A liquid in a vessel",
        points: [
          t`A heated vessel expands too, so a full vessel overflows by less than the liquid's own expansion.`,
          t`Overflow $= V\,\Delta T\,(\gamma_{liquid} - \gamma_{vessel})$.`,
          t`$\gamma_{liquid} - \gamma_{vessel}$ is the liquid's **apparent** expansion coefficient.`,
        ],
      },
      {
        title: "The odd behaviour of water",
        points: [
          t`Water warmed from $0$ to $4\ ^\circ\mathrm{C}$ contracts; above $4\ ^\circ\mathrm{C}$ it expands like other liquids.`,
          t`So water is densest at $4\ ^\circ\mathrm{C}$.`,
          t`Water also expands when it freezes: a full glass bottle of water cracks in a freezer.`,
          t`Ice floats and a lake freezes from the top, keeping the water below at about $4\ ^\circ\mathrm{C}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A glass beaker of volume $600\ \mathrm{cm^3}$ is filled to the brim with a liquid at $0\ ^\circ\mathrm{C}$ and heated to $90\ ^\circ\mathrm{C}$. How much liquid overflows? ($\gamma_{liquid}$ $= 1.75 \times 10^{-4}\ /^\circ\mathrm{C}$, $\gamma_{glass}$ $= 2.75 \times 10^{-5}\ /^\circ\mathrm{C}$)`,
      steps: [
        t`The beaker grows by $2.75 \times 10^{-5} \times 600 \times 90$ $= 1.485\ \mathrm{cm^3}$.`,
        t`The liquid grows by $1.75 \times 10^{-4} \times 600 \times 90$ $= 9.45\ \mathrm{cm^3}$.`,
        t`Overflow $= 9.45 - 1.485$ $\approx 7.97\ \mathrm{cm^3}$.`,
      ],
      answer: t`About $7.97\ \mathrm{cm^3}$`,
    },
    visualSpec: t`Heat a square plate and a cube with a slider and compare how fast a side, the area and the volume grow.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Doubles $\beta$ though it is already the area coefficient.`,
      remediation: t`$\beta = 2\alpha$ is already the area coefficient: use $\Delta A = \beta A\,\Delta T$ as it is.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Uses the final temperature in place of the rise.",
      remediation: t`Expansion depends on the rise: $\Delta T = T_2 - T_1$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: "Gives the increase in area instead of the new area.",
      remediation: t`The new area is $A_1 + \Delta A$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Ignores the expansion of the flask.",
      remediation: t`The flask grows too, making room for some of the extra liquid: use $\gamma_{liquid} - \gamma_{glass}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: "Gives the flask's own expansion as the overflow.",
      remediation: "The overflow is the liquid's expansion minus the flask's.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Multiplies a volume coefficient $\gamma$ by 3 again.`,
      remediation: t`$\gamma = 3\alpha$ already is the volume coefficient: use $\Delta V = \gamma V\,\Delta T$ directly.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: t`Gives $\beta$, the area coefficient, as $\alpha$.`,
      remediation: t`An area grows twice as fast as a length: $\alpha = \dfrac{\beta}{2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: t`Divides $\beta$ by 3.`,
      remediation: t`$\beta = 2\alpha$ for area; the $3$ belongs to volume, $\gamma = 3\alpha$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Adds 273 to a temperature difference.",
      remediation: t`A rise of $100\ ^\circ\mathrm{C}$ is a rise of $100\ \mathrm{K}$: a difference needs no $273$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M10",
      mistake: "Squares and cubes the ratio: 1 : 4 : 9.",
      remediation: t`$(1 + \alpha\Delta T)^2 \approx 1 + 2\alpha\Delta T$: the power becomes a multiplier, so $\beta = 2\alpha$, $\gamma = 3\alpha$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Thinks all three coefficients are equal.",
      remediation: t`An area has two lengths that both grow, and a volume three: $\beta = 2\alpha$, $\gamma = 3\alpha$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: t`Swaps $\beta$ and $\gamma$.`,
      remediation: t`$\beta$ is for area (two lengths), $\gamma$ for volume (three): $1 : 2 : 3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: "Thinks water contracts all the way down to 0 degrees, like other liquids.",
      remediation: t`Water is densest at $4\ ^\circ\mathrm{C}$: below that it expands as it cools.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: "Thinks water expands all the way as it cools.",
      remediation: t`Above $4\ ^\circ\mathrm{C}$ water behaves normally and contracts as it cools.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Has water's behaviour the wrong way round.",
      remediation: t`Cooling water contracts down to $4\ ^\circ\mathrm{C}$, where it is densest, then expands.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.10" },
      stem: t`A thin aluminium plate has an area of $286\ \mathrm{cm^2}$ at $20\ ^\circ\mathrm{C}$. What is its area at $180\ ^\circ\mathrm{C}$? (Coefficient of area expansion of aluminium, $\beta = 4.9 \times 10^{-5}\ /^\circ\mathrm{C}$.)`,
      verify: { kind: "value", inputs: { A1: "286", b: "4.9e-5", T1: "20", T2: "180" }, params: { ask: "area", sf: "5" } },
      options: [
        { key: "A", text: t`$288.52\ \mathrm{cm^2}$`, correct: false, misconceptionId: "C04-M2", value: "288.520000000000" },
        { key: "B", text: t`$2.2422\ \mathrm{cm^2}$`, correct: false, misconceptionId: "C04-M3", value: "2.24220000000000" },
        { key: "C", text: t`$288.24\ \mathrm{cm^2}$`, correct: true, value: "288.240000000000" },
        { key: "D", text: t`$290.48\ \mathrm{cm^2}$`, correct: false, misconceptionId: "C04-M1", value: "290.480000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta T = 180 - 20$ $= 160\ ^\circ\mathrm{C}$.`,
          t`$A_2$ $= 286(1 + 4.9 \times 10^{-5} \times 160)$ $= 286 \times 1.00784$ $\approx 288.24\ \mathrm{cm^2}$.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (i)" },
      stem: t`A glass flask of volume $1 \times 10^{-4}\ \mathrm{m^3}$ is filled with a liquid at $30\ ^\circ\mathrm{C}$. How much liquid overflows when the flask and liquid are heated to $100\ ^\circ\mathrm{C}$? (Coefficients of volume expansion: glass $1.2 \times 10^{-5}\ /^\circ\mathrm{C}$, liquid $75 \times 10^{-5}\ /^\circ\mathrm{C}$.)`,
      verify: { kind: "value", inputs: { V: "1e-4", gl: "75e-5", gg: "1.2e-5", T1: "30", T2: "100" }, params: { ask: "overflow" } },
      options: [
        { key: "A", text: t`$5.25 \times 10^{-6}\ \mathrm{m^3}$`, correct: false, misconceptionId: "C04-M4", value: "5.25000000000000e-6" },
        { key: "B", text: t`$8.4 \times 10^{-8}\ \mathrm{m^3}$`, correct: false, misconceptionId: "C04-M5", value: "8.40000000000000e-8" },
        { key: "C", text: t`$1.55 \times 10^{-5}\ \mathrm{m^3}$`, correct: false, misconceptionId: "C04-M6", value: "1.55000000000000e-5" },
        { key: "D", text: t`$5.17 \times 10^{-6}\ \mathrm{m^3}$`, correct: true, value: "5.17000000000000e-6" },
      ],
      solution: {
        steps: [
          t`$\Delta T = 70\ ^\circ\mathrm{C}$; apparent coefficient $= 75 \times 10^{-5} - 1.2 \times 10^{-5}$ $= 73.8 \times 10^{-5}\ /^\circ\mathrm{C}$.`,
          t`Overflow $= 1 \times 10^{-4} \times 70 \times 73.8 \times 10^{-5}$ $\approx 5.17 \times 10^{-6}\ \mathrm{m^3}$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.12" },
      stem: t`A brass sheet is $50\ \mathrm{cm}$ long and $8\ \mathrm{cm}$ wide at $0\ ^\circ\mathrm{C}$. At $100\ ^\circ\mathrm{C}$ its area is $401.57\ \mathrm{cm^2}$. What is the coefficient of linear expansion of brass?`,
      verify: { kind: "value", inputs: { A1: "400", A2: "401.57", T1: "0", T2: "100" }, params: { ask: "brass" } },
      options: [
        { key: "A", text: t`$1.31 \times 10^{-5}\ \mathrm{/^\circ C}$`, correct: false, misconceptionId: "C04-M8", value: "1.31000000000000e-5" },
        { key: "B", text: t`$5.26 \times 10^{-6}\ \mathrm{/^\circ C}$`, correct: false, misconceptionId: "C04-M9", value: "5.26000000000000e-6" },
        { key: "C", text: t`$1.96 \times 10^{-5}\ \mathrm{/^\circ C}$`, correct: true, value: "1.96000000000000e-5" },
        { key: "D", text: t`$3.92 \times 10^{-5}\ \mathrm{/^\circ C}$`, correct: false, misconceptionId: "C04-M7", value: "3.92000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$A_1 = 50 \times 8$ $= 400\ \mathrm{cm^2}$, $\Delta A = 1.57\ \mathrm{cm^2}$, $\Delta T = 100\ ^\circ\mathrm{C}$.`,
          t`$\beta$ $= \dfrac{1.57}{400 \times 100}$ $= 3.925 \times 10^{-5}\ /^\circ\mathrm{C}$.`,
          t`$\alpha = \dfrac{\beta}{2}$ $\approx 1.96 \times 10^{-5}\ /^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.1 (iv)" },
      stem: t`$\alpha$, $\beta$ and $\gamma$ are the coefficients of linear, area and volume expansion of a solid. What is $\alpha : \beta : \gamma$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ratio" } },
      options: [
        { key: "A", text: t`$1 : 4 : 9$`, correct: false, misconceptionId: "C04-M10", value: "ratio_149" },
        { key: "B", text: t`$1 : 1 : 1$`, correct: false, misconceptionId: "C04-M11", value: "ratio_111" },
        { key: "C", text: t`$1 : 3 : 2$`, correct: false, misconceptionId: "C04-M12", value: "ratio_132" },
        { key: "D", text: t`$1 : 2 : 3$`, correct: true, value: "ratio_123" },
      ],
      solution: {
        steps: [
          t`Dropping the tiny squares and cubes of $\alpha\Delta T$: $\beta = 2\alpha$ and $\gamma = 3\alpha$.`,
          t`So $\alpha : \beta : \gamma$ $= 1 : 2 : 3$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`Water in a beaker is slowly cooled from $10\ ^\circ\mathrm{C}$ to $0\ ^\circ\mathrm{C}$, without freezing. How does its volume change?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "water" } },
      options: [
        { key: "A", text: t`It increases until $4\ ^\circ\mathrm{C}$, then decreases`, correct: false, misconceptionId: "C04-M15", value: "up_then_down" },
        { key: "B", text: t`It decreases until $4\ ^\circ\mathrm{C}$, then increases`, correct: true, value: "down_then_up" },
        { key: "C", text: t`It decreases all the way down to $0\ ^\circ\mathrm{C}$`, correct: false, misconceptionId: "C04-M13", value: "down_all_way" },
        { key: "D", text: t`It increases all the way down to $0\ ^\circ\mathrm{C}$`, correct: false, misconceptionId: "C04-M14", value: "up_all_way" },
      ],
      solution: {
        steps: [
          t`From $10$ down to $4\ ^\circ\mathrm{C}$ water contracts, like any liquid.`,
          t`From $4$ down to $0\ ^\circ\mathrm{C}$ it expands: water is densest at $4\ ^\circ\mathrm{C}$.`,
        ],
      },
    },
  ],
};
