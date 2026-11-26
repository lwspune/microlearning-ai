"""C06 Modes of a string fixed at both ends: answer models (the key, and one per misconception).

Both ends are nodes, so a whole number p of loops fits: L = p lambda / 2, lambda_p = 2L / p, n_p = v / lambda_p = p n_1.
The p-th harmonic has frequency p n_1; a string produces every harmonic, so the k-th overtone is the (k + 1)-th harmonic.
params["ask"] picks the quantity:
  "nf":    fundamental frequency, in Hz (inputs v, L);
  "ov":    (first overtone, second overtone), in Hz, as a Tuple (input n1, the fundamental);
  "ratio": n_1 / (frequency of the k-th overtone) (input k);
  "speed": wave speed, in m/s, from the k-th overtone's frequency (inputs L, n, k);
  "touch": where the string vibrating in its k-th overtone can be touched (a named answer; input k);
  "facts": the true statement about harmonics and overtones of a string (a named answer).
"""
from sympy import Rational, Symbol, Tuple

from physics import sig

NAMED = {
    "touch": {"key": "thirds", "C06-M2": "half", "C06-M3": "fifths", "C06-M7": "antinodes"},
    "facts": {"key": "all_pm1", "C06-M2": "all_p", "C06-M3": "odd", "C06-M8": "swapped"},
}


def _harmonic(k, *, same=False, odd=False):
    """The harmonic number of the k-th overtone (k = 0 is the fundamental)."""
    if same:
        return max(k, 1)  # numbers overtones as harmonics
    if odd:
        return 2 * k + 1  # only odd harmonics
    return k + 1


def _solve(v, p, *, loop_lam=False, quarter=False, n_prop_lam=False, same=False, odd=False, one_lam=False):
    ask, sf = p["ask"], p.get("sf", 3)
    if ask == "nf":
        L, sp = v["L"], v["v"]
        lam = L if loop_lam else (4 * L if quarter else 2 * L)
        return sig(sp * lam if n_prop_lam else sp / lam, sf)
    if ask == "ov":
        n1 = v["n1"]
        hs = [_harmonic(k, same=same, odd=odd) for k in (1, 2)]
        return Tuple(*[sig(n1 / h if n_prop_lam else n1 * h, sf) for h in hs])
    if ask == "ratio":
        h = _harmonic(v["k"], same=same, odd=odd)
        return h if n_prop_lam else Rational(1, h)
    if ask == "speed":
        L, n, k = v["L"], v["n"], v["k"]
        lam = 2 * L if one_lam else 2 * L / _harmonic(k, same=same, odd=odd)
        return sig(n * lam, sf)
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
    "C06-M1": _m("C06-M1", ("nf",), loop_lam=True),  # takes the fundamental as one whole wavelength, L = lambda
    "C06-M2": _m("C06-M2", ("ov", "ratio", "speed"), same=True),  # numbers overtones as harmonics
    "C06-M3": _m("C06-M3", ("ov", "ratio", "speed"), odd=True),  # takes only odd harmonics to be present
    "C06-M4": _m("C06-M4", ("nf", "ov", "ratio"), n_prop_lam=True),  # takes frequency proportional to wavelength
    "C06-M5": _m("C06-M5", ("speed",), one_lam=True),  # takes lambda = 2L in every mode
    "C06-M6": _m("C06-M6", ("nf",), quarter=True),  # takes lambda = 4L, as for a string with a free end
    "C06-M7": _m("C06-M7"),  # touches the string at the antinodes
    "C06-M8": _m("C06-M8"),  # swaps the definitions of harmonic and overtone
}
