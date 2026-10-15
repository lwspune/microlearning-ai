"""C08 The multiplication theorem: answer models (the key, and one per misconception).

Two draws from a box of n things.
Inputs: n (total), a (how many are of the kind wanted on the first draw), b (how many are
of the kind wanted on the second draw; omit it when both draws want the same kind).
params["repl"]: "no" (the first thing is kept aside) | "yes" (it is put back before the second draw).
"""
from sympy import Rational


def _abn(v):
    n, a = int(v["n"]), int(v["a"])
    same = "b" not in v
    b = a if same else int(v["b"])
    return n, a, b, same


def _repl(p):
    r = p["repl"]
    if r not in ("no", "yes"):
        raise ValueError(f"no repl {r}")
    return r == "yes"


def _stages(n, a, b, same, repl):
    """P(A) and P(B | A) for the scheme: the right second-draw box after the first draw."""
    p_a = Rational(a, n)
    if repl:
        return p_a, Rational(b, n)
    return p_a, Rational(b - 1 if same else b, n - 1)


def key(v, p):
    """Counts ordered pairs of draws directly: the n things labelled, A-things first, then B-things."""
    n, a, b, same = _abn(v)
    repl = _repl(p)
    first = set(range(a))
    second = first if same else set(range(a, a + b))
    pairs = [(i, j) for i in range(n) for j in range(n) if repl or i != j]
    good = sum(1 for i, j in pairs if i in first and j in second)
    return Rational(good, len(pairs))


def m1(v, p):
    """Ignores that the first thing is kept aside: the second draw uses the full box, P(A) P(B)."""
    if _repl(p):
        raise ValueError("needs a draw without replacement")
    n, a, b, same = _abn(v)
    return Rational(a, n) * Rational(b, n)


def m2(v, p):
    """Takes the drawn thing off its kind but not off the total: a/n * (a - 1)/n."""
    if _repl(p):
        raise ValueError("needs a draw without replacement")
    n, a, b, same = _abn(v)
    if not same:
        raise ValueError("needs both draws of the same kind")
    return Rational(a, n) * Rational(a - 1, n)


def m3(v, p):
    """Counts both orders for "first A, then B": adds P(B first, then A)."""
    n, a, b, same = _abn(v)
    if same:
        raise ValueError("needs two different kinds")
    repl = _repl(p)
    pa, pb_a = _stages(n, a, b, same, repl)
    pb, pa_b = _stages(n, b, a, same, repl)
    return pa * pb_a + pb * pa_b


def m4(v, p):
    """Gives the second-draw probability P(B | A) as the answer for P(A and B)."""
    n, a, b, same = _abn(v)
    return _stages(n, a, b, same, _repl(p))[1]


def m5(v, p):
    """Shrinks the box for the second draw although the first thing was put back."""
    if not _repl(p):
        raise ValueError("needs a draw with replacement")
    n, a, b, same = _abn(v)
    pa, pb_a = _stages(n, a, b, same, False)
    return pa * pb_a


def m6(v, p):
    """Adds the two stage probabilities instead of multiplying: P(A) + P(B | A)."""
    n, a, b, same = _abn(v)
    pa, pb_a = _stages(n, a, b, same, _repl(p))
    return pa + pb_a


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
