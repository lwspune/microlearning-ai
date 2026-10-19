"""C04 Shifting, scaling and correcting the mean: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  mean     every observation goes through p["steps"] (e.g. "-5,/20": subtract 5, then divide by 20);
           the old mean is v["m"] -> the new mean
  sum      n = v["n"] observations with mean v["m"] go through p["steps"] -> the sum of the results
  inv      x_i is made from y_i by p["steps"] (e.g. "*c,+a" for x_i = a + c y_i); the mean of the
           x_i is v["xbar"] -> the mean of the y_i
  fix      n = v["n"] observations with mean v["m"]; the value v["wrong"] is in the data (misread,
           or to be replaced) and v["right"] takes its place -> the new mean (symbols allowed)
  drop     n = v["n"] observations with mean v["m"]; k = v["k"] are removed and the rest have mean
           v["m2"] -> the mean of the removed observations
Steps are "+a", "-a", "*b" or "/b", applied left to right; a and b may be symbols.
"""
from sympy import Symbol, simplify, solve, symbols, sympify


def _ask(p):
    return p.get("ask", "mean")


def _steps(p):
    out = []
    for s in p["steps"].split(","):
        s = s.strip()
        out.append((s[0], sympify(s[1:])))
    return out


def _apply(x, steps):
    for op, c in steps:
        if op == "+":
            x = x + c
        elif op == "-":
            x = x - c
        elif op == "*":
            x = x * c
        elif op == "/":
            x = x / c
        else:
            raise ValueError(op)
    return x


def _sample(n, mean, name="t"):
    """n symbolic observations whose mean is `mean`: the last one makes the total n * mean."""
    free = list(symbols(f"{name}1:{n}"))
    return free + [n * mean - sum(free)]


def _mean(xs):
    return sum(xs) / len(xs)


def _transformed(v, p, steps):
    """The answer for mean / sum / inv, by pushing each observation of a sample through `steps`."""
    a = _ask(p)
    if a == "mean":
        xs = _sample(5, v["m"])
        return simplify(_mean([_apply(x, steps) for x in xs]))
    if a == "sum":
        n = int(v["n"])
        xs = _sample(n, v["m"])
        return simplify(sum(_apply(x, steps) for x in xs))
    if a == "inv":
        ybar = Symbol("ybar_")
        ys = _sample(5, ybar, "s")
        xs = [_apply(y, steps) for y in ys]
        (sol,) = solve(_mean(xs) - v["xbar"], ybar)
        return simplify(sol)
    raise ValueError(a)


def key(v, p):
    a = _ask(p)
    if a in ("mean", "sum", "inv"):
        return _transformed(v, p, _steps(p))
    if a == "fix":
        n = v["n"]
        return simplify((n * v["m"] - v["wrong"] + v["right"]) / n)
    if a == "drop":
        n, k = v["n"], v["k"]
        return (n * v["m"] - (n - k) * v["m2"]) / k
    raise ValueError(a)


def m1(v, p):
    """Ignores the shift: thinks adding or subtracting a constant leaves the mean alone (keeps * and /)."""
    if _ask(p) not in ("mean", "sum", "inv"):
        raise ValueError("only for a shift and scale")
    steps = [(op, c) for op, c in _steps(p) if op in "*/"]
    if len(steps) == len(_steps(p)):
        raise ValueError("no shift to ignore")
    return _transformed(v, p, steps)


def m2(v, p):
    """Does the steps to the mean in the wrong order (divides before subtracting; undoes in the same order)."""
    a = _ask(p)
    steps = _steps(p)
    if len(steps) < 2:
        raise ValueError("needs two steps")
    if a in ("mean", "sum"):
        return _transformed(v, p, steps[::-1])
    if a == "inv":
        inverse = {"+": "-", "-": "+", "*": "/", "/": "*"}
        # Undoes each step, but in the original order instead of the reverse.
        return simplify(_apply(v["xbar"], [(inverse[op], c) for op, c in steps]))
    raise ValueError("only for a shift and scale")


def m3(v, p):
    """Treats a misread or replaced value as removed: takes it out, leaves the right one out, divides by n - 1."""
    if _ask(p) != "fix":
        raise ValueError("only for a correction")
    n = v["n"]
    return simplify((n * v["m"] - v["wrong"]) / (n - 1))


def m4(v, p):
    """Mixes up the total n*xbar and the mean: the whole change goes on the mean, or a total is given as a mean."""
    a = _ask(p)
    if a == "sum":
        return key(v, p) / v["n"]  # gives the mean of the new values, not their sum
    if a == "fix":
        return simplify(v["m"] - v["wrong"] + v["right"])  # the change in the total put straight on the mean
    if a == "drop":
        return v["n"] * v["m"] - (v["n"] - v["k"]) * v["m2"]  # the removed values' total, not their mean
    raise ValueError(a)


def m5(v, p):
    """Keeps the old count n after removing values: the rest's total taken as n * m2."""
    if _ask(p) != "drop":
        raise ValueError("only when values are removed")
    n, k = v["n"], v["k"]
    return (n * v["m"] - n * v["m2"]) / k


def m6(v, p):
    """Takes a difference the wrong way round: the shift or correction goes the other way."""
    a = _ask(p)
    if a in ("mean", "sum", "inv"):
        flip = {"+": "-", "-": "+", "*": "*", "/": "/"}
        steps = [(flip[op], c) for op, c in _steps(p)]
        if steps == _steps(p):
            raise ValueError("no shift to flip")
        return _transformed(v, p, steps)
    if a == "fix":
        n = v["n"]
        return simplify((n * v["m"] + v["wrong"] - v["right"]) / n)
    if a == "drop":
        n, k = v["n"], v["k"]
        return ((n - k) * v["m2"] - n * v["m"]) / k
    raise ValueError(a)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5, "C04-M6": m6}
