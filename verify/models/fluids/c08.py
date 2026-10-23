"""C08 Viscosity and Reynolds number: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "eta":   coefficient of viscosity from the force F to slide a plate of area A at speed v on a layer d thick (inputs F, A, v, d);
  "unit":  the SI unit of the coefficient of viscosity (a named answer);
  "vc":    critical velocity for Reynolds number Rn in a pipe of diameter d_cm (inputs Rn, eta, rho, d_cm);
  "Rn":    Reynolds number of a flow at speed v in a pipe of diameter d_cm (inputs v, eta, rho, d_cm).

The key uses Newton's law of viscosity, F = eta A (dv/dx), with a uniform gradient dv/dx = v / d across
the layer, and Reynolds number Rn = rho v d / eta, solving each in sympy.
"""
from sympy import Symbol, solve

from physics import sig

_x = Symbol("x", positive=True)

UNITS = {
    "key": Symbol("N_s_per_m2"),
    "C08-M1": Symbol("N_per_m2_s"),
    "C08-M2": Symbol("N_s"),
    "C08-M5": Symbol("N_s_per_m3"),
}


def _solve(v, p, *, gradient="v/d", area=True, si=True, invert=False, radius=False):
    ask = p["ask"]
    if ask == "eta":
        F, A, speed, d = v["F"], v["A"], v["v"], v["d"]
        grad = {"v/d": speed / d, "d/v": d / speed, "none": 1, "v": speed}[gradient]
        (eta,) = solve(F - _x * (A if area else 1) * grad, _x)
        return sig(eta)
    if ask in ("vc", "Rn"):
        d = v["d_cm"] / 100 if si else v["d_cm"]
        if radius:
            d = d / 2
        rho, eta = v["rho"], v["eta"]
        if ask == "vc":
            (vc,) = solve(v["Rn"] - rho * _x * d / eta, _x)  # Rn = rho v d / eta at the critical speed
            return sig(rho * d / (v["Rn"] * eta) if invert else vc)
        Rn = rho * v["v"] * d / eta
        return sig(1 / Rn if invert else Rn)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return UNITS["key"] if p["ask"] == "unit" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Turns the velocity gradient upside down, using d / v."""
    if p["ask"] == "unit":
        return UNITS["C08-M1"]
    _only(p, "eta")
    return _solve(v, p, gradient="d/v")


def m2(v, p):
    """Leaves out the area of contact."""
    if p["ask"] == "unit":
        return UNITS["C08-M2"]
    _only(p, "eta")
    return _solve(v, p, area=False)


def m3(v, p):
    """Ignores the velocity gradient, taking the viscosity as force per area."""
    _only(p, "eta")
    return _solve(v, p, gradient="none")


def m4(v, p):
    """Leaves centimetres unconverted."""
    _only(p, "vc", "Rn")
    return _solve(v, p, si=False)


def m5(v, p):
    """Uses the speed itself in place of the velocity gradient."""
    if p["ask"] == "unit":
        return UNITS["C08-M5"]
    _only(p, "eta")
    return _solve(v, p, gradient="v")


def m6(v, p):
    """Turns the Reynolds number formula upside down."""
    _only(p, "vc", "Rn")
    return _solve(v, p, invert=True)


def m7(v, p):
    """Uses the pipe's radius in place of its diameter."""
    _only(p, "vc", "Rn")
    return _solve(v, p, radius=True)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6, "C08-M7": m7}
