import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Acetic acid's plot of $\Lambda$ against $\sqrt{c}$ shoots up near zero concentration, so nobody can read off its $\Lambda_0$. Yet tables list it. Where does the value come from?`,
    reveal: t`At infinite dilution every ion conducts on its own. Strong electrolytes that share ions with acetic acid can be added and subtracted until only $\lambda^0_{\ce{H+}} + \lambda^0_{\ce{CH3COO-}}$ is left.`,
  },
  explanation: {
    intuition: [
      t`At zero concentration (infinite dilution) the ions are so far apart that they do not affect one another.`,
      t`Each ion then carries current at its own rate, its **molar ionic conductivity** $\lambda^0$.`,
      t`So $\Lambda_0$ of an electrolyte is the sum of the contributions of its ions.`,
      t`$\lambda^0_{\ce{Cl-}}$ is the same whether the chloride came from $\ce{NaCl}$, $\ce{KCl}$ or $\ce{HCl}$.`,
      t`This lets us build $\Lambda_0$ of a weak electrolyte from those of strong ones.`,
    ],
    formal: [
      {
        title: "Kohlrausch's law",
        points: [
          t`**Kohlrausch's law**: at infinite dilution, each ion migrates independently of its co-ion.`,
          t`Each ion contributes to $\Lambda_0$ whatever the other ion with it.`,
          t`So $\Lambda_0 = n_+\lambda^0_+ + n_-\lambda^0_-$.`,
          t`$n_+$ and $n_-$ are the numbers of cations and anions in the formula of the electrolyte.`,
          t`Example: $\Lambda_0(\ce{Na2SO4})$ $= 2\lambda^0_{\ce{Na+}} + \lambda^0_{\ce{SO4^2-}}$.`,
          t`The counts come from the formula's subscripts, not from the ions' charges.`,
        ],
      },
      {
        title: "Λ₀ of a weak electrolyte",
        points: [
          t`A weak electrolyte's plot of $\Lambda$ against $\sqrt{c}$ is a steep curve, so it cannot be extrapolated.`,
          t`For a weak electrolyte AB, take strong electrolytes AY, XB and XY, whose $\Lambda_0$ are known.`,
          t`$\Lambda_0(\ce{AY}) + \Lambda_0(\ce{XB})$ holds $\lambda^0_{\ce{A}}$, $\lambda^0_{\ce{B}}$, $\lambda^0_{\ce{X}}$ and $\lambda^0_{\ce{Y}}$.`,
          t`Subtracting $\Lambda_0(\ce{XY})$ cancels the spectator ions X and Y.`,
          t`So $\Lambda_0(\ce{AB}) = \Lambda_0(\ce{AY})$ $+ \Lambda_0(\ce{XB}) - \Lambda_0(\ce{XY})$.`,
          t`Example: $\Lambda_0(\ce{NH4OH})$ $= \Lambda_0(\ce{NH4Cl}) + \Lambda_0(\ce{NaOH})$ $- \Lambda_0(\ce{NaCl})$.`,
        ],
      },
      {
        title: "Degree of dissociation",
        points: [
          t`At concentration $c$, only a fraction $\alpha$ of a weak electrolyte is ionised.`,
          t`$\Lambda$ counts only these ions, while $\Lambda_0$ counts complete ionisation.`,
          t`So the **degree of dissociation** is $\alpha = \dfrac{\Lambda}{\Lambda_0}$.`,
          t`Ostwald's law then gives the dissociation constant: $K_a = \dfrac{\alpha^2 c}{1 - \alpha}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`At zero concentration, $\Lambda_0$ of $\ce{NH4Cl}$, $\ce{NaOH}$ and $\ce{NaCl}$ are $149.7$, $248.1$ and $126.4\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$. For $0.01\ \mathrm{M}$ $\ce{NH4OH}$, $\Lambda = 11.3\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$. Find $\Lambda_0(\ce{NH4OH})$ and $\alpha$.`,
      steps: [
        t`$\Lambda_0(\ce{NH4OH}) = \Lambda_0(\ce{NH4Cl})$ $+ \Lambda_0(\ce{NaOH}) - \Lambda_0(\ce{NaCl})$.`,
        t`$\Lambda_0 = 149.7 + 248.1 - 126.4$ $= 271.4\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        t`$\alpha = \dfrac{\Lambda}{\Lambda_0} = \dfrac{11.3}{271.4}$ $= 0.0416$.`,
        t`So only about $4\%$ of the $\ce{NH4OH}$ is ionised.`,
      ],
      answer: t`$\Lambda_0 = 271.4\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$; $\alpha = 0.0416$`,
    },
    visualSpec: t`Drag ion cards into a sum: add two strong electrolytes, subtract a third, and watch the spectator ions cancel to leave the weak electrolyte's pair.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: t`Adds one $\lambda^0$ for each kind of ion, ignoring how many of that ion the formula holds.`,
      remediation: t`Multiply each $\lambda^0$ by that ion's count in the formula: $\Lambda_0 = n_+\lambda^0_+ + n_-\lambda^0_-$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Swaps the counts, giving each ion the other ion's subscript.",
      remediation: t`$\ce{Al2(SO4)3}$ holds 2 $\ce{Al^3+}$ and 3 $\ce{SO4^2-}$: each subscript belongs to its own ion.`,
      fallback: { kind: "ext", topic: "writing chemical formulae (Std XI Chemistry)" },
    },
    {
      id: "C03-M3",
      mistake: t`Divides each ion's $\lambda^0$ by its charge, as if $\Lambda_0$ were per unit charge.`,
      remediation: t`$\Lambda_0$ is per mole of electrolyte: add $\lambda^0$ once for every ion in the formula; the charge does not divide it.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Adds all three strong electrolytes.",
      remediation: "The third electrolyte, made of the spectator ions, must be subtracted so that those ions cancel.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Adds the two electrolytes that hold the wanted ions, but forgets to remove the spectator ions.",
      remediation: t`$\Lambda_0(\ce{AY}) + \Lambda_0(\ce{XB})$ also holds X and Y; subtract $\Lambda_0(\ce{XY})$ to cancel them.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Subtracts an electrolyte that holds one of the wanted ions instead of the spectator one.",
      remediation: "Subtract the electrolyte made of the two unwanted ions only; then every unwanted ion cancels and the wanted ones stay.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.1 (x)" },
      stem: t`Which expression gives the molar conductivity at zero concentration of $\ce{Al2(SO4)3}$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "expr" } },
      options: [
        { key: "A", text: t`$3\lambda^0_{\ce{Al^3+}} + 2\lambda^0_{\ce{SO4^2-}}$`, correct: false, misconceptionId: "C03-M2", value: "three_Al_two_SO4" },
        { key: "B", text: t`$\tfrac{1}{3}\lambda^0_{\ce{Al^3+}} + \tfrac{1}{2}\lambda^0_{\ce{SO4^2-}}$`, correct: false, misconceptionId: "C03-M3", value: "third_Al_half_SO4" },
        { key: "C", text: t`$2\lambda^0_{\ce{Al^3+}} + 3\lambda^0_{\ce{SO4^2-}}$`, correct: true, value: "two_Al_three_SO4" },
        { key: "D", text: t`$\lambda^0_{\ce{Al^3+}} + \lambda^0_{\ce{SO4^2-}}$`, correct: false, misconceptionId: "C03-M1", value: "one_Al_one_SO4" },
      ],
      solution: {
        steps: [
          t`One formula unit of $\ce{Al2(SO4)3}$ gives 2 $\ce{Al^3+}$ and 3 $\ce{SO4^2-}$ ions.`,
          t`So $\Lambda_0 = 2\lambda^0_{\ce{Al^3+}} + 3\lambda^0_{\ce{SO4^2-}}$.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.3" },
      stem: t`The molar ionic conductivities of $\ce{Ca^2+}$ and $\ce{Cl-}$ at zero concentration are $104$ and $76.4\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$. What is $\Lambda_0$ of $\ce{CaCl2}$?`,
      verify: { kind: "value", inputs: { lp: "104", lm: "76.4", np: "1", nm: "2", zp: "2", zm: "1" }, params: { ask: "salt" } },
      options: [
        { key: "A", text: t`$284.4\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M2", value: "284.400000000000" },
        { key: "B", text: t`$128.4\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M3", value: "128.400000000000" },
        { key: "C", text: t`$256.8\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: true, value: "256.800000000000" },
        { key: "D", text: t`$180.4\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M1", value: "180.400000000000" },
      ],
      solution: {
        steps: [
          t`$\ce{CaCl2}$ gives one $\ce{Ca^2+}$ and two $\ce{Cl-}$: $\Lambda_0 = \lambda^0_{\ce{Ca^2+}} + 2\lambda^0_{\ce{Cl-}}$.`,
          t`$\Lambda_0 = 104 + 2 \times 76.4$ $= 256.8\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.2" },
      stem: t`At zero concentration, the molar conductivities of $\ce{NaI}$, $\ce{AgNO3}$ and $\ce{NaNO3}$ are $126.9$, $133.4$ and $121.5\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$. What is $\Lambda_0$ of $\ce{AgI}$?`,
      verify: { kind: "value", inputs: { A: "133.4", B: "126.9", X: "121.5" }, params: { ask: "weak" } },
      options: [
        { key: "A", text: t`$381.8\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M4", value: "381.800000000000" },
        { key: "B", text: t`$260.3\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M5", value: "260.300000000000" },
        { key: "C", text: t`$128\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: false, misconceptionId: "C03-M6", value: "128" },
        { key: "D", text: t`$138.8\ \mathrm{\Omega^{-1}\,cm^2\,mol^{-1}}$`, correct: true, value: "138.800000000000" },
      ],
      solution: {
        steps: [
          t`$\Lambda_0(\ce{AgI}) = \Lambda_0(\ce{AgNO3})$ $+ \Lambda_0(\ce{NaI}) - \Lambda_0(\ce{NaNO3})$: $\ce{Na+}$ and $\ce{NO3-}$ cancel.`,
          t`$\Lambda_0 = 133.4 + 126.9 - 121.5$ $= 138.8\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Ex Q.4 (i)" },
      stem: t`Acetic acid is a weak electrolyte. Which combination of molar conductivities at zero concentration gives $\Lambda_0(\ce{CH3COOH})$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "combo" } },
      options: [
        { key: "A", text: t`$\Lambda_0(\ce{HCl}) + \Lambda_0(\ce{CH3COONa})$`, correct: false, misconceptionId: "C03-M5", value: "HCl_plus_NaAc" },
        { key: "B", text: t`$\Lambda_0(\ce{HCl}) + \Lambda_0(\ce{NaCl})$ $- \Lambda_0(\ce{CH3COONa})$`, correct: false, misconceptionId: "C03-M6", value: "HCl_plus_NaCl_minus_NaAc" },
        { key: "C", text: t`$\Lambda_0(\ce{HCl}) + \Lambda_0(\ce{CH3COONa})$ $- \Lambda_0(\ce{NaCl})$`, correct: true, value: "HCl_plus_NaAc_minus_NaCl" },
        { key: "D", text: t`$\Lambda_0(\ce{HCl}) + \Lambda_0(\ce{CH3COONa})$ $+ \Lambda_0(\ce{NaCl})$`, correct: false, misconceptionId: "C03-M4", value: "HCl_plus_NaAc_plus_NaCl" },
      ],
      solution: {
        steps: [
          t`$\Lambda_0(\ce{HCl}) + \Lambda_0(\ce{CH3COONa})$ holds $\lambda^0$ of $\ce{H+}$, $\ce{Cl-}$, $\ce{Na+}$ and $\ce{CH3COO-}$.`,
          t`Subtracting $\Lambda_0(\ce{NaCl})$ removes $\ce{Na+}$ and $\ce{Cl-}$.`,
          t`What is left, $\lambda^0_{\ce{H+}} + \lambda^0_{\ce{CH3COO-}}$, is $\Lambda_0(\ce{CH3COOH})$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/electrochemistry-12-chem/Solved Ex.5.4" },
      stem: t`The molar conductivity of $0.01\ \mathrm{M}$ acetic acid is $16.5\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$. At zero concentration, $\Lambda_0$ of $\ce{HCl}$, $\ce{CH3COONa}$ and $\ce{NaCl}$ are $426.2$, $91.0$ and $126.5\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$. What is the degree of dissociation of the acid?`,
      verify: { kind: "value", inputs: { L: "16.5", A: "426.2", B: "91.0", X: "126.5" }, params: { ask: "alpha", sf: "3" } },
      options: [
        { key: "A", text: t`$0.0422$`, correct: true, value: "0.0422000000000000" },
        { key: "B", text: t`$0.0256$`, correct: false, misconceptionId: "C03-M4", value: "0.0256000000000000" },
        { key: "C", text: t`$0.0319$`, correct: false, misconceptionId: "C03-M5", value: "0.0319000000000000" },
        { key: "D", text: t`$0.0357$`, correct: false, misconceptionId: "C03-M6", value: "0.0357000000000000" },
      ],
      solution: {
        steps: [
          t`$\Lambda_0(\ce{CH3COOH}) = 426.2 + 91.0 - 126.5$ $= 390.7\ \Omega^{-1}\,\mathrm{cm^2\,mol^{-1}}$.`,
          t`$\alpha = \dfrac{\Lambda}{\Lambda_0} = \dfrac{16.5}{390.7}$ $= 0.0422$.`,
        ],
      },
    },
  ],
};
