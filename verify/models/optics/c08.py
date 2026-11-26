"""C08 Optical instruments: answer models (the key, and one per misconception).

Simple microscope: M = 1 + D/f with the image at D (largest), D/f with it at infinity (smallest); D = 25 cm.
Compound microscope, final image at D: M = m_o M_e, m_o = v_o / |u_o|, M_e = 1 + D/f_e, L = v_o + |u_e|.
Astronomical telescope, normal adjustment: M = f_o / f_e, L = f_o + f_e.
params["ask"]:
  "smax": largest magnifying power of a lens of focal length f cm (input f);
  "smin": smallest magnifying power of a reading lens of power P dioptre (input P);
  "tele": magnifying power from f_o and the tube length L, in m (inputs fo, L);
  "comp": magnifying power of a compound microscope, final image at D (inputs fe, fo, L in cm);
  "best": named answer.
"""
from sympy import Integer, Symbol

from physics import sig

D = Integer(25)
NAMED = {"best": {"key": "image_at_D", "C08-M9": "object_at_F", "C08-M10": "object_close", "C08-M11": "object_at_2F"}}


def _solve(v, p, *, no_one=False, inv=False, metres=False, add_one=False, flip=False, by_L=False, add=False, vo_L=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("smax", "smin"):
        f = v["f"] if ask == "smax" else 100 / v["P"]
        if inv:
            r = f / D
        elif metres:
            r = D / (f / 100)
        else:
            r = D / f
        one = (ask == "smax" and not no_one) or (ask == "smin" and add_one)
        return sig(1 + r if one else r, n)
    if ask == "tele":
        fo, L = v["fo"], v["L"]
        fe = L - fo
        if by_L:
            return sig(fo / L, n)
        if flip:
            return sig(fe / fo, n)
        return sig(1 + fo / fe if add_one else fo / fe, n)
    if ask == "comp":
        fe, fo, L = v["fe"], v["fo"], v["L"]
        ue = 1 / (1 / D + 1 / fe)
        Me = D / fe if no_one else 1 + D / fe
        vo = L if vo_L else L - ue
        uo = 1 / (1 / fo - 1 / vo)
        mo = vo / uo
        return sig(mo + Me if add else mo * Me, n)
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
    "C08-M1": _m("C08-M1", ("smax", "comp"), no_one=True),  # uses D/f where the image is at D
    "C08-M2": _m("C08-M2", ("smax", "smin"), inv=True),  # f/D, the ratio upside down
    "C08-M3": _m("C08-M3", ("smax", "smin"), metres=True),  # f in metres with D in cm
    "C08-M4": _m("C08-M4", ("smin", "tele"), add_one=True),  # adds 1 where the image is at infinity
    "C08-M5": _m("C08-M5", ("tele",), flip=True),  # f_e / f_o
    "C08-M6": _m("C08-M6", ("tele",), by_L=True),  # divides f_o by the tube length
    "C08-M7": _m("C08-M7", ("comp",), add=True),  # adds the two magnifications
    "C08-M8": _m("C08-M8", ("comp",), vo_L=True),  # takes the objective's image distance as the tube length
    "C08-M9": _m("C08-M9"),  # thinks the object at the focus gives the biggest image
    "C08-M10": _m("C08-M10"),  # thinks the object as close as possible to the lens is best
    "C08-M11": _m("C08-M11"),  # thinks the object at 2F is best
}
