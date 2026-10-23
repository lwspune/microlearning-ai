"""C02 Word problems with ratios: answer models (the key, and one per misconception).

Params (strings):
  kind="ratio": two quantities in the ratio a : b, and one more fact:
    fact="sum"     total=S          the quantities add up to S (angles: S = 180)
    fact="diff"    total=D          the second exceeds the first by D
    fact="product" total=P          the quantities multiply to P
    fact="shift"   n=N, c=C, d=D2   after N is added to both, the ratio is C : D2
    ask="1" or "2"  which quantity the question asks for
  kind="work": p persons finish a job in d1 days; how many persons finish it in d2 days?
"""
from sympy import Symbol, solve, sympify

_x, _y = Symbol("qx", positive=True), Symbol("qy", positive=True)


def _n(p, k):
    return sympify(p[k])


def _ratio(p, extra_first=0, extra_second=0):
    """The two quantities straight from the facts (no multiplier): x/y = a/b plus the other fact."""
    a, b = _n(p, "a"), _n(p, "b")
    eqs = [b * _x - a * _y]
    f = p["fact"]
    if f == "sum":
        eqs.append(_x + _y - _n(p, "total"))
    elif f == "diff":
        eqs.append(_y - _x - _n(p, "total"))
    elif f == "product":
        eqs.append(_x * _y - _n(p, "total"))
    elif f == "shift":
        n, c, d = _n(p, "n"), _n(p, "c"), _n(p, "d")
        eqs.append(d * (_x + n) - c * (_y + n))
    else:
        raise ValueError(f"unknown fact {f}")
    sol = solve(eqs, [_x, _y], dict=True)
    if len(sol) != 1:
        raise ValueError("no single solution")
    return sol[0][_x], sol[0][_y]


def _asked(p, pair):
    return pair[0] if p["ask"] == "1" else pair[1]


def _other(p, pair):
    return pair[1] if p["ask"] == "1" else pair[0]


def _need(p, kind):
    if p["kind"] != kind:
        raise ValueError(f"needs a {kind} question")


def key(v, p):
    if p["kind"] == "work":
        return _n(p, "p") * _n(p, "d1") / _n(p, "d2")  # the total work (person-days) stays the same
    return _asked(p, _ratio(p))


def m1(v, p):
    """Takes the ratio's terms as the quantities themselves (no multiplier)."""
    _need(p, "ratio")
    return _asked(p, (_n(p, "a"), _n(p, "b")))


def m2(v, p):
    """Stops one step early: gives the multiplier k (or the total person-days) as the answer."""
    if p["kind"] == "work":
        return _n(p, "p") * _n(p, "d1")
    x, _ = _ratio(p)
    return x / _n(p, "a")


def m3(v, p):
    """Gives the other quantity: the one the question did not ask for."""
    _need(p, "ratio")
    return _other(p, _ratio(p))


def m4(v, p):
    """Gives the quantity after the change (age after n years) instead of the present one."""
    _need(p, "ratio")
    if p["fact"] != "shift":
        raise ValueError("needs a number added to both")
    return _asked(p, _ratio(p)) + _n(p, "n")


def m5(v, p):
    """Treats persons and days as directly proportional: fewer days, fewer persons."""
    _need(p, "work")
    return _n(p, "p") * _n(p, "d2") / _n(p, "d1")


def m6(v, p):
    """Thinks in differences: finishing 4 days sooner needs 4 more persons."""
    _need(p, "work")
    return _n(p, "p") + (_n(p, "d1") - _n(p, "d2"))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
