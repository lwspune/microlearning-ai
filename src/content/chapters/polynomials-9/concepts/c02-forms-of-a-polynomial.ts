import type { Concept } from "../../../types.ts";

const t = String.raw;

export const c02: Concept = {
  id: "C02",
  status: "approved",
  hook: {
    prompt: t`Is the coefficient form $(1, 4)$ the polynomial $x + 4$ or $x^2 + 4$?`,
    reveal: t`It is $x + 4$. For $x^2 + 4$ we write $x^2 + 0x + 4$, so its coefficient form is $(1, 0, 4)$. The $0$ holds the place of $x$.`,
  },
  explanation: {
    intuition: [
      t`We can write the terms of a polynomial in any order: $2 + x^2 + 5x$ is the same polynomial as $x^2 + 5x + 2$.`,
      t`So we agree on one order, and everyone writes it the same way.`,
      t`**Standard form** puts the terms in descending powers: the highest power first, the constant last.`,
      t`A missing power has coefficient $0$: $x^2 + 2$ is $x^2 + 0x + 2$.`,
      t`**Coefficient form** keeps only the coefficients, in that order: $x^2 + 0x + 2$ becomes $(1, 0, 2)$.`,
      t`The zeros hold the places, so we can turn the list back into the polynomial.`,
    ],
    formal: [
      {
        title: "Standard form",
        points: [
          t`The **coefficient** of a term is the number that multiplies the variable: in $-7t$ it is $-7$.`,
          t`Take $q(t) = 4t^2 - t^5 + 9 + 3t$. Its powers are $2$, $5$, $0$ and $1$.`,
          t`Arrange the terms in descending powers of $t$: $-t^5 + 4t^2 + 3t + 9$. This is the standard form.`,
          t`Descending means the powers, not the coefficients: $-t^5$ comes first though $-1$ is the smallest coefficient.`,
          t`The constant $9$ has power $0$, so it always comes last.`,
          t`The power of the first term is the degree: $q(t)$ has degree $5$.`,
        ],
      },
      {
        title: "Index form",
        points: [
          t`$-t^5 + 4t^2 + 3t + 9$ has no $t^4$ term and no $t^3$ term.`,
          t`**Index form** writes every missing power in, with coefficient $0$.`,
          t`So the index form is $-t^5 + 0t^4 + 0t^3$ $+ 4t^2 + 3t + 9$.`,
          t`A polynomial of degree $n$ has $n + 1$ terms in index form: powers $n$ down to $0$.`,
          t`Here the degree is $5$, so there are $6$ terms.`,
        ],
      },
      {
        title: "Coefficient form",
        points: [
          t`**Coefficient form** lists the coefficients of the index form, in the same order, in brackets.`,
          t`So $q(t)$ in coefficient form is $(-1, 0, 0, 4, 3, 9)$.`,
          t`Keep the zeros: $(-1, 4, 3, 9)$ means $-t^3 + 4t^2 + 3t + 9$, a different polynomial.`,
          t`Keep the signs: the term $-t^5$ gives $-1$, not $1$.`,
          t`The last entry is always the constant term.`,
          t`A constant polynomial has one entry: $8$ is $(8)$.`,
        ],
      },
      {
        title: "Back to the polynomial",
        points: [
          t`Count the entries: $n + 1$ entries means degree $n$.`,
          t`$(2, 0, -5, 1)$ has $4$ entries, so its degree is $3$.`,
          t`Give the first entry the power $3$, then go down one power at a time.`,
          t`Index form: $2x^3 + 0x^2 - 5x + 1$.`,
          t`Drop the zero term for the standard form: $2x^3 - 5x + 1$.`,
          t`Use the variable the question names; the book uses $x$ when it names none.`,
        ],
      },
    ],
    worked: {
      prompt: t`Write $s(y) = 6y + 2y^4 - 5y^3 - 8$ in standard form, index form and coefficient form.`,
      steps: [
        t`The powers are $1$, $4$, $3$ and $0$. Arrange them in descending order: $4, 3, 1, 0$.`,
        t`Standard form: $2y^4 - 5y^3 + 6y - 8$.`,
        t`The power $2$ is missing, so the index form is $2y^4 - 5y^3 + 0y^2$ $+ 6y - 8$.`,
        t`Read off the coefficients in order: $(2, -5, 0, 6, -8)$.`,
        t`Check: $5$ entries, and the degree is $4$.`,
      ],
      answer: t`Coefficient form: $(2, -5, 0, 6, -8)$`,
    },
    visualSpec: t`Drop coefficient tiles into slots labelled with the powers, from the degree down to 0; an empty slot fills with 0, and the polynomial and its coefficient form update together.`,
  },
  misconceptions: [
    {
      id: "C02-M1",
      mistake: "Skips the missing powers: leaves the zeros out of the coefficient form, or reads a list without its zeros as consecutive powers",
      remediation: t`Every power from the degree down to the constant gets a place. Write $0$ for a missing power: $x^3 - 2$ is $x^3 + 0x^2 + 0x - 2$, so $(1, 0, 0, -2)$.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M2",
      mistake: "Writes the powers in ascending order: the constant first, the highest power last",
      remediation: "Standard form and coefficient form go in descending powers: the highest power first, the constant last.",
      fallback: { kind: "none" },
    },
    {
      id: "C02-M3",
      mistake: "Copies the coefficients in the order the terms are written, without arranging them first",
      remediation: t`First write the polynomial in standard form, highest power first, with $0$ for each missing power. Only then read off the coefficients.`,
      fallback: { kind: "none" },
    },
    {
      id: "C02-M4",
      mistake: "Thinks the list has no place for the constant: drops the constant term, or reads a list of n entries as degree n",
      remediation: t`The last entry is the constant term, the coefficient of power $0$. So a list of $n + 1$ entries has degree $n$: $(4, 0, 1, 9)$ has degree $3$.`,
      fallback: { kind: "concept", id: "C01" },
    },
    {
      id: "C02-M5",
      mistake: "Reads 'descending order' as descending coefficients: puts the term with the biggest coefficient first",
      remediation: "Descending order means descending powers of the variable. The term with the highest power comes first, whatever its coefficient.",
      fallback: { kind: "none" },
    },
  ],
  engineNotes: [
    "C02-M1 gives the key when no power is missing; C02-M3 gives the key when the terms are already in standard form; C02-M5 is modelled only for 'which term comes first' items. Diagnose them only on items where the model and the key differ.",
  ],
  items: [
    {
      id: "C02-Q1",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.1 Q7(iii)" },
      stem: t`Write the polynomial $2m^4 - 3m^2 + 7$ in coefficient form.`,
      verify: { kind: "value", inputs: { t: "(2*m**4, -3*m**2, 7)" }, params: { ask: "coeff" } },
      options: [
        { key: "A", text: t`$(2, 0, -3, 0, 7)$`, correct: true, value: "(2, 0, -3, 0, 7)" },
        { key: "B", text: t`$(2, -3, 7)$`, correct: false, misconceptionId: "C02-M1", value: "(2, -3, 7)" },
        { key: "C", text: t`$(7, 0, -3, 0, 2)$`, correct: false, misconceptionId: "C02-M2", value: "(7, 0, -3, 0, 2)" },
        { key: "D", text: t`$(2, 0, -3, 0)$`, correct: false, misconceptionId: "C02-M4", value: "(2, 0, -3, 0)" },
      ],
      solution: {
        steps: [
          t`The powers are already descending, but $m^3$ and $m$ are missing.`,
          t`Index form: $2m^4 + 0m^3 - 3m^2$ $+ 0m + 7$.`,
          t`So the coefficient form is $(2, 0, -3, 0, 7)$.`,
        ],
      },
    },
    {
      id: "C02-Q2",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/3.1 SolvedEx.2(iii)" },
      stem: t`For the polynomial $p(m) = 3m^5 - 7m + 5m^3 + 2$, the coefficient form is`,
      verify: { kind: "value", inputs: { t: "(3*m**5, -7*m, 5*m**3, 2)" }, params: { ask: "coeff" } },
      options: [
        { key: "A", text: t`$(3, 5, -7, 2)$`, correct: false, misconceptionId: "C02-M1", value: "(3, 5, -7, 2)" },
        { key: "B", text: t`$(2, -7, 0, 5, 0, 3)$`, correct: false, misconceptionId: "C02-M2", value: "(2, -7, 0, 5, 0, 3)" },
        { key: "C", text: t`$(3, -7, 5, 2)$`, correct: false, misconceptionId: "C02-M3", value: "(3, -7, 5, 2)" },
        { key: "D", text: t`$(3, 0, 5, 0, -7, 2)$`, correct: true, value: "(3, 0, 5, 0, -7, 2)" },
      ],
      solution: {
        steps: [
          t`Standard form: $3m^5 + 5m^3 - 7m + 2$.`,
          t`$m^4$ and $m^2$ are missing. Index form: $3m^5 + 0m^4 + 5m^3$ $+ 0m^2 - 7m + 2$.`,
          t`So the coefficient form is $(3, 0, 5, 0, -7, 2)$.`,
        ],
      },
    },
    {
      id: "C02-Q3",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.1 Q6(ii)" },
      stem: t`Write $-7y + y^5 + 3y^3 - \frac{1}{2}$ $+ 2y^4 - y^2$ in coefficient form.`,
      verify: { kind: "value", inputs: { t: "(-7*y, y**5, 3*y**3, -1/2, 2*y**4, -y**2)" }, params: { ask: "coeff" } },
      options: [
        { key: "A", text: t`$(1, 2, 3, -1, -7)$`, correct: false, misconceptionId: "C02-M4", value: "(1, 2, 3, -1, -7)" },
        { key: "B", text: t`$(1, 2, 3, -1, -7, -\frac{1}{2})$`, correct: true, value: "(1, 2, 3, -1, -7, -1/2)" },
        { key: "C", text: t`$(-\frac{1}{2}, -7, -1, 3, 2, 1)$`, correct: false, misconceptionId: "C02-M2", value: "(-1/2, -7, -1, 3, 2, 1)" },
        { key: "D", text: t`$(-7, 1, 3, -\frac{1}{2}, 2, -1)$`, correct: false, misconceptionId: "C02-M3", value: "(-7, 1, 3, -1/2, 2, -1)" },
      ],
      solution: {
        steps: [
          t`Arrange in descending powers of $y$: $y^5 + 2y^4 + 3y^3$ $- y^2 - 7y - \frac{1}{2}$.`,
          t`No power is missing, so this is also the index form.`,
          t`So the coefficient form is $(1, 2, 3, -1, -7, -\frac{1}{2})$.`,
        ],
      },
    },
    {
      id: "C02-Q4",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q5(ii)" },
      stem: t`The coefficient form of a polynomial in $x$ is $(6, 1, 0, 7)$. The polynomial is`,
      verify: { kind: "value", inputs: { c: "(6, 1, 0, 7)" }, params: { ask: "index", var: "x" } },
      options: [
        { key: "A", text: t`$6x^4 + x^3 + 7x$`, correct: false, misconceptionId: "C02-M4", value: "x*(6*x**3 + x**2 + 7)" },
        { key: "B", text: t`$6 x^{3} + x^{2} + 7$`, correct: true, value: "6*x**3 + x**2 + 7" },
        { key: "C", text: t`$6 x^{2} + x + 7$`, correct: false, misconceptionId: "C02-M1", value: "6*x**2 + x + 7" },
        { key: "D", text: t`$6 + x + 7x^3$`, correct: false, misconceptionId: "C02-M2", value: "7*x**3 + x + 6" },
      ],
      solution: {
        steps: [
          t`$(6, 1, 0, 7)$ has $4$ entries, so the degree is $3$.`,
          t`Index form: $6x^3 + x^2 + 0x + 7$.`,
          t`So the polynomial is $6x^3 + x^2 + 7$.`,
        ],
      },
    },
    {
      id: "C02-Q5",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Ex 3.1 Q8(ii)" },
      stem: t`A polynomial in $x$ has the coefficient form $(5, 0, 0, 0, -1)$. Write it in standard form.`,
      verify: { kind: "value", inputs: { c: "(5, 0, 0, 0, -1)" }, params: { ask: "index", var: "x" } },
      options: [
        { key: "A", text: t`$5x^5 - x$`, correct: false, misconceptionId: "C02-M4", value: "5*x**5 - x" },
        { key: "B", text: t`$5 x^{4} - 1$`, correct: true, value: "5*x**4 - 1" },
        { key: "C", text: t`$5 x - 1$`, correct: false, misconceptionId: "C02-M1", value: "5*x - 1" },
        { key: "D", text: t`$5 - x^4$`, correct: false, misconceptionId: "C02-M2", value: "5 - x**4" },
      ],
      solution: {
        steps: [
          t`$(5, 0, 0, 0, -1)$ has $5$ entries, so the degree is $4$.`,
          t`Index form: $5x^4 + 0x^3 + 0x^2$ $+ 0x - 1$.`,
          t`Drop the zero terms: the standard form is $5x^4 - 1$.`,
        ],
      },
    },
    {
      id: "C02-Q6",
      source: { kind: "pyqvault-practice", ref: "mh-sb-9/polynomials-9/Prob Q3(ii)" },
      stem: t`Write $p + 2p^3 + 10p^2 + 5p^4 - 8$ in standard form. Which term comes first?`,
      verify: { kind: "value", inputs: { t: "(p, 2*p**3, 10*p**2, 5*p**4, -8)" }, params: { ask: "first" } },
      options: [
        { key: "A", text: t`$5 p^{4}$`, correct: true, value: "5*p**4" },
        { key: "B", text: t`$-8$`, correct: false, misconceptionId: "C02-M2", value: "-8" },
        { key: "C", text: t`$p$`, correct: false, misconceptionId: "C02-M3", value: "p" },
        { key: "D", text: t`$10 p^{2}$`, correct: false, misconceptionId: "C02-M5", value: "10*p**2" },
      ],
      solution: {
        steps: [
          t`The powers of the terms are $1$, $3$, $2$, $4$ and $0$.`,
          t`Standard form: $5p^4 + 2p^3 + 10p^2$ $+ p - 8$.`,
          t`So the first term is $5p^4$.`,
        ],
      },
    },
  ],
};
