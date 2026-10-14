import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c06: Concept = {
  id: "C06",
  status: "approved",
  hook: {
    prompt: t`A pizza shop has $6$ toppings, and you may choose any number of them, even none. **How many different pizzas can you order?**`,
    reveal: t`Count by size: $^6C_0 + {}^6C_1 + \ldots + {}^6C_6$ pizzas with $0, 1, \ldots, 6$ toppings. Or decide topping by topping: each one is in or out, $2$ ways each, so $2^6 = 64$ pizzas. The two counts must agree, so $^6C_0 + {}^6C_1 + \ldots + {}^6C_6 = 2^6 = 64$.`,
  },
  explanation: {
    intuition: t`In $(1 + x)^n = {}^nC_0 + {}^nC_1 x + {}^nC_2 x^2 + \ldots + {}^nC_n x^n$, the coefficients sit next to powers of $x$. Put $x = 1$ and every power becomes $1$, so the right side is just the sum of the coefficients, and the left side is $2^n$. Put $x = -1$ instead and the signs alternate, so the coefficients cancel to $0$. The same trick works for any binomial: put $x = 1$ and what is left is the sum of its coefficients.`,
    formal: t`**All the coefficients.** We write $C_r$ for $^nC_r$. Put $x = 1$ in $(1 + x)^n$:
$$C_0 + C_1 + C_2 + \ldots + C_n = 2^n$$

**Alternating signs.** Put $x = -1$:
$$C_0 - C_1 + C_2 - C_3 + \ldots + (-1)^n C_n = 0$$

**Odd-placed and even-placed.** The second line says $C_0 + C_2 + C_4 + \ldots = C_1 + C_3 + C_5 + \ldots$: the 1st, 3rd, 5th, ... coefficients (even $r$) add to the same as the 2nd, 4th, 6th, ... (odd $r$). The two halves add to $2^n$, so each is $2^{n-1}$. For $n = 4$: $1 + 6 + 1 = 4 + 4 = 8 = 2^3$.

**Missing terms.** If a sum stops short, start from $2^n$ (or $2^{n-1}$) and take off the coefficients that are left out. Only $C_0$ and $C_n$ are $1$; $C_1 = C_{n-1} = n$.

**Any binomial.** The sum of the coefficients of $(ax + b)^n$ is its value at $x = 1$: $(a + b)^n$, signs included.`,
    worked: {
      prompt: t`Find the value of $^{13}C_3 + {}^{13}C_5 + {}^{13}C_7 + \ldots + {}^{13}C_{13}$.`,
      steps: [
        t`Here $n = 13$ and every $r$ is odd. All the $C_r$ with odd $r$ together are $C_1 + C_3 + \ldots + C_{13}$.`,
        t`The odd-$r$ sum equals the even-$r$ sum, and together they make $2^{13}$. So $C_1 + C_3 + \ldots + C_{13} = 2^{12} = 4096$.`,
        t`The sum asked for leaves out $C_1$, and $^{13}C_1 = 13$ (not $1$).`,
        t`So the sum is $4096 - 13 = 4083$.`,
      ],
      answer: t`$4083$`,
    },
    visualSpec: t`A row of Pascal's triangle as bars: a slider flips $x$ between $1$ and $-1$, the bars add to $2^n$ or cancel to $0$, and the odd-placed and even-placed bars stack into two equal towers of height $2^{n-1}$.`,
  },
  misconceptions: [
    {
      id: "C06-M1",
      mistake: t`Mixes up the two totals: takes the sum of all the coefficients to be $2^{n-1}$, and an odd-placed or even-placed sum to be $2^n$`,
      remediation: t`All $n + 1$ coefficients add to $2^n$ (put $x = 1$ in $(1 + x)^n$). The odd-placed ones ($C_0 + C_2 + \ldots$) are half of that, $2^{n-1}$, and so are the even-placed ones ($C_1 + C_3 + \ldots$).`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M2",
      mistake: t`Uses the full total $2^n$ (or $2^{n-1}$) even when the sum leaves out some coefficients`,
      remediation: t`$2^n$ is the sum of **every** coefficient $C_0$ to $C_n$. When a sum starts late or stops early, take the missing coefficients off that total.`,
      fallback: { kind: "none" },
    },
    {
      id: "C06-M3",
      mistake: t`Takes off $1$ for each missing coefficient, as if every end coefficient were $1$`,
      remediation: t`Only $C_0$ and $C_n$ are $1$. The next ones in are $C_1 = C_{n-1} = n$, then $C_2 = \frac{n(n-1)}{2}$: work out each missing coefficient before taking it off.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M4",
      mistake: t`Takes the sum of the coefficients of $(ax + b)^n$ to be $2^n$, the sum of the $^nC_r$'s`,
      remediation: t`$2^n$ is the sum of the $^nC_r$'s only for $(1 + x)^n$. In $(ax + b)^n$ each coefficient also carries powers of $a$ and $b$, so put $x = 1$: the sum is $(a + b)^n$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M5",
      mistake: t`Puts $x = 1$ but drops the minus sign, getting $(|a| + |b|)^n$`,
      remediation: t`Putting $x = 1$ keeps every sign: $(3x - 2)$ becomes $3 - 2 = 1$, not $3 + 2$. A negative coefficient in the binomial makes some coefficients of the expansion negative.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C06-M6",
      mistake: t`Puts $x = 0$ instead of $x = 1$, which gives only the constant term`,
      remediation: t`At $x = 0$ every term with $x$ vanishes and only the constant term is left. To add all the coefficients, make every power of $x$ equal to $1$: put $x = 1$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C06-M1 to C06-M3 apply to sums of $^nC_r$; C06-M4 to C06-M6 to the coefficients of $(ax + b)^n$. C06-M2 gives the key when nothing is missing, and C06-M3 when every missing coefficient is $C_0$ or $C_n$: test them on sums that leave out some $C_r$ with $1 \le r \le n - 1$. C06-M5 needs a minus sign in the binomial, and C06-M4 gives the key when $a + b = 2$.`,
    t`The alternating sum $C_0 - C_1 + \ldots = 0$ is taught in the intuition and the formal section, not in an item: its only modelled wrong answer is $2^n$ (dropped signs), so no four-option item fits.`,
  ],
  items: [
    {
      id: "C06-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.5 Q2" },
      stem: t`Find the value of $^9C_2 + {}^9C_3 + {}^9C_4 + \ldots + {}^9C_9$.`,
      verify: { kind: "value", inputs: { n: "9", lo: "2", hi: "9", step: "1" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$246$`, correct: false, misconceptionId: "C06-M1", value: "246" },
        { key: "B", text: t`$512$`, correct: false, misconceptionId: "C06-M2", value: "512" },
        { key: "C", text: t`$510$`, correct: false, misconceptionId: "C06-M3", value: "510" },
        { key: "D", text: t`$502$`, correct: true, value: "502" },
      ],
      solution: {
        steps: [
          t`All ten coefficients add to $^9C_0 + {}^9C_1 + \ldots + {}^9C_9 = 2^9 = 512$.`,
          t`The sum leaves out $^9C_0 = 1$ and $^9C_1 = 9$.`,
          t`So the sum is $512 - 1 - 9 = 502$.`,
        ],
      },
    },
    {
      id: "C06-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc I Q7" },
      stem: t`Find the value of $^{11}C_2 + {}^{11}C_4 + {}^{11}C_6 + {}^{11}C_8$.`,
      verify: { kind: "value", inputs: { n: "11", lo: "2", hi: "8", step: "2" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$1012$`, correct: true, value: "1012" },
        { key: "B", text: t`$2036$`, correct: false, misconceptionId: "C06-M1", value: "2036" },
        { key: "C", text: t`$1024$`, correct: false, misconceptionId: "C06-M2", value: "1024" },
        { key: "D", text: t`$1022$`, correct: false, misconceptionId: "C06-M3", value: "1022" },
      ],
      solution: {
        steps: [
          t`For $n = 11$ the sum of the $C_r$ with even $r$, $C_0 + C_2 + \ldots + C_{10}$, is half of $2^{11}$: $2^{10} = 1024$.`,
          t`The sum leaves out $^{11}C_0 = 1$ and $^{11}C_{10} = {}^{11}C_1 = 11$.`,
          t`So the sum is $1024 - 1 - 11 = 1012$, that is $2^{10} - 12$.`,
        ],
      },
    },
    {
      id: "C06-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Misc I Q6" },
      stem: t`Find the value of $^{14}C_1 + {}^{14}C_3 + {}^{14}C_5 + \ldots + {}^{14}C_{11}$.`,
      verify: { kind: "value", inputs: { n: "14", lo: "1", hi: "11", step: "2" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$8178$`, correct: true, value: "8178" },
        { key: "B", text: t`$16370$`, correct: false, misconceptionId: "C06-M1", value: "16370" },
        { key: "C", text: t`$8192$`, correct: false, misconceptionId: "C06-M2", value: "8192" },
        { key: "D", text: t`$8191$`, correct: false, misconceptionId: "C06-M3", value: "8191" },
      ],
      solution: {
        steps: [
          t`For $n = 14$ the sum of the $C_r$ with odd $r$, $C_1 + C_3 + \ldots + C_{13}$, is half of $2^{14}$: $2^{13} = 8192$.`,
          t`The sum stops at $C_{11}$, so it leaves out $^{14}C_{13} = {}^{14}C_1 = 14$.`,
          t`So the sum is $8192 - 14 = 8178$, that is $2^{13} - 14$.`,
        ],
      },
    },
    {
      id: "C06-Q4",
      source: { kind: "authored" },
      stem: t`Find the sum of the coefficients in the expansion of $(3x - 2)^5$.`,
      verify: { kind: "value", inputs: { a: "3", b: "-2", n: "5" }, params: { ask: "coeff" } },
      options: [
        { key: "A", text: t`$-32$`, correct: false, misconceptionId: "C06-M6", value: "-32" },
        { key: "B", text: t`$1$`, correct: true, value: "1" },
        { key: "C", text: t`$32$`, correct: false, misconceptionId: "C06-M4", value: "32" },
        { key: "D", text: t`$3125$`, correct: false, misconceptionId: "C06-M5", value: "3125" },
      ],
      solution: {
        steps: [
          t`Write $(3x - 2)^5 = c_0 + c_1 x + \ldots + c_5 x^5$. At $x = 1$ every power of $x$ is $1$, leaving $c_0 + c_1 + \ldots + c_5$.`,
          t`So the sum of the coefficients is $(3 \cdot 1 - 2)^5 = 1^5 = 1$.`,
        ],
      },
    },
    {
      id: "C06-Q5",
      source: { kind: "authored" },
      stem: t`Find the sum of the coefficients in the expansion of $(5 - 2x)^4$.`,
      verify: { kind: "value", inputs: { a: "-2", b: "5", n: "4" }, params: { ask: "coeff" } },
      options: [
        { key: "A", text: t`$81$`, correct: true, value: "81" },
        { key: "B", text: t`$16$`, correct: false, misconceptionId: "C06-M4", value: "16" },
        { key: "C", text: t`$2401$`, correct: false, misconceptionId: "C06-M5", value: "2401" },
        { key: "D", text: t`$625$`, correct: false, misconceptionId: "C06-M6", value: "625" },
      ],
      solution: {
        steps: [
          t`At $x = 1$ every power of $x$ is $1$, so $(5 - 2x)^4$ becomes the sum of its coefficients.`,
          t`The sum is $(5 - 2 \cdot 1)^4 = 3^4 = 81$.`,
        ],
      },
    },
    {
      id: "C06-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/binomial-theorem-11/Ex 4.5 Q1" },
      stem: t`Find the value of $^8C_0 + {}^8C_1 + {}^8C_2 + \ldots + {}^8C_6$.`,
      verify: { kind: "value", inputs: { n: "8", lo: "0", hi: "6", step: "1" }, params: { ask: "sum" } },
      options: [
        { key: "A", text: t`$256$`, correct: false, misconceptionId: "C06-M2", value: "256" },
        { key: "B", text: t`$254$`, correct: false, misconceptionId: "C06-M3", value: "254" },
        { key: "C", text: t`$247$`, correct: true, value: "247" },
        { key: "D", text: t`$119$`, correct: false, misconceptionId: "C06-M1", value: "119" },
      ],
      solution: {
        steps: [
          t`All nine coefficients add to $^8C_0 + {}^8C_1 + \ldots + {}^8C_8 = 2^8 = 256$.`,
          t`The sum stops at $^8C_6$, so it leaves out $^8C_7 = 8$ and $^8C_8 = 1$.`,
          t`So the sum is $256 - 8 - 1 = 247$.`,
        ],
      },
    },
  ],
};
