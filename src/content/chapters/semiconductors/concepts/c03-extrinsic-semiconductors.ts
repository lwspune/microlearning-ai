import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Add one antimony atom for every million silicon atoms, and the crystal conducts about a million times better. How can so tiny an impurity matter so much?`,
    reveal: t`Each antimony atom gives one free electron, and there are far more of them than the few pairs heat makes. This **doping** turns silicon into an **extrinsic** semiconductor.`,
  },
  explanation: {
    intuition: [
      t`**Doping** means adding a tiny, controlled amount of impurity to a pure semiconductor.`,
      t`A **pentavalent** atom (P, As, Sb) has one electron more than its four bonds need: it **donates** a free electron.`,
      t`A **trivalent** atom (B, Al, In) has one too few: it leaves a hole, ready to **accept** an electron.`,
      t`Doping raises one kind of carrier hugely and lowers the other, while $n_en_h$ stays $n_i^2$.`,
    ],
    formal: [
      {
        title: "n-type and p-type",
        points: [
          t`**n-type**: doped with donors; electrons are the majority carriers, holes the minority.`,
          t`**p-type**: doped with acceptors; holes are the majority carriers, electrons the minority.`,
          t`Each donor gives one electron: $n_e \approx N_D$, the donor density. Each acceptor gives one hole: $n_h \approx N_A$.`,
          t`An extrinsic semiconductor is still electrically neutral: the donor or acceptor ions balance the carriers.`,
        ],
      },
      {
        title: "The mass action law",
        points: [
          t`At a given temperature, $n_en_h = n_i^2$ in any semiconductor, pure or doped.`,
          t`So adding electrons lowers the number of holes: $n_h = \dfrac{n_i^2}{n_e}$.`,
          t`$1$ ppm means one impurity atom in $10^{6}$ atoms of the crystal.`,
        ],
      },
      {
        title: "Energy levels and conduction",
        points: [
          t`Donor levels lie in the gap just below the conduction band; acceptor levels just above the valence band.`,
          t`So very little energy frees a donor electron or fills an acceptor level.`,
          t`Electrons are more mobile than holes, so n-type conducts better than p-type at the same doping.`,
        ],
      },
    ],
    worked: {
      prompt: t`Germanium with $n_i$ $= 2.4 \times 10^{19}\ \mathrm{m^{-3}}$ is doped with $4.8 \times 10^{22}$ boron atoms per $\mathrm{m^3}$. Find $n_h$ and $n_e$, and say which type it is.`,
      steps: [
        t`Boron is trivalent: each atom gives one hole, so $n_h$ $= 4.8 \times 10^{22}\ \mathrm{m^{-3}}$.`,
        t`$n_e = \dfrac{n_i^2}{n_h}$ $= \dfrac{\left(2.4 \times 10^{19}\right)^2}{4.8 \times 10^{22}}$ $= 1.2 \times 10^{16}\ \mathrm{m^{-3}}$.`,
        t`Holes are the majority carriers: it is p-type.`,
      ],
      answer: t`$n_h = 4.8 \times 10^{22}$, $n_e$ $= 1.2 \times 10^{16}\ \mathrm{m^{-3}}$; p-type`,
    },
    visualSpec: t`Add donor or acceptor atoms to a silicon crystal and watch the numbers of electrons and holes change.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Thinks doping leaves the minority carriers at $n_i$.`,
      remediation: t`More electrons mean more recombination: $n_h = \dfrac{n_i^2}{n_e}$ falls far below $n_i$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks holes still equal electrons after doping.",
      remediation: t`$n_e = n_h$ holds only for a pure crystal; donors add electrons without adding holes.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Takes every atom as a donor.",
      remediation: t`$1$ ppm is one antimony atom per million: $n_e$ $= \dfrac{4 \times 10^{28}}{10^{6}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: t`Thinks doping leaves the minority electrons at $n_i$.`,
      remediation: t`$n_e = \dfrac{n_i^2}{n_h}$: with many more holes, far fewer electrons survive.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Thinks electrons still equal holes after doping.",
      remediation: t`Acceptors add holes only; the electrons fall, since $n_en_h = n_i^2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: t`Forgets to square $n_i$.`,
      remediation: t`The law is $n_en_h = n_i^2$, so $n_e = \dfrac{n_i^2}{n_h}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Uses a trivalent impurity for n-type.",
      remediation: "A trivalent atom leaves a hole: it makes p-type. n-type needs a pentavalent donor.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Uses a tetravalent impurity.",
      remediation: "A tetravalent atom fits the four bonds exactly and gives no extra carrier.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Thinks a metal adds free electrons.",
      remediation: "Doping works through the impurity's valence in the bonds, not through metallic electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Thinks n-type has more carriers at equal doping.",
      remediation: "Equal doping gives equal numbers of majority carriers; the difference is mobility.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Thinks an electron carries more charge than a hole.",
      remediation: t`Both carry a charge of size $e$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Thinks holes carry no current.",
      remediation: "Holes do carry current, just less freely: their mobility is lower.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Puts acceptor levels near the conduction band.",
      remediation: "Levels just below the conduction band belong to donors; acceptors sit just above the valence band.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Puts acceptor levels in the conduction band.",
      remediation: "Impurity levels lie inside the forbidden gap, close to one band edge.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Puts acceptor levels in the middle of the gap.",
      remediation: "An acceptor takes an electron from the valence band with very little energy, so its level is close to that band.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/semiconductors-11-phy/Solved Ex.14.1" },
      stem: t`A pure silicon crystal has $4 \times 10^{28}$ atoms per $\mathrm{m^3}$. It is doped with antimony at $1$ ppm. If $n_i = 1.2 \times 10^{16}\ \mathrm{m^{-3}}$, how many holes per $\mathrm{m^3}$ does it have?`,
      verify: { kind: "value", inputs: { N: "4e28", ppm: "1", ni: "1.2e16" }, params: { ask: "nh_doped" } },
      options: [
        { key: "A", text: t`$4 \times 10^{22}$`, correct: false, misconceptionId: "C03-M2", value: "40000000000000000000000" },
        { key: "B", text: t`$3600$`, correct: false, misconceptionId: "C03-M3", value: "3600" },
        { key: "C", text: t`$3.6 \times 10^{9}$`, correct: true, value: "3600000000" },
        { key: "D", text: t`$1.2 \times 10^{16}$`, correct: false, misconceptionId: "C03-M1", value: "12000000000000000" },
      ],
      solution: {
        steps: [
          t`$n_e$ $= \dfrac{4 \times 10^{28}}{10^{6}}$ $= 4 \times 10^{22}\ \mathrm{m^{-3}}$.`,
          t`$n_h = \dfrac{n_i^2}{n_e}$ $= \dfrac{\left(1.2 \times 10^{16}\right)^2}{4 \times 10^{22}}$ $= 3.6 \times 10^{9}\ \mathrm{m^{-3}}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/semiconductors-11-phy/Solved Ex.14.2" },
      stem: t`Pure silicon at $300\ \mathrm{K}$ has $n_e = n_h = 1.5 \times 10^{16}\ \mathrm{m^{-3}}$. Doping with indium raises $n_h$ to $4.5 \times 10^{22}\ \mathrm{m^{-3}}$. What is $n_e$ now?`,
      verify: { kind: "value", inputs: { ni: "1.5e16", nh: "4.5e22" }, params: { ask: "ne_doped" } },
      options: [
        { key: "A", text: t`$4.5 \times 10^{22}$`, correct: false, misconceptionId: "C03-M5", value: "44999999999999997902848" },
        { key: "B", text: t`$3.33 \times 10^{-7}$`, correct: false, misconceptionId: "C03-M6", value: "3.33000000000000e-7" },
        { key: "C", text: t`$5 \times 10^{9}$`, correct: true, value: "5000000000" },
        { key: "D", text: t`$1.5 \times 10^{16}$`, correct: false, misconceptionId: "C03-M4", value: "15000000000000000" },
      ],
      solution: {
        steps: [
          t`$n_en_h = n_i^2$, so $n_e = \dfrac{n_i^2}{n_h}$.`,
          t`$n_e$ $= \dfrac{\left(1.5 \times 10^{16}\right)^2}{4.5 \times 10^{22}}$ $= 5 \times 10^{9}\ \mathrm{m^{-3}}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/semiconductors-11-phy/Ex Q.2 (ii)" },
      stem: t`Which element would you add as an impurity to make germanium an n-type semiconductor?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dopant" } },
      options: [
        { key: "A", text: t`Indium, a trivalent element`, correct: false, misconceptionId: "C03-M7", value: "indium" },
        { key: "B", text: t`Silicon, a tetravalent element`, correct: false, misconceptionId: "C03-M8", value: "silicon_d" },
        { key: "C", text: t`Copper, a metal full of free electrons`, correct: false, misconceptionId: "C03-M9", value: "copper" },
        { key: "D", text: t`Arsenic, a pentavalent element`, correct: true, value: "arsenic" },
      ],
      solution: {
        steps: [
          t`n-type needs a donor: an atom with five valence electrons.`,
          t`Arsenic (or phosphorus or antimony) gives one spare electron per atom.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/semiconductors-11-phy/Ex Q.2 (v)" },
      stem: t`An n-type and a p-type semiconductor are doped to the same level, yet the n-type one conducts better. Why?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "mobility" } },
      options: [
        { key: "A", text: t`An electron carries more charge than a hole`, correct: false, misconceptionId: "C03-M11", value: "more_charge" },
        { key: "B", text: t`Holes do not carry current at all`, correct: false, misconceptionId: "C03-M12", value: "holes_dont" },
        { key: "C", text: t`Electrons have a higher mobility than holes`, correct: true, value: "e_mobile" },
        { key: "D", text: t`The n-type crystal has more majority carriers`, correct: false, misconceptionId: "C03-M10", value: "more_carriers" },
      ],
      solution: {
        steps: [
          t`Equal doping gives equal numbers of majority carriers with equal charges.`,
          t`$\sigma = nq\mu$, and electrons have the higher mobility, so n-type conducts better.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/semiconductors-11-phy/Ex Q.1 (ii)" },
      stem: t`In a p-type semiconductor, where do the energy levels of the acceptor atoms lie?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "acceptor" } },
      options: [
        { key: "A", text: t`In the band gap, just above the valence band`, correct: true, value: "near_vb" },
        { key: "B", text: t`In the band gap, just below the conduction band`, correct: false, misconceptionId: "C03-M13", value: "near_cb" },
        { key: "C", text: t`In the conduction band`, correct: false, misconceptionId: "C03-M14", value: "in_cb" },
        { key: "D", text: t`In the middle of the band gap`, correct: false, misconceptionId: "C03-M15", value: "mid_gap" },
      ],
      solution: {
        steps: [
          t`An acceptor accepts an electron from the valence band with very little energy.`,
          t`So its level lies in the gap, just above the valence band.`,
        ],
      },
    },
  ],
};
