"""C08 Remainder theorem: answer models (the key, and one per misconception).

inputs: P (the dividend), a (the divisor is var - a), and R (the given remainder, "unk" items only).
params: "var" names the polynomial's variable; "ask" is
  "rem": the remainder when P is divided by var - a;
  "unk": the value of the letter params["unk"] for which that remainder is R.
"""
from sympy import Poly, Symbol, expand, rem, solve


def _sym(v, name):
    """The symbol called name in the inputs (real or plain, as the inputs were parsed)."""
    for s in v["P"].free_symbols:
        if s.name == name:
            return s
    return Symbol(name)


def _finish(v, p, value):
    """value is the remainder found (in terms of the unknown for "unk" items)."""
    if p["ask"] == "rem":
        return expand(value)
    if p["ask"] == "unk":
        k = _sym(v, p["unk"])
        sol = solve(value - v["R"], k)
        if len(sol) != 1:
            raise ValueError("needs one solution")
        return sol[0]
    raise ValueError(p["ask"])


def _linear(v, p, value):
    """value = c*k + d for the unknown k: returns (c, d)."""
    k = _sym(v, p["unk"])
    q = Poly(expand(value), k)
    if q.degree() != 1:
        raise ValueError("not linear in the unknown")
    c, d = q.all_coeffs()
    return c, d


def key(v, p):
    x = _sym(v, p["var"])
    r = rem(expand(v["P"]), x - v["a"], x)   # long division, not substitution
    return _finish(v, p, r)


def m1(v, p):
    """Takes the opposite sign of a: dividing by x + 3, puts x = 3 (and by x - 3, x = -3)."""
    x = _sym(v, p["var"])
    return _finish(v, p, expand(v["P"]).subs(x, -v["a"]))


def m2(v, p):
    """Puts a negative a in correctly but writes every power of it as negative: (-3)^2 = -9."""
    x = _sym(v, p["var"])
    a = v["a"]
    if not (a.is_number and a < 0):
        raise ValueError("needs a negative a")
    P = Poly(expand(v["P"]), x)
    if not any(e[0] % 2 == 0 and e[0] > 0 for e, _ in P.terms()):
        raise ValueError("no even power to get wrong")
    return _finish(v, p, sum(c * (-(abs(a) ** e[0])) if e[0] else c for e, c in P.terms()))


def m3(v, p):
    """Leaves out the missing powers: writes only the coefficients it sees, with no 0 for a missing term."""
    if p["ask"] != "rem":
        raise ValueError("rem only")
    x = _sym(v, p["var"])
    coeffs = Poly(expand(v["P"]), x).all_coeffs()
    seen = [c for c in coeffs if c != 0]
    if len(seen) == len(coeffs):
        raise ValueError("no missing power")
    n = len(seen) - 1
    return _finish(v, p, sum(c * v["a"] ** (n - i) for i, c in enumerate(seen)))


def m4(v, p):
    """Moves the number to the other side without changing its sign: 3k + 50 = 62 gives 3k = 112."""
    if p["ask"] != "unk":
        raise ValueError("unk only")
    x = _sym(v, p["var"])
    c, d = _linear(v, p, expand(v["P"]).subs(x, v["a"]))
    return (v["R"] + d) / c


def m5(v, p):
    """Sets p(a) = 0, as if the division were exact, and ignores the given remainder."""
    if p["ask"] != "unk":
        raise ValueError("unk only")
    x = _sym(v, p["var"])
    c, d = _linear(v, p, expand(v["P"]).subs(x, v["a"]))
    return -d / c


def m6(v, p):
    """Thinks the remainder is the constant term: the x-terms all divide, so only the number is left."""
    if p["ask"] != "rem":
        raise ValueError("rem only")
    x = _sym(v, p["var"])
    return expand(v["P"]).subs(x, 0)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5, "C08-M6": m6}
