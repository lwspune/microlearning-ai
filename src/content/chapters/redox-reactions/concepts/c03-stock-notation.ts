import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Iron forms two chlorides, $\ce{FeCl2}$ and $\ce{FeCl3}$. Calling both 'iron chloride' would cause chaos in a lab. How are they told apart by name?`,
    reveal: t`Stock notation: iron(II) chloride and iron(III) chloride. The Roman numeral gives iron's oxidation number.`,
  },
  explanation: {
    intuition: [
      t`Many metals show more than one oxidation number.`,
      t`Stock notation puts the metal's oxidation number in Roman numerals after its name.`,
      t`Work it out from the other ions' charges.`,
      t`To write a formula from the name, balance the charges.`,
    ],
    formal: [
      {
        title: "Stock notation",
        points: [
          t`$\ce{FeO}$: iron(II) oxide; $\ce{Fe2O3}$: iron(III) oxide.`,
          t`$\ce{MnO2}$: manganese(IV) oxide, Mn(IV)$\ce{O2}$.`,
          t`$\ce{Tl2O}$: thallium(I) oxide; $\ce{CuO}$: copper(II) oxide.`,
          t`Formula from name: tin(IV) oxide has $\ce{Sn^{4+}}$ and $\ce{O^{2-}}$, so $\ce{SnO2}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write the formula of chromium(III) oxide.`,
      steps: [
        t`$\ce{Cr^{3+}}$ and $\ce{O^{2-}}$.`,
        t`2 × (+3) = 3 × (2): $\ce{Cr2O3}$.`,
      ],
      answer: t`$\ce{Cr2O3}$`,
    },
    visualSpec: t`Match a metal ion's charge with anions until the charges cancel, then name it.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Counts the Mn atoms.",
      remediation: t`The numeral is Mn's oxidation number: $x - 4 = 0$, +4.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Counts the O atoms.",
      remediation: "Two O at −2 each make −4, so Mn is +4.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Takes each O as −4.",
      remediation: "Oxide O is −2.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Reads II as a subscript of Hg.",
      remediation: t`(II) is Hg's charge: one $\ce{Hg^{2+}}$ with two $\ce{Cl-}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Writes one Cl.",
      remediation: t`$\ce{Hg^{2+}}$ needs two $\ce{Cl-}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Gives mercury(I) chloride.",
      remediation: t`$\ce{Hg2Cl2}$ is mercury(I); (II) gives $\ce{HgCl2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Ignores sulphate's 2− charge.",
      remediation: t`$\ce{SO4^{2-}}$ needs two $\ce{Tl+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Swaps the subscripts.",
      remediation: t`Two $\ce{Tl+}$ balance one $\ce{SO4^{2-}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Uses thallium(III).",
      remediation: t`(I) means $\ce{Tl+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Uses the Fe subscript.",
      remediation: t`$2x = +6$, so each Fe is +3.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Puts both irons' charge on one.",
      remediation: "Share +6 over two Fe: +3 each.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: t`Confuses $\ce{Fe2O3}$ with $\ce{Fe3O4}$.`,
      remediation: t`$\ce{Fe3O4}$ is the mixed oxide; $\ce{Fe2O3}$ is iron(III).`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Leaves out H.",
      remediation: t`$+1 + x - 4 = 0$, so $x = +3$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Flips the sign.",
      remediation: "Gold is the positive centre: +3.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Takes gold as +1.",
      remediation: "Count the charges: H +1, four Cl −4, so Au is +3.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.1 (G)" },
      stem: t`The correct Stock notation for manganese dioxide is`,
      verify: { kind: "value", inputs: {  }, params: { q: "mno2" } },
      options: [
        { key: "A", text: t`Mn(II)$\ce{O2}$`, correct: false, misconceptionId: "C03-M2", value: "mn_ii" },
        { key: "B", text: t`Mn(VIII)$\ce{O2}$`, correct: false, misconceptionId: "C03-M3", value: "mn_viii" },
        { key: "C", text: t`Mn(I)$\ce{O2}$`, correct: false, misconceptionId: "C03-M1", value: "mn_i" },
        { key: "D", text: t`Mn(IV)$\ce{O2}$`, correct: true, value: "mn_iv" },
      ],
      solution: {
        steps: [
          t`$x + 2(-2) = 0$.`,
          t`Mn is +4: Mn(IV)$\ce{O2}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.2 (A)" },
      stem: t`The formula of mercury(II) chloride is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hgcl2" } },
      options: [
        { key: "A", text: t`$\ce{HgCl2}$`, correct: true, value: "hgcl2" },
        { key: "B", text: t`$\ce{Hg2Cl2}$`, correct: false, misconceptionId: "C03-M6", value: "hg2cl2" },
        { key: "C", text: t`HgCl`, correct: false, misconceptionId: "C03-M5", value: "hgcl" },
        { key: "D", text: t`$\ce{Hg2Cl}$`, correct: false, misconceptionId: "C03-M4", value: "hg2cl" },
      ],
      solution: {
        steps: [
          t`$\ce{Hg^{2+}}$ and $\ce{Cl-}$.`,
          t`$\ce{HgCl2}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.2 (B)" },
      stem: t`The formula of thallium(I) sulphate is`,
      verify: { kind: "value", inputs: {  }, params: { q: "tl2so4" } },
      options: [
        { key: "A", text: t`$\ce{TlSO4}$`, correct: false, misconceptionId: "C03-M7", value: "tlso4" },
        { key: "B", text: t`$\ce{Tl2SO4}$`, correct: true, value: "tl2so4" },
        { key: "C", text: t`$\ce{Tl2(SO4)3}$`, correct: false, misconceptionId: "C03-M9", value: "tl2_so4_3" },
        { key: "D", text: t`$\ce{Tl(SO4)2}$`, correct: false, misconceptionId: "C03-M8", value: "tl_so4_2" },
      ],
      solution: {
        steps: [
          t`$\ce{Tl+}$ and $\ce{SO4^{2-}}$.`,
          t`$\ce{Tl2SO4}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (G)" },
      stem: t`In Stock notation, $\ce{Fe2O3}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "fe2o3" } },
      options: [
        { key: "A", text: t`iron(VI) oxide`, correct: false, misconceptionId: "C03-M11", value: "iron_vi" },
        { key: "B", text: t`iron(II,III) oxide`, correct: false, misconceptionId: "C03-M12", value: "iron_ii_iii" },
        { key: "C", text: t`iron(III) oxide`, correct: true, value: "iron_iii" },
        { key: "D", text: t`iron(II) oxide`, correct: false, misconceptionId: "C03-M10", value: "iron_ii" },
      ],
      solution: {
        steps: [
          t`$2x + 3(-2) = 0$, so $x = +3$.`,
          t`Iron(III) oxide.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/redox-11-chem/Ex Q.3 (G)" },
      stem: t`The oxidation number of gold in $\ce{HAuCl4}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "haucl4" } },
      options: [
        { key: "A", text: t`+1`, correct: false, misconceptionId: "C03-M15", value: "plus_1" },
        { key: "B", text: t`+4`, correct: false, misconceptionId: "C03-M13", value: "plus_4" },
        { key: "C", text: t`−3`, correct: false, misconceptionId: "C03-M14", value: "minus_3" },
        { key: "D", text: t`+3`, correct: true, value: "plus_3" },
      ],
      solution: {
        steps: [
          t`$+1 + x + 4(-1) = 0$.`,
          t`$x = +3$.`,
        ],
      },
    },
  ],
};
