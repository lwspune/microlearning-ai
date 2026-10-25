"""C08 Simple pendulum: answer models (the key, and one per misconception).

params["ask"] picks the quantity:
  "F":    restoring force, in N, on a bob of m_g grams, x_cm from the mean, on a pendulum L_cm long (inputs m_g, x_cm, L_cm, g);
  "L1":   initial length, in m, of a pendulum whose period rises by pct per cent when lengthened by dL_cm (inputs pct, dL_cm);
  "mass": what doubling the bob's mass does to the period (a named answer);
  "PE":   potential energy, in J, at the extreme of a bob of m_g grams, amplitude A_cm, length L m (inputs m_g, A_cm, L, g);
  "T":    period, in s, of a pendulum L m long (inputs L, g).

The key resolves the weight along the arc: for small swings F = -mg sin(theta) ≈ -(mg/L) x, so the bob performs S.H.M.
with omega^2 = g/L and T = 2 pi sqrt(L/g); its potential energy at x is (1/2) m omega^2 x^2. It solves in sympy.
"""
from sympy import Rational, Symbol, pi, solve, sqrt

from physics import sig

_x = Symbol("x", positive=True)
half = Rational(1, 2)

NAMED = {"mass": {"key": "same", "C08-M7": "doubles", "C08-M8": "halves", "C08-M9": "times_root2"}}


def _solve(v, p, *, mg=False, mixed=False, grams=False, linear=False, square=False, new_len=False, mgL=False, cm=False,
           no_half=False, no_root=False, upside=False, no_2pi=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "F":
        m = v["m_g"] * (1 if grams else Rational(1, 1000))
        x = v["x_cm"] if mixed else v["x_cm"] / 100
        L = v["L_cm"] / 100
        if mg:
            return sig(m * v["g"], n)
        return sig(m * v["g"] * x / L, n)  # |F| = mg sin(theta) ≈ mg x / L
    if ask == "L1":
        f, dL = 1 + v["pct"] / 100, v["dL_cm"] / 100
        if new_len:
            (L1,) = solve(f**2 * _x - dL, _x)  # takes dL as the new length
        elif linear:
            (L1,) = solve(f * _x - (_x + dL), _x)  # T ∝ L
        elif square:
            (L1,) = solve(f * _x**2 - (_x + dL) ** 2, _x)  # T ∝ L^2
        else:
            (L1,) = solve(f**2 * _x - (_x + dL), _x)  # T ∝ sqrt(L): (T2/T1)^2 = L2/L1
        return sig(L1, n)
    if ask == "PE":
        m, A, L, g = v["m_g"] / 1000, v["A_cm"] * (1 if cm else Rational(1, 100)), v["L"], v["g"]
        if mgL:
            return sig(m * g * L, n)
        return sig((1 if no_half else half) * m * (g / L) * A**2, n)  # omega^2 = g / L
    if ask == "T":
        L, g = v["L"], v["g"]
        r = g / L if upside else L / g
        root = r if no_root else sqrt(r)
        return sig(root if no_2pi else 2 * pi * root, n)
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
    "C08-M1": _m("C08-M1", ("F",), mg=True),  # takes the restoring force as mg
    "C08-M2": _m("C08-M2", ("F",), mixed=True),  # mixes cm and m in x / L
    "C08-M3": _m("C08-M3", ("F",), grams=True),  # leaves the mass in grams
    "C08-M4": _m("C08-M4", ("L1",), linear=True),  # takes the period proportional to L
    "C08-M5": _m("C08-M5", ("L1",), square=True),  # takes the period proportional to L^2
    "C08-M6": _m("C08-M6", ("L1",), new_len=True),  # takes the 21 cm as the new length
    "C08-M7": _m("C08-M7"),  # thinks the period doubles with the mass
    "C08-M8": _m("C08-M8"),  # thinks a heavier bob swings faster
    "C08-M9": _m("C08-M9"),  # takes the period as proportional to sqrt(m), as for a spring
    "C08-M10": _m("C08-M10", ("PE",), mgL=True),  # uses m g L for the potential energy
    "C08-M11": _m("C08-M11", ("PE",), cm=True),  # leaves the amplitude in cm
    "C08-M12": _m("C08-M12", ("PE",), no_half=True),  # forgets the 1/2
    "C08-M13": _m("C08-M13", ("T",), no_root=True),  # leaves out the square root
    "C08-M14": _m("C08-M14", ("T",), upside=True),  # turns L/g upside down
    "C08-M15": _m("C08-M15", ("T",), no_2pi=True),  # forgets the 2 pi
}
