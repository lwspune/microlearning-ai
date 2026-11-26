"""C08 The Nernst equation: answer models (the key, and one per misconception).

At 298 K, E_cell = E0_cell - (0.0592 / n) log10 Q, with Q = [anode ion]^xa (x gas pressure) / [cathode ion]^xc
and E0_cell = E0_cathode - E0_anode. A single electrode (reduction, M^n+ + ne- -> M) has Q = 1 / [M^n+].
params["ask"]:
  "E":  the cell or electrode potential in V (inputs Ec, n, cc, xc; optional Ea (else 0), ca, xa (else 1),
        gas: the pressure of a gaseous product in atm (else 1));
  "dE": the change in E_cell when the anode ion's concentration is multiplied by f (inputs n, f; optional xa).
"""
from sympy import log

from chemistry import BOOK, sig

K = BOOK["nernst"]


def _get(v, k, default=1):
    return v[k] if k in v else default


def _solve(v, p, rule):
    n = v["n"]
    if p["ask"] == "dE":
        f, xa = v["f"], _get(v, "xa")
        Q, E0 = f**xa, 0  # the change: the new Q over the old one
    elif p["ask"] == "E":
        E0 = v["Ec"] - _get(v, "Ea", 0)
        ca, xa, cc, xc, gas = _get(v, "ca"), _get(v, "xa"), v["cc"], v["xc"], _get(v, "gas")
        if rule == "no_powers":
            if xa == 1 and xc == 1:
                raise ValueError("no powers to drop")
            xa = xc = 1
        Q = ca**xa * gas / cc**xc
    else:
        raise ValueError(f"unknown ask {p['ask']}")
    if rule == "inverted":
        return sig(E0 + K / n * log(Q, 10))
    if rule == "no_n":
        return sig(E0 - K * log(Q, 10))
    if rule == "ln":
        return sig(E0 - K / n * log(Q))
    return sig(E0 - K / n * log(Q, 10))


def _m(rule):
    def model(v, p):
        if rule == "no_powers" and p["ask"] != "E":
            raise ValueError("does not apply to this item")
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": _m("key"),
    "C08-M1": _m("inverted"),  # writes Q upside down (reactants over products)
    "C08-M2": _m("no_powers"),  # leaves out the powers (coefficients) in Q
    "C08-M3": _m("no_n"),  # leaves out n
    "C08-M4": _m("ln"),  # uses ln with 0.0592, which belongs with log10
}
