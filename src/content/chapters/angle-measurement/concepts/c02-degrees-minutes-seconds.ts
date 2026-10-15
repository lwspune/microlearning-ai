import type { Concept, FigureElement } from "../../../types.ts";

const t = String.raw;

/** The minute marks on a one-degree ruler from x = 0 to x = 6 (a tenth per minute), labelled every 10′. */
function minuteTicks(step: number): FigureElement[] {
  const marks: FigureElement[] = [];
  for (let m = 1; m < 60; m++) {
    marks.push({ kind: "segment", from: [m / 10, 0], to: [m / 10, m % 10 === 0 ? 0.3 : 0.15], tone: "muted", step });
  }
  for (let m = 0; m <= 60; m += 10) {
    marks.push({ kind: "label", at: [m / 10, 0], label: `${m}′`, labelAt: "s", tone: "muted", step });
  }
  return marks;
}

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`A protractor app shows $183.7^\circ$. Your friend writes it as $183^\circ 7'$. **Is that right?**`,
    reveal: t`No. A degree has 60 minutes, not 10 or 100, so $0.7^\circ = 0.7 \times 60 = 42'$. The angle is $183^\circ 42'$. Minutes and seconds count in sixties, like a clock.`,
  },
  explanation: {
    intuition: t`A **degree**, $1^\circ$, is $\frac{1}{360}$ of a full turn. To measure finer than that, a degree is split into 60 equal parts called **minutes**, and each minute into 60 equal parts called **seconds**. One minute is written $1'$ and one second $1''$: so $1^\circ = 60'$ and $1' = 60''$. An hour splits up the same way. So $1.5^\circ$ is $1^\circ 30'$, just as 1.5 hours is 1 hour 30 minutes, not 1 hour 50 minutes. To change to a smaller unit, multiply by 60; to change to a larger unit, divide by 60.`,
    formal: [
      {
        body: t`**Degrees, minutes and seconds.** An angle written $a^\circ\, b'\, c''$ is in **degrees, minutes and seconds** (D°M′S″ for short): $a$ degrees, $b$ minutes and $c$ seconds. So $35^\circ 12' 40''$ is 35 degrees, 12 minutes and 40 seconds. Sixty of one unit make one of the next, so $b$ and $c$ are each less than 60. A degree is $60'$, and each of those is $60''$, so $1^\circ = 60 \times 60'' = 3600''$.`,
      },
      {
        body: t`**Decimal degrees to D°M′S″.** An angle in **decimal degrees** is written as a decimal of a degree, such as $12.75^\circ$. To write it in D°M′S″:

- **1.** Keep the whole degrees.
- **2.** Multiply the decimal part by 60. The whole number is the minutes.
- **3.** Multiply the part of a minute left over by 60. That is the seconds.

So $12.75^\circ = 12^\circ + (0.75 \times 60)'$, which is $12^\circ 45'$, not $12^\circ 75'$.`,
      },
      {
        body: t`**D°M′S″ to decimal degrees.** To write $a^\circ\, b'\, c''$ in decimal degrees, turn the minutes and seconds into degrees and add them on. A minute is $\frac{1}{60}$ of a degree and a second is $\frac{1}{3600}$ of a degree, so

$$a^\circ\, b'\, c'' = \left(a + \frac{b}{60} + \frac{c}{3600}\right)^\circ$$

For example, $65^\circ 30' = \left(65 + \frac{30}{60}\right)^\circ$, which is $65.5^\circ$, not $65.3^\circ$.`,
      },
      {
        body: t`**Seconds to D°M′S″.** To write a number of seconds in D°M′S″, divide by 60 twice and keep the remainders:

- **1.** Divide the seconds by 60. The quotient is the minutes; the remainder is the seconds.
- **2.** Divide those minutes by 60. The quotient is the degrees; the remainder is the minutes.

For example, $5000 \div 60 = 83$ remainder $20$, so $5000'' = 83' 20''$. Then $83 \div 60 = 1$ remainder $23$, so $5000'' = 1^\circ 23' 20''$.`,
      },
      {
        body: t`**Negative angles.** A **negative angle**, such as $-10^\circ 30'$, is measured clockwise, the way a clock's hands go. Its minus sign belongs to the whole angle: $-a^\circ\, b'\, c''$ means $-(a^\circ\, b'\, c'')$. Convert the angle without its sign, then put the minus in front. So $-10^\circ 30' = -(10^\circ 30')$, which is $-10.5^\circ$, not $-9.5^\circ$. The other way, $-12.5^\circ$ is $-12^\circ 30'$, not $-13^\circ 30'$.`,
      },
    ],
    worked: {
      prompt: t`Express $74.87^\circ$ in degrees, minutes and seconds.`,
      steps: [
        t`Split off the whole degrees: $74.87^\circ = 74^\circ + 0.87^\circ$.`,
        t`Minutes: $0.87^\circ = (0.87 \times 60)' = 52.2'$. That is $52'$, with $0.2'$ left over.`,
        t`Seconds: $0.2' = (0.2 \times 60)'' = 12''$.`,
      ],
      answer: t`$74.87^\circ = 74^\circ 52' 12''$.`,
    },
    figure: {
      alt: "One degree, from 1° to 2°, drawn as a ruler split into 60 minutes and marked every 10′: 1° = 60′. Halfway along, at the 30′ mark, is 1.5°, which is 1°30′. The 50′ mark, 1°50′, is not 1.5°.",
      axes: "none",
      view: { x: [-0.6, 6.6], y: [-1.1, 1] },
      elements: [
        { kind: "segment", from: [0, 0], to: [6, 0], step: 1 },
        { kind: "segment", from: [0, 0], to: [0, 0.4], step: 1 },
        { kind: "label", at: [0, 0.4], label: "1°", labelAt: "n", step: 1 },
        { kind: "segment", from: [6, 0], to: [6, 0.4], step: 1 },
        { kind: "label", at: [6, 0.4], label: "2°", labelAt: "n", step: 1 },
        ...minuteTicks(2),
        { kind: "label", at: [3, -0.45], label: "1° = 60′", labelAt: "s", step: 2 },
        { kind: "point", at: [3, 0], tone: "good", step: 3 },
        { kind: "label", at: [3, 0.4], label: "1.5° = 1°30′", labelAt: "n", tone: "good", step: 3 },
        { kind: "point", at: [5, 0], tone: "bad", step: 4 },
        { kind: "label", at: [5, -0.45], label: "1°50′ is not 1.5°", labelAt: "s", tone: "bad", step: 4 },
      ],
    },
    visualSpec: t`A one-degree strip split into 60 minute ticks, each of which zooms into 60 second ticks; drag a pointer along it to see the reading as a decimal of a degree and as $a^\circ\, b'\, c''$ side by side.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: t`Treating minutes and seconds as decimal places (hundredths): reading $12.25^\circ$ as $12^\circ 25'$, or $12^\circ 25'$ as $12.25^\circ$`,
      remediation: "A degree has 60 minutes and a minute has 60 seconds, not 100, so the digits are not the minutes and seconds. Convert in sixties: multiply the decimal part of a degree by 60 for minutes, and divide by 60 to go up a unit (seconds to minutes, minutes to degrees).",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: t`Multiplying by 60 for the minutes, then reading the decimal part of the minutes as the seconds: $52.2'$ taken as $52' 2''$`,
      remediation: t`The part of a minute left over is converted the same way: multiply it by 60 to get seconds. For example, $0.2' = 12''$, not $2''$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Stopping at the minutes and dropping the seconds",
      remediation: t`Carry the conversion all the way: the part of a minute left over, times 60, gives the seconds. Seconds count too: $c''$ is $\frac{c}{3600}$ of a degree.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Dividing seconds by 60 to get degrees, as if they were minutes",
      remediation: t`A second is $\frac{1}{60}$ of a minute, so it is only $\frac{1}{3600}$ of a degree. Divide seconds by 60 to get minutes, and by 3600 to get degrees.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M5",
      mistake: t`Putting the minus sign on the degrees only and adding the minutes and seconds as positive: $-a^\circ\, b'\, c''$ taken as $-a^\circ + b' + c''$`,
      remediation: t`The minus sign belongs to the whole angle: $-10^\circ 30'$ means $-(10^\circ 30') = -10.5^\circ$, not $-9.5^\circ$. Convert the angle without its sign, then put the minus in front.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M1 (decimal degrees to D°M′S″) is modelled only for an angle with 2 or 4 decimal digits; it applies to every D°M′S″-to-degrees and seconds-to-D°M′S″ item.",
    "C02-M2 is detectable only on decimal-to-D°M′S″ items whose minutes are not whole; C02-M3 only where the angle has non-zero seconds.",
    "C02-M4 is detectable only on items that turn seconds into degrees; C02-M5 only on negative angles.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q4(ii)" },
      stem: t`Express $245.33^\circ$ in degrees, minutes and seconds.`,
      verify: { kind: "value", inputs: { x: "24533/100" }, params: { dir: "to_dms" } },
      options: [
        { key: "A", text: t`$245^\circ 19' 48''$`, correct: true, value: "24533/100" },
        { key: "B", text: t`$245^\circ 33'$`, correct: false, misconceptionId: "C02-M1", value: "4911/20" },
        { key: "C", text: t`$245^\circ 19' 8''$`, correct: false, misconceptionId: "C02-M2", value: "220787/900" },
        { key: "D", text: t`$245^\circ 19'$`, correct: false, misconceptionId: "C02-M3", value: "14719/60" },
      ],
      solution: {
        steps: [
          t`$245.33^\circ = 245^\circ + 0.33^\circ$.`,
          t`$0.33^\circ = (0.33 \times 60)' = 19.8'$: that is $19'$, with $0.8'$ left over.`,
          t`$0.8' = (0.8 \times 60)'' = 48''$, so $245.33^\circ = 245^\circ 19' 48''$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/1.1 SolvedEx.3(ii)" },
      stem: t`Express $-30.6925^\circ$ in degrees, minutes and seconds.`,
      verify: { kind: "value", inputs: { x: "-306925/10000" }, params: { dir: "to_dms" } },
      options: [
        { key: "A", text: t`$-30^\circ 41' 55''$`, correct: false, misconceptionId: "C02-M2", value: "-22103/720" },
        { key: "B", text: t`$-30^\circ 41'$`, correct: false, misconceptionId: "C02-M3", value: "-1841/60" },
        { key: "C", text: t`$-31^\circ 18' 27''$`, correct: false, misconceptionId: "C02-M5", value: "-12523/400" },
        { key: "D", text: t`$-30^\circ 41' 33''$`, correct: true, value: "-12277/400" },
      ],
      solution: {
        steps: [
          t`The minus belongs to the whole angle: $-30.6925^\circ = -(30^\circ + 0.6925^\circ)$.`,
          t`$0.6925^\circ = (0.6925 \times 60)' = 41.55'$: that is $41'$, with $0.55'$ left over.`,
          t`$0.55' = (0.55 \times 60)'' = 33''$, so the angle is $-(30^\circ 41' 33'') = -30^\circ 41' 33''$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q2(vi)" },
      stem: t`Express $40^\circ 48' 36''$ in degrees, as a decimal.`,
      verify: { kind: "value", inputs: { sg: "1", d: "40", m: "48", s: "36" }, params: { dir: "to_deg" } },
      options: [
        { key: "A", text: t`$41.4^\circ$`, correct: false, misconceptionId: "C02-M4", value: "207/5" },
        { key: "B", text: t`$40.81^\circ$`, correct: true, value: "4081/100" },
        { key: "C", text: t`$40.4836^\circ$`, correct: false, misconceptionId: "C02-M1", value: "101209/2500" },
        { key: "D", text: t`$40.8^\circ$`, correct: false, misconceptionId: "C02-M3", value: "204/5" },
      ],
      solution: {
        steps: [
          t`$48' = \left(\frac{48}{60}\right)^\circ = 0.8^\circ$.`,
          t`$36'' = \left(\frac{36}{3600}\right)^\circ = 0.01^\circ$.`,
          t`$40^\circ 48' 36'' = (40 + 0.8 + 0.01)^\circ = 40.81^\circ$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`Express $-20^\circ 15' 36''$ in degrees, as a decimal.`,
      verify: { kind: "value", inputs: { sg: "-1", d: "20", m: "15", s: "36" }, params: { dir: "to_deg" } },
      options: [
        { key: "A", text: t`$-19.74^\circ$`, correct: false, misconceptionId: "C02-M5", value: "-987/50" },
        { key: "B", text: t`$-20.26^\circ$`, correct: true, value: "-1013/50" },
        { key: "C", text: t`$-20.1536^\circ$`, correct: false, misconceptionId: "C02-M1", value: "-12596/625" },
        { key: "D", text: t`$-20.85^\circ$`, correct: false, misconceptionId: "C02-M4", value: "-417/20" },
      ],
      solution: {
        steps: [
          t`The minus belongs to the whole angle: $-20^\circ 15' 36'' = -(20^\circ 15' 36'')$.`,
          t`$15' = \left(\frac{15}{60}\right)^\circ = 0.25^\circ$ and $36'' = \left(\frac{36}{3600}\right)^\circ = 0.01^\circ$.`,
          t`So the angle is $-(20 + 0.25 + 0.01)^\circ = -20.26^\circ$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Express $12345''$ in degrees, minutes and seconds.`,
      verify: { kind: "value", inputs: { n: "12345" }, params: { dir: "sec_to_dms" } },
      options: [
        { key: "A", text: t`$205^\circ 45'$`, correct: false, misconceptionId: "C02-M4", value: "823/4" },
        { key: "B", text: t`$3^\circ 25' 45''$`, correct: true, value: "823/240" },
        { key: "C", text: t`$1^\circ 23' 45''$`, correct: false, misconceptionId: "C02-M1", value: "67/48" },
        { key: "D", text: t`$3^\circ 25'$`, correct: false, misconceptionId: "C02-M3", value: "41/12" },
      ],
      solution: {
        steps: [
          t`Seconds to minutes: $12345 \div 60 = 205$ remainder $45$, so $12345'' = 205' 45''$.`,
          t`Minutes to degrees: $205 \div 60 = 3$ remainder $25$, so $205' = 3^\circ 25'$.`,
          t`$12345'' = 3^\circ 25' 45''$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "authored" },
      stem: t`Express $8.1525^\circ$ in degrees, minutes and seconds.`,
      verify: { kind: "value", inputs: { x: "81525/10000" }, params: { dir: "to_dms" } },
      options: [
        { key: "A", text: t`$8^\circ 9' 9''$`, correct: true, value: "3261/400" },
        { key: "B", text: t`$8^\circ 15' 25''$`, correct: false, misconceptionId: "C02-M1", value: "1189/144" },
        { key: "C", text: t`$8^\circ 9' 15''$`, correct: false, misconceptionId: "C02-M2", value: "1957/240" },
        { key: "D", text: t`$8^\circ 9'$`, correct: false, misconceptionId: "C02-M3", value: "163/20" },
      ],
      solution: {
        steps: [
          t`$8.1525^\circ = 8^\circ + 0.1525^\circ$.`,
          t`$0.1525^\circ = (0.1525 \times 60)' = 9.15'$: that is $9'$, with $0.15'$ left over.`,
          t`$0.15' = (0.15 \times 60)'' = 9''$, so $8.1525^\circ = 8^\circ 9' 9''$.`,
        ],
      },
    },
  ],
};
