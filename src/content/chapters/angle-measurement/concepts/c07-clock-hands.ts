import type { Concept, Figure, FigureElement, Pt } from "../../../types.ts";

const t = String.raw;

/** A clock reading (degrees clockwise from 12) as a figure angle (degrees anticlockwise from the positive x-axis). */
const dir = (fromTwelve: number) => 90 - fromTwelve;
/** The point r from the centre, `fromTwelve` degrees clockwise from 12. */
function clock(fromTwelve: number, r: number): Pt {
  const a = (dir(fromTwelve) * Math.PI) / 180;
  return [+(r * Math.cos(a)).toFixed(3), +(r * Math.sin(a)).toFixed(3)];
}
const MINUTE = 2.8;
const HOUR = 1.9;

/** The clock face: its rim, the 12 hour marks and their numbers. */
const face: FigureElement[] = [
  { kind: "circle", centre: [0, 0], r: 4, tone: "muted" },
  ...Array.from({ length: 12 }, (_, k): FigureElement => ({ kind: "segment", from: clock(30 * k, 3.72), to: clock(30 * k, 4), tone: "muted" })),
  { kind: "label", at: [1.7, 2.584], label: "1", labelAt: "n", tone: "muted" },
  { kind: "label", at: [2.944, 1.34], label: "2", labelAt: "n", tone: "muted" },
  { kind: "label", at: [3.4, -0.36], label: "3", labelAt: "n", tone: "muted" },
  { kind: "label", at: [2.944, -2.06], label: "4", labelAt: "n", tone: "muted" },
  { kind: "label", at: [1.7, -3.304], label: "5", labelAt: "n", tone: "muted" },
  { kind: "label", at: [0, -3.76], label: "6", labelAt: "n", tone: "muted" },
  { kind: "label", at: [-1.7, -3.304], label: "7", labelAt: "n", tone: "muted" },
  { kind: "label", at: [-2.944, -2.06], label: "8", labelAt: "n", tone: "muted" },
  { kind: "label", at: [-3.4, -0.36], label: "9", labelAt: "n", tone: "muted" },
  { kind: "label", at: [-2.944, 1.34], label: "10", labelAt: "n", tone: "muted" },
  { kind: "label", at: [-1.7, 2.584], label: "11", labelAt: "n", tone: "muted" },
  { kind: "label", at: [0, 3.04], label: "12", labelAt: "n", tone: "muted" },
];
/** Where both hands are measured from: the initial arm, pointing at 12. */
const fromTwelve = (labelAt: "e" | "w"): FigureElement => ({ kind: "segment", from: [0, 0], to: [0, 2.6], label: "from 12", labelAt, tone: "good" });
/** A clock face with room below it for a line of working. */
const CAPTIONED: Figure["view"] = { x: [-4.6, 4.6], y: [-5.3, 4.6] };
const caption = (label: string, step: number): FigureElement => ({ kind: "label", at: [0, -5.05], label, labelAt: "n", step });

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`At 3:00 the hands of a clock are $90^\circ$ apart. By 3:30 the minute hand has swung half a turn, from 12 to 6. **Is the angle between the hands now $90^\circ$?**`,
    reveal: t`No, it is $75^\circ$. In those 30 minutes the hour hand moved too: halfway from 3 to 4, which is $15^\circ$. From 12, the hour hand is at $90^\circ + 15^\circ = 105^\circ$ and the minute hand at $180^\circ$, so they are $180^\circ - 105^\circ = 75^\circ$ apart.`,
  },
  explanation: {
    intuition: t`A **clock face** is a circle, so once round it is a full turn, $360^\circ$. Twelve **hour marks** split it into equal parts: $360^\circ \div 12 = 30^\circ$ from one mark to the next. Two **hands** turn about the centre, both the same way, **clockwise**: from 12 to 1 to 2 and on round. The long **minute hand** goes once round every hour. In that hour the short **hour hand** moves on just one mark, and it moves all the time, not in jumps: at half past three it is halfway from 3 to 4. The **angle between the hands** is the angle at the centre from one hand to the other.`,
    formal: [
      {
        body: t`**Rate of the minute hand.** A hand's **rate** is how far it turns in one minute. The minute hand makes a full turn, $360^\circ$, in 60 minutes, so its rate is $360^\circ \div 60 = 6^\circ$ a minute. Five minutes take it $30^\circ$, from one hour mark to the next. At $m$ minutes past the hour it has turned $6m$ degrees clockwise from 12: at 25 past, $6 \times 25 = 150^\circ$, pointing at 5.`,
        figure: {
          alt: "A clock face. The minute hand starts at 12 and turns clockwise 150°, to 5: 25 minutes at 6° a minute.",
          axes: "none",
          view: CAPTIONED,
          elements: [
            ...face,
            fromTwelve("e"),
            { kind: "turn", r: MINUTE, from: 90, to: dir(150), label: "150°", labelAt: "e", step: 1 },
            caption("25 × 6° = 150°", 2),
          ],
        },
      },
      {
        body: t`**Rate of the hour hand.** The hour hand moves on one hour mark, $30^\circ$, in 60 minutes, so its rate is $30^\circ \div 60 = \frac{1}{2}^\circ$ a minute, a twelfth of the minute hand's. At $m$ minutes past the hour it is $\frac{m}{2}$ degrees past its hour mark, on toward the next: at 1:40 it is $\frac{40}{2} = 20^\circ$ past the 1, two thirds of the way to 2.`,
        figure: {
          alt: "A clock face at 1:00: the hour hand at 1, the minute hand at 12. The minute hand turns clockwise to 8, 40 minutes on, and in that time the hour hand turns 20° on from 1, two thirds of the way to 2.",
          axes: "none",
          view: CAPTIONED,
          elements: [
            ...face,
            { kind: "segment", from: [0, 0], to: [0, 2.6], tone: "good" },
            { kind: "segment", from: [0, 0], to: clock(30, 1.7), tone: "good" },
            { kind: "label", at: clock(30, 1.7), label: "1:00", labelAt: "n", tone: "good" },
            { kind: "turn", r: MINUTE, from: 90, to: dir(240), label: "1:40", labelAt: "nw", tone: "muted", step: 1 },
            { kind: "turn", r: HOUR, from: dir(30), to: dir(50), label: "20°", labelAt: "e", step: 2 },
            caption("40 × ½° = 20°", 3),
          ],
        },
      },
      {
        body: t`**The minute hand's gain.** The minute hand **gains** on the hour hand by how much further it turns in the same time. Both turn clockwise, so take the slower rate from the faster: each minute the minute hand gains $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ$. In $m$ minutes it gains $\frac{11m}{2}$ degrees: from 12:00 to 12:20 the gap between the hands grows to $20 \times 5\frac{1}{2}^\circ = 110^\circ$.`,
        figure: {
          alt: "A clock face from 12:00 to 12:20. Both hands start at 12. The minute hand turns clockwise 120°, to 4; the hour hand turns the same way, only 10°. The gap between them is 110°, 20 minutes of gaining 5½° a minute.",
          axes: "none",
          view: CAPTIONED,
          elements: [
            ...face,
            fromTwelve("w"),
            { kind: "turn", r: MINUTE, from: 90, to: dir(120), label: "120°", labelAt: "ne", step: 1 },
            { kind: "turn", r: HOUR, from: 90, to: dir(10), label: "10°", labelAt: "ne", step: 2 },
            { kind: "arc", centre: [0, 0], r: 1.3, from: dir(120), to: dir(10), tone: "good", step: 3 },
            caption("120° − 10° = 20 × 5½° = 110°", 3),
          ],
        },
      },
      {
        body: t`**Positions of the hands.** A hand's **position** is its angle measured clockwise from 12. At $h$ hours $m$ minutes (take $h = 0$ at 12 o'clock), the hour hand has $30^\circ$ for each whole hour and $\frac{m}{2}$ more for the minutes:

$$\text{hour hand} = 30h + \frac{m}{2}$$

$$\text{minute hand} = 6m$$

The angle between the hands is the difference of their positions:

$$\theta = \left|30h + \frac{m}{2} - 6m\right|$$

$$= \left|30h - \frac{11m}{2}\right|$$

The hour hand starts the hour $30h$ ahead, and the minute hand gains $\frac{11m}{2}$ on it. At 8:20 the hour hand is at $240^\circ + 10^\circ = 250^\circ$ and the minute hand at $120^\circ$: $\theta = 130^\circ$.`,
        figure: {
          alt: "A clock face at 8:20. From 12, the hour hand turns clockwise 250°, a third of the way from 8 to 9, and the minute hand turns 120°, to 4. The angle between them is 250° − 120° = 130°.",
          axes: "none",
          view: CAPTIONED,
          elements: [
            ...face,
            fromTwelve("w"),
            { kind: "turn", r: HOUR, from: 90, to: dir(250), label: "250°", labelAt: "w", step: 1 },
            { kind: "turn", r: MINUTE, from: 90, to: dir(120), label: "120°", labelAt: "ne", step: 2 },
            { kind: "arc", centre: [0, 0], r: 1.2, from: dir(250), to: dir(120), label: "130°", labelAt: "s", tone: "good", step: 3 },
            caption("250° − 120° = 130°", 3),
          ],
        },
      },
      {
        body: t`**Smaller or reflex angle.** The hands split the full turn into two angles that add up to $360^\circ$. The **reflex angle** is the one larger than $180^\circ$; the other, at most $180^\circ$, is the **smaller angle**. If $\theta > 180^\circ$, the smaller angle is $360^\circ - \theta$. At 9:10, $\theta = |270 - 55| = 215^\circ$, the reflex angle, so the smaller one is $360^\circ - 215^\circ = 145^\circ$. Read which one the question asks for.`,
        figure: {
          alt: "A clock face at 9:10: the minute hand at 2, the hour hand just past 9. Going round through 6, the angle between them is 215°, the reflex angle. Going round through 12 it is 145°, the smaller angle: 360° − 215° = 145°.",
          axes: "none",
          view: CAPTIONED,
          elements: [
            ...face,
            { kind: "vector", to: clock(60, MINUTE) },
            { kind: "vector", to: clock(275, HOUR) },
            { kind: "arc", centre: [0, 0], r: 1.2, from: dir(275), to: dir(60), label: "215°, reflex", labelAt: "s", step: 1 },
            { kind: "arc", centre: [0, 0], r: 1.2, from: dir(60), to: dir(275) + 360, label: "145°, smaller", labelAt: "n", tone: "good", step: 2 },
            caption("360° − 215° = 145°", 3),
          ],
        },
      },
      {
        body: t`**Half degrees.** A degree splits into 60 **minutes of angle** (not the clock's minutes): $1^\circ = 60'$. So half a degree is $30'$, not $50'$. Half degrees come from the hour hand's $\frac{m}{2}$ when $m$ is odd: at 2:15 the hour hand is at $60^\circ + 7.5^\circ = 67.5^\circ$ from 12, which is $67^\circ 30'$. The minute hand's gain of $5\frac{1}{2}^\circ$ a minute is $5^\circ 30'$.`,
        figure: {
          alt: "A clock face at 2:15. The minute hand points at 3. From 12, the hour hand turns clockwise 67.5°, a quarter of the way from 2 to 3. Half a degree is 30′, so 67.5° is 67°30′.",
          axes: "none",
          view: CAPTIONED,
          elements: [
            ...face,
            fromTwelve("w"),
            { kind: "vector", to: clock(90, MINUTE), tone: "muted" },
            { kind: "turn", r: HOUR, from: 90, to: dir(67.5), label: "67.5°", labelAt: "e", step: 1 },
            caption("0.5° = 30′, so 67.5° = 67°30′", 2),
          ],
        },
      },
    ],
    worked: {
      prompt: t`Find the smaller angle between the hour hand and the minute hand of a clock at quarter to twelve (11:45), in degrees and minutes.`,
      steps: [
        t`Minute hand: $6 \times 45 = 270^\circ$ from 12, pointing at 9.`,
        t`Hour hand: $30 \times 11 = 330^\circ$ to the 11, plus $\frac{45}{2} = 22.5^\circ$ for the 45 minutes: $352.5^\circ$, just $7.5^\circ$ short of 12.`,
        t`Subtract: $352.5^\circ - 270^\circ = 82.5^\circ$. The formula agrees: $\left|330 - \frac{11 \times 45}{2}\right|$ $= |330 - 247.5|$ $= 82.5$. It is less than $180^\circ$, so it is the smaller angle.`,
        t`$0.5^\circ = 30'$, so $82.5^\circ = 82^\circ 30'$.`,
      ],
      answer: t`The smaller angle is $82^\circ 30'$ (the reflex angle is $277^\circ 30'$).`,
      figure: {
        alt: "A clock face at 11:45. From 12, the minute hand turns clockwise 270°, to 9, and the hour hand turns 352.5°, stopping 7.5° short of 12. The angle between them is 82.5°, which is 82°30′.",
        axes: "none",
        view: CAPTIONED,
        elements: [
          ...face,
          fromTwelve("e"),
          { kind: "turn", r: MINUTE, from: 90, to: dir(270), label: "270°", labelAt: "n", step: 1 },
          { kind: "turn", r: HOUR, from: 90, to: dir(352.5), label: "352.5°", labelAt: "w", step: 2 },
          { kind: "arc", centre: [0, 0], r: 1.4, from: dir(352.5) + 360, to: dir(270) + 360, label: "82.5°", labelAt: "w", tone: "good", step: 3 },
          caption("0.5° = 30′, so 82.5° = 82°30′", 4),
        ],
      },
    },
    figure: {
      alt: "A clock face at 3:00: the hour hand at 3, the minute hand at 12. The minute hand turns clockwise half a turn, 180°, to 6. In those 30 minutes the hour hand turns on 15°, halfway from 3 to 4, so the angle between the hands is 75°, not 90°.",
      axes: "none",
      view: { x: [-4.6, 4.6], y: [-4.6, 4.6] },
      elements: [
        ...face,
        { kind: "segment", from: [0, 0], to: [0, 2.6], label: "minute hand", labelAt: "w", tone: "good" },
        { kind: "segment", from: [0, 0], to: [1.7, 0], tone: "good" },
        { kind: "label", at: [1.9, 0], label: "hour hand", labelAt: "n", tone: "good" },
        { kind: "turn", r: MINUTE, from: 90, to: dir(180), label: "180°", labelAt: "e", step: 1 },
        { kind: "turn", r: HOUR, from: 0, to: dir(105), label: "15°", labelAt: "e", step: 2 },
        { kind: "arc", centre: [0, 0], r: 1.3, from: dir(180), to: dir(105), label: "75°", labelAt: "se", tone: "good", step: 3 },
      ],
    },
    visualSpec: t`Drag the minute hand round the clock; the hour hand follows at one twelfth of its speed, and both angles between the hands, the smaller and the reflex, update as you drag.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: "The hour hand stays on its hour mark while the minutes pass",
      remediation: t`The hour hand moves too: $\frac{1}{2}^\circ$ every minute. After $m$ minutes it is $\frac{m}{2}$ degrees past its hour mark, at $30h + \frac{m}{2}$ degrees from 12.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Moves the hour hand m/2 degrees back toward the previous hour instead of on toward the next (for the gain: adds the two rates)",
      remediation: t`Both hands turn clockwise. After $m$ minutes the hour hand is $\frac{m}{2}$ degrees **past** its hour mark, on toward the next number, so the minute hand gains $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ$ a minute on it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M3",
      mistake: "Gives the other of the two angles between the hands: the reflex one when the smaller is asked, or the smaller when the reflex is asked",
      remediation: t`The two angles between the hands add up to $360^\circ$. The smaller one is at most $180^\circ$ and the reflex one is more than $180^\circ$: give the one the question asks for.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M4",
      mistake: "Reads half a degree as 50 minutes, as if minutes were decimals",
      remediation: t`$1^\circ = 60'$, so $\frac{1}{2}^\circ = 30'$: $22.5^\circ = 22^\circ 30'$, not $22^\circ 50'$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  engineNotes: [
    "C07-M1 gives the key on the hour (m = 0); draw a time with minutes past the hour to detect it.",
    "C07-M2 gives the key when the minute hand points exactly at the hour number (m = 5h, as at 9:45) and in some cases after the 360 reduction (1:35); C07-Q4 leaves it out for that reason.",
    "C07-M4 is detectable only when the answer is asked in degrees and minutes and the key has a half degree (odd m).",
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc I Q9" },
      stem: t`The smaller angle between the hour hand and the minute hand of a clock at twenty past two (2:20) is:`,
      verify: { kind: "value", inputs: { h: "2", m: "20" }, params: { ask: "smaller" } },
      options: [
        { key: "A", text: t`$70^\circ$`, correct: false, misconceptionId: "C07-M2", value: "70" },
        { key: "B", text: t`$310^\circ$`, correct: false, misconceptionId: "C07-M3", value: "310" },
        { key: "C", text: t`$50^\circ$`, correct: true, value: "50" },
        { key: "D", text: t`$60^\circ$`, correct: false, misconceptionId: "C07-M1", value: "60" },
      ],
      solution: {
        steps: [
          t`Minute hand: $6 \times 20 = 120^\circ$ from 12, pointing at 4.`,
          t`Hour hand: $30 \times 2 + \frac{20}{2} = 60^\circ + 10^\circ = 70^\circ$, a third of the way from 2 to 3.`,
          t`$120^\circ - 70^\circ = 50^\circ$. It is less than $180^\circ$, so the smaller angle is $50^\circ$.`,
        ],
        figure: {
          alt: "A clock face at 2:20. The minute hand points at 4 and the hour hand is a third of the way from 2 to 3. The angle between them is 50°.",
          axes: "none",
          view: { x: [-4.6, 4.6], y: [-4.6, 4.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, tone: "muted" },
            { kind: "label", at: [1.7, 2.584], label: "1", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, 1.34], label: "2", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.4, -0.36], label: "3", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, -2.06], label: "4", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.7, -3.304], label: "5", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, -3.76], label: "6", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, -3.304], label: "7", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, -2.06], label: "8", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.4, -0.36], label: "9", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, 1.34], label: "10", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, 2.584], label: "11", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, 3.04], label: "12", labelAt: "n", tone: "muted" },
            { kind: "vector", to: [2.425, -1.4], step: 1 },
            { kind: "vector", to: [1.785, 0.65], step: 2 },
            { kind: "angle", at: [0, 0], from: -30, to: 20, step: 3 },
            { kind: "label", at: [1.295, -0.473], label: "50°", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q14(i)" },
      stem: t`The smaller angle between the hour hand and the minute hand of a clock at ten past eleven (11:10) is:`,
      verify: { kind: "value", inputs: { h: "11", m: "10" }, params: { ask: "smaller" } },
      options: [
        { key: "A", text: t`$90^\circ$`, correct: false, misconceptionId: "C07-M1", value: "90" },
        { key: "B", text: t`$95^\circ$`, correct: false, misconceptionId: "C07-M2", value: "95" },
        { key: "C", text: t`$275^\circ$`, correct: false, misconceptionId: "C07-M3", value: "275" },
        { key: "D", text: t`$85^\circ$`, correct: true, value: "85" },
      ],
      solution: {
        steps: [
          t`Minute hand: $6 \times 10 = 60^\circ$ from 12, pointing at 2.`,
          t`Hour hand: $30 \times 11 + \frac{10}{2} = 330^\circ + 5^\circ = 335^\circ$, $25^\circ$ short of 12.`,
          t`$335^\circ - 60^\circ = 275^\circ$ is the reflex angle, the long way round. The smaller angle is $360^\circ - 275^\circ = 85^\circ$: $25^\circ$ up to 12 and $60^\circ$ on to 2.`,
        ],
        figure: {
          alt: "A clock face at 11:10. The minute hand points at 2 and the hour hand is 25° short of 12. The smaller angle between them, across 12, is 85°.",
          axes: "none",
          view: { x: [-4.6, 4.6], y: [-4.6, 4.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, tone: "muted" },
            { kind: "label", at: [1.7, 2.584], label: "1", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, 1.34], label: "2", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.4, -0.36], label: "3", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, -2.06], label: "4", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.7, -3.304], label: "5", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, -3.76], label: "6", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, -3.304], label: "7", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, -2.06], label: "8", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.4, -0.36], label: "9", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, 1.34], label: "10", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, 2.584], label: "11", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, 3.04], label: "12", labelAt: "n", tone: "muted" },
            { kind: "vector", to: [2.425, 1.4], step: 1 },
            { kind: "vector", to: [-0.803, 1.722], step: 2 },
            { kind: "angle", at: [0, 0], from: 30, to: 115, step: 3 },
            { kind: "label", at: [0.391, 0.88], label: "85°", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q14(iv)" },
      stem: t`The smaller angle between the hour hand and the minute hand of a clock at quarter to six (5:45), in degrees and minutes, is:`,
      verify: { kind: "value", inputs: { h: "5", m: "45" }, params: { ask: "smaller" } },
      options: [
        { key: "A", text: t`$97^\circ 50'$`, correct: false, misconceptionId: "C07-M4", value: "587/6" },
        { key: "B", text: t`$97^\circ 30'$`, correct: true, value: "195/2" },
        { key: "C", text: t`$120^\circ$`, correct: false, misconceptionId: "C07-M1", value: "120" },
        { key: "D", text: t`$142^\circ 30'$`, correct: false, misconceptionId: "C07-M2", value: "285/2" },
      ],
      solution: {
        steps: [
          t`Minute hand: $6 \times 45 = 270^\circ$ from 12, pointing at 9.`,
          t`Hour hand: $30 \times 5 + \frac{45}{2} = 150^\circ + 22.5^\circ = 172.5^\circ$, three quarters of the way from 5 to 6.`,
          t`$270^\circ - 172.5^\circ = 97.5^\circ$, less than $180^\circ$, so it is the smaller angle. $0.5^\circ = 30'$, so $97.5^\circ = 97^\circ 30'$.`,
        ],
        figure: {
          alt: "A clock face at 5:45. The minute hand points at 9 and the hour hand is three quarters of the way from 5 to 6. The angle between them is 97.5°, which is 97°30′.",
          axes: "none",
          view: { x: [-4.6, 4.6], y: [-4.6, 4.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, tone: "muted" },
            { kind: "label", at: [1.7, 2.584], label: "1", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, 1.34], label: "2", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.4, -0.36], label: "3", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, -2.06], label: "4", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.7, -3.304], label: "5", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, -3.76], label: "6", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, -3.304], label: "7", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, -2.06], label: "8", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.4, -0.36], label: "9", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, 1.34], label: "10", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, 2.584], label: "11", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, 3.04], label: "12", labelAt: "n", tone: "muted" },
            { kind: "vector", to: [-2.8, 0], step: 1 },
            { kind: "vector", to: [0.248, -1.884], step: 2 },
            { kind: "angle", at: [0, 0], from: -180, to: -82.5, step: 3 },
            { kind: "label", at: [-0.857, -1.337], label: "97°30′", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc I Q5" },
      stem: t`The smaller angle between the hands of a clock when it shows 9:45, in degrees and minutes, is:`,
      verify: { kind: "value", inputs: { h: "9", m: "45" }, params: { ask: "smaller" } },
      options: [
        { key: "A", text: t`$22^\circ 30'$`, correct: true, value: "45/2" },
        { key: "B", text: t`$0^\circ$`, correct: false, misconceptionId: "C07-M1", value: "0" },
        { key: "C", text: t`$337^\circ 30'$`, correct: false, misconceptionId: "C07-M3", value: "675/2" },
        { key: "D", text: t`$22^\circ 50'$`, correct: false, misconceptionId: "C07-M4", value: "137/6" },
      ],
      solution: {
        steps: [
          t`Minute hand: $6 \times 45 = 270^\circ$ from 12, pointing exactly at 9.`,
          t`Hour hand: $30 \times 9 + \frac{45}{2} = 270^\circ + 22.5^\circ = 292.5^\circ$, three quarters of the way from 9 to 10.`,
          t`$292.5^\circ - 270^\circ = 22.5^\circ$, and $0.5^\circ = 30'$, so the smaller angle is $22^\circ 30'$.`,
        ],
        figure: {
          alt: "A clock face at 9:45. The minute hand points at 9 and the hour hand is three quarters of the way from 9 to 10. The narrow angle between them is 22.5°, which is 22°30′.",
          axes: "none",
          view: { x: [-4.6, 4.6], y: [-4.6, 4.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, tone: "muted" },
            { kind: "label", at: [1.7, 2.584], label: "1", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, 1.34], label: "2", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.4, -0.36], label: "3", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, -2.06], label: "4", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.7, -3.304], label: "5", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, -3.76], label: "6", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, -3.304], label: "7", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, -2.06], label: "8", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.4, -0.36], label: "9", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, 1.34], label: "10", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, 2.584], label: "11", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, 3.04], label: "12", labelAt: "n", tone: "muted" },
            { kind: "vector", to: [-2.8, 0], step: 1 },
            { kind: "vector", to: [-1.755, 0.727], step: 2 },
            { kind: "angle", at: [0, 0], from: -202.5, to: -180, step: 3 },
            { kind: "label", at: [-1.096, 0.736], label: "22°30′", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc II Q8" },
      stem: t`In one minute, the minute hand of a clock gains on the hour hand by:`,
      verify: { kind: "value", inputs: { m: "1" }, params: { ask: "gain" } },
      options: [
        { key: "A", text: t`$6^\circ$`, correct: false, misconceptionId: "C07-M1", value: "6" },
        { key: "B", text: t`$6^\circ 30'$`, correct: false, misconceptionId: "C07-M2", value: "13/2" },
        { key: "C", text: t`$5^\circ 50'$`, correct: false, misconceptionId: "C07-M4", value: "35/6" },
        { key: "D", text: t`$5^\circ 30'$`, correct: true, value: "11/2" },
      ],
      solution: {
        steps: [
          t`Minute hand: $360^\circ$ in 60 minutes, so $6^\circ$ a minute. In the figure, at 12:10, it has turned $60^\circ$.`,
          t`Hour hand: $30^\circ$ in 60 minutes, so $\frac{1}{2}^\circ$ a minute, the same way round. At 12:10 it has turned $5^\circ$.`,
          t`Each minute the minute hand gains $6^\circ - \frac{1}{2}^\circ = 5\frac{1}{2}^\circ = 5^\circ 30'$. In 10 minutes that is $55^\circ$, the gap in the figure.`,
        ],
        figure: {
          alt: "A clock face at 12:10. The minute hand points at 2, 60° from 12; the hour hand is 5° past 12. The gap between them is 55°, ten minutes of gaining 5°30′ a minute.",
          axes: "none",
          view: { x: [-4.6, 4.6], y: [-4.6, 4.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, tone: "muted" },
            { kind: "label", at: [1.7, 2.584], label: "1", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, 1.34], label: "2", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.4, -0.36], label: "3", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, -2.06], label: "4", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.7, -3.304], label: "5", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, -3.76], label: "6", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, -3.304], label: "7", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, -2.06], label: "8", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.4, -0.36], label: "9", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, 1.34], label: "10", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, 2.584], label: "11", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, 3.04], label: "12", labelAt: "n", tone: "muted" },
            { kind: "vector", to: [2.425, 1.4], step: 1 },
            { kind: "vector", to: [0.166, 1.893], step: 2 },
            { kind: "angle", at: [0, 0], from: 30, to: 85, step: 3 },
            { kind: "label", at: [0.698, 0.736], label: "55°", labelAt: "n", step: 3 },
          ],
        },
      },
    },
    {
      id: "C07-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q14(vi)" },
      stem: t`The reflex angle (the one larger than $180^\circ$) between the hands of a clock at ten past ten (10:10) is:`,
      verify: { kind: "value", inputs: { h: "10", m: "10" }, params: { ask: "reflex" } },
      options: [
        { key: "A", text: t`$245^\circ$`, correct: true, value: "245" },
        { key: "B", text: t`$240^\circ$`, correct: false, misconceptionId: "C07-M1", value: "240" },
        { key: "C", text: t`$235^\circ$`, correct: false, misconceptionId: "C07-M2", value: "235" },
        { key: "D", text: t`$115^\circ$`, correct: false, misconceptionId: "C07-M3", value: "115" },
      ],
      solution: {
        steps: [
          t`Minute hand: $6 \times 10 = 60^\circ$ from 12, pointing at 2.`,
          t`Hour hand: $30 \times 10 + \frac{10}{2} = 300^\circ + 5^\circ = 305^\circ$, a sixth of the way from 10 to 11.`,
          t`$305^\circ - 60^\circ = 245^\circ$. It is more than $180^\circ$, so it is the reflex angle, $245^\circ$; the smaller one is $360^\circ - 245^\circ = 115^\circ$.`,
        ],
        figure: {
          alt: "A clock face at 10:10. The minute hand points at 2 and the hour hand is just past 10. The reflex angle between them, going round through 6, is 245°.",
          axes: "none",
          view: { x: [-4.6, 4.6], y: [-4.6, 4.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 4, tone: "muted" },
            { kind: "label", at: [1.7, 2.584], label: "1", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, 1.34], label: "2", labelAt: "n", tone: "muted" },
            { kind: "label", at: [3.4, -0.36], label: "3", labelAt: "n", tone: "muted" },
            { kind: "label", at: [2.944, -2.06], label: "4", labelAt: "n", tone: "muted" },
            { kind: "label", at: [1.7, -3.304], label: "5", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, -3.76], label: "6", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, -3.304], label: "7", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, -2.06], label: "8", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-3.4, -0.36], label: "9", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-2.944, 1.34], label: "10", labelAt: "n", tone: "muted" },
            { kind: "label", at: [-1.7, 2.584], label: "11", labelAt: "n", tone: "muted" },
            { kind: "label", at: [0, 3.04], label: "12", labelAt: "n", tone: "muted" },
            { kind: "vector", to: [2.425, 1.4], step: 1 },
            { kind: "vector", to: [-1.556, 1.09], step: 2 },
            { kind: "angle", at: [0, 0], from: -215, to: 30, step: 3 },
            { kind: "label", at: [-0.057, -1.659], label: "245°", labelAt: "n", step: 3 },
          ],
        },
      },
    },
  ],
};
