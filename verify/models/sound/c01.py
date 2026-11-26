"""C01 Waves and their properties: answer models (the key, and one per misconception).

params["ask"]:
  "kind":  what kind of wave carries a sitar's sound through air (a named answer);
  "vfork": wave speed, in m/s, from the frequency n (Hz) and the distance d (m) between a compression and the next
           rarefaction (inputs n, d);
  "freq":  frequency, in Hz, from the speed v (m/s) and the wavelength lam_cm (cm) (inputs v, lam_cm);
  "lam2":  wavelength, in m, in a second medium, from the frequency n (Hz) and the speeds v1, v2 (m/s) in the first
           and second media (inputs n, v1, v2);
  "phase": phase difference, in rad, between two points dx apart on a wave of wavelength lam (inputs dx, lam).

The key works from the definitions: v = n lambda; a compression and the next rarefaction are lambda/2 apart; the
frequency is set by the source and does not change from one medium to another; points one wavelength apart differ
in phase by 2 pi.
"""
from sympy import Symbol, nsimplify, pi

from physics import sig

NAMED = {
    "kind": {"key": "long_progressive", "C01-M1": "trans_progressive", "C01-M2": "air_flows",
             "C01-M3": "long_stationary"},
}


def _solve(v, p, *, div=False, inv=False, half=False, cm=False, same_lam=False, no_2pi=False, pi_lam=False,
           flip=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "vfork":
        lam = v["d"] if half else 2 * v["d"]
        if div:
            return sig(v["n"] / lam, n)  # v = n / lambda
        if inv:
            return sig(lam / v["n"], n)  # v = lambda / n
        return sig(v["n"] * lam, n)
    if ask == "freq":
        lam = v["lam_cm"] if cm else v["lam_cm"] / 100
        if div:
            return sig(v["v"] * lam, n)  # from v = n / lambda
        if inv:
            return sig(lam / v["v"], n)  # from v = lambda / n
        return sig(v["v"] / lam, n)
    if ask == "lam2":
        if same_lam:
            return sig(v["v1"] / v["n"], n)  # keeps the wavelength of the first medium
        if div:
            return sig(v["n"] / v["v2"], n)
        if inv:
            return sig(v["v2"] * v["n"], n)
        return sig(v["v2"] / v["n"], n)
    if ask == "phase":
        r = nsimplify(v["dx"] / v["lam"])
        if no_2pi:
            return r
        if pi_lam:
            return pi * r
        if flip:
            return 2 * pi / r
        return 2 * pi * r
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
    "C01-M1": _m("C01-M1"),  # sound in air is transverse, like the string's vibration
    "C01-M2": _m("C01-M2"),  # the wave carries the air itself to the listener
    "C01-M3": _m("C01-M3"),  # the wave in air is stationary, like the one on the string
    "C01-M4": _m("C01-M4", ("vfork", "freq", "lam2"), div=True),  # v = n / lambda
    "C01-M5": _m("C01-M5", ("vfork", "freq", "lam2"), inv=True),  # v = lambda / n
    "C01-M6": _m("C01-M6", ("vfork",), half=True),  # compression to the next rarefaction taken as a wavelength
    "C01-M7": _m("C01-M7", ("freq",), cm=True),  # leaves the wavelength in cm
    "C01-M8": _m("C01-M8", ("lam2",), same_lam=True),  # thinks the wavelength stays the same in the new medium
    "C01-M9": _m("C01-M9", ("phase",), no_2pi=True),  # gives the fraction of a wavelength as the phase
    "C01-M10": _m("C01-M10", ("phase",), pi_lam=True),  # takes one wavelength as a phase difference of pi
    "C01-M11": _m("C01-M11", ("phase",), flip=True),  # divides lambda by dx
}
