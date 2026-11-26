import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Hydrogen sits above lithium in most periodic tables, but some chemists would rather put it above fluorine. Who is right?`,
    reveal: t`Both have a case. With one electron, hydrogen loses it like an alkali metal or gains one like a halogen.`,
  },
  explanation: {
    intuition: [
      t`Hydrogen has just one electron, $1s^1$.`,
      t`Losing it, like the alkali metals, gives $\ce{H+}$.`,
      t`Gaining one, like the halogens, gives $\ce{H-}$; it also forms diatomic $\ce{H2}$.`,
      t`It has three isotopes: protium, deuterium and tritium.`,
    ],
    formal: [
      {
        title: "Isotopes",
        points: [
          t`Protium, $^{1}_{1}\mathrm{H}$: 1 proton, no neutron.`,
          t`Deuterium, $^{2}_{1}\mathrm{H}$: 1 proton, 1 neutron.`,
          t`Tritium, $^{3}_{1}\mathrm{H}$: 1 proton, 2 neutrons; radioactive.`,
        ],
      },
      {
        title: "Position",
        points: [
          t`Like alkali metals: $ns^1$, forms $\ce{H+}$, reacts with halogens (HCl like NaCl).`,
          t`Like halogens: one short of a noble gas, forms $\ce{H-}$ (NaH), diatomic.`,
          t`Hydrogen is the most abundant element in the universe.`,
        ],
      },
    ],
    worked: {
      prompt: t`How many neutrons does deuterium have?`,
      steps: [
        t`Mass number 2, atomic number 1.`,
        t`2 − 1 = 1.`,
      ],
      answer: t`1`,
    },
    visualSpec: t`Place hydrogen above group 1 and then above group 17, and list the likenesses each spot shows.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Calls protium unstable.",
      remediation: "Protium is stable; tritium is radioactive.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "Calls deuterium radioactive.",
      remediation: "Deuterium is stable; tritium is radioactive.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Invents H-4.",
      remediation: "Hydrogen's three natural isotopes are H-1, H-2 and H-3.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Reads the mass number as protons.",
      remediation: "All hydrogen isotopes have 1 proton.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: "Reads the mass number as neutrons.",
      remediation: "Neutrons = 3 − 1 = 2.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: "Swaps protons and neutrons.",
      remediation: "Hydrogen always has one proton.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M7",
      mistake: "Calls hydrogen a metal.",
      remediation: t`Hydrogen is a nonmetal; it shares the $ns^1$ configuration.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M8",
      mistake: "Gives it a full shell.",
      remediation: "Hydrogen has one electron, not two.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M9",
      mistake: t`Says it forms only $\ce{H-}$.`,
      remediation: t`It forms $\ce{H+}$ like the alkali metals, too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M10",
      mistake: "Gives an alkali-metal likeness.",
      remediation: t`Forming $\ce{H+}$ is the alkali-metal likeness; $\ce{H-}$ is the halogen one.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M11",
      mistake: "Calls it a liquid.",
      remediation: "Hydrogen is a gas.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M12",
      mistake: "Gives it seven valence electrons.",
      remediation: "It has one, but needs one more, like the halogens.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M13",
      mistake: "Says helium.",
      remediation: "Hydrogen makes up most of the universe; helium is second.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M14",
      mistake: "Says oxygen.",
      remediation: "Oxygen leads in Earth's crust, not the universe.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M15",
      mistake: "Says nitrogen.",
      remediation: "Nitrogen leads in air; hydrogen in the universe.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.5 (A)" },
      stem: t`The unstable (radioactive) isotope of hydrogen is`,
      verify: { kind: "value", inputs: {  }, params: { q: "unstable" } },
      options: [
        { key: "A", text: t`H-4`, correct: false, misconceptionId: "C01-M3", value: "h4" },
        { key: "B", text: t`H-1 (protium)`, correct: false, misconceptionId: "C01-M1", value: "h1" },
        { key: "C", text: t`H-2 (deuterium)`, correct: false, misconceptionId: "C01-M2", value: "h2" },
        { key: "D", text: t`H-3 (tritium)`, correct: true, value: "h3" },
      ],
      solution: {
        steps: [
          t`Tritium's nucleus is unstable.`,
          t`H-3 is radioactive.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.3 (D)" },
      stem: t`A tritium atom, $^{3}_{1}\mathrm{H}$, contains`,
      verify: { kind: "value", inputs: {  }, params: { q: "tritium" } },
      options: [
        { key: "A", text: t`1 proton, 2 neutrons and 1 electron`, correct: true, value: "p1_n2" },
        { key: "B", text: t`3 protons and 1 electron`, correct: false, misconceptionId: "C01-M4", value: "p3" },
        { key: "C", text: t`1 proton, 3 neutrons and 1 electron`, correct: false, misconceptionId: "C01-M5", value: "p1_n3" },
        { key: "D", text: t`2 protons, 1 neutron and 2 electrons`, correct: false, misconceptionId: "C01-M6", value: "p2_n1" },
      ],
      solution: {
        steps: [
          t`Z = 1: 1 proton, 1 electron.`,
          t`Neutrons = 3 − 1 = 2.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.1 (A)" },
      stem: t`Hydrogen resembles the alkali metals because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "alkali_like" } },
      options: [
        { key: "A", text: t`has a full outer shell`, correct: false, misconceptionId: "C01-M8", value: "full_shell" },
        { key: "B", text: t`has one electron in its outer shell and forms $\ce{H+}$`, correct: true, value: "one_electron_h_plus" },
        { key: "C", text: t`forms only $\ce{H-}$ ions`, correct: false, misconceptionId: "C01-M9", value: "only_h_minus" },
        { key: "D", text: t`is a metal`, correct: false, misconceptionId: "C01-M7", value: "is_metal" },
      ],
      solution: {
        steps: [
          t`Hydrogen is $1s^1$, like $ns^1$ metals.`,
          t`It forms $\ce{H+}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Solved Ex.8.1" },
      stem: t`Hydrogen resembles the halogens because it`,
      verify: { kind: "value", inputs: {  }, params: { q: "halogen_like" } },
      options: [
        { key: "A", text: t`is a liquid at room temperature`, correct: false, misconceptionId: "C01-M11", value: "liquid" },
        { key: "B", text: t`forms $\ce{H+}$ ions in water`, correct: false, misconceptionId: "C01-M10", value: "h_plus_water" },
        { key: "C", text: t`is one electron short of a full shell, forming $\ce{H-}$ and diatomic molecules`, correct: true, value: "one_short_h_minus" },
        { key: "D", text: t`has seven valence electrons`, correct: false, misconceptionId: "C01-M12", value: "seven_valence" },
      ],
      solution: {
        steps: [
          t`It needs one electron for a full shell.`,
          t`It forms $\ce{H-}$ and $\ce{H2}$, like halogens.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/s-block-11-chem/Ex Q.4 (B)" },
      stem: t`The most abundant element in the universe is`,
      verify: { kind: "value", inputs: {  }, params: { q: "abundant" } },
      options: [
        { key: "A", text: t`nitrogen`, correct: false, misconceptionId: "C01-M15", value: "nitrogen" },
        { key: "B", text: t`helium`, correct: false, misconceptionId: "C01-M13", value: "helium" },
        { key: "C", text: t`oxygen`, correct: false, misconceptionId: "C01-M14", value: "oxygen" },
        { key: "D", text: t`hydrogen`, correct: true, value: "hydrogen" },
      ],
      solution: {
        steps: [
          t`Stars are mostly hydrogen.`,
          t`Hydrogen is the most abundant.`,
        ],
      },
    },
  ],
};
