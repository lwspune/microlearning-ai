"""C01 Adding or multiplying choices: answer models (the key, and one per misconception).

Inputs: the number of choices in each group, by name (e.g. a = 3 roads from A to N).
params["plan"]: how the groups combine, written with + (one case OR another) and * (one stage AND
then another), e.g. "a*b + c*d" for routes through N or through S, or "E + E*N + E*N*N" for even
numbers below 1000 (units digit first). Factors are written in the order they are filled.
params["same"] (optional): names that draw from one pool, e.g. "E N" (the even digits are among the
digits); params["rep"] = "1" when the stem allows repetition (the no-repetition mistake needs it).
params["digits"], params["below"], params["parity"] (optional): the key then lists the numbers
themselves instead of reading the plan.
"""
import re
from itertools import product

from sympy import Integer


def _parse(plan):
    """The plan as a tree: ("+", [..]) / ("*", [..]) / ("leaf", name)."""
    toks = re.findall(r"[A-Za-z]\w*|[+*()]", plan)
    pos = 0

    def peek():
        return toks[pos] if pos < len(toks) else None

    def take():
        nonlocal pos
        pos += 1
        return toks[pos - 1]

    def atom():
        t = take()
        if t == "(":
            e = expr()
            assert take() == ")", plan
            return e
        return ("leaf", t)

    def term():
        fs = [atom()]
        while peek() == "*":
            take()
            fs.append(atom())
        return fs[0] if len(fs) == 1 else ("*", fs)

    def expr():
        ts = [term()]
        while peek() == "+":
            take()
            ts.append(term())
        return ts[0] if len(ts) == 1 else ("+", ts)

    tree = expr()
    assert pos == len(toks), plan
    return tree


def _outcomes(node, v):
    """Every outcome, listed: a case of a sum is tagged with its index, a stage of a product is one coordinate."""
    op, arg = node
    if op == "leaf":
        return [(arg, i) for i in range(int(v[arg]))]
    parts = [_outcomes(n, v) for n in arg]
    if op == "+":
        return [(k, o) for k, part in enumerate(parts) for o in part]
    return list(product(*parts))


def _numbers(p):
    """The numbers below p['below'] written with p['digits'] (repetition allowed), with the parity asked for."""
    digits = p["digits"].split(",")
    below = int(p["below"])
    found = set()
    for n in range(1, len(str(below - 1)) + 1):
        for t in product(digits, repeat=n):
            x = int("".join(t))
            if x < below and x % 2 == (0 if p["parity"] == "even" else 1):
                found.add(x)
    return len(found)


def key(v, p):
    """Count the outcomes one by one: list them all, never multiply or add the group sizes."""
    if "digits" in p:
        return Integer(_numbers(p))
    return Integer(len(set(_outcomes(_parse(p["plan"]), v))))


def _value(node, v):
    op, arg = node
    if op == "leaf":
        return v[arg]
    vals = [_value(n, v) for n in arg]
    if op == "+":
        return sum(vals)
    out = Integer(1)
    for x in vals:
        out *= x
    return out


def _has(node, op):
    return node[0] == op or (node[0] != "leaf" and any(_has(n, op) for n in node[1]))


def _leaves(node):
    return [node[1]] if node[0] == "leaf" else [x for n in node[1] for x in _leaves(n)]


def m1(v, p):
    """Adds when the stages happen one after another: every * read as +."""
    tree = _parse(p["plan"])
    if not _has(tree, "*"):
        raise ValueError("no 'and then' stages to add")
    return sum((v[x] for x in _leaves(tree)), Integer(0))


def m2(v, p):
    """Multiplies the separate cases: every + read as *."""
    tree = _parse(p["plan"])
    if not _has(tree, "+"):
        raise ValueError("no 'or' cases to multiply")
    out = Integer(1)
    for x in _leaves(tree):
        out *= v[x]
    return out


def _largest_case(node, v):
    op, arg = node
    if op == "leaf":
        return v[arg]
    if op == "+":
        return max(_largest_case(n, v) for n in arg)
    out = Integer(1)
    for n in arg:
        out *= _largest_case(n, v)
    return out


def m3(v, p):
    """Counts only the biggest case and forgets to add the others."""
    tree = _parse(p["plan"])
    if not _has(tree, "+"):
        raise ValueError("only one case")
    return _largest_case(tree, v)


def _no_rep(node, v, pool_of):
    op, arg = node
    if op == "leaf":
        return v[arg]
    if op == "+":
        return sum(_no_rep(n, v, pool_of) for n in arg)
    used, out = {}, Integer(1)
    for n in arg:
        if n[0] == "leaf":
            pool = pool_of.get(n[1], n[1])
            out *= v[n[1]] - used.get(pool, 0)
            used[pool] = used.get(pool, 0) + 1
        else:
            out *= _no_rep(n, v, pool_of)
    return out


def m4(v, p):
    """Ignores that repetition is allowed: each later place drawn from the same pool has one choice fewer."""
    if p.get("rep") != "1":
        raise ValueError("repetition isn't allowed here")
    names = p.get("same", "").split()
    pool_of = {x: names[0] for x in names}
    return _no_rep(_parse(p["plan"]), v, pool_of)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
