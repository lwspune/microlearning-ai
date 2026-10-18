"""C05 Continuity on an interval: answer models (the key, and one per misconception).

Every item asks for the set of points of its domain where f is discontinuous (EmptySet: none).
Inputs: none. Params:
  f  a list of formulas, sympy expressions in x (floor(u) for [u], Abs(u) for |u|);
  d  a list of the same length: the set where each formula is used (a sympy Interval, Union,
     Complement or FiniteSet). The domain of f is their union; a point of the domain where
     the formula used there is undefined is a discontinuity.
The key works from the definition at every point where something could go wrong (an end of a
piece, a zero of a denominator, a jump of a floor): f(c) must be finite and equal each one-sided
limit that the domain allows. A one-sided limit is taken on the piece that holds just to that
side of c, never on a Piecewise (sympy can return the wrong side of a jump).
"""
from sympy import (
    Abs, FiniteSet, Union, Rational, S, Symbol, ceiling, floor, fraction, limit, oo, real_roots, solve,
    sympify, together, zoo, nan,
)

x = Symbol("x", real=True)
_EPS = Rational(1, 10**4)


def _pieces(p):
    fs = [sympify(s, locals={"x": x}) for s in p["f"]]
    ds = [sympify(s, locals={"x": x}) for s in p["d"]]
    assert len(fs) == len(ds), "f and d need the same length"
    return list(zip(fs, ds))


def _domain(pieces):
    return Union(*[d for _, d in pieces])


def _finite(v):
    return v.is_finite is True and v not in (zoo, nan, oo, -oo)


def _denominator_zeros(f):
    """Real zeros of every denominator in f (all of them, wherever f is used)."""
    _, q = fraction(together(f))
    return set(solve(q, x)) if q.has(x) else set()


def _floor_jumps(f, lo, hi):
    """Points in [lo, hi] where a floor(a x + b) inside f steps (a linear argument)."""
    out = set()
    for fl in f.atoms(floor):
        g = fl.args[0]
        a, b = g.diff(x), g.subs(x, 0)
        assert not a.has(x) and a != 0, "floor of a linear argument only"
        for n in range(int(floor(min(a * lo + b, a * hi + b))), int(ceiling(max(a * lo + b, a * hi + b))) + 1):
            c = (n - b) / a
            if lo <= c <= hi:
                out.add(c)
    return out


def _breaks(f, d):
    """Where formula f itself breaks, over the closure of the set d it is used on."""
    lo, hi = d.closure.inf, d.closure.sup
    return {c for c in _denominator_zeros(f) if c.is_real} | _floor_jumps(f, lo, hi)


def _piece_at(pieces, c):
    for f, d in pieces:
        if d.contains(c) == True:  # noqa: E712 (sympy truth)
            return f
    return None


def _candidates(pieces):
    pts = set()
    for f, d in pieces:
        pts |= {e for e in d.boundary if e.is_finite} if not isinstance(d, FiniteSet) else set(d)
        pts |= _breaks(f, d)
    return pts


def _limits(pieces, c):
    """(left, right) one-sided limits at c, None where the domain has nothing on that side."""
    out = []
    for side, probe in (("-", c - _EPS), ("+", c + _EPS)):
        f = _piece_at(pieces, probe)
        out.append(None if f is None else limit(f, x, c, side))
    return tuple(out)


def _discontinuous_at(pieces, c):
    f = _piece_at(pieces, c)
    val = f.subs(x, c) if f is not None else zoo
    if not _finite(val):
        return True
    return any(L is not None and L != val for L in _limits(pieces, c))


def key(v, p):
    pieces = _pieces(p)
    dom = _domain(pieces)
    return FiniteSet(*[c for c in _candidates(pieces) if dom.contains(c) == True and _discontinuous_at(pieces, c)])  # noqa: E712


def _differs(v, p, s):
    s = FiniteSet(*s)
    if s == key(v, p):
        raise ValueError("gives the key here")
    return s


def m1(v, p):
    """Counts a formula's breaks where that formula isn't used (outside the interval or its piece)."""
    pieces = _pieces(p)
    extra = {c for f, d in pieces for c in _breaks(f, d) if d.contains(c) != True}  # noqa: E712
    return _differs(v, p, set(key(v, p)) | extra)


def m2(v, p):
    """The limit exists, so f is continuous: misses holes and moved points (removable)."""
    pieces = _pieces(p)
    keep = set()
    for c in key(v, p):
        L, R = _limits(pieces, c)
        sides = [s for s in (L, R) if s is not None]
        if not (sides and all(_finite(s) for s in sides) and len(set(sides)) == 1):
            keep.add(c)
    return _differs(v, p, keep)


def m3(v, p):
    """Counts each closed end of the domain as a discontinuity (no limit from outside)."""
    pieces = _pieces(p)
    dom = _domain(pieces)
    ends = {c for c in _candidates(pieces) if dom.contains(c) == True  # noqa: E712
            and (dom.contains(c - _EPS) != True or dom.contains(c + _EPS) != True)}  # noqa: E712
    return _differs(v, p, set(key(v, p)) | ends)


def m4(v, p):
    """Treats rational functions and [x] as continuous everywhere, like polynomials."""
    pieces = _pieces(p)
    breaks = {c for f, d in pieces for c in _breaks(f, d)}
    return _differs(v, p, {c for c in key(v, p) if c not in breaks})


def m5(v, p):
    """Counts every join of two pieces as a discontinuity, without testing it."""
    pieces = _pieces(p)
    joins = set()
    for i, (_, di) in enumerate(pieces):
        for _, dj in pieces[i + 1:]:
            meet = di.closure.intersect(dj.closure)
            if isinstance(meet, FiniteSet):
                joins |= set(meet)
    return _differs(v, p, set(key(v, p)) | joins)


def m6(v, p):
    """Counts a corner of |u| (where u = 0) as a discontinuity."""
    pieces = _pieces(p)
    corners = set()
    for f, d in pieces:
        for ab in f.atoms(Abs):
            corners |= {c for c in real_roots(ab.args[0].as_poly(x)) if d.contains(c) == True}  # noqa: E712
    return _differs(v, p, set(key(v, p)) | corners)


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
