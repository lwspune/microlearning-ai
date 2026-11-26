"""C04 Combining resistors: answer models (the key, and one per misconception).

Series R_s = R1 + R2 + ...; parallel 1/R_p = 1/R1 + 1/R2 + ...; colour code R = (10a + b) x 10^n.
params["ask"]:
  "net":    total resistance of R1 parallel to R2, in series with R3 (inputs R1, R2, R3);
  "Vser":   potential difference across resistor `j` (1-based) of R1, R2[, R3] in series across V (inputs V, R1, R2[, R3]);
  "Ipar":   current in mA through resistor `j` of R1, R2 in parallel across V (inputs V, R1, R2);
  "colour": value in kilo-ohm of bands a, b, multiplier band n (inputs a, b, n);
  "addpar": what happens to the p.d. across the series resistor when a resistor is added in parallel to the other (named).
"""
from sympy import Integer, Symbol

from physics import sig

NAMED = {"addpar": {"key": "larger", "C04-M11": "smaller_adds", "C04-M12": "same_untouched", "C04-M13": "smaller_shares"}}


def _rs(v):
    return [v[k] for k in ("R1", "R2", "R3") if k in v]


def _solve(v, p, *, noinv=False, series=False, prod=False, equal=False, full=False, inverse=False, whole=False,
           digit=False, times=False, minus=False):
    ask = p["ask"]
    if ask == "net":
        R1, R2, R3 = v["R1"], v["R2"], v["R3"]
        if series:
            return sig(R1 + R2 + R3)
        if noinv:
            return sig(1 / R1 + 1 / R2 + R3)
        if prod:
            return sig(R1 * R2 + R3)
        return sig(R1 * R2 / (R1 + R2) + R3)
    if ask == "Vser":
        rs, j, V = _rs(v), int(p["j"]) - 1, v["V"]
        if equal:
            return sig(V / len(rs))
        if full:
            return sig(V)
        if inverse:  # shares the voltage as 1/R
            return sig(V * (1 / rs[j]) / sum(1 / x for x in rs))
        return sig(V * rs[j] / sum(rs))
    if ask == "Ipar":
        rs, j, V = _rs(v), int(p["j"]) - 1, v["V"]
        total = V * sum(1 / x for x in rs)
        if equal:
            return sig(1000 * total / len(rs))
        if inverse:  # shares the current in proportion to R
            return sig(1000 * total * rs[j] / sum(rs))
        if whole:
            return sig(1000 * total)
        return sig(1000 * V / rs[j])
    if ask == "colour":
        a, b, n = v["a"], v["b"], v["n"]
        if digit:
            return sig((100 * a + 10 * b + n) / Integer(1000))
        if times:
            return sig((10 * a + b) * n / Integer(1000))
        return sig((10 * a + b) * Integer(10) ** (n - 1 if minus else n) / 1000)
    raise ValueError(ask)


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
    "C04-M1": _m("C04-M1", ("net",), noinv=True),  # adds the reciprocals but forgets to invert
    "C04-M2": _m("C04-M2", ("net",), series=True),  # adds parallel resistors as if in series
    "C04-M3": _m("C04-M3", ("net",), prod=True),  # forgets to divide the product by the sum
    "C04-M4": _m("C04-M4", ("Vser", "Ipar"), equal=True),  # shares voltage or current equally
    "C04-M5": _m("C04-M5", ("Vser",), full=True),  # gives each series resistor the whole supply
    "C04-M6": _m("C04-M6", ("Vser", "Ipar"), inverse=True),  # mixes up the divider rules
    "C04-M7": _m("C04-M7", ("Ipar",), whole=True),  # thinks each branch carries the whole current
    "C04-M8": _m("C04-M8", ("colour",), digit=True),  # reads the multiplier band as a third digit
    "C04-M9": _m("C04-M9", ("colour",), times=True),  # multiplies by the band's number
    "C04-M10": _m("C04-M10", ("colour",), minus=True),  # one power of ten short
    "C04-M11": _m("C04-M11"),  # thinks adding any resistor adds resistance
    "C04-M12": _m("C04-M12"),  # thinks an untouched resistor keeps its voltage
    "C04-M13": _m("C04-M13"),  # thinks the new resistor takes current away from it
}
