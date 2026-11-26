"""C08 Collision theory and activation energy: answer models (the key, and one per misconception).

The fraction of collisions with energy at least Ea is f = e^(-Ea/RT) (Ea in J/mol, R = 8.314); with the
orientation (steric) factor P, the fraction that react is P f. On an energy profile, Ea (forward) = peak -
reactants, Ea' (reverse) = peak - products, and dH = Ea - Ea' = products - reactants.
params["ask"]:
  "fraction": f from the energies of the reactants R0 and the activated complex Pk, in kJ/mol (inputs R0, Pk, T);
  "react":    how many of N collisions react (inputs Ea in kJ/mol, T, P, N; N = 1 asks the fraction);
  "Er":       the reverse activation energy from R0, Pk and the products' energy Q, in kJ/mol (inputs R0, Pk, Q).
"""
from sympy import exp

from chemistry import BOOK, sig

R = BOOK["R"]


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "fraction":
        Ea, T = v["Pk"] - v["R0"], v["T"]
        if rule == "m1":
            return 1
        if rule == "m2":
            return sig(exp(-v["Pk"] * 1000 / (R * T)))
        if rule == "m5":
            return sig(exp(-Ea / (R * T)))
        if rule is None:
            return sig(exp(-Ea * 1000 / (R * T)))
    if ask == "react":
        Ea, T, P, N = v["Ea"], v["T"], v["P"], v["N"]
        if rule == "m1":
            return sig(N)
        if rule == "m5":
            return sig(N * P * exp(-Ea / (R * T)))
        if rule == "m6":
            return sig(N * exp(-Ea * 1000 / (R * T)))
        if rule is None:
            return sig(N * P * exp(-Ea * 1000 / (R * T)))
    if ask == "Er":
        R0, Pk, Q = v["R0"], v["Pk"], v["Q"]
        if rule == "m2":
            return sig(Pk)
        if rule == "m3":
            return sig(Pk - R0)
        if rule == "m4":
            return sig((Pk - R0) + (Q - R0))
        if rule is None:
            return sig(Pk - Q)
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p)


def _m(rule):
    return lambda v, p: _solve(v, p, rule)


MODELS = {
    "key": key,
    "C08-M1": _m("m1"),  # every collision reacts
    "C08-M2": _m("m2"),  # reads Ea as the peak's height above zero, not above the reactants
    "C08-M3": _m("m3"),  # takes the reverse barrier equal to the forward one
    "C08-M4": _m("m4"),  # swaps the sign: dH = Ea' - Ea, so Ea' = Ea + dH
    "C08-M5": _m("m5"),  # Ea in kJ/mol with R in J/(K mol)
    "C08-M6": _m("m6"),  # leaves out the orientation factor P
}
