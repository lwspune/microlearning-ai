"""C05 The hydrogen spectrum: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "lam":   the wavelength, in nm, of the line m -> n (inputs n, m, R in per metre);
  "lim":   a series limit, in angstrom, from the Lyman limit (inputs n, L = Lyman limit in angstrom);
  "ratio": the ratio of the first-line wavelengths of the series ending on n1 and on n2 (inputs n1, n2);
  "freq":  the frequency, in Hz, of the first Lyman line from the Lyman and Balmer series limits (inputs nuL, nuB).

The key works from Bohr's formula: h nu = E_m - E_n with E_n = -13.6 / n^2 eV, which gives
1/lambda = R (1/n^2 - 1/m^2); the series limit has m -> infinity, and the first line m = n + 1.
"""
from sympy import Rational, oo

from physics import sig

NM = Rational(1, 10**9)


def _bracket(n, m, *, no_sq=False, upper=False, add=False):
    p = 1 if no_sq else 2
    if upper:
        if m == oo:
            raise ValueError("the upper level alone is not defined for a series limit")
        return Rational(1, m**p)
    tail = 0 if m == oo else Rational(1, m**p)
    return Rational(1, n**p) + tail if add else Rational(1, n**p) - tail


def _solve(v, p, *, swap=False, no_sq=False, upper=False, add=False, prev=False, lin=False, inv=False, ratio_e=False):
    ask, sf = p["ask"], p.get("sf", 3)
    if ask == "lam":
        n, m = v["n"], v["m"]
        if swap:  # the first line and the series limit traded
            m = oo if m == n + 1 else (n + 1 if m == oo else None)
            if m is None:
                raise ValueError("neither the first line nor the limit")
        if prev:  # counts the lines from m = n, so the k-th line has m = n + k - 1
            if m == oo or m - 1 <= n:
                raise ValueError("does not apply")
            m = m - 1
        return sig(1 / (v["R"] * _bracket(n, m, no_sq=no_sq, upper=upper, add=add)) / NM, sf)
    if ask == "lim":
        n, L = v["n"], v["L"]
        if swap:  # gives the series' first line instead
            return sig(L / _bracket(n, n + 1), sf)
        if lin:
            return sig(n * L, sf)
        if inv:
            return sig(L / n**2, sf)
        return sig(n**2 * L, sf)
    if ask == "ratio":
        n1, n2 = v["n1"], v["n2"]
        if swap:  # compares the series limits instead
            return Rational(n1**2, n2**2)
        b1, b2 = _bracket(n1, n1 + 1, no_sq=no_sq), _bracket(n2, n2 + 1, no_sq=no_sq)
        return b1 / b2 if ratio_e else b2 / b1  # ratio_e: wavelength taken proportional to the energy gap
    if ask == "freq":
        L, B = v["nuL"], v["nuB"]
        if swap:
            return sig(L, sf)
        if add:
            return sig(L + B, sf)
        if upper:
            return sig(B, sf)  # the upper level n = 2 alone: cR/4, the Balmer limit
        return sig(L - B, sf)
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
    "C05-M1": _m(("lam", "lim", "ratio", "freq"), swap=True),  # trades the first line and the series limit
    "C05-M2": _m(("ratio",), ratio_e=True),  # takes the wavelength proportional to the energy gap
    "C05-M3": _m(("lim",), lin=True),  # takes the series limit proportional to n
    "C05-M4": _m(("lim",), inv=True),  # takes the series limit proportional to 1/n^2
    "C05-M5": _m(("lam", "ratio"), no_sq=True),  # drops the squares: R (1/n - 1/m)
    "C05-M6": _m(("lam", "freq"), upper=True),  # takes the photon energy as the upper level's energy alone
    "C05-M7": _m(("lam", "freq"), add=True),  # adds the sizes of the two levels' energies
    "C05-M8": _m(("lam",), prev=True),  # counts the lines from m = n
}
