import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`Squint at a street lamp through a narrow gap between two fingers, then narrow the gap. The light spreads out more, not less. Why?`,
    reveal: t`A narrower slit diffracts more: the central bright band is $\dfrac{2\lambda D}{a}$ wide, so halving the slit width $a$ doubles the spread.`,
  },
  explanation: {
    intuition: [
      t`Light through a single slit makes a broad, bright central band with fainter bands either side.`,
      t`The central band runs from the first dark band on one side to the first dark band on the other.`,
      t`A narrower slit or a longer wavelength spreads it wider.`,
      t`A wider slit squeezes it, until for a wide opening the light just goes straight through.`,
    ],
    formal: [
      {
        title: "Width of the central maximum",
        points: [
          t`The first minima lie where $a\sin\theta = \lambda$; for small angles, $\theta \approx \dfrac{\lambda}{a}$.`,
          t`On a screen $D$ away they are $y_1 = \dfrac{\lambda D}{a}$ either side of the centre.`,
          t`So the central maximum is $2y_1 = \dfrac{2\lambda D}{a}$ wide.`,
          t`Its angular width is $\dfrac{2\lambda}{a}$.`,
        ],
      },
      {
        title: "What changes the width",
        points: [
          t`Width $\propto \lambda$: red light gives broader bands than blue.`,
          t`Width $\propto \dfrac{1}{a}$: halving the slit doubles the width.`,
          t`Width $\propto D$: a farther screen spreads the pattern out.`,
          t`The factor $1.22$ belongs to a circular hole, not to a slit.`,
        ],
      },
    ],
    worked: {
      prompt: t`Light of wavelength $600\ \mathrm{nm}$ falls on a slit $0.3\ \mathrm{mm}$ wide. How wide is the central maximum on a screen $1.5\ \mathrm{m}$ away?`,
      steps: [
        t`First minimum: $y_1 = \dfrac{\lambda D}{a} = \dfrac{6 \times 10^{-7} \times 1.5}{3 \times 10^{-4}}$.`,
        t`$y_1 = 3 \times 10^{-3}\ \mathrm{m} = 3\ \mathrm{mm}$.`,
        t`The central maximum is $2y_1 = 6\ \mathrm{mm}$ wide.`,
      ],
      answer: t`$6\ \mathrm{mm}$`,
    },
    visualSpec: t`Slide the slit width and the wavelength, and watch the central band of the diffraction pattern widen and narrow.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: t`Forgets the 2: takes the central width as $\dfrac{\lambda D}{a}$.`,
      remediation: t`$\dfrac{\lambda D}{a}$ reaches only to the first minimum on one side; the central band spans both sides, $\dfrac{2\lambda D}{a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M2",
      mistake: "Leaves the screen distance in cm.",
      remediation: t`Work in metres: $40\ \mathrm{cm} = 0.4\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M3",
      mistake: t`Uses the factor $1.22$ of a circular aperture for a slit.`,
      remediation: t`For a slit the first minimum is at $a\sin\theta = \lambda$; $1.22$ comes in only for a circular hole.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M4",
      mistake: t`Halves instead of doubling: $\dfrac{\lambda D}{2a}$.`,
      remediation: t`The central band runs from $-\dfrac{\lambda D}{a}$ to $+\dfrac{\lambda D}{a}$: twice $\dfrac{\lambda D}{a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M5",
      mistake: "Thinks a longer wavelength gives narrower bands.",
      remediation: t`The width is $\dfrac{2\lambda D}{a}$: longer waves spread more.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M6",
      mistake: "Thinks red light gives no diffraction bands.",
      remediation: "Every wavelength diffracts; red's longer wavelength just spreads the bands wider.",
      fallback: { kind: "none" },
    },
    {
      id: "C14-M7",
      mistake: "Thinks the band width depends only on the slit, or only on the light.",
      remediation: t`The width $\dfrac{2\lambda D}{a}$ depends on both $\lambda$ and $a$, and on $D$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M8",
      mistake: "Takes the first minimum's distance as the full central width.",
      remediation: t`The first minimum is $y_1 = \dfrac{\lambda D}{a}$ from the centre: use that, not half of it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M9",
      mistake: t`Uses $a\sin\theta = \dfrac{\lambda}{2}$ for the first minimum.`,
      remediation: t`Pair each strip of the slit with one $\dfrac{a}{2}$ further on: they cancel when $\dfrac{a}{2}\sin\theta = \dfrac{\lambda}{2}$, that is $a\sin\theta = \lambda$.`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C14-M10",
      mistake: "Takes the central width as proportional to the slit width.",
      remediation: t`A narrower slit diffracts more: width $\propto \dfrac{1}{a}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M11",
      mistake: t`Takes the central width as proportional to $\dfrac{1}{a^2}$.`,
      remediation: t`$\dfrac{2\lambda D}{a}$ has $a$ to the first power: halving $a$ doubles the width.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.21" },
      stem: t`Green light of wavelength $550\ \mathrm{nm}$ passes through a slit $0.4\ \mathrm{mm}$ wide, and the pattern is seen on a screen $40\ \mathrm{cm}$ away. What is the distance between the two first-order minima?`,
      verify: { kind: "value", inputs: { lam_nm: "550", a_mm: "0.4", D_cm: "40" }, params: { ask: "width" } },
      options: [
        { key: "A", text: t`$1.34\ \mathrm{mm}$`, correct: false, misconceptionId: "C14-M3", value: "1.34000000000000" },
        { key: "B", text: t`$1.1\ \mathrm{mm}$`, correct: true, value: "1.10000000000000" },
        { key: "C", text: t`$0.55\ \mathrm{mm}$`, correct: false, misconceptionId: "C14-M1", value: "0.550000000000000" },
        { key: "D", text: t`$110\ \mathrm{mm}$`, correct: false, misconceptionId: "C14-M2", value: "110" },
      ],
      solution: {
        steps: [
          t`First minima at $y_1 = \dfrac{\lambda D}{a} = \dfrac{550 \times 10^{-9} \times 0.4}{0.4 \times 10^{-3}} = 0.55\ \mathrm{mm}$.`,
          t`The two first-order minima are $2y_1 = 1.1\ \mathrm{mm}$ apart.`,
        ],
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.23" },
      stem: t`Light of wavelength $500\ \mathrm{nm}$ passes through a slit, and on a screen $2.50\ \mathrm{m}$ away the central maximum is $6.00\ \mathrm{mm}$ wide. How wide is the slit?`,
      verify: { kind: "value", inputs: { lam_nm: "500", D_m: "2.5", Wc_mm: "6" }, params: { ask: "slit" } },
      options: [
        { key: "A", text: t`$0.417\ \mathrm{mm}$`, correct: true, value: "0.417000000000000" },
        { key: "B", text: t`$0.208\ \mathrm{mm}$`, correct: false, misconceptionId: "C14-M1", value: "0.208000000000000" },
        { key: "C", text: t`$0.508\ \mathrm{mm}$`, correct: false, misconceptionId: "C14-M3", value: "0.508000000000000" },
        { key: "D", text: t`$0.104\ \mathrm{mm}$`, correct: false, misconceptionId: "C14-M4", value: "0.104000000000000" },
      ],
      solution: {
        steps: [
          t`Central width $\dfrac{2\lambda D}{a}$, so $a = \dfrac{2\lambda D}{W_c} = \dfrac{2 \times 5 \times 10^{-7} \times 2.5}{6 \times 10^{-3}}$.`,
          t`$a \approx 4.17 \times 10^{-4}\ \mathrm{m} = 0.417\ \mathrm{mm}$.`,
        ],
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.1(vi)" },
      stem: t`A diffraction pattern is formed by blue light falling on a narrow slit. The blue light is replaced by red light. What happens to the diffraction bands?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "colour" } },
      options: [
        { key: "A", text: t`They become broader`, correct: true, value: "broader" },
        { key: "B", text: t`They become narrower`, correct: false, misconceptionId: "C14-M5", value: "narrower" },
        { key: "C", text: t`They disappear`, correct: false, misconceptionId: "C14-M6", value: "disappear" },
        { key: "D", text: t`They stay the same`, correct: false, misconceptionId: "C14-M7", value: "same" },
      ],
      solution: {
        steps: [
          t`The band width is $\dfrac{2\lambda D}{a}$, proportional to $\lambda$.`,
          t`Red light has a longer wavelength than blue, so the bands become broader.`,
        ],
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.19" },
      stem: t`In Fraunhofer diffraction at a slit $0.2\ \mathrm{mm}$ wide, the screen is $2\ \mathrm{m}$ from the lens, and the first minimum is $5\ \mathrm{mm}$ on either side of the central maximum. What is the wavelength of the light?`,
      verify: { kind: "value", inputs: { y_mm: "5", a_mm: "0.2", D_m: "2" }, params: { ask: "lam" } },
      options: [
        { key: "A", text: t`$250\ \mathrm{nm}$`, correct: false, misconceptionId: "C14-M8", value: "250" },
        { key: "B", text: t`$410\ \mathrm{nm}$`, correct: false, misconceptionId: "C14-M3", value: "410" },
        { key: "C", text: t`$1000\ \mathrm{nm}$`, correct: false, misconceptionId: "C14-M9", value: "1000" },
        { key: "D", text: t`$500\ \mathrm{nm}$`, correct: true, value: "500" },
      ],
      solution: {
        steps: [
          t`First minimum: $a\sin\theta = \lambda$, with $\sin\theta \approx \dfrac{y}{D}$.`,
          t`$\lambda = \dfrac{ay}{D} = \dfrac{0.2 \times 10^{-3} \times 5 \times 10^{-3}}{2} = 5 \times 10^{-7}\ \mathrm{m}$.`,
          t`$\lambda = 500\ \mathrm{nm}$.`,
        ],
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "authored" },
      stem: t`The width of a single slit is halved, with the light and the screen unchanged. What happens to the width of the central maximum?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "halve" } },
      options: [
        { key: "A", text: t`It halves`, correct: false, misconceptionId: "C14-M10", value: "halves" },
        { key: "B", text: t`It becomes four times as wide`, correct: false, misconceptionId: "C14-M11", value: "quadruples" },
        { key: "C", text: t`It stays the same`, correct: false, misconceptionId: "C14-M7", value: "same" },
        { key: "D", text: t`It doubles`, correct: true, value: "doubles" },
      ],
      solution: {
        steps: [
          t`The central width $\dfrac{2\lambda D}{a}$ is inversely proportional to $a$.`,
          t`Halving $a$ doubles the width.`,
        ],
      },
    },
  ],
};
