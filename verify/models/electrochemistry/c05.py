"""C05 Quantitative electrolysis: answer models (the key, and one per misconception).

Q = I t (t in s); moles of electrons = Q / F with F = 96500 C; mass W = (Q / F) x (M / n), n = electrons per ion.
params["ask"]:
  "mass":     W from I, t (inputs I, t in s, tg the time in the unit the question gives, M, n);
  "current":  I to deposit W in a time (inputs W, t in s, tg, M, n);
  "faradays": faradays to produce W (inputs W, M, n);
  "series":   mass W2 in a second cell in series (inputs W1, M1, n1, M2, n2);
  "charge":   coulombs to reduce `mol` moles of an ion of charge n (inputs mol, n).
"""
from chemistry import BOOK, sig

F = BOOK["F"]


def _solve(v, p, how):
    ask, n_sf = p["ask"], p.get("sf", 3)
    out = {}
    if ask == "mass":
        I, t, tg, M, n = v["I"], v["t"], v["tg"], v["M"], v["n"]
        out = {"key": I * t / F * M / n, "M1": I * tg / F * M / n, "M2": I * t / F * M, "M3": I * t / F * M * n}
    elif ask == "current":
        W, t, tg, M, n = v["W"], v["t"], v["tg"], v["M"], v["n"]
        out = {"key": W * n * F / (M * t), "M1": W * n * F / (M * tg), "M2": W * F / (M * t),
               "M3": W * F / (n * M * t)}
    elif ask == "faradays":
        W, M, n = v["W"], v["M"], v["n"]
        out = {"key": W * n / M, "M2": W / M, "M3": W / (n * M), "M4": W * n * F / M}
    elif ask == "series":
        W1, M1, n1, M2, n2 = v["W1"], v["M1"], v["n1"], v["M2"], v["n2"]
        out = {"key": W1 * (M2 / n2) / (M1 / n1), "M2": W1 * M2 / M1, "M3": W1 * (M2 * n2) / (M1 * n1), "M5": W1}
    elif ask == "charge":
        mol, n = v["mol"], v["n"]
        out = {"key": mol * n * F, "M2": mol * F, "M3": mol * F / n, "M4": mol * n}
    if how not in out:
        raise ValueError("does not apply to this item")
    return sig(out[how], n_sf)


def key(v, p):
    return _solve(v, p, "key")


def _m(mid):
    return lambda v, p: _solve(v, p, mid.split("-")[1])


MODELS = {
    "key": key,
    "C05-M1": _m("C05-M1"),  # leaves the time in minutes or hours instead of seconds
    "C05-M2": _m("C05-M2"),  # ignores the ion's charge: one electron per atom deposited
    "C05-M3": _m("C05-M3"),  # multiplies by n where it should divide (the mole ratio upside down)
    "C05-M4": _m("C05-M4"),  # mixes faradays and coulombs (one gives the other's number)
    "C05-M5": _m("C05-M5"),  # thinks cells in series deposit equal masses
}
