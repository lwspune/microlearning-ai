"""C02 Internal energy, heat and work: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "U_molecule": internal energy of one molecule of an ideal gas at temperature T (symbols k, T; params["atoms"] "mono" or "di");
  "U_mol":      internal energy, in J, of n moles of an ideal gas at T (inputs n, T; params["atoms"]);
  "melt":       where the heat taken in by melting ice at a fixed 0 °C goes (a named answer);
  "includes":   what a gas's internal energy is made up of (a named answer).

The key counts degrees of freedom, f = 3 for a monatomic gas and 5 for a diatomic one, and gives each ½kT
(equipartition), so U = (f/2) kT per molecule and (f/2) nRT for n moles.
"""
from sympy import Rational, Symbol, symbols

from physics import BOOK, sig

k, T = symbols("k T")  # plain symbols, as the option values parse

NAMED = {
    "melt": {"key": "internal_energy", "C02-M5": "cannot_take_heat", "C02-M6": "becomes_work", "C02-M7": "stored_as_heat"},
    "includes": {"key": "molecular_ke_pe", "C02-M6": "work_done", "C02-M7": "heat_contained", "C02-M8": "bulk_motion"},
}

DOF = {"mono": 3, "di": 5}


def _f(p, *, no_rotation=False, add_rotation=False, one=False):
    f = DOF[p["atoms"]]
    if no_rotation:
        f = 3
    if add_rotation:
        f = 5
    return 1 if one else f


def _solve(v, p, *, per_dof=Rational(1, 2), **kw):
    f = _f(p, **kw)
    if p["ask"] == "U_molecule":
        return f * per_dof * k * T
    if p["ask"] == "U_mol":
        return sig(f * per_dof * v["n"] * BOOK["R"] * v["T"], p.get("sf", 3))
    raise ValueError(f"unknown ask {p['ask']}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _named(p, mid):
    if p["ask"] not in NAMED or mid not in NAMED[p["ask"]]:
        raise ValueError("does not apply to this item")
    return Symbol(NAMED[p["ask"]][mid])


def _numeric(p):
    if p["ask"] not in ("U_molecule", "U_mol"):
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Leaves out the rotational energy of a diatomic molecule."""
    _numeric(p)
    if p["atoms"] != "di":
        raise ValueError("a monatomic molecule has no rotational energy")
    return _solve(v, p, no_rotation=True)


def m2(v, p):
    """Gives each degree of freedom kT instead of ½kT."""
    _numeric(p)
    return _solve(v, p, per_dof=1)


def m3(v, p):
    """Counts only one degree of freedom."""
    _numeric(p)
    return _solve(v, p, one=True)


def m4(v, p):
    """Gives a single atom rotational energy too."""
    _numeric(p)
    if p["atoms"] != "mono":
        raise ValueError("a diatomic molecule does rotate")
    return _solve(v, p, add_rotation=True)


def m5(v, p):
    """Thinks adding heat always raises the temperature."""
    return _named(p, "C02-M5")


def m6(v, p):
    """Mixes up heat and work."""
    return _named(p, "C02-M6")


def m7(v, p):
    """Thinks a body contains heat."""
    return _named(p, "C02-M7")


def m8(v, p):
    """Counts the motion of the whole body as internal energy."""
    return _named(p, "C02-M8")


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6,
          "C02-M7": m7, "C02-M8": m8}
