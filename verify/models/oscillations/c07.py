"""C07 Energy in S.H.M.: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "x_ratio":  distance, in cm, from the mean where KE = r PE, amplitude A cm (inputs A, r);
  "ke_frac":  fraction of the total energy that is kinetic at x = f A (inputs f);
  "v_centre": speed, in m/s, at the centre of the path of mass m with total energy E (inputs m, E);
  "ke_max":   maximum kinetic energy, in J, of mass m in x = A_cm sin(w t + alpha) cm (inputs m, A_cm, w, alpha);
  "n_pe":     frequency, in Hz, of mass m_g grams with PE = c x^2 joules (inputs m_g, c).

The key uses PE = (1/2) m w^2 x^2, KE = (1/2) m w^2 (A^2 - x^2), and the constant total E = (1/2) m w^2 A^2,
solving in sympy.
"""
from sympy import Rational, Symbol, cos, pi, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)
half = Rational(1, 2)


def _solve(v, p, *, linear=False, third=False, swap=False, square_lin=False, no_half=False, no_root=False, all_pe=False,
           cm=False, at_zero=False, omega_n=False, grams=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 1 if no_half else half
    if ask == "x_ratio":
        A, r = v["A"], v["r"]
        if third:
            (x,) = solve(_x**2 - A**2 / 3, _x)  # takes PE = E / 3
            return sig(x, n)
        ke, pe = (A - _x, _x) if linear else (A**2 - _x**2, _x**2)  # each in units of (1/2) m w^2
        if swap:
            ke, pe = pe, ke
        (x,) = solve(ke - r * pe, _x)
        return sig(x, n)
    if ask == "ke_frac":
        f = v["f"]
        if linear:
            return 1 - f
        if square_lin:
            return (1 - f) ** 2
        return f**2 if swap else 1 - f**2  # KE / E = (A^2 - x^2) / A^2
    if ask == "v_centre":
        m, E = v["m"], v["E"]
        if all_pe:
            return 0
        if no_root:
            return sig(2 * E / m, n)
        (vel,) = solve(k * m * _x**2 - E, _x)  # all kinetic at the centre: E = (1/2) m v^2
        return sig(vel, n)
    if ask == "ke_max":
        m, A, w = v["m"], v["A_cm"] * (1 if cm else Rational(1, 100)), v["w"]
        ke = k * m * w**2 * A**2
        if at_zero:
            ke = ke * cos(v["alpha"]) ** 2  # the kinetic energy at t = 0 only
        return sig(ke, n)
    if ask == "n_pe":
        m = v["m_g"] * (1 if grams else Rational(1, 1000))
        (w,) = solve(k * m * _x**2 - v["c"], _x)  # (1/2) m w^2 = c
        return sig(w if omega_n else w / (2 * pi), n)
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
    "C07-M1": _m(("x_ratio", "ke_frac"), linear=True),  # takes the energies to vary linearly with x
    "C07-M2": _m(("x_ratio",), third=True),  # sets the potential energy to a third of the total
    "C07-M3": _m(("x_ratio", "ke_frac"), swap=True),  # swaps kinetic and potential energy
    "C07-M4": _m(("ke_frac",), square_lin=True),  # takes KE / E = (1 - x/A)^2
    "C07-M5": _m(("v_centre", "ke_max", "n_pe"), no_half=True),  # forgets the 1/2
    "C07-M6": _m(("v_centre",), no_root=True),  # leaves out the square root
    "C07-M7": _m(("v_centre",), all_pe=True),  # thinks the energy at the centre is all potential
    "C07-M8": _m(("ke_max",), cm=True),  # leaves the amplitude in cm
    "C07-M9": _m(("ke_max",), at_zero=True),  # uses the kinetic energy at t = 0
    "C07-M10": _m(("n_pe",), omega_n=True),  # takes omega as the frequency
    "C07-M11": _m(("n_pe",), grams=True),  # leaves the mass in grams
}
