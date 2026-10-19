"""C10 Remainders and integer parts: answer models (the key, and one per misconception).

Two kinds of item, told apart by params["ask"]:
  "rem": the remainder when A^n is divided by m.
         inputs: A, n, m (positive integers) and k, the power the student splits off,
         with A^k = (a multiple of m) + s, s = +1 or -1. So A^n = A^r (A^k)^t, n = k t + r.
  "int": the integer part I of (a + sqrt(b))^n, where 0 < |a - sqrt(b)| < 1.
         inputs: a, b, n (b not a perfect square).
"""
from sympy import Integer, expand, floor, radsimp, simplify, sqrt


# ---- remainders ---------------------------------------------------------------

def _rem(v):
    A, n, m, k = (int(v[x]) for x in ("A", "n", "m", "k"))
    c = pow(A, k, m)
    if c == 1:
        s = 1
    elif c == m - 1:
        s = -1
    else:
        raise ValueError("A^k is not a multiple of m plus or minus 1")
    t, r = divmod(n, k)
    return A, n, m, s, t, r


# ---- integer parts --------------------------------------------------------------

def _int(v):
    a, b, n = v["a"], v["b"], int(v["n"])
    N = (a + sqrt(b)) ** n
    conj = (a - sqrt(b)) ** n            # the signed conjugate power
    S = radsimp(expand(N + conj))
    if not S.is_integer:
        raise ValueError("the sum with the conjugate is not an integer here (f = f' case)")
    return a, b, n, N, S


def key(v, p):
    if p["ask"] == "rem":
        A, n, m = (int(v[x]) for x in ("A", "n", "m"))
        return Integer(pow(A, n, m))      # straight from the definition
    if p["ask"] == "int":
        return floor((v["a"] + sqrt(v["b"])) ** int(v["n"]))
    raise ValueError(p["ask"])


def m1(v, p):
    """(km - 1)^t leaves 1 for every t: forgets that (-1)^t = -1 for odd t."""
    if p["ask"] != "rem":
        raise ValueError("remainders only")
    A, n, m, s, t, r = _rem(v)
    if s ** t == 1:
        raise ValueError("the last term is +1 anyway")
    return Integer(pow(A, r, m))


def m2(v, p):
    """Drops the leftover factor A^r when n is not a multiple of k: A^n taken as (A^k)^t."""
    if p["ask"] != "rem":
        raise ValueError("remainders only")
    A, n, m, s, t, r = _rem(v)
    if r == 0:
        raise ValueError("no leftover factor")
    return Integer(s ** t % m)


def m3(v, p):
    """Gives the negative value the expansion ends at, e.g. -5, as the remainder."""
    if p["ask"] != "rem":
        raise ValueError("remainders only")
    A, n, m, s, t, r = _rem(v)
    val = s ** t * pow(A, r, m)
    if val >= 0:
        raise ValueError("nothing negative to report")
    return Integer(val)


def m4(v, p):
    """The integer part is the integer S = (a + sqrt b)^n + (a - sqrt b)^n itself:
    treats the small conjugate power as nothing."""
    if p["ask"] != "int":
        raise ValueError("integer parts only")
    return _int(v)[4]


def m5(v, p):
    """The integer part is the rational part of the expansion, S/2: takes the surd terms
    to be the fractional part."""
    if p["ask"] != "int":
        raise ValueError("integer parts only")
    return simplify(_int(v)[4] / 2)


def m6(v, p):
    """Adds the surviving (even) terms once, forgetting to double, then subtracts 1: S/2 - 1."""
    if p["ask"] != "int":
        raise ValueError("integer parts only")
    return simplify(_int(v)[4] / 2 - 1)


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
