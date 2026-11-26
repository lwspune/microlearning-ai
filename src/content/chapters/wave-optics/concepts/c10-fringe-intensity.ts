import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Cover one slit of a double-slit experiment with a filter that halves its light. The fringes stay, but the dark ones are no longer dark. Why?`,
    reveal: t`Dark fringes come from the two waves cancelling. With unequal amplitudes they cancel only partly: the minimum is $\left(a_1 - a_2\right)^2$, not zero, so the contrast drops.`,
  },
  explanation: {
    intuition: [
      t`At a bright fringe the two waves arrive in phase: their amplitudes add.`,
      t`At a dark fringe they arrive in antiphase: their amplitudes subtract.`,
      t`Intensity goes as the square of the amplitude, so square after adding or subtracting.`,
      t`Equal sources give perfectly dark fringes; unequal ones give grey minima.`,
    ],
    formal: [
      {
        title: "Maxima and minima",
        points: [
          t`For amplitudes $a_1$ and $a_2$: $I_{\max} \propto \left(a_1 + a_2\right)^2$ and $I_{\min} \propto \left(a_1 - a_2\right)^2$.`,
          t`So $\dfrac{I_{\max}}{I_{\min}} = \left(\dfrac{a_1 + a_2}{a_1 - a_2}\right)^2$.`,
          t`When $a_1 = a_2$, $I_{\min} = 0$: the dark fringes are completely dark.`,
        ],
      },
      {
        title: "Working from intensities",
        points: [
          t`Each source's intensity goes as its amplitude squared: $\dfrac{a_1}{a_2} = \sqrt{\dfrac{I_1}{I_2}}$.`,
          t`So $\dfrac{I_{\max}}{I_{\min}} = \left(\dfrac{\sqrt{I_1} + \sqrt{I_2}}{\sqrt{I_1} - \sqrt{I_2}}\right)^2$.`,
          t`Never add the intensities themselves: interference adds amplitudes.`,
        ],
      },
      {
        title: "Working backwards",
        points: [
          t`Given $\dfrac{I_{\max}}{I_{\min}} = R$, take the square root: $\dfrac{a_1 + a_2}{a_1 - a_2} = \sqrt{R}$.`,
          t`Solve for $\dfrac{a_1}{a_2}$, then square it for $\dfrac{I_1}{I_2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`In a double-slit experiment the bright fringes are $49$ times as intense as the dark ones. Find the ratio of the amplitudes, and of the intensities, of the two sources.`,
      steps: [
        t`$\dfrac{a_1 + a_2}{a_1 - a_2} = \sqrt{49} = 7$.`,
        t`$a_1 + a_2 = 7a_1 - 7a_2$, so $8a_2 = 6a_1$ and $\dfrac{a_1}{a_2} = \dfrac{4}{3}$.`,
        t`$\dfrac{I_1}{I_2} = \left(\dfrac{4}{3}\right)^2 = \dfrac{16}{9}$.`,
      ],
      answer: t`Amplitudes $4 : 3$; intensities $16 : 9$`,
    },
    visualSpec: t`Dim one slit with a slider and watch the dark fringes turn grey while the bright ones fade.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: t`Takes $\dfrac{I_{\max}}{I_{\min}}$ as the ratio of the two sources.`,
      remediation: t`$I_{\max}$ and $I_{\min}$ belong to the fringes. The sources' amplitudes come from $\dfrac{a_1 + a_2}{a_1 - a_2} = \sqrt{\dfrac{I_{\max}}{I_{\min}}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Stops at the amplitude ratio when the intensity ratio is asked.",
      remediation: t`Square the amplitude ratio: $\dfrac{I_1}{I_2} = \left(\dfrac{a_1}{a_2}\right)^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Takes $\dfrac{a_1 + a_2}{a_1 - a_2}$ as $\dfrac{a_1}{a_2}$.`,
      remediation: t`$\sqrt{R}$ is $\dfrac{a_1 + a_2}{a_1 - a_2}$; solve that equation for $\dfrac{a_1}{a_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Gives the intensity ratio when the amplitude ratio is asked.",
      remediation: t`The amplitude ratio is the square root of the intensity ratio: stop at $\dfrac{a_1}{a_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Adds and subtracts intensities instead of amplitudes.",
      remediation: t`Interference adds displacements, so amplitudes: $I_{\max} \propto \left(a_1 + a_2\right)^2$, not $I_1 + I_2$.`,
      fallback: { kind: "ext", topic: "superposition and interference (Superposition of Waves, Ch.6)" },
    },
    {
      id: "C10-M6",
      mistake: "Mixes up intensities and amplitudes.",
      remediation: "Intensity goes as amplitude squared: from intensities, take square roots before adding; from amplitudes, don't.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Forgets to square.",
      remediation: t`$\dfrac{I_{\max}}{I_{\min}} = \left(\dfrac{a_1 + a_2}{a_1 - a_2}\right)^2$: intensity is the square of the amplitude.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.1 (iv)" },
      stem: t`In Young's double slit experiment the two coherent sources have different intensities, and the ratio of maximum to minimum intensity in the pattern is $25 : 1$. What is the ratio of the intensities of the two sources?`,
      verify: { kind: "value", inputs: { R: "25" }, params: { ask: "src_I" } },
      options: [
        { key: "A", text: t`$25 : 1$`, correct: false, misconceptionId: "C10-M1", value: "25" },
        { key: "B", text: t`$3 : 2$`, correct: false, misconceptionId: "C10-M2", value: "1.50000000000000" },
        { key: "C", text: t`$5 : 1$`, correct: false, misconceptionId: "C10-M3", value: "5" },
        { key: "D", text: t`$9 : 4$`, correct: true, value: "2.25000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{a_1 + a_2}{a_1 - a_2} = \sqrt{25} = 5$, so $6a_2 = 4a_1$ and $\dfrac{a_1}{a_2} = \dfrac{3}{2}$.`,
          t`$\dfrac{I_1}{I_2} = \left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.1(ix)" },
      stem: t`In Young's double slit experiment the two coherent sources have different amplitudes. The ratio of maximum to minimum intensity is $16 : 1$. What is the ratio of the amplitudes of the two sources?`,
      verify: { kind: "value", inputs: { R: "16" }, params: { ask: "src_a" } },
      options: [
        { key: "A", text: t`$5 : 3$`, correct: true, value: "1.67000000000000" },
        { key: "B", text: t`$4 : 1$`, correct: false, misconceptionId: "C10-M3", value: "4" },
        { key: "C", text: t`$16 : 1$`, correct: false, misconceptionId: "C10-M1", value: "16" },
        { key: "D", text: t`$25 : 9$`, correct: false, misconceptionId: "C10-M4", value: "2.78000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{a_1 + a_2}{a_1 - a_2} = \sqrt{16} = 4$.`,
          t`$a_1 + a_2 = 4a_1 - 4a_2$, so $5a_2 = 3a_1$ and $\dfrac{a_1}{a_2} = \dfrac{5}{3}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/wave-optics-12-phy/Ex Q.20" },
      stem: t`In Young's experiment the light from one slit has twice the intensity of the light from the other. What is the approximate ratio of the intensities of the bright and dark fringes?`,
      verify: { kind: "value", inputs: { I1: "2", I2: "1" }, params: { ask: "R_from_I" } },
      options: [
        { key: "A", text: t`$5.83$`, correct: false, misconceptionId: "C10-M7", value: "5.83000000000000" },
        { key: "B", text: t`$34$`, correct: true, value: "34" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C10-M5", value: "3" },
        { key: "D", text: t`$9$`, correct: false, misconceptionId: "C10-M6", value: "9" },
      ],
      solution: {
        steps: [
          t`$\dfrac{a_1}{a_2} = \sqrt{2}$.`,
          t`$\dfrac{I_{\max}}{I_{\min}} = \left(\dfrac{\sqrt{2} + 1}{\sqrt{2} - 1}\right)^2 = \left(3 + 2\sqrt{2}\right)^2$.`,
          t`$\approx 5.83^2 \approx 34$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.29" },
      stem: t`Two coherent sources of light with intensities in the ratio $81 : 1$ produce interference fringes. What is the ratio of the intensities at the maxima and minima?`,
      verify: { kind: "value", inputs: { I1: "81", I2: "1" }, params: { ask: "R_from_I" } },
      options: [
        { key: "A", text: t`$1.02$`, correct: false, misconceptionId: "C10-M5", value: "1.02000000000000" },
        { key: "B", text: t`$1.25$`, correct: false, misconceptionId: "C10-M7", value: "1.25000000000000" },
        { key: "C", text: t`$1.56$`, correct: true, value: "1.56000000000000" },
        { key: "D", text: t`$1.05$`, correct: false, misconceptionId: "C10-M6", value: "1.05000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{a_1}{a_2} = \sqrt{81} = 9$.`,
          t`$\dfrac{I_{\max}}{I_{\min}} = \left(\dfrac{9 + 1}{9 - 1}\right)^2 = \dfrac{100}{64} \approx 1.56$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`Two coherent waves with amplitudes in the ratio $3 : 1$ interfere. What is the ratio of the maximum to the minimum intensity?`,
      verify: { kind: "value", inputs: { a1: "3", a2: "1" }, params: { ask: "R_from_a" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$13.9$`, correct: false, misconceptionId: "C10-M6", value: "13.9000000000000" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C10-M7", value: "2" },
        { key: "D", text: t`$1.25$`, correct: false, misconceptionId: "C10-M5", value: "1.25000000000000" },
      ],
      solution: {
        steps: [
          t`$\dfrac{I_{\max}}{I_{\min}} = \left(\dfrac{3 + 1}{3 - 1}\right)^2$.`,
          t`$= 2^2 = 4$.`,
        ],
      },
    },
  ],
};
