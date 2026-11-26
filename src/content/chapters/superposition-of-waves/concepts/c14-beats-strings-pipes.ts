import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c14: Concept = {
  id: "C14",
  status: "approved",
  hook: {
    prompt: t`A sitar player tunes a string against a reference note, listening for the throbbing to slow down and stop. How do beats guide the tuning?`,
    reveal: t`The beat rate is the difference of the two frequencies. Tightening the string changes its frequency; the beats slow as the two notes close in, and vanish when they match.`,
  },
  explanation: {
    intuition: [
      t`A string or a pipe sounding with a fork, or two pipes together, give beats when their notes are close.`,
      t`Each frequency comes from its own formula: $\dfrac{1}{2l}\sqrt{\dfrac{T}{m}}$ for a string, $\dfrac{v}{2L}$ or $\dfrac{v}{4L}$ for a pipe.`,
      t`Change a length or a tension slightly and the frequency moves away from the fork's: beats appear.`,
      t`The beat count then tells you a frequency, or the speed of sound.`,
    ],
    formal: [
      {
        title: "Two pipes together",
        points: [
          t`Open pipes: $n_1 = \dfrac{v}{2L_1}$ and $n_2 = \dfrac{v}{2L_2}$; closed pipes, $\dfrac{v}{4L}$ in each.`,
          t`The shorter pipe has the higher note: $N = n_1 - n_2$ with $L_1 < L_2$.`,
          t`Solve $N = \dfrac{v}{2L_1} - \dfrac{v}{2L_2}$ for $v$, with the lengths in metres.`,
        ],
      },
      {
        title: "A wire against a fork",
        points: [
          t`**In unison** means the wire's frequency equals the fork's: $n_1 = n_0$.`,
          t`Change the tension: $n_2 = n_1\sqrt{\dfrac{T_2}{T_1}}$. Change the length: $n_2 = n_1\dfrac{l_1}{l_2}$.`,
          t`The beats per second are $\left|n_1 - n_2\right|$; in $t$ seconds there are $t$ times as many.`,
          t`A $5\%$ longer wire has $n_2 = \dfrac{n_1}{1.05}$, not $0.95n_1$.`,
        ],
      },
      {
        title: "Which side of the fork",
        points: [
          t`Beats give only the size of the difference: the other note is $n_0 + N$ or $n_0 - N$.`,
          t`Lengthening a pipe or a wire, or slackening a wire, lowers its frequency.`,
          t`If the beats then speed up, the note moved away from the fork's; if they slow down, towards it.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sonometer wire $60\ \mathrm{cm}$ long is in unison with a $300\ \mathrm{Hz}$ fork. Its vibrating length is shortened to $59\ \mathrm{cm}$, with the tension unchanged. How many beats are heard per second?`,
      steps: [
        t`Law of length: $n_2 = n_1\dfrac{l_1}{l_2} = 300 \times \dfrac{60}{59}$.`,
        t`$n_2 \approx 305.1\ \mathrm{Hz}$.`,
        t`Beats: $n_2 - n_1 \approx 5.1$, so about $5$ beats per second.`,
      ],
      answer: t`About $5$ beats per second`,
    },
    visualSpec: t`Slide a wire's tension or a pipe's length against a fixed fork and watch the beat rate fall to zero at unison.`,
  },
  misconceptions: [
    {
      id: "C14-M1",
      mistake: "Uses the other kind of pipe's formula.",
      remediation: t`Open at both ends: $n = \dfrac{v}{2L}$. Closed at one end: $n = \dfrac{v}{4L}$.`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C14-M2",
      mistake: t`Takes $n = \dfrac{v}{L}$, dropping the 2 or the 4.`,
      remediation: t`The fundamental fits half a wavelength in an open pipe ($\lambda = 2L$) and a quarter in a closed one ($\lambda = 4L$).`,
      fallback: { kind: "concept", id: "C11" },
    },
    {
      id: "C14-M3",
      mistake: "Leaves the lengths in cm.",
      remediation: t`With $v$ in m/s, put the lengths in metres: $50\ \mathrm{cm} = 0.5\ \mathrm{m}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M4",
      mistake: "Takes the frequency as proportional to the tension.",
      remediation: t`$n \propto \sqrt{T}$: a $3.1\%$ drop in tension lowers $n$ by only about $1.6\%$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C14-M5",
      mistake: "Gives the beats in one second, not in the time asked.",
      remediation: t`$6$ beats per second for $2\ \mathrm{s}$ is $12$ beats.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M6",
      mistake: t`Takes the frequency as proportional to $\dfrac{1}{\sqrt{T}}$ or $\dfrac{1}{\sqrt{l}}$.`,
      remediation: t`$n = \dfrac{1}{2l}\sqrt{\dfrac{T}{m}}$: $n$ rises as $\sqrt{T}$ and falls as $\dfrac{1}{l}$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C14-M7",
      mistake: t`Takes a $5\%$ longer wire as $5\%$ lower in frequency.`,
      remediation: t`$n \propto \dfrac{1}{l}$, so $n_2 = \dfrac{n_1}{1.05}$: the drop is $\dfrac{0.05}{1.05}$ of $n_1$, not $0.05$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C14-M8",
      mistake: "Counts a rise and a fall of loudness as two beats.",
      remediation: t`One beat is one full rise and fall: $N = \left|n_1 - n_2\right|$.`,
      fallback: { kind: "concept", id: "C13" },
    },
    {
      id: "C14-M9",
      mistake: "Thinks lengthening a pipe raises its frequency.",
      remediation: t`A longer pipe holds a longer wavelength: $n = \dfrac{v}{2L}$ falls as $L$ grows.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C14-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.1 (ii)" },
      stem: t`Two pipes open at both ends, $50\ \mathrm{cm}$ and $51\ \mathrm{cm}$ long, sounded together in their fundamental modes, produce $7$ beats per second. What is the speed of sound?`,
      verify: { kind: "value", inputs: { l1_cm: "50", l2_cm: "51", N: "7" }, params: { ask: "v_pipes", pipe: "open" } },
      options: [
        { key: "A", text: t`$35700\ \mathrm{m/s}$`, correct: false, misconceptionId: "C14-M3", value: "35700" },
        { key: "B", text: t`$357\ \mathrm{m/s}$`, correct: true, value: "357" },
        { key: "C", text: t`$714\ \mathrm{m/s}$`, correct: false, misconceptionId: "C14-M1", value: "714" },
        { key: "D", text: t`$178\ \mathrm{m/s}$`, correct: false, misconceptionId: "C14-M2", value: "178" },
      ],
      solution: {
        steps: [
          t`$n_1 = \dfrac{v}{2 \times 0.50} = \dfrac{v}{1.00}$ and $n_2 = \dfrac{v}{2 \times 0.51} = \dfrac{v}{1.02}$.`,
          t`$n_1 - n_2 = v\left(\dfrac{1}{1.00} - \dfrac{1}{1.02}\right) = 7$.`,
          t`$v = \dfrac{7 \times 1.02}{0.02} = 357\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C14-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.22" },
      stem: t`A sonometer wire under a tension of $40\ \mathrm{N}$ is in unison with a $384\ \mathrm{Hz}$ tuning fork. The tension is lowered by $1.24\ \mathrm{N}$. How many beats are heard in $2\ \mathrm{s}$?`,
      verify: { kind: "value", inputs: { n0: "384", T1: "40", dT: "1.24", t: "2" }, params: { ask: "tension" } },
      options: [
        { key: "A", text: t`$12$`, correct: true, value: "12" },
        { key: "B", text: t`$23.8$`, correct: false, misconceptionId: "C14-M4", value: "23.8000000000000" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C14-M5", value: "6" },
        { key: "D", text: t`$12.2$`, correct: false, misconceptionId: "C14-M6", value: "12.2000000000000" },
      ],
      solution: {
        steps: [
          t`$n_2 = 384\sqrt{\dfrac{38.76}{40}} = 384 \times 0.9844$.`,
          t`$n_2 \approx 378\ \mathrm{Hz}$, so there are $384 - 378 = 6$ beats per second.`,
          t`In $2\ \mathrm{s}$: $12$ beats.`,
        ],
      },
    },
    {
      id: "C14-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.28" },
      stem: t`A stretched sonometer wire is in unison with a tuning fork. When the vibrating length of the wire is increased by $5\%$, $10$ beats are heard per second. What is the frequency of the fork?`,
      verify: { kind: "value", inputs: { pct: "5", N: "10" }, params: { ask: "length" } },
      options: [
        { key: "A", text: t`$210\ \mathrm{Hz}$`, correct: true, value: "210" },
        { key: "B", text: t`$415\ \mathrm{Hz}$`, correct: false, misconceptionId: "C14-M6", value: "415" },
        { key: "C", text: t`$200\ \mathrm{Hz}$`, correct: false, misconceptionId: "C14-M7", value: "200" },
        { key: "D", text: t`$105\ \mathrm{Hz}$`, correct: false, misconceptionId: "C14-M8", value: "105" },
      ],
      solution: {
        steps: [
          t`Let the fork be $n$. The longer wire has $n' = \dfrac{n}{1.05}$.`,
          t`$n - \dfrac{n}{1.05} = \dfrac{n}{21} = 10$.`,
          t`$n = 210\ \mathrm{Hz}$.`,
        ],
      },
    },
    {
      id: "C14-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.1 (ii)" },
      stem: t`Two pipes closed at one end, $32\ \mathrm{cm}$ and $33\ \mathrm{cm}$ long, sounded together in their fundamental modes, produce $8$ beats per second. What is the speed of sound?`,
      verify: { kind: "value", inputs: { l1_cm: "32", l2_cm: "33", N: "8" }, params: { ask: "v_pipes", pipe: "closed" } },
      options: [
        { key: "A", text: t`$169\ \mathrm{m/s}$`, correct: false, misconceptionId: "C14-M1", value: "169" },
        { key: "B", text: t`$84.5\ \mathrm{m/s}$`, correct: false, misconceptionId: "C14-M2", value: "84.5000000000000" },
        { key: "C", text: t`$33800\ \mathrm{m/s}$`, correct: false, misconceptionId: "C14-M3", value: "33800" },
        { key: "D", text: t`$338\ \mathrm{m/s}$`, correct: true, value: "338" },
      ],
      solution: {
        steps: [
          t`Closed pipes: $n = \dfrac{v}{4L}$, so $n_1 = \dfrac{v}{1.28}$ and $n_2 = \dfrac{v}{1.32}$.`,
          t`$v\left(\dfrac{1}{1.28} - \dfrac{1}{1.32}\right) = 8$.`,
          t`$v = \dfrac{8 \times 1.28 \times 1.32}{0.04} \approx 338\ \mathrm{m/s}$.`,
        ],
      },
    },
    {
      id: "C14-Q5",
      source: { kind: "authored" },
      stem: t`A pipe open at both ends, $0.5\ \mathrm{m}$ long, sounding its fundamental, gives $4$ beats per second with a tuning fork. When the pipe is made slightly longer, the beats become faster. What is the fork's frequency? (Speed of sound $340\ \mathrm{m/s}$.)`,
      verify: { kind: "value", inputs: { L: "0.5", v: "340", N: "4" }, params: { ask: "fork" } },
      options: [
        { key: "A", text: t`$174\ \mathrm{Hz}$`, correct: false, misconceptionId: "C14-M1", value: "174" },
        { key: "B", text: t`$684\ \mathrm{Hz}$`, correct: false, misconceptionId: "C14-M2", value: "684" },
        { key: "C", text: t`$336\ \mathrm{Hz}$`, correct: false, misconceptionId: "C14-M9", value: "336" },
        { key: "D", text: t`$344\ \mathrm{Hz}$`, correct: true, value: "344" },
      ],
      solution: {
        steps: [
          t`The pipe sounds $\dfrac{v}{2L} = \dfrac{340}{1} = 340\ \mathrm{Hz}$, so the fork is $336$ or $344\ \mathrm{Hz}$.`,
          t`Lengthening lowers the pipe's note. The beats speed up, so the note moved away from the fork's.`,
          t`The fork is above the pipe: $344\ \mathrm{Hz}$.`,
        ],
      },
    },
  ],
};
