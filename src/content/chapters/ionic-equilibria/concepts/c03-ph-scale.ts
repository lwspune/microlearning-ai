import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Lemon juice holds about $0.005\ \mathrm{mol}$ of $\ce{H3O+}$ per litre; pure water only $0.0000001$. How can such numbers be compared simply?`,
    reveal: t`With pH, minus the logarithm of $[\ce{H3O+}]$: lemon juice is about $2.3$, water $7$. Each step of 1 is a factor of 10.`,
  },
  explanation: {
    intuition: [
      t`The concentration of $\ce{H3O+}$ in solutions runs from about $1\ \mathrm{M}$ down to $10^{-14}\ \mathrm{M}$.`,
      t`The **pH** turns this into a small number: roughly the power of ten, with its sign changed.`,
      t`A lower pH means more $\ce{H3O+}$: a more acidic solution.`,
      t`One pH unit is a factor of 10 in $[\ce{H3O+}]$.`,
      t`Pure water at $298\ \mathrm{K}$ has pH 7: it is **neutral**.`,
    ],
    formal: [
      {
        title: "Defining pH and pOH",
        points: [
          t`$\mathrm{pH} = -\log_{10}[\ce{H3O+}]$, with $[\ce{H3O+}]$ in $\mathrm{mol\,dm^{-3}}$.`,
          t`Likewise $\mathrm{pOH} = -\log_{10}[\ce{OH-}]$.`,
          t`Going back from pH: $[\ce{H3O+}] = 10^{-\mathrm{pH}}$.`,
          t`For an antilog, make the decimal part positive: $-3.12 = -4 + 0.88$.`,
          t`So $10^{-3.12} = 10^{0.88} \times 10^{-4}$ $= 7.59 \times 10^{-4}$.`,
        ],
      },
      {
        title: "Water's ionic product",
        points: [
          t`Water ionises very slightly: $\ce{2H2O <=> H3O+ + OH-}$.`,
          t`Its **ionic product** is $K_w = [\ce{H3O+}][\ce{OH-}]$ $= 1 \times 10^{-14}$ at $298\ \mathrm{K}$.`,
          t`In pure water both ions are at $10^{-7}\ \mathrm{M}$, so the pH is 7.`,
          t`Taking $-\log_{10}$ of $K_w$ gives $\mathrm{pH} + \mathrm{pOH} = 14$.`,
          t`Acidic: pH below 7, $[\ce{H3O+}] > 10^{-7}$. Basic: pH above 7, $[\ce{H3O+}] < 10^{-7}$.`,
        ],
      },
      {
        title: "Strong acids and bases",
        points: [
          t`A strong acid or base ionises fully in water.`,
          t`**Basicity** is the number of $\ce{H+}$ one acid molecule gives: 1 for $\ce{HCl}$, 2 for $\ce{H2SO4}$.`,
          t`So $[\ce{H3O+}]$ = concentration $\times$ basicity; for $0.01\ \mathrm{M}$ $\ce{HNO3}$ the pH is 2.`,
          t`For a strong base find $[\ce{OH-}]$ and pOH first: $0.05\ \mathrm{M}$ KOH has pOH $1.30$, pH $12.70$.`,
          t`However dilute, an acid never gives a pH above 7: water's own $10^{-7}\ \mathrm{M}$ $\ce{H3O+}$ stays.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the pH of a $0.005\ \mathrm{M}$ solution of the strong base $\ce{Ba(OH)2}$.`,
      steps: [
        t`Each $\ce{Ba(OH)2}$ gives two $\ce{OH-}$ ions.`,
        t`$[\ce{OH-}] = 2 \times 0.005 = 0.01\ \mathrm{M}$.`,
        t`$\mathrm{pOH} = -\log_{10} 10^{-2} = 2$.`,
        t`$\mathrm{pH} = 14 - 2 = 12$.`,
      ],
      answer: t`$\mathrm{pH} = 12$`,
    },
    visualSpec: t`Slide the hydronium concentration through powers of ten and watch the pH scale and litmus colour move.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Mixes up pH and pOH, or $[\ce{H3O+}]$ and $[\ce{OH-}]$.`,
      remediation: t`pH is about $\ce{H3O+}$ and pOH about $\ce{OH-}$; switch between them with $\mathrm{pH} + \mathrm{pOH} = 14$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: t`Ignores the basicity: takes $[\ce{H3O+}] = c$ for $\ce{H2SO4}$.`,
      remediation: t`Each $\ce{H2SO4}$ gives two $\ce{H+}$, so $[\ce{H3O+}] = 2c$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M3",
      mistake: t`Ignores water's own $\ce{H3O+}$ in a very dilute acid, giving pH 8 for $10^{-8}\ \mathrm{M}$ $\ce{HCl}$.`,
      remediation: t`Water already holds $10^{-7}\ \mathrm{M}$ $\ce{H3O+}$ and the acid adds a little more, so the pH is just below 7.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Takes the decimal part of a negative logarithm with the wrong sign.",
      remediation: t`Split a negative log so the decimal part is positive: $-3.12 = -4 + 0.88$, so $10^{-3.12} = 10^{0.88} \times 10^{-4}$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C03-M5",
      mistake: "Uses the natural logarithm.",
      remediation: t`pH uses $\log_{10}$, the common logarithm, not $\ln$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C03-M6",
      mistake: t`Reads the scale backwards: more $\ce{H3O+}$ means a higher pH.`,
      remediation: t`The minus sign flips the scale: more $\ce{H3O+}$ means a **lower** pH, and acids lie below 7.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: t`Drops the minus sign: takes $\mathrm{pH} = \log_{10}[\ce{H3O+}]$.`,
      remediation: t`The log of a small concentration is negative; the minus in $\mathrm{pH} = -\log_{10}[\ce{H3O+}]$ makes pH positive.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Ignores the acid in a very dilute solution, giving pH exactly 7.",
      remediation: t`Even a little acid adds to water's $10^{-7}\ \mathrm{M}$ of $\ce{H3O+}$, so the pH drops just below 7.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/ionic-equilibria-12-pyq#6" },
      stem: t`What is the pH of a $0.001\ \mathrm{M}$ $\ce{HCl}$ solution?`,
      verify: { kind: "value", inputs: { c: "0.001" }, params: { ask: "pH_acid" } },
      options: [
        { key: "A", text: t`$6.91$`, correct: false, misconceptionId: "C03-M5", value: "6.91000000000000" },
        { key: "B", text: t`$-3$`, correct: false, misconceptionId: "C03-M7", value: "-3" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$11$`, correct: false, misconceptionId: "C03-M1", value: "11" },
      ],
      solution: {
        steps: [
          t`$\ce{HCl}$ is strong: $[\ce{H3O+}] = 0.001 = 10^{-3}\ \mathrm{M}$.`,
          t`$\mathrm{pH} = -\log_{10} 10^{-3} = 3$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.3 (x)" },
      stem: t`In an $\ce{NaOH}$ solution $[\ce{OH-}] = 2.87 \times 10^{-4}\ \mathrm{M}$. What is the pH of the solution?`,
      verify: { kind: "value", inputs: { OH: "2.87e-4" }, params: { ask: "pH_from_OH" } },
      options: [
        { key: "A", text: t`$9.54$`, correct: false, misconceptionId: "C03-M4", value: "9.54000000000000" },
        { key: "B", text: t`$5.84$`, correct: false, misconceptionId: "C03-M5", value: "5.84000000000000" },
        { key: "C", text: t`$10.46$`, correct: true, value: "10.4600000000000" },
        { key: "D", text: t`$3.54$`, correct: false, misconceptionId: "C03-M1", value: "3.54000000000000" },
      ],
      solution: {
        steps: [
          t`$\mathrm{pOH}$ $= -\log_{10}(2.87 \times 10^{-4})$ $= 4 - 0.4579 = 3.54$.`,
          t`$\mathrm{pH} = 14 - 3.54 = 10.46$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.4 (ix)" },
      stem: t`The pH of rain water collected in a region of Maharashtra was $5.1$. What is its $[\ce{H3O+}]$?`,
      verify: { kind: "value", inputs: { pH: "5.1" }, params: { ask: "H_from_pH" } },
      options: [
        { key: "A", text: t`$1.26 \times 10^{-5}\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C03-M4", value: "1.26000000000000e-5" },
        { key: "B", text: t`$1.26 \times 10^{-9}\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C03-M1", value: "1.26000000000000e-9" },
        { key: "C", text: t`$6.10 \times 10^{-3}\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C03-M5", value: "0.00610000000000000" },
        { key: "D", text: t`$7.94 \times 10^{-6}\ \mathrm{mol\,dm^{-3}}$`, correct: true, value: "7.94000000000000e-6" },
      ],
      solution: {
        steps: [
          t`$[\ce{H3O+}] = 10^{-5.1}$, and $-5.1 = -6 + 0.9$.`,
          t`$[\ce{H3O+}] = 10^{0.9} \times 10^{-6}$ $= 7.94 \times 10^{-6}\ \mathrm{mol\,dm^{-3}}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/ionic-equilibria-12-pyq#5" },
      stem: t`The pH of a solution of a weak monoacidic base is $11.2$. What is its $\ce{OH-}$ ion concentration?`,
      verify: { kind: "value", inputs: { pH: "11.2" }, params: { ask: "OH_from_pH", sf: "4" } },
      options: [
        { key: "A", text: t`$6.310 \times 10^{-2}\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C03-M4", value: "0.0631000000000000" },
        { key: "B", text: t`$6.081 \times 10^{-2}\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C03-M5", value: "0.0608100000000000" },
        { key: "C", text: t`$1.585 \times 10^{-3}\ \mathrm{mol\,dm^{-3}}$`, correct: true, value: "0.00158500000000000" },
        { key: "D", text: t`$6.310 \times 10^{-12}\ \mathrm{mol\,dm^{-3}}$`, correct: false, misconceptionId: "C03-M1", value: "6.31000000000000e-12" },
      ],
      solution: {
        steps: [
          t`$\mathrm{pOH} = 14 - 11.2 = 2.8$.`,
          t`$[\ce{OH-}] = 10^{-2.8}$ $= 10^{0.2} \times 10^{-3}$.`,
          t`$[\ce{OH-}] = 1.585 \times 10^{-3}\ \mathrm{mol\,dm^{-3}}$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.2 (vii)" },
      stem: t`What is the pH of a $0.01\ \mathrm{M}$ solution of sulphuric acid, $\ce{H2SO4}$? ($\log 2 = 0.3010$)`,
      verify: { kind: "value", inputs: { c: "0.01", n: "2" }, params: { ask: "pH_acid" } },
      options: [
        { key: "A", text: t`$1.70$`, correct: true, value: "1.70000000000000" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C03-M2", value: "2" },
        { key: "C", text: t`$12.30$`, correct: false, misconceptionId: "C03-M1", value: "12.3000000000000" },
        { key: "D", text: t`$3.91$`, correct: false, misconceptionId: "C03-M5", value: "3.91000000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{H2SO4}$ is strong and dibasic: $[\ce{H3O+}] = 2 \times 0.01$ $= 2 \times 10^{-2}\ \mathrm{M}$.`,
          t`$\mathrm{pH} = 2 - \log_{10} 2$ $= 2 - 0.3010 = 1.70$.`,
        ],
      },
    },
    {
      id: "C03-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.1 (i)" },
      stem: t`What is the pH of a $10^{-8}\ \mathrm{M}$ $\ce{HCl}$ solution?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "very_dilute" } },
      options: [
        { key: "A", text: t`Slightly less than $7$`, correct: true, value: "less_than_7" },
        { key: "B", text: t`$8$`, correct: false, misconceptionId: "C03-M3", value: "eight" },
        { key: "C", text: t`Greater than $7$`, correct: false, misconceptionId: "C03-M6", value: "more_than_7" },
        { key: "D", text: t`Exactly $7$`, correct: false, misconceptionId: "C03-M8", value: "exactly_7" },
      ],
      solution: {
        steps: [
          t`Water itself gives $10^{-7}\ \mathrm{M}$ $\ce{H3O+}$; the acid adds only $10^{-8}\ \mathrm{M}$ more.`,
          t`$[\ce{H3O+}]$ is a little above $10^{-7}\ \mathrm{M}$, so the pH is slightly less than 7.`,
        ],
      },
    },
  ],
};
