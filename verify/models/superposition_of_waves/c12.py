"""C12 End correction: answer models (the key, and one per misconception).

e = 0.3 d at each open end (d the inner diameter): a closed pipe's fundamental has L + e = lambda/4, an open pipe's
L + 2e = lambda/2. params["ask"] picks the quantity:
  "n_closed": fundamental, in Hz, of a closed pipe L_cm long, inner diameter d_cm, sound at v (inputs L_cm, d_cm, v);
  "n_open":   fundamental, in Hz, of an open pipe (same inputs);
  "e_two":    end correction, in cm, of a closed pipe resonating with one fork at L1_cm (fundamental) and L2_cm
              (first overtone) (inputs L1_cm, L2_cm);
  "e_one":    end correction, in cm, of a closed pipe whose first resonance with an n Hz fork is at L_cm (inputs L_cm, n, v);
  "where":    where the antinode near an open end forms (a named answer).
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {"where": {"key": "outside", "C12-M1": "at_end", "C12-M11": "inside", "C12-M2": "both_ends"}}
c = Rational(1, 100)
E = Rational(3, 10)


def _solve(v, p, *, none=False, closed_two=False, radius=False, open_once=False, other=False, open_formula=False,
           no_half=False, second_harm=False, quarter=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("n_closed", "n_open"):
        L, d = v["L_cm"] * c, v["d_cm"] * c
        e = 0 if none else E * (d / 2 if radius else d)
        closed = (ask == "n_closed") != other
        if closed:
            k, ends = 4, (2 if closed_two else 1)
        else:
            k, ends = 2, (1 if open_once else 2)
        if other:  # carries the other pipe's whole formula, ends included
            ends = 1 if closed else 2
        return sig(v["v"] / (k * (L + ends * e)), n)
    if ask == "e_two":
        L1, L2 = v["L1_cm"], v["L2_cm"]
        if open_formula:
            return sig((L2 - 2 * L1) / 2, n)
        if second_harm:
            return sig(L2 - 2 * L1, n)  # L2 + e = 2 (L1 + e)
        return sig((L2 - 3 * L1) / (1 if no_half else 2), n)
    if ask == "e_one":
        lam = v["v"] / v["n"] * 100  # in cm
        if quarter:
            return sig(lam / 4, n)
        if other:
            return sig((lam / 2 - v["L_cm"]) / 2, n)  # L + 2e = lambda/2
        return sig((lam / 4 - v["L_cm"]) / (2 if closed_two else 1), n)
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
    "C12-M1": _m("C12-M1", ("n_closed", "n_open"), none=True),  # leaves out the end correction
    "C12-M2": _m("C12-M2", ("n_closed", "e_one"), closed_two=True),  # adds an end correction at the closed end too
    "C12-M3": _m("C12-M3", ("n_closed", "n_open"), radius=True),  # uses the radius in e = 0.3 d
    "C12-M4": _m("C12-M4", ("n_open",), open_once=True),  # adds the correction only once for an open pipe
    "C12-M5": _m("C12-M5", ("n_open", "e_one"), other=True),  # uses the other kind of pipe's formula
    "C12-M6": _m("C12-M6", ("e_two",), open_formula=True),  # uses the open pipe's e = (L2 - 2 L1)/2
    "C12-M7": _m("C12-M7", ("e_two",), no_half=True),  # forgets to halve
    "C12-M8": _m("C12-M8", ("e_two",), second_harm=True),  # takes the closed pipe's first overtone as the second harmonic
    "C12-M9": _m("C12-M9", ("e_one",), quarter=True),  # gives lambda/4 instead of the end correction
    "C12-M11": _m("C12-M11"),  # thinks the antinode forms inside the pipe
}
