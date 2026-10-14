"""C02 Minors and cofactors: answer models (the key, and one per misconception).

Inputs: D, a 3 x 3 Matrix (row i, column j counted from 1).
params["ask"]:
  cofactor  inputs i, j          -> the cofactor C_ij
  expand    params line, inputs k -> |D| by expanding along row k (line="row") or column k (line="col")
  alien     inputs r, s (r != s) -> a_r1 C_s1 + a_r2 C_s2 + a_r3 C_s3
"""
from sympy import Matrix, Rational


def _minor(D, i, j, cross=lambda a, b, c, d: a * d - b * c):
    """M_ij: delete row i and column j, then evaluate the 2 x 2 that is left with `cross`."""
    rows = [r for r in range(3) if r != i - 1]
    cols = [c for c in range(3) if c != j - 1]
    (a, b), (c, d) = [[D[r, k] for k in cols] for r in rows]
    return cross(a, b, c, d)


def _sign(i, j):
    return (-1) ** (i + j)


def _line(v, p):
    """The (i, j) positions along the line being expanded."""
    k = int(v["k"])
    if p["line"] == "row":
        return [(k, j) for j in (1, 2, 3)]
    if p["line"] == "col":
        return [(i, k) for i in (1, 2, 3)]
    raise ValueError(f"no line {p['line']}")


def _ij(v):
    return int(v["i"]), int(v["j"])


def _rs(v):
    r, s = int(v["r"]), int(v["s"])
    if r == s:
        raise ValueError("r and s must be different rows")
    return r, s


def _expand(v, p, cofactor):
    D = v["D"]
    return sum((D[i - 1, j - 1] * cofactor(D, i, j) for i, j in _line(v, p)), Rational(0))


def _alien(v, cofactor):
    D = v["D"]
    r, s = _rs(v)
    return sum((D[r - 1, j - 1] * cofactor(D, s, j) for j in (1, 2, 3)), Rational(0))


def key(v, p):
    """Straight from the definitions; |D| by sympy's own determinant, not by cofactors."""
    D, ask = v["D"], p["ask"]
    if ask == "cofactor":
        i, j = _ij(v)
        return _sign(i, j) * _minor(D, i, j)
    if ask == "expand":
        _line(v, p)
        return Matrix(D).det()
    if ask == "alien":
        r, s = _rs(v)
        # Row r placed over row s gives a determinant with two equal rows.
        E = Matrix(D).copy()
        E[s - 1, :] = D[r - 1, :]
        return E.det()
    raise ValueError(f"no ask {ask}")


def m1(v, p):
    """Takes the cofactor to be the minor itself: drops the sign (-1)^(i+j)."""
    ask = p["ask"]
    plain = lambda D, i, j: _minor(D, i, j)
    if ask == "cofactor":
        return _minor(v["D"], *_ij(v))
    if ask == "expand":
        return _expand(v, p, plain)
    if ask == "alien":
        return _alien(v, plain)
    raise ValueError(f"no ask {ask}")


def m2(v, p):
    """Uses the first row's signs + - + along every line: the kth entry of the line gets (-1)^(k+1)."""
    if p["ask"] != "expand":
        raise ValueError("only an expansion uses a sign pattern along a line")
    D = v["D"]
    return sum((D[i - 1, j - 1] * (-1) ** n * _minor(D, i, j) for n, (i, j) in enumerate(_line(v, p))), Rational(0))


def m3(v, p):
    """Swaps the subscripts: for M_ij deletes row j and column i."""
    ask = p["ask"]
    swapped = lambda D, i, j: _sign(i, j) * _minor(D, j, i)
    if ask == "cofactor":
        return swapped(v["D"], *_ij(v))
    if ask == "expand":
        return _expand(v, p, swapped)
    raise ValueError(f"no ask {ask}")


def m4(v, p):
    """Evaluates the 2 x 2 minor as ad + bc instead of ad - bc."""
    ask = p["ask"]
    plus = lambda D, i, j: _sign(i, j) * _minor(D, i, j, cross=lambda a, b, c, d: a * d + b * c)
    if ask == "cofactor":
        return plus(v["D"], *_ij(v))
    if ask == "expand":
        return _expand(v, p, plus)
    if ask == "alien":
        return _alien(v, plus)
    raise ValueError(f"no ask {ask}")


def m5(v, p):
    """Takes the cofactor to be the whole expansion term: a_ij (-1)^(i+j) M_ij."""
    if p["ask"] != "cofactor":
        raise ValueError("only a single cofactor is asked")
    D = v["D"]
    i, j = _ij(v)
    return D[i - 1, j - 1] * _sign(i, j) * _minor(D, i, j)


def m6(v, p):
    """Believes any row's entries times any row's cofactors give |D|."""
    if p["ask"] != "alien":
        raise ValueError("only for a row times another row's cofactors")
    _rs(v)
    return Matrix(v["D"]).det()


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
