import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c21: Concept = {
  id: "C21",
  status: "draft",
  hook: {
    prompt: t`₹ 1,000 earns $10$ percent simple interest. The interest after $1$, $2$ and $3$ years is ₹ 100, ₹ 200 and ₹ 300. Meera says the interest after $3$ years is $100 + 200 + 300 = 600$ rupees. **Is she right?**`,
    reveal: t`No. ₹ 300 is the interest after $3$ years: it already counts all three years, ₹ 100 each. Adding the list counts the early years again. The question wants one term, $t_3 = 300$, not the total $S_3$.`,
  },
  explanation: {
    intuition: [
      t`Many everyday amounts change by the same step: savings, salaries, seats in rows, loan instalments.`,
      t`Such amounts, listed in order, form an **A.P.**: each one is the last plus a fixed $d$.`,
      t`The first amount in the list is $a$; the fixed change each time is $d$.`,
      t`Some questions ask for **one** amount, such as this month's saving: that is a term $t_n$.`,
      t`Others ask for a **total**, such as all the savings so far: that is a sum $S_n$.`,
      t`So read the question twice: find $a$ and $d$, then decide between $t_n$ and $S_n$.`,
    ],
    formal: [
      {
        title: "Find a, d and n",
        points: [
          t`$a$ is the amount for the first year, month, day or row.`,
          t`$d$ is the change each time: positive when it grows, negative when it goes down.`,
          t`'Each instalment ₹ 25 less than the one before' means $d = -25$.`,
          t`$n$ counts the terms, so count both ends.`,
          t`From 2011 to 2018 is $2018 - 2011 + 1 = 8$ years, not $7$.`,
        ],
      },
      {
        title: "One term or a total?",
        points: [
          t`'In the $10$th month', 'in the year 2025', 'in the $8$th row' ask for **one** term.`,
          t`For one term use $t_n = a + (n - 1)d$.`,
          t`'Total', 'in all', 'altogether', 'in the first $7$ years' ask for a **sum**.`,
          t`For a sum use $S_n = \frac{n}{2}[2a + (n - 1)d]$ or $S_n = \frac{n}{2}(a + l)$.`,
          t`Anvar saves ₹ 200, ₹ 250, ₹ 300, ... a month: $a = 200$, $d = 50$.`,
          t`He saves ₹ 1,000 in month $n$ when $200 + (n - 1)50 = 1000$, so $n = 17$.`,
        ],
      },
      {
        title: "Loans repaid in instalments",
        points: [
          t`An **instalment** is one part of a loan paid back at a time.`,
          t`The instalments together repay the loan **plus** the interest: that total is $S_n$.`,
          t`Each instalment less than the one before means $d$ is negative.`,
          t`Example: ₹ 1,000 plus ₹ 140 interest in $12$ instalments, each ₹ 10 less.`,
          t`$1140 = \frac{12}{2}[2a + 11(-10)]$ gives $190 = 2a - 110$, so $a = 150$.`,
          t`The last instalment is $t_{12} = 150 - 110 = 40$; check: $6(150 + 40) = 1140$.`,
        ],
      },
      {
        title: "Simple interest year by year",
        points: [
          t`**Simple interest** for $N$ years is $\frac{P \times R \times N}{100}$, with principal $P$ and rate $R$ percent.`,
          t`The interest after $1, 2, 3, \ldots$ years is $\frac{PR}{100}$, $\frac{2PR}{100}$, $\frac{3PR}{100}$, and so on.`,
          t`This is an A.P. with $a = d = \frac{PR}{100}$, one year's interest.`,
          t`The interest after $N$ years is the term $t_N$: it already includes every earlier year.`,
          t`Adding the terms counts the early years again, so don't use $S_N$ here.`,
        ],
      },
    ],
    worked: {
      prompt: t`A company made $600$ mixers in its $3$rd year and $700$ in its $7$th year, with the same growth every year. Find the production in the $10$th year and the total production in the first $7$ years.`,
      steps: [
        t`The same growth each year makes an A.P.: $t_3 = a + 2d = 600$ and $t_7 = a + 6d = 700$.`,
        t`Subtract: $4d = 100$, so $d = 25$, and $a = 600 - 50 = 550$.`,
        t`'In the $10$th year' asks for one term: $t_{10} = 550 + 9(25) = 775$.`,
        t`'In the first $7$ years' asks for a total: $S_7 = \frac{7}{2}(550 + 700)$.`,
        t`$S_7 = \frac{7}{2} \times 1250 = 4375$.`,
      ],
      answer: t`$775$ mixers in the $10$th year; $4375$ mixers in all in the first $7$ years.`,
    },
    visualSpec: t`Drag $n$ along a row of monthly saving bars: the chosen bar's height is $t_n$, and all the bars up to it together make $S_n$.`,
  },
  misconceptions: [
    {
      id: "C21-M1",
      mistake: t`Mixes up one term with the total: adds the terms when one year's amount is asked, or gives $t_n$ when the total is asked`,
      remediation: t`One year's, month's or row's amount is a term, $t_n = a + (n - 1)d$. 'Total', 'in all' or 'so far' asks for $S_n$. Simple interest after $N$ years is already a total, so it is $t_N$.`,
      fallback: { kind: "concept", id: "C15" },
    },
    {
      id: "C21-M2",
      mistake: "Counts the years as last minus first (2020 − 2010 = 10), leaving out one end",
      remediation: t`Count both ends: from 2010 to 2020 is $2020 - 2010 + 1 = 11$ years, so 2020 is the $11$th term. Likewise 1st January to 31st December of a leap year is $366$ days.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C21-M3",
      mistake: t`Uses $n$ where $n - 1$ belongs: $t_n = a + nd$, and $S_n = \frac{n}{2}[2a + nd]$`,
      remediation: t`The first term already uses up one place, so only $n - 1$ steps of $d$ follow it: $t_n = a + (n - 1)d$ and $S_n = \frac{n}{2}[2a + (n - 1)d]$.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C21-M4",
      mistake: "Mixes up the principal with the interest: repays only the sum borrowed, or adds the principal to the interest asked for",
      remediation: t`Instalments repay the loan **plus** the interest, so $S_n$ is their total. When the question asks for the interest, give only the interest, $\frac{PRN}{100}$, without the principal.`,
      fallback: { kind: "ext", topic: "principal, interest and amount (simple interest)" },
    },
    {
      id: "C21-M5",
      mistake: t`Takes $d$ positive when each instalment is less than the one before`,
      remediation: t`$d$ is a term minus the term before it. When each instalment is ₹ 10 less, $d = -10$, so the first instalment is the largest.`,
      fallback: { kind: "concept", id: "C16" },
    },
    {
      id: "C21-M6",
      mistake: t`Forgets to halve: $S_n = n[2a + (n - 1)d]$`,
      remediation: t`The sum is half of $n$ times (first term + last term): $S_n = \frac{n}{2}[2a + (n - 1)d]$. Without the $\frac{1}{2}$ you get the sum twice.`,
      fallback: { kind: "concept", id: "C17" },
    },
  ],
  engineNotes: [
    "C21-M2 applies only where n is counted from years or days (Q2, Q6); C21-M4 and C21-M5 only on money that is borrowed or invested (Q3 to Q5).",
    "The Q3 board question asks for the interest after 10 years, which equals the principal; the item uses 12 years so the key is not printed in the stem.",
    t`Finding $n$ from a total, as in a loan cleared month by month, gives a quadratic; that is taught in C17, so it is not a check item here.`,
  ],
  items: [
    {
      id: "C21-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2026/Q3(B)(ii)" },
      stem: t`Sachin invested in a National Saving Certificate scheme: ₹ 5,000 in the first year, ₹ 7,000 in the second year, ₹ 9,000 in the third year, and so on. Find the total amount he invested in $12$ years.`,
      verify: { kind: "value", inputs: { a: "5000", d: "2000", n: "12" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`₹ 1,92,000`, correct: true, value: "192000" },
        { key: "B", text: t`₹ 27,000`, correct: false, misconceptionId: "C21-M1", value: "27000" },
        { key: "C", text: t`₹ 2,04,000`, correct: false, misconceptionId: "C21-M3", value: "204000" },
        { key: "D", text: t`₹ 3,84,000`, correct: false, misconceptionId: "C21-M6", value: "384000" },
      ],
      solution: {
        steps: [
          t`The yearly amounts form an A.P. with $a = 5000$, $d = 2000$ and $n = 12$.`,
          t`'Total amount' asks for a sum: $S_{12} = \frac{12}{2}[2(5000) + 11(2000)]$.`,
          t`$S_{12} = 6(10000 + 22000) = 6 \times 32000$ $= 192000$, so ₹ 1,92,000.`,
        ],
      },
    },
    {
      id: "C21-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/Application of A.P. SolvedEx.5" },
      stem: t`In the year 2010, $4000$ people in a village were literate. Every year the number of literate people increases by $400$. How many people will be literate in the year 2020?`,
      verify: { kind: "value", inputs: { a: "4000", d: "400", y0: "2010", y1: "2020" }, params: { ask: "term" } },
      options: [
        { key: "A", text: t`7,600`, correct: false, misconceptionId: "C21-M2", value: "7600" },
        { key: "B", text: t`8,400`, correct: false, misconceptionId: "C21-M3", value: "8400" },
        { key: "C", text: t`8,000`, correct: true, value: "8000" },
        { key: "D", text: t`66,000`, correct: false, misconceptionId: "C21-M1", value: "66000" },
      ],
      solution: {
        steps: [
          t`The yearly counts form an A.P. with $a = 4000$ (in 2010) and $d = 400$.`,
          t`2020 is term number $2020 - 2010 + 1 = 11$, so $n = 11$.`,
          t`One year's count is a term: $t_{11} = 4000 + 10(400) = 8000$ people.`,
        ],
      },
    },
    {
      id: "C21-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2024-jul/Q4(ii)" },
      stem: t`₹ 2,000 is invested at $10$ percent simple interest. The interest amounts at the end of each year form an A.P. Find the interest amount after $12$ years.`,
      verify: { kind: "value", inputs: { P: "2000", R: "10", N: "12" }, params: { ask: "si" } },
      options: [
        { key: "A", text: t`₹ 2,600`, correct: false, misconceptionId: "C21-M3", value: "2600" },
        { key: "B", text: t`₹ 4,400`, correct: false, misconceptionId: "C21-M4", value: "4400" },
        { key: "C", text: t`₹ 2,400`, correct: true, value: "2400" },
        { key: "D", text: t`₹ 15,600`, correct: false, misconceptionId: "C21-M1", value: "15600" },
      ],
      solution: {
        steps: [
          t`One year's interest is $\frac{2000 \times 10 \times 1}{100} = 200$.`,
          t`The interest after $1, 2, 3, \ldots$ years is $200, 400, 600, \ldots$: $a = d = 200$.`,
          t`The interest after $12$ years is one term: $t_{12} = 200 + 11(200) = 2400$, so ₹ 2,400.`,
        ],
      },
    },
    {
      id: "C21-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10/alg-2020/Q4(ii)" },
      stem: t`A person borrows ₹ 4,000 and agrees to repay it with a total interest of ₹ 500 in $10$ instalments, each instalment ₹ 10 less than the one before. What is the first instalment?`,
      verify: { kind: "value", inputs: { P: "4000", I: "500", n: "10", c: "10" }, params: { ask: "first" } },
      options: [
        { key: "A", text: t`₹ 495`, correct: true, value: "495" },
        { key: "B", text: t`₹ 445`, correct: false, misconceptionId: "C21-M4", value: "445" },
        { key: "C", text: t`₹ 405`, correct: false, misconceptionId: "C21-M5", value: "405" },
        { key: "D", text: t`₹ 270`, correct: false, misconceptionId: "C21-M6", value: "270" },
      ],
      solution: {
        steps: [
          t`The total repaid is $4000 + 500 = 4500$, in $n = 10$ instalments with $d = -10$.`,
          t`$4500 = \frac{10}{2}[2a + 9(-10)]$ $= 5(2a - 90)$.`,
          t`$900 = 2a - 90$, so $2a = 990$ and $a = 495$: the first instalment is ₹ 495.`,
        ],
      },
    },
    {
      id: "C21-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/Ex 3.4 Q.2" },
      stem: t`A man borrows ₹ 8,000 and agrees to repay it with a total interest of ₹ 1,360 in $12$ monthly instalments, each instalment ₹ 40 less than the one before. What is the last instalment?`,
      verify: { kind: "value", inputs: { P: "8000", I: "1360", n: "12", c: "40" }, params: { ask: "last" } },
      options: [
        { key: "A", text: t`₹ 1,000`, correct: false, misconceptionId: "C21-M5", value: "1000" },
        { key: "B", text: t`₹ 170`, correct: false, misconceptionId: "C21-M6", value: "170" },
        { key: "C", text: t`₹ 560`, correct: true, value: "560" },
        { key: "D", text: t`₹ 540`, correct: false, misconceptionId: "C21-M3", value: "540" },
      ],
      solution: {
        steps: [
          t`The total repaid is $8000 + 1360 = 9360$, in $n = 12$ instalments with $d = -40$.`,
          t`$9360 = \frac{12}{2}[2a + 11(-40)]$ gives $1560 = 2a - 440$, so $a = 1000$.`,
          t`The last instalment is $t_{12} = 1000 + 11(-40)$ $= 560$, so ₹ 560.`,
        ],
      },
    },
    {
      id: "C21-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-ssc-10-text/alg-arithmetic-progression-10/Ex 3.4 Q.1" },
      stem: t`On 1st January 2016, Sanika saves ₹ 10. She saves ₹ 11 on the second day, ₹ 12 on the third day, and so on, every day. 2016 was a leap year. What is her total saving from 1st January to 31st December 2016?`,
      verify: { kind: "value", inputs: { a: "10", d: "1", y0: "1", y1: "366" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`₹ 70,455`, correct: true, value: "70455" },
        { key: "B", text: t`₹ 375`, correct: false, misconceptionId: "C21-M1", value: "375" },
        { key: "C", text: t`₹ 70,080`, correct: false, misconceptionId: "C21-M2", value: "70080" },
        { key: "D", text: t`₹ 1,40,910`, correct: false, misconceptionId: "C21-M6", value: "140910" },
      ],
      solution: {
        steps: [
          t`The daily savings form an A.P. with $a = 10$ and $d = 1$.`,
          t`A leap year has $366$ days, so $n = 366$, counting both 1st January and 31st December.`,
          t`'Total saving' asks for a sum: $S_{366} = \frac{366}{2}[20 + 365(1)]$.`,
          t`$S_{366} = 183 \times 385 = 70455$, so ₹ 70,455.`,
        ],
      },
    },
  ],
};
