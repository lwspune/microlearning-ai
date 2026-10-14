"""C02 The nth term of a G.P.: answer models (the key, and one per misconception).

params["ask"]:
  term   t_n. Inputs n, and either a, r (given) or t1, t2 (the G.P. listed, so r = t2/t1).
  which  the n with t_n = T. Inputs t1, t2, T.
  a      the first term from r and one term. Inputs r, n, tn.
  a2     the first term from two terms. Inputs p, tp, q, tq (t_p and t_q, p < q).
"""
from sympy import Integer, Symbol, real_roots

_x = Symbol("x")
_MAX = 2000  # longest run of terms the key will walk


def _ar(v):
    """a and r, from a and r or from the first two listed terms."""
    if "a" in v:
        return v["a"], v["r"]
    return v["t1"], v["t2"] / v["t1"]


def _real_root(c, k):
    """The one real x with x**k = c; refuses when there are two (k even) or none."""
    roots = sorted(set(real_roots(_x**k - c)))
    if len(roots) != 1:
        raise ValueError(f"x^{k} = {c} has {len(roots)} real roots")
    return roots[0]


def _first(pred):
    """The first term number m = 1, 2, ... with pred(m), walking the terms one by one."""
    for m in range(1, _MAX):
        if pred(m):
            return Integer(m)
    raise ValueError("no such term")


def key(v, p):
    """From the definition: start at a and multiply by r once per step."""
    ask = p["ask"]
    if ask == "term":
        a, r = _ar(v)
        t = a
        for _ in range(int(v["n"]) - 1):
            t *= r
        return t
    if ask == "which":
        a, r = _ar(v)
        terms = [a]
        while len(terms) < _MAX and terms[-1] != v["T"]:
            terms.append(terms[-1] * r)
        if terms[-1] != v["T"]:
            raise ValueError("T is not a term")
        return Integer(len(terms))
    if ask == "a":
        t = v["tn"]
        for _ in range(int(v["n"]) - 1):  # step back to t_1
            t /= v["r"]
        return t
    if ask == "a2":
        steps = int(v["q"] - v["p"])
        r = _real_root(v["tq"] / v["tp"], steps)  # t_q is t_p times r, (q - p) times
        t = v["tp"]
        for _ in range(int(v["p"]) - 1):
            t /= r
        return t
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Power = term number: t_n = a r^n (one factor of r too many)."""
    ask = p["ask"]
    if ask == "term":
        a, r = _ar(v)
        return a * r ** v["n"]
    if ask == "which":
        a, r = _ar(v)
        return _first(lambda m: a * r**m == v["T"])
    if ask == "a":
        return v["tn"] / v["r"] ** v["n"]
    if ask == "a2":
        r = _real_root(v["tq"] / v["tp"], int(v["q"] - v["p"]))
        return v["tp"] / r ** v["p"]
    raise ValueError(f"no ask {ask}")


def m2(v, p):
    """Ratio upside down: r = t_1 / t_2, an earlier term over a later one."""
    ask = p["ask"]
    if ask == "term":
        if "t1" not in v:
            raise ValueError("r is given, not worked out")
        a, r = v["t1"], v["t1"] / v["t2"]
        return a * r ** (v["n"] - 1)
    if ask == "a2":
        r = _real_root(v["tp"] / v["tq"], int(v["q"] - v["p"]))
        return v["tp"] / r ** (v["p"] - 1)
    raise ValueError("no ratio to work out")


def m3(v, p):
    """Uses the A.P. formula t_n = a + (n - 1)d: d = t_2 - t_1, or the given r taken as d."""
    ask = p["ask"]
    if ask == "term":
        a = v.get("a", v.get("t1"))
        d = v["r"] if "r" in v else v["t2"] - v["t1"]
        return a + (v["n"] - 1) * d
    if ask == "which":
        a, d = v["t1"], v["t2"] - v["t1"]
        n = (v["T"] - a) / d + 1
        if not (n.is_integer and n > 0):
            raise ValueError("not a term of the A.P.")
        return n
    if ask == "a":
        return v["tn"] - (v["n"] - 1) * v["r"]
    if ask == "a2":
        d = (v["tq"] - v["tp"]) / (v["q"] - v["p"])
        return v["tp"] - (v["p"] - 1) * d
    raise ValueError(f"no ask {ask}")


def m4(v, p):
    """Reads ar^(n-1) as (ar)^(n-1): multiplies a by r before raising to the power."""
    ask = p["ask"]
    if ask == "term":
        a, r = _ar(v)
        return (a * r) ** (v["n"] - 1)
    if ask == "which":
        a, r = _ar(v)
        return _first(lambda m: (a * r) ** (m - 1) == v["T"])
    if ask == "a":
        return _real_root(v["tn"], int(v["n"]) - 1) / v["r"]
    raise ValueError("two terms of (ar)^(n-1) don't fix a")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4}
