"""C03 Finding constants for continuity: answer models (the key, and one per misconception).

An item is a function joined at x = a (inputs["a"]). params:
  left   the piece for x < a (sympy syntax, in x and the unknowns)
  right  the piece for x > a (default: the same as left)
  val    f(a) (a number, or an unknown such as "k")
  unknowns  the constants to find, space-separated ("k", or "a b")
  slip_left / slip_right  (M5 only) the piece as copied with a minus sign lost
The answer is the unknown's value, a Tuple for two unknowns, Symbol("no_k") when no value
makes f continuous, or Symbol("every_k") when every value does.

One-sided limits are taken piece by piece (a sympy Piecewise can give the wrong side).
"""
from sympy import Add, Mul, Pow, S, Symbol, Tuple, factorint, limit, nan, oo, simplify, solve, zoo
from sympy.parsing.sympy_parser import parse_expr

x = Symbol("x", real=True)
NO_K = Symbol("no_k")
EVERY_K = Symbol("every_k")


def _unknowns(p):
    # Positive, so a constant inside k**x behaves; the values found are plain numbers.
    return [Symbol(n, positive=True) if p.get("pos") else Symbol(n) for n in p["unknowns"].split()]


def _parse(s, p):
    loc = {"x": x, **{u.name: u for u in _unknowns(p)}}
    return parse_expr(s, local_dict=loc)


def _pieces(p, slip=False):
    left = p["slip_left"] if slip and "slip_left" in p else p["left"]
    # One formula on both sides (no "right") is one piece: the slip shows on both sides.
    right = p["slip_right"] if slip and "slip_right" in p else p.get("right", left)
    return _parse(left, p), _parse(right, p)


def _primes(f):
    """24**x as 2**(3x) * 3**x: sympy can miss that log 24 - 3 log 2 - log 3 = 0 and get a 0/0 limit wrong."""
    return f.replace(
        lambda e: e.is_Pow and e.base.is_Integer and e.base > 1 and e.exp.has(x),
        lambda e: Mul(*[q ** (m * e.exp) for q, m in factorint(e.base).items()]),
    )


def _side(f, a, d):
    """The one-sided limit of one piece (d = "-" or "+")."""
    return simplify(limit(_primes(f), x, a, d))


def _solve(eqs, p):
    """Solve the conditions for the unknowns: a value, a Tuple, NO_K or EVERY_K."""
    us = _unknowns(p)
    eqs = [simplify(e) for e in eqs]
    eqs = [e for e in eqs if e != 0]
    if not eqs:
        return EVERY_K
    if any(e.free_symbols.isdisjoint(us) for e in eqs):
        return NO_K  # a condition with no constant in it fails
    sol = solve(eqs, us, dict=True)
    if not sol:
        return NO_K
    s = sol[0]
    if any(u not in s for u in us):
        raise ValueError("the conditions don't fix every constant")
    vals = [simplify(s[u]) for u in us]
    return vals[0] if len(vals) == 1 else Tuple(*vals)


def _conditions(left_lim, right_lim, val):
    return [left_lim - val, right_lim - val]


def key(v, p):
    a = v["a"]
    left, right = _pieces(p)
    return _solve(_conditions(_side(left, a, "-"), _side(right, a, "+"), _parse(p["val"], p)), p)


def _split(f, a):
    """A piece as (indeterminate term, the rest), the rest found by substituting x = a."""
    terms = Add.make_args(f)
    bad = [t for t in terms if t.subs(x, a) in (nan, zoo, oo, -oo) or t.subs(x, a).has(nan, zoo)]
    if len(bad) != 1:
        raise ValueError("needs exactly one indeterminate term")
    rest = Add(*[t for t in terms if t is not bad[0]])
    return bad[0], rest.subs(x, a)


def _face_value(t, a):
    """An indeterminate term read at face value: 0/0 as 0, 1^oo as 1."""
    if isinstance(t, Pow) and simplify(t.base.subs(x, a)) == 1:
        return S.One
    num, den = t.as_numer_denom()
    if simplify(num.subs(x, a)) == 0 and simplify(den.subs(x, a)) == 0:
        return S.Zero
    raise ValueError("not a 0/0 or 1^oo term")


def m1(v, p):
    """M1: only the left-hand limit is matched to f(a); the right side is never checked."""
    a = v["a"]
    left, _ = _pieces(p)
    out = _solve([_side(left, a, "-") - _parse(p["val"], p)], p)
    if out == key(v, p):
        raise ValueError("both sides agree here")
    return out


def m2(v, p):
    """M2: equal one-sided limits are enough; the given f(a) is ignored."""
    a = v["a"]
    left, right = _pieces(p)
    return _solve([_side(left, a, "-") - _side(right, a, "+")], p)


def m3(v, p):
    """M3: an indeterminate form read at face value (0/0 as 0, 1^oo as 1) by substituting x = a."""
    a = v["a"]
    left, right = _pieces(p)
    lims = []
    for f in (left, right):
        t, rest = _split(f, a)
        lims.append(_face_value(t, a) + rest)
    return _solve(_conditions(*lims, _parse(p["val"], p)), p)


def m4(v, p):
    """M4: a standard limit's ratio inverted: the indeterminate term's limit replaced by its reciprocal."""
    a = v["a"]
    left, right = _pieces(p)
    lims = []
    for f, d in ((left, "-"), (right, "+")):
        t, rest = _split(f, a)
        lt = _side(t, a, d)
        if lt == 0 or lt.has(oo, -oo, zoo, nan):
            raise ValueError("no finite nonzero limit to invert")
        lims.append(1 / lt + rest)
    return _solve(_conditions(*lims, _parse(p["val"], p)), p)


def m5(v, p):
    """M5: a minus sign lost while working out a piece's limit (the piece as the student copied it)."""
    if "slip_left" not in p and "slip_right" not in p:
        raise ValueError("needs the slipped piece")
    a = v["a"]
    left, right = _pieces(p, slip=True)
    return _solve(_conditions(_side(left, a, "-"), _side(right, a, "+"), _parse(p["val"], p)), p)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5}
