"""C01 sin and cos of a sum or difference: answer models (the key, and one per misconception).

params["kind"]:
  fwd   inputs a, b (angles in radians, or a symbol), optional k (a multiplier):
        k * f(a + s b), f = params["f"] ("sin" | "cos"), s = params["s"] ("+" | "-")
  quad  inputs sA (sin A), qA (quadrant of A), cB (cos B), qB (quadrant of B):
        f(A + s B), the other two ratios found from the quadrants
  back  inputs p, q (the two angles, in the order the stem lists them):
        pat "cos": cos p cos q + s sin p sin q;  pat "sin": sin p cos q + s cos p sin q
"""
from sympy import I, cos, expand, im, pi, re, sin, sqrt

_SWAP = {pi / 6: pi / 3, pi / 3: pi / 6}  # sin 30° <-> sin 60° is cos 30° <-> cos 60° mixed up


def _sign(p):
    return {"+": 1, "-": -1}[p["s"]]


def _other(f):
    return {"sin": "cos", "cos": "sin"}[f]


def _ratios(v):
    """sin A, cos A, sin B, cos B, the missing two taken with their quadrant's sign."""
    sA, cB, qA, qB = v["sA"], v["cB"], int(v["qA"]), int(v["qB"])
    cA = sqrt(1 - sA**2) * (1 if qA in (1, 4) else -1)
    sB = sqrt(1 - cB**2) * (1 if qB in (1, 2) else -1)
    return sA, cA, sB, cB


def _expand(f, sa, ca, sb, cb, s):
    """The textbook expansion of f(A + s B) from the four ratios."""
    if f == "sin":
        return sa * cb + s * ca * sb
    return ca * cb - s * sa * sb


def _args(v, p):
    if p["kind"] == "fwd":
        a, b = v["a"], v["b"]
        return v.get("k", 1), sin(a), cos(a), sin(b), cos(b)
    if p["kind"] == "quad":
        return (1, *_ratios(v))
    raise ValueError("not a forward question")


def key(v, p):
    """From the definition: the angles themselves (fwd), a rotation by complex numbers (quad),
    or the given expression as it stands (back)."""
    s = _sign(p)
    if p["kind"] == "fwd":
        f = {"sin": sin, "cos": cos}[p["f"]]
        return v.get("k", 1) * f(v["a"] + s * v["b"])
    if p["kind"] == "quad":
        sA, cA, sB, cB = _ratios(v)
        z = (cA + I * sA) * (cB + s * I * sB)  # cis A times cis(sB): the angles add
        return im(z) if p["f"] == "sin" else re(z)
    pv, qv = v["p"], v["q"]
    if p["pat"] == "cos":
        return cos(pv) * cos(qv) + s * sin(pv) * sin(qv)
    return sin(pv) * cos(qv) + s * cos(pv) * sin(qv)


def m1(v, p):
    """Distributes f over the sum: f(A ± B) = f(A) ± f(B)."""
    k, sa, ca, sb, cb = _args(v, p)
    s = _sign(p)
    return k * (sa + s * sb if p["f"] == "sin" else ca + s * cb)


def m2(v, p):
    """Copies the sign into the cos formula: cos(A ± B) = cos A cos B ± sin A sin B;
    read backwards, cos X cos Y ± sin X sin Y = cos(X ± Y)."""
    s = _sign(p)
    if p["kind"] == "back":
        if p["pat"] != "cos":
            raise ValueError("only for the cos pattern")
        return cos(expand(v["p"] + s * v["q"]))
    if p["f"] != "cos":
        raise ValueError("only for cos")
    k, sa, ca, sb, cb = _args(v, p)
    return k * (ca * cb + s * sa * sb)


def m3(v, p):
    """Swaps the two patterns: sin(A ± B) = cos A cos B ∓ sin A sin B and cos(A ± B) = sin A cos B ± cos A sin B,
    so the working gives the other function of the same angle."""
    s = _sign(p)
    if p["kind"] == "back":
        d = expand(v["p"] - s * v["q"] if p["pat"] == "cos" else v["p"] + s * v["q"])
        return sin(d) if p["pat"] == "cos" else cos(d)
    k, sa, ca, sb, cb = _args(v, p)
    return k * _expand(_other(p["f"]), sa, ca, sb, cb, s)


def m4(v, p):
    """Takes the missing ratios positive whatever the quadrant: cos A = +sqrt(1 - sin^2 A)."""
    if p["kind"] != "quad":
        raise ValueError("only when a quadrant is given")
    sA, cA, sB, cB = _ratios(v)
    if cA > 0 and sB > 0:
        raise ValueError("both missing ratios are positive: this is the key")
    return _expand(p["f"], sA, abs(cA), abs(sB), cB, _sign(p))


def m5(v, p):
    """Mixes up which of sin and cos is even: takes sin(B - A) = sin(A - B) and cos(-θ) = -cos θ."""
    s = _sign(p)
    if p["kind"] == "fwd":
        if p["f"] != "sin" or s != -1:
            raise ValueError("only for sin of a difference")
        return v.get("k", 1) * sin(v["b"] - v["a"])
    if p["kind"] != "back":
        raise ValueError("not for quadrant questions")
    d = expand(v["p"] - s * v["q"] if p["pat"] == "cos" else v["p"] + s * v["q"])
    if not d.could_extract_minus_sign():
        raise ValueError("the angle isn't negative: nothing to mix up")
    return -cos(-d) if p["pat"] == "cos" else sin(-d)


def m6(v, p):
    """Mixes up sin and cos of 30° and 60° (sin 30° = √3/2, cos 30° = 1/2), then expands correctly."""
    if p["kind"] != "fwd":
        raise ValueError("only for standard angles")
    a, b = v["a"], v["b"]
    if a not in _SWAP and b not in _SWAP:
        raise ValueError("no 30° or 60° angle")
    sw = lambda t: _SWAP.get(t, t)
    return v.get("k", 1) * _expand(p["f"], sin(sw(a)), cos(sw(a)), sin(sw(b)), cos(sw(b)), _sign(p))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
