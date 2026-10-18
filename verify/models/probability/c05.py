"""C05 The addition theorem: answer models (the key, and one per misconception).

Inputs, one of:
  - probabilities: pa = P(A); pb = P(B) or pbc = P(B'); and pab = P(A ∩ B) or pu = P(A ∪ B);
  - counts, with params["data"]:
      "shirts"   n shirts, `white` of them white (the rest black), wp white and bp black ones
                 tagged party wear; A = black, B = party wear;
      "tickets"  tickets 1..n; A and B are named by params["A"], params["B"]
                 ("square", "div4", "prime", "gt40").
params["ask"]: union (P(A ∪ B)), inter (P(A ∩ B)), neither (P(A' ∩ B')), exactly (exactly one),
notboth (P(A' ∪ B')), a (P(A)).
"""
from sympy import Rational, isprime, linsolve, sqrt, symbols

_X, _Y, _Z, _W = symbols("x y z w")  # A only, B only, both, neither

_PRED = {
    "square": lambda k: sqrt(k).is_Integer,
    "div4": lambda k: k % 4 == 0,
    "prime": lambda k: isprime(k),
    "gt40": lambda k: k > 40,
}


def _counts(v, p):
    """n(S), and for each outcome whether it is in A and in B, listed one by one."""
    d = p["data"]
    if d == "shirts":
        n, white, wp, bp = (int(v[k]) for k in ("n", "white", "wp", "bp"))
        shirts = [("white", i < wp) for i in range(white)] + [("black", i < bp) for i in range(n - white)]
        return n, [(c == "black", party) for c, party in shirts]
    if d == "tickets":
        n = int(v["n"])
        a, b = _PRED[p["A"]], _PRED[p["B"]]
        return n, [(bool(a(k)), bool(b(k))) for k in range(1, n + 1)]
    raise ValueError(d)


def _given(v, p):
    """What the stem gives, as probabilities: pa, pb or pbc, pab or pu."""
    if "data" in p:
        n, out = _counts(v, p)
        return {
            "pa": Rational(sum(a for a, _ in out), n),
            "pb": Rational(sum(b for _, b in out), n),
            "pab": Rational(sum(a and b for a, b in out), n),
        }
    return {k: v[k] for k in ("pa", "pb", "pbc", "pab", "pu") if k in v}


def _ask(p):
    return p["ask"]


def key(v, p):
    # Straight from the definition: the four Venn regions (A only, B only, both, neither)
    # are mutually exclusive and exhaustive, so their probabilities add to 1; each given
    # probability is a sum of regions. Solve for the regions, then add the asked ones.
    if "data" in p:
        n, out = _counts(v, p)
        x = Rational(sum(a and not b for a, b in out), n)
        y = Rational(sum(b and not a for a, b in out), n)
        z = Rational(sum(a and b for a, b in out), n)
        w = 1 - x - y - z
    else:
        g = _given(v, p)
        region = {"pa": _X + _Z, "pb": _Y + _Z, "pbc": _X + _W, "pab": _Z, "pu": _X + _Y + _Z}
        eqs = [_X + _Y + _Z + _W - 1] + [region[k] - val for k, val in g.items()]
        (x, y, z, w), = linsolve(eqs, [_X, _Y, _Z, _W])
    return {
        "union": x + y + z,
        "inter": z,
        "neither": w,
        "exactly": x + y,
        "notboth": x + y + w,
        "a": x + z,
    }[_ask(p)]


def _pb(g):
    return g["pb"] if "pb" in g else 1 - g["pbc"]


def _pab(g):
    """P(A ∩ B), from the theorem when the union is given (for models that get this step right)."""
    if "pab" in g:
        return g["pab"]
    return g["pa"] + _pb(g) - g["pu"]


def m1(v, p):
    """Just adds: takes P(A ∪ B) = P(A) + P(B), dropping the overlap (as if mutually exclusive)."""
    g, a = _given(v, p), _ask(p)
    if "pu" in g and a != "a":
        raise ValueError("the union is given; nothing to add")
    if a in ("union", "exactly"):
        return g["pa"] + _pb(g)
    if a == "neither":
        return 1 - (g["pa"] + _pb(g))
    if a == "a":
        return g["pu"] - _pb(g)
    raise ValueError(a)


def m2(v, p):
    """De Morgan swapped: P(A' ∩ B') = 1 - P(A ∩ B) and P(A' ∪ B') = 1 - P(A ∪ B)."""
    g, a = _given(v, p), _ask(p)
    pab = _pab(g)
    if a == "neither":
        return 1 - pab
    if a == "notboth":
        return 1 - (g["pa"] + _pb(g) - pab)
    raise ValueError(a)


def m3(v, p):
    """Treats "A or B" (at least one) and "exactly one" as the same event:
    takes P(at least one) = P(A) + P(B) - 2P(A ∩ B), and P(exactly one) = P(A ∪ B)."""
    g, a = _given(v, p), _ask(p)
    pa, pb = g.get("pa"), _pb(g)
    if a == "exactly":
        return pa + pb - _pab(g)
    if a == "a":  # reads the given P(A ∪ B) as P(A) + P(B) - 2P(A ∩ B), solved for P(A)
        return g["pu"] - pb + 2 * g["pab"]
    if "pu" in g:
        if a == "inter":  # reads the given P(A ∪ B) as P(exactly one)
            return (pa + pb - g["pu"]) / 2
        if a == "neither":  # complements "exactly one" instead of "at least one"
            return 1 - (pa + pb - 2 * _pab(g))
        raise ValueError(a)
    if a == "union":
        return pa + pb - 2 * g["pab"]
    if a == "neither":
        return 1 - (pa + pb - 2 * g["pab"])
    raise ValueError(a)


def m4(v, p):
    """Multiplies for "and": takes P(A ∩ B) = P(A) P(B) and P(A' ∩ B') = P(A') P(B')."""
    g, a = _given(v, p), _ask(p)
    if "pab" in g:
        raise ValueError("P(A ∩ B) is given")
    pa, pb = g["pa"], _pb(g)
    if a == "inter":
        return pa * pb
    if a == "neither":
        return (1 - pa) * (1 - pb)
    raise ValueError(a)


def m5(v, p):
    """Uses the given P(B') as if it were P(B)."""
    if "pbc" not in v:
        raise ValueError("P(B') is not given")
    w = dict(v)
    w["pb"] = w.pop("pbc")
    return key(w, p)


def m6(v, p):
    """Sign slip in the theorem: P(A ∪ B) = P(A) + P(B) + P(A ∩ B)."""
    g, a = _given(v, p), _ask(p)
    if a != "union" or "pab" not in g:
        raise ValueError(a)
    return g["pa"] + _pb(g) + g["pab"]


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
