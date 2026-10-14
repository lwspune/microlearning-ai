"""C05 Middle terms: answer models (the key, and one per misconception).

Inputs: a, b (the two terms of the binomial, expressions in x and y) and n (the index), for
(a + b)^n. For p["ask"] == "position", only n is needed and may be symbolic (e.g. 2*n), with
p["parity"] = "even" or "odd" saying which.
p["ask"]: "position" (which term(s) are middle), "term" (the middle term(s)), "coeff" (their
numerical coefficient(s)). Two middle terms come back as a Tuple, in order.
"""
from sympy import Tuple, binomial, expand, simplify


def _n(v):
    return v["n"]


def _even(v, p):
    n = _n(v)
    if n.is_Integer:
        return n % 2 == 0
    if p.get("parity") not in ("even", "odd"):
        raise ValueError("symbolic n needs params.parity")
    return p["parity"] == "even"


def _general(v, k, a=None, b=None):
    """T_k = nC(k-1) a^(n-k+1) b^(k-1), the k-th term (k counted from 1)."""
    n = int(_n(v))
    a = v["a"] if a is None else a
    b = v["b"] if b is None else b
    if not 1 <= k <= n + 1:
        raise ValueError(f"there is no term T_{k} when n = {n}")
    r = k - 1
    return binomial(n, r) * a ** (n - r) * b**r


def _all_terms(v):
    """Every term of (a + b)^n in order, checked against the full expansion."""
    n = int(_n(v))
    terms = [_general(v, k) for k in range(1, n + 2)]
    assert simplify(expand(sum(terms)) - expand((v["a"] + v["b"]) ** n)) == 0
    return terms


def _coeff(t):
    """The numerical coefficient of a term in x and y."""
    return simplify(t).as_coeff_Mul()[0]


def _one(vals):
    vals = [simplify(t) for t in vals]
    return vals[0] if len(vals) == 1 else Tuple(*vals)


def _answer(v, p, positions, term=None):
    """The position(s), term(s) or coefficient(s) at the given positions."""
    ask = p.get("ask", "term")
    if ask == "position":
        return _one(positions)
    if any(not k.is_integer or k < 1 for k in positions):
        raise ValueError("no such term")
    term = term or (lambda k: _general(v, int(k)))
    terms = [term(k) for k in positions]
    if ask == "coeff":
        return _one([_coeff(t) for t in terms])
    return _one(terms)


def _key_positions(v, p):
    """From the count: n + 1 terms; the middle one(s) have as many terms before as after."""
    count = _n(v) + 1
    if not _even(v, p):  # n odd: an even count, two middle terms
        return [count / 2, count / 2 + 1]
    return [(count + 1) / 2]


def key(v, p):
    """The middle of the list of all n + 1 terms."""
    if p.get("ask", "term") == "position":
        return _one(_key_positions(v, p))
    terms = _all_terms(v)
    L = len(terms)
    mid = [terms[L // 2]] if L % 2 else [terms[L // 2 - 1], terms[L // 2]]
    if p.get("ask") == "coeff":
        return _one([_coeff(t) for t in mid])
    return _one(mid)


def m1(v, p):
    """Counts n terms instead of n + 1: the middle of 1..n."""
    n = _n(v)
    pos = [n / 2, n / 2 + 1] if _even(v, p) else [(n + 1) / 2]
    return _answer(v, p, pos)


def m2(v, p):
    """Puts r equal to the middle term's number: uses T_(k+1) for the middle T_k."""
    return _answer(v, p, [k + 1 for k in _key_positions(v, p)])


def m3(v, p):
    """Takes the middle term as T_(n/2): halving n gives its number."""
    n = _n(v)
    pos = [n / 2] if _even(v, p) else [(n - 1) / 2, (n + 1) / 2]
    return _answer(v, p, pos)


def _unsigned(e):
    c, rest = e.as_coeff_Mul()
    return -e if c < 0 else e


def m4(v, p):
    """Drops the minus sign of a negative term: (-b)^r taken as b^r."""
    if p.get("ask") == "position":
        raise ValueError("no sign in a position")
    a, b = _unsigned(v["a"]), _unsigned(v["b"])
    if a == v["a"] and b == v["b"]:
        raise ValueError("no negative term")
    out = _answer(v, p, _key_positions(v, p), lambda k: _general(v, int(k), a, b))
    if _same(out, key(v, p)):
        raise ValueError("every middle r is even here, so the sign drops out anyway")
    return out


def _same(u, w):
    if isinstance(u, Tuple) != isinstance(w, Tuple):
        return False
    if isinstance(u, Tuple):
        return len(u) == len(w) and all(simplify(s - t) == 0 for s, t in zip(u, w))
    return simplify(u - w) == 0


def _split(e):
    """e = c * (x, y part), c a number."""
    return e.as_coeff_Mul()


def m5(v, p):
    """Raises only the x (and y) part to the power, not the number in front: (2x)^5 = 2x^5."""
    if p.get("ask") == "position":
        raise ValueError("no powers in a position")
    n = int(_n(v))
    (ca, xa), (cb, xb) = _split(v["a"]), _split(v["b"])

    def term(k):
        r = int(k) - 1
        return binomial(n, r) * ca * xa ** (n - r) * cb * xb**r

    out = _answer(v, p, _key_positions(v, p), term)
    if _same(out, key(v, p)):
        raise ValueError("no number to raise, so this gives the key")
    return out


def m6(v, p):
    """Gives the binomial coefficient nCr as the coefficient, leaving out the numbers in a and b."""
    if p.get("ask") != "coeff":
        raise ValueError("only for a coefficient question")
    n = int(_n(v))
    out = _one([binomial(n, int(k) - 1) for k in _key_positions(v, p)])
    if _same(out, key(v, p)):
        raise ValueError("a and b carry no numbers, so nCr is the key")
    return out


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
