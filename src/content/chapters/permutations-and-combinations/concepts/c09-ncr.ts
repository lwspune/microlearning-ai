import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`At a party, every two guests shook hands exactly once: $28$ handshakes in all. **How many guests were there?**`,
    reveal: t`A handshake is a pair of guests, and the order doesn't matter: $A$ with $B$ is the same as $B$ with $A$. With $n$ guests there are $n(n - 1)$ ordered pairs, each handshake counted twice, so $\frac{n(n - 1)}{2} = {}^nC_2 = 28$. Then $n(n - 1) = 56 = 8 \times 7$: there were $8$ guests.`,
  },
  explanation: {
    intuition: t`Choose a team of $3$ from $7$ friends. Counting in order gives $7 \times 6 \times 5 = 210$, but a team is just a group: $\{a, b, c\}$ is the same team as $\{c, a, b\}$. Each team of $3$ shows up $3! = 6$ times in that count, once for every order. So the number of teams is $210 \div 6 = 35$. That is a combination: a selection where order doesn't matter.`,
    formal: t`**Selection, not arrangement.** A combination of $r$ things from $n$ different things is a selection in which order doesn't matter. Their number is $^nC_r$.

**From $^nP_r$.** Each selection of $r$ things can be arranged in $r!$ ways, so $^nP_r = {}^nC_r \times r!$. Hence
$$^nC_r = \frac{{}^nP_r}{r!} = \frac{n!}{r!\,(n - r)!}, \quad 0 \le r \le n$$

**Quick calculation.** Cancel the bigger factorial: $r$ factors counting down from $n$, over $r!$.
$$^7C_3 = \frac{7!}{3!\,4!} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$

**Several groups.** Choosing from one group **and** then from another: multiply the counts. Choosing one way **or** another: add.

**Finding $n$.** $^nC_2 = \frac{n(n - 1)}{2}$. If $^nC_2 = 45$, then $n(n - 1) = 90 = 10 \times 9$, so $n = 10$.`,
    worked: {
      prompt: t`A question paper has two parts, A and B, each with $10$ questions. A student must answer $8$ questions from part A and $5$ from part B. In how many ways can the questions be chosen?`,
      steps: [
        t`Order doesn't matter: answering Q1 then Q2 is the same choice as Q2 then Q1. So each part is a combination.`,
        t`Part A: $^{10}C_8 = \frac{10!}{8!\,2!} = \frac{10 \times 9}{2 \times 1} = 45$ ways.`,
        t`Part B: $^{10}C_5 = \frac{10 \times 9 \times 8 \times 7 \times 6}{5 \times 4 \times 3 \times 2 \times 1} = \frac{30240}{120} = 252$ ways.`,
        t`The student chooses from part A **and** from part B, so multiply: $45 \times 252 = 11340$. Adding, $45 + 252 = 297$, would count a choice from one part only.`,
      ],
      answer: t`$11340$ ways.`,
    },
    visualSpec: t`Pick $r$ of $n$ coloured tiles; the chosen tiles shuffle through all $r!$ orders, and the $^nP_r$ ordered rows stack into piles of $r!$, one pile per combination, so the pile count is $^nC_r$.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Counting order in a selection: using $^nP_r$, the arrangements, instead of $^nC_r$`,
      remediation: t`In a selection the order doesn't matter, so $^nP_r$ counts each group of $r$ things $r!$ times. Divide by $r!$: $^nC_r = \frac{{}^nP_r}{r!}$.`,
      fallback: { kind: "concept", id: "C04" },
    },
    {
      id: "C09-M2",
      mistake: "Adding the counts of selections from separate groups instead of multiplying them",
      remediation: "Choosing from one group **and** then from another is a two-step task, so multiply the counts. Add only when you do one task **or** the other.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C09-M3",
      mistake: t`Dividing $^nP_r$ by $r$ instead of $r!$, as if each selection were counted only $r$ times`,
      remediation: t`$r$ chosen things can be arranged in $r!$ ways, not $r$ ways, so divide $^nP_r$ by $r!$. For $r = 3$ that is $3! = 6$, not $3$.`,
      fallback: { kind: "concept", id: "C02" },
    },
    {
      id: "C09-M4",
      mistake: t`Counting the numerator upwards: $n(n + 1) \cdots (n + r - 1)$ over $r!$`,
      remediation: t`$\frac{n!}{(n - r)!} = n(n - 1) \cdots (n - r + 1)$: start at $n$ and count **down**, $r$ factors in all, then divide by $r!$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C09-M3 gives the key when every $r$ is $1$ or $2$ (then $r! = r$): test it only on selections with some $r \ge 3$. C09-M2 needs selections from two or more groups.`,
    t`Finding $n$ from $^nC_2 = N$ is shown in the hook and the formal section, not in an item: with $r = 2$, C09-M3 gives the key and only C09-M1 and C09-M4 can give a whole-number wrong $n$, so no four-option item fits.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q1(a)" },
      stem: t`The value of $^{15}C_4$ is:`,
      verify: { kind: "value", inputs: { n: "15", r: "4" } },
      options: [
        { key: "A", text: t`$8190$`, correct: false, misconceptionId: "C09-M3", value: "8190" },
        { key: "B", text: t`$3060$`, correct: false, misconceptionId: "C09-M4", value: "3060" },
        { key: "C", text: t`$1365$`, correct: true, value: "1365" },
        { key: "D", text: t`$32760$`, correct: false, misconceptionId: "C09-M1", value: "32760" },
      ],
      solution: {
        steps: [
          t`$^{15}C_4 = \frac{15!}{4!\,11!}$: cancel $11!$ to leave $4$ factors counting down from $15$.`,
          t`$^{15}C_4 = \frac{15 \times 14 \times 13 \times 12}{4 \times 3 \times 2 \times 1} = \frac{32760}{24} = 1365$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc I Q6" },
      stem: t`How many triangles can be formed by joining the vertices (angular points) of a polygon with $8$ sides?`,
      verify: { kind: "value", inputs: { n: "8", r: "3" } },
      options: [
        { key: "A", text: t`$56$`, correct: true, value: "56" },
        { key: "B", text: t`$336$`, correct: false, misconceptionId: "C09-M1", value: "336" },
        { key: "C", text: t`$112$`, correct: false, misconceptionId: "C09-M3", value: "112" },
        { key: "D", text: t`$120$`, correct: false, misconceptionId: "C09-M4", value: "120" },
      ],
      solution: {
        steps: [
          t`No three vertices of a polygon lie on a line, so every choice of $3$ of the $8$ vertices gives one triangle.`,
          t`The order of the vertices doesn't matter: triangle $ABC$ is triangle $CAB$. So count combinations.`,
          t`$^8C_3 = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = \frac{336}{6} = 56$ triangles.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q8" },
      stem: t`In how many ways can a team of $3$ boys and $2$ girls be selected from $6$ boys and $4$ girls?`,
      verify: { kind: "value", inputs: { n1: "6", r1: "3", n2: "4", r2: "2" } },
      options: [
        { key: "A", text: t`$1440$`, correct: false, misconceptionId: "C09-M1", value: "1440" },
        { key: "B", text: t`$26$`, correct: false, misconceptionId: "C09-M2", value: "26" },
        { key: "C", text: t`$240$`, correct: false, misconceptionId: "C09-M3", value: "240" },
        { key: "D", text: t`$120$`, correct: true, value: "120" },
      ],
      solution: {
        steps: [
          t`$3$ boys from $6$: $^6C_3 = \frac{6 \times 5 \times 4}{3 \times 2 \times 1} = 20$ ways.`,
          t`$2$ girls from $4$: $^4C_2 = \frac{4 \times 3}{2 \times 1} = 6$ ways.`,
          t`The team needs the boys **and** the girls, so multiply: $20 \times 6 = 120$ teams.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q7" },
      stem: t`A bag has $6$ red, $8$ green and $7$ blue balls. In how many ways can $9$ balls be drawn so that exactly $3$ balls of each colour are drawn?`,
      verify: { kind: "value", inputs: { n1: "6", r1: "3", n2: "8", r2: "3", n3: "7", r3: "3" } },
      options: [
        { key: "A", text: t`$39200$`, correct: true, value: "39200" },
        { key: "B", text: t`$111$`, correct: false, misconceptionId: "C09-M2", value: "111" },
        { key: "C", text: t`$313600$`, correct: false, misconceptionId: "C09-M3", value: "313600" },
        { key: "D", text: t`$564480$`, correct: false, misconceptionId: "C09-M4", value: "564480" },
      ],
      solution: {
        steps: [
          t`$3$ red from $6$: $^6C_3 = 20$. $3$ green from $8$: $^8C_3 = \frac{8 \times 7 \times 6}{6} = 56$. $3$ blue from $7$: $^7C_3 = \frac{7 \times 6 \times 5}{6} = 35$.`,
          t`All three colours are drawn together, so multiply: $20 \times 56 \times 35 = 39200$ ways.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.6.1 SolvedEx.4(v)" },
      stem: t`Four cards are drawn from a pack of $52$ playing cards, which has $4$ kings and $4$ queens. In how many ways can the four cards be three kings and one queen?`,
      verify: { kind: "value", inputs: { n1: "4", r1: "3", n2: "4", r2: "1" } },
      options: [
        { key: "A", text: t`$8$`, correct: false, misconceptionId: "C09-M2", value: "8" },
        { key: "B", text: t`$80$`, correct: false, misconceptionId: "C09-M4", value: "80" },
        { key: "C", text: t`$16$`, correct: true, value: "16" },
        { key: "D", text: t`$96$`, correct: false, misconceptionId: "C09-M1", value: "96" },
      ],
      solution: {
        steps: [
          t`$3$ kings from the $4$ kings: $^4C_3 = \frac{4 \times 3 \times 2}{3 \times 2 \times 1} = 4$ ways.`,
          t`$1$ queen from the $4$ queens: $^4C_1 = 4$ ways.`,
          t`Kings **and** a queen, so multiply: $4 \times 4 = 16$ ways.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/3.6.1 SolvedEx.1(iii)" },
      stem: t`In how many ways can $3$ cards be drawn from a pack of $52$ playing cards?`,
      verify: { kind: "value", inputs: { n: "52", r: "3" } },
      options: [
        { key: "A", text: t`$24804$`, correct: false, misconceptionId: "C09-M4", value: "24804" },
        { key: "B", text: t`$22100$`, correct: true, value: "22100" },
        { key: "C", text: t`$132600$`, correct: false, misconceptionId: "C09-M1", value: "132600" },
        { key: "D", text: t`$44200$`, correct: false, misconceptionId: "C09-M3", value: "44200" },
      ],
      solution: {
        steps: [
          t`The cards are drawn together, so their order doesn't matter: count combinations of $3$ from $52$.`,
          t`$^{52}C_3 = \frac{52 \times 51 \times 50}{3 \times 2 \times 1} = \frac{132600}{6} = 22100$ ways.`,
        ],
      },
    },
  ],
};
