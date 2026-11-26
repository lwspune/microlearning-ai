import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "draft",
  hook: {
    prompt: t`Copper sulfate solution is bright blue, zinc sulfate colourless. Both are d-block metals side by side. Why the difference?`,
    reveal: t`$\ce{Cu^{2+}}$ has a $3d^9$ subshell with a gap that absorbs visible light; $\ce{Zn^{2+}}$'s $3d^{10}$ is full, so nothing is absorbed.`,
  },
  explanation: {
    intuition: [
      t`Each block has its own character.`,
      t`s block: soft, reactive metals with colourless ions.`,
      t`p block: metals, metalloids and nonmetals, ending with noble gases.`,
      t`d and f blocks: metals with variable oxidation states and often coloured ions.`,
    ],
    formal: [
      {
        title: "Blocks",
        points: [
          t`s block (groups 1, 2): reactive metals; group 1 react vigorously with water.`,
          t`p block (13–18): Al metal, Si metalloid, P nonmetal across period 3.`,
          t`d block (3–12): variable oxidation states; coloured ions with incomplete d subshells.`,
          t`f block: lanthanoids and actinoids at the bottom.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is $\ce{Sc^{3+}}$ ($3d^0$) coloured?`,
      steps: [
        t`Colour needs d electrons that can absorb light.`,
        t`$3d^0$ has none.`,
      ],
      answer: t`No, it is colourless`,
    },
    visualSpec: t`Colour-code the table by block and compare typical members of each.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks zinc is not a metal.",
      remediation: t`Zinc is a metal; its full $3d^{10}$ explains the lack of colour.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Credits reactivity.",
      remediation: "Colour comes from incomplete d subshells.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: t`Gives $\ce{Zn^{2+}}$ unpaired electrons.`,
      remediation: t`$\ce{Zn^{2+}}$ is $3d^{10}$: all paired.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Picks the d block.",
      remediation: "d-block chlorides are often coloured; vigorous reaction with water marks the s block.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Picks the p block.",
      remediation: "Vigorous water reactions and colourless salts point to the s block.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Picks the f block.",
      remediation: "Reactive metals like Na and Mg are s block.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Gives transition metals a fixed +1 state.",
      remediation: "They show several oxidation states, such as Fe +2 and +3.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Calls them inert.",
      remediation: "Noble gases are inert; d-block metals react.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Calls them nonmetals.",
      remediation: "All d-block elements are metals.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Says only nonmetals.",
      remediation: "Al and Sn are p-block metals.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Says only metals.",
      remediation: "C, N, O and the halogens are p-block nonmetals.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Says only noble gases.",
      remediation: "Noble gases are just group 18.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Reverses the change.",
      remediation: "Metallic character falls across a period: metal first.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Calls all three metals.",
      remediation: "Si is a metalloid and P a nonmetal.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M15",
      mistake: "Puts the metalloid first.",
      remediation: "Al (13) is the metal; Si (14) the metalloid.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.1 (E)" },
      stem: t`Copper forms coloured salts but zinc forms colourless ones because`,
      verify: { kind: "value", inputs: {  }, params: { q: "cu_zn" } },
      options: [
        { key: "A", text: t`copper is more reactive than zinc`, correct: false, misconceptionId: "C03-M2", value: "cu_more_reactive" },
        { key: "B", text: t`$\ce{Zn^{2+}}$ has unpaired electrons`, correct: false, misconceptionId: "C03-M3", value: "zn_unpaired" },
        { key: "C", text: t`zinc is not a metal`, correct: false, misconceptionId: "C03-M1", value: "zn_not_metal" },
        { key: "D", text: t`$\ce{Cu^{2+}}$ has an incomplete 3d subshell ($3d^9$); $\ce{Zn^{2+}}$ has a full one ($3d^{10}$)`, correct: true, value: "incomplete_d" },
      ],
      solution: {
        steps: [
          t`$\ce{Cu^{2+}}$: $3d^9$ absorbs visible light.`,
          t`$\ce{Zn^{2+}}$: $3d^{10}$ cannot.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Solved Ex.7.4" },
      stem: t`Two metals form colourless chlorides; one reacts vigorously with water and the other slowly. The metals belong to the`,
      verify: { kind: "value", inputs: {  }, params: { q: "two_metals" } },
      options: [
        { key: "A", text: t`s block`, correct: true, value: "s_block" },
        { key: "B", text: t`f block`, correct: false, misconceptionId: "C03-M6", value: "f_block" },
        { key: "C", text: t`p block`, correct: false, misconceptionId: "C03-M5", value: "p_block" },
        { key: "D", text: t`d block`, correct: false, misconceptionId: "C03-M4", value: "d_block" },
      ],
      solution: {
        steps: [
          t`Colourless chlorides and water reactions: Na and Mg.`,
          t`s block.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "authored" },
      stem: t`Transition (d-block) elements typically show`,
      verify: { kind: "value", inputs: {  }, params: { q: "d_feature" } },
      options: [
        { key: "A", text: t`a single oxidation state of +1`, correct: false, misconceptionId: "C03-M7", value: "fixed_plus1" },
        { key: "B", text: t`variable oxidation states and coloured ions`, correct: true, value: "variable_coloured" },
        { key: "C", text: t`non-metallic behaviour`, correct: false, misconceptionId: "C03-M9", value: "nonmetallic" },
        { key: "D", text: t`the inertness of noble gases`, correct: false, misconceptionId: "C03-M8", value: "inert" },
      ],
      solution: {
        steps: [
          t`Incomplete d subshells.`,
          t`Variable oxidation states and coloured ions.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "authored" },
      stem: t`The p block contains`,
      verify: { kind: "value", inputs: {  }, params: { q: "p_contains" } },
      options: [
        { key: "A", text: t`only metals`, correct: false, misconceptionId: "C03-M11", value: "only_metals" },
        { key: "B", text: t`only noble gases`, correct: false, misconceptionId: "C03-M12", value: "only_noble" },
        { key: "C", text: t`metals, metalloids and nonmetals`, correct: true, value: "all_three" },
        { key: "D", text: t`only nonmetals`, correct: false, misconceptionId: "C03-M10", value: "only_nonmetals" },
      ],
      solution: {
        steps: [
          t`Al is a metal, Si a metalloid, Cl a nonmetal.`,
          t`All in the p block.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/periodic-table-11-chem/Ex Q.1 (D)" },
      stem: t`Across period 3, aluminium (13), silicon (14) and phosphorus (15) change from`,
      verify: { kind: "value", inputs: {  }, params: { q: "al_p" } },
      options: [
        { key: "A", text: t`metalloid to metal to nonmetal`, correct: false, misconceptionId: "C03-M15", value: "metalloid_first" },
        { key: "B", text: t`nonmetal to metalloid to metal`, correct: false, misconceptionId: "C03-M13", value: "nonmetal_to_metal" },
        { key: "C", text: t`metal to metal to metal`, correct: false, misconceptionId: "C03-M14", value: "all_metals" },
        { key: "D", text: t`metal to metalloid to nonmetal`, correct: true, value: "metal_metalloid_nonmetal" },
      ],
      solution: {
        steps: [
          t`Metallic character falls across a period.`,
          t`Al metal, Si metalloid, P nonmetal.`,
        ],
      },
    },
  ],
};
