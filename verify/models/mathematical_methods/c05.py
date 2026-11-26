"""C05 The vector (cross) product: answer models (the key, and one per misconception).

params["ask"]:
  "unit":   |a x b| for two unit vectors at th degrees (input th);
  "cross":  A x B for A = (a1, a2, a3), B = (b1, b2, b3), as x ihat + y jhat + z khat (inputs a1..b3);
  "kj":     k x j;
  "false":  which identity is not correct (named).
The key expands the determinant |i j k; a1 a2 a3; b1 b2 b3|.
"""
from sympy import Symbol, cos, pi, sin

IH, JH, KH = Symbol("ihat"), Symbol("jhat"), Symbol("khat")

NAMED = {"false": {"key": "cross_commutes", "C05-M8": "dot_distributes", "C05-M9": "dot_commutes",
                   "C05-M10": "cross_distributes"}}


def _cross(a, b):
    return (a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0])


def _vec(c):
    return c[0] * IH + c[1] * JH + c[2] * KH


def _solve(v, p, *, use_cos=False, no_angle=False, add=False, j_sign=False, swap=False, matching=False, dot=False,
           add_terms=False, zero=False, size_only=False):
    ask = p["ask"]
    if ask == "unit":
        th = v["th"] * pi / 180
        if use_cos:
            return cos(th)
        if no_angle:
            return 1
        if add:
            return 2
        return sin(th)
    if ask == "cross":
        a, b = [v["a1"], v["a2"], v["a3"]], [v["b1"], v["b2"], v["b3"]]
        if dot:
            return sum(x * y for x, y in zip(a, b))
        if matching:
            return _vec([x * y for x, y in zip(a, b)])
        if add_terms:  # adds the two cross terms instead of subtracting
            return _vec((a[1] * b[2] + a[2] * b[1], -(a[0] * b[2] + a[2] * b[0]), a[0] * b[1] + a[1] * b[0]))
        c = _cross(b, a) if swap else _cross(a, b)
        if j_sign:
            c = (c[0], -c[1], c[2])
        return _vec(c)
    if ask == "kj":
        if zero:
            return 0
        if size_only:
            return 1
        return IH if swap else -IH  # k x j = -(j x k) = -i
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C05-M1": _m("C05-M1", ("unit",), use_cos=True),  # uses cos, as in the dot product
    "C05-M2": _m("C05-M2", ("unit",), no_angle=True),  # unit vectors always give 1
    "C05-M3": _m("C05-M3", ("unit",), add=True),  # adds the magnitudes
    "C05-M4": _m("C05-M4", ("cross",), j_sign=True),  # forgets the minus sign on the j term
    "C05-M5": _m("C05-M5", ("cross", "kj"), swap=True),  # takes the product in the wrong order
    "C05-M6": _m("C05-M6", ("cross",), matching=True),  # multiplies matching components
    "C05-M7": _m("C05-M7", ("cross",), dot=True),  # finds the dot product instead
    "C05-M8": _m("C05-M8"),  # thinks the dot product does not distribute
    "C05-M9": _m("C05-M9"),  # thinks the dot product does not commute
    "C05-M10": _m("C05-M10"),  # thinks the cross product does not distribute
    "C05-M11": _m("C05-M11", ("cross",), add_terms=True),  # adds the cross terms
    "C05-M12": _m("C05-M12", ("kj",), zero=True),  # perpendicular gives zero, as in the dot product
    "C05-M13": _m("C05-M13", ("kj",), size_only=True),  # gives the size, 1, and drops the direction
}
