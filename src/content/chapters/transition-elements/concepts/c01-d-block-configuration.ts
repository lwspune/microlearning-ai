import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Potassium puts its last electron in $4s$, not $3d$, so $4s$ fills first. Yet when cobalt forms $\ce{Co^2+}$, the two electrons it loses come from $4s$, not $3d$. Why does the subshell that fills first also empty first?`,
    reveal: t`Once $3d$ holds electrons, it is pulled in closer to the nucleus and drops below $4s$ in energy. The $4s$ electrons are then the outermost and highest in energy, so an ion always loses them first: $\ce{Co^2+}$ is $[\mathrm{Ar}]\,3d^7\,4s^0$.`,
  },
  explanation: {
    intuition: [
      t`In the **d-block**, the last electron enters a $d$ subshell of the shell below the outermost one.`,
      t`So the outer $ns$ subshell stays the same while the inner $(n-1)d$ fills across a series.`,
      t`From scandium to zinc, the ten elements add $3d$ electrons one by one behind a $4s$ pair.`,
      t`Half-filled ($d^5$) and full ($d^{10}$) subshells are extra stable, so Cr and Cu bend the pattern.`,
      t`When an atom forms a positive ion, it loses its outermost $4s$ electrons before any $3d$ electron.`,
    ],
    formal: [
      {
        title: "The four d-block series",
        points: [
          t`The general configuration is $(n-1)d^{1-10}\,ns^{1-2}$.`,
          t`The **3d series** runs from Sc ($Z = 21$) to Zn ($Z = 30$), filling $3d$ after $4s$.`,
          t`The **4d series** (Y to Cd) fills $4d$, and the **5d series** (La, Hf to Hg) fills $5d$.`,
          t`The **6d series** begins with Ac and is incomplete.`,
          t`A **transition element** has a partly filled $d$ subshell in the atom or in a common ion.`,
          t`Zn, Cd and Hg are $d^{10}$ in the atom and in their ions, so they are not typical transition elements.`,
        ],
      },
      {
        title: "Configurations of the 3d series",
        points: [
          t`Beyond the argon core, $[\mathrm{Ar}]$, the atoms are $3d^{1}\,4s^2$ (Sc) to $3d^{10}\,4s^2$ (Zn).`,
          t`Chromium is $[\mathrm{Ar}]\,3d^5\,4s^1$, not $3d^4\,4s^2$: the half-filled $3d^5$ is extra stable.`,
          t`Copper is $[\mathrm{Ar}]\,3d^{10}\,4s^1$, not $3d^9\,4s^2$: the full $3d^{10}$ is extra stable.`,
          t`$3d$ and $4s$ are close in energy, so one electron moves to $3d$ to reach that stability.`,
        ],
      },
      {
        title: "Configurations of the ions",
        points: [
          t`Once filled, $3d$ lies below $4s$, so the $4s$ electrons are removed first.`,
          t`Only when $4s$ is empty are $3d$ electrons removed.`,
          t`$\ce{Co^2+}$: Co $3d^7\,4s^2$ loses both $4s$ electrons, giving $[\mathrm{Ar}]\,3d^7\,4s^0$.`,
          t`$\ce{Co^3+}$ loses one $3d$ electron more: $[\mathrm{Ar}]\,3d^6\,4s^0$.`,
          t`$\ce{Zn^2+}$: Zn $3d^{10}\,4s^2$ loses its $4s$ pair, giving $3d^{10}\,4s^0$.`,
          t`A cation of charge $+q$ has $q$ electrons fewer than its atom; never add them.`,
        ],
      },
    ],
    worked: {
      prompt: t`Manganese has $Z = 25$. Write the configurations of manganese and of the $\ce{Mn^2+}$ ion.`,
      steps: [
        t`Mn has $25 - 18 = 7$ electrons beyond the argon core.`,
        t`Two fill $4s$ and five go into $3d$: Mn is $[\mathrm{Ar}]\,3d^5\,4s^2$.`,
        t`$\ce{Mn^2+}$ has two electrons fewer, and they come from the outer $4s$.`,
        t`So $\ce{Mn^2+}$ is $[\mathrm{Ar}]\,3d^5\,4s^0$, with a half-filled $3d$ subshell.`,
      ],
      answer: t`Mn $[\mathrm{Ar}]\,3d^5\,4s^2$; $\ce{Mn^2+}$ $[\mathrm{Ar}]\,3d^5\,4s^0$`,
    },
    visualSpec: t`Drag electrons into 3d and 4s boxes from Sc to Zn, watch Cr and Cu jump to d5 and d10, then pull electrons off to form ions, 4s first.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Fills strictly by the Aufbau order, missing the exceptions: Cr $3d^4\,4s^2$ and Cu $3d^9\,4s^2$.`,
      remediation: t`Chromium and copper move one $4s$ electron into $3d$: Cr is $3d^5\,4s^1$ and Cu is $3d^{10}\,4s^1$, because half-filled and full $d$ subshells are extra stable.`,
      fallback: { kind: "ext", topic: "electronic configuration (Std XI Chemistry)" },
    },
    {
      id: "C01-M2",
      mistake: t`Removes the ion's electrons from $3d$ first, because $3d$ fills after $4s$.`,
      remediation: t`Once $3d$ holds electrons it lies below $4s$, so an ion loses its $4s$ electrons first and only then $3d$ electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Puts every electron beyond argon into $3d$, as if $(n-1)d$ filled before $ns$.`,
      remediation: t`In the atoms, $4s$ is occupied: the general configuration is $(n-1)d^{1-10}\,ns^{1-2}$, so cobalt is $3d^7\,4s^2$.`,
      fallback: { kind: "ext", topic: "electronic configuration (Std XI Chemistry)" },
    },
    {
      id: "C01-M4",
      mistake: t`Adds electrons for a positive ion, writing $\ce{M^q+}$ with $Z + q$ electrons.`,
      remediation: t`A positive ion has lost electrons: $\ce{M^q+}$ has $Z - q$ electrons, $q$ fewer than the atom.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Thinks an ion loses only its $4s$ electrons, whatever its charge, so the $3d$ count stays the atom's.`,
      remediation: t`The charge says how many electrons go: after the $4s$ electrons, the rest come from $3d$. $\ce{Co^3+}$ loses two $4s$ electrons and one $3d$ electron.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.1 (vi)" },
      stem: t`What are the electronic configurations of copper ($Z = 29$) and of the $\ce{Cu+}$ ion?`,
      verify: { kind: "value", inputs: {  }, params: { Z: "29", q: "1", ask: "pair" } },
      options: [
        { key: "A", text: t`Cu: $[\mathrm{Ar}]\,3d^{10}\,4s^{1}$; $\ce{Cu+}$: $[\mathrm{Ar}]\,3d^{10}\,4s^{0}$`, correct: true, value: "d10s1_d10s0" },
        { key: "B", text: t`Cu: $[\mathrm{Ar}]\,3d^{9}\,4s^{2}$; $\ce{Cu+}$: $[\mathrm{Ar}]\,3d^{9}\,4s^{1}$`, correct: false, misconceptionId: "C01-M1", value: "d9s2_d9s1" },
        { key: "C", text: t`Cu: $[\mathrm{Ar}]\,3d^{10}\,4s^{1}$; $\ce{Cu+}$: $[\mathrm{Ar}]\,3d^{9}\,4s^{1}$`, correct: false, misconceptionId: "C01-M2", value: "d10s1_d9s1" },
        { key: "D", text: t`Cu: $[\mathrm{Ar}]\,3d^{10}\,4s^{1}$; $\ce{Cu+}$: $[\mathrm{Ar}]\,3d^{10}\,4s^{2}$`, correct: false, misconceptionId: "C01-M4", value: "d10s1_d10s2" },
      ],
      solution: {
        steps: [
          t`Cu has $29 - 18 = 11$ electrons beyond argon; a full $3d^{10}$ is extra stable, so Cu is $[\mathrm{Ar}]\,3d^{10}\,4s^1$.`,
          t`$\ce{Cu+}$ has one electron fewer, taken from the outer $4s$.`,
          t`So $\ce{Cu+}$ is $[\mathrm{Ar}]\,3d^{10}\,4s^0$.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#12" },
      stem: t`What are the electronic configurations of chromium ($Z = 24$) and of the $\ce{Cr^2+}$ ion?`,
      verify: { kind: "value", inputs: {  }, params: { Z: "24", q: "2", ask: "pair" } },
      options: [
        { key: "A", text: t`Cr: $[\mathrm{Ar}]\,3d^{4}\,4s^{2}$; $\ce{Cr^2+}$: $[\mathrm{Ar}]\,3d^{4}\,4s^{0}$`, correct: false, misconceptionId: "C01-M1", value: "d4s2_d4s0" },
        { key: "B", text: t`Cr: $[\mathrm{Ar}]\,3d^{5}\,4s^{1}$; $\ce{Cr^2+}$: $[\mathrm{Ar}]\,3d^{4}\,4s^{0}$`, correct: true, value: "d5s1_d4s0" },
        { key: "C", text: t`Cr: $[\mathrm{Ar}]\,3d^{6}\,4s^{0}$; $\ce{Cr^2+}$: $[\mathrm{Ar}]\,3d^{4}\,4s^{0}$`, correct: false, misconceptionId: "C01-M3", value: "d6s0_d4s0" },
        { key: "D", text: t`Cr: $[\mathrm{Ar}]\,3d^{5}\,4s^{1}$; $\ce{Cr^2+}$: $[\mathrm{Ar}]\,3d^{5}\,4s^{0}$`, correct: false, misconceptionId: "C01-M5", value: "d5s1_d5s0" },
      ],
      solution: {
        steps: [
          t`Cr has $24 - 18 = 6$ electrons beyond argon; a half-filled $3d^5$ is extra stable, so Cr is $[\mathrm{Ar}]\,3d^5\,4s^1$.`,
          t`$\ce{Cr^2+}$ loses two electrons: first the single $4s$ electron, then one $3d$ electron.`,
          t`So $\ce{Cr^2+}$ is $[\mathrm{Ar}]\,3d^4\,4s^0$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (iv)" },
      stem: t`Iron has $Z = 26$. What is the electronic configuration of the $\ce{Fe^3+}$ ion?`,
      verify: { kind: "value", inputs: {  }, params: { Z: "26", q: "3", ask: "ion" } },
      options: [
        { key: "A", text: t`$[\mathrm{Ar}]\,3d^{10}\,4s^{1}$`, correct: false, misconceptionId: "C01-M4", value: "d10s1" },
        { key: "B", text: t`$[\mathrm{Ar}]\,3d^{6}\,4s^{0}$`, correct: false, misconceptionId: "C01-M5", value: "d6s0" },
        { key: "C", text: t`$[\mathrm{Ar}]\,3d^{5}\,4s^{0}$`, correct: true, value: "d5s0" },
        { key: "D", text: t`$[\mathrm{Ar}]\,3d^{3}\,4s^{2}$`, correct: false, misconceptionId: "C01-M2", value: "d3s2" },
      ],
      solution: {
        steps: [
          t`Fe is $[\mathrm{Ar}]\,3d^6\,4s^2$, and $\ce{Fe^3+}$ has three electrons fewer.`,
          t`The two $4s$ electrons go first, then one $3d$ electron.`,
          t`So $\ce{Fe^3+}$ is $[\mathrm{Ar}]\,3d^5\,4s^0$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.1 (vii)" },
      stem: t`Vanadium has $Z = 23$. What is the electronic configuration of the $\ce{V^3+}$ ion?`,
      verify: { kind: "value", inputs: {  }, params: { Z: "23", q: "3", ask: "ion" } },
      options: [
        { key: "A", text: t`$[\mathrm{Ar}]\,3d^{0}\,4s^{2}$`, correct: false, misconceptionId: "C01-M2", value: "d0s2" },
        { key: "B", text: t`$[\mathrm{Ar}]\,3d^{6}\,4s^{2}$`, correct: false, misconceptionId: "C01-M4", value: "d6s2" },
        { key: "C", text: t`$[\mathrm{Ar}]\,3d^{3}\,4s^{0}$`, correct: false, misconceptionId: "C01-M5", value: "d3s0" },
        { key: "D", text: t`$[\mathrm{Ar}]\,3d^{2}\,4s^{0}$`, correct: true, value: "d2s0" },
      ],
      solution: {
        steps: [
          t`V has $23 - 18 = 5$ electrons beyond argon: $[\mathrm{Ar}]\,3d^3\,4s^2$.`,
          t`$\ce{V^3+}$ loses three: the two $4s$ electrons, then one $3d$ electron.`,
          t`So $\ce{V^3+}$ is $[\mathrm{Ar}]\,3d^2\,4s^0$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#5" },
      stem: t`Iron ($Z = 26$) shows the $+2$ state. What are the electronic configurations of iron and of the $\ce{Fe^2+}$ ion?`,
      verify: { kind: "value", inputs: {  }, params: { Z: "26", q: "2", ask: "pair" } },
      options: [
        { key: "A", text: t`Fe: $[\mathrm{Ar}]\,3d^{6}\,4s^{2}$; $\ce{Fe^2+}$: $[\mathrm{Ar}]\,3d^{4}\,4s^{2}$`, correct: false, misconceptionId: "C01-M2", value: "d6s2_d4s2" },
        { key: "B", text: t`Fe: $[\mathrm{Ar}]\,3d^{6}\,4s^{2}$; $\ce{Fe^2+}$: $[\mathrm{Ar}]\,3d^{6}\,4s^{0}$`, correct: true, value: "d6s2_d6s0" },
        { key: "C", text: t`Fe: $[\mathrm{Ar}]\,3d^{8}\,4s^{0}$; $\ce{Fe^2+}$: $[\mathrm{Ar}]\,3d^{6}\,4s^{0}$`, correct: false, misconceptionId: "C01-M3", value: "d8s0_d6s0" },
        { key: "D", text: t`Fe: $[\mathrm{Ar}]\,3d^{6}\,4s^{2}$; $\ce{Fe^2+}$: $[\mathrm{Ar}]\,3d^{8}\,4s^{2}$`, correct: false, misconceptionId: "C01-M4", value: "d6s2_d8s2" },
      ],
      solution: {
        steps: [
          t`Fe has $26 - 18 = 8$ electrons beyond argon: two in $4s$ and six in $3d$, $[\mathrm{Ar}]\,3d^6\,4s^2$.`,
          t`$\ce{Fe^2+}$ loses its two outer $4s$ electrons.`,
          t`So $\ce{Fe^2+}$ is $[\mathrm{Ar}]\,3d^6\,4s^0$.`,
        ],
      },
    },
  ],
};
