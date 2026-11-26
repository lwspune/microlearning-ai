"""C10 Air column in a pipe closed at one end: answer models (the key, and one per misconception).

A closed pipe has a node at the closed end and an antinode at the open end, so L = (2p - 1) lambda / 4 and only odd
harmonics sound: the pth overtone is the (2p + 1)th harmonic, n = (2p + 1) v / 4L. params["ask"] picks the quantity:
  "f":      frequency, in Hz, of overtone p of a closed pipe L_cm long (inputs L_cm, v, p);
  "lam":    wavelength, in m, of overtone p of a closed pipe L_cm long (inputs L_cm, p);
  "nodes":  the frequency, as a multiple of the fundamental, of the mode with N nodes (input N);
  "ratio":  Lc / Lo when a closed pipe's fundamental is in unison with overtone po of an open pipe (input po);
  "series": the first three overtones, in Hz, of a closed pipe L_cm long (inputs L_cm, v), a Tuple;
  "fund":   the fundamental, in Hz, from three consecutive overtones f1 < f2 < f3 (inputs f1, f2).

Each wrong model is a rule for the harmonic number h of overtone p and the fundamental wavelength:
  M1 numbers overtones from the fundamental (h = p); M2 takes all harmonics, as on a string (h = p + 1);
  M3 takes the open end as a node too, as on a string fixed at both ends (lambda_1 = 2L, all harmonics).
"""
from sympy import Integer, Tuple

from physics import sig


def _h(p, rule):
    """Harmonic number of overtone p (p = 0 is the fundamental)."""
    return {"key": 2 * p + 1, "M1": p, "M2": p + 1, "M3": p + 1}[rule]


def _solve(v, p, rule="key", no_si=False, invert=False, from_first=False):
    ask = p["ask"]
    L = v.get("L_cm")
    if L is not None and not no_si:
        L = L / 100
    base = 2 * L if (L is not None and rule == "M3") else (4 * L if L is not None else None)  # fundamental wavelength
    if ask == "f":
        return sig(_h(v["p"], rule) * v["v"] / base)
    if ask == "lam":
        return sig(base / _h(v["p"], rule))
    if ask == "series":
        return Tuple(*[Integer(round(_h(q, rule) * v["v"] / base)) for q in (1, 2, 3)])
    if ask == "nodes":
        N = v["N"]
        if rule == "M3":
            return Integer(2 * (N - 1))  # nodes at both ends: N - 1 loops of lambda/2, against v/4L
        return Integer(_h(N - 1, rule))  # N nodes: overtone N - 1
    if ask == "ratio":
        po = v["po"]
        # open pipe: overtone po is harmonic po + 1 (M1: harmonic po); n = h v / 2Lo. Closed fundamental v / 4Lc (M3: v / 2Lc).
        h_open = po if rule == "M1" else po + 1
        closed_den = 2 if rule == "M3" else 4
        r = Integer(2) / (closed_den * h_open)  # Lc / Lo from v / (closed_den Lc) = h_open v / (2 Lo)
        return 1 / r if invert else r
    if ask == "fund":
        f1, f2 = v["f1"], v["f2"]
        if from_first:
            return sig(f1 / 3)  # takes the lowest given overtone as the first overtone, 3n
        if rule == "M1":
            return sig(f1)  # numbers overtones from the fundamental: the lowest is n
        if rule == "M2":
            return sig(f2 - f1)  # all harmonics: neighbours differ by n
        return sig((f2 - f1) / 2)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _m(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C10-M1": _m(("f", "lam", "nodes", "ratio", "series", "fund"), rule="M1"),  # numbers overtones from the fundamental
    "C10-M2": _m(("f", "lam", "nodes", "series", "fund"), rule="M2"),  # takes all harmonics present
    "C10-M3": _m(("f", "lam", "nodes", "ratio", "series"), rule="M3"),  # takes the open end as a node too
    "C10-M4": _m(("ratio",), invert=True),  # gives the ratio upside down
    "C10-M5": _m(("f", "lam"), no_si=True),  # leaves L in cm
    "C10-M6": _m(("fund",), from_first=True),  # takes the lowest given overtone as the first
}
