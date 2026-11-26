import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A pale blue solution turns deep, almost inky blue when ammonia is added. Another, pale yellow, turns blood red with a drop of thiocyanate. What do these colours tell a chemist?`,
    reveal: t`Which metal ion is present: the deep blue is $\ce{[Cu(NH3)4]^2+}$, the blood red is iron(III) thiocyanate.`,
  },
  explanation: {
    intuition: [
      t`**Salt analysis** finds which cation a salt contains.`,
      t`Group reagents first sort cations into groups by what precipitates them.`,
      t`A confirmatory test then picks out the ion by a colour or precipitate.`,
      t`Many of these colours come from complexes of transition metal ions.`,
    ],
    formal: [
      {
        title: "Group reagents",
        points: [
          t`Group I: dilute HCl precipitates $\ce{Pb^2+}$ as $\ce{PbCl2}$.`,
          t`Group II: $\ce{H2S}$ in dilute HCl precipitates $\ce{Cu^2+}$, $\ce{Pb^2+}$ as sulfides.`,
          t`Group III: $\ce{NH4OH}$ with $\ce{NH4Cl}$ precipitates $\ce{Fe^3+}$, $\ce{Al^3+}$ as hydroxides.`,
          t`Group IV: $\ce{H2S}$ in ammoniacal solution precipitates $\ce{Ni^2+}$, $\ce{Zn^2+}$.`,
        ],
      },
      {
        title: "Confirmatory colours",
        points: [
          t`$\ce{Cu^2+}$ + excess $\ce{NH3}$: deep blue $\ce{[Cu(NH3)4]^2+}$.`,
          t`$\ce{Cu^2+}$ + potassium ferrocyanide: chocolate brown precipitate.`,
          t`$\ce{Fe^3+}$ + thiocyanate: blood red.`,
          t`$\ce{Fe^3+}$ + potassium ferrocyanide: Prussian blue precipitate.`,
          t`$\ce{Ni^2+}$ + dimethylglyoxime (ammoniacal): rosy red precipitate.`,
        ],
      },
    ],
    worked: {
      prompt: t`A salt's solution gives no precipitate with dilute HCl but a black one with $\ce{H2S}$ in dilute HCl. The black solid dissolved in acid turns deep blue with excess ammonia. Which cation is it?`,
      steps: [
        t`Not group I; precipitated by $\ce{H2S}$ in acid: group II.`,
        t`Deep blue with excess ammonia confirms $\ce{Cu^2+}$.`,
      ],
      answer: t`$\ce{Cu^2+}$`,
    },
    visualSpec: t`A flow chart of group reagents that sorts a mixture of cations, ending in each ion's colour test.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Gives iron's thiocyanate colour.",
      remediation: t`Blood red is $\ce{Fe^3+}$ with thiocyanate; copper with ammonia is deep blue.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Expects a white precipitate.",
      remediation: t`Excess ammonia dissolves the hydroxide into deep blue $\ce{[Cu(NH3)4]^2+}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M3",
      mistake: "Expects Prussian blue.",
      remediation: "Prussian blue is iron with ferrocyanide.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Gives copper's ammonia colour.",
      remediation: t`Deep blue is copper with ammonia; $\ce{Fe^3+}$ with thiocyanate is blood red.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Gives the ferrocyanide colour.",
      remediation: "Prussian blue needs ferrocyanide; thiocyanate gives blood red.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Expects no change.",
      remediation: t`$\ce{Fe^3+}$ and $\ce{SCN-}$ form a blood red complex at once.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Gives the thiocyanate colour.",
      remediation: "Blood red is the thiocyanate test; ferrocyanide gives Prussian blue.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Gives copper's ammonia colour.",
      remediation: t`$\ce{Fe^3+}$ with ferrocyanide gives Prussian blue.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M9",
      mistake: "Gives copper's ferrocyanide colour.",
      remediation: "Chocolate brown is copper ferrocyanide; iron gives Prussian blue.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: t`Expects the green of $\ce{Ni^2+}$ to stay.`,
      remediation: "Dimethylglyoxime precipitates nickel as a rosy red complex.",
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C10-M11",
      mistake: "Expects blood red.",
      remediation: "Blood red is iron with thiocyanate; nickel with DMG is a rosy red precipitate.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Expects a black sulfide.",
      remediation: t`Black NiS needs $\ce{H2S}$; DMG gives a rosy red precipitate.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M13",
      mistake: "Uses group I's reagent.",
      remediation: "Dilute HCl precipitates only group I chlorides.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Uses group IV's reagent.",
      remediation: t`$\ce{H2S}$ in ammoniacal solution precipitates group IV, after groups I to III are gone.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Uses group III's reagent.",
      remediation: t`$\ce{NH4OH}$ with $\ce{NH4Cl}$ precipitates group III hydroxides.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "authored" },
      stem: t`Excess ammonia solution is added to a solution of a $\ce{Cu^2+}$ salt. The result is`,
      verify: { kind: "value", inputs: {  }, params: { q: "cu" } },
      options: [
        { key: "A", text: t`a blood red colour`, correct: false, misconceptionId: "C10-M1", value: "blood_red" },
        { key: "B", text: t`a white precipitate`, correct: false, misconceptionId: "C10-M2", value: "white_ppt" },
        { key: "C", text: t`a Prussian blue precipitate`, correct: false, misconceptionId: "C10-M3", value: "prussian_blue" },
        { key: "D", text: t`a deep blue solution`, correct: true, value: "deep_blue" },
      ],
      solution: {
        steps: [
          t`Excess ammonia forms the complex $\ce{[Cu(NH3)4]^2+}$.`,
          t`It is deep blue.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "authored" },
      stem: t`Potassium thiocyanate is added to a solution of an $\ce{Fe^3+}$ salt. The result is`,
      verify: { kind: "value", inputs: {  }, params: { q: "scn" } },
      options: [
        { key: "A", text: t`a blood red colour`, correct: true, value: "blood_red" },
        { key: "B", text: t`a deep blue solution`, correct: false, misconceptionId: "C10-M4", value: "deep_blue" },
        { key: "C", text: t`a Prussian blue precipitate`, correct: false, misconceptionId: "C10-M5", value: "prussian_blue" },
        { key: "D", text: t`no visible change`, correct: false, misconceptionId: "C10-M6", value: "no_change" },
      ],
      solution: {
        steps: [
          t`$\ce{Fe^3+}$ and $\ce{SCN-}$ form a complex.`,
          t`It is blood red.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`Potassium ferrocyanide, $\ce{K4[Fe(CN)6]}$, is added to a solution of an $\ce{Fe^3+}$ salt. The result is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ferro" } },
      options: [
        { key: "A", text: t`a chocolate brown precipitate`, correct: false, misconceptionId: "C10-M9", value: "chocolate_brown" },
        { key: "B", text: t`a Prussian blue precipitate`, correct: true, value: "prussian_blue" },
        { key: "C", text: t`a blood red colour`, correct: false, misconceptionId: "C10-M7", value: "blood_red" },
        { key: "D", text: t`a deep blue solution`, correct: false, misconceptionId: "C10-M8", value: "deep_blue" },
      ],
      solution: {
        steps: [
          t`$\ce{Fe^3+}$ and $\ce{[Fe(CN)6]^4-}$ form $\ce{Fe4[Fe(CN)6]3}$.`,
          t`A Prussian blue precipitate.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`Dimethylglyoxime is added to an ammoniacal solution of a $\ce{Ni^2+}$ salt. The result is`,
      verify: { kind: "value", inputs: {  }, params: { q: "ni" } },
      options: [
        { key: "A", text: t`a blood red solution`, correct: false, misconceptionId: "C10-M11", value: "blood_red" },
        { key: "B", text: t`a black precipitate`, correct: false, misconceptionId: "C10-M12", value: "black_ppt" },
        { key: "C", text: t`a rosy red precipitate`, correct: true, value: "rosy_red_ppt" },
        { key: "D", text: t`a green solution, unchanged`, correct: false, misconceptionId: "C10-M10", value: "green_solution" },
      ],
      solution: {
        steps: [
          t`Dimethylglyoxime chelates nickel.`,
          t`A rosy red precipitate forms.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`In salt analysis, group II cations such as $\ce{Cu^2+}$ and $\ce{Pb^2+}$ are precipitated by`,
      verify: { kind: "value", inputs: {  }, params: { q: "group" } },
      options: [
        { key: "A", text: t`$\ce{H2S}$ in dilute HCl`, correct: true, value: "h2s_acidic" },
        { key: "B", text: t`dilute HCl alone`, correct: false, misconceptionId: "C10-M13", value: "dilute_hcl" },
        { key: "C", text: t`$\ce{H2S}$ in ammoniacal solution`, correct: false, misconceptionId: "C10-M14", value: "h2s_ammoniacal" },
        { key: "D", text: t`$\ce{NH4OH}$ with $\ce{NH4Cl}$`, correct: false, misconceptionId: "C10-M15", value: "ammonium_hydroxide" },
      ],
      solution: {
        steps: [
          t`Group II sulfides are very insoluble.`,
          t`They precipitate with $\ce{H2S}$ even in dilute HCl.`,
        ],
      },
    },
  ],
};
