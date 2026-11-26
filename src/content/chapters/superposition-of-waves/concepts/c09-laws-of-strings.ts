import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`A sitar player tightens a string by a quarter. Does the note rise by a quarter too?`,
    reveal: t`No: by about $12\%$. The frequency goes as the square root of the tension, $\sqrt{1.25} \approx 1.12$. That is one of the three laws of vibrating strings.`,
  },
  explanation: {
    intuition: [
      t`The formula $n = \dfrac{1}{2l}\sqrt{\dfrac{T}{m}}$ holds three laws in one.`,
      t`Change one of length, tension and linear density, keep the other two fixed, and the law tells you the new note.`,
      t`Halve the length: the note doubles.`,
      t`Make the tension four times as large: the note only doubles.`,
      t`A **sonometer** is a hollow box with a wire stretched over two bridges, built to check these laws.`,
    ],
    formal: [
      {
        title: "The three laws",
        points: [
          t`**Law of length**: $n \propto \dfrac{1}{l}$, when $T$ and $m$ are fixed.`,
          t`**Law of tension**: $n \propto \sqrt{T}$, when $l$ and $m$ are fixed.`,
          t`**Law of linear density**: $n \propto \dfrac{1}{\sqrt{m}}$, when $l$ and $T$ are fixed.`,
          t`For a wire of radius $r$ and density $\rho$, $m = \pi r^2\rho$, so $n \propto \dfrac{1}{r\sqrt{\rho}}$.`,
        ],
      },
      {
        title: "Ratio problems",
        points: [
          t`Write $n$ for both cases and divide: everything that is the same cancels.`,
          t`Same frequency, same wire: $\dfrac{l_2}{l_1} = \sqrt{\dfrac{T_2}{T_1}}$.`,
          t`Loads in kg can stay in kg in a ratio, since $g$ cancels.`,
          t`Pressing a string shortens its **vibrating length**, the part between the supports that moves.`,
        ],
      },
      {
        title: "The sonometer",
        points: [
          t`The wire runs over two bridges; the length between them is the vibrating length $l$.`,
          t`A load hung on the wire sets the tension, $T = Mg$.`,
          t`Move a bridge until the wire is in **unison**, or resonance, with a tuning fork.`,
          t`Repeat with several forks: $nl$ stays constant, which checks the law of length.`,
        ],
      },
    ],
    worked: {
      prompt: t`A sonometer wire is in unison with a $256\ \mathrm{Hz}$ fork when its vibrating length is $40\ \mathrm{cm}$. What length is in unison with a $320\ \mathrm{Hz}$ fork, and by what factor must the load change to bring $40\ \mathrm{cm}$ to $320\ \mathrm{Hz}$?`,
      steps: [
        t`Law of length: $n_1l_1 = n_2l_2$, so $l_2 = \dfrac{256 \times 40}{320}$.`,
        t`$l_2 = 32\ \mathrm{cm}$.`,
        t`Law of tension: $\dfrac{T_2}{T_1} = \left(\dfrac{n_2}{n_1}\right)^2 = \left(\dfrac{320}{256}\right)^2$.`,
        t`$\dfrac{T_2}{T_1} = 1.25^2 \approx 1.56$: about $1.56$ times the load.`,
      ],
      answer: t`$32\ \mathrm{cm}$; the load must become about $1.56$ times as large`,
    },
    visualSpec: t`Move a sonometer's bridge and change its load while a fork sounds, and watch the paper rider fly off at resonance.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Takes the frequency as proportional to the tension.",
      remediation: t`Law of tension: $n \propto \sqrt{T}$, so a $25\%$ rise in tension raises $n$ by about $12\%$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: "Takes the frequency as proportional to the square of the tension.",
      remediation: t`$n \propto \sqrt{T}$; it is the tension that goes as $n^2$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M3",
      mistake: "Thinks a tighter string sounds lower.",
      remediation: t`Tension speeds the waves up: $n \propto \sqrt{T}$ rises with $T$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Takes the frequency as proportional to the length.",
      remediation: t`Law of length: $n \propto \dfrac{1}{l}$. A higher note needs a shorter length.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Takes the frequency as proportional to $\dfrac{1}{\sqrt{l}}$.`,
      remediation: t`The square root belongs to $T$ and $m$; length enters plainly, $n \propto \dfrac{1}{l}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: "Gives the length cut off instead of the vibrating length.",
      remediation: t`The question asks for the length that vibrates: $l_2 = \dfrac{n_1l_1}{n_2}$, not $l_1 - l_2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M7",
      mistake: "Turns the tension ratio upside down.",
      remediation: t`More tension raises $n$, so the same $n$ needs a longer wire: $\dfrac{l_2}{l_1} = \sqrt{\dfrac{T_2}{T_1}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M8",
      mistake: "Adds the upthrust to the weight of the immersed load.",
      remediation: t`Water pushes the load up, so the tension falls: $T_2 = V\rho g - V\rho_wg$.`,
      fallback: { kind: "ext", topic: "Archimedes' principle (Std XI Physics)" },
    },
    {
      id: "C09-M9",
      mistake: "Turns the frequency ratio upside down.",
      remediation: t`Less tension means a lower note: $\dfrac{n_2}{n_1} = \sqrt{\dfrac{T_2}{T_1}} < 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M10",
      mistake: "Takes the linear density as proportional to the radius.",
      remediation: t`$m = \pi r^2\rho$: the mass per metre goes as the cross-section, $r^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M11",
      mistake: t`Takes the frequency as proportional to $\dfrac{1}{m}$.`,
      remediation: t`Law of linear density: $n \propto \dfrac{1}{\sqrt{m}}$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M12",
      mistake: "Thinks a thicker wire sounds higher.",
      remediation: t`A thicker wire has more mass per metre, so its waves are slower and its note lower: $n \propto \dfrac{1}{r}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.1 (iii)" },
      stem: t`The tension in a piano wire is increased by $25\%$. Its frequency becomes how many times the original frequency?`,
      verify: { kind: "value", inputs: { pct: "25" }, params: { ask: "tension_pct" } },
      options: [
        { key: "A", text: t`$1.56$`, correct: false, misconceptionId: "C09-M2", value: "1.56000000000000" },
        { key: "B", text: t`$0.8$`, correct: false, misconceptionId: "C09-M3", value: "0.800000000000000" },
        { key: "C", text: t`$1.12$`, correct: true, value: "1.12000000000000" },
        { key: "D", text: t`$1.25$`, correct: false, misconceptionId: "C09-M1", value: "1.25000000000000" },
      ],
      solution: {
        steps: [
          t`Law of tension: $\dfrac{n'}{n} = \sqrt{\dfrac{T'}{T}}$, with $T' = 1.25T$.`,
          t`$\dfrac{n'}{n} = \sqrt{1.25} \approx 1.12$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.24" },
      stem: t`A guitar string $80\ \mathrm{cm}$ long has a fundamental frequency of $112\ \mathrm{Hz}$. The guitarist presses it to sound $160\ \mathrm{Hz}$. What vibrating length is needed?`,
      verify: { kind: "value", inputs: { l1: "80", n1: "112", n2: "160" }, params: { ask: "press" } },
      options: [
        { key: "A", text: t`$56\ \mathrm{cm}$`, correct: true, value: "56" },
        { key: "B", text: t`$114\ \mathrm{cm}$`, correct: false, misconceptionId: "C09-M4", value: "114" },
        { key: "C", text: t`$39.2\ \mathrm{cm}$`, correct: false, misconceptionId: "C09-M5", value: "39.2000000000000" },
        { key: "D", text: t`$24\ \mathrm{cm}$`, correct: false, misconceptionId: "C09-M6", value: "24" },
      ],
      solution: {
        steps: [
          t`Law of length: $n_1l_1 = n_2l_2$.`,
          t`$l_2 = \dfrac{112 \times 80}{160} = 56\ \mathrm{cm}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Ex Q.14" },
      stem: t`Two wires of the same material and cross section are stretched on a sonometer, one by a load of $1.5\ \mathrm{kg}$ and the other by $6\ \mathrm{kg}$. The first has a vibrating length of $60\ \mathrm{cm}$. What vibrating length gives the second the same fundamental frequency?`,
      verify: { kind: "value", inputs: { l1: "60", M1: "3/2", M2: "6" }, params: { ask: "len_load" } },
      options: [
        { key: "A", text: t`$2.4\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M1", value: "2.40000000000000" },
        { key: "B", text: t`$9.6\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M2", value: "9.60000000000000" },
        { key: "C", text: t`$0.3\ \mathrm{m}$`, correct: false, misconceptionId: "C09-M7", value: "0.300000000000000" },
        { key: "D", text: t`$1.2\ \mathrm{m}$`, correct: true, value: "1.20000000000000" },
      ],
      solution: {
        steps: [
          t`Same frequency and linear density: $\dfrac{l_2}{l_1} = \sqrt{\dfrac{T_2}{T_1}} = \sqrt{\dfrac{6}{1.5}} = 2$.`,
          t`$l_2 = 2 \times 0.6 = 1.2\ \mathrm{m}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/superposition-waves-12-phy/Solved Ex.6.10" },
      stem: t`Two wires of the same material and cross section are stretched on a sonometer in turn. One is $60\ \mathrm{cm}$ long under an unknown load; the other is $30\ \mathrm{cm}$ long under a load of $1.5\ \mathrm{kg}$. Both have the same fundamental frequency. What is the unknown load?`,
      verify: { kind: "value", inputs: { l1: "60", l2: "30", M2: "3/2" }, params: { ask: "load_len" } },
      options: [
        { key: "A", text: t`$6\ \mathrm{kg}$`, correct: true, value: "6" },
        { key: "B", text: t`$3\ \mathrm{kg}$`, correct: false, misconceptionId: "C09-M1", value: "3" },
        { key: "C", text: t`$2.12\ \mathrm{kg}$`, correct: false, misconceptionId: "C09-M2", value: "2.12000000000000" },
        { key: "D", text: t`$0.375\ \mathrm{kg}$`, correct: false, misconceptionId: "C09-M7", value: "0.375000000000000" },
      ],
      solution: {
        steps: [
          t`Same frequency and linear density: $\dfrac{T_1}{T_2} = \left(\dfrac{l_1}{l_2}\right)^2 = \left(\dfrac{60}{30}\right)^2 = 4$.`,
          t`The unknown load is $4 \times 1.5 = 6\ \mathrm{kg}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2016-march/Q.2(v)" },
      stem: t`A sonometer wire vibrates at frequency $n_1$ under a load of specific gravity $\sigma$. The load is then immersed in water. What is the new frequency $n_2$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "immersed" } },
      options: [
        { key: "A", text: t`$n_1\sqrt{\dfrac{\sigma + 1}{\sigma}}$`, correct: false, misconceptionId: "C09-M8", value: "root_plus" },
        { key: "B", text: t`$n_1\sqrt{\dfrac{\sigma}{\sigma - 1}}$`, correct: false, misconceptionId: "C09-M9", value: "root_inv" },
        { key: "C", text: t`$n_1\sqrt{\dfrac{\sigma - 1}{\sigma}}$`, correct: true, value: "root_minus" },
        { key: "D", text: t`$n_1\dfrac{\sigma - 1}{\sigma}$`, correct: false, misconceptionId: "C09-M1", value: "lin_minus" },
      ],
      solution: {
        steps: [
          t`In air $T_1 = V\rho g$; in water the upthrust reduces it to $T_2 = Vg\left(\rho - \rho_w\right)$.`,
          t`$\dfrac{n_2}{n_1} = \sqrt{\dfrac{T_2}{T_1}} = \sqrt{\dfrac{\rho - \rho_w}{\rho}}$.`,
          t`With $\sigma = \dfrac{\rho}{\rho_w}$: $n_2 = n_1\sqrt{\dfrac{\sigma - 1}{\sigma}}$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "authored" },
      stem: t`Two wires of the same material, length and tension have radii in the ratio $1 : 2$. What is the ratio $\dfrac{n_1}{n_2}$ of their fundamental frequencies?`,
      verify: { kind: "value", inputs: { k: "2" }, params: { ask: "radius" } },
      options: [
        { key: "A", text: t`$0.5$`, correct: false, misconceptionId: "C09-M12", value: "0.500000000000000" },
        { key: "B", text: t`$2$`, correct: true, value: "2" },
        { key: "C", text: t`$1.41$`, correct: false, misconceptionId: "C09-M10", value: "1.41000000000000" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C09-M11", value: "4" },
      ],
      solution: {
        steps: [
          t`Same material: $m = \pi r^2\rho \propto r^2$, so $n \propto \dfrac{1}{\sqrt{m}} \propto \dfrac{1}{r}$.`,
          t`$\dfrac{n_1}{n_2} = \dfrac{r_2}{r_1} = 2$.`,
        ],
      },
    },
  ],
};
