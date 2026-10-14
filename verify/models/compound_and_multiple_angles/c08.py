"""C08 Sum into product: answer models (the key, and one per misconception).

An item is a sum of pairs, or a quotient of two such sums. params["num"] (and params["den"], if the
item is a quotient) list the pairs, comma-separated; each pair is a code f g s:
  "ss+"  sin C + sin D      "ss-"  sin C - sin D
  "cc+"  cos C + cos D      "cc-"  cos C - cos D
  "sc-"  sin C - cos D (the student first writes sin C as cos(90 deg - C), an allied angle)
Pairs are numbered across num then den; pair k takes inputs Ck and Dk (radians, or expressions in x, y).

The key never uses the formulas being taught: it writes each pair through Euler's formula,
e^{iC} +/- e^{iD} = e^{i(C+D)/2} (e^{i(C-D)/2} +/- e^{-i(C-D)/2}), takes the real part (cos) or the
imaginary part (sin), and checks numerically that this matches the pair as given.
Each misconception is the student's own product for each pair, put back into the same sum or quotient.
"""
from sympy import I, Rational, Symbol, cos, exp, expand, im, pi, re, simplify, sin

_REAL = {"x": Symbol("x", real=True), "y": Symbol("y", real=True)}


def _real(e):
    """Inputs drafted with plain symbols: make x and y real, as the verifier does."""
    return e.subs({s: _REAL[s.name] for s in getattr(e, "free_symbols", set()) if s.name in _REAL})


def _pairs(v, p):
    """[(part, f, s, C, D)]: part is "num" or "den"; f is "s" or "c"; s is +1 or -1."""
    out, k = [], 1
    for part in ("num", "den"):
        for code in [c.strip() for c in p.get(part, "").split(",") if c.strip()]:
            f1, f2, sg = code[0], code[1], code[2]
            C, D = _real(v[f"C{k}"]), _real(v[f"D{k}"])
            if f1 != f2:  # sin C - cos D: the student turns sin C into cos(pi/2 - C) first
                assert (f1, f2) == ("s", "c"), code
                f1, C = "c", pi / 2 - C
            out.append((part, f1, 1 if sg == "+" else -1, C, D))
            k += 1
    return out


def _raw(f, s, C, D):
    g = sin if f == "s" else cos
    return g(C) + s * g(D)


def _assemble(products, pairs):
    num = sum(prod for prod, (part, *_r) in zip(products, pairs) if part == "num")
    den = [prod for prod, (part, *_r) in zip(products, pairs) if part == "den"]
    return simplify(num / sum(den)) if den else simplify(num)


def _euler(f, s, C, D):
    """f(C) + s f(D) from e^{iC} + s e^{iD} = e^{im} (e^{ih} + s e^{-ih}), m = (C+D)/2, h = (C-D)/2."""
    m, h = (C + D) / 2, (C - D) / 2
    w = (exp(I * h) + s * exp(-I * h)).rewrite(cos)  # 2 cos h, or 2i sin h
    z = expand((cos(m) + I * sin(m)) * simplify(w))
    return simplify(im(z) if f == "s" else re(z))


def key(v, p):
    pairs = _pairs(v, p)
    products = [_euler(f, s, C, D) for _part, f, s, C, D in pairs]
    for prod, (_part, f, s, C, D) in zip(products, pairs):
        pt = {sym: Rational(3, 10) * (i + 1) for i, sym in enumerate(sorted(prod.free_symbols | _raw(f, s, C, D).free_symbols, key=str))}
        assert abs(float((prod - _raw(f, s, C, D)).subs(pt).evalf())) < 1e-12, "Euler form disagrees with the pair"
    return _assemble(products, pairs)


def _right(f, s, C, D, half=True, two=2):
    """The textbook product for f(C) + s f(D); half=False drops the halves, two is the leading factor."""
    m, h = ((C + D) / 2, (C - D) / 2) if half else (C + D, C - D)
    if f == "s":
        return two * (sin(m) * cos(h) if s == 1 else cos(m) * sin(h))
    return two * (cos(m) * cos(h) if s == 1 else -sin(m) * sin(h))


def _student(rule, v, p, needs=None):
    pairs = _pairs(v, p)
    if needs and not any((f, s) == needs for _part, f, s, _C, _D in pairs):
        raise ValueError(f"no {needs} pair for this mistake to act on")
    return _assemble([rule(f, s, C, D) for _part, f, s, C, D in pairs], pairs)


def m1(v, p):
    """The sign trap: cos C - cos D = +2 sin((C+D)/2) sin((C-D)/2), the minus dropped."""
    def rule(f, s, C, D):
        if (f, s) == ("c", -1):
            return 2 * sin((C + D) / 2) * sin((C - D) / 2)
        return _right(f, s, C, D)
    return _student(rule, v, p, needs=("c", -1))


def m2(v, p):
    """Forgets the halves: sin C + sin D = 2 sin(C + D) cos(C - D), and so on for all four."""
    return _student(lambda f, s, C, D: _right(f, s, C, D, half=False), v, p)


def m3(v, p):
    """Lets sin and cos spread over the sum: sin C + sin D = sin(C + D), cos C - cos D = cos(C - D)."""
    return _student(lambda f, s, C, D: (sin if f == "s" else cos)(C + s * D), v, p)


def m4(v, p):
    """Copies the sum's product onto the difference: sin C - sin D = 2 sin((C+D)/2) cos((C-D)/2)."""
    def rule(f, s, C, D):
        if (f, s) == ("s", -1):
            return 2 * sin((C + D) / 2) * cos((C - D) / 2)
        return _right(f, s, C, D)
    return _student(rule, v, p, needs=("s", -1))


def m5(v, p):
    """Drops the factor 2: sin C + sin D = sin((C+D)/2) cos((C-D)/2), and so on."""
    return _student(lambda f, s, C, D: _right(f, s, C, D, two=1), v, p)


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
