import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "draft",
  hook: {
    prompt: t`$\frac{3}{40}$ has a much bigger denominator than $\frac{1}{3}$. **Which one has a decimal form that ends?**`,
    reveal: t`$\frac{3}{40} = 0.075$ ends, but $\frac{1}{3} = 0.333\ldots$ never ends. The size of the denominator does not decide it; its prime factors do.`,
  },
  explanation: {
    intuition: [
      t`Dividing $p$ by $q$ gives the **decimal form** of $\frac{p}{q}$.`,
      t`Sometimes the division ends: $\frac{3}{8} = 0.375$. This is a **terminating** decimal.`,
      t`Sometimes it never ends, and the digits repeat: $\frac{1}{3} = 0.333\ldots$`,
      t`This is a **non-terminating recurring** decimal, written $0.\overline{3}$.`,
      t`Decimals count in tenths, hundredths, thousandths, and $10 = 2 \times 5$.`,
      t`So only a denominator made of 2s and 5s can become $10$, $100$, $1000$, …`,
    ],
    formal: [
      {
        title: "Two kinds of decimal form",
        points: [
          t`A **terminating** decimal has a last digit: $\frac{7}{20} = 0.35$.`,
          t`A **recurring** decimal never ends: a block of digits repeats for ever.`,
          t`$\frac{4}{11} = 0.363636\ldots$: the block $36$ repeats.`,
          t`A bar over the block shows the repeat: $0.363636\ldots = 0.\overline{36}$.`,
          t`Every rational number has one of these two decimal forms.`,
        ],
      },
      {
        title: "The denominator test",
        points: [
          t`First write $\frac{p}{q}$ in **lowest terms**: $p$ and $q$ have no common factor.`,
          t`Then write $q$ as a product of primes.`,
          t`If $q$ has no prime factor other than 2 and 5, the decimal terminates.`,
          t`$\frac{9}{40}$: $40 = 2^3 \times 5$, so it terminates. 5s count as much as 2s.`,
          t`$\frac{5}{6}$: $6 = 2 \times 3$. One factor 3 is enough to make it recur.`,
          t`$\frac{6}{15} = \frac{2}{5}$ terminates, though $15$ has a factor $3$.`,
        ],
      },
      {
        title: "Writing a terminating decimal",
        points: [
          t`Make the denominator a power of 10: $10$, $100$, $1000$, …`,
          t`$\frac{9}{40}$: $40 = 2^3 \times 5$ needs two more 5s, that is $25$.`,
          t`Multiply top and bottom by $25$: $\frac{9 \times 25}{40 \times 25}$ $= \frac{225}{1000}$`,
          t`$\frac{225}{1000} = 0.225$: three zeros give three decimal places.`,
          t`$\frac{3}{125}$: $125 = 5^3$ needs $2^3 = 8$, so $\frac{3}{125} = \frac{24}{1000}$ $= 0.024$.`,
        ],
      },
      {
        title: "Writing a recurring decimal",
        points: [
          t`Divide $p$ by $q$ and watch the remainders.`,
          t`Each remainder is less than $q$, so one must come back. Then the digits repeat.`,
          t`$\frac{1}{6} = 0.1666\ldots$: only the 6 repeats, so write $0.1\overline{6}$.`,
          t`The bar goes over the repeating block only, not the digits before it.`,
          t`$\frac{2}{7} = 0.285714\,285714\ldots$ $= 0.\overline{285714}$`,
          t`Never stop early: $0.16$ or $0.166$ is not equal to $\frac{1}{6}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Is the decimal form of $\frac{7}{30}$ terminating or recurring? Write it.`,
      steps: [
        t`$\frac{7}{30}$ is in lowest terms, and $30 = 2 \times 3 \times 5$.`,
        t`The factor $3$ is not 2 or 5, so the decimal form recurs.`,
        t`Divide: $7 \div 30 = 0.2333\ldots$; the remainder $10$ keeps coming back.`,
        t`The 2 appears once; only the 3 repeats, so the bar goes over the 3 alone.`,
      ],
      answer: t`$\frac{7}{30} = 0.2\overline{3}$, a non-terminating recurring decimal.`,
    },
    visualSpec: t`Drag the denominator and watch its prime factors light up: only 2s and 5s and the long division stops; any other prime and a remainder comes round again.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: t`Tests the denominator before writing $\frac{p}{q}$ in lowest terms, so $\frac{9}{12}$ is called recurring because $12$ has a factor 3.`,
      remediation: t`Cancel common factors first, then test the denominator. $\frac{6}{15} = \frac{2}{5}$, and $5$ passes the test, so it terminates.`,
      fallback: { kind: "ext", topic: "reducing a fraction to lowest terms (Std VIII)" },
    },
    {
      id: "C01-M2",
      mistake: t`Thinks one factor 2 or 5 in the denominator is enough, so $\frac{11}{6}$ ($6 = 2 \times 3$) is called terminating.`,
      remediation: t`Every prime factor of the denominator must be 2 or 5. One other prime, like the 3 in $6 = 2 \times 3$, makes the decimal recur.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: t`Forgets the 5: thinks only denominators made of 2s terminate, so $\frac{137}{25}$ is called recurring.`,
      remediation: t`$10 = 2 \times 5$, so 5s work as well as 2s. $\frac{3}{25} = \frac{12}{100} = 0.12$ terminates.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Divides only to two decimal places: a division still going there is called recurring, and a value is cut off at two places.",
      remediation: t`Some decimals end after three or more places: $\frac{1}{16} = 0.0625$. Use the denominator test, and keep dividing until a block repeats.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M5",
      mistake: t`Writes the repeating block once and stops with no bar, so $0.31818\ldots$ becomes $0.318$.`,
      remediation: t`A decimal that stops is a different number. $\frac{1}{6} = 0.1666\ldots$ is not $0.166$; show the repeat with a bar: $0.1\overline{6}$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M6",
      mistake: t`Puts the bar over the whole decimal part, so $0.41666\ldots$ becomes $0.\overline{416}$.`,
      remediation: t`The bar covers only the digits that repeat. In $0.1666\ldots$ only the 6 repeats, so it is $0.1\overline{6}$, not $0.\overline{16}$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C01-M4 is modelled as dividing to two decimal places: a division not ended there is called recurring (Q2, Q5), and a value is cut to two places (Q3, Q4, Q6).",
    t`C01-M6 gives the key on a pure recurring decimal (no digits before the repeat, like $0.\overline{36}$), so only mixed recurring decimals such as Q3, Q4, Q6 diagnose it.`,
    t`C01-M5 and C01-M4 agree when the digits before the repeat plus one block are only two digits long (like $1.8\overline{3}$); the value items avoid that.`,
    "C01-M1 shows only on a fraction not in lowest terms (Q1, Q2, Q5).",
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.1 Q1(v)" },
      stem: t`How many of these rational numbers have a **non-terminating recurring** decimal form? $\frac{13}{5}$, $\frac{2}{11}$, $\frac{29}{16}$, $\frac{21}{35}$, $\frac{11}{6}$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "recurring", fracs: ["13/5", "2/11", "29/16", "21/35", "11/6"] } },
      options: [
        { key: "A", text: t`$2$`, correct: true, value: "2" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C01-M1", value: "3" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C01-M2", value: "1" },
        { key: "D", text: t`$4$`, correct: false, misconceptionId: "C01-M3", value: "4" },
      ],
      solution: {
        steps: [
          t`$\frac{13}{5}$ ($5$) and $\frac{29}{16}$ ($16 = 2^4$) terminate.`,
          t`$\frac{21}{35} = \frac{3}{5}$ in lowest terms, so it terminates too.`,
          t`$\frac{2}{11}$ has $11$, and $\frac{11}{6}$ has $6 = 2 \times 3$: both recur.`,
          t`So $2$ of them are non-terminating recurring.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q1(iii)" },
      stem: t`The decimal form of which of these is non-terminating recurring?`,
      verify: { kind: "value", inputs: {  }, params: { pick: "recurring", fracs: ["9/12", "3/11", "137/25", "3/16"] } },
      options: [
        { key: "A", text: t`$\frac{3}{11}$`, correct: true, value: "f_3_11" },
        { key: "B", text: t`$\frac{9}{12}$`, correct: false, misconceptionId: "C01-M1", value: "f_9_12" },
        { key: "C", text: t`$\frac{137}{25}$`, correct: false, misconceptionId: "C01-M3", value: "f_137_25" },
        { key: "D", text: t`$\frac{3}{16}$`, correct: false, misconceptionId: "C01-M4", value: "f_3_16" },
      ],
      solution: {
        steps: [
          t`$\frac{9}{12} = \frac{3}{4}$ and $4 = 2^2$, so it terminates: $0.75$.`,
          t`$25 = 5^2$ and $16 = 2^4$: $\frac{137}{25} = 5.48$ and $\frac{3}{16} = 0.1875$.`,
          t`$11$ is a prime other than 2 and 5, so $\frac{3}{11} = 0.\overline{27}$ recurs.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.1 Q2(ii)" },
      stem: t`Write $\frac{7}{22}$ in decimal form.`,
      verify: { kind: "value", inputs: { p: "7", q: "22" } },
      options: [
        { key: "A", text: t`$0.318$`, correct: false, misconceptionId: "C01-M5", value: "159/500" },
        { key: "B", text: t`$0.\overline{318}$`, correct: false, misconceptionId: "C01-M6", value: "106/333" },
        { key: "C", text: t`$0.3\overline{18}$`, correct: true, value: "7/22" },
        { key: "D", text: t`$0.31$`, correct: false, misconceptionId: "C01-M4", value: "31/100" },
      ],
      solution: {
        steps: [
          t`$22 = 2 \times 11$, and $11$ is not 2 or 5, so the decimal recurs.`,
          t`Divide: $7 \div 22 = 0.31818\ldots$`,
          t`The 3 appears once; then the block $18$ repeats for ever.`,
          t`So $\frac{7}{22} = 0.3\overline{18}$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.1 Q2(iii)" },
      stem: t`Write $\frac{5}{12}$ in decimal form.`,
      verify: { kind: "value", inputs: { p: "5", q: "12" } },
      options: [
        { key: "A", text: t`$0.41\overline{6}$`, correct: true, value: "5/12" },
        { key: "B", text: t`$0.41$`, correct: false, misconceptionId: "C01-M4", value: "41/100" },
        { key: "C", text: t`$0.416$`, correct: false, misconceptionId: "C01-M5", value: "52/125" },
        { key: "D", text: t`$0.\overline{416}$`, correct: false, misconceptionId: "C01-M6", value: "416/999" },
      ],
      solution: {
        steps: [
          t`$12 = 2^2 \times 3$, and the factor 3 makes the decimal recur.`,
          t`Divide: $5 \div 12 = 0.41666\ldots$`,
          t`The 4 and the 1 appear once; then only the 6 repeats.`,
          t`So $\frac{5}{12} = 0.41\overline{6}$.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.1 Q2(i)" },
      stem: t`How many of these rational numbers have a **terminating** decimal form? $\frac{127}{200}$, $\frac{17}{8}$, $\frac{4}{5}$, $\frac{15}{24}$, $\frac{7}{15}$, $\frac{3}{11}$`,
      verify: { kind: "value", inputs: {  }, params: { ask: "terminating", fracs: ["127/200", "17/8", "4/5", "15/24", "7/15", "3/11"] } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$3$`, correct: false, misconceptionId: "C01-M1", value: "3" },
        { key: "C", text: t`$5$`, correct: false, misconceptionId: "C01-M2", value: "5" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C01-M4", value: "1" },
      ],
      solution: {
        steps: [
          t`$200 = 2^3 \times 5^2$, $8 = 2^3$, $5$: those three terminate.`,
          t`$\frac{15}{24} = \frac{5}{8}$ in lowest terms, so it terminates: $0.625$.`,
          t`$15 = 3 \times 5$ and $11$ have other primes: $\frac{7}{15}$, $\frac{3}{11}$ recur.`,
          t`So $4$ of them have a terminating decimal form.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q3(i)" },
      stem: t`Write $\frac{-5}{14}$ in decimal form.`,
      verify: { kind: "value", inputs: { p: "-5", q: "14" } },
      options: [
        { key: "A", text: t`$-0.3571428$`, correct: false, misconceptionId: "C01-M5", value: "-892857/2500000" },
        { key: "B", text: t`$-0.\overline{3571428}$`, correct: false, misconceptionId: "C01-M6", value: "-1190476/3333333" },
        { key: "C", text: t`$-0.3\overline{571428}$`, correct: true, value: "-5/14" },
        { key: "D", text: t`$-0.35$`, correct: false, misconceptionId: "C01-M4", value: "-7/20" },
      ],
      solution: {
        steps: [
          t`$14 = 2 \times 7$, and the factor 7 makes the decimal recur.`,
          t`Divide: $5 \div 14 = 0.3571428571\ldots$`,
          t`The 3 appears once; then the block $571428$ repeats.`,
          t`So $\frac{-5}{14} = -0.3\overline{571428}$.`,
        ],
      },
    },
  ],
};
