"""C03 Adding and subtracting in binary: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  add    the binary numerals p["bs"] (a list of 2 or 3) -> their sum, written in binary
  sub    p["a"] - p["b"], both binary numerals (a > b) -> the difference, written in binary
  digits p["bs"] (addends) and p["total"] are binary numerals with unknown bits, the letters
         in p["vars"] (e.g. "pqr"); p["bs"] added give p["total"] -> the bits, as a Tuple in
         the order of p["vars"]
A binary answer's value is the decimal number its numeral stands for, so two different
numerals always have different values. Leading zeros of a wrong numeral are dropped.
"""
from itertools import product

from sympy import Integer, Tuple


def _ask(p):
    return p.get("ask", "add")


def _dec(s):
    """From the definition: bit k from the right (k = 0, 1, 2, ...) is worth 2^k."""
    return sum(int(b) * 2 ** k for k, b in enumerate(reversed(s)))


def _fill(s, sub):
    """The numeral with its letters replaced by the bits in sub."""
    return "".join(str(sub[ch]) if ch in sub else ch for ch in s)


def _columns(nums):
    """Column digits, rightmost column first: one list of bits per column."""
    width = max(len(s) for s in nums)
    padded = [s.rjust(width, "0") for s in nums]
    return [[int(s[-1 - k]) for s in padded] for k in range(width)]


def _add_by(nums, rule):
    """Column addition right to left; rule(total) -> (digit written, carry passed on)."""
    digits, carry = [], 0
    for col in _columns(nums):
        d, carry = rule(sum(col) + carry)
        digits.append(d)
    while carry:
        digits.append(carry % 2)
        carry //= 2
    return Integer(sum(d * 2 ** k for k, d in enumerate(digits)))


def _no_carry(t):
    """M1: each column on its own; the carry is never passed on."""
    return t % 2, 0


def _clip(t):
    """M2: a column can hold only 0 or 1, so 1 + 1 stays 1; nothing is carried."""
    return min(t, 1), 0


def _three_as_two(t):
    """M3: 1 + 1 + 1 = (10)_2, so any column with two or more 1s writes 0 and carries 1."""
    if t >= 4:
        raise ValueError("M3 is modelled for column totals up to 3")
    return (t, 0) if t < 2 else (0, 1)


def _carry_one(t):
    """M4: carries only 1, even when a column adds up to 4 or more."""
    return t % 2, (1 if t >= 2 else 0)


def _sub_by(a, b, rule):
    """Column subtraction right to left, a - b; rule(a_bits, b_bits, k) -> the digit in column k."""
    width = len(a)
    top = [int(ch) for ch in reversed(a)]
    bot = [int(ch) for ch in reversed(b.rjust(width, "0"))]
    digits = [rule(top, bot, k) for k in range(width)]
    return Integer(sum(d * 2 ** k for k, d in enumerate(digits)))


def _sub_own_column(top, bot, k):
    """M1: 0 - 1 written as 1 and the borrow never taken from the next column."""
    return abs(top[k] - bot[k])


def _sub_clip(top, bot, k):
    """M2: 0 - 1 stays 0 (nothing to take away from); no borrowing."""
    return max(top[k] - bot[k], 0)


def _sub_borrow_skip_zeros(top, bot, k):
    """M5: borrows from the next 1 on the left, but leaves the 0s in between as 0, not 1."""
    if top[k] >= bot[k]:
        return top[k] - bot[k]
    j = next((j for j in range(k + 1, len(top)) if top[j] == 1), None)
    if j is None:
        raise ValueError("nothing to borrow from")
    top[j] = 0  # the zeros between k and j are left as 0 (the slip)
    return 2 + top[k] - bot[k]


def _unique(sols, why):
    if len(sols) != 1:
        raise ValueError(f"{why}: {len(sols)} solutions")
    return Tuple(*sols[0])


def _digits_key(p):
    """Every assignment of 0/1 to the letters that makes the sum true, in decimal."""
    vs = p["vars"]
    sols = []
    for bits in product((0, 1), repeat=len(vs)):
        sub = dict(zip(vs, bits))
        if sum(_dec(_fill(s, sub)) for s in p["bs"]) == _dec(_fill(p["total"], sub)):
            sols.append(bits)
    return _unique(sols, "key")


