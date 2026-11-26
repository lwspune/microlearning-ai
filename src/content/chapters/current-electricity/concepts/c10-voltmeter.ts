import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Connect a voltmeter across a cell of emf $2\ \mathrm{V}$ and it may read only $1.5\ \mathrm{V}$. Is the meter faulty?`,
    reveal: t`No: the voltmeter draws a current, which drops some voltage inside the cell. A good voltmeter has a very large resistance so that it draws almost nothing; an ideal one, infinite resistance.`,
  },
  explanation: {
    intuition: [
      t`A **voltmeter** goes in parallel across the part whose potential difference it measures.`,
      t`It should draw as little current as possible, so it needs a very large resistance.`,
      t`A galvanometer becomes a voltmeter with a large resistance $X$ in **series** with its coil.`,
      t`Full-scale deflection then needs a potential difference $V = I_g\left(G + X\right)$, the meter's range.`,
    ],
    formal: [
      {
        title: "The series resistance",
        points: [
          t`At full scale the current is $I_g$ through $G$ and $X$ in series.`,
          t`$V = I_g\left(G + X\right)$, so $X = \dfrac{V}{I_g} - G$.`,
          t`The voltmeter's resistance is $G + X = \dfrac{V}{I_g}$: very large for a sensitive galvanometer.`,
        ],
      },
      {
        title: "A real voltmeter",
        points: [
          t`Across a cell of emf $\varepsilon$ and internal resistance $r$, a voltmeter of resistance $R_V$ draws $I = \dfrac{\varepsilon}{R_V + r}$.`,
          t`It reads the terminal potential difference $IR_V = \dfrac{\varepsilon R_V}{R_V + r}$, less than $\varepsilon$.`,
          t`The larger $R_V$, the closer the reading to $\varepsilon$; an ideal voltmeter has infinite resistance.`,
        ],
      },
    ],
    worked: {
      prompt: t`A galvanometer of resistance $20\ \Omega$ gives full-scale deflection at $5\ \mathrm{mA}$. Make it a voltmeter of range $0$ to $5\ \mathrm{V}$.`,
      steps: [
        t`$\dfrac{V}{I_g} = \dfrac{5}{0.005} = 1000\ \Omega$, the voltmeter's total resistance.`,
        t`$X = 1000 - 20 = 980\ \Omega$.`,
        t`Connect $980\ \Omega$ in series with the galvanometer.`,
      ],
      answer: t`$980\ \Omega$ in series`,
    },
    visualSpec: t`Add a series resistor to a galvanometer and watch the voltage needed for full-scale deflection climb.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Forgets to subtract the galvanometer's own resistance.",
      remediation: t`$\dfrac{V}{I_g}$ is the total resistance $G + X$; the added resistance is $X = \dfrac{V}{I_g} - G$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: t`Adds $G$ instead of subtracting it.`,
      remediation: t`The coil already supplies $G$ of the total $\dfrac{V}{I_g}$, so less needs adding: $X = \dfrac{V}{I_g} - G$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Takes microamperes as milliamperes.",
      remediation: t`$25\ \mu\mathrm{A} = 25 \times 10^{-6}\ \mathrm{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: t`Divides by $G$ as well: $X = \dfrac{V}{I_gG}$.`,
      remediation: t`$V = I_g\left(G + X\right)$: divide by $I_g$, then subtract $G$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Takes the voltmeter's reading as the full emf.",
      remediation: t`A real voltmeter draws current, so some voltage is lost inside the cell: it reads $\dfrac{\varepsilon R_V}{R_V + r}$.`,
      fallback: { kind: "ext", topic: "emf and terminal potential difference (Std XI Physics)" },
    },
    {
      id: "C10-M6",
      mistake: "Gives the drop across the internal resistance instead of the reading.",
      remediation: t`The voltmeter reads the potential difference across itself, $IR_V$, not $Ir$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: t`Takes the reading as $\dfrac{\varepsilon R_V}{r}$.`,
      remediation: t`The current is $\dfrac{\varepsilon}{R_V + r}$: the two resistances are in series, so add them.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Thinks an ideal voltmeter has zero resistance.",
      remediation: "Zero resistance is the ideal ammeter. A voltmeter in parallel must draw no current: infinite resistance.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Thinks a voltmeter should match the resistance it is connected across.",
      remediation: "An equal resistance in parallel would halve that branch's resistance and upset the circuit; the voltmeter's must be far larger.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Thinks a voltmeter's resistance is its galvanometer's.",
      remediation: t`The series resistance $X$ makes it $G + X$, many times larger than $G$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Solved Ex.9.9" },
      stem: t`A galvanometer of resistance $25\ \Omega$ gives full-scale deflection at $25\ \mu\mathrm{A}$. What resistance must be added in series to make it a voltmeter of range $0$ to $10\ \mathrm{V}$?`,
      verify: { kind: "value", inputs: { G: "25", Ig_uA: "25", V: "10" }, params: { ask: "series_uA", sf: "6" } },
      options: [
        { key: "A", text: t`$4 \times 10^{5}\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C10-M1", value: "400000" },
        { key: "B", text: t`$4.00025 \times 10^{5}\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C10-M2", value: "400025" },
        { key: "C", text: t`$375\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C10-M3", value: "375" },
        { key: "D", text: t`$3.99975 \times 10^{5}\ \mathrm{\Omega}$`, correct: true, value: "399975" },
      ],
      solution: {
        steps: [
          t`$\dfrac{V}{I_g} = \dfrac{10}{25 \times 10^{-6}} = 4 \times 10^5\ \Omega$.`,
          t`$X = 4 \times 10^5 - 25 = 399975\ \Omega$, in series.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2025-february/Q.24" },
      stem: t`A galvanometer of resistance $50\ \Omega$ needs $2\ \mathrm{mA}$ for full-scale deflection. What resistance must be added in series to make it a voltmeter of range $10\ \mathrm{V}$?`,
      verify: { kind: "value", inputs: { G: "50", Ig_mA: "2", V: "10" }, params: { ask: "series_mA" } },
      options: [
        { key: "A", text: t`$4950\ \mathrm{\Omega}$`, correct: true, value: "4950" },
        { key: "B", text: t`$5000\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C10-M1", value: "5000" },
        { key: "C", text: t`$5050\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C10-M2", value: "5050" },
        { key: "D", text: t`$100\ \mathrm{\Omega}$`, correct: false, misconceptionId: "C10-M4", value: "100" },
      ],
      solution: {
        steps: [
          t`$\dfrac{V}{I_g} = \dfrac{10}{0.002} = 5000\ \Omega$.`,
          t`$X = 5000 - 50 = 4950\ \Omega$, in series.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.12" },
      stem: t`A voltmeter of resistance $30\ \Omega$ is connected across a cell of emf $2\ \mathrm{V}$ and internal resistance $10\ \Omega$. What does it read?`,
      verify: { kind: "value", inputs: { Rv: "30", e: "2", r: "10" }, params: { ask: "reading" } },
      options: [
        { key: "A", text: t`$6\ \mathrm{V}$`, correct: false, misconceptionId: "C10-M7", value: "6" },
        { key: "B", text: t`$1.5\ \mathrm{V}$`, correct: true, value: "1.50000000000000" },
        { key: "C", text: t`$2\ \mathrm{V}$`, correct: false, misconceptionId: "C10-M5", value: "2" },
        { key: "D", text: t`$0.5\ \mathrm{V}$`, correct: false, misconceptionId: "C10-M6", value: "0.500000000000000" },
      ],
      solution: {
        steps: [
          t`$I = \dfrac{\varepsilon}{R_V + r} = \dfrac{2}{40} = 0.05\ \mathrm{A}$.`,
          t`Reading $= IR_V = 0.05 \times 30 = 1.5\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/current-electricity-12-phy/Ex Q.20" },
      stem: t`A voltmeter of resistance $100\ \Omega$ is connected across a cell of emf $2\ \mathrm{V}$ and internal resistance $20\ \Omega$. What does it read?`,
      verify: { kind: "value", inputs: { Rv: "100", e: "2", r: "20" }, params: { ask: "reading" } },
      options: [
        { key: "A", text: t`$0.333\ \mathrm{V}$`, correct: false, misconceptionId: "C10-M6", value: "0.333000000000000" },
        { key: "B", text: t`$10\ \mathrm{V}$`, correct: false, misconceptionId: "C10-M7", value: "10" },
        { key: "C", text: t`$1.67\ \mathrm{V}$`, correct: true, value: "1.67000000000000" },
        { key: "D", text: t`$2\ \mathrm{V}$`, correct: false, misconceptionId: "C10-M5", value: "2" },
      ],
      solution: {
        steps: [
          t`$I = \dfrac{2}{100 + 20} = \dfrac{1}{60}\ \mathrm{A}$.`,
          t`Reading $= \dfrac{100}{60} \approx 1.67\ \mathrm{V}$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2023-february/Q.2(i)" },
      stem: t`What is the resistance of an ideal voltmeter?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ideal" } },
      options: [
        { key: "A", text: t`Infinite`, correct: true, value: "infinite" },
        { key: "B", text: t`Zero`, correct: false, misconceptionId: "C10-M8", value: "zero" },
        { key: "C", text: t`Equal to the resistance it is connected across`, correct: false, misconceptionId: "C10-M9", value: "circuit" },
        { key: "D", text: t`Equal to the resistance of its galvanometer`, correct: false, misconceptionId: "C10-M10", value: "galvanometer" },
      ],
      solution: {
        steps: [
          t`A voltmeter in parallel must not draw current, or it changes the voltage it measures.`,
          t`So an ideal voltmeter has infinite resistance.`,
        ],
      },
    },
  ],
};
