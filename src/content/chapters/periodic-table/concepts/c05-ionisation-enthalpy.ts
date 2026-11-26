import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Ionisation enthalpy rises across period 2, yet oxygen's is lower than nitrogen's. Why does oxygen break the trend?`,
    reveal: t`Nitrogen's $2p^3$ is half-filled and extra stable. Oxygen's fourth p electron is paired, and repulsion makes it easier to remove.`,
  },
  explanation: {
    intuition: [
      t`Ionisation enthalpy is the energy to remove an electron from a gaseous atom.`,
      t`It rises across a period as the nucleus holds electrons tighter.`,
      t`It falls down a group as the outer electron is further away.`,
      t`Half-filled and full subshells cause small exceptions.`,
    ],
    formal: [
      {
        title: "Trends and factors",
        points: [
          t`Depends on nuclear charge, atomic radius, shielding and subshell stability.`,
          t`Li 520 → F 1681 kJ/mol across period 2.`,
          t`$\Delta_i H_2$ > $\Delta_i H_1$: the second electron leaves a positive ion.`,
          t`Dips: Be > B (2s full) and N > O (2p half-filled); likewise P > S.`,
          t`Noble gases have the highest values; alkali metals the lowest.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which has the higher first ionisation enthalpy, Be or B?`,
      steps: [
        t`B's 2p electron is easier to remove than Be's 2s.`,
        t`Be's $2s^2$ is full and stable.`,
      ],
      answer: t`Be`,
    },
    visualSpec: t`Plot first ionisation enthalpy against atomic number and mark the peaks and dips.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks Li has more electrons.",
      remediation: "F has more; its larger nuclear charge holds them tighter.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks F's electron is in a higher shell.",
      remediation: "Both are period 2: same shell.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks Li is more electronegative.",
      remediation: "F is the most electronegative element.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Thinks the second electron is in a higher shell.",
      remediation: "It comes from the same or a lower shell, from a positive ion.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Thinks the atom gains a proton.",
      remediation: "The nucleus is unchanged; the ion's positive charge holds electrons tighter.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks the first electron is a core electron.",
      remediation: "The first electron removed is the outermost.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Follows the trend blindly.",
      remediation: "P's half-filled 3p is extra stable, so S dips below P.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Puts S above Cl.",
      remediation: "Cl has more protons in the same shell: higher than S.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Sets S equal to P.",
      remediation: "S's paired 3p electron is easier to remove: lower.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Follows the trend for O.",
      remediation: "N's half-filled 2p is extra stable: N > O.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Calls them equal.",
      remediation: "N's value is higher.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Thinks they cannot be compared.",
      remediation: "Subshell stability makes N > O.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Thinks larger atoms hold electrons tighter.",
      remediation: "S's outer electron is further out: easier to remove.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Calls them equal.",
      remediation: "Down a group ionisation enthalpy falls: S < O.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Thinks it depends on the ion formed.",
      remediation: "Distance from the nucleus decides: S is lower.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.3 (B)" },
      stem: t`The ionisation enthalpy of Li is 520 kJ/mol but that of F is 1681 kJ/mol, because`,
      verify: { kind: "value", inputs: {  }, params: { q: "li_f" } },
      options: [
        { key: "A", text: t`Li is more electronegative`, correct: false, misconceptionId: "C05-M3", value: "li_electronegative" },
        { key: "B", text: t`F's outer electron is in a higher shell`, correct: false, misconceptionId: "C05-M2", value: "f_higher_shell" },
        { key: "C", text: t`Li has more electrons`, correct: false, misconceptionId: "C05-M1", value: "li_more_electrons" },
        { key: "D", text: t`F has a larger effective nuclear charge and a smaller radius`, correct: true, value: "zeff_radius" },
      ],
      solution: {
        steps: [
          t`F has more protons in the same shell.`,
          t`Larger effective charge, smaller radius.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.3 (D)" },
      stem: t`The second ionisation enthalpy is always greater than the first because`,
      verify: { kind: "value", inputs: {  }, params: { q: "second" } },
      options: [
        { key: "A", text: t`the second electron is removed from a positive ion`, correct: true, value: "positive_ion" },
        { key: "B", text: t`the atom gains a proton`, correct: false, misconceptionId: "C05-M5", value: "gains_protons" },
        { key: "C", text: t`the first electron removed is a core electron`, correct: false, misconceptionId: "C05-M6", value: "core_first" },
        { key: "D", text: t`the second electron is in a higher shell`, correct: false, misconceptionId: "C05-M4", value: "higher_shell" },
      ],
      solution: {
        steps: [
          t`After one electron leaves, the ion is positive.`,
          t`Removing another takes more energy.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Solved Ex.7.6" },
      stem: t`First ionisation enthalpies: Si 780, P 1060, Cl 1255 kJ/mol. The value for S is`,
      verify: { kind: "value", inputs: {  }, params: { q: "sulfur" } },
      options: [
        { key: "A", text: t`between P's and Cl's`, correct: false, misconceptionId: "C05-M7", value: "between_p_cl" },
        { key: "B", text: t`less than P's, because P's half-filled 3p is extra stable`, correct: true, value: "below_p" },
        { key: "C", text: t`greater than Cl's`, correct: false, misconceptionId: "C05-M8", value: "above_cl" },
        { key: "D", text: t`equal to P's`, correct: false, misconceptionId: "C05-M9", value: "equal_p" },
      ],
      solution: {
        steps: [
          t`P: $3p^3$ half-filled, extra stable.`,
          t`S lies below P (about 1000 kJ/mol).`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "authored" },
      stem: t`Which has the higher first ionisation enthalpy, nitrogen or oxygen?`,
      verify: { kind: "value", inputs: {  }, params: { q: "n_o" } },
      options: [
        { key: "A", text: t`they are equal`, correct: false, misconceptionId: "C05-M11", value: "equal" },
        { key: "B", text: t`they cannot be compared`, correct: false, misconceptionId: "C05-M12", value: "cannot_compare" },
        { key: "C", text: t`nitrogen`, correct: true, value: "nitrogen" },
        { key: "D", text: t`oxygen`, correct: false, misconceptionId: "C05-M10", value: "oxygen" },
      ],
      solution: {
        steps: [
          t`N: $2p^3$, half-filled.`,
          t`N is higher than O.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.5 (D)" },
      stem: t`Which has the smaller first ionisation enthalpy, oxygen or sulfur?`,
      verify: { kind: "value", inputs: {  }, params: { q: "o_s" } },
      options: [
        { key: "A", text: t`it depends on the charge formed`, correct: false, misconceptionId: "C05-M15", value: "depends_charge" },
        { key: "B", text: t`oxygen`, correct: false, misconceptionId: "C05-M13", value: "oxygen" },
        { key: "C", text: t`they are equal`, correct: false, misconceptionId: "C05-M14", value: "equal" },
        { key: "D", text: t`sulfur`, correct: true, value: "sulfur" },
      ],
      solution: {
        steps: [
          t`S's valence electron is in shell 3, O's in shell 2.`,
          t`Further out: S is lower.`,
        ],
      },
    },
  ],
};
