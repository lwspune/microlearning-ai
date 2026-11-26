import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Sodium iodide dissolves in dry acetone, but sodium chloride does not. How does that help a chemist turn an alkyl chloride into an alkyl iodide?`,
    reveal: t`In $\ce{R-Cl + NaI <=> R-I + NaCl}$ the NaCl formed falls out of the acetone as a solid. Removing it drives the equilibrium to the right: the **Finkelstein reaction**.`,
  },
  explanation: {
    intuition: [
      t`Alkyl halides are made from alcohols, from alkenes, or from other alkyl halides.`,
      t`An alcohol's OH is replaced by X using HX, a phosphorus halide or $\ce{SOCl2}$.`,
      t`HX adds across a C=C; X goes to the carbon with fewer H (Markovnikov's rule).`,
      t`With peroxide, HBr alone adds the other way round (anti-Markovnikov).`,
      t`One halogen can be swapped for another: NaI gives iodides, metallic fluorides give fluorides.`,
      t`Aryl halides come from the ring itself: $\ce{Cl2}$ with Fe in the dark.`,
    ],
    formal: [
      {
        title: "From alcohols",
        points: [
          t`With HX: $\ce{R-OH + HX -> R-X + H2O}$; HCl needs anhydrous $\ce{ZnCl2}$.`,
          t`With $\ce{PCl3}$: $\ce{3R-OH + PCl3}$ $\ce{-> 3R-Cl + H3PO3}$.`,
          t`With $\ce{PCl5}$: $\ce{R-OH + PCl5}$ $\ce{-> R-Cl + POCl3 + HCl}$.`,
          t`$\ce{PBr3}$ and $\ce{PI3}$ are made in the flask from red P with $\ce{Br2}$ or $\ce{I2}$.`,
          t`With $\ce{SOCl2}$: $\ce{R-OH + SOCl2}$ $\ce{-> R-Cl + SO2 ^ + HCl ^}$.`,
          t`$\ce{SOCl2}$ is best: both by-products are gases and escape, leaving pure R–Cl.`,
        ],
      },
      {
        title: "From alkanes and alkenes",
        points: [
          t`Free-radical halogenation of an alkane gives a mixture of mono- and polyhalogen products.`,
          t`So it is not a good way to prepare a single alkyl halide.`,
          t`HX adds to an alkene: $\ce{CH3-CH=CH2 + HBr}$ $\ce{-> CH3-CHBr-CH3}$.`,
          t`**Markovnikov's rule**: H goes to the C=C carbon with more H, X to the other one.`,
          t`Reactivity of HX towards alkenes: HI > HBr > HCl.`,
        ],
      },
      {
        title: "The peroxide effect",
        points: [
          t`With a peroxide present, HBr adds **anti-Markovnikov**: Br goes to the carbon with more H.`,
          t`$\ce{CH3-CH=CH2 + HBr}$ (peroxide) $\ce{-> CH3-CH2-CH2Br}$.`,
          t`This is the **peroxide** or **Kharasch effect**; the peroxide only starts a free-radical chain.`,
          t`HCl and HI show no peroxide effect: they still add by Markovnikov's rule.`,
          t`The peroxide is not a reagent: no O or OH ends up in the product.`,
        ],
      },
      {
        title: "Halogen exchange",
        points: [
          t`**Finkelstein reaction**: $\ce{R-Cl + NaI}$ $\ce{-> R-I + NaCl v}$, in dry acetone.`,
          t`NaCl or NaBr precipitates in acetone, which drives the exchange forward.`,
          t`**Swarts reaction**: R–Cl or R–Br heated with a metallic fluoride gives R–F.`,
          t`The fluorides used are AgF, $\ce{Hg2F2}$, $\ce{CoF2}$ or $\ce{SbF3}$.`,
          t`Swarts is the best route to alkyl fluorides; direct fluorination is far too violent.`,
        ],
      },
      {
        title: "Preparing aryl halides",
        points: [
          t`Benzene with $\ce{Cl2}$ and Fe (or $\ce{FeCl3}$), in the dark, gives chlorobenzene.`,
          t`Here Cl replaces a ring H by electrophilic substitution.`,
          t`Toluene under these conditions gives a mixture of o- and p-chlorotoluene.`,
          t`In sunlight, with no Fe, $\ce{Cl2}$ attacks toluene's side chain instead: benzyl chloride.`,
          t`Aryl halides are also made from diazonium salts (the Sandmeyer reaction), not from alcohols.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which reagent turns butan-1-ol into 1-chlorobutane while leaving no by-product in the flask: HCl with $\ce{ZnCl2}$, $\ce{PCl5}$ or $\ce{SOCl2}$?`,
      steps: [
        t`HCl with $\ce{ZnCl2}$ forms water, which stays in the flask.`,
        t`$\ce{PCl5}$ forms $\ce{POCl3}$, a liquid that has to be separated.`,
        t`$\ce{SOCl2}$ forms $\ce{SO2}$ and HCl, which are both gases and escape.`,
      ],
      answer: t`$\ce{SOCl2}$ (thionyl chloride).`,
    },
    visualSpec: t`Drop HBr onto a C=C with and without a peroxide bottle beside it, and watch the Br land on either carbon.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Thinks the peroxide effect works for every HX, so HCl and HI also add anti-Markovnikov with peroxide.",
      remediation: "Only HBr shows the peroxide (Kharasch) effect. HCl and HI add by Markovnikov's rule whether or not a peroxide is present.",
      fallback: { kind: "ext", topic: "addition to alkenes (Std XI Chemistry)" },
    },
    {
      id: "C03-M2",
      mistake: "Ignores the peroxide and adds HBr by Markovnikov's rule anyway.",
      remediation: "With a peroxide present, HBr adds anti-Markovnikov: Br goes to the C=C carbon that has more H atoms.",
      fallback: { kind: "ext", topic: "addition to alkenes (Std XI Chemistry)" },
    },
    {
      id: "C03-M3",
      mistake: "Treats every halogenation as free-radical substitution of an H, as for alkanes in light.",
      remediation: "HX adds across the C=C; it does not replace an H. Free-radical halogenation of alkanes gives mixtures, so it is not used to prepare alkyl halides.",
      fallback: { kind: "ext", topic: "halogenation of alkanes (Std XI Chemistry)" },
    },
    {
      id: "C03-M4",
      mistake: "Takes the peroxide as a reagent that adds an OH group to the alkene along with X.",
      remediation: "The peroxide only starts a free-radical chain. The product contains just H and Br from HBr; no oxygen enters it.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Mixes up the Finkelstein and Swarts reactions.",
      remediation: t`Finkelstein: NaI in dry acetone gives alkyl **iodides**. Swarts: a metallic fluoride such as $\ce{SbF3}$ gives alkyl **fluorides**.`,
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Uses an aryl halide route, such as the Sandmeyer reaction of a diazonium salt, for an alkyl halide.",
      remediation: "The Sandmeyer reaction makes aryl halides from aryl diazonium salts. Alkyl halides come from alcohols, alkenes or halogen exchange.",
      fallback: { kind: "concept", id: "C01" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.1 (ii)" },
      stem: t`Propene reacts with HI, $\ce{CH3-CH=CH2 + HI}$, in the presence of a peroxide. The major product is`,
      verify: { kind: "value", inputs: {  }, params: { kind: "hx", hx: "HI", peroxide: "yes" } },
      options: [
        { key: "A", text: t`$\ce{I-CH2-CH=CH2}$ (3-iodopropene)`, correct: false, misconceptionId: "C03-M3", value: "allylic" },
        { key: "B", text: t`$\ce{CH3-CHI-CH2OH}$ (2-iodopropan-1-ol)`, correct: false, misconceptionId: "C03-M4", value: "halohydrin" },
        { key: "C", text: t`$\ce{CH3-CHI-CH3}$ (2-iodopropane)`, correct: true, value: "markovnikov" },
        { key: "D", text: t`$\ce{CH3-CH2-CH2I}$ (1-iodopropane)`, correct: false, misconceptionId: "C03-M1", value: "anti" },
      ],
      solution: {
        steps: [
          t`HI shows no peroxide effect; only HBr does.`,
          t`So HI adds by Markovnikov's rule: H to the $\ce{CH2}$ end, I to the middle carbon.`,
          t`The product is $\ce{CH3-CHI-CH3}$, 2-iodopropane.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (ii-c)" },
      stem: t`3-Methylbut-1-ene reacts with HBr, $\ce{(CH3)2CH-CH=CH2 + HBr}$, in the presence of a peroxide. The major product is`,
      verify: { kind: "value", inputs: {  }, params: { kind: "hx", hx: "HBr", peroxide: "yes" } },
      options: [
        { key: "A", text: t`$\ce{(CH3)2CBr-CH=CH2}$ (3-bromo-3-methylbut-1-ene)`, correct: false, misconceptionId: "C03-M3", value: "allylic" },
        { key: "B", text: t`$\ce{(CH3)2CH-CHBr-CH2OH}$ (2-bromo-3-methylbutan-1-ol)`, correct: false, misconceptionId: "C03-M4", value: "halohydrin" },
        { key: "C", text: t`$\ce{(CH3)2CH-CHBr-CH3}$ (2-bromo-3-methylbutane)`, correct: false, misconceptionId: "C03-M2", value: "markovnikov" },
        { key: "D", text: t`$\ce{(CH3)2CH-CH2-CH2Br}$ (1-bromo-3-methylbutane)`, correct: true, value: "anti" },
      ],
      solution: {
        steps: [
          t`HBr with a peroxide shows the peroxide effect: anti-Markovnikov addition.`,
          t`Br goes to the terminal $\ce{CH2}$, which has more H; H goes to the other C=C carbon.`,
          t`The product is $\ce{(CH3)2CH-CH2-CH2Br}$, 1-bromo-3-methylbutane.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.1 (iv)" },
      stem: t`The best method for preparing alkyl fluorides is`,
      verify: { kind: "value", inputs: {  }, params: { kind: "method", want: "fluoride" } },
      options: [
        { key: "A", text: t`the Finkelstein reaction`, correct: false, misconceptionId: "C03-M5", value: "finkelstein" },
        { key: "B", text: t`the Swarts reaction`, correct: true, value: "swarts" },
        { key: "C", text: t`the Sandmeyer reaction`, correct: false, misconceptionId: "C03-M6", value: "sandmeyer" },
        { key: "D", text: t`free-radical fluorination of an alkane`, correct: false, misconceptionId: "C03-M3", value: "free_radical" },
      ],
      solution: {
        steps: [
          t`Direct fluorination of alkanes is far too violent to control.`,
          t`Instead an alkyl chloride or bromide is heated with a metallic fluoride, such as $\ce{SbF3}$.`,
          t`This halogen exchange is the Swarts reaction.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.7 (i)" },
      stem: t`2-Methylpropene reacts with HCl, $\ce{(CH3)2C=CH2 + HCl}$, in the presence of a peroxide. The major product is`,
      verify: { kind: "value", inputs: {  }, params: { kind: "hx", hx: "HCl", peroxide: "yes" } },
      options: [
        { key: "A", text: t`$\ce{(CH3)3C-Cl}$ (2-chloro-2-methylpropane)`, correct: true, value: "markovnikov" },
        { key: "B", text: t`$\ce{(CH3)2CCl-CH2OH}$ (2-chloro-2-methylpropan-1-ol)`, correct: false, misconceptionId: "C03-M4", value: "halohydrin" },
        { key: "C", text: t`$\ce{(CH3)2CH-CH2Cl}$ (1-chloro-2-methylpropane)`, correct: false, misconceptionId: "C03-M1", value: "anti" },
        { key: "D", text: t`$\ce{CH2=C(CH3)-CH2Cl}$ (3-chloro-2-methylpropene)`, correct: false, misconceptionId: "C03-M3", value: "allylic" },
      ],
      solution: {
        steps: [
          t`HCl shows no peroxide effect, so the peroxide changes nothing.`,
          t`By Markovnikov's rule, H goes to the $\ce{CH2}$ end and Cl to the carbon with no H.`,
          t`The product is $\ce{(CH3)3C-Cl}$, 2-chloro-2-methylpropane.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.6 (iv)" },
      stem: t`But-1-ene reacts with HBr, $\ce{CH3-CH2-CH=CH2 + HBr}$, in the presence of a peroxide. The major product is`,
      verify: { kind: "value", inputs: {  }, params: { kind: "hx", hx: "HBr", peroxide: "yes" } },
      options: [
        { key: "A", text: t`$\ce{CH3-CH2-CHBr-CH3}$ (2-bromobutane)`, correct: false, misconceptionId: "C03-M2", value: "markovnikov" },
        { key: "B", text: t`$\ce{CH3-CHBr-CH=CH2}$ (3-bromobut-1-ene)`, correct: false, misconceptionId: "C03-M3", value: "allylic" },
        { key: "C", text: t`$\ce{CH3-CH2-CHBr-CH2OH}$ (2-bromobutan-1-ol)`, correct: false, misconceptionId: "C03-M4", value: "halohydrin" },
        { key: "D", text: t`$\ce{CH3-CH2-CH2-CH2Br}$ (1-bromobutane)`, correct: true, value: "anti" },
      ],
      solution: {
        steps: [
          t`HBr with a peroxide adds anti-Markovnikov.`,
          t`Br goes to the terminal $\ce{CH2}$ and H to the $\ce{CH}$ carbon of the C=C.`,
          t`The product is $\ce{CH3-CH2-CH2-CH2Br}$, 1-bromobutane.`,
        ],
      },
    },
  ],
};
