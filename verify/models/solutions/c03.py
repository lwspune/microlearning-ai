"""C03 Raoult's law for two liquids: answer models (the key, and one per misconception).

P_1 = x_1 P_1^0, P_2 = x_2 P_2^0, P = P_1 + P_2; in the vapour y_i = P_i / P.
params["ask"]:
  "P_mass":  total vapour pressure. inputs P1o, P2o, w1, w2 (masses, g), M1, M2 (g/mol).
  "y_mass":  mole fraction of component params["c"] ("1" or "2") in the vapour; same inputs.
  "x2_P":    mole fraction of 2 in the liquid from the total pressure. inputs P1o, P2o, P.
  "y1_P":    mole fraction of 1 in the vapour from the total pressure; same inputs.
  "deviation": an A-B mixture with params["attraction"] "stronger" or "weaker" than A-A and B-B (named).
"""
from sympy import Symbol

from chemistry import sig

NAMED = {"stronger": {"key": "negative_exo", "C03-M7": "positive_endo", "C03-M8": "ideal_zero", "C03-M9": "negative_endo"},
         "weaker": {"key": "positive_endo", "C03-M7": "negative_exo", "C03-M8": "ideal_zero", "C03-M9": "positive_exo"}}


def _x_mass(v, by_mass=False):
    a, b = (v["w1"], v["w2"]) if by_mass else (v["w1"] / v["M1"], v["w2"] / v["M2"])
    return a / (a + b), b / (a + b)


def _partials(v, mode):
    x1, x2 = _x_mass(v, by_mass=mode == "M1")
    if mode == "M2":  # pairs each liquid with the other's pure vapour pressure
        return x1 * v["P2o"], x2 * v["P1o"], x1, x2
    return x1 * v["P1o"], x2 * v["P2o"], x1, x2


def _solve(v, p, mode):
    ask = p["ask"]
    P1o, P2o = v["P1o"], v["P2o"]
    if ask == "P_mass":
        if mode == "M3":  # adds the pure vapour pressures
            return sig(P1o + P2o)
        if mode in ("key", "M1", "M2"):
            p1, p2, _, _ = _partials(v, mode)
            return sig(p1 + p2)
    if ask == "y_mass":
        c = int(p["c"])
        if mode == "M3":  # ratio of pure vapour pressures, composition ignored
            return sig((P1o, P2o)[c - 1] / (P1o + P2o))
        if mode in ("key", "M2", "M5"):
            p1, p2, x1, x2 = _partials(v, mode)
            if mode == "M5":  # vapour taken to have the liquid's composition
                return sig((x1, x2)[c - 1])
            return sig((p1, p2)[c - 1] / (p1 + p2))
    if ask in ("x2_P", "y1_P"):
        P = v["P"]
        if mode == "key" or (mode in ("M3", "M5") and ask == "y1_P"):
            x2 = (P - P1o) / (P2o - P1o)
        elif mode == "M2":  # P = x_2 P_1^0 + x_1 P_2^0
            x2 = (P2o - P) / (P2o - P1o)
        elif mode == "M4" and ask == "x2_P":  # the total taken as liquid 2's partial pressure
            return sig(P / P2o)
        elif mode == "M6" and ask == "x2_P":  # drops the P_1^0 term: P = (P_2^0 - P_1^0) x_2
            return sig(P / (P2o - P1o))
        else:
            raise ValueError("does not apply to this item")
        if ask == "x2_P":
            return sig(x2)
        x1 = 1 - x2
        if mode == "M5":
            return sig(x1)
        if mode == "M3":
            return sig(P1o / (P1o + P2o))
        return sig(x1 * P1o / P)
    raise ValueError("does not apply to this item")


def key(v, p):
    if p["ask"] == "deviation":
        return Symbol(NAMED[p["attraction"]]["key"])
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        if p["ask"] == "deviation":
            if mid not in NAMED[p["attraction"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["attraction"]][mid])
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C03-M1": _m("C03-M1"),  # mass fractions used as mole fractions
    "C03-M2": _m("C03-M2"),  # each mole fraction paired with the other liquid's P^0
    "C03-M3": _m("C03-M3"),  # mole fractions left out: pure vapour pressures alone
    "C03-M4": _m("C03-M4"),  # the total pressure taken as one liquid's partial pressure
    "C03-M5": _m("C03-M5"),  # vapour composition taken equal to the liquid's
    "C03-M6": _m("C03-M6"),  # drops the P_1^0 term of P = P_1^0 + (P_2^0 - P_1^0) x_2
    "C03-M7": _m("C03-M7"),  # links attraction and deviation backwards
    "C03-M8": _m("C03-M8"),  # thinks every mixture of liquids is ideal
    "C03-M9": _m("C03-M9"),  # right deviation, wrong sign of the heat of mixing
}
