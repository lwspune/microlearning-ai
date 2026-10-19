"""C02 Decimal to binary: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  bin   the decimal number v["n"] -> its binary numeral; the value is the decimal the numeral stands for
  bits  the decimal number v["n"] -> how many binary digits it needs
  lcm   the binary numerals p["bs"] (a list) -> their LCM, written in binary (value as for bin)
  hcf   the same, for the HCF
A binary option's value is the decimal number its numeral stands for, so two different
numerals always have different values. Leading zeros of a wrong numeral are dropped.
"""
from functools import reduce
from math import gcd

from sympy import Integer


def _ask(p):
    return p.get("ask", "bin")


def _dec(s):
    """A binary numeral's value from place values: bit k from the right is worth 2^k."""
    return sum(int(b) * 2 ** k for k, b in enumerate(reversed(s)))


def _target(v, p):
    """The decimal number the question asks to write in binary."""
    a = _ask(p)
    if a in ("bin", "bits"):
        return int(v["n"])
    nums = [_dec(s) for s in p["bs"]]
    if a == "lcm":
        return reduce(lambda x, y: x * y // gcd(x, y), nums)
    if a == "hcf":
        return reduce(gcd, nums)
    raise ValueError(a)


def _remainders(n):
    """Repeated division by 2: the remainders in the order they are written down (top to bottom)."""
    out = []
    while n > 0:
        out.append(str(n % 2))
        n //= 2
    return out


def _right(n):
    """The correct numeral, built from powers of 2 (largest first), for the wrong models to start from."""
    if n == 0:
        return "0"
    k = 0
    while 2 ** (k + 1) <= n:
        k += 1
    bits = []
    for j in range(k, -1, -1):
        if n >= 2 ** j:
            bits.append("1")
            n -= 2 ** j
        else:
            bits.append("0")
    return "".join(bits)


def _answer(v, p, numeral):
    """Turns a (possibly wrong) numeral for the target into the item's answer."""
    s = numeral(_target(v, p))
    if _ask(p) == "bits":
        return Integer(len(s.lstrip("0") or "0"))
    return Integer(_dec(s))


def key(v, p):
    n = _target(v, p)
    if _ask(p) == "bits":
        # From the definition: k bits write the numbers 0 to 2^k - 1, so n needs the least k with 2^k > n.
        k = 1
        while 2 ** k <= n:
            k += 1
        return Integer(k)
    return Integer(n)  # the correct numeral stands for n itself


def m1(v, p):
    """Reads the remainders from top to bottom, so the numeral comes out reversed."""
    if _ask(p) == "bits":
        raise ValueError("reversing keeps the number of digits")
    return _answer(v, p, lambda n: "".join(_remainders(n)))


def m2(v, p):
    """Subtracting powers of 2: writes a 1 for each power used but no 0 for the places skipped."""
    return _answer(v, p, lambda n: "1" * _right(n).count("1"))


def m3(v, p):
    """Stops dividing when the quotient reaches 1, so the last remainder (the leading 1) is lost."""
    if _ask(p) == "bits":
        raise ValueError("on a digit count it agrees with C02-M4")
    return _answer(v, p, lambda n: _right(n)[1:] or "0")


def m4(v, p):
    """Digit count: takes the power k of the largest 2^k not above n, forgetting the units place 2^0."""
    if _ask(p) != "bits":
        raise ValueError("only for a digit count")
    n = _target(v, p)
    return Integer(len(_right(n)) - 1)


def m5(v, p):
    """Converts each decimal digit to binary on its own and joins the results."""
    return _answer(v, p, lambda n: "".join(_right(int(d)) for d in str(n)))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5}
