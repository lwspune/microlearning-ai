"""C06 Degrees of freedom and equipartition: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "dof_diatomic": degrees of freedom of a rigid diatomic molecule (a number);
  "cv_mono":  molar specific heat at constant volume of a monatomic gas, in units of R (a number);
  "gamma_di": the ratio gamma = Cp/Cv of a rigid diatomic gas (a number);
  "U":        internal energy of n mol of a rigid diatomic gas at T (inputs n, R, T);
  "gamma_poly": gamma for a polyatomic gas whose molecules have f vibrational modes (a formula in f).

The key counts degrees of freedom: 3 translational for every molecule; 2 rotational for a linear one (spin
about its own axis stores no energy), 3 for a non-linear one; 2 for each vibrational mode (kinetic and
potential energy), which in a diatomic molecule wakes only at high temperature. Equipartition gives (1/2) R T
per mole for each, so Cv = (dof/2) R, Cp = Cv + R and gamma = Cp/Cv.
"""
from sympy import Rational, Symbol

from physics import sig

f_ = Symbol("f")


def _dof(kind, *, translation_only=False, vibration=False, three_rot=False, vib_once=False, no_vib=False):
    if translation_only:
        return 3
    if kind == "mono":
        return 3
    if kind == "di":
        rot = 3 if three_rot else 2
        return 3 + rot + (2 if vibration else 0)
    # non-linear polyatomic with f vibrational modes
    return 3 + 3 + (0 if no_vib else (f_ if vib_once else 2 * f_))


def _cv(dof, *, per_dof=Rational(1, 2)):
    return per_dof * dof  # in units of R


def _solve(v, p, *, translation_only=False, kT=False, vibration=False, three_rot=False, vib_once=False, no_vib=False,
           cp=False, one=False, invert=False):
    ask = p["ask"]
    per = 1 if kT else Rational(1, 2)
    kw = dict(translation_only=translation_only, vibration=vibration, three_rot=three_rot, vib_once=vib_once, no_vib=no_vib)
    if ask == "dof_diatomic":
        return _dof("di", **kw)
    if ask == "cv_mono":
        dof = 1 if one else _dof("mono", **kw)
        cv = _cv(dof, per_dof=per)
        return cv + 1 if cp else cv
    if ask in ("gamma_di", "gamma_poly"):
        cv = _cv(_dof("di" if ask == "gamma_di" else "poly", **kw), per_dof=per)
        g = (cv + 1) / cv
        return (1 / g if invert else g).simplify()
    if ask == "U":
        return sig(_cv(_dof("di", **kw), per_dof=per) * v["n"] * v["R"] * v["T"])
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Counts only the translational degrees of freedom."""
    _only(p, "dof_diatomic", "gamma_di", "U")
    return _solve(v, p, translation_only=True)


def m2(v, p):
    """Gives each degree of freedom k T instead of (1/2) k T."""
    _only(p, "cv_mono", "U")
    return _solve(v, p, kT=True)


def m3(v, p):
    """Counts vibration for a diatomic gas at ordinary temperatures."""
    _only(p, "dof_diatomic", "gamma_di")
    return _solve(v, p, vibration=True)


def m4(v, p):
    """Counts three rotations for a linear molecule."""
    _only(p, "dof_diatomic", "gamma_di", "U")
    return _solve(v, p, three_rot=True)


def m5(v, p):
    """Counts each vibrational mode as one degree of freedom."""
    _only(p, "gamma_poly")
    return _solve(v, p, vib_once=True)


def m6(v, p):
    """Gives Cp when Cv is asked."""
    _only(p, "cv_mono")
    return _solve(v, p, cp=True)


def m7(v, p):
    """Counts only one degree of freedom."""
    _only(p, "cv_mono")
    return _solve(v, p, one=True)


def m8(v, p):
    """Leaves out the vibrational modes."""
    _only(p, "gamma_poly")
    return _solve(v, p, no_vib=True)


def m9(v, p):
    """Turns gamma upside down."""
    _only(p, "gamma_poly")
    return _solve(v, p, invert=True)


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6,
          "C06-M7": m7, "C06-M8": m8, "C06-M9": m9}
