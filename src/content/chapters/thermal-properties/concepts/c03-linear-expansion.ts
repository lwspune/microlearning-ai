import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`A metal jar lid is stuck tight. Holding the lid under hot water for a minute often lets it turn easily. Why?`,
    reveal: t`The hot water warms the metal lid, which grows a little in every direction, including its rim. Glass grows much less, so the lid loosens. Solids **expand** when heated.`,
  },
  explanation: {
    intuition: [
      t`Most solids get slightly longer when heated and shorter when cooled: this is **thermal expansion**.`,
      t`Heating makes the atoms vibrate harder, so on average they sit a little farther apart.`,
      t`The increase in length is called **linear expansion**.`,
      t`A longer rod, or a bigger rise in temperature, gives a bigger increase in length.`,
      t`Different materials expand by different amounts for the same heating.`,
    ],
    formal: [
      {
        title: "Coefficient of linear expansion",
        points: [
          t`A rod of length $l$ heated through $\Delta T$ grows by $\Delta l$, with $\Delta l \propto l$ and $\Delta l \propto \Delta T$.`,
          t`So $\Delta l = \alpha\, l\, \Delta T$.`,
          t`$\alpha$, the **coefficient of linear expansion**, is the fractional increase in length per degree rise: $\alpha$ $= \dfrac{\Delta l}{l\,\Delta T}$.`,
          t`Its unit is $\mathrm{K^{-1}}$ or $/^\circ\mathrm{C}$: these are equal, since a one-degree rise is the same on both scales.`,
          t`For metals $\alpha$ is about $10^{-5}\ \mathrm{K^{-1}}$, so the change is small.`,
        ],
      },
      {
        title: "Length after heating",
        points: [
          t`Heated from $T_1$ to $T_2$, a rod of length $l_1$ becomes $l_2 = l_1[1 + \alpha(T_2 - T_1)]$.`,
          t`Use the rise $T_2 - T_1$, never $T_2$ alone.`,
          t`Keep $\Delta l$ and $l$ in the same unit; their ratio has no unit.`,
          t`Every length of the body grows by the same fraction, so a hole in a plate grows too, like the metal around it.`,
        ],
      },
      {
        title: "Expansion in daily life",
        points: [
          t`Gaps are left between rail sections so the rails can lengthen on hot days without buckling.`,
          t`Overhead wires are hung with some sag, so they do not snap when they shorten in winter.`,
          t`A blacksmith heats an iron ring to slip it over a wheel's rim; it grips tightly as it cools and shrinks.`,
        ],
      },
    ],
    worked: {
      prompt: t`An iron rod is $4.256\ \mathrm{m}$ long at $27\ ^\circ\mathrm{C}$. To what temperature must it be heated to become $4.268\ \mathrm{m}$ long? ($\alpha$ $= 1.2 \times 10^{-5}\ \mathrm{K^{-1}}$)`,
      steps: [
        t`$\Delta l = 4.268 - 4.256$ $= 0.012\ \mathrm{m}$.`,
        t`$\Delta T$ $= \dfrac{\Delta l}{\alpha\, l}$ $= \dfrac{0.012}{1.2 \times 10^{-5} \times 4.256}$ $\approx 235\ ^\circ\mathrm{C}$.`,
        t`$T_2 = T_1 + \Delta T$ $= 27 + 235 = 262\ ^\circ\mathrm{C}$.`,
      ],
      answer: t`About $262\ ^\circ\mathrm{C}$`,
    },
    visualSpec: t`Heat a rod with a slider and watch its length grow in proportion to its original length and to the rise in temperature.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Uses the final temperature in place of the rise in temperature.",
      remediation: t`Expansion depends on the rise: $\Delta T = T_2 - T_1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Forgets to divide by (or multiply by) the original length.",
      remediation: t`$\Delta l = \alpha\, l\, \Delta T$: the longer the rod, the more it grows, so $l$ belongs in the formula.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Takes the change in length in cm but the length in m.",
      remediation: t`$\alpha$ $= \dfrac{\Delta l}{l\,\Delta T}$ needs $\Delta l$ and $l$ in the same unit.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Gives the rise in temperature as the answer.",
      remediation: t`$\Delta T$ is the rise; the ring must be heated to $T_1 + \Delta T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Uses the final length as l.",
      remediation: t`$l$ is the length you start from: the ring's own diameter, $1.47\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Adds 273 to a temperature difference.",
      remediation: t`A rise of $1\ ^\circ\mathrm{C}$ is a rise of $1\ \mathrm{K}$: a difference needs no $273$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M7",
      mistake: "Splits the expansion between two gaps.",
      remediation: t`Each rail's ends move out by half its expansion, and two half-shares from neighbouring rails meet in each gap: the gap is the full $\Delta l$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Gives the increase in length instead of the new length.",
      remediation: t`The new length is $l + \Delta l$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks the hole shrinks because the metal expands into it.",
      remediation: "Every length in the plate, including the hole's edge, grows by the same fraction: the hole gets bigger.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks the hole stays the same because only the metal expands.",
      remediation: "The ring of metal around the hole gets longer, so the hole it encloses gets bigger.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks the hole grows by a smaller fraction than the plate.",
      remediation: t`The whole plate scales up like a photo enlargement: the hole grows by the same fraction, $\alpha\,\Delta T$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Solved Ex.7.8" },
      stem: t`A metal rod is $4\ \mathrm{cm}$ long at $27\ ^\circ\mathrm{C}$. Heated to $387\ ^\circ\mathrm{C}$, it becomes $4.02\ \mathrm{cm}$ long. What is the coefficient of linear expansion of the metal?`,
      verify: { kind: "value", inputs: { l1: "4", l2: "4.02", T1: "27", T2: "387" }, params: { ask: "alpha" } },
      options: [
        { key: "A", text: t`$5.56 \times 10^{-5}\ \mathrm{/^\circ C}$`, correct: false, misconceptionId: "C03-M2", value: "5.56000000000000e-5" },
        { key: "B", text: t`$0.00139\ \mathrm{/^\circ C}$`, correct: false, misconceptionId: "C03-M3", value: "0.00139000000000000" },
        { key: "C", text: t`$1.39 \times 10^{-5}\ \mathrm{/^\circ C}$`, correct: true, value: "1.39000000000000e-5" },
        { key: "D", text: t`$1.29 \times 10^{-5}\ \mathrm{/^\circ C}$`, correct: false, misconceptionId: "C03-M1", value: "1.29000000000000e-5" },
      ],
      solution: {
        steps: [
          t`$\Delta l = 0.02\ \mathrm{cm}$, $l = 4\ \mathrm{cm}$, $\Delta T = 387 - 27$ $= 360\ ^\circ\mathrm{C}$.`,
          t`$\alpha$ $= \dfrac{0.02}{4 \times 360}$ $\approx 1.39 \times 10^{-5}\ /^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (vii)" },
      stem: t`A blacksmith must fit an iron ring on the wooden rim of a cart wheel. At $27\ ^\circ\mathrm{C}$ the rim's diameter is $1.5\ \mathrm{m}$ and the ring's is $1.47\ \mathrm{m}$. To what temperature must the ring be heated to just fit? ($\alpha_{iron} = 1.2 \times 10^{-5}\ \mathrm{K^{-1}}$)`,
      verify: { kind: "value", inputs: { l1: "1.47", l2: "1.5", a: "1.2e-5", T1: "27" }, params: { ask: "heat", sf: "4" } },
      options: [
        { key: "A", text: t`$1701\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C03-M4", value: "1701" },
        { key: "B", text: t`$1694\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C03-M5", value: "1694" },
        { key: "C", text: t`$1728\ \mathrm{^\circ C}$`, correct: true, value: "1728" },
        { key: "D", text: t`$2527\ \mathrm{^\circ C}$`, correct: false, misconceptionId: "C03-M2", value: "2527" },
      ],
      solution: {
        steps: [
          t`The ring's diameter must grow by $1.5 - 1.47$ $= 0.03\ \mathrm{m}$.`,
          t`$\Delta T$ $= \dfrac{0.03}{1.2 \times 10^{-5} \times 1.47}$ $\approx 1701\ ^\circ\mathrm{C}$.`,
          t`$T_2 = 27 + 1701$ $= 1728\ ^\circ\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/thermal-properties-11-phy/Ex Q.3 (vi)" },
      stem: t`Rails, each $10\ \mathrm{m}$ long, are laid at $27\ ^\circ\mathrm{C}$. The hottest the region gets is $45\ ^\circ\mathrm{C}$. What gap should be left between rail sections? ($\alpha = 1.2 \times 10^{-5}\ \mathrm{K^{-1}}$)`,
      verify: { kind: "value", inputs: { l: "10", a: "1.2e-5", T1: "27", T2: "45" }, params: { ask: "gap" } },
      options: [
        { key: "A", text: t`$5.4\ \mathrm{mm}$`, correct: false, misconceptionId: "C03-M1", value: "5.40000000000000" },
        { key: "B", text: t`$34.9\ \mathrm{mm}$`, correct: false, misconceptionId: "C03-M6", value: "34.9000000000000" },
        { key: "C", text: t`$1.08\ \mathrm{mm}$`, correct: false, misconceptionId: "C03-M7", value: "1.08000000000000" },
        { key: "D", text: t`$2.16\ \mathrm{mm}$`, correct: true, value: "2.16000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta T = 45 - 27$ $= 18\ ^\circ\mathrm{C}$ $= 18\ \mathrm{K}$.`,
          t`$\Delta l = \alpha\, l\, \Delta T$ $= 1.2 \times 10^{-5} \times 10 \times 18$ $= 2.16 \times 10^{-3}\ \mathrm{m}$ $= 2.16\ \mathrm{mm}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`A steel measuring tape is exactly $50\ \mathrm{m}$ long at $20\ ^\circ\mathrm{C}$. How long is it on a day when it is at $40\ ^\circ\mathrm{C}$? ($\alpha_{steel} = 1.2 \times 10^{-5}\ \mathrm{K^{-1}}$)`,
      verify: { kind: "value", inputs: { l: "50", a: "1.2e-5", T1: "20", T2: "40" }, params: { ask: "final", sf: "5" } },
      options: [
        { key: "A", text: t`$50.176\ \mathrm{m}$`, correct: false, misconceptionId: "C03-M6", value: "50.1760000000000" },
        { key: "B", text: t`$0.012\ \mathrm{m}$`, correct: false, misconceptionId: "C03-M8", value: "0.0120000000000000" },
        { key: "C", text: t`$50.012\ \mathrm{m}$`, correct: true, value: "50.0120000000000" },
        { key: "D", text: t`$50.024\ \mathrm{m}$`, correct: false, misconceptionId: "C03-M1", value: "50.0240000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta l$ $= 1.2 \times 10^{-5} \times 50 \times 20$ $= 0.012\ \mathrm{m}$.`,
          t`New length $= 50 + 0.012$ $= 50.012\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "authored" },
      stem: t`A steel plate has a circular hole cut in it. The plate is heated evenly. What happens to the hole?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "hole" } },
      options: [
        { key: "A", text: t`It grows by the same fraction as every other length of the plate`, correct: true, value: "hole_grows" },
        { key: "B", text: t`It shrinks, because the steel expands into the hole`, correct: false, misconceptionId: "C03-M9", value: "hole_shrinks" },
        { key: "C", text: t`It stays the same, because only the steel itself expands`, correct: false, misconceptionId: "C03-M10", value: "hole_same" },
        { key: "D", text: t`It grows, but by a smaller fraction than the plate's outer edges`, correct: false, misconceptionId: "C03-M11", value: "hole_grows_less" },
      ],
      solution: {
        steps: [
          t`Heating scales every length of the plate by the factor $1 + \alpha\,\Delta T$.`,
          t`The hole's edge is such a length, so the hole grows by the same fraction, as if it were filled with steel.`,
        ],
      },
    },
  ],
};
