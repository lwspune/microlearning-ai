"""C04 Using dimensional analysis: answer models (the key, and one per misconception).

params["ask"]:
  "dyne":   1 N in dyne: 1 kg m s^-2 = 1000 g x 100 cm s^-2 (inputs kg_g, m_cm);
  "calorie", "b_dims", "powers_v", "powers_ke": named.
"""
from sympy import Symbol

from physics import sig

NAMED = {
    "calorie": {"key": "a_inv_b2_inv_g2", "C04-M1": "a_b2_g_inv2", "C04-M2": "no_squares", "C04-M3": "g_sign"},
    "b_dims": {"key": "dim_L", "C04-M4": "dim_v", "C04-M5": "dim_a", "C04-M6": "dim_t"},
    "powers_v": {"key": "half_half", "C04-M7": "one_one", "C04-M8": "half_minus_half", "C04-M9": "minus_half_half"},
    "powers_ke": {"key": "one_two_k_unknown", "C04-M10": "one_one_p", "C04-M11": "two_one", "C04-M12": "one_two_k_half"},
}


def _solve(v, p, *, mass_only=False, length_only=False, invert=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "dyne":
        f = v["kg_g"] * v["m_cm"]
        if mass_only:
            f = v["kg_g"]
        elif length_only:
            f = v["m_cm"]
        return sig(1 / f if invert else f, n)
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
    **{f"C04-M{i}": _m(f"C04-M{i}") for i in range(1, 13)},
    "C04-M13": _m("C04-M13", ("dyne",), mass_only=True),  # converts the mass but not the length
    "C04-M14": _m("C04-M14", ("dyne",), length_only=True),  # converts the length but not the mass
    "C04-M15": _m("C04-M15", ("dyne",), invert=True),  # turns the factor upside down
}
# M1 inverts the conversion; M2 forgets the squares; M3 gets the sign of time's power wrong.
# M4 gives b the dimensions of v; M5 of a; M6 of c.
# M7 ignores the square root; M8 and M9 get one sign wrong.
# M10 gives momentum's powers; M11 swaps the powers; M12 thinks dimensions fix the constant too.
