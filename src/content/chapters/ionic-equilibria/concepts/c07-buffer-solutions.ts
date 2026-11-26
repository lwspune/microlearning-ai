import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c07: Concept = {
  id: "C07",
  status: "approved",
  hook: {
    prompt: t`A drop of strong acid drops pure water's pH from 7 to about 4. Your blood takes in acids all day, yet stays at pH 7.4. How?`,
    reveal: t`Blood is a **buffer**: it holds a weak acid and its salt, which mop up added $\ce{H+}$ or $\ce{OH-}$, so the pH barely moves.`,
  },
  explanation: {
    intuition: [
      t`A **buffer** is a solution whose pH hardly changes when a little strong acid or base is added.`,
      t`An acidic buffer is a weak acid with its salt of a strong base: $\ce{CH3COOH + CH3COONa}$.`,
      t`A basic buffer is a weak base with its salt of a strong acid: $\ce{NH4OH + NH4Cl}$.`,
      t`In an acidic buffer, the salt's $\ce{CH3COO-}$ takes up added $\ce{H+}$ as weak $\ce{CH3COOH}$.`,
      t`The weak acid neutralises added $\ce{OH-}$, forming water.`,
      t`Human blood is a buffer, held at pH $7.4$.`,
    ],
    formal: [
      {
        title: "Properties of a buffer",
        points: [
          t`Its pH does not change much on adding a small amount of strong acid or base.`,
          t`Its pH does not change on dilution.`,
          t`Its pH does not change when it is kept for a long time.`,
          t`A strong acid with its salt, such as $\ce{HCl + NaCl}$, is not a buffer.`,
        ],
      },
      {
        title: "Henderson-Hasselbalch equation",
        points: [
          t`In an acidic buffer the common ion suppresses the weak acid, so $[\ce{HA}] \approx [\text{acid}]$.`,
          t`The salt gives almost all the anion: $[\ce{A-}] \approx [\text{salt}]$.`,
          t`Taking $-\log_{10}$ of $K_a = \dfrac{[\ce{H3O+}][\ce{A-}]}{[\ce{HA}]}$ gives:`,
          t`$\mathrm{pH} = \mathrm{p}K_a + \log_{10}\dfrac{[\text{salt}]}{[\text{acid}]}$.`,
          t`Here $\mathrm{p}K_a = -\log_{10} K_a$.`,
          t`Equal salt and acid make $\mathrm{pH} = \mathrm{p}K_a$.`,
        ],
      },
      {
        title: "Basic buffers",
        points: [
          t`For a weak base and its salt: $\mathrm{pOH} = \mathrm{p}K_b + \log_{10}\dfrac{[\text{salt}]}{[\text{base}]}$.`,
          t`Here $\mathrm{p}K_b = -\log_{10} K_b$.`,
          t`Then $\mathrm{pH} = 14 - \mathrm{pOH}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the pH of a buffer that is $0.1\ \mathrm{M}$ in acetic acid and $0.25\ \mathrm{M}$ in $\ce{CH3COONa}$ ($\mathrm{p}K_a = 4.74$).`,
      steps: [
        t`It is an acidic buffer: $[\text{salt}] = 0.25$, $[\text{acid}] = 0.1$.`,
        t`$\dfrac{[\text{salt}]}{[\text{acid}]} = 2.5$, and $\log_{10} 2.5 = 0.40$.`,
        t`$\mathrm{pH} = 4.74 + 0.40 = 5.14$.`,
      ],
      answer: t`$\mathrm{pH} = 5.14$`,
    },
    visualSpec: t`Add drops of acid or base to water and to a buffer side by side and compare how far each pH meter moves.`,
  },
  misconceptions: [
    {
      id: "C07-M1",
      mistake: t`Inverts the ratio: uses $\log_{10}\dfrac{[\text{acid}]}{[\text{salt}]}$.`,
      remediation: t`The salt goes on top: $\mathrm{pH} = \mathrm{p}K_a + \log_{10}\dfrac{[\text{salt}]}{[\text{acid}]}$; more salt means a higher pH.`,
      fallback: { kind: "none" },
    },
    {
      id: "C07-M2",
      mistake: "Mixes up pH and pOH: reports a basic buffer's pOH as its pH, or subtracts an acidic buffer's pH from 14.",
      remediation: t`Henderson's equation gives the pH of an acidic buffer directly; for a basic buffer it gives pOH, then $\mathrm{pH} = 14 - \mathrm{pOH}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C07-M3",
      mistake: t`Drops the logarithm: adds the ratio $\dfrac{[\text{salt}]}{[\text{acid}]}$ itself to $\mathrm{p}K_a$.`,
      remediation: t`Add the logarithm of the ratio: $\mathrm{p}K_a + \log_{10}\dfrac{[\text{salt}]}{[\text{acid}]}$.`,
      fallback: { kind: "ext", topic: "logarithms" },
    },
    {
      id: "C07-M4",
      mistake: "Thinks a strong acid or base mixed with a salt can be a buffer.",
      remediation: "A buffer needs a weak acid or weak base, with its own salt; a strong acid or base has no equilibrium to shift.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C07-M5",
      mistake: "Thinks any two substances that share an ion make a buffer.",
      remediation: "Sharing an ion is not enough: a buffer pairs a weak acid with its salt, or a weak base with its salt.",
      fallback: { kind: "concept", id: "C06" },
    },
    {
      id: "C07-M6",
      mistake: t`Classifies a buffer by its salt's own nature, so calls $\ce{NH4OH + NH4Cl}$ acidic.`,
      remediation: "The weak partner decides the type: a weak acid with its salt is acidic, a weak base with its salt is basic.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C07-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.9" },
      stem: t`A buffer has $0.05\ \mathrm{mol}$ $\ce{NaF}$ and $0.015\ \mathrm{mol}$ $\ce{HF}$ per litre. What is its pH? ($K_a = 7.2 \times 10^{-4}$ for $\ce{HF}$)`,
      verify: { kind: "value", inputs: { K: "7.2e-4", a: "0.015", s: "0.05" }, params: { ask: "pH_acid" } },
      options: [
        { key: "A", text: t`$10.33$`, correct: false, misconceptionId: "C07-M2", value: "10.3300000000000" },
        { key: "B", text: t`$6.48$`, correct: false, misconceptionId: "C07-M3", value: "6.48000000000000" },
        { key: "C", text: t`$3.67$`, correct: true, value: "3.67000000000000" },
        { key: "D", text: t`$2.62$`, correct: false, misconceptionId: "C07-M1", value: "2.62000000000000" },
      ],
      solution: {
        steps: [
          t`$\mathrm{p}K_a = -\log_{10}(7.2 \times 10^{-4})$ $= 4 - 0.857 = 3.143$.`,
          t`$\dfrac{[\text{salt}]}{[\text{acid}]} = \dfrac{0.05}{0.015} = 3.33$, and $\log_{10} 3.33 = 0.523$.`,
          t`$\mathrm{pH} = 3.143 + 0.523 = 3.67$.`,
        ],
      },
    },
    {
      id: "C07-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.10" },
      stem: t`A buffer is $0.1\ \mathrm{M}$ in a weak base $\ce{BOH}$ and $0.2\ \mathrm{M}$ in its salt $\ce{BA}$. What is its pH? ($K_b = 1.8 \times 10^{-5}$)`,
      verify: { kind: "value", inputs: { K: "1.8e-5", a: "0.1", s: "0.2" }, params: { ask: "pH_base" } },
      options: [
        { key: "A", text: t`$9.56$`, correct: false, misconceptionId: "C07-M1", value: "9.56000000000000" },
        { key: "B", text: t`$5.05$`, correct: false, misconceptionId: "C07-M2", value: "5.05000000000000" },
        { key: "C", text: t`$7.26$`, correct: false, misconceptionId: "C07-M3", value: "7.26000000000000" },
        { key: "D", text: t`$8.95$`, correct: true, value: "8.95000000000000" },
      ],
      solution: {
        steps: [
          t`$\mathrm{p}K_b = -\log_{10}(1.8 \times 10^{-5})$ $= 4.745$.`,
          t`$\mathrm{pOH} = 4.745 + \log_{10}\dfrac{0.2}{0.1}$ $= 4.745 + 0.301 = 5.046$.`,
          t`$\mathrm{pH} = 14 - 5.046 = 8.95$.`,
        ],
      },
    },
    {
      id: "C07-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Solved Ex.3.9" },
      stem: t`What is the pH of a buffer that is $0.2\ \mathrm{M}$ in acetic acid and $0.1\ \mathrm{M}$ in $\ce{CH3COONa}$? ($K_a = 1.8 \times 10^{-5}$)`,
      verify: { kind: "value", inputs: { K: "1.8e-5", a: "0.2", s: "0.1" }, params: { ask: "pH_acid" } },
      options: [
        { key: "A", text: t`$5.24$`, correct: false, misconceptionId: "C07-M3", value: "5.24000000000000" },
        { key: "B", text: t`$4.44$`, correct: true, value: "4.44000000000000" },
        { key: "C", text: t`$5.05$`, correct: false, misconceptionId: "C07-M1", value: "5.05000000000000" },
        { key: "D", text: t`$9.56$`, correct: false, misconceptionId: "C07-M2", value: "9.56000000000000" },
      ],
      solution: {
        steps: [
          t`$\mathrm{p}K_a = -\log_{10}(1.8 \times 10^{-5})$ $= 4.745$.`,
          t`$\log_{10}\dfrac{[\text{salt}]}{[\text{acid}]} = \log_{10}\dfrac{0.1}{0.2}$ $= -0.301$.`,
          t`$\mathrm{pH} = 4.745 - 0.301 = 4.44$.`,
        ],
      },
    },
    {
      id: "C07-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.1 (iii)" },
      stem: t`Which of the following, in water, is an acidic buffer?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "named", q: "acidic" } },
      options: [
        { key: "A", text: t`$\ce{CH3COOH + CH3COONa}$`, correct: true, value: "ch3cooh_ch3coona" },
        { key: "B", text: t`$\ce{HCl + NH4Cl}$`, correct: false, misconceptionId: "C07-M4", value: "hcl_nh4cl" },
        { key: "C", text: t`$\ce{CH3COOH + HCl}$`, correct: false, misconceptionId: "C07-M5", value: "ch3cooh_hcl" },
        { key: "D", text: t`$\ce{NH4OH + NH4Cl}$`, correct: false, misconceptionId: "C07-M6", value: "nh4oh_nh4cl" },
      ],
      solution: {
        steps: [
          t`An acidic buffer is a weak acid with its salt of a strong base.`,
          t`Acetic acid is weak and $\ce{CH3COONa}$ is its salt with $\ce{NaOH}$.`,
          t`So $\ce{CH3COOH + CH3COONa}$ is an acidic buffer.`,
        ],
      },
    },
    {
      id: "C07-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/ionic-equilibria-12-chem/Ex Q.2 (iii)" },
      stem: t`Which of the following, in water, is a basic buffer?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "named", q: "basic" } },
      options: [
        { key: "A", text: t`$\ce{NaOH + NaCl}$`, correct: false, misconceptionId: "C07-M4", value: "naoh_nacl" },
        { key: "B", text: t`$\ce{NH4OH + NaOH}$`, correct: false, misconceptionId: "C07-M5", value: "nh4oh_naoh" },
        { key: "C", text: t`$\ce{CH3COOH + CH3COONa}$`, correct: false, misconceptionId: "C07-M6", value: "ch3cooh_ch3coona" },
        { key: "D", text: t`$\ce{NH4OH + NH4Cl}$`, correct: true, value: "nh4oh_nh4cl" },
      ],
      solution: {
        steps: [
          t`A basic buffer is a weak base with its salt of a strong acid.`,
          t`$\ce{NH4OH}$ is weak and $\ce{NH4Cl}$ is its salt with $\ce{HCl}$.`,
          t`So $\ce{NH4OH + NH4Cl}$ is a basic buffer.`,
        ],
      },
    },
  ],
};
