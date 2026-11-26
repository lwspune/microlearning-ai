"""C06 Generators and back emf: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "arm":   the emf of a generator armature at the instant its moving side AB cuts the field at right angles (Solved
           Ex.12.3), in V. Inputs B (T), l_cm (length of AB), r_cm (its distance from the axis), rpm.
  "peak":  the peak emf N B A omega of a generator coil, in V. Inputs N, B (T), A_cm2 (area in cm^2), f (rev/s).
  "inst":  the emf when the coil's normal makes angle th (degrees) with B, in V. Inputs N, B, A (m^2), w (rad/s).
  "motor": the current in a motor, in A. Inputs V (supply), e (back emf), R (armature resistance).
  "feel":  a named answer (see NAMED).

The key works from Faraday's law: the flux linkage is N B A cos(omega t), so e = N B A omega sin(omega t), largest
when the coil's plane lies along B. A side of length l at distance r from the axis moves at v = omega r and gives
B l v. In a motor the back emf opposes the supply: I = (V - e)/R.
"""
from sympy import Integer, Symbol, cos, pi, sin

from physics import sig

NAMED = {
    # Turning a generator coil by hand, terminals open and then joined through a lamp.
    "feel": {"key": "harder_opposes", "C06-M9": "same_magnet", "C06-M11": "easier", "C06-M12": "steady_free"},
}


def _solve(v, p, *, flux=False, no_N=False, f_as_w=False, rpm_raw=False, add_back=False, no_back=False,
           back_only=False, cm_raw=False, steady=False):
    ask = p["ask"]
    if ask == "arm":
        if flux:
            return Integer(0)  # the flux through the coil is zero at this instant
        f = v["rpm"] if rpm_raw else v["rpm"] / 60
        w = f if f_as_w else 2 * pi * f
        speed = w * v["r_cm"] / 100
        return sig(v["B"] * v["l_cm"] / 100 * speed)
    if ask == "peak":
        A = v["A_cm2"] if cm_raw else v["A_cm2"] / 10**4
        w = v["f"] if f_as_w else 2 * pi * v["f"]
        return sig((1 if no_N else v["N"]) * v["B"] * A * w)
    if ask == "inst":
        e0 = (1 if no_N else v["N"]) * v["B"] * v["A"] * v["w"]
        th = v["th"] * pi / 180
        if steady:
            return sig(e0)
        return sig(e0 * (cos(th) if flux else sin(th)))
    if ask == "motor":
        V, e, R = v["V"], v["e"], v["R"]
        if add_back:
            return sig((V + e) / R)
        if no_back:
            return sig(V / R)
        if back_only:
            return sig(e / R)
        return sig((V - e) / R)
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
    "C06-M1": _m("C06-M1", ("arm", "inst"), flux=True),  # takes the emf to follow the flux (cos for sin)
    "C06-M2": _m("C06-M2", ("peak", "inst"), no_N=True),  # leaves out the number of turns
    "C06-M3": _m("C06-M3", ("arm", "peak"), f_as_w=True),  # uses f for omega
    "C06-M4": _m("C06-M4", ("arm",), rpm_raw=True),  # uses rev/min as rev/s
    "C06-M5": _m("C06-M5", ("motor",), add_back=True),  # adds the back emf to the supply
    "C06-M6": _m("C06-M6", ("motor",), no_back=True),  # ignores the back emf
    "C06-M7": _m("C06-M7", ("motor",), back_only=True),  # takes the back emf as what drives the current
    "C06-M8": _m("C06-M8", ("peak",), cm_raw=True),  # leaves the area in cm^2
    "C06-M9": _m("C06-M9"),  # thinks the magnet supplies the electrical energy
    "C06-M10": _m("C06-M10", ("inst",), steady=True),  # thinks a steady rotation gives a steady emf
    "C06-M11": _m("C06-M11"),  # thinks the induced current helps the coil round
    "C06-M12": _m("C06-M12"),  # thinks the opposing force acts only while the speed changes
}
