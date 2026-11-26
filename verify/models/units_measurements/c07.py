"""C07 Significant figures: answer models (the key, and one per misconception).

A product or quotient keeps as many significant figures as the least precise factor. Order of magnitude: write the
number as N x 10^x; it is 10^x if N <= 5, else 10^(x+1). params["ask"]:
  "vol":    the volume, in m^3, of an l x b x t_cm sheet to correct figures (inputs l, b, t_cm; sf from the data);
  "sf":     the number of significant figures of 0.1250 (named);
  "sphere": the volume, in cm^3, of a sphere of diameter d (input d);
  "order_R": the order of magnitude, in m, of R = R0 A^(1/3) (inputs R0, A);
  "order_rope": the order of magnitude, in m, of a rope wound into a ball (inputs R_m, edge_mm).
"""
import math

from sympy import Integer, Rational, Symbol, pi

from physics import sig

NAMED = {"sf": {"key": "four_sf", "C07-M4": "three_sf", "C07-M5": "five_sf", "C07-M6": "one_sf"}}


def order(x, *, no_round=False):
    x = float(x)
    k = math.floor(math.log10(x))
    N = x / 10**k
    if not no_round and N > 5:
        k += 1
    return Integer(10) ** k


def _solve(v, p, *, cm=False, all_digits=False, most_precise=False, diam_as_r=False, two_sf=False, no_round=False,
           lin_A=False, cube_A=False, diam=False, no_sq=False, mm=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "vol":
        V = v["l"] * v["b"] * v["t_cm"] * (1 if cm else Rational(1, 100))
        if all_digits:
            return sig(V, 6)
        return sig(V, 4 if most_precise else 3)
    if ask == "sphere":
        d = v["d"]
        r = d if diam_as_r else d / 2
        V = Rational(4, 3) * pi * r**3
        if all_digits:
            return sig(V, 6)
        return sig(V, 2 if two_sf else 3)
    if ask == "order_R":
        A = v["A"]
        f = A if lin_A else (A**3 if cube_A else A ** Rational(1, 3))
        return order(v["R0"] * f, no_round=no_round)
    if ask == "order_rope":
        R = v["R_m"] * (2 if diam else 1)
        e = v["edge_mm"] * (1 if mm else Rational(1, 1000))
        L = Rational(4, 3) * pi * R**3 / (e if no_sq else e**2)
        return order(L)
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
    "C07-M1": _m("C07-M1", ("vol",), cm=True),  # leaves the thickness in cm
    "C07-M2": _m("C07-M2", ("vol", "sphere"), all_digits=True),  # keeps every calculator digit
    "C07-M3": _m("C07-M3", ("vol",), most_precise=True),  # keeps the figures of the most precise datum
    "C07-M4": _m("C07-M4"),  # drops a trailing zero after the decimal point
    "C07-M5": _m("C07-M5"),  # counts the leading zero
    "C07-M6": _m("C07-M6"),  # counts only the first digit
    "C07-M7": _m("C07-M7", ("sphere",), diam_as_r=True),  # uses the diameter as the radius
    "C07-M8": _m("C07-M8", ("sphere",), two_sf=True),  # lets the exact 4/3 limit the figures
    "C07-M9": _m("C07-M9", ("order_R",), no_round=True),  # takes the power of ten without rounding up
    "C07-M10": _m("C07-M10", ("order_R",), lin_A=True),  # uses A instead of A^(1/3)
    "C07-M11": _m("C07-M11", ("order_R",), cube_A=True),  # cubes A instead of taking the cube root
    "C07-M12": _m("C07-M12", ("order_rope",), diam=True),  # uses the diameter as the radius
    "C07-M13": _m("C07-M13", ("order_rope",), no_sq=True),  # divides by the edge, not its square
    "C07-M14": _m("C07-M14", ("order_rope",), mm=True),  # leaves the edge in mm
}
