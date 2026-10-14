"""C05 The fundamental identities: answer models (the key, and one per misconception).

params["form"]:
  secpcos   (sec A + cos A)(sec A - cos A)                  -> an expression in x (the angle A)
  cos2m1    (cos^2 A - 1)(cot^2 A + 1)                      -> an expression in x
  tancot    tan t + cot t = k; ask sec^2 t + cosec^2 t      inputs k
  pair      a sum or difference of a pair is given; ask one function
            params["pair"]: "csc_cot" or "sec_tan"; params["given"]: "sum" or "diff";
            params["ask"]: sin | cos | tan | cot | sec | csc; inputs k (the given value)
"""
from sympy import Symbol, cos, cot, simplify, sin, solve, sqrt, tan

_x = Symbol("x", real=True)  # the verifier reads option values with a real x
_s, _c = Symbol("s"), Symbol("c")


def _form(p, *want):
    if p["form"] not in want:
        raise ValueError(f"only for form {'/'.join(want)}")


def _six(s, c):
    return {"sin": s, "cos": c, "tan": s / c, "cot": c / s, "sec": 1 / c, "csc": 1 / s}


def _from_pair(f, g, p):
    """The six functions from the pair's values: (cosec, cot) or (sec, tan)."""
    if p["pair"] == "csc_cot":
        s = 1 / f
        return _six(s, g * s)
    c = 1 / f
    return _six(g * c, c)


def _believed_pair(k, p, other):
    """Solve the pair f +/- g = k given the believed other factor (f -/+ g = other)."""
    if p["given"] == "sum":
        plus, minus = k, other
    else:
        plus, minus = other, k
    return (plus + minus) / 2, (plus - minus) / 2


def key(v, p):
    """Straight from the definitions: the expression itself, or (sin, cos) solved from the given equation."""
    if p["form"] == "secpcos":
        return (1 / cos(_x) + cos(_x)) * (1 / cos(_x) - cos(_x))
    if p["form"] == "cos2m1":
        return (cos(_x) ** 2 - 1) * (cot(_x) ** 2 + 1)
    if p["form"] == "tancot":
        k = v["k"]
        t = (k + sqrt(k**2 - 4)) / 2  # tan t from t + 1/t = k
        return simplify((1 + t**2) + (1 + 1 / t**2))
    if p["form"] == "pair":
        k = v["k"]
        sign = 1 if p["given"] == "sum" else -1
        if p["pair"] == "csc_cot":  # (1 +/- c)/s = k
            eq = 1 + sign * _c - k * _s
        else:  # (1 +/- s)/c = k
            eq = 1 + sign * _s - k * _c
        sols = [(a, b) for a, b in solve([eq, _s**2 + _c**2 - 1], [_s, _c]) if simplify(a) != 0 and simplify(b) != 0]
        assert len(sols) == 1, sols
        return simplify(_six(*sols[0])[p["ask"]])
    raise ValueError(f"no form {p['form']}")


def m1(v, p):
    """Pairs tan with cosec and cot with sec: 1 + tan^2 = cosec^2, 1 + cot^2 = sec^2."""
    _form(p, "secpcos", "cos2m1")
    if p["form"] == "secpcos":  # sec^2 A - cos^2 A with sec^2 = 1 + cot^2
        return (1 + cot(_x) ** 2) - (1 - sin(_x) ** 2)
    return -sin(_x) ** 2 * (1 / cos(_x) ** 2)  # cot^2 + 1 taken as sec^2


def m2(v, p):
    """Reads every identity in the shape of sin^2 + cos^2 = 1: tan^2 + sec^2 = 1, cot^2 + cosec^2 = 1."""
    _form(p, "secpcos", "cos2m1")
    if p["form"] == "secpcos":  # sec^2 = 1 - tan^2
        return (1 - tan(_x) ** 2) - (1 - sin(_x) ** 2)
    return -sin(_x) ** 2 * (2 - 1 / sin(_x) ** 2)  # cot^2 = 1 - cosec^2, so cot^2 + 1 = 2 - cosec^2


def m3(v, p):
    """Drops the squares: from cosec^2 - cot^2 = 1 takes the other factor of the pair to be 1."""
    _form(p, "pair")
    f, g = _believed_pair(v["k"], p, 1)
    return simplify(_from_pair(f, g, p)[p["ask"]])


def m4(v, p):
    """Squares a sum term by term: (tan + cot)^2 = tan^2 + cot^2, so tan^2 + cot^2 = k^2."""
    _form(p, "tancot")
    return v["k"] ** 2 + 2


def m5(v, p):
    """Moves a term across '=' without changing its sign."""
    _form(p, "secpcos", "cos2m1", "tancot", "pair")
    if p["form"] == "secpcos":  # cos^2 = 1 + sin^2
        return (1 + tan(_x) ** 2) - (1 + sin(_x) ** 2)
    if p["form"] == "cos2m1":  # cos^2 - 1 = sin^2, and cot^2 + 1 = cosec^2
        return sin(_x) ** 2 * (1 / sin(_x) ** 2)
    if p["form"] == "tancot":  # tan^2 + 2 + cot^2 = k^2 gives tan^2 + cot^2 = k^2 + 2
        return v["k"] ** 2 + 4
    # 1 + cot^2 = cosec^2 becomes cot^2 - cosec^2 = 1: the other factor is -1/k
    f, g = _believed_pair(v["k"], p, -1 / v["k"])
    return simplify(_from_pair(f, g, p)[p["ask"]])


def m6(v, p):
    """Stops one step short: gives the value found on the way (cot for tan, sec for cos, tan^2 + cot^2)."""
    _form(p, "tancot", "pair")
    if p["form"] == "tancot":
        return v["k"] ** 2 - 2
    recip = {"sin": "csc", "cos": "sec", "tan": "cot", "cot": "tan", "sec": "cos", "csc": "sin"}[p["ask"]]
    if recip not in {"csc_cot": ("csc", "cot"), "sec_tan": ("sec", "tan")}[p["pair"]]:
        raise ValueError("the asked function's reciprocal is not one of the pair")
    return 1 / key(v, p)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
