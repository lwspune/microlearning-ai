import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Gallium comes below aluminium in group 13, so it should be larger. Yet gallium's atoms are slightly smaller. What shrinks them?`,
    reveal: t`Gallium has ten 3d electrons, which shield the nucleus poorly. The outer electrons feel a stronger pull and are drawn in.`,
  },
  explanation: {
    intuition: [
      t`Groups 13, 14 and 15 have $ns^2\,np^1$, $ns^2\,np^2$ and $ns^2\,np^3$ outer shells.`,
      t`Down a group, atoms grow and metallic character rises.`,
      t`Across a period, ionisation enthalpy rises.`,
      t`Poorly shielding d electrons cause the Ga anomaly.`,
    ],
    formal: [
      {
        title: "Trends",
        points: [
          t`Radius grows down a group, except Ga < Al (poor 3d shielding).`,
          t`Ionisation enthalpy rises across: Al 577 < Si 786 < P 1012 kJ/mol.`,
          t`$\ce{M^{3+}}$ radii: $\ce{B^{3+}}$ < $\ce{Al^{3+}}$ < $\ce{Ga^{3+}}$ < $\ce{In^{3+}}$ < $\ce{Tl^{3+}}$.`,
          t`Metallic character rises down a group: C nonmetal → Pb metal.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which is more metallic, nitrogen or bismuth?`,
      steps: [
        t`Both are group 15.`,
        t`Bi is at the bottom, where metallic character is greatest.`,
      ],
      answer: t`Bismuth`,
    },
    visualSpec: t`Lay out groups 13 to 15 and shade each element from nonmetal to metal.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Gives Ga fewer shells.",
      remediation: "Ga has four shells to Al's three; poor 3d shielding shrinks it.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Gives Ga fewer protons.",
      remediation: "Ga has 31 protons to Al's 13.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Calls Ga a nonmetal.",
      remediation: "Ga is a metal; its size anomaly comes from its 3d electrons.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Thinks nuclear charge falls across.",
      remediation: "Each step across adds a proton.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Adds new shells across a period.",
      remediation: "Across a period electrons enter the same shell.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Calls P a metal.",
      remediation: "P is a nonmetal; its high nuclear charge raises its ionisation enthalpy.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Reverses the order.",
      remediation: "Ions grow down the group as shells are added.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Carries the Ga atom anomaly to the ions.",
      remediation: t`For the 3+ ions the order follows the shells: $\ce{Al^{3+}}$ < $\ce{Ga^{3+}}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: "Thinks equal charge means equal radius.",
      remediation: "The number of shells differs, so radii differ.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Thinks metallic character falls down a group.",
      remediation: "Outer electrons are lost more easily lower down: it rises.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Thinks it stays the same.",
      remediation: "C is a nonmetal, Pb a metal.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Thinks it falls, then rises.",
      remediation: "It rises steadily from C to Pb.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Thinks ionisation enthalpy rises down a group.",
      remediation: "Outer electrons are further out: it falls.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Thinks it stays the same.",
      remediation: "N's is far higher than Bi's.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Thinks it rises, then falls.",
      remediation: "It falls down the group.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Solved Ex.9.2" },
      stem: t`The atomic radius of gallium is less than that of aluminium because`,
      verify: { kind: "value", inputs: {  }, params: { q: "ga_al" } },
      options: [
        { key: "A", text: t`gallium is a nonmetal`, correct: false, misconceptionId: "C01-M3", value: "nonmetal" },
        { key: "B", text: t`gallium has fewer electron shells`, correct: false, misconceptionId: "C01-M1", value: "fewer_shells" },
        { key: "C", text: t`gallium has fewer protons`, correct: false, misconceptionId: "C01-M2", value: "fewer_protons" },
        { key: "D", text: t`gallium's ten 3d electrons shield the nucleus poorly`, correct: true, value: "poor_d_shielding" },
      ],
      solution: {
        steps: [
          t`Ga has ten 3d electrons.`,
          t`They shield poorly, so the outer electrons are pulled in.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Solved Ex.9.3" },
      stem: t`First ionisation enthalpies: Al 577, Si 786, P 1012 kJ/mol. The rise is because`,
      verify: { kind: "value", inputs: {  }, params: { q: "al_si_p" } },
      options: [
        { key: "A", text: t`nuclear charge increases and radius decreases across the period`, correct: true, value: "charge_up_radius_down" },
        { key: "B", text: t`nuclear charge decreases across the period`, correct: false, misconceptionId: "C01-M4", value: "charge_falls" },
        { key: "C", text: t`each element adds a new shell`, correct: false, misconceptionId: "C01-M5", value: "new_shells" },
        { key: "D", text: t`phosphorus is a metal`, correct: false, misconceptionId: "C01-M6", value: "p_metal" },
      ],
      solution: {
        steps: [
          t`Across the period nuclear charge rises.`,
          t`Radius falls, so electrons are held tighter.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Solved Ex.9.1" },
      stem: t`Arrange the group 13 ions $\ce{M^{3+}}$ (B, Al, Ga, In, Tl) in increasing order of ionic radius.`,
      verify: { kind: "value", inputs: {  }, params: { q: "m3_radii" } },
      options: [
        { key: "A", text: t`$\ce{B^{3+}}$ < $\ce{Ga^{3+}}$ < $\ce{Al^{3+}}$ < $\ce{In^{3+}}$ < $\ce{Tl^{3+}}$`, correct: false, misconceptionId: "C01-M8", value: "b_ga_al_in_tl" },
        { key: "B", text: t`$\ce{B^{3+}}$ < $\ce{Al^{3+}}$ < $\ce{Ga^{3+}}$ < $\ce{In^{3+}}$ < $\ce{Tl^{3+}}$`, correct: true, value: "b_al_ga_in_tl" },
        { key: "C", text: t`all are equal, having the same charge`, correct: false, misconceptionId: "C01-M9", value: "all_equal" },
        { key: "D", text: t`$\ce{Tl^{3+}}$ < $\ce{In^{3+}}$ < $\ce{Ga^{3+}}$ < $\ce{Al^{3+}}$ < $\ce{B^{3+}}$`, correct: false, misconceptionId: "C01-M7", value: "tl_in_ga_al_b" },
      ],
      solution: {
        steps: [
          t`Same charge; shells increase down the group.`,
          t`$\ce{B^{3+}}$ smallest, $\ce{Tl^{3+}}$ largest.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.2 (A)" },
      stem: t`Going down group 14 from carbon to lead, metallic character`,
      verify: { kind: "value", inputs: {  }, params: { q: "metallic" } },
      options: [
        { key: "A", text: t`stays the same`, correct: false, misconceptionId: "C01-M11", value: "constant" },
        { key: "B", text: t`decreases`, correct: false, misconceptionId: "C01-M10", value: "decreases" },
        { key: "C", text: t`increases`, correct: true, value: "increases" },
        { key: "D", text: t`first decreases, then increases`, correct: false, misconceptionId: "C01-M12", value: "falls_rises" },
      ],
      solution: {
        steps: [
          t`C nonmetal, Si and Ge metalloids, Sn and Pb metals.`,
          t`Metallic character increases.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.5 (B)" },
      stem: t`Going down group 15, the first ionisation enthalpy`,
      verify: { kind: "value", inputs: {  }, params: { q: "ie_down" } },
      options: [
        { key: "A", text: t`first increases, then decreases`, correct: false, misconceptionId: "C01-M15", value: "rises_falls" },
        { key: "B", text: t`increases`, correct: false, misconceptionId: "C01-M13", value: "increases" },
        { key: "C", text: t`stays the same`, correct: false, misconceptionId: "C01-M14", value: "constant" },
        { key: "D", text: t`decreases`, correct: true, value: "decreases" },
      ],
      solution: {
        steps: [
          t`Outer electrons get further from the nucleus.`,
          t`Ionisation enthalpy decreases.`,
        ],
      },
    },
  ],
};
