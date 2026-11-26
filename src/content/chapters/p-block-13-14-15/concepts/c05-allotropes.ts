import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "draft",
  hook: {
    prompt: t`Diamond is the hardest natural substance and an insulator; graphite is soft enough to write with and conducts electricity. Both are pure carbon. How?`,
    reveal: t`The atoms are bonded differently: a rigid 3D network of $sp^3$ carbons in diamond, sliding layers of $sp^2$ carbons with free electrons in graphite.`,
  },
  explanation: {
    intuition: [
      t`**Allotropes** are different forms of the same element.`,
      t`Carbon's allotropes: diamond, graphite and fullerenes.`,
      t`Phosphorus's: white and red.`,
      t`Structure, not composition, decides their properties.`,
    ],
    formal: [
      {
        title: "Carbon",
        points: [
          t`Diamond: each C $sp^3$-bonded to four others in a 3D network; hard, insulating.`,
          t`Graphite: $sp^2$ layers; one delocalised electron per C; soft, conducting.`,
          t`Fullerenes: $\ce{C60}$ is a cage of 12 pentagons and 20 hexagons.`,
        ],
      },
      {
        title: "Phosphorus",
        points: [
          t`White: discrete $\ce{P4}$ tetrahedra with strained $60^\circ$ angles; very reactive, glows in air.`,
          t`Red: polymeric chains of $\ce{P4}$ units; much more stable.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is graphite used as a lubricant?`,
      steps: [
        t`Its layers are held by weak forces.`,
        t`They slide over one another.`,
      ],
      answer: t`Its layers slide easily`,
    },
    visualSpec: t`Rotate models of diamond, graphite and $\ce{C60}$ side by side.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Doubts that the buckyball is carbon.",
      remediation: t`$\ce{C60}$, the buckyball, is a carbon allotrope.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Doubts diamond.",
      remediation: "Diamond is pure carbon.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Doubts graphite.",
      remediation: "Graphite is pure carbon.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Credits ions in graphite.",
      remediation: "Graphite is covalent; delocalised electrons carry current.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Calls graphite a metal.",
      remediation: "Graphite is a nonmetal form of carbon.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Calls graphite $sp^3$.`,
      remediation: t`Graphite's carbons are $sp^2$, leaving one electron free.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Gives diamond delocalised electrons.",
      remediation: "All four electrons are in σ bonds: none free.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Gives diamond layers.",
      remediation: "Layers belong to graphite.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Gives diamond ionic bonds.",
      remediation: "Diamond's bonds are covalent.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Puts the strain in red phosphorus.",
      remediation: t`White phosphorus's $\ce{P4}$ is strained.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Calls white phosphorus polymeric.",
      remediation: t`Red phosphorus is polymeric; white is discrete $\ce{P4}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: t`Gives $\ce{P4}$ triple bonds.`,
      remediation: t`$\ce{P4}$ has six P–P single bonds.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: t`Calls $\ce{C60}$ a chain.`,
      remediation: t`$\ce{C60}$ is a closed cage.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Calls it layered.",
      remediation: t`Layers belong to graphite; $\ce{C60}$ is a ball.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Calls it a hydrocarbon.",
      remediation: t`$\ce{C60}$ is pure carbon.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.1 (A)" },
      stem: t`Which of these is NOT an allotrope of carbon?`,
      verify: { kind: "value", inputs: {  }, params: { q: "not_carbon" } },
      options: [
        { key: "A", text: t`graphite`, correct: false, misconceptionId: "C05-M3", value: "graphite" },
        { key: "B", text: t`diamond`, correct: false, misconceptionId: "C05-M2", value: "diamond" },
        { key: "C", text: t`buckyball`, correct: false, misconceptionId: "C05-M1", value: "bucky_ball" },
        { key: "D", text: t`emerald`, correct: true, value: "emerald" },
      ],
      solution: {
        steps: [
          t`Emerald is a beryllium aluminium silicate.`,
          t`Not carbon.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.8 (A)" },
      stem: t`Graphite conducts electricity because`,
      verify: { kind: "value", inputs: {  }, params: { q: "graphite" } },
      options: [
        { key: "A", text: t`each $sp^2$ carbon has one delocalised electron free to move`, correct: true, value: "delocalised_sp2" },
        { key: "B", text: t`it is a metal`, correct: false, misconceptionId: "C05-M5", value: "metal" },
        { key: "C", text: t`its carbons are $sp^3$ bonded`, correct: false, misconceptionId: "C05-M6", value: "sp3" },
        { key: "D", text: t`it contains ions`, correct: false, misconceptionId: "C05-M4", value: "ions" },
      ],
      solution: {
        steps: [
          t`Each $sp^2$ C keeps one electron free.`,
          t`These delocalised electrons carry current.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.8 (A)" },
      stem: t`Diamond is very hard because`,
      verify: { kind: "value", inputs: {  }, params: { q: "diamond" } },
      options: [
        { key: "A", text: t`it has delocalised electrons`, correct: false, misconceptionId: "C05-M7", value: "delocalised" },
        { key: "B", text: t`each $sp^3$ carbon is bonded to four others in a rigid 3D network`, correct: true, value: "sp3_network" },
        { key: "C", text: t`its atoms are arranged in layers`, correct: false, misconceptionId: "C05-M8", value: "layers" },
        { key: "D", text: t`its bonds are ionic`, correct: false, misconceptionId: "C05-M9", value: "ionic" },
      ],
      solution: {
        steps: [
          t`Each C bonds to four others.`,
          t`A rigid 3D network.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/p-block-11-chem/Ex Q.8 (B)" },
      stem: t`White phosphorus is much more reactive than red phosphorus because`,
      verify: { kind: "value", inputs: {  }, params: { q: "white_p" } },
      options: [
        { key: "A", text: t`white phosphorus is polymeric`, correct: false, misconceptionId: "C05-M11", value: "white_polymeric" },
        { key: "B", text: t`white phosphorus has P≡P triple bonds`, correct: false, misconceptionId: "C05-M12", value: "triple_bonds" },
        { key: "C", text: t`its discrete $\ce{P4}$ molecules have strained $60^\circ$ bond angles`, correct: true, value: "strained_p4" },
        { key: "D", text: t`red phosphorus has the strained bonds`, correct: false, misconceptionId: "C05-M10", value: "red_strained" },
      ],
      solution: {
        steps: [
          t`$\ce{P4}$ angles are $60^\circ$, far from ideal.`,
          t`The strain makes it reactive.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "authored" },
      stem: t`Buckminsterfullerene, $\ce{C60}$, is`,
      verify: { kind: "value", inputs: {  }, params: { q: "c60" } },
      options: [
        { key: "A", text: t`a compound of carbon and hydrogen`, correct: false, misconceptionId: "C05-M15", value: "hydrocarbon" },
        { key: "B", text: t`a straight chain of 60 carbon atoms`, correct: false, misconceptionId: "C05-M13", value: "chain" },
        { key: "C", text: t`a layered solid like graphite`, correct: false, misconceptionId: "C05-M14", value: "layered" },
        { key: "D", text: t`a closed cage of carbon atoms in pentagons and hexagons`, correct: true, value: "cage" },
      ],
      solution: {
        steps: [
          t`60 carbons in pentagons and hexagons.`,
          t`A closed cage.`,
        ],
      },
    },
  ],
};
