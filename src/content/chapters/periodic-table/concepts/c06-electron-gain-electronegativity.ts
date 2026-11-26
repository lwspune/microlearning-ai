import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "draft",
  hook: {
    prompt: t`Fluorine is the most electronegative element, yet chlorine releases more energy when it gains an electron. How can both be true?`,
    reveal: t`They measure different things. Fluorine is tiny, so an added electron is crowded and repelled. In a bond, though, fluorine pulls shared electrons hardest.`,
  },
  explanation: {
    intuition: [
      t`**Electron gain enthalpy**: energy change when a gaseous atom gains an electron.`,
      t`**Electronegativity**: a bonded atom's pull on a shared pair.`,
      t`Electron gain enthalpy can be measured; electronegativity is a relative scale.`,
      t`Both generally grow across a period and fall down a group.`,
    ],
    formal: [
      {
        title: "Trends",
        points: [
          t`Electronegativity across period 2: Li 1.0, Be 1.5, B 2.0, C 2.5, N 3.0 (Pauling).`,
          t`F is the most electronegative element.`,
          t`Cl has a more negative electron gain enthalpy than F: F's small size crowds the added electron.`,
          t`F's electron gain enthalpy is more negative than O's.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which has the more negative electron gain enthalpy, Cl or Br?`,
      steps: [
        t`Down a group atoms get larger.`,
        t`The added electron is held less tightly in Br.`,
      ],
      answer: t`Cl`,
    },
    visualSpec: t`Compare an atom pulling an extra electron in alone with one pulling on a shared pair in a bond.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Thinks electronegativity is measured directly.",
      remediation: "It is a relative scale; electron gain enthalpy is measured.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M2",
      mistake: "Says both are measured.",
      remediation: "Electronegativity is not a measured energy.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: "Says neither is measured.",
      remediation: "Electron gain enthalpy is measured experimentally.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M4",
      mistake: "Thinks electron gain always grows up a group.",
      remediation: "F's small size makes its value less negative than Cl's.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M5",
      mistake: "Calls them equal.",
      remediation: "Cl's value is more negative.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M6",
      mistake: "Thinks larger atoms gain electrons more readily.",
      remediation: "Br, being larger, releases less energy than Cl.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M7",
      mistake: "Thinks O gains an electron more readily.",
      remediation: "F, with more protons and one gap in 2p, releases more.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M8",
      mistake: "Calls them equal.",
      remediation: "F's value is more negative.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M9",
      mistake: "Thinks neither gains electrons.",
      remediation: "Both release energy on gaining one electron.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M10",
      mistake: "Thinks it decreases across a period.",
      remediation: "Rising nuclear charge pulls harder: it increases.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M11",
      mistake: "Thinks it stays the same.",
      remediation: "It rises from 1.0 (Li) to 3.0 (N).",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M12",
      mistake: "Thinks it rises then falls.",
      remediation: "It rises steadily across the period.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M13",
      mistake: "Gives electron gain enthalpy.",
      remediation: "Electronegativity is about a shared pair in a bond.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M14",
      mistake: "Gives ionisation enthalpy.",
      remediation: "That removes an electron; electronegativity pulls a shared pair.",
      fallback: { kind: "none" },
    },
    {
      id: "C06-M15",
      mistake: "Gives ionic charge.",
      remediation: "Electronegativity is a tendency, not a charge.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.3 (F)" },
      stem: t`Which of these can be measured experimentally?`,
      verify: { kind: "value", inputs: {  }, params: { q: "measured" } },
      options: [
        { key: "A", text: t`electronegativity`, correct: false, misconceptionId: "C06-M1", value: "electronegativity" },
        { key: "B", text: t`electron gain enthalpy`, correct: true, value: "electron_gain" },
        { key: "C", text: t`neither`, correct: false, misconceptionId: "C06-M3", value: "neither" },
        { key: "D", text: t`both`, correct: false, misconceptionId: "C06-M2", value: "both" },
      ],
      solution: {
        steps: [
          t`Electron gain enthalpy is an energy change.`,
          t`It can be measured; electronegativity cannot.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.5 (J)" },
      stem: t`Which has the more negative electron gain enthalpy, F or Cl?`,
      verify: { kind: "value", inputs: {  }, params: { q: "cl_f" } },
      options: [
        { key: "A", text: t`they are equal`, correct: false, misconceptionId: "C06-M5", value: "equal" },
        { key: "B", text: t`F`, correct: false, misconceptionId: "C06-M4", value: "fluorine" },
        { key: "C", text: t`Cl`, correct: true, value: "chlorine" },
        { key: "D", text: t`neither: Br has the most negative`, correct: false, misconceptionId: "C06-M6", value: "bromine" },
      ],
      solution: {
        steps: [
          t`F is very small; its added electron is repelled.`,
          t`Cl's value is more negative.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Solved Ex.7.7" },
      stem: t`Which has the more negative electron gain enthalpy, F or O?`,
      verify: { kind: "value", inputs: {  }, params: { q: "f_o" } },
      options: [
        { key: "A", text: t`neither gains electrons`, correct: false, misconceptionId: "C06-M9", value: "neither" },
        { key: "B", text: t`O`, correct: false, misconceptionId: "C06-M7", value: "oxygen" },
        { key: "C", text: t`they are equal`, correct: false, misconceptionId: "C06-M8", value: "equal" },
        { key: "D", text: t`F`, correct: true, value: "fluorine" },
      ],
      solution: {
        steps: [
          t`F has more protons in the same shell.`,
          t`F's value is more negative.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.1 (A)" },
      stem: t`Across period 2 from Li to N, electronegativity`,
      verify: { kind: "value", inputs: {  }, params: { q: "across" } },
      options: [
        { key: "A", text: t`increases`, correct: true, value: "increases" },
        { key: "B", text: t`rises, then falls`, correct: false, misconceptionId: "C06-M12", value: "rises_falls" },
        { key: "C", text: t`decreases`, correct: false, misconceptionId: "C06-M10", value: "decreases" },
        { key: "D", text: t`stays the same`, correct: false, misconceptionId: "C06-M11", value: "constant" },
      ],
      solution: {
        steps: [
          t`Nuclear charge rises across the period.`,
          t`Electronegativity increases.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.5 (E)" },
      stem: t`Electronegativity is`,
      verify: { kind: "value", inputs: {  }, params: { q: "define" } },
      options: [
        { key: "A", text: t`the energy released when a gaseous atom gains an electron`, correct: false, misconceptionId: "C06-M13", value: "gain_energy" },
        { key: "B", text: t`the tendency of a bonded atom to attract the shared electron pair`, correct: true, value: "bonded_pull" },
        { key: "C", text: t`the energy needed to remove an electron from a gaseous atom`, correct: false, misconceptionId: "C06-M14", value: "remove_energy" },
        { key: "D", text: t`the charge on an atom's ion`, correct: false, misconceptionId: "C06-M15", value: "ion_charge" },
      ],
      solution: {
        steps: [
          t`It describes atoms in a bond.`,
          t`Their pull on the shared pair.`,
        ],
      },
    },
  ],
};
