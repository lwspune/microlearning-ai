"""C04 First order integrated rate law: answer models (the key, and one per misconception).

ln([A]0/[A]t) = kt, i.e. k = (2.303/t) log10([A]0/[A]t) and [A]t = [A]0 e^(-kt); ln[A] against t is a straight
line of slope -k. Gas phase A(g) -> B(g) + C(g): the pressure of A at time t is 2Pi - P (P the total pressure).
params["ask"]:
  "k_pct": k from a percentage (input pct, t; params given: "remaining" or "reacted");
  "conc":  [A]t from [A]0, k, t (inputs A0, k, t);
  "k_gas": k from the initial pressure Pi and the total pressure P at time t (inputs Pi, P, t);
  "gas_eq", "plot": the gas-phase law and the straight-line plot (named).
"""
from sympy import Integer, Symbol, exp, log

from chemistry import sig

NAMED = {
    "gas_eq": {"key": "gas_key", "C04-M1": "gas_no_2303", "C04-M2": "gas_inverted", "C04-M4": "gas_rise"},
    "plot": {"key": "ln_minus_k", "C04-M1": "ln_minus_k_over_2303", "C04-M2": "ln_plus_k", "C04-M5": "conc_minus_k"},
}


def _log10(x):
    return log(x, 10)


def _solve(v, p, rule=None):
    ask = p["ask"]
    if ask == "k_pct":
        t, pct = v["t"], v["pct"]
        rem = pct if p["given"] == "remaining" else 100 - pct
        if rule == "swap":
            rem = 100 - rem
        if rule == "linear":
            return sig((100 - rem) / Integer(100) / t)
        if rule == "inverted":
            return sig(2.303 / t * _log10(rem / Integer(100)))
        return sig((1 if rule == "no_2303" else 2.303) / t * _log10(100 / rem))
    if ask == "conc":
        A0, k, t = v["A0"], v["k"], v["t"]
        if rule is None:
            return sig(A0 * exp(-k * t))
        if rule == "no_2303":
            return sig(A0 * 10 ** (-k * t))
        if rule == "inverted":
            return sig(A0 * exp(k * t))
        if rule == "linear":
            return sig(A0 - k * t)
    if ask == "k_gas":
        Pi, P, t = v["Pi"], v["P"], v["t"]
        PA = P - Pi if rule == "rise" else 2 * Pi - P
        if rule == "inverted":
            return sig(2.303 / t * _log10(PA / Pi))
        if rule in (None, "rise", "no_2303"):
            return sig((1 if rule == "no_2303" else 2.303) / t * _log10(Pi / PA))
    raise ValueError("does not apply to this item")


def _model(mid, rule):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": _model("key", None),
    "C04-M1": _model("C04-M1", "no_2303"),  # treats log10 as ln: leaves out the 2.303
    "C04-M2": _model("C04-M2", "inverted"),  # writes the ratio upside down, [A]t/[A]0
    "C04-M3": _model("C04-M3", "swap"),  # takes the percentage reacted as the percentage remaining
    "C04-M4": _model("C04-M4", "rise"),  # takes the rise in total pressure, P - Pi, as the pressure of A
    "C04-M5": _model("C04-M5", "linear"),  # thinks [A] falls in a straight line, [A]t = [A]0 - kt
}
