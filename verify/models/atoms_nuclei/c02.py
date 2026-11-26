"""C02 Bohr's postulates: answer models (the key, and one per misconception).

L = n h / (2 pi) in a stationary orbit; a jump from E_m to E_n emits h nu = E_m - E_n. params["ask"]:
  "dL":      the change in angular momentum, in J s, from orbit n1 to n2 (inputs n1, n2);
  "L":       the angular momentum, in J s, in orbit n (input n);
  "nu":      the frequency, in Hz, of the photon from level Em to En, in eV (inputs Em, En);
  "third":   the third postulate's formula (named);
  "orbit":   what an electron in a stationary orbit does (named).
"""
from sympy import Symbol, pi

from physics import BOOK, sig

h, e = BOOK["h"], BOOK["e"]
NAMED = {
    "third": {"key": "hnu_diff", "C02-M4": "L_quant", "C02-M5": "hnu_sum", "C02-M7": "force_bal"},
    "orbit": {"key": "no_radiation", "C02-M8": "spirals_in", "C02-M9": "radiates_f", "C02-M10": "any_L"},
}


def _solve(v, p, *, no_2pi=False, one=False, sq=False, over_n=False, add=False, eV_as_J=False):
    ask, n = p["ask"], p.get("sf", 3)
    k = 1 if no_2pi else 2 * pi
    if ask == "dL":
        a, b = v["n1"], v["n2"]
        if one:
            return sig(a * h / k, n)
        d = abs(a**2 - b**2) if sq else abs(a - b)
        return sig(d * h / k, n)
    if ask == "L":
        m = v["n"]
        if over_n:
            return sig(h / (k * m), n)
        return sig((m**2 if sq else m) * h / k, n)
    if ask == "nu":
        Em, En = v["Em"], v["En"]
        dE = abs(Em) + abs(En) if add else (abs(En) if one else abs(Em - En))
        return sig(dE * (1 if eV_as_J else e) / h, n)
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
    "C02-M1": _m("C02-M1", ("dL", "L"), no_2pi=True),  # forgets the 2 pi
    "C02-M2": _m("C02-M2", ("dL",), one=True),  # gives one orbit's L, not the change
    "C02-M3": _m("C02-M3", ("dL", "L"), sq=True),  # takes L as proportional to n^2
    "C02-M4": _m("C02-M4"),  # gives the second postulate
    "C02-M5": _m("C02-M5", ("nu",), add=True),  # adds the energies
    "C02-M6": _m("C02-M6", ("nu",), eV_as_J=True),  # leaves eV unconverted
    "C02-M7": _m("C02-M7"),  # gives the first postulate
    "C02-M8": _m("C02-M8"),  # keeps the classical idea that it radiates and spirals in
    "C02-M9": _m("C02-M9"),  # thinks it radiates at its frequency of revolution
    "C02-M10": _m("C02-M10"),  # thinks any angular momentum is allowed
    "C02-M11": _m("C02-M11", ("L",), over_n=True),  # divides by n
    "C02-M12": _m("C02-M12", ("nu",), one=True),  # uses one level's energy
}
