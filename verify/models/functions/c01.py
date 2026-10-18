"""C01 What makes a relation a function: answer models (the key, and one per misconception).

Two kinds of item, chosen by params["ask"]:
  blame: a relation from A to B, given as A = ["1", ...], B = [...], R = ["1,5", ...] (each pair
    "a,b"). The answer is the set of elements that stop R being a function from A to B
    (EmptySet when R is a function). The key blames each element of A with no image or with
    more than one image.
  which: equations in x and y, eqs = ["2*x + 3*y - 12", ...] (each = 0), labelled a, b, c, ...
    The answer names the equations that give y as a function of x, as Symbol("a_c_d")
    (Symbol("none") if none do).
"""
from sympy import EmptySet, FiniteSet, Integer, Poly, Symbol, solve, symbols, sympify

_x, _y = symbols("x y")


# ---- relations from A to B ------------------------------------------------------------

def _relation(p):
    A = [int(s) for s in p["A"]]
    B = [int(s) for s in p["B"]]
    R = [tuple(int(s) for s in pair.split(",")) for pair in p["R"]]
    assert all(a in A and b in B for a, b in R), "every pair must lie in A x B"
    return A, B, R


def _images(R, a):
    return {b for x, b in R if x == a}


def _inputs(R, b):
    return {a for a, y in R if y == b}


def _set(xs):
    return FiniteSet(*[Integer(x) for x in xs]) if xs else EmptySet


def _two_images(A, R):
    return {a for a in A if len(_images(R, a)) >= 2}


def _no_image(A, R):
    return {a for a in A if not _images(R, a)}


def _shared(A, R):
    """Elements of A whose image is also the image of another element."""
    return {a for a in A for b in _images(R, a) if len(_inputs(R, b)) >= 2}


def _unused(B, R):
    return {b for b in B if not _inputs(R, b)}


def _two_inputs(B, R):
    return {b for b in B if len(_inputs(R, b)) >= 2}


# ---- equations: y as a function of x ---------------------------------------------------

def _eqs(p):
    return [sympify(e, locals={"x": _x, "y": _y}) for e in p["eqs"]]


def _one_value(e, var):
    """Each value of the other letter gives exactly one value of var: var appears, and
    solving for it gives one branch."""
    if not e.has(var):
        return False  # e.g. x = 9 alone: at x = 9 every y works
    return len(solve(e, var)) == 1


def _linear(e):
    return Poly(e, _x, _y).total_degree() <= 1


def _labels(flags):
    names = [chr(ord("a") + i) for i, ok in enumerate(flags) if ok]
    return Symbol("_".join(names) if names else "none")


# ---- the models -------------------------------------------------------------------------

def key(v, p):
    """Straight from the definition: every element of A has exactly one image (each x gives one y)."""
    if p["ask"] == "blame":
        A, B, R = _relation(p)
        return _set(_two_images(A, R) | _no_image(A, R))
    if p["ask"] == "which":
        return _labels([_one_value(e, _y) for e in _eqs(p)])
    raise ValueError("no such ask")


def m1(v, p):
    """Thinks a function must also be one-one: two elements of A may not share an image."""
    if p["ask"] == "blame":
        A, B, R = _relation(p)
        return _set(_two_images(A, R) | _no_image(A, R) | _shared(A, R))
    if p["ask"] == "which":
        return _labels([_one_value(e, _y) and _one_value(e, _x) for e in _eqs(p)])
    raise ValueError("no such ask")


def m2(v, p):
    """Thinks every element of B must be an image: an element of B with no arrow also stops R."""
    if p["ask"] != "blame":
        raise ValueError("only a relation from A to B has a co-domain to fill")
    A, B, R = _relation(p)
    return _set(_two_images(A, R) | _no_image(A, R) | _unused(B, R))


def m3(v, p):
    """Looks only at the pairs listed: an element of A with no image is not noticed."""
    if p["ask"] != "blame":
        raise ValueError("only a relation from A to B")
    A, B, R = _relation(p)
    return _set(_two_images(A, R))


def m4(v, p):
    """Thinks an element may have several images, as long as every element of A has one."""
    if p["ask"] != "blame":
        raise ValueError("only a relation from A to B")
    A, B, R = _relation(p)
    return _set(_no_image(A, R))


def m5(v, p):
    """Tests the wrong way round (a horizontal line, not a vertical one): checks that no image
    comes from two inputs, i.e. x as a function of y."""
    if p["ask"] == "blame":
        A, B, R = _relation(p)
        return _set(_two_inputs(B, R))
    if p["ask"] == "which":
        return _labels([_one_value(e, _x) for e in _eqs(p)])
    raise ValueError("no such ask")


def m6(v, p):
    """Thinks every straight line gives y as a function of x, missing vertical lines x = c."""
    if p["ask"] != "which":
        raise ValueError("only equations")
    return _labels([_linear(e) or _one_value(e, _y) for e in _eqs(p)])


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
