"""C02 Ostwald's dilution law: answer models (the key, and one per misconception).

K = alpha^2 c / (1 - alpha) (exact), alpha = sqrt(K / c) for a weak electrolyte with small alpha.
params["ask"]:
  "formula":    the relation between alpha and c (named);
  "alpha":      alpha from K and c (inputs K, c);
  "pct":        percent dissociation from K and c (inputs K, c);
  "K_from_pct": K from the percent dissociation (inputs pct, c), by the exact law;
  "dilute":     percent dissociation at c2, given pct1 at c1 (inputs pct1, c1, c2).
"""
from sympy import Symbol, sqrt

from chemistry import sig

NAMED = {"formula": {"key": "sqrt_K_over_c", "C02-M1": "K_over_c", "C02-M2": "sqrt_c_over_K",
                     "C02-M3": "sqrt_K_times_c"}}


def _solve(v, p, how):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("alpha", "pct"):
        K, c = v["K"], v["c"]
        a = {"key": sqrt(K / c), "M1": K / c, "M2": sqrt(c / K), "M3": sqrt(K * c), "M5": sqrt(K / c)}[how]
        scale = 100 if ask == "pct" and how != "M5" else 1
        if ask == "alpha" and how == "M5":
            raise ValueError("does not apply to this item")
        return sig(a * scale, n)
    if ask == "K_from_pct":
        pct, c = v["pct"], v["c"]
        a = pct if how == "M5" else pct / 100
        if how == "M4":
            return sig(a * c / (1 - a), n)
        if how == "M2":
            return sig(a**2 / (c * (1 - a)), n)
        if how in ("key", "M5"):
            return sig(a**2 * c / (1 - a), n)
    if ask == "dilute":
        p1, c1, c2 = v["pct1"], v["c1"], v["c2"]
        out = {"key": p1 * sqrt(c1 / c2), "M1": p1 * c1 / c2, "M6": p1 * sqrt(c2 / c1), "M7": p1}
        if how in out:
            return sig(out[how], n)
    raise ValueError("does not apply to this item")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C02-M1": _m("C02-M1"),  # drops the square root: alpha = K / c
    "C02-M2": _m("C02-M2"),  # puts c on the wrong side: alpha = sqrt(c / K), K = alpha^2 / c
    "C02-M3": _m("C02-M3"),  # multiplies by c: alpha = sqrt(K c), which is [H3O+]
    "C02-M4": _m("C02-M4"),  # does not square alpha: K = alpha c / (1 - alpha)
    "C02-M5": _m("C02-M5"),  # mixes alpha and percent (no x100, or the percent used as alpha)
    "C02-M6": _m("C02-M6"),  # thinks alpha falls on dilution: alpha2 = alpha1 sqrt(c2 / c1)
    "C02-M7": _m("C02-M7"),  # thinks alpha does not change with concentration
}
