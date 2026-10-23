import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c01: Concept = {
  id: "C01",
  status: "approved",
  hook: {
    prompt: t`$\sqrt{5}\,x + 1$ and $\sqrt{x} + 1$ look alike. **Is either of them a polynomial?**`,
    reveal: t`Only the first. In $\sqrt{5}\,x$ the root is on the number, and $x$ has index $1$. But $\sqrt{x} = x^{\frac{1}{2}}$, and a polynomial allows only whole-number indices.`,
  },
  explanation: {
    intuition: [
      t`An **index** is the power on a variable: in $5x^3$, the index of $x$ is $3$.`,
      t`In a **polynomial**, every index of a variable is a whole number: $0, 1, 2, 3, \ldots$`,
      t`The numbers multiplying the variables are **coefficients**; they can be any real numbers.`,
      t`$\frac{1}{y} = y^{-1}$ and $\sqrt{x} = x^{\frac{1}{2}}$, so these break the rule.`,
      t`The **degree** is the highest index: $x^2 + 7x + 9$ has degree $2$.`,
      t`A number alone, like $10$, is a polynomial of degree $0$, as $10 = 10x^0$.`,
    ],
    formal: [
      {
        title: "What makes a polynomial",
        points: [
          t`An expression is a **polynomial** when every index of each variable is a whole number.`,
          t`$x^2 + 7x + 9$ is a polynomial: its indices are $2$, $1$ and $0$.`,
          t`$y + \frac{1}{y}$ is not: $\frac{1}{y} = y^{-1}$, and $-1$ is not a whole number.`,
          t`$2 - 5\sqrt{x}$ is not: $\sqrt{x} = x^{\frac{1}{2}}$, and $\frac{1}{2}$ is not whole.`,
          t`A root or fraction in a coefficient is fine.`,
          t`So $\sqrt{2}\,x^2 + \frac{1}{2}$ is a polynomial.`,
        ],
      },
      {
        title: "Monomial, binomial, trinomial",
        points: [
          t`A **term** is a part joined to the rest by $+$ or $-$.`,
          t`A polynomial with one term is a **monomial**: $3r^3$, $5p$, $10$.`,
          t`A polynomial with two terms is a **binomial**: $x^{35} + 2$.`,
          t`A polynomial with three terms is a **trinomial**: $x^8 + 3x - 1$.`,
          t`The number of terms is not the degree: $x^{35} + 2$ has degree $35$.`,
        ],
      },
      {
        title: "Degree in one variable",
        points: [
          t`The **degree** of a polynomial in one variable is the highest index of the variable.`,
          t`Check every term, not only the first: $7y - y^3 + y^5$ has degree $5$.`,
          t`The degree is an index, never a coefficient.`,
          t`In $-\frac{2}{3}m^3$, the coefficient is $-\frac{2}{3}$ and the index is $3$.`,
          t`A non-zero number has degree $0$: $\sqrt{5} = \sqrt{5}\,x^0$.`,
          t`The **zero polynomial** $0$ has no degree: its degree is not defined.`,
        ],
      },
      {
        title: "Degree in two variables",
        points: [
          t`In two or more variables, add the indices within each term.`,
          t`The **degree** is the highest of these sums.`,
          t`In $xyz + xy - z$ the sums are $3$, $2$ and $1$.`,
          t`So the degree of $xyz + xy - z$ is $3$.`,
          t`Don't take the biggest single index: $x^2y^4$ has degree $2 + 4 = 6$, not $4$.`,
        ],
      },
      {
        title: "Linear, quadratic, cubic",
        points: [
          t`A polynomial of degree $1$ is **linear**: $5p$, $\sqrt{2}\,y - \frac{1}{2}$.`,
          t`A polynomial of degree $2$ is **quadratic**: $2x^2 + 3x + 1$, $a^2$.`,
          t`A polynomial of degree $3$ is **cubic**: $3r^3$, $m^3 + 7m^2 - 1$.`,
          t`Classify by the degree, not by the number of terms.`,
          t`$2x^2 + 3x + 1$ has three terms, but its degree is $2$: it is quadratic.`,
        ],
      },
    ],
    worked: {
      prompt: t`$3m^3n^6 + 7m^2n^3 - mn$ is a polynomial in two variables $m$ and $n$. Write its degree.`,
      steps: [
        t`In two variables, add the indices within each term.`,
        t`$3m^3n^6$: $3 + 6 = 9$.`,
        t`$7m^2n^3$: $2 + 3 = 5$. $-mn$: $1 + 1 = 2$.`,
        t`The highest sum is $9$, so the degree is $9$.`,
      ],
      answer: t`The degree is $9$.`,
    },
    visualSpec: t`Drag the index on each term of a polynomial and watch the highest index light up as the degree, turning red when an index is not a whole number.`,
  },
  misconceptions: [
    {
      id: "C01-M1",
      mistake: "Takes the index of the first term written as the degree, without checking the other terms.",
      remediation: "The degree is the highest index of any term, wherever it is written. Check every term before you answer.",
      fallback: { kind: "none" },
    },
    {
      id: "C01-M2",
      mistake: "In a polynomial in two or more variables, takes the largest single index instead of adding the indices within a term.",
      remediation: t`With several variables, add the indices inside each term: $x^2y^4$ has $2 + 4 = 6$. The degree is the highest such sum.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M3",
      mistake: "Counts the terms and calls that the degree (mixes up degree with monomial, binomial, trinomial).",
      remediation: t`The number of terms only names a monomial, binomial or trinomial. The degree is the highest index: $x^{35} + 2$ has degree $35$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C01-M4",
      mistake: "Confuses the coefficient with the index: gives the number in front of the highest term as the degree.",
      remediation: t`The coefficient multiplies the variable; the index is the power on it. In $5x^3$ the coefficient is $5$ and the degree is $3$.`,
      fallback: { kind: "ext", topic: "coefficients and indices in algebraic expressions (Std VIII)" },
    },
    {
      id: "C01-M5",
      mistake: "Accepts any index, negative or a fraction, in a polynomial and finds a degree anyway.",
      remediation: t`In a polynomial every index of a variable is a whole number. $x^{-1}$ and $\sqrt{x} = x^{\frac{1}{2}}$ break this, so the expression is not a polynomial.`,
      fallback: { kind: "ext", topic: "negative and fractional indices (Std VIII)" },
    },
    {
      id: "C01-M6",
      mistake: "Thinks a root or a fraction among the coefficients or the constant stops an expression being a polynomial.",
      remediation: t`Only the indices of the variables must be whole numbers. Coefficients can be any real numbers: $\sqrt{2}\,x^2 + \frac{1}{2}$ is a polynomial.`,
      fallback: { kind: "ext", topic: "rational and irrational numbers (Std IX Real Numbers)" },
    },
  ],
  engineNotes: [
    "Q4 (not a polynomial): the M1 and M3 options also accept the negative index, so a student picking them holds M5 as well; only the M5 option diagnoses M5 alone.",
    t`Q3: the M3 option ($1$) also catches the belief that a constant has degree $1$.`,
  ],
  items: [
    {
      id: "C01-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q2(i)" },
      stem: t`What is the degree of the polynomial $5 + 3x^4$?`,
      verify: { kind: "value", inputs: {  }, params: { terms: ["5", "3*x**4"], vars: "x", ask: "degree" } },
      options: [
        { key: "A", text: t`$4$`, correct: true, value: "4" },
        { key: "B", text: t`$0$`, correct: false, misconceptionId: "C01-M1", value: "0" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C01-M3", value: "2" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C01-M4", value: "3" },
      ],
      solution: {
        steps: [
          t`The index of $x$ is $0$ in $5$ and $4$ in $3x^4$.`,
          t`The highest index is $4$, so the degree is $4$.`,
          t`$3$ is the coefficient of $x^4$, not the degree.`,
        ],
      },
    },
    {
      id: "C01-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.1 Q4(viii)" },
      stem: t`$mn - 3m^5n + m^3n^7$ is a polynomial in two variables $m$ and $n$. What is its degree?`,
      verify: { kind: "value", inputs: {  }, params: { terms: ["m*n", "-3*m**5*n", "m**3*n**7"], vars: "m,n", ask: "degree" } },
      options: [
        { key: "A", text: t`$10$`, correct: true, value: "10" },
        { key: "B", text: t`$2$`, correct: false, misconceptionId: "C01-M1", value: "2" },
        { key: "C", text: t`$7$`, correct: false, misconceptionId: "C01-M2", value: "7" },
        { key: "D", text: t`$3$`, correct: false, misconceptionId: "C01-M3", value: "3" },
      ],
      solution: {
        steps: [
          t`In two variables, add the indices within each term.`,
          t`$mn$: $1 + 1 = 2$. $-3m^5n$: $5 + 1 = 6$.`,
          t`$m^3n^7$: $3 + 7 = 10$.`,
          t`The highest sum is $10$, so the degree is $10$.`,
        ],
      },
    },
    {
      id: "C01-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q1(ii)" },
      stem: t`What is the degree of $\sqrt{7}$?`,
      verify: { kind: "value", inputs: {  }, params: { terms: ["sqrt(7)"], vars: "x", ask: "degree" } },
      options: [
        { key: "A", text: t`$\sqrt{7}$`, correct: false, misconceptionId: "C01-M4", value: "sqrt(7)" },
        { key: "B", text: t`None: $\sqrt{7}$ is not a polynomial`, correct: false, misconceptionId: "C01-M6", value: "not_poly" },
        { key: "C", text: t`$0$`, correct: true, value: "0" },
        { key: "D", text: t`$1$`, correct: false, misconceptionId: "C01-M3", value: "1" },
      ],
      solution: {
        steps: [
          t`$\sqrt{7}$ is a real number, so it is a constant polynomial.`,
          t`$\sqrt{7} = \sqrt{7}\,x^0$, so the index of $x$ is $0$.`,
          t`The degree of $\sqrt{7}$ is $0$.`,
        ],
      },
    },
    {
      id: "C01-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.1 Q1(iv)" },
      stem: t`Is $2m^{-2} + 7m - 5$ a polynomial? If it is, what is its degree?`,
      verify: { kind: "value", inputs: {  }, params: { terms: ["2*m**(-2)", "7*m", "-5"], vars: "m", ask: "degree" } },
      options: [
        { key: "A", text: t`It is not a polynomial`, correct: true, value: "not_poly" },
        { key: "B", text: t`A polynomial of degree $-2$`, correct: false, misconceptionId: "C01-M1", value: "-2" },
        { key: "C", text: t`A polynomial of degree $3$`, correct: false, misconceptionId: "C01-M3", value: "3" },
        { key: "D", text: t`A polynomial of degree $1$`, correct: false, misconceptionId: "C01-M5", value: "1" },
      ],
      solution: {
        steps: [
          t`In $2m^{-2}$, the index of $m$ is $-2$.`,
          t`$-2$ is not a whole number.`,
          t`So $2m^{-2} + 7m - 5$ is not a polynomial, and it has no degree.`,
        ],
      },
    },
    {
      id: "C01-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q2(iii)" },
      stem: t`What is the degree of the polynomial $ax^7 + bx^9$? ($a$ and $b$ are non-zero constants.)`,
      verify: { kind: "value", inputs: {  }, params: { terms: ["a*x**7", "b*x**9"], vars: "x", ask: "degree" } },
      options: [
        { key: "A", text: t`$9$`, correct: true, value: "9" },
        { key: "B", text: t`$7$`, correct: false, misconceptionId: "C01-M1", value: "7" },
        { key: "C", text: t`$2$`, correct: false, misconceptionId: "C01-M3", value: "2" },
        { key: "D", text: t`$b$`, correct: false, misconceptionId: "C01-M4", value: "b" },
      ],
      solution: {
        steps: [
          t`$a$ and $b$ are constants, so they are coefficients.`,
          t`The indices of $x$ are $7$ and $9$.`,
          t`The highest index is $9$, so the degree is $9$.`,
        ],
      },
    },
    {
      id: "C01-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.1 Q5(iii)" },
      stem: t`Classify $\frac{1}{2}y - 4 + \sqrt{3}\,y^2$ as a linear, quadratic or cubic polynomial.`,
      verify: { kind: "value", inputs: {  }, params: { terms: ["y/2", "-4", "sqrt(3)*y**2"], vars: "y", ask: "class" } },
      options: [
        { key: "A", text: t`Cubic`, correct: false, misconceptionId: "C01-M3", value: "cubic" },
        { key: "B", text: t`Not a polynomial, so none of these`, correct: false, misconceptionId: "C01-M6", value: "not_poly" },
        { key: "C", text: t`Quadratic`, correct: true, value: "quadratic" },
        { key: "D", text: t`Linear`, correct: false, misconceptionId: "C01-M1", value: "linear" },
      ],
      solution: {
        steps: [
          t`The coefficients $\frac{1}{2}$ and $\sqrt{3}$ may be any real numbers.`,
          t`The indices of $y$ are $1$, $0$ and $2$: all whole numbers, so it is a polynomial.`,
          t`The highest index is $2$, so the degree is $2$.`,
          t`A polynomial of degree $2$ is quadratic.`,
        ],
      },
    },
  ],
};
