"""C03 The pH scale: answer models (the key, and one per misconception).

pH = -log10[H3O+], pOH = -log10[OH-], pH + pOH = 14 at 298 K. pH values are rounded to 2 decimal places.
params["ask"]:
  "pH_acid":    pH of a strong acid (inputs c, and n = H3O+ per formula unit, default 1);
  "pH_from_OH": pH from [OH-] (input OH);
  "H_from_pH":  [H3O+] from the pH (input pH);
  "OH_from_pH": [OH-] from the pH (input pH);
  "very_dilute": the pH of 1e-8 M HCl (named).
"""
from sympy import E, Integer, Symbol, floor, log

from chemistry import sig

NAMED = {"very_dilute": {"key": "less_than_7", "C03-M3": "eight", "C03-M6": "more_than_7",
                         "C03-M8": "exactly_7"}}


def _ph(x):
    """A pH-like value to 2 decimal places."""
    x = float(x)
    digits = max(1, len(str(int(abs(x))))) if abs(x) >= 1 else 0
    return sig(x, digits + 2)


def _log10(x, how):
    """log10 x, or what a mistaken rule gives for it."""
    if how == "M5":
        return log(x)  # natural log
    if how == "M4":  # the decimal part of a negative log taken with the wrong sign: log(m 10^e) = e - log m
        e = floor(log(x, 10))
        m = x / Integer(10) ** e
        return e - log(m, 10)
    return log(x, 10)


def _antilog_neg(y, how):
    """10^(-y) for y > 0, or what a mistaken rule gives for it."""
    if how == "M5":
        return E ** (-y)
    if how == "M4":  # -3.12 read as -3 + 0.12
        i = floor(y)
        return Integer(10) ** (y - i) * Integer(10) ** (-i)
    return Integer(10) ** (-y)


def _solve(v, p, how):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "pH_acid":
        h = v["c"] * (1 if how == "M2" else v.get("n", 1))
        if how == "M7":
            return _ph(log(h, 10))
        if how == "M4":
            raise ValueError("does not apply to this item")
        ph = -_log10(h, how)
        return _ph(14 - ph if how == "M1" else ph)
    if ask == "pH_from_OH":
        if how == "M7":
            poh = log(v["OH"], 10)
        else:
            poh = -_log10(v["OH"], how)
        return _ph(poh if how == "M1" else 14 - poh)
    if ask in ("H_from_pH", "OH_from_pH"):
        y = v["pH"] if ask == "H_from_pH" else 14 - v["pH"]  # the p-value of the ion asked for
        if how == "M1":
            y = 14 - y  # gives the other ion
        return sig(_antilog_neg(y, how), n)
    raise ValueError("does not apply to this item")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p, "key")


def _m(mid, hows=()):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        how = mid.split("-")[1]
        if how not in hows:
            raise ValueError("does not apply to this item")
        return _solve(v, p, how)
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("C03-M1", ("M1",)),  # mixes up pH and pOH, [H3O+] and [OH-]
    "C03-M2": _m("C03-M2", ("M2",)),  # ignores the basicity: [H3O+] = c for H2SO4
    "C03-M3": _m("C03-M3"),  # ignores water's own H3O+ in a very dilute acid (pH 8 for 1e-8 M HCl)
    "C03-M4": _m("C03-M4", ("M4",)),  # takes the decimal part of a negative log with the wrong sign
    "C03-M5": _m("C03-M5", ("M5",)),  # uses the natural log
    "C03-M6": _m("C03-M6"),  # reads the scale backwards: more H3O+, higher pH
    "C03-M7": _m("C03-M7", ("M7",)),  # drops the minus sign: pH = log10[H3O+]
    "C03-M8": _m("C03-M8"),  # ignores the acid in a very dilute solution: pH exactly 7
}
