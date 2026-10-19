"""C04 Multiplying and dividing in binary: answer models (the key, and one per misconception).

p["ask"] picks the question type (every numeral in p is a binary string):
  mul  p["bs"] = [A, B] -> the product A x B
  div  p["bs"] = [A, B] -> the quotient of A / B (the division is exact)
  qr   p["bs"] = [A, B] -> Tuple of quotient and remainder, in the order p["order"] ("qr" or "rq")
  id3  p["c3"] = x^3 + y^3 and p["s"] = x + y -> (x - y)^2 + xy
The answer is asked in binary: a value is the decimal number its numeral stands for, so two
different numerals always have different values (as in C02). Leading zeros are dropped.
"""
from sympy import Integer, Rational, Tuple


def _dec(s):
    """A binary numeral's value from place values: bit k from the right is worth 2^k."""
    return sum(int(b) * 2 ** k for k, b in enumerate(reversed(s)))


def _bin(n):
    """The binary numeral of a whole number n >= 0."""
    return format(int(n), "b")


def _ask(p):
    return p["ask"]


def _qr_out(q, r, p):
    """Quotient and remainder as a Tuple in the order the question asks."""
    return Tuple(Integer(q), Integer(r)) if p.get("order", "qr") == "qr" else Tuple(Integer(r), Integer(q))


def _true(p):
    """The decimal answer, from the definitions (decimal arithmetic on the converted values)."""
    a = _ask(p)
    if a == "mul":
        x, y = (_dec(s) for s in p["bs"])
        return x * y
    if a in ("div", "qr"):
        x, y = (_dec(s) for s in p["bs"])
        q, r = divmod(x, y)
        if a == "div":
            if r:
                raise ValueError("division is not exact")
            return q
        return (q, r)
    if a == "id3":
        c, s = _dec(p["c3"]), _dec(p["s"])
        t = Rational(c, s)
        if t.q != 1:
            raise ValueError("x^3 + y^3 is not a multiple of x + y")
        return int(t)
    raise ValueError(a)


def _wrap(ans, p):
    """A decimal answer (or a (q, r) pair) as the sympy value of the option."""
    if _ask(p) == "qr":
        return _qr_out(ans[0], ans[1], p)
    return Integer(ans)


def key(v, p):
    return _wrap(_true(p), p)


def m1(v, p):
    """Adds the partial products without shifting them: A times the number of 1s in B."""
    if _ask(p) != "mul":
        raise ValueError("only for multiplication")
    a, b = p["bs"]
    if b.count("1") == _dec(b):
        raise ValueError("multiplier 1: no shift to forget")
    return Integer(_dec(a) * b.count("1"))


def m2(v, p):
    """Long division: writes no 0 in the quotient when the divisor does not fit."""
    if _ask(p) not in ("div", "qr"):
        raise ValueError("only for division")
    ans = _true(p)
    q = ans if _ask(p) == "div" else ans[0]
    qb = _bin(q)
    if "0" not in qb:
        raise ValueError("quotient has no 0 bits")
    q2 = _dec(qb.replace("0", ""))
    return _wrap(q2 if _ask(p) == "div" else (q2, ans[1]), p)


def _rev(n):
    """C02's slip: the remainders of repeated division by 2 written top to bottom (bits reversed)."""
    return _dec(_bin(n)[::-1])


def m3(v, p):
    """Converts the decimal answer back with its bits in reverse order."""
    ans = _true(p)
    out = (_rev(ans[0]), _rev(ans[1])) if _ask(p) == "qr" else _rev(ans)
    if out == ans:
        raise ValueError("the answer reads the same both ways")
    return _wrap(out, p)


def _same_digits(n):
    """The binary numeral with the decimal answer's digits, e.g. 110 -> (110)_2 = 6."""
    s = str(int(n))
    if set(s) - {"0", "1"}:
        raise ValueError(f"{n} has decimal digits other than 0 and 1")
    return _dec(s)


def m4(v, p):
    """Forgets to convert back: picks the binary numeral with the decimal answer's digits."""
    ans = _true(p)
    out = (_same_digits(ans[0]), _same_digits(ans[1])) if _ask(p) == "qr" else _same_digits(ans)
    return _wrap(out, p)


def m5(v, p):
    """Gives the quotient and remainder in the wrong order."""
    if _ask(p) != "qr":
        raise ValueError("only for quotient and remainder")
    q, r = _true(p)
    if q == r:
        raise ValueError("quotient equals remainder")
    return _qr_out(r, q, p)


def m6(v, p):
    """Takes x^2 - xy + y^2 for (x - y)^2, so adds xy again: answers x^2 + y^2."""
    if _ask(p) != "id3":
        raise ValueError("only for the cube-sum identity")
    s = _dec(p["s"])
    t = _true(p)                      # x^2 - xy + y^2
    xy = Rational(s * s - t, 3)       # (x + y)^2 - (x^2 - xy + y^2) = 3xy
    if xy.q != 1:
        raise ValueError("xy is not a whole number")
    return Integer(t + xy)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
