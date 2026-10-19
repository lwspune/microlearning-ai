import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c11: Concept = {
  id: "C11",
  status: "approved",
  hook: {
    prompt: t`$\sin\theta$ can reach $1$, and so can $\cos\theta$. Can $\sin\theta + \cos\theta$ ever reach $2$?`,
    reveal: t`No. $\sin\theta = 1$ only where $\cos\theta = 0$, so the two never peak together. The sum tops out at $\sqrt{2}$, about $1.41$.`,
  },
  explanation: {
    intuition: [
      t`The **greatest value** of an expression is the largest number it reaches as $\theta$ varies; the **least value** is the smallest.`,
      t`On its own, $\sin\theta$ runs from $-1$ to $1$, and so does $\cos\theta$.`,
      t`But they never peak together: where $\sin\theta = 1$, $\cos\theta = 0$.`,
      t`So $a\sin\theta + b\cos\theta$ can't reach $a + b$: its two terms take turns.`,
      t`Read $\sin(A + B)$ backwards to write the mix as one sine, $R\sin(\theta + \alpha)$.`,
      t`One sine runs from $-1$ to $1$, so the mix runs from $-R$ to $R$.`,
    ],
    formal: [
      {
        title: "One sine from two terms",
        points: [
          t`Expand: $R\sin(\theta + \alpha)$ $= R\cos\alpha\sin\theta$ $+ R\sin\alpha\cos\theta$.`,
          t`Match it with $a\sin\theta + b\cos\theta$: $R\cos\alpha = a$ and $R\sin\alpha = b$.`,
          t`Square and add: $R^2(\cos^2\alpha + \sin^2\alpha)$ $= a^2 + b^2$, so $R = \sqrt{a^2 + b^2}$.`,
          t`$R$ is the **amplitude**: the height of the single sine wave above its middle line.`,
          t`The angle $\alpha$ has $\cos\alpha = \frac{a}{R}$ and $\sin\alpha = \frac{b}{R}$, so $\tan\alpha = \frac{b}{a}$.`,
          t`For example, $3\sin\theta + 4\cos\theta$ $= 5\sin(\theta + \alpha)$, with $\tan\alpha = \frac{4}{3}$.`,
        ],
      },
      {
        title: "Greatest and least values",
        points: [
          t`$\sin(\theta + \alpha)$ runs from $-1$ to $1$, like any sine.`,
          t`So $a\sin\theta + b\cos\theta$ runs from $-\sqrt{a^2 + b^2}$ to $\sqrt{a^2 + b^2}$.`,
          t`The greatest value is $\sqrt{a^2 + b^2}$, not $a + b$: the terms don't peak together.`,
          t`The least value is $-\sqrt{a^2 + b^2}$, not $0$: a sine goes all the way down to $-1$.`,
          t`For example, $3\sin\theta + 4\cos\theta$ runs from $-5$ to $5$, and never reaches $7$.`,
        ],
      },
      {
        title: "A constant added",
        points: [
          t`A **constant** is a term with no $\theta$ in it, like the $5$ in $3\cos\theta + 4\sin\theta + 5$.`,
          t`It shifts every value by the same amount.`,
          t`So $c + a\sin\theta + b\cos\theta$ runs from $c - \sqrt{a^2 + b^2}$ to $c + \sqrt{a^2 + b^2}$.`,
          t`For $3\cos\theta + 4\sin\theta + 5$: $R = 5$, so it runs from $0$ to $10$.`,
          t`Keep the constant to the end: without it you get $-5$ to $5$.`,
        ],
      },
      {
        title: "Where the greatest value is",
        points: [
          t`$R\sin(\theta + \alpha)$ is greatest when $\theta + \alpha = \frac{\pi}{2}$, where the sine is $1$.`,
          t`It is least when $\theta + \alpha = \frac{3\pi}{2}$, where the sine is $-1$.`,
          t`Find $\alpha$ from $\cos\alpha = \frac{a}{R}$ and $\sin\alpha = \frac{b}{R}$: $a$, with $\sin\theta$, goes with $\cos\alpha$.`,
          t`For example, $\sin\theta + \sqrt{3}\cos\theta$ $= 2\sin\left(\theta + \frac{\pi}{3}\right)$, greatest at $\theta = \frac{\pi}{6}$.`,
          t`The peak is at $45^\circ$ only when $a = b$; otherwise it sits nearer the bigger term's peak.`,
        ],
      },
      {
        title: "Reduce it first",
        points: [
          t`Some expressions become $a\sin u + b\cos u$ only after an identity, for an angle $u$ such as $2\theta$ or $3\theta$.`,
          t`Expand a compound angle, such as $\sin\left(\theta + \frac{\pi}{6}\right)$, with the sum formula.`,
          t`Spot triple angles: $3\sin\theta - 4\sin^3\theta = \sin 3\theta$ and $4\cos^3\theta - 3\cos\theta = \cos 3\theta$.`,
          t`Turn squares into double angles: $\sin^2\theta = \frac{1 - \cos 2\theta}{2}$ and $\cos^2\theta = \frac{1 + \cos 2\theta}{2}$.`,
          t`A product $\sin\theta\cos\theta$ is $\frac{1}{2}\sin 2\theta$, so it runs from $-\frac{1}{2}$ to $\frac{1}{2}$.`,
          t`Then read the range off the single sine or cosine.`,
        ],
      },
      {
        title: "AM–GM for tan² and cot²",
        points: [
          t`For positive $u$ and $v$, the **arithmetic mean** is $\frac{u + v}{2}$ and the **geometric mean** is $\sqrt{uv}$.`,
          t`The **AM–GM inequality** says AM $\ge$ GM, so $u + v \ge 2\sqrt{uv}$, with equality when $u = v$.`,
          t`For $p\tan^2\theta + q\cot^2\theta$ with $p, q > 0$, the product is $pq\tan^2\theta\cot^2\theta = pq$.`,
          t`So $p\tan^2\theta + q\cot^2\theta \ge 2\sqrt{pq}$: that is its least value.`,
          t`Equality needs $p\tan^2\theta = q\cot^2\theta$, which is $\theta = 45^\circ$ only when $p = q$.`,
          t`Turn $\sec^2\theta$ into $1 + \tan^2\theta$ and $\operatorname{cosec}^2\theta$ into $1 + \cot^2\theta$ first, and keep the $1$s.`,
        ],
      },
    ],
    worked: {
      prompt: t`Find the greatest and least values of $\sin\theta + \sin\left(\theta + \frac{\pi}{3}\right)$, and the $\theta$ in $[0, 2\pi)$ where it is least.`,
      steps: [
        t`Expand: $\sin\left(\theta + \frac{\pi}{3}\right)$ $= \frac{1}{2}\sin\theta + \frac{\sqrt{3}}{2}\cos\theta$.`,
        t`So the expression is $\frac{3}{2}\sin\theta + \frac{\sqrt{3}}{2}\cos\theta$: $a = \frac{3}{2}$, $b = \frac{\sqrt{3}}{2}$.`,
        t`$R = \sqrt{\frac{9}{4} + \frac{3}{4}}$ $= \sqrt{3}$: it runs from $-\sqrt{3}$ to $\sqrt{3}$, not from $-2$ to $2$.`,
        t`$\cos\alpha = \frac{3}{2\sqrt{3}} = \frac{\sqrt{3}}{2}$ and $\sin\alpha = \frac{1}{2}$, so $\alpha = \frac{\pi}{6}$.`,
        t`It is least when $\theta + \frac{\pi}{6} = \frac{3\pi}{2}$, that is $\theta = \frac{4\pi}{3}$.`,
      ],
      answer: t`Greatest value $\sqrt{3}$, least value $-\sqrt{3}$, reached at $\theta = \frac{4\pi}{3}$.`,
    },
    visualSpec: t`Drag $a$ and $b$: the graphs of $a\sin\theta$, $b\cos\theta$ and their sum, with the sum's peak height $\sqrt{a^2 + b^2}$ and the $\theta$ where it occurs.`,
  },
  misconceptions: [
    {
      id: "C11-M1",
      mistake: t`Adding the terms' separate greatest (or least) values, as if every term peaks at the same $\theta$; asked where the peak is, taking the bigger term's peak`,
      remediation: t`The terms reach their extremes at different angles, so their extremes don't add. Combine them first: $a\sin\theta + b\cos\theta = R\sin(\theta + \alpha)$ peaks at $\theta + \alpha = \frac{\pi}{2}$, with value $\sqrt{a^2 + b^2}$; for $\tan^2$ and $\cot^2$ terms, use AM–GM.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M2",
      mistake: t`Dropping the square root: $R = a^2 + b^2$`,
      remediation: t`Squaring and adding gives $R^2 = a^2 + b^2$, so $R = \sqrt{a^2 + b^2}$: for $3\sin\theta + 4\cos\theta$, $R = \sqrt{25} = 5$, not $25$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M3",
      mistake: t`Taking the least value of a sine or cosine as $0$, so $c + R\sin(\theta + \alpha)$ is least at $c$`,
      remediation: t`A sine or cosine goes down to $-1$, not $0$. So $c + R\sin(\theta + \alpha)$ runs down to $c - R$.`,
      fallback: { kind: "ext", topic: "range of sine and cosine (Trigonometric Functions)" },
    },
    {
      id: "C11-M4",
      mistake: t`Matching the ratios the wrong way round: $\tan\alpha = \frac{a}{b}$ in $a\sin\theta + b\cos\theta = R\sin(\theta + \alpha)$`,
      remediation: t`Expand $R\sin(\theta + \alpha)$ $= R\cos\alpha\sin\theta + R\sin\alpha\cos\theta$: the coefficient of $\sin\theta$ is $R\cos\alpha = a$, so $\tan\alpha = \frac{b}{a}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C11-M5",
      mistake: t`Dropping the constant term, or the $1$s that $\sec^2\theta = 1 + \tan^2\theta$ brings`,
      remediation: t`A constant shifts every value: $c + R\sin(\theta + \alpha)$ runs from $c - R$ to $c + R$. Keep it, and keep the $1$s from $\sec^2\theta = 1 + \tan^2\theta$ and $\operatorname{cosec}^2\theta = 1 + \cot^2\theta$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C11-M6",
      mistake: t`Putting the extreme at $45^\circ$, where $\sin\theta = \cos\theta$, whatever $a$ and $b$ are`,
      remediation: t`The peak is at $\theta = \frac{\pi}{2} - \alpha$, where $\tan\alpha = \frac{b}{a}$: that is $45^\circ$ only when $a = b$. In AM–GM, equality needs the two terms equal, $p\tan^2\theta = q\cot^2\theta$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C11-M4 and C11-M6 give the key whenever $a = b$ (swapping equal ratios changes nothing, and the peak really is at $45^\circ$); diagnose them on items with $a \ne b$.`,
    t`C11-M1 and C11-M2 agree whenever $a = b = 1$ ($1 + 1 = 1^2 + 1^2$), as in the PYQ's $\sin\alpha + \cos\alpha$: C11-Q1 uses $\sqrt{3}\sin\alpha$ for that reason.`,
    t`C11-M3 shows only on least values, C11-M4 only on where the peak is. On C11-Q6, C11-M1 adds the terms as written ($\sin^2\theta \ge 0$, $\cos^4\theta \ge 0$): the reduced form has one cosine and nothing to add.`,
  ],
  items: [
    {
      id: "C11-Q1",
      source: { kind: "exam-style", exam: "NDA", ref: "2025 Apr Q34" },
      stem: t`The least value of $\sqrt{3}\sin\alpha - \sin(\alpha - 90^\circ)$ is:`,
      verify: { kind: "value", inputs: { a: "sqrt(3)", b: "1", c: "0" }, params: { kind: "R", e: "sqrt(3)*sin(t) - sin(t - pi/2)", u: "t", ask: "min", terms: "sqrt(3)*sin(t); -sin(t - pi/2)" } },
      options: [
        { key: "A", text: t`$-2$`, correct: true, value: "-2" },
        { key: "B", text: t`$- \sqrt{3} - 1$`, correct: false, misconceptionId: "C11-M1", value: "-sqrt(3) - 1" },
        { key: "C", text: t`$-4$`, correct: false, misconceptionId: "C11-M2", value: "-4" },
        { key: "D", text: t`$0$`, correct: false, misconceptionId: "C11-M3", value: "0" },
      ],
      solution: {
        steps: [
          t`$\sin(\alpha - 90^\circ) = -\cos\alpha$, so the expression is $\sqrt{3}\sin\alpha + \cos\alpha$.`,
          t`$R = \sqrt{3 + 1} = 2$: it equals $2\sin(\alpha + 30^\circ)$.`,
          t`A sine goes down to $-1$, so the least value is $-2$.`,
        ],
      },
    },
    {
      id: "C11-Q2",
      source: { kind: "exam-style", exam: "NDA", ref: "2026 Apr Q30" },
      stem: t`For $0 \le x \le \frac{\pi}{2}$, $\cos x + \sqrt{3}\sin x$ is greatest when $x$ equals:`,
      verify: { kind: "value", inputs: { a: "sqrt(3)", b: "1", c: "0" }, params: { kind: "R", e: "cos(t) + sqrt(3)*sin(t)", u: "t", ask: "at", lo: "0", hi: "pi/2" } },
      options: [
        { key: "A", text: t`$\frac{\pi}{6}$`, correct: false, misconceptionId: "C11-M4", value: "pi/6" },
        { key: "B", text: t`$\frac{\pi}{4}$`, correct: false, misconceptionId: "C11-M6", value: "pi/4" },
        { key: "C", text: t`$\frac{\pi}{3}$`, correct: true, value: "pi/3" },
        { key: "D", text: t`$\frac{\pi}{2}$`, correct: false, misconceptionId: "C11-M1", value: "pi/2" },
      ],
      solution: {
        steps: [
          t`For $\sqrt{3}\sin x + \cos x$: $R = \sqrt{3 + 1} = 2$, $\cos\alpha = \frac{\sqrt{3}}{2}$, $\sin\alpha = \frac{1}{2}$.`,
          t`So $\alpha = \frac{\pi}{6}$, and $\cos x + \sqrt{3}\sin x$ $= 2\sin\left(x + \frac{\pi}{6}\right)$.`,
          t`It is greatest when $x + \frac{\pi}{6} = \frac{\pi}{2}$, that is $x = \frac{\pi}{3}$.`,
        ],
      },
    },
    {
      id: "C11-Q3",
      source: { kind: "exam-style", exam: "NDA", ref: "2020 Apr Q96" },
      stem: t`The least value of $7 + 3\cos\left(A + \frac{\pi}{3}\right)$ $- 4\sin\left(A + \frac{\pi}{3}\right)$, for real $A$, is:`,
      verify: { kind: "value", inputs: { a: "-4", b: "3", c: "7" }, params: { kind: "R", e: "7 + 3*cos(t + pi/3) - 4*sin(t + pi/3)", u: "t + pi/3", ask: "min" } },
      options: [
        { key: "A", text: t`$0$`, correct: false, misconceptionId: "C11-M1", value: "0" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C11-M3", value: "7" },
        { key: "C", text: t`$-5$`, correct: false, misconceptionId: "C11-M5", value: "-5" },
        { key: "D", text: t`$2$`, correct: true, value: "2" },
      ],
      solution: {
        steps: [
          t`Let $u = A + \frac{\pi}{3}$: the expression is $7 - 4\sin u + 3\cos u$.`,
          t`$R = \sqrt{16 + 9} = 5$, so $-4\sin u + 3\cos u$ runs from $-5$ to $5$.`,
          t`Add the constant: the least value is $7 - 5 = 2$.`,
        ],
      },
    },
    {
      id: "C11-Q4",
      source: { kind: "exam-style", exam: "NDA", ref: "2022 Sep Q79" },
      stem: t`The greatest value of $3\sin x - 4\sin^3 x$ $+ 4\sqrt{3}\cos^3 x - 3\sqrt{3}\cos x$ is:`,
      verify: { kind: "value", inputs: { a: "1", b: "sqrt(3)", c: "0" }, params: { kind: "R", e: "3*sin(t) - 4*sin(t)**3 + 4*sqrt(3)*cos(t)**3 - 3*sqrt(3)*cos(t)", u: "3*t", ask: "max" } },
      options: [
        { key: "A", text: t`$4$`, correct: false, misconceptionId: "C11-M2", value: "4" },
        { key: "B", text: t`$\frac{\sqrt{2} + \sqrt{6}}{2}$`, correct: false, misconceptionId: "C11-M6", value: "sqrt(2)/2 + sqrt(6)/2" },
        { key: "C", text: t`$2$`, correct: true, value: "2" },
        { key: "D", text: t`$1 + \sqrt{3}$`, correct: false, misconceptionId: "C11-M1", value: "1 + sqrt(3)" },
      ],
      solution: {
        steps: [
          t`$3\sin x - 4\sin^3 x = \sin 3x$, and $4\sqrt{3}\cos^3 x - 3\sqrt{3}\cos x$ $= \sqrt{3}\cos 3x$.`,
          t`So the expression is $\sin 3x + \sqrt{3}\cos 3x$, with $R = \sqrt{1 + 3} = 2$.`,
          t`Its greatest value is $2$.`,
        ],
      },
    },
    {
      id: "C11-Q5",
      source: { kind: "exam-style", exam: "NDA", ref: "2019 Apr Q26" },
      stem: t`For $0 < x < \frac{\pi}{2}$, the least value of $25\operatorname{cosec}^2 x + 36\sec^2 x$ is:`,
      verify: { kind: "value", inputs: { p: "36", q: "25", c: "61" }, params: { kind: "amgm", e: "25/sin(t)**2 + 36/cos(t)**2", ask: "min" } },
      options: [
        { key: "A", text: t`$61$`, correct: false, misconceptionId: "C11-M1", value: "61" },
        { key: "B", text: t`$60$`, correct: false, misconceptionId: "C11-M5", value: "60" },
        { key: "C", text: t`$122$`, correct: false, misconceptionId: "C11-M6", value: "122" },
        { key: "D", text: t`$121$`, correct: true, value: "121" },
      ],
      solution: {
        steps: [
          t`$25\operatorname{cosec}^2 x = 25 + 25\cot^2 x$ and $36\sec^2 x = 36 + 36\tan^2 x$.`,
          t`So the expression is $61 + 36\tan^2 x + 25\cot^2 x$.`,
          t`AM–GM: $36\tan^2 x + 25\cot^2 x$ $\ge 2\sqrt{36 \cdot 25} = 60$, equal when $\tan^2 x = \frac{5}{6}$.`,
          t`The least value is $61 + 60 = 121$.`,
        ],
      },
    },
    {
      id: "C11-Q6",
      source: { kind: "exam-style", exam: "NDA", ref: "2018 Sep Q50" },
      stem: t`For real $\theta$, the least value of $\sin^2\theta + \cos^4\theta$ is:`,
      verify: { kind: "value", inputs: { a: "0", b: "1/8", c: "7/8" }, params: { kind: "R", e: "sin(t)**2 + cos(t)**4", u: "4*t", ask: "min", terms: "sin(t)**2; cos(t)**4" } },
      options: [
        { key: "A", text: t`$- \frac{1}{8}$`, correct: false, misconceptionId: "C11-M5", value: "-1/8" },
        { key: "B", text: t`$\frac{3}{4}$`, correct: true, value: "3/4" },
        { key: "C", text: t`$0$`, correct: false, misconceptionId: "C11-M1", value: "0" },
        { key: "D", text: t`$\frac{7}{8}$`, correct: false, misconceptionId: "C11-M3", value: "7/8" },
      ],
      solution: {
        steps: [
          t`$\cos^4\theta = \cos^2\theta(1 - \sin^2\theta)$, so the expression is $1 - \sin^2\theta\cos^2\theta$.`,
          t`$\sin^2\theta\cos^2\theta = \frac{1}{4}\sin^2 2\theta$ $= \frac{1 - \cos 4\theta}{8}$, so it is $\frac{7}{8} + \frac{1}{8}\cos 4\theta$.`,
          t`$\cos 4\theta$ goes down to $-1$, so the least value is $\frac{7}{8} - \frac{1}{8} = \frac{3}{4}$.`,
        ],
      },
    },
  ],
};
