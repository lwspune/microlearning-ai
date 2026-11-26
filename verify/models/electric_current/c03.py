"""C03 Resistivity and temperature: answer models (the key, and one per misconception).

R = rho L / A; a metal's resistance R_T = R_0 (1 + alpha T); between two temperatures
alpha = (R2 - R1) / (R1 (T2 - T1)).
params["ask"]:
  "stretch": a wire stretched until its radius is 1/k of before; new resistance as a multiple of R (input k);
  "rho":     resistivity from R, length L m and diameter d mm (inputs R, L, d);
  "rail":    resistance from rho, length L km and area A cm^2 (inputs rho, L, A);
  "RT":      resistance at T deg C from R0 at 0 deg C and alpha (inputs R0, a, T);
  "alpha":   temperature coefficient from R1 at T1 and R2 at T2 (inputs R1, T1, R2, T2);
  "ratio":   R1 : R3 for wires of one metal with masses m1, m3 and lengths l1, l3 (inputs m1, m3, l1, l3).
"""
from sympy import Symbol, pi

from physics import sig

R = Symbol("R")


def _solve(v, p, *, diam=False, plain=False, raw=False, inv=False, area_only=False, by_r=False, same=False,
           rise=False, falls=False, add=False, hot=False, t2=False, no_r1=False, l_only=False, swap=False, l_over_m=False):
    ask = p["ask"]
    if ask == "stretch":
        k = v["k"]
        if same:
            return R
        area = k if by_r else k**2  # A falls by this factor
        length = 1 if area_only else k**2  # volume fixed: L grows as A falls
        return area * length * R
    if ask == "rho":
        rr = v["d"] if diam else v["d"] / 2
        A = pi * rr**2 * (10**-3 if plain else 10**-6)
        return sig(v["R"] * v["L"] / A if inv else v["R"] * A / v["L"])
    if ask == "rail":
        L = v["L"] if raw else v["L"] * 1000
        A = v["A"] * (10**-2 if plain else 10**-4)
        return sig(v["rho"] * A / L if inv else v["rho"] * L / A)
    if ask == "RT":
        R0, a, T = v["R0"], v["a"], v["T"]
        if rise:
            return sig(R0 * a * T)
        if falls:
            return sig(R0 * (1 - a * T))
        if add:
            return sig(R0 + a * T)
        return sig(R0 * (1 + a * T))
    if ask == "alpha":
        dR = v["R2"] - v["R1"]
        dT = v["T2"] if t2 else v["T2"] - v["T1"]
        ref = v["R2"] if hot else v["R1"]
        return sig(dR / dT if no_r1 else dR / (ref * dT))
    if ask == "ratio":
        def res(m, l):
            if l_only:
                return l
            if swap:
                return m**2 / l
            if l_over_m:
                return l / m
            return l**2 / m
        return sig(res(v["m1"], v["l1"]) / res(v["m3"], v["l3"]))
    raise ValueError(ask)


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
    "C03-M1": _m(("rho",), diam=True),  # uses the diameter as the radius
    "C03-M2": _m(("rho", "rail"), plain=True),  # converts mm^2 or cm^2 with the plain factor
    "C03-M3": _m(("rail",), raw=True),  # leaves the length in km
    "C03-M4": _m(("rho", "rail"), inv=True),  # turns R = rho L / A upside down
    "C03-M5": _m(("stretch",), area_only=True),  # forgets the wire gets longer
    "C03-M6": _m(("stretch",), by_r=True),  # lets the area fall like the radius
    "C03-M7": _m(("stretch",), same=True),  # confuses resistance with resistivity
    "C03-M8": _m(("RT",), rise=True),  # gives only the increase
    "C03-M9": _m(("RT",), falls=True),  # thinks a metal's resistance falls when hot
    "C03-M10": _m(("RT",), add=True),  # adds alpha T to R0
    "C03-M11": _m(("alpha",), hot=True),  # divides by the hot resistance
    "C03-M12": _m(("alpha",), t2=True),  # uses T2 for the temperature change
    "C03-M13": _m(("alpha",), no_r1=True),  # forgets to divide by R1
    "C03-M14": _m(("ratio",), l_only=True),  # R proportional to length only
    "C03-M15": _m(("ratio",), swap=True),  # swaps mass and length
    "C03-M16": _m(("ratio",), l_over_m=True),  # takes the area proportional to the mass
}
