"""C02 Logical connectives: answer models (the key, and one per misconception).

Each item lists statements in params["stmts"], as strings in sympy's function form:
"Not(p)", "And(p, q)", "Or(p, q)", "Implies(p, q)", "Equivalent(p, q)", and "Nor(p, q)" for a
sentence worded "neither p nor q". inputs give the truth value (True / False) of every simple
statement they use. The answer is the statements' truth values in order, as one symbol:
Symbol("T_F_T") for T, F, T.

A misconception is a wrong truth rule for one connective: the model parses the same strings
with that connective redefined. It raises ValueError on an item that never uses the connective.
"""
from sympy import And, Equivalent, Implies, Not, Or, Symbol, Xor, sympify
from sympy.logic.boolalg import BooleanFalse, BooleanTrue


def _nor(a, b):
    return And(Not(a), Not(b))


# The correct meaning of each connective, straight from its definition.
RIGHT = {"Not": Not, "And": And, "Or": Or, "Implies": Implies, "Equivalent": Equivalent, "Nor": _nor}

# One wrong rule per misconception.
WRONG = {
    "C02-M1": {"Implies": lambda a, b: And(a, b)},  # p -> q false whenever p is false
    "C02-M2": {"Or": lambda a, b: Xor(a, b)},  # "or" excludes both being true
    "C02-M3": {"Equivalent": lambda a, b: And(a, b)},  # p <-> q true only when both are true
    "C02-M4": {"Equivalent": lambda a, b: Implies(a, b)},  # p <-> q read one way, as p -> q
    "C02-M5": {"Nor": lambda a, b: Or(Not(a), Not(b))},  # "neither p nor q" read as ~p or ~q
}


def _tf(b) -> str:
    if isinstance(b, BooleanTrue):
        return "T"
    if isinstance(b, BooleanFalse):
        return "F"
    raise ValueError(f"not a truth value: {b} (an input is missing)")


def _values(v, p, rules):
    vals = {Symbol(k): b for k, b in v.items()}
    conn = {**RIGHT, **rules}
    out = []
    for s in p["stmts"]:
        e = sympify(s, locals={**conn, **{k: Symbol(k) for k in v}})
        out.append(_tf(e.subs(vals)))
    return Symbol("_".join(out))


def key(v, p):
    return _values(v, p, {})


def _model(mid):
    def m(v, p):
        if not any(f"{c}(" in s for s in p["stmts"] for c in WRONG[mid]):
            raise ValueError(f"no statement uses the connective {mid} misreads")
        return _values(v, p, WRONG[mid])

    return m


MODELS = {"key": key, **{mid: _model(mid) for mid in WRONG}}
