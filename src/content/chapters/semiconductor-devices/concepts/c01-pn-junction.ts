import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`A diode lets current through one way only, like a one-way valve. Yet it is just one crystal of silicon, doped differently on its two sides. How does that make a one-way street?`,
    reveal: t`Where the two sides meet, carriers cross over and leave behind a thin layer of fixed charges, the **depletion layer**. Its barrier is lowered by a voltage applied one way and raised by a voltage applied the other way.`,
  },
  explanation: {
    intuition: [
      t`In a pure semiconductor, heat breaks a few bonds: each frees an electron and leaves a **hole**, a vacant bond.`,
      t`Adding a trivalent impurity makes extra holes: a **p-type** semiconductor.`,
      t`Adding a pentavalent impurity makes extra free electrons: an **n-type** semiconductor.`,
      t`Where p and n meet, carriers cross and cancel, leaving a **depletion layer** of fixed ions.`,
      t`These ions set up a field and a **barrier potential** that stops further crossing.`,
      t`A voltage one way lowers the barrier and a current flows; the other way raises it and almost none flows.`,
    ],
    formal: [
      {
        title: "Intrinsic semiconductors",
        points: [
          t`An **intrinsic** semiconductor is a pure crystal of silicon or germanium, with no impurity added.`,
          t`Each atom shares its four valence electrons with four neighbours in covalent bonds.`,
          t`Heat breaks a few bonds; each frees an electron and leaves a hole, which acts as a positive carrier.`,
          t`Electrons and holes are made in pairs, so their number densities are equal: $n_e = n_h = n_i$.`,
          t`At room temperature $n_i$ is small, so a pure semiconductor conducts only a little.`,
        ],
      },
      {
        title: "Doping: n-type and p-type",
        points: [
          t`**Doping** is adding a small, controlled amount of impurity; the result is an **extrinsic** semiconductor.`,
          t`A pentavalent impurity (P, As, Sb) gives a fifth, loosely held electron: **n-type**, with $n_e \gg n_h$.`,
          t`A trivalent impurity (B, Al, In) leaves one bond incomplete, a hole: **p-type**, with $n_h \gg n_e$.`,
          t`The carriers in the majority are **majority carriers**; the others are **minority carriers**.`,
          t`Every impurity atom is neutral, so a doped crystal still has no net charge.`,
        ],
      },
      {
        title: "The p-n junction",
        points: [
          t`A **p-n junction** is one crystal doped p-type on one side and n-type on the other.`,
          t`Holes diffuse from p to n and electrons from n to p, where they recombine.`,
          t`They leave a **depletion layer**: fixed negative ions on the p side, positive ions on the n side, no free carriers.`,
          t`These ions set up a field from n to p, and a **barrier potential** across the layer.`,
          t`The barrier is about $0.7\ \mathrm{V}$ for silicon and $0.3\ \mathrm{V}$ for germanium.`,
        ],
      },
      {
        title: "Forward bias",
        points: [
          t`**Forward bias**: the p side is joined to the positive terminal of a cell, the n side to the negative.`,
          t`The applied voltage opposes the barrier, so the barrier falls and the depletion layer narrows.`,
          t`Once the voltage passes the barrier potential, a large current of majority carriers flows, in mA.`,
          t`In series with a resistor $R$, a conducting diode drops about its barrier potential $V_b$: $I = \dfrac{V - V_b}{R}$.`,
        ],
      },
      {
        title: "Reverse bias",
        points: [
          t`**Reverse bias**: the p side is joined to the negative terminal, the n side to the positive.`,
          t`The applied voltage adds to the barrier, so the barrier rises and the depletion layer widens.`,
          t`Majority carriers cannot cross; only a tiny current of minority carriers flows, in $\mu\mathrm{A}$.`,
          t`So a p-n junction diode conducts one way only, which is what a rectifier uses.`,
        ],
      },
    ],
    worked: {
      prompt: t`A germanium diode is joined in series with a $500\ \Omega$ resistor to a $2.0\ \mathrm{V}$ cell, p side to the positive terminal. Find the current. What flows if the cell is turned round?`,
      steps: [
        t`The p side is on the positive terminal, so the diode is forward biased.`,
        t`A germanium diode drops about its barrier potential, $0.3\ \mathrm{V}$.`,
        t`$I = \dfrac{2.0 - 0.3}{500}$ $= 3.4 \times 10^{-3}\ \mathrm{A}$ $= 3.4\ \mathrm{mA}$.`,
        t`Turned round, the diode is reverse biased: practically no current flows.`,
      ],
      answer: t`$3.4\ \mathrm{mA}$ forward; practically zero when reversed`,
    },
    figure: {
      alt: "A bar of semiconductor crystal. Step 2: its left part doped p-type, with holes shown as hollow dots. Step 3: its right part doped n-type, with free electrons shown as dots. Step 4: a thin depletion layer at the junction, holding fixed negative ions on the p side and fixed positive ions on the n side, and no free carriers. Step 5: the electric field E across the layer, pointing from the n side to the p side.",
      axes: "none",
      view: { x: [0.4, 9.6], y: [-0.1, 4.9] },
      elements: [
        { kind: "segment", from: [1, 1], to: [9, 1] },
        { kind: "segment", from: [9, 1], to: [9, 4] },
        { kind: "segment", from: [9, 4], to: [1, 4] },
        { kind: "segment", from: [1, 4], to: [1, 1] },
        { kind: "point", at: [1.6, 1.7], hollow: true, step: 2 },
        { kind: "point", at: [1.6, 2.5], hollow: true, step: 2 },
        { kind: "point", at: [1.6, 3.3], hollow: true, step: 2 },
        { kind: "point", at: [2.6, 1.7], hollow: true, step: 2 },
        { kind: "point", at: [2.6, 2.5], hollow: true, step: 2 },
        { kind: "point", at: [2.6, 3.3], hollow: true, step: 2 },
        { kind: "point", at: [3.5, 1.7], hollow: true, step: 2 },
        { kind: "point", at: [3.5, 2.5], hollow: true, step: 2 },
        { kind: "point", at: [3.5, 3.3], hollow: true, step: 2 },
        { kind: "label", at: [3, 4.05], label: "p-type", labelAt: "n", step: 2 },
        { kind: "segment", from: [5, 1], to: [5, 4], step: 3 },
        { kind: "point", at: [6.5, 1.7], step: 3 },
        { kind: "point", at: [6.5, 2.5], step: 3 },
        { kind: "point", at: [6.5, 3.3], step: 3 },
        { kind: "point", at: [7.4, 1.7], step: 3 },
        { kind: "point", at: [7.4, 2.5], step: 3 },
        { kind: "point", at: [7.4, 3.3], step: 3 },
        { kind: "point", at: [8.4, 1.7], step: 3 },
        { kind: "point", at: [8.4, 2.5], step: 3 },
        { kind: "point", at: [8.4, 3.3], step: 3 },
        { kind: "label", at: [7, 4.05], label: "n-type", labelAt: "n", step: 3 },
        { kind: "segment", from: [4.2, 1], to: [4.2, 4], dashed: true, tone: "muted", step: 4 },
        { kind: "segment", from: [5.8, 1], to: [5.8, 4], dashed: true, tone: "muted", step: 4 },
        { kind: "label", at: [4.6, 1.45], label: "⊖", labelAt: "n", tone: "bad", step: 4 },
        { kind: "label", at: [4.6, 2.25], label: "⊖", labelAt: "n", tone: "bad", step: 4 },
        { kind: "label", at: [4.6, 3.05], label: "⊖", labelAt: "n", tone: "bad", step: 4 },
        { kind: "label", at: [5.4, 1.45], label: "⊕", labelAt: "n", tone: "good", step: 4 },
        { kind: "label", at: [5.4, 2.25], label: "⊕", labelAt: "n", tone: "good", step: 4 },
        { kind: "label", at: [5.4, 3.05], label: "⊕", labelAt: "n", tone: "good", step: 4 },
        { kind: "label", at: [5, 0.85], label: "depletion layer", labelAt: "s", tone: "muted", step: 4 },
        { kind: "vector", from: [5.7, 4.45], to: [4.3, 4.45], label: "E", labelAt: "n", step: 5 },
      ],
    },
    visualSpec: t`Slide a bias voltage from reverse to forward and watch the depletion layer widen or narrow and the current switch on past the barrier.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes \"extrinsic\" to mean pure.",
      remediation: "**Intrinsic** means pure: nothing added. Doping with an impurity makes it **extrinsic**.",
      fallback: { kind: "ext", topic: "semiconductors (Std XI Physics)" },
    },
    {
      id: "C01-M2",
      mistake: "Swaps the dopants: thinks a trivalent impurity makes n-type and a pentavalent one p-type.",
      remediation: "A trivalent atom has one electron too few for its bonds, so it leaves a hole: p-type. A pentavalent one has a spare electron: n-type.",
      fallback: { kind: "ext", topic: "semiconductors (Std XI Physics)" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks a doped crystal carries a net charge.",
      remediation: "Each impurity atom is neutral; its spare electron or missing electron is balanced by its nucleus. A p-type or n-type crystal has no net charge.",
      fallback: { kind: "ext", topic: "semiconductors (Std XI Physics)" },
    },
    {
      id: "C01-M4",
      mistake: "Takes the p side on the negative terminal as forward bias.",
      remediation: "Forward bias puts the p side on the positive terminal. With the p side on the negative terminal the diode is reverse biased.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Swaps the effects of forward and reverse bias on the depletion layer.",
      remediation: "Forward bias opposes the barrier, so the layer narrows and current flows. Reverse bias adds to it, so the layer widens.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Ignores the barrier potential of a conducting diode.",
      remediation: t`A conducting diode still drops about its barrier potential, $0.7\ \mathrm{V}$ for silicon: $I = \dfrac{V - V_b}{R}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: t`Uses germanium's barrier, $0.3\ \mathrm{V}$, for a silicon diode.`,
      remediation: t`The barrier is about $0.7\ \mathrm{V}$ for silicon and $0.3\ \mathrm{V}$ for germanium.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks a diode conducts either way, like a resistor.",
      remediation: "A p-n junction conducts only when forward biased. Reverse biased, its barrier rises and only a tiny current flows.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks a pure semiconductor has no free carriers at room temperature.",
      remediation: "At room temperature heat breaks some bonds, so a pure semiconductor has a few free electrons and holes; it conducts a little.",
      fallback: { kind: "ext", topic: "semiconductors (Std XI Physics)" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks a broken bond frees an electron but leaves nothing behind.",
      remediation: t`A broken bond frees an electron and leaves a hole, so a pure crystal has equal numbers of each: $n_e = n_h$. It is intrinsic, not n-type.`,
      fallback: { kind: "ext", topic: "semiconductors (Std XI Physics)" },
    },
    {
      id: "C01-M11",
      mistake: "Swaps majority and minority carriers.",
      remediation: "Majority carriers come from doping: holes in p-type, electrons in n-type. They carry the large forward current; minority carriers carry the tiny reverse current.",
      fallback: { kind: "ext", topic: "semiconductors (Std XI Physics)" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks bias changes the current but not the depletion layer.",
      remediation: "The bias changes the barrier: forward bias narrows the depletion layer, reverse bias widens it. That is why the current changes.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Adds the barrier potential to the cell's voltage.",
      remediation: t`The barrier opposes the flow: the resistor gets what is left after the diode's drop, $V - V_b$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2018-march/Q.5(vi)" },
      stem: t`A pure semiconductor, with no impurity added to it, is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pure" } },
      options: [
        { key: "A", text: t`an intrinsic semiconductor`, correct: true, value: "intrinsic_sc" },
        { key: "B", text: t`an extrinsic semiconductor`, correct: false, misconceptionId: "C01-M1", value: "extrinsic_sc" },
        { key: "C", text: t`an insulator, with no free charge carriers`, correct: false, misconceptionId: "C01-M9", value: "insulator_sc" },
        { key: "D", text: t`an n-type semiconductor`, correct: false, misconceptionId: "C01-M10", value: "ntype_sc" },
      ],
      solution: {
        steps: [
          t`A pure semiconductor has no impurity: that is what **intrinsic** means.`,
          t`Its carriers come from broken bonds, in pairs, so $n_e = n_h$: it is an intrinsic semiconductor.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2019-march/Q.14" },
      stem: t`Which statement describes a p-type semiconductor?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "ptype" } },
      options: [
        { key: "A", text: t`It is doped with a trivalent impurity, and holes are its majority carriers.`, correct: true, value: "tri_holes" },
        { key: "B", text: t`It is doped with a pentavalent impurity, and free electrons are its majority carriers.`, correct: false, misconceptionId: "C01-M2", value: "penta_electrons" },
        { key: "C", text: t`It is doped with a trivalent impurity, and its extra holes give it a net positive charge.`, correct: false, misconceptionId: "C01-M3", value: "tri_holes_charged" },
        { key: "D", text: t`It is doped with a trivalent impurity, and free electrons are its majority carriers.`, correct: false, misconceptionId: "C01-M11", value: "tri_electrons" },
      ],
      solution: {
        steps: [
          t`A trivalent impurity has one electron too few to complete its four bonds, so it leaves a hole.`,
          t`So holes are the majority carriers, and the crystal stays neutral: a p-type semiconductor.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`A little arsenic, a pentavalent impurity, is added to a pure germanium crystal. What does the crystal become?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "dope_n" } },
      options: [
        { key: "A", text: t`An n-type semiconductor with a net negative charge`, correct: false, misconceptionId: "C01-M3", value: "ntype_negative" },
        { key: "B", text: t`An n-type semiconductor with holes as its majority carriers`, correct: false, misconceptionId: "C01-M11", value: "ntype_holes" },
        { key: "C", text: t`An n-type semiconductor that is electrically neutral`, correct: true, value: "ntype_neutral" },
        { key: "D", text: t`A p-type semiconductor that is electrically neutral`, correct: false, misconceptionId: "C01-M2", value: "ptype_neutral" },
      ],
      solution: {
        steps: [
          t`Arsenic has five valence electrons; four form bonds and the fifth is nearly free.`,
          t`So free electrons are the majority carriers: n-type.`,
          t`Each arsenic atom is neutral, so the crystal has no net charge.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "authored" },
      stem: t`A p-n junction diode is forward biased. What happens to its depletion layer, and what current flows?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "fwd" } },
      options: [
        { key: "A", text: t`The layer narrows, and a large current of majority carriers flows.`, correct: true, value: "narrows_majority" },
        { key: "B", text: t`The layer widens, and almost no current flows.`, correct: false, misconceptionId: "C01-M5", value: "widens_none" },
        { key: "C", text: t`The layer stays as it was, and a large current of majority carriers flows.`, correct: false, misconceptionId: "C01-M12", value: "same_majority" },
        { key: "D", text: t`The layer narrows, and a large current of minority carriers flows.`, correct: false, misconceptionId: "C01-M11", value: "narrows_minority" },
      ],
      solution: {
        steps: [
          t`Forward bias opposes the barrier potential, so the barrier falls and the depletion layer narrows.`,
          t`Majority carriers can now cross the junction: a large current flows.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "authored" },
      stem: t`A silicon diode (barrier potential $0.7\ \mathrm{V}$) is forward biased by a $3\ \mathrm{V}$ cell through a $200\ \Omega$ resistor. What current flows?`,
      verify: { kind: "value", inputs: { V: "3", R: "200", Vb: "0.7", Vo: "0.3" }, params: { ask: "If" } },
      options: [
        { key: "A", text: t`$11.5\ \mathrm{mA}$`, correct: true, value: "11.5000000000000" },
        { key: "B", text: t`$15\ \mathrm{mA}$`, correct: false, misconceptionId: "C01-M6", value: "15" },
        { key: "C", text: t`$13.5\ \mathrm{mA}$`, correct: false, misconceptionId: "C01-M7", value: "13.5000000000000" },
        { key: "D", text: t`$18.5\ \mathrm{mA}$`, correct: false, misconceptionId: "C01-M13", value: "18.5000000000000" },
      ],
      solution: {
        steps: [
          t`The diode drops about its barrier potential, $0.7\ \mathrm{V}$, so the resistor gets $3 - 0.7 = 2.3\ \mathrm{V}$.`,
          t`$I = \dfrac{2.3}{200}$ $= 0.0115\ \mathrm{A}$ $= 11.5\ \mathrm{mA}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "authored" },
      stem: t`The p side of a silicon diode is joined to the negative terminal of a $5\ \mathrm{V}$ cell, and its n side to the positive terminal through a $1\ \mathrm{k\Omega}$ resistor. What current flows?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rev" } },
      options: [
        { key: "A", text: t`$5\ \mathrm{mA}$, as a diode passes current either way`, correct: false, misconceptionId: "C01-M8", value: "ohmic_current" },
        { key: "B", text: t`Practically none: only a tiny current of majority carriers`, correct: false, misconceptionId: "C01-M11", value: "zero_majority" },
        { key: "C", text: t`Practically none: only a tiny current of minority carriers`, correct: true, value: "zero_minority" },
        { key: "D", text: t`About $4.3\ \mathrm{mA}$, as the diode is forward biased`, correct: false, misconceptionId: "C01-M4", value: "fwd_current" },
      ],
      solution: {
        steps: [
          t`With the p side on the negative terminal, the diode is reverse biased.`,
          t`The barrier rises and the depletion layer widens, so majority carriers cannot cross.`,
          t`Only a tiny current of minority carriers flows: practically none.`,
        ],
      },
    },
  ],
};
