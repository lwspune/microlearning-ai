"""C07 Buffer solutions: answer models (the key, and one per misconception).

Henderson-Hasselbalch: acidic buffer pH = pKa + log10([salt]/[acid]);
basic buffer pOH = pKb + log10([salt]/[base]), pH = 14 - pOH. pH values to 2 decimal places.
params["ask"]:
  "pH_acid": pH of an acidic buffer (inputs K = Ka, a = [acid], s = [salt]);
  "pH_base": pH of a basic buffer (inputs K = Kb, a = [base], s = [salt]);
  "named":   which pair is a buffer of a given type; params["q"] picks it from ANSWERS.
"""
from sympy import Integer, Symbol, log

from chemistry import sig

ANSWERS = {
    # Which is an acidic buffer?
    "acidic": {"key": "ch3cooh_ch3coona", "C07-M4": "hcl_nh4cl", "C07-M5": "ch3cooh_hcl",
               "C07-M6": "nh4oh_nh4cl"},
    # Which is a basic buffer?
    "basic": {"key": "nh4oh_nh4cl", "C07-M4": "naoh_nacl", "C07-M5": "nh4oh_naoh",
              "C07-M6": "ch3cooh_ch3coona"},
}


def _ph(x):
    """A pH-like value to 2 decimal places."""
    x = float(x)
    digits = max(1, len(str(int(abs(x))))) if abs(x) >= 1 else 0
    return sig(x, digits + 2)


def _p(K, a, s, how):
    """The p-value (pH of an acidic buffer, pOH of a basic one) each model computes."""
    pK = -log(K, 10)
    return {"key": pK + log(s / a, 10), "M1": pK + log(a / s, 10), "M3": pK + s / a}.get(how)


def _solve(v, p, how):
    ask = p["ask"]
    if ask == "named":
        table = ANSWERS[p["q"]]
        name = "key" if how == "key" else f"C07-{how}"
        if name not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[name])
    K, a, s = v["K"], v["a"], v["s"]
    if how == "M2":  # mixes up pH and pOH
        x = _p(K, a, s, "key")
        return _ph(14 - x if ask == "pH_acid" else x)
    x = _p(K, a, s, how)
    if x is None:
        raise ValueError("does not apply to this item")
    return _ph(x if ask == "pH_acid" else Integer(14) - x)


def key(v, p):
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C07-M1": _m("C07-M1"),  # inverts the ratio: log([acid]/[salt])
    "C07-M2": _m("C07-M2"),  # mixes up pH and pOH
    "C07-M3": _m("C07-M3"),  # drops the log on the ratio
    "C07-M4": _m("C07-M4"),  # thinks a strong acid or base with a salt can buffer
    "C07-M5": _m("C07-M5"),  # thinks any two substances sharing an ion make a buffer
    "C07-M6": _m("C07-M6"),  # classifies a buffer by the salt's own nature (NH4Cl acidic, so acidic buffer)
}
