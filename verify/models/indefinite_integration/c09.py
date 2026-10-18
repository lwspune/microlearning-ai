"""C09 Integration by parts: answer models (the key, and one per misconception).

Inputs: u, the factor LIATE says to differentiate, and v, the factor to integrate
(v = 1 for a single function such as log(x^2 + 1)); both in x.
Params: mode = "full" (the item asks for the integral; the value is the antiderivative,
shown with + c, its constant term dropped) or "step" (the item asks for g(x) in
    int u v dx = u int v dx + int g(x) dx,
the integral left after one round, so g = -u' int v dx).
The key comes from sympy's own integral (full) or from the product rule (step):
d/dx(u V) = u'V + uv, so g = uv - d/dx(u V). Every wrong answer replays one wrong
step of the method.
"""
from sympy import Add, Integer, Symbol, diff, expand, integrate, simplify
from sympy.simplify.fu import TR8

X = Symbol("x", real=True)


def _uv(v):
    """u and v with x real, as the verifier parses it."""
    out = []
    for k in ("u", "v"):
        e = v[k]
        e = e.subs({s: X for s in getattr(e, "free_symbols", set()) if s.name == "x"}) if hasattr(e, "subs") else Integer(e)
        out.append(e)
    return out


def _mode(p):
    return p.get("mode", "full")


def _clean(e):
    """An antiderivative is fixed only up to a constant: powers and products of sin and cos
    go to multiple angles (TR8), and any term free of x is dropped, so every model's
    value carries no stray constant (sympy's sin(x)**2/2 is cos(2x)/4 off by 1/4)."""
    e = expand(TR8(expand(e)))
    if isinstance(e, Add):
        e = Add(*[t for t in e.args if t.has(X)])
    return simplify(e)


def _step(e):
    """g(x) is a function, not an antiderivative: no constant is dropped."""
    return simplify(expand(e))


def _poly(u):
    """True when u is a polynomial in x of degree >= 1 (parts goes round again)."""
    return u.is_polynomial(X) and u.has(X)


def key(v, p):
    u, w = _uv(v)
    if _mode(p) == "step":
        V = integrate(w, X)
        return _step(u * w - diff(u * V, X))
    return _clean(integrate(u * w, X))


def m1(v, p):
    """Takes the integral of a product as the product of the integrals."""
    if _mode(p) != "full":
        raise ValueError("full items only")
    u, w = _uv(v)
    if w == 1:
        raise ValueError("one function: no product")
    return _clean(integrate(u, X) * integrate(w, X))


def _signed(u, w, signs):
    """Parts run round by round: u V1 [s1] u' V2 [s2] u'' V3 ..., the kth sign from signs(k).
    A polynomial u goes round again until it is constant; any other u stops after one
    round with its second integral done correctly."""
    total, k, cur, V = Integer(0), 0, u, integrate(w, X)
    sign = 1
    while True:
        total += sign * cur * V
        nxt = diff(cur, X)
        if nxt == 0:
            return total
        sign = signs(k + 1)
        k += 1
        if not _poly(u):
            return total + sign * integrate(nxt * V, X)
        cur, V = nxt, integrate(V, X)


def m2(v, p):
    """Writes the formula with a plus: int u v = u int v + int (u' int v), every round."""
    u, w = _uv(v)
    if _mode(p) == "step":
        return _step(diff(u, X) * integrate(w, X))
    return _clean(_signed(u, w, lambda k: 1))


def m3(v, p):
    """Puts u' v in the second integral (the product rule's term), not u' int v."""
    u, w = _uv(v)
    if _mode(p) == "step":
        return _step(-diff(u, X) * w)
    return _clean(u * integrate(w, X) - integrate(diff(u, X) * w, X))


def m4(v, p):
    """Chooses u against LIATE: differentiates v and integrates u."""
    if _mode(p) != "step":
        raise ValueError("step items only")
    u, w = _uv(v)
    if w == 1:
        raise ValueError("one function")
    return _step(-diff(w, X) * integrate(u, X))


def m5(v, p):
    """In repeated parts, keeps a minus on every later term: the signs never alternate."""
    if _mode(p) != "full":
        raise ValueError("full items only")
    u, w = _uv(v)
    if not _poly(u) or diff(u, X, 2) == 0:
        raise ValueError("needs u a polynomial of degree 2 or more")
    return _clean(_signed(u, w, lambda k: -1))


def m6(v, p):
    """Writes the second term as u' int v without integrating it."""
    if _mode(p) != "full":
        raise ValueError("full items only")
    u, w = _uv(v)
    V = integrate(w, X)
    return _clean(u * V - diff(u, X) * V)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
