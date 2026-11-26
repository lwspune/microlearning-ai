"""C03 Equivalent resistance of networks: answer models (the key, and one per misconception).

params["ask"] picks the network:
  "ladder": an infinite ladder, series resistor a on each section and shunt b; resistance between its input ends.
  "ring":   a uniform ring of resistance R, tapped at two points a fraction f of the circumference apart.
            params["out"] = "R" (resistance between the points) or "I" (current from a cell E, r joined to them).
  "coils":  coils R1, R2, R3 in parallel, in series with the same three coils in series; total resistance.
  "bridge": four arms FG = a, GB = b, FH = c, HB = d and a bridge arm GH = g; resistance between F and B.

The key works from the definitions: series resistances add, parallel ones add as reciprocals, the ladder minus
its first section is the same ladder (R = a + bR/(b + R), positive root), and an unbalanced bridge is solved by
the junction law at G and H with V = 0 at F and V = 1 at B (R = 1/I).
"""
from sympy import Rational, Symbol, linsolve, solve, symbols

from physics import sig


def _par(*rs):
    return 1 / sum(1 / x for x in rs)


def _ladder(v, mode=None):
    a, b = v["a"], v["b"]
    if mode == "infinite":
        return Symbol("infinite")
    if mode == "zero":
        return Rational(0)
    if mode == "first":
        return a + b
    x = Symbol("x", positive=True)
    (r,) = solve(x - a - b * x / (b + x), x)
    return r


def _ring(v, p, mode=None):
    R, f = v["R"], v["f"]
    a, b = f * R, (1 - f) * R
    if mode == "series":
        rab = R
    elif mode == "short":
        rab = min(a, b)
    elif mode == "no_invert":
        rab = 1 / a + 1 / b
    elif mode in (None, "no_r"):
        rab = _par(a, b)
    else:
        raise ValueError("does not apply to this item")
    if p["out"] == "R":
        if mode == "no_r":
            raise ValueError("does not apply to this item")
        return rab
    return v["E"] / (rab + (0 if mode == "no_r" else v["r"]))


def _coils(v, mode=None):
    rs = [v["R1"], v["R2"], v["R3"]]
    s = sum(rs)
    if mode == "no_invert":
        p = sum(1 / x for x in rs)
    elif mode == "product":
        p = rs[0] * rs[1] * rs[2] / s
    elif mode == "series":
        p = s
    elif mode is None:
        p = _par(*rs)
    else:
        raise ValueError("does not apply to this item")
    return p + s


def _bridge(v, mode=None):
    a, b, c, d, g = v["a"], v["b"], v["c"], v["d"], v["g"]
    if mode == "balanced":
        return _par(a + b, c + d)
    if mode == "merge":
        return _par(a, c) + _par(b, d)
    if mode == "series":
        return (a + b) + (c + d)
    if mode is not None:
        raise ValueError("does not apply to this item")
    vg, vh = symbols("vg vh")
    (s,) = linsolve([vg / a + (vg - 1) / b + (vg - vh) / g, vh / c + (vh - 1) / d + (vh - vg) / g], [vg, vh])
    i = (1 - s[0]) / b + (1 - s[1]) / d
    return 1 / i


def _solve(v, p, mode=None):
    ask = p["ask"]
    if ask == "ladder":
        if mode not in (None, "infinite", "zero", "first"):
            raise ValueError("does not apply to this item")
        x = _ladder(v, mode)
        return x if isinstance(x, Symbol) else sig(x)
    if mode in ("infinite", "zero", "first"):
        raise ValueError("does not apply to this item")
    if ask == "ring":
        return sig(_ring(v, p, mode))
    if ask == "coils":
        return sig(_coils(v, mode))
    if ask == "bridge":
        return sig(_bridge(v, mode))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(mode):
    return lambda v, p: _solve(v, p, mode)


MODELS = {
    "key": key,
    "C03-M1": _m("infinite"),  # an infinite chain has infinite resistance
    "C03-M2": _m("zero"),  # infinitely many parallel paths give zero resistance
    "C03-M3": _m("first"),  # keeps only the first section of the ladder
    "C03-M4": _m("series"),  # adds two paths between the same points in series
    "C03-M5": _m("short"),  # current takes only the shorter path
    "C03-M6": _m("no_r"),  # leaves out the cell's internal resistance
    "C03-M7": _m("no_invert"),  # adds reciprocals and forgets to invert
    "C03-M8": _m("product"),  # product over sum for three in parallel
    "C03-M9": _m("balanced"),  # treats an unbalanced bridge as balanced
    "C03-M10": _m("merge"),  # treats the bridge resistor as a plain wire
}
