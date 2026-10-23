"""C07 Word problems: shapes, incomes and journeys: answer models (the key, and one per misconception).

Params (strings): type, the story; each type asks for one fixed quantity.
  salary:    salary s1 after n1 years, s2 after n2 years; asks the original salary x
             (x + n y = salary after n years, y the yearly increment).
  triangle:  angle A = angle B + angle C, B : C = p : q; asks angle C (in degrees).
  rectangle: perimeter P, length exceeds breadth by d; asks the breadth.
  income:    incomes a : b, expenses c : d, each saves s; asks the second person's expense.
  journey:   places D km apart; the cars meet after t1 hours going the same way, after t2
             hours going towards each other; asks the slower car's speed.
Inputs (sympy numbers): the story's numbers, named as above.
The key solves the story's equations directly (sympy linsolve). Every answer is a number.
"""
from sympy import Integer, linsolve, symbols

_x, _y = symbols("x y")


def _solve(eqs):
    sol = linsolve(eqs, _x, _y)
    if len(sol) != 1:
        raise ValueError("no unique solution")
    (sx, sy), = sol
    if sx.free_symbols or sy.free_symbols:
        raise ValueError("no unique solution")
    return sx, sy


def _facts(v, p):
    """The story's two equations, x and y as named in each type."""
    t = p["type"]
    if t == "salary":  # x original salary, y increment
        return [_x + v["n1"] * _y - v["s1"], _x + v["n2"] * _y - v["s2"]]
    if t == "triangle":  # x = angle B, y = angle C; A = x + y
        return [(_x + _y) + _x + _y - 180, v["q"] * _x - v["p"] * _y]
    if t == "rectangle":  # x length, y breadth
        return [2 * (_x + _y) - v["P"], _x - _y - v["d"]]
    if t == "income":  # x = k (incomes ak, bk), y = m (expenses cm, dm)
        return [v["a"] * _x - v["c"] * _y - v["s"], v["b"] * _x - v["d"] * _y - v["s"]]
    if t == "journey":  # x faster speed, y slower speed
        return [v["t1"] * (_x - _y) - v["D"], v["t2"] * (_x + _y) - v["D"]]
    raise ValueError("unknown type")


def _asked(v, p, sx, sy):
    t = p["type"]
    if t == "salary":
        return sx
    if t == "income":
        return v["d"] * sy
    return sy  # angle C, breadth, slower speed


def key(v, p):
    """Straight from the facts: solve the two equations, give the quantity asked."""
    return _asked(v, p, *_solve(_facts(v, p)))


def m1(v, p):
    """Writes the whole using only the parts named: angle B + angle C = 180, length + breadth = perimeter."""
    t = p["type"]
    if t == "triangle":
        return _solve([_x + _y - 180, v["q"] * _x - v["p"] * _y])[1]
    if t == "rectangle":
        return _solve([_x + _y - v["P"], _x - _y - v["d"]])[1]
    raise ValueError("no total made of parts")


def m2(v, p):
    """Uses one multiplier k for both ratios: incomes ak, bk and expenses ck, dk."""
    if p["type"] != "income":
        raise ValueError("not an income story")
    k = v["s"] / (v["b"] - v["d"])  # the second person's savings: bk - dk = s
    return v["d"] * k


def m3(v, p):
    """Divides the rise in salary by the later number of years, not by the years between."""
    if p["type"] != "salary":
        raise ValueError("not a salary story")
    inc = (v["s2"] - v["s1"]) / v["n2"]
    return v["s1"] - v["n1"] * inc


def m4(v, p):
    """Chasing: takes the faster car to cover only the starting gap, D = t1 x."""
    if p["type"] != "journey":
        raise ValueError("not a journey")
    fast = v["D"] / v["t1"]
    return v["D"] / v["t2"] - fast


def m5(v, p):
    """Solves correctly but gives the other quantity, not the one asked."""
    t = p["type"]
    sx, sy = _solve(_facts(v, p))
    if t == "salary":
        return sy
    if t == "income":
        return v["b"] * sx  # the second person's income
    return sx  # angle B, length, faster speed


def m6(v, p):
    """Putting the found value back, moves a known number across = without changing its sign."""
    t = p["type"]
    sx, sy = _solve(_facts(v, p))
    if t == "salary":  # x + n1 y = s1 gives x = s1 + n1 y
        return v["s1"] + v["n1"] * sy
    if t == "triangle":  # x + y = 90 gives y = 90 + x
        return Integer(90) + sx
    if t == "rectangle":  # x + y = P/2 gives y = P/2 + x
        return v["P"] / 2 + sx
    if t == "income":  # b k - d m = s gives d m = b k + s
        return v["b"] * sx + v["s"]
    if t == "journey":  # x + y = D/t2 gives y = D/t2 + x
        return v["D"] / v["t2"] + sx
    raise ValueError("unknown type")


MODELS = {"key": key, "C07-M1": m1, "C07-M2": m2, "C07-M3": m3, "C07-M4": m4, "C07-M5": m5, "C07-M6": m6}
