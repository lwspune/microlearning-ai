"""C08 Potential energy of a system of charges: answer models (the key, and one per misconception).

U = k q1 q2 / r for a pair; for more charges, add the energy of every pair once. params["ask"]:
  "pair":   U, in J, of q1_nC at x1_cm and q2_nC at x2_cm on the x-axis (inputs q1_nC, x1_cm, q2_nC, x2_cm);
  "equal":  U, in J, of two charges q C each r_cm apart (inputs q, r_cm);
  "line3":  Q/q for -q, +Q, -q equally spaced on a line with U = 0 (no inputs);
  "tri":    U, in J, of three charges q_uC at the corners of an equilateral triangle of side a_cm (inputs q_uC, a_cm);
  "apart":  work, in J, to pull q_uC and -q_uC from r_cm apart to infinity (inputs q_uC, r_cm).
"""
from sympy import Rational, Symbol, solve

from physics import BOOK, sig

k = BOOK["k_e"]
cm, nC, uC = Rational(1, 100), Rational(1, 10**9), Rational(1, 10**6)
_Q = Symbol("Q")


def _solve(v, p, *, coord=False, no_sign=False, r2=False, potential=False, in_cm=False, end_r=False, invert=False,
           end_4r=False, two_pairs=False, twice=False, w_is_u=False):
    ask, n = p["ask"], p.get("sf", 3)
    s = 1 if in_cm else cm

    def U(q1, q2, r):
        u = k * q1 * q2 / (r**2 if r2 else r)
        return abs(u) if no_sign else u

    if ask == "pair":
        r = (v["x2_cm"] if coord else v["x2_cm"] - v["x1_cm"]) * s
        return sig(U(v["q1_nC"] * nC, v["q2_nC"] * nC, r), n)
    if ask == "equal":
        r = v["r_cm"] * s
        if potential:
            return sig(k * v["q"] / r, n)
        return sig(U(v["q"], v["q"], r), n)
    if ask == "line3":
        far = 1 if end_r else (4 if end_4r else 2)  # end pair at r, 4r or 2r
        (Q,) = solve(-2 * _Q + Rational(1, far), _Q)  # U ∝ -2qQ + q^2/far with q = 1
        return sig(1 / Q if invert else Q, n)
    if ask == "tri":
        q, a = v["q_uC"] * uC, v["a_cm"] * s
        pairs = 2 if two_pairs else (6 if twice else 3)
        return sig(pairs * U(q, q, a), n)
    if ask == "apart":
        q, r = v["q_uC"] * uC, v["r_cm"] * s
        u = U(q, -q, r)
        return sig(u if w_is_u else -u, n)
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
    "C08-M1": _m(("pair",), coord=True),  # uses a coordinate instead of the separation
    "C08-M2": _m(("pair",), no_sign=True),  # drops the sign of the energy
    "C08-M3": _m(("pair", "equal", "tri", "apart"), r2=True),  # uses 1/r^2, as in Coulomb's force
    "C08-M4": _m(("equal",), potential=True),  # gives the potential kq/r, forgetting one charge
    "C08-M5": _m(("equal", "apart"), in_cm=True),  # leaves the distance in cm
    "C08-M6": _m(("line3",), end_r=True),  # takes the end charges as r apart
    "C08-M7": _m(("line3",), invert=True),  # turns the ratio upside down
    "C08-M8": _m(("line3",), end_4r=True),  # squares the end pair's distance, using 4r
    "C08-M9": _m(("tri",), two_pairs=True),  # counts only two pairs
    "C08-M10": _m(("tri",), twice=True),  # counts every pair twice
    "C08-M11": _m(("apart",), w_is_u=True),  # takes the work as U instead of -U
}
