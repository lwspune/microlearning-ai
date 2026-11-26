import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Chlorine is famous for $-1$, as in $\ce{NaCl}$. What is its oxidation state in $\ce{Cl2O7}$?`,
    reveal: t`It is $+7$: $2x + 7(-2) = 0$. Bonded to oxygen, which is more electronegative, a halogen takes a positive state.`,
  },
  explanation: {
    intuition: [
      t`An **oxidation state** is the charge an atom would carry if every bond were fully ionic.`,
      t`With metals and hydrogen, group 16 and 17 elements take negative states.`,
      t`With the more electronegative O and F, the heavier ones take positive states too.`,
      t`Their hydrides $\ce{H2E}$ and $\ce{HX}$ get weaker bonds down each group.`,
      t`A weaker bond to H gives up $\ce{H+}$ more easily, but breaks more easily on heating.`,
    ],
    formal: [
      {
        title: "Group 16 oxidation states",
        points: [
          t`Group 16 elements show $-2$, $+2$, $+4$ and $+6$.`,
          t`$-2$ is the common state with metals and hydrogen: $\ce{H2S}$, $\ce{Na2S}$.`,
          t`$+4$ and $+6$ appear with oxygen or fluorine: $\ce{SO2}$, $\ce{SF6}$, $\ce{TeO3}$.`,
          t`Oxygen shows only $-2$, $-1$ and $+2$: it has no $d$ orbitals.`,
        ],
      },
      {
        title: "Halogen oxidation states",
        points: [
          t`Halogens commonly show $-1$, as in $\ce{NaCl}$ and $\ce{HBr}$.`,
          t`Cl, Br and I also show $+1$, $+3$, $+5$ and $+7$, mostly with oxygen.`,
          t`Examples: $\ce{HOCl}$ ($+1$), $\ce{HClO3}$ ($+5$), $\ce{HClO4}$ ($+7$).`,
          t`Fluorine, the most electronegative element, shows only $-1$.`,
        ],
      },
      {
        title: "Finding an oxidation state",
        points: [
          t`Take O as $-2$ and H as $+1$ (except in peroxides and hydrides of metals).`,
          t`Multiply each state by the number of such atoms.`,
          t`The total equals the overall charge: zero for a molecule, the charge for an ion.`,
          t`In $\ce{ClO-}$: $x + (-2) = -1$, so Cl is $+1$.`,
        ],
      },
      {
        title: "Acid strength of hydrides",
        points: [
          t`A hydride acid ionises as $\ce{H2E <=> H+ + HE-}$.`,
          t`Down group 16 the H-E bond lengthens and weakens: 463, 347, 276, 238 $\mathrm{kJ\,mol^{-1}}$.`,
          t`A weaker bond releases $\ce{H+}$ more easily, so acid strength rises down the group.`,
          t`$\ce{H2O}$ < $\ce{H2S}$ < $\ce{H2Se}$ < $\ce{H2Te}$; likewise $\ce{HF}$ < $\ce{HCl}$ < $\ce{HBr}$ < $\ce{HI}$.`,
          t`Bond strength, not bond polarity, decides the order down a group.`,
          t`$\mathrm{p}K_a = -\log K_a$: the lower the $\mathrm{p}K_a$, the stronger the acid.`,
        ],
      },
      {
        title: "Thermal stability of hydrides",
        points: [
          t`**Thermal stability** is how well a compound resists breaking up on heating.`,
          t`A weaker H-E bond breaks more easily, so stability falls down a group.`,
          t`In thermal stability, $\ce{H2O}$ > $\ce{H2S}$ > $\ce{H2Se}$ > $\ce{H2Te}$.`,
          t`$\ce{HF}$ (574) > $\ce{HCl}$ (432) > $\ce{HBr}$ (363) > $\ce{HI}$ (295 $\mathrm{kJ\,mol^{-1}}$).`,
          t`So thermal stability and acid strength run in opposite directions.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the oxidation state of selenium in selenous acid, $\ce{H2SeO3}$.`,
      steps: [
        t`H is $+1$ and O is $-2$; the molecule is neutral.`,
        t`$2(+1) + x + 3(-2) = 0$.`,
        t`$2 + x - 6 = 0$, so $x = +4$.`,
      ],
      answer: t`$+4$`,
    },
    visualSpec: t`Stretch an H-E bond down the group and watch the acid strength bar rise as the stability bar falls.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks acid strength follows bond polarity, so the hydride of the most electronegative element is the strongest acid.",
      remediation: t`Down a group the H-E bond gets longer and weaker, and that decides: the weaker the bond, the more easily $\ce{H+}$ leaves. So $\ce{H2Te}$ and $\ce{HI}$ are the strongest.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Thinks the more thermally stable hydride is also the stronger acid.",
      remediation: t`A strong H-E bond makes a hydride stable to heat and also slow to release $\ce{H+}$. Stability and acid strength run in opposite directions.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Thinks electronegativity rises down a group.",
      remediation: "Electronegativity falls down a group, as the atoms grow: F 4.0, Cl 3.2, Br 3.0, I 2.7.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C03-M4",
      mistake: "Sets the sum of oxidation states to zero for an ion, forgetting its charge.",
      remediation: "For an ion the oxidation states add up to the ion's charge, not to zero.",
      fallback: { kind: "ext", topic: "oxidation number (Std XI Chemistry)" },
    },
    {
      id: "C03-M5",
      mistake: "Counts the oxygen once, ignoring the subscript.",
      remediation: t`Multiply O's $-2$ by the number of O atoms: four O atoms give $-8$.`,
      fallback: { kind: "ext", topic: "oxidation number (Std XI Chemistry)" },
    },
    {
      id: "C03-M6",
      mistake: t`Takes the element's common negative state ($-2$ in group 16, $-1$ for a halogen) as its only state.`,
      remediation: t`Bonded to the more electronegative oxygen, S and the heavier halogens take positive states, up to $+6$ and $+7$.`,
      fallback: { kind: "ext", topic: "oxidation number (Std XI Chemistry)" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.1 (ii)" },
      stem: t`Which hydride of group 16 is the strongest acid, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "h2e_acid" } },
      options: [
        { key: "A", text: t`$\ce{H2O}$: it is the most stable to heat of the four hydrides`, correct: false, misconceptionId: "C03-M2", value: "h2o_most_stable" },
        { key: "B", text: t`$\ce{H2Te}$: Te is the most electronegative, so its H-Te bond is the most polar`, correct: false, misconceptionId: "C03-M3", value: "h2te_te_most_en" },
        { key: "C", text: t`$\ce{H2Te}$: its H-Te bond is the weakest, so it releases $\ce{H+}$ most easily`, correct: true, value: "h2te_weak_bond" },
        { key: "D", text: t`$\ce{H2O}$: O is the most electronegative, so its H-O bond is the most polar`, correct: false, misconceptionId: "C03-M1", value: "h2o_most_polar" },
      ],
      solution: {
        steps: [
          t`H-E bond enthalpies: H-O 463, H-S 347, H-Se 276, H-Te 238 $\mathrm{kJ\,mol^{-1}}$.`,
          t`The weakest bond, H-Te, releases $\ce{H+}$ most easily.`,
          t`So $\ce{H2Te}$ is the strongest acid.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.2 (viii)" },
      stem: t`The $\mathrm{p}K_a$ of $\ce{HCl}$ is $-7.0$ and that of $\ce{HI}$ is $-10.0$. Which is the stronger acid, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "pka" } },
      options: [
        { key: "A", text: t`$\ce{HCl}$: it is more stable to heat than $\ce{HI}$`, correct: false, misconceptionId: "C03-M2", value: "hcl_more_stable" },
        { key: "B", text: t`$\ce{HI}$: I is more electronegative than Cl, so H-I is the more polar bond`, correct: false, misconceptionId: "C03-M3", value: "hi_i_more_en" },
        { key: "C", text: t`$\ce{HI}$: its lower $\mathrm{p}K_a$ means a larger $K_a$, as its H-I bond is weaker`, correct: true, value: "hi_lower_pka" },
        { key: "D", text: t`$\ce{HCl}$: Cl is more electronegative, so H-Cl is the more polar bond`, correct: false, misconceptionId: "C03-M1", value: "hcl_more_polar" },
      ],
      solution: {
        steps: [
          t`$\mathrm{p}K_a = -\log K_a$, so the more negative $\mathrm{p}K_a$ belongs to the larger $K_a$.`,
          t`$-10.0$ is lower than $-7.0$, so $\ce{HI}$ ionises more fully.`,
          t`Its longer, weaker H-I bond releases $\ce{H+}$ more easily: $\ce{HI}$ is stronger.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/p-block-12-pyq#28" },
      stem: t`Which hydrogen halide is the weakest acid, and why?`,
      verify: { kind: "value", inputs: {  }, params: { q: "hx_weakest" } },
      options: [
        { key: "A", text: t`$\ce{HI}$: its H-I bond is the least polar`, correct: false, misconceptionId: "C03-M1", value: "hi_least_polar" },
        { key: "B", text: t`$\ce{HI}$: it is the least stable to heat`, correct: false, misconceptionId: "C03-M2", value: "hi_least_stable" },
        { key: "C", text: t`$\ce{HF}$: F is the least electronegative halogen, so H-F is the least polar`, correct: false, misconceptionId: "C03-M3", value: "hf_f_least_en" },
        { key: "D", text: t`$\ce{HF}$: its H-F bond is the strongest, so it gives up $\ce{H+}$ least easily`, correct: true, value: "hf_strong_bond" },
      ],
      solution: {
        steps: [
          t`H-X bond enthalpies: H-F 574, H-Cl 432, H-Br 363, H-I 295 $\mathrm{kJ\,mol^{-1}}$.`,
          t`The strongest bond, H-F, holds its $\ce{H+}$ most firmly.`,
          t`So $\ce{HF}$ is the weakest acid.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.2 (ii)" },
      stem: t`What is the oxidation state of sulfur in the sulfate ion, $\ce{SO4^2-}$?`,
      verify: { kind: "value", inputs: { c: "1", o: "4", h: "0", q: "-2" }, params: { q: "ox", grp: "16" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C03-M5", value: "0" },
        { key: "B", text: t`$-2$`, correct: false, misconceptionId: "C03-M6", value: "-2" },
        { key: "C", text: t`$+6$`, correct: true, value: "6" },
        { key: "D", text: t`$+8$`, correct: false, misconceptionId: "C03-M4", value: "8" },
      ],
      solution: {
        steps: [
          t`O is $-2$; the ion's charge is $-2$.`,
          t`$x + 4(-2) = -2$.`,
          t`$x - 8 = -2$, so $x = +6$.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/p-block-16-17-18-12-chem/Ex Q.3 (vii)" },
      stem: t`What is the oxidation state of bromine in the bromate ion, $\ce{BrO3-}$?`,
      verify: { kind: "value", inputs: { c: "1", o: "3", h: "0", q: "-1" }, params: { q: "ox", grp: "17" } },
      options: [
        { key: "A", text: t`$+5$`, correct: true, value: "5" },
        { key: "B", text: t`$+6$`, correct: false, misconceptionId: "C03-M4", value: "6" },
        { key: "C", text: t`$+1$`, correct: false, misconceptionId: "C03-M5", value: "1" },
        { key: "D", text: t`$-1$`, correct: false, misconceptionId: "C03-M6", value: "-1" },
      ],
      solution: {
        steps: [
          t`O is $-2$; the ion's charge is $-1$.`,
          t`$x + 3(-2) = -1$.`,
          t`$x - 6 = -1$, so $x = +5$.`,
        ],
      },
    },
  ],
};
