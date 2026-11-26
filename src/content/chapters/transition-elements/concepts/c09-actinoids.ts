import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Lanthanoids keep almost entirely to $+3$. Yet plutonium forms the oxocation $\ce{PuO2^2+}$, and neptunium reaches $+7$. Why can the actinoids go so much higher?`,
    reveal: t`In the actinoids the $5f$, $6d$ and $7s$ levels are very close in energy, so many more electrons can be used in bonding. The $4f$ electrons of the lanthanoids lie deeper and stay put.`,
  },
  explanation: {
    intuition: [
      t`The **actinoids** follow actinium: thorium ($Z = 90$) to lawrencium ($Z = 103$).`,
      t`Across the series, electrons enter the inner $5f$ subshell.`,
      t`They belong to period 7, written as a separate row below the lanthanoids.`,
      t`All of them are **radioactive**: their nuclei break down by themselves, giving out radiation.`,
      t`Only thorium and uranium occur in nature in appreciable amounts; most others are man-made.`,
      t`Their $5f$, $6d$ and $7s$ levels are close in energy, so they show more oxidation states than lanthanoids.`,
    ],
    formal: [
      {
        title: "Electronic configuration",
        points: [
          t`General configuration: $[\mathrm{Rn}]\,5f^{0-14}\,6d^{0-2}\,7s^2$.`,
          t`$5f$ and $6d$ are so close in energy that early actinoids keep electrons in $6d$.`,
          t`Uranium, for example, is $[\mathrm{Rn}]\,5f^3\,6d^1\,7s^2$.`,
          t`Later actinoids are mostly $[\mathrm{Rn}]\,5f^n\,7s^2$.`,
          t`An ion loses its $7s$ electrons first, then $6d$, then $5f$.`,
        ],
      },
      {
        title: "Oxidation states",
        points: [
          t`$+3$ is common, as in the lanthanoids, but actinoids also show $+4$, $+5$, $+6$ and $+7$.`,
          t`The early members reach the highest states: U up to $+6$, Np and Pu up to $+7$.`,
          t`High states appear in oxocations such as $\ce{UO2^2+}$ and $\ce{PuO2^2+}$.`,
          t`Nobelium, $[\mathrm{Rn}]\,5f^{14}\,7s^2$, loses its $7s$ pair to give $\ce{No^2+}$.`,
          t`$\ce{No^2+}$ has a full $5f^{14}$ subshell, so nobelium is the only actinoid with a $+2$ state.`,
        ],
      },
      {
        title: "Magnetic behaviour",
        points: [
          t`Unpaired electrons make a substance paramagnetic; if all are paired, it is diamagnetic.`,
          t`Count unpaired electrons in every partly filled subshell, $6d$ as well as $5f$.`,
          t`Thorium is $[\mathrm{Rn}]\,6d^2\,7s^2$: its two $6d$ electrons are unpaired, so it is paramagnetic.`,
          t`Uranium has three $5f$ and one $6d$ electron unpaired: four in all.`,
          t`Past $5f^7$, electrons pair up, so $5f^{14}$ has none unpaired.`,
        ],
      },
      {
        title: "Lanthanoids and actinoids compared",
        points: [
          t`Lanthanoids fill $4f$ in period 6; actinoids fill $5f$ in period 7.`,
          t`Lanthanoids, except promethium, are not radioactive; every actinoid is.`,
          t`Lanthanoids keep mostly to $+3$, at most $+4$; actinoids reach $+7$.`,
          t`Actinoids form complexes and oxocations more readily, and their ions are usually coloured.`,
          t`The **actinoid contraction** is steeper: $5f$ electrons shield even more poorly than $4f$.`,
          t`Both series show $+3$, fill their f orbitals gradually and shrink across the series.`,
        ],
      },
    ],
    worked: {
      prompt: t`Plutonium ($Z = 94$) is $[\mathrm{Rn}]\,5f^6\,7s^2$. Write $\ce{Pu^3+}$ and count its unpaired electrons.`,
      steps: [
        t`Remove the $7s$ pair first: $[\mathrm{Rn}]\,5f^6$.`,
        t`One more electron comes from $5f$: $\ce{Pu^3+}$ is $[\mathrm{Rn}]\,5f^5$.`,
        t`Five electrons in seven $5f$ orbitals all stay single: 5 unpaired.`,
        t`So $\ce{Pu^3+}$ is paramagnetic.`,
      ],
      answer: t`$[\mathrm{Rn}]\,5f^5$, with 5 unpaired electrons`,
    },
    visualSpec: t`Two f-block rows side by side, lanthanoids and actinoids, where tapping an element lights up the oxidation states it shows and marks it radioactive or not.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Thinks actinoids behave just like lanthanoids, keeping mostly to $+3$.`,
      remediation: t`Actinoids show $+3$ but also $+4$ to $+7$: their $5f$, $6d$ and $7s$ levels are close in energy, so more electrons can be used.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M2",
      mistake: "Swaps lanthanoid and actinoid facts.",
      remediation: t`Actinoids are the series that is all radioactive and shows many oxidation states. Lanthanoids, except promethium, are not radioactive and keep mostly to $+3$.`,
      fallback: { kind: "concept", id: "C08" },
    },
    {
      id: "C09-M3",
      mistake: t`Fills $5f$ before $6d$, expecting thorium to be $[\mathrm{Rn}]\,5f^2\,7s^2$.`,
      remediation: t`In the early actinoids $6d$ lies as low as $5f$: thorium is $[\mathrm{Rn}]\,6d^2\,7s^2$, and uranium keeps one $6d$ electron.`,
      fallback: { kind: "ext", topic: "electronic configuration (Std XI Chemistry)" },
    },
    {
      id: "C09-M4",
      mistake: t`Removes $5f$ electrons before the $7s$ pair when forming an actinoid ion.`,
      remediation: t`The outer $7s$ electrons go first, then $6d$, then $5f$: $\ce{No^2+}$ is $[\mathrm{Rn}]\,5f^{14}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M5",
      mistake: "Thinks only the man-made actinoids, after uranium, are radioactive.",
      remediation: "Every actinoid is radioactive, thorium and uranium included; they are simply long-lived enough to survive in nature.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M6",
      mistake: t`Judges magnetism by the $5f$ subshell alone, counting every $5f$ electron as unpaired.`,
      remediation: t`Count unpaired electrons in $6d$ too, and pair $5f$ electrons past $f^7$. Thorium's two $6d$ electrons make it paramagnetic; $5f^{14}$ has none unpaired.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.1 (ix)" },
      stem: t`In which of these series are all the elements radioactive?`,
      verify: { kind: "value", inputs: {  }, params: { q: "radio" } },
      options: [
        { key: "A", text: t`Both lanthanoids and actinoids`, correct: false, misconceptionId: "C09-M1", value: "both_series" },
        { key: "B", text: t`Only the actinoids after uranium`, correct: false, misconceptionId: "C09-M5", value: "after_uranium" },
        { key: "C", text: t`Actinoids`, correct: true, value: "actinoids" },
        { key: "D", text: t`Lanthanoids`, correct: false, misconceptionId: "C09-M2", value: "lanthanoids" },
      ],
      solution: {
        steps: [
          t`Lanthanoids, apart from promethium, are not radioactive.`,
          t`Every actinoid, thorium and uranium included, is radioactive.`,
          t`So the actinoids are the series in which all elements are radioactive.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.2 (xi)" },
      stem: t`Thorium has $Z = 90$. Which describes the thorium atom correctly?`,
      verify: { kind: "value", inputs: {  }, params: { q: "th" } },
      options: [
        { key: "A", text: t`Paramagnetic: $[\mathrm{Rn}]\,6d^2\,7s^2$, with two unpaired 6d electrons`, correct: true, value: "th_para_6d" },
        { key: "B", text: t`Diamagnetic: it has no 5f electrons`, correct: false, misconceptionId: "C09-M6", value: "th_dia_no_5f" },
        { key: "C", text: t`Paramagnetic: $[\mathrm{Rn}]\,5f^2\,7s^2$, with two unpaired 5f electrons`, correct: false, misconceptionId: "C09-M3", value: "th_para_5f2" },
        { key: "D", text: t`Paramagnetic: $[\mathrm{Rn}]\,5f^1\,6d^1\,7s^2$, like cerium`, correct: false, misconceptionId: "C09-M1", value: "th_para_like_ce" },
      ],
      solution: {
        steps: [
          t`Thorium has 4 electrons beyond radon, and in thorium $6d$ fills in preference to $5f$.`,
          t`So Th is $[\mathrm{Rn}]\,6d^2\,7s^2$, with no $5f$ electron.`,
          t`The two $6d$ electrons sit in separate orbitals, unpaired: thorium is paramagnetic.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#21" },
      stem: t`Which statement comparing the lanthanoids and the actinoids is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "compare" } },
      options: [
        { key: "A", text: t`Lanthanoids show more oxidation states than actinoids`, correct: false, misconceptionId: "C09-M2", value: "lan_more_states" },
        { key: "B", text: t`Both series keep almost only to the $+3$ state`, correct: false, misconceptionId: "C09-M1", value: "both_plus3" },
        { key: "C", text: t`Thorium and uranium are not radioactive; only man-made actinoids are`, correct: false, misconceptionId: "C09-M5", value: "th_u_stable" },
        { key: "D", text: t`Actinoids show more oxidation states than lanthanoids`, correct: true, value: "act_more_states" },
      ],
      solution: {
        steps: [
          t`Lanthanoids keep mostly to $+3$, reaching at most $+4$.`,
          t`Actinoids show $+3$ to $+7$, since their $5f$, $6d$ and $7s$ levels are close in energy.`,
          t`So actinoids show more oxidation states; and all of them, Th and U included, are radioactive.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.2 (viii)" },
      stem: t`Nobelium ($Z = 102$) is $[\mathrm{Rn}]\,5f^{14}\,7s^2$. Which statement about it is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "no" } },
      options: [
        { key: "A", text: t`It shows $+2$: $\ce{No^2+}$ is $[\mathrm{Rn}]\,5f^{12}\,7s^2$, keeping the 7s pair`, correct: false, misconceptionId: "C09-M4", value: "no2_f12s2" },
        { key: "B", text: t`It shows $+2$: $\ce{No^2+}$ is $[\mathrm{Rn}]\,5f^{14}$, a full 5f subshell`, correct: true, value: "no2_f14" },
        { key: "C", text: t`It shows only $+3$, like most lanthanoids`, correct: false, misconceptionId: "C09-M1", value: "no_only_plus3" },
        { key: "D", text: t`$\ce{No^2+}$ has 14 unpaired 5f electrons, so it is strongly paramagnetic`, correct: false, misconceptionId: "C09-M6", value: "no2_14_unpaired" },
      ],
      solution: {
        steps: [
          t`The two $7s$ electrons go first: $\ce{No^2+}$ is $[\mathrm{Rn}]\,5f^{14}$.`,
          t`A full $5f^{14}$ subshell is extra stable, and all its electrons are paired.`,
          t`So nobelium shows $+2$, with a full $5f$ subshell.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/d-f-block-12-pyq#24" },
      stem: t`Uranium ($Z = 92$) is $[\mathrm{Rn}]\,5f^3\,6d^1\,7s^2$. Which statement about it is correct?`,
      verify: { kind: "value", inputs: {  }, params: { q: "u" } },
      options: [
        { key: "A", text: t`It has 3 unpaired electrons, all of them in 5f`, correct: false, misconceptionId: "C09-M6", value: "u_3_unpaired" },
        { key: "B", text: t`It is not radioactive: only the elements after uranium are`, correct: false, misconceptionId: "C09-M5", value: "u_not_radioactive" },
        { key: "C", text: t`It shows states from $+3$ up to $+6$, using its 5f, 6d and 7s electrons`, correct: true, value: "u_up_to_6" },
        { key: "D", text: t`It shows only the $+3$ state, like most lanthanoids`, correct: false, misconceptionId: "C09-M1", value: "u_only_3" },
      ],
      solution: {
        steps: [
          t`Uranium can use all six electrons beyond radon: three $5f$, one $6d$ and two $7s$.`,
          t`So it shows $+3$ up to $+6$, as in $\ce{UO2^2+}$.`,
          t`It has four unpaired electrons (three $5f$, one $6d$), and like every actinoid it is radioactive.`,
        ],
      },
    },
  ],
};
