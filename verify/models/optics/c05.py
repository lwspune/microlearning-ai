"""C05 Spherical surfaces and lenses: answer models (the key, and one per misconception).

Cartesian sign convention, light from the left, a real object at u = -d. Thin lens: 1/v - 1/u = 1/f, m = v/u;
lens maker's equation 1/f = (n - 1)(1/R1 - 1/R2); power P = 1/f (f in metres, P in dioptre);
single surface: (n2 - n1)/R = n2/v - n1/u, n1 the medium of the real object.
params["ask"]:
  "v":      signed image distance (inputs f signed, d);
  "height": signed image height of an object h tall (inputs f, d, h);
  "maker":  focal length from n, R1, R2 (signed) (inputs n, R1, R2);
  "bubble": how far inside a glass sphere (index n, radius R) a bubble d from the near surface appears (inputs n, R, d);
  "power":  power in dioptre of a lens of focal length f cm (input f);
  "fR":     named: which lens has f numerically equal to R.
"""
from sympy import Symbol

from physics import sig

NAMED = {"fR": {"key": "equiconvex_n15", "C05-M14": "planoconvex_n15", "C05-M15": "equiconvex_n2", "C05-M16": "no_lens_half"}}


def _v(f, u, mirror=False):
    return 1 / (1 / f - 1 / u) if mirror else 1 / (1 / f + 1 / u)


def _solve(v, p, *, mirror=False, flip=False, realneg=False, same_sign=False, use_n=False, no_n=False,
           flat=False, r_sign=False, times_n=False, m_mirror=False, m_inv=False, cm=False, m_units=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("v", "height"):
        f = -v["f"] if flip else v["f"]
        u = -v["d"]
        vv = _v(f, u, mirror)
        if ask == "v":
            return sig(-vv if realneg else vv, n)
        m = -vv / u if m_mirror else (u / vv if m_inv else vv / u)
        return sig(m * v["h"], n)
    if ask == "maker":
        R2 = -v["R2"] if same_sign else v["R2"]
        k = v["n"] if use_n else (1 if no_n else v["n"] - 1)
        return sig(1 / (k * (1 / v["R1"] - 1 / R2)), n)
    if ask == "bubble":
        N, R, d = v["n"], v["R"], v["d"]
        if flat:
            return sig(d / N, n)
        if times_n:
            return sig(d * N, n)
        Rs = R if r_sign else -R  # viewed through the far surface: its centre is on the object's side, R < 0
        inv_v = (1 - N) / Rs + N / (-d)
        return sig(-1 / inv_v, n)
    if ask == "power":
        f = v["f"]
        if cm:
            return sig(1 / f, n)
        if m_units:
            return sig(f / 100, n)
        return sig((-100 if flip else 100) / f, n)
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
    "C05-M1": _m("C05-M1", ("v", "height"), mirror=True),  # uses the mirror equation 1/v + 1/u = 1/f for a lens
    "C05-M2": _m("C05-M2", ("v", "power"), flip=True),  # gives f the wrong sign
    "C05-M3": _m("C05-M3", ("v",), realneg=True),  # thinks a real image has v < 0, as for a mirror
    "C05-M4": _m("C05-M4", ("maker",), same_sign=True),  # gives R1 and R2 of a biconvex lens the same sign
    "C05-M5": _m("C05-M5", ("maker",), use_n=True),  # uses n instead of n - 1
    "C05-M6": _m("C05-M6", ("maker",), no_n=True),  # leaves out the factor (n - 1)
    "C05-M7": _m("C05-M7", ("bubble",), flat=True),  # uses the flat-surface rule, depth / n
    "C05-M8": _m("C05-M8", ("bubble",), r_sign=True),  # gives R the wrong sign
    "C05-M9": _m("C05-M9", ("bubble",), times_n=True),  # multiplies the depth by n
    "C05-M10": _m("C05-M10", ("height",), m_mirror=True),  # uses the mirror's m = -v/u for a lens
    "C05-M11": _m("C05-M11", ("height",), m_inv=True),  # m = u/v, upside down
    "C05-M12": _m("C05-M12", ("power",), cm=True),  # puts f in cm into P = 1/f
    "C05-M13": _m("C05-M13", ("power",), m_units=True),  # gives the focal length in metres as the power
    "C05-M14": _m("C05-M14"),  # plano-convex, n = 1.5
    "C05-M15": _m("C05-M15"),  # equiconvex, n = 2
    "C05-M16": _m("C05-M16"),  # thinks a lens, like a mirror, has f = R/2
}
