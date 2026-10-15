import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`Look at $6, 4, 3, \ldots$ The differences are $-2$ and $-1$, and the ratios are $\frac{2}{3}$ and $\frac{3}{4}$. **So it is neither an A.P. nor a G.P. Is there still a pattern, and what comes next?**`,
    reveal: t`Flip every term: $\frac{1}{6}, \frac{1}{4}, \frac{1}{3}$ is $\frac{2}{12}, \frac{3}{12}, \frac{4}{12}$, an A.P. with $d = \frac{1}{12}$. Its next term is $\frac{5}{12}$, so the next term of $6, 4, 3$ is $\frac{12}{5}$. A sequence whose reciprocals form an A.P. is a harmonic progression (H.P.).`,
  },
  explanation: {
    intuition: [
      t`Recall: in an **A.P.**, each term is the one before plus a fixed number, the **common difference** $d$.`,
      t`To **flip** a number is to take its **reciprocal**, $1$ divided by it: $4$ flips to $\frac{1}{4}$.`,
      t`A **harmonic progression**, or **H.P.**, is a sequence whose reciprocals form an A.P.`,
      t`The terms $1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}$ bunch ever closer together: they have no common difference.`,
      t`Their reciprocals $1, 2, 3, 4$ are evenly spaced, an A.P. with $d = 1$, so the terms form an H.P.`,
      t`So no new formula is needed: flip every term, work in the A.P., then flip the answer back.`,
    ],
    figure: {
      alt: "Two number lines, each starting at 0. On the top line, the terms 1, 1/2, 1/3 and 1/4 of an H.P. are marked; the gaps between them shrink, so they bunch together towards 0. On the bottom line their reciprocals 1, 2, 3 and 4 are marked, evenly spaced one unit apart. The top line is drawn four times larger than the bottom one.",
      axes: "none",
      view: { x: [-0.5, 4.7], y: [-0.8, 2.4] },
      elements: [
        { kind: "segment", from: [-0.2, 1.3], to: [4.5, 1.3], tone: "muted" },
        { kind: "point", at: [0, 1.3], label: "0", labelAt: "n", tone: "muted" },
        { kind: "segment", from: [-0.2, 0], to: [4.5, 0], tone: "muted" },
        { kind: "point", at: [0, 0], label: "0", labelAt: "s", tone: "muted" },
        { kind: "label", at: [-0.2, 2.1], label: "the terms: an H.P.", labelAt: "e", step: 4 },
        { kind: "point", at: [4, 1.3], label: "1", labelAt: "n", step: 4 },
        { kind: "point", at: [2, 1.3], label: "½", labelAt: "n", step: 4 },
        { kind: "point", at: [4 / 3, 1.3], label: "⅓", labelAt: "n", step: 4 },
        { kind: "point", at: [1, 1.3], label: "¼", labelAt: "n", step: 4 },
        { kind: "label", at: [-0.2, 0.75], label: "their reciprocals: an A.P.", labelAt: "e", tone: "good", step: 5 },
        { kind: "point", at: [1, 0], label: "1", labelAt: "s", tone: "good", step: 5 },
        { kind: "point", at: [2, 0], label: "2", labelAt: "s", tone: "good", step: 5 },
        { kind: "point", at: [3, 0], label: "3", labelAt: "s", tone: "good", step: 5 },
        { kind: "point", at: [4, 0], label: "4", labelAt: "s", tone: "good", step: 5 },
      ],
    },
    formal: [
      {
        title: "Definition of an H.P.",
        points: [
          t`Write the terms of a sequence as $t_1, t_2, t_3, \ldots$, so $t_n$ is the $n$th term.`,
          t`The sequence is an **H.P.** if its reciprocals form an A.P.`,
          t`That is, $\frac{1}{t_1}, \frac{1}{t_2}, \frac{1}{t_3}, \ldots$ is an A.P.`,
          t`Every term must be non-zero, since $0$ has no reciprocal.`,
        ],
      },
      {
        title: "The nth term",
        points: [
          t`Let the A.P. of reciprocals have first term $a$ and common difference $d$.`,
          t`Recall: the $n$th term of that A.P. is $a + (n - 1)d$.`,
          t`That term is $\frac{1}{t_n}$, the reciprocal of the H.P.'s $n$th term.`,
          t`Flip it back: $t_n = \frac{1}{a + (n - 1)d}$.`,
        ],
      },
      {
        title: "Three numbers in H.P.",
        points: [
          t`$x, y, z$ are in H.P. when $\frac{1}{x}, \frac{1}{y}, \frac{1}{z}$ are in A.P.`,
          t`Of three terms in A.P., the middle one is the **average**, half the sum, of the other two.`,
          t`So the middle reciprocal $\frac{1}{y}$ is the average of $\frac{1}{x}$ and $\frac{1}{z}$.`,
          t`Doubled, that reads $\frac{2}{y} = \frac{1}{x} + \frac{1}{z}$.`,
        ],
      },
      {
        title: "Flip back the whole sum",
        points: [
          t`The reciprocal of a sum is not the sum of the reciprocals.`,
          t`For example, $\frac{1}{2 + 2} = \frac{1}{4}$, but $\frac{1}{2} + \frac{1}{2} = 1$.`,
          t`So $\frac{1}{a + (n - 1)d}$ does not split as $\frac{1}{a} + \frac{1}{(n - 1)d}$.`,
          t`Work out $a + (n - 1)d$ first, then flip the whole of it.`,
          t`Check your $t_n$ with $n = 1$: it must give $t_1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the $n$th term of the H.P. $\frac{1}{5}, 1, -\frac{1}{3}, -\frac{1}{7}, \ldots$`,
      steps: [
        t`Flip every term: $5, 1, -3, -7, \ldots$ Each step is $-4$, so this is an A.P. with $a = 5$, $d = -4$.`,
        t`The A.P.'s $n$th term: $5 + (n - 1)(-4) = 9 - 4n$.`,
        t`Flip back: $t_n = \frac{1}{9 - 4n}$. Check: $n = 1$ gives $\frac{1}{5}$ and $n = 3$ gives $-\frac{1}{3}$.`,
      ],
      answer: t`$t_n = \frac{1}{9 - 4n}$.`,
    },
    visualSpec: t`Drag $n$ to add terms of an H.P. as dots on one number line, bunching closer together, while their reciprocals appear as evenly spaced dots on a second line; tapping a dot flips it between the two lines.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: "Treating the terms of the H.P. themselves as an A.P., with a common difference between the terms",
      remediation: t`In an H.P. the terms have no common difference; their reciprocals do. Flip every term first, use $t_n = a + (n - 1)d$ on the reciprocals, then flip back.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: "Finding the term of the A.P. of reciprocals and giving it as the answer, without flipping back",
      remediation: t`The A.P. you worked in is made of reciprocals. Its term is $\frac{1}{t_n}$, so flip it back to get the term of the H.P.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Flipping a sum part by part: taking 1/(a + (n - 1)d) as 1/a + 1/((n - 1)d)",
      remediation: t`The reciprocal of a sum is not the sum of the reciprocals. Work out $a + (n - 1)d$ as one number or expression first, then flip the whole of it.`,
      fallback: { kind: "ext", topic: "algebraic fractions" },
    },
    {
      id: "C09-M4",
      mistake: "Using a + nd for the nth term of the A.P. of reciprocals (one difference too many)",
      remediation: t`The first term already is $a$, so the $n$th term of an A.P. adds the difference $n - 1$ times: $a + (n - 1)d$. Check with $n = 1$.`,
      fallback: { kind: "ext", topic: "arithmetic progressions" },
    },
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/2.5 SolvedEx.1" },
      stem: t`The $n$th term of the H.P. $\frac{1}{2}, \frac{2}{5}, \frac{1}{3}, \frac{2}{7}, \ldots$ is:`,
      verify: { kind: "value", inputs: { a: "1/2", b: "2/5", j: "2", k: "n" } },
      options: [
        { key: "A", text: t`$\frac{n + 3}{2}$`, correct: false, misconceptionId: "C09-M2", value: "n/2 + 3/2" },
        { key: "B", text: t`$\frac{1}{2} + \frac{2}{n - 1}$`, correct: false, misconceptionId: "C09-M3", value: "(n + 3)/(2*(n - 1))" },
        { key: "C", text: t`$\frac{2}{n + 3}$`, correct: true, value: "2/(n + 3)" },
        { key: "D", text: t`$\frac{6 - n}{10}$`, correct: false, misconceptionId: "C09-M1", value: "3/5 - n/10" },
      ],
      solution: {
        steps: [
          t`Flip every term: $2, \frac{5}{2}, 3, \frac{7}{2}, \ldots$, an A.P. with $a = 2$, $d = \frac{1}{2}$.`,
          t`The A.P.'s $n$th term: $2 + (n - 1)\frac{1}{2} = \frac{n + 3}{2}$.`,
          t`Flip back: $t_n = \frac{2}{n + 3}$. Check: $n = 1$ gives $\frac{1}{2}$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Misc I Q8" },
      stem: t`The tenth term of the H.P. $\frac{2}{9}, \frac{1}{7}, \frac{2}{19}, \frac{1}{12}, \ldots$ is:`,
      verify: { kind: "value", inputs: { a: "2/9", b: "1/7", j: "2", k: "10" } },
      options: [
        { key: "A", text: t`$\frac{1}{27}$`, correct: true, value: "1/27" },
        { key: "B", text: t`$27$`, correct: false, misconceptionId: "C09-M2", value: "27" },
        { key: "C", text: t`$\frac{4}{15}$`, correct: false, misconceptionId: "C09-M3", value: "4/15" },
        { key: "D", text: t`$\frac{2}{59}$`, correct: false, misconceptionId: "C09-M4", value: "2/59" },
      ],
      solution: {
        steps: [
          t`Flip every term: $\frac{9}{2}, 7, \frac{19}{2}, 12, \ldots$, an A.P. with $a = \frac{9}{2}$, $d = \frac{5}{2}$.`,
          t`The A.P.'s tenth term: $\frac{9}{2} + 9 \times \frac{5}{2} = \frac{54}{2} = 27$.`,
          t`Flip back: the tenth term of the H.P. is $\frac{1}{27}$.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q2(i)" },
      stem: t`The 8th term of the H.P. $\frac{1}{2}, \frac{1}{5}, \frac{1}{8}, \frac{1}{11}, \ldots$ is:`,
      verify: { kind: "value", inputs: { a: "1/2", b: "1/5", j: "2", k: "8" } },
      options: [
        { key: "A", text: t`$- \frac{8}{5}$`, correct: false, misconceptionId: "C09-M1", value: "-8/5" },
        { key: "B", text: t`$23$`, correct: false, misconceptionId: "C09-M2", value: "23" },
        { key: "C", text: t`$\frac{1}{26}$`, correct: false, misconceptionId: "C09-M4", value: "1/26" },
        { key: "D", text: t`$\frac{1}{23}$`, correct: true, value: "1/23" },
      ],
      solution: {
        steps: [
          t`Flip every term: $2, 5, 8, 11, \ldots$, an A.P. with $a = 2$, $d = 3$, so its $n$th term is $2 + 3(n - 1) = 3n - 1$.`,
          t`The A.P.'s 8th term: $3 \times 8 - 1 = 23$.`,
          t`Flip back: the 8th term of the H.P. is $\frac{1}{23}$.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q2(ii)" },
      stem: t`The $n$th term of the H.P. $\frac{1}{4}, \frac{1}{6}, \frac{1}{8}, \frac{1}{10}, \ldots$ is:`,
      verify: { kind: "value", inputs: { a: "1/4", b: "1/6", j: "2", k: "n" } },
      options: [
        { key: "A", text: t`$\frac{1}{2n + 2}$`, correct: true, value: "1/(2*(n + 1))" },
        { key: "B", text: t`$2 n + 2$`, correct: false, misconceptionId: "C09-M2", value: "2*n + 2" },
        { key: "C", text: t`$\frac{1}{4} + \frac{1}{2(n - 1)}$`, correct: false, misconceptionId: "C09-M3", value: "(n + 1)/(4*(n - 1))" },
        { key: "D", text: t`$\frac{1}{2n + 4}$`, correct: false, misconceptionId: "C09-M4", value: "1/(2*(n + 2))" },
      ],
      solution: {
        steps: [
          t`Flip every term: $4, 6, 8, 10, \ldots$, an A.P. with $a = 4$, $d = 2$.`,
          t`The A.P.'s $n$th term: $4 + 2(n - 1) = 2n + 2$.`,
          t`Flip back: $t_n = \frac{1}{2n + 2}$. Check: $n = 1$ gives $\frac{1}{4}$.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q1(iii)" },
      stem: t`The sequence $5, \frac{10}{17}, \frac{10}{32}, \frac{10}{47}, \ldots$ is an H.P. Its $n$th term is:`,
      verify: { kind: "value", inputs: { a: "5", b: "10/17", j: "2", k: "n" } },
      options: [
        { key: "A", text: t`$\frac{15n - 13}{10}$`, correct: false, misconceptionId: "C09-M2", value: "3*n/2 - 13/10" },
        { key: "B", text: t`$\frac{10}{15 n + 2}$`, correct: false, misconceptionId: "C09-M4", value: "10/(15*n + 2)" },
        { key: "C", text: t`$\frac{10}{15 n - 13}$`, correct: true, value: "10/(15*n - 13)" },
        { key: "D", text: t`$\frac{160 - 75n}{17}$`, correct: false, misconceptionId: "C09-M1", value: "160/17 - 75*n/17" },
      ],
      solution: {
        steps: [
          t`Flip every term: $\frac{1}{5}, \frac{17}{10}, \frac{32}{10}, \frac{47}{10}, \ldots$, that is $\frac{2}{10}, \frac{17}{10}, \frac{32}{10}, \frac{47}{10}$. Each step is $\frac{15}{10} = \frac{3}{2}$, so it is an A.P. and the sequence is an H.P.`,
          t`The A.P.'s $n$th term: $\frac{1}{5} + (n - 1)\frac{3}{2} = \frac{2 + 15n - 15}{10} = \frac{15n - 13}{10}$.`,
          t`Flip back: $t_n = \frac{10}{15n - 13}$. Check: $n = 1$ gives $\frac{10}{2} = 5$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/sequences-series-11/Ex 2.4 Q1(i)" },
      stem: t`If $\frac{1}{3}, x, \frac{1}{7}$ are in H.P., then $x$ is:`,
      verify: { kind: "value", inputs: { a: "1/3", b: "1/7", j: "3", k: "2" } },
      options: [
        { key: "A", text: t`$\frac{5}{6}$`, correct: false, misconceptionId: "C09-M3", value: "5/6" },
        { key: "B", text: t`$\frac{1}{5}$`, correct: true, value: "1/5" },
        { key: "C", text: t`$\frac{5}{21}$`, correct: false, misconceptionId: "C09-M1", value: "5/21" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C09-M2", value: "5" },
      ],
      solution: {
        steps: [
          t`$\frac{1}{3}, x, \frac{1}{7}$ are in H.P., so their reciprocals $3, \frac{1}{x}, 7$ are in A.P.`,
          t`The middle term of an A.P. is the average of its neighbours: $\frac{1}{x} = \frac{3 + 7}{2} = 5$.`,
          t`Flip back: $x = \frac{1}{5}$.`,
        ],
      },
    },
  ],
};
