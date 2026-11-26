"""C09 Laws of vibrating strings and the sonometer: answer models (the key, and one per misconception).

n = (1 / 2l) sqrt(T / m): n ∝ 1/l, n ∝ sqrt(T), n ∝ 1/sqrt(m), and m = pi r^2 rho. params["ask"] picks the quantity:
  "tension_pct": n'/n when the tension rises by pct per cent (input pct);
  "press":       vibrating length, in cm, for frequency n2 on a string l1 cm long with fundamental n1 (inputs l1, n1, n2);
  "len_load":    vibrating length, in m, of wire 2 (load M2 kg) for the same frequency as wire 1 (l1 cm, load M1 kg);
  "load_len":    load, in kg, on wire 1 (l1) for the same frequency as wire 2 (l2, load M2): inputs l1, l2, M2;
  "immersed":    frequency when the load (specific gravity sigma) is immersed in water (a named answer);
  "radius":      n1/n2 for two wires of one material, same length and tension, radii in the ratio 1 : k (input k).
"""
from sympy import Rational, Symbol, sqrt

from physics import sig

NAMED = {"immersed": {"key": "root_minus", "C09-M1": "lin_minus", "C09-M8": "root_plus", "C09-M9": "root_inv"}}


def _ft(r, law):
    """Frequency ratio for a tension ratio r under a (possibly wrong) law."""
    return {"root": sqrt(r), "lin": r, "sq": r**2, "inv": 1 / r}[law]


def _solve(v, p, *, law="root", len_law="inv", cut=False, invert=False, m_r=2, m_pow=Rational(1, 2), with_r=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "tension_pct":
        return sig(_ft(1 + v["pct"] / 100, law), n)
    if ask == "press":
        l1, r = v["l1"], v["n1"] / v["n2"]  # n2/n1 = l1/l2 for n ∝ 1/l
        l2 = {"inv": l1 * r, "lin": l1 / r, "invroot": l1 * r**2}[len_law]
        return sig(l1 - l2 if cut else l2, n)
    if ask == "len_load":
        r = v["M1"] / v["M2"] if invert else v["M2"] / v["M1"]
        return sig(v["l1"] / 100 * _ft(r, law), n)  # same n: l2/l1 = f(T2/T1)
    if ask == "load_len":
        s = v["l1"] / v["l2"]  # same n: f(T1/T2) = l1/l2
        inv = {"root": s**2, "lin": s, "sq": sqrt(s)}[law]
        return sig(v["M2"] / inv if invert else v["M2"] * inv, n)
    if ask == "radius":
        if with_r:
            return sig(1 / v["k"], n)  # takes n ∝ r
        return sig((v["k"] ** m_r) ** m_pow, n)  # n1/n2 = (m2/m1)^pow, m ∝ r^m_r
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
    "C09-M1": _m("C09-M1", ("tension_pct", "len_load", "load_len"), law="lin"),  # takes n ∝ T
    "C09-M2": _m("C09-M2", ("tension_pct", "len_load", "load_len"), law="sq"),  # takes n ∝ T^2
    "C09-M3": _m("C09-M3", ("tension_pct",), law="inv"),  # takes n ∝ 1/T
    "C09-M4": _m("C09-M4", ("press",), len_law="lin"),  # takes n ∝ l
    "C09-M5": _m("C09-M5", ("press",), len_law="invroot"),  # takes n ∝ 1/sqrt(l)
    "C09-M6": _m("C09-M6", ("press",), cut=True),  # gives the length cut off instead of the vibrating length
    "C09-M7": _m("C09-M7", ("len_load", "load_len"), invert=True),  # turns the tension ratio upside down
    "C09-M8": _m("C09-M8"),  # adds the upthrust to the weight
    "C09-M9": _m("C09-M9"),  # turns the frequency ratio upside down
    "C09-M10": _m("C09-M10", ("radius",), m_r=1),  # takes the linear density as proportional to the radius
    "C09-M11": _m("C09-M11", ("radius",), m_pow=1),  # takes n ∝ 1/m
    "C09-M12": _m("C09-M12", ("radius",), with_r=True),  # takes n ∝ r
}
