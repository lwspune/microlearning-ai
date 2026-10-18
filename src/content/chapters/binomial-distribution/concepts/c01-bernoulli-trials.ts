import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`Toss a coin $4$ times and count heads. Or pick $4$ students one by one from a class of $10$ boys and $10$ girls and count girls. Both are $4$ yes-or-no tries. **Why do mathematicians treat the coin and the class differently?**`,
    reveal: t`The coin never changes: every toss has $P(\text{head}) = \frac{1}{2}$. The class does: the first pick gives a girl with chance $\frac{10}{20}$, but after a girl is picked the next chance is $\frac{9}{19}$. Repeated tries with a fixed number of goes, two outcomes, no influence on each other and the same chance every time are called **Bernoulli trials**; the coin tosses are, the picks are not.`,
  },
  explanation: {
    intuition: [
      t`A **trial** is one go at an experiment: one toss, one throw of a die, one draw from a bag.`,
      t`Often we only ask one question of each go: did a six come up, is the bulb faulty?`,
      t`The outcome we are counting is called a **success**; every other outcome is a **failure**.`,
      t`A success need not be good news: a faulty bulb can be the success.`,
      t`Repeat the trial a fixed number of times, so that no go affects the next and the chance of success never changes.`,
      t`Such repeated trials are **Bernoulli trials**: they are what the binomial distribution counts.`,
    ],
    formal: [
      {
        title: "Success and failure",
        points: [
          t`A trial with exactly two outcomes, success and failure, is a **Bernoulli trial**.`,
          t`$p$ is the probability of success in one trial.`,
          t`$q$ is the probability of failure in one trial.`,
          t`The two outcomes cover everything, so $p + q = 1$, that is, $q = 1 - p$.`,
          t`$p$ can be any number between $0$ and $1$; it need not be $\frac{1}{2}$.`,
        ],
      },
      {
        title: "The four conditions",
        points: [
          t`Repeated trials are **Bernoulli trials** when all four of these hold.`,
          t`**(i)** The number of trials, $n$, is fixed and finite.`,
          t`**(ii)** Each trial has only two outcomes: success or failure.`,
          t`**(iii)** The trials are **independent**: the result of one does not change the chances in another.`,
          t`**(iv)** The probability of success, $p$, is the same in every trial.`,
          t`Throwing a die until a six appears fails (i): nobody knows in advance how many throws there will be.`,
        ],
      },
      {
        title: "Many results, two outcomes",
        points: [
          t`A die shows one of six faces, yet a throw can still be a Bernoulli trial.`,
          t`Decide which faces count: say, success is a number greater than $4$.`,
          t`Then the faces $5, 6$ are success and the faces $1, 2, 3, 4$ are failure.`,
          t`So $p = \frac{2}{6} = \frac{1}{3}$ and $q = \frac{2}{3}$.`,
          t`Grouping like this turns any experiment into a trial with exactly two outcomes.`,
        ],
      },
      {
        title: "With or without replacement",
        points: [
          t`An urn holds $7$ red and $9$ black balls; success is a red ball.`,
          t`**With replacement** means each ball is put back before the next draw.`,
          t`Then every draw has $P(\text{red}) = \frac{7}{16}$, so the draws are Bernoulli trials.`,
          t`**Without replacement**, the second draw has $P(\text{red}) = \frac{6}{15}$ if the first was red.`,
          t`It is $\frac{7}{15}$ if the first was black: $p$ changes, so these are not Bernoulli trials.`,
        ],
      },
      {
        title: "Reading off n and p",
        points: [
          t`$n$ is the number of trials: how many draws, throws or questions there are.`,
          t`$n$ is not the number of balls in the bag or faces on the die.`,
          t`$p$ comes from one trial: favourable results over all equally likely results.`,
          t`Guessing $8$ questions with $4$ choices each gives $n = 8$ and $p = \frac{1}{4}$.`,
          t`Check which outcome is the success: if a bomb hits with chance $0.9$ and success is a miss, $p = 0.1$.`,
        ],
      },
    ],
    worked: {
      prompt: t`A box holds $3$ green and $9$ yellow cards. Five cards are drawn one by one; each card is put back before the next draw. A success is a green card. Are these Bernoulli trials? If so, find $n$, $p$ and $q$.`,
      steps: [
        t`(i) There are exactly $5$ draws, so the number of trials is fixed: $n = 5$.`,
        t`(ii) Each card is green or not green, so each draw has two outcomes.`,
        t`(iii), (iv) Each card is put back, so the box is the same at every draw: the draws are independent and $P(\text{green})$ never changes.`,
        t`In one draw, $p = \frac{3}{12} = \frac{1}{4}$, and $q = 1 - \frac{1}{4} = \frac{3}{4}$.`,
      ],
      answer: t`Yes: they are Bernoulli trials with $n = 5$, $p = \frac{1}{4}$, $q = \frac{3}{4}$.`,
    },
    visualSpec: t`Drag a slider to draw balls with or without replacement and watch $P(\text{red})$ stay fixed or change after each draw.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Drawing without replacement still gives Bernoulli trials, because each draw is just success or failure.",
      remediation: t`Without replacement the box changes after every draw, so the chance of success changes and the draws affect each other. Bernoulli trials need the same $p$ every time, as when each ball is put back.`,
      fallback: { kind: "ext", topic: "conditional probability and independent events" },
    },
    {
      id: "C01-M2",
      mistake: t`In a Bernoulli trial success and failure are equally likely, so $p = \frac{1}{2}$.`,
      remediation: t`Two outcomes need not be equally likely: $p$ can be any number between $0$ and $1$. It only has to stay the same in every trial, like $p = \frac{1}{6}$ for a six on a die.`,
      fallback: { kind: "ext", topic: "probability of an event" },
    },
    {
      id: "C01-M3",
      mistake: "A trial with more than two possible results, like a die's six faces, can never be a Bernoulli trial.",
      remediation: "Group the results: those you are counting are success, all the rest are failure. A die throw is a Bernoulli trial for 'a six or not a six'.",
      fallback: { kind: "ext", topic: "events and sample spaces" },
    },
    {
      id: "C01-M4",
      mistake: "Repeating a trial until something happens still gives Bernoulli trials.",
      remediation: t`Bernoulli trials need the number of trials $n$ fixed in advance. 'Until a six appears' has no fixed $n$, so the throws are not Bernoulli trials.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`$n$ is the number of results of one trial (balls in the bag, outcomes of the dice, answer choices).`,
      remediation: t`$n$ counts the trials: how many times the experiment is repeated, such as the number of draws, throws or questions.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Takes $q$, the chance of failure, as $p$.`,
      remediation: t`$p$ is the chance, in one trial, of the outcome you are counting, the success. The chance of failure is $q = 1 - p$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C01-M2 is caught only where $p \ne \frac{1}{2}$: on a fair coin it gives the key.`,
    "C01-M3 is caught only where a trial's raw results number more than two and are grouped into success and failure.",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/8.1.1 SolvedEx.1" },
      stem: t`A bag holds $6$ red, $5$ black and $4$ white balls. Five balls are drawn one after another, and a ball drawn is **not** put back. A success is drawing a red ball. Are the five draws Bernoulli trials?`,
      verify: { kind: "value", inputs: { p: "6/15", k: "3", F: "1", T: "1", C: "0" }, params: { ask: "classify" } },
      options: [
        { key: "A", text: t`No: the chance of success changes from trial to trial`, correct: true, value: "p_changes" },
        { key: "B", text: t`Yes, they are Bernoulli trials`, correct: false, misconceptionId: "C01-M1", value: "yes_bernoulli" },
        { key: "C", text: t`No: success and failure are not equally likely`, correct: false, misconceptionId: "C01-M2", value: "unequal" },
        { key: "D", text: t`No: a trial has more than two outcomes`, correct: false, misconceptionId: "C01-M3", value: "many_outcomes" },
      ],
      solution: {
        steps: [
          t`The number of draws is fixed ($5$), and each ball is red or not red: two outcomes.`,
          t`The first draw gives red with $p = \frac{6}{15}$.`,
          t`The ball is not put back, so the second draw gives red with $\frac{5}{14}$ after a red, or $\frac{6}{14}$ after another colour.`,
          t`The chance of success changes from trial to trial, so these are not Bernoulli trials.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "authored" },
      stem: t`A die is thrown again and again until a six appears. A success is getting a six. Are the throws Bernoulli trials?`,
      verify: { kind: "value", inputs: { p: "1/6", k: "6", F: "0", T: "1", C: "1" }, params: { ask: "classify" } },
      options: [
        { key: "A", text: t`No: the number of trials is not fixed`, correct: true, value: "n_not_fixed" },
        { key: "B", text: t`Yes, they are Bernoulli trials`, correct: false, misconceptionId: "C01-M4", value: "yes_bernoulli" },
        { key: "C", text: t`No: success and failure are not equally likely`, correct: false, misconceptionId: "C01-M2", value: "unequal" },
        { key: "D", text: t`No: a trial has more than two outcomes`, correct: false, misconceptionId: "C01-M3", value: "many_outcomes" },
      ],
      solution: {
        steps: [
          t`Each throw is a six or not a six, and every throw has $p = \frac{1}{6}$, independently.`,
          t`But the throws go on until a six appears: there may be $1$ throw or $20$.`,
          t`The number of trials is not fixed, so these are not Bernoulli trials.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "authored" },
      stem: t`How many of these are Bernoulli trials? (i) A die is thrown $5$ times; success: an odd number. (ii) A coin is tossed $6$ times; success: a head. (iii) Four cards are drawn one by one from a deck of $52$, **without** replacement; success: a spade. (iv) A spinner with $5$ equal sectors, numbered $1$ to $5$, is spun $4$ times; success: a $5$.`,
      verify: { kind: "value", inputs: {  }, params: { ask: "count", s: ["1/2;6;1;1;1", "1/2;2;1;1;1", "1/4;4;1;1;0", "1/5;5;1;1;1"] } },
      options: [
        { key: "A", text: t`$2$`, correct: false, misconceptionId: "C01-M2", value: "2" },
        { key: "B", text: t`$1$`, correct: false, misconceptionId: "C01-M3", value: "1" },
        { key: "C", text: t`$3$`, correct: true, value: "3" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C01-M1", value: "4" },
      ],
      solution: {
        steps: [
          t`(i) $5$ throws, odd or not odd, $p = \frac{3}{6}$ every time: Bernoulli. (ii) $6$ tosses, $p = \frac{1}{2}$ every time: Bernoulli.`,
          t`(iii) Without replacement the chance of a spade changes: $\frac{13}{52}$, then $\frac{12}{51}$ or $\frac{13}{51}$. Not Bernoulli.`,
          t`(iv) $4$ spins, a $5$ or not, $p = \frac{1}{5}$ every time: Bernoulli.`,
          t`So $3$ of them are Bernoulli trials.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/Ex 8.1 Q.6" },
      stem: t`A bag has $10$ balls, each marked with one of the digits $0$ to $9$. Four balls are drawn one by one, **with** replacement. A success is drawing the ball marked $0$. For these Bernoulli trials, find $n$ and $p$.`,
      verify: { kind: "value", inputs: { n: "4", fav: "1", tot: "10" }, params: { ask: "np" } },
      options: [
        { key: "A", text: t`$n = 4,\ p = \frac{1}{10}$`, correct: true, value: "(4, 1/10)" },
        { key: "B", text: t`$n = 10,\ p = \frac{1}{10}$`, correct: false, misconceptionId: "C01-M5", value: "(10, 1/10)" },
        { key: "C", text: t`$n = 4,\ p = \frac{9}{10}$`, correct: false, misconceptionId: "C01-M6", value: "(4, 9/10)" },
        { key: "D", text: t`$n = 4,\ p = \frac{1}{2}$`, correct: false, misconceptionId: "C01-M2", value: "(4, 1/2)" },
      ],
      solution: {
        steps: [
          t`$n$ is the number of draws: $n = 4$.`,
          t`In one draw, $1$ of the $10$ equally likely balls is marked $0$, so $p = \frac{1}{10}$.`,
          t`So $n = 4$ and $p = \frac{1}{10}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/Ex 8.1 Q.2" },
      stem: t`A pair of dice is thrown $4$ times. A success is getting a doublet (both dice show the same number). For these Bernoulli trials, find $n$ and $p$.`,
      verify: { kind: "value", inputs: { n: "4", fav: "6", tot: "36" }, params: { ask: "np" } },
      options: [
        { key: "A", text: t`$n = 4,\ p = \frac{1}{6}$`, correct: true, value: "(4, 1/6)" },
        { key: "B", text: t`$n = 36,\ p = \frac{1}{6}$`, correct: false, misconceptionId: "C01-M5", value: "(36, 1/6)" },
        { key: "C", text: t`$n = 4,\ p = \frac{5}{6}$`, correct: false, misconceptionId: "C01-M6", value: "(4, 5/6)" },
        { key: "D", text: t`$n = 4,\ p = \frac{1}{2}$`, correct: false, misconceptionId: "C01-M2", value: "(4, 1/2)" },
      ],
      solution: {
        steps: [
          t`$n$ is the number of throws of the pair: $n = 4$.`,
          t`One throw of the pair has $36$ equally likely outcomes; $6$ of them are doublets: $(1, 1), \dots, (6, 6)$.`,
          t`So $p = \frac{6}{36} = \frac{1}{6}$, giving $n = 4$ and $p = \frac{1}{6}$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-12/binomial-12/Misc 8 Q.10" },
      stem: t`An examination has $10$ multiple-choice questions, each with $5$ suggested answers of which exactly one is correct. A candidate guesses every answer. A success is a correct answer. For these Bernoulli trials, find $n$ and $p$.`,
      verify: { kind: "value", inputs: { n: "10", fav: "1", tot: "5" }, params: { ask: "np" } },
      options: [
        { key: "A", text: t`$n = 10,\ p = \frac{4}{5}$`, correct: false, misconceptionId: "C01-M6", value: "(10, 4/5)" },
        { key: "B", text: t`$n = 10,\ p = \frac{1}{2}$`, correct: false, misconceptionId: "C01-M2", value: "(10, 1/2)" },
        { key: "C", text: t`$n = 10,\ p = \frac{1}{5}$`, correct: true, value: "(10, 1/5)" },
        { key: "D", text: t`$n = 5,\ p = \frac{1}{5}$`, correct: false, misconceptionId: "C01-M5", value: "(5, 1/5)" },
      ],
      solution: {
        steps: [
          t`Each question is one trial, so $n = 10$.`,
          t`A guess picks $1$ of the $5$ answers, and exactly one is correct, so $p = \frac{1}{5}$.`,
          t`So $n = 10$ and $p = \frac{1}{5}$.`,
        ],
      },
    },
  ],
};
