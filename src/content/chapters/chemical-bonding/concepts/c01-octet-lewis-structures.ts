import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Sodium is a violent metal and chlorine a poisonous gas. Together they make harmless table salt. What makes them hold on to each other?`,
    reveal: t`Sodium gives its outer electron to chlorine. Both end with eight outer electrons, like noble gases, and the oppositely charged ions attract.`,
  },
  explanation: {
    intuition: [
      t`Atoms tend to bond until each has eight outer electrons, an **octet**.`,
      t`They transfer electrons (ionic bonds) or share them (covalent bonds).`,
      t`In a coordinate bond one atom supplies both shared electrons.`,
      t`Some molecules break the rule: fewer than eight, more than eight, or an odd number.`,
    ],
    formal: [
      {
        title: "Kinds of bond",
        points: [
          t`**Ionic**: electron transfer, e.g. Li gives one electron to F in LiF.`,
          t`**Covalent**: each atom supplies one electron per shared pair.`,
          t`**Coordinate**: both electrons of the pair come from one atom.`,
          t`Lewis structures show bonding pairs as lines and lone pairs as dots.`,
        ],
      },
      {
        title: "Exceptions to the octet rule",
        points: [
          t`Incomplete octet: B in $\ce{BF3}$ has 6 electrons.`,
          t`Expanded octet: S in $\ce{SF6}$ has 12.`,
          t`Odd-electron molecules: NO, $\ce{NO2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Draw the Lewis structure of $\ce{N2}$.`,
      steps: [
        t`Each N has 5 valence electrons: 10 in all.`,
        t`A triple bond (6) and one lone pair on each N (4).`,
      ],
      answer: t`N≡N, one lone pair on each N`,
    },
    visualSpec: t`Move and share electron dots between atoms until each has a full outer shell.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Assumes every atom keeps an octet.",
      remediation: t`S in $\ce{SF6}$ has six bonds: 12 electrons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Counts only S's own valence electrons.",
      remediation: "Count all electrons in the six bonds around S.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Counts every electron on the F atoms.",
      remediation: "Count only the electrons around S: six shared pairs.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Confuses expanded and incomplete octets.",
      remediation: t`$\ce{SF6}$ has more than eight; $\ce{BF3}$ has fewer.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Ignores lone pairs when counting.",
      remediation: t`N in $\ce{NH3}$: 6 bonding + 2 lone-pair electrons = 8.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Counts only carbon's own electrons.",
      remediation: t`Shared pairs count for both atoms: C in $\ce{CH4}$ has 8.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Describes an ionic bond.",
      remediation: "In a coordinate bond the pair is shared, both electrons from one atom.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Describes a normal covalent bond.",
      remediation: "In a coordinate bond one atom gives both electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks metals share electrons in coordinate bonds.",
      remediation: t`A coordinate bond needs a lone pair donor, such as N in $\ce{NH3}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks LiF is covalent.",
      remediation: "A metal and a very electronegative non-metal form an ionic bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Reverses the transfer.",
      remediation: "Li loses its electron; F gains it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Calls it a coordinate bond.",
      remediation: "LiF forms by electron transfer: an ionic bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Stops at a double bond.",
      remediation: "C would have only 6 electrons; a triple bond gives both atoms an octet.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Draws a single bond.",
      remediation: "Ten valence electrons need a triple bond for both octets.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Calls CO ionic.",
      remediation: "C and O share electrons: covalent bonds.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.7 (C)" },
      stem: t`How many electrons surround sulfur in $\ce{SF6}$?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sf6" } },
      options: [
        { key: "A", text: t`48`, correct: false, misconceptionId: "C01-M3", value: "forty_eight" },
        { key: "B", text: t`8`, correct: false, misconceptionId: "C01-M1", value: "eight" },
        { key: "C", text: t`6`, correct: false, misconceptionId: "C01-M2", value: "six" },
        { key: "D", text: t`12`, correct: true, value: "twelve" },
      ],
      solution: {
        steps: [
          t`S forms six S–F bonds.`,
          t`6 × 2 = 12 electrons.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (C)" },
      stem: t`In which molecule does the central atom have an incomplete octet?`,
      verify: { kind: "value", inputs: {  }, params: { q: "incomplete" } },
      options: [
        { key: "A", text: t`$\ce{BF3}$`, correct: true, value: "bf3" },
        { key: "B", text: t`$\ce{SF6}$`, correct: false, misconceptionId: "C01-M4", value: "sf6" },
        { key: "C", text: t`$\ce{NH3}$`, correct: false, misconceptionId: "C01-M5", value: "nh3" },
        { key: "D", text: t`$\ce{CH4}$`, correct: false, misconceptionId: "C01-M6", value: "ch4" },
      ],
      solution: {
        steps: [
          t`B in $\ce{BF3}$ forms three bonds.`,
          t`Only 6 electrons around B.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.3 (D)" },
      stem: t`A coordinate bond forms when`,
      verify: { kind: "value", inputs: {  }, params: { q: "coordinate" } },
      options: [
        { key: "A", text: t`each atom supplies one electron of the pair`, correct: false, misconceptionId: "C01-M8", value: "one_each" },
        { key: "B", text: t`one atom supplies both electrons of the shared pair`, correct: true, value: "one_atom_gives_both" },
        { key: "C", text: t`two metal atoms share electrons`, correct: false, misconceptionId: "C01-M9", value: "metals_share" },
        { key: "D", text: t`an electron is transferred completely`, correct: false, misconceptionId: "C01-M7", value: "transfer" },
      ],
      solution: {
        steps: [
          t`Both electrons of the pair come from one atom.`,
          t`That is a coordinate bond.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Ex Q.2 (A)" },
      stem: t`The bond in lithium fluoride, LiF, forms by`,
      verify: { kind: "value", inputs: {  }, params: { q: "lif" } },
      options: [
        { key: "A", text: t`transfer of an electron from F to Li`, correct: false, misconceptionId: "C01-M11", value: "f_to_li" },
        { key: "B", text: t`sharing of an electron pair`, correct: false, misconceptionId: "C01-M10", value: "shared_pair" },
        { key: "C", text: t`transfer of an electron from Li to F`, correct: true, value: "li_to_f" },
        { key: "D", text: t`a coordinate bond from F to Li`, correct: false, misconceptionId: "C01-M12", value: "coordinate" },
      ],
      solution: {
        steps: [
          t`Li loses one electron, F gains it.`,
          t`$\ce{Li+}$ and $\ce{F-}$ attract.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/chemical-bonding-11-chem/Solved Ex.5.2" },
      stem: t`In the Lewis structure of carbon monoxide, CO, the carbon-oxygen bond is`,
      verify: { kind: "value", inputs: {  }, params: { q: "co" } },
      options: [
        { key: "A", text: t`an ionic bond`, correct: false, misconceptionId: "C01-M15", value: "ionic" },
        { key: "B", text: t`a double bond`, correct: false, misconceptionId: "C01-M13", value: "double" },
        { key: "C", text: t`a single bond`, correct: false, misconceptionId: "C01-M14", value: "single" },
        { key: "D", text: t`a triple bond`, correct: true, value: "triple" },
      ],
      solution: {
        steps: [
          t`10 valence electrons; both need octets.`,
          t`A triple bond with one lone pair on each.`,
        ],
      },
    },
  ],
};
