"""C05 Electric potential: answer models (the key, and one per misconception).

V = kq/r for a point charge; potentials add as signed numbers; W_AB = q (V_B - V_A). params["ask"]:
  "vb":    V_B, in V, after W_uJ of work carries q_uC from a place at V_A (inputs W_uJ, q_uC, VA);
  "ring":  V, in V, at the centre of a ring of radius R_cm carrying q_uC (inputs q_uC, R_cm);
  "drops": V, in V, at the surface of the drop made from N drops of diameter d m, each carrying q_uC (inputs N, d, q_uC);
  "two":   V, in V, at P(8, 0) m from q1_uC at the origin and q2_uC at (0, y2) m (inputs q1_uC, q2_uC, xP, y2);
  "prop":  what V is proportional to (a named answer);
  "zero":  distance, in cm, from the positive charge to the point between q1 (+) and q2 (-) d_cm apart where V = 0.
"""
from sympy import Rational, Symbol, sqrt

from physics import BOOK, sig

NAMED = {"prop": {"key": "inv_r", "C05-M4": "inv_r2", "C05-M12": "r", "C05-M13": "r2"}}
k = BOOK["k_e"]
uC = Rational(1, 10**6)


def _solve(v, p, *, no_start=False, minus=False, inverse=False, r2=False, ring_zero=False, cm=False, radius_n=False,
           diam=False, one_q=False, add_mag=False, coord=False, field_zero=False, other_end=False, midpoint=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "vb":
        dv = v["q_uC"] / v["W_uJ"] if inverse else v["W_uJ"] / v["q_uC"]
        if no_start:
            return sig(dv, n)
        return sig(v["VA"] - dv if minus else v["VA"] + dv, n)
    if ask == "ring":
        if ring_zero:
            return sig(0, n)
        R = v["R_cm"] * (1 if cm else Rational(1, 100))
        return sig(k * v["q_uC"] * uC / (R**2 if r2 else R), n)
    if ask == "drops":
        N, r = v["N"], v["d"] if diam else v["d"] / 2
        R = N * r if radius_n else N ** Rational(1, 3) * r
        Q = v["q_uC"] * uC * (1 if one_q else N)
        return sig(k * Q / R, n)
    if ask == "two":
        q1, q2 = v["q1_uC"] * uC, v["q2_uC"] * uC
        r1, r2_ = v["xP"], v["y2"] if coord else sqrt(v["xP"] ** 2 + v["y2"] ** 2)
        if add_mag:
            q1, q2 = abs(q1), abs(q2)
        if r2:
            return sig(k * (q1 / r1**2 + q2 / r2_**2), n)
        return sig(k * (q1 / r1 + q2 / r2_), n)
    if ask == "zero":
        a, b, d = v["q1"], abs(v["q2"]), v["d_cm"]
        if midpoint:
            return sig(d / 2, n)
        if field_zero:
            x = d * sqrt(a) / (sqrt(a) + sqrt(b))
        else:
            x = d * a / (a + b)  # a / x = b / (d - x)
        return sig(d - x if other_end else x, n)
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
    "C05-M1": _m("C05-M1", ("vb",), no_start=True),  # forgets the starting potential
    "C05-M2": _m("C05-M2", ("vb",), minus=True),  # subtracts the potential difference
    "C05-M3": _m("C05-M3", ("vb",), inverse=True),  # turns W/q upside down
    "C05-M4": _m("C05-M4", ("ring", "two"), r2=True),  # uses 1/r^2, the field's law
    "C05-M5": _m("C05-M5", ("ring",), ring_zero=True),  # thinks V is zero where the field cancels
    "C05-M6": _m("C05-M6", ("ring",), cm=True),  # leaves the radius in cm
    "C05-M7": _m("C05-M7", ("drops",), radius_n=True),  # makes the radius grow with the number of drops
    "C05-M8": _m("C05-M8", ("drops",), diam=True),  # takes the diameter as the radius
    "C05-M9": _m("C05-M9", ("drops",), one_q=True),  # keeps one drop's charge
    "C05-M10": _m("C05-M10", ("two",), add_mag=True),  # adds the sizes, ignoring signs
    "C05-M11": _m("C05-M11", ("two",), coord=True),  # uses a coordinate instead of the distance
    "C05-M12": _m("C05-M12"),  # takes V as proportional to r
    "C05-M13": _m("C05-M13"),  # takes V as proportional to r^2
    "C05-M14": _m("C05-M14", ("zero",), field_zero=True),  # sets the field to zero instead of the potential
    "C05-M15": _m("C05-M15", ("zero",), other_end=True),  # measures from the negative charge
    "C05-M16": _m("C05-M16", ("zero",), midpoint=True),  # takes the midpoint
}
