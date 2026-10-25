"""C02 Centripetal and centrifugal force: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "mu":       coefficient of static friction for a coin r_cm from the centre that just slips at n rpm (inputs r_cm, n, g);
  "n_slip":   least frequency, in rev/s, at which a coin r_cm from the centre slips (inputs mu, r_cm, g);
  "tension":  tension in a string of length L_cm whirling a mass m (kg) on a smooth table at n rev/s (inputs m, L_cm, n, g);
  "friction": friction on a coin of mass m (kg), r_cm from the centre of a turntable turning at w rad/s (inputs m, r_cm, w, g);
  "force":    which force keeps a coin turning with a turntable (a named answer).

The key writes Newton's second law along the radius, F_net = m a with a = omega^2 r towards the centre,
and solves it in sympy; it never uses the slipping formula the lesson derives.
"""
from sympy import Symbol, pi, solve

from physics import sig

_x = Symbol("x", positive=True)  # the unknown

FORCES = {
    "key": Symbol("friction_inward"),
    "C02-M4": Symbol("centrifugal_outward"),
    "C02-M5": Symbol("friction_plus_extra"),
    "C02-M6": Symbol("friction_tangent"),
}


def _radial(net_inward, m, a):
    """Solve net inward force = m a for the one unknown _x."""
    (x,) = solve(net_inward - m * a, _x)
    return x


def _solve(v, p, *, omega=lambda n: 2 * pi * n, metres=lambda c: c / 100, accel=lambda w, r: w ** 2 * r, extra=0):
    """The physics with a misconception's slip switched in. `extra` is a weight term wrongly added."""
    ask = p["ask"]
    if ask == "mu":
        w, r = omega(v["n"] / 60), metres(v["r_cm"])
        return sig(_radial(_x * v["g"], 1, accel(w, r)))  # limiting friction mu m g, per unit mass
    if ask == "n_slip":
        r = metres(v["r_cm"])
        w = _radial(v["mu"] * v["g"], 1, accel(_x, r))  # the omega at which friction is just enough
        return sig(w / omega(1))
    if ask == "tension":
        w, r = omega(v["n"]), metres(v["L_cm"])
        return sig(_radial(_x - extra * v["m"] * v["g"], v["m"], accel(w, r)))
    if ask == "friction":
        r = metres(v["r_cm"])
        return sig(_radial(_x - extra * v["m"] * v["g"], v["m"], accel(v["w"], r)))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    return FORCES["key"] if p["ask"] == "force" else _solve(v, p)


def _numeric(p):
    if p["ask"] == "force":
        raise ValueError("a named item")


def m1(v, p):
    """Doesn't square: takes the centripetal acceleration as omega r (or v / r)."""
    _numeric(p)
    return _solve(v, p, accel=lambda w, r: w * r)


def m2(v, p):
    """Leaves centimetres as they are instead of converting to metres."""
    _numeric(p)
    return _solve(v, p, metres=lambda c: c)


def m3(v, p):
    """Uses the frequency n where omega belongs: forgets omega = 2 pi n."""
    _numeric(p)
    if p["ask"] == "friction":
        raise ValueError("omega is given")
    return _solve(v, p, omega=lambda n: n)


def m4(v, p):
    """Treats the centrifugal force as a real force acting on the body, outwards."""
    if p["ask"] != "force":
        raise ValueError("only the named item")
    return FORCES["C02-M4"]


def m5(v, p):
    """Treats centripetal force as one more force on top of the real ones: adds the weight to what the string or friction supplies."""
    if p["ask"] == "force":
        return FORCES["C02-M5"]
    if p["ask"] not in ("tension", "friction"):
        raise ValueError("no weight to add in this item")
    return _solve(v, p, extra=1)


def m6(v, p):
    """Thinks friction on a turning body acts along the tangent, against its motion."""
    if p["ask"] != "force":
        raise ValueError("only the named item")
    return FORCES["C02-M6"]


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
