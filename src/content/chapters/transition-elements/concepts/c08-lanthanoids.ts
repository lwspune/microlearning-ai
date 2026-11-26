import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`$\ce{Lu^3+}$ has 14 more electrons than $\ce{La^3+}$, yet it is the smaller ion: 100 pm against 117 pm. How can more electrons make a smaller ion?`,
    reveal: t`The 14 extra electrons go into the inner $4f$ subshell, which shields the nucleus poorly. The nuclear charge rises by 14, so the whole ion is pulled in: the lanthanoid contraction.`,
  },
  explanation: {
    intuition: [
      t`The **lanthanoids** are the series from lanthanum ($Z = 57$) to lutetium ($Z = 71$).`,
      t`Across the series, electrons enter the inner $4f$ subshell, two shells below the outer $6s$.`,
      t`So they are called **inner transition elements**, or f-block elements.`,
      t`Their chemistry is dominated by the $+3$ oxidation state.`,
      t`$4f$ electrons shield each other poorly, so the atoms shrink steadily across the series.`,
      t`This shrinking, the **lanthanoid contraction**, makes $4d$ and $5d$ partners alike in size.`,
    ],
    formal: [
      {
        title: "Electronic configuration",
        points: [
          t`General configuration: $[\mathrm{Xe}]\,4f^{1-14}\,5d^{0-1}\,6s^2$.`,
          t`Most lanthanoids are $[\mathrm{Xe}]\,4f^n\,6s^2$, with no $5d$ electron.`,
          t`La ($4f^0$), Ce ($4f^1$), Gd ($4f^7$) and Lu ($4f^{14}$) keep one $5d$ electron.`,
          t`Gd is $[\mathrm{Xe}]\,4f^7\,5d^1\,6s^2$, not $4f^8\,6s^2$: a half-filled $4f$ subshell is extra stable.`,
          t`An ion loses its $6s$ electrons first, then $5d$, then $4f$.`,
          t`So every $+3$ ion is $[\mathrm{Xe}]\,4f^n$: for example $\ce{Gd^3+}$ is $[\mathrm{Xe}]\,4f^7$.`,
        ],
      },
      {
        title: "Oxidation states",
        points: [
          t`$+3$ is the common oxidation state of every lanthanoid.`,
          t`$+2$ and $+4$ form when they leave an $f^0$, $f^7$ or $f^{14}$ configuration.`,
          t`An **oxidising agent** gains electrons; a **reducing agent** loses them.`,
          t`$\ce{Ce^4+}$ ($4f^0$) and $\ce{Tb^4+}$ ($4f^7$) gain an electron to return to $+3$: oxidising agents.`,
          t`$\ce{Eu^2+}$ ($4f^7$) and $\ce{Yb^2+}$ ($4f^{14}$) lose an electron to reach $+3$: reducing agents.`,
          t`Ce(IV) even oxidises water, $\ce{4Ce^4+ + 2H2O}$ $\ce{-> 4Ce^3+ + O2 + 4H+}$, so its solutions are kept acidic.`,
        ],
      },
      {
        title: "Magnetic properties",
        points: [
          t`Unpaired $4f$ electrons make a lanthanoid ion paramagnetic.`,
          t`Electrons fill the seven $4f$ orbitals singly first; past $f^7$ they pair up.`,
          t`So $f^n$ has $n$ unpaired electrons up to $n = 7$, and $14 - n$ after that.`,
          t`$\ce{La^3+}$ ($4f^0$) and $\ce{Lu^3+}$ ($4f^{14}$) have none, so they are diamagnetic.`,
          t`$\ce{Gd^3+}$ ($4f^7$) has the most: seven unpaired electrons.`,
        ],
      },
      {
        title: "Lanthanoid contraction",
        points: [
          t`From La to Lu, the nuclear charge rises by one at each step.`,
          t`Each added electron enters the same inner $4f$ subshell.`,
          t`Diffuse $4f$ orbitals shield one another poorly, so the effective nuclear charge rises.`,
          t`So atomic and ionic radii fall steadily across the series.`,
          t`This steady decrease in size from La to Lu is the **lanthanoid contraction**.`,
        ],
      },
      {
        title: "Effects of the contraction",
        points: [
          t`Lanthanoids are so alike in size that separating them needs methods such as ion exchange.`,
          t`The $4d$ and $5d$ members of a group, such as Zr and Hf, have almost the same radius.`,
          t`The contraction cancels the size the extra shell would add to the $5d$ element.`,
          t`Basic strength falls across the series: $\ce{La(OH)3}$ is the strongest base, $\ce{Lu(OH)3}$ the weakest.`,
        ],
      },
    ],
    worked: {
      prompt: t`Terbium ($Z = 65$) is $[\mathrm{Xe}]\,4f^9\,6s^2$. Write $\ce{Tb^3+}$ and $\ce{Tb^4+}$, count their unpaired electrons, and say which ion is an oxidising agent.`,
      steps: [
        t`Remove the $6s$ pair, then one $4f$ electron: $\ce{Tb^3+}$ is $[\mathrm{Xe}]\,4f^8$.`,
        t`One more $4f$ electron gone gives $\ce{Tb^4+}$, $[\mathrm{Xe}]\,4f^7$, a half-filled subshell.`,
        t`$4f^8$ has $14 - 8 = 6$ unpaired electrons; $4f^7$ has 7.`,
        t`$\ce{Tb^4+}$ gains an electron to return to the common $+3$ state, so it is the oxidising agent.`,
      ],
      answer: t`$\ce{Tb^3+}$ $4f^8$ (6 unpaired), $\ce{Tb^4+}$ $4f^7$ (7 unpaired); $\ce{Tb^4+}$ is the oxidising agent`,
    },
    visualSpec: t`A row of lanthanoid ions that shrink as you step from La to Lu, with a 4f box diagram that fills singly to f7 and then pairs, counting unpaired electrons.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Removes $4f$ electrons before the $6s$ pair when forming a lanthanoid ion.`,
      remediation: t`As $4s$ goes first in the d-block, the outer $6s$ electrons go first here, then $5d$, then $4f$. Every $+3$ ion is $[\mathrm{Xe}]\,4f^n$ with no $6s$ electrons.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C08-M2",
      mistake: t`Counts every $4f$ electron as unpaired, even past $f^7$.`,
      remediation: t`The seven $4f$ orbitals take one electron each first; after $f^7$ electrons pair up, so $f^n$ beyond 7 has $14 - n$ unpaired.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: "Thinks atomic and ionic radii grow from La to Lu as electrons are added.",
      remediation: t`The added electrons enter the inner $4f$ subshell and shield poorly, so the rising nuclear charge pulls the atom in: radii fall from La to Lu.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C08-M4",
      mistake: "Writes the ion with the neutral atom's configuration, forgetting to remove electrons.",
      remediation: t`An ion of charge $+q$ has $q$ fewer electrons than its atom: take off the $6s$ pair, then $5d$, then $4f$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Thinks an oxidising agent loses electrons and a reducing agent gains them.",
      remediation: t`An oxidising agent gains electrons and is reduced; a reducing agent loses them. $\ce{Ce^4+}$ gains one to become $\ce{Ce^3+}$; $\ce{Eu^2+}$ loses one to become $\ce{Eu^3+}$.`,
      fallback: { kind: "ext", topic: "redox reactions (Std XI Chemistry)" },
    },
    {
      id: "C08-M6",
      mistake: t`Thinks lanthanoids show only the $+3$ oxidation state.`,
      remediation: t`$+3$ is the common state, but $+2$ and $+4$ form when they leave $f^0$, $f^7$ or $f^{14}$: $\ce{Ce^4+}$, $\ce{Tb^4+}$, $\ce{Eu^2+}$, $\ce{Yb^2+}$.`,
      fallback: { kind: "concept", id: "C02" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.1 (x)" },
      stem: t`Ytterbium ($Z = 70$) is $[\mathrm{Xe}]\,4f^{14}\,6s^2$. How many unpaired electrons does $\ce{Yb^3+}$ have?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unpaired", Z: "70", q: "3" } },
      options: [
        { key: "A", text: t`$1$`, correct: true, value: "1" },
        { key: "B", text: t`$13$`, correct: false, misconceptionId: "C08-M2", value: "13" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C08-M1", value: "3" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C08-M4", value: "0" },
      ],
      solution: {
        steps: [
          t`Remove the $6s$ pair, then one $4f$ electron: $\ce{Yb^3+}$ is $[\mathrm{Xe}]\,4f^{13}$.`,
          t`Past $f^7$ the electrons pair up, so $14 - 13 = 1$ is unpaired.`,
          t`So $\ce{Yb^3+}$ has 1 unpaired electron.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.1 (x)" },
      stem: t`Holmium ($Z = 67$) is $[\mathrm{Xe}]\,4f^{11}\,6s^2$. How many unpaired electrons does $\ce{Ho^3+}$ have?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "unpaired", Z: "67", q: "3" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C08-M2", value: "10" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C08-M1", value: "6" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C08-M4", value: "3" },
        { key: "D", text: t`$4$`, correct: true, value: "4" },
      ],
      solution: {
        steps: [
          t`Remove the $6s$ pair, then one $4f$ electron: $\ce{Ho^3+}$ is $[\mathrm{Xe}]\,4f^{10}$.`,
          t`Past $f^7$ the electrons pair up, so $14 - 10 = 4$ are unpaired.`,
          t`So $\ce{Ho^3+}$ has 4 unpaired electrons.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#18" },
      stem: t`Which statement about the lanthanoids is correct?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "facts" } },
      options: [
        { key: "A", text: t`Atomic and ionic radii increase from La to Lu, as electrons are added`, correct: false, misconceptionId: "C08-M3", value: "radii_grow" },
        { key: "B", text: t`$\ce{Ce^4+}$ is an oxidising agent because it readily loses an electron`, correct: false, misconceptionId: "C08-M5", value: "ce4_loses" },
        { key: "C", text: t`Every lanthanoid shows only the $+3$ oxidation state`, correct: false, misconceptionId: "C08-M6", value: "only_plus3" },
        { key: "D", text: t`Zr and Hf have almost the same radius, because of the lanthanoid contraction`, correct: true, value: "zr_hf_alike" },
      ],
      solution: {
        steps: [
          t`Radii fall from La to Lu: that is the lanthanoid contraction.`,
          t`Lanthanoids also show $+2$ and $+4$, and $\ce{Ce^4+}$ oxidises by gaining an electron.`,
          t`The contraction cancels the extra shell of Hf, so Zr and Hf are almost the same size.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (xi)" },
      stem: t`Europium ($Z = 63$) is $[\mathrm{Xe}]\,4f^7\,6s^2$, and $\ce{Eu^2+}$ is a good reducing agent. Which describes $\ce{Eu^2+}$ correctly?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "eu2" } },
      options: [
        { key: "A", text: t`$[\mathrm{Xe}]\,4f^5\,6s^2$; it gives up an electron, becoming $\ce{Eu^3+}$`, correct: false, misconceptionId: "C08-M1", value: "eu2_f5s2_gives" },
        { key: "B", text: t`$[\mathrm{Xe}]\,4f^7\,6s^2$; it gives up an electron, becoming $\ce{Eu^3+}$`, correct: false, misconceptionId: "C08-M4", value: "eu2_f7s2_gives" },
        { key: "C", text: t`$[\mathrm{Xe}]\,4f^7$; it gives up an electron, becoming $\ce{Eu^3+}$`, correct: true, value: "eu2_f7_gives" },
        { key: "D", text: t`$[\mathrm{Xe}]\,4f^7$; it takes an electron, becoming $\ce{Eu+}$`, correct: false, misconceptionId: "C08-M5", value: "eu2_f7_takes" },
      ],
      solution: {
        steps: [
          t`Remove the two $6s$ electrons: $\ce{Eu^2+}$ is $[\mathrm{Xe}]\,4f^7$.`,
          t`A reducing agent loses electrons: $\ce{Eu^2+}$ gives one up to reach the common $+3$ state.`,
          t`So it is $[\mathrm{Xe}]\,4f^7$ and becomes $\ce{Eu^3+}$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (x)" },
      stem: t`Cerium ($Z = 58$) is $[\mathrm{Xe}]\,4f^1\,5d^1\,6s^2$. Which describes $\ce{Ce^4+}$ correctly?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ce4" } },
      options: [
        { key: "A", text: t`$[\mathrm{Xe}]\,4f^1\,5d^1\,6s^2$; an oxidising agent that gains an electron to give $\ce{Ce^3+}$`, correct: false, misconceptionId: "C08-M4", value: "ce4_atom_gains" },
        { key: "B", text: t`$[\mathrm{Xe}]\,4f^0$; an oxidising agent that gains an electron to give $\ce{Ce^3+}$`, correct: true, value: "ce4_f0_gains" },
        { key: "C", text: t`$[\mathrm{Xe}]\,4f^0$; an oxidising agent that loses an electron to give $\ce{Ce^5+}$`, correct: false, misconceptionId: "C08-M5", value: "ce4_f0_loses" },
        { key: "D", text: t`It does not form: every lanthanoid shows only $+3$`, correct: false, misconceptionId: "C08-M6", value: "ce4_none" },
      ],
      solution: {
        steps: [
          t`Remove the $6s$ pair, the $5d$ electron and the $4f$ electron: $\ce{Ce^4+}$ is $[\mathrm{Xe}]\,4f^0$.`,
          t`It gains an electron to return to the common $+3$ state: $\ce{Ce^4+ + e- -> Ce^3+}$.`,
          t`So it is an oxidising agent that gives $\ce{Ce^3+}$.`,
        ],
      },
    },
  ],
};
