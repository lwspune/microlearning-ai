"""C08 Potential energy and conservation of mechanical energy: answer models (the key, and one per misconception).

params["ask"]:
  "path":     W1 / W2, the work against gravity raising a body through h m straight up (W1) and up a smooth incline
              at th degrees to the horizontal (W2) (inputs h, th);
  "stretch":  the extra work to stretch a spring from x1 cm to x2 cm, in units of U, the energy it stores at x1
              (inputs x1, x2);
  "spring_k": spring constant, in N/m, when a block of m kg moving at u m/s compresses a spring by x_cm cm and its
              speed falls to f times u, on a smooth floor (inputs m, u, x_cm, f);
  "absorber": spring constant, in N/m, of a shock absorber compressed by x m while it stops a train of m kg moving at
              v_kmh km/h, with lost_pct percent of the kinetic energy lost to friction (inputs m, v_kmh, x, lost_pct);
  "force3d":  F_x, in N, at (px, py, pz) for U = a x^2 + b y^3 + c z, U in J and x, y, z in m (inputs a, b, c, px,
              py, pz);
  "nature":   what happens to a particle placed at rest at x0 m, where U = a3 x^3 + a2 x^2 + a1 x + a0 J (inputs
              a3, a2, a1, a0, x0): a named answer.

The key works from W = F s cos(theta) along each path, U = k x^2 / 2, K + U + (heat) conserved, F = -dU/dx, and the
sign of d2U/dx2 at a point where dU/dx = 0.
"""
from sympy import Rational, Symbol, cos, diff, pi, sin, sqrt

from physics import sig

X = Symbol("X")


def _u(v):
    return v["a3"] * X**3 + v["a2"] * X**2 + v["a1"] * X + v["a0"]


def _nature(v, *, swap=False, zero=False, height=False):
    U, x0 = _u(v), v["x0"]
    if zero:
        if U.subs(X, x0) == 0:
            raise ValueError("U is zero here")
        return Symbol("not_eq")
    if height:
        F = -U.subs(X, x0)  # the force read off the height of the curve
        if F == 0:
            raise ValueError("U is zero here")
        return Symbol("pushed_plus") if F > 0 else Symbol("pushed_minus")
    F = -diff(U, X).subs(X, x0)
    if F != 0:
        return Symbol("pushed_plus") if F > 0 else Symbol("pushed_minus")
    c = diff(U, X, 2).subs(X, x0)
    if c == 0:
        raise ValueError("needs a higher derivative")
    stable = c > 0
    if swap:
        stable = not stable
    return Symbol("stable") if stable else Symbol("unstable")


def _solve(v, p, *, path_len=False, half_force=False, cos_=False, diff_sq=False, final_only=False, linear=False,
           half_ke=False, all_ke=False, no_half=False, lost_part=False, plus=False, height=False, full=False,
           swap=False, zero=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "path":
        th = v["th"] * pi / 180
        h = v["h"]
        L = h / sin(th)  # length of the incline
        W1 = h  # per unit weight m g
        if path_len:
            W2 = L
        elif half_force:
            W2 = sin(th) * h
        elif cos_:
            W2 = cos(th) * L
        else:
            W2 = sin(th) * L
        return W1 / W2
    if ask == "stretch":
        x1, x2 = v["x1"], v["x2"]
        if diff_sq:
            return (x2 - x1) ** 2 / x1**2
        if final_only:
            return x2**2 / x1**2
        if linear:
            return (x2 - x1) / x1  # energy taken as growing in step with the stretch
        return (x2**2 - x1**2) / x1**2
    if ask == "spring_k":
        m, u, x, f = v["m"], v["u"], v["x_cm"] / 100, v["f"]
        K0 = m * u**2 / 2
        if half_ke:
            stored = (1 - f) * K0  # speed scaled by f taken to scale K by f
        elif all_ke:
            stored = K0
        else:
            stored = K0 - m * (f * u) ** 2 / 2
        return sig((1 if no_half else 2) * stored / x**2, n)
    if ask == "absorber":
        m, x, lost = v["m"], v["x"], v["lost_pct"] / 100
        K0 = m * (v["v_kmh"] * Rational(5, 18)) ** 2 / 2
        if all_ke:
            stored = K0
        elif lost_part:
            stored = lost * K0
        else:
            stored = (1 - lost) * K0
        return sig((1 if no_half else 2) * stored / x**2, n)
    if ask == "force3d":
        a, b, c, px, py, pz = (v[k] for k in ("a", "b", "c", "px", "py", "pz"))
        if height:
            return sig(-(a * px**2 + b * py**3 + c * pz), n)
        dUx, dUy, dUz = 2 * a * px, 3 * b * py**2, c
        if full:
            return sig(sqrt(dUx**2 + dUy**2 + dUz**2), n)
        return sig(dUx if plus else -dUx, n)
    if ask == "nature":
        return _nature(v, swap=swap, zero=zero, height=height)
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
    "C08-M1": _m(("path",), path_len=True),  # work against gravity = m g times the path length
    "C08-M2": _m(("path",), half_force=True),  # the incline's smaller force m g sin(theta) times the height
    "C08-M3": _m(("path",), cos_=True),  # m g cos(theta) as the component along the incline
    "C08-M4": _m(("stretch",), diff_sq=True),  # k (x2 - x1)^2 / 2
    "C08-M5": _m(("stretch",), final_only=True),  # k x2^2 / 2, forgetting the energy already stored
    "C08-M6": _m(("stretch",), linear=True),  # spring energy taken as proportional to the stretch
    "C08-M7": _m(("spring_k",), half_ke=True),  # halving the speed halves the kinetic energy
    "C08-M8": _m(("spring_k", "absorber"), all_ke=True),  # all the starting kinetic energy goes into the spring
    "C08-M9": _m(("spring_k", "absorber"), no_half=True),  # spring energy k x^2, without the 1/2
    "C08-M10": _m(("absorber",), lost_part=True),  # takes the part lost to friction as the part stored
    "C08-M11": _m(("force3d",), plus=True),  # F = +dU/dx
    "C08-M12": _m(("force3d", "nature"), height=True),  # reads the force off U itself: F = -U
    "C08-M13": _m(("force3d",), full=True),  # gives the size of the whole force, not its x-component
    "C08-M14": _m(("nature",), swap=True),  # stable at a maximum of U
    "C08-M15": _m(("nature",), zero=True),  # equilibrium only where U = 0
}
