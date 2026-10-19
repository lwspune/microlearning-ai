import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c09: Concept = {
  id: "C09",
  status: "approved",
  hook: {
    prompt: t`You drive $120$ km to a town at $40$ km/hr and come straight back at $60$ km/hr. **Is your average speed for the round trip $50$ km/hr?**`,
    reveal: t`No. Going takes $3$ hours and coming back $2$, so $240$ km take $5$ hours: $\frac{240}{5} = 48$ km/hr. You spend longer at the slow speed, so it counts for more. $48$ is the **harmonic mean** of $40$ and $60$.`,
  },
  explanation: {
    intuition: [
      t`An **average** is one value that can stand in for many values and do the same job.`,
      t`The **A.M.** (arithmetic mean) keeps the **sum**: $n$ copies of it add up to $x_1 + x_2 + \cdots + x_n$.`,
      t`The **G.M.** (geometric mean) keeps the **product**: $n$ copies of it multiply to $x_1x_2\cdots x_n$.`,
      t`The **H.M.** (harmonic mean) keeps the sum of the **reciprocals**; the reciprocal of $x$ is $\frac{1}{x}$.`,
      t`Use the G.M. for things that multiply, like growth factors, and the H.M. for rates such as speeds.`,
      t`For positive values that are not all equal, A.M. $>$ G.M. $>$ H.M.`,
    ],
    formal: [
      {
        title: "The geometric mean",
        points: [
          t`For $n$ positive values, the G.M. is the $n$-th root of their product:`,
          t`$G = \sqrt[n]{x_1x_2\cdots x_n}$.`,
          t`Example: for $4, 6, 9$ the product is $216$, so $G = \sqrt[3]{216} = 6$.`,
          t`Every value must be positive: a zero or a negative value breaks the root.`,
          t`Taking logs turns the product into a sum: $\log G = \frac{\sum \log x_i}{n}$.`,
          t`So $\log G$ is the A.M. of the logs; the **antilog**, which undoes the log, then gives $G$.`,
        ],
      },
      {
        title: "Powers of one base",
        points: [
          t`Powers of one base $b$, such as $b^{k_1}, b^{k_2}, \ldots, b^{k_n}$, multiply by adding their exponents.`,
          t`So $G = b^{\bar{k}}$, where $\bar{k}$ is the A.M. of the exponents $k_i$.`,
          t`Example: $3, 9, 27, 81$ are $3^1, 3^2, 3^3, 3^4$, so $\bar{k} = \frac{10}{4} = 2.5$.`,
          t`Then $G = 3^{2.5} = 9\sqrt{3}$.`,
          t`$\bar{k}$ is only the exponent: always raise the base to it.`,
        ],
      },
      {
        title: "Changing each value",
        points: [
          t`If each $x_i$ becomes $ax_i^k$, with $a > 0$, the new G.M. is $aG^k$.`,
          t`The new product is $a^n(x_1x_2\cdots x_n)^k$, and its $n$-th root is $aG^k$.`,
          t`Only $G$ is raised to the power $k$; the factor $a$ stays as it is.`,
          t`Example: $G = 10$ and each $x_i$ becomes $3x_i^4$: the new G.M. is $3 \times 10^4 = 30000$.`,
          t`For ratios: if the $x_i$ have G.M. $P$ and the $y_i$ have G.M. $Q$, the $\frac{x_i}{y_i}$ have G.M. $\frac{P}{Q}$.`,
        ],
      },
      {
        title: "The harmonic mean",
        points: [
          t`For $n$ positive values, the H.M. is $n$ divided by the sum of their reciprocals:`,
          t`$H = \frac{n}{\sum 1/x_i}$.`,
          t`In steps: take reciprocals, find their A.M., then take the reciprocal of that.`,
          t`Example: for $3$ and $6$, $\frac{1}{3} + \frac{1}{6} = \frac{1}{2}$, so $H = \frac{2}{1/2} = 4$.`,
          t`For two numbers $a$ and $b$: $H = \frac{2ab}{a + b}$.`,
        ],
      },
      {
        title: "Average speed",
        points: [
          t`**Average speed** is always the total distance divided by the total time.`,
          t`Equal distances at speeds $v_1, \ldots, v_n$: the average speed is the H.M. of the speeds.`,
          t`Example: $60$ km at $3v$, then $60$ km at $2v$: $\frac{2(3v)(2v)}{3v + 2v}$ $= \frac{12v}{5}$.`,
          t`Equal times at those speeds: the average speed is the A.M. of the speeds.`,
          t`Unequal distances: add the distances, add the times $\frac{d_i}{v_i}$, then divide.`,
        ],
      },
      {
        title: "Average price, equal spending",
        points: [
          t`Spend the same money $M$ at prices $p_1, p_2, \ldots, p_n$ per unit.`,
          t`At price $p_i$ you buy $\frac{M}{p_i}$ units, and the total money is $nM$.`,
          t`Average price $= \frac{nM}{\sum M/p_i}$ $= \frac{n}{\sum 1/p_i}$: the H.M. of the prices.`,
          t`If you buy equal **quantities** at each price instead, the average price is the A.M.`,
        ],
      },
      {
        title: "A.M., G.M. and H.M. together",
        points: [
          t`For positive values, A.M. $\ge$ G.M. $\ge$ H.M., with equality only when all the values are equal.`,
          t`For two numbers $a$ and $b$: $A = \frac{a + b}{2}$, $G = \sqrt{ab}$ and $H = \frac{2ab}{a + b}$.`,
          t`Multiply: $A \times H = ab = G^2$.`,
          t`So $G = \sqrt{AH}$: the G.M. of $A$ and $H$, not their A.M.`,
          t`Example: $2$ and $8$ have $A = 5$ and $H = \frac{16}{5}$, so $G = \sqrt{16} = 4$.`,
          t`$G^2 = AH$ holds for two numbers only.`,
        ],
      },
    ],
    worked: {
      prompt: t`The G.M. of $n$ positive observations is $5$. Each observation $x_i$ is replaced by $2x_i^3$. Find the new G.M.`,
      steps: [
        t`The old G.M. is $5$, so $x_1x_2\cdots x_n = 5^n$.`,
        t`The new product is $(2x_1^3)(2x_2^3)\cdots(2x_n^3)$ $= 2^n(x_1x_2\cdots x_n)^3$.`,
        t`That is $2^n \times 5^{3n}$ $= (2 \times 5^3)^n$.`,
        t`Its $n$-th root is $2 \times 5^3 = 250$.`,
      ],
      answer: t`The new G.M. is $250$: the factor $2$ stays, and only $5$ is cubed.`,
    },
    visualSpec: t`Drag two positive numbers along a line and watch their H.M., G.M. and A.M. move between them, always in that order, meeting when the numbers are equal.`,
  },
  misconceptions: [
    {
      id: "C09-M1",
      mistake: t`Taking the A.M. wherever an average is asked: of the values, the speeds, the prices, or of $A$ and $H$ as the G.M.`,
      remediation: t`Pick the mean the question needs: the G.M. is $\sqrt[n]{x_1x_2\cdots x_n}$, equal distances or equal spending give the H.M., and for two numbers $G = \sqrt{AH}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M2",
      mistake: t`Leaving out the $n$ in the H.M.: $\frac{1}{\sum 1/x_i}$, or $\frac{ab}{a + b}$ for two numbers`,
      remediation: t`The H.M. is $\frac{n}{\sum 1/x_i}$; for two numbers it is $\frac{2ab}{a + b}$. Without the $n$ the answer is $n$ times too small.`,
      fallback: { kind: "none" },
    },
    {
      id: "C09-M3",
      mistake: "Stopping at the A.M. of the reciprocals (for the H.M.) or of the exponents (for the G.M.)",
      remediation: "That average is a step, not the answer: take its reciprocal to get the H.M., and raise the base to it (the antilog) to get the G.M.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M4",
      mistake: "Using the H.M. of the speeds even when the distances are not equal",
      remediation: "The H.M. gives the average speed only over equal distances. Otherwise divide the total distance by the total time; for equal times that is the A.M.",
      fallback: { kind: "none" },
    },
    {
      id: "C09-M5",
      mistake: t`Weighting each speed by its distance: $\frac{\sum d_iv_i}{\sum d_i}$`,
      remediation: t`Average speed is total distance over total time, so each speed counts for the time spent at it: weight $v_i$ by $t_i = \frac{d_i}{v_i}$.`,
      fallback: { kind: "concept", id: "C03" },
    },
    {
      id: "C09-M6",
      mistake: t`Leaving out the root: the product $x_1x_2\cdots x_n$ as the G.M., or $G = A \times H$ for two numbers`,
      remediation: t`The G.M. is the $n$-th root of the product, $\sqrt[n]{x_1x_2\cdots x_n}$. For two numbers $G^2 = A \times H$, so $G = \sqrt{AH}$.`,
      fallback: { kind: "ext", topic: "A.M., G.M. and H.M. of two numbers (Sequences and Series)" },
    },
  ],
  engineNotes: [
    "C09-M4 gives the key whenever the distances are equal, and C09-M5 then agrees with C09-M1; diagnose both with unequal distances or equal times (C09-Q3, C09-Q4).",
    "C09-M3 applies to a G.M. only when the values are powers of one base (params base); C09-M4 and C09-M5 only to average speed; C09-M6 only to a G.M.",
    t`C09-Q2 changes the prices of 2024 Apr Q107 (150, 200, 250, 300: H.M. $\frac{4000}{19} \approx 210.5$, keyed 210) to 100, 150, 200, 300 for a whole-number answer, 160.`,
    t`C09-Q4 turns 2019 Sep Q119 (60 km at $3v$, then 60 km at $2v$: $2.4v$, shown on the Average speed slide) into equal times at $4v$ and $v$, so C09-M4 and C09-M5 can be told apart.`,
    t`C09-Q5 is 2021 Sep Q113 with the G.M. asked outright; the PYQ's options were ranges, keyed $32 < g < 64$ ($g = 32\sqrt{2} \approx 45.3$).`,
    t`C09-Q6 uses $G^2 = AH$, the identity 2021 Apr Q108 rests on (there $5H = 4G$ gives $m = 4n$); its numbers are new.`,
    t`2021 Apr Q114 ($G = 10$, each $x_i$ replaced by $3x_i^4$: $30000$) and 2018 Sep Q111 (G.M. of $\frac{x_i}{y_i}$ is $\frac{P}{Q}$) are taught on the Changing each value slide, not asked: the models give fewer than three distinct wrong answers for them.`,
  ],
  items: [
    {
      id: "C09-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Sep Q101" },
      stem: t`The harmonic mean of the five numbers $^{10}C_3$, $^{10}C_4$, $^{10}C_5$, $^{10}C_6$ and $^{10}C_7$ is:`,
      verify: { kind: "value", inputs: { xs: "(120, 210, 252, 210, 120)" }, params: { ask: "hm" } },
      options: [
        { key: "A", text: t`$\frac{630}{19}$`, correct: false, misconceptionId: "C09-M2", value: "630/19" },
        { key: "B", text: t`$\frac{19}{3150}$`, correct: false, misconceptionId: "C09-M3", value: "19/3150" },
        { key: "C", text: t`$\frac{3150}{19}$`, correct: true, value: "3150/19" },
        { key: "D", text: t`$\frac{912}{5}$`, correct: false, misconceptionId: "C09-M1", value: "912/5" },
      ],
      solution: {
        steps: [
          t`$^{10}C_3 = {}^{10}C_7 = 120$, $^{10}C_4 = {}^{10}C_6 = 210$ and $^{10}C_5 = 252$.`,
          t`The reciprocals add to $\frac{2}{120} + \frac{2}{210} + \frac{1}{252}$ $= \frac{21 + 12 + 5}{1260} = \frac{19}{630}$.`,
          t`$H = \frac{5}{19/630} = \frac{3150}{19} \approx 165.8$.`,
        ],
      },
    },
    {
      id: "C09-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2024 Apr Q107" },
      stem: t`Edible oil cost ₹$100$, ₹$150$, ₹$200$ and ₹$300$ per litre in four years. A family spent the same amount of money on oil each year. The family's average price per litre, in ₹, over the four years is:`,
      verify: { kind: "value", inputs: { xs: "(100, 150, 200, 300)" }, params: { ask: "price" } },
      options: [
        { key: "A", text: t`$160$`, correct: true, value: "160" },
        { key: "B", text: t`$\frac{375}{2}$`, correct: false, misconceptionId: "C09-M1", value: "375/2" },
        { key: "C", text: t`$40$`, correct: false, misconceptionId: "C09-M2", value: "40" },
        { key: "D", text: t`$\frac{1}{160}$`, correct: false, misconceptionId: "C09-M3", value: "1/160" },
      ],
      solution: {
        steps: [
          t`The same money each year, so the average price is the H.M. of the prices.`,
          t`$\frac{1}{100} + \frac{1}{150} + \frac{1}{200} + \frac{1}{300}$ $= \frac{6 + 4 + 3 + 2}{600} = \frac{1}{40}$.`,
          t`$H = \frac{4}{1/40} = 160$: ₹$160$ per litre.`,
        ],
      },
    },
    {
      id: "C09-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q113" },
      stem: t`A train covers the first $5$ km at $30$ km/hr and the next $15$ km at $45$ km/hr. Its average speed, in km/hr, is:`,
      verify: { kind: "value", inputs: { ds: "(5, 15)", vs: "(30, 45)" }, params: { ask: "speed" } },
      options: [
        { key: "A", text: t`$\frac{75}{2}$`, correct: false, misconceptionId: "C09-M1", value: "75/2" },
        { key: "B", text: t`$36$`, correct: false, misconceptionId: "C09-M4", value: "36" },
        { key: "C", text: t`$\frac{165}{4}$`, correct: false, misconceptionId: "C09-M5", value: "165/4" },
        { key: "D", text: t`$40$`, correct: true, value: "40" },
      ],
      solution: {
        steps: [
          t`The distances are unequal, so divide the total distance by the total time.`,
          t`The times are $\frac{5}{30} = \frac{1}{6}$ hr and $\frac{15}{45} = \frac{1}{3}$ hr, $\frac{1}{2}$ hr in all.`,
          t`Average speed $= \frac{20}{1/2} = 40$ km/hr.`,
        ],
      },
    },
    {
      id: "C09-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Sep Q119" },
      stem: t`A car runs for $2$ hours at $4v$ km/hr and then for $2$ more hours at $v$ km/hr. Its average speed, in km/hr, is:`,
      verify: { kind: "value", inputs: { ts: "(2, 2)", vs: "(4*v, v)" }, params: { ask: "speed" } },
      options: [
        { key: "A", text: t`$\frac{5 v}{2}$`, correct: true, value: "5*v/2" },
        { key: "B", text: t`$\frac{4 v}{5}$`, correct: false, misconceptionId: "C09-M2", value: "4*v/5" },
        { key: "C", text: t`$\frac{8 v}{5}$`, correct: false, misconceptionId: "C09-M4", value: "8*v/5" },
        { key: "D", text: t`$\frac{17 v}{5}$`, correct: false, misconceptionId: "C09-M5", value: "17*v/5" },
      ],
      solution: {
        steps: [
          t`The distances are $2 \times 4v = 8v$ and $2 \times v = 2v$: $10v$ km in $4$ hours.`,
          t`Average speed $= \frac{10v}{4} = \frac{5v}{2}$ km/hr.`,
          t`Equal times give the A.M. of the speeds, $\frac{4v + v}{2}$: the same answer.`,
        ],
      },
    },
    {
      id: "C09-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Sep Q113" },
      stem: t`The geometric mean of the ten numbers $2, 4, 8, 16, 32, 64, 128, 256, 512, 1024$ is:`,
      verify: { kind: "value", inputs: { xs: "(2, 4, 8, 16, 32, 64, 128, 256, 512, 1024)" }, params: { ask: "gm", base: "2" } },
      options: [
        { key: "A", text: t`$\frac{11}{2}$`, correct: false, misconceptionId: "C09-M3", value: "11/2" },
        { key: "B", text: t`$2^{55}$`, correct: false, misconceptionId: "C09-M6", value: "36028797018963968" },
        { key: "C", text: t`$32 \sqrt{2}$`, correct: true, value: "32*sqrt(2)" },
        { key: "D", text: t`$\frac{1023}{5}$`, correct: false, misconceptionId: "C09-M1", value: "1023/5" },
      ],
      solution: {
        steps: [
          t`The numbers are $2^1, 2^2, \ldots, 2^{10}$, so their product is $2^{1 + 2 + \cdots + 10} = 2^{55}$.`,
          t`Take the tenth root: $G = 2^{55/10} = 2^{5.5}$.`,
          t`$2^{5.5} = 2^5 \times 2^{0.5} = 32\sqrt{2} \approx 45.3$.`,
        ],
      },
    },
    {
      id: "C09-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2021 Apr Q108" },
      stem: t`The arithmetic mean of two positive numbers is $10$ and their geometric mean is $8$. Their harmonic mean is:`,
      verify: { kind: "value", inputs: { A: "10", G: "8" }, params: { ask: "hm2" } },
      options: [
        { key: "A", text: t`$\frac{4}{5}$`, correct: false, misconceptionId: "C09-M6", value: "4/5" },
        { key: "B", text: t`$\frac{32}{5}$`, correct: true, value: "32/5" },
        { key: "C", text: t`$6$`, correct: false, misconceptionId: "C09-M1", value: "6" },
        { key: "D", text: t`$\frac{16}{5}$`, correct: false, misconceptionId: "C09-M2", value: "16/5" },
      ],
      solution: {
        steps: [
          t`For two numbers, $G^2 = A \times H$.`,
          t`So $H = \frac{G^2}{A} = \frac{64}{10} = \frac{32}{5}$.`,
          t`Check: the numbers are $16$ and $4$, and $\frac{2 \times 16 \times 4}{20} = \frac{32}{5}$; also $10 \ge 8 \ge 6.4$.`,
        ],
      },
    },
  ],
};
