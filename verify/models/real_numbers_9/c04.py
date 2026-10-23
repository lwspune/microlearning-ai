"""C04 Irrational numbers: answer models (the key, and one per misconception).

Pick items: params {"nums": [token, ...]}; the key is the one number that is truly irrational,
  and a misconception's answer is the one other number its wrong rule calls irrational.
  A token is "<form>:<payload>", the way the number is written in the option:
    root:n   a bare square root, sqrt(n) (n may be a fraction or a decimal);
    frac:p/q a fraction; rec:p/q a recurring decimal (its exact value is p/q);
    expr:e   an expression such as 5+sqrt(7) or sqrt(3)*sqrt(27) (sympy, evaluated);
    nrd:name a non-terminating, non-recurring decimal such as 2.1011011101110... (Symbol(name)).
  An option's value is the number itself (sqrt(16/25) is 4/5), or Symbol(name) for nrd.
Number-line items: inputs {"a", "b"}: OA = a along the number line from O at 0, AB = b
  perpendicular to it at A; the arc with centre O and radius OB marks the answer on the line.
  With params {"ask": "leg"}: inputs {"n", "a"}: OA = a, and the answer is the length AB that
  makes OB = sqrt(n).
"""
import re

from sympy import Abs, Rational, Symbol, sqrt, sympify


# ---------- pick the irrational number ----------

def _value(tok):
    form, body = tok.split(":", 1)
    if form == "nrd":
        return Symbol(body)
    if form == "root":
        return sqrt(Rational(body))
    if form in ("frac", "rec"):
        return Rational(body)
    return sympify(body)


def _irrational(tok):
    if tok.startswith("nrd:"):
        return True
    return _value(tok).is_rational is False


def _terminates(r):
    q = Rational(r).q
    for t in (2, 5):
        while q % t == 0:
            q //= t
    return q == 1


def _m1(tok):                       # M1: a decimal that never ends is irrational
    form = tok.split(":", 1)[0]
    if form in ("frac", "rec"):
        return not _terminates(_value(tok))
    return _irrational(tok)


def _m2(tok):                       # M2: every square root is irrational
    return True if tok.startswith("root:") else _irrational(tok)


def _m3(tok):                       # M3: a number with an irrational in it stays irrational
    if tok.startswith("expr:"):
        for k in re.findall(r"sqrt\((\d+)\)", tok):
            if not sqrt(int(k)).is_rational:
                return True
    return _irrational(tok)


def _pick(rule, p):
    nums = p.get("nums")
    if not nums:
        raise ValueError("a number-line mistake, not a classifying one")
    truth = [s for s in nums if _irrational(s)]
    if len(truth) != 1:
        raise ValueError(f"{len(truth)} numbers are truly irrational")
    if rule is _irrational:
        return _value(truth[0])
    extra = [s for s in nums if rule(s) and not _irrational(s)]
    if len(extra) != 1:
        raise ValueError(f"the rule calls {len(extra)} rational numbers irrational")
    return _value(extra[0])


# ---------- root n on the number line ----------

def _line(v, p, how):
    if p.get("nums"):
        raise ValueError("a classifying mistake, not a number-line one")
    if p.get("ask") == "leg":
        n, a = v["n"], v["a"]
        return {"key": sqrt(n - a**2), "add": sqrt(n) - a, "noroot": n - a**2, "hyp": sqrt(n + a**2)}[how]
    a, b = v["a"], v["b"]
    return {"key": sqrt(a**2 + b**2), "add": a + b, "noroot": a**2 + b**2, "hyp": sqrt(Abs(a**2 - b**2))}[how]


def key(v, p):
    return _pick(_irrational, p) if p.get("nums") else _line(v, p, "key")


def m1(v, p):
    return _pick(_m1, p)


def m2(v, p):
    return _pick(_m2, p)


def m3(v, p):
    return _pick(_m3, p)


def m4(v, p):                       # M4: the hypotenuse is the sum of the legs, OB = OA + AB
    return _line(v, p, "add")


def m5(v, p):                       # M5: stops at OB^2 and marks it (forgets the square root)
    return _line(v, p, "noroot")


def m6(v, p):                       # M6: takes the wrong side as the hypotenuse (subtracts / adds squares the wrong way)
    return _line(v, p, "hyp")


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
