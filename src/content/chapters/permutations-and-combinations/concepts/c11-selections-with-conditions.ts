import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`A team of $3$ is chosen from $3$ girls and $5$ boys, with at least one girl. Ravi says: pick the girl in $3$ ways, then any $2$ of the other $7$ in $^7C_2 = 21$ ways, so $63$ teams. **But there are only $^8C_3 = 56$ teams in all. What went wrong?**`,
    reveal: t`Ravi counts some teams more than once. A team with girls $G_1$ and $G_2$ is counted when $G_1$ is 'the girl' and again when $G_2$ is. Count the bad teams instead: with no girl, $^5C_3 = 10$. So the answer is $56 - 10 = 46$.`,
  },
  explanation: {
    intuition: t`A condition splits a selection into parts. When you pick some people from one group **and** some from another, multiply the two counts. When the condition allows several cases (exactly $1$ doctor, exactly $2$, ...), count each case and add. For 'at least one', it's quicker to count the selections that break the rule (none at all) and subtract them from the total.`,
    formal: t`**Pick from each group and multiply.** $3$ boys from $6$ and $2$ girls from $4$: $^6C_3 \times {}^4C_2 = 20 \times 6 = 120$.

**Particular people.** If $k$ particular people must be in, choose the other $r - k$ from the remaining $n - k$: $^{n-k}C_{r-k}$. If they must be out: $^{n-k}C_r$. For $5$ from $11$ with two particular students: both in, $^9C_3 = 84$; both out, $^9C_5 = 126$.

**'At least' means cases.** At least $k$ from a group: count exactly $k$, exactly $k + 1$, ..., up to what the group and the team allow, and add. Either-or cases add; the groups inside one case multiply.

**At least one = all − none.** $^nC_r$ minus the selections with none from that group. This works only for 'at least one': for 'at least $2$' you must also remove the 'exactly one' case. A rule like 'take $B$ only if you take $A$' works the same way: all − (selections with $B$ but not $A$).

**Don't fix one and fill freely.** Choosing 'the' required person first and then any of the rest counts a selection with two of them twice.`,
    worked: {
      prompt: t`Ten students are to be selected for a project from a class of $30$. Four of them want to be together: either all four are in the project or none of them is. Find the number of possible selections.`,
      steps: [
        t`Two cases, and a selection is in exactly one of them: the four are all in, or all out. Count each case and add.`,
        t`All four in: the other $6$ places are filled from the other $26$ students, in $^{26}C_6 = 230230$ ways.`,
        t`All four out: all $10$ come from the other $26$, in $^{26}C_{10} = 5311735$ ways.`,
        t`Add the cases: $230230 + 5311735 = 5541965$.`,
      ],
      answer: t`$^{26}C_6 + {}^{26}C_{10} = 5541965$ selections.`,
    },
    visualSpec: t`Slide the number of doctors in the team from $1$ up to $4$: each case shows its product of choices and the running total, and a switch shows all − none landing on the same number.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: "Fixing one required person first (e.g. 'the' doctor), then choosing the rest freely from everyone left",
      remediation: t`This counts a selection with two or more of the required kind more than once, once for each of them. Use all − none, or count the cases exactly $1$, exactly $2$, ... and add.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C11-M2",
      mistake: "Reading 'at least k' as 'exactly k': counting only the smallest case",
      remediation: t`'At least $k$' means $k$ or more. List every allowed case, from $k$ up to what the group and the team size allow, count each one, and add them.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M3",
      mistake: "Using all − none for 'at least 2' or more: subtracting only the selections with none from that group",
      remediation: t`All − none gives 'at least one'. For 'at least $k$' you must also remove the selections with $1, 2, \ldots, k - 1$ from that group, so it is usually quicker to add the allowed cases directly.`,
      fallback: { kind: "ext", topic: "complement of a set" },
    },
    {
      id: "C11-M4",
      mistake: "Working out the 'none' count and giving it as the answer, without subtracting it from the total",
      remediation: t`The 'none' count is the selections you throw away. Subtract it from the total number of selections, $^nC_r$, to get the selections with at least one.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C11-M3 gives the key when the only 'at least' condition is 'at least one' (all - none is then correct): draw it from an item with 'at least 2' or more.",
    "C11-M2 reads the first 'at least' condition named in the stem as 'exactly'.",
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q16" },
      stem: t`There are $4$ doctors and $8$ lawyers in a panel. In how many ways can a team of $6$ be selected if at least one doctor must be in the team?`,
      verify: { kind: "value", inputs: { r: "6" }, params: { groups: ["4:1:6", "8:0:6"] } },
      options: [
        { key: "A", text: t`$896$`, correct: true, value: "896" },
        { key: "B", text: t`$1848$`, correct: false, misconceptionId: "C11-M1", value: "1848" },
        { key: "C", text: t`$224$`, correct: false, misconceptionId: "C11-M2", value: "224" },
        { key: "D", text: t`$28$`, correct: false, misconceptionId: "C11-M4", value: "28" },
      ],
      solution: {
        steps: [
          t`With no condition, a team of $6$ from the $12$ people: $^{12}C_6 = 924$.`,
          t`Teams with no doctor: all $6$ from the $8$ lawyers, $^8C_6 = 28$.`,
          t`At least one doctor $= 924 - 28 = 896$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q22" },
      stem: t`A group consists of $9$ men and $6$ women. A team of $6$ is to be selected. How many of the possible selections have at least $3$ women?`,
      verify: { kind: "value", inputs: { r: "6" }, params: { groups: ["6:3:6", "9:0:6"] } },
      options: [
        { key: "A", text: t`$1680$`, correct: false, misconceptionId: "C11-M2", value: "1680" },
        { key: "B", text: t`$4921$`, correct: false, misconceptionId: "C11-M3", value: "4921" },
        { key: "C", text: t`$2275$`, correct: true, value: "2275" },
        { key: "D", text: t`$4400$`, correct: false, misconceptionId: "C11-M1", value: "4400" },
      ],
      solution: {
        steps: [
          t`At least $3$ women means $3$, $4$, $5$ or $6$ women; the rest of the team are men. Count each case and add.`,
          t`$3$ women: $^6C_3 \times {}^9C_3 = 20 \times 84 = 1680$. $4$ women: $^6C_4 \times {}^9C_2 = 15 \times 36 = 540$.`,
          t`$5$ women: $^6C_5 \times {}^9C_1 = 6 \times 9 = 54$. $6$ women: $^6C_6 = 1$.`,
          t`Total $= 1680 + 540 + 54 + 1 = 2275$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q23" },
      stem: t`A committee of $10$ persons is to be formed from a group of $10$ women and $8$ men. How many possible committees have men in the majority (at least $6$ men)?`,
      verify: { kind: "value", inputs: { r: "10" }, params: { groups: ["8:6:8", "10:0:10"] } },
      options: [
        { key: "A", text: t`$13860$`, correct: false, misconceptionId: "C11-M1", value: "13860" },
        { key: "B", text: t`$5880$`, correct: false, misconceptionId: "C11-M2", value: "5880" },
        { key: "C", text: t`$43757$`, correct: false, misconceptionId: "C11-M3", value: "43757" },
        { key: "D", text: t`$6885$`, correct: true, value: "6885" },
      ],
      solution: {
        steps: [
          t`Men in the majority means $6$, $7$ or $8$ men in the committee of $10$; the rest are women.`,
          t`$6$ men: $^8C_6 \times {}^{10}C_4 = 28 \times 210 = 5880$. $7$ men: $^8C_7 \times {}^{10}C_3 = 8 \times 120 = 960$. $8$ men: $^8C_8 \times {}^{10}C_2 = 45$.`,
          t`Total $= 5880 + 960 + 45 = 6885$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q24" },
      stem: t`A question paper has two sections: section I has $5$ questions and section II has $6$ questions. A student answers $6$ questions in all, with at least $2$ from each section. In how many ways can he choose his questions?`,
      verify: { kind: "value", inputs: { r: "6" }, params: { groups: ["5:2:5", "6:2:6"] } },
      options: [
        { key: "A", text: t`$150$`, correct: false, misconceptionId: "C11-M2", value: "150" },
        { key: "B", text: t`$461$`, correct: false, misconceptionId: "C11-M3", value: "461" },
        { key: "C", text: t`$425$`, correct: true, value: "425" },
        { key: "D", text: t`$3150$`, correct: false, misconceptionId: "C11-M1", value: "3150" },
      ],
      solution: {
        steps: [
          t`The $6$ questions split as $(2, 4)$, $(3, 3)$ or $(4, 2)$ between sections I and II. A $(5, 1)$ split breaks the rule for section II.`,
          t`$(2, 4)$: $^5C_2 \times {}^6C_4 = 10 \times 15 = 150$. $(3, 3)$: $^5C_3 \times {}^6C_3 = 10 \times 20 = 200$. $(4, 2)$: $^5C_4 \times {}^6C_2 = 5 \times 15 = 75$.`,
          t`Total $= 150 + 200 + 75 = 425$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q25" },
      stem: t`Among $22$ cricket players there are $3$ wicketkeepers and $5$ bowlers; the other $14$ are neither. A team of $11$ is to be selected with exactly one wicketkeeper and at least $4$ bowlers. How many different teams can be formed?`,
      verify: { kind: "value", inputs: { r: "11" }, params: { groups: ["3:1:1", "5:4:5", "14:0:14"] } },
      options: [
        { key: "A", text: t`$75075$`, correct: false, misconceptionId: "C11-M1", value: "75075" },
        { key: "B", text: t`$45045$`, correct: false, misconceptionId: "C11-M2", value: "45045" },
        { key: "C", text: t`$274131$`, correct: false, misconceptionId: "C11-M3", value: "274131" },
        { key: "D", text: t`$51051$`, correct: true, value: "51051" },
      ],
      solution: {
        steps: [
          t`The wicketkeeper: $^3C_1 = 3$ ways. The other $10$ players come from the $5$ bowlers and $14$ others, with at least $4$ bowlers.`,
          t`$4$ bowlers: $^5C_4 \times {}^{14}C_6 = 5 \times 3003 = 15015$. $5$ bowlers: $^5C_5 \times {}^{14}C_5 = 2002$. Together, $17017$.`,
          t`Multiply by the wicketkeeper choice: $3 \times 17017 = 51051$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Ex 3.6 Q26" },
      stem: t`Four students are to be selected from $10$. In how many ways can this be done if at least one of two specified students, Asha and Bilal, must be selected?`,
      verify: { kind: "value", inputs: { r: "4" }, params: { groups: ["2:1:2", "8:0:4"] } },
      options: [
        { key: "A", text: t`$70$`, correct: false, misconceptionId: "C11-M4", value: "70" },
        { key: "B", text: t`$140$`, correct: true, value: "140" },
        { key: "C", text: t`$168$`, correct: false, misconceptionId: "C11-M1", value: "168" },
        { key: "D", text: t`$112$`, correct: false, misconceptionId: "C11-M2", value: "112" },
      ],
      solution: {
        steps: [
          t`With no condition: $^{10}C_4 = 210$ selections.`,
          t`Selections with neither Asha nor Bilal: all $4$ from the other $8$, $^8C_4 = 70$.`,
          t`At least one of them $= 210 - 70 = 140$.`,
        ],
      },
    },
  ],
};
