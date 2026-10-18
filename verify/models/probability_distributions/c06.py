"""C06 Cumulative distribution function: answer models (the key, and one per misconception).

Params: ask, one of
  "F"         F(c) of a discrete X from its p.m.f. Inputs: xs, ps (tuples), c.
  "interval"  P(a <= X <= b) of a discrete X from its c.d.f. table (a = b for P(X = a)).
              Inputs: xs, Fs (tuples), a, b.
  "Fexpr"     F(x) of a continuous X on one piece lo < x < hi of its range, as an expression in x.
              Inputs: cuts (the range's ends and joins), fs (one p.d.f. formula per piece), lo, hi.
  "gt"        P(X > c) of a continuous X. Inputs: cuts, fs, c.
The key works from the definition F(x) = P(X <= x): it adds the p.m.f. over the values at or
below x, or integrates the p.d.f. from the left end of its range; probabilities come from the
p.m.f. recovered by differences (discrete) or from 1 - F (continuous).
"""
from sympy import S, Symbol, integrate, sympify

X = Symbol("x", real=True)
_T = Symbol("t", real=True)


def _real_x(e):
    e = sympify(e)
    return e.xreplace({s: X for s in e.free_symbols if s.name == "x"})


def _seq(v, k):
    return [_real_x(e) for e in v[k]]


# ---------- discrete ----------

def _F_pmf(xs, ps, c):
    """P(X <= c): the p.m.f. added over the values at or below c."""
    return sum((p for x, p in zip(xs, ps) if x <= c), S.Zero)


def _pmf_from_F(xs, Fs):
    """P(X = x_i) = F(x_i) - F(x_(i-1)), with F = 0 before the first value."""
    return [F - (Fs[i - 1] if i else 0) for i, F in enumerate(Fs)]


def _F_tab(xs, Fs, c):
    """F at any c from a c.d.f. table: the value at the last listed x <= c (a step function)."""
    out = S.Zero
    for x, F in zip(xs, Fs):
        if x <= c:
            out = F
    return out


# ---------- continuous ----------

def _area(cuts, fs, lo, hi):
    """The integral of the p.d.f. (piece i on cuts[i] < t < cuts[i+1]) from lo to hi (numbers)."""
    total = S.Zero
    for i, f in enumerate(fs):
        a, b = max(cuts[i], lo), min(cuts[i + 1], hi)
        if a < b:
            total += integrate(f.subs(X, _T), (_T, a, b))
    return total


def _piece_at(cuts, fs, lo, hi):
    i = next(i for i in range(len(fs)) if cuts[i] == lo and cuts[i + 1] == hi)
    return fs[i]


def _F_expr(cuts, fs, lo, hi, start):
    """The integral of the p.d.f. from `start` up to x, for lo < x < hi."""
    f = _piece_at(cuts, fs, lo, hi)
    return (_area(cuts, fs, start, lo) + integrate(f.subs(X, _T), (_T, lo, X))).expand()


def _f_at(cuts, fs, c):
    for i, f in enumerate(fs):
        if cuts[i] < c < cuts[i + 1]:
            return f.subs(X, c)
    return S.Zero


# ---------- models ----------

def key(v, p):
    ask = p["ask"]
    if ask == "F":
        return _F_pmf(_seq(v, "xs"), _seq(v, "ps"), v["c"])
    if ask == "interval":
        xs, Fs = _seq(v, "xs"), _seq(v, "Fs")
        return sum((q for x, q in zip(xs, _pmf_from_F(xs, Fs)) if v["a"] <= x <= v["b"]), S.Zero)
    cuts, fs = _seq(v, "cuts"), _seq(v, "fs")
    if ask == "Fexpr":
        return _F_expr(cuts, fs, v["lo"], v["hi"], cuts[0])
    if ask == "gt":
        return _area(cuts, fs, v["c"], cuts[-1])
    raise ValueError(ask)


def m1(v, p):
    """F(c) and P(X = c) (or f(c)) taken as the same number: the value at c, not the total up to c."""
    ask = p["ask"]
    if ask == "F":
        xs, ps = _seq(v, "xs"), _seq(v, "ps")
        return next((q for x, q in zip(xs, ps) if x == v["c"]), S.Zero)
    if ask == "interval":  # reads the c.d.f. table as if it were the p.m.f.
        xs, Fs = _seq(v, "xs"), _seq(v, "Fs")
        return sum((F for x, F in zip(xs, Fs) if v["a"] <= x <= v["b"]), S.Zero)
    cuts, fs = _seq(v, "cuts"), _seq(v, "fs")
    if ask == "Fexpr":
        return _piece_at(cuts, fs, v["lo"], v["hi"])
    if ask == "gt":
        return 1 - _f_at(cuts, fs, v["c"])
    raise ValueError(ask)


def m2(v, p):
    """F(c) read as P(X < c): the total stops before c, so each jump seems to come just after its value."""
    ask = p["ask"]
    if ask == "F":
        xs, ps = _seq(v, "xs"), _seq(v, "ps")
        return sum((q for x, q in zip(xs, ps) if x < v["c"]), S.Zero)
    if ask == "interval":  # P(a <= X <= b) = P(X < next value after b) - P(X < a), each P(X < c) read as F(c)
        xs, Fs = _seq(v, "xs"), _seq(v, "Fs")
        after = [x for x in xs if x > v["b"]]
        top = _F_tab(xs, Fs, after[0]) if after else S.One
        return top - _F_tab(xs, Fs, v["a"])
    raise ValueError("discrete only: for a continuous X, P(X < c) = P(X <= c)")


def m3(v, p):
    """Integrates the p.d.f. from 0 instead of from the left end of its range."""
    if p["ask"] not in ("Fexpr", "gt"):
        raise ValueError("continuous only")
    cuts, fs = _seq(v, "cuts"), _seq(v, "fs")
    if cuts[0] == 0:
        raise ValueError("the range starts at 0: same as the key")
    if p["ask"] == "Fexpr":
        if v["lo"] < 0:
            raise ValueError("piece left of 0")
        return _F_expr(cuts, fs, v["lo"], v["hi"], 0)
    if v["c"] < 0:
        raise ValueError("c left of 0")
    return 1 - _area(cuts, fs, 0, v["c"])


def m4(v, p):
    """The wrong side of c: P(X > c) taken for F(c) (or F(c) for P(X > c)), i.e. 1 - the answer."""
    if p["ask"] not in ("F", "Fexpr", "gt"):
        raise ValueError("a one-sided question only")
    return (1 - key(v, p)).expand()


def m5(v, p):
    """Joins the listed values of F with straight lines (an ogive) instead of steps."""
    if p["ask"] != "F":
        raise ValueError("F(c) of a discrete X only")
    xs, ps, c = _seq(v, "xs"), _seq(v, "ps"), v["c"]
    if c in xs or not xs[0] < c < xs[-1]:
        raise ValueError("c is a listed value or outside them: same as the key")
    i = max(j for j, x in enumerate(xs) if x < c)
    lo, hi = _F_pmf(xs, ps, xs[i]), _F_pmf(xs, ps, xs[i + 1])
    return lo + (c - xs[i]) / (xs[i + 1] - xs[i]) * (hi - lo)


def m6(v, p):
    """P(a <= X <= b) = F(b) - F(a) for a discrete X, as for a continuous one (drops P(X = a))."""
    if p["ask"] != "interval":
        raise ValueError("interval only")
    xs, Fs = _seq(v, "xs"), _seq(v, "Fs")
    return _F_tab(xs, Fs, v["b"]) - _F_tab(xs, Fs, v["a"])


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
