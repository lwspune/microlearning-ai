import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c12: Concept = {
  id: "C12",
  status: "approved",
  hook: {
    prompt: t`A cup of hot tea cools quickly at first, then more and more slowly as it nears room temperature. Why does it slow down?`,
    reveal: t`How fast a body cools depends on how much hotter it is than its surroundings. As the tea's excess temperature shrinks, so does its rate of cooling.`,
  },
  explanation: {
    intuition: [
      t`A body hotter than its surroundings loses heat, and its temperature falls.`,
      t`What matters is the **excess temperature**: how much hotter it is than its surroundings.`,
      t`Twice the excess, twice the rate of cooling.`,
      t`So a hot body cools fast at first, then more and more slowly.`,
      t`This is **Newton's law of cooling**, true when the excess is small.`,
    ],
    formal: [
      {
        title: "Newton's law of cooling",
        points: [
          t`**Newton's law of cooling**: the rate of cooling is proportional to the excess temperature.`,
          t`$\dfrac{d\theta}{dt} = -k\left(\theta - \theta_0\right)$, where $\theta_0$ is the surroundings' temperature.`,
          t`The constant $k$ depends on the body's surface, area, mass and specific heat.`,
          t`Halve the excess temperature, and the rate of cooling halves.`,
          t`The law holds only when the excess temperature is small.`,
        ],
      },
      {
        title: "From Stefan's law",
        points: [
          t`By Stefan's law, a body's net rate of heat loss is $e\sigma A\left(T^4 - T_0^4\right)$.`,
          t`When $T - T_0$ is small, $T^4 - T_0^4 \approx 4T_0^3\left(T - T_0\right)$.`,
          t`So the loss is proportional to $T - T_0$, the same as $\theta - \theta_0$.`,
          t`Over an interval, use the average temperature: $\dfrac{\theta_1 - \theta_2}{t} = k\left(\dfrac{\theta_1 + \theta_2}{2} - \theta_0\right)$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A body cools from $80^\circ\mathrm{C}$ to $70^\circ\mathrm{C}$ in $5$ minutes, and to $62^\circ\mathrm{C}$ in the next $5$ minutes. Find the temperature of the surroundings.`,
      steps: [
        t`First $5$ minutes: $\dfrac{80 - 70}{5} = k\left(75 - \theta_0\right)$, so $2 = k\left(75 - \theta_0\right)$.`,
        t`Next $5$ minutes: $\dfrac{70 - 62}{5} = k\left(66 - \theta_0\right)$, so $1.6 = k\left(66 - \theta_0\right)$.`,
        t`Divide: $\dfrac{2}{1.6} = \dfrac{75 - \theta_0}{66 - \theta_0}$, so $82.5 - 1.25\,\theta_0 = 75 - \theta_0$.`,
        t`$0.25\,\theta_0 = 7.5$, so $\theta_0 = 30^\circ\mathrm{C}$.`,
      ],
      answer: t`$\theta_0 = 30^\circ\mathrm{C}$`,
    },
    visualSpec: t`Leave a hot cup in a cool room and watch its temperature graph fall steeply at first, then flatten as it nears room temperature.`,
  },
  misconceptions: [
    {
      id: "C12-M1",
      mistake: "Uses the body's temperature instead of its excess over the surroundings.",
      remediation: t`The rate of cooling depends on $\theta - \theta_0$: subtract the surroundings' temperature first.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M2",
      mistake: "Thinks a hotter body cools more slowly.",
      remediation: t`The bigger the excess temperature, the faster the body cools: the rate is proportional to $\theta - \theta_0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M3",
      mistake: "Thinks the rate of cooling stays the same as the body cools.",
      remediation: "As the excess temperature falls, so does the rate of cooling.",
      fallback: { kind: "none" },
    },
    {
      id: "C12-M4",
      mistake: "Applies the fourth-power law to the temperature excess.",
      remediation: t`For a small excess, $T^4 - T_0^4 \approx 4T_0^3\left(T - T_0\right)$: the rate is proportional to the excess itself.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C12-M5",
      mistake: "Thinks the law holds for a large temperature difference.",
      remediation: t`The approximation $T^4 - T_0^4 \approx 4T_0^3\left(T - T_0\right)$ needs $T - T_0$ small.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M6",
      mistake: "Thinks the law holds for any temperature difference.",
      remediation: t`For a large excess, the full $T^4 - T_0^4$ of Stefan's law is needed; Newton's law holds only for a small excess.`,
      fallback: { kind: "none" },
    },
    {
      id: "C12-M7",
      mistake: "Thinks the law holds only for a perfect blackbody.",
      remediation: t`The emissivity $e$ just goes into the constant $k$; the law holds for any body with a small excess temperature.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  items: [
    {
      id: "C12-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.3" },
      stem: t`A metal sphere cools at $4^\circ\mathrm{C/min}$ when its temperature is $50^\circ\mathrm{C}$. The surroundings are at $25^\circ\mathrm{C}$. At what rate does it cool when its temperature is $45^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { r1: "4", th1: "50", th2: "45", th0: "25" }, params: { ask: "rate" } },
      options: [
        { key: "A", text: t`$3.6\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M1", value: "3.60000000000000" },
        { key: "B", text: t`$5\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M2", value: "5" },
        { key: "C", text: t`$4\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M3", value: "4" },
        { key: "D", text: t`$3.2\ \mathrm{{}^\circ C/min}$`, correct: true, value: "3.20000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\text{rate}_2}{\text{rate}_1} = \dfrac{45 - 25}{50 - 25} = \dfrac{20}{25}$.`,
          t`$\text{rate}_2 = 4 \times 0.8 = 3.2^\circ\mathrm{C/min}$.`,
        ],
      },
    },
    {
      id: "C12-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.2(viii)" },
      stem: t`A body cools at $0.5^\circ\mathrm{C}$ per minute when it is $25^\circ\mathrm{C}$ above its surroundings. At what rate does it cool when it is $15^\circ\mathrm{C}$ above the same surroundings?`,
      verify: { kind: "value", inputs: { r1: "0.5", th1: "25", th2: "15", th0: "0" }, params: { ask: "rate", excess: "1" } },
      options: [
        { key: "A", text: t`$0.0648\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M4", value: "0.0648000000000000" },
        { key: "B", text: t`$0.3\ \mathrm{{}^\circ C/min}$`, correct: true, value: "0.300000000000000" },
        { key: "C", text: t`$0.833\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M2", value: "0.833000000000000" },
        { key: "D", text: t`$0.5\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M3", value: "0.500000000000000" },
      ],
      solution: {
        steps: [
          t`The rate is proportional to the excess temperature: $\dfrac{\text{rate}_2}{\text{rate}_1} = \dfrac{15}{25}$.`,
          t`$\text{rate}_2 = 0.5 \times 0.6 = 0.3^\circ\mathrm{C/min}$.`,
        ],
      },
    },
    {
      id: "C12-Q3",
      source: { kind: "authored" },
      stem: t`In a room at $25^\circ\mathrm{C}$, a body cools from $60^\circ\mathrm{C}$ to $50^\circ\mathrm{C}$ in $10$ minutes. How long will it take to cool from $50^\circ\mathrm{C}$ to $42^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { a1: "60", b1: "50", t1: "10", a2: "50", b2: "42", th0: "25" }, params: { ask: "time" } },
      options: [
        { key: "A", text: t`$8\ \mathrm{min}$`, correct: false, misconceptionId: "C12-M3", value: "8" },
        { key: "B", text: t`$11.4\ \mathrm{min}$`, correct: true, value: "11.4000000000000" },
        { key: "C", text: t`$9.57\ \mathrm{min}$`, correct: false, misconceptionId: "C12-M1", value: "9.57000000000000" },
        { key: "D", text: t`$5.6\ \mathrm{min}$`, correct: false, misconceptionId: "C12-M2", value: "5.60000000000000" },
      ],
      solution: {
        steps: [
          t`First interval: $\dfrac{60 - 50}{10} = k\left(55 - 25\right)$, so $k = \dfrac{1}{30}\ \mathrm{min^{-1}}$.`,
          t`Second: $\dfrac{50 - 42}{t} = \dfrac{1}{30}\left(46 - 25\right)$, so $t = \dfrac{8 \times 30}{21} \approx 11.4\ \mathrm{min}$.`,
        ],
      },
    },
    {
      id: "C12-Q4",
      source: { kind: "authored" },
      stem: t`When does Newton's law of cooling hold?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "holds" } },
      options: [
        { key: "A", text: t`Only when the body is a perfect blackbody`, correct: false, misconceptionId: "C12-M7", value: "blackbody_only" },
        { key: "B", text: t`When the body is only a little hotter than its surroundings`, correct: true, value: "small_difference" },
        { key: "C", text: t`When the body is much hotter than its surroundings`, correct: false, misconceptionId: "C12-M5", value: "large_difference" },
        { key: "D", text: t`For any difference between the body and its surroundings`, correct: false, misconceptionId: "C12-M6", value: "any_difference" },
      ],
      solution: {
        steps: [
          t`Newton's law comes from $T^4 - T_0^4 \approx 4T_0^3\left(T - T_0\right)$.`,
          t`That holds only when $T - T_0$ is small: the body is only a little hotter than its surroundings.`,
        ],
      },
    },
    {
      id: "C12-Q5",
      source: { kind: "authored" },
      stem: t`A cup of tea at $90^\circ\mathrm{C}$, in a room at $30^\circ\mathrm{C}$, cools at $3^\circ\mathrm{C}$ per minute. At what rate does it cool when it reaches $60^\circ\mathrm{C}$?`,
      verify: { kind: "value", inputs: { r1: "3", th1: "90", th2: "60", th0: "30" }, params: { ask: "rate" } },
      options: [
        { key: "A", text: t`$3\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M3", value: "3" },
        { key: "B", text: t`$0.188\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M4", value: "0.188000000000000" },
        { key: "C", text: t`$1.5\ \mathrm{{}^\circ C/min}$`, correct: true, value: "1.50000000000000" },
        { key: "D", text: t`$2\ \mathrm{{}^\circ C/min}$`, correct: false, misconceptionId: "C12-M1", value: "2" },
      ],
      solution: {
        steps: [
          t`$\dfrac{\text{rate}_2}{\text{rate}_1} = \dfrac{60 - 30}{90 - 30} = \dfrac{1}{2}$.`,
          t`$\text{rate}_2 = 3 \times \dfrac{1}{2} = 1.5^\circ\mathrm{C/min}$.`,
        ],
      },
    },
  ],
};
