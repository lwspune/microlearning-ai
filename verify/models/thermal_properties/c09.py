"""C09 Thermal stress: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "force":     the force on the walls from a rod of length L, cross-section A (Young's modulus Y, coefficient alpha)
               clamped between rigid walls and heated T1 -> T2 (inputs L, A, Y, a, T1, T2; SI, deg C);
  "recool":    a wire held taut, with no tension, between rigid supports at T0 is cooled to T1, giving tension T;
               the temperature, deg C, at which the tension is k T (inputs T0, T1, k);
  "energy":    the elastic energy per unit length of a rail section of length L clamped and heated by dT
               (inputs L, A, Y, a, dT; J/m);
  "bulk":      the pressure that keeps a cube of side s (coefficient alpha, bulk modulus B) from changing volume when
               heated T1 -> T2 (inputs s, a, B, T1, T2; Pa);
  "ratio":     the ratio F_P / F_Q of the forces from two clamped rods of one material heated alike: P of length
               LP and area AP, Q of length LQ and area AQ (inputs LP, AP, LQ, AQ);
  "statement": which statement about a heated rod is right (a named answer).

The key works from the definition: the walls undo the free expansion L alpha dT, so the strain is
(L alpha dT) / L, the stress Y times that, and the force the stress times A.
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    "statement": {
        "key": "free_rod_unstressed",
        "C09-M1": "longer_rod_more_stress",
        "C09-M3": "free_rod_stressed",
        "C09-M4": "heated_rod_in_tension",
    },
}


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def _solve(v, p, *, strain_is_dl=False, no_area=False, final_T=False, no_half=False, gamma_is_alpha=False,
           from_last=False, drop_only=False, no_l_in_dl=False):
    ask = p["ask"]
    if ask == "force":
        dT = v["T2"] if final_T else v["T2"] - v["T1"]
        dl = v["L"] * v["a"] * dT
        strain = dl if strain_is_dl else dl / v["L"]
        stress = v["Y"] * strain
        return sig(stress if no_area else stress * v["A"])
    if ask == "recool":
        T0, T1, k = v["T0"], v["T1"], v["k"]
        if final_T:  # tension taken in step with the temperature itself
            return sig(k * T1)
        drop = k * (T0 - T1)  # the cooling, from the stress-free temperature, that gives k T
        if drop_only:
            return sig(-drop)
        return sig((T1 if from_last else T0) - drop)
    if ask == "energy":
        dl = v["L"] * v["a"] * v["dT"]
        strain = dl if strain_is_dl else dl / v["L"]
        u = v["Y"] * strain**2 * (1 if no_half else Rational(1, 2))  # energy per unit volume
        return sig(u if no_area else u * v["A"])
    if ask == "bulk":
        dT = v["T2"] if final_T else v["T2"] - v["T1"]
        gamma = v["a"] if gamma_is_alpha else 3 * v["a"]
        V = v["s"] ** 3
        dV = V * gamma * dT
        strain = dV if strain_is_dl else dV / V
        return sig(v["B"] * strain)
    if ask == "ratio":
        def force(Lr, Ar):
            # F = Y A (L alpha dT) / L; Y alpha dT is common to both rods
            dl = 1 if no_l_in_dl else Lr
            strain = dl if strain_is_dl else dl / Lr
            return strain if no_area else strain * Ar
        return force(v["LP"], v["AP"]) / force(v["LQ"], v["AQ"])
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        _only(p, *asks)
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    # takes the change in length (or volume) itself as the strain, so a longer rod seems more stressed
    "C09-M1": _m("C09-M1", ("force", "energy", "bulk", "ratio"), strain_is_dl=True),
    # leaves out the area: gives the stress (or energy per volume) for the force (or energy per length)
    "C09-M2": _m("C09-M2", ("force", "energy", "ratio"), no_area=True),
    # thinks a rod free to expand is stressed too (named only)
    "C09-M3": _m("C09-M3", ()),
    # thinks heating puts a clamped rod in tension (named only)
    "C09-M4": _m("C09-M4", ()),
    # uses the final temperature in deg C, not the change
    "C09-M5": _m("C09-M5", ("force", "recool", "bulk"), final_T=True),
    # drops the 1/2 in the elastic energy
    "C09-M6": _m("C09-M6", ("energy",), no_half=True),
    # uses alpha for the volume coefficient gamma = 3 alpha
    "C09-M7": _m("C09-M7", ("bulk",), gamma_is_alpha=True),
    # counts the needed cooling from the last temperature, not from the stress-free one
    "C09-M8": _m("C09-M8", ("recool",), from_last=True),
    # gives the temperature drop as the temperature
    "C09-M9": _m("C09-M9", ("recool",), drop_only=True),
    # takes the free expansion as alpha dT, without L, so a longer rod seems less stressed
    "C09-M10": _m("C09-M10", ("ratio",), no_l_in_dl=True),
}
