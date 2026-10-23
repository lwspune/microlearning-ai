"""C03 Work done by a gas: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "Vf":       final volume, in m^3, of a gas at constant pressure p compressed from Vi by work W_on done on it (inputs p, Vi, W_on);
  "W_p":      work done by a gas at constant pressure p (Pa) going from Va to Vb, given in units of params["unit"] m^3 (inputs p, Va, Vb);
  "W_line":   work done by a gas along a straight p-V path from (V1, p1) to (V2, p2), V in litres (inputs p1, p2, V1, V2);
  "positive": which process has the gas doing positive work (a named answer).

The key takes the work done by the gas as the area under its p-V path, W = integral of p dV, integrating in sympy:
positive on expansion, negative on compression, zero at constant volume.
"""
from sympy import Rational, Symbol, integrate, solve, sympify

from physics import sig

_V = Symbol("V")
_x = Symbol("x")

NAMED = {
    "positive": {"key": "expanding", "C03-M1": "compressed", "C03-M2": "steady_p_and_V", "C03-M5": "pressure_rise_rigid"},
}

L = Rational(1, 1000)  # m^3 per litre


def _work(p_of_V, Va, Vb):
    return integrate(p_of_V, (_V, Va, Vb))  # W = ∫ p dV


def _solve(v, p, *, flip=False, pV=False, triangle=False, litres=False, start_p=False):
    ask, n = p["ask"], p.get("sf", 3)
    sign = -1 if flip else 1
    if ask == "Vf":
        P, Vi, W = v["p"], v["Vi"], -v["W_on"]  # work done by the gas is minus the work done on it
        if pV:
            return sig(-W / P, n)  # takes W = p V_f
        half = Rational(1, 2) if triangle else 1
        (Vf,) = solve(sign * half * _work(P, Vi, _x) - W, _x)
        return sig(Vf, n)
    if ask == "W_p":
        unit = 1 if litres else sympify(p["unit"])
        P, Va, Vb = v["p"], v["Va"] * unit, v["Vb"] * unit
        if pV:
            return sig(P * Vb, n)
        half = Rational(1, 2) if triangle else 1
        return sig(sign * half * _work(P, Va, Vb), n)
    if ask == "W_line":
        unit = 1 if litres else L
        p1, p2, V1, V2 = v["p1"], v["p2"], v["V1"] * unit, v["V2"] * unit
        if triangle:
            return sig(Rational(1, 2) * abs(p2 - p1) * abs(V2 - V1), n)
        if start_p:
            return sig(p1 * (V2 - V1), n)
        line = p1 + (p2 - p1) * (_V - V1) / (V2 - V1)
        return sig(sign * _work(line, V1, V2), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named(p, mid):
    if mid not in NAMED.get(p["ask"], {}):
        raise ValueError("does not apply to this item")
    return Symbol(NAMED[p["ask"]][mid])


def m1(v, p):
    """Gets the sign of the work wrong."""
    if p["ask"] in NAMED:
        return _named(p, "C03-M1")
    if p["ask"] not in ("Vf", "W_p"):
        raise ValueError("does not apply to this item")
    return _solve(v, p, flip=True)


def m2(v, p):
    """Takes the work as p times the volume, W = pV."""
    if p["ask"] in NAMED:
        return _named(p, "C03-M2")
    if p["ask"] not in ("Vf", "W_p"):
        raise ValueError("does not apply to this item")
    return _solve(v, p, pV=True)


def m3(v, p):
    """Takes the area under the p-V path as a triangle."""
    if p["ask"] not in ("Vf", "W_p", "W_line"):
        raise ValueError("does not apply to this item")
    return _solve(v, p, triangle=True)


def m4(v, p):
    """Leaves the volume in litres."""
    if p["ask"] == "W_p" and p["unit"] == "1":
        raise ValueError("the volumes are already in m^3")
    if p["ask"] not in ("W_p", "W_line"):
        raise ValueError("does not apply to this item")
    return _solve(v, p, litres=True)


def m5(v, p):
    """Thinks a change of pressure alone does work."""
    return _named(p, "C03-M5")


def m6(v, p):
    """Uses only the starting pressure when the pressure changes."""
    if p["ask"] != "W_line":
        raise ValueError("does not apply to this item")
    return _solve(v, p, start_p=True)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
