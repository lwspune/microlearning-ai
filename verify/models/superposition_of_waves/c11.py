"""C11 Air column in a pipe open at both ends: answer models (the key, and one per misconception).

An open pipe has antinodes at both ends, so L = p lambda / 2 and every harmonic sounds: n_p = p v / 2L, and the pth
overtone is the (p + 1)th harmonic. params["ask"] picks the quantity:
  "f":      frequency, in Hz, of overtone p of an open pipe L_cm long (inputs L_cm, v, p);
  "len":    length, in m, of an open pipe with fundamental n (inputs n, v);
  "series": fundamental, first and second overtones, in Hz, of an open pipe L_cm long (inputs L_cm, v), a Tuple;
  "nodes":  which harmonic and overtone has N nodes (input N), a named answer;
  "pair":   lengths, in cm, of an open pipe of fundamental n and of a closed pipe whose first overtone equals the
            open pipe's first overtone (inputs n, v), a Tuple (L_open, L_closed);
  "fund":   fundamental, in Hz, from consecutive modes f1 < f2 (inputs f1, f2).

The wrong models are rules: M1 numbers overtones from the fundamental (h = p); M2 takes only odd harmonics, as in a
closed pipe (h = 2p + 1); M3 takes one end as a node (lambda_1 = 4L); M4 takes the fundamental as a whole wavelength
(lambda_1 = L); M5 takes lambda = n / v; M6 takes the open ends as nodes; M7 takes the lowest given mode as the
first overtone.
"""
from sympy import Integer, Symbol, Tuple

from physics import sig

NODES = {"key": "h3_o2", "C11-M1": "h3_o3", "C11-M6": "h2_o1", "C11-M2": "h5_o2"}


def _h(p, rule):
    """Harmonic number of overtone p (p = 0 is the fundamental) in an open pipe."""
    return {"M1": p, "M2": 2 * p + 1}.get(rule, p + 1)


def _lam1(L, rule):
    """The fundamental's wavelength in a pipe of length L."""
    return {"M3": 4 * L, "M4": L}.get(rule, 2 * L)


def _solve(v, p, rule="key"):
    ask = p["ask"]
    if ask == "f":
        return sig(_h(v["p"], rule) * v["v"] / _lam1(v["L_cm"] / 100, rule))
    if ask == "series":
        lam1 = _lam1(v["L_cm"] / 100, rule)
        return Tuple(*[Integer(round(_h(q, rule) * v["v"] / lam1)) for q in (0, 1, 2)])
    if ask == "len":
        lam = v["n"] / v["v"] if rule == "M5" else v["v"] / v["n"]
        return sig(lam * {"M3": Integer(1) / 4, "M4": 1}.get(rule, Integer(1) / 2))
    if ask == "nodes":
        return Symbol(NODES[rule if rule == "key" else "C11-" + rule])
    if ask == "pair":
        n, c = v["n"], v["v"]
        Lo = c / n * {"M3": Integer(1) / 4, "M4": 1}.get(rule, Integer(1) / 2)
        if rule == "M1":
            target, h_closed = n, 1  # first overtone read as the fundamental, in both pipes
        else:
            target, h_closed = 2 * n, 3  # open first overtone 2n; closed first overtone 3v / 4Lc
        Lc = h_closed * c / (4 * target)
        return Tuple(sig(Lo * 100), sig(Lc * 100))
    if ask == "fund":
        f1, f2 = v["f1"], v["f2"]
        if rule == "M1":
            return sig(f1)  # the lowest given mode taken as the fundamental
        if rule == "M2":
            return sig((f2 - f1) / 2)  # odd harmonics only: neighbours differ by 2n
        if rule == "M7":
            return sig(f1 / 2)  # the lowest given mode taken as the first overtone, 2n
        return sig(f2 - f1)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(rule, asks):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, rule)
    return model


MODELS = {
    "key": key,
    "C11-M1": _m("M1", ("f", "nodes", "pair", "fund")),  # numbers overtones from the fundamental
    "C11-M2": _m("M2", ("f", "series", "nodes", "fund")),  # takes only odd harmonics, as in a closed pipe
    "C11-M3": _m("M3", ("f", "len", "series", "pair")),  # takes one end as a node: lambda_1 = 4L
    "C11-M4": _m("M4", ("len", "series", "pair")),  # takes the fundamental as a whole wavelength
    "C11-M5": _m("M5", ("len",)),  # takes lambda = n / v
    "C11-M6": _m("M6", ("nodes",)),  # takes the open ends as nodes, as on a string
    "C11-M7": _m("M7", ("fund",)),  # takes the lowest given mode as the first overtone
}
