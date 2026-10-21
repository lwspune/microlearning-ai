"""C08 Word problems: forming two equations: answer models (the key, and one per misconception).

Every item names its story in params["story"]:
  numbers   two numbers differ by d; greater + 2 * smaller = t; asks for the smaller   (inputs d, t)
  fraction  denominator = m * numerator + a; with both reduced by b, denominator = c * numerator   (inputs m, a, b, c)
  ages      M + S = s; k years ago M was r times S   (inputs s, k, r); answer (M, S)
  triangle  isosceles, perimeter p; each congruent side = 2 * base - k   (inputs p, k); answer (side, base)
  rectangle ABCD with side expressions AB, BC, CD, DA in x and y   (inputs AB, BC, CD, DA); answer (AB, BC)

The key checks the story's sentences directly on whole numbers (a search), never by forming and
eliminating; each misconception forms its own (wrong) pair of equations and solves it.
"""
from sympy import Eq, Integer, Rational, Symbol, Tuple, lambdify, solve

X, Y = Symbol("x"), Symbol("y")


def _plain(e):
    """The expression with its x and y as plain symbols (the verifier may pass real ones)."""
    return e.subs({s: Symbol(s.name) for s in e.free_symbols})


def _solve(e1, e2):
    s = solve([e1, e2], [X, Y], dict=True)
    if len(s) != 1 or X not in s[0] or Y not in s[0]:
        raise ValueError("no unique solution")
    return s[0][X], s[0][Y]


def _search(test, lo=1, hi=200):
    found = [(i, j) for i in range(lo, hi) for j in range(lo, hi) if test(i, j)]
    if len(found) != 1:
        raise ValueError(f"story has {len(found)} whole-number answers")
    return found[0]


def _story(p, *allowed):
    if p["story"] not in allowed:
        raise ValueError(f"not modelled for {p['story']}")
    return p["story"]


def key(v, p):
    st = p["story"]
    if st == "numbers":
        g, s = _search(lambda g, s: g - s == v["d"] and g + 2 * s == v["t"])
        return s
    if st == "fraction":
        n, d = _search(lambda n, d: d == v["m"] * n + v["a"] and d - v["b"] == v["c"] * (n - v["b"]))
        return Rational(n, d)
    if st == "ages":
        return Tuple(*_search(lambda m, s: m + s == v["s"] and m - v["k"] == v["r"] * (s - v["k"])))
    if st == "triangle":
        return Tuple(*_search(lambda s, b: s == 2 * b - v["k"] and 2 * s + b == v["p"]))
    if st == "rectangle":
        side = {k: _plain(v[k]) for k in ("AB", "BC", "CD", "DA")}
        f = {k: lambdify((X, Y), e) for k, e in side.items()}
        i, j = _search(lambda i, j: f["AB"](i, j) == f["CD"](i, j) and f["BC"](i, j) == f["DA"](i, j))
        return Tuple(Integer(f["AB"](i, j)), Integer(f["BC"](i, j)))
    raise ValueError(st)


def m1(v, p):
    """Flips a 'more', 'less', 'differ by' or 'ago': the constant goes the wrong way."""
    st = _story(p, "numbers", "fraction", "ages", "triangle")
    if st == "numbers":  # writes smaller - greater = d, still calling y the smaller
        g, s = _solve(Eq(Y - X, v["d"]), Eq(X + 2 * Y, v["t"]))
        return s
    if st == "fraction":  # denominator = m * numerator - a
        n, d = _solve(Eq(Y, v["m"] * X - v["a"]), Eq(Y - v["b"], v["c"] * (X - v["b"])))
        return n / d
    if st == "ages":  # k years ago read as k years later
        return Tuple(*_solve(Eq(X + Y, v["s"]), Eq(X + v["k"], v["r"] * (Y + v["k"]))))
    s, b = _solve(Eq(X, 2 * Y + v["k"]), Eq(2 * X + Y, v["p"]))  # 'k less than twice' as + k
    return Tuple(s, b)


def m2(v, p):
    """Applies a change ('k years ago', 'both reduced by b') to only one of the two quantities."""
    st = _story(p, "fraction", "ages")
    if st == "fraction":  # reduces the numerator only
        n, d = _solve(Eq(Y, v["m"] * X + v["a"]), Eq(Y, v["c"] * (X - v["b"])))
        return n / d
    return Tuple(*_solve(Eq(X + Y, v["s"]), Eq(X - v["k"], v["r"] * Y)))  # only Manish's age goes back


def m3(v, p):
    """Puts the 'times' on the wrong quantity."""
    st = _story(p, "numbers", "ages", "triangle")
    if st == "numbers":  # twice the greater + the smaller = t
        g, s = _solve(Eq(X - Y, v["d"]), Eq(2 * X + Y, v["t"]))
        return s
    if st == "ages":  # Savita's age then = r times Manish's
        return Tuple(*_solve(Eq(X + Y, v["s"]), Eq(Y - v["k"], v["r"] * (X - v["k"]))))
    s, b = _solve(Eq(Y, 2 * X - v["k"]), Eq(2 * X + Y, v["p"]))  # base = 2 * side - k
    return Tuple(s, b)


def m4(v, p):
    """Stops at x and y: gives the letters, not the quantities asked for."""
    _story(p, "rectangle")
    side = {k: _plain(v[k]) for k in ("AB", "BC", "CD", "DA")}
    return Tuple(*_solve(Eq(side["AB"], side["CD"]), Eq(side["BC"], side["DA"])))


def m5(v, p):
    """Gives each value to the other name (the pair swapped)."""
    st = _story(p, "numbers", "fraction", "triangle", "rectangle")
    k = key(v, p)
    if st == "numbers":  # reports the greater number
        return k + v["d"]
    if st == "fraction":  # numerator and denominator swapped
        return 1 / k
    return Tuple(k[1], k[0])


def m6(v, p):
    """Equates sides that meet at a corner (AB = DA, BC = CD) instead of opposite sides."""
    _story(p, "rectangle")
    side = {k: _plain(v[k]) for k in ("AB", "BC", "CD", "DA")}
    i, j = _solve(Eq(side["AB"], side["DA"]), Eq(side["BC"], side["CD"]))
    sub = {X: i, Y: j}
    return Tuple(side["AB"].subs(sub), side["BC"].subs(sub))


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
