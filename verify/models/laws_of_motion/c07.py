"""C07 Torque, couples and equilibrium: answer models (the key, and one per misconception).

params["ask"]:
  "spanner": torque, in N m, of F N applied r_cm cm from the axis at th degrees to the spanner (inputs F, r_cm, th);
  "rod":     ratio T_near / T_far of the tensions in the two vertical end strings of a uniform rod of mass mr, with a
             boy of mass mb hanging at the fraction f of its length from the nearer end (inputs mr, mb, f);
  "plank":   how far, in m, a person of mm kg can walk from the first pivot before a uniform plank of length L m and mp kg,
             resting on pivots a m from each end, topples (inputs L, mp, a, mm);
  "ladder":  how far, in m, a monkey of m kg can climb along a uniform ladder of length L m and M kg whose foot is b m
             from a smooth wall, the ground giving friction up to mu times its normal reaction (inputs L, b, M, m, mu, g);
  "couple":  the total moment of a couple F, d apart, about an axis a from the nearer force (a symbolic answer).

The key works from net force = 0 and net torque = 0 (moments about a convenient point), tau = r F sin(theta).
"""
from sympy import Integer, Rational, Symbol, cos, pi, sin, sqrt

from physics import sig


def _solve(v, p, *, no_sin=False, cos_=False, cm=False, no_body=False, invert=False, all_near=False, past=False,
           end_arm=False, no_load=False, zero=False, add=False, far=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "spanner":
        th = v["th"] * pi / 180
        r = v["r_cm"] * (1 if cm else Rational(1, 100))
        return sig(r * v["F"] * (1 if no_sin else (cos(th) if cos_ else sin(th))), n)
    if ask == "rod":
        mr, mb, f = v["mr"], v["mb"], v["f"]
        w = 0 if no_body else mr
        if all_near:
            near, far_ = w / 2 + mb, w / 2
        else:
            near = w / 2 + mb * (1 - f)  # moments about the far end
            far_ = w + mb - near
        return sig(far_ / near if invert else near / far_, n)
    if ask == "plank":
        L, mp, a, mm = v["L"], v["mp"], v["a"], v["mm"]
        if mp * (L / 2 - a) / mm >= a:
            raise ValueError("the plank would not topple")
        arm = L / 2 if end_arm else L / 2 - a
        d = 0 if no_body else mp * arm / mm  # beyond the second pivot
        return sig(d if past else L - 2 * a + d, n)
    if ask == "ladder":
        L, b, M, m, mu, g = v["L"], v["b"], v["M"], v["m"], v["mu"], v["g"]
        h = sqrt(L**2 - b**2)
        c = h / L if cos_ else b / L  # horizontal arm per unit length along the ladder
        R = mu * (M if no_load else M + m) * g  # wall reaction = largest friction
        own = 0 if no_body else M * g * c * L / 2
        return sig((R * h - own) / (m * g * c), n)
    if ask == "couple":
        F, d, a = Symbol("F"), Symbol("d"), Symbol("a")
        if zero:
            return Integer(0)
        if add:
            return F * (2 * a + d)
        if far:
            return F * (a + d)
        return F * (a + d) - F * a
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
    "C07-M1": _m(("spanner",), no_sin=True),  # tau = r F, ignoring the angle
    "C07-M2": _m(("spanner", "ladder"), cos_=True),  # takes the wrong component (cos for sin, height for base)
    "C07-M3": _m(("rod", "plank", "ladder"), no_body=True),  # ignores the body's own weight
    "C07-M4": _m(("rod",), invert=True),  # turns the ratio upside down
    "C07-M5": _m(("rod",), all_near=True),  # puts the boy's whole weight on the nearer string
    "C07-M6": _m(("spanner",), cm=True),  # leaves the distance in cm
    "C07-M7": _m(("plank",), past=True),  # gives only the distance past the second pivot
    "C07-M8": _m(("plank",), end_arm=True),  # measures the plank weight's arm from the end, not the pivot
    "C07-M9": _m(("ladder",), no_load=True),  # leaves the monkey out of the normal reaction
    "C07-M10": _m(("couple",), zero=True),  # a couple's forces cancel, so no torque
    "C07-M11": _m(("couple",), add=True),  # adds the two moments, ignoring their senses
    "C07-M12": _m(("couple",), far=True),  # counts only the farther force
}
