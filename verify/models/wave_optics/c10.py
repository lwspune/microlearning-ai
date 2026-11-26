"""C10 Intensity in an interference pattern: answer models (the key, and one per misconception).

I ∝ a^2; Imax/Imin = ((a1 + a2)/(a1 - a2))^2 = ((sqrt I1 + sqrt I2)/(sqrt I1 - sqrt I2))^2. params["ask"]:
  "src_I":  I1/I2 of the sources from R = Imax/Imin (input R);
  "src_a":  a1/a2 of the sources from R (input R);
  "R_from_I": Imax/Imin from source intensities I1, I2 (inputs I1, I2);
  "R_from_a": Imax/Imin from source amplitudes a1, a2 (inputs a1, a2).
"""
from sympy import sqrt

from physics import sig


def _ratio(a1, a2, square=True):
    r = (a1 + a2) / (a1 - a2)
    return r**2 if square else r


def _solve(v, p, *, as_src=False, stop_amp=False, root_as_ratio=False, give_I=False, add_I=False, I_as_a=False,
           no_square=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("src_I", "src_a"):
        R = v["R"]
        if as_src:
            return sig(R, n)
        s = sqrt(R)
        if root_as_ratio:
            return sig(s, n)  # takes (a1 + a2)/(a1 - a2) as a1/a2
        amp = (s + 1) / (s - 1)  # a1/a2
        if ask == "src_I":
            return sig(amp if stop_amp else amp**2, n)
        return sig(amp**2 if give_I else amp, n)
    if ask == "R_from_I":
        I1, I2 = v["I1"], v["I2"]
        if add_I:
            return sig((I1 + I2) / (I1 - I2), n)
        if I_as_a:
            return sig(_ratio(I1, I2), n)
        return sig(_ratio(sqrt(I1), sqrt(I2), square=not no_square), n)
    if ask == "R_from_a":
        a1, a2 = v["a1"], v["a2"]
        if add_I:
            return sig((a1**2 + a2**2) / (a1**2 - a2**2), n)
        if I_as_a:
            return sig(_ratio(sqrt(a1), sqrt(a2)), n)  # takes the amplitudes as intensities
        return sig(_ratio(a1, a2, square=not no_square), n)
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
    "C10-M1": _m(("src_I", "src_a"), as_src=True),  # takes Imax/Imin as the ratio of the sources
    "C10-M2": _m(("src_I",), stop_amp=True),  # stops at the amplitude ratio
    "C10-M3": _m(("src_I", "src_a"), root_as_ratio=True),  # takes (a1 + a2)/(a1 - a2) as a1/a2
    "C10-M4": _m(("src_a",), give_I=True),  # gives the intensity ratio when the amplitude ratio is asked
    "C10-M5": _m(("R_from_I", "R_from_a"), add_I=True),  # adds intensities, not amplitudes
    "C10-M6": _m(("R_from_I", "R_from_a"), I_as_a=True),  # mixes up intensities and amplitudes
    "C10-M7": _m(("R_from_I", "R_from_a"), no_square=True),  # forgets to square
}
