import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c03: Concept = {
  id: "C03",
  status: "approved",
  hook: {
    prompt: t`Three darts land close together, far from the bullseye. Three more land scattered around it. Which thrower is better?`,
    reveal: t`Neither fully. The first is precise but not accurate; the second is closer to accurate but not precise. Lab results are judged the same way.`,
  },
  explanation: {
    intuition: [
      t`**Accuracy** is how close a result is to the true value.`,
      t`**Precision** is how close repeated results are to each other.`,
      t`Results can be precise without being accurate.`,
      t`Errors measure how far a result is from the truth.`,
    ],
    formal: [
      {
        title: "Errors",
        points: [
          t`Absolute error = observed value − true value; its sign shows high or low.`,
          t`Percentage error $= \dfrac{\text{absolute error}}{\text{true value}} \times 100$.`,
          t`Divide by the true value, not the observed one.`,
        ],
      },
      {
        title: "Graphs",
        points: [
          t`When two properties are related, plotting a graph reveals the relation.`,
          t`A straight-line graph gives a constant ratio or slope.`,
        ],
      },
    ],
    worked: {
      prompt: t`True value 2.00 g; observed 2.05 g. Find the absolute and percentage errors.`,
      steps: [
        t`Absolute error = 2.05 − 2.00 = +0.05 g.`,
        t`Percentage error = 0.05 ÷ 2.00 × 100 = 2.5 %.`,
      ],
      answer: t`+0.05 g; 2.5 %`,
    },
    visualSpec: t`Throw darts at a target and sort the patterns into accurate, precise, both or neither.`,
  },
  misconceptions: [
    {
      id: "C03-M1",
      mistake: "Swaps accuracy and precision.",
      remediation: "Accuracy: close to the true value. Precision: repeats close to each other.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M2",
      mistake: "Ties precision only to significant figures.",
      remediation: "Precision is how closely repeated results agree.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M3",
      mistake: "Confuses precision with least count.",
      remediation: "Least count is the smallest reading an instrument shows; precision is agreement of repeats.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M4",
      mistake: "Divides by the observed value.",
      remediation: "Percentage error divides by the true value.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M5",
      mistake: "Forgets to multiply by 100.",
      remediation: "A percentage needs × 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M6",
      mistake: "Gives observed ÷ true × 100.",
      remediation: "Use the error: (observed − true) ÷ true × 100.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M7",
      mistake: "Thinks close readings must be correct.",
      remediation: "Q's readings agree but are far from 3.92 g: precise, not accurate.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M8",
      mistake: "Thinks a constant offset spoils precision.",
      remediation: "Readings that agree closely are precise, even if all are off.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M9",
      mistake: "Subtracts the observed value from the true one.",
      remediation: "Absolute error = observed − true; a low result gives a negative error.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M10",
      mistake: "Gives the percentage error.",
      remediation: "Absolute error is in grams: observed − true.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M11",
      mistake: "Gives the observed value.",
      remediation: "Subtract the true value from it.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M12",
      mistake: "Picks mean deviation.",
      remediation: "Mean deviation measures spread of repeats, not how two properties are related.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M13",
      mistake: "Picks relative error.",
      remediation: "Relative error compares a result with the truth; a graph shows a relation.",
      fallback: { kind: "none" },
    },
    {
      id: "C03-M14",
      mistake: "Thinks any method shows the relation.",
      remediation: "Only a graph shows how one property varies with the other.",
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C03-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.2 (C)" },
      stem: t`Precision describes`,
      verify: { kind: "value", inputs: {  }, params: { q: "precision" } },
      options: [
        { key: "A", text: t`how many significant figures a result has`, correct: false, misconceptionId: "C03-M2", value: "sig_figs" },
        { key: "B", text: t`the least count of the instrument`, correct: false, misconceptionId: "C03-M3", value: "least_count" },
        { key: "C", text: t`how close a measurement is to the true value`, correct: false, misconceptionId: "C03-M1", value: "near_true" },
        { key: "D", text: t`how close repeated measurements are to one another`, correct: true, value: "repeats_close" },
      ],
      solution: {
        steps: [
          t`Precision is about repeats.`,
          t`It is how close they are to one another.`,
        ],
      },
    },
    {
      id: "C03-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.5" },
      stem: t`A sample is found to contain 3.80 g of oxygen; the true mass is 3.92 g. What is the absolute error (in g)?`,
      verify: { kind: "value", inputs: { obs: "3.80", true: "3.92" }, params: { q: "abs_error" } },
      options: [
        { key: "A", text: t`$-0.12$`, correct: true, value: "-0.120000000000000" },
        { key: "B", text: t`$3.8$`, correct: false, misconceptionId: "C03-M11", value: "3.80000000000000" },
        { key: "C", text: t`$-3.06$`, correct: false, misconceptionId: "C03-M10", value: "-3.06000000000000" },
        { key: "D", text: t`$0.12$`, correct: false, misconceptionId: "C03-M9", value: "0.120000000000000" },
      ],
      solution: {
        steps: [
          t`Absolute error = observed − true.`,
          t`3.80 − 3.92 = −0.12 g.`,
        ],
      },
    },
    {
      id: "C03-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.6" },
      stem: t`The true mass of a sample is 3.92 g. Student P measures 3.87, 3.95 and 3.89 g; student Q measures 3.70, 3.71 and 3.70 g. Q's results are`,
      verify: { kind: "value", inputs: {  }, params: { q: "students" } },
      options: [
        { key: "A", text: t`accurate but not precise`, correct: false, misconceptionId: "C03-M1", value: "accurate_not_precise" },
        { key: "B", text: t`precise but not accurate`, correct: true, value: "precise_not_accurate" },
        { key: "C", text: t`neither accurate nor precise`, correct: false, misconceptionId: "C03-M8", value: "neither" },
        { key: "D", text: t`both accurate and precise`, correct: false, misconceptionId: "C03-M7", value: "both" },
      ],
      solution: {
        steps: [
          t`Q's readings agree within 0.01 g.`,
          t`But all are far from 3.92 g: precise, not accurate.`,
        ],
      },
    },
    {
      id: "C03-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Solved Ex.2.5" },
      stem: t`A sample is found to contain 3.80 g of oxygen; the true mass is 3.92 g. What is the percentage error?`,
      verify: { kind: "value", inputs: { obs: "3.80", true: "3.92" }, params: { q: "pct_error" } },
      options: [
        { key: "A", text: t`$-0.0306\%$`, correct: false, misconceptionId: "C03-M5", value: "-0.0306000000000000" },
        { key: "B", text: t`$96.9\%$`, correct: false, misconceptionId: "C03-M6", value: "96.9000000000000" },
        { key: "C", text: t`$-3.06\%$`, correct: true, value: "-3.06000000000000" },
        { key: "D", text: t`$-3.16\%$`, correct: false, misconceptionId: "C03-M4", value: "-3.16000000000000" },
      ],
      solution: {
        steps: [
          t`−0.12 ÷ 3.92 × 100.`,
          t`= −3.06 %.`,
        ],
      },
    },
    {
      id: "C03-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/analytical-chemistry-11-chem/Ex Q.1 (L)" },
      stem: t`When two properties of a system are mathematically related, the relation is best found by`,
      verify: { kind: "value", inputs: {  }, params: { q: "graph" } },
      options: [
        { key: "A", text: t`any of these three`, correct: false, misconceptionId: "C03-M14", value: "all_three" },
        { key: "B", text: t`working out the mean deviation`, correct: false, misconceptionId: "C03-M12", value: "mean_deviation" },
        { key: "C", text: t`calculating the relative error`, correct: false, misconceptionId: "C03-M13", value: "relative_error" },
        { key: "D", text: t`plotting a graph`, correct: true, value: "plot_graph" },
      ],
      solution: {
        steps: [
          t`Plot one property against the other.`,
          t`The graph's shape gives the relation.`,
        ],
      },
    },
  ],
};
