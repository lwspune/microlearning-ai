import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Comb dry hair on a winter morning and the comb then picks up tiny bits of paper. Nothing was added to the comb. Where did its charge come from?`,
    reveal: t`From your hair. Rubbing moved **electrons** from the hair to the comb: the comb became negative and the hair equally positive. Charge was moved, never made.`,
  },
  explanation: {
    intuition: [
      t`Every atom has positive **protons** in its nucleus and negative **electrons** outside it.`,
      t`A body with equal numbers of protons and electrons is **neutral**: its charges cancel.`,
      t`A body that gains electrons becomes **negative**; one that loses electrons becomes **positive**.`,
      t`Only electrons move from body to body; protons stay locked in the nuclei.`,
      t`Like charges repel each other; unlike charges attract.`,
    ],
    formal: [
      {
        title: "Quantisation of charge",
        points: [
          t`Charge is measured in **coulomb** (C); $1\ \mu\mathrm{C}$ $= 10^{-6}\ \mathrm{C}$ and $1\ \mathrm{nC}$ $= 10^{-9}\ \mathrm{C}$.`,
          t`The smallest free charge is the **elementary charge** $e$ $= 1.6 \times 10^{-19}\ \mathrm{C}$, found by Millikan.`,
          t`An electron carries $-e$ and a proton $+e$.`,
          t`Any charge is a whole number of these: $q = \pm ne$, with $n$ an integer. Charge is **quantised**.`,
          t`So the number of electrons moved is $n = \dfrac{q}{e}$.`,
        ],
      },
      {
        title: "Conservation and additivity",
        points: [
          t`**Conservation of charge**: the total charge of an isolated system can neither be created nor destroyed.`,
          t`Charge only moves from one part of the system to another.`,
          t`Rub glass with silk: electrons pass from glass to silk, so the glass is $+q$ and the silk $-q$.`,
          t`Charge is a scalar and **additive**: total charge is the algebraic sum, $+5e$ and $-2e$ give $+3e$.`,
          t`Neutral matter is full of charge: its protons and electrons are equal in number, so they cancel.`,
        ],
      },
      {
        title: "Charging by friction and conduction",
        points: [
          t`In **conductors**, such as metals, some electrons move freely; in **insulators**, such as glass, they cannot.`,
          t`**Friction**: rubbing two different insulators moves electrons from one to the other.`,
          t`**Conduction**: a charged conductor touching a neutral one shares its charge with it.`,
          t`Two touching metal spheres share charge in the ratio of their radii: equal spheres share equally.`,
          t`The total charge after contact equals the charge before it.`,
        ],
      },
      {
        title: "Charging by induction",
        points: [
          t`Bring a positive rod near a neutral metal body, without touching.`,
          t`Free electrons are drawn to the near end, which becomes negative; the far end is left positive.`,
          t`These **induced charges** are equal and opposite, so the body's total charge stays zero.`,
          t`Earth the body while the rod is near: electrons flow up from the earth and cancel the far-end positive charge.`,
          t`Break the earth connection, then remove the rod: the body keeps a negative charge, opposite to the rod's.`,
        ],
      },
    ],
    worked: {
      prompt: t`A plastic comb run through dry hair gets a charge of $-8.0 \times 10^{-9}\ \mathrm{C}$. How many electrons moved, which way, and what charge does the hair now carry? ($e$ $= 1.6 \times 10^{-19}\ \mathrm{C}$)`,
      steps: [
        t`The comb is negative, so it gained electrons: they moved from the hair to the comb.`,
        t`$n = \dfrac{q}{e}$ $= \dfrac{8.0 \times 10^{-9}}{1.6 \times 10^{-19}}$ $= 5.0 \times 10^{10}$ electrons.`,
        t`Charge is conserved: the hair lost those electrons, so it carries $+8.0 \times 10^{-9}\ \mathrm{C}$.`,
      ],
      answer: t`$5.0 \times 10^{10}$ electrons, from hair to comb; the hair carries $+8.0 \times 10^{-9}\ \mathrm{C}$`,
    },
    visualSpec: t`Rub two materials together and watch electrons hop from one to the other, while a counter shows the total charge stays zero.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Thinks protons move when a body is charged.",
      remediation: "Protons are held in the nuclei; only electrons move. A body turns positive by losing electrons.",
      fallback: { kind: "ext", topic: "structure of the atom" },
    },
    {
      id: "C01-M2",
      mistake: "Thinks rubbing creates charge on one body.",
      remediation: "Charge is conserved: rubbing moves electrons, so the two bodies get equal and opposite charges.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Thinks both rubbed bodies get the same charge.",
      remediation: "Electrons leave one body and join the other: one becomes positive, the other equally negative.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks gaining electrons makes a body positive.",
      remediation: "Electrons are negative: a body that gains them becomes negative, one that loses them becomes positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Forgets the $10^{-6}$ in microcoulomb.`,
      remediation: t`Convert first: $1\ \mu\mathrm{C}$ $= 10^{-6}\ \mathrm{C}$, then use $n = \dfrac{q}{e}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Multiplies the charge by $e$.`,
      remediation: t`$q = ne$, so the number of electrons is $n = \dfrac{q}{e}$, a very large number.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Thinks induction makes the whole conductor opposite in sign.",
      remediation: "Induction only moves charge within the body: the near end turns negative, the far end equally positive.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Thinks charge moves only on contact.",
      remediation: "The rod's charge attracts free electrons in the metal from a distance: that is induction.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks charge jumps across the gap in induction.",
      remediation: "No charge crosses the gap; the metal's own electrons shift, and its total charge stays zero.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks touching spheres always share charge equally.",
      remediation: "Charge is shared in the ratio of the radii; only equal spheres share equally.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Gives the smaller sphere the larger share.",
      remediation: t`The larger sphere takes the larger share: charges are in the ratio of the radii, $2:1$ here.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Shares charge in the ratio of surface areas.",
      remediation: "Touching spheres share charge in the ratio of their radii, not their areas.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Counts 18 charges per molecule, the molecular mass.",
      remediation: t`$18$ counts neutrons too, which carry no charge. A water molecule has $2 + 8 = 10$ protons.`,
      fallback: { kind: "ext", topic: "structure of the atom" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks a neutral body contains no charge.",
      remediation: "Neutral means equal positive and negative charge, not none: water is full of both.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Counts molecules instead of the protons in each.",
      remediation: t`Each molecule holds $10$ protons and $10$ electrons: multiply the number of molecules by $10$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M16",
      mistake: t`Divides $e$ by the charge.`,
      remediation: t`The number of electrons is the charge over the charge of one: $n = \dfrac{q}{e}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Solved Ex.10.1" },
      stem: t`How much positive charge is there in $3.6\ \mathrm{g}$ of water? The molecular mass of water is $18\ \mathrm{g}$, a mole holds $6.02 \times 10^{23}$ molecules, and $e = 1.6 \times 10^{-19}\ \mathrm{C}$.`,
      verify: { kind: "value", inputs: { m: "3.6", M: "18", NA: "6.02e23", e: "1.6e-19" }, params: { ask: "water" } },
      options: [
        { key: "A", text: t`$1.93 \times 10^{5}\ \mathrm{C}$`, correct: true, value: "193000" },
        { key: "B", text: t`$3.47 \times 10^{5}\ \mathrm{C}$`, correct: false, misconceptionId: "C01-M13", value: "347000" },
        { key: "C", text: t`$0\ \mathrm{C}$`, correct: false, misconceptionId: "C01-M14", value: "0" },
        { key: "D", text: t`$19300\ \mathrm{C}$`, correct: false, misconceptionId: "C01-M15", value: "19300" },
      ],
      solution: {
        steps: [
          t`Molecules: $\dfrac{3.6}{18} \times 6.02 \times 10^{23}$ $= 1.204 \times 10^{23}$.`,
          t`Each molecule has $2 + 8 = 10$ protons: $1.204 \times 10^{24}$ protons.`,
          t`Charge $= 1.204 \times 10^{24} \times 1.6 \times 10^{-19}$ $\approx 1.93 \times 10^{5}\ \mathrm{C}$, balanced by an equal negative charge.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Solved Ex.10.2" },
      stem: t`A neutral metal sphere is given a charge of $-1.6\ \mu\mathrm{C}$. What happened to it? ($e = 1.6 \times 10^{-19}\ \mathrm{C}$)`,
      verify: { kind: "value", inputs: {  }, params: { ask: "gain" } },
      options: [
        { key: "A", text: t`It gained $10^{13}$ electrons`, correct: true, value: "gained_electrons" },
        { key: "B", text: t`It lost $10^{13}$ electrons`, correct: false, misconceptionId: "C01-M4", value: "lost_electrons" },
        { key: "C", text: t`It lost $10^{13}$ protons`, correct: false, misconceptionId: "C01-M1", value: "lost_protons" },
        { key: "D", text: t`It gained $10^{19}$ electrons`, correct: false, misconceptionId: "C01-M5", value: "gained_too_many" },
      ],
      solution: {
        steps: [
          t`The sphere is negative, so it gained electrons.`,
          t`$n$ $= \dfrac{1.6 \times 10^{-6}}{1.6 \times 10^{-19}}$ $= 10^{13}$ electrons.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.2 (ii)" },
      stem: t`A glass rod rubbed with silk gets a charge of $+3.2 \times 10^{-9}\ \mathrm{C}$. What happens to the silk?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rub" } },
      options: [
        { key: "A", text: t`It gets $+3.2 \times 10^{-9}\ \mathrm{C}$, the same as the glass`, correct: false, misconceptionId: "C01-M3", value: "silk_positive" },
        { key: "B", text: t`It gets $-3.2 \times 10^{-9}\ \mathrm{C}$, as protons pass from the silk to the glass`, correct: false, misconceptionId: "C01-M1", value: "protons_moved" },
        { key: "C", text: t`It gets $-3.2 \times 10^{-9}\ \mathrm{C}$, as electrons pass from the glass to the silk`, correct: true, value: "silk_negative" },
        { key: "D", text: t`It stays neutral: rubbing made new charge on the glass`, correct: false, misconceptionId: "C01-M2", value: "silk_neutral" },
      ],
      solution: {
        steps: [
          t`Rubbing moves electrons from the glass to the silk; protons do not move.`,
          t`Charge is conserved, so the silk gets an equal negative charge: $-3.2 \times 10^{-9}\ \mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.1 (i)" },
      stem: t`A positively charged glass rod is brought close to, but not touching, a metal rod isolated from the ground. What happens to the metal rod?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "induce" } },
      options: [
        { key: "A", text: t`Its far end becomes positive and its near end equally negative; its total charge stays zero`, correct: true, value: "ends_opposite" },
        { key: "B", text: t`The whole metal rod becomes negative`, correct: false, misconceptionId: "C01-M7", value: "all_negative" },
        { key: "C", text: t`Nothing: charge moves only when the rods touch`, correct: false, misconceptionId: "C01-M8", value: "no_change" },
        { key: "D", text: t`It takes positive charge from the glass rod across the gap`, correct: false, misconceptionId: "C01-M9", value: "gains_positive" },
      ],
      solution: {
        steps: [
          t`The positive rod draws the metal's free electrons to the near end, which becomes negative.`,
          t`The far end, short of electrons, becomes equally positive. No charge crosses the gap, so the total stays zero.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Ex Q.1 (vi)" },
      stem: t`An isolated metal sphere A carries $+50\ \mu\mathrm{C}$. It is touched to an uncharged isolated metal sphere B of half its radius, and then separated. What charge is now on B?`,
      verify: { kind: "value", inputs: { q: "50", k: "1/2" }, params: { ask: "share" } },
      options: [
        { key: "A", text: t`$16.7\ \mathrm{\mu C}$`, correct: true, value: "16.7000000000000" },
        { key: "B", text: t`$25\ \mathrm{\mu C}$`, correct: false, misconceptionId: "C01-M10", value: "25" },
        { key: "C", text: t`$33.3\ \mathrm{\mu C}$`, correct: false, misconceptionId: "C01-M11", value: "33.3000000000000" },
        { key: "D", text: t`$10\ \mathrm{\mu C}$`, correct: false, misconceptionId: "C01-M12", value: "10" },
      ],
      solution: {
        steps: [
          t`Touching spheres share charge in the ratio of their radii: $q_A : q_B = 2 : 1$.`,
          t`$q_B = \dfrac{1}{3} \times 50$ $\approx 16.7\ \mu\mathrm{C}$, and $q_A \approx 33.3\ \mu\mathrm{C}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/electrostatics-11-phy/Solved Ex.10.2" },
      stem: t`How many electrons must be removed from a neutral body to give it a charge of $+0.48\ \mu\mathrm{C}$? ($e = 1.6 \times 10^{-19}\ \mathrm{C}$)`,
      verify: { kind: "value", inputs: { q: "0.48", e: "1.6e-19" }, params: { ask: "count" } },
      options: [
        { key: "A", text: t`$7.68 \times 10^{-26}$`, correct: false, misconceptionId: "C01-M6", value: "7.68000000000000e-26" },
        { key: "B", text: t`$3.33 \times 10^{-13}$`, correct: false, misconceptionId: "C01-M16", value: "3.33000000000000e-13" },
        { key: "C", text: t`$3 \times 10^{12}$`, correct: true, value: "3000000000000" },
        { key: "D", text: t`$3 \times 10^{18}$`, correct: false, misconceptionId: "C01-M5", value: "3000000000000000000" },
      ],
      solution: {
        steps: [
          t`$q = 0.48\ \mu\mathrm{C}$ $= 0.48 \times 10^{-6}\ \mathrm{C}$.`,
          t`$n = \dfrac{q}{e}$ $= \dfrac{0.48 \times 10^{-6}}{1.6 \times 10^{-19}}$ $= 3 \times 10^{12}$.`,
        ],
      },
    },
  ],
};
