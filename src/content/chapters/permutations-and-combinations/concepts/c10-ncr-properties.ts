import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c10: Concept = {
  id: "C10",
  status: "approved",
  hook: {
    prompt: t`$^nC_8 = {}^nC_6$, yet $8 \ne 6$. **How can two different lower indices give the same number, and what is $n$?**`,
    reveal: t`Choosing $8$ things to take from $n$ is the same as choosing the $n - 8$ to leave behind. So $^nC_8 = {}^nC_{n-8}$, and this equals $^nC_6$ when $n - 8 = 6$. So $n = 14$: picking $8$ of $14$ and picking $6$ of $14$ are the same count.`,
  },
  explanation: {
    intuition: t`Every choice of $r$ things to take is also a choice of $n - r$ things to leave, so $^nC_r = {}^nC_{n-r}$. The values $^nC_0, {}^nC_1, \ldots, {}^nC_n$ read the same from both ends: they rise to the middle and fall again. So equal values come in mirror pairs, and the largest sits in the middle. Two neighbours in one row add up to an entry of the next row: that is Pascal's rule.`,
    formal: t`**Complement.** $^nC_r = {}^nC_{n-r}$. Use it to shorten work: $^{100}C_{98} = {}^{100}C_2 = 4950$.

**Equal values.** $^nC_x = {}^nC_y$ means $x = y$ **or** $x + y = n$. Solve both cases, then keep only roots that make each lower index a whole number from $0$ to $n$.

**Pascal's rule.** $^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$: the top goes up by one, the larger lower index stays. Out of $n + 1$ things, a choice of $r$ either leaves out one particular thing ($^nC_r$ ways) or takes it ($^nC_{r-1}$ ways).

**Ratio of neighbours.** $\frac{{}^nC_r}{{}^nC_{r-1}} = \frac{n - r + 1}{r}$. Given a ratio such as $^nC_{r-1} : {}^nC_r : {}^nC_{r+1} = 14 : 8 : 3$, write two such equations and solve: $n = 10$, $r = 7$.

**The largest $^nC_r$.** The ratio is above $1$ until the middle. For even $n$ the largest is at $r = \frac{n}{2}$ ($^8C_4 = 70$); for odd $n$ at $r = \frac{n-1}{2}$ and $\frac{n+1}{2}$, which are equal ($^{11}C_5 = {}^{11}C_6 = 462$).`,
    worked: {
      prompt: t`Find $r$ if $^{16}C_4 + {}^{16}C_5 + {}^{17}C_6 + {}^{18}C_7 = {}^{19}C_r$.`,
      steps: [
        t`Pascal's rule on the first pair: $^{16}C_4 + {}^{16}C_5 = {}^{17}C_5$, the top up by one and the larger lower index kept.`,
        t`Now $^{17}C_5 + {}^{17}C_6 = {}^{18}C_6$, and then $^{18}C_6 + {}^{18}C_7 = {}^{19}C_7$.`,
        t`So $^{19}C_7 = {}^{19}C_r$. Either $r = 7$, or $r + 7 = 19$, giving $r = 12$.`,
        t`Both $7$ and $12$ lie between $0$ and $19$, so both are valid.`,
      ],
      answer: t`$r = 7$ or $r = 12$.`,
    },
    visualSpec: t`Drag $n$ to build row $n$ of Pascal's triangle as bars of height $^nC_r$: the bars mirror about the middle and peak there, and tapping two neighbouring bars drops their sum into the row below.`,
  },
  misconceptions: [
    {
      id: "C10-M1",
      mistake: "Giving Pascal's sum the smaller lower index: nC(r-1) + nC(r) = (n+1)C(r-1)",
      remediation: t`Pascal's rule keeps the larger lower index: $^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$. Check with small numbers: $^2C_0 + {}^2C_1 = 1 + 2 = 3 = {}^3C_1$, not $^3C_0 = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M2",
      mistake: "From nC(x) = nC(y), concluding only x = y",
      remediation: t`Taking $r$ things leaves $n - r$ behind, so $^nC_r = {}^nC_{n-r}$. So $^nC_x = {}^nC_y$ has two cases, $x = y$ or $x + y = n$: solve both.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C10-M3",
      mistake: "From nC(x) = nC(y), using only x + y = n and dropping the case x = y",
      remediation: t`$x + y = n$ is the second case, not the only one. Equal lower indices give equal values too, so solve $x = y$ as well and keep the valid roots of both.`,
      fallback: { kind: "none" },
    },
    {
      id: "C10-M4",
      mistake: "Keeping every root of the equations without checking that each lower index lies between 0 and n",
      remediation: t`$^nC_r$ exists only for whole numbers $r$ from $0$ to $n$. Put each root back into both lower indices and reject any root that makes one negative or bigger than $n$.`,
      fallback: { kind: "concept", id: "C09" },
    },
  ],
  engineNotes: [
    "C10-M1 can only be caught on items with a Pascal step (Q1, Q2, Q5); C10-M4 only on equations where some root puts a lower index outside 0 to n (Q3, Q4).",
    "C10-M2 and C10-M3 give the key when the two cases agree (x = n - x, e.g. 14C7 = 14Cr); draw diagnosing items where they differ.",
    "The largest nCr and the ratio of neighbours are taught in the formal section and not checked by these items.",
  ],
  items: [
    {
      id: "C10-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q1(c)" },
      stem: t`If $^{15}C_4 + {}^{15}C_5 = {}^{16}C_r$, then:`,
      verify: { kind: "value", inputs: { N: "16" }, params: { kind: "pascal", terms: ["1 15 4", "1 15 5"] } },
      options: [
        { key: "A", text: t`$r = 4$ or $r = 12$`, correct: false, misconceptionId: "C10-M1", value: "{4, 12}" },
        { key: "B", text: t`$r = 5$ only`, correct: false, misconceptionId: "C10-M2", value: "{5}" },
        { key: "C", text: t`$r = 11$ only`, correct: false, misconceptionId: "C10-M3", value: "{11}" },
        { key: "D", text: t`$r = 5$ or $r = 11$`, correct: true, value: "{5, 11}" },
      ],
      solution: {
        steps: [
          t`Pascal's rule: $^{15}C_4 + {}^{15}C_5 = {}^{16}C_5$.`,
          t`So $^{16}C_5 = {}^{16}C_r$. Either $r = 5$, or $r + 5 = 16$, giving $r = 11$.`,
          t`Both lie between $0$ and $16$, so $r = 5$ or $r = 11$.`,
        ],
      },
    },
    {
      id: "C10-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q1(d)" },
      stem: t`If $^{20}C_{16} - {}^{19}C_{16} = {}^{19}C_r$, then:`,
      verify: { kind: "value", inputs: { N: "19" }, params: { kind: "pascal", terms: ["1 20 16", "-1 19 16"] } },
      options: [
        { key: "A", text: t`$r = 4$ or $r = 15$`, correct: true, value: "{4, 15}" },
        { key: "B", text: t`$r = 2$ or $r = 17$`, correct: false, misconceptionId: "C10-M1", value: "{2, 17}" },
        { key: "C", text: t`$r = 15$ only`, correct: false, misconceptionId: "C10-M2", value: "{15}" },
        { key: "D", text: t`$r = 4$ only`, correct: false, misconceptionId: "C10-M3", value: "{4}" },
      ],
      solution: {
        steps: [
          t`Pascal's rule: $^{20}C_{16} = {}^{19}C_{16} + {}^{19}C_{15}$.`,
          t`So $^{20}C_{16} - {}^{19}C_{16} = {}^{19}C_{15}$, and $^{19}C_{15} = {}^{19}C_r$.`,
          t`Either $r = 15$, or $r + 15 = 19$, giving $r = 4$. Both are valid: $r = 4$ or $r = 15$.`,
        ],
      },
    },
    {
      id: "C10-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q16(iii)" },
      stem: t`All the values of $n$ for which $^{21}C_{6n} = {}^{21}C_{n^2 + 5}$ are:`,
      verify: { kind: "value", inputs: { N: "21", x: "6*n", y: "n**2 + 5" }, params: { kind: "eq" } },
      options: [
        { key: "A", text: t`$n = -8, 1, 2$ or $5$`, correct: false, misconceptionId: "C10-M4", value: "{-8, 1, 2, 5}" },
        { key: "B", text: t`$n = 1$ or $n = 2$`, correct: true, value: "{1, 2}" },
        { key: "C", text: t`$n = 1$ only`, correct: false, misconceptionId: "C10-M2", value: "{1}" },
        { key: "D", text: t`$n = 2$ only`, correct: false, misconceptionId: "C10-M3", value: "{2}" },
      ],
      solution: {
        steps: [
          t`Equal lower indices: $6n = n^2 + 5$, so $n^2 - 6n + 5 = 0$, giving $n = 1$ or $n = 5$.`,
          t`Lower indices adding to $21$: $6n + n^2 + 5 = 21$, so $n^2 + 6n - 16 = 0$, giving $n = 2$ or $n = -8$.`,
          t`Check that $6n$ and $n^2 + 5$ lie from $0$ to $21$: $n = 1$ gives $6, 6$ and $n = 2$ gives $12, 9$. But $n = 5$ gives $6n = 30 > 21$ and $n = -8$ gives $6n = -48$.`,
          t`So $n = 1$ or $n = 2$.`,
        ],
      },
    },
    {
      id: "C10-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q16(ii)" },
      stem: t`All the values of $n$ for which $^{10}C_{3n - 2} = {}^{10}C_{n^2 - 6}$ are:`,
      verify: { kind: "value", inputs: { N: "10", x: "3*n - 2", y: "n**2 - 6" }, params: { kind: "eq" } },
      options: [
        { key: "A", text: t`$n = 3$ only`, correct: false, misconceptionId: "C10-M3", value: "{3}" },
        { key: "B", text: t`$n = -6, -1, 3$ or $4$`, correct: false, misconceptionId: "C10-M4", value: "{-6, -1, 3, 4}" },
        { key: "C", text: t`$n = 3$ or $n = 4$`, correct: true, value: "{3, 4}" },
        { key: "D", text: t`$n = 4$ only`, correct: false, misconceptionId: "C10-M2", value: "{4}" },
      ],
      solution: {
        steps: [
          t`Equal lower indices: $3n - 2 = n^2 - 6$, so $n^2 - 3n - 4 = 0$, giving $n = 4$ or $n = -1$.`,
          t`Lower indices adding to $10$: $3n - 2 + n^2 - 6 = 10$, so $n^2 + 3n - 18 = 0$, giving $n = 3$ or $n = -6$.`,
          t`Check that both lower indices lie from $0$ to $10$: $n = 4$ gives $10, 10$ and $n = 3$ gives $7, 3$. But $n = -1$ gives $3n - 2 = -5$ and $n = -6$ gives $-20$.`,
          t`So $n = 3$ or $n = 4$.`,
        ],
      },
    },
    {
      id: "C10-Q5",
      source: { kind: "authored" },
      stem: t`If $^{10}C_3 + 2 \times {}^{10}C_4 + {}^{10}C_5 = {}^{12}C_r$, then:`,
      verify: { kind: "value", inputs: { N: "12" }, params: { kind: "pascal", terms: ["1 10 3", "2 10 4", "1 10 5"] } },
      options: [
        { key: "A", text: t`$r = 5$ or $r = 7$`, correct: true, value: "{5, 7}" },
        { key: "B", text: t`$r = 3$ or $r = 9$`, correct: false, misconceptionId: "C10-M1", value: "{3, 9}" },
        { key: "C", text: t`$r = 5$ only`, correct: false, misconceptionId: "C10-M2", value: "{5}" },
        { key: "D", text: t`$r = 7$ only`, correct: false, misconceptionId: "C10-M3", value: "{7}" },
      ],
      solution: {
        steps: [
          t`Split the middle term: $({}^{10}C_3 + {}^{10}C_4) + ({}^{10}C_4 + {}^{10}C_5) = {}^{11}C_4 + {}^{11}C_5$ by Pascal's rule.`,
          t`Pascal's rule again: $^{11}C_4 + {}^{11}C_5 = {}^{12}C_5$.`,
          t`So $^{12}C_5 = {}^{12}C_r$: either $r = 5$, or $r + 5 = 12$, giving $r = 7$. Both are valid.`,
        ],
      },
    },
  ],
};
