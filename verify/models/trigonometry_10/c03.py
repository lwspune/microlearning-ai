"""C03 Proving identities: answer models (the key, and one per misconception).

Simplifying items (kind value): input L, the left side in x (standing for theta or A), written with
sin, cos, tan, cot, sec, csc. The key writes L in sin and cos and simplifies it, never quoting the
identity being proved.
  A misconception acts at one line of the book's proof: the input named by params["atM<n>"]
  (default "L"; "atM2" names the line for C03-M2, and so on), an expression equal to L.
  The model applies its wrong rule to that line and simplifies the rest correctly.
  A line that does not equal L is refused.

Elimination items (kind locus): x = a f(theta), y = a g(theta), with params["pair"]
  "cos-sin"    x = a cos(theta),   y = a sin(theta)
  "cosec-cot"  x = a cosec(theta), y = a cot(theta)
Each model returns the polynomial in x, y that the student's relation sets to 0.
"""
from sympy import Add, Pow, Symbol, cos, cot, csc, fraction, sec, simplify, sin, sqrt, tan

X, Y = Symbol("x", real=True), Symbol("y", real=True)


# ---- simplifying items -------------------------------------------------------------------------

def _var(e):
    (t,) = e.free_symbols
    return t


def _sc(e, t):
    """e in sin and cos, by the definitions of the six ratios."""
    s, c = sin(t), cos(t)
    return e.subs({sec(t): 1 / c, csc(t): 1 / s, tan(t): s / c, cot(t): c / s}, simultaneous=True)


def _line(v, p, mid):
    """The line of the proof where misconception mid acts; it must equal L."""
    L = v["L"]
    t = _var(L)
    line = v[p.get(mid, "L")]
    if simplify(_sc(line, t) - _sc(L, t)) != 0:
        raise ValueError("that line is not equal to L")
    return line, t


def _apply(line, t, rules, what):
    wrong = line.xreplace(rules)
    if wrong == line:
        raise ValueError(f"no {what} in that line")
    return simplify(_sc(wrong, t))


def key(v, p):
    if "pair" in p:
        return _elim_key(v, p)
    L = v["L"]
    t = _var(L)
    return simplify(_sc(L, t))


def m1(v, p):
    """Pairs the wrong ratios: 1 + tan^2 = cosec^2 and 1 + cot^2 = sec^2 (so sec^2 - 1 = cot^2)."""
    if "pair" in p:
        return _elim_m1(v, p)
    line, t = _line(v, p, "atM1")
    T, C, S, K = tan(t), cot(t), sec(t), csc(t)
    rules = {1 + T**2: K**2, 1 + C**2: S**2, S**2 - 1: C**2, K**2 - 1: T**2}
    return _apply(line, t, rules, "1 + tan^2, 1 + cot^2, sec^2 - 1 or cosec^2 - 1")


def m2(v, p):
    """Rearranges an identity with the sign reversed: 1 - sin^2 = -cos^2, sec^2 - 1 = -tan^2, sec^2 - tan^2 = -1."""
    if "pair" in p:
        return _elim_m2(v, p)
    line, t = _line(v, p, "atM2")
    s, c, T, C, S, K = sin(t), cos(t), tan(t), cot(t), sec(t), csc(t)
    rules = {1 - s**2: -(c**2), 1 - c**2: -(s**2), S**2 - 1: -(T**2), K**2 - 1: -(C**2), S**2 - T**2: -1, K**2 - C**2: -1}
    return _apply(line, t, rules, "rearranged identity")


def _termwise(e):
    """(a + b)^2 -> a^2 + b^2 and (a - b)^2 -> a^2 - b^2, keeping each term's sign."""
    if isinstance(e, Pow) and e.exp == 2 and isinstance(e.base, Add):
        out = 0
        for term in e.base.args:
            co, rest = term.as_coeff_Mul()
            out += (1 if co > 0 else -1) * (co * rest) ** 2
        return out
    if e.args:
        return e.func(*[_termwise(a) for a in e.args])
    return e


