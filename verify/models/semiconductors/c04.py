"""C04 The p-n junction diode: answer models (the key, and one per misconception).

params["ask"]:
  "abrupt":  where a reverse current rises abruptly (named);
  "reverse": what a reverse-biased diode is like (named);
  "barrier": what makes the barrier potential (named);
  "rab":     resistance between A and B: R1 in parallel with an ideal diode in series with R2 (inputs R1, R2; params bias);
  "forward": what forward bias does (named).
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "abrupt": {"key": "breakdown", "C04-M1": "si_knee", "C04-M2": "ge_knee", "C04-M3": "zero_volt"},
    "reverse": {"key": "off_switch", "C04-M4": "on_switch", "C04-M5": "low_r", "C04-M6": "ohmic"},
    "barrier": {"key": "both_ions", "C04-M7": "loss_plus", "C04-M8": "gain_plus", "C04-M9": "loss_minus"},
    "forward": {"key": "narrows_majority", "C04-M13": "widens", "C04-M14": "same_width", "C04-M15": "narrows_minority"},
}


def _solve(v, p, *, series=False, ignore=False, short=False):
    R1, R2, n = v["R1"], v["R2"], p.get("sf", 3)
    if short:
        return sig(0, n)
    if series:
        return sig(R1 + R2, n)
    if ignore or p["bias"] == "reverse":
        return sig(R1, n)
    return sig(R1 * R2 / (R1 + R2), n)


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if not kw:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    **{f"C04-M{i}": _m(f"C04-M{i}") for i in (1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15)},
    "C04-M10": _m("C04-M10", series=True),  # adds the two resistances
    "C04-M11": _m("C04-M11", ignore=True),  # ignores the diode branch
    "C04-M12": _m("C04-M12", short=True),  # thinks the diode shorts A to B
}
