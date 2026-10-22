"""C02 All the ratios from one: answer models (the key, and one per misconception).

Every item names the ratio it gives in params["given"] (sin, cos, tan, cot, sec, cosec; input r),
or "rel" for a relation a sin(theta) = b cos(theta) (inputs a, b), and what it asks in
params["find"]: a ratio's name, or "e1" for (1 - sec)/(1 + cosec).

The key finds the acute angle itself (an inverse function, or solving the relation on (0, 90 deg))
and evaluates the ratios of that angle, never by the identity route taught here. Each misconception
follows the route a student takes from the given ratio, with its one wrong rule.
"""
from sympy import Interval, Symbol, acos, acot, asec, asin, atan, cos, cot, csc, pi, sec, simplify, sin, solveset, sqrt, tan

_T = Symbol("t", real=True)
_INV = {"sin": asin, "cos": acos, "tan": atan, "cot": acot, "sec": asec}


def _angle(v, p):
    g = p["given"]
    if g == "rel":
        sols = list(solveset(v["a"] * sin(_T) - v["b"] * cos(_T), _T, Interval.open(0, pi / 2)))
        assert len(sols) == 1, "the relation must fix one acute angle"
        return sols[0]
    if g == "cosec":
        return asin(1 / v["r"])
    return _INV[g](v["r"])


def _ask(r, p):
    """r: the six ratios (dict); returns what the item asks for."""
    f = p["find"]
    if f == "e1":
        return simplify((1 - r["sec"]) / (1 + r["cosec"]))
    return simplify(r[f])


def key(v, p):
    t = _angle(v, p)
    assert 0 < t < pi / 2
    r = {"sin": sin(t), "cos": cos(t), "tan": tan(t), "cot": cot(t), "sec": sec(t), "cosec": csc(t)}
    return _ask(r, p)


# The three identities, solved for the partner ratio, in three versions:
# right (with squares and the root), noroot (stops at the square), nosq (no squares at all).
def _partner(kind, x, mode):
    """kind 'sc': sin <-> cos; 'st': sec -> tan; 'ts': tan -> sec (also cot -> cosec)."""
    if mode == "right":
        return {"sc": sqrt(1 - x**2), "st": sqrt(x**2 - 1), "ts": sqrt(1 + x**2)}[kind]
    if mode == "noroot":
        return {"sc": 1 - x**2, "st": x**2 - 1, "ts": 1 + x**2}[kind]
    return {"sc": 1 - x, "st": x - 1, "ts": 1 + x}[kind]


def _route(v, p, mode="right", swap=False, flip=False, early=False):
    """The six ratios a student finds from the given one.
    mode: how the identity is used; swap: sec = 1/sin, cosec = 1/cos (wrong reciprocal pairs);
    flip: tan = cos/sin (so a sin = b cos gives tan = a/b); early: reports the identity's ratio
    in place of its reciprocal (cosec for sin, sec for cos)."""
    g = p["given"]
    if g in ("sin", "cos"):
        x = v["r"]
        y = _partner("sc", x, mode)
        s, c = (x, y) if g == "sin" else (y, x)
    elif g == "sec":
        if swap:  # reads sec = 1/sin: sin = 1/sec, then cos from sin^2 + cos^2 = 1
            s = 1 / v["r"]
            c = _partner("sc", s, mode)
        else:
            c = 1 / v["r"]
            s = _partner("st", v["r"], mode) * c
    elif g in ("cot", "tan", "rel"):
        if g == "rel":
            tn = v["a"] / v["b"] if flip else v["b"] / v["a"]
            g, x = "tan", tn
        else:
            x = v["r"]
        big = _partner("ts", x, mode)  # cosec from cot, or sec from tan
        if g == "cot":
            if early:
                return {"sin": big}
            s = 1 / big
            c = s * x
        else:
            if early:
                return {"cos": big}
            c = 1 / big
            s = c * x
    else:
        raise ValueError(f"not modelled for given {g}")
    if early:
        raise ValueError("early applies only where a reciprocal follows the identity")
    tn = c / s if flip else s / c
    r = {"sin": s, "cos": c, "tan": tn, "cot": 1 / tn}
    r["sec"], r["cosec"] = (1 / s, 1 / c) if swap else (1 / c, 1 / s)
    return r


def m1(v, p):
    """Stops at the square: takes cos^2 (or tan^2, sec^2, cosec^2) from the identity as the ratio."""
    return _ask(_route(v, p, mode="noroot"), p)


def m2(v, p):
    """Uses an identity without the squares: cos = 1 - sin, tan = sec - 1, sec = 1 + tan."""
    return _ask(_route(v, p, mode="nosq"), p)


def m3(v, p):
    """Pairs the reciprocals wrongly: sec = 1/sin and cosec = 1/cos."""
    if p["given"] not in ("sin", "cos", "sec"):
        raise ValueError("no reciprocal step on this route")
    return _ask(_route(v, p, swap=True), p)


def m4(v, p):
    """Flips the quotient: tan = cos/sin, so a sin = b cos gives tan = a/b."""
    if p["given"] not in ("sin", "cos", "rel"):
        raise ValueError("no quotient step on this route")
    return _ask(_route(v, p, flip=True), p)


def m5(v, p):
    """Stops one step early: reports cosec (from 1 + cot^2 = cosec^2) when sin is asked."""
    r = _route(v, p, early=True)
    if p["find"] not in r:
        raise ValueError("not the ratio the identity gives")
    return simplify(r[p["find"]])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
