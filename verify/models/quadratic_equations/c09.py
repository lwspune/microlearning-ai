"""C09 Roots of given signs: answer models (the key, and one per misconception).

The item's equation is a x^2 + b x + c = 0, with v["a"], v["b"], v["c"] expressions in the
parameter (p["var"], default "k"). p["ask"] picks the question type:
  pos         the set of parameter values giving two real roots, both positive
  neg         ... both negative
  opp         ... roots of opposite signs
  opp_neg     ... opposite signs, the negative root larger in size
  opp_pos     ... opposite signs, the positive root larger in size
  between     ... the number v["n"] lying strictly between the roots
  gt          ... both roots greater than v["n"]
  in          ... both roots strictly inside (v["lo"], v["hi"])
p["count"] = "int" asks instead for the number of integer parameter values in that set.
Equal roots count as two real roots. A parameter value making a = 0 is never allowed: the
equation is then not a quadratic.

The key solves the equation at each parameter value and tests its actual roots. Its region is
built by testing one value inside each gap between the critical values (where a, b, c, D or
f(n) vanish, the only places a root can be born, die, or cross a number) and each critical value
itself. The misconception models apply a coefficient test (a wrong one) the same way.
"""
from sympy import (
    FiniteSet, Integer, Interval, Poly, S, Symbol, Union, ceiling, floor, fraction, nsimplify,
    real_roots, simplify, sqrt, together,
)

_ASKS = ("pos", "neg", "opp", "opp_neg", "opp_pos", "between", "gt", "in")


def _ask(p):
    a = p["ask"]
    if a not in _ASKS:
        raise ValueError(a)
    return a


def _var(p):
    return Symbol(p.get("var", "k"))


def _points(v, p):
    """The numbers the question compares the roots with."""
    a = _ask(p)
    if a in ("between", "gt"):
        return [v["n"]]
    if a == "in":
        return [v["lo"], v["hi"]]
    return [Integer(0)]


# ---------- the key: from the roots themselves ----------

def _roots_at(a, b, c):
    """The two real roots (smaller first) of a x^2 + b x + c = 0, or None if not real."""
    d = simplify(b**2 - 4 * a * c)
    if d.is_negative:
        return None
    r1, r2 = (-b - sqrt(d)) / (2 * a), (-b + sqrt(d)) / (2 * a)
    return (r1, r2) if simplify(r2 - r1).is_nonnegative else (r2, r1)


def _pos(e):
    e = simplify(e)
    assert e.is_comparable, e
    return bool(e > 0)


def _true_at(abc, v, p):
    a, b, c = abc
    if simplify(a) == 0:
        return False
    rs = _roots_at(a, b, c)
    if rs is None:
        return False
    r1, r2 = rs
    ask = _ask(p)
    if ask == "pos":
        return _pos(r1)
    if ask == "neg":
        return _pos(-r2)
    if ask in ("opp", "opp_neg", "opp_pos"):
        if not (_pos(-r1) and _pos(r2)):
            return False
        if ask == "opp":
            return True
        return _pos(-r1 - r2) if ask == "opp_neg" else _pos(r2 + r1)
    if ask == "between":
        return _pos(v["n"] - r1) and _pos(r2 - v["n"])
    if ask == "gt":
        return _pos(r1 - v["n"])
    if ask == "in":
        return _pos(r1 - v["lo"]) and _pos(v["hi"] - r2)
    raise ValueError(ask)


# ---------- the region of parameter values ----------

def _zeros(e, k):
    """Real zeros of the numerator and denominator of a rational expression in k."""
    num, den = fraction(together(simplify(e)))
    out = set()
    for part in (num, den):
        if part.has(k):
            out |= set(real_roots(Poly(part, k)))
    return out


def _critical(v, p):
    k = _var(p)
    a, b, c = v["a"], v["b"], v["c"]
    exprs = [a, b, c, b**2 - 4 * a * c]
    for t in _points(v, p):
        # f(t), and the vertex -b/2a (or the slips b/2a, -b/2) meeting t
        exprs += [a * t**2 + b * t + c, b + 2 * a * t, b - 2 * a * t, b + 2 * t]
    zs = set()
    for e in exprs:
        zs |= _zeros(e, k)
    return sorted(zs, key=lambda z: float(z))


def _between(lo, hi):
    """A rational strictly between lo and hi."""
    m = nsimplify((float(lo) + float(hi)) / 2, rational=True)
    if not (lo < m < hi):
        m = (lo + hi) / 2
    return m


