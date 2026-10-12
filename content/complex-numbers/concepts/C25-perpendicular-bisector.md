# C25 · Perpendicular bisector locus

- **Slug:** `perpendicular-bisector` · **Tier:** core · **Status:** draft
- **Prereqs:** C11 Modulus as distance · **Ext:** equation of a line
- **Source:** PYQ Vault `cetcn-perpendicular-bisector-and-lines` (MHT-CET) · `jcx-line` (JEE) · `cn-loci-in-argand-plane` (NDA)
- **One-liner:** $|z - a| = |z - b|$ means "as far from $a$ as from $b$". That's a straight line, the perpendicular bisector of $ab$.

## Hook

You want to stand exactly as far from your home as from your school.
**Is there one such spot, a few, or a whole line of them?**

> Reveal: a whole line. Every point on the perpendicular bisector of the
> segment from home to school works.

## Explanation

### Intuition
$|z - a|$ is the distance from $z$ to the point $a$ (C11). So
$|z - a| = |z - b|$ asks for every point equally far from $a$ and $b$.
That set is the **perpendicular bisector** of $ab$: it passes through the
midpoint and is perpendicular to $ab$. It's a line, even though the equation
has two moduli.

### Formal
$|z - a| = |z - b|$ with $a \ne b$ is the perpendicular bisector of segment $ab$.

To get its Cartesian equation, put $z = x + iy$ and square both sides. The
$x^2$ and $y^2$ terms **always cancel**, which is why the result is a line.

Watch the signs: $|z + 2| = |z - (-2)|$ is the distance from $-2$, **not** from $+2$.

Same locus, different form: $\left|\dfrac{z - a}{z - b}\right| = 1$. (With a
ratio $k \ne 1$ it becomes a circle. That's C26.)

### Worked example
Find the locus of $|z - 2| = |z + 2i|$.

1. Read the points: $|z - 2|$ is the distance from $2 = (2, 0)$, and
   $|z + 2i| = |z - (-2i)|$ is the distance from $-2i = (0, -2)$.
2. Square both sides: $(x - 2)^2 + y^2 = x^2 + (y + 2)^2$.
3. Expand. The $x^2$ and $y^2$ cancel: $-4x + 4 = 4y + 4$, so $y = -x$.
4. Sanity check: the midpoint $(1, -1)$ lies on $y = -x$. ✓ Line $ab$ has slope $1$, and $y = -x$ has slope $-1$, so they're perpendicular. ✓

### Visual (interactive spec)
Two fixed points $a$ and $b$ on the Argand plane, and a draggable point $z$
with segments drawn to each. The two lengths are shown live. When they're
equal, $z$ leaves a trace. After a few drags the trace shows itself as a
straight line through the midpoint, at right angles to $ab$.

## Misconceptions

| ID | The mistake | What the student sees (remediation) | Fallback |
|---|---|---|---|
| C25-M1 | Two moduli, so it must be a circle | "Equal distances from **two** points gives a line. Square both sides: the $x^2$ and $y^2$ cancel. A circle needs one point and a fixed distance." | C11 |
| C25-M2 | Reading $\|z + a\|$ as the distance from $+a$ | "$\|z + a\| = \|z - (-a)\|$ is the distance from $-a$. Rewrite each term as $\|z - \text{point}\|$ before plotting." | C11 |
| C25-M3 | Giving the line **through** $a$ and $b$ instead of the bisector | "The points equidistant from $a$ and $b$ cross segment $ab$ at its midpoint, at right angles. They don't run along it." | C11 |

## Check items

**C25-Q1** · NDA style (PYQ Vault self-check) · The locus $|z - 1| = |z + 1|$ is:
- (A) the imaginary axis ✓
- (B) the real axis → C25-M3
- (C) the circle $|z| = 1$ → C25-M1
- (D) every point of the plane → C25-M2

**C25-Q2** · authored · The locus $|z - 2| = |z - 2i|$ is:
- (A) the line $y = x$ ✓
- (B) the line $x + y = 2$ → C25-M3
- (C) the circle $|z - (1 + i)| = \sqrt2$ → C25-M1
- (D) the line $y = -x$ → C25-M2

**C25-Q3** · MHT-CET style (PYQ Vault self-check) · The locus $\left|\dfrac{z - 3}{z - 1}\right| = 1$ is:
- (A) the line $x = 2$ ✓
- (B) a circle → C25-M1
- (C) the real axis → C25-M3
- (D) the line $x = -2$ → C25-M2

**C25-Q4** · authored · The locus $|z + 2| = |z - 4i|$ is:
- (A) $x + 2y = 3$ ✓
- (B) $x - 2y = -3$ → C25-M2
- (C) $2x - y = -4$ → C25-M3
- (D) $|z + 1 - 2i| = \sqrt5$ → C25-M1

**C25-Q5** · authored · Which point lies on the locus $|z + 4| = |z - 2i|$?
- (A) $-4 + 5i$ ✓
- (B) $1 - i$ → C25-M2
- (C) $2 + 3i$ → C25-M3
- (D) $0$ → C25-M1
