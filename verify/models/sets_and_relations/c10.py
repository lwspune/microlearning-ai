"""C10 Operations on intervals: answer models (the key, and one per misconception).

Inputs (sympy sets): A, B, C, intervals of R. params["expr"]: the set asked for, written with
U(x, y) for x ∪ y, N(x, y) for x ∩ y, D(x, y) for x − y and Co(x) for x' (complement in R),
e.g. "N(Co(A), B)" for A' ∩ B.
"""
import ast

from sympy import Complement, FiniteSet, Intersection, Interval, S, Union, oo


def _run(expr, v, U=Union, N=Intersection, D=Complement, Co=lambda x: Complement(S.Reals, x)):
    tree = ast.parse(expr, mode="eval")
    return _eval(tree.body, v, dict(U=U, N=N, D=D, Co=Co))


def _eval(node, v, ops):
    if isinstance(node, ast.Name):
        return v[node.id]
    assert isinstance(node, ast.Call) and node.func.id in ops, ast.dump(node)
    return ops[node.func.id](*(_eval(a, v, ops) for a in node.args))


def _ops(expr):
    return {n.func.id for n in ast.walk(ast.parse(expr, mode="eval")) if isinstance(n, ast.Call)}


def _real(s):
    """sympy writes R minus a set with Reals; as intervals for comparison and printing."""
    return Intersection(s, Interval(-oo, oo))


def key(v, p):
    """Straight from the definitions: x ∪ y, x ∩ y, x − y = {t ∈ x : t ∉ y}, x' = R − x."""
    return _real(_run(p["expr"], v))


def _copied_complement(x):
    """x' with every finite end keeping the bracket it had in x: R − x, with the ends of x flipped in or out."""
    ends = FiniteSet(*[e for e in x.boundary if e.is_finite])
    return _real(Complement(S.Reals, x)).symmetric_difference(ends)


def m1(v, p):
    """Copies the brackets when removing or complementing: the ends of the removed interval keep their bracket."""
    if not _ops(p["expr"]) & {"D", "Co"}:
        raise ValueError("no difference or complement")
    return _real(_run(p["expr"], v, D=lambda x, y: Intersection(x, _copied_complement(y)), Co=_copied_complement))


def m2(v, p):
    """Swaps union and intersection."""
    if not _ops(p["expr"]) & {"U", "N"}:
        raise ValueError("no union or intersection")
    return _real(_run(p["expr"], v, U=Intersection, N=Union))


def m3(v, p):
    """Joins the pieces: one interval from the leftmost to the rightmost point of the answer, gap filled in."""
    s = key(v, p)
    if s is S.EmptySet:
        raise ValueError("nothing to join")
    lo, hi = s.inf, s.sup
    joined = Interval(lo, hi, lo not in s, hi not in s)
    if joined == s:
        raise ValueError("the answer is already one interval")
    return joined


def _reverse(node):
    """x − y read as y − x; x' ∩ y (that is, y − x) read as x ∩ y'."""
    if isinstance(node, ast.Call):
        name, args = node.func.id, [_reverse(a) for a in node.args]
        is_co = lambda a: isinstance(a, ast.Call) and a.func.id == "Co"
        if name == "D":
            args = args[::-1]
        elif name == "N" and is_co(args[0]) != is_co(args[1]):
            x, y = args
            co, other = (x, y) if is_co(x) else (y, x)
            plain = co.args[0]
            args = [plain, ast.Call(func=ast.Name(id="Co", ctx=ast.Load()), args=[other], keywords=[])]
        return ast.Call(func=ast.Name(id=name, ctx=ast.Load()), args=args, keywords=[])
    return node


def m4(v, p):
    """Takes the difference the wrong way round: B − A for A − B."""
    tree = ast.parse(p["expr"], mode="eval")
    flipped = _reverse(tree.body)
    if ast.dump(flipped) == ast.dump(tree.body):
        raise ValueError("no difference to reverse")
    ops = dict(U=Union, N=Intersection, D=Complement, Co=lambda x: Complement(S.Reals, x))
    return _real(_eval(flipped, v, ops))


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4}