def _region(test, v, p):
    """The set of k where test(a, b, c) holds, a != 0, assembled gap by gap."""
    cs = _critical(v, p)
    gaps = [(S.NegativeInfinity, cs[0])] if cs else [(S.NegativeInfinity, S.Infinity)]
    for i in range(len(cs) - 1):
        gaps.append((cs[i], cs[i + 1]))
    if cs:
        gaps.append((cs[-1], S.Infinity))
    parts = []
    for lo, hi in gaps:
        if lo == S.NegativeInfinity and hi == S.Infinity:
            m = Integer(0)
        elif lo == S.NegativeInfinity:
            m = Integer(floor(hi)) - 1
        elif hi == S.Infinity:
            m = Integer(ceiling(lo)) + 1
        else:
            m = _between(lo, hi)
        if _holds(test, v, p, m):
            parts.append(Interval.open(lo, hi))
    for z in cs:
        if _holds(test, v, p, z):
            parts.append(FiniteSet(z))
    return Union(*parts) if parts else S.EmptySet


def _holds(test, v, p, kv):
    k = _var(p)
    abc = [simplify(e.subs(k, kv)) if hasattr(e, "subs") else e for e in (v["a"], v["b"], v["c"])]
    if simplify(abc[0]) == 0:
        return False
    return test(abc)


def _answer(test, v, p):
    reg = _region(test, v, p)
    if p.get("count") == "int":
        if reg == S.EmptySet:
            return Integer(0)
        if not reg.is_subset(Interval(-10**6, 10**6)):
            raise ValueError("unbounded: no count")
        lo, hi = floor(reg.inf), ceiling(reg.sup)
        return Integer(sum(1 for n in range(int(lo), int(hi) + 1) if Integer(n) in reg))
    return reg


def key(v, p):
    return _answer(lambda abc: _true_at(abc, v, p), v, p)


# ---------- the coefficient tests, and the misconceptions as variants of them ----------

def _coeff_test(v, p, skip_d=False, skip_s=False, slip_s=False, drop_a=False, rev_f=False, at_zero=False):
    """The textbook tests on a, b, c (with the given mistake switched on)."""
    ask = _ask(p)
    pts = [Integer(0)] if at_zero else _points(v, p)

    def test(abc):
        a, b, c = abc
        A = Integer(1) if drop_a else a
        d = b**2 - 4 * a * c
        s = (b if slip_s else -b) / A          # the sum of the roots
        pr = c / A                              # the product
        # a f(t), or plain f(t) when a is left out
        f = (lambda t: a * t**2 + b * t + c) if drop_a else (lambda t: a * (a * t**2 + b * t + c))
        half = lambda: s / 2                    # the vertex, halfway between the roots
        real = True if skip_d else not _pos(-d)
        if ask in ("pos", "neg"):
            sign_ok = True if skip_s else (_pos(s) if ask == "pos" else _pos(-s))
            return real and sign_ok and _pos(pr)
        if ask in ("opp", "opp_neg", "opp_pos"):
            if not _pos(-pr):
                return False
            if ask == "opp" or skip_s:
                return True
            return _pos(-s) if ask == "opp_neg" else _pos(s)
        if ask == "between":
            (t,) = pts
            return _pos(f(t)) if rev_f else _pos(-f(t))
        if ask in ("gt", "in"):
            out = [(_pos(-f(t)) if rev_f else _pos(f(t))) for t in pts]
            if ask == "gt":
                vert = True if skip_s else _pos(half() - pts[0])
            else:
                vert = True if skip_s else (_pos(half() - pts[0]) and _pos(pts[1] - half()))
            return real and all(out) and vert
        raise ValueError(ask)

    return test


def _run(v, p, **mistake):
    return _answer(_coeff_test(v, p, **mistake), v, p)


def m1(v, p):
    """Skips the discriminant: takes the sign tests on the sum and product (or a f(k)) as enough."""
    if _ask(p) not in ("pos", "neg", "gt", "in"):
        raise ValueError("D >= 0 is automatic here")
    return _run(v, p, skip_d=True)


def m2(v, p):
    """Skips the sum: a positive product (or a f(k) > 0) is taken to settle the signs."""
    if _ask(p) not in ("pos", "neg", "opp_neg", "opp_pos", "gt", "in"):
        raise ValueError("no sum condition to skip")
    return _run(v, p, skip_s=True)


def m3(v, p):
    """Drops the minus sign in the sum: alpha + beta = b/a (so the vertex is b/2a)."""
    if _ask(p) not in ("pos", "neg", "opp_neg", "opp_pos", "gt", "in"):
        raise ValueError("no sum in the test")
    return _run(v, p, slip_s=True)


def m4(v, p):
    """Leaves out a: reads the signs of -b, c and f(k) as if a were 1."""
    return _run(v, p, drop_a=True)


def m5(v, p):
    """Forgets to shift: tests the roots against 0 when the question names another number."""
    if _ask(p) not in ("between", "gt") or v["n"] == 0:
        raise ValueError("only for a nonzero number")
    return _run(v, p, at_zero=True)


def m6(v, p):
    """Reverses the between test: takes a f(k) > 0 to put k between the roots."""
    if _ask(p) not in ("between", "gt", "in"):
        raise ValueError("only with a f(k)")
    return _run(v, p, rev_f=True)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
