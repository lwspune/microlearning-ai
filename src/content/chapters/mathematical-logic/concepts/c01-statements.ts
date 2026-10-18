import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`Three sentences: '$7$ is a prime number.' '$7$ is an even number.' '$x + 2 = 9$.' **Which of them can you mark T or F right now?**`,
    reveal: t`The first two. $7$ is prime, so the first is true (T); $7$ is odd, so the second is false (F). Both are **statements**. The third is true only when $x = 7$, so you can't mark it until you know $x$: it is not a statement.`,
  },
  explanation: {
    intuition: [
      t`Some sentences tell you something, and you can check whether it is right.`,
      t`'Pune is in Maharashtra' is right: we say it is **true**.`,
      t`'The sun rises in the west' is wrong: we say it is **false**.`,
      t`'Shut the window!' and 'Are you hungry?' tell you nothing, so there is nothing to check.`,
      t`'$x + 1 = 4$' can't be checked until you know what $x$ is.`,
      t`Logic works only with sentences that are surely true or surely false.`,
    ],
    formal: [
      {
        title: "What a statement is",
        points: [
          t`A **declarative** sentence is one that tells something, like 'The sun sets in the west'.`,
          t`A **statement** is a declarative sentence that is either true or false, but not both.`,
          t`Its **truth value** is T when it is true and F when it is false.`,
          t`'$3 + 4 = 7$' is a statement, with truth value T.`,
          t`'$2 + 2 = 5$' is false, but it is still a statement, with truth value F.`,
        ],
      },
      {
        title: "Questions and commands",
        points: [
          t`A question, an **interrogative** sentence, asks something: 'What is your name?'`,
          t`A command or request, an **imperative** sentence, asks for an action: 'Open the window.'`,
          t`An **exclamation**, like 'How beautiful the sky is!', expresses a feeling.`,
          t`None of these tells anything, so none is true or false: none is a statement.`,
          t`Even 'Is $9$ a square number?' is not a statement: it asks, it does not tell.`,
          t`Its answer, '$9$ is a square number', is a statement, with truth value T.`,
        ],
      },
      {
        title: "Open sentences",
        points: [
          t`An **open sentence** has a variable like $x$, or a word like 'she', whose value is not given.`,
          t`'$x + 2 = 5$' is true when $x = 3$ but false when $x = 4$.`,
          t`Its truth depends on $x$, so it is not a statement.`,
          t`'She is a doctor' is the same: its truth depends on who 'she' is.`,
          t`Being true for some value of $x$ does not make a sentence a statement.`,
        ],
      },
      {
        title: "Fixed or covered variables",
        points: [
          t`A sentence with $x$ is a statement once its truth no longer depends on $x$.`,
          t`'$2x + 1 = 7$, when $x = 3$' fixes $x$: a statement, with truth value T.`,
          t`'$(x + 1)^2 = x^2 + 2x + 1$ for all real $x$' covers every $x$: a statement, T.`,
          t`'If $x$ is a natural number, then $x > 5$' fails for $x = 1$: a statement, F.`,
          t`So ask: is its truth fixed? If it is, the sentence is a statement.`,
        ],
      },
    ],
    worked: {
      prompt: t`Which of these are statements? Give each statement's truth value. (i) $4! = 24$. (ii) Can you speak in Marathi? (iii) It rains heavily. (iv) $2 + 3 > 7$.`,
      steps: [
        t`(i) $4! = 4 \times 3 \times 2 \times 1 = 24$, so it is true: a statement, truth value T.`,
        t`(ii) It is a question: it asks, so it is neither true nor false. Not a statement.`,
        t`(iii) Its truth depends on the time and the place: an open sentence, not a statement.`,
        t`(iv) $2 + 3 = 5$, and $5 > 7$ is false. A false sentence is still a statement: truth value F.`,
      ],
      answer: t`(i) and (iv) are statements: (i) has truth value T and (iv) has truth value F.`,
    },
    visualSpec: t`Sentence cards to drag into three bins, T, F and 'not a statement'; a card with $x$ asks for a value of $x$ and shows its truth changing.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Thinks a statement must be true, so a false sentence such as $5 + 4 = 13$ is not a statement.`,
      remediation: "A statement is a sentence that is either true or false. A false sentence is still a statement; its truth value is F.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: t`Thinks any sentence with a variable is an open sentence, even when $x$ is fixed ('when $x = 7$') or covered ('for all $\theta$').`,
      remediation: t`A sentence is open only when its truth depends on an unknown value. If $x$ is given, or the claim is about every $x$, its truth is fixed: it is a statement.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Thinks a sentence with $x$ is a true statement because some value of $x$ makes it true.`,
      remediation: t`One value of $x$ that works does not fix the truth. An open sentence is not a statement, and a claim about every $x$ is false if one value fails.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: t`Thinks a question with a definite answer, such as 'Is $2$ an even number?', is a statement.`,
      remediation: t`A question asks; it does not tell, so it is neither true nor false. Only its answer, '$2$ is an even number', is a statement.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`Each model agrees with the key on sentences outside its belief: C01-M1 differs only when a false statement is present, C01-M2 only when a statement has a fixed or covered variable, C01-M3 only with an open sentence (or a false claim about every $x$), C01-M4 only with a question that has a definite answer. A diagnosing item must contain such a sentence.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.1 Ex 1.1 Q.1 (ii)" },
      stem: t`Which of these sentences are statements? (i) $5 + 4 = 13$. (ii) $x - 3 = 14$. (iii) $\cos^2\theta - \sin^2\theta = \cos 2\theta$ for all $\theta \in R$. (iv) Close the door.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "set", s: ["decl:none:F", "decl:free", "decl:bound:T", "cmd"] } },
      options: [
        { key: "A", text: t`(i) and (iii) only`, correct: true, value: "{1, 3}" },
        { key: "B", text: t`(iii) only`, correct: false, misconceptionId: "C01-M1", value: "{3}" },
        { key: "C", text: t`(i) only`, correct: false, misconceptionId: "C01-M2", value: "{1}" },
        { key: "D", text: t`(i), (ii) and (iii) only`, correct: false, misconceptionId: "C01-M3", value: "{1, 2, 3}" },
      ],
      solution: {
        steps: [
          t`(i) tells something, and $5 + 4 = 9$, so it is false: still a statement, truth value F.`,
          t`(ii) is true only when $x = 17$: an open sentence, not a statement.`,
          t`(iii) is an identity for every $\theta$, so its truth is fixed: a statement, truth value T. (iv) is a command.`,
          t`So the statements are (i) and (iii) only.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/Misc Q.2 (vi)" },
      stem: t`The sentence 'If $x$ is a whole number, then $x + 6 = 0$' is:`,
      verify: { kind: "value", inputs: {  }, params: { ask: "classify", s: ["decl:bound:F"] } },
      options: [
        { key: "A", text: t`A statement, with truth value F`, correct: true, value: "false_statement" },
        { key: "B", text: t`Not a statement, because it is false`, correct: false, misconceptionId: "C01-M1", value: "not_statement_false" },
        { key: "C", text: t`Not a statement: it is an open sentence`, correct: false, misconceptionId: "C01-M2", value: "open_sentence" },
        { key: "D", text: t`A statement, with truth value T`, correct: false, misconceptionId: "C01-M3", value: "true_statement" },
      ],
      solution: {
        steps: [
          t`It has $x$, but 'if $x$ is a whole number' makes it a claim about every whole number.`,
          t`Take $x = 0$: it is whole, but $0 + 6 = 6 \ne 0$. ($x = -6$ is not whole.)`,
          t`So the claim fails and its truth is fixed: a statement, with truth value F.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.1 Solved Q.1 (ix)" },
      stem: t`Which of these sentences are statements? (i) He is honest. (ii) The square of a prime number is a prime number. (iii) Is $2$ an even number? (iv) Every real number is a complex number.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "set", s: ["decl:free", "decl:none:F", "ask:fact", "decl:none:T"] } },
      options: [
        { key: "A", text: t`(i), (ii) and (iv) only`, correct: false, misconceptionId: "C01-M3", value: "{1, 2, 4}" },
        { key: "B", text: t`(ii), (iii) and (iv) only`, correct: false, misconceptionId: "C01-M4", value: "{2, 3, 4}" },
        { key: "C", text: t`(ii) and (iv) only`, correct: true, value: "{2, 4}" },
        { key: "D", text: t`(iv) only`, correct: false, misconceptionId: "C01-M1", value: "{4}" },
      ],
      solution: {
        steps: [
          t`(i) depends on who 'he' is: an open sentence, not a statement.`,
          t`(ii): $2^2 = 4$ is not prime, so it is false, but still a statement. (iii) asks, so it is not a statement.`,
          t`(iv) is true, since every real $a$ is $a + 0i$. So the statements are (ii) and (iv) only.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.1 Ex 1.1 Q.1 (xiii)" },
      stem: t`How many of these sentences are statements? (i) Zero is a complex number. (ii) $x^2 = x$. (iii) All real numbers are whole numbers. (iv) $\sqrt{2}$ is a rational number. (v) $x^2 - 6x - 7 = 0$, when $x = 7$.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "count", s: ["decl:none:T", "decl:free", "decl:none:F", "decl:none:F", "decl:bound:T"] } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C01-M1", value: "2" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C01-M2", value: "3" },
        { key: "D", text: t`$5$`, correct: false, misconceptionId: "C01-M3", value: "5" },
      ],
      solution: {
        steps: [
          t`(i) is T, as $0 = 0 + 0i$. (iii) is F, as $\frac{1}{2}$ is real but not whole. (iv) is F: $\sqrt{2}$ is irrational.`,
          t`(v) fixes $x = 7$, and $49 - 42 - 7 = 0$: a statement, truth value T.`,
          t`(ii) is true only for $x = 0$ or $x = 1$: an open sentence. So $4$ sentences are statements.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/logic-12/1.1 Solved Q.1 (iv)" },
      stem: t`Which of these sentences are statements? (i) The Moon revolves around the earth. (ii) The quadratic equation $x^2 - 5x + 6 = 0$ has $2$ real roots. (iii) Is $25$ a perfect square? (iv) $6 \times 4 = 25$. (v) Please, sit down.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "set", s: ["decl:none:T", "decl:bound:T", "ask:fact", "decl:none:F", "cmd"] } },
      options: [
        { key: "A", text: t`(i), (ii) and (iv) only`, correct: true, value: "{1, 2, 4}" },
        { key: "B", text: t`(i) and (ii) only`, correct: false, misconceptionId: "C01-M1", value: "{1, 2}" },
        { key: "C", text: t`(i) and (iv) only`, correct: false, misconceptionId: "C01-M2", value: "{1, 4}" },
        { key: "D", text: t`(i), (ii), (iii) and (iv) only`, correct: false, misconceptionId: "C01-M4", value: "{1, 2, 3, 4}" },
      ],
      solution: {
        steps: [
          t`(i) is T. (ii) is T: $x^2 - 5x + 6 = (x - 2)(x - 3)$ has roots $2$ and $3$.`,
          t`In (ii), $x$ only names the equation, so its truth is fixed. (iv) is false, as $6 \times 4 = 24$, but still a statement.`,
          t`(iii) asks and (v) requests: not statements. So the statements are (i), (ii) and (iv) only.`,
        ],
      },
    },
  ],
};
