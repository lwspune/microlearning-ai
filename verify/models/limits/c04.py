"""C04 Rationalizing: answer models (the key, and one per misconception).

Inputs (sympy expressions in the limit variable, named by param `var`, default "x"):
  at        the point a the variable tends to;
  P, Q      the root difference sqrt(P) - sqrt(Q) (Q may be a number: 9 for the 3 in sqrt(x + 4) - 3);
  D         the other part of the fraction (kind "num" or "den");
  R, S      the second root difference sqrt(R) - sqrt(S) (kind "both").
Param `kind`:
  "num"   f = (sqrt P - sqrt Q) / D
  "den"   f = D / (sqrt P - sqrt Q)
  "both"  f = (sqrt P - sqrt Q) / (sqrt R - sqrt S)
A plain letter `a` in the inputs is a positive constant; answers keep it as the plain symbol a.

The key is sympy's limit of f itself. Each misconception works from the rationalized form:
sqrt P - sqrt Q becomes P - Q, the conjugate sqrt P + sqrt Q lands on the other side of the fraction,
and is evaluated at x = a, where sqrt P(a) = sqrt Q(a).
"""
from sympy import Symbol, limit, simplify, sqrt

A_PLAIN = Symbol("a")
A_POS = Symbol("a", positive=True)
T = Symbol("t", real=True)


def _setup(v, p):
    """The inputs with the limit variable as T and a positive; and the point."""
    name = p.get("var", "x")
    out = {}
    for k, e in v.items():
        if k == "at":
            continue
        subs = {s: T for s in e.free_symbols if s.name == name}
        subs.update({s: A_POS for s in e.free_symbols if s.name == "a"})
        out[k] = e.subs(subs)
    at = v["at"].subs({s: A_POS for s in v["at"].free_symbols if s.name == "a"})
    return out, at


def _back(e):
    return simplify(simplify(e).subs(A_POS, A_PLAIN))


def _lim(e, at):
    return limit(e, T, at, dir="+-")


def _f(u, kind):
    rp = sqrt(u["P"]) - sqrt(u["Q"])
    if kind == "num":
        return rp / u["D"]
    if kind == "den":
        return u["D"] / rp
    return rp / (sqrt(u["R"]) - sqrt(u["S"]))


def _parts(v, p, conj):
    """(L, cPQ, cRS): L the limit once each root difference is replaced by P - Q (no conjugate),
    and each conjugate's value at the point, as `conj(p_value, q_value)` reads it."""
    u, at = _setup(v, p)
    kind = p["kind"]
    pq = u["P"] - u["Q"]
    if kind == "num":
        core = pq / u["D"]
    elif kind == "den":
        core = u["D"] / pq
    else:
        core = pq / (u["R"] - u["S"])
    L = _lim(core, at)
    cpq = conj(u["P"].subs(T, at), u["Q"].subs(T, at))
    crs = conj(u["R"].subs(T, at), u["S"].subs(T, at)) if kind == "both" else None
    return L, cpq, crs, kind


def _right(pv, qv):
    return sqrt(pv) + sqrt(qv)


def _rationalized(L, cpq, crs, kind):
    if kind == "num":
        return L / cpq
    if kind == "den":
        return L * cpq
    return L * crs / cpq


def key(v, p):
    u, at = _setup(v, p)
    return _back(_lim(_f(u, p["kind"]), at))


def m1(v, p):
    """Multiplies only the root difference by its conjugate: sqrt P - sqrt Q just becomes P - Q."""
    L, _, _, _ = _parts(v, p, _right)
    return _back(L)


def m2(v, p):
    """Adds roots under one root: sqrt p + sqrt q = sqrt(p + q)."""
    if p["kind"] == "both":
        raise ValueError("both conjugates shrink by the same factor sqrt 2: gives the key")
    L, cpq, crs, kind = _parts(v, p, lambda pv, qv: sqrt(pv + qv))
    return _back(_rationalized(L, cpq, crs, kind))


def m3(v, p):
    """Expands (sqrt P - sqrt Q)(sqrt P + sqrt Q) as Q - P (one root difference, sign flipped)."""
    L, cpq, crs, kind = _parts(v, p, _right)
    return _back(-_rationalized(L, cpq, crs, kind))


def m4(v, p):
    """Reads 0/0 on substitution as 'the limit does not exist'."""
    return Symbol("dne")


def m5(v, p):
    """Both roots: keeps each conjugate on its own side, so the conjugate ratio is upside down."""
    if p["kind"] != "both":
        raise ValueError("only one root difference")
    L, cpq, crs, _ = _parts(v, p, _right)
    return _back(L * cpq / crs)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
