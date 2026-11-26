"""C07 Energy and momentum of EM waves: answer models (the key, and one per misconception).

Average energy density u = (1/2) eps0 E0^2 = B0^2 / (2 mu0), shared equally by the two fields; intensity I = u c;
a point source of power P gives I = P / (4 pi r^2); radiation pressure I/c absorbed, 2I/c reflected.
params["ask"]:
  "intensity": intensity of a wave with electric amplitude E0 (inputs E0);
  "pressure":  radiation pressure at distance r from a point source of power P, on a surface params["surface"]
               ("absorb" or "reflect") (inputs P, r);
  "area":      area of an absorbing surface feeling force F from light of flux I in W/cm^2 shone for t seconds
               (inputs F, I, t);
  "b_peak":    peak magnetic field at distance r from a bulb of power P and efficiency eta (inputs P, eta, r);
  "cylinder":  electric amplitude that puts the same energy into a cylinder of the same length whose diameter is
               k times the first one's, where the first has amplitude E0 (inputs E0, k);
  "surfaces":  named.
"""
from sympy import Integer, Symbol, pi, sqrt

from physics import BOOK, sig

EPS0, MU0, C = BOOK["eps0"], BOOK["mu0"], BOOK["c"]
NAMED = {
    "surfaces": {"key": "white_most", "C07-M3": "all_equal", "C07-M6": "no_pressure", "C07-M8": "black_most"},
}


def _solve(v, p, *, share=Integer(1) / 2, no_c=False, push=None, one_over_r=False, zero=False,
           no_cm=False, times_t=False, amp_power=2, area_power=2):
    ask, n = p["ask"], p.get("sf", 3)
    if zero:
        return Integer(0)
    if ask == "intensity":
        u = share * EPS0 * v["E0"] ** 2  # average energy density
        return sig(u if no_c else u * C, n)
    if ask in ("pressure", "b_peak"):
        power = v["P"] * v.get("eta", 1)
        area = 4 * pi * (v["r"] if one_over_r else v["r"] ** 2)
        intensity = power / area
        if ask == "b_peak":
            # intensity = share * eps0 * E0^2 * c, and B0 = E0 / c
            e0 = sqrt(intensity / (share * EPS0 * C))
            return sig(e0 / C, n)
        f = push if push is not None else (2 if p["surface"] == "reflect" else 1)
        return sig(f * intensity / C, n)
    if ask == "area":
        flux = v["I"] if no_cm else v["I"] * 10**4  # W/cm^2 to W/m^2
        f = push if push is not None else 1
        pressure = f * flux / C
        if times_t:
            pressure = pressure * v["t"]  # the momentum delivered per unit area, taken as the force per unit area
        return sig(v["F"] / pressure, n)
    if ask == "cylinder":
        # same energy, same length: u * area is fixed, u goes as E0^amp_power, area as diameter^area_power
        return sig(v["E0"] * (1 / v["k"]) ** (Integer(area_power) / amp_power), n)
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


def _m3(v, p):
    """Reflection makes no difference: I/c on any surface."""
    if p["ask"] == "pressure" and p["surface"] == "absorb":
        raise ValueError("gives the key on an absorbing surface")
    return _m("C07-M3", ("pressure",), push=1)(v, p)


def _m8(v, p):
    """An absorbing surface is pushed harder: 2I/c absorbed, I/c reflected."""
    if p["ask"] in ("pressure", "area"):
        absorb = p["ask"] == "area" or p["surface"] == "absorb"
        return _solve(v, p, push=2 if absorb else 1)
    return _m("C07-M8")(v, p)


MODELS = {
    "key": key,
    "C07-M1": _m("C07-M1", ("intensity", "b_peak"), share=Integer(1)),  # drops the 1/2: eps0 E0^2 as the average
    "C07-M2": _m("C07-M2", ("intensity", "b_peak"), share=Integer(1) / 4),  # counts the electric field's energy only
    "C07-M3": _m3,  # reflection makes no difference
    "C07-M4": _m("C07-M4", ("intensity",), no_c=True),  # gives the energy density for the intensity
    "C07-M5": _m("C07-M5", ("pressure", "b_peak"), one_over_r=True),  # intensity falls as 1/r
    "C07-M6": _m("C07-M6", ("pressure",), zero=True),  # massless light carries no momentum
    "C07-M7": _m("C07-M7", ("cylinder",), amp_power=1),  # energy goes as the amplitude, not its square
    "C07-M8": _m8,  # an absorbing surface is pushed harder
    "C07-M9": _m("C07-M9", ("area",), no_cm=True),  # leaves W/cm^2 unconverted
    "C07-M10": _m("C07-M10", ("area",), times_t=True),  # takes the momentum delivered, U/c, as the force
    "C07-M11": _m("C07-M11", ("cylinder",), area_power=1),  # takes the cross-section as going with the diameter
    "C07-M12": _m("C07-M12", ("cylinder",), area_power=0),  # same energy means the same field: forgets the volume
}
