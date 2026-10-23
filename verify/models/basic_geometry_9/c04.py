"""C04 Conditional statements and converses: answer models (the key, and one per misconception).

A statement is 'if a, then b': inputs["a"] is its antecedent (the given part) and inputs["b"]
its consequent (the part to prove), each a Symbol naming a property, e.g. Symbol("rhombus").
The negation of a part x is Symbol("not_x").

params["ask"] says what the item asks for:
  "converse"   the converse, as Tuple(if part, then part);
  "given"      the antecedent (given part) of the converse, a Symbol;
  "toprove"    the consequent (part to prove) of the converse, a Symbol;
  "truth"      the converse and whether it is true, as Tuple(if part, then part, T or F).

For "truth" the properties must come from one of the small worlds below, where each is
computed from its definition: whole numbers 1 to 100, polygons with 3 to 12 sides, and the
named kinds of quadrilateral. 'If x, then y' is true when every object with x also has y.
"""
from sympy import Symbol, Tuple, isprime

T, F = Symbol("T"), Symbol("F")

# Quadrilaterals by their sides and angles: (all sides congruent, all angles right).
_QUADS = {
    "square": (True, True),
    "rectangle": (False, True),
    "rhombus": (True, False),
    "parallelogram": (False, False),
    "kite": (False, False),
    "trapezium": (False, False),
}

_WORLDS = {
    "number": (range(1, 101), {
        "odd": lambda n: n % 2 == 1,
        "primegt2": lambda n: isprime(n) and n > 2,
        "divby3": lambda n: n % 3 == 0,
        "digitsumby3": lambda n: sum(map(int, str(n))) % 3 == 0,
    }),
    "polygon": (range(3, 13), {
        "anglesum180": lambda n: (n - 2) * 180 == 180,
        "triangle": lambda n: n == 3,
    }),
    "quadrilateral": (list(_QUADS), {
        "rhombus": lambda k: _QUADS[k][0],
        "square": lambda k: _QUADS[k][0] and _QUADS[k][1],
        "rectangle": lambda k: _QUADS[k][1],
    }),
}


def _not(x):
    return Symbol("not_" + str(x))


def _holds(x, obj, preds):
    """Whether obj has the part x (a property or its negation)."""
    name = str(x)
    if name.startswith("not_"):
        return not preds[name[4:]](obj)
    return preds[name](obj)


def _true(x, y):
    """Truth of 'if x, then y', checked over every object of the world both parts come from."""
    names = {str(x).removeprefix("not_"), str(y).removeprefix("not_")}
    for objs, preds in _WORLDS.values():
        if names <= set(preds):
            return T if all(_holds(y, o, preds) for o in objs if _holds(x, o, preds)) else F
    raise ValueError(f"no world has both {names}")


def _answer(p, x, y, truth=None):
    """The item's answer from a student's converse 'if x, then y' (and its truth, if asked)."""
    ask = p["ask"]
    if ask == "converse":
        return Tuple(x, y)
    if ask == "given":
        return x
    if ask == "toprove":
        return y
    if ask == "truth":
        return Tuple(x, y, _true(x, y) if truth is None else truth)
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    # The converse swaps the given part and the part to prove.
    return _answer(p, v["b"], v["a"])


def m1(v, p):
    """Reads the statement's parts the wrong way round (the 'then' part taken as given),
    then swaps them correctly: the 'converse' comes out as the statement itself."""
    return _answer(p, v["a"], v["b"])


def m2(v, p):
    """Puts 'not' into both parts and keeps their places: 'if not a, then not b'."""
    return _answer(p, _not(v["a"]), _not(v["b"]))


def m3(v, p):
    """Swaps the parts and also puts 'not' into both: 'if not b, then not a'."""
    return _answer(p, _not(v["b"]), _not(v["a"]))


def m4(v, p):
    """Swaps the parts correctly but thinks the converse is true exactly when the statement is."""
    if p["ask"] != "truth":
        raise ValueError("only the truth items ask whether the converse is true")
    return _answer(p, v["b"], v["a"], _true(v["a"], v["b"]))


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4}
