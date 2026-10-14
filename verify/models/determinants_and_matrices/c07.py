"""C07 Types of matrices: answer models (the key, and one per misconception).

params["ask"]:
  build  construct A = [a_ij] of order m x n. Inputs: m, n, f (the rule, an expression in i and j).
         The answer is the Matrix.
  stmt   which statement about the matrix A (input) is true. params["stmts"] lists them:
         "upper", "lower", "diagonal", "scalar", "identity", "singular", "nonsingular", or
         "entry I J V" (a_IJ = V), "det V" (|A| = V). The answer is a Symbol named in _NAMES, or aIJ for an entry.
"""
from sympy import Matrix, Symbol, sympify

_i, _j = Symbol("i"), Symbol("j")


def _rule(v):
    f = v["f"]
    return lambda r, c: f.subs({_i: r, _j: c})


def _mn(v):
    return int(v["m"]), int(v["n"])


# ---- statements ------------------------------------------------------------------------------

def _square(a):
    return a.rows == a.cols


def _upper(a):
    """a_ij = 0 for every i > j."""
    return _square(a) and all(a[r, c] == 0 for r in range(a.rows) for c in range(a.cols) if r > c)


def _lower(a):
    """a_ij = 0 for every i < j."""
    return _square(a) and all(a[r, c] == 0 for r in range(a.rows) for c in range(a.cols) if r < c)


def _diagonal(a):
    return _upper(a) and _lower(a)


def _scalar(a):
    return _diagonal(a) and len({a[k, k] for k in range(a.rows)}) == 1


def _identity(a):
    return _scalar(a) and a[0, 0] == 1


def _det(a):
    return a.det(method="berkowitz")


_TRUTH = {
    "upper": _upper,
    "lower": _lower,
    "diagonal": _diagonal,
    "scalar": _scalar,
    "identity": _identity,
    "singular": lambda a: _square(a) and _det(a) == 0,
    "nonsingular": lambda a: _square(a) and _det(a) != 0,
}


def _entry(a, s, swap=False):
    """'entry I J V': a_IJ = V, with a_IJ in row I, column J (or row J, column I if swap)."""
    _, i, j, val = s.split()
    r, c = (int(j), int(i)) if swap else (int(i), int(j))
    if r > a.rows or c > a.cols:
        return False
    return a[r - 1, c - 1] == sympify(val)


_NAMES = {"upper": "upper_triangular", "lower": "lower_triangular", "diagonal": "diagonal_matrix",
          "scalar": "scalar_matrix", "identity": "identity_matrix", "singular": "singular",
          "nonsingular": "non_singular", "det": "det_value"}


def _name(s):
    """The answer's name (a plain symbol: 'det' alone would sympify to a function), aIJ for an entry."""
    w = s.split()
    return Symbol(f"a{w[1]}{w[2]}" if w[0] == "entry" else _NAMES[w[0]])


def _true(a, s):
    if s.startswith("entry"):
        return _entry(a, s)
    if s.startswith("det"):
        return _square(a) and _det(a) == sympify(s.split()[1])
    return _TRUTH[s](a)


def _wrongly_true(v, p, believes):
    """The one statement that is false but true under a belief (a, s -> truth, or None: no change)."""
    a = v["A"]
    hits = []
    for s in p["stmts"]:
        real = _true(a, s)
        b = believes(a, s)
        if (real if b is None else b) and not real:
            hits.append(_name(s))
    if len(hits) != 1:
        raise ValueError(f"belief makes {len(hits)} false statements true")
    return hits[0]


# ---- models ----------------------------------------------------------------------------------

def key(v, p):
    """From the definitions: a_ij in row i, column j; types and singularity tested entry by entry."""
    if p["ask"] == "build":
        m, n = _mn(v)
        f = _rule(v)
        return Matrix(m, n, lambda r, c: f(r + 1, c + 1))
    if p["ask"] == "stmt":
        true = [_name(s) for s in p["stmts"] if _true(v["A"], s)]
        if len(true) != 1:
            raise ValueError(f"{len(true)} statements are true")
        return true[0]
    raise ValueError(f"no ask {p['ask']}")


def m1(v, p):
    """Reads the order m x n as m columns and n rows; a_ij still in row i, column j."""
    if p["ask"] != "build":
        raise ValueError("only for building a matrix")
    m, n = _mn(v)
    if m == n:
        raise ValueError("a square order reads the same both ways")
    f = _rule(v)
    return Matrix(n, m, lambda r, c: f(r + 1, c + 1))


def m2(v, p):
    """Takes the first subscript i as the column number: the cell in row r, column c gets the rule at i = c, j = r."""
    if p["ask"] == "build":
        m, n = _mn(v)
        f = _rule(v)
        return Matrix(m, n, lambda r, c: f(c + 1, r + 1))
    if p["ask"] == "stmt":
        return _wrongly_true(v, p, lambda a, s: _entry(a, s, swap=True) if s.startswith("entry") else None)
    raise ValueError(f"no ask {p['ask']}")


def m3(v, p):
    """Writes the entries a_i1, a_i2, ... of each i down a column, not along a row: the transpose."""
    if p["ask"] != "build":
        raise ValueError("only for building a matrix")
    m, n = _mn(v)
    if m == n:
        raise ValueError("for a square matrix this is the same matrix as C07-M2 gives")
    f = _rule(v)
    return Matrix(n, m, lambda r, c: f(c + 1, r + 1))


def m4(v, p):
    """Names a triangular matrix by where its zeros are: zeros above the diagonal = 'upper triangular'."""
    if p["ask"] != "stmt":
        raise ValueError("only for statements")
    swap = {"upper": _lower, "lower": _upper}
    return _wrongly_true(v, p, lambda a, s: swap[s](a) if s in swap else None)


def m5(v, p):
    """Takes a scalar matrix to be any square matrix with equal diagonal entries (off-diagonal entries ignored)."""
    if p["ask"] != "stmt":
        raise ValueError("only for statements")

    def believes(a, s):
        if s == "scalar":
            return _square(a) and len({a[k, k] for k in range(a.rows)}) == 1
        return None

    return _wrongly_true(v, p, believes)


def m6(v, p):
    """Swaps the names: calls a matrix singular when |A| is not 0, and non-singular when |A| = 0."""
    if p["ask"] != "stmt":
        raise ValueError("only for statements")
    swap = {"singular": "nonsingular", "nonsingular": "singular"}
    return _wrongly_true(v, p, lambda a, s: _TRUTH[swap[s]](a) if s in swap else None)


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
