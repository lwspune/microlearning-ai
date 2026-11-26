"""C04 Total internal reflection: answer models (the key, and one per misconception).

Going from a denser medium n1 into a rarer one n2, the critical angle obeys sin C = n2 / n1 (= 1/n into air);
beyond C the light is wholly reflected.
params["ask"]:
  "led":  refractive index of a liquid filling a vessel of diameter D and height H, a lamp at the centre of its base
          being just visible along the rim (inputs D, H);
  "crit": critical angle in degrees from n1 into n2 (inputs n1, n2);
  "where", "atQ", "cond": named answers.
"""
from sympy import Symbol, acos, asin, atan, pi, sqrt

from physics import sig

NAMED = {
    "where": {"key": "fibre_diamond", "C04-M5": "mirage_fibre_diamond", "C04-M6": "rainbow_fibre_diamond", "C04-M7": "fibre_only"},
    "atQ": {"key": "partial", "C04-M8": "total_again", "C04-M9": "total_surface", "C04-M10": "refract_all"},
    "cond": {"key": "dense_beyond", "C04-M11": "rare_to_dense", "C04-M12": "equal_C", "C04-M13": "any_angle"},
}


def _deg(x):
    return x * 180 / pi


def _solve(v, p, *, fn="sin", full=False, air=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "led":
        t = (v["D"] if full else v["D"] / 2) / v["H"]  # tan C
        s, c = t / sqrt(1 + t**2), 1 / sqrt(1 + t**2)
        return sig({"sin": 1 / s, "cos": 1 / c, "tan": 1 / t}[fn], n)
    if ask == "crit":
        x = 1 / v["n1"] if air else v["n2"] / v["n1"]
        return sig(_deg({"sin": asin, "cos": acos, "tan": atan}[fn](x)), n)
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
    "C04-M1": _m("C04-M1", ("led", "crit"), fn="cos"),  # uses cos C for sin C
    "C04-M2": _m("C04-M2", ("led", "crit"), fn="tan"),  # uses tan C for sin C
    "C04-M3": _m("C04-M3", ("led",), full=True),  # takes the whole diameter, not the radius
    "C04-M4": _m("C04-M4", ("crit",), air=True),  # uses sin C = 1/n1, as if the rarer medium were air
    "C04-M5": _m("C04-M5"),  # thinks a mirage is total internal reflection
    "C04-M6": _m("C04-M6"),  # thinks the reflection inside a raindrop is total
    "C04-M7": _m("C04-M7"),  # thinks a diamond sparkles only by its cut or colour, not TIR
    "C04-M8": _m("C04-M8"),  # once totally reflected, always totally reflected
    "C04-M9": _m("C04-M9"),  # compares the angle with the surface, not the normal, with C
    "C04-M10": _m("C04-M10"),  # thinks refraction happens with no reflection at all
    "C04-M11": _m("C04-M11"),  # thinks TIR can happen going from rarer to denser
    "C04-M12": _m("C04-M12"),  # thinks TIR happens at exactly the critical angle
    "C04-M13": _m("C04-M13"),  # thinks any angle in the denser medium will do
}
