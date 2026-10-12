# C06 · Division of complex numbers

- **Slug:** `division` · **Tier:** core · **Status:** draft
- **Prereqs:** C05 Conjugate
- **Source:** PYQ Vault `cetcn-conjugate-and-rationalising` (MHT-CET)
- **One-liner:** To divide, multiply the top and bottom by the conjugate of the bottom. The bottom becomes real, and then you split.

## Hook

You can divide by 2 in your head. You can't divide by $1 - i$ the same way,
because the bottom isn't a plain number. But one multiplication turns
$1 - i$ into a plain number. **Which number, multiplied by $1 - i$, gives a real answer?**

> Reveal: $1 + i$, its conjugate. $(1 - i)(1 + i) = 1 - i^2 = 2$.

## Explanation

### Intuition
A number times its own conjugate is always real: $z\bar z = x^2 + y^2$.
So multiplying top **and** bottom by the conjugate of the bottom makes the
bottom real. You multiply both, so the fraction's value doesn't change. Then
you split the result into real and imaginary parts.

### Formal
For $c + id \ne 0$:

$$\frac{a + ib}{c + id} = \frac{(a + ib)(c - id)}{(c + id)(c - id)} = \frac{(ac + bd) + i(bc - ad)}{c^2 + d^2}$$

Special case: the reciprocal is $\dfrac{1}{z} = \dfrac{\bar z}{|z|^2}$.

The denominator is $c^2 + d^2$, a **plus** sign, because $(id)(-id) = -i^2d^2 = +d^2$.

### Worked example
Write $\dfrac{4 + 3i}{2 - i}$ in the form $a + ib$.

1. The bottom is $2 - i$, so multiply top and bottom by its conjugate, $2 + i$.
2. Bottom: $(2 - i)(2 + i) = 4 + 1 = 5$.
3. Top: $(4 + 3i)(2 + i) = 8 + 4i + 6i + 3i^2 = 8 + 10i - 3 = 5 + 10i$.
4. Split: $\dfrac{5 + 10i}{5} = 1 + 2i$.

Check: $(1 + 2i)(2 - i) = 2 - i + 4i - 2i^2 = 4 + 3i$. ✓

### Visual (interactive spec)
An Argand plane with the denominator $w$ drawn as an arrow and its conjugate
$\bar w$ as the mirror image across the real axis. A slider moves $w$. The
product $w\bar w$ always lands **on the positive real axis**, at distance
$|w|^2$. That's the reason the move works.

## Misconceptions

| ID | The mistake | What the student sees (remediation) | Fallback |
|---|---|---|---|
| C06-M1 | Dividing part by part: $\frac{a+ib}{c+id} = \frac ac + i\frac bd$ | "Fractions don't split over a sum in the bottom. Make the bottom real first by multiplying by its conjugate." | C05 |
| C06-M2 | Multiplying only the top by the conjugate | "Whatever you multiply the top by, multiply the bottom by too. Otherwise the value changes. You forgot to divide by $c^2 + d^2$." | C05 |
| C06-M3 | Bottom computed as $c^2 - d^2$ | "$(c + id)(c - id) = c^2 - i^2d^2 = c^2 + d^2$. The $i^2$ turns minus into plus." | C04 |
| C06-M4 | Using $i^2 = +1$ when expanding the top | "$i^2 = -1$. Recheck the $i \cdot i$ term in the top." | C04 |
| C06-M5 | Multiplying by the bottom itself, not its conjugate | "Use the conjugate, with the sign of $i$ flipped. Multiplying by the bottom itself leaves $i$ in it." | C05 |

## Check items

Each wrong option is tagged with the misconception that produces it.

**C06-Q1** · authored · Write $\dfrac{3 + 2i}{1 - i}$ in the form $a + ib$.
- (A) $\dfrac{1 + 5i}{2}$ ✓
- (B) $3 - 2i$ → C06-M1
- (C) $1 + 5i$ → C06-M2
- (D) $\dfrac{5 + 5i}{2}$ → C06-M4

**C06-Q2** · authored · $\dfrac{5}{2 + i} = ?$
- (A) $2 - i$ ✓
- (B) $10 - 5i$ → C06-M2
- (C) $\dfrac{10 - 5i}{3}$ → C06-M3
- (D) $2 + i$ → C06-M5

**C06-Q3** · PYQ Vault practice · $\dfrac{1 + i}{1 - i} = ?$
- (A) $i$ ✓
- (B) $1 - i$ → C06-M1
- (C) $2i$ → C06-M2
- (D) $1 + i$ → C06-M4

**C06-Q4** · authored · The real part of $\dfrac{2 + 3i}{3 - 4i}$ is:
- (A) $-\dfrac{6}{25}$ ✓
- (B) $\dfrac{18}{25}$ → C06-M4
- (C) $\dfrac{6}{7}$ → C06-M3
- (D) $\dfrac{2}{3}$ → C06-M1

**C06-Q5** · MHT-CET style (PYQ Vault definition example) · If $\dfrac{2 - i}{3 + 4i} = a + ib$, then $a + b =$
- (A) $-\dfrac{9}{25}$ ✓
- (B) $-9$ → C06-M2
- (C) $-\dfrac{1}{25}$ → C06-M4
- (D) $\dfrac{9}{7}$ → C06-M3
