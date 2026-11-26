import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`Nylon stockings in 1940 and polyester shirts later replaced silk and cotton. Both fibres are made by condensation. What links their monomers?`,
    reveal: t`In nylon, amide links $\ce{-CO-NH-}$ like those in proteins; in polyester, ester links $\ce{-CO-O-}$.`,
  },
  explanation: {
    intuition: [
      t`Nylons are **polyamides**: amine and acid groups join, losing water.`,
      t`Polyesters join alcohol and acid groups, also losing water.`,
      t`The numbers in nylon 6,6 count carbons in each monomer.`,
      t`Hydrogen bonds between nylon chains make strong fibres.`,
    ],
    formal: [
      {
        title: "Nylons",
        points: [
          t`**Nylon 6,6**: hexamethylenediamine, $\ce{H2N(CH2)6NH2}$, + adipic acid, $\ce{HOOC(CH2)4COOH}$.`,
          t`**Nylon 6**: caprolactam, a seven-membered ring of six C and one N, heated with a trace of water.`,
          t`Uses: fabrics, ropes, bristles, tyre cords.`,
        ],
      },
      {
        title: "Terylene",
        points: [
          t`Ethylene glycol + terephthalic acid, heated to about 533 K, lose water.`,
          t`Terylene is also called Dacron or PET.`,
          t`Uses: crease-resistant fabrics, bottles.`,
        ],
      },
    ],
    worked: {
      prompt: t`Why is it called nylon 6,6?`,
      steps: [
        t`Hexamethylenediamine has 6 carbons.`,
        t`Adipic acid has 6 carbons.`,
      ],
      answer: t`Both monomers have six carbons`,
    },
    visualSpec: t`Snap amine and acid ends together, popping out a water molecule at each link.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: "Thinks nylon is semisynthetic.",
      remediation: "Nylon is fully synthetic, made from small molecules.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M2",
      mistake: "Thinks nylon is a polyester.",
      remediation: "Nylon has amide links: it is a polyamide.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M3",
      mistake: "Thinks nylon is a cellulose fibre.",
      remediation: "Cellulose fibres are cotton and rayon; nylon is a synthetic polyamide.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M4",
      mistake: "Confuses nylon 6,6 with nylon 6.",
      remediation: "Caprolactam makes nylon 6; nylon 6,6 needs a diamine and a diacid.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M5",
      mistake: "Confuses nylon 6,6 with terylene.",
      remediation: "Ethylene glycol and terephthalic acid make terylene.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: "Thinks nylon is an ester of adipic acid.",
      remediation: "Nylon needs an amine to form amide links.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M7",
      mistake: "Leaves out the C=O carbon of the ring.",
      remediation: t`The ring has five $\ce{CH2}$ groups and one C=O: six carbons.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M8",
      mistake: "Counts the nitrogen as a carbon.",
      remediation: "The seven-membered ring has six C and one N.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M9",
      mistake: "Counts only the atoms of the amide group.",
      remediation: "Count every carbon in the ring: six.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M10",
      mistake: "Confuses Dacron with nylon 6.",
      remediation: "Dacron is a polyester: terylene.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M11",
      mistake: "Confuses Dacron with Orlon.",
      remediation: "Orlon is polyacrylonitrile; Dacron is terylene.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M12",
      mistake: "Confuses Dacron with Novolac.",
      remediation: "Novolac is a phenol-formaldehyde polymer; Dacron is terylene.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M13",
      mistake: "Takes the ester link for an amide.",
      remediation: t`An amide link is $\ce{-CO-NH-}$; $\ce{-CO-O-}$ is an ester.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M14",
      mistake: "Calls it a polyolefin.",
      remediation: "Polyolefins such as polythene have only C-C links.",
      fallback: { kind: "none" },
    },
    {
      id: "C05-M15",
      mistake: "Calls it a polysaccharide.",
      remediation: "Polysaccharides have glycosidic C-O-C links between sugars.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.1 (i)" },
      stem: t`Nylon fibres are`,
      verify: { kind: "value", inputs: {  }, params: { q: "nylon" } },
      options: [
        { key: "A", text: t`cellulose fibres`, correct: false, misconceptionId: "C05-M3", value: "cellulose" },
        { key: "B", text: t`polyester fibres`, correct: false, misconceptionId: "C05-M2", value: "polyester" },
        { key: "C", text: t`semisynthetic fibres`, correct: false, misconceptionId: "C05-M1", value: "semisynthetic" },
        { key: "D", text: t`polyamide fibres`, correct: true, value: "polyamide" },
      ],
      solution: {
        steps: [
          t`Nylon chains are joined by $\ce{-CO-NH-}$ links.`,
          t`So nylon is a polyamide.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/polymers-12-pyq#13" },
      stem: t`Nylon 6,6 is made from`,
      verify: { kind: "value", inputs: {  }, params: { q: "nylon66" } },
      options: [
        { key: "A", text: t`hexamethylenediamine and adipic acid`, correct: true, value: "diamine_adipic" },
        { key: "B", text: t`ethylene glycol and terephthalic acid`, correct: false, misconceptionId: "C05-M5", value: "glycol_terephthalic" },
        { key: "C", text: t`ethylene glycol and adipic acid`, correct: false, misconceptionId: "C05-M6", value: "glycol_adipic" },
        { key: "D", text: t`caprolactam`, correct: false, misconceptionId: "C05-M4", value: "caprolactam" },
      ],
      solution: {
        steps: [
          t`Nylon 6,6 joins a 6-carbon diamine and a 6-carbon diacid.`,
          t`Hexamethylenediamine and adipic acid.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.1 (vi)" },
      stem: t`How many carbon atoms are there in the ring of $\varepsilon$-caprolactam?`,
      verify: { kind: "value", inputs: {  }, params: { q: "ring" } },
      options: [
        { key: "A", text: t`five`, correct: false, misconceptionId: "C05-M7", value: "five" },
        { key: "B", text: t`six`, correct: true, value: "six" },
        { key: "C", text: t`seven`, correct: false, misconceptionId: "C05-M8", value: "seven" },
        { key: "D", text: t`two`, correct: false, misconceptionId: "C05-M9", value: "two" },
      ],
      solution: {
        steps: [
          t`The ring: five $\ce{CH2}$, one C=O, one NH.`,
          t`Six carbon atoms.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.1 (iv)" },
      stem: t`Dacron is another name for`,
      verify: { kind: "value", inputs: {  }, params: { q: "dacron" } },
      options: [
        { key: "A", text: t`Orlon`, correct: false, misconceptionId: "C05-M11", value: "orlon" },
        { key: "B", text: t`Novolac`, correct: false, misconceptionId: "C05-M12", value: "novolac" },
        { key: "C", text: t`terylene`, correct: true, value: "terylene" },
        { key: "D", text: t`nylon 6`, correct: false, misconceptionId: "C05-M10", value: "nylon6" },
      ],
      solution: {
        steps: [
          t`Dacron, terylene and PET are one polyester.`,
          t`Dacron is terylene.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/polymers-12-chem/Ex Q.3 (iv)" },
      stem: t`A polymer whose chain contains the link $\ce{-CO-O-}$ is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ester" } },
      options: [
        { key: "A", text: t`a polysaccharide`, correct: false, misconceptionId: "C05-M15", value: "polysaccharide" },
        { key: "B", text: t`a polyamide`, correct: false, misconceptionId: "C05-M13", value: "polyamide" },
        { key: "C", text: t`a polyolefin`, correct: false, misconceptionId: "C05-M14", value: "polyolefin" },
        { key: "D", text: t`a polyester`, correct: true, value: "polyester" },
      ],
      solution: {
        steps: [
          t`$\ce{-CO-O-}$ is an ester link.`,
          t`The polymer is a polyester.`,
        ],
      },
    },
  ],
};
