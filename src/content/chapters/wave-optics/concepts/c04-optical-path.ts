import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`Which takes light longer to cross: $2\ \mathrm{cm}$ of glass of refractive index $1.5$, or $2.5\ \mathrm{cm}$ of air?`,
    reveal: t`The glass. Light is $1.5$ times slower there, so $2\ \mathrm{cm}$ of glass takes as long as $3\ \mathrm{cm}$ of air. That $3\ \mathrm{cm}$ is the glass's **optical path**.`,
  },
  explanation: {
    intuition: [
      t`Light is slower in a medium, so a centimetre of glass takes longer to cross than a centimetre of air.`,
      t`To compare paths through different media, convert each to the distance light would cover in vacuum in the same time.`,
      t`That vacuum distance is the **optical path**; the actual distance is the **geometric path**.`,
      t`A path through glass is optically longer than it looks.`,
      t`Paths with equal optical lengths take equal times and hold the same number of waves.`,
    ],
    formal: [
      {
        title: "Optical path",
        points: [
          t`In a medium of refractive index $n$, light travels at $v = \dfrac{c}{n}$.`,
          t`Crossing a geometric path $d$ takes the time $\dfrac{d}{v} = \dfrac{nd}{c}$.`,
          t`In that time light in vacuum would cover $c \times \dfrac{nd}{c} = nd$.`,
          t`So the **optical path** is $n \times d$: refractive index times geometric path.`,
          t`In vacuum $n = 1$, and in air nearly so: there the optical and geometric paths are equal.`,
        ],
      },
      {
        title: "Equal optical paths",
        points: [
          t`Equal optical paths take equal times, whatever the media, since the time is $\dfrac{nd}{c}$.`,
          t`They hold the same number of waves: $\dfrac{d}{\lambda/n} = \dfrac{nd}{\lambda}$, with $\lambda$ the vacuum wavelength.`,
          t`Paths in two media match when $n_1 d_1 = n_2 d_2$.`,
          t`The rarer medium needs the longer geometric path.`,
          t`The **equivalent air path** of a slab is $nd$: the air distance crossed in the same time.`,
        ],
      },
      {
        title: "Path difference",
        points: [
          t`Two rays meeting at a point differ by the difference of their optical paths.`,
          t`Along each ray, add $nd$ for every part, then subtract the two totals.`,
          t`A plate of thickness $t$ and index $n$ in one ray replaces an air path $t$ by an optical path $nt$.`,
          t`So the plate adds $nt - t = (n - 1)t$ to that ray, not $nt$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Light crosses $4.5\ \mathrm{cm}$ of water, of refractive index $\dfrac{4}{3}$, and then $2\ \mathrm{cm}$ of glass, of refractive index $1.6$. Find the total optical path and the time taken. Take $c = 3 \times 10^{8}\ \mathrm{m/s}$.`,
      steps: [
        t`Water: optical path $= \dfrac{4}{3} \times 4.5 = 6\ \mathrm{cm}$.`,
        t`Glass: optical path $= 1.6 \times 2 = 3.2\ \mathrm{cm}$.`,
        t`Total optical path $= 6 + 3.2 = 9.2\ \mathrm{cm}$, against a geometric path of $6.5\ \mathrm{cm}$.`,
        t`Time $= \dfrac{\text{optical path}}{c} = \dfrac{0.092}{3 \times 10^{8}}$ $= 3.07 \times 10^{-10}\ \mathrm{s}$.`,
      ],
      answer: t`Optical path $9.2\ \mathrm{cm}$; time $3.07 \times 10^{-10}\ \mathrm{s}$`,
    },
    visualSpec: t`Slide a glass block into one of two light paths and watch its optical length grow to n times its width, while a pulse on it falls behind.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Takes the optical path as $\dfrac{d}{n}$, since light is slower in the medium.`,
      remediation: t`Slower light needs more time, and in that time light in vacuum would go further: the optical path is $nd$, longer than $d$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M2",
      mistake: "Takes the optical path to be the same as the geometric path.",
      remediation: t`Only in vacuum (or air) are they equal. In a medium of index $n$ the optical path is $nd$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C04-M3",
      mistake: t`Takes the optical path as $(n - 1)d$, the extra path of a plate.`,
      remediation: t`$(n - 1)t$ is what a plate adds compared with the air it replaces. The optical path itself is $nd$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: t`Takes the whole optical path $nt$ of a plate as the path difference it introduces.`,
      remediation: t`Without the plate that ray still had an air path $t$. The plate replaces $t$ by $nt$, so it adds $(n - 1)t$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.14" },
      stem: t`The optical path of light travelling $3\ \mathrm{cm}$ in flint glass of refractive index $1.6$ is the same as that of light travelling $x$ cm through a medium of refractive index $1.25$. What is $x$?`,
      verify: { kind: "value", inputs: { n1: "1.6", d1: "3", n2: "1.25" }, params: { ask: "match" } },
      options: [
        { key: "A", text: t`$3\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M2", value: "3" },
        { key: "B", text: t`$7.2\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M3", value: "7.20000000000000" },
        { key: "C", text: t`$3.84\ \mathrm{cm}$`, correct: true, value: "3.84000000000000" },
        { key: "D", text: t`$2.34\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M1", value: "2.34000000000000" },
      ],
      solution: {
        steps: [
          t`Equal optical paths: $n_1 d_1 = n_2 d_2$.`,
          t`$1.6 \times 3 = 1.25\,x$, so $4.8 = 1.25\,x$.`,
          t`$x = 3.84\ \mathrm{cm}$, longer than $3\ \mathrm{cm}$, as the second medium is rarer.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.2 (v)" },
      stem: t`Light travels a geometric path $d$ in a medium of refractive index $n$. What is its optical path length?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "def" } },
      options: [
        { key: "A", text: t`$\dfrac{d}{n}$, as light is slower in the medium`, correct: false, misconceptionId: "C04-M1", value: "d_over_n" },
        { key: "B", text: t`$d$, the same as the actual path`, correct: false, misconceptionId: "C04-M2", value: "d" },
        { key: "C", text: t`$(n - 1)d$, the extra distance due to the medium`, correct: false, misconceptionId: "C04-M3", value: "n_minus_1_d" },
        { key: "D", text: t`$nd$, the distance light would cover in vacuum in the same time`, correct: true, value: "nd" },
      ],
      solution: {
        steps: [
          t`In the medium light travels at $\dfrac{c}{n}$, so crossing $d$ takes $\dfrac{nd}{c}$.`,
          t`In that time light in vacuum would cover $nd$.`,
          t`So the optical path is $nd$; it equals $d$ only in vacuum.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "authored" },
      stem: t`How long does light take to cross a glass slab $6\ \mathrm{cm}$ thick, of refractive index $1.5$? Take $c = 3 \times 10^{8}\ \mathrm{m/s}$.`,
      verify: { kind: "value", inputs: { n: "1.5", d_cm: "6" }, params: { ask: "time" } },
      options: [
        { key: "A", text: t`$2 \times 10^{-10}\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M2", value: "2.00000000000000e-10" },
        { key: "B", text: t`$1 \times 10^{-10}\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M3", value: "1.00000000000000e-10" },
        { key: "C", text: t`$3 \times 10^{-10}\ \mathrm{s}$`, correct: true, value: "3.00000000000000e-10" },
        { key: "D", text: t`$1.33 \times 10^{-10}\ \mathrm{s}$`, correct: false, misconceptionId: "C04-M1", value: "1.33000000000000e-10" },
      ],
      solution: {
        steps: [
          t`Optical path $= 1.5 \times 6 = 9\ \mathrm{cm} = 0.09\ \mathrm{m}$.`,
          t`Time $= \dfrac{0.09}{3 \times 10^{8}} = 3 \times 10^{-10}\ \mathrm{s}$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "authored" },
      stem: t`Light of wavelength $500\ \mathrm{nm}$ in vacuum crosses a glass plate $0.1\ \mathrm{mm}$ thick, of refractive index $1.5$. How many waves fit in the plate's thickness?`,
      verify: { kind: "value", inputs: { n: "1.5", d_mm: "0.1", lam_nm: "500" }, params: { ask: "waves" } },
      options: [
        { key: "A", text: t`$133$`, correct: false, misconceptionId: "C04-M1", value: "133" },
        { key: "B", text: t`$200$`, correct: false, misconceptionId: "C04-M2", value: "200" },
        { key: "C", text: t`$100$`, correct: false, misconceptionId: "C04-M3", value: "100" },
        { key: "D", text: t`$300$`, correct: true, value: "300" },
      ],
      solution: {
        steps: [
          t`Optical path $= 1.5 \times 0.1\ \mathrm{mm} = 1.5 \times 10^{-4}\ \mathrm{m}$.`,
          t`Number of waves $= \dfrac{nd}{\lambda} = \dfrac{1.5 \times 10^{-4}}{5 \times 10^{-7}} = 300$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "authored" },
      stem: t`Two rays travel equal distances in air to the same point. A glass plate $1.2\ \mathrm{cm}$ thick, of refractive index $1.5$, is put in the path of one of them. What path difference does the plate introduce?`,
      verify: { kind: "value", inputs: { n: "1.5", t_cm: "1.2" }, params: { ask: "plate" } },
      options: [
        { key: "A", text: t`$1.8\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M4", value: "1.80000000000000" },
        { key: "B", text: t`$0.6\ \mathrm{cm}$`, correct: true, value: "0.600000000000000" },
        { key: "C", text: t`$0.4\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M1", value: "0.400000000000000" },
        { key: "D", text: t`$0\ \mathrm{cm}$`, correct: false, misconceptionId: "C04-M2", value: "0" },
      ],
      solution: {
        steps: [
          t`Without the plate that ray had an air path of $1.2\ \mathrm{cm}$; the plate makes it $1.5 \times 1.2 = 1.8\ \mathrm{cm}$.`,
          t`Path difference $= (n - 1)t = 0.5 \times 1.2 = 0.6\ \mathrm{cm}$.`,
        ],
      },
    },
  ],
};
