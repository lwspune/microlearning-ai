"""C12 Fresnel's biprism: answer models (the key, and one per misconception).

W = lambda D / d; the n-th bright band is n W from the centre. params["ask"]:
  "lam_lens": wavelength, in nm, from D_cm, the n-th band at x_cm, and images s_cm apart with a lens v_cm from
              the eyepiece (inputs D_cm, n, x_cm, s_cm, v_cm);
  "band":     distance, in cm, of band m when band n is at x_cm (inputs n, x_cm, m);
  "dW":       change, in mm, of the fringe width W_mm when lambda goes from l1 to l2 (inputs W_mm, l1, l2);
  "d_shift":  source separation, in mm, from lambda_A, the fringe-width change dW_mm when the screen moves dD_cm
              (inputs lam_A, dW_mm, dD_cm);
  "d_prism":  source separation, in mm, for a biprism of obtuse angle A_deg, index mu, a_cm from the slit (inputs).
"""
from sympy import Rational, pi

from physics import sig


def _solve(v, p, *, x_as_W=False, s_as_d=False, mag_up=False, inverse=False, same=False, gap=False, new_W=False,
           square=False, mm=False, invert=False, cm=False, full_angle=False, no_two=False, mu_whole=False):
    ask, n = p["ask"], p.get("sf", 3)
    if ask == "lam_lens":
        W = v["x_cm"] if x_as_W else v["x_cm"] / v["n"]
        u = v["D_cm"] - v["v_cm"]  # sources to lens
        mag = v["v_cm"] / u
        d = v["s_cm"] if s_as_d else (v["s_cm"] * mag if mag_up else v["s_cm"] / mag)
        return sig(W * d / v["D_cm"] * 10**7, n)  # cm to nm
    if ask == "band":
        if same:
            return sig(v["x_cm"], n)
        if inverse:
            return sig(v["x_cm"] * v["n"] / v["m"], n)
        xm = v["x_cm"] * v["m"] / v["n"]
        return sig(xm - v["x_cm"] if gap else xm, n)
    if ask == "dW":
        r = v["l2"] / v["l1"]
        f = 1 / r if inverse else (r**2 if square else r)
        W2 = v["W_mm"] * f
        return sig(W2 if new_W else abs(v["W_mm"] - W2), n)
    if ask == "d_shift":
        lam = v["lam_A"] * Rational(1, 10**10)
        dW = v["dW_mm"] * (1 if mm else Rational(1, 1000))
        dD = v["dD_cm"] * (1 if cm else Rational(1, 100))
        d = dW * dD / lam if invert else lam * dD / dW
        return sig(d * 1000, n)
    if ask == "d_prism":
        alpha = (180 - v["A_deg"]) * (1 if full_angle else Rational(1, 2)) * pi / 180
        dev = (v["mu"] if mu_whole else v["mu"] - 1) * alpha
        d = (1 if no_two else 2) * v["a_cm"] * dev
        return sig(d * 10, n)  # cm to mm
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
    "C12-M1": _m(("lam_lens",), x_as_W=True),  # takes the n-th band's distance as the fringe width
    "C12-M2": _m(("lam_lens",), s_as_d=True),  # takes the images' separation as d
    "C12-M3": _m(("lam_lens",), mag_up=True),  # multiplies by the magnification instead of dividing
    "C12-M4": _m(("band", "dW"), inverse=True),  # takes the distance as inversely proportional
    "C12-M5": _m(("band",), same=True),  # thinks the band's distance does not depend on its number
    "C12-M6": _m(("band",), gap=True),  # gives the gap between the two bands
    "C12-M7": _m(("dW",), new_W=True),  # gives the new fringe width instead of the change
    "C12-M8": _m(("dW",), square=True),  # takes W ∝ lambda^2
    "C12-M9": _m(("d_shift",), mm=True),  # leaves the change in fringe width in mm
    "C12-M10": _m(("d_shift",), invert=True),  # turns d = lambda dD / dW upside down
    "C12-M11": _m(("d_shift",), cm=True),  # leaves the screen's shift in cm
    "C12-M12": _m(("d_prism",), full_angle=True),  # takes the prism's small angle as 180° − A, not half of it
    "C12-M13": _m(("d_prism",), no_two=True),  # forgets the 2 in d = 2a(mu − 1)alpha
    "C12-M14": _m(("d_prism",), mu_whole=True),  # uses mu instead of mu − 1
}
