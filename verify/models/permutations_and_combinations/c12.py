"""C12 Lines, triangles and diagonals: answer models (the key, and one per misconception).

params: kind = "lines" | "triangles" | "diagonals" | "parallelograms".
inputs: n = the number of points (or the polygon's sides), k = how many of the points are
collinear (0 if none), a and b = the sizes of the two families of parallel lines.
"""
from itertools import combinations

from sympy import Integer, binomial, ff


def _ints(v, *names):
    return [int(v[x]) for x in names]


def key(v, p):
    """Counted straight from the definition, by listing the selections one by one."""
    kind = p["kind"]
    if kind in ("lines", "triangles"):
        n, k = _ints(v, "n", "k")
        line = set(range(k))  # points 0..k-1 lie on one line
        if kind == "lines":
            # a line is the set of points on it; two points of the collinear set give the same line
            lines = {frozenset(line) if set(pr) <= line and k >= 2 else frozenset(pr)
                     for pr in combinations(range(n), 2)}
            return Integer(len(lines))
        return Integer(sum(1 for tr in combinations(range(n), 3) if not set(tr) <= line))
    if kind == "diagonals":
        (n,) = _ints(v, "n")
        return Integer(sum(1 for i, j in combinations(range(n), 2) if (j - i) % n not in (1, n - 1)))
    if kind == "parallelograms":
        a, b = _ints(v, "a", "b")
        lines = [("A", i) for i in range(a)] + [("B", j) for j in range(b)]
        # four lines bound a parallelogram exactly when two come from each family
        return Integer(sum(1 for q in combinations(lines, 4) if sum(1 for f, _ in q if f == "A") == 2))
    raise ValueError(kind)


def m1(v, p):
    """Order matters: uses nPr where nCr belongs (line AB counted again as BA)."""
    kind = p["kind"]
    n, k = v.get("n"), v.get("k")
    if kind == "lines":
        return ff(n, 2) - ff(k, 2) + 1 if k >= 3 else ff(n, 2)
    if kind == "triangles":
        return ff(n, 3) - ff(k, 3)
    if kind == "diagonals":
        return ff(n, 2) - n
    if kind == "parallelograms":
        return ff(v["a"], 2) * ff(v["b"], 2)
    raise ValueError(kind)


def m2(v, p):
    """Lines with k collinear points: removes their kC2 lines and forgets they still make one line."""
    if p["kind"] != "lines" or v["k"] < 3:
        raise ValueError("needs collinear points and a count of lines")
    return binomial(v["n"], 2) - binomial(v["k"], 2)


def m3(v, p):
    """Counts every selection, ignoring the condition that rules some out."""
    kind = p["kind"]
    if kind == "lines":
        return binomial(v["n"], 2)
    if kind == "triangles":
        return binomial(v["n"], 3)
    if kind == "diagonals":
        return binomial(v["n"], 2)  # the sides are counted as diagonals
    if kind == "parallelograms":
        return binomial(v["a"] + v["b"], 4)  # any 4 lines, not 2 from each family
    raise ValueError(kind)


def m4(v, p):
    """Triangles with k collinear points: copies the lines rule and adds 1 back."""
    if p["kind"] != "triangles" or v["k"] < 3:
        raise ValueError("needs collinear points and a count of triangles")
    return binomial(v["n"], 3) - binomial(v["k"], 3) + 1


def m5(v, p):
    """Diagonals: n - 3 from each of the n vertices, n(n - 3), without halving."""
    if p["kind"] != "diagonals":
        raise ValueError("diagonals only")
    n = v["n"]
    return n * (n - 3)


def m6(v, p):
    """Parallelograms: adds the choices from the two families instead of multiplying."""
    if p["kind"] != "parallelograms":
        raise ValueError("parallelograms only")
    return binomial(v["a"], 2) + binomial(v["b"], 2)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6}
