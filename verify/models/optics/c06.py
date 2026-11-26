"""C06 Prisms and dispersion: answer models (the key, and one per misconception).

Prism: r1 + r2 = A, i + e = A + delta; thin prism delta = (n - 1) A; angular dispersion delta_V - delta_R = (n_V - n_R) A;
dispersive power omega = (delta_V - delta_R) / ((delta_V + delta_R) / 2) = (n_V - n_R) / (n_Y - 1).
params["ask"]:
  "omega": dispersive power from n_R, n_V and delta_R in degrees (inputs nR, nV, dR);
  "thin":  deviation in degrees by a thin prism (inputs A, n);
  "dev":   deviation in degrees of a ray incident at i degrees (sin i given as s) on a prism of angle A (inputs i, s, n, A);
  "pick", "drop": named answers.
"""
from sympy import Symbol, asin, pi, sin

from physics import sig

NAMED = {
    "pick": {"key": "prism_6_9", "C06-M5": "prism_11_15", "C06-M9": "prism_16_19", "C06-M10": "prism_14_16"},
    "drop": {"key": "refract_reflect_refract", "C06-M11": "total_reflection", "C06-M12": "two_reflections", "C06-M13": "mirror_only"},
}


def _deg(x):
    return x * 180 / pi


def _solve(v, p, *, no_one=False, inv=False, plain=False, sum_=False, ang=False, thin=False, emerg=False, one_face=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "omega":
        nR, nV, dR = v["nR"], v["nV"], v["dR"]
        if no_one:
            return sig((nV - nR) / ((nV + nR) / 2), n)
        A = dR / (nR - 1)
        dV = A * (nV - 1)
        if ang:
            return sig(dV - dR, n)
        return sig((dV - dR) / (dV + dR) if sum_ else (dV - dR) / ((dV + dR) / 2), n)
    if ask == "thin":
        A, m = v["A"], v["n"]
        if no_one:
            return sig(m * A, n)
        if inv:
            return sig(A / (m - 1), n)
        if plain:
            return sig(A, n)
        return sig((m - 1) * A, n)
    if ask == "dev":
        i, s, m, A = v["i"], v["s"], v["n"], v["A"]
        if thin:
            return sig((m - 1) * A, n)
        r1 = _deg(asin(s / m))
        if one_face:
            return sig(i - r1, n)
        e = _deg(asin(m * sin((A - r1) * pi / 180)))
        return sig(e if emerg else i + e - A, n)
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
    "C06-M1": _m("C06-M1", ("omega", "thin"), no_one=True),  # drops the "- 1": delta = n A, omega = (nV - nR)/nY
    "C06-M2": _m("C06-M2", ("thin",), inv=True),  # delta = A / (n - 1)
    "C06-M3": _m("C06-M3", ("thin",), plain=True),  # deviation equals the prism angle
    "C06-M4": _m("C06-M4", ("omega",), sum_=True),  # divides by delta_V + delta_R, not their mean
    "C06-M5": _m("C06-M5", ("omega",), ang=True),  # gives the angular dispersion as the dispersive power
    "C06-M6": _m("C06-M6", ("dev",), thin=True),  # uses the thin-prism formula for a 60 degree prism
    "C06-M7": _m("C06-M7", ("dev",), emerg=True),  # gives the angle of emergence as the deviation
    "C06-M8": _m("C06-M8", ("dev",), one_face=True),  # counts the deviation at the first face only
    "C06-M9": _m("C06-M9"),  # thinks larger deviation means larger dispersive power
    "C06-M10": _m("C06-M10"),  # inverts the ratio: mean deviation over angular dispersion
    "C06-M11": _m("C06-M11"),  # thinks the reflection inside the drop is total
    "C06-M12": _m("C06-M12"),  # thinks a primary rainbow needs two reflections
    "C06-M13": _m("C06-M13"),  # thinks the drop only reflects, like a mirror
}
