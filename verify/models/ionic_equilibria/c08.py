"""C08 Solubility product: answer models (the key, and one per misconception).

A sparingly soluble salt A_x B_y of molar solubility S gives [A] = xS and [B] = yS, so
K_sp = (xS)^x (yS)^y = x^x y^y S^(x+y). Inputs x, y are the formula's subscripts.
params["ask"]:
  "ksp_from_s":  K_sp from the molar solubility (inputs S, x, y);
  "s_from_ksp":  molar solubility from K_sp (inputs Ksp, x, y);
  "g_from_ksp":  solubility in g per litre of an AX salt from K_sp (inputs Ksp, M);
  "ksp_from_g":  K_sp of an AX salt from its solubility in g per litre (inputs g, M);
  "expr":        K_sp in terms of S, as an expression in the symbol s (inputs x, y).
"""
from sympy import Integer, Symbol, sqrt

from chemistry import sig

s = Symbol("s")


def _stoich(v, how):
    """The factor and the power of S each model writes K_sp with: K_sp = factor * S**power."""
    x, y = v["x"], v["y"]
    return {"key": (x**x * y**y, x + y), "M1": (Integer(1), Integer(2)),
            "M2": (x * y, x + y), "M3": (Integer(1), x + y)}.get(how)


def _solve(v, p, how):
    ask, n = p["ask"], p.get("sf", 3)
    if ask in ("ksp_from_s", "s_from_ksp", "expr"):
        fp = _stoich(v, how)
        if fp is None:
            raise ValueError("does not apply to this item")
        f, pw = fp
        if ask == "expr":
            return f * s**pw
        if ask == "ksp_from_s":
            return sig(f * v["S"] ** pw, n)
        return sig((v["Ksp"] / f) ** (Integer(1) / pw), n)
    if ask == "g_from_ksp":
        Ksp, M = v["Ksp"], v["M"]
        out = {"key": sqrt(Ksp) * M, "M4": Ksp * M, "M5": sqrt(Ksp) / M, "M6": sqrt(Ksp)}.get(how)
    elif ask == "ksp_from_g":
        g, M = v["g"], v["M"]
        out = {"key": (g / M) ** 2, "M4": g / M, "M5": (g * M) ** 2, "M6": g**2}.get(how)
    else:
        out = None
    if out is None:
        raise ValueError("does not apply to this item")
    return sig(out, n)


def key(v, p):
    return _solve(v, p, "key")


def _m(mid):
    def model(v, p):
        return _solve(v, p, mid.split("-")[1])
    return model


MODELS = {
    "key": key,
    "C08-M1": _m("C08-M1"),  # uses K_sp = S^2 for every salt
    "C08-M2": _m("C08-M2"),  # multiplies by the coefficients but does not raise them to powers: 2S^3 for AX2
    "C08-M3": _m("C08-M3"),  # raises S to the powers but leaves out the coefficients: S^3 for AX2
    "C08-M4": _m("C08-M4"),  # takes K_sp itself as the solubility (no square root), or K_sp = S
    "C08-M5": _m("C08-M5"),  # converts between mol and g the wrong way round (divides by M instead of multiplying)
    "C08-M6": _m("C08-M6"),  # skips the mol/g conversion: stops at mol L^-1, or puts g L^-1 into K_sp
}
