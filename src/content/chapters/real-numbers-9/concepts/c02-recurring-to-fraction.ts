import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "draft",
  hook: {
    prompt: t`Is $0.999\ldots$ (the $9$s never stop) a little less than $1$, or equal to $1$?`,
    reveal: t`Equal to $1$. Let $x = 0.999\ldots$ Then $10x = 9.999\ldots$ Subtract: $10x - x = 9$, so $9x = 9$ and $x = 1$.`,
  },
  explanation: {
    intuition: [
      t`A **recurring decimal** goes on for ever, repeating a block of digits, like $0.777\ldots$`,
      t`We draw a bar over the repeating block: $0.777\ldots = 0.\overline{7}$.`,
      t`Every recurring decimal is a rational number, so we can write it as $\frac{p}{q}$.`,
      t`The idea: make a copy of the number that has the same endless tail.`,
      t`Subtract the copy, and the endless tails cancel, leaving whole numbers.`,
      t`For $x = 0.\overline{7}$: $10x - x = 7$, so $9x = 7$ and $x = \frac{7}{9}$.`,
    ],
    formal: [
      {
        title: "Pure recurring decimals",
        points: [
          t`In a **pure recurring decimal**, the repeating block starts right after the point, like $0.\overline{7}$.`,
          t`A one-digit block may also be shown with a dot: $0.\dot{7} = 0.\overline{7}$.`,
          t`Let $x = 0.777\ldots$ Multiply by $10$: $10x = 7.777\ldots$`,
          t`Both numbers have the same tail $.777\ldots$, so subtract: $10x - x = 7$.`,
          t`So $9x = 7$, and $x = \frac{7}{9}$.`,
        ],
      },
      {
        title: "Shift by one whole block",
        points: [
          t`Multiply by $10$ if one digit repeats, by $100$ if two repeat, by $1000$ if three repeat.`,
          t`This shifts the number by exactly one block, so the two tails line up.`,
          t`Let $x = 7.529529\ldots = 7.\overline{529}$. Three digits repeat.`,
          t`So $1000x = 7529.529529\ldots$`,
          t`Subtract the whole numbers too: $1000x - x$ $= 7529 - 7 = 7522$.`,
          t`So $999x = 7522$, and $x = \frac{7522}{999}$.`,
        ],
      },
      {
        title: "Mixed recurring decimals",
        points: [
          t`In a **mixed recurring decimal**, some digits after the point do not repeat: $0.8\overline{3} = 0.8333\ldots$`,
          t`Let $x = 0.8333\ldots$ First move the digit that does not repeat past the point: $10x = 8.333\ldots$`,
          t`Then shift by one more block: $100x = 83.333\ldots$`,
          t`Now $100x$ and $10x$ have the same tail, so $100x - 10x$ $= 83 - 8$.`,
          t`So $90x = 75$, and $x = \frac{75}{90} = \frac{5}{6}$.`,
        ],
      },
      {
        title: "Check your fraction",
        points: [
          t`Write $\frac{p}{q}$ in lowest terms: cancel the common factors of $p$ and $q$.`,
          t`The fraction must be close to the decimal: $\frac{5}{6}$ is a little less than $1$, like $0.8333\ldots$`,
          t`Dividing $p$ by $q$ gives back the same digits: $5 \div 6 = 0.8333\ldots$`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $1.2\overline{3} = 1.2333\ldots$ in $\frac{p}{q}$ form.`,
      steps: [
        t`Let $x = 1.2333\ldots$ The $2$ does not repeat; the block $3$ has one digit.`,
        t`Move the $2$ past the point: $10x = 12.333\ldots$`,
        t`Shift by one more block: $100x = 123.333\ldots$`,
        t`The tails match, so subtract: $100x - 10x$ $= 123 - 12$, so $90x = 111$.`,
        t`So $x = \frac{111}{90} = \frac{37}{30}$.`,
      ],
      answer: t`$1.2\overline{3} = \frac{37}{30}$`,
    },
    visualSpec: t`Slide a copy of a recurring decimal left by one, two or three places and watch its repeating tail line up under the original, so the tails cancel when one is subtracted from the other.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Always multiplies by 10, so puts the repeating block over a single 9 whatever its length (0.3737... = 37/9)",
      remediation: t`Shift by as many places as there are digits in the block: multiply by $100$ when two digits repeat, by $1000$ when three repeat. Only then do the tails line up.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Ignores the bar and treats the recurring decimal as terminating: writes the digits shown over a power of 10",
      remediation: t`The bar means the digits go on for ever, so the decimal does not terminate. Shift by one block and subtract; the denominator gets $9$s, not a plain power of $10$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M3",
      mistake: "Subtracts only the decimal parts: forgets to subtract the whole-number part of the smaller number",
      remediation: t`Subtract both numbers in full, whole parts too. For $x = 4.\overline{12}$: $100x - x$ $= 412 - 4 = 408$, not $412$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Counts the digits that do not repeat as part of the repeating block (reads 0.4777... as 0.474747...)",
      remediation: "Only the digits under the bar repeat. First move the digits that do not repeat past the point, then shift by one more block and subtract.",
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: "Shifts and subtracts correctly but divides by 99 (or 9) instead of 990 (or 90): forgets the extra 10 from the first shift",
      remediation: t`Subtracting $10x$ from $100x$ leaves $90x$, not $9x$. Each digit that does not repeat puts one more $0$ in the denominator.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M6",
      mistake: "Mixes up x and the shifted number: gives the value of 10x (or 100x) instead of x",
      remediation: t`$10x$ or $100x$ is only the shifted copy. After subtracting, solve for $x$ itself; it must be close to the decimal you started with.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M1 gives the key when the repeating block has one digit; C02-M3 gives the key for a pure recurring decimal with whole part 0; C02-M4 and C02-M5 give the key for every pure recurring decimal. Diagnose them only on items where the model and the key differ.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.1 Q3(ii)" },
      stem: t`Write the recurring decimal $0.\overline{37}$ in $\frac{p}{q}$ form.`,
      verify: { kind: "value", inputs: {  }, params: { i: "0", n: "", r: "37" } },
      options: [
        { key: "A", text: t`$\frac{37}{99}$`, correct: true, value: "37/99" },
        { key: "B", text: t`$\frac{37}{9}$`, correct: false, misconceptionId: "C02-M1", value: "37/9" },
        { key: "C", text: t`$\frac{37}{100}$`, correct: false, misconceptionId: "C02-M2", value: "37/100" },
        { key: "D", text: t`$\frac{3700}{99}$`, correct: false, misconceptionId: "C02-M6", value: "3700/99" },
      ],
      solution: {
        steps: [
          t`Let $x = 0.3737\ldots$ Two digits repeat, so multiply by $100$: $100x = 37.3737\ldots$`,
          t`The tails match: $100x - x = 37$, so $99x = 37$.`,
          t`So $x = \frac{37}{99}$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.1 Q3(iv)" },
      stem: t`Write the rational number $15.\overline{89}$ in $\frac{p}{q}$ form.`,
      verify: { kind: "value", inputs: {  }, params: { i: "15", n: "", r: "89" } },
      options: [
        { key: "A", text: t`$\frac{224}{9}$`, correct: false, misconceptionId: "C02-M1", value: "224/9" },
        { key: "B", text: t`$\frac{1589}{100}$`, correct: false, misconceptionId: "C02-M2", value: "1589/100" },
        { key: "C", text: t`$\frac{1589}{99}$`, correct: false, misconceptionId: "C02-M3", value: "1589/99" },
        { key: "D", text: t`$\frac{1574}{99}$`, correct: true, value: "1574/99" },
      ],
      solution: {
        steps: [
          t`Let $x = 15.8989\ldots$ Two digits repeat: $100x = 1589.8989\ldots$`,
          t`Subtract, whole parts too: $100x - x$ $= 1589 - 15 = 1574$.`,
          t`So $99x = 1574$, and $x = \frac{1574}{99}$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Prob Q1(v)" },
      stem: t`Choose the correct alternative. The number $2.\dot{4}$ in $\frac{p}{q}$ form is`,
      verify: { kind: "value", inputs: {  }, params: { i: "2", n: "", r: "4" } },
      options: [
        { key: "A", text: t`$\frac{220}{9}$`, correct: false, misconceptionId: "C02-M6", value: "220/9" },
        { key: "B", text: t`$\frac{22}{9}$`, correct: true, value: "22/9" },
        { key: "C", text: t`$\frac{12}{5}$`, correct: false, misconceptionId: "C02-M2", value: "12/5" },
        { key: "D", text: t`$\frac{8}{3}$`, correct: false, misconceptionId: "C02-M3", value: "8/3" },
      ],
      solution: {
        steps: [
          t`$2.\dot{4} = 2.444\ldots$ Let $x = 2.444\ldots$; one digit repeats, so $10x = 24.444\ldots$`,
          t`Subtract, whole parts too: $10x - x$ $= 24 - 2 = 22$.`,
          t`So $9x = 22$, and $x = \frac{22}{9}$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "authored" },
      stem: t`Write $2.3454545\ldots = 2.3\overline{45}$ in $\frac{p}{q}$ form.`,
      verify: { kind: "value", inputs: {  }, params: { i: "2", n: "3", r: "45" } },
      options: [
        { key: "A", text: t`$\frac{258}{11}$`, correct: false, misconceptionId: "C02-M5", value: "258/11" },
        { key: "B", text: t`$\frac{129}{55}$`, correct: true, value: "129/55" },
        { key: "C", text: t`$\frac{469}{198}$`, correct: false, misconceptionId: "C02-M3", value: "469/198" },
        { key: "D", text: t`$\frac{781}{333}$`, correct: false, misconceptionId: "C02-M4", value: "781/333" },
      ],
      solution: {
        steps: [
          t`Let $x = 2.34545\ldots$ The $3$ does not repeat: $10x = 23.4545\ldots$`,
          t`Shift by one more block of two digits: $1000x = 2345.4545\ldots$`,
          t`The tails match: $1000x - 10x$ $= 2345 - 23$, so $990x = 2322$.`,
          t`So $x = \frac{2322}{990} = \frac{129}{55}$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "authored" },
      stem: t`Write the recurring decimal $0.4\overline{7} = 0.4777\ldots$ in $\frac{p}{q}$ form.`,
      verify: { kind: "value", inputs: {  }, params: { i: "0", n: "4", r: "7" } },
      options: [
        { key: "A", text: t`$\frac{43}{9}$`, correct: false, misconceptionId: "C02-M5", value: "43/9" },
        { key: "B", text: t`$\frac{43}{90}$`, correct: true, value: "43/90" },
        { key: "C", text: t`$\frac{47}{100}$`, correct: false, misconceptionId: "C02-M2", value: "47/100" },
        { key: "D", text: t`$\frac{47}{99}$`, correct: false, misconceptionId: "C02-M4", value: "47/99" },
      ],
      solution: {
        steps: [
          t`Let $x = 0.4777\ldots$ The $4$ does not repeat: $10x = 4.777\ldots$`,
          t`Shift by one more block: $100x = 47.777\ldots$`,
          t`The tails match: $100x - 10x = 47 - 4$, so $90x = 43$.`,
          t`So $x = \frac{43}{90}$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/real-numbers-9/Ex 2.1 Q3(v)" },
      stem: t`Write $2.514514514\ldots$ in $\frac{p}{q}$ form.`,
      verify: { kind: "value", inputs: {  }, params: { i: "2", n: "", r: "514" } },
      options: [
        { key: "A", text: t`$\frac{2512}{999}$`, correct: true, value: "2512/999" },
        { key: "B", text: t`$\frac{532}{9}$`, correct: false, misconceptionId: "C02-M1", value: "532/9" },
        { key: "C", text: t`$\frac{1257}{500}$`, correct: false, misconceptionId: "C02-M2", value: "1257/500" },
        { key: "D", text: t`$\frac{838}{333}$`, correct: false, misconceptionId: "C02-M3", value: "838/333" },
      ],
      solution: {
        steps: [
          t`$2.514514\ldots = 2.\overline{514}$. Let $x = 2.\overline{514}$; three digits repeat.`,
          t`So $1000x = 2514.514514\ldots$`,
          t`Subtract, whole parts too: $1000x - x$ $= 2514 - 2 = 2512$.`,
          t`So $999x = 2512$, and $x = \frac{2512}{999}$.`,
        ],
      },
    },
  ],
};
