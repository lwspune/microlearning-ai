"""C04 Superposition and interference: answer models (the key, and one per misconception).

Two waves of the same frequency, y1 = A1 sin wt and y2 = A2 sin(wt + phi). params["ask"] picks the quantity:
  "R":      resultant amplitude (inputs a1, a2, phi), in the unit of the amplitudes;
  "imm":    (Imax, Imin) as a Tuple, taking I = A^2 (inputs a1, a2);
  "ratio":  Imax / Imin from the waves' intensity ratio (inputs i1, i2);
  "path":   phase difference in rad at a point d1 and d2 from two sources (inputs v, n, d1, d2, src = the sources' own
            phase difference);
  "maxpos": distance from the midpoint between two sources to the nearest point of maximum intensity (inputs v, n, src).

The key works from the definitions: the resultant is the sum of the displacements, so its amplitude is the length of the
sum of the two rotating vectors (A1, 0) + (A2 cos phi, A2 sin phi); intensity is proportional to amplitude squared; a path difference D
adds a phase 2 pi D / lambda to the sources' own phase difference, and lambda = v / n.
"""
from sympy import Abs, Integer, Tuple, cos, pi, sin, sqrt

from physics import sig


def _lam(v, wrong=False):
    return v["n"] / v["v"] if wrong else v["v"] / v["n"]


def _nearest(lam, src, per):
    """Smallest |x| with src + 2 pi (per * x) / lam a whole multiple of 2 pi (per = path difference per unit shift)."""
    return min(Abs((2 * q * pi - src) * lam / (2 * pi * per)) for q in range(-3, 4))


def _solve(v, p, *, add=False, quad=False, minus=False, cancel=False, linear=False, int_amp=False,
           no_2pi=False, invert=False, lam_nv=False, no_src=False, path_x=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "R":
        a1, a2, phi = v["a1"], v["a2"], v["phi"]
        if add:
            return sig(a1 + a2, n)
        if quad:
            return sig(sqrt(a1**2 + a2**2), n)
        if minus:
            return sig(sqrt(a1**2 + a2**2 - 2 * a1 * a2 * cos(phi)), n)
        if cancel:
            if cos(phi) != -1:
                raise ValueError("only for waves in antiphase")
            return Integer(0)
        return sig(sqrt((a1 + a2 * cos(phi)) ** 2 + (a2 * sin(phi)) ** 2), n)  # components of the vector sum
    if ask == "imm":
        a1, a2 = v["a1"], v["a2"]
        if quad:
            return Tuple(sig(a1**2 + a2**2, n), sig(Abs(a1**2 - a2**2), n))
        if cancel:
            return Tuple(sig((a1 + a2) ** 2, n), Integer(0))
        if linear:
            return Tuple(sig(a1 + a2, n), sig(Abs(a1 - a2), n))
        return Tuple(sig((a1 + a2) ** 2, n), sig((a1 - a2) ** 2, n))
    if ask == "ratio":
        i1, i2 = v["i1"], v["i2"]
        if quad:
            return sig((i1 + i2) / Abs(i1 - i2), n)
        r = i1 / i2 if int_amp else sqrt(i1 / i2)
        if linear:
            return sig((r + 1) / Abs(r - 1), n)
        return sig(((r + 1) / (r - 1)) ** 2, n)
    if ask == "path":
        lam = _lam(v, lam_nv)
        D = Abs(v["d1"] - v["d2"])
        if no_2pi:
            return sig(D / lam + v["src"], n)
        if invert:
            return sig(2 * pi * lam / D + v["src"], n)
        return sig(2 * pi * D / lam + v["src"], n)
    if ask == "maxpos":
        lam = _lam(v, lam_nv)
        src = 0 if no_src else v["src"]
        return sig(_nearest(lam, src, 1 if path_x else 2), n)
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
    "C04-M1": _m(("R",), add=True),  # adds the amplitudes whatever the phase
    "C04-M2": _m(("R", "imm", "ratio"), quad=True),  # adds intensities (squares of amplitudes), not displacements
    "C04-M3": _m(("R",), minus=True),  # uses the triangle's cosine rule, with a minus sign
    "C04-M4": _m(("R", "imm"), cancel=True),  # takes destructive interference to cancel completely
    "C04-M5": _m(("imm", "ratio"), linear=True),  # takes intensity proportional to amplitude
    "C04-M6": _m(("ratio",), int_amp=True),  # takes the intensity ratio as the amplitude ratio
    "C04-M7": _m(("path",), no_2pi=True),  # phase difference = path difference / lambda, no 2 pi
    "C04-M8": _m(("maxpos",), no_src=True),  # ignores the sources' own phase difference
    "C04-M9": _m(("path",), invert=True),  # phase difference = 2 pi lambda / path difference
    "C04-M10": _m(("path", "maxpos"), lam_nv=True),  # lambda = n / v
    "C04-M11": _m(("maxpos",), path_x=True),  # takes the shift from the midpoint as the path difference
}
