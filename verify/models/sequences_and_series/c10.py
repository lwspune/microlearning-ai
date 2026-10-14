"""C10 A.M., G.M. and H.M.: answer models (the key, and one per misconception).

params["ask"]:
  "means"  inputs a, b (two positive numbers): the triple (A, G, H).
  "false"  inputs a, b (symbols): which statement about A, G, H is NOT true, as a Symbol:
           A_GH (A = GH), G2_AH (G^2 = AH), G_def (G = sqrt(ab)), H_def (H = 2ab/(a+b)).
  "A" | "G" | "H"  inputs: the other two means of two unknown positive numbers; the asked mean.
"""
from sympy import Symbol, Tuple, simplify, solve, sqrt, symbols

_a, _b = symbols("a b", positive=True)
_STATEMENTS = ("A_GH", "G2_AH", "G_def", "H_def")


def _means(a, b):
    """A, G, H straight from their definitions."""
    return (a + b) / 2, sqrt(a * b), 2 * a * b / (a + b)


def _given(v, p):
    """The two given means, in the order A, G, H (the asked one left out)."""
    if p["ask"] not in ("A", "G", "H"):
        raise ValueError("not a two-means item")
    return {k: v[k] for k in "AGH" if k != p["ask"]}


def key(v, p):
    ask = p["ask"]
    if ask == "means":
        return Tuple(*_means(v["a"], v["b"]))
    if ask == "false":
        A, G, H = _means(_a, _b)
        truth = {"A_GH": A - G * H, "G2_AH": G**2 - A * H, "G_def": G - sqrt(_a * _b), "H_def": H - 2 * _a * _b / (_a + _b)}
        false = [s for s in _STATEMENTS if simplify(truth[s]) != 0]
        assert len(false) == 1, false
        return Symbol(false[0])
    # Two means given: recover the two numbers from the definitions, then compute the asked mean.
    given = _given(v, p)
    names = dict(zip("AGH", _means(_a, _b)))
    sols = solve([names[k] - val for k, val in given.items()], [_a, _b], dict=True)
    vals = {simplify(dict(zip("AGH", _means(s[_a], s[_b])))[ask]) for s in sols}
    assert len(vals) == 1, vals
    return vals.pop()


def m1(v, p):
    """Takes H as (a+b)/(2ab), the A.M. of 1/a and 1/b, without flipping it back.
    In terms of the means that belief reads H = A/G^2."""
    ask = p["ask"]
    if ask == "means":
        a, b = v["a"], v["b"]
        A, G, _ = _means(a, b)
        return Tuple(A, G, (a + b) / (2 * a * b))
    if ask == "false":
        return Symbol("H_def")
    g = _given(v, p)
    if ask == "A":
        return g["H"] * g["G"] ** 2
    if ask == "H":
        return g["A"] / g["G"] ** 2
    return sqrt(g["A"] / g["H"])


def m2(v, p):
    """Uses A = GH in place of G^2 = AH."""
    ask = p["ask"]
    if ask == "means":
        A, G, _ = _means(v["a"], v["b"])
        return Tuple(A, G, A / G)
    if ask == "false":
        return Symbol("G2_AH")
    g = _given(v, p)
    if ask == "A":
        return g["G"] * g["H"]
    if ask == "H":
        return g["A"] / g["G"]
    return g["A"] / g["H"]


def m3(v, p):
    """Drops the square root in the G.M.: G = ab, and so G = AH in place of G^2 = AH."""
    ask = p["ask"]
    if ask == "means":
        a, b = v["a"], v["b"]
        A, _, H = _means(a, b)
        return Tuple(A, a * b, H)
    if ask == "false":
        return Symbol("G_def")
    g = _given(v, p)
    if ask == "A":
        return g["G"] / g["H"]
    if ask == "H":
        return g["G"] / g["A"]
    return g["A"] * g["H"]


def m4(v, p):
    """Treats the two given means as if they were the two numbers, and takes the asked mean of them.
    On a find-G item this gives the key (the G.M. of A and H is G, since G^2 = AH)."""
    g = _given(v, p)
    x, y = g.values()
    return dict(zip("AGH", _means(x, y)))[p["ask"]]


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4}
