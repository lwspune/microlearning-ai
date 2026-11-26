import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Across period 3, the atomic radius falls from $186\ \mathrm{pm}$ (Na) to $99\ \mathrm{pm}$ (Cl). Across the $3d$ series it falls only about $40\ \mathrm{pm}$, levels off, and then rises again at copper and zinc. Why is the transition series so different?`,
    reveal: t`Each new electron of a transition series goes into the inner $(n-1)d$ subshell, not the outer shell. It shields the outer $4s$ electrons only partly, so the effective nuclear charge grows slowly and the shrinking is small. Near the end, repulsion in the crowded $3d$ subshell wins and the atoms grow slightly.`,
  },
  explanation: {
    intuition: [
      t`Moving right across a transition series, the nuclear charge rises by one each step.`,
      t`The new electron enters the inner $(n-1)d$ subshell, while the outer $ns$ electrons stay the same.`,
      t`Inner electrons partly cancel the nucleus's pull on the outer electrons; this is **shielding**.`,
      t`$d$ electrons shield poorly, so the outer electrons feel a slowly growing pull.`,
      t`So atoms shrink a little across a series, and ionisation enthalpies rise only slowly.`,
    ],
    formal: [
      {
        title: "Shielding and effective nuclear charge",
        points: [
          t`An outer electron is repelled by the electrons between it and the nucleus.`,
          t`This screening of the nucleus by inner electrons is called **shielding**.`,
          t`The reduced pull the outer electron actually feels is the **effective nuclear charge**.`,
          t`$d$ orbitals are diffuse and less penetrating, so $d$ electrons shield poorly.`,
          t`So across a series the effective nuclear charge rises, but slowly.`,
        ],
      },
      {
        title: "Atomic radii across the series",
        points: [
          t`Radii fall from Sc to Cr: $164$, $147$, $135$, $129\ \mathrm{pm}$ for Sc, Ti, V, Cr.`,
          t`Then they level off: Fe $126$, Co $125$, Ni $125\ \mathrm{pm}$.`,
          t`They rise slightly at the end: Cu $128$ and Zn $137\ \mathrm{pm}$.`,
          t`Near a full $3d^{10}$, repulsion among the $d$ electrons outweighs the extra pull.`,
          t`The fall is far smaller than across a p-block period, where the new electron is an outer one.`,
        ],
      },
      {
        title: "Ionic radii",
        points: [
          t`Ions of the same charge also shrink across the series: $\ce{Cr^2+}$ $82\ \mathrm{pm}$, $\ce{Cu^2+}$ $73\ \mathrm{pm}$.`,
          t`For one element, a higher charge means a smaller ion: $\ce{M^3+}$ is smaller than $\ce{M^2+}$.`,
          t`Transition-metal ions are smaller than the ions of s-block metals of the same period.`,
        ],
      },
      {
        title: "Ionisation enthalpies",
        points: [
          t`They lie between those of the s-block and the p-block elements.`,
          t`Across the $3d$ series, $\mathrm{IE_1}$ rises slowly and unevenly, from $632$ (Sc) to $744\ \mathrm{kJ\,mol^{-1}}$ (Cu).`,
          t`Zinc jumps to $906\ \mathrm{kJ\,mol^{-1}}$: its $3d^{10}\,4s^2$ configuration is very stable.`,
          t`For one element, $\mathrm{IE_1} < \mathrm{IE_2} < \mathrm{IE_3}$: each electron leaves a more positive ion.`,
          t`Forming $\ce{M^q+(g)}$ from $\ce{M(g)}$ needs the sum $\mathrm{IE_1} + \dots + \mathrm{IE_q}$.`,
          t`Iron: $\ce{Fe^2+(g)}$ needs $762 + 1561$ $= 2323\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
      {
        title: "Down a group",
        points: [
          t`The $5d$ series has much higher ionisation enthalpies than the $3d$ and $4d$ series.`,
          t`Its atoms hold filled $4f$ orbitals, which shield very poorly.`,
          t`So the valence electrons feel a greater nuclear pull and are harder to remove.`,
          t`Fairly low ionisation enthalpies make the transition elements typical metals.`,
        ],
      },
    ],
    worked: {
      prompt: t`Arrange vanadium, iron and copper in order of increasing atomic radius.`,
      steps: [
        t`Radii fall from Sc to about Cr, so V ($135\ \mathrm{pm}$) is still fairly large.`,
        t`Around Fe, Co and Ni they level off near the smallest value: Fe is $126\ \mathrm{pm}$.`,
        t`At the end they rise a little: Cu is $128\ \mathrm{pm}$, just above Fe.`,
        t`So the order of increasing radius is $\mathrm{Fe} < \mathrm{Cu} < \mathrm{V}$.`,
      ],
      answer: t`$\mathrm{Fe} < \mathrm{Cu} < \mathrm{V}$`,
    },
    visualSpec: t`Step from Sc to Zn adding one proton and one 3d electron at a time; a gauge shows the effective nuclear charge creeping up and the atom shrinking, levelling off, then swelling at Cu and Zn.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Expects the radius to fall steadily all across the series, as in a p-block period, so zinc is the smallest.",
      remediation: t`Across a transition series the radius falls, levels off near Fe, Co and Ni, and rises again at Cu and Zn. Zinc ($137\ \mathrm{pm}$) is larger than nickel ($125\ \mathrm{pm}$).`,
      fallback: { kind: "ext", topic: "periodic trends in atomic radius (Std XI Chemistry)" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks more electrons make a bigger atom, so the radius grows across the series.",
      remediation: t`Each step adds a proton as well as an electron, and the inner $d$ electron shields poorly. The effective nuclear charge rises, so atoms shrink across the series.`,
      fallback: { kind: "ext", topic: "effective nuclear charge and shielding (Std XI Chemistry)" },
    },
    {
      id: "C03-M3",
      mistake: "Reads the order backwards, listing the radii from largest to smallest.",
      remediation: "Increasing radius starts with the smallest atom. Scandium, the largest, comes last.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Treats every electron as costing the first ionisation enthalpy, taking $q \times \mathrm{IE_1}$.`,
      remediation: t`Each electron is removed from a more positive ion, so $\mathrm{IE_2}$ and $\mathrm{IE_3}$ are larger than $\mathrm{IE_1}$. Add the actual values $\mathrm{IE_1} + \dots + \mathrm{IE_q}$.`,
      fallback: { kind: "ext", topic: "ionisation enthalpy (Std XI Chemistry)" },
    },
    {
      id: "C03-M5",
      mistake: t`Takes the $q$th ionisation enthalpy alone as the energy to remove $q$ electrons.`,
      remediation: t`$\mathrm{IE_q}$ removes only the $q$th electron, from $\ce{M^{(q-1)+}}$. To form $\ce{M^q+}$ from $\ce{M}$, add every step: $\mathrm{IE_1} + \dots + \mathrm{IE_q}$.`,
      fallback: { kind: "ext", topic: "ionisation enthalpy (Std XI Chemistry)" },
    },
    {
      id: "C03-M6",
      mistake: t`Stops one step short, adding $\mathrm{IE_1}$ to $\mathrm{IE_{q-1}}$ and leaving out the last electron.`,
      remediation: t`A charge of $+q$ means $q$ electrons removed, so the sum runs from $\mathrm{IE_1}$ up to and including $\mathrm{IE_q}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (i)" },
      stem: t`Arrange scandium, titanium, nickel and zinc in order of increasing atomic radius.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "radius", els: "21,22,28,30" } },
      options: [
        { key: "A", text: t`$\mathrm{Sc} < \mathrm{Ti} < \mathrm{Zn} < \mathrm{Ni}$`, correct: false, misconceptionId: "C03-M3", value: "sc_lt_ti_lt_zn_lt_ni" },
        { key: "B", text: t`$\mathrm{Ni} < \mathrm{Zn} < \mathrm{Ti} < \mathrm{Sc}$`, correct: true, value: "ni_lt_zn_lt_ti_lt_sc" },
        { key: "C", text: t`$\mathrm{Zn} < \mathrm{Ni} < \mathrm{Ti} < \mathrm{Sc}$`, correct: false, misconceptionId: "C03-M1", value: "zn_lt_ni_lt_ti_lt_sc" },
        { key: "D", text: t`$\mathrm{Sc} < \mathrm{Ti} < \mathrm{Ni} < \mathrm{Zn}$`, correct: false, misconceptionId: "C03-M2", value: "sc_lt_ti_lt_ni_lt_zn" },
      ],
      solution: {
        steps: [
          t`Radii fall from Sc ($164$) to Ti ($147\ \mathrm{pm}$) and level off near Ni ($125\ \mathrm{pm}$).`,
          t`They rise again at the end: Zn is $137\ \mathrm{pm}$, larger than Ni but smaller than Ti.`,
          t`So the order is $\mathrm{Ni} < \mathrm{Zn} < \mathrm{Ti} < \mathrm{Sc}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.2 (x)" },
      stem: t`Arrange scandium, titanium, chromium and zinc in order of increasing atomic radius.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "radius", els: "21,22,24,30" } },
      options: [
        { key: "A", text: t`$\mathrm{Sc} < \mathrm{Ti} < \mathrm{Cr} < \mathrm{Zn}$`, correct: false, misconceptionId: "C03-M2", value: "sc_lt_ti_lt_cr_lt_zn" },
        { key: "B", text: t`$\mathrm{Sc} < \mathrm{Ti} < \mathrm{Zn} < \mathrm{Cr}$`, correct: false, misconceptionId: "C03-M3", value: "sc_lt_ti_lt_zn_lt_cr" },
        { key: "C", text: t`$\mathrm{Zn} < \mathrm{Cr} < \mathrm{Ti} < \mathrm{Sc}$`, correct: false, misconceptionId: "C03-M1", value: "zn_lt_cr_lt_ti_lt_sc" },
        { key: "D", text: t`$\mathrm{Cr} < \mathrm{Zn} < \mathrm{Ti} < \mathrm{Sc}$`, correct: true, value: "cr_lt_zn_lt_ti_lt_sc" },
      ],
      solution: {
        steps: [
          t`Radii fall from Sc ($164$) through Ti ($147$) to Cr ($129\ \mathrm{pm}$).`,
          t`Zinc's nearly full shell swells it again to $137\ \mathrm{pm}$, above Cr but below Ti.`,
          t`So the order is $\mathrm{Cr} < \mathrm{Zn} < \mathrm{Ti} < \mathrm{Sc}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (vi)" },
      stem: t`The first three ionisation enthalpies of manganese are $717$, $1513$ and $3258\ \mathrm{kJ\,mol^{-1}}$. What energy is needed to form $\ce{Mn^3+(g)}$ from $\ce{Mn(g)}$?`,
      verify: { kind: "value", inputs: { ie1: "717", ie2: "1513", ie3: "3258" }, params: { ask: "ie", q: "3" } },
      options: [
        { key: "A", text: t`$5488\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "5488" },
        { key: "B", text: t`$3258\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M5", value: "3258" },
        { key: "C", text: t`$2230\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M6", value: "2230" },
        { key: "D", text: t`$2151\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M4", value: "2151" },
      ],
      solution: {
        steps: [
          t`Forming $\ce{Mn^3+(g)}$ removes three electrons, one at a time.`,
          t`The energy is $\mathrm{IE_1} + \mathrm{IE_2} + \mathrm{IE_3}$ $= 717 + 1513 + 3258$.`,
          t`So the energy needed is $5488\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (vi)" },
      stem: t`The first two ionisation enthalpies of copper are $744$ and $1958\ \mathrm{kJ\,mol^{-1}}$. What energy is needed to form $\ce{Cu^2+(g)}$ from $\ce{Cu(g)}$?`,
      verify: { kind: "value", inputs: { ie1: "744", ie2: "1958" }, params: { ask: "ie", q: "2" } },
      options: [
        { key: "A", text: t`$1958\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M5", value: "1958" },
        { key: "B", text: t`$744\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M6", value: "744" },
        { key: "C", text: t`$2702\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "2702" },
        { key: "D", text: t`$1488\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M4", value: "1488" },
      ],
      solution: {
        steps: [
          t`Forming $\ce{Cu^2+(g)}$ removes two electrons, one after the other.`,
          t`The energy is $\mathrm{IE_1} + \mathrm{IE_2} = 744 + 1958$.`,
          t`So the energy needed is $2702\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/transition-elements-12-chem/Ex Q.3 (vi)" },
      stem: t`The first two ionisation enthalpies of nickel are $737$ and $1753\ \mathrm{kJ\,mol^{-1}}$. What energy is needed to form $\ce{Ni^2+(g)}$ from $\ce{Ni(g)}$?`,
      verify: { kind: "value", inputs: { ie1: "737", ie2: "1753" }, params: { ask: "ie", q: "2" } },
      options: [
        { key: "A", text: t`$1474\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M4", value: "1474" },
        { key: "B", text: t`$2490\ \mathrm{kJ\,mol^{-1}}$`, correct: true, value: "2490" },
        { key: "C", text: t`$1753\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M5", value: "1753" },
        { key: "D", text: t`$737\ \mathrm{kJ\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M6", value: "737" },
      ],
      solution: {
        steps: [
          t`Forming $\ce{Ni^2+(g)}$ removes two electrons, one after the other.`,
          t`The energy is $\mathrm{IE_1} + \mathrm{IE_2} = 737 + 1753$.`,
          t`So the energy needed is $2490\ \mathrm{kJ\,mol^{-1}}$.`,
        ],
      },
    },
  ],
};
