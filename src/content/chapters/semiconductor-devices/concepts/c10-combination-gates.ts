import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`A computer chip contains billions of gates, yet chip makers often build every one of them from a single kind of gate. How can one kind of gate do the work of all the others?`,
    reveal: t`Because NAND, AND followed by NOT, is **universal**: wired in the right patterns, NAND gates can make NOT, AND, OR and every other gate. NOR is universal too.`,
  },
  explanation: {
    intuition: [
      t`Putting a NOT after a basic gate inverts its output.`,
      t`AND then NOT gives **NAND**: its output is $0$ only when both inputs are $1$.`,
      t`OR then NOT gives **NOR**: its output is $1$ only when both inputs are $0$.`,
      t`**XOR**, exclusive OR, gives $1$ when the inputs differ, and $0$ when they are the same.`,
      t`NAND alone, or NOR alone, can be wired to make any other gate.`,
    ],
    formal: [
      {
        title: "NAND and NOR",
        points: [
          t`**NAND**: $Y = \overline{A \cdot B}$; outputs $1, 1, 1, 0$ for $AB = 00, 01, 10, 11$.`,
          t`**NOR**: $Y = \overline{A + B}$; outputs $1, 0, 0, 0$.`,
          t`The bar covers the whole expression: $\overline{A \cdot B}$ is not $\overline{A} \cdot \overline{B}$.`,
        ],
      },
      {
        title: "XOR",
        points: [
          t`**XOR**: $Y = A\overline{B} + \overline{A}B$, written $Y = A \oplus B$.`,
          t`Outputs $0, 1, 1, 0$: $1$ exactly when the inputs differ.`,
          t`Its inverse, XNOR, is $1$ when the inputs agree.`,
        ],
      },
      {
        title: "Universal gates",
        points: [
          t`NAND with its inputs joined gives $\overline{A \cdot A}$ $= \overline{A}$: a NOT gate.`,
          t`NAND followed by such a NOT gives AND; NOTs on both inputs of a NAND give OR.`,
          t`So NAND, and likewise NOR, can build every gate: they are **universal gates**.`,
        ],
      },
    ],
    worked: {
      prompt: t`Show that a NAND gate whose output feeds a second NAND gate with joined inputs acts as an AND gate.`,
      steps: [
        t`The first NAND gives $Y_1 = \overline{A \cdot B}$.`,
        t`The second, with joined inputs, inverts it: $Y = \overline{Y_1}$.`,
        t`$Y$ $= \overline{\overline{A \cdot B}}$ $= A \cdot B$: an AND gate.`,
      ],
      answer: t`$Y = A \cdot B$`,
    },
    visualSpec: t`Toggle inputs A and B and watch NAND, NOR and XOR outputs light up beside the AND and OR they come from.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Confuses XOR with XNOR.",
      remediation: t`XOR is $1$ when the inputs differ: $A\overline{B} + \overline{A}B$; $AB + \overline{A}\,\overline{B}$ is $1$ when they agree.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "Confuses XOR with OR.",
      remediation: t`OR is also $1$ for $11$; XOR is $0$ there.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M3",
      mistake: "Confuses XOR with AND.",
      remediation: t`AND is $1$ only for $11$; XOR is $1$ for $01$ and $10$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M4",
      mistake: "Puts the bar on each input separately.",
      remediation: t`NAND inverts the AND of the inputs: $\overline{A \cdot B}$; $\overline{A} \cdot \overline{B}$ is NOR.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M5",
      mistake: "Gives the NOR expression.",
      remediation: t`NAND comes from AND: $\overline{A \cdot B}$; NOR from OR: $\overline{A + B}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M6",
      mistake: "Forgets the NOT.",
      remediation: "NAND is NOT-AND: the AND output inverted.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M7",
      mistake: "Confuses NOR with AND.",
      remediation: t`NOR is $1$ only when both inputs are $0$; AND is $1$ only when both are $1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M8",
      mistake: "Confuses NOR with OR.",
      remediation: t`OR is $1$ when any input is $1$; NOR inverts that.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M9",
      mistake: "Confuses NOR with XOR.",
      remediation: t`XOR is $1$ when the inputs differ; NOR only when both are $0$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M10",
      mistake: "Gives the OR gate's outputs.",
      remediation: t`For $11$, OR gives $1$ but XOR gives $0$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M11",
      mistake: "Gives the XNOR gate's outputs.",
      remediation: t`XOR is $1$ for unlike inputs, $01$ and $10$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M12",
      mistake: "Gives the AND gate's outputs.",
      remediation: t`AND is $1$ only for $11$; XOR is $1$ for $01$ and $10$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M13",
      mistake: "Thinks AND and OR are universal.",
      remediation: "AND and OR cannot make NOT, so they cannot build every gate.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M14",
      mistake: "Thinks NOT alone is universal.",
      remediation: "NOT has only one input; it cannot combine two signals.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M15",
      mistake: "Thinks XOR is universal.",
      remediation: "XOR alone cannot make AND; NAND and NOR are the universal gates.",
      fallback: { kind: "none" },
    },
    {
      id: "C10-M16",
      mistake: "Thinks joined NAND inputs give an AND gate.",
      remediation: t`$\overline{A \cdot A}$ $= \overline{A}$: the NOT is still there.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M17",
      mistake: "Thinks joined NAND inputs pass the signal unchanged.",
      remediation: t`$A \cdot A = A$, but the NAND inverts it: $Y = \overline{A}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M18",
      mistake: "Thinks joined NAND inputs give an OR gate.",
      remediation: t`With one signal on both inputs, $\overline{A \cdot A}$ $= \overline{A}$: a NOT gate.`,
      fallback: { kind: "none" },
    },
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-hsc-12/phy-2022-march/Q.2(iv)" },
      stem: t`What is the Boolean expression for an Exclusive-OR (XOR) gate with inputs $A$ and $B$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "xor" } },
      options: [
        { key: "A", text: t`$Y = AB + \overline{A}\,\overline{B}$`, correct: false, misconceptionId: "C10-M1", value: "xnor_expr" },
        { key: "B", text: t`$Y = A + B$`, correct: false, misconceptionId: "C10-M2", value: "or_expr" },
        { key: "C", text: t`$Y = A \cdot B$`, correct: false, misconceptionId: "C10-M3", value: "and_expr" },
        { key: "D", text: t`$Y = A\overline{B} + \overline{A}B$`, correct: true, value: "xor_expr" },
      ],
      solution: {
        steps: [
          t`XOR gives $1$ when exactly one input is $1$: $A = 1, B = 0$ or $A = 0, B = 1$.`,
          t`So $Y = A\overline{B} + \overline{A}B$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/semiconductor-devices-12-phy/Ex Q.14" },
      stem: t`What is the Boolean expression for a NAND gate with inputs $A$ and $B$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "nand" } },
      options: [
        { key: "A", text: t`$Y = \overline{A \cdot B}$`, correct: true, value: "nand_expr" },
        { key: "B", text: t`$Y = \overline{A} \cdot \overline{B}$`, correct: false, misconceptionId: "C10-M4", value: "split_bars" },
        { key: "C", text: t`$Y = \overline{A + B}$`, correct: false, misconceptionId: "C10-M5", value: "nor_expr" },
        { key: "D", text: t`$Y = A \cdot B$`, correct: false, misconceptionId: "C10-M6", value: "no_bar" },
      ],
      solution: {
        steps: [
          t`NAND is AND followed by NOT.`,
          t`$Y = \overline{A \cdot B}$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "authored" },
      stem: t`When is the output of a two-input NOR gate $1$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "nor1" } },
      options: [
        { key: "A", text: t`When the two inputs differ`, correct: false, misconceptionId: "C10-M9", value: "differ" },
        { key: "B", text: t`Only when both inputs are $0$`, correct: true, value: "both_zero" },
        { key: "C", text: t`Only when both inputs are $1$`, correct: false, misconceptionId: "C10-M7", value: "both_one" },
        { key: "D", text: t`When at least one input is $1$`, correct: false, misconceptionId: "C10-M8", value: "any_one" },
      ],
      solution: {
        steps: [
          t`OR gives $0$ only when both inputs are $0$.`,
          t`NOR inverts OR, so its output is $1$ only then.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "authored" },
      stem: t`For the inputs $AB = 00, 01, 10, 11$ in turn, what are the outputs of an XOR gate?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "xortable" } },
      options: [
        { key: "A", text: t`$1, 0, 0, 1$`, correct: false, misconceptionId: "C10-M11", value: "t1001" },
        { key: "B", text: t`$0, 0, 0, 1$`, correct: false, misconceptionId: "C10-M12", value: "t0001" },
        { key: "C", text: t`$0, 1, 1, 0$`, correct: true, value: "t0110" },
        { key: "D", text: t`$0, 1, 1, 1$`, correct: false, misconceptionId: "C10-M10", value: "t0111" },
      ],
      solution: {
        steps: [
          t`XOR is $1$ when the inputs differ: for $01$ and $10$.`,
          t`Outputs $0, 1, 1, 0$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`Which gates are called universal, because any other gate can be built from them alone?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "universal" } },
      options: [
        { key: "A", text: t`NAND and NOR`, correct: true, value: "nand_nor" },
        { key: "B", text: t`AND and OR`, correct: false, misconceptionId: "C10-M13", value: "and_or" },
        { key: "C", text: t`NOT`, correct: false, misconceptionId: "C10-M14", value: "not_only" },
        { key: "D", text: t`XOR`, correct: false, misconceptionId: "C10-M15", value: "xor_only" },
      ],
      solution: {
        steps: [
          t`NAND with joined inputs gives NOT; from NOT and NAND come AND and OR.`,
          t`The same holds for NOR: NAND and NOR are the universal gates.`,
        ],
      },
    },
    {
      id: "C10-Q6",
      source: { kind: "authored" },
      stem: t`The two inputs of a NAND gate are joined together and fed with one signal $A$. What does the gate then do?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "joined" } },
      options: [
        { key: "A", text: t`It acts as a NOT gate: $Y = \overline{A}$`, correct: true, value: "not_gate" },
        { key: "B", text: t`It acts as an AND gate: $Y = A$`, correct: false, misconceptionId: "C10-M16", value: "and_gate" },
        { key: "C", text: t`It passes the signal unchanged: $Y = A$`, correct: false, misconceptionId: "C10-M17", value: "buffer" },
        { key: "D", text: t`It acts as an OR gate: $Y = A + A$`, correct: false, misconceptionId: "C10-M18", value: "or_gate" },
      ],
      solution: {
        steps: [
          t`Both inputs are $A$: $Y = \overline{A \cdot A}$.`,
          t`$A \cdot A = A$, so $Y = \overline{A}$: a NOT gate.`,
        ],
      },
    },
  ],
};
