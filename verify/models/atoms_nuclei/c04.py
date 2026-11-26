"""C04 Energy levels of hydrogen: answer models (the key, and one per misconception).

E_n = -13.6 / n^2 eV; KE = -E, PE = 2E; excitation energy E_n - E_1; ionization from n takes -E_n. params["ask"]:
  "En_from": E at orbit n2 given E at orbit n1, in eV (inputs E1, n1, n2);
  "excite":  the excitation energy, in eV, of the k-th excited state (input k);
  "ionize":  the energy, in eV, to ionize from orbit n (input n);
  "KE":      the kinetic energy, in eV, for total energy E (input E);
  "binding": the binding energy of a hydrogen atom (named).
"""
from sympy import Rational, Symbol

from physics import sig

G = Rational(136, 10)  # 13.6 eV
NAMED = {"binding": {"key": "plus_13_6", "C04-M7": "minus_13_6", "C04-M8": "ten_point_2", "C04-M9": "zero_BE"}}


def E(n):
    return -G / n**2


def _solve(v, p, *, inv_n=False, drop_sign=False, prop_n2=False, level=False, add=False, k_as_n=False,
           ground=False, excit=False, times_n2=False, same=False, pe=False, half=False):
    ask, nn = p["ask"], p.get("sf", 3)
    if ask == "En_from":
        r = v["n1"] / v["n2"]
        f = r if inv_n else (1 / r**2 if prop_n2 else r**2)
        val = v["E1"] * f
        return sig(-val if drop_sign else val, nn)
    if ask == "excite":
        n = v["k"] if k_as_n else v["k"] + 1
        if level:
            return sig(-E(n), nn)
        return sig(G + G / n**2 if add else E(n) - E(1), nn)
    if ask == "ionize":
        n = v["n"]
        if ground:
            return sig(G, nn)
        if excit:
            return sig(E(n) - E(1), nn)
        return sig(G * n**2 if times_n2 else -E(n), nn)
    if ask == "KE":
        Et = v["E"]
        if same:
            return sig(Et, nn)
        if pe:
            return sig(-2 * Et, nn)
        return sig(-Et / 2 if half else -Et, nn)
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
    "C04-M1": _m("C04-M1", ("En_from",), inv_n=True),  # takes E as proportional to 1/n
    "C04-M2": _m("C04-M2", ("En_from",), drop_sign=True),  # drops the minus sign
    "C04-M3": _m("C04-M3", ("En_from",), prop_n2=True),  # takes E as proportional to n^2
    "C04-M4": _m("C04-M4", ("excite",), level=True),  # gives the level's own energy
    "C04-M5": _m("C04-M5", ("excite",), add=True),  # adds the sizes of the two energies
    "C04-M6": _m("C04-M6", ("excite",), k_as_n=True),  # takes the k-th excited state as n = k
    "C04-M7": _m("C04-M7"),  # gives the binding energy a minus sign
    "C04-M8": _m("C04-M8"),  # gives the first excitation energy
    "C04-M9": _m("C04-M9"),  # thinks it is zero, the energy at infinity
    "C04-M10": _m("C04-M10", ("ionize",), ground=True),  # uses the ground state
    "C04-M11": _m("C04-M11", ("ionize",), excit=True),  # gives the excitation energy
    "C04-M12": _m("C04-M12", ("ionize",), times_n2=True),  # multiplies by n^2
    "C04-M13": _m("C04-M13", ("KE",), same=True),  # takes KE equal to E
    "C04-M14": _m("C04-M14", ("KE",), pe=True),  # gives the size of the potential energy
    "C04-M15": _m("C04-M15", ("KE",), half=True),  # halves it
}
