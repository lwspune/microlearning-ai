"""C01 Linear equations in two variables: answer models (the key, and one per misconception).

Item types (params["type"]):
  "pair": inputs a, b, c, v for ax + by = c; params["given"] is "x" or "y" (the variable given the value v).
          Answers the solution as an ordered pair Tuple(x, y).
  "k":    inputs b, c, p, q: (p, q) is a solution of kx + by = c. Answers k.
  "rect": inputs d, P: "when d is subtracted from the length x and the breadth y, the perimeter becomes P".
          Answers the equation as a locus polynomial in x, y (= 0).
  "less": inputs m, d: "x is d less than m times y". Answers a locus polynomial (= 0).
"""
from sympy import Symbol, Tuple

X = Symbol("x", real=True)
Y = Symbol("y", real=True)


def _need(p, *types):
    if p["type"] not in types:
        raise ValueError(f"does not apply to a {p['type']} item")


def _pair(v, p, sign=-1, divide=True, swap=False):
    """Solve ax + by = c for the unknown once the given variable is v.
    sign=-1 moves the known term across correctly; +1 keeps its sign (slip)."""
    a, b, c, val = v["a"], v["b"], v["c"], v["v"]
    if p["given"] == "x":
        known, coef = a * val, b
    else:
        known, coef = b * val, a
    rest = c + sign * known
    other = rest / coef if divide else rest
    x, y = (val, other) if p["given"] == "x" else (other, val)
    return Tuple(y, x) if swap else Tuple(x, y)


def _k(v, sign=-1, divide=True, swap=False):
    b, c, x0, y0 = v["b"], v["c"], v["p"], v["q"]
    if swap:
        x0, y0 = y0, x0
    rest = c + sign * b * y0
    return rest / x0 if divide else rest


def key(v, p):
    t = p["type"]
    if t == "pair":
        return _pair(v, p)
    if t == "k":
        return _k(v)
    if t == "rect":
        return 2 * ((X - v["d"]) + (Y - v["d"])) - v["P"]
    if t == "less":
        return X - (v["m"] * Y - v["d"])
    raise ValueError(t)


def m1(v, p):
    """Reads or writes an ordered pair the wrong way round: (a, b) taken as y = a, x = b."""
    _need(p, "pair", "k")
    return _pair(v, p, swap=True) if p["type"] == "pair" else _k(v, swap=True)


def m2(v, p):
    """Moves a term to the other side of = without changing its sign."""
    t = p["type"]
    if t == "pair":
        return _pair(v, p, sign=1)
    if t == "k":
        return _k(v, sign=1)
    if t == "rect":   # 2x + 2y - 4d = P written as 2x + 2y = P - 4d
        return 2 * X + 2 * Y - (v["P"] - 4 * v["d"])
    if t == "less":   # x = my - d: moving my keeps its sign, x + my = -d
        return X + v["m"] * Y + v["d"]
    raise ValueError(t)


def m3(v, p):
    """Stops at (coefficient) x unknown = number and gives that number, without dividing."""
    _need(p, "pair", "k")
    return _pair(v, p, divide=False) if p["type"] == "pair" else _k(v, divide=False)


def m4(v, p):
    """Writes 'd less than A' (or 'd subtracted from A') as d - A instead of A - d."""
    t = p["type"]
    if t == "rect":
        return 2 * ((v["d"] - X) + (v["d"] - Y)) - v["P"]
    if t == "less":
        return X - (v["d"] - v["m"] * Y)
    raise ValueError(f"no 'less than' in a {t} item")


def m5(v, p):
    """Takes the perimeter of a rectangle as length + breadth."""
    _need(p, "rect")
    return (X - v["d"]) + (Y - v["d"]) - v["P"]


def m6(v, p):
    """Puts the multiplier on the wrong side: 'x is m times y' written as mx = y."""
    _need(p, "less")
    return v["m"] * X - (Y - v["d"])


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5, "C01-M6": m6}
