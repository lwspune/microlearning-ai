"""C01 Binary place value: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  dec   the binary numeral p["b"] -> its decimal value
  sum   the binary numerals p["bs"] (a list) -> the decimal value of their sum
  expr  x = p["bs"][0], y = p["bs"][1] in binary -> the expression p["f"] in x, y, in decimal
  max   v["n"] -> the largest number with n binary digits, in decimal
A numeral may use letters for its bits (p["one"] names the letter that stands for 1;
every other letter stands for 0), as in NDA's (cdccdd)_2 with c > d.
"""
from sympy import Integer, Symbol, sympify


def _ask(p):
    return p.get("ask", "dec")


def _bits(s, p, swap=False):
    """The numeral as a string of 0s and 1s, letters replaced (swapped for M5)."""
    one = p.get("one")
    out = []
    for ch in s:
        if ch in "01":
            out.append(ch)
        elif one is None:
            raise ValueError(f"letter {ch} but no p['one']")
        else:
            is_one = (ch == one) != swap
            out.append("1" if is_one else "0")
    return "".join(out)


def _true(s):
    """From the definition: bit k from the right (k = 0, 1, 2, ...) is worth 2^k."""
    return sum(Integer(int(b)) * Integer(2) ** k for k, b in enumerate(reversed(s)))


def _from_two(s):
    """M1: place values start at 2^1 on the right."""
    return sum(Integer(int(b)) * Integer(2) ** (k + 1) for k, b in enumerate(reversed(s)))


def _from_left(s):
    """M2: place values counted from the left, the leftmost bit worth 1."""
    return sum(Integer(int(b)) * Integer(2) ** k for k, b in enumerate(s))


def _every_place(s):
    """M3: adds every place value, 0 bits included."""
    return sum(Integer(2) ** k for k in range(len(s)))


def _as_decimal(s):
    """M4: reads the digits as an ordinary decimal number."""
    return Integer(int(s))


def _combine(p, conv, swap=False):
    """Applies a conversion rule to the question's numerals, then does the decimal work."""
    a = _ask(p)
    if a == "dec":
        return conv(_bits(p["b"], p, swap))
    if a == "sum":
        return sum(conv(_bits(s, p, swap)) for s in p["bs"])
    if a == "expr":
        x, y = (conv(_bits(s, p, swap)) for s in p["bs"])
        return sympify(p["f"], locals={"x": Symbol("x"), "y": Symbol("y")}).subs({Symbol("x"): x, Symbol("y"): y})
    raise ValueError(a)


def key(v, p):
    if _ask(p) == "max":
        return _true("1" * int(v["n"]))
    return _combine(p, _true)


def m1(v, p):
    """Starts the place values at 2 on the right: 2, 4, 8, ..."""
    if _ask(p) == "max":
        return _from_two("1" * int(v["n"]))
    return _combine(p, _from_two)


def m2(v, p):
    """Reads the place values from the left: the leftmost bit is worth 1."""
    if _ask(p) == "max":
        raise ValueError("all ones read the same both ways")
    return _combine(p, _from_left)


def m3(v, p):
    """Adds every place value, including the places that hold a 0."""
    if _ask(p) == "max":
        raise ValueError("all ones: every place counts anyway")
    return _combine(p, _every_place)


def m4(v, p):
    """Reads the binary digits as a decimal number, without converting."""
    if _ask(p) == "max":
        return _as_decimal("1" * int(v["n"]))
    return _combine(p, _as_decimal)


def m5(v, p):
    """Letter bits: takes the larger letter as 0 and the smaller as 1."""
    if "one" not in p or _ask(p) == "max":
        raise ValueError("only for numerals written with letters")
    return _combine(p, _true, swap=True)


def m6(v, p):
    """Largest n-bit number: takes 2^n (the count of n-bit strings) instead of 2^n - 1."""
    if _ask(p) != "max":
        raise ValueError("only for the largest n-bit number")
    return Integer(2) ** int(v["n"])


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
