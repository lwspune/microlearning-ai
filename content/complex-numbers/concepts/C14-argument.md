# C14 · Argument (principal argument)

- **Slug:** `argument` · **Tier:** core · **Status:** draft
- **Prereqs:** C10 Argand plane · **Ext:** standard trig values, tan⁻¹
- **Source:** PYQ Vault `cn-argument-polar` (NDA) · `cetcn-argument-and-quadrant` (MHT-CET) · `jcx-arg` (JEE)
- **One-liner:** The argument is the direction of the arrow to $z$. Find the reference angle, then place it by the quadrant.

## Hook

$1 + i$ and $-1 - i$ both have $\dfrac{y}{x} = 1$, so $\tan^{-1}\dfrac yx$ gives
$\dfrac\pi4$ for both. **Do they point the same way?**

> Reveal: no, they point in exactly opposite directions. $\tan^{-1}$ only
> knows the slope, not which way the arrow points. The argument needs both.

## Explanation

### Intuition
Draw an arrow from the origin to $z$. The argument is the angle that arrow
makes with the positive real axis. Turning anticlockwise is positive and
clockwise is negative. Opposite points share a slope, so the slope alone can't
give the angle. **Plot the point first.**

### Formal
$\arg z = \theta$ where $\cos\theta = \dfrac{x}{|z|}$ and $\sin\theta = \dfrac{y}{|z|}$ ($z \ne 0$).
The **principal argument** is the one value with $\theta \in (-\pi, \pi]$.

With the reference angle $\alpha = \tan^{-1}\left|\dfrac yx\right|$:

- Quadrant I ($x > 0, y > 0$): $\theta = \alpha$
- Quadrant II ($x < 0, y > 0$): $\theta = \pi - \alpha$
- Quadrant III ($x < 0, y < 0$): $\theta = -(\pi - \alpha)$
- Quadrant IV ($x > 0, y < 0$): $\theta = -\alpha$
- On the axes: positive real $0$ · positive imaginary $\dfrac\pi2$ · negative real $\pi$ · negative imaginary $-\dfrac\pi2$

**Two conventions.** Some papers use $[0, 2\pi)$ instead of $(-\pi, \pi]$.
The same direction reads $-\dfrac{3\pi}{4}$ in one and $\dfrac{5\pi}{4}$ in
the other. They differ by $2\pi$. Read the question (or the options) to see which one it uses.

### Worked example
Find the principal argument of $z = -2 - 2i$.

1. Plot: $x < 0$ and $y < 0$, so the point is in quadrant III.
2. Reference angle: $\alpha = \tan^{-1}\left|\dfrac{-2}{-2}\right| = \dfrac\pi4$.
3. Quadrant III: $\theta = -(\pi - \dfrac\pi4) = -\dfrac{3\pi}{4}$.

In the $[0, 2\pi)$ convention the same angle is $\dfrac{5\pi}{4}$.
The trap: $\tan^{-1}\dfrac{-2}{-2} = \tan^{-1}1 = \dfrac\pi4$ points into quadrant I, the opposite direction.

### Visual (interactive spec)
A draggable point on the Argand plane, with its arrow and an arc showing
$\theta$. A faint "ghost" arrow shows what $\tan^{-1}\dfrac yx$ alone would
give. When the student drags the point to $x < 0$, the ghost arrow flips to
the opposite side. That's the gap the quadrant rule fixes.

## Misconceptions

| ID | The mistake | What the student sees (remediation) | Fallback |
|---|---|---|---|
| C14-M1 | Taking $\tan^{-1}\dfrac yx$ itself as the argument | "$\tan^{-1}$ only returns angles between $-\frac\pi2$ and $\frac\pi2$, which point to the right. Your point is on the left. Plot it, then use the quadrant rule." | C10 |
| C14-M2 | Answering outside $(-\pi, \pi]$, or mixing up the two conventions | "Principal means $(-\pi, \pi]$. Add or subtract $2\pi$ to bring your angle into range. Is the paper using $[0, 2\pi)$? The options tell you." | — |
| C14-M3 | Reference angle from $\tan^{-1}\left\|\dfrac xy\right\|$, measured from the imaginary axis (for a point on an axis: swapping the real and imaginary axes) | "The angle is measured from the **real** axis, so it's $\tan^{-1}\left\|\frac{y}{x}\right\|$: imaginary part over real part." | Ext: trig |
| C14-M4 | Giving the reference angle without placing it by quadrant | "That's the reference angle. Now place it: which quadrant is the point in?" | C10 |


**Note for the engine:** for a point in quadrant I or IV, C14-M1 gives the
*correct* answer, so those items can't detect M1. Detecting it needs points with
$x < 0$.

## Check items

**C14-Q1** · authored · The principal argument of $-1 + \sqrt3\,i$ is:
- (A) $\dfrac{2\pi}{3}$ ✓
- (B) $-\dfrac{\pi}{3}$ → C14-M1
- (C) $\dfrac{\pi}{3}$ → C14-M4
- (D) $\dfrac{5\pi}{6}$ → C14-M3

**C14-Q2** · PYQ Vault practice · The principal argument of $-\sqrt3 - i$ is:
- (A) $-\dfrac{5\pi}{6}$ ✓
- (B) $\dfrac{7\pi}{6}$ → C14-M2
- (C) $\dfrac{\pi}{6}$ → C14-M1
- (D) $-\dfrac{2\pi}{3}$ → C14-M3

**C14-Q3** · authored · The principal argument of $1 - \sqrt3\,i$ is:
- (A) $-\dfrac{\pi}{3}$ ✓
- (B) $\dfrac{5\pi}{3}$ → C14-M2
- (C) $-\dfrac{\pi}{6}$ → C14-M3
- (D) $\dfrac{\pi}{3}$ → C14-M4

**C14-Q4** · PYQ Vault practice · The principal argument of $-5$ is:
- (A) $\pi$ ✓
- (B) $0$ → C14-M1
- (C) $-\pi$ → C14-M2
- (D) $-\dfrac{\pi}{2}$ → C14-M3

**C14-Q5** · authored · The principal argument of $-2i$ is:
- (A) $-\dfrac{\pi}{2}$ ✓
- (B) $\dfrac{3\pi}{2}$ → C14-M2
- (C) $\dfrac{\pi}{2}$ → C14-M4
- (D) $\pi$ → C14-M3

**C14-Q6** · NDA style (PYQ Vault trap: $[0, 2\pi)$ keying) · The argument of $-1 - \sqrt3\,i$, taken in $[0, 2\pi)$, is:
- (A) $\dfrac{4\pi}{3}$ ✓
- (B) $-\dfrac{2\pi}{3}$ → C14-M2
- (C) $\dfrac{\pi}{3}$ → C14-M1
- (D) $\dfrac{7\pi}{6}$ → C14-M3
