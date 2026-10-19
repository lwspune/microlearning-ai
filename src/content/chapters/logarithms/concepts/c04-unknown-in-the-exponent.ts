import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c04: Concept = {
  id: "C04",
  status: "approved",
  hook: {
    prompt: t`$2^{10} = 1024$, so $2^x = 1000$ for an $x$ just under $10$. **How do you find that $x$ without trial and error?**`,
    reveal: t`Take $\log_{10}$ of both sides: $x \log 2 = \log 1000 = 3$. So $x = \frac{3}{\log 2}$ $= \frac{3}{0.3010} \approx 9.97$.`,
  },
  explanation: {
    intuition: [
      t`An **exponent** is the power a number is raised to: in $2^5 = 32$, the exponent is $5$.`,
      t`In $2^x = 1000$ the unknown sits in the exponent, where ordinary algebra can't reach it.`,
      t`The power rule of logarithms brings an exponent down in front: $\log 2^x = x \log 2$.`,
      t`So take the logarithm of both sides; the exponent becomes an ordinary factor.`,
      t`Then divide: $x = \frac{\log 1000}{\log 2}$, one log over another.`,
      t`NDA supplies the logs you need, such as $\log_{10} 2 = 0.3010$, and asks you to round.`,
    ],
    formal: [
      {
        title: "Bring the exponent down",
        points: [
          t`Take $a > 0$, $a \ne 1$ and $b > 0$, and solve $a^x = b$.`,
          t`Take $\log_{10}$ of both sides; from here on, $\log$ means $\log_{10}$.`,
          t`The power rule gives $x \log a = \log b$.`,
          t`Divide by $\log a$: $x = \dfrac{\log b}{\log a}$.`,
          t`By change of base this is $x = \log_a b$, so any one base works for both logs.`,
          t`Check: $8^x = 32$ gives $x = \frac{5\log 2}{3\log 2}$ $= \frac{5}{3}$.`,
        ],
      },
      {
        title: "Logs from the given values",
        points: [
          t`NDA usually gives $\log 2 = 0.3010$ and $\log 3 = 0.4771$; and $\log 10 = 1$.`,
          t`Build other logs from products: $\log 12 = 2\log 2 + \log 3$ $= 1.0791$.`,
          t`$\log 5 = \log \frac{10}{2} = 1 - 0.3010$ $= 0.6990$.`,
          t`A number below $1$ has a **negative** log: $\log 0.6 = \log \frac{6}{10}$ $= 0.7781 - 1 = -0.2219$.`,
          t`So subtract the $1$ from the log, never the log from $1$.`,
          t`Round only at the end; **to the nearest tenth** means to one decimal place.`,
        ],
      },
      {
        title: "Divide the logs, never subtract",
        points: [
          t`$\frac{\log b}{\log a}$ is one log divided by another, not the log of a quotient.`,
          t`The quotient rule's $\log \frac{b}{a} = \log b - \log a$ is a different number.`,
          t`For $3^x = 12$: $x = \frac{1.0791}{0.4771}$ $\approx 2.26$, but $\log 12 - \log 3$ $= \log 4 = 0.6020$.`,
          t`Keep the order: the log of the base, $a$, goes **underneath**.`,
          t`Upside down, $\frac{\log 3}{\log 12} \approx 0.44$ solves $12^x = 3$, a different equation.`,
          t`Check roughly: $3^2 = 9$ and $3^3 = 27$, so $x$ lies between $2$ and $3$.`,
        ],
      },
      {
        title: "Move x into a log",
        points: [
          t`In $x + \log_c (\ldots) = \ldots$, the lone $x$ stops the logs combining.`,
          t`Write it as a log: $x = \log_c c^x$, because $\log_c c = 1$.`,
          t`Likewise $x \log_c q = \log_c q^x$, by the power rule.`,
          t`Make each side one log, then compare: $\log_c M = \log_c N$ means $M = N$.`,
          t`An **index law**, a rule for powers, then cancels: $\frac{c^x}{q^x} = (\frac{c}{q})^x$.`,
          t`Put $t = p^x$ for the power left over, solve for $t > 0$, then return to $x$.`,
        ],
      },
      {
        title: "Take logs of an inequality",
        points: [
          t`In $x^{\log_a x}$, both the base and the exponent contain $x$.`,
          t`Take $\log_a$: $\log_a x^{\log_a x} = (\log_a x)^2$, by the power rule.`,
          t`For a base $a > 1$, taking $\log_a$ keeps the direction of $<$ or $>$.`,
          t`For $x^{\log_3 x} > 81 = 3^4$, put $u = \log_3 x$: $u^2 > 4$.`,
          t`$u^2 > 4$ means $u > 2$ **or** $u < -2$: outside $-2$ and $2$, on both sides.`,
          t`Return to $x = 3^u$: $x > 9$ or $0 < x < \frac{1}{9}$.`,
        ],
      },
    ],
    worked: {
      prompt: t`Solve $x + \log_6(1 + 2^x)$ $= x\log_6 3 + \log_6 72$.`,
      steps: [
        t`Write the lone $x$ as a log, $x = \log_6 6^x$; and $x\log_6 3 = \log_6 3^x$.`,
        t`Each side is now one log, so compare: $6^x(1 + 2^x) = 3^x \cdot 72$.`,
        t`Divide by $3^x$, since $\frac{6^x}{3^x} = 2^x$: $2^x(1 + 2^x) = 72$.`,
        t`Put $t = 2^x > 0$: $t^2 + t - 72 = 0$, $(t - 8)(t + 9) = 0$, so $t = 8$.`,
        t`$2^x = 8$ gives $x = 3$: the answer is $x$, not $t$.`,
      ],
      answer: t`$x = 3$.`,
    },
    visualSpec: t`Slide $b$ along a scale and watch $x = \frac{\log b}{\log a}$ change, with the powers $a^1, a^2, a^3$ marked so the answer can be checked by eye.`,
  },
  misconceptions: [
    {
      id: "C04-M1",
      mistake: t`Turning the quotient of logs into the log of a quotient: $x = \log b - \log a$`,
      remediation: t`$a^x = b$ gives $x = \frac{\log b}{\log a}$: divide the two logs. $\log b - \log a$ is $\log \frac{b}{a}$, a different number.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C04-M2",
      mistake: t`Putting the logs upside down: $x = \frac{\log a}{\log b}$`,
      remediation: t`The log of the base goes underneath: $a^x = b$ gives $x = \frac{\log b}{\log a}$ $= \log_a b$. Upside down is $\log_b a$, its reciprocal.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C04-M3",
      mistake: t`Taking the log of a number below $1$ as positive, e.g. $\log 0.2 = 1 - \log 2$`,
      remediation: t`A number below $1$ has a negative log: $\log 0.2 = \log \frac{2}{10}$ $= \log 2 - 1 = -0.6990$. Subtract the $1$ from the log.`,
      fallback: { kind: "ext", topic: "logarithm rules (Functions)" },
    },
    {
      id: "C04-M4",
      mistake: t`Giving the helper unknown ($t = 3^x$, or the condition on $u = \log_a x$) as the answer for $x$`,
      remediation: t`After solving for the helper, go back to $x$: $2^x = 8$ gives $x = 3$, not $8$; and $\log_3 x > 2$ gives $x > 9$, not $x > 2$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M5",
      mistake: t`Keeping only the positive root of a squared inequality: $u^2 > 1$ read as $u > 1$`,
      remediation: t`$u^2 > 4$ holds for $u > 2$ **or** $u < -2$, and $u^2 \le 9$ means $-3 \le u \le 3$. Negative $u$ count too.`,
      fallback: { kind: "none" },
    },
    {
      id: "C04-M6",
      mistake: t`Taking the wrong region of a squared inequality: $u^2 > 1$ read as $-1 < u < 1$`,
      remediation: t`$u^2 > k$ lies **outside** the roots $\pm\sqrt{k}$, and $u^2 < k$ **between** them. Test $u = 0$ to see which.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C04-M3 applies only when the base or the right side is below $1$; C04-M1 and C04-M2 only to $a^x = b$ and the move-$x$-into-a-log items; C04-M5 and C04-M6 only to inequalities.`,
    t`C04-Q3 is NDA 2018 Apr Q11 with $\log_{15} 12$ changed to $\log_{15} 90$: the original gives $t = 3^x = 3$, where the upside-down model C04-M2 also gives the key $x = 1$. The bank keys that PYQ $3$, which is $t$, not $x$ (C04-M4); the correct answer is $1$.`,
    t`C04-Q4 is NDA 2017 Sep Q1 with $\log_{10} 6$ changed to $\log_{10} 12$, for the same reason ($t = 2 = p$ there).`,
    t`Counting digits of a power ($\lfloor n\log_{10} a \rfloor + 1$) is left out: Functions C07 opens with it, and no PYQ in this set needs it.`,
  ],
  items: [
    {
      id: "C04-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Sep Q31" },
      stem: t`If $(0.2)^x = 2$ and $\log_{10} 2 = 0.3010$, then the value of $x$ to the nearest tenth is:`,
      verify: { kind: "value", inputs: { a: "1/5", b: "2" }, params: { ask: "solve", dp: "1" } },
      options: [
        { key: "A", text: t`$-2.3$`, correct: false, misconceptionId: "C04-M2", value: "-23/10" },
        { key: "B", text: t`$0.4$`, correct: false, misconceptionId: "C04-M3", value: "2/5" },
        { key: "C", text: t`$-0.4$`, correct: true, value: "-2/5" },
        { key: "D", text: t`$1.0$`, correct: false, misconceptionId: "C04-M1", value: "1" },
      ],
      solution: {
        steps: [
          t`$\log 0.2 = \log \frac{2}{10}$ $= 0.3010 - 1 = -0.6990$.`,
          t`Take logs: $x \log 0.2 = \log 2$, so $x = \frac{0.3010}{-0.6990}$.`,
          t`$x \approx -0.431$, which is $-0.4$ to the nearest tenth.`,
        ],
      },
    },
    {
      id: "C04-Q2",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`If $6^x = 0.4$, $\log_{10} 2 = 0.3010$ and $\log_{10} 3 = 0.4771$, then the value of $x$ correct to two decimal places is:`,
      verify: { kind: "value", inputs: { a: "6", b: "2/5" }, params: { ask: "solve", dp: "2" } },
      options: [
        { key: "A", text: t`$-1.18$`, correct: false, misconceptionId: "C04-M1", value: "-59/50" },
        { key: "B", text: t`$-1.96$`, correct: false, misconceptionId: "C04-M2", value: "-49/25" },
        { key: "C", text: t`$0.51$`, correct: false, misconceptionId: "C04-M3", value: "51/100" },
        { key: "D", text: t`$-0.51$`, correct: true, value: "-51/100" },
      ],
      solution: {
        steps: [
          t`$\log 0.4 = \log \frac{4}{10}$ $= 2(0.3010) - 1 = -0.3980$.`,
          t`$\log 6 = 0.3010 + 0.4771 = 0.7781$.`,
          t`$x = \frac{\log 0.4}{\log 6}$ $= \frac{-0.3980}{0.7781}$ $\approx -0.5115$, so $x = -0.51$.`,
        ],
      },
    },
    {
      id: "C04-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Apr Q11" },
      stem: t`If $x + \log_{15}(1 + 3^x)$ $= x\log_{15} 5 + \log_{15} 90$, then $x$ is equal to:`,
      verify: { kind: "value", inputs: { c: "15", p: "3", q: "5", r: "90" }, params: { ask: "move" } },
      options: [
        { key: "A", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C04-M2", value: "1/2" },
        { key: "B", text: t`$9$`, correct: false, misconceptionId: "C04-M4", value: "9" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$\log_{10} 3$`, correct: false, misconceptionId: "C04-M1", value: "log(3)/log(10)" },
      ],
      solution: {
        steps: [
          t`$x = \log_{15} 15^x$ and $x\log_{15} 5 = \log_{15} 5^x$, so $15^x(1 + 3^x) = 5^x \cdot 90$.`,
          t`Divide by $5^x$: $3^x(1 + 3^x) = 90$. With $t = 3^x$: $t^2 + t - 90 = 0$.`,
          t`$(t - 9)(t + 10) = 0$ and $t > 0$, so $3^x = 9$ and $x = 2$.`,
        ],
      },
    },
    {
      id: "C04-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2017 Sep Q1" },
      stem: t`If $x + \log_{10}(1 + 2^x)$ $= x\log_{10} 5 + \log_{10} 12$, then $x$ is equal to:`,
      verify: { kind: "value", inputs: { c: "10", p: "2", q: "5", r: "12" }, params: { ask: "move" } },
      options: [
        { key: "A", text: t`$\log_{10} \frac{3}{2}$`, correct: false, misconceptionId: "C04-M1", value: "(-log(2) + log(3))/log(10)" },
        { key: "B", text: t`$\log_3 2$`, correct: false, misconceptionId: "C04-M2", value: "log(2)/log(3)" },
        { key: "C", text: t`$3$`, correct: false, misconceptionId: "C04-M4", value: "3" },
        { key: "D", text: t`$\log_2 3$`, correct: true, value: "log(3)/log(2)" },
      ],
      solution: {
        steps: [
          t`$x = \log_{10} 10^x$ and $x\log_{10} 5 = \log_{10} 5^x$, so $10^x(1 + 2^x) = 5^x \cdot 12$.`,
          t`Divide by $5^x$: $2^x(1 + 2^x) = 12$. With $t = 2^x$: $t^2 + t - 12 = 0$.`,
          t`$(t - 3)(t + 4) = 0$ and $t > 0$, so $2^x = 3$.`,
          t`$x = \frac{\log 3}{\log 2} = \log_2 3$.`,
        ],
      },
    },
    {
      id: "C04-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Sep Q36" },
      stem: t`If $x^{\log_7 x} > 7$, where $x > 0$, then which one of the following is correct?`,
      verify: { kind: "value", inputs: { a: "7", k: "1" }, params: { ask: "ineq", rel: ">" } },
      options: [
        { key: "A", text: t`$x \in (\frac{1}{7}, 7)$`, correct: false, misconceptionId: "C04-M6", value: "Interval.open(1/7, 7)" },
        { key: "B", text: t`$x \in (0, \frac{1}{7}) \cup (7, \infty)$`, correct: true, value: "Union(Interval.open(0, 1/7), Interval.open(7, oo))" },
        { key: "C", text: t`$x \in (1, \infty)$`, correct: false, misconceptionId: "C04-M4", value: "Interval.open(1, oo)" },
        { key: "D", text: t`$x \in (7, \infty)$`, correct: false, misconceptionId: "C04-M5", value: "Interval.open(7, oo)" },
      ],
      solution: {
        steps: [
          t`Take $\log_7$, which keeps $>$ as $7 > 1$: $(\log_7 x)^2 > 1$.`,
          t`With $u = \log_7 x$: $u^2 > 1$ means $u > 1$ or $u < -1$.`,
          t`So $x > 7$ or $0 < x < \frac{1}{7}$: $x \in (0, \frac{1}{7}) \cup (7, \infty)$.`,
        ],
      },
    },
    {
      id: "C04-Q6",
      source: { kind: "exam-style", exam: "NDA" },
      stem: t`The set of all $x > 0$ for which $x^{\log_2 x} \le 16$ is:`,
      verify: { kind: "value", inputs: { a: "2", k: "4" }, params: { ask: "ineq", rel: "<=" } },
      options: [
        { key: "A", text: t`$[\frac{1}{4}, 4]$`, correct: true, value: "Interval(1/4, 4)" },
        { key: "B", text: t`$(0, 2]$`, correct: false, misconceptionId: "C04-M4", value: "Interval.Lopen(0, 2)" },
        { key: "C", text: t`$(0, 4]$`, correct: false, misconceptionId: "C04-M5", value: "Interval.Lopen(0, 4)" },
        { key: "D", text: t`$(0, \frac{1}{4}] \cup [4, \infty)$`, correct: false, misconceptionId: "C04-M6", value: "Union(Interval.Lopen(0, 1/4), Interval(4, oo))" },
      ],
      solution: {
        steps: [
          t`$16 = 2^4$. Take $\log_2$, which keeps $\le$: $(\log_2 x)^2 \le 4$.`,
          t`With $u = \log_2 x$: $u^2 \le 4$ means $-2 \le u \le 2$.`,
          t`So $2^{-2} \le x \le 2^2$: $x \in [\frac{1}{4}, 4]$.`,
        ],
      },
    },
  ],
};
