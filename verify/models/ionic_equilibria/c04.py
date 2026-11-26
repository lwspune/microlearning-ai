"""C04 pH of weak acids and bases: answer models (the key, and one per misconception).

For a weak acid [H3O+] = alpha c = sqrt(Ka c); for a weak base [OH-] = alpha c. pH values to 2 decimal places.
params["ask"]:
  "H_weak":           [H3O+] from Ka and c (inputs Ka, c);
  "pH_weak":          pH from Ka and c (inputs Ka, c);
  "pH_from_pct":      pH of a weak acid from its percent dissociation (inputs pct, c);
  "pct_base_from_pH": percent dissociation of a weak base from the pH (inputs pH, c);
  "Ka_from_pH":       Ka of a weak acid from the pH (inputs pH, c), with 1 - alpha taken as 1.
"""
from sympy import Integer, floor, log, sqrt

from chemistry import sig


def _ph(x):
    """A pH-like value to 2 decimal places."""
    x = float(x)
    digits = max(1, len(str(int(abs(x))))) if abs(x) >= 1 else 0
    return sig(x, digits + 2)


def _h_weak(Ka, c, how):
    return {"key": sqrt(Ka * c), "M1": Ka * c, "M2": sqrt(Ka / c), "M3": c}.get(how)


def _solve(v, p, how):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("H_weak", "pH_weak"):
        h = _h_weak(v["Ka"], v["c"], how)
        if h is not None:
            return sig(h, n) if ask == "H_weak" else _ph(-log(h, 10))
    if ask == "pH_from_pct":
        pct, c = v["pct"], v["c"]
        h = {"key": pct / 100 * c, "M5": pct * c, "M3": c, "M4": pct / 100 * c}.get(how)
        if h is not None:
            ph = -log(h, 10)
            return _ph(14 - ph if how == "M4" else ph)
    if ask == "pct_base_from_pH":
        ph, c = v["pH"], v["c"]
        oh = Integer(10) ** (ph - 14)
        out = {"key": 100 * oh / c, "M5": oh / c, "M4": 100 * Integer(10) ** (-ph) / c, "M3": Integer(100)}.get(how)
        if out is not None:
            return sig(out, n)
    if ask == "Ka_from_pH":
        ph, c = v["pH"], v["c"]
        h = Integer(10) ** (-ph)
        if how == "M6":  # -4.4 read as -4 + 0.4
            i = floor(ph)
            h = Integer(10) ** (ph - i) * Integer(10) ** (-i)
        out = {"key": h**2 / c, "M1": h / c, "M2": h**2 * c, "M6": h**2 / c}.get(how)
        if out is not None:
            return sig(out, n)
    raise ValueError("does not apply to this item")


def key(v, p):
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C04-M1": _m("C04-M1"),  # drops the square root: [H3O+] = Ka c, and so Ka = [H3O+] / c
    "C04-M2": _m("C04-M2"),  # uses alpha's formula for [H3O+]: sqrt(Ka / c), and so Ka = [H3O+]^2 c
    "C04-M3": _m("C04-M3"),  # treats the weak acid or base as strong: fully dissociated
    "C04-M4": _m("C04-M4"),  # mixes up pH and pOH
    "C04-M5": _m("C04-M5"),  # mixes up alpha and percent dissociation
    "C04-M6": _m("C04-M6"),  # takes the decimal part of a negative log with the wrong sign
}
