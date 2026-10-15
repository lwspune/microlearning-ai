"""C15 Sequences and series: answer models (the key, and one per misconception).

Inputs: f = t_n as an expression in the symbol n; n = the symbol n.
params["ask"]:
  term   the kth term (stem says "the kth term" in words). Input k.
  terms  the first k terms, as a Tuple. Input k.
  which  the position n with t_n = T. Input T.
  sum    S_k, the sum of the first k terms. Input k.
  rsum   S_k for a sequence given by t_1 = a and t_(n+1) = g, g an expression in the symbol u
         (the previous term t_n). Inputs a, g, u, k (f and n not used).
"""
from sympy import Integer, Tuple, expand

_MAX = 2000  # furthest position the key walks to


def _t(v, f, m):
    return f.subs(v["n"], m)


def _rterms(v, k, step):
    """The first k terms of t_1 = a, t_(m+1) = step(t_m, m)."""
    terms = [v["a"]]
    for m in range(1, k):
        terms.append(step(terms[-1], m))
    return terms


def _answer(v, p, t):
    """Reads the asked quantity off a rule t(m) for the term in position m (m = 1, 2, ...)."""
    ask = p["ask"]
    if ask == "term":
        return t(int(v["k"]))
    if ask == "terms":
        return Tuple(*[t(m) for m in range(1, int(v["k"]) + 1)])
    if ask == "sum":
        return sum((t(m) for m in range(1, int(v["k"]) + 1)), Integer(0))
    if ask == "which":
        for m in range(1, _MAX):
            if t(m) == v["T"]:
                return Integer(m)
        raise ValueError("T is not a term")
    raise ValueError(f"no ask {ask}")


def key(v, p):
    """From the definitions: t_m is the formula at n = m (or the rule applied term by term); S_k adds t_1 to t_k."""
    if p["ask"] == "rsum":
        g = v["g"]
        return sum(_rterms(v, int(v["k"]), lambda prev, m: g.subs(v["u"], prev)), Integer(0))
    return _answer(v, p, lambda m: _t(v, v["f"], m))


def m1(v, p):
    """Takes S_k to be the kth term t_k: gives the last term, not the total."""
    if p["ask"] == "sum":
        return _t(v, v["f"], v["k"])
    if p["ask"] == "rsum":
        g = v["g"]
        return _rterms(v, int(v["k"]), lambda prev, m: g.subs(v["u"], prev))[-1]
    raise ValueError("no sum asked")


def m2(v, p):
    """Mixes up position and value: puts the given term T in for n; in a rule, uses n where it says t_n."""
    if p["ask"] == "which":
        return _t(v, v["f"], v["T"])
    if p["ask"] == "rsum":
        g = v["g"]
        return sum(_rterms(v, int(v["k"]), lambda prev, m: g.subs(v["u"], m)), Integer(0))
    raise ValueError("no position to confuse with a value")


def m3(v, p):
    """Starts counting at n = 0: the first term is the formula at n = 0, the kth at n = k - 1."""
    if p["ask"] == "which":
        return key(v, p) + 1  # t_0 counted as the first term, so every place moves up one
    if p["ask"] == "rsum":
        raise ValueError("a rule starts from the given t_1")
    return _answer(v, p, lambda m: _t(v, v["f"], m - 1))


def m4(v, p):
    """Assumes a fixed step: finds t_1 and t_2, then keeps adding t_2 - t_1."""
    if p["ask"] == "rsum":
        g = v["g"]
        t1, t2 = _rterms(v, 2, lambda prev, m: g.subs(v["u"], prev))
    else:
        t1, t2 = _t(v, v["f"], 1), _t(v, v["f"], 2)
        if expand(v["f"]).as_poly(v["n"]).degree() <= 1:
            raise ValueError("a linear t_n really has a fixed step: this gives the key")
    d = t2 - t1
    if p["ask"] == "which":
        m = (v["T"] - t1) / d + 1
        if not (m.is_integer and m > 0):
            raise ValueError("T is not a term of the stepped list")
        return m
    if p["ask"] == "rsum":
        return sum((t1 + (m - 1) * d for m in range(1, int(v["k"]) + 1)), Integer(0))
    return _answer(v, p, lambda m: t1 + (m - 1) * d)


def m5(v, p):
    """Takes S_k as k times the kth term, as if every term equalled t_k."""
    if p["ask"] not in ("sum", "rsum"):
        raise ValueError("no sum asked")
    return v["k"] * m1(v, p)


def m6(v, p):
    """Reads n^2 as 2n (squaring as doubling)."""
    if p["ask"] == "rsum":
        raise ValueError("no n^2 in a rule on earlier terms")
    f = expand(v["f"])
    if f.coeff(v["n"], 2) == 0:
        raise ValueError("no n^2 in t_n")
    slipped = f.subs(v["n"] ** 2, 2 * v["n"])
    return _answer(v, p, lambda m: _t(v, slipped, m))


MODELS = {"key": key, "C15-M1": m1, "C15-M2": m2, "C15-M3": m3, "C15-M4": m4, "C15-M5": m5, "C15-M6": m6}
