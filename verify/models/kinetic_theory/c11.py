"""C11 Stefan–Boltzmann law: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "Q":         energy a blackbody of area A_cm2 (in cm^2) at T_C (°C) radiates in t seconds (inputs sigma, A_cm2, T_C, t);
  "T":         temperature of a surface of emissivity e and area A radiating power P (inputs P, e, A, sigma);
  "ratio":     ratio of a blackbody's emissive powers at T1_C and T2_C (°C) (inputs T1_C, T2_C);
  "net_ratio": ratio of a blackbody's net rates of heat loss at T1_C and T2_C in surroundings at T0_C (inputs T1_C, T2_C, T0_C);
  "radius":    radius of a star, in Sun radii, at T_star radiating P_ratio times the Sun's power at T_sun (inputs T_sun, T_star, P_ratio).

The key uses the Stefan–Boltzmann law, P = e sigma A T^4 (e = 1 for a blackbody), with the net loss
e sigma A (T^4 - T0^4) to surroundings at T0, solving in sympy with temperatures in kelvin (°C + 273, as the book does).
"""
from sympy import Rational, Symbol, pi, solve

from physics import sig

_x = Symbol("x", positive=True)


def _K(t, celsius):
    return t if celsius else t + 273


def _solve(v, p, *, celsius=False, cm2=False, no_t=False, no_e=False, no_root=False, sqrt_root=False, power=4,
           no_surround=False, diff_first=False, linear_r=False, no_T=False):
    ask, n = p["ask"], p.get("sf", 3)

    def P(T, T0=None, A=1):  # net power radiated per unit emissivity and sigma
        if T0 is None or no_surround:
            return A * T ** power
        if diff_first:
            return A * (T - T0) ** power
        return A * (T ** power - T0 ** power)

    if ask == "Q":
        A = v["A_cm2"] * (1 if cm2 else Rational(1, 10**4))
        Q = v["sigma"] * P(_K(v["T_C"], celsius), A=A) * (1 if no_t else v["t"])
        return sig(Q, n)
    if ask == "T":
        e = 1 if no_e else v["e"]
        if no_root:
            return sig(v["P"] / (e * v["sigma"] * v["A"]), n)
        if sqrt_root:
            (T,) = solve(e * v["sigma"] * v["A"] * _x**2 - v["P"], _x)
            return sig(T, n)
        (T,) = solve(e * v["sigma"] * v["A"] * _x**4 - v["P"], _x)  # P = e sigma A T^4
        return sig(T, n)
    if ask == "ratio":
        return sig(P(_K(v["T1_C"], celsius)) / P(_K(v["T2_C"], celsius)), n)
    if ask == "net_ratio":
        T0 = _K(v["T0_C"], celsius)
        return sig(P(_K(v["T1_C"], celsius), T0) / P(_K(v["T2_C"], celsius), T0), n)
    if ask == "radius":
        t = 1 if no_T else v["T_star"] / v["T_sun"]
        # P = sigma (4 pi r^2) T^4, so P_star / P_sun = (r_star / r_sun)^2 (T_star / T_sun)^4
        area = 4 * pi * _x if linear_r else 4 * pi * _x**2
        (r,) = solve(area * t**power - v["P_ratio"] * 4 * pi, _x)
        return sig(r, n)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Uses Celsius temperatures in the T^4 law."""
    _only(p, "Q", "ratio", "net_ratio")
    return _solve(v, p, celsius=True)


def m2(v, p):
    """Leaves the area in cm^2."""
    _only(p, "Q")
    return _solve(v, p, cm2=True)


def m3(v, p):
    """Leaves out the time, giving the power."""
    _only(p, "Q")
    return _solve(v, p, no_t=True)


def m4(v, p):
    """Leaves out the emissivity."""
    _only(p, "T")
    return _solve(v, p, no_e=True)


def m5(v, p):
    """Forgets to take the fourth root."""
    _only(p, "T")
    return _solve(v, p, no_root=True)


def m6(v, p):
    """Takes the square root instead of the fourth root."""
    _only(p, "T")
    return _solve(v, p, sqrt_root=True)


def m7(v, p):
    """Takes the power radiated to be proportional to T."""
    _only(p, "ratio", "radius")
    return _solve(v, p, power=1)


def m8(v, p):
    """Takes the power radiated to be proportional to T^2."""
    _only(p, "ratio")
    return _solve(v, p, power=2)


def m9(v, p):
    """Ignores the heat the body takes in from its surroundings."""
    _only(p, "net_ratio")
    return _solve(v, p, no_surround=True)


def m10(v, p):
    """Subtracts the temperatures before raising to the fourth power."""
    _only(p, "net_ratio")
    return _solve(v, p, diff_first=True)


def m11(v, p):
    """Takes the power radiated to be proportional to the radius, not the area."""
    _only(p, "radius")
    return _solve(v, p, linear_r=True)


def m12(v, p):
    """Leaves out the change in temperature."""
    _only(p, "radius")
    return _solve(v, p, no_T=True)


MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6,
          "C11-M7": m7, "C11-M8": m8, "C11-M9": m9, "C11-M10": m10, "C11-M11": m11, "C11-M12": m12}
