"""C07 A charge in a uniform electric field: answer models (the key, and one per misconception).

F = qE, a = qE/m; from rest through d, (1/2)mv^2 = qEd = qV; fired across the field, x = ut, y = (1/2)(qE/m)t^2,
and the exit velocity makes tan(theta) = v_y/u with the entry direction; a bob in a horizontal field hangs at
tan(theta) = qE/mg with tension sqrt((mg)^2 + (qE)^2).
params["ask"]:
  "stop":    distance a charge q (uC) of mass m (mg), fired at u against a field E, goes before it stops
             (inputs m_mg, q_uC, E, u);
  "angle":   angle of deviation of an electron that enters plates L cm long with kinetic energy K eV, in a
             field E (inputs E, L_cm, K_eV); e cancels: tan(theta) = eEL / (m u^2) = EL / (2 K_eV);
  "rest":    speed of an electron released from rest at one plate, plates d cm apart at V volts (inputs V, d_cm);
  "wall":    charge, in uC, on a bob of m grams hanging on a thread L cm long, x cm from a charged wall whose
             field E is horizontal (inputs m_g, E, L_cm, x_cm, g);
  "tension": tension in the thread of a bob of m grams and charge q uC at rest in a horizontal field E
             (inputs m_g, q_uC, E);
  "pair":    named answer: an electron and a proton released from rest through the same distance.
"""
from sympy import Rational, Symbol, atan, sqrt

from physics import BOOK, sig

NAMED = {
    "pair": {"key": "equal_energy", "C07-M1": "same_speed", "C07-M11": "root_missed", "C07-M9": "both_along_field"},
}

E_CH = BOOK["e"]
M_E = BOOK["m_e"]
G = BOOK["g"]
CM = Rational(1, 100)
MICRO = Rational(1, 10**6)


def _solve(v, p, *, no_mass=False, no_half=False, unit=False, chord=False, swap=False, add=False, same_t=False,
           cos_t=False, use_sin=False, no_root=False, e_for_v=False):
    ask = p["ask"]
    if ask == "stop":
        m = v["m_mg"] * (Rational(1, 1000) if unit else MICRO)  # mg read as g
        F = v["q_uC"] * MICRO * v["E"]
        a = F if no_mass else F / m
        return sig(v["u"] ** 2 / (a if no_half else 2 * a))
    if ask == "angle":
        L = v["L_cm"] * CM
        # K = (1/2) m u^2, so m u^2 = 2K (K, in joule, is K_eV times e; e cancels against the force eE)
        mu2 = v["K_eV"] if no_half else 2 * v["K_eV"]
        t = v["E"] * L / mu2  # v_y / u
        if chord:
            t = t / 2  # y / L, the slope of the chord from entry to exit
        if swap:
            t = 1 / t
        return atan(t)
    if ask == "rest":
        V = v["V"]
        energy = E_CH * V / (v["d_cm"] * CM) if e_for_v else E_CH * V
        v2 = energy / M_E if no_half else 2 * energy / M_E
        return sig(v2 if no_root else sqrt(v2))
    if ask == "wall":
        m = v["m_g"] if unit else v["m_g"] * Rational(1, 1000)
        s = v["x_cm"] / v["L_cm"]
        tan = s if use_sin else s / sqrt(1 - s**2)
        if swap:
            tan = 1 / tan
        return sig(m * v["g"] * tan / v["E"] / MICRO)
    if ask == "tension":
        mg = v["m_g"] * Rational(1, 1000) * G
        qE = v["q_uC"] * MICRO * v["E"]
        T = sqrt(mg**2 + qE**2)
        if add:
            return sig(mg + qE)
        if same_t:
            return sig(mg)
        if cos_t:
            return sig(mg * mg / T)  # mg cos(theta), with cos(theta) = mg / T
        return sig(T)
    raise ValueError("unknown ask")


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
    "C07-M1": _m("C07-M1", ("stop",), no_mass=True),  # takes the acceleration as qE, ignoring the mass
    "C07-M2": _m("C07-M2", ("stop", "angle", "rest"), no_half=True),  # drops a 1/2 (s = u^2/a, K = m u^2)
    "C07-M3": _m("C07-M3", ("stop", "wall"), unit=True),  # mass to kg wrongly (mg as g, g left as kg)
    "C07-M4": _m("C07-M4", ("angle",), chord=True),  # exit direction along the chord, tan = y/L
    "C07-M5": _m("C07-M5", ("angle", "wall"), swap=True),  # angle from the wrong line: components swapped
    "C07-M6": _m("C07-M6", ("tension",), add=True),  # adds the forces as numbers, T = mg + qE
    "C07-M7": _m("C07-M7", ("tension",), same_t=True),  # a sideways force leaves the tension at mg
    "C07-M8": _m("C07-M8", ("tension",), cos_t=True),  # T = mg cos(theta), as at the end of a swing
    "C07-M9": _m("C07-M9"),  # every charge is pushed along E
    "C07-M10": _m("C07-M10", ("wall",), use_sin=True),  # takes sin(theta) = x/L as tan(theta)
    "C07-M11": _m("C07-M11", ("rest",), no_root=True),  # forgets the square root, v^2 for v (v ~ 1/m)
    "C07-M12": _m("C07-M12", ("rest",), e_for_v=True),  # energy qE for qV, the field for the voltage
}
