"""C05 Intersecting and coplanar lines: answer models (the key, and one per misconception).

Inputs: the lines r = a1 + lambda b1 and r = a2 + mu b2, as tuples a1, b1, a2, b2 ("(1, -1, 1)").
An item that asks for an unknown holds it as the one free symbol in the inputs (k or m).

params["ask"]:
  k      the one value of the unknown that makes the lines intersect (a number);
  kset   every value of the unknown that makes the lines intersect (a FiniteSet);
  point  where the lines meet (a Tuple (x, y, z)), or Symbol("no_meet") when they do not.

The key never uses the triple product. Lines meet when some point is on both, so for an unknown the key
solves a1 + lambda b1 = a2 + mu b2 for lambda, mu and the unknown together. The meeting point comes from
the least value of |Q - P|^2 over P on line 1 and Q on line 2 (both partial derivatives set to 0): the
lines meet when that least value is 0, at P.
"""
from sympy import FiniteSet, Matrix, Symbol, Tuple, diff, simplify, solve, symbols

LAM, MU, T = symbols("lambda mu t")
NO_MEET = Symbol("no_meet")


def _v(t):
    return Matrix(list(t))


def _lines(v):
    return _v(v["a1"]), _v(v["b1"]), _v(v["a2"]), _v(v["b2"])


def _unknown(v):
    free = set().union(*(_v(v[n]).free_symbols for n in ("a1", "b1", "a2", "b2")))
    if len(free) != 1:
        raise ValueError(f"expected one unknown, found {free}")
    return free.pop()


def _answer_k(p, ks):
    ks = sorted(set(ks), key=lambda r: float(r))
    if p["ask"] == "kset":
        return FiniteSet(*ks)
    if len(ks) != 1:
        raise ValueError(f"expected one value, found {ks}")
    return ks[0]


def _eqs(v, lam=LAM, mu=MU):
    a1, b1, a2, b2 = _lines(v)
    return list(a1 + lam * b1 - a2 - mu * b2)


def _cross_parallel(v):
    a1, b1, a2, b2 = _lines(v)
    return b1.cross(b2) == Matrix([0, 0, 0])


def _two_eq_params(v):
    """lambda and mu from the first two coordinate equations that fix them, never checking the rest."""
    eqs = _eqs(v)
    for i in range(3):
        for j in range(i + 1, 3):
            sol = solve([eqs[i], eqs[j]], [LAM, MU], dict=True)
            if len(sol) == 1 and LAM in sol[0] and MU in sol[0]:
                return sol[0][LAM], sol[0][MU]
    raise ValueError("no pair of equations fixes lambda and mu")


def _meet(v):
    """The true parameters where the lines meet, or None (the system has no solution)."""
    sol = solve(_eqs(v), [LAM, MU], dict=True)
    if not sol:
        return None
    if LAM not in sol[0] or MU not in sol[0]:
        raise ValueError("the lines coincide")
    return sol[0][LAM], sol[0][MU]


def key(v, p):
    a1, b1, a2, b2 = _lines(v)
    if p["ask"] in ("k", "kset"):
        u = _unknown(v)
        sols = solve(_eqs(v), [LAM, MU, u], dict=True)
        return _answer_k(p, [s[u] for s in sols if u in s])
    if _cross_parallel(v):
        raise ValueError("point items use non-parallel lines")
    lam, mu = symbols("lambda mu", real=True)
    PQ = (a2 + mu * b2) - (a1 + lam * b1)
    d2 = PQ.dot(PQ)
    (sol,) = solve([diff(d2, lam), diff(d2, mu)], [lam, mu], dict=True)
    if simplify(d2.subs(sol)) != 0:
        return NO_MEET
    return Tuple(*(a1 + sol[lam] * b1))


def m1(v, p):
    """Coplanar means meeting: keeps every root of (a2 - a1).(b1 x b2) = 0, a parallel one too."""
    if p["ask"] != "kset":
        raise ValueError("needs an unknown that can make the lines parallel")
    a1, b1, a2, b2 = _lines(v)
    u = _unknown(v)
    roots = solve((a2 - a1).dot(b1.cross(b2)), u)
    out = _answer_k(p, roots)
    if out == key(v, p):
        raise ValueError("no root makes the lines parallel: the mistake gives the key")
    return out


def m2(v, p):
    """Assumes non-parallel lines meet: solves two coordinate equations, never checks the third."""
    if p["ask"] != "point":
        raise ValueError("point items only")
    if _meet(v) is not None:
        raise ValueError("the lines do meet: the mistake gives the key")
    a1, b1, a2, b2 = _lines(v)
    lam, mu = _two_eq_params(v)
    return Tuple(*(a1 + lam * b1))


def m3(v, p):
    """Uses one parameter t for both lines: a1 + t b1 = a2 + t b2. It takes t from the first equation
    that fixes it (free of any unknown), then puts t into line 1, or into the first equation holding
    the unknown."""
    a1, b1, a2, b2 = _lines(v)
    eqs = _eqs(v, T, T)
    u = _unknown(v) if p["ask"] in ("k", "kset") else None
    t0 = None
    for e in eqs:
        if u is not None and u in e.free_symbols:
            continue
        s = solve(e, T)
        if len(s) == 1:
            t0 = s[0]
            break
    if t0 is None:
        raise ValueError("no equation fixes t")
    if u is None:
        return Tuple(*(a1 + t0 * b1))
    for e in eqs:
        if u in e.free_symbols:
            return _answer_k(p, solve(e.subs(T, t0), u))
    raise ValueError("no equation holds the unknown")


def m4(v, p):
    """Swaps the parameters when substituting back: puts lambda into line 2 (and mu into line 1)."""
    a1, b1, a2, b2 = _lines(v)
    if p["ask"] == "point":
        met = _meet(v)
        lam, mu = met if met is not None else _two_eq_params(v)
        if lam == mu:
            raise ValueError("lambda = mu: the swap gives the key")
        return Tuple(*(a2 + lam * b2))
    u = _unknown(v)
    eqs = _eqs(v)
    free = [e for e in eqs if u not in e.free_symbols]
    sol = solve(free, [LAM, MU], dict=True)
    if len(sol) != 1 or LAM not in sol[0] or MU not in sol[0]:
        raise ValueError("the equations free of the unknown do not fix lambda and mu")
    lam, mu = sol[0][LAM], sol[0][MU]
    i = next(i for i, e in enumerate(eqs) if u in e.free_symbols)
    swapped = (a1 + mu * b1 - a2 - lam * b2)[i]
    return _answer_k(p, solve(swapped, u))


def m5(v, p):
    """Expands b1 x b2 without the minus sign on the j term, then solves the triple product = 0."""
    if p["ask"] not in ("k", "kset"):
        raise ValueError("unknown items only")
    a1, b1, a2, b2 = _lines(v)
    n = b1.cross(b2)
    n = Matrix([n[0], -n[1], n[2]])
    if simplify(n[1]) == 0:
        raise ValueError("the j component is 0: the slip gives the key")
    return _answer_k(p, solve((a2 - a1).dot(n), _unknown(v)))


def m6(v, p):
    """Forgets the starting point: gives the meeting point as lambda b1, not a1 + lambda b1."""
    if p["ask"] != "point":
        raise ValueError("point items only")
    met = _meet(v)
    if met is None:
        raise ValueError("the lines do not meet")
    a1, b1, a2, b2 = _lines(v)
    if a1 == Matrix([0, 0, 0]):
        raise ValueError("a1 = 0: the slip gives the key")
    return Tuple(*(met[0] * b1))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
