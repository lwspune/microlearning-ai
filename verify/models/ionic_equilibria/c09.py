"""C09 Predicting precipitation: answer models (the key, and one per misconception).

The ionic product IP has the same form as K_sp but uses the concentrations actually present; a precipitate
forms when IP > K_sp. Mixing equal volumes halves each concentration. A common ion lowers solubility.
params["ask"]:
  "ip":       IP of A_x B_y after mixing equal volumes of the two salt solutions (inputs cA, cB, x, y);
              cA is the cation's salt (one cation per unit), cB the anion's salt (one anion per unit);
  "verdict":  will A_x B_y precipitate (inputs cA, cB, x, y, Ksp): a named answer carrying the IP used;
  "s_common": molar solubility of A B_y in a solution c M in a soluble salt giving the anion B
              (inputs Ksp, c, y);
  "named":    a statement item; params["q"] picks it from ANSWERS.
"""
from sympy import Integer, Symbol

from chemistry import sig

ANSWERS = {
    # AgNO3 added to a saturated AgCl solution: what happens to the solubility of AgCl.
    "agcl": {"key": "decreases_ksp_same", "C09-M3": "increases_ip_exceeds", "C09-M4": "increases_more_ions",
             "C09-M5": "unchanged_ksp_constant"},
    # Group II sulfides precipitate in acidic H2S, group IIIB only in ammoniacal H2S.
    "sulfide": {"key": "group2_lower_ksp", "C09-M3": "group2_higher_ksp", "C09-M4": "acid_raises_s2",
                "C09-M5": "ksp_similar_medium_only"},
}


def _ip(v, how):
    cA, cB, x, y = v["cA"], v["cB"], v["x"], v["y"]
    half = Integer(1) / 2
    return {"key": (cA * half) ** x * (cB * half) ** y,
            "M1": cA**x * cB**y,
            "M2": (cA * half) * (cB * half),
            "M3": (cA * half) ** x * (cB * half) ** y,
            "M6": (cA * half) ** x * (y * cB * half) ** y}.get(how)


def _name(verdict, ip):
    m, e = f"{float(ip):.2e}".split("e")
    return Symbol(f"{verdict}_ip_{m.replace('.', 'p').rstrip('0').rstrip('p')}e{int(e)}".replace("-", "m"))


def _solve(v, p, how):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "named":
        table = ANSWERS[p["q"]]
        name = "key" if how == "key" else f"C09-{how}"
        if name not in table:
            raise ValueError("does not apply to this item")
        return Symbol(table[name])
    if ask in ("ip", "verdict"):
        ip = _ip(v, how)
        if ip is None or (ask == "ip" and how == "M3"):
            raise ValueError("does not apply to this item")
        if ask == "ip":
            return sig(ip, n)
        ip = sig(ip, n)
        above = ip > v["Ksp"]
        if how == "M3":  # reverses the test
            above = not above
        return _name("yes" if above else "no", ip)
    if ask == "s_common":
        Ksp, c, y = v["Ksp"], v["c"], v["y"]
        out = {"key": Ksp / c**y, "M2": Ksp / c,
               "M5": (Ksp / y**y) ** (Integer(1) / (1 + y)),
               "M6": Ksp / (y * c) ** y}.get(how)
        if out is None:
            raise ValueError("does not apply to this item")
        return sig(out, n)
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C09-M1": _m("C09-M1"),  # ignores the dilution on mixing: uses the concentrations before mixing
    "C09-M2": _m("C09-M2"),  # leaves out the powers in IP (or K_sp): [Ba2+][F-] for BaF2
    "C09-M3": _m("C09-M3"),  # reverses the test: thinks IP > K_sp keeps the salt dissolved
    "C09-M4": _m("C09-M4"),  # thinks a common ion raises solubility or ionisation
    "C09-M5": _m("C09-M5"),  # ignores the common ion: solubility as in pure water, since K_sp is constant
    "C09-M6": _m("C09-M6"),  # carries the formula's 2 into the common ion: takes [F-] as twice the salt's
}
