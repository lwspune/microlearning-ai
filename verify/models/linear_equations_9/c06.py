"""C06 Two-digit numbers: answer models (the key, and one per misconception).

A two-digit number has tens digit t and units digit u: the number is N = 10t + u, the number
with its digits interchanged is R = 10u + t, and the sum of its digits is S = t + u.

Params (strings):
ask: "number" (default) - find the number from two facts;
     "rev"    - the expression for R when the tens digit is x and the units digit is y;
     "excess" - the expression for how much R exceeds N (R - N), in the same letters.
c1, c2 (ask "number"): the two facts the stem gives, each one of
  "sum"  : S = s                       (inputs: s)
  "ksum" : N = k S + c                 (inputs: k, c; c > 0 "c more than", c < 0 "less than")
  "diff" : R - N = d                   (inputs: d; d < 0 means the number exceeds R by -d)
  "rlin" : R = a N + b                 (inputs: a, b; b < 0 "-b less than a times the number")
  "rsum" : N + R = q                   (inputs: q)
phrase (optional): "exceeds" when the "diff" fact is worded "... exceeds ... by d" (C06-M3).
"""
from sympy import Symbol, linsolve, symbols

_t, _u = symbols("t u")
_x, _y = Symbol("x", real=True), Symbol("y", real=True)


def _ask(p):
    return p.get("ask", "number")


def _fact(kind, v, flip_const=False, bracket=False, flip_diff=False):
    """The fact as an expression in t, u that equals 0."""
    N, R, S = 10 * _t + _u, 10 * _u + _t, _t + _u
    if kind == "sum":
        return S - v["s"]
    if kind == "ksum":
        c = -v["c"] if flip_const else v["c"]
        rhs = v["k"] * (S + c) if bracket else v["k"] * S + c
        return N - rhs
    if kind == "diff":
        d = -v["d"] if flip_diff else v["d"]
        return R - N - d
    if kind == "rlin":
        b = -v["b"] if flip_const else v["b"]
        rhs = v["a"] * (N + b) if bracket else v["a"] * N + b
        return R - rhs
    if kind == "rsum":
        return N + R - v["q"]
    raise ValueError(f"unknown fact {kind}")


def _digits(p, v, **kw):
    eqs = [_fact(p[c], v, **kw) for c in ("c1", "c2")]
    sol = linsolve(eqs, _t, _u)
    if len(sol) != 1:
        raise ValueError("no unique solution")
    (t, u), = sol
    if t.free_symbols or u.free_symbols:
        raise ValueError("no unique solution")
    return t, u


def _number(t, u, strict=True):
    """10t + u. The key needs true digits; a mistake only needs whole numbers giving a two-digit result."""
    if strict and not (t.is_integer and u.is_integer and 1 <= t <= 9 and 0 <= u <= 9):
        raise ValueError(f"digits {t}, {u} don't make a two-digit number")
    if not (t.is_integer and u.is_integer and 10 <= 10 * t + u <= 99):
        raise ValueError(f"digits {t}, {u} don't give a two-digit number")
    return 10 * t + u


def _has(p, *kinds):
    return any(p.get(c) in kinds for c in ("c1", "c2"))


def _consts(v, p):
    """The 'more than' / 'less than' constants the stem gives."""
    out = []
    if _has(p, "ksum"):
        out.append(v["c"])
    if _has(p, "rlin"):
        out.append(v["b"])
    return [c for c in out if c != 0]


def _number_only(p):
    if _ask(p) != "number":
        raise ValueError("applies only when finding the number")


def key(v, p):
    """Straight from the definition: N = 10t + u, R = 10u + t; the digits that satisfy both facts."""
    if _ask(p) == "rev":
        return 10 * _y + _x
    if _ask(p) == "excess":
        return (10 * _y + _x) - (10 * _x + _y)
    return _number(*_digits(p, v))


def m1(v, p):
    """Mixes up the place values: writes the number as 10 x units + tens, so ends with it reversed."""
    if _ask(p) == "rev":
        return 10 * _x + _y
    if _ask(p) == "excess":
        return (10 * _x + _y) - (10 * _y + _x)
    t, u = _digits(p, v)
    _number(t, u)
    if t == u or u == 0:
        raise ValueError("the interchanged number is the same or not two-digit")
    return _number(u, t)


def m2(v, p):
    """Puts a 'more than' / 'less than' number on the wrong side: N = kS + 3 written as N + 3 = kS."""
    _number_only(p)
    if not _consts(v, p):
        raise ValueError("no 'more than' / 'less than' constant")
    return _number(*_digits(p, v, flip_const=True), strict=False)


def m3(v, p):
    """Subtracts the wrong way round in 'R exceeds N by d', working out N - R."""
    if _ask(p) == "excess":
        return (10 * _x + _y) - (10 * _y + _x)
    _number_only(p)
    if not _has(p, "diff") or p.get("phrase") != "exceeds":
        raise ValueError("no 'exceeds' fact")
    return _number(*_digits(p, v, flip_diff=True), strict=False)


def m4(v, p):
    """Puts the 'more than' / 'less than' number inside the bracket: 3 more than 4S written as 4(S + 3)."""
    _number_only(p)
    if not _consts(v, p):
        raise ValueError("no 'more than' / 'less than' constant")
    return _number(*_digits(p, v, bracket=True), strict=False)


def m5(v, p):
    """Ignores place value: treats each number as just its digits added (or subtracted)."""
    if _ask(p) == "rev":
        return _y + _x
    if _ask(p) == "excess":
        return _y - _x
    raise ValueError("applies only to writing the numbers")


def m6(v, p):
    """Writes the digits side by side, yx, which in algebra means y times x."""
    if _ask(p) == "rev":
        return _y * _x
    if _ask(p) == "excess":
        return _y * _x - _x * _y
    raise ValueError("applies only to writing the numbers")


MODELS = {"key": key, "C06-M1": m1, "C06-M2": m2, "C06-M3": m3, "C06-M4": m4, "C06-M5": m5, "C06-M6": m6}
