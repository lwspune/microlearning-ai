"""C12 Absolute value: answer models (the key, and one per misconception).

Every item has params {"expr": "..."}: a number expression with + - * / ( ) and A(...) for
absolute value bars, e.g. "A(4-9)-A(-2)" is |4 - 9| - |-2|. Each model parses the same string
and evaluates it with its own wrong rule; the answer is an exact Rational.
"""
from sympy import Abs, Integer, Rational


def _tokens(s):
    out, i = [], 0
    s = s.replace(" ", "")
    while i < len(s):
        c = s[i]
        if c.isdigit():
            j = i
            while j < len(s) and s[j].isdigit():
                j += 1
            out.append(("num", int(s[i:j])))
            i = j
        elif c == "A" and s[i + 1:i + 2] == "(":
            out.append(("abs", None))
            i += 2
        elif c in "+-*/()":
            out.append((c, None))
            i += 1
        else:
            raise ValueError("bad character " + c)
    return out


class _Parser:
    """Builds a tree: ("num", n) | ("neg", x) | ("bin", op, a, b) | ("abs", x).

    ltr=True gives + - * / one level, so a chain is worked strictly left to right.
    """

    def __init__(self, s, ltr=False):
        self.t, self.i, self.ltr = _tokens(s), 0, ltr

    def peek(self):
        return self.t[self.i][0] if self.i < len(self.t) else None

    def take(self):
        tok = self.t[self.i]
        self.i += 1
        return tok

    def parse(self):
        node = self.expr()
        if self.i != len(self.t):
            raise ValueError("trailing tokens")
        return node

    def expr(self):
        ops = "+-*/" if self.ltr else "+-"
        node = self.term() if not self.ltr else self.unary()
        while self.peek() in tuple(ops):
            op = self.take()[0]
            right = self.term() if not self.ltr else self.unary()
            node = ("bin", op, node, right)
        return node

    def term(self):
        node = self.unary()
        while self.peek() in ("*", "/"):
            op = self.take()[0]
            node = ("bin", op, node, self.unary())
        return node

    def unary(self):
        if self.peek() == "-":
            self.take()
            return ("neg", self.unary())
        return self.atom()

    def atom(self):
        kind, val = self.take()
        if kind == "num":
            return ("num", Integer(val))
        if kind in ("(", "abs"):
            inner = self.expr()
            if self.take()[0] != ")":
                raise ValueError("missing )")
            return ("abs", inner) if kind == "abs" else inner
        raise ValueError("unexpected " + kind)


def _ev(n, rule):
    """Evaluate tree n; rule(node, ev) handles ("abs", x) and may override other nodes."""
    got = rule(n, lambda m: _ev(m, rule))
    if got is not None:
        return got
    k = n[0]
    if k == "num":
        return n[1]
    if k == "neg":
        return -_ev(n[1], rule)
    if k == "abs":
        return Abs(_ev(n[1], rule))
    a, b = _ev(n[2], rule), _ev(n[3], rule)
    return {"+": a + b, "-": a - b, "*": a * b, "/": Rational(a) / b}[n[1]]


def _terms(n, sign=1):
    """The signed top-level terms of a sum: a - b + c gives [(1, a), (-1, b), (1, c)]."""
    if n[0] == "bin" and n[1] in "+-":
        return _terms(n[2], sign) + _terms(n[3], sign if n[1] == "+" else -sign)
    return [(sign, n)]


def _plain(n, ev):
    return None


def key(v, p):
    return _ev(_Parser(p["expr"]).parse(), _plain)


def m1(v, p):      # bars make every number inside positive first: |a - b| = |a| + |b|
    def rule(n, ev):
        if n[0] == "abs":
            ts = _terms(n[1])
            if len(ts) < 2:
                return None
            return sum(Abs(s * ev(t)) for s, t in ts)
        return None
    return _ev(_Parser(p["expr"]).parse(), rule)


def m2(v, p):      # reads the bars as brackets: |x| = x
    def rule(n, ev):
        return ev(n[1]) if n[0] == "abs" else None
    return _ev(_Parser(p["expr"]).parse(), rule)


def m3(v, p):      # bars always change the sign: |x| = -x
    def rule(n, ev):
        return -ev(n[1]) if n[0] == "abs" else None
    return _ev(_Parser(p["expr"]).parse(), rule)


def m4(v, p):      # works the operations inside the bars from left to right (no BODMAS)
    return _ev(_Parser(p["expr"], ltr=True).parse(), _plain)


def m5(v, p):      # thinks the bars also wipe out a minus sign just in front of them
    def rule(n, ev):
        if n[0] == "neg" and n[1][0] == "abs":
            return ev(n[1])
        if n[0] == "bin" and n[1] == "-" and n[3][0] == "abs":
            return ev(n[2]) + ev(n[3])
        return None
    return _ev(_Parser(p["expr"]).parse(), rule)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5}
