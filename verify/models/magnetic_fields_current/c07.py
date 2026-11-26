"""C07 Force between parallel currents: answer models (the key, and one per misconception).

F / l = mu0 I1 I2 / (2 pi d): like currents attract, opposite currents repel. params["ask"]:
  "force":  force, in N, on a length L_cm of one wire, currents I each, d_mm apart (inputs I, d_mm, L_cm);
  "current": the equal current, in A, for force per metre f at d_cm apart (inputs f, d_cm);
  "dir":    what two parallel wires with currents the same way do (named);
  "ampere": the force per metre in the definition of the ampere (named);
  "scale":  what doubling one current and the separation does to the force (named).
"""
from sympy import Rational, Symbol, pi, sqrt

from physics import BOOK, sig

mu0 = BOOK["mu0"]
NAMED = {
    "dir": {"key": "attract", "C07-M1": "repel", "C07-M6": "none", "C07-M7": "twist"},
    "ampere": {"key": "two_e7", "C07-M8": "one", "C07-M9": "four_pi_e7", "C07-M10": "one_e7"},
    "scale": {"key": "same", "C07-M11": "doubles", "C07-M12": "halves", "C07-M13": "four"},
}


def _solve(v, p, *, per_m=False, four_pi=False, raw=False, no_root=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 4 * pi if four_pi else 2 * pi
    if ask == "force":
        I, d, L = v["I"], v["d_mm"] * (1 if raw else Rational(1, 1000)), v["L_cm"] * Rational(1, 100)
        f = mu0 * I * I / (k * d)
        return sig(f if per_m else f * L, n)
    if ask == "current":
        f, d = v["f"], v["d_cm"] * (1 if raw else Rational(1, 100))
        I2 = f * k * d / mu0
        return sig(I2 if no_root else sqrt(I2), n)
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
    "C07-M1": _m("C07-M1"),  # thinks like currents repel
    "C07-M2": _m("C07-M2", ("force",), per_m=True),  # gives the force per metre, forgetting the length
    "C07-M3": _m("C07-M3", ("force", "current"), four_pi=True),  # uses 4 pi instead of 2 pi
    "C07-M4": _m("C07-M4", ("force", "current"), raw=True),  # leaves the separation in mm or cm
    "C07-M5": _m("C07-M5", ("current",), no_root=True),  # forgets the square root
    "C07-M6": _m("C07-M6"),  # thinks wires carrying currents exert no force on each other
    "C07-M7": _m("C07-M7"),  # thinks the wires twist rather than attract
    "C07-M8": _m("C07-M8"),  # takes the ampere's force as 1 N per metre
    "C07-M9": _m("C07-M9"),  # takes it as mu0 newtons per metre
    "C07-M10": _m("C07-M10"),  # takes it as 1e-7 N per metre
    "C07-M11": _m("C07-M11"),  # forgets the change in separation
    "C07-M12": _m("C07-M12"),  # takes the force as falling with 1/d^2
    "C07-M13": _m("C07-M13"),  # doubles both currents
}
