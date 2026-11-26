"""C06 Common ion effect: answer models (the key, and one per misconception).

A weak electrolyte (concentration c, constant K) with a strong one supplying a common ion at concentration s:
K = [common ion][other ion] / [weak], so the other ion is K c / s and alpha = K / s (alpha small, s >> alpha c).
params["ask"]:
  "alpha": alpha of the weak electrolyte (inputs K, c, s);
  "ion":   the concentration of its other ion, [H+] for a weak acid with its salt (inputs K, c, s);
  "named": a statement item; params["q"] picks it from ANSWERS.
"""
from sympy import Symbol, sqrt

from chemistry import sig

ANSWERS = {
    # HCl added to HCN: what happens to HCN's dissociation.
    "hcn": {"key": "hcn_suppressed_ka_same", "C06-M1": "hcn_increased", "C06-M2": "hcl_suppressed",
            "C06-M3": "hcn_suppressed_ka_falls"},
    # HCl added to H2S: what happens to [S2-] and Ka.
    "h2s": {"key": "s2_falls_ka_same", "C06-M1": "s2_rises", "C06-M2": "s2_same_hcl_suppressed",
            "C06-M3": "s2_falls_ka_falls"},
}


def _num(v, p, how):
    K, c, s = v["K"], v["c"], v["s"]
    ask = p["ask"]
    if ask == "alpha":
        out = {"key": K / s, "M4": sqrt(K / c), "M5": K / c, "M6": K * c / s}.get(how)
    elif ask == "ion":
        out = {"key": K * c / s, "M4": sqrt(K * c), "M5": K * s / c, "M6": K / s}.get(how)
    else:
        out = None
    if out is None:
        raise ValueError("does not apply to this item")
    return sig(out, p.get("sf", 3))


def _solve(v, p, how):
    if p["ask"] == "named":
        table = ANSWERS[p["q"]]
        name = "key" if how == "key" else f"C06-{how}"
        if name not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[name])
    return _num(v, p, how)


def key(v, p):
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C06-M1": _m("C06-M1"),  # thinks the common ion increases the weak electrolyte's dissociation
    "C06-M2": _m("C06-M2"),  # thinks the strong electrolyte's dissociation is the one suppressed
    "C06-M3": _m("C06-M3"),  # thinks the common ion lowers K_a itself
    "C06-M4": _m("C06-M4"),  # ignores the common ion: alpha = sqrt(K/c), [H+] = sqrt(K c)
    "C06-M5": _m("C06-M5"),  # swaps the weak electrolyte's and the common ion's concentrations
    "C06-M6": _m("C06-M6"),  # mixes up alpha and [H+]: gives K c / s as alpha, K / s as [H+]
}
