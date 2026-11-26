"""C09 The Arrhenius equation: answer models (the key, and one per misconception).

k = A e^(-Ea/RT); log10(k2/k1) = Ea / (2.303 R) (1/T1 - 1/T2), Ea in J/mol, R = 8.314, T in K (the book's
2.303 and t(K) = t(°C) + 273). Energies come in kJ/mol; an answer Ea is given in kJ/mol.
params["ask"]:
  "Ea":    Ea from k2/k1 = r between T1 and T2 (inputs r, T1, T2);
  "k2":    k at T2 from k1 at T1 (inputs k1, Ea, T1, T2);
  "A":     the frequency factor from k at T (inputs k, Ea, T);
  "th2":   a first order half life at T2 from th1 at T1 (inputs th1, Ea, T1, T2);
  "T":     the temperature at which a first order half life is th minutes (inputs A in s^-1, Ea, th);
  "raise": what increases k (named).
Temperatures are inputs in kelvin; M2 uses the Celsius figure the stem printed (T - 273).
"""
from sympy import Rational, Symbol, exp, log

from chemistry import BOOK, sig

R = BOOK["R"]
K2303 = Rational(2303, 1000)
K693 = Rational(693, 1000)

NAMED = {"key": "raise_T", "C09-M3": "lower_T", "C09-M5": "raise_conc", "C09-M6": "higher_Ea"}


def lg(x):
    return log(x, 10)


def _solve(v, p, rule=None):
    ask = p["ask"]
    J = 1 if rule == "m1" else 1000  # J per the energy unit used
    c = 1 if rule == "m4" else K2303  # the factor in front of R in the log10 form
    t = (lambda T: T - 273) if rule == "m2" else (lambda T: T)
    if ask == "Ea":
        r, T1, T2 = v["r"], t(v["T1"]), t(v["T2"])
        if rule == "m3":
            r = 1 / r
        if rule in (None, "m2", "m3", "m4"):
            return sig(c * R * lg(r) * T1 * T2 / (T2 - T1) / 1000)
    if ask in ("k2", "th2"):
        T1, T2 = t(v["T1"]), t(v["T2"])
        x = v["Ea"] * J / (c * R) * (1 / T1 - 1 / T2)
        if rule == "m3":
            x = -x
        ratio = 10 ** x  # k2 / k1
        if rule in (None, "m1", "m2", "m3", "m4"):
            return sig(v["k1"] * ratio) if ask == "k2" else sig(v["th1"] / ratio)
    if ask == "A":
        T = t(v["T"])
        if rule == "m3":
            return sig(v["k"] * exp(-v["Ea"] * 1000 / (R * T)))
        if rule in (None, "m1", "m2", "m4"):
            return sig(v["k"] * 10 ** (v["Ea"] * J / (c * R * T)))
    if ask == "T":
        th = v["th"] if rule == "m2" else v["th"] * 60  # M2 keeps the minutes
        k = K693 / th
        if rule in (None, "m1", "m2", "m4"):
            return sig(v["Ea"] * J / (c * R * lg(v["A"] / k)))
    if ask == "raise":
        name = NAMED.get(rule and f"C09-{rule.upper()}", "raise_T" if rule is None else None)
        if name:
            return Symbol(name)
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p)


def _m(rule):
    return lambda v, p: _solve(v, p, rule)


MODELS = {
    "key": key,
    "C09-M1": _m("m1"),  # Ea in kJ/mol with R in J/(K mol)
    "C09-M2": _m("m2"),  # leaves a temperature in °C (or a time in minutes) unconverted
    "C09-M3": _m("m3"),  # gets the sign backwards: k falls as T rises / inverted ratio
    "C09-M4": _m("m4"),  # uses log10 without the 2.303
    "C09-M5": _m("m5"),  # thinks k rises with the concentration of a reactant
    "C09-M6": _m("m6"),  # thinks a higher Ea gives a larger k
}