def _root(u):
    """The square root of u when u is a perfect square (1, sin^4, sec^2), else None."""
    if u.is_Number:
        r = sqrt(u)
        return r if r.is_Rational else None
    if isinstance(u, Pow) and u.exp.is_integer and u.exp % 2 == 0:
        return u.base ** (u.exp // 2)
    return None


def _backwards(e):
    """The same false rule read backwards: a^2 - b^2 -> (a - b)^2."""
    if isinstance(e, Add) and len(e.args) == 2:
        pos = [a for a in e.args if a.could_extract_minus_sign() is False]
        neg = [-a for a in e.args if a.could_extract_minus_sign()]
        if len(pos) == 1 and len(neg) == 1:
            a, b = _root(pos[0]), _root(neg[0])
            if a is not None and b is not None:
                return (a - b) ** 2
    if e.args:
        return e.func(*[_backwards(a) for a in e.args])
    return e


def m3(v, p):
    """Squares a sum or difference term by term: (a +- b)^2 = a^2 +- b^2 (and so a^2 - b^2 = (a - b)^2)."""
    if "pair" in p:
        return _elim_m3(v, p)
    line, t = _line(v, p, "atM3")
    wrong = _termwise(line)
    if wrong == line:
        wrong = _backwards(line)
    if wrong == line:
        raise ValueError("no square of a sum and no difference of squares")
    return simplify(_sc(wrong, t))


def m4(v, p):
    """Adds two fractions by adding the tops and adding the bottoms."""
    if "pair" in p:
        raise ValueError("no fractions to add")
    line, t = _line(v, p, "atM4")
    terms = Add.make_args(line)
    if len(terms) != 2:
        raise ValueError("the line is not a sum of two fractions")
    (n1, d1), (n2, d2) = fraction(terms[0]), fraction(terms[1])
    if d1 == 1 or d2 == 1:
        raise ValueError("the line is not a sum of two fractions")
    return simplify(_sc((n1 + n2) / (d1 + d2), t))


def m5(v, p):
    """Mixes up the reciprocals: sec = 1/sin and cosec = 1/cos (so 1/cos is named cosec)."""
    if "pair" in p:
        raise ValueError("no sec or cosec to name")
    line, t = _line(v, p, "atM5")
    wrong = line.xreplace({sec(t): csc(t), csc(t): sec(t)})
    if wrong == line:
        raise ValueError("no sec or cosec in that line")
    return simplify(_sc(wrong, t))


def m6(v, p):
    """Takes square roots term by term in sin^2 + cos^2 = 1: sin + cos = 1."""
    if "pair" in p:
        return _elim_m6(v, p)
    line, t = _line(v, p, "atM6")
    return _apply(line, t, {sin(t) + cos(t): 1}, "sin + cos")


# ---- elimination items -------------------------------------------------------------------------
# u = x/a and w = y/a are the two ratios; each model puts them into the identity it believes.

def _uw(v):
    a = v["a"]
    return X / a, Y / a, a


def _elim_key(v, p):
    u, w, a = _uw(v)
    if p["pair"] == "cos-sin":
        return simplify(a**2 * (u**2 + w**2 - 1))   # cos^2 + sin^2 = 1
    if p["pair"] == "cosec-cot":
        return simplify(a**2 * (u**2 - w**2 - 1))   # cosec^2 - cot^2 = 1
    raise ValueError("unknown pair")


def _elim_m1(v, p):
    u, w, a = _uw(v)
    if p["pair"] != "cosec-cot":
        raise ValueError("no tan, cot, sec or cosec")
    return simplify(a**4 * (u**2 * w**2 - w**2 - 1))   # cosec^2 = 1 + tan^2 = 1 + 1/cot^2


def _elim_m2(v, p):
    u, w, a = _uw(v)
    if p["pair"] == "cos-sin":
        return simplify(a**2 * (w**2 - u**2 - 1))   # 1 - sin^2 = -cos^2, so sin^2 - cos^2 = 1
    return simplify(a**2 * (w**2 - u**2 - 1))       # cosec^2 - cot^2 = -1


def _elim_m3(v, p):
    u, w, a = _uw(v)
    if p["pair"] == "cos-sin":
        return simplify(a**2 * ((u + w) ** 2 - 1))  # x + y = a(cos + sin); (cos + sin)^2 taken as cos^2 + sin^2
    return simplify(a**2 * ((u - w) ** 2 - 1))      # x - y = a(cosec - cot); (cosec - cot)^2 taken as cosec^2 - cot^2


def _elim_m6(v, p):
    u, w, a = _uw(v)
    if p["pair"] != "cos-sin":
        raise ValueError("no sin + cos")
    return simplify(a * (u + w - 1))                # cos + sin = 1


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
