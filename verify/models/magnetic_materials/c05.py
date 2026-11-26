"""C05 Diamagnetic, paramagnetic and ferromagnetic materials: answer models (the key, and one per misconception).

A ferromagnetic domain: a cube of side a_um micrometres, density rho (g/cm^3), molar mass Mm (g/mol), each atom a
dipole of moment mu (A m^2). N = rho V N_A / Mm; M = N mu / V. params["ask"]:
  "N":     the number of atoms in the domain (inputs a_um, rho, Mm, NA);
  "M":     the magnetization of the domain with every moment aligned, in A/m (inputs a_um, rho, Mm, NA, mu);
  "dia":   which statement fits a diamagnetic material (named);
  "water": what water in a watch glass on two unlike poles does (named);
  "ferro": what ferromagnetic materials have that paramagnetic ones lack (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "dia": {"key": "neg_small", "C05-M7": "pos_small", "C05-M8": "minus_one", "C05-M9": "curie"},
    "water": {"key": "depression", "C05-M10": "elevation", "C05-M11": "flat", "C05-M12": "one_pole"},
    "ferro": {"key": "retains", "C05-M13": "permanent", "C05-M14": "attracted", "C05-M15": "proportional"},
}


def _solve(v, p, *, m3_rho=False, moles=False, times_Mm=False, moment=False, cm3=False, no_N=False):
    ask, n = p["ask"], p.get("sf", 3)
    a_cm = v["a_um"] * 10**-4
    V_cm3, V_m3 = a_cm**3, (v["a_um"] * 10**-6) ** 3
    mass = v["rho"] * (V_m3 if m3_rho else V_cm3)
    if moles:
        N = mass / v["Mm"]
    elif times_Mm:
        N = mass * v["NA"] * v["Mm"]
    else:
        N = mass * v["NA"] / v["Mm"]
    if ask == "N":
        return sig(N, n)
    if ask == "M":
        if moment:
            return sig(N * v["mu"], n)
        if no_N:
            return sig(v["mu"] / V_m3, n)
        return sig(N * v["mu"] / (V_cm3 if cm3 else V_m3), n)
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
    "C05-M1": _m("C05-M1", ("N",), m3_rho=True),  # multiplies a density in g/cm^3 by a volume in m^3
    "C05-M2": _m("C05-M2", ("N",), moles=True),  # gives the number of moles, not atoms
    "C05-M3": _m("C05-M3", ("N",), times_Mm=True),  # multiplies by the molar mass
    "C05-M4": _m("C05-M4", ("M",), moment=True),  # gives the moment, not the magnetization
    "C05-M5": _m("C05-M5", ("M",), cm3=True),  # divides by the volume in cm^3
    "C05-M6": _m("C05-M6", ("M",), no_N=True),  # forgets the number of atoms
    "C05-M7": _m("C05-M7"),  # mixes up diamagnetic and paramagnetic
    "C05-M8": _m("C05-M8"),  # thinks a diamagnet expels the field completely
    "C05-M9": _m("C05-M9"),  # applies Curie's law to diamagnets
    "C05-M10": _m("C05-M10"),  # treats water as attracted by a magnet
    "C05-M11": _m("C05-M11"),  # thinks water is not magnetic at all
    "C05-M12": _m("C05-M12"),  # treats a diamagnet like a magnet with poles
    "C05-M13": _m("C05-M13"),  # thinks only ferromagnets have permanent atomic moments
    "C05-M14": _m("C05-M14"),  # thinks paramagnets are not attracted
    "C05-M15": _m("C05-M15"),  # thinks M is proportional to H in a ferromagnet
}
