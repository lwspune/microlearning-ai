"""C02 Algebra of limits and substitution: answer models (the key, and one per misconception).

Two kinds of item, told apart by their inputs:
  substitution: e, an expression in one variable (params["var"], default "x"), and a, the point.
    An optional fa is f(a) defined separately (the formula e holds only for x != a).
  given limits: e, an expression in F and G standing for f(x) and g(x), with
    lF = lim f(x) and lG = lim g(x) as x -> a.
The key for a substitution item is sympy's limit of e (never substitution); for given limits it
is the algebra-of-limits theorem, checked to have no zero denominator.
"""
from sympy import Abs, Add, Integer, Mul, Pow, Rational, limit, nan, oo, sqrt, zoo


def _named(e, name):
    """The symbol called name in e (the verifier parses x as real, draft_items as plain)."""
    for s in e.free_symbols:
        if s.name == name:
            return s
    raise ValueError(f"no {name} in {e}")


def _values(v, p):
    """The substitution {symbol: value} the item asks for."""
    e = v["e"]
    if "a" in v:
        return {_named(e, p.get("var", "x")): v["a"]}
    return {_named(e, "F"): v["lF"], _named(e, "G"): v["lG"]}


def _finite(r):
    if r.has(oo, -oo, zoo, nan) or not r.is_number:
        raise ValueError(f"no finite value ({r})")
    return r


def _at(e, vals):
    """e evaluated at vals, refusing a zero denominator (the quotient rule needs m != 0)."""
    from sympy import fraction, together

    num, den = fraction(together(e))
    d = den.subs(vals)
    if d == 0:
        raise ValueError("denominator is 0 at the point")
    return _finite((num.subs(vals) / d).simplify())


def key(v, p):
    e, vals = v["e"], _values(v, p)
    if "a" in v:
        (s, a), = vals.items()
        return _finite(limit(e, s, a))
    return _at(e, vals)


def m1(v, p):
    """Takes the separately defined value f(a) as the limit."""
    if "fa" not in v:
        raise ValueError("no separate value f(a)")
    return v["fa"]


def _combine_roots(e):
    """sqrt(u) - sqrt(v) -> sqrt(u - v) (and the same for +), wherever two roots are added."""
    if e.is_Atom:
        return e, False
    parts = [_combine_roots(a) for a in e.args]
    args, hit = [a for a, _ in parts], any(h for _, h in parts)
    if e.is_Add:
        roots, rest = [], []
        for t in args:
            c, f = t.as_coeff_Mul()
            if c in (1, -1) and f.is_Pow and f.exp == Rational(1, 2):
                roots.append(c * f.base)
            else:
                rest.append(t)
        if len(roots) >= 2:
            return Add(*rest, sqrt(Add(*roots))), True
    return e.func(*args), hit


def _split_roots(e):
    """sqrt(u + v) -> sqrt(u) + sqrt(v)."""
    if e.is_Atom:
        return e, False
    parts = [_split_roots(a) for a in e.args]
    args, hit = [a for a, _ in parts], any(h for _, h in parts)
    if e.is_Pow and e.exp == Rational(1, 2) and args[0].is_Add:
        return Add(*[sqrt(t) for t in args[0].args]), True
    return e.func(*args), hit


def m2(v, p):
    """Lets a square root combine or split over + and -."""
    e, hit = _combine_roots(v["e"])
    if not hit:
        e, hit = _split_roots(v["e"])
    if not hit:
        raise ValueError("no sum or difference of roots")
    r = _at(e, _values(v, p))
    if not r.is_real:
        raise ValueError("root of a negative number")
    return r


def m3(v, p):
    """Drops the minus sign of a negative value when substituting."""
    vals = _values(v, p)
    if not any(x < 0 for x in vals.values()):
        raise ValueError("no negative value to drop the sign of")
    return _at(v["e"], {s: Abs(x) for s, x in vals.items()})


def _powers_as_multiples(e):
    """u**n -> n*u for an integer n >= 2 (and u**-n -> 1/(n*u))."""
    if e.is_Atom:
        return e, False
    parts = [_powers_as_multiples(a) for a in e.args]
    args, hit = [a for a, _ in parts], any(h for _, h in parts)
    if e.is_Pow and e.exp.is_Integer and abs(e.exp) >= 2:
        n = int(e.exp)
        return (n * args[0] if n > 0 else 1 / (-n * args[0])), True
    return e.func(*args), hit


def m4(v, p):
    """Reads a power as a multiple: x^2 as 2x."""
    e, hit = _powers_as_multiples(v["e"])
    if not hit:
        raise ValueError("no power")
    return _at(e, _values(v, p))


def _products_as_sums(e):
    """In each product, the non-constant factors on top are added, and so are those below."""
    if e.is_Atom:
        return e, False
    parts = [_products_as_sums(a) for a in e.args]
    args, hit = [a for a, _ in parts], any(h for _, h in parts)
    if e.is_Mul:
        coeff = Mul(*[a for a in args if a.is_number])
        top = [a for a in args if not a.is_number and not (a.is_Pow and a.exp.is_negative)]
        bottom = [a.base ** -a.exp for a in args if not a.is_number and a.is_Pow and a.exp.is_negative]
        join = lambda fs: Add(*fs) if len(fs) >= 2 else (fs[0] if fs else Integer(1))
        if len(top) >= 2 or len(bottom) >= 2:
            return Mul(coeff, join(top), Pow(join(bottom), -1)), True
    return e.func(*args), hit


def m5(v, p):
    """Adds the limits of a product's factors instead of multiplying them."""
    e, hit = _products_as_sums(v["e"])
    if not hit:
        raise ValueError("no product of two non-constant factors")
    return _at(e, _values(v, p))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
