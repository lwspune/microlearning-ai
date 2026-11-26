import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`Heating vinegar's acid with ethanol and a drop of sulfuric acid fills the room with the fruity smell of an ester. What has the alcohol done to the acid?`,
    reveal: t`It has replaced the acid's OH with its own OR group, releasing water: $\ce{CH3COOH + C2H5OH}$ $\ce{<=> CH3COOC2H5 + H2O}$.`,
  },
  explanation: {
    intuition: [
      t`Carboxylic acids react at the O-H bond (as acids), at the C-OH bond (losing OH), and at the $\alpha$-carbon.`,
      t`As acids they give salts with metals, bases and carbonates.`,
      t`Replacing their OH gives esters, acid chlorides and amides.`,
      t`Their sodium salts lose $\ce{CO2}$ with soda-lime.`,
    ],
    formal: [
      {
        title: "Replacing the OH",
        points: [
          t`With an alcohol and conc. $\ce{H2SO4}$: an ester and water (**Fischer esterification**).`,
          t`With $\ce{PCl5}$, $\ce{PCl3}$ or $\ce{SOCl2}$: an acid chloride, $\ce{RCOCl}$.`,
          t`With $\ce{P2O5}$ or on strong heating, two molecules lose water: an anhydride.`,
        ],
      },
      {
        title: "Reduction and the alpha-carbon",
        points: [
          t`$\ce{LiAlH4}$ or diborane reduces $\ce{-COOH}$ to $\ce{-CH2OH}$; diborane leaves esters, nitro and halo groups alone.`,
          t`**Hell-Volhard-Zelinsky**: $\ce{Cl2}$ or $\ce{Br2}$ with red P replaces an $\alpha$-hydrogen: $\ce{ClCH2COOH}$.`,
          t`**Decarboxylation**: $\ce{RCOONa}$ with soda-lime gives $\ce{RH}$; sodium acetate gives methane.`,
        ],
      },
    ],
    worked: {
      prompt: t`What does ethanoic acid give with thionyl chloride?`,
      steps: [
        t`$\ce{SOCl2}$ replaces the OH of COOH by Cl.`,
        t`$\ce{CH3COOH + SOCl2}$ $\ce{-> CH3COCl + SO2 + HCl}$.`,
      ],
      answer: t`Ethanoyl chloride, $\ce{CH3COCl}$`,
    },
    visualSpec: t`Choose a reagent and see which bond of the COOH group it attacks: O-H, C-OH or the alpha C-H.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Thinks diborane reduces esters.",
      remediation: "Diborane reduces the COOH group and leaves esters, nitro and halo groups alone.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Thinks diborane reduces nitro groups.",
      remediation: "Diborane is selective for COOH; nitro groups are left unchanged.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Thinks diborane reduces halo groups.",
      remediation: "Diborane does not touch C-X bonds; it reduces COOH.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Thinks esterification releases hydrogen.",
      remediation: "The acid's OH and the alcohol's H leave together as water.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Thinks the alcohol forms an ether.",
      remediation: "With the acid present the alcohol forms an ester with it.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Thinks the acid forms an anhydride with the alcohol.",
      remediation: "Anhydrides come from two acid molecules; acid plus alcohol gives an ester.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Replaces the whole COOH group, giving an alkyl chloride.",
      remediation: "Only the OH of COOH is replaced; the carbonyl carbon stays.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: t`Substitutes an $\alpha$-hydrogen when $\ce{PCl5}$ is used.`,
      remediation: t`$\ce{PCl5}$ replaces the OH, giving the acid chloride; $\alpha$-substitution needs $\ce{Cl2}$ and red P.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Thinks the acid or its salt does not react.",
      remediation: "Carboxylic acids react readily with these reagents.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Replaces the OH in the Hell-Volhard-Zelinsky reaction.",
      remediation: t`HVZ replaces an $\alpha$-hydrogen by halogen; the COOH stays.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M11",
      mistake: "Keeps all the carbons on decarboxylation.",
      remediation: "Soda-lime removes the COOH carbon as carbonate, so one carbon is lost.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Thinks decarboxylation of sodium acetate gives a ketone.",
      remediation: t`With soda-lime the salt loses $\ce{CO2}$, giving the alkane $\ce{RH}$: methane.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/aldehydes-ketones-12-chem/Ex Q.1 (v)" },
      stem: t`Diborane, $\ce{B2H6}$, reduces which group?`,
      verify: { kind: "value", inputs: {  }, params: { q: "diborane" } },
      options: [
        { key: "A", text: t`the ester group`, correct: false, misconceptionId: "C10-M1", value: "ester_group" },
        { key: "B", text: t`the carboxylic acid group`, correct: true, value: "acid_group" },
        { key: "C", text: t`the halo group`, correct: false, misconceptionId: "C10-M3", value: "halo_group" },
        { key: "D", text: t`the nitro group`, correct: false, misconceptionId: "C10-M2", value: "nitro_group" },
      ],
      solution: {
        steps: [
          t`Diborane is selective.`,
          t`It reduces COOH to $\ce{CH2OH}$ and leaves the other groups.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#31" },
      stem: t`Ethanoic acid is heated with ethanol and a little concentrated $\ce{H2SO4}$. The products are`,
      verify: { kind: "value", inputs: {  }, params: { q: "ester" } },
      options: [
        { key: "A", text: t`diethyl ether and ethanoic acid`, correct: false, misconceptionId: "C10-M5", value: "diethyl_ether" },
        { key: "B", text: t`ethyl ethanoate and hydrogen`, correct: false, misconceptionId: "C10-M4", value: "ethyl_acetate_h2" },
        { key: "C", text: t`ethyl ethanoate and water`, correct: true, value: "ethyl_acetate_water" },
        { key: "D", text: t`ethanoic anhydride and water`, correct: false, misconceptionId: "C10-M6", value: "anhydride" },
      ],
      solution: {
        steps: [
          t`The alcohol's OR replaces the acid's OH.`,
          t`Ethyl ethanoate and water form.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#27" },
      stem: t`Ethanoic acid is warmed with phosphorus pentachloride, $\ce{PCl5}$. The organic product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "pcl5" } },
      options: [
        { key: "A", text: t`none: acids do not react with $\ce{PCl5}$`, correct: false, misconceptionId: "C10-M9", value: "no_reaction" },
        { key: "B", text: t`chloroethane, $\ce{CH3CH2Cl}$`, correct: false, misconceptionId: "C10-M7", value: "chloroethane" },
        { key: "C", text: t`chloroethanoic acid, $\ce{ClCH2COOH}$`, correct: false, misconceptionId: "C10-M8", value: "chloroacetic" },
        { key: "D", text: t`ethanoyl chloride, $\ce{CH3COCl}$`, correct: true, value: "acetyl_chloride" },
      ],
      solution: {
        steps: [
          t`$\ce{PCl5}$ replaces OH by Cl.`,
          t`$\ce{CH3COOH + PCl5}$ $\ce{-> CH3COCl + POCl3 + HCl}$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#32" },
      stem: t`Ethanoic acid is treated with chlorine in the presence of red phosphorus (Hell-Volhard-Zelinsky). The product is`,
      verify: { kind: "value", inputs: {  }, params: { q: "hvz" } },
      options: [
        { key: "A", text: t`chloroethanoic acid, $\ce{ClCH2COOH}$`, correct: true, value: "chloroacetic" },
        { key: "B", text: t`chloromethane, $\ce{CH3Cl}$`, correct: false, misconceptionId: "C10-M7", value: "chloromethane" },
        { key: "C", text: t`none: acids do not react with chlorine`, correct: false, misconceptionId: "C10-M9", value: "no_reaction" },
        { key: "D", text: t`ethanoyl chloride, $\ce{CH3COCl}$`, correct: false, misconceptionId: "C10-M10", value: "acetyl_chloride" },
      ],
      solution: {
        steps: [
          t`Red P and $\ce{Cl2}$ replace an $\alpha$-hydrogen.`,
          t`So chloroethanoic acid forms.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/aldehydes-ketones-acids-12-pyq#36" },
      stem: t`Sodium acetate is heated with soda-lime. Which gas is given off?`,
      verify: { kind: "value", inputs: {  }, params: { q: "sodalime" } },
      options: [
        { key: "A", text: t`ethane`, correct: false, misconceptionId: "C10-M11", value: "ethane" },
        { key: "B", text: t`methane`, correct: true, value: "methane" },
        { key: "C", text: t`acetone vapour`, correct: false, misconceptionId: "C10-M12", value: "acetone" },
        { key: "D", text: t`none: the salt does not decompose`, correct: false, misconceptionId: "C10-M9", value: "no_gas" },
      ],
      solution: {
        steps: [
          t`Soda-lime removes $\ce{CO2}$ from the salt.`,
          t`$\ce{CH3COONa + NaOH}$ $\ce{-> CH4 + Na2CO3}$: methane.`,
        ],
      },
    },
  ],
};
