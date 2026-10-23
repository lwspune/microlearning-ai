import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`'If it is raining, then the ground is wet' is true. **Is 'If the ground is wet, then it is raining' true too?**`,
    reveal: t`Not always. The ground may be wet because someone watered the garden. Swapping the two parts makes a new statement, the **converse**, and it must be checked on its own.`,
  },
  explanation: {
    intuition: [
      t`A **statement** is a sentence that is either true or false.`,
      t`Many geometry facts can be written in the form 'If ..., then ...'.`,
      t`The part after 'if' is what we are given.`,
      t`The part after 'then' is what we must prove.`,
      t`Swapping these two parts gives a new statement, the **converse**.`,
      t`A converse may be true or false, so it is checked on its own.`,
    ],
    formal: [
      {
        title: "Conditional statements",
        points: [
          t`A **conditional statement** has the form 'If $p$, then $q$', where $p$ and $q$ are its two parts.`,
          t`Many statements are not written this way, but can be rewritten in it.`,
          t`Take 'The opposite angles of a parallelogram are congruent'.`,
          t`It is about a parallelogram, so that goes after 'if'.`,
          t`'If a quadrilateral is a parallelogram, then its opposite angles are congruent.'`,
        ],
      },
      {
        title: "Antecedent and consequent",
        points: [
          t`In 'If $p$, then $q$', the part $p$ is the **antecedent**: the given part.`,
          t`The part $q$ is the **consequent**: the part to be proved.`,
          t`In a proof, $p$ is written under 'Given' and $q$ under 'To prove'.`,
          t`Take 'If all sides of a triangle are congruent, then all its angles are congruent'.`,
          t`Given: all sides of the triangle are congruent.`,
          t`To prove: all angles of the triangle are congruent.`,
        ],
      },
      {
        title: "The converse",
        points: [
          t`The **converse** of 'If $p$, then $q$' is 'If $q$, then $p$'.`,
          t`Only the two parts swap places; no 'not' is added to either part.`,
          t`Statement: 'If two lines are parallel, then the corresponding angles are congruent.'`,
          t`Its converse: 'If the corresponding angles are congruent, then the two lines are parallel.'`,
          t`'If the lines are not parallel, then the angles are not congruent' is not the converse.`,
        ],
      },
      {
        title: "Is the converse true?",
        points: [
          t`A statement and its converse are two different statements.`,
          t`'If a number is divisible by $6$, then it is divisible by $3$' is true.`,
          t`Its converse, 'If a number is divisible by $3$, then it is divisible by $6$', is false.`,
          t`$15$ is divisible by $3$ but not by $6$: one such example, a **counterexample**, shows it is false.`,
          t`Some converses are true: 'If a number is divisible by $3$, then the sum of its digits is divisible by $3$.'`,
          t`A false statement can even have a true converse.`,
        ],
      },
      {
        title: "Indirect proof",
        points: [
          t`In an **indirect proof**, we suppose that the part to be proved is false.`,
          t`We reason from this supposition and the given part.`,
          t`We reach something impossible, called a **contradiction**.`,
          t`So the supposition was wrong, and the part to be proved is true.`,
          t`Example: a triangle cannot have two right angles.`,
          t`Suppose it did: the two right angles add up to $180^\circ$, leaving $0^\circ$ for the third angle, which is impossible.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write 'Angles in a linear pair are supplementary' in if-then form. Name its antecedent and consequent, write its converse, and say whether the converse is true.`,
      steps: [
        t`If-then form: 'If two angles form a linear pair, then they are supplementary.'`,
        t`Antecedent (given): the two angles form a linear pair. Consequent (to prove): they are supplementary.`,
        t`Converse, by swapping the parts: 'If two angles are supplementary, then they form a linear pair.'`,
        t`Draw an angle of $130^\circ$ and an angle of $50^\circ$ apart from each other.`,
        t`They are supplementary, as $130^\circ + 50^\circ = 180^\circ$, but they do not form a linear pair. So the converse is false.`,
      ],
      answer: t`Converse: 'If two angles are supplementary, then they form a linear pair.' It is false, though the statement is true.`,
    },
    visualSpec: t`A card reading 'If [p], then [q]' whose two boxes the student drags to swap, building the converse, then marks it true or false.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: "Reads the statement's parts the wrong way round, taking the 'then' part as the given part, so the 'converse' comes out as the statement itself.",
      remediation: t`The antecedent is what the statement assumes and the consequent is what it claims. Write the statement as 'If $p$, then $q$' first; its converse is 'If $q$, then $p$'.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M2",
      mistake: t`Puts 'not' into both parts and keeps them in their places: 'If not $p$, then not $q$'.`,
      remediation: t`The converse of 'If $p$, then $q$' only swaps the two parts: 'If $q$, then $p$'. It adds no 'not'.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M3",
      mistake: t`Swaps the two parts and also puts 'not' into both: 'If not $q$, then not $p$'.`,
      remediation: t`The converse swaps the two parts and changes nothing else: 'If $q$, then $p$', with no 'not'.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M4",
      mistake: "Thinks a converse is true exactly when the statement is true.",
      remediation: "A converse is a new statement, so check it on its own. A true statement can have a false converse, and a false statement can have a true one.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C04-M4 applies only to the items that ask whether the converse is true, and it gives the key whenever the converse has the same truth as the statement (C04-Q5), so it sits on C04-Q4 and C04-Q6.",
    "C04-M1 to C04-M3 apply to every item; on the 'given' and 'to prove' items they give the matching part of the student's wrong converse.",
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/basic-geometry-9/Ex 1.3 Q2(iii)" },
      stem: t`Which statement is the converse of 'The diagonals of a rectangle are congruent'?`,
      verify: { kind: "value", inputs: { a: "rectangle", b: "diagcong" }, params: { ask: "converse" } },
      options: [
        { key: "A", text: t`If a quadrilateral is not a rectangle, then its diagonals are not congruent.`, correct: false, misconceptionId: "C04-M2", value: "(not_rectangle, not_diagcong)" },
        { key: "B", text: t`If the diagonals of a quadrilateral are not congruent, then it is not a rectangle.`, correct: false, misconceptionId: "C04-M3", value: "(not_diagcong, not_rectangle)" },
        { key: "C", text: t`If the diagonals of a quadrilateral are congruent, then it is a rectangle.`, correct: true, value: "(diagcong, rectangle)" },
        { key: "D", text: t`If a quadrilateral is a rectangle, then its diagonals are congruent.`, correct: false, misconceptionId: "C04-M1", value: "(rectangle, diagcong)" },
      ],
      solution: {
        steps: [
          t`In if-then form: 'If a quadrilateral is a rectangle, then its diagonals are congruent.'`,
          t`Given part: the quadrilateral is a rectangle. Part to prove: its diagonals are congruent.`,
          t`The converse swaps them: 'If the diagonals of a quadrilateral are congruent, then it is a rectangle.'`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/basic-geometry-9/Prob Q8(ii)" },
      stem: t`Statement: 'If the sum of the measures of two angles is $90^\circ$, then they are complements of each other.' To prove its **converse**, what do we take as given (the antecedent)?`,
      verify: { kind: "value", inputs: { a: "sum90", b: "compl" }, params: { ask: "given" } },
      options: [
        { key: "A", text: t`The sum of the measures of the two angles is $90^\circ$.`, correct: false, misconceptionId: "C04-M1", value: "sum90" },
        { key: "B", text: t`The sum of the measures of the two angles is not $90^\circ$.`, correct: false, misconceptionId: "C04-M2", value: "not_sum90" },
        { key: "C", text: t`The two angles are not complements of each other.`, correct: false, misconceptionId: "C04-M3", value: "not_compl" },
        { key: "D", text: t`The two angles are complements of each other.`, correct: true, value: "compl" },
      ],
      solution: {
        steps: [
          t`In the statement, the given part is 'the sum of the measures is $90^\circ$'; the part to prove is 'they are complements'.`,
          t`The converse swaps them: 'If two angles are complements of each other, then the sum of their measures is $90^\circ$.'`,
          t`So to prove the converse, we take as given: the two angles are complements of each other.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/basic-geometry-9/Ex 1.3 Q2(i)" },
      stem: t`Statement: 'The alternate angles formed by two parallel lines and their transversal are congruent.' In the **converse** of this statement, what is the part to be proved (the consequent)?`,
      verify: { kind: "value", inputs: { a: "parallel", b: "altcong" }, params: { ask: "toprove" } },
      options: [
        { key: "A", text: t`The alternate angles formed by the transversal are not congruent.`, correct: false, misconceptionId: "C04-M2", value: "not_altcong" },
        { key: "B", text: t`The two lines are not parallel.`, correct: false, misconceptionId: "C04-M3", value: "not_parallel" },
        { key: "C", text: t`The two lines are parallel.`, correct: true, value: "parallel" },
        { key: "D", text: t`The alternate angles formed by the transversal are congruent.`, correct: false, misconceptionId: "C04-M1", value: "altcong" },
      ],
      solution: {
        steps: [
          t`In if-then form: 'If two lines are parallel, then the alternate angles formed by their transversal are congruent.'`,
          t`Converse: 'If the alternate angles formed by a transversal of two lines are congruent, then the two lines are parallel.'`,
          t`The part to be proved in the converse is: the two lines are parallel.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/basic-geometry-9/1.3 SolvedEx.2" },
      stem: t`Statement: 'A prime number greater than $2$ is odd.' This statement is true. Which is its **converse**, and is the converse true?`,
      verify: { kind: "value", inputs: { a: "primegt2", b: "odd" }, params: { ask: "truth" } },
      options: [
        { key: "A", text: t`If a number is odd, then it is a prime number greater than $2$. This is true.`, correct: false, misconceptionId: "C04-M4", value: "(odd, primegt2, T)" },
        { key: "B", text: t`If a number is a prime number greater than $2$, then it is odd. This is true.`, correct: false, misconceptionId: "C04-M1", value: "(primegt2, odd, T)" },
        { key: "C", text: t`If a number is not odd, then it is not a prime number greater than $2$. This is true.`, correct: false, misconceptionId: "C04-M3", value: "(not_odd, not_primegt2, T)" },
        { key: "D", text: t`If a number is odd, then it is a prime number greater than $2$. This is false.`, correct: true, value: "(odd, primegt2, F)" },
      ],
      solution: {
        steps: [
          t`In if-then form: 'If a number is a prime number greater than $2$, then it is odd.'`,
          t`Converse: 'If a number is odd, then it is a prime number greater than $2$.'`,
          t`$9$ is odd, but $9 = 3 \times 3$ is not prime. This counterexample shows the converse is false.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/basic-geometry-9/Prob Q8(i)" },
      stem: t`Statement: 'If the sum of the measures of the angles in a figure is $180^\circ$, then the figure is a triangle.' Which is its **converse**, and is the converse true?`,
      verify: { kind: "value", inputs: { a: "anglesum180", b: "triangle" }, params: { ask: "truth" } },
      options: [
        { key: "A", text: t`If a figure is not a triangle, then the sum of the measures of its angles is not $180^\circ$. This is true.`, correct: false, misconceptionId: "C04-M3", value: "(not_triangle, not_anglesum180, T)" },
        { key: "B", text: t`If a figure is a triangle, then the sum of the measures of its angles is $180^\circ$. This is true.`, correct: true, value: "(triangle, anglesum180, T)" },
        { key: "C", text: t`If the sum of the measures of the angles in a figure is $180^\circ$, then it is a triangle. This is true.`, correct: false, misconceptionId: "C04-M1", value: "(anglesum180, triangle, T)" },
        { key: "D", text: t`If the sum of the measures of the angles in a figure is not $180^\circ$, then it is not a triangle. This is true.`, correct: false, misconceptionId: "C04-M2", value: "(not_anglesum180, not_triangle, T)" },
      ],
      solution: {
        steps: [
          t`The converse swaps the parts: 'If a figure is a triangle, then the sum of the measures of its angles is $180^\circ$.'`,
          t`This is the angle sum property of a triangle, so the converse is true.`,
          t`Here the statement and its converse are both true.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/basic-geometry-9/Prob Q7(i)" },
      stem: t`Statement: 'Every rhombus is a square.' This statement is false. Which is its **converse**, and is the converse true?`,
      verify: { kind: "value", inputs: { a: "rhombus", b: "square" }, params: { ask: "truth" } },
      options: [
        { key: "A", text: t`If a quadrilateral is a square, then it is a rhombus. This is true.`, correct: true, value: "(square, rhombus, T)" },
        { key: "B", text: t`If a quadrilateral is a square, then it is a rhombus. This is false.`, correct: false, misconceptionId: "C04-M4", value: "(square, rhombus, F)" },
        { key: "C", text: t`If a quadrilateral is a rhombus, then it is a square. This is false.`, correct: false, misconceptionId: "C04-M1", value: "(rhombus, square, F)" },
        { key: "D", text: t`If a quadrilateral is not a rhombus, then it is not a square. This is true.`, correct: false, misconceptionId: "C04-M2", value: "(not_rhombus, not_square, T)" },
      ],
      solution: {
        steps: [
          t`In if-then form: 'If a quadrilateral is a rhombus, then it is a square.' It is false, as a rhombus need not have right angles.`,
          t`Converse: 'If a quadrilateral is a square, then it is a rhombus.'`,
          t`A **rhombus** is a quadrilateral with all four sides congruent, and a square has all four sides congruent.`,
          t`So every square is a rhombus: the converse is true, though the statement is false.`,
        ],
      },
    },
  ],
};
