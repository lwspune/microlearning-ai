"""C05 Word problems: forming two equations: answer models (the key, and one per misconception).

Every item names its story in params["story"]; x and y are the two unknowns the story names:
  ages      Salil x = half of Sangram y + a; k years ago their ages added to s; asks x   (inputs a, k, s)
  notes     x notes of 5 rupees, y of 10 rupees, worth T in all; y = x - d; asks x   (inputs T, d)
  fraction  numerator x, denominator y = m x - a; with b added to both, ratio p : q; asks x / y
            (inputs m, a, b, p, q)
  marks     Q questions, all attempted, c marks for a correct one, w lost for a wrong one, M marks
            in all; x correct, y wrong; asks y   (inputs Q, c, w, M)
  numbers   greater x + smaller y = S; x / y gives quotient n, remainder r; asks y   (inputs S, n, r)
  prices    a1 x + b1 y = c1, a2 x + b2 y = c2 (x one book, y one pen); asks u x + t y
            (inputs a1, b1, c1, a2, b2, c2, u, t)

The key checks the story's sentences directly on whole numbers (a search), never by forming and
eliminating; each misconception forms its own (wrong) pair of equations and solves it.
"""
from sympy import Eq, Integer, Rational, Symbol, solve

X, Y = Symbol("x"), Symbol("y")


def _solve(e1, e2):
    s = solve([e1, e2], [X, Y], dict=True)
    if len(s) != 1 or X not in s[0] or Y not in s[0]:
        raise ValueError("no unique solution")
    return s[0][X], s[0][Y]


def _search(test, lo=1, hi=400):
    found = [(i, j) for i in range(lo, hi) for j in range(lo, hi) if test(i, j)]
    if len(found) != 1:
        raise ValueError(f"story has {len(found)} whole-number answers")
    return Integer(found[0][0]), Integer(found[0][1])


def _story(p, *allowed):
    if p["story"] not in allowed:
        raise ValueError(f"not modelled for {p['story']}")
    return p["story"]


def _pair(v, p):
    """The story's (x, y), checked sentence by sentence on whole numbers."""
    st = p["story"]
    v = {k: int(e) for k, e in v.items()}  # every input is a whole number; ints keep the search quick
    if st == "ages":
        return _search(lambda x, y: 2 * (x - v["a"]) == y and (x - v["k"]) + (y - v["k"]) == v["s"])
    if st == "notes":
        return _search(lambda x, y: 5 * x + 10 * y == v["T"] and y == x - v["d"])
    if st == "fraction":
        return _search(lambda x, y: y == v["m"] * x - v["a"]
                       and Rational(x + v["b"], y + v["b"]) == Rational(v["p"], v["q"]))
    if st == "marks":
        return _search(lambda x, y: x + y == v["Q"] and v["c"] * x - v["w"] * y == v["M"], lo=0)
    if st == "numbers":
        return _search(lambda x, y: x + y == v["S"] and x // y == v["n"] and x % y == v["r"])
    if st == "prices":
        return _search(lambda x, y: v["a1"] * x + v["b1"] * y == v["c1"] and v["a2"] * x + v["b2"] * y == v["c2"])
    raise ValueError(st)


def _asked(v, p, x, y):
    """The quantity the question asks for, from a pair (x, y)."""
    st = p["story"]
    if st in ("ages", "notes"):
        return x
    if st == "fraction":
        return Rational(x) / y
    if st in ("marks", "numbers"):
        return y
    return v["u"] * x + v["t"] * y


def key(v, p):
    return _asked(v, p, *_pair(v, p))


def m1(v, p):
    """Turns a 'more than' / 'less than' the wrong way: the stated amount goes on the wrong side."""
    st = _story(p, "ages", "notes", "fraction", "numbers")
    if st == "ages":  # x = y/2 - a
        x, y = _solve(Eq(X, Y / 2 - v["a"]), Eq(X + Y - 2 * v["k"], v["s"]))
    elif st == "notes":  # y = x + d
        x, y = _solve(Eq(5 * X + 10 * Y, v["T"]), Eq(Y, X + v["d"]))
    elif st == "fraction":  # y = m x + a
        x, y = _solve(Eq(Y, v["m"] * X + v["a"]), Eq(v["q"] * (X + v["b"]), v["p"] * (Y + v["b"])))
    else:  # x = n y - r
        x, y = _solve(Eq(X + Y, v["S"]), Eq(X, v["n"] * Y - v["r"]))
    return _asked(v, p, x, y)


def m2(v, p):
    """Applies a change meant for both quantities ('k years ago', 'b added to each') only once."""
    st = _story(p, "ages", "fraction")
    if st == "ages":  # (x + y) - k = s
        x, y = _solve(Eq(X, Y / 2 + v["a"]), Eq(X + Y - v["k"], v["s"]))
    else:  # b added to the numerator only
        x, y = _solve(Eq(Y, v["m"] * X - v["a"]), Eq(v["q"] * (X + v["b"]), v["p"] * Y))
    return _asked(v, p, x, y)


def m3(v, p):
    """Puts each rate on the wrong unknown (the 10-rupee value on the 5-rupee notes)."""
    st = _story(p, "notes", "prices")
    if st == "notes":
        x, y = _solve(Eq(10 * X + 5 * Y, v["T"]), Eq(Y, X - v["d"]))
        return _asked(v, p, x, y)
    x, y = _pair(v, p)
    return v["t"] * x + v["u"] * y  # '1 book and 2 pens' priced as 2 books and 1 pen


def m4(v, p):
    """Answers with the wrong unknown: the other one, the reciprocal fraction, or x alone for a total."""
    x, y = _pair(v, p)
    st = p["story"]
    if st in ("ages", "notes"):
        return y
    if st == "fraction":
        return Rational(y) / x
    return x


def m5(v, p):
    """Adds the marks lost for a wrong answer instead of subtracting them."""
    _story(p, "marks")
    x, y = _solve(Eq(X + Y, v["Q"]), Eq(v["c"] * X + v["w"] * Y, v["M"]))
    return _asked(v, p, x, y)


def m6(v, p):
    """Leaves out a number the words give: the remainder, the marks lost, the 2 in '2 pens'."""
    st = _story(p, "marks", "numbers", "prices")
    if st == "marks":  # c x = M
        x, y = _solve(Eq(X + Y, v["Q"]), Eq(v["c"] * X, v["M"]))
        return _asked(v, p, x, y)
    if st == "numbers":  # x = n y
        x, y = _solve(Eq(X + Y, v["S"]), Eq(X, v["n"] * Y))
        return _asked(v, p, x, y)
    x, y = _pair(v, p)
    return x + y


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
