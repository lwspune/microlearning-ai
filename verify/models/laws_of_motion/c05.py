"""C05 Collisions: answer models (the key, and one per misconception).

All collisions are head-on. params["ask"]:
  "embed":   percentage of kinetic energy lost when a bullet of m_g grams sticks in a block of M kg at rest (inputs m_g, M);
  "bounce":  coefficient of restitution of a ball that keeps the fraction f of its kinetic energy at each bounce (input f);
  "marbles": speed, in m/s, of a marble at rest struck by an identical one at u m/s, restitution e (inputs u, e);
  "find_e":  coefficient of restitution: a marble 2m moving at u1 is caught up by a marble m at u2 > u1, and the heavier
             one then moves at v1 (inputs u1, u2, v1);
  "gun":     average force, in N, on a fixed wall hit at right angles by bullets of m_g grams, rate per second, at u m/s,
             rebounding with restitution e (inputs m_g, rate, u, e).

The key works from conservation of momentum and e = (v2 - v1) / (u1 - u2).
"""
from sympy import Integer, Rational, sqrt

from physics import sig


def _solve(v, p, *, k_kept=False, half=False, inverse_m=False, k_ratio=False, k_lost=False, invert=False,
           together=False, elastic=False, eu=False, add=False, one_body=False, stop=False, subtract=False,
           per_bullet=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "embed":
        m, M = v["m_g"] / 1000, v["M"]
        if k_kept:
            return Integer(0)
        if half:
            return Integer(50)
        return sig(100 * (m if inverse_m else M) / (m + M), n)
    if ask == "bounce":
        f = v["f"]
        if k_ratio:
            return sig(f, n)
        if k_lost:
            return sig(1 - f, n)
        return sig(1 / sqrt(f) if invert else sqrt(f), n)
    if ask == "marbles":
        u, e = v["u"], v["e"]
        if together:
            return sig(u / 2, n)
        if elastic:
            return sig(u, n)
        if eu:
            return sig(e * u, n)
        return sig((1 + e) * u / 2, n)
    if ask == "find_e":
        u1, u2, v1 = v["u1"], v["u2"], v["v1"]
        v2 = 2 * u1 + u2 - 2 * v1  # 2m u1 + m u2 = 2m v1 + m v2
        if one_body:
            return sig(v2 / u2, n)
        sep, app = v1 - v2, (u2 + u1 if add else u2 - u1)
        return sig(app / sep if invert else sep / app, n)
    if ask == "gun":
        m, u, e = v["m_g"] / 1000, v["u"], v["e"]
        dv = u if stop else (u * (1 - e) if subtract else u * (1 + e))
        return sig(m * dv * (1 if per_bullet else v["rate"]), n)
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
    "C05-M1": _m(("embed", "marbles"), k_kept=True, elastic=True),  # kinetic energy conserved in every collision
    "C05-M2": _m(("find_e", "gun"), add=True, subtract=True),  # ignores directions: adds or subtracts speeds wrongly
    "C05-M3": _m(("bounce",), k_ratio=True),  # e is the fraction of kinetic energy kept
    "C05-M4": _m(("bounce",), k_lost=True),  # uses the fraction of kinetic energy lost
    "C05-M5": _m(("bounce", "find_e"), invert=True),  # turns the ratio upside down
    "C05-M6": _m(("marbles",), together=True),  # identical marbles move off together at u/2
    "C05-M7": _m(("marbles",), eu=True),  # the struck marble moves off at e u
    "C05-M8": _m(("gun",), stop=True),  # ignores the rebound
    "C05-M9": _m(("gun",), per_bullet=True),  # forgets the firing rate
    "C05-M10": _m(("embed",), half=True),  # half the kinetic energy is always lost when bodies stick
    "C05-M11": _m(("embed",), inverse_m=True),  # puts the bullet's mass on top: m / (m + M)
    "C05-M12": _m(("find_e",), one_body=True),  # e from one body's speeds, as for a ball on a floor
}
