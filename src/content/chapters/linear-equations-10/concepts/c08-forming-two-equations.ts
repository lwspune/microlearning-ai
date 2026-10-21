import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c08: Concept = {
  id: "C08",
  status: "approved",
  hook: {
    prompt: t`Two pens and one notebook cost ₹ 40. One pen and two notebooks cost ₹ 50. What does one pen cost?`,
    reveal: t`Let a pen cost ₹ $x$ and a notebook ₹ $y$. The two sentences give $2x + y = 40$ and $x + 2y = 50$. Eliminating $y$ gives $x = 10$: a pen costs ₹ 10 and a notebook ₹ 20. Two unknowns need two sentences, one equation each.`,
  },
  explanation: {
    intuition: [
      t`A word problem hides two unknown numbers: two prices, two ages, two digits.`,
      t`Give each unknown a letter, such as $x$ and $y$, and say what it stands for.`,
      t`Each sentence that links them becomes one equation.`,
      t`Two sentences give two **simultaneous equations**, which we solve by elimination.`,
      t`Then answer exactly what was asked: a length, a number or a fraction may be built from $x$ and $y$.`,
      t`Last, check the answer in the words of the problem, not just in the equations.`,
    ],
    formal: [
      {
        title: "Name the two unknowns",
        points: [
          t`Write a sentence like 'Let Manish's present age be $x$ years and Savita's be $y$ years'.`,
          t`Each letter stands for one number, with its unit: years, ₹, cm, kg.`,
          t`If the problem asks for something else, keep it in mind: you will build it at the end.`,
          t`Swapping which letter means what is a common slip, so write the meanings down.`,
        ],
      },
      {
        title: "Phrases into equations",
        points: [
          t`'$A$ is $3$ more than $B$' means $A = B + 3$: add to the smaller one.`,
          t`'$A$ is $3$ less than $B$' means $A = B - 3$.`,
          t`'Two numbers differ by $3$' means greater $-$ smaller $= 3$.`,
          t`'$A$ is $4$ times $B$' means $A = 4B$: the $4$ multiplies $B$, the one after 'times'.`,
          t`A ratio $x : y = 5 : 3$ means $\frac{x}{y} = \frac{5}{3}$, so $3x = 5y$.`,
        ],
      },
      {
        title: "Changes happen to both",
        points: [
          t`'$5$ years ago' makes **both** ages $5$ less: $x - 5$ and $y - 5$.`,
          t`'Both reduced by $6$' changes the numerator and the denominator: $x - 6$ and $y - 6$.`,
          t`If one student moves from group A to group B, A becomes $x - 1$ and B becomes $y + 1$.`,
          t`Then write the comparison with the changed amounts: $x - 5 = 4(y - 5)$.`,
        ],
      },
      {
        title: "Digits, fractions and shapes",
        points: [
          t`A two-digit number with tens digit $y$ and units digit $x$ is $10y + x$.`,
          t`With its digits interchanged it becomes $10x + y$.`,
          t`A fraction with numerator $x$ and denominator $y$ is $\frac{x}{y}$.`,
          t`In a rectangle the **opposite sides** are equal, so their expressions are equal.`,
          t`The **perimeter** adds every side: a rectangle's is $2(l + b)$.`,
          t`An **isosceles** triangle has two equal (congruent) sides, so its perimeter is $2s + b$.`,
        ],
      },
      {
        title: "Answer what is asked",
        points: [
          t`Solve the two equations by elimination to get $x$ and $y$.`,
          t`If the question asks for a length, a number or a fraction, put $x$ and $y$ into it.`,
          t`Give each value to the right name: Manish's age, the base, the side $AB$.`,
          t`Check both sentences with your answer before you write it down.`,
        ],
      },
    ],
    worked: {
      prompt: t`A two-digit number and the number with its digits interchanged add up to $143$. The units digit is $3$ more than the tens digit. Find the number.`,
      steps: [
        t`Let the units digit be $x$ and the tens digit $y$. The number is $10y + x$; interchanged it is $10x + y$.`,
        t`They add up to $143$: $11x + 11y = 143$, so $x + y = 13$ ... (I)`,
        t`The units digit is $3$ more than the tens digit: $x = y + 3$, so $x - y = 3$ ... (II)`,
        t`Adding (I) and (II): $2x = 16$, so $x = 8$. From (I), $y = 5$.`,
        t`The number is $10y + x = 58$. Check: $58 + 85 = 143$ and $8 = 5 + 3$.`,
      ],
      answer: t`$58$`,
    },
    visualSpec: t`Drag a slider for each unknown and watch both sentences of the story turn true at one pair.`,
  },
  misconceptions: [
    {
      id: "C08-M1",
      mistake: "Turns a 'more than', 'less than', 'differ by' or 'years ago' the wrong way, so the constant gets the wrong sign.",
      remediation: t`'$A$ is $4$ more than $B$' is $A = B + 4$, and '$5$ years ago' subtracts $5$. Read which quantity is bigger before you write the sign.`,
      fallback: { kind: "ext", topic: "turning sentences into equations (Std IX Linear Equations in Two Variables)" },
    },
    {
      id: "C08-M2",
      mistake: "Applies a change ('5 years ago', 'both reduced by 6') to only one of the two quantities.",
      remediation: t`A change in the story happens to both quantities: $5$ years ago both ages were $5$ less. Change both before you compare them.`,
      fallback: { kind: "ext", topic: "turning sentences into equations (Std IX Linear Equations in Two Variables)" },
    },
    {
      id: "C08-M3",
      mistake: "Puts the 'times' (or 'twice') on the wrong quantity.",
      remediation: t`In '$A$ is $4$ times $B$' the $4$ multiplies $B$, the quantity after 'times': $A = 4B$.`,
      fallback: { kind: "ext", topic: "turning sentences into equations (Std IX Linear Equations in Two Variables)" },
    },
    {
      id: "C08-M4",
      mistake: "Stops at the values of x and y when the question asks for quantities built from them.",
      remediation: t`$x$ and $y$ are only tools. Put them back into what the question asks for, such as the sides $AB$ and $BC$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C08-M5",
      mistake: "Gives each value to the other name: the pair is right but swapped.",
      remediation: "Go back to your 'Let ...' sentence and give each value to the quantity its letter stands for.",
      fallback: { kind: "none" },
    },
    {
      id: "C08-M6",
      mistake: "Equates sides of the rectangle that meet at a corner instead of opposite sides.",
      remediation: t`In a rectangle the opposite sides are equal: $AB = CD$ and $BC = DA$. Sides that meet at a corner need not be equal.`,
      fallback: { kind: "ext", topic: "properties of a rectangle (Std IX Quadrilaterals)" },
    },
  ],
  engineNotes: [
    "C08-M3 and C08-M5 give the same pair whenever the 'times' sentence is the only one that tells the quantities apart (ages, ratios), so no item lists both there; Q3 tags C08-M3.",
  ],
  items: [
    {
      id: "C08-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2019/Q3(B)(iii)" },
      stem: t`Two numbers differ by $3$. The sum of the greater number and twice the smaller number is $15$. Find the smaller number.`,
      verify: { kind: "value", inputs: { d: "3", t: "15" }, params: { story: "numbers" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$6$`, correct: false, misconceptionId: "C08-M1", value: "6" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C08-M3", value: "3" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C08-M5", value: "7" },
      ],
      solution: {
        steps: [
          t`Let the greater number be $x$ and the smaller $y$. They differ by $3$: $x - y = 3$ ... (I)`,
          t`Greater plus twice the smaller: $x + 2y = 15$ ... (II)`,
          t`Subtract (I) from (II): $3y = 12$, so $y = 4$ and $x = 7$.`,
          t`The smaller number is $4$. Check: $7 + 2 \times 4 = 15$.`,
        ],
      },
    },
    {
      id: "C08-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q3(B)(ii)" },
      stem: t`The denominator of a fraction is $4$ more than twice its numerator. If both the numerator and the denominator are reduced by $6$, the denominator becomes $4$ times the numerator. Find the fraction.`,
      verify: { kind: "value", inputs: { m: "2", a: "4", b: "6", c: "4" }, params: { story: "fraction" } },
      options: [
        { key: "A", text: t`$\frac{7}{10}$`, correct: false, misconceptionId: "C08-M1", value: "7/10" },
        { key: "B", text: t`$\frac{14}{32}$`, correct: false, misconceptionId: "C08-M2", value: "7/16" },
        { key: "C", text: t`$\frac{26}{11}$`, correct: false, misconceptionId: "C08-M5", value: "26/11" },
        { key: "D", text: t`$\frac{11}{26}$`, correct: true, value: "11/26" },
      ],
      solution: {
        steps: [
          t`Let the fraction be $\frac{x}{y}$. The denominator is $4$ more than twice the numerator: $y = 2x + 4$ ... (I)`,
          t`Both reduced by $6$: $y - 6 = 4(x - 6)$, so $y = 4x - 18$ ... (II)`,
          t`From (I) and (II): $2x + 4 = 4x - 18$, so $2x = 22$, $x = 11$ and $y = 26$.`,
          t`The fraction is $\frac{11}{26}$. Check: $\frac{5}{20}$, and $20 = 4 \times 5$.`,
        ],
      },
    },
    {
      id: "C08-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q3(B)(iii)" },
      stem: t`The sum of the present ages of Manish and Savita is $35$ years. Manish's age $5$ years ago was $4$ times Savita's age at that time. Find their present ages.`,
      verify: { kind: "value", inputs: { s: "35", k: "5", r: "4" }, params: { story: "ages" } },
      options: [
        { key: "A", text: t`Manish $31$ years, Savita $4$ years`, correct: false, misconceptionId: "C08-M1", value: "(31, 4)" },
        { key: "B", text: t`Manish $29$ years, Savita $6$ years`, correct: false, misconceptionId: "C08-M2", value: "(29, 6)" },
        { key: "C", text: t`Manish $10$ years, Savita $25$ years`, correct: false, misconceptionId: "C08-M3", value: "(10, 25)" },
        { key: "D", text: t`Manish $25$ years, Savita $10$ years`, correct: true, value: "(25, 10)" },
      ],
      solution: {
        steps: [
          t`Let Manish be $x$ years and Savita $y$ years now: $x + y = 35$ ... (I)`,
          t`$5$ years ago they were $x - 5$ and $y - 5$: $x - 5 = 4(y - 5)$, so $x - 4y = -15$ ... (II)`,
          t`Subtract (II) from (I): $5y = 50$, so $y = 10$ and $x = 25$.`,
          t`Manish is $25$ years and Savita $10$ years. Check: $20 = 4 \times 5$.`,
        ],
      },
    },
    {
      id: "C08-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2022/Q4(iii)" },
      stem: t`The perimeter of an isosceles triangle is $50$ cm. Each of its congruent sides is $10$ cm less than twice its base. Find the lengths of all its sides.`,
      verify: { kind: "value", inputs: { p: "50", k: "10" }, params: { story: "triangle" } },
      options: [
        { key: "A", text: t`$15$ cm, $15$ cm and $20$ cm`, correct: false, misconceptionId: "C08-M3", value: "(15, 20)" },
        { key: "B", text: t`$14$ cm, $14$ cm and $18$ cm`, correct: false, misconceptionId: "C08-M5", value: "(14, 18)" },
        { key: "C", text: t`$18$ cm, $18$ cm and $14$ cm`, correct: true, value: "(18, 14)" },
        { key: "D", text: t`$22$ cm, $22$ cm and $6$ cm`, correct: false, misconceptionId: "C08-M1", value: "(22, 6)" },
      ],
      solution: {
        steps: [
          t`Let each congruent side be $x$ cm and the base $y$ cm. Perimeter: $2x + y = 50$ ... (I)`,
          t`Each side is $10$ less than twice the base: $x = 2y - 10$ ... (II)`,
          t`Put (II) in (I): $4y - 20 + y = 50$, so $5y = 70$, $y = 14$ and $x = 18$.`,
          t`The sides are $18$ cm, $18$ cm and $14$ cm. Check: $18 + 18 + 14 = 50$.`,
        ],
      },
    },
    {
      id: "C08-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-linear-equations-10/Ex 1.5 Q.2" },
      stem: t`$\square ABCD$ is a rectangle with $AB = 2x + y + 8$, $BC = x + 4$, $CD = 4x - y$ and $DA = 2y$, as in the figure. Find the lengths $AB$ and $BC$.`,
      figure: {
        alt: "Rectangle ABCD. Side AB at the top is 2x + y + 8, side BC on the right is x + 4, side CD at the bottom is 4x − y and side DA on the left is 2y.",
        axes: "none",
        view: { x: [-3, 9], y: [-1.4, 4.4] },
        elements: [
          { kind: "segment", from: [0, 3], to: [6, 3] },
          { kind: "segment", from: [6, 3], to: [6, 0] },
          { kind: "segment", from: [6, 0], to: [0, 0] },
          { kind: "segment", from: [0, 0], to: [0, 3] },
          { kind: "rightAngle", at: [0, 0], from: 0 },
          { kind: "rightAngle", at: [6, 0], from: 90 },
          { kind: "rightAngle", at: [6, 3], from: 180 },
          { kind: "rightAngle", at: [0, 3], from: 270 },
          { kind: "point", at: [0, 3], label: "A", labelAt: "nw" },
          { kind: "point", at: [6, 3], label: "B", labelAt: "ne" },
          { kind: "point", at: [6, 0], label: "C", labelAt: "se" },
          { kind: "point", at: [0, 0], label: "D", labelAt: "sw" },
          { kind: "label", at: [3, 3], label: "2x + y + 8", labelAt: "n" },
          { kind: "label", at: [6, 1.5], label: "x + 4", labelAt: "e" },
          { kind: "label", at: [3, 0], label: "4x − y", labelAt: "s" },
          { kind: "label", at: [0, 1.5], label: "2y", labelAt: "w" },
        ],
      },
      verify: { kind: "value", inputs: { AB: "2*x + y + 8", BC: "x + 4", CD: "4*x - y", DA: "2*y" }, params: { story: "rectangle" } },
      options: [
        { key: "A", text: t`$AB = 64$, $BC = 16$`, correct: false, misconceptionId: "C08-M6", value: "(64, 16)" },
        { key: "B", text: t`$AB = 40$, $BC = 16$`, correct: true, value: "(40, 16)" },
        { key: "C", text: t`$AB = 12$, $BC = 8$`, correct: false, misconceptionId: "C08-M4", value: "(12, 8)" },
        { key: "D", text: t`$AB = 16$, $BC = 40$`, correct: false, misconceptionId: "C08-M5", value: "(16, 40)" },
      ],
      solution: {
        steps: [
          t`Opposite sides are equal. $AB = CD$: $2x + y + 8 = 4x - y$, so $x - y = 4$ ... (I)`,
          t`$BC = DA$: $x + 4 = 2y$, so $x - 2y = -4$ ... (II)`,
          t`Subtract (II) from (I): $y = 8$, then $x = 12$.`,
          t`$AB = 24 + 8 + 8 = 40$ and $BC = 12 + 4 = 16$.`,
        ],
      },
    },
  ],
};
