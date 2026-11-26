"""C03 Work and the work-energy theorem: answer models (the key, and one per misconception).

params["ask"]:
  "pull":     final speed, in m/s, of a body of m kg from rest, pulled s m along a smooth floor by F N at th degrees
              to the floor (inputs m, F, th, s);
  "linear":   work, in J, of a force falling linearly from F1 N to F2 N while the body moves from x1 m to x2 m
              (inputs F1, F2, x1, x2);
  "integral": work, in J, of F = a x^2 + b x + c (F in N, x in m) from x1_cm to x2_cm (inputs a, b, c, x1_cm, x2_cm);
  "ratio":    K_A / K_B for bodies of mA < mB kg given the same momentum (inputs mA, mB);
  "pump":     power, in W, to raise V_L litres of oil of density rho g/cc through h m in t_min minutes (inputs V_L,
              rho, h, t_min, g).

The key works from W = F s cos(theta), W = integral of F dx, K = p^2 / (2m) and W_net = Delta K.
"""
from sympy import Rational, cos, integrate, pi, sin, sqrt, Symbol

from physics import sig

X = Symbol("X")


def _solve(v, p, *, no_cos=False, sin_=False, no_half=False, start=False, end=False, position=False, upper=False,
           in_cm=False, inverse=False, same=False, no_mass=False, minutes=False, no_rho=False, no_g=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "pull":
        th = v["th"] * pi / 180
        W = v["F"] * v["s"] * (1 if no_cos else (sin(th) if sin_ else cos(th)))
        return sig(sqrt((1 if no_half else 2) * W / v["m"]), n)
    if ask == "linear":
        F1, F2, x1, x2 = v["F1"], v["F2"], v["x1"], v["x2"]
        if start:
            return sig(F1 * (x2 - x1), n)
        if end:
            return sig(F2 * (x2 - x1), n)
        return sig((F1 + F2) / 2 * (x2 if position else x2 - x1), n)
    if ask == "integral":
        F = v["a"] * X**2 + v["b"] * X + v["c"]
        k = 1 if in_cm else Rational(1, 100)
        x1, x2 = v["x1_cm"] * k, v["x2_cm"] * k
        if end:
            return sig(F.subs(X, x2) * (x2 - x1), n)
        prim = integrate(F, X)
        if upper:
            return sig(prim.subs(X, x2), n)
        return sig(prim.subs(X, x2) - prim.subs(X, x1), n)
    if ask == "ratio":
        mA, mB = v["mA"], v["mB"]
        if same:
            return sig(1, n)
        if inverse:
            return sig(mA / mB, n)
        if no_mass:
            return sig((mB / mA) ** 2, n)  # K taken as v^2 alone; v_A / v_B = mB / mA
        return sig(mB / mA, n)
    if ask == "pump":
        m = v["V_L"] * (1 if no_rho else v["rho"])  # 1 litre at rho g/cc has a mass of rho kg
        W = m * (1 if no_g else v["g"]) * v["h"]
        return sig(W / (v["t_min"] * (1 if minutes else 60)), n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C03-M1": _m(("pull",), no_cos=True),  # W = F s, ignoring the angle
    "C03-M2": _m(("pull",), sin_=True),  # uses sin(theta) for cos(theta)
    "C03-M3": _m(("pull",), no_half=True),  # forgets the 1/2 in K = m v^2 / 2
    "C03-M4": _m(("linear",), start=True),  # takes the force at its starting value throughout
    "C03-M5": _m(("linear", "integral"), end=True),  # takes the force at its final value throughout
    "C03-M6": _m(("linear",), position=True),  # multiplies by the final position, not the displacement
    "C03-M7": _m(("integral",), upper=True),  # evaluates the integral at the upper limit only
    "C03-M8": _m(("integral",), in_cm=True),  # puts the positions in cm into a formula in m
    "C03-M9": _m(("ratio",), inverse=True),  # thinks the heavier body gets more kinetic energy
    "C03-M10": _m(("ratio",), same=True),  # thinks equal momenta mean equal kinetic energies
    "C03-M11": _m(("ratio",), no_mass=True),  # compares v^2 alone, dropping the mass
    "C03-M12": _m(("pump",), minutes=True),  # leaves the time in minutes
    "C03-M13": _m(("pump",), no_rho=True),  # takes a litre of oil as 1 kg
    "C03-M14": _m(("pump",), no_g=True),  # uses m h for the work, not m g h
}
