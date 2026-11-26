"""C12 Buoyancy and flotation: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "upthrust_is":  what the upward force of a fluid on an immersed body equals (a named answer);
  "balance":      a spring balance's reading for a block of mass m and density rho_b hung with a fraction
                  frac of its volume in a liquid of density rho_f (inputs m, rho_b, rho_f, frac, g);
  "float_height": the height under the surface of a floating block of height H (inputs H, rho_b, rho_f; any
                  consistent units, the answer in H's unit);
  "interface":    a body floating at the boundary of a lower liquid (rho_1) and an upper one (rho_2): the ratio
                  V_1 / V_2 of its volumes in the two (inputs rho_b, rho_1, rho_2);
  "coin":         the mass of a load put on a floating cube of edge a (density rho_b, in a liquid rho_f) that sinks
                  it a further dh (inputs a, dh, rho_b, rho_f in cm and g/cm^3; answer in g);
  "statement":    which statement about floating bodies is right (a named answer).

The key works from Archimedes' principle: the upthrust is the weight of the fluid displaced, V_sub rho_f g, and a
floating body sinks until that equals its weight.
"""
from sympy import Rational, Symbol

from physics import sig

NAMED = {
    # upthrust_is
    "displaced_weight": Symbol("displaced_weight"),
    "body_weight": Symbol("body_weight"),
    "whole_volume_fluid": Symbol("whole_volume_fluid"),
    "bottom_face_push": Symbol("bottom_face_push"),
    # statement
    "below_metacentre": Symbol("below_metacentre"),
    "heavy_sinks": Symbol("heavy_sinks"),
    "ice_raises_level": Symbol("ice_raises_level"),
    "below_buoyancy_centre": Symbol("below_buoyancy_centre"),
}


def _only(p, *asks):
    if p["ask"] not in asks:
        raise ValueError("does not apply to this item")


def _balance(v, *, frac=None, rho_up=None, reading_is_upthrust=False):
    m, rho_b, g = v["m"], v["rho_b"], v["g"]
    V = m / rho_b
    f = v["frac"] if frac is None else frac
    rho = v["rho_f"] if rho_up is None else rho_up
    up = f * V * rho * g
    return sig(up if reading_is_upthrust else m * g - up)


def _interface_ratio(x):
    """V_1 / V_2 from the fraction x in the lower liquid."""
    return x / (1 - x)


def key(v, p):
    ask = p["ask"]
    if ask == "upthrust_is":
        return NAMED["displaced_weight"]
    if ask == "statement":
        return NAMED["below_metacentre"]
    if ask == "balance":
        return _balance(v)
    if ask == "float_height":
        # weight H A rho_b g = upthrust h A rho_f g
        return sig(v["H"] * v["rho_b"] / v["rho_f"])
    if ask == "interface":
        # V rho_b = x V rho_1 + (1 - x) V rho_2
        x = (v["rho_b"] - v["rho_2"]) / (v["rho_1"] - v["rho_2"])
        return _interface_ratio(x)
    if ask == "coin":
        # the extra load is carried by the extra upthrust, a^2 dh rho_f g
        return sig(v["a"] ** 2 * v["dh"] * v["rho_f"])
    raise ValueError(f"unknown ask {ask}")


def m1(v, p):
    """Takes the upthrust to be the body's own weight, whether it floats or not."""
    _only(p, "upthrust_is")
    return NAMED["body_weight"]


def m2(v, p):
    """Takes the displaced volume as the body's whole volume, even when only part of it is under the surface."""
    ask = p["ask"]
    if ask == "upthrust_is":
        return NAMED["whole_volume_fluid"]
    if ask == "balance":
        return _balance(v, frac=1)
    if ask == "float_height":
        return sig(v["H"])
    if ask == "coin":
        # the load sinks the cube completely: load + cube = a^3 rho_f
        return sig(v["a"] ** 3 * (v["rho_f"] - v["rho_b"]))
    raise ValueError("does not apply to this item")


def m3(v, p):
    """Counts only the fluid's upward push on the bottom face, forgetting the push down on the top face."""
    _only(p, "upthrust_is")
    return NAMED["bottom_face_push"]


def m4(v, p):
    """Swaps the parts: gives the part above the surface (or in the upper liquid) for the part in the lower one."""
    ask = p["ask"]
    if ask == "float_height":
        return sig(v["H"] * (1 - v["rho_b"] / v["rho_f"]))
    if ask == "interface":
        x = (v["rho_1"] - v["rho_b"]) / (v["rho_1"] - v["rho_2"])
        return _interface_ratio(x)
    raise ValueError("does not apply to this item")


def m5(v, p):
    """Takes the fraction submerged as the body's relative density, rho_b / rho_water, whatever the fluid(s)."""
    ask = p["ask"]
    if ask == "float_height":
        return sig(v["H"] * v["rho_b"] / v["rho_w"])
    if ask == "interface":
        return _interface_ratio(v["rho_b"] / v["rho_w"])
    raise ValueError("does not apply to this item")


def m6(v, p):
    """Mixes up the balance reading in the liquid (apparent weight) with the upthrust (the loss of weight)."""
    _only(p, "balance")
    return _balance(v, reading_is_upthrust=True)


def m7(v, p):
    """Thinks a body sinks because it is heavy, not because it is denser than the fluid."""
    _only(p, "statement")
    return NAMED["heavy_sinks"]


def m8(v, p):
    """Thinks the water level rises when floating ice melts."""
    _only(p, "statement")
    return NAMED["ice_raises_level"]


def m9(v, p):
    """Thinks a floating body is stable only when its centre of gravity is below its centre of buoyancy."""
    _only(p, "statement")
    return NAMED["below_buoyancy_centre"]


def m10(v, p):
    """Uses the body's density in place of the fluid's in V rho g."""
    ask = p["ask"]
    if ask == "balance":
        return _balance(v, rho_up=v["rho_b"])
    if ask == "coin":
        return sig(v["a"] ** 2 * v["dh"] * v["rho_b"])
    raise ValueError("does not apply to this item")


def m11(v, p):
    """Thinks a body at the boundary of two liquids always sits half in each."""
    _only(p, "interface")
    return _interface_ratio(Rational(1, 2))


def m12(v, p):
    """Gives the whole upthrust to the added load, forgetting it also holds up the floating body."""
    _only(p, "coin")
    h0 = v["a"] * v["rho_b"] / v["rho_f"]
    return sig(v["a"] ** 2 * (h0 + v["dh"]) * v["rho_f"])


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6,
          "C12-M7": m7, "C12-M8": m8, "C12-M9": m9, "C12-M10": m10, "C12-M11": m11, "C12-M12": m12}
