"""C01 The three identities: answer models (the key, and one per misconception).

Two kinds of item:
  * value: params["e"] is an expression in sin, cos, tan, cot, sec, cosec. Their argument is either x
    (theta, a real symbol: the verifier reads option values with a real x) or a number of degrees
    (`sin(30)`). The key evaluates it with sympy's own functions; each model swaps in its wrong rule.
  * statement: params["family"] names a set of candidate statements (lhs, rhs). The key returns the
    one that is an identity, found by simplifying lhs - rhs; each model returns the statement its
    wrong belief makes true.
"""
from sympy import Function, Symbol, cos, cot, csc, pi, sec, simplify, sin, sympify, tan

X = Symbol("x", real=True)

NAMES = ["sin", "cos", "tan", "cot", "sec", "cosec"]
F = {n: Function(n.upper()) for n in NAMES}
TRUE = {"sin": sin, "cos": cos, "tan": tan, "cot": cot, "sec": sec, "cosec": csc}


def _parse(p):
    return sympify(p["e"], locals={**{n: F[n] for n in NAMES}, "x": X})


def _angle(arg):
    """x stays x; a number is degrees."""
    return arg if arg.has(X) else arg * pi / 180


def _evaluate(expr, table):
    """Replace each placeholder function by table[name](angle)."""
    reps = {}
    for node in expr.atoms(*F.values()):
        name = node.func.__name__.lower()
        reps[node] = table[name](node.args[0])
    return simplify(expr.xreplace(reps))


def _true_table():
    return {n: (lambda a, f=TRUE[n]: f(_angle(a))) for n in NAMES}


def _value(p, changes=None, pre=None):
    expr = _parse(p)
    if pre:
        expr = pre(expr)
    table = _true_table()
    table.update(changes or {})
    return _evaluate(expr, table)


# Statements, by family: name -> (lhs, rhs), all in x.
S = {
    "tan": {
        "tan_sec": (1 + tan(X) ** 2, sec(X) ** 2),
        "tan_cosec": (1 + tan(X) ** 2, csc(X) ** 2),
        "tan_sec_unsquared": (1 + tan(X), sec(X)),
        "tan_sec_flipped": (tan(X) ** 2, 1 - sec(X) ** 2),
    },
    "cot": {
        "cot_cosec": (cot(X) ** 2, csc(X) ** 2 - 1),
        "cot_sec": (cot(X) ** 2, sec(X) ** 2 - 1),
        "cot_cosec_unsquared": (cot(X), csc(X) - 1),
        "cot_cosec_flipped": (cot(X) ** 2, 1 - csc(X) ** 2),
    },
}
# What each wrong belief makes true, by family.
BELIEF = {
    "C01-M2": {"tan": "tan_cosec", "cot": "cot_sec"},
    "C01-M3": {"tan": "tan_sec_unsquared", "cot": "cot_cosec_unsquared"},
    "C01-M4": {"tan": "tan_sec_flipped", "cot": "cot_cosec_flipped"},
}


def _statement(p, model):
    fam = p["family"]
    if model == "key":
        true = [n for n, (l, r) in S[fam].items() if simplify(l - r) == 0]
        if len(true) != 1:
            raise ValueError(f"{len(true)} identities among the statements")
        return Symbol(true[0])
    if model not in BELIEF:
        raise ValueError(f"{model} has no statement belief")
    return Symbol(BELIEF[model][fam])


def key(v, p):
    if "family" in p:
        return _statement(p, "key")
    return _value(p)


def m1(v, p):
    """Pairs the reciprocals wrongly: sec = 1/sin and cosec = 1/cos."""
    if "family" in p:
        raise ValueError("value items only")
    return _value(p, {"sec": lambda a: 1 / sin(_angle(a)), "cosec": lambda a: 1 / cos(_angle(a))})


def m2(v, p):
    """Swaps the partners: 1 + tan^2 = cosec^2 and 1 + cot^2 = sec^2."""
    if "family" in p:
        return _statement(p, "C01-M2")
    expr = _parse(p)
    sq = {F["sec"]: lambda a: 1 + F["cot"](a) ** 2, F["cosec"]: lambda a: 1 + F["tan"](a) ** 2}
    reps = {}
    for node in expr.atoms(*F.values()):
        if node.func in sq:
            reps[node ** 2] = sq[node.func](node.args[0])
    if not reps:
        raise ValueError("no sec^2 or cosec^2 to rewrite")
    return _value(p, pre=lambda e: e.subs(reps))


def m3(v, p):
    """Drops the squares: sin + cos = 1, 1 + tan = sec, 1 + cot = cosec."""
    if "family" in p:
        return _statement(p, "C01-M3")
    raise ValueError("statement items only")


def m4(v, p):
    """Rearranges an identity with the subtraction the wrong way round: 1 - cos^2 = -sin^2."""
    if "family" in p:
        return _statement(p, "C01-M4")
    if p.get("rearrange") != "yes":
        raise ValueError("no rearranged identity in this item")
    return -_value(p)


def m5(v, p):
    """Swaps the sine and cosine values of 30 and 60 degrees: sin 30 = root 3 / 2."""
    if "family" in p:
        raise ValueError("value items only")
    swapped = {}
    for n in NAMES:
        def f(a, n=n):
            if a.has(X) or a not in (30, 60):
                raise ValueError("standard angles 30 and 60 only")
            return TRUE[n]((90 - a) * pi / 180)
        swapped[n] = f
    return _value(p, swapped)


def m6(v, p):
    """Forgets the 'one over': takes cosec as sin, sec as cos, cot as tan."""
    if "family" in p:
        raise ValueError("value items only")
    return _value(p, {"cosec": lambda a: sin(_angle(a)), "sec": lambda a: cos(_angle(a)),
                      "cot": lambda a: tan(_angle(a))})


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
