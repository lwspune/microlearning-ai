"""C03 Truth tables: answer models (the key, and one per misconception).

An item gives its statement pattern twice in params:
  expr  the pattern in sympy syntax, e.g. "Implies(p, Implies(q, p))"; the key reads only this.
  f     the same pattern in the book's layout, for the misconception models: letters p, q, r, s;
        "~" (not), "&" (and), "|" (or), ">" (implies), "=" (if and only if); brackets ( ) [ ].
  ask   "rows": how many rows the truth table has (a number);
        "column": the last column, read down the rows in the standard order (a named answer,
        Symbol("TTFT") for T, T, F, T).
The standard order: the first letter is T in the top half of the rows and F in the bottom half,
the next letter halves again, and the last letter alternates T, F.
"""
from itertools import product

from sympy import And, Equivalent, Implies, Integer, Not, Or, Symbol, sympify
from sympy.logic.boolalg import BooleanTrue

_LETTERS = "pqrs"
_SYMS = {c: Symbol(c) for c in _LETTERS}


def _key_expr(p):
    return sympify(p["expr"], locals={**_SYMS, "And": And, "Or": Or, "Not": Not, "Implies": Implies, "Equivalent": Equivalent})


def _letters(e):
    """The simple statements in the pattern, in book order (p, q, r, s)."""
    return sorted((str(s) for s in e.free_symbols), key=_LETTERS.index)


def _rows(names):
    """Rows of truth values in the standard order (first letter halves slowest)."""
    return [dict(zip(names, vals)) for vals in product([True, False], repeat=len(names))]


def _column(values):
    return Symbol("".join("T" if v else "F" for v in values))


def key(v, p):
    e = _key_expr(p)
    names = _letters(e)
    if p["ask"] == "rows":
        return Integer(2) ** len(names)
    col = [isinstance(e.subs({_SYMS[n]: val for n, val in row.items()}), BooleanTrue) for row in _rows(names)]
    return _column(col)


# --- The book-layout pattern, for the misconception models ---------------------------------

_OPS = {
    "&": lambda a, b: a and b,
    "|": lambda a, b: a or b,
    ">": lambda a, b: (not a) or b,
    "=": lambda a, b: a == b,
}


def _tokens(f):
    toks = [c for c in f.replace("[", "(").replace("]", ")") if not c.isspace()]
    for c in toks:
        if c not in _LETTERS + "~&|>=()":
            raise ValueError(f"bad token {c!r} in {f!r}")
    return toks


def _parse(toks, ops):
    """A fully bracketed pattern as a tree: ("var", n), ("not", t), (op, a, b). ops maps an op to its truth rule."""
    pos = 0

    def unary():
        nonlocal pos
        c = toks[pos]
        pos += 1
        if c == "~":
            return ("not", unary())
        if c == "(":
            t = binary()
            assert toks[pos] == ")", "unbalanced brackets"
            pos += 1
            return t
        assert c in _LETTERS, f"unexpected {c!r}"
        return ("var", c)

    def binary():
        nonlocal pos
        a = unary()
        if pos < len(toks) and toks[pos] in ops:
            op = toks[pos]
            pos += 1
            b = unary()
            assert not (pos < len(toks) and toks[pos] in ops), "the pattern must be fully bracketed"
            return (op, a, b)
        return a

    t = binary()
    assert pos == len(toks), "trailing tokens"
    return t


def _eval(t, row, ops):
    if t[0] == "var":
        return row[t[1]]
    if t[0] == "not":
        return not _eval(t[1], row, ops)
    return ops[t[0]](_eval(t[1], row, ops), _eval(t[2], row, ops))


def _tree(p, ops=_OPS):
    return _parse(_tokens(p["f"]), ops)


def _names(p):
    return sorted({c for c in p["f"] if c in _LETTERS}, key=_LETTERS.index)


def _needs(p, ask):
    if p["ask"] != ask:
        raise ValueError(f"only for ask={ask}")


def m1(v, p):
    """Rows = 2n: each statement 'adds two rows' instead of doubling them."""
    _needs(p, "rows")
    return Integer(2 * len(_names(p)))


def m2(v, p):
    """Each appearance of a letter counted as a new statement: 2 to the number of appearances."""
    _needs(p, "rows")
    return Integer(2) ** sum(1 for c in p["f"] if c in _LETTERS)


def m3(v, p):
    """Brackets ignored: work left to right, a ~ catching only the next letter."""
    _needs(p, "column")
    toks = [c for c in _tokens(p["f"]) if c not in "()"]
    names = _names(p)

    def run(row):
        pos = 0

        def atom():
            nonlocal pos
            neg = False
            while toks[pos] == "~":
                neg = not neg
                pos += 1
            val = row[toks[pos]]
            pos += 1
            return val != neg

        acc = atom()
        while pos < len(toks):
            op = toks[pos]
            pos += 1
            acc = _OPS[op](acc, atom())
        return acc

    return _column([run(r) for r in _rows(names)])


def m4(v, p):
    """p -> q read backwards: false when p is F and q is T (the converse's rule)."""
    _needs(p, "column")
    if ">" not in p["f"]:
        raise ValueError("no conditional")
    ops = {**_OPS, ">": lambda a, b: a or not b}
    t = _tree(p, ops)
    return _column([_eval(t, r, ops) for r in _rows(_names(p))])


def m5(v, p):
    """Rows listed in the wrong order: the last letter halves slowest and the first alternates."""
    _needs(p, "column")
    t = _tree(p)
    names = _names(p)
    rows = [dict(zip(reversed(names), vals)) for vals in product([True, False], repeat=len(names))]
    return _column([_eval(t, r, _OPS) for r in rows])


def m6(v, p):
    """A negated letter (~p) counted as one more simple statement with its own T/F column."""
    _needs(p, "rows")
    f = p["f"].replace(" ", "")
    negs = {f[i + 1] for i, c in enumerate(f) if c == "~" and i + 1 < len(f) and f[i + 1] in _LETTERS}
    return Integer(2) ** (len(_names(p)) + len(negs))


MODELS = {"key": key, "C03-M1": m1, "C03-M2": m2, "C03-M3": m3, "C03-M4": m4, "C03-M5": m5, "C03-M6": m6}
