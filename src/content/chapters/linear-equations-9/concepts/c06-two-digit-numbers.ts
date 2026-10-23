import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`Take $82$, interchange its digits to get $28$, and subtract: $82 - 28 = 54$. Try $61 - 16$ too. **Why is the answer always a multiple of $9$?**`,
    reveal: t`A number with digits $x$ and $y$ is $10x + y$. With its digits interchanged it is $10y + x$. Their difference is $9x - 9y = 9(x - y)$, always $9$ times the gap between the digits.`,
  },
  explanation: {
    intuition: [
      t`In $47$, the digit $4$ is worth $40$ and the digit $7$ is worth $7$.`,
      t`So $47 = 10 \times 4 + 7$.`,
      t`If the tens digit is $x$ and the units digit is $y$, the number is $10x + y$.`,
      t`Interchanging the digits of $47$ gives $74$; in letters, $10y + x$.`,
      t`Writing $xy$ would mean $x \times y$ in algebra, not the number.`,
      t`A problem gives two facts about the number; each fact gives one equation in $x$ and $y$.`,
    ],
    formal: [
      {
        title: "The number and its reverse",
        points: [
          t`Let the tens digit be $x$ and the units digit be $y$.`,
          t`The number is $10x + y$.`,
          t`The sum of its digits is $x + y$.`,
          t`Interchanging the digits puts $y$ in the tens place: the **reverse** is $10y + x$.`,
          t`Example: $x = 2$, $y = 9$ gives $29$, and its reverse is $92$.`,
          t`The tens digit cannot be $0$, or the number would have only one digit.`,
        ],
      },
      {
        title: "Sum and difference",
        points: [
          t`Number plus reverse: $(10x + y) + (10y + x)$ $= 11x + 11y$.`,
          t`So the sum is $11$ times the sum of the digits: $54 + 45 = 11 \times 9$.`,
          t`That fact alone fixes only $x + y$: $18 + 81$ and $27 + 72$ also give $99$.`,
          t`Reverse minus number: $(10y + x) - (10x + y)$.`,
          t`The bracket changes every sign: $10y + x - 10x - y$ $= 9y - 9x$.`,
          t`So the two numbers differ by $9$ times the difference of the digits.`,
        ],
      },
      {
        title: "Words into equations",
        points: [
          t`'$5$ more than $6$ times the sum of its digits' is $6(x + y) + 5$.`,
          t`Only $x + y$ is multiplied; the $5$ is added after.`,
          t`So 'the number is $5$ more than ...' gives $10x + y = 6(x + y) + 5$.`,
          t`'$A$ exceeds $B$ by $63$' means $A - B = 63$: the bigger one comes first.`,
          t`'If $36$ is added to the number, we get the reverse' is $10x + y + 36 = 10y + x$.`,
        ],
      },
      {
        title: "Solve, then build the number",
        points: [
          t`Simplify each equation to the form $ax + by = c$.`,
          t`Solve the two equations together, for example by elimination.`,
          t`$x$ and $y$ must be whole numbers from $0$ to $9$, with $x \ne 0$.`,
          t`The answer is the number $10x + y$, tens digit first.`,
          t`Check the number against both facts in the question.`,
        ],
      },
    ],
    worked: {
      prompt: t`A two-digit number is $4$ times the sum of its digits. The number obtained by interchanging the digits is $9$ less than twice the original number. Find the number.`,
      steps: [
        t`Let the tens digit be $x$ and the units digit be $y$. The number is $10x + y$; its reverse is $10y + x$.`,
        t`First fact: $10x + y = 4(x + y)$, so $6x - 3y = 0$, that is $2x - y = 0$ ... (I).`,
        t`Second fact: $10y + x = 2(10x + y) - 9$. So $10y + x = 20x + 2y - 9$, that is $19x - 8y = 9$ ... (II).`,
        t`Multiply (I) by $8$: $16x - 8y = 0$. Subtract it from (II): $3x = 9$, so $x = 3$. Then $y = 2x = 6$.`,
        t`The number is $10 \times 3 + 6 = 36$. Check: $4 \times 9 = 36$, and $2 \times 36 - 9 = 63$, true.`,
      ],
      answer: t`The number is $36$.`,
    },
    visualSpec: t`Two digit tiles sit in a tens slot and a units slot; swapping them shows $10x + y$ turn into $10y + x$ while the difference $9(y - x)$ updates.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: "Mixing up the place values: taking the units digit as the tens digit, so the number comes out with its digits interchanged",
      remediation: t`The tens digit counts $10$ times: tens digit $x$, units digit $y$ gives $10x + y$. Write the tens digit first, and check the number against both facts.`,
      fallback: { kind: "ext", topic: "place value of digits (Std V)" },
    },
    {
      id: "C06-M2",
      mistake: "Putting a 'more than' or 'less than' number on the wrong side, e.g. reading 'the number is 3 more than 4 times the digit sum' as N + 3 = 4(x + y)",
      remediation: t`'$3$ more than $4(x + y)$' is $4(x + y) + 3$, so the number is the bigger side: $10x + y = 4(x + y) + 3$. '$3$ less than' is $4(x + y) - 3$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M3",
      mistake: "Subtracting the wrong way round: for 'the reverse exceeds the number by 27' working out the number minus the reverse",
      remediation: t`'$A$ exceeds $B$ by $27$' means $A - B = 27$, the bigger one first. Here that is $(10y + x) - (10x + y)$.`,
      fallback: { kind: "concept", id: "C05" },
    },
    {
      id: "C06-M4",
      mistake: "Putting the 'more than' or 'less than' number inside the bracket: '3 more than 4 times the digit sum' written as 4(x + y + 3)",
      remediation: t`Only the sum of the digits is multiplied by $4$; the $3$ is added after: $4(x + y) + 3$, not $4(x + y + 3)$.`,
      fallback: { kind: "ext", topic: "forming algebraic expressions (Std VIII)" },
    },
    {
      id: "C06-M5",
      mistake: "Ignoring place value: treating a two-digit number as just its digits added, so the reverse is y + x and two numbers differ by y - x",
      remediation: t`A digit's value depends on its place: the tens digit counts $10$ times. The number is $10x + y$, not $x + y$, and its reverse is $10y + x$.`,
      fallback: { kind: "ext", topic: "place value of digits (Std V)" },
    },
    {
      id: "C06-M6",
      mistake: "Writing the number with digits x and y side by side as xy, which in algebra means x times y",
      remediation: t`In algebra $xy$ means $x \times y$. The number with tens digit $x$ and units digit $y$ is written $10x + y$.`,
      fallback: { kind: "ext", topic: "forming algebraic expressions (Std VIII)" },
    },
  ],
  engineNotes: [
    "C06-M1 and C06-M3 give the same option on the expression item and whenever the other fact treats the two digits alike (digit sum, number plus reverse), so an item lists only one of them; C06-M3 is caught on Q2.",
    "C06-M5 and C06-M6 apply only to the expression items (Q1, Q2); C06-M2 and C06-M4 need a 'more than' or 'less than' number (Q3 to Q6).",
    "C06-M1 gives the key when the two digits are equal: draw numbers with different digits and a units digit that is not 0.",
    "On find-the-number items a mistaken model may give digits outside 0 to 9; draw only inputs where every listed model gives a two-digit number.",
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/5.2 SolvedEx.3" },
      stem: t`In a two-digit number, the digit in the tens place is $x$ and the digit in the units place is $y$. Which expression is the number obtained by interchanging its digits?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "rev" } },
      options: [
        { key: "A", text: t`$10x + y$`, correct: false, misconceptionId: "C06-M1", value: "10*x + y" },
        { key: "B", text: t`$y + x$`, correct: false, misconceptionId: "C06-M5", value: "x + y" },
        { key: "C", text: t`$yx$`, correct: false, misconceptionId: "C06-M6", value: "x*y" },
        { key: "D", text: t`$10y + x$`, correct: true, value: "x + 10*y" },
      ],
      solution: {
        steps: [
          t`The tens digit $x$ is worth $10x$ and the units digit $y$ is worth $y$, so the number is $10x + y$.`,
          t`Interchanging the digits puts $y$ in the tens place and $x$ in the units place.`,
          t`So the new number is $10y + x$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.2 Q7" },
      stem: t`A two-digit number has tens digit $x$ and units digit $y$. The number obtained by interchanging the digits exceeds the original number by $27$. Which expression in $x$ and $y$ equals $27$?`,
      verify: { kind: "value", inputs: {  }, params: { ask: "excess" } },
      options: [
        { key: "A", text: t`$9y - 9x$`, correct: true, value: "-9*x + 9*y" },
        { key: "B", text: t`$9x - 9y$`, correct: false, misconceptionId: "C06-M3", value: "9*x - 9*y" },
        { key: "C", text: t`$y - x$`, correct: false, misconceptionId: "C06-M5", value: "-x + y" },
        { key: "D", text: t`$yx - xy$`, correct: false, misconceptionId: "C06-M6", value: "0" },
      ],
      solution: {
        steps: [
          t`The number is $10x + y$; the number with the digits interchanged is $10y + x$.`,
          t`The reverse is the bigger one, so subtract the original from it, in a bracket: $(10y + x) - (10x + y)$.`,
          t`$= 10y + x - 10x - y$ $= 9y - 9x$.`,
          t`So $9y - 9x = 27$, which gives $y - x = 3$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q5" },
      stem: t`A two-digit number is $3$ more than $4$ times the sum of its digits. If $18$ is added to the number, the sum equals the number obtained by interchanging the digits. Find the number.`,
      verify: { kind: "value", inputs: { k: "4", c: "3", d: "18" }, params: { c1: "ksum", c2: "diff", phrase: "add" } },
      options: [
        { key: "A", text: t`$35$`, correct: true, value: "35" },
        { key: "B", text: t`$53$`, correct: false, misconceptionId: "C06-M1", value: "53" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C06-M2", value: "13" },
        { key: "D", text: t`$68$`, correct: false, misconceptionId: "C06-M4", value: "68" },
      ],
      solution: {
        steps: [
          t`Let the tens digit be $x$, the units digit $y$. First fact: $10x + y = 4(x + y) + 3$, so $6x - 3y = 3$, that is $2x - y = 1$ ... (I).`,
          t`Second fact: $10x + y + 18 = 10y + x$, so $9x - 9y = -18$, that is $x - y = -2$ ... (II).`,
          t`Subtract (II) from (I): $x = 3$. Then $3 - y = -2$, so $y = 5$.`,
          t`The number is $35$. Check: $4 \times 8 + 3 = 35$ and $35 + 18 = 53$, true.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Ex 5.2 Q7" },
      stem: t`A two-digit number is $3$ less than $4$ times the sum of its digits. The number obtained by interchanging the digits exceeds the original number by $45$. Find the number.`,
      verify: { kind: "value", inputs: { k: "4", c: "-3", d: "45" }, params: { c1: "ksum", c2: "diff", phrase: "exceeds" } },
      options: [
        { key: "A", text: t`$16$`, correct: false, misconceptionId: "C06-M4", value: "16" },
        { key: "B", text: t`$49$`, correct: true, value: "49" },
        { key: "C", text: t`$94$`, correct: false, misconceptionId: "C06-M1", value: "94" },
        { key: "D", text: t`$71$`, correct: false, misconceptionId: "C06-M2", value: "71" },
      ],
      solution: {
        steps: [
          t`Let the tens digit be $x$, the units digit $y$. First fact: $10x + y = 4(x + y) - 3$, so $6x - 3y = -3$, that is $2x - y = -1$ ... (I).`,
          t`Second fact: $(10y + x) - (10x + y) = 45$, so $9y - 9x = 45$, that is $-x + y = 5$ ... (II).`,
          t`Add (I) and (II): $x = 4$. Then $y = 5 + 4 = 9$.`,
          t`The number is $49$. Check: $4 \times 13 - 3 = 49$ and $94 - 49 = 45$, true.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/Prob Q10" },
      stem: t`The sum of a two-digit number and the number obtained by interchanging its digits is $132$. The number is $9$ less than $7$ times the sum of its digits. Find the number.`,
      verify: { kind: "value", inputs: { q: "132", k: "7", c: "-9" }, params: { c1: "rsum", c2: "ksum" } },
      options: [
        { key: "A", text: t`$75$`, correct: true, value: "75" },
        { key: "B", text: t`$57$`, correct: false, misconceptionId: "C06-M1", value: "57" },
        { key: "C", text: t`$93$`, correct: false, misconceptionId: "C06-M2", value: "93" },
        { key: "D", text: t`$21$`, correct: false, misconceptionId: "C06-M4", value: "21" },
      ],
      solution: {
        steps: [
          t`Let the tens digit be $x$, the units digit $y$. First fact: $(10x + y) + (10y + x) = 132$, so $11x + 11y = 132$, that is $x + y = 12$ ... (I).`,
          t`Second fact: $10x + y = 7(x + y) - 9$, so $3x - 6y = -9$, that is $x - 2y = -3$ ... (II).`,
          t`Subtract (II) from (I): $3y = 15$, so $y = 5$. Then $x = 12 - 5 = 7$.`,
          t`The number is $75$. Check: $7 \times 12 - 9 = 75$ and $75 + 57 = 132$, true.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/linear-equations-9/5.2 SolvedEx.3" },
      stem: t`A two-digit number is $3$ less than $7$ times the sum of its digits. The number exceeds the number obtained by interchanging its digits by $9$. Find the number.`,
      verify: { kind: "value", inputs: { k: "7", c: "-3", d: "-9" }, params: { c1: "ksum", c2: "diff", phrase: "exceeds" } },
      options: [
        { key: "A", text: t`$10$`, correct: false, misconceptionId: "C06-M2", value: "10" },
        { key: "B", text: t`$98$`, correct: false, misconceptionId: "C06-M4", value: "98" },
        { key: "C", text: t`$32$`, correct: true, value: "32" },
        { key: "D", text: t`$23$`, correct: false, misconceptionId: "C06-M1", value: "23" },
      ],
      solution: {
        steps: [
          t`Let the tens digit be $x$, the units digit $y$. First fact: $10x + y = 7(x + y) - 3$, so $3x - 6y = -3$, that is $x - 2y = -1$ ... (I).`,
          t`Second fact: $(10x + y) - (10y + x) = 9$, so $9x - 9y = 9$, that is $x - y = 1$ ... (II).`,
          t`Subtract (I) from (II): $y = 2$. Then $x = 1 + 2 = 3$.`,
          t`The number is $32$. Check: $7 \times 5 - 3 = 32$ and $32 - 23 = 9$, true.`,
        ],
      },
    },
  ],
};
