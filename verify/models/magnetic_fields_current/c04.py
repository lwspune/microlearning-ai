"""C04 Force on a current-carrying wire: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "Blev": the field that levitates a straight wire, in T. Inputs m_g (mass in g), L (m), I (A); g = 9.8 m/s^2.
  "Fang": the force on a straight wire at an angle to the field, in N. Inputs B (T), I (A), l_cm, th (degrees).
  "eq", "loopI", "closed": named answers (see NAMED).

The key works from the definition F = I l x B: size B I l sin(theta), at right angles to the wire and the field.
A wire floats when B I l = m g; round a closed loop in a uniform field the forces on the sides add to zero.
"""
from sympy import Symbol, cos, pi, sin

from physics import BOOK, sig

NAMED = {
    # Ex Q.1 (iv): rod west to east on the equator, field south to north.
    "eq": {"key": "up", "C04-M2": "down", "C04-M3": "north", "C04-M1": "zero"},
    # Solved Ex.10.3: the current that holds up a loop whose lower side is in the field.
    "loopI": {"key": "mg_Ba", "C04-M9": "no_current", "C04-M5": "m_Ba", "C04-M8": "Ba_mg"},
    # Board 2023: net force on a closed loop in a uniform field.
    "closed": {"key": "zero_torque", "C04-M6": "sum_sides", "C04-M7": "zero_no_turn", "C04-M3": "along_B"},
}

G = BOOK["g"]


def _solve(v, p, *, raw=False, no_g=False, invert=False, use_cos=False, no_sin=False):
    ask = p["ask"]
    if ask == "Blev":
        m = v["m_g"] if raw else v["m_g"] / 1000
        weight = m if no_g else m * G
        il = v["I"] * v["L"]
        return sig(il / weight if invert else weight / il)
    if ask == "Fang":
        length = v["l_cm"] if raw else v["l_cm"] / 100
        th = v["th"] * pi / 180
        s = 1 if no_sin else (cos(th) if use_cos else sin(th))
        return sig(v["B"] * v["I"] * length * s)
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
    "C04-M1": _m("C04-M1", ("Fang",), use_cos=True),  # cos(theta) for sin(theta)
    "C04-M2": _m("C04-M2"),  # reverses the direction (B x l for l x B)
    "C04-M3": _m("C04-M3"),  # takes the force along the field
    "C04-M4": _m("C04-M4", ("Blev", "Fang"), raw=True),  # uses g and cm without converting to kg and m
    "C04-M5": _m("C04-M5", ("Blev",), no_g=True),  # uses the mass for the weight
    "C04-M6": _m("C04-M6"),  # adds the sizes of the forces on a loop's sides
    "C04-M7": _m("C04-M7"),  # thinks zero net force means no torque
    "C04-M8": _m("C04-M8", ("Blev",), invert=True),  # inverts the ratio
    "C04-M9": _m("C04-M9"),  # applies "zero force on a closed loop" to a loop only partly in the field
    "C04-M10": _m("C04-M10", ("Fang",), no_sin=True),  # drops sin(theta)
}