def _digits_by_columns(p, rule):
    """Solves column by column, right to left, using the student's column rule.

    In each column the one unknown bit is chosen so that the student's digit matches the
    total's digit; a column with no unknown is worked and passed over, as a student filling
    in letters does.
    """
    vs = p["vars"]
    width = max(len(s) for s in p["bs"] + [p["total"]])
    adds = [s.rjust(width, "0") for s in p["bs"]]
    tot = p["total"].rjust(width, "0")
    found, carry = {}, 0
    for k in range(width):
        col = [s[-1 - k] for s in adds]
        t_ch = tot[-1 - k]
        unknown = [ch for ch in col if ch in vs]
        if len(unknown) + (t_ch in vs) > 1:
            raise ValueError("two unknowns in one column")
        if unknown:
            u = unknown[0]
            fits = []
            for b in (0, 1):
                d, c = rule(sum(b if ch == u else int(ch) for ch in col) + carry)
                if d == int(t_ch):
                    fits.append((b, c))
            if len(fits) != 1:
                raise ValueError(f"column {k}: {len(fits)} values fit")
            found[u], carry = fits[0]
        else:
            d, carry = rule(sum(int(ch) for ch in col) + carry)
            if t_ch in vs:
                found[t_ch] = d
    if set(found) != set(vs):
        raise ValueError("some letter not reached")
    return Tuple(*(found[v] for v in vs))


def _digits_face_value(p):
    """M6: a letter adds only its own value, 0 or 1, not its place value."""
    vs = p["vars"]
    sols = []
    for bits in product((0, 1), repeat=len(vs)):
        sub = dict(zip(vs, bits))
        def val(s):
            return sum(
                (int(ch) * 2 ** k if ch in "01" else sub[ch]) for k, ch in enumerate(reversed(s))
            )
        if sum(val(s) for s in p["bs"]) == val(p["total"]):
            sols.append(bits)
    return _unique(sols, "M6")


def key(v, p):
    a = _ask(p)
    if a == "add":
        return Integer(sum(_dec(s) for s in p["bs"]))
    if a == "sub":
        d = _dec(p["a"]) - _dec(p["b"])
        if d <= 0:
            raise ValueError("a must be larger than b")
        return Integer(d)
    if a == "digits":
        return _digits_key(p)
    raise ValueError(a)


def m1(v, p):
    """Works each column on its own: carries and borrows are never passed on."""
    a = _ask(p)
    if a == "add":
        return _add_by(p["bs"], _no_carry)
    if a == "sub":
        return _sub_by(p["a"], p["b"], _sub_own_column)
    return _digits_by_columns(p, _no_carry)


def m2(v, p):
    """A column can only hold 0 or 1: 1 + 1 stays 1 and 0 - 1 stays 0."""
    a = _ask(p)
    if a == "add":
        return _add_by(p["bs"], _clip)
    if a == "sub":
        return _sub_by(p["a"], p["b"], _sub_clip)
    return _digits_by_columns(p, _clip)


def m3(v, p):
    """1 + 1 + 1 = (10)_2: a column with three 1s writes 0 and carries 1."""
    a = _ask(p)
    if a == "add":
        return _add_by(p["bs"], _three_as_two)
    if a == "digits":
        return _digits_by_columns(p, _three_as_two)
    raise ValueError("addition only")


def m4(v, p):
    """Carries only 1 when a column adds up to 4 or more (three numbers)."""
    a = _ask(p)
    if a == "add":
        return _add_by(p["bs"], _carry_one)
    if a == "digits":
        return _digits_by_columns(p, _carry_one)
    raise ValueError("addition only")


def m5(v, p):
    """Borrowing across zeros: the 0s passed over are left as 0 instead of becoming 1."""
    if _ask(p) != "sub":
        raise ValueError("subtraction only")
    return _sub_by(p["a"], p["b"], _sub_borrow_skip_zeros)


def m6(v, p):
    """An unknown bit counts only its face value, 0 or 1, not its place value."""
    if _ask(p) != "digits":
        raise ValueError("unknown-digit questions only")
    return _digits_face_value(p)


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
