import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Lay a circle's radius along its rim, as a curved arc. **Is the angle this arc makes at the centre more or less than $60^\circ$?**`,
    reveal: t`Less. A straight chord equal to the radius makes $60^\circ$ (it forms an equilateral triangle with the two radii), and the arc between those two points is longer than the chord. The arc equal to the radius makes $1^c = \left(\frac{180}{\pi}\right)^\circ \approx 57.3^\circ$: one **radian**.`,
  },
  explanation: {
    intuition: t`Degrees cut a full turn into $360$ equal parts, a number chosen long ago. Radians measure a turn with the circle itself: how many radii fit along the arc it sweeps. Half a turn sweeps an arc of $\pi r$, which holds $\pi$ radii, so half a turn is $\pi$ radians. That one fact, $\pi^c = 180^\circ$, is all you need to convert either way.`,
    formal: t`**One radian.** $1^c$ is the angle at the centre of a circle made by an arc equal in length to the radius. It is the same for every circle.

**The key fact.** Half a turn: $\pi^c = 180^\circ$. So $1^\circ = \left(\frac{\pi}{180}\right)^c$ and $1^c = \left(\frac{180}{\pi}\right)^\circ \approx 57^\circ 17' 45''$.

**Converting.** $\theta^\circ = \left(\theta \times \frac{\pi}{180}\right)^c$ and $\theta^c = \left(\theta \times \frac{180}{\pi}\right)^\circ$. For example $70^\circ = \left(\frac{7\pi}{18}\right)^c$ and $\left(-\frac{\pi}{18}\right)^c = -10^\circ$: a negative angle stays negative.

**Minutes first.** For $D^\circ M'$, turn the minutes into a fraction of a degree, $M' = \left(\frac{M}{60}\right)^\circ$, then convert.

**No $\pi$ in sight.** A radian measure like $3^c$ is still in radians: multiply by $\frac{180}{\pi}$, using $\pi = \frac{22}{7}$ when the question says so.`,
    worked: {
      prompt: t`Convert $75^\circ 30'$ to radians.`,
      steps: [
        t`Minutes first: $30' = \left(\frac{30}{60}\right)^\circ = \left(\frac{1}{2}\right)^\circ$, so $75^\circ 30' = \left(75\frac{1}{2}\right)^\circ = \left(\frac{151}{2}\right)^\circ$.`,
        t`Degrees to radians: multiply by $\frac{\pi}{180}$. $\frac{151}{2} \times \frac{\pi}{180} = \frac{151\pi}{360}$.`,
        t`Check: $90^\circ = \left(\frac{\pi}{2}\right)^c = \left(\frac{180\pi}{360}\right)^c$. Our angle is a little less than $90^\circ$, and $\frac{151\pi}{360}$ is a little less than $\frac{180\pi}{360}$.`,
      ],
      answer: t`$75^\circ 30' = \left(\frac{151\pi}{360}\right)^c$`,
      figure: {
        alt: "A circle with centre O. The terminal arm turns 75°30′, which is 75.5°, anticlockwise from the initial arm; in radians that is 151π/360. A dashed arm at 90°, which is π/2, shows the angle is a little less than a right angle.",
        axes: "none",
        view: { x: [-3, 3], y: [-2.6, 2.6] },
        elements: [
          { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
          { kind: "segment", from: [0, 0], to: [2.5, 0], tone: "muted" },
          { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
          { kind: "vector", to: [0.626, 2.42], tone: "accent", step: 1 },
          { kind: "angle", at: [0, 0], from: 0, to: 75.5, tone: "accent", step: 1, label: "75°30′", labelAt: "ne" },
          { kind: "label", at: [0.3, -0.35], label: "= (151π/360)ᶜ", labelAt: "se", step: 2 },
          { kind: "segment", from: [0, 0], to: [0, 2.5], dashed: true, tone: "muted", label: "90° = (π/2)ᶜ", labelAt: "w", step: 3 },
        ],
      },
    },
    figure: {
      alt: "A circle with centre O and radius r. An arc as long as the radius makes an angle of 1 radian, about 57.3°, at O. The arc of a half turn is πr long, so a half turn is π radians, which is 180°.",
      axes: "none",
      view: { x: [-3, 3], y: [-2.6, 2.6] },
      elements: [
        { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
        { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
        { kind: "segment", from: [0, 0], to: [2, 0], label: "r", labelAt: "s", step: 1 },
        { kind: "arc", centre: [0, 0], r: 2, from: 0, to: 57.296, label: "arc = r", labelAt: "ne", step: 2 },
        { kind: "segment", from: [0, 0], to: [1.081, 1.683], label: "r", labelAt: "nw", step: 2 },
        { kind: "angle", at: [0, 0], from: 0, to: 57.296, label: "1ᶜ ≈ 57.3°", labelAt: "ne", step: 2 },
        { kind: "arc", centre: [0, 0], r: 2, from: 57.296, to: 180, tone: "good", label: "arc = πr", labelAt: "nw", step: 3 },
        { kind: "segment", from: [0, 0], to: [-2, 0], tone: "good", step: 3 },
        { kind: "label", at: [0, -0.6], label: "πᶜ = 180°", labelAt: "s", tone: "good", step: 3 },
      ],
    },
    visualSpec: t`Drag the terminal arm round the circle; the arc it sweeps is counted in radii, and a readout shows the angle in degrees and in radians (as a multiple of $\pi$ and as a decimal) side by side.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Uses the factor upside down: multiplies by $\frac{180}{\pi}$ to get radians, or by $\frac{\pi}{180}$ to get degrees`,
      remediation: t`Degrees to radians: multiply by $\frac{\pi}{180}$. Radians to degrees: multiply by $\frac{180}{\pi}$. Test your factor on the key fact: $180^\circ$ must become $\pi^c$, and $\pi^c$ must become $180^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Takes $\pi$ radians as a full turn ($\pi^c = 360^\circ$)`,
      remediation: t`A full turn sweeps an arc of $2\pi r$, so it is $2\pi$ radians. Half a turn is $\pi^c = 180^\circ$, not $360^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Reads $D^\circ M'$ as the decimal $D.M$ (e.g. $65^\circ 30'$ as $65.30^\circ$)`,
      remediation: t`A minute is $\frac{1}{60}$ of a degree, not $\frac{1}{100}$: $30' = \left(\frac{30}{60}\right)^\circ = 0.5^\circ$. Turn the minutes into a fraction of a degree first, then convert.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C03-M4",
      mistake: t`Drops the $\pi$ from the factor, as if $1^c = 180^\circ$: divides degrees by $180$, or multiplies radians by $180$`,
      remediation: t`It is $\pi^c$, not $1^c$, that equals $180^\circ$. So $1^\circ = \left(\frac{\pi}{180}\right)^c$ and $1^c = \left(\frac{180}{\pi}\right)^\circ$: the $\pi$ stays in the factor.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Drops the minus sign of a negative angle",
      remediation: t`A negative angle is a clockwise turn, and changing the unit doesn't change the direction. Keep the sign: for example $-90^\circ = -\left(\frac{\pi}{2}\right)^c$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C03-M3 can only show on an angle given in degrees and minutes, and C03-M5 only on a negative angle: draw those items when diagnosing them.",
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc I Q2" },
      stem: t`$156^\circ$ in radians is:`,
      verify: { kind: "value", inputs: { d: "156" }, params: { dir: "d2r" } },
      options: [
        { key: "A", text: t`$\left(\frac{13 \pi}{30}\right)^c$`, correct: false, misconceptionId: "C03-M2", value: "13*pi/30" },
        { key: "B", text: t`$\left(\frac{13}{15}\right)^c$`, correct: false, misconceptionId: "C03-M4", value: "13/15" },
        { key: "C", text: t`$\left(\frac{13 \pi}{15}\right)^c$`, correct: true, value: "13*pi/15" },
        { key: "D", text: t`$\left(\frac{28080}{\pi}\right)^c$`, correct: false, misconceptionId: "C03-M1", value: "28080/pi" },
      ],
      solution: {
        steps: [
          t`$156^\circ$ is a little less than half a turn. Since $\pi^c = 180^\circ$, $1^\circ = \left(\frac{\pi}{180}\right)^c$: multiply by $\frac{\pi}{180}$.`,
          t`$156 \times \frac{\pi}{180} = \frac{156\pi}{180} = \frac{13\pi}{15}$, dividing top and bottom by $12$.`,
          t`So $156^\circ = \left(\frac{13\pi}{15}\right)^c$, just under $\pi^c = 180^\circ$, as expected.`,
        ],
        figure: {
          alt: "A circle with centre O. The terminal arm turns 156° anticlockwise, which is 13π/15 radians, just short of the dashed half turn at 180°, which is π radians.",
          axes: "none",
          view: { x: [-3, 3], y: [-2.6, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.5, 0], tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
            { kind: "vector", to: [-2.284, 1.017], tone: "accent", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 156, tone: "accent", step: 1, label: "156°", labelAt: "ne" },
            { kind: "label", at: [-0.65, 1.126], label: "(13π/15)ᶜ", labelAt: "n", step: 2 },
            { kind: "segment", from: [0, 0], to: [-2.5, 0], dashed: true, tone: "muted", label: "πᶜ = 180°", labelAt: "s", step: 3 },
          ],
        },
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Misc I Q1" },
      stem: t`$\left(\dfrac{22\pi}{15}\right)^c$ in degrees is:`,
      verify: { kind: "value", inputs: { t: "22*pi/15" }, params: { dir: "r2d" } },
      options: [
        { key: "A", text: t`$528^\circ$`, correct: false, misconceptionId: "C03-M2", value: "528" },
        { key: "B", text: t`$\left(264 \pi\right)^\circ$`, correct: false, misconceptionId: "C03-M4", value: "264*pi" },
        { key: "C", text: t`$264^\circ$`, correct: true, value: "264" },
        { key: "D", text: t`$\left(\frac{11 \pi^{2}}{1350}\right)^\circ$`, correct: false, misconceptionId: "C03-M1", value: "11*pi**2/1350" },
      ],
      solution: {
        steps: [
          t`Radians to degrees: since $\pi^c = 180^\circ$, multiply by $\frac{180}{\pi}$.`,
          t`$\frac{22\pi}{15} \times \frac{180}{\pi} = 22 \times 12 = 264$, so $\left(\frac{22\pi}{15}\right)^c = 264^\circ$: half a turn and $84^\circ$ more.`,
        ],
        figure: {
          alt: "A circle with centre O. A dashed arm marks the half turn, π radians or 180°. The terminal arm turns on to 264° anticlockwise, 84° past the half turn, into the third quadrant.",
          axes: "none",
          view: { x: [-3, 3], y: [-2.6, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.5, 0], tone: "muted" },
            { kind: "point", at: [0, 0], tone: "muted" },
            { kind: "label", at: [0.3, -0.3], label: "O", labelAt: "se", tone: "muted" },
            { kind: "segment", from: [0, 0], to: [-2.5, 0], dashed: true, tone: "muted", label: "πᶜ = 180°", labelAt: "n", step: 1 },
            { kind: "vector", to: [-0.261, -2.486], tone: "accent", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 264, tone: "accent", step: 2, label: "264°", labelAt: "ne" },
          ],
        },
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q2(iv)" },
      stem: t`$65^\circ 30'$ in radians is:`,
      verify: { kind: "value", inputs: { d: "65", m: "30" }, params: { dir: "d2r" } },
      options: [
        { key: "A", text: t`$\left(\frac{653 \pi}{1800}\right)^c$`, correct: false, misconceptionId: "C03-M3", value: "653*pi/1800" },
        { key: "B", text: t`$\left(\frac{131 \pi}{720}\right)^c$`, correct: false, misconceptionId: "C03-M2", value: "131*pi/720" },
        { key: "C", text: t`$\left(\frac{131}{360}\right)^c$`, correct: false, misconceptionId: "C03-M4", value: "131/360" },
        { key: "D", text: t`$\left(\frac{131 \pi}{360}\right)^c$`, correct: true, value: "131*pi/360" },
      ],
      solution: {
        steps: [
          t`Minutes first: $30' = \left(\frac{30}{60}\right)^\circ = 0.5^\circ$, so $65^\circ 30' = 65.5^\circ = \left(\frac{131}{2}\right)^\circ$. It is not $65.3^\circ$: a minute is a sixtieth of a degree.`,
          t`Multiply by $\frac{\pi}{180}$: $\frac{131}{2} \times \frac{\pi}{180} = \frac{131\pi}{360}$, so $65^\circ 30' = \left(\frac{131\pi}{360}\right)^c$.`,
        ],
        figure: {
          alt: "A circle with centre O. The terminal arm turns 65°30′, which is 65.5°, anticlockwise; in radians that is 131π/360.",
          axes: "none",
          view: { x: [-3, 3], y: [-2.6, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.5, 0], tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
            { kind: "vector", to: [1.037, 2.275], tone: "accent", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 65.5, tone: "accent", step: 1, label: "65°30′", labelAt: "ne" },
            { kind: "label", at: [0.3, -0.35], label: "= (131π/360)ᶜ", labelAt: "se", step: 2 },
          ],
        },
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q2(iii)" },
      stem: t`$-132^\circ$ in radians is:`,
      verify: { kind: "value", inputs: { d: "-132" }, params: { dir: "d2r" } },
      options: [
        { key: "A", text: t`$-\left(\frac{11}{15}\right)^c$`, correct: false, misconceptionId: "C03-M4", value: "-11/15" },
        { key: "B", text: t`$-\left(\frac{23760}{\pi}\right)^c$`, correct: false, misconceptionId: "C03-M1", value: "-23760/pi" },
        { key: "C", text: t`$-\left(\frac{11 \pi}{15}\right)^c$`, correct: true, value: "-11*pi/15" },
        { key: "D", text: t`$\left(\frac{11 \pi}{15}\right)^c$`, correct: false, misconceptionId: "C03-M5", value: "11*pi/15" },
      ],
      solution: {
        steps: [
          t`The minus sign means a clockwise turn of $132^\circ$. Changing units won't change the direction, so keep the sign and convert $132^\circ$.`,
          t`$132 \times \frac{\pi}{180} = \frac{132\pi}{180} = \frac{11\pi}{15}$, dividing top and bottom by $12$. So $-132^\circ = -\left(\frac{11\pi}{15}\right)^c$.`,
        ],
        figure: {
          alt: "A circle with centre O. The terminal arm turns 132° clockwise from the initial arm, into the third quadrant: the angle −132°, which is −11π/15 radians.",
          axes: "none",
          view: { x: [-3, 3], y: [-2.6, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.5, 0], tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "nw", tone: "muted" },
            { kind: "vector", to: [-1.673, -1.858], tone: "accent", step: 1 },
            { kind: "angle", at: [0, 0], from: -132, to: 0, tone: "accent", step: 1, label: "−132°", labelAt: "se" },
            { kind: "label", at: [0.529, -1.188], label: "−(11π/15)ᶜ", labelAt: "s", step: 2 },
          ],
        },
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q3(iii)" },
      stem: t`Taking $\pi = \dfrac{22}{7}$, $5^c$ in degrees is:`,
      verify: { kind: "value", inputs: { t: "5" }, params: { dir: "r2d", pi: "22/7" } },
      options: [
        { key: "A", text: t`$\left(\frac{3150}{11}\right)^\circ$`, correct: true, value: "3150/11" },
        { key: "B", text: t`$900^\circ$`, correct: false, misconceptionId: "C03-M4", value: "900" },
        { key: "C", text: t`$\left(\frac{6300}{11}\right)^\circ$`, correct: false, misconceptionId: "C03-M2", value: "6300/11" },
        { key: "D", text: t`$\left(\frac{11}{126}\right)^\circ$`, correct: false, misconceptionId: "C03-M1", value: "11/126" },
      ],
      solution: {
        steps: [
          t`$5^c$ has no $\pi$ but is still in radians. Since $1^c = \left(\frac{180}{\pi}\right)^\circ$, $5^c = \left(\frac{900}{\pi}\right)^\circ$.`,
          t`With $\pi = \frac{22}{7}$: $\frac{900 \times 7}{22} = \frac{6300}{22} = \frac{3150}{11}$. So $5^c = \left(\frac{3150}{11}\right)^\circ \approx 286.4^\circ$, a little under five times $57.3^\circ$.`,
        ],
        figure: {
          alt: "A circle with centre O. A dashed arm marks 1 radian, about 57.3°. The terminal arm turns 5 radians anticlockwise, which is 3150/11 degrees, about 286.4°, into the fourth quadrant.",
          axes: "none",
          view: { x: [-3, 3], y: [-2.6, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.5, 0], tone: "muted" },
            { kind: "point", at: [0, 0], tone: "muted" },
            { kind: "label", at: [0.3, -0.3], label: "O", labelAt: "se", tone: "muted" },
            { kind: "segment", from: [0, 0], to: [1.351, 2.104], dashed: true, tone: "muted", label: "1ᶜ ≈ 57.3°", labelAt: "w", step: 1 },
            { kind: "vector", to: [0.709, -2.397], tone: "accent", step: 2 },
            { kind: "angle", at: [0, 0], from: 0, to: 286.479, tone: "accent", step: 2, label: "5ᶜ ≈ 286.4°", labelAt: "nw" },
          ],
        },
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/angle-measurement-11/Ex 1.1 Q4(iii)" },
      stem: t`Taking $\pi = \dfrac{22}{7}$, $\left(\dfrac{1}{5}\right)^c$ in degrees, minutes and seconds is:`,
      verify: { kind: "value", inputs: { t: "1/5" }, params: { dir: "r2d", pi: "22/7" } },
      options: [
        { key: "A", text: t`$11^\circ\ 27'\ 16\frac{4}{11}''$`, correct: true, value: "126/11" },
        { key: "B", text: t`$36^\circ\ 0'\ 0''$`, correct: false, misconceptionId: "C03-M4", value: "36" },
        { key: "C", text: t`$22^\circ\ 54'\ 32\frac{8}{11}''$`, correct: false, misconceptionId: "C03-M2", value: "252/11" },
        { key: "D", text: t`$0^\circ\ 0'\ 12\frac{4}{7}''$`, correct: false, misconceptionId: "C03-M1", value: "11/3150" },
      ],
      solution: {
        steps: [
          t`$\left(\frac{1}{5}\right)^c = \left(\frac{1}{5} \times \frac{180}{\pi}\right)^\circ = \left(\frac{36}{\pi}\right)^\circ = \left(\frac{36 \times 7}{22}\right)^\circ = \left(\frac{126}{11}\right)^\circ = 11\frac{5}{11}^\circ$.`,
          t`Minutes: $\frac{5}{11}^\circ = \frac{5}{11} \times 60' = \frac{300}{11}' = 27\frac{3}{11}'$.`,
          t`Seconds: $\frac{3}{11}' = \frac{3}{11} \times 60'' = \frac{180}{11}'' = 16\frac{4}{11}''$. So $\left(\frac{1}{5}\right)^c = 11^\circ\ 27'\ 16\frac{4}{11}''$.`,
        ],
        figure: {
          alt: "A circle with centre O and radius r. An arc one fifth of the radius long makes an angle of 1/5 radian at O, which is 126/11 degrees, about 11.45°, or 11°27′16 4/11″.",
          axes: "none",
          view: { x: [-3, 3], y: [-2.6, 2.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2, tone: "muted" },
            { kind: "segment", from: [0, 0], to: [2.5, 0], tone: "muted" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "sw", tone: "muted" },
            { kind: "vector", to: [2.45, 0.497], tone: "accent", step: 1 },
            { kind: "angle", at: [0, 0], from: 0, to: 11.459, tone: "accent", step: 1 },
            { kind: "label", at: [1, -0.25], label: "(1/5)ᶜ ≈ 11.45°", labelAt: "s", step: 1 },
            { kind: "arc", centre: [0, 0], r: 2, from: 0, to: 11.459, tone: "good", step: 1 },
            { kind: "label", at: [2, 0.8], label: "arc = r/5", labelAt: "ne", tone: "good", step: 1 },
            { kind: "label", at: [0, -0.6], label: "11° 27′ 16 4/11″", labelAt: "s", tone: "good", step: 3 },
          ],
        },
      },
    },
  ],
};
