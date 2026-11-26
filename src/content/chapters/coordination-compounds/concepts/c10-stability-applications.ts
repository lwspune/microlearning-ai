import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A child with lead poisoning is given EDTA, and the lead leaves the body in the urine. How can a ligand pull a metal out of the body?`,
    reveal: t`EDTA wraps round $\ce{Pb^2+}$ with six donor atoms, forming a very stable, soluble chelate (a huge stability constant) that the kidneys excrete.`,
  },
  explanation: {
    intuition: [
      t`Forming a complex is an equilibrium: metal ion and ligands on one side, the complex on the other.`,
      t`Its equilibrium constant, the **stability constant** $K$, tells how far the equilibrium goes.`,
      t`A larger $K$ means more complex and less free metal ion: a more stable complex.`,
      t`Small, highly charged metal ions and ring-forming (chelating) ligands give the most stable complexes.`,
      t`Stable complexes are used in medicine, in chemical analysis, and by living things.`,
    ],
    formal: [
      {
        title: "Stability constant",
        points: [
          t`A metal ion M and $n$ ligands L form the complex: $\mathrm{M} + n\,\mathrm{L}$ $\rightleftharpoons \mathrm{ML}_n$.`,
          t`The **stability constant** is $K = \dfrac{[ML_n]}{[M][L]^n}$.`,
          t`The higher the value of $K$, the greater the stability of the complex.`,
          t`Compare $K$ values by their powers of ten first: $10^{33}$ is far larger than $10^{18}$.`,
        ],
      },
      {
        title: "What makes a complex stable",
        points: [
          t`**Charge to size ratio** of the metal ion: the higher it is, the more stable the complex.`,
          t`$\ce{Cu^2+}$ (69 pm) forms more stable complexes than $\ce{Cd^2+}$ (97 pm), which has the same charge.`,
          t`Divalent ions follow the Irving–William order: $\ce{Cu^2+} > \ce{Ni^2+}$ $> \ce{Co^2+} > \ce{Fe^2+}$ $> \ce{Mn^2+} > \ce{Cd^2+}$.`,
          t`**Nature of the ligand**: a more basic ligand gives its lone pair more readily and binds more strongly.`,
          t`**Chelation**: a ligand that forms rings holds the metal far more firmly than separate monodentate ligands.`,
        ],
      },
      {
        title: "Uses of complexes",
        points: [
          t`Medicine: cisplatin, cis-$\ce{[Pt(NH3)2Cl2]}$, treats cancer; EDTA treats lead poisoning.`,
          t`Analysis: EDTA forms stable complexes with $\ce{Ca^2+}$ and $\ce{Mg^2+}$, so it estimates the hardness of water.`,
          t`Biology: chlorophyll is a complex of magnesium, and haemoglobin a complex of iron.`,
          t`Electroplating: $\ce{K[Ag(CN)2]}$ and $\ce{K[Au(CN)2]}$ supply the metal ions in a controlled way.`,
          t`The brown ring of the nitrate test is the complex $\ce{[Fe(H2O)5NO]^2+}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`The stability constants of $\ce{[Zn(NH3)4]^2+}$, $\ce{[Zn(en)2]^2+}$ and $\ce{[Zn(CN)4]^2-}$ are $1.1 \times 10^{9}$, $6.3 \times 10^{10}$ and $5.0 \times 10^{16}$. Arrange them in increasing stability.`,
      steps: [
        t`Compare the powers of ten: $10^{9} < 10^{10} < 10^{16}$.`,
        t`A larger $K$ means a more stable complex, so stability rises in the same order.`,
        t`Two en beat four $\ce{NH3}$, though both bind through four N atoms: the chelate rings hold Zn more firmly.`,
      ],
      answer: t`$\ce{[Zn(NH3)4]^2+}$ $<$ $\ce{[Zn(en)2]^2+}$ $<$ $\ce{[Zn(CN)4]^2-}$`,
    },
    visualSpec: t`Raise K on a slider and watch free metal ions in the flask turn into complex; swap six NH₃ for three en and see K jump.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Reads a larger stability constant as a less stable complex.",
      remediation: t`$K$ measures formation: a larger $K$ means more complex and less free metal ion, so a more stable complex.`,
      fallback: { kind: "ext", topic: "equilibrium constant (Std XI Chemistry)" },
    },
    {
      id: "C10-M2",
      mistake: "Compares only the numbers in front of the powers of ten.",
      remediation: t`Compare the powers of ten first: $1 \times 10^{9}$ is larger than $9 \times 10^{8}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: t`Thinks the complex holding more ligands is the more stable, ignoring $K$ and chelation.`,
      remediation: t`Stability is measured by $K$; a few chelating ligands, each forming rings, hold a metal more firmly than many monodentate ones.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C10-M4",
      mistake: "Thinks a larger metal ion, with a lower charge, holds its ligands better.",
      remediation: t`The higher the charge to size ratio of the metal ion, the more stable its complexes: $\ce{Co^3+}$ beats $\ce{Co^2+}$.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.4 (vii)" },
      stem: t`Which of these complexes is the most stable? $$\begin{array}{l|l} \text{Complex} & K \\ \hline \ce{[Ag(NH3)2]+} & 1.7 \times 10^{7} \\ \ce{[Ni(NH3)6]^2+} & 4.8 \times 10^{8} \\ \ce{[Co(en)3]^2+} & 7.9 \times 10^{13} \\ \ce{[Ag(CN)2]-} & 5.5 \times 10^{18} \end{array}$$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "most", opts: "AgNH32:1.7e7:2:0:1,NiNH36:4.8e8:6:0:2,CoenII:7.9e13:3:1:2,AgCN2:5.5e18:2:0:1" } },
      options: [
        { key: "A", text: t`$\ce{[Ag(NH3)2]+}$`, correct: false, misconceptionId: "C10-M1", value: "AgNH32" },
        { key: "B", text: t`$\ce{[Co(en)3]^2+}$`, correct: false, misconceptionId: "C10-M2", value: "CoenII" },
        { key: "C", text: t`$\ce{[Ni(NH3)6]^2+}$`, correct: false, misconceptionId: "C10-M3", value: "NiNH36" },
        { key: "D", text: t`$\ce{[Ag(CN)2]-}$`, correct: true, value: "AgCN2" },
      ],
      solution: {
        steps: [
          t`Compare the powers of ten: $10^{18}$ is the largest.`,
          t`So $\ce{[Ag(CN)2]-}$, with $K = 5.5 \times 10^{18}$, is the most stable.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`Which of these complexes is the least stable? $$\begin{array}{l|l} \text{Complex} & K \\ \hline \ce{[Cd(NH3)4]^2+} & 1.3 \times 10^{7} \\ \ce{[Ag(CN)2]-} & 5.5 \times 10^{18} \\ \ce{[Co(NH3)6]^3+} & 5.0 \times 10^{33} \\ \ce{[Cu(NH3)4]^2+} & 1.1 \times 10^{13} \end{array}$$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "least", opts: "CdNH34:1.3e7:4:0:2,AgCN2:5.5e18:2:0:1,CoNH36:5.0e33:6:0:3,CuNH34:1.1e13:4:0:2" } },
      options: [
        { key: "A", text: t`$\ce{[Cd(NH3)4]^2+}$`, correct: true, value: "CdNH34" },
        { key: "B", text: t`$\ce{[Co(NH3)6]^3+}$`, correct: false, misconceptionId: "C10-M1", value: "CoNH36" },
        { key: "C", text: t`$\ce{[Cu(NH3)4]^2+}$`, correct: false, misconceptionId: "C10-M2", value: "CuNH34" },
        { key: "D", text: t`$\ce{[Ag(CN)2]-}$`, correct: false, misconceptionId: "C10-M3", value: "AgCN2" },
      ],
      solution: {
        steps: [
          t`Compare the powers of ten: $10^{7}$ is the smallest.`,
          t`So $\ce{[Cd(NH3)4]^2+}$, with $K = 1.3 \times 10^{7}$, is the least stable.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.4 (viii)" },
      stem: t`Which nickel(II) complex is more stable, and why? $$\begin{array}{l|l} \text{Complex} & K \\ \hline \ce{[Ni(NH3)6]^2+} & 4.8 \times 10^{8} \\ \ce{[Ni(en)3]^2+} & 2.1 \times 10^{18} \end{array}$$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pair", opts: "NiNH36:4.8e8:6:0:2,Nien3:2.1e18:3:1:2" } },
      options: [
        { key: "A", text: t`$\ce{[Ni(NH3)6]^2+}$, because it holds six ligands, not three`, correct: false, misconceptionId: "C10-M3", value: "NiNH36_moreligands" },
        { key: "B", text: t`$\ce{[Ni(en)3]^2+}$, because its chelate rings make $K$ larger`, correct: true, value: "Nien3_chelate" },
        { key: "C", text: t`$\ce{[Ni(NH3)6]^2+}$, because its $K$ is smaller`, correct: false, misconceptionId: "C10-M1", value: "NiNH36_smallerK" },
        { key: "D", text: t`$\ce{[Ni(NH3)6]^2+}$, because $4.8$ is larger than $2.1$`, correct: false, misconceptionId: "C10-M2", value: "NiNH36_mantissa" },
      ],
      solution: {
        steps: [
          t`$2.1 \times 10^{18}$ is far larger than $4.8 \times 10^{8}$, so $\ce{[Ni(en)3]^2+}$ is more stable.`,
          t`Both bind $\ce{Ni^2+}$ through six N atoms; the three en ligands also form chelate rings.`,
          t`The chelate rings hold the metal more firmly, which is why $K$ is larger.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/coordination-compounds-12-chem/Ex Q.4 (viii)" },
      stem: t`Which cobalt complex is more stable, and why? $$\begin{array}{l|l} \text{Complex} & K \\ \hline \ce{[Co(en)3]^2+} & 7.9 \times 10^{13} \\ \ce{[Co(en)3]^3+} & 5.0 \times 10^{48} \end{array}$$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "pair", opts: "CoenII:7.9e13:3:1:2,CoenIII:5.0e48:3:1:3" } },
      options: [
        { key: "A", text: t`$\ce{[Co(en)3]^2+}$, because $7.9$ is larger than $5.0$`, correct: false, misconceptionId: "C10-M2", value: "CoenII_mantissa" },
        { key: "B", text: t`$\ce{[Co(en)3]^2+}$, because its larger ion holds the ligands better`, correct: false, misconceptionId: "C10-M4", value: "CoenII_largerion" },
        { key: "C", text: t`$\ce{[Co(en)3]^3+}$, because the higher charge on a smaller ion makes $K$ larger`, correct: true, value: "CoenIII_charge" },
        { key: "D", text: t`$\ce{[Co(en)3]^2+}$, because its $K$ is smaller`, correct: false, misconceptionId: "C10-M1", value: "CoenII_smallerK" },
      ],
      solution: {
        steps: [
          t`$5.0 \times 10^{48}$ is far larger than $7.9 \times 10^{13}$, so $\ce{[Co(en)3]^3+}$ is more stable.`,
          t`$\ce{Co^3+}$ has a higher charge and is smaller than $\ce{Co^2+}$: a higher charge to size ratio.`,
          t`That stronger pull on the ligands is why its $K$ is larger.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`Arrange these complexes in increasing order of stability. $$\begin{array}{l|l} \text{Complex} & K \\ \hline \ce{[Ag(NH3)2]+} & 1.7 \times 10^{7} \\ \ce{[Ni(NH3)6]^2+} & 4.8 \times 10^{8} \\ \ce{[Cu(NH3)4]^2+} & 1.1 \times 10^{13} \end{array}$$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "order", opts: "AgNH32:1.7e7:2:0:1,NiNH36:4.8e8:6:0:2,CuNH34:1.1e13:4:0:2" } },
      options: [
        { key: "A", text: t`$\ce{[Ag(NH3)2]+}$ $<$ $\ce{[Ni(NH3)6]^2+}$ $<$ $\ce{[Cu(NH3)4]^2+}$`, correct: true, value: "AgNH32_lt_NiNH36_lt_CuNH34" },
        { key: "B", text: t`$\ce{[Cu(NH3)4]^2+}$ $<$ $\ce{[Ni(NH3)6]^2+}$ $<$ $\ce{[Ag(NH3)2]+}$`, correct: false, misconceptionId: "C10-M1", value: "CuNH34_lt_NiNH36_lt_AgNH32" },
        { key: "C", text: t`$\ce{[Cu(NH3)4]^2+}$ $<$ $\ce{[Ag(NH3)2]+}$ $<$ $\ce{[Ni(NH3)6]^2+}$`, correct: false, misconceptionId: "C10-M2", value: "CuNH34_lt_AgNH32_lt_NiNH36" },
        { key: "D", text: t`$\ce{[Ag(NH3)2]+}$ $<$ $\ce{[Cu(NH3)4]^2+}$ $<$ $\ce{[Ni(NH3)6]^2+}$`, correct: false, misconceptionId: "C10-M3", value: "AgNH32_lt_CuNH34_lt_NiNH36" },
      ],
      solution: {
        steps: [
          t`Compare the powers of ten: $10^{7} < 10^{8} < 10^{13}$.`,
          t`So $\ce{[Ag(NH3)2]+}$ $<$ $\ce{[Ni(NH3)6]^2+}$ $<$ $\ce{[Cu(NH3)4]^2+}$.`,
        ],
      },
    },
  ],
};
