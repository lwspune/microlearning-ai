import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`A compass needle points north, but not exactly to true north, and a needle free to swing up and down tilts its north end into the ground. What do these two angles tell us?`,
    reveal: t`They describe the **Earth's magnetic field** at that place: the **declination** is how far it turns from true north, and the **angle of dip** is how far it points below the horizontal.`,
  },
  explanation: {
    intuition: [
      t`The Earth acts like a huge bar magnet, so at every place its field $\vec{B}$ has a definite direction.`,
      t`In general $\vec{B}$ points below the horizontal; its angle with the horizontal is the **angle of dip** $\phi$.`,
      t`$\vec{B}$ splits into a horizontal component $B_H$ and a vertical component $B_V$.`,
      t`So $\tan\phi = \dfrac{B_V}{B_H}$.`,
    ],
    formal: [
      {
        title: "Declination",
        points: [
          t`The **geographic meridian** is the vertical plane through the place and the Earth's geographic axis.`,
          t`The **magnetic meridian** is the vertical plane through the place and the Earth's magnetic axis; a compass rests in it.`,
          t`The angle between the two meridians is the **declination**.`,
        ],
        figure: {
          alt: "Seen from above. Step 1: the geographic meridian, towards true north. Step 2: a freely hung compass points along the magnetic meridian. Step 3: the angle between them is the declination.",
          axes: "none",
          view: { x: [-3.4, 3.4], y: [-0.6, 5] },
          elements: [
            { kind: "vector", from: [0, 0], to: [0, 4.3], label: "true N", labelAt: "n", step: 1 },
            { kind: "point", at: [0, 0], label: "O", labelAt: "s", step: 1 },
            { kind: "vector", from: [0, 0], to: [1.329, 4.09], tone: "good", label: "magnetic N", labelAt: "e", step: 2 },
            { kind: "arc", centre: [0, 0], r: 1.8, from: 72, to: 90, step: 3 },
            { kind: "label", at: [0.35, 2.1], label: "declination", labelAt: "e", tone: "bad", step: 3 },
          ],
        },
      },
      {
        title: "Dip and field components",
        points: [
          t`The **angle of dip** $\phi$ is the angle $\vec{B}$ makes with the horizontal in the magnetic meridian.`,
          t`Its horizontal and vertical components are $B_H = B\cos\phi$ and $B_V = B\sin\phi$.`,
          t`So $\tan\phi = \dfrac{B_V}{B_H}$ and $B^2 = B_H^2 + B_V^2$.`,
          t`A dip needle in a plane at $\theta$ to the meridian shows an apparent dip $\phi'$, with $\tan\phi'$ $= \dfrac{\tan\phi}{\cos\theta}$.`,
        ],
        figure: {
          alt: "Step 1: the Earth's field B. Step 2: the horizontal and the angle of dip φ. Step 3: the components BH = B cos φ and BV = B sin φ. Step 4: tan φ = BV / BH and B² = BH² + BV².",
          axes: "none",
          view: { x: [-1.2, 6.8], y: [-4, 1.4] },
          elements: [
            { kind: "vector", from: [0, 0], to: [4, -3], tone: "bad", label: "B", labelAt: "sw", step: 1 },
            { kind: "segment", from: [0, 0], to: [5.6, 0], dashed: true, tone: "muted", step: 2 },
            { kind: "label", at: [5.6, 0], label: "horizontal", labelAt: "n", step: 2 },
            { kind: "arc", centre: [0, 0], r: 1.3, from: -36.86989764584402, to: 0, step: 2 },
            { kind: "label", at: [1.5, -0.45], label: "φ", labelAt: "e", step: 2 },
            { kind: "vector", from: [0, 0], to: [4, 0], tone: "good", label: "BH", labelAt: "n", step: 3 },
            { kind: "vector", from: [4, 0], to: [4, -3], tone: "good", label: "BV", labelAt: "e", step: 3 },
            { kind: "label", at: [2.2, -3.6], label: "B² = BH² + BV²", labelAt: "s", step: 4 },
          ],
        },
      },
      {
        title: "Dip across the Earth",
        points: [
          t`At the **magnetic equator** $B_V = 0$, so $\phi = 0^\circ$: a dip needle rests horizontal.`,
          t`At a **magnetic pole** $B_H = 0$, so $\phi = 90^\circ$: the needle points straight down.`,
          t`Moving from the magnetic equator towards a magnetic pole, the dip rises from $0^\circ$ to $90^\circ$.`,
        ],
        figure: {
          alt: "Dip across the Earth. Step 1: at the magnetic equator a dip needle rests horizontal: φ = 0°. Step 2: at a magnetic pole it points straight down: φ = 90°. Step 3: in between, the dip grows from 0° to 90° towards the pole.",
          axes: "none",
          view: { x: [-4.6, 4.6], y: [-3.4, 3.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2.2 },
            { kind: "segment", from: [2.55, -0.5], to: [2.55, 0.5], tone: "bad", step: 1 },
            { kind: "label", at: [2.8, 0], label: "φ = 0°", labelAt: "e", step: 1 },
            { kind: "segment", from: [-0.5, 2.2], to: [0.5, 2.2], tone: "muted", step: 2 },
            { kind: "segment", from: [0, 2.1], to: [0, 3.1], tone: "bad", step: 2 },
            { kind: "label", at: [0.3, 2.9], label: "φ = 90°", labelAt: "e", step: 2 },
            { kind: "segment", from: [2.42, 2.06], to: [1.48, 1.75], tone: "bad", step: 3 },
            { kind: "segment", from: [2.25, 1.55], to: [1.55, 2.25], tone: "muted", step: 3 },
            { kind: "label", at: [2.5, 2.4], label: "0° < φ < 90°", labelAt: "e", step: 3 },
          ],
        },
      },
    ],
    worked: {
      prompt: t`At a place the horizontal component of the Earth's field is $3 \times 10^{-5}\ \mathrm{T}$ and the angle of dip is $60^\circ$. Find the vertical component and the total field.`,
      steps: [
        t`$B_H = 3 \times 10^{-5}\ \mathrm{T}$, $\phi = 60^\circ$.`,
        t`$B_V = B_H\tan\phi$ $= 3 \times 10^{-5} \times 1.732$ $\approx 5.2 \times 10^{-5}\ \mathrm{T}$.`,
        t`$B = \dfrac{B_H}{\cos\phi}$ $= \dfrac{3 \times 10^{-5}}{0.5}$ $= 6 \times 10^{-5}\ \mathrm{T}$.`,
      ],
      answer: t`$B_V \approx 5.2 \times 10^{-5}\ \mathrm{T}$; $B = 6 \times 10^{-5}\ \mathrm{T}$`,
      figure: {
        alt: "Step 1: BH = 3 × 10⁻⁵ T and the dip 60°. Step 2: BV = BH tan 60° ≈ 5.2 × 10⁻⁵ T. Step 3: B = BH / cos 60° = 6 × 10⁻⁵ T.",
        axes: "none",
        view: { x: [-1.2, 6.8], y: [-4, 1.4] },
        elements: [
          { kind: "segment", from: [0, 0], to: [5.6, 0], dashed: true, tone: "muted" },
          { kind: "label", at: [5.6, 0], label: "horizontal", labelAt: "n" },
          { kind: "arc", centre: [0, 0], r: 1.3, from: -36.86989764584402, to: 0 },
          { kind: "label", at: [1.5, -0.45], label: "φ", labelAt: "e" },
          { kind: "vector", from: [0, 0], to: [4, 0], tone: "good", label: "3 × 10⁻⁵ T", labelAt: "n", step: 1 },
          { kind: "vector", from: [4, 0], to: [4, -3], tone: "good", label: "5.2 × 10⁻⁵ T", labelAt: "e", step: 2 },
          { kind: "vector", from: [0, 0], to: [4, -3], tone: "bad", label: "6 × 10⁻⁵ T", labelAt: "sw", step: 3 },
        ],
      },
    },
    figure: {
      alt: "The Earth's field at a place. Step 1: the field B points into the ground at an angle. Step 2: its angle with the horizontal is the angle of dip φ. Step 3: B splits into a horizontal component BH and a vertical component BV. Step 4: tan φ = BV / BH.",
      axes: "none",
      view: { x: [-1.2, 6.8], y: [-4, 1.4] },
      elements: [
        { kind: "vector", from: [0, 0], to: [4, -3], tone: "bad", label: "B", labelAt: "sw", step: 1 },
        { kind: "segment", from: [0, 0], to: [5.6, 0], dashed: true, tone: "muted", step: 2 },
        { kind: "label", at: [5.6, 0], label: "horizontal", labelAt: "n", step: 2 },
        { kind: "arc", centre: [0, 0], r: 1.3, from: -36.86989764584402, to: 0, step: 2 },
        { kind: "label", at: [1.5, -0.45], label: "φ", labelAt: "e", step: 2 },
        { kind: "vector", from: [0, 0], to: [4, 0], tone: "good", label: "BH", labelAt: "n", step: 3 },
        { kind: "vector", from: [4, 0], to: [4, -3], tone: "good", label: "BV", labelAt: "e", step: 3 },
        { kind: "label", at: [2.2, -3.6], label: "tan φ = BV / BH", labelAt: "s", step: 4 },
      ],
    },
    visualSpec: t`Tilt the Earth's field below the horizontal and watch its horizontal and vertical components change with the angle of dip.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Thinks equal components give zero dip.",
      remediation: t`Zero dip needs $B_V = 0$. Equal components give $\tan\phi = 1$, so $\phi = 45^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: "Thinks equal components give a vertical field.",
      remediation: t`A vertical field needs $B_H = 0$. Here $\tan\phi = \dfrac{B_V}{B_H} = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Guesses $30^\circ$.`,
      remediation: t`$\tan\phi = \dfrac{B_V}{B_H} = 1$ gives $\phi = 45^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks zero vertical field means a vertical needle.",
      remediation: t`With $B_V = 0$ the field is wholly horizontal: $\phi = 0^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Guesses $45^\circ$ for zero vertical field.`,
      remediation: t`$\tan\phi = \dfrac{B_V}{B_H} = 0$, so $\phi = 0^\circ$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Guesses $60^\circ$ for zero vertical field.`,
      remediation: t`$\tan\phi = 0$ gives $\phi = 0^\circ$, at the magnetic equator.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M7",
      mistake: "Puts zero horizontal field at the geographic equator.",
      remediation: t`At the equator the field is nearly horizontal: $B_H$ is largest there, not zero.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M8",
      mistake: "Puts zero horizontal field at the magnetic equator.",
      remediation: t`At the magnetic equator $B_V = 0$; $B_H = 0$ at the magnetic poles.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M9",
      mistake: "Confuses the geographic and geomagnetic poles.",
      remediation: "The field is vertical at the *geomagnetic* poles, which are not at the geographic poles.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M10",
      mistake: "Confuses the magnetic meridian with the geographic meridian.",
      remediation: "The plane through the geographic axis is the *geographic* meridian; the magnetic one contains the magnetic axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M11",
      mistake: "Thinks the magnetic meridian is perpendicular to the magnetic axis.",
      remediation: "A compass needle lies in the magnetic meridian, which contains the magnetic axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M12",
      mistake: "Thinks the magnetic meridian is perpendicular to the geographic axis.",
      remediation: "Meridians are vertical planes through an axis; the magnetic one passes through the magnetic axis.",
      fallback: { kind: "none" },
    },
    {
      id: "C04-M13",
      mistake: t`Divides by $\cos\theta$ instead of multiplying.`,
      remediation: t`$\tan\phi'$ $= \dfrac{\tan\phi}{\cos\theta}$, so the true dip has $\tan\phi = \tan\phi'\cos\theta$, smaller.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M14",
      mistake: t`Uses $\sin\theta$ for the meridian angle.`,
      remediation: t`Only $B_H\cos\theta$ lies in the needle's plane, so $\tan\phi = \tan\phi'\cos\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M15",
      mistake: "Takes the apparent dip as the true dip.",
      remediation: t`Out of the magnetic meridian the needle reads a larger, apparent dip; correct it with $\cos\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M16",
      mistake: "Puts the radius in km.",
      remediation: t`Use SI units: $R = 6.4 \times 10^{6}\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M17",
      mistake: t`Uses $R^2$ instead of $R^3$.`,
      remediation: t`A dipole's field falls as $\dfrac{1}{r^3}$: $m = \dfrac{4\pi}{\mu_0}BR^3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M18",
      mistake: "Uses the axial formula for the equator.",
      remediation: t`The equator of the Earth lies on its dipole's equatorial line: $B$ $= \dfrac{\mu_0}{4\pi}\dfrac{m}{R^3}$, with no factor $2$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Ex Q.1 (iii)" },
      stem: t`At a place on the Earth the horizontal and vertical components of its magnetic field are equal. What is the angle of dip there?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "equal" } },
      options: [
        { key: "A", text: t`$90^\circ$`, correct: false, misconceptionId: "C04-M2", value: "dip_90" },
        { key: "B", text: t`$30^\circ$`, correct: false, misconceptionId: "C04-M3", value: "dip_30" },
        { key: "C", text: t`$45^\circ$`, correct: true, value: "dip_45" },
        { key: "D", text: t`$0^\circ$`, correct: false, misconceptionId: "C04-M1", value: "dip_0" },
      ],
      solution: {
        steps: [
          t`$\tan\phi = \dfrac{B_V}{B_H} = 1$.`,
          t`So $\phi = 45^\circ$.`,
        ],
        figure: {
          alt: "Step 1: the Earth's field B. Step 2: the horizontal and the angle of dip φ. Step 3: the components BH = B cos φ and BV = B sin φ. Step 4: tan φ = BV / BH and B² = BH² + BV².",
          axes: "none",
          view: { x: [-1.2, 6.8], y: [-4, 1.4] },
          elements: [
            { kind: "vector", from: [0, 0], to: [4, -3], tone: "bad", label: "B", labelAt: "sw" },
            { kind: "segment", from: [0, 0], to: [5.6, 0], dashed: true, tone: "muted" },
            { kind: "label", at: [5.6, 0], label: "horizontal", labelAt: "n" },
            { kind: "arc", centre: [0, 0], r: 1.3, from: -36.86989764584402, to: 0 },
            { kind: "label", at: [1.5, -0.45], label: "φ", labelAt: "e" },
            { kind: "vector", from: [0, 0], to: [4, 0], tone: "good", label: "BH", labelAt: "n" },
            { kind: "vector", from: [4, 0], to: [4, -3], tone: "good", label: "BV", labelAt: "e" },
            { kind: "label", at: [2.2, -3.6], label: "B² = BH² + BV²", labelAt: "s" },
          ],
        },
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Ex Q.1 (v)" },
      stem: t`At a place the vertical component of the Earth's magnetic field is zero. What is the angle of dip there?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "bv_zero" } },
      options: [
        { key: "A", text: t`$90^\circ$`, correct: false, misconceptionId: "C04-M4", value: "dip_ninety" },
        { key: "B", text: t`$45^\circ$`, correct: false, misconceptionId: "C04-M5", value: "dip_fortyfive" },
        { key: "C", text: t`$60^\circ$`, correct: false, misconceptionId: "C04-M6", value: "dip_sixty" },
        { key: "D", text: t`$0^\circ$`, correct: true, value: "dip_zero" },
      ],
      solution: {
        steps: [
          t`$\tan\phi = \dfrac{B_V}{B_H} = 0$.`,
          t`So $\phi = 0^\circ$: the place is on the magnetic equator.`,
        ],
        figure: {
          alt: "Dip across the Earth. Step 1: at the magnetic equator a dip needle rests horizontal: φ = 0°. Step 2: at a magnetic pole it points straight down: φ = 90°. Step 3: in between, the dip grows from 0° to 90° towards the pole.",
          axes: "none",
          view: { x: [-4.6, 4.6], y: [-3.4, 3.6] },
          elements: [
            { kind: "circle", centre: [0, 0], r: 2.2 },
            { kind: "segment", from: [2.55, -0.5], to: [2.55, 0.5], tone: "bad" },
            { kind: "label", at: [2.8, 0], label: "φ = 0°", labelAt: "e" },
            { kind: "segment", from: [-0.5, 2.2], to: [0.5, 2.2], tone: "muted" },
            { kind: "segment", from: [0, 2.1], to: [0, 3.1], tone: "bad" },
            { kind: "label", at: [0.3, 2.9], label: "φ = 90°", labelAt: "e" },
            { kind: "segment", from: [2.42, 2.06], to: [1.48, 1.75], tone: "bad" },
            { kind: "segment", from: [2.25, 1.55], to: [1.55, 2.25], tone: "muted" },
            { kind: "label", at: [2.5, 2.4], label: "0° < φ < 90°", labelAt: "e" },
          ],
        },
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Ex Q.1 (vi)" },
      stem: t`Where is the horizontal component of the Earth's magnetic field zero?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "bh_zero" } },
      options: [
        { key: "A", text: t`At the geomagnetic equator`, correct: false, misconceptionId: "C04-M8", value: "geomag_equator" },
        { key: "B", text: t`At one of the geographic poles`, correct: false, misconceptionId: "C04-M9", value: "geog_pole" },
        { key: "C", text: t`At one of the geomagnetic poles`, correct: true, value: "geomag_pole" },
        { key: "D", text: t`At the geographic equator`, correct: false, misconceptionId: "C04-M7", value: "geog_equator" },
      ],
      solution: {
        steps: [
          t`$B_H = B\cos\phi = 0$ needs $\phi = 90^\circ$: the field is vertical.`,
          t`That happens at the Earth's geomagnetic poles.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Ex Q.1 (ii)" },
      stem: t`The magnetic meridian at a place is the vertical plane`,
      verify: { kind: "value", inputs: {  }, params: { ask: "meridian" } },
      options: [
        { key: "A", text: t`passing through the geographic axis of the Earth`, correct: false, misconceptionId: "C04-M10", value: "through_geo_axis" },
        { key: "B", text: t`perpendicular to the magnetic axis of the Earth`, correct: false, misconceptionId: "C04-M11", value: "perp_mag_axis" },
        { key: "C", text: t`perpendicular to the geographic axis of the Earth`, correct: false, misconceptionId: "C04-M12", value: "perp_geo_axis" },
        { key: "D", text: t`passing through the magnetic axis of the Earth`, correct: true, value: "through_mag_axis" },
      ],
      solution: {
        steps: [
          t`A freely hung compass rests in the vertical plane containing the Earth's magnetic axis.`,
          t`That plane, through the magnetic axis, is the magnetic meridian.`,
        ],
        figure: {
          alt: "Seen from above. Step 1: the geographic meridian, towards true north. Step 2: a freely hung compass points along the magnetic meridian. Step 3: the angle between them is the declination.",
          axes: "none",
          view: { x: [-3.4, 3.4], y: [-0.6, 5] },
          elements: [
            { kind: "vector", from: [0, 0], to: [0, 4.3], label: "true N", labelAt: "n" },
            { kind: "point", at: [0, 0], label: "O", labelAt: "s" },
            { kind: "vector", from: [0, 0], to: [1.329, 4.09], tone: "good", label: "magnetic N", labelAt: "e" },
            { kind: "arc", centre: [0, 0], r: 1.8, from: 72, to: 90 },
            { kind: "label", at: [0.35, 2.1], label: "declination", labelAt: "e", tone: "bad" },
          ],
        },
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Ex Q.4 (ii)" },
      stem: t`A dip needle swinging in a vertical plane at $30^\circ$ to the magnetic meridian settles at $45^\circ$ to the horizontal. What is the true angle of dip at the place?`,
      verify: { kind: "value", inputs: { phi_a: "45", theta: "30" }, params: { ask: "apparent" } },
      options: [
        { key: "A", text: t`$45\ \mathrm{^\circ}$`, correct: false, misconceptionId: "C04-M15", value: "45" },
        { key: "B", text: t`$40.9\ \mathrm{^\circ}$`, correct: true, value: "40.9000000000000" },
        { key: "C", text: t`$49.1\ \mathrm{^\circ}$`, correct: false, misconceptionId: "C04-M13", value: "49.1000000000000" },
        { key: "D", text: t`$26.6\ \mathrm{^\circ}$`, correct: false, misconceptionId: "C04-M14", value: "26.6000000000000" },
      ],
      solution: {
        steps: [
          t`$\tan\phi = \tan\phi'\cos\theta$ $= \tan 45^\circ \times \cos 30^\circ$ $= 0.866$.`,
          t`$\phi = \tan^{-1}(0.866)$ $\approx 40.9^\circ$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/magnetism-11-phy/Solved Ex.12.2" },
      stem: t`The Earth's magnetic field at the equator is about $4 \times 10^{-5}\ \mathrm{T}$. Taking the Earth as a dipole of radius $6.4 \times 10^{6}\ \mathrm{m}$, what is its magnetic dipole moment? ($\dfrac{\mu_0}{4\pi} = 10^{-7}$ SI units)`,
      verify: { kind: "value", inputs: { B: "4e-5", R: "6.4e6" }, params: { ask: "moment" } },
      options: [
        { key: "A", text: t`$1.05 \times 10^{23}\ \mathrm{A\,m^2}$`, correct: true, value: "105000000000000006291456" },
        { key: "B", text: t`$1.05 \times 10^{14}\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C04-M16", value: "105000000000000" },
        { key: "C", text: t`$1.64 \times 10^{16}\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C04-M17", value: "16400000000000000" },
        { key: "D", text: t`$5.24 \times 10^{22}\ \mathrm{A\,m^2}$`, correct: false, misconceptionId: "C04-M18", value: "52400000000000004194304" },
      ],
      solution: {
        steps: [
          t`On the Earth's equatorial line, $B$ $= \dfrac{\mu_0}{4\pi}\dfrac{m}{R^3}$, so $m = \dfrac{BR^3}{10^{-7}}$.`,
          t`$m$ $= 4 \times 10^{-5} \times \left(6.4 \times 10^{6}\right)^3 \times 10^{7}$ $\approx 1.05 \times 10^{23}\ \mathrm{A\,m^2}$.`,
        ],
      },
    },
  ],
};
