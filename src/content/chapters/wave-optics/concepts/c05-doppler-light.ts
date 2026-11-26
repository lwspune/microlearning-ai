import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Astronomers measure how fast a galaxy billions of kilometres away is moving, without ever going there. How?`,
    reveal: t`From the colours of its light. Its spectral lines sit at slightly longer wavelengths than in the laboratory, a **red shift**, and the size of the shift gives its speed: $\dfrac{\Delta\lambda}{\lambda} = \dfrac{v_r}{c}$.`,
  },
  explanation: {
    intuition: [
      t`A source moving away stretches the waves it sends us: we receive a longer wavelength and a lower frequency.`,
      t`A source coming towards us squeezes them: a shorter wavelength and a higher frequency.`,
      t`This change is the **Doppler effect**, as for the pitch of a passing siren.`,
      t`For light, a longer wavelength is shifted towards red: a **red shift**; a shorter one, a **blue shift**.`,
      t`The shift depends only on how fast the source and observer separate along the line joining them.`,
    ],
    formal: [
      {
        title: "The Doppler shift",
        points: [
          t`Let $v_r$ be the speed of recession, along the line of sight, much less than $c$.`,
          t`The wavelength changes by $\Delta\lambda$, with $\dfrac{\Delta\lambda}{\lambda} = \dfrac{v_r}{c}$.`,
          t`The frequency changes by $\Delta\nu$, with $\dfrac{\Delta\nu}{\nu} = -\dfrac{v_r}{c}$.`,
          t`Receding: $\lambda$ grows, $\nu$ falls (red shift). Approaching: $\lambda$ shrinks, $\nu$ rises (blue shift).`,
        ],
      },
      {
        title: "Using the formula",
        points: [
          t`$\lambda$ is the wavelength at rest, the laboratory value; $\Delta\lambda$ = observed minus rest.`,
          t`Then $v_r = c\dfrac{\Delta\lambda}{\lambda}$.`,
          t`Keep $\lambda$ and $\Delta\lambda$ in the same unit: the ratio has none.`,
          t`Light from almost every distant galaxy is red-shifted: the universe is expanding.`,
        ],
      },
    ],
    worked: {
      prompt: t`A line of wavelength $600\ \mathrm{nm}$ in the laboratory is observed at $603\ \mathrm{nm}$ in a star's light. Is the star approaching or receding, and how fast? (Take $c = 3 \times 10^8\ \mathrm{m/s}$.)`,
      steps: [
        t`The observed wavelength is longer, a red shift: the star is receding.`,
        t`$\Delta\lambda = 603 - 600 = 3\ \mathrm{nm}$.`,
        t`$v_r = c\dfrac{\Delta\lambda}{\lambda} = 3 \times 10^8 \times \dfrac{3}{600}$.`,
        t`$v_r = 1.5 \times 10^6\ \mathrm{m/s}$.`,
      ],
      answer: t`Receding at $1.5 \times 10^6\ \mathrm{m/s}$`,
    },
    visualSpec: t`Move a light source towards and away from an observer and watch the crests bunch up or spread out, the colour sliding blue or red.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Takes red shift as a shortening of the wavelength.",
      remediation: "Red light has the longest visible wavelength: a red shift is an increase in wavelength.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Swaps approaching and receding.",
      remediation: t`A receding source stretches its waves: longer $\lambda$, lower $\nu$. An approaching one squeezes them.`,
      fallback: { kind: "ext", topic: "Doppler effect in sound (Std XI Physics)" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks the shift comes from the medium the light passes through.",
      remediation: t`The Doppler shift comes from the source's motion; every line shifts by the same fraction, $\dfrac{v_r}{c}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Turns $\dfrac{\Delta\lambda}{\lambda}$ upside down.`,
      remediation: t`The shift is a small fraction of the wavelength: $v_r = c\dfrac{\Delta\lambda}{\lambda}$, far below $c$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: t`Uses $\dfrac{2v}{c}$, as for an echo from a moving reflector.`,
      remediation: t`Light coming straight from a moving source shifts once: $\dfrac{\Delta\lambda}{\lambda} = \dfrac{v_r}{c}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: t`Uses the observed wavelength as the shift $\Delta\lambda$.`,
      remediation: t`$\Delta\lambda$ is observed minus rest wavelength: $662.9 - 656.3 = 6.6\ \mathrm{nm}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Gives the shift instead of the observed value.",
      remediation: "The question asks for what is observed: add the shift to, or take it from, the rest value.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Reads a red shift as a cooler source.",
      remediation: "A shift moves every line by the same fraction; a cooler star changes the overall colour, not the positions of its lines.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2017-march/Q.5(ii)" },
      stem: t`In the Doppler effect for light, what does the term **red shift** describe?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "red_shift" } },
      options: [
        { key: "A", text: t`A reddening of light by the air or dust it passes through`, correct: false, misconceptionId: "C05-M3", value: "medium" },
        { key: "B", text: t`An increase in wavelength, for a source moving away from the observer`, correct: true, value: "longer_receding" },
        { key: "C", text: t`A decrease in wavelength, for a source moving away from the observer`, correct: false, misconceptionId: "C05-M1", value: "shorter_receding" },
        { key: "D", text: t`An increase in wavelength, for a source moving towards the observer`, correct: false, misconceptionId: "C05-M2", value: "longer_approaching" },
      ],
      solution: {
        steps: [
          t`Red light has the longest visible wavelengths.`,
          t`A red shift is an increase in wavelength, which happens when the source moves away.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "authored" },
      stem: t`A spectral line of hydrogen, $656.3\ \mathrm{nm}$ in the laboratory, is observed at $662.9\ \mathrm{nm}$ in the light from a distant galaxy. How fast is the galaxy receding? (Take $c = 3 \times 10^8\ \mathrm{m/s}$.)`,
      verify: { kind: "value", inputs: { l0: "656.3", l1: "662.9" }, params: { ask: "v_from_lines" } },
      options: [
        { key: "A", text: t`$2.98 \times 10^{10}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C05-M6", value: "29800000000" },
        { key: "B", text: t`$1.51 \times 10^{6}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C05-M10", value: "1510000" },
        { key: "C", text: t`$3.03 \times 10^{8}\ \mathrm{m/s}$`, correct: false, misconceptionId: "C05-M11", value: "303000000" },
        { key: "D", text: t`$3.02 \times 10^{6}\ \mathrm{m/s}$`, correct: true, value: "3020000" },
      ],
      solution: {
        steps: [
          t`$\Delta\lambda = 662.9 - 656.3 = 6.6\ \mathrm{nm}$.`,
          t`$v_r = c\dfrac{\Delta\lambda}{\lambda} = 3 \times 10^8 \times \dfrac{6.6}{656.3}$.`,
          t`$v_r \approx 3.02 \times 10^6\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "authored" },
      stem: t`A star approaches the Earth at $3 \times 10^5\ \mathrm{m/s}$. A line in its spectrum has a wavelength of $500\ \mathrm{nm}$ when the source is at rest. At what wavelength is it observed?`,
      verify: { kind: "value", inputs: { l0: "500", v: "3*10**5" }, params: { ask: "lam_obs", sf: "4" } },
      options: [
        { key: "A", text: t`$499.5\ \mathrm{nm}$`, correct: true, value: "499.500000000000" },
        { key: "B", text: t`$500.5\ \mathrm{nm}$`, correct: false, misconceptionId: "C05-M2", value: "500.500000000000" },
        { key: "C", text: t`$499\ \mathrm{nm}$`, correct: false, misconceptionId: "C05-M10", value: "499" },
        { key: "D", text: t`$0.5\ \mathrm{nm}$`, correct: false, misconceptionId: "C05-M13", value: "0.500000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta\lambda = \lambda\dfrac{v}{c} = 500 \times \dfrac{3 \times 10^5}{3 \times 10^8} = 0.5\ \mathrm{nm}$.`,
          t`The star approaches, so the wavelength shortens: $500 - 0.5 = 499.5\ \mathrm{nm}$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`Light of frequency $6 \times 10^{14}\ \mathrm{Hz}$ comes from a source receding at $6 \times 10^6\ \mathrm{m/s}$. What frequency does the observer measure?`,
      verify: { kind: "value", inputs: { nu: "6*10**14", v: "6*10**6" }, params: { ask: "nu_obs" } },
      options: [
        { key: "A", text: t`$5.76 \times 10^{14}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C05-M10", value: "576000000000000" },
        { key: "B", text: t`$1.2 \times 10^{13}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C05-M13", value: "12000000000000" },
        { key: "C", text: t`$5.88 \times 10^{14}\ \mathrm{Hz}$`, correct: true, value: "588000000000000" },
        { key: "D", text: t`$6.12 \times 10^{14}\ \mathrm{Hz}$`, correct: false, misconceptionId: "C05-M2", value: "612000000000000" },
      ],
      solution: {
        steps: [
          t`$\Delta\nu = \nu\dfrac{v_r}{c} = 6 \times 10^{14} \times \dfrac{6 \times 10^6}{3 \times 10^8}$ $= 1.2 \times 10^{13}\ \mathrm{Hz}$.`,
          t`The source recedes, so the frequency falls: $6 \times 10^{14} - 1.2 \times 10^{13}$ $= 5.88 \times 10^{14}\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`The spectral lines in the light from a distant galaxy are all shifted towards the red end of the spectrum. What does this show?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "galaxy" } },
      options: [
        { key: "A", text: t`The galaxy is moving away from us`, correct: true, value: "receding" },
        { key: "B", text: t`The galaxy is moving towards us`, correct: false, misconceptionId: "C05-M2", value: "approaching" },
        { key: "C", text: t`Dust between us and the galaxy has reddened its light`, correct: false, misconceptionId: "C05-M3", value: "dust" },
        { key: "D", text: t`The galaxy's stars are cooler than the Sun`, correct: false, misconceptionId: "C05-M14", value: "cooler" },
      ],
      solution: {
        steps: [
          t`Every line is shifted towards longer wavelengths by the same fraction.`,
          t`That is a Doppler red shift: the galaxy is moving away from us.`,
        ],
      },
    },
  ],
};
