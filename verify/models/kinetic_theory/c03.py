"""C03 Pressure of an ideal gas: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "scale":    factor by which the pressure changes when every molecule's mass is multiplied by fm and its speed by fv (inputs fm, fv);
  "vrms":     rms speed of a gas at pressure P and density rho (inputs P, rho);
  "why":      why compressing a gas at constant temperature raises its pressure (a named answer);
  "not_assumption": which statement is not an assumption of kinetic theory (a named answer);
  "P":        pressure of N molecules of mass m with rms speed v in a volume of V_L litres (inputs N, m, v, V_L).

The key builds the pressure from wall collisions: a molecule bouncing back from a wall changes its momentum
by 2 m v_x and returns every 2L / v_x, so it presses with m v_x^2 / L; the average of v_x^2 is v_rms^2 / 3, so
the N molecules give P = (1/3) (N/V) m v_rms^2.
"""
from sympy import Rational, Symbol, sqrt

from physics import sig

_L = Symbol("L", positive=True)

NAMED = {
    "why": {"key": Symbol("more_often"), "C03-M7": Symbol("faster"), "C03-M8": Symbol("harder"), "C03-M9": Symbol("smaller_molecules")},
    "not_assumption": {"key": Symbol("strong_attraction"), "C03-M10": Symbol("elastic"), "C03-M11": Symbol("negligible_size"), "C03-M12": Symbol("random_motion")},
}


def _pressure(N, m, v, V, *, third=True, half=False, v_power=2):
    """P from the force on one wall of a cube of volume V = L^3, divided by its area."""
    vx2 = v ** v_power * (Rational(1, 2) if half else Rational(1, 3) if third else 1)  # mean of v_x^2
    force = N * m * vx2 / _L  # each molecule: m v_x^2 / L
    return (force / _L ** 2).subs(_L, V ** Rational(1, 3))


def _solve(v, p, *, v_power=2, mass=1, third=True, half=False, root=True, litres=True):
    ask = p["ask"]
    if ask == "scale":
        return v["fm"] ** mass * v["fv"] ** v_power
    if ask == "vrms":
        k = Rational(1, 2) if half else (Rational(1, 3) if third else 1)
        v2 = v["P"] / (k * v["rho"])  # P = k rho v^2
        return sig(sqrt(v2) if root else v2)
    if ask == "P":
        V = v["V_L"] / 1000 if litres else v["V_L"]
        return sig(_pressure(v["N"], v["m"], v["v"], V, third=third, v_power=v_power))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return NAMED[p["ask"]]["key"]
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def _named(p, ask, m):
    _only(p, ask)
    return NAMED[ask][m]


def m1(v, p):
    """Takes the pressure to grow as v, not v^2."""
    _only(p, "scale", "P")
    return _solve(v, p, v_power=1)


def m2(v, p):
    """Leaves the molecular mass out."""
    _only(p, "scale")
    return _solve(v, p, mass=0)


def m3(v, p):
    """Takes the pressure to fall as the molecular mass rises."""
    _only(p, "scale")
    return _solve(v, p, mass=-1)


def m4(v, p):
    """Leaves out the 1/3."""
    _only(p, "vrms", "P")
    return _solve(v, p, third=False)


def m5(v, p):
    """Uses 1/2 in place of 1/3."""
    _only(p, "vrms")
    return _solve(v, p, half=True)


def m6(v, p):
    """Forgets the square root."""
    _only(p, "vrms")
    return _solve(v, p, root=False)


def m7(v, p):
    """Thinks compressing a gas at constant temperature makes its molecules faster."""
    return _named(p, "why", "C03-M7")


def m8(v, p):
    """Thinks each molecule hits the wall harder."""
    return _named(p, "why", "C03-M8")


def m9(v, p):
    """Thinks the molecules themselves become smaller."""
    return _named(p, "why", "C03-M9")


def m10(v, p):
    """Thinks kinetic theory takes the collisions to be inelastic."""
    return _named(p, "not_assumption", "C03-M10")


def m11(v, p):
    """Thinks the molecules fill most of a gas's volume."""
    return _named(p, "not_assumption", "C03-M11")


def m12(v, p):
    """Thinks the molecules move in an orderly way."""
    return _named(p, "not_assumption", "C03-M12")


def m13(v, p):
    """Leaves litres unconverted."""
    _only(p, "P")
    return _solve(v, p, litres=False)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6,
          "C03-M7": m7, "C03-M8": m8, "C03-M9": m9, "C03-M10": m10, "C03-M11": m11, "C03-M12": m12, "C03-M13": m13}
