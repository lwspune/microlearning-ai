"""C06 Displacement current: answer models (the key, and one per misconception).

i_d = eps0 dPhi_E/dt; between parallel plates of area A, dPhi_E/dt = A dE/dt, and i_d = C dV/dt = i.
params["ask"]:
  "id_from_rate": displacement current for plate area A and field rate R = dE/dt (inputs A, R);
  "rate_from_id": dV/dt for a displacement current i across a capacitance C (inputs i, C);
  "part_area":    displacement current through a surface of area A0 inside plates of area A, circuit current I
                  (inputs I, A, A0);
  "regions", "b_pattern", "maxwell_term": named.
"""
from sympy import Integer, Symbol

from physics import BOOK, sig

EPS0, MU0 = BOOK["eps0"], BOOK["mu0"]
NAMED = {
    "regions": {"key": "region_one_only", "C06-M1": "no_region", "C06-M8": "all_regions", "C06-M9": "regions_varying_in_space"},
    "b_pattern": {"key": "rises_to_rim", "C06-M1": "zero_everywhere", "C06-M10": "uniform_inside", "C06-M11": "zero_inside"},
    "maxwell_term": {"key": "changing_e_flux", "C06-M8": "steady_e_field", "C06-M12": "changing_b_flux", "C06-M13": "charge_across_gap"},
}


def _solve(v, p, *, zero=False, whole=False, invert=False, no_area=False, mu=False, micro=False, extra_eps=False):
    ask, n = p["ask"], p.get("sf", 3)
    if zero:
        return Integer(0)
    if ask == "id_from_rate":
        k = MU0 if mu else EPS0
        return sig(k * v["R"] if no_area else k * v["A"] * v["R"], n)
    if ask == "rate_from_id":
        c = v["C"] * 10**6 if micro else v["C"]
        if invert:
            return sig(c / v["i"], n)
        return sig(v["i"] / (EPS0 * c) if extra_eps else v["i"] / c, n)
    if ask == "part_area":
        if whole:
            return sig(v["I"], n)
        return sig(v["I"] * v["A"] / v["A0"] if invert else v["I"] * v["A0"] / v["A"], n)
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
    "C06-M1": _m("C06-M1", ("id_from_rate", "part_area"), zero=True),  # no charge crosses the gap, so no current there
    "C06-M2": _m("C06-M2", ("part_area",), whole=True),  # the whole current crosses any part of the gap
    "C06-M3": _m("C06-M3", ("rate_from_id", "part_area"), invert=True),  # turns the relation upside down
    "C06-M4": _m("C06-M4", ("id_from_rate",), no_area=True),  # takes dE/dt for dPhi_E/dt (drops the area)
    "C06-M5": _m("C06-M5", ("id_from_rate",), mu=True),  # uses mu0 for eps0
    "C06-M6": _m("C06-M6", ("rate_from_id",), micro=True),  # reads microfarads as farads
    "C06-M7": _m("C06-M7", ("rate_from_id",), extra_eps=True),  # puts eps0 in again: i_d = eps0 d(CV)/dt
    **{f"C06-M{i}": _m(f"C06-M{i}") for i in range(8, 14)},
}
