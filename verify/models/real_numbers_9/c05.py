"""C05 Surds: order and simplest form: answer models (the key, and one per misconception).

Count items: params {"order": "3", "roots": ["3:36", "2:3", ...]}; each root is "index:radicand"
  (a positive whole radicand). The answer is how many of the roots are surds of that order.
Simplify items: inputs {"c": coefficient, "n": radicand}; the surd is c * sqrt(n), and the answer
  is the number the student writes for it. Writing it in simplest form does not change its value,
  so every wrong answer here is a different number.
"""
from sympy import Integer, Rational, sqrt


def _roots(p):
    out = []
    for r in p["roots"]:
        k, a = r.split(":")
        out.append((int(k), int(a)))
    return out


def _is_surd(k, a):
    """From the definition: the k-th root of a positive rational a is a surd when it is irrational."""
    return not (Integer(a) ** Rational(1, k)).is_rational


def _count(p, rule):
    order = int(p["order"])
    return Integer(sum(1 for k, a in _roots(p) if rule(k, a, order)))


def key(v, p):
    if "roots" in p:
        return _count(p, lambda k, a, o: _is_surd(k, a) and k == o)
    return v["c"] * sqrt(v["n"])


def _largest_square_root(n):
    """The largest s with s^2 dividing n."""
    n = int(n)
    s = 1
    for t in range(2, int(n**0.5) + 1):
        if n % (t * t) == 0:
            s = t
    return s


def _split(v):
    s = _largest_square_root(v["n"])
    if s == 1:
        raise ValueError("no square factor to take out")
    return v["c"], s, Integer(v["n"])


def m1(v, p):
    """Reads the number under the root sign (the radicand) as the order: calls sqrt(3) a surd of order 3."""
    if "roots" not in p:
        raise ValueError("count items only")
    return _count(p, lambda k, a, o: _is_surd(k, a) and a == o)


def m2(v, p):
    """Thinks every root is a surd: does not check whether the root works out to a rational number."""
    if "roots" not in p:
        raise ValueError("count items only")
    return _count(p, lambda k, a, o: k == o)


def m3(v, p):
    """Ignores the index on the root sign: treats every root as a square root (order 2, surd unless a perfect square)."""
    if "roots" not in p:
        raise ValueError("count items only")
    return _count(p, lambda k, a, o: o == 2 and not (Integer(a) ** Rational(1, 2)).is_rational)


def m4(v, p):
    """Takes the square root s of the square factor s^2 out, but divides the radicand by s, not by s^2: sqrt(112) = 4 sqrt(28)."""
    if "roots" in p:
        raise ValueError("simplify items only")
    c, s, n = _split(v)
    return c * s * sqrt(n / s)


def m5(v, p):
    """Takes the square factor s^2 out whole instead of its square root: sqrt(112) = 16 sqrt(7)."""
    if "roots" in p:
        raise ValueError("simplify items only")
    c, s, n = _split(v)
    return c * s**2 * sqrt(n / s**2)


def m6(v, p):
    """Splits the root of a product into a sum: sqrt(16 x 7) = 4 + sqrt(7)."""
    if "roots" in p:
        raise ValueError("simplify items only")
    c, s, n = _split(v)
    return c * (s + sqrt(n / s**2))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
