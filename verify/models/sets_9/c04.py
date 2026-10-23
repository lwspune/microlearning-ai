"""C04 Universal set and complement: answer models (the key, and one per misconception).

Every item names a universal set U, one set S and sometimes a second set B (all inside U).
params["given"]: "set" when S is A (the item asks for A'), "comp" when S is A' (the item asks for A).
Each of U, S, B is described by params[name]:
  "list":  inputs[name] is the set, listed;
  "ineq":  x from inputs[name + "_lo"] to inputs[name + "_hi"] (either may be missing), with
           params[name + "_lo_op"] / params[name + "_hi_op"] each "<" or "<=";
           U's numbers come from params["dom"] ("N" or "Z"), S's and B's from U;
  "prime", "even", "odd": the elements of U with that property.
"""
from sympy import FiniteSet, isprime


def _members(name, v, p, U, inclusive=False):
    kind = p[name]
    if kind == "list":
        return FiniteSet(*v[name])
    if kind == "ineq":
        lo, hi = v.get(name + "_lo"), v.get(name + "_hi")
        lo_op, hi_op = p.get(name + "_lo_op", "<="), p.get(name + "_hi_op", "<=")
        if inclusive:
            lo_op = hi_op = "<="
        if U is None:
            if p["dom"] == "N":
                lo, lo_op = (1, "<=") if lo is None else (lo, lo_op)
            pool = range(int(lo) - 1, int(hi) + 2)
        else:
            pool = U

        def ok(x):
            if lo is not None and not (lo < x if lo_op == "<" else lo <= x):
                return False
            if hi is not None and not (x < hi if hi_op == "<" else x <= hi):
                return False
            return True

        return FiniteSet(*[x for x in pool if ok(x)])
    if kind == "prime":
        return FiniteSet(*[x for x in U if isprime(x)])
    if kind == "even":
        return FiniteSet(*[x for x in U if x % 2 == 0])
    if kind == "odd":
        return FiniteSet(*[x for x in U if x % 2 == 1])
    raise ValueError(f"no rule {kind}")


def _sets(v, p, inclusive=False):
    U = _members("U", v, p, None, inclusive)
    S = _members("S", v, p, U, inclusive)
    B = _members("B", v, p, U, inclusive) if "B" in p else None
    return U, S, B


def _minus(x, y):
    """X − Y straight from the definition: the elements of X that are not in Y."""
    return FiniteSet(*[e for e in x if e not in y])


def key(v, p):
    """A' = {x | x ∈ U, x ∉ A}; and A = (A')' = {x | x ∈ U, x ∉ A'}."""
    U, S, _ = _sets(v, p)
    return _minus(U, S)


def m1(v, p):
    """Takes the complement inside the other set B, not inside U: B − S."""
    U, S, B = _sets(v, p)
    if B is None:
        raise ValueError("no second set")
    return _minus(B, S)


def m2(v, p):
    """Thinks the second dash changes nothing: (A')' = A', so A is A' again."""
    if p["given"] != "comp":
        raise ValueError("no complement of a complement asked")
    _, S, _ = _sets(v, p)
    return S


def m3(v, p):
    """Reads every strict inequality in a rule as including its end (x < 10 as x ≤ 10)."""
    U, S, _ = _sets(v, p, inclusive=True)
    if all(p.get(k) != "<" for k in ("U_lo_op", "U_hi_op", "S_lo_op", "S_hi_op")):
        raise ValueError("no strict inequality")
    return _minus(U, S)


def m4(v, p):
    """Takes the opposite property (prime -> composite, x < c -> x > c), losing the elements with neither."""
    U, S, _ = _sets(v, p)
    kind = p["S"]
    if kind == "prime":
        return FiniteSet(*[x for x in U if x > 1 and not isprime(x)])
    if kind == "ineq":
        lo, hi = v.get("S_lo"), v.get("S_hi")
        if (lo is None) == (hi is None):
            raise ValueError("one-sided inequalities only")
        if hi is not None:  # x < c or x <= c  ->  x > c or x >= c
            strict = p.get("S_hi_op", "<=") == "<"
            return FiniteSet(*[x for x in U if (x > hi if strict else x >= hi)])
        strict = p.get("S_lo_op", "<=") == "<"
        return FiniteSet(*[x for x in U if (x < lo if strict else x <= lo)])
    raise ValueError("no opposite property")


def m5(v, p):
    """Takes A' as only the elements outside every circle: U − (S ∪ B), dropping B's part."""
    U, S, B = _sets(v, p)
    if B is None:
        raise ValueError("no second set")
    return _minus(U, S | B)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
