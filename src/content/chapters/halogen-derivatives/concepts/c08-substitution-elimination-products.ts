import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Heat bromoethane with $\ce{KOH}$ in water and you get ethanol. Heat it with $\ce{KOH}$ in alcohol and you get ethene gas. Same two reactants: why two products?`,
    reveal: t`In water, $\ce{OH-}$ acts as a nucleophile and replaces $\ce{Br}$. In alcohol, $\ce{OH-}$ (with $\ce{C2H5O-}$) acts as a base, pulling off $\ce{H}$ and $\ce{Br}$ together to make a double bond.`,
  },
  explanation: {
    intuition: [
      t`Alkyl halides are useful because the halogen is easy to replace.`,
      t`A nucleophile replaces it in a **substitution**: $\ce{R-X + Nu- -> R-Nu + X-}$.`,
      t`A strong base can instead remove $\ce{H}$ and $\ce{X}$ from neighbouring carbons: an **elimination**.`,
      t`Water as solvent favours substitution; alcohol favours elimination.`,
      t`Some nucleophiles can attack through two different atoms, giving two different products.`,
    ],
    formal: [
      {
        title: "Substitution products",
        points: [
          t`Aqueous $\ce{KOH}$ or moist $\ce{Ag2O}$: alcohol, $\ce{R-OH}$.`,
          t`Sodium alkoxide $\ce{NaOR'}$: ether, $\ce{R-O-R'}$ (Williamson synthesis).`,
          t`$\ce{NH3}$: amine, $\ce{R-NH2}$; silver acetate: ester, $\ce{CH3COOR}$.`,
          t`Alcoholic $\ce{KCN}$: nitrile, $\ce{R-CN}$, with one carbon more than $\ce{R-X}$.`,
        ],
      },
      {
        title: "Ambident nucleophiles",
        points: [
          t`An **ambident** nucleophile can attack through two atoms: $\ce{CN-}$ through C or N, $\ce{NO2-}$ through N or O.`,
          t`$\ce{KCN}$ is ionic, so $\ce{CN-}$ attacks through carbon: nitrile, $\ce{R-CN}$.`,
          t`$\ce{AgCN}$ is covalent, so nitrogen attacks: isocyanide, $\ce{R-NC}$.`,
          t`$\ce{KNO2}$ attacks through oxygen: alkyl nitrite, $\ce{R-O-N=O}$.`,
          t`$\ce{AgNO2}$ attacks through nitrogen: nitroalkane, $\ce{R-NO2}$.`,
        ],
      },
      {
        title: "Elimination: Saytzeff rule",
        points: [
          t`Alcoholic $\ce{KOH}$ removes $\ce{HX}$: **dehydrohalogenation**, giving an alkene.`,
          t`$\ce{H}$ leaves from a carbon next to the one carrying $\ce{X}$.`,
          t`When there is a choice, the more substituted alkene is the major product (**Saytzeff rule**).`,
          t`2-Bromobutane gives mainly but-2-ene, with less but-1-ene.`,
        ],
      },
    ],
    worked: {
      prompt: t`Bromoethane is treated separately with (a) aqueous $\ce{KOH}$, (b) alcoholic $\ce{KOH}$, (c) sodium methoxide. Name the products.`,
      steps: [
        t`(a) $\ce{OH-}$ replaces $\ce{Br}$: $\ce{CH3CH2OH}$, ethanol.`,
        t`(b) $\ce{HBr}$ is removed: $\ce{CH2=CH2}$, ethene.`,
        t`(c) $\ce{CH3O-}$ replaces $\ce{Br}$: $\ce{CH3CH2-O-CH3}$, ethyl methyl ether.`,
      ],
      answer: t`Ethanol; ethene; ethyl methyl ether`,
    },
    visualSpec: t`Swap the solvent between water and alcohol and the reagent between K and Ag salts, and watch which bond the attacking atom makes.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: t`Swaps the cyanides: thinks $\ce{AgCN}$ gives the nitrile and $\ce{KCN}$ the isocyanide.`,
      remediation: t`Ionic $\ce{KCN}$ attacks through carbon, giving $\ce{R-CN}$; covalent $\ce{AgCN}$ attacks through nitrogen, giving $\ce{R-NC}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M2",
      mistake: t`Swaps the nitrites: thinks $\ce{KNO2}$ gives the nitroalkane and $\ce{AgNO2}$ the alkyl nitrite.`,
      remediation: t`$\ce{KNO2}$ attacks through oxygen, giving $\ce{R-O-N=O}$; $\ce{AgNO2}$ attacks through nitrogen, giving $\ce{R-NO2}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M3",
      mistake: t`Swaps the two $\ce{KOH}$ reactions: thinks alcoholic $\ce{KOH}$ gives the alcohol.`,
      remediation: t`Aqueous $\ce{KOH}$ substitutes to give an alcohol; alcoholic $\ce{KOH}$ eliminates $\ce{HX}$ to give an alkene.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M4",
      mistake: "Reverses the Saytzeff rule: thinks the less substituted alkene is the major product.",
      remediation: "The more substituted alkene, with more alkyl groups on the double bond, is more stable and forms mainly.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: t`Loses count of the carbons, for example forgetting that $\ce{CN}$ adds a carbon.`,
      remediation: t`The alkyl group stays whole: bromoethane gives two-carbon products, and with $\ce{CN}$ a three-carbon nitrile.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: t`Thinks every reagent used in alcohol eliminates $\ce{HX}$.`,
      remediation: t`Elimination needs a strong base such as $\ce{KOH}$; salts like $\ce{KCN}$ and $\ce{AgNO2}$ substitute.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/halogen-derivatives-12-pyq#11" },
      stem: t`Bromoethane, $\ce{CH3CH2Br}$, is heated with alcoholic $\ce{KCN}$. The main organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "kcn" } },
      options: [
        { key: "A", text: t`$\ce{CH3CH2CN}$, propanenitrile`, correct: true, value: "propanenitrile" },
        { key: "B", text: t`$\ce{CH3CH2NC}$, ethyl isocyanide`, correct: false, misconceptionId: "C08-M1", value: "ethyl_isocyanide" },
        { key: "C", text: t`$\ce{CH3CN}$, ethanenitrile`, correct: false, misconceptionId: "C08-M5", value: "ethanenitrile" },
        { key: "D", text: t`$\ce{CH2=CH2}$: a reagent in alcohol removes $\ce{HBr}$`, correct: false, misconceptionId: "C08-M6", value: "ethene" },
      ],
      solution: {
        steps: [
          t`$\ce{KCN}$ is ionic, so $\ce{CN-}$ attacks through carbon.`,
          t`$\ce{CH3CH2Br + KCN}$ $\ce{-> CH3CH2CN + KBr}$: three carbons, propanenitrile.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.2 (vi-c)" },
      stem: t`Bromoethane is heated with silver cyanide, $\ce{AgCN}$. The main organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "agcn" } },
      options: [
        { key: "A", text: t`$\ce{CH3CH2CN}$, propanenitrile`, correct: false, misconceptionId: "C08-M1", value: "propanenitrile" },
        { key: "B", text: t`$\ce{CH3NC}$, methyl isocyanide`, correct: false, misconceptionId: "C08-M5", value: "methyl_isocyanide" },
        { key: "C", text: t`$\ce{CH2=CH2}$: a reagent in alcohol removes $\ce{HBr}$`, correct: false, misconceptionId: "C08-M6", value: "ethene" },
        { key: "D", text: t`$\ce{CH3CH2NC}$, ethyl isocyanide`, correct: true, value: "ethyl_isocyanide" },
      ],
      solution: {
        steps: [
          t`$\ce{AgCN}$ is covalent, so nitrogen attacks the carbon.`,
          t`$\ce{CH3CH2Br + AgCN}$ $\ce{-> CH3CH2NC + AgBr}$: ethyl isocyanide.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/halogen-derivatives-12-pyq#12" },
      stem: t`Bromoethane is heated with silver nitrite, $\ce{AgNO2}$. The main organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "agno2" } },
      options: [
        { key: "A", text: t`$\ce{CH3CH2-O-N=O}$, ethyl nitrite`, correct: false, misconceptionId: "C08-M2", value: "ethyl_nitrite" },
        { key: "B", text: t`$\ce{CH3NO2}$, nitromethane`, correct: false, misconceptionId: "C08-M5", value: "nitromethane" },
        { key: "C", text: t`$\ce{CH2=CH2}$: a reagent in alcohol removes $\ce{HBr}$`, correct: false, misconceptionId: "C08-M6", value: "ethene" },
        { key: "D", text: t`$\ce{CH3CH2NO2}$, nitroethane`, correct: true, value: "nitroethane" },
      ],
      solution: {
        steps: [
          t`$\ce{AgNO2}$ attacks through nitrogen.`,
          t`$\ce{CH3CH2Br + AgNO2}$ $\ce{-> CH3CH2NO2 + AgBr}$: nitroethane.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "authored" },
      stem: t`Bromoethane is heated with potassium nitrite, $\ce{KNO2}$. The main organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "kno2" } },
      options: [
        { key: "A", text: t`$\ce{CH3-O-N=O}$, methyl nitrite`, correct: false, misconceptionId: "C08-M5", value: "methyl_nitrite" },
        { key: "B", text: t`$\ce{CH2=CH2}$: a reagent in alcohol removes $\ce{HBr}$`, correct: false, misconceptionId: "C08-M6", value: "ethene" },
        { key: "C", text: t`$\ce{CH3CH2-O-N=O}$, ethyl nitrite`, correct: true, value: "ethyl_nitrite" },
        { key: "D", text: t`$\ce{CH3CH2NO2}$, nitroethane`, correct: false, misconceptionId: "C08-M2", value: "nitroethane" },
      ],
      solution: {
        steps: [
          t`$\ce{KNO2}$ gives $\ce{NO2-}$, which attacks through oxygen.`,
          t`$\ce{CH3CH2Br + KNO2}$ $\ce{-> CH3CH2ONO + KBr}$: ethyl nitrite.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/halogen-derivatives-12-chem/Ex Q.7 (ii-a)" },
      stem: t`2-Bromobutane, $\ce{CH3CHBrCH2CH3}$, is heated with alcoholic $\ce{KOH}$. The major product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "alc2" } },
      options: [
        { key: "A", text: t`$\ce{CH3CH=CH2}$, propene`, correct: false, misconceptionId: "C08-M5", value: "propene" },
        { key: "B", text: t`$\ce{CH3CH=CHCH3}$, but-2-ene`, correct: true, value: "but_2_ene" },
        { key: "C", text: t`$\ce{CH2=CHCH2CH3}$, but-1-ene`, correct: false, misconceptionId: "C08-M4", value: "but_1_ene" },
        { key: "D", text: t`$\ce{CH3CH(OH)CH2CH3}$, butan-2-ol`, correct: false, misconceptionId: "C08-M3", value: "butan_2_ol" },
      ],
      solution: {
        steps: [
          t`Alcoholic $\ce{KOH}$ removes $\ce{HBr}$.`,
          t`$\ce{H}$ can leave from C1 (but-1-ene) or C3 (but-2-ene).`,
          t`By Saytzeff's rule the more substituted but-2-ene is the major product.`,
        ],
      },
    },
    {
      id: "C08-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/halogen-derivatives-12-pyq#9" },
      stem: t`2-Bromo-2-methylbutane, $\ce{(CH3)2CBrCH2CH3}$, is heated with alcoholic $\ce{KOH}$. The major product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "alc3" } },
      options: [
        { key: "A", text: t`$\ce{(CH3)2C(OH)CH2CH3}$, 2-methylbutan-2-ol`, correct: false, misconceptionId: "C08-M3", value: "methylbutan_2_ol" },
        { key: "B", text: t`$\ce{(CH3)2C=CH2}$, 2-methylpropene`, correct: false, misconceptionId: "C08-M5", value: "methylpropene" },
        { key: "C", text: t`$\ce{(CH3)2C=CHCH3}$, 2-methylbut-2-ene`, correct: true, value: "methylbut_2_ene" },
        { key: "D", text: t`$\ce{CH2=C(CH3)CH2CH3}$, 2-methylbut-1-ene`, correct: false, misconceptionId: "C08-M4", value: "methylbut_1_ene" },
      ],
      solution: {
        steps: [
          t`Alcoholic $\ce{KOH}$ removes $\ce{HBr}$; $\ce{Br}$ is on C2.`,
          t`$\ce{H}$ from C3 gives $\ce{(CH3)2C=CHCH3}$, with three alkyl groups on the double bond.`,
          t`This more substituted alkene, 2-methylbut-2-ene, is the major product.`,
        ],
      },
    },
  ],
};
