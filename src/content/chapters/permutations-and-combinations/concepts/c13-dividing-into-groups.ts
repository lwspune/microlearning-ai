import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c13: Concept = {
  id: "C13",
  status: "approved",
  hook: {
    prompt: t`Four friends, A, B, C and D, are to be split into two pairs. Choosing a pair can be done in $^4C_2 = 6$ ways. **So are there $6$ ways to split them?**`,
    reveal: t`No, only $3$: AB with CD, AC with BD, AD with BC. Choosing AB leaves CD, and choosing CD leaves AB: that is the same split, counted twice. The two pairs have the same size and no names, so divide by $2! = 2$: $\frac{6}{2} = 3$.`,
  },
  explanation: {
    intuition: t`To divide things into groups, fill the groups one at a time: choose the first group's members, then the next group's from those left, and multiply. The last group takes whatever is left, in $1$ way. Inside a group order doesn't matter, so each choice is an $^nC_r$. But when groups have the same size and no names, the same split turns up once for every order of picking the groups, so divide by that number of orders.`,
    formal: t`**Groups of different sizes.** $n = p + q + r$ different things into groups of $p$, $q$ and $r$:
$$^nC_p \times {}^{n-p}C_q \times {}^{r}C_r = \frac{n!}{p!\,q!\,r!}$$

**Equal groups, no names.** $km$ things into $k$ groups of $m$ each: each split is counted $k!$ times, so
$$\frac{(km)!}{(m!)^k\,k!}$$

**Equal groups with names.** Groups given to named people, or a car group and a train group, are told apart. Don't divide by $k!$: $\dfrac{(km)!}{(m!)^k}$.

**Some sizes repeated.** Divide only by the factorial of how many groups share a size. $7$ things into groups of $2$, $2$, $3$: $\dfrac{7!}{2!\,2!\,3!\,2!} = 105$.`,
    worked: {
      prompt: t`Find the number of ways of dividing $20$ different objects into three groups of sizes $8$, $7$ and $5$.`,
      steps: [
        t`Choose the group of $8$ from all $20$: $^{20}C_8 = \frac{20!}{8!\,12!}$ ways.`,
        t`Choose the group of $7$ from the $12$ left: $^{12}C_7 = \frac{12!}{7!\,5!}$ ways. The last $5$ form the third group in $1$ way.`,
        t`Multiply: $\frac{20!}{8!\,12!} \times \frac{12!}{7!\,5!} = \frac{20!}{8!\,7!\,5!}$.`,
        t`The three sizes are all different, so no split is counted twice: nothing to divide by.`,
      ],
      answer: t`$\dfrac{20!}{8!\,7!\,5!}$ ways.`,
    },
    visualSpec: t`Drag coloured counters into empty boxes to form groups; when two boxes have the same size and no names, swapping their contents lights up as the same split, and the count divides by the swaps.`,
  },
  misconceptions: [
    {
      id: "C13-M1",
      mistake: "Divides by k! (k = the number of groups) even when the groups differ in size or have names",
      remediation: t`Divide by $k!$ only when $k$ groups have the same size **and** nothing tells them apart. Groups of different sizes, or groups with names (a car and a train, three named children), are already told apart, so each split is counted once.`,
      fallback: { kind: "none" },
    },
    {
      id: "C13-M2",
      mistake: "Forgets to divide by k! when k groups have the same size and no names",
      remediation: t`When $k$ groups have the same size and no names, choosing them one after another counts each split $k!$ times, once for each order of picking the groups. Divide by $k!$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C13-M3",
      mistake: "Counts the order inside each group: uses nPr for each group instead of nCr",
      remediation: t`A group is a selection: its members have no order. Use $^nC_r$ to choose each group, not $^nP_r$.`,
      fallback: { kind: "concept", id: "C09" },
    },
    {
      id: "C13-M4",
      mistake: "Swaps the sum and product rules: adds the choices for the groups, or multiplies separate cases",
      remediation: t`Filling the groups is one task **and then** another, so multiply the choices. Separate cases (the car takes $3$, **or** $4$, or ...) are one task or another, so add them.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C13-M5",
      mistake: "In an 'at least' count, stops before the largest allowed group size",
      remediation: t`List every allowed size from the smallest to the largest. With $n$ people and at least $3$ in each of two groups, the first group can take $3, 4, \ldots, n - 3$ people: include the top case.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C13-M1 gives the key when all the groups have one size and no names (it divides by k!, which is right there); C13-M2 gives the key when the sizes all differ or the groups have names. Draw items where the model and the key differ.",
    "C13-M3 and C13-M2 are modelled only for 'split' items; C13-M5 only for two named groups with an 'at least' condition.",
    "C13-Q4 (Misc II Q10): the book's printed key, 336, drops the case of 6 in the car (9C6). The key here is 420; 336 is the C13-M5 option.",
  ],
  items: [
    {
      id: "C13-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q8" },
      stem: t`$30$ different objects are to be divided into three groups containing $7$, $10$ and $13$ objects. In how many ways can this be done?`,
      verify: { kind: "value", inputs: { n: "30" }, params: { kind: "split", sizes: ["7", "10", "13"], labelled: "no" } },
      options: [
        { key: "A", text: t`$\dfrac{30!}{7!\,10!\,13!}$`, correct: true, value: "factorial(30)/(factorial(7)*factorial(10)*factorial(13))" },
        { key: "B", text: t`$\dfrac{30!}{7!\,10!\,13!\,3!}$`, correct: false, misconceptionId: "C13-M1", value: "factorial(30)/(factorial(7)*factorial(10)*factorial(13)*factorial(3))" },
        { key: "C", text: t`$30!$`, correct: false, misconceptionId: "C13-M3", value: "factorial(30)" },
        { key: "D", text: t`$^{30}C_7 + {}^{23}C_{10} + {}^{13}C_{13}$`, correct: false, misconceptionId: "C13-M4", value: "binomial(30, 7) + binomial(23, 10) + binomial(13, 13)" },
      ],
      solution: {
        steps: [
          t`Choose the $7$ from $30$, then the $10$ from the $23$ left; the last $13$ form the third group: $^{30}C_7 \times {}^{23}C_{10} \times 1$.`,
          t`$\frac{30!}{7!\,23!} \times \frac{23!}{10!\,13!} = \frac{30!}{7!\,10!\,13!}$.`,
          t`The sizes $7$, $10$, $13$ all differ, so no split repeats. The answer is $\frac{30!}{7!\,10!\,13!}$.`,
        ],
      },
    },
    {
      id: "C13-Q2",
      source: { kind: "authored" },
      stem: t`$12$ different books are to be tied into three bundles of $4$ books each. The bundles are not labelled. In how many ways can this be done?`,
      verify: { kind: "value", inputs: { n: "12" }, params: { kind: "split", sizes: ["4", "4", "4"], labelled: "no" } },
      options: [
        { key: "A", text: t`$5775$`, correct: true, value: "5775" },
        { key: "B", text: t`$34650$`, correct: false, misconceptionId: "C13-M2", value: "34650" },
        { key: "C", text: t`$479001600$`, correct: false, misconceptionId: "C13-M3", value: "479001600" },
        { key: "D", text: t`$566$`, correct: false, misconceptionId: "C13-M4", value: "566" },
      ],
      solution: {
        steps: [
          t`Choose the bundles in turn: $^{12}C_4 \times {}^8C_4 \times {}^4C_4 = 495 \times 70 \times 1 = 34650$.`,
          t`The three bundles have the same size and no labels, so each split was counted once for each order of picking them: $3! = 6$ times.`,
          t`$\frac{34650}{6} = 5775$ ways.`,
        ],
      },
    },
    {
      id: "C13-Q3",
      source: { kind: "authored" },
      stem: t`$9$ different toys are to be shared among three children, Asha, Bilal and Chetan, so that each child gets $3$ toys. In how many ways can this be done?`,
      verify: { kind: "value", inputs: { n: "9" }, params: { kind: "split", sizes: ["3", "3", "3"], labelled: "yes" } },
      options: [
        { key: "A", text: t`$105$`, correct: false, misconceptionId: "C13-M4", value: "105" },
        { key: "B", text: t`$1680$`, correct: true, value: "1680" },
        { key: "C", text: t`$280$`, correct: false, misconceptionId: "C13-M1", value: "280" },
        { key: "D", text: t`$362880$`, correct: false, misconceptionId: "C13-M3", value: "362880" },
      ],
      solution: {
        steps: [
          t`Asha chooses $3$ of the $9$ toys: $^9C_3 = 84$. Bilal chooses $3$ of the $6$ left: $^6C_3 = 20$. Chetan gets the last $3$: $1$ way.`,
          t`$84 \times 20 \times 1 = 1680$.`,
          t`The children have names, so giving a set of toys to Asha differs from giving it to Bilal: don't divide by $3!$. The answer is $1680$.`,
        ],
      },
    },
    {
      id: "C13-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/permutations-combinations-11/Misc II Q10" },
      stem: t`Nine friends go for a picnic in two groups: one group goes by car and the other by train. In how many ways can the groups be formed if each group must have at least $3$ friends?`,
      verify: { kind: "value", inputs: { n: "9", lo: "3" }, params: { kind: "two" } },
      options: [
        { key: "A", text: t`$210$`, correct: false, misconceptionId: "C13-M1", value: "210" },
        { key: "B", text: t`$112021056$`, correct: false, misconceptionId: "C13-M4", value: "112021056" },
        { key: "C", text: t`$336$`, correct: false, misconceptionId: "C13-M5", value: "336" },
        { key: "D", text: t`$420$`, correct: true, value: "420" },
      ],
      solution: {
        steps: [
          t`The car and the train tell the groups apart. Choose who goes by car; the rest go by train. With at least $3$ in each, the car takes $3$, $4$, $5$ or $6$ friends.`,
          t`$^9C_3 + {}^9C_4 + {}^9C_5 + {}^9C_6 = 84 + 126 + 126 + 84$.`,
          t`These are separate cases, so add: $420$ ways.`,
        ],
      },
    },
    {
      id: "C13-Q5",
      source: { kind: "authored" },
      stem: t`$9$ different pens are to be packed into three packets: two packets of $2$ pens each and one packet of $5$ pens. The packets are not labelled. In how many ways can this be done?`,
      verify: { kind: "value", inputs: { n: "9" }, params: { kind: "split", sizes: ["2", "2", "5"], labelled: "no" } },
      options: [
        { key: "A", text: t`$378$`, correct: true, value: "378" },
        { key: "B", text: t`$126$`, correct: false, misconceptionId: "C13-M1", value: "126" },
        { key: "C", text: t`$756$`, correct: false, misconceptionId: "C13-M2", value: "756" },
        { key: "D", text: t`$58$`, correct: false, misconceptionId: "C13-M4", value: "58" },
      ],
      solution: {
        steps: [
          t`Choose the packets in turn: $^9C_2 \times {}^7C_2 \times {}^5C_5 = 36 \times 21 \times 1 = 756$.`,
          t`The two packets of $2$ have the same size and no labels, so each split was counted $2! = 2$ times. The packet of $5$ differs from them, so don't divide by $3!$.`,
          t`$\frac{756}{2} = 378$ ways.`,
        ],
      },
    },
    {
      id: "C13-Q6",
      source: { kind: "authored" },
      stem: t`$10$ players are to be split into two teams of $5$ for a practice match. The teams have no names. In how many ways can this be done?`,
      verify: { kind: "value", inputs: { n: "10" }, params: { kind: "split", sizes: ["5", "5"], labelled: "no" } },
      options: [
        { key: "A", text: t`$252$`, correct: false, misconceptionId: "C13-M2", value: "252" },
        { key: "B", text: t`$3628800$`, correct: false, misconceptionId: "C13-M3", value: "3628800" },
        { key: "C", text: t`$253$`, correct: false, misconceptionId: "C13-M4", value: "253" },
        { key: "D", text: t`$126$`, correct: true, value: "126" },
      ],
      solution: {
        steps: [
          t`Choose one team of $5$; the other $5$ form the second team: $^{10}C_5 = 252$.`,
          t`The two teams have the same size and no names, so each split was counted twice, once for each team picked first.`,
          t`$\frac{252}{2} = 126$ ways.`,
        ],
      },
    },
  ],
};
