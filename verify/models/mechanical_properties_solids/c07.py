"""C07 Friction in solids: answer models (the key, and one per misconception).

Limiting friction F = mu_s N, kinetic friction mu_k N, N = mg on a level surface; angle of repose tan(theta) = mu_s.
params["ask"]:
  "limit":   least horizontal force that just moves a block of m kg, coefficient mu (inputs m, mu, g);
  "mu_s":    coefficient of static friction from the force Fs that just starts it (inputs m, Fs, Fk, g);
  "mu_k":    coefficient of kinetic friction from the force Fk that keeps it moving (inputs m, Fs, Fk, g);
  "adjust":  why static friction is self-adjusting (named);
  "laws":    what limiting friction depends on (named);
  "repose":  coefficient of static friction from the angle of repose theta, in degrees (input theta).
"""
from sympy import Symbol, cos, cot, pi, sin, tan

from physics import sig

NAMED = {
    "adjust": {"key": "matches_force", "C07-M7": "always_limit", "C07-M8": "depends_speed", "C07-M9": "no_limit"},
    "laws": {"key": "surfaces_and_N", "C07-M10": "contact_area", "C07-M11": "speed_dep", "C07-M12": "mass_only"},
}


def _solve(v, p, *, no_g=False, inv=False, normal=False, other=False, diff=False, fn=None):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "repose":
        t = v["theta"] * pi / 180
        return sig((fn or tan)(t), n)
    g = 1 if no_g else v["g"]
    N = v["m"] * g
    if ask == "limit":
        if normal:
            return sig(N, n)
        return sig(N / v["mu"] if inv else v["mu"] * N, n)
    F = {"mu_s": v["Fs"], "mu_k": v["Fk"]}[ask]
    if other:
        F = v["Fk"] if ask == "mu_s" else v["Fs"]
    if diff:
        F = v["Fs"] - v["Fk"]
    return sig(N / F if inv else F / N, n)


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
    "C07-M1": _m("C07-M1", ("limit", "mu_s", "mu_k"), no_g=True),  # takes the mass as the normal force
    "C07-M2": _m("C07-M2", ("limit", "mu_s"), inv=True),  # turns mu = F/N upside down
    "C07-M3": _m("C07-M3", ("limit",), normal=True),  # gives the normal force
    "C07-M4": _m("C07-M4", ("mu_s",), other=True),  # uses the force that keeps it moving
    "C07-M5": _m("C07-M5", ("mu_k",), other=True),  # uses the force that starts it
    "C07-M6": _m("C07-M6", ("mu_k",), diff=True),  # uses the difference of the two forces
    "C07-M7": _m("C07-M7"),  # thinks static friction is always mu_s N
    "C07-M8": _m("C07-M8"),  # thinks it adjusts to the speed
    "C07-M9": _m("C07-M9"),  # thinks it can match any force
    "C07-M10": _m("C07-M10"),  # thinks friction grows with the area of contact
    "C07-M11": _m("C07-M11"),  # thinks limiting friction depends on speed
    "C07-M12": _m("C07-M12"),  # thinks it depends on the mass, not the normal reaction
    "C07-M13": _m("C07-M13", ("repose",), fn=sin),  # uses sin
    "C07-M14": _m("C07-M14", ("repose",), fn=cos),  # uses cos
    "C07-M15": _m("C07-M15", ("repose",), fn=cot),  # uses cot
}
