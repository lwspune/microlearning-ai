"""C07 Density from the unit cell: answer models (the key, and one per misconception).

rho = n M / (a^3 N_A), with a in cm (1 pm = 1e-10 cm) and n atoms per unit cell (sc 1, bcc 2, fcc 4).
Unit cells in x g: x / (rho a^3); atoms: n x / (rho a^3).
params["lat"]: "sc" | "bcc" | "fcc".  params["ask"]:
  "rho":   density in g/cm^3 (inputs a in pm, M);
  "r":     atomic radius in pm (inputs rho, M), via the edge length;
  "M":     molar mass in g/mol (inputs a in pm, rho);
  "atoms": atoms in x grams (inputs a in pm, rho, x);
  "cells": unit cells in x grams (inputs a in pm, rho, x);
  "rel":   rho as an expression in the symbols n, M, a, N_A.
"""
from sympy import Integer, Rational, Symbol, sqrt

from chemistry import BOOK, sig

NA = BOOK["N_A"]
N = {"sc": 1, "bcc": 2, "fcc": 4}  # atoms per unit cell
WHOLE = {"sc": 8, "bcc": 9, "fcc": 14}  # every particle counted whole
CN = {"sc": 6, "bcc": 8, "fcc": 12}  # coordination number
K = {"sc": Rational(1, 2), "bcc": sqrt(3) / 4, "fcc": sqrt(2) / 4}  # r = K a
PM = Integer(10) ** -10  # cm per pm
n_, M_, a_, NA_ = Symbol("n"), Symbol("M"), Symbol("a"), Symbol("N_A")


def _solve(v, p, *, n=None, pm=PM, cube=3, swap=False, na_up=False):
    ask, lat = p["ask"], p["lat"]
    n = N[lat] if n is None else n
    if ask == "rel":
        if na_up:
            return n_ * M_ * NA_ / a_**3
        return (M_ if swap else n_ * M_) / (a_**3 * NA_)
    if ask == "rho":
        return sig(n * v["M"] / ((v["a"] * pm) ** cube * NA))
    if ask == "r":
        a_cm = (n * v["M"] / (v["rho"] * NA)) ** Rational(1, 3)
        return sig(K[lat] * a_cm / pm)
    if ask == "M":
        return sig(v["rho"] * (v["a"] * pm) ** cube * NA / n)
    cells = v["x"] / (v["rho"] * (v["a"] * pm) ** cube)
    if ask == "cells":
        return sig(cells * N[lat] if swap else cells)
    if ask == "atoms":
        return sig(cells if swap else n * cells)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return _solve(v, p)


def _only(asks, **kw):
    def model(v, p):
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


def m1(v, p):
    """Counts every particle in the cell as a whole atom (sc 8, bcc 9, fcc 14)."""
    if p["ask"] not in ("rho", "r", "M", "atoms"):
        raise ValueError("does not apply to this item")
    return _solve(v, p, n=WHOLE[p["lat"]])


def m2(v, p):
    """Takes n as the coordination number (sc 6, bcc 8, fcc 12)."""
    if p["ask"] not in ("rho", "r", "M", "atoms"):
        raise ValueError("does not apply to this item")
    return _solve(v, p, n=CN[p["lat"]])


MODELS = {
    "key": key,
    "C07-M1": m1,
    "C07-M2": m2,
    "C07-M3": _only(("rho", "r", "M", "cells", "atoms"), pm=Integer(10) ** -12),  # 1 pm taken as 1e-12 cm
    "C07-M4": _only(("cells", "atoms", "rel"), swap=True),  # mixes up atoms and unit cells
    "C07-M5": _only(("rho", "M", "cells", "atoms", "rel"), cube=1),  # forgets to cube the edge
    "C07-M6": _only(("rel",), na_up=True),  # multiplies by N_A instead of dividing
}


def _rel_cube1(v, p):
    return n_ * M_ / (a_ * NA_)


_m5 = MODELS["C07-M5"]


def _m5_all(v, p):
    if p["ask"] == "rel":
        return _rel_cube1(v, p)
    return _m5(v, p)


MODELS["C07-M5"] = _m5_all
