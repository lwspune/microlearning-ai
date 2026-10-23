"""C05 Drops merging and splitting: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "merge_E": energy released when n droplets of radius r_mm merge into one drop (inputs n, r_mm, T);
  "split_W": work to break a drop of radius R_cm into n equal droplets, T in dyne/cm (inputs n, R_cm, T_dyne);
  "merge_dA": decrease in surface area when n droplets of radius r_mm merge (inputs n, r_mm);
  "why":     why touching mercury drops join into one (a named answer).

The key keeps the volume fixed, n (4/3) pi r^3 = (4/3) pi R^3, solves for the other radius in sympy, and
takes the change in total surface area, 4 pi (n r^2 - R^2); the energy is T times that change.
"""
from sympy import Abs, Symbol, pi, solve

from physics import sig

_x = Symbol("x", positive=True)

WHY = {
    "key": Symbol("less_surface"),
    "C05-M1": Symbol("areas_add"),
    "C05-M7": Symbol("gravity"),
    "C05-M8": Symbol("more_energy"),
}


def _other_radius(n, r, *, merging, scale_n=False):
    """Radius after merging n drops of radius r (or of each piece after splitting a drop of radius r into n)."""
    if scale_n:
        return n * r if merging else r / n
    if merging:
        (R,) = solve(n * r ** 3 - _x ** 3, _x)
    else:
        (R,) = solve(r ** 3 - n * _x ** 3, _x)
    return R


def _areas(n, small, big, *, add=False, surfaces=1):
    """Total surface of the n small drops and of the one big drop."""
    A_small = n * 4 * pi * small ** 2 * surfaces
    A_big = A_small if add else 4 * pi * big ** 2 * surfaces
    return A_small, A_big


def _solve(v, p, *, add=False, one_state=False, surfaces=1, si_T=True, scale_n=False, metres=True):
    ask = p["ask"]
    if ask in ("merge_E", "merge_dA"):
        r = v["r_mm"] / 1000 if metres else v["r_mm"]
        R = _other_radius(v["n"], r, merging=True, scale_n=scale_n)
        A_small, A_big = _areas(v["n"], r, R, add=add, surfaces=surfaces)
        if ask == "merge_dA":
            return sig(Abs(A_small - A_big))
        T = v["T"]
        return sig(T * A_big if one_state else T * Abs(A_small - A_big))
    if ask == "split_W":
        T = v["T_dyne"] / 1000 if si_T else v["T_dyne"]
        R = v["R_cm"] / 100
        r = _other_radius(v["n"], R, merging=False, scale_n=scale_n)
        A_small, A_big = _areas(v["n"], r, R, add=add, surfaces=surfaces)
        return sig(T * A_small if one_state else T * Abs(A_small - A_big))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return WHY["key"] if p["ask"] == "why" else _solve(v, p)


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def m1(v, p):
    """Thinks the surface areas simply add, like the volumes, so nothing is released."""
    if p["ask"] == "why":
        return WHY["C05-M1"]
    _only(p, "merge_E", "merge_dA")
    return _solve(v, p, add=True)


def m2(v, p):
    """Gives the surface energy of one state instead of the change between the two."""
    _only(p, "merge_E", "split_W")
    return _solve(v, p, one_state=True)


def m3(v, p):
    """Counts two surfaces for each drop, as for a bubble."""
    _only(p, "merge_E")
    return _solve(v, p, surfaces=2)


def m4(v, p):
    """Leaves dyne/cm unconverted."""
    _only(p, "split_W")
    return _solve(v, p, si_T=False)


def m5(v, p):
    """Scales the radius by n, as if radii added like volumes."""
    _only(p, "merge_E", "split_W", "merge_dA")
    return _solve(v, p, scale_n=True)


def m6(v, p):
    """Leaves millimetres unconverted."""
    _only(p, "merge_dA")
    return _solve(v, p, metres=False)


def m7(v, p):
    """Thinks gravity pulls the drops into one."""
    _only(p, "why")
    return WHY["C05-M7"]


def m8(v, p):
    """Thinks the drops join to gain surface energy."""
    _only(p, "why")
    return WHY["C05-M8"]


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6,
          "C05-M7": m7, "C05-M8": m8}
