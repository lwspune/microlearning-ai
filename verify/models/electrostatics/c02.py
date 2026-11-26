"""C02 Coulomb's law: answer models (the key, and one per misconception).

F = k q1 q2 / r^2 with k = 1/(4 pi eps0) = 9e9 N m^2/C^2 (the book's value); in a medium F = F_vac / eps_r.
params["ask"]:
  "total":  total charge on two equal spheres r_cm apart repelling with force F (inputs F, r);
  "q2q":    q, when +q and -2q r_cm apart attract with force F (inputs F, r);
  "medium": the new force when charges with force F0 in vacuum go into a medium eps_r at s times the distance (inputs F0, er, s);
  "force":  force between two equal charges of q microcoulomb, r_cm apart in air (inputs q, r);
  "eps_r", "third": named answers.
"""
from sympy import Rational, Symbol, sqrt

from physics import BOOK, sig

NAMED = {
    "eps_r": {"key": "ratio_vac_med", "C02-M4": "ratio_med_vac", "C02-M7": "always_one", "C02-M8": "has_units"},
    "third": {"key": "equal_opposite", "C02-M10": "small_feels_more", "C02-M11": "large_feels_more", "C02-M12": "same_direction"},
}

K = BOOK["k_e"]
CM = Rational(1, 100)
MICRO = Rational(1, 10**6)


def _solve(v, p, *, no_square=False, no_cm=False, one=False, times_er=False, no_two=False, no_root=False,
           no_medium=False, no_k=False):
    ask = p["ask"]
    k = 1 if no_k else K
    if ask in ("total", "q2q", "force"):
        r = v["r"] if no_cm else v["r"] * CM
        rr = r if no_square else r**2
    if ask == "total":
        q = sqrt(v["F"] * rr / k)
        return sig(q if one else 2 * q)
    if ask == "q2q":
        q2 = v["F"] * rr / (k if no_two else 2 * k)
        return sig(q2 if no_root else sqrt(q2))
    if ask == "force":
        q = v["q"] * MICRO
        return sig(k * q * q / rr)
    if ask == "medium":
        s = v["s"]
        F = v["F0"] / (s if no_square else s**2)
        if no_medium:
            return sig(F)
        return sig(F * v["er"] if times_er else F / v["er"])
    raise ValueError("unknown ask")


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
    "C02-M1": _m("C02-M1", ("total", "q2q", "force", "medium"), no_square=True),  # F proportional to 1/r, not 1/r^2
    "C02-M2": _m("C02-M2", ("total", "q2q", "force"), no_cm=True),  # leaves the distance in cm
    "C02-M3": _m("C02-M3", ("total",), one=True),  # gives one sphere's charge for the total
    "C02-M4": _m("C02-M4", ("medium",), times_er=True),  # multiplies by eps_r
    "C02-M5": _m("C02-M5", ("q2q",), no_two=True),  # uses q times q for q times 2q
    "C02-M6": _m("C02-M6", ("q2q",), no_root=True),  # stops at q^2
    "C02-M7": _m("C02-M7", ("medium",), no_medium=True),  # ignores the medium
    "C02-M8": _m("C02-M8"),  # thinks eps_r has units
    "C02-M9": _m("C02-M9", ("force",), no_k=True),  # leaves out 1/(4 pi eps0)
    "C02-M10": _m("C02-M10"),  # thinks the larger charge pushes harder on the smaller one
    "C02-M11": _m("C02-M11"),  # thinks each charge feels a force in proportion to its own charge
    "C02-M12": _m("C02-M12"),  # thinks the two forces point the same way
}
