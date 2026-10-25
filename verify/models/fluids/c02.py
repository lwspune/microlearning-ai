"""C02 Pascal's law and the hydraulic lift: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "F2":       force on the output piston (inputs F1, A1, A2 in the same units);
  "brake":    stopping distance of a car (mass m, speed v_kmph) whose brake master piston of radius r1_cm,
              pushed with F1, drives a slave piston of radius r2_cm (inputs m, v_kmph, F1, r1_cm, r2_cm);
  "F1":       effort on a small piston of area A1_cm2 to hold a car of mass m on a large piston of area A2 m^2 (inputs m, g, A1_cm2, A2);
  "law":      what Pascal's law says (a named answer);
  "travel":   how far the large piston rises when the small one goes down d1 (inputs d1, ratio = A2/A1).

The key passes the pressure on: p = F1/A1 is the same everywhere in the enclosed liquid, so F2 = p A2;
the liquid's volume is fixed, so A1 d1 = A2 d2. It solves these in sympy.
"""
from sympy import Rational, Symbol, pi, solve

from physics import sig

_F, _d = Symbol("F", positive=True), Symbol("d", positive=True)

LAW = {
    "key": Symbol("undiminished_everywhere"),
    "C02-M2": Symbol("same_force"),
    "C02-M7": Symbol("direction_of_push"),
    "C02-M8": Symbol("weakens_with_distance"),
}


def _out(F1, A1, A2, *, invert=False, same=False, square=False):
    """Output force from equal pressures F1/A1 = F2/A2 (or a misconception's rule)."""
    if same:
        return F1
    ratio = A1 / A2 if invert else A2 / A1
    if square:
        return F1 * ratio ** 2
    (F2,) = solve(F1 / A1 - _F / A2, _F) if not invert else [F1 * ratio]
    return F2


def _solve(v, p, *, invert=False, same=False, square=False, radii=False, kmph=True, cm2=True):
    ask = p["ask"]
    if ask == "F2":
        return sig(_out(v["F1"], v["A1"], v["A2"], invert=invert, same=same, square=square))
    if ask == "brake":
        r1, r2 = v["r1_cm"] / 100, v["r2_cm"] / 100
        A1, A2 = (r1, r2) if radii else (pi * r1 ** 2, pi * r2 ** 2)
        F2 = _out(v["F1"], A1, A2, same=same)
        a = F2 / v["m"]
        speed = v["v_kmph"] * Rational(5, 18) if kmph else v["v_kmph"]
        (d,) = solve(speed ** 2 - 2 * a * _d, _d)  # v^2 = u^2 - 2 a d, down to rest
        return sig(d)
    if ask == "F1":
        A1 = v["A1_cm2"] / 10000 if cm2 else v["A1_cm2"]
        W = v["m"] * v["g"]
        return sig(_out(W, v["A2"], A1, invert=invert, same=same))
    if ask == "travel":
        A1, A2 = 1, v["ratio"]
        if same:
            return sig(v["d1"])
        if invert:
            return sig(v["d1"] * A2 / A1)
        if square:
            return sig(v["d1"] * (A1 / A2) ** 2)
        (d2,) = solve(A1 * v["d1"] - A2 * _d, _d)  # the volume pushed in comes out
        return sig(d2)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return LAW["key"] if p["ask"] == "law" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Turns the area ratio upside down."""
    _only(p, "F2", "F1", "travel")
    return _solve(v, p, invert=True)


def m2(v, p):
    """Thinks the force, not the pressure, is passed on unchanged."""
    if p["ask"] == "law":
        return LAW["C02-M2"]
    return _solve(v, p, same=True)


def m3(v, p):
    """Squares the area ratio, as if the areas were radii."""
    _only(p, "F2", "travel")
    return _solve(v, p, square=True)


def m4(v, p):
    """Uses the ratio of the radii instead of the ratio of the areas."""
    _only(p, "brake")
    return _solve(v, p, radii=True)


def m5(v, p):
    """Uses the speed in km/h without converting."""
    _only(p, "brake")
    return _solve(v, p, kmph=False)


def m6(v, p):
    """Leaves an area in cm^2 unconverted while the other is in m^2."""
    _only(p, "F1")
    return _solve(v, p, cm2=False)


def m7(v, p):
    """Thinks the pressure is passed on only in the direction of the push."""
    _only(p, "law")
    return LAW["C02-M7"]


def m8(v, p):
    """Thinks the pressure weakens with distance from the piston."""
    _only(p, "law")
    return LAW["C02-M8"]


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6,
          "C02-M7": m7, "C02-M8": m8}
