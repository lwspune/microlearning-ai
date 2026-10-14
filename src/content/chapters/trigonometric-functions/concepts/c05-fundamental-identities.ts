import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c05: Concept = {
  id: "C05",
  status: "approved",
  hook: {
    prompt: t`If $\tan\theta + \frac{1}{\tan\theta} = 2$, what is $\tan^2\theta + \frac{1}{\tan^2\theta}$? **Is it $4$?**`,
    reveal: t`No, it is $2$. Squaring a sum gives a middle term: $\tan^2\theta + 2\tan\theta \cdot \frac{1}{\tan\theta} + \frac{1}{\tan^2\theta} = 4$, and that middle term is $2$. So $\tan^2\theta + \frac{1}{\tan^2\theta} = 4 - 2 = 2$. Check: $\tan\theta = 1$ fits, and $1 + 1 = 2$.`,
  },
  explanation: {
    intuition: t`All three identities are one fact: Pythagoras. For $P(x, y)$ on the terminal arm, $x^2 + y^2 = r^2$. Divide by $r^2$ and you get $\cos^2\theta + \sin^2\theta = 1$. Divide by $x^2$ instead: $1 + \tan^2\theta = \sec^2\theta$. Divide by $y^2$: $\cot^2\theta + 1 = \operatorname{cosec}^2\theta$. So $\tan$ goes with $\sec$ (both have $x$ underneath), and $\cot$ with $\operatorname{cosec}$.`,
    formal: t`**The three identities** (for every $\theta$ where both sides are defined)

$$\sin^2\theta + \cos^2\theta = 1, \qquad 1 + \tan^2\theta = \sec^2\theta, \qquad 1 + \cot^2\theta = \operatorname{cosec}^2\theta$$

**Rearranging.** A term changes sign when it crosses the $=$ sign: $\cos^2\theta - 1 = -\sin^2\theta$, $\sec^2\theta - \tan^2\theta = 1$, $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.

**Squaring keeps the middle term.** $\sin^4\theta + \cos^4\theta = (\sin^2\theta + \cos^2\theta)^2 - 2\sin^2\theta\cos^2\theta = 1 - 2\sin^2\theta\cos^2\theta$.

**Factor pairs.** $(\sec\theta + \tan\theta)(\sec\theta - \tan\theta) = \sec^2\theta - \tan^2\theta = 1$. So if $\sec\theta + \tan\theta = k$, then $\sec\theta - \tan\theta = \frac{1}{k}$. Add the two to get $2\sec\theta$, subtract to get $2\tan\theta$. The same works for $\operatorname{cosec}\theta \pm \cot\theta$.`,
    worked: {
      prompt: t`If $\operatorname{cosec}\theta + \cot\theta = 5$, find $\sec\theta$.`,
      steps: [
        t`$(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = \operatorname{cosec}^2\theta - \cot^2\theta = 1$, so $\operatorname{cosec}\theta - \cot\theta = \frac{1}{5}$.`,
        t`Add the two equations: $2\operatorname{cosec}\theta = 5 + \frac{1}{5} = \frac{26}{5}$, so $\operatorname{cosec}\theta = \frac{13}{5}$. Subtract them: $2\cot\theta = 5 - \frac{1}{5} = \frac{24}{5}$, so $\cot\theta = \frac{12}{5}$.`,
        t`$\sin\theta = \frac{5}{13}$, and $\cos\theta = \cot\theta \cdot \sin\theta = \frac{12}{5} \cdot \frac{5}{13} = \frac{12}{13}$.`,
        t`$\sec\theta = \frac{1}{\cos\theta} = \frac{13}{12}$.`,
      ],
      answer: t`$\sec\theta = \frac{13}{12}$.`,
    },
    visualSpec: t`Drag $P$ round a circle of radius $r$: the right triangle with legs $x$ and $y$ keeps $x^2 + y^2 = r^2$, and buttons divide it by $r^2$, $x^2$ or $y^2$ to show each identity.`,
  },
  misconceptions: [
    {
      id: "C05-M1",
      mistake: t`Pairs $\tan$ with $\operatorname{cosec}$ and $\cot$ with $\sec$: $1 + \tan^2\theta = \operatorname{cosec}^2\theta$, $1 + \cot^2\theta = \sec^2\theta$`,
      remediation: t`Divide $\sin^2\theta + \cos^2\theta = 1$ by $\cos^2\theta$: $\tan^2\theta + 1 = \sec^2\theta$. Dividing by $\sin^2\theta$ gives $1 + \cot^2\theta = \operatorname{cosec}^2\theta$, so $\tan$ goes with $\sec$ and $\cot$ with $\operatorname{cosec}$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M2",
      mistake: t`Reads every identity in the shape of $\sin^2\theta + \cos^2\theta = 1$: $\tan^2\theta + \sec^2\theta = 1$, $\cot^2\theta + \operatorname{cosec}^2\theta = 1$`,
      remediation: t`Only $\sin^2\theta + \cos^2\theta = 1$ has that shape. The others are $1 + \tan^2\theta = \sec^2\theta$ and $1 + \cot^2\theta = \operatorname{cosec}^2\theta$: $\sec^2\theta$ is $1$ more than $\tan^2\theta$, not $1$ minus it.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C05-M3",
      mistake: t`Drops the squares: from $\operatorname{cosec}^2\theta - \cot^2\theta = 1$ takes $\operatorname{cosec}\theta - \cot\theta = 1$ (and $\sec\theta - \tan\theta = 1$)`,
      remediation: t`Factorise instead: $(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = 1$. If one factor is $k$, the other is $\frac{1}{k}$, not $1$.`,
      fallback: { kind: "ext", topic: "difference of squares" },
    },
    {
      id: "C05-M4",
      mistake: t`Squares a sum term by term: $(\tan\theta + \cot\theta)^2 = \tan^2\theta + \cot^2\theta$, dropping $2ab$`,
      remediation: t`$(a + b)^2 = a^2 + 2ab + b^2$. With $\tan\theta + \cot\theta$ the middle term is $2\tan\theta\cot\theta = 2$, so $\tan^2\theta + \cot^2\theta$ is $2$ less than the square.`,
      fallback: { kind: "ext", topic: "algebraic identities" },
    },
    {
      id: "C05-M5",
      mistake: t`Moves a term across the $=$ sign without changing its sign: $\cos^2\theta - 1 = \sin^2\theta$, $\cot^2\theta - \operatorname{cosec}^2\theta = 1$`,
      remediation: t`A term changes sign when it crosses the $=$ sign. From $\sin^2\theta + \cos^2\theta = 1$: $\cos^2\theta - 1 = -\sin^2\theta$. From $1 + \cot^2\theta = \operatorname{cosec}^2\theta$: $\operatorname{cosec}^2\theta - \cot^2\theta = 1$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C05-M6",
      mistake: t`Stops one step short: gives the value found on the way ($\cot\theta$ for $\tan\theta$, $\operatorname{cosec}\theta$ for $\sin\theta$, $\sec\theta$ for $\cos\theta$, $\tan^2\theta + \cot^2\theta$ for $\sec^2\theta + \operatorname{cosec}^2\theta$)`,
      remediation: t`Check what the question asks for before you answer. Finish the last step: take the reciprocal, or add the $1$s from $1 + \tan^2\theta = \sec^2\theta$ and $1 + \cot^2\theta = \operatorname{cosec}^2\theta$.`,
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    t`C05-M3 gives the key when the given value is $1$ (then $\frac{1}{k} = 1$): use a given value other than $1$.`,
    t`C05-M5 on a factor pair swaps its two members. When $\cos\theta$ or $\sec\theta$ is asked from $\operatorname{cosec}\theta \pm \cot\theta$ (or $\sin\theta$, $\operatorname{cosec}\theta$ from $\sec\theta \pm \tan\theta$), that only turns the key into its reciprocal, which a plain reciprocal slip also gives: to diagnose C05-M5, ask for a member of the pair or its reciprocal.`,
  ],
  items: [
    {
      id: "C05-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q15(x)" },
      stem: t`$(\sec A + \cos A)(\sec A - \cos A)$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "secpcos" } },
      options: [
        { key: "A", text: t`$\tan^2 A - \sin^2 A$`, correct: false, misconceptionId: "C05-M5", value: "tan(x)**2 - sin(x)**2" },
        { key: "B", text: t`$\tan^2 A + \sin^2 A$`, correct: true, value: "tan(x)**2 + sin(x)**2" },
        { key: "C", text: t`$\cot^2 A + \sin^2 A$`, correct: false, misconceptionId: "C05-M1", value: "cot(x)**2 + sin(x)**2" },
        { key: "D", text: t`$\sin^2 A - \tan^2 A$`, correct: false, misconceptionId: "C05-M2", value: "sin(x)**2 - tan(x)**2" },
      ],
      solution: {
        steps: [
          t`It is a difference of squares: $(\sec A + \cos A)(\sec A - \cos A) = \sec^2 A - \cos^2 A$.`,
          t`$\sec^2 A = 1 + \tan^2 A$ and $\cos^2 A = 1 - \sin^2 A$.`,
          t`So it equals $(1 + \tan^2 A) - (1 - \sin^2 A) = \tan^2 A + \sin^2 A$.`,
        ],
      },
    },
    {
      id: "C05-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Ex 2.2 Q15(ii)" },
      stem: t`$(\cos^2 A - 1)(\cot^2 A + 1)$ equals:`,
      verify: { kind: "value", inputs: {  }, params: { form: "cos2m1" } },
      options: [
        { key: "A", text: t`$-\tan^2 A$`, correct: false, misconceptionId: "C05-M1", value: "-tan(x)**2" },
        { key: "B", text: t`$1 - 2\sin^2 A$`, correct: false, misconceptionId: "C05-M2", value: "1 - 2*sin(x)**2" },
        { key: "C", text: t`$1$`, correct: false, misconceptionId: "C05-M5", value: "1" },
        { key: "D", text: t`$-1$`, correct: true, value: "-1" },
      ],
      solution: {
        steps: [
          t`From $\sin^2 A + \cos^2 A = 1$: $\cos^2 A - 1 = -\sin^2 A$.`,
          t`$\cot^2 A + 1 = \operatorname{cosec}^2 A$.`,
          t`So it equals $-\sin^2 A \cdot \operatorname{cosec}^2 A = -1$.`,
        ],
      },
    },
    {
      id: "C05-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.2 SolvedEx.3" },
      stem: t`If $\tan\theta + \cot\theta = 3$, then $\sec^2\theta + \operatorname{cosec}^2\theta$ equals:`,
      verify: { kind: "value", inputs: { k: "3" }, params: { form: "tancot" } },
      options: [
        { key: "A", text: t`$9$`, correct: true, value: "9" },
        { key: "B", text: t`$11$`, correct: false, misconceptionId: "C05-M4", value: "11" },
        { key: "C", text: t`$13$`, correct: false, misconceptionId: "C05-M5", value: "13" },
        { key: "D", text: t`$7$`, correct: false, misconceptionId: "C05-M6", value: "7" },
      ],
      solution: {
        steps: [
          t`Square: $\tan^2\theta + 2\tan\theta\cot\theta + \cot^2\theta = 9$. Since $\tan\theta\cot\theta = 1$, $\tan^2\theta + \cot^2\theta = 9 - 2 = 7$.`,
          t`$\sec^2\theta + \operatorname{cosec}^2\theta = (1 + \tan^2\theta) + (1 + \cot^2\theta) = 2 + 7 = 9$.`,
        ],
      },
    },
    {
      id: "C05-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc I Q6" },
      stem: t`If $\operatorname{cosec}\theta + \cot\theta = \frac{5}{2}$, then $\tan\theta$ equals:`,
      verify: { kind: "value", inputs: { k: "5/2" }, params: { form: "pair", pair: "csc_cot", given: "sum", ask: "tan" } },
      options: [
        { key: "A", text: t`$\frac{20}{29}$`, correct: false, misconceptionId: "C05-M5", value: "20/29" },
        { key: "B", text: t`$\frac{21}{20}$`, correct: false, misconceptionId: "C05-M6", value: "21/20" },
        { key: "C", text: t`$\frac{20}{21}$`, correct: true, value: "20/21" },
        { key: "D", text: t`$\frac{4}{3}$`, correct: false, misconceptionId: "C05-M3", value: "4/3" },
      ],
      solution: {
        steps: [
          t`$(\operatorname{cosec}\theta + \cot\theta)(\operatorname{cosec}\theta - \cot\theta) = 1$, so $\operatorname{cosec}\theta - \cot\theta = \frac{2}{5}$.`,
          t`Subtract: $2\cot\theta = \frac{5}{2} - \frac{2}{5} = \frac{21}{10}$, so $\cot\theta = \frac{21}{20}$.`,
          t`$\tan\theta = \frac{1}{\cot\theta} = \frac{20}{21}$.`,
        ],
      },
    },
    {
      id: "C05-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/Misc I Q8" },
      stem: t`If $\operatorname{cosec}\theta - \cot\theta = q$, then $\sin\theta$ equals:`,
      verify: { kind: "value", inputs: { k: "q" }, params: { form: "pair", pair: "csc_cot", given: "diff", ask: "sin" } },
      options: [
        { key: "A", text: t`$\frac{2q}{1 + q^2}$`, correct: true, value: "2*q/(q**2 + 1)" },
        { key: "B", text: t`$\frac{2}{1 + q}$`, correct: false, misconceptionId: "C05-M3", value: "2/(q + 1)" },
        { key: "C", text: t`$\frac{2q}{q^2 - 1}$`, correct: false, misconceptionId: "C05-M5", value: "2*q/(q**2 - 1)" },
        { key: "D", text: t`$\frac{1 + q^2}{2q}$`, correct: false, misconceptionId: "C05-M6", value: "(q**2 + 1)/(2*q)" },
      ],
      solution: {
        steps: [
          t`$(\operatorname{cosec}\theta - \cot\theta)(\operatorname{cosec}\theta + \cot\theta) = 1$, so $\operatorname{cosec}\theta + \cot\theta = \frac{1}{q}$.`,
          t`Add: $2\operatorname{cosec}\theta = q + \frac{1}{q} = \frac{1 + q^2}{q}$, so $\operatorname{cosec}\theta = \frac{1 + q^2}{2q}$.`,
          t`$\sin\theta = \frac{1}{\operatorname{cosec}\theta} = \frac{2q}{1 + q^2}$.`,
        ],
      },
    },
    {
      id: "C05-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-11/trigonometry-1-11/2.2 SolvedEx.11" },
      stem: t`If $\sec\theta + \tan\theta = 3$, then $\cos\theta$ equals:`,
      verify: { kind: "value", inputs: { k: "3" }, params: { form: "pair", pair: "sec_tan", given: "sum", ask: "cos" } },
      options: [
        { key: "A", text: t`$\frac{3}{5}$`, correct: true, value: "3/5" },
        { key: "B", text: t`$\frac{1}{2}$`, correct: false, misconceptionId: "C05-M3", value: "1/2" },
        { key: "C", text: t`$\frac{3}{4}$`, correct: false, misconceptionId: "C05-M5", value: "3/4" },
        { key: "D", text: t`$\frac{5}{3}$`, correct: false, misconceptionId: "C05-M6", value: "5/3" },
      ],
      solution: {
        steps: [
          t`$(\sec\theta + \tan\theta)(\sec\theta - \tan\theta) = 1$, so $\sec\theta - \tan\theta = \frac{1}{3}$.`,
          t`Add: $2\sec\theta = 3 + \frac{1}{3} = \frac{10}{3}$, so $\sec\theta = \frac{5}{3}$.`,
          t`$\cos\theta = \frac{1}{\sec\theta} = \frac{3}{5}$.`,
        ],
      },
    },
  ],
};
