import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`Strike two tuning forks of $256\ \mathrm{Hz}$ and $260\ \mathrm{Hz}$ together and the sound swells and fades four times a second. Where does the throb come from?`,
    reveal: t`The two waves drift in and out of step. In step they add to a loud sound, out of step they nearly cancel, and that happens $260 - 256 = 4$ times a second: **beats**.`,
  },
  explanation: {
    intuition: [
      t`Two sounds of nearly equal frequency, heard together, are sometimes in phase and sometimes in antiphase.`,
      t`In phase, their displacements add and the sound is loud: **waxing**.`,
      t`In antiphase, they nearly cancel and the sound is faint: **waning**.`,
      t`One rise and fall of loudness is one **beat**.`,
      t`The faster one wave gains a whole cycle on the other, the more beats per second.`,
    ],
    formal: [
      {
        title: "Beat frequency",
        points: [
          t`In one second, one wave makes $n_1$ cycles and the other $n_2$.`,
          t`The faster one gains $n_1 - n_2$ cycles, and each cycle gained is one beat.`,
          t`So the **beat frequency** is $N = \left|n_1 - n_2\right|$.`,
          t`Successive maxima are $\dfrac{1}{N}$ apart; a maximum and the next minimum, $\dfrac{1}{2N}$.`,
          t`The ear can count beats only when $N$ is less than about 10 per second.`,
        ],
      },
      {
        title: "Finding an unknown frequency",
        points: [
          t`A fork of known frequency $n_0$ giving $N$ beats with another means $n = n_0 \pm N$.`,
          t`**Loading** a fork with wax lowers its frequency; **filing** its prongs raises it.`,
          t`If the change makes the beats fewer, it moved $n$ towards $n_0$; more beats, away from it.`,
        ],
      },
      {
        title: "Beats and wavelengths",
        points: [
          t`Both sounds travel at the same speed $v$ in air, so $n_1 = \dfrac{v}{\lambda_1}$ and $n_2 = \dfrac{v}{\lambda_2}$.`,
          t`$N = \dfrac{v}{\lambda_1} - \dfrac{v}{\lambda_2}$, where $\lambda_1$ is the shorter wavelength.`,
          t`So $v = \dfrac{N}{\dfrac{1}{\lambda_1} - \dfrac{1}{\lambda_2}}$.`,
          t`The difference of wavelengths is $\dfrac{v}{n_1} - \dfrac{v}{n_2}$: work out each one first.`,
        ],
      },
      {
        title: "A series of forks",
        points: [
          t`$k$ forks in order, each giving $N$ beats with the next, span $k - 1$ gaps.`,
          t`So the last differs from the first by $(k - 1)N$.`,
          t`The $j$th fork is $j - 1$ gaps from the first.`,
        ],
      },
    ],
    worked: {
      prompt: t`Fork A, of frequency $512\ \mathrm{Hz}$, gives $4$ beats per second with fork B. When B is loaded with a little wax, the beats rise to $6$ per second. What is B's frequency?`,
      steps: [
        t`$n_B = 512 \pm 4$: either $516\ \mathrm{Hz}$ or $508\ \mathrm{Hz}$.`,
        t`Wax lowers $n_B$.`,
        t`From $516\ \mathrm{Hz}$ a lower $n_B$ moves towards $512$: fewer beats. From $508\ \mathrm{Hz}$ it moves away: more beats.`,
        t`The beats rose, so $n_B = 508\ \mathrm{Hz}$.`,
      ],
      answer: t`$508\ \mathrm{Hz}$`,
    },
    visualSpec: t`Play two tones a few hertz apart, show their sum swelling and shrinking, and slide one frequency to change the beat rate.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Gives the beat frequency as the time between maxima.",
      remediation: t`$N = 4$ beats per second means a beat every $\dfrac{1}{4}\ \mathrm{s}$: the time is $\dfrac{1}{N}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M2",
      mistake: t`Counts every rise and every fall as a beat, so that $N = 2\left|n_1 - n_2\right|$.`,
      remediation: t`One beat is one full rise and fall: $N = \left|n_1 - n_2\right|$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M3",
      mistake: "Uses the average frequency, the pitch heard, for the beats.",
      remediation: t`The note heard is near $\dfrac{n_1 + n_2}{2}$, but its loudness throbs at the difference, $\left|n_1 - n_2\right|$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M4",
      mistake: "Leaves the wavelengths in cm.",
      remediation: t`With $v$ in m/s, put the wavelengths in metres: $81\ \mathrm{cm} = 0.81\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M5",
      mistake: "Subtracts the wavelengths instead of the frequencies.",
      remediation: t`Beats count the difference of frequencies, $\dfrac{v}{\lambda_1} - \dfrac{v}{\lambda_2}$, not of wavelengths.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M6",
      mistake: "Adds the two frequencies to get the beats.",
      remediation: t`Beats come from one wave gaining on the other: $N = n_1 - n_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M7",
      mistake: t`Takes the difference of wavelengths as $\dfrac{v}{n_2 - n_1}$.`,
      remediation: t`$\dfrac{v}{N}$ is the wavelength of a sound of frequency $N$; the difference is $\dfrac{v}{n_1} - \dfrac{v}{n_2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M8",
      mistake: t`Takes the difference of wavelengths as $\dfrac{n_2 - n_1}{v}$.`,
      remediation: t`$\lambda = \dfrac{v}{n}$, so subtract $\dfrac{v}{n_1} - \dfrac{v}{n_2}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C13-M9",
      mistake: "Gives one wavelength instead of the difference.",
      remediation: t`Find both, $\dfrac{v}{n_1}$ and $\dfrac{v}{n_2}$, and subtract.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M10",
      mistake: "Counts the forks instead of the gaps between them.",
      remediation: t`$k$ forks in a row have $k - 1$ gaps, so the last differs from the first by $(k - 1)N$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M11",
      mistake: "Gives the last fork's frequency instead of the first's.",
      remediation: "The last fork is twice the first: halve it, or solve for the first directly.",
      fallback: { kind: "none" },
    },
    {
      id: "C13-M12",
      mistake: t`Counts $j$ steps from the first fork to the $j$th.`,
      remediation: t`The $j$th fork is $j - 1$ steps from the first: the 2nd is one step on.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2020-february/Q.1(x)" },
      stem: t`Two tuning forks of frequencies $450\ \mathrm{Hz}$ and $454\ \mathrm{Hz}$ are sounded together. What is the time between two successive maxima of loudness?`,
      verify: { kind: "value", inputs: { n1: "450", n2: "454" }, params: { ask: "period" } },
      options: [
        { key: "A", text: t`$0.25\ \mathrm{s}$`, correct: true, value: "0.250000000000000" },
        { key: "B", text: t`$4\ \mathrm{s}$`, correct: false, misconceptionId: "C13-M1", value: "4" },
        { key: "C", text: t`$0.125\ \mathrm{s}$`, correct: false, misconceptionId: "C13-M2", value: "0.125000000000000" },
        { key: "D", text: t`$0.00221\ \mathrm{s}$`, correct: false, misconceptionId: "C13-M3", value: "0.00221000000000000" },
      ],
      solution: {
        steps: [
          t`$N = 454 - 450 = 4$ beats per second.`,
          t`Successive maxima are $\dfrac{1}{N} = \dfrac{1}{4} = 0.25\ \mathrm{s}$ apart.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Solved Ex.6.12" },
      stem: t`Two sound waves of wavelengths $81\ \mathrm{cm}$ and $82.5\ \mathrm{cm}$ produce $8$ beats per second. What is the speed of sound in air?`,
      verify: { kind: "value", inputs: { l1_cm: "81", l2_cm: "82.5", N: "8" }, params: { ask: "v_lam" } },
      options: [
        { key: "A", text: t`$356\ \mathrm{m/s}$`, correct: true, value: "356" },
        { key: "B", text: t`$35600\ \mathrm{m/s}$`, correct: false, misconceptionId: "C13-M4", value: "35600" },
        { key: "C", text: t`$0.12\ \mathrm{m/s}$`, correct: false, misconceptionId: "C13-M5", value: "0.120000000000000" },
        { key: "D", text: t`$3.27\ \mathrm{m/s}$`, correct: false, misconceptionId: "C13-M6", value: "3.27000000000000" },
      ],
      solution: {
        steps: [
          t`The shorter wavelength has the higher frequency: $\dfrac{v}{0.81} - \dfrac{v}{0.825} = 8$.`,
          t`$v\left(\dfrac{0.825 - 0.81}{0.81 \times 0.825}\right) = 8$.`,
          t`$v = \dfrac{8 \times 0.81 \times 0.825}{0.015} \approx 356\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2024-february/Q.13" },
      stem: t`Two tuning forks of frequencies $320\ \mathrm{Hz}$ and $340\ \mathrm{Hz}$ are sounded together in air, where sound travels at $340\ \mathrm{m/s}$. What is the difference between the wavelengths of their waves?`,
      verify: { kind: "value", inputs: { n1: "320", n2: "340", v: "340" }, params: { ask: "dlam" } },
      options: [
        { key: "A", text: t`$1.06\ \mathrm{m}$`, correct: false, misconceptionId: "C13-M9", value: "1.06000000000000" },
        { key: "B", text: t`$0.0625\ \mathrm{m}$`, correct: true, value: "0.0625000000000000" },
        { key: "C", text: t`$17\ \mathrm{m}$`, correct: false, misconceptionId: "C13-M7", value: "17" },
        { key: "D", text: t`$0.0588\ \mathrm{m}$`, correct: false, misconceptionId: "C13-M8", value: "0.0588000000000000" },
      ],
      solution: {
        steps: [
          t`$\lambda_1 = \dfrac{340}{320} = 1.0625\ \mathrm{m}$ and $\lambda_2 = \dfrac{340}{340} = 1\ \mathrm{m}$.`,
          t`$\lambda_1 - \lambda_2 = 0.0625\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.21" },
      stem: t`Eight tuning forks are arranged in order of increasing frequency. Each gives $4$ beats per second with the next, and the last has twice the frequency of the first. What is the frequency of the first fork?`,
      verify: { kind: "value", inputs: { k: "8", N: "4" }, params: { ask: "series_first" } },
      options: [
        { key: "A", text: t`$32\ \mathrm{Hz}$`, correct: false, misconceptionId: "C13-M10", value: "32" },
        { key: "B", text: t`$14\ \mathrm{Hz}$`, correct: false, misconceptionId: "C13-M2", value: "14" },
        { key: "C", text: t`$56\ \mathrm{Hz}$`, correct: false, misconceptionId: "C13-M11", value: "56" },
        { key: "D", text: t`$28\ \mathrm{Hz}$`, correct: true, value: "28" },
      ],
      solution: {
        steps: [
          t`Let the first be $n$. Eight forks have 7 gaps of $4\ \mathrm{Hz}$, so the last is $n + 28$.`,
          t`$n + 28 = 2n$, so $n = 28\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.3OR" },
      stem: t`Forty-eight tuning forks are arranged in order of decreasing frequency. Each gives $4$ beats per second with the one before it, and the first has $1.5$ times the frequency of the last. What is the frequency of the 42nd fork?`,
      verify: { kind: "value", inputs: { k: "48", N: "4", r: "3/2", j: "42" }, params: { ask: "series_j" } },
      options: [
        { key: "A", text: t`$400\ \mathrm{Hz}$`, correct: true, value: "400" },
        { key: "B", text: t`$412\ \mathrm{Hz}$`, correct: false, misconceptionId: "C13-M10", value: "412" },
        { key: "C", text: t`$200\ \mathrm{Hz}$`, correct: false, misconceptionId: "C13-M2", value: "200" },
        { key: "D", text: t`$396\ \mathrm{Hz}$`, correct: false, misconceptionId: "C13-M12", value: "396" },
      ],
      solution: {
        steps: [
          t`Let the last be $n$. Forty-eight forks have 47 gaps of $4\ \mathrm{Hz}$, so the first is $n + 188$.`,
          t`$n + 188 = 1.5n$, so $n = 376\ \mathrm{Hz}$ and the first is $564\ \mathrm{Hz}$.`,
          t`The 42nd is 41 gaps after the first: $564 - 41 \times 4 = 400\ \mathrm{Hz}$.`,
        ],
      },
    },
  ],
};
