"""C05 Union and intersection: answer models (the key, and one per misconception).

Inputs: one per set given in roster form, named by its letter: `{1, 3, 5}`, or `{}` for the empty set.
Params: one per set given by a rule, named by its letter: "prime 80 100" (primes strictly between 80
and 100), "odd 89 99" (odd numbers strictly between), "nat_lt 6" (natural numbers less than 6);
and params["expr"]: the set asked for, two letters joined by | (union) or & (intersection), e.g. "X & Y".
"""
from sympy import FiniteSet, S, isprime

_RULES = ("prime", "odd", "nat_lt")


def _parse(expr):
    op = "|" if "|" in expr else "&"
    left, right = (s.strip() for s in expr.split(op))
    return op, left, right


def _is_prime(n, weak):
    """weak: tests only 2, 3 and 5 as factors, so 49, 77, 91 pass as prime."""
    if not weak:
        return isprime(n)
    return n > 1 and all(n % d for d in (2, 3, 5) if d != n)


def _rule_set(rule, wide=False, weak=False):
    """The elements of a rule. wide: the end numbers of 'between' or 'less than' are taken in."""
    kind, *nums = rule.split()
    nums = [int(n) for n in nums]
    if kind == "nat_lt":
        lo, hi = 1, nums[0]
        rng = range(lo, hi + 1) if wide else range(lo, hi)
        return set(rng)
    lo, hi = nums
    rng = range(lo, hi + 1) if wide else range(lo + 1, hi)
    if kind == "prime":
        return {n for n in rng if _is_prime(n, weak)}
    return {n for n in rng if n % 2 == 1}


def _sets(v, p, wide=False, weak=False, empty=None):
    """Every set as a Python set. empty: what an empty roster set is read as."""
    out = {}
    for name, val in v.items():
        elems = set(val) if val else set()
        out[name] = elems if elems or empty is None else set(empty)
    for name, rule in p.items():
        if name != "expr":
            out[name] = _rule_set(rule, wide, weak)
    return out


def _fs(elems):
    return FiniteSet(*elems) if elems else S.EmptySet


def _combine(sets, op, left, right):
    a, b = sets[left], sets[right]
    return a | b if op == "|" else a & b


def key(v, p):
    """Straight from the definitions: x is in A ∪ B if it is in A or in B (or both); in A ∩ B if in both."""
    op, left, right = _parse(p["expr"])
    sets = _sets(v, p)
    pool = sets[left] | sets[right]
    if op == "|":
        found = [x for x in pool if x in sets[left] or x in sets[right]]
    else:
        found = [x for x in pool if x in sets[left] and x in sets[right]]
    return _fs(found)


def m1(v, p):
    """Swaps the symbols: reads ∪ as 'common to both' and ∩ as 'everything in either'."""
    op, left, right = _parse(p["expr"])
    return _fs(_combine(_sets(v, p), "&" if op == "|" else "|", left, right))


def m2(v, p):
    """Reads 'in A or in B' as 'in exactly one of them': the union leaves out the shared elements."""
    op, left, right = _parse(p["expr"])
    if op != "|":
        raise ValueError("no union to misread")
    sets = _sets(v, p)
    return _fs(sets[left] ^ sets[right])


def _empty_misread(v, p, as_set):
    op, left, right = _parse(p["expr"])
    has_empty = any(not val for val in v.values())
    result = _combine(_sets(v, p, empty=as_set), op, left, right)
    if not result:
        return FiniteSet(*as_set)
    if not has_empty:
        raise ValueError("no empty set to misread")
    return _fs(result)


def m3(v, p):
    """Takes the empty set to be {0}: an empty operand is read as {0}, and an empty answer written {0}."""
    return _empty_misread(v, p, [0])


def m4(v, p):
    """Lists ∅ as an element: an empty operand is read as {∅}, and an empty answer written {∅}."""
    return _empty_misread(v, p, [S.EmptySet])


def m5(v, p):
    """Takes in the end numbers: 'between 89 and 99' as 89 to 99, 'less than 6' as up to 6."""
    if not any(k != "expr" for k in p):
        raise ValueError("no set given by a rule")
    op, left, right = _parse(p["expr"])
    return _fs(_combine(_sets(v, p, wide=True), op, left, right))


def m6(v, p):
    """Tests only 2, 3 and 5 as factors when listing primes, so 49 or 91 passes as prime."""
    if not any(k != "expr" and r.startswith("prime") for k, r in p.items()):
        raise ValueError("no set of primes")
    op, left, right = _parse(p["expr"])
    return _fs(_combine(_sets(v, p, weak=True), op, left, right))


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
