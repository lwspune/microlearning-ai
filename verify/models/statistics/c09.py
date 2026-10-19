"""C09 Geometric and harmonic means: answer models (the key, and one per misconception).

p["ask"] picks the question type:
  hm     the values v["xs"] (a tuple) -> their H.M.
  price  prices v["xs"] per unit, the same money spent at each -> the average price
  speed  speeds v["vs"] over distances v["ds"], or for times v["ts"] -> the average speed
  gm     the values v["xs"] -> their G.M.; p["base"] names the base when they are powers of one
  hm2    two positive numbers with A.M. v["A"] and G.M. v["G"] -> their H.M.
"""
from sympy import Integer, Mul, Rational, Symbol, solve


def _ask(p):
    return p["ask"]


def _xs(v):
    return list(v["xs"])


def _legs(v):
    """Each leg's (distance, speed); a leg given by its time t at speed s has distance t * s."""
    vs = list(v["vs"])
    if "ds" in v:
        return list(zip(v["ds"], vs))
    return [(t * s, s) for t, s in zip(v["ts"], vs)]


def _pair(v):
    """The two numbers with sum 2A and product G^2."""
    t = Symbol("t")
    return solve(t**2 - 2 * v["A"] * t + v["G"] ** 2, t)


def key(v, p):
    a = _ask(p)
    if a in ("hm", "price"):
        # Price: spend M at each price; total money n M over total quantity sum(M / p_i).
        xs = _xs(v)
        return len(xs) / sum(Rational(1) / x for x in xs)
    if a == "speed":
        legs = _legs(v)
        return sum(d for d, _ in legs) / sum(d / s for d, s in legs)
    if a == "gm":
        xs = _xs(v)
        return Mul(*xs) ** Rational(1, len(xs))
    if a == "hm2":
        x, y = _pair(v)
        return 2 * x * y / (x + y)
    raise ValueError(a)


def m1(v, p):
    """Takes the A.M. where another mean is needed (of the speeds, the prices, the values; G = (A + H)/2)."""
    a = _ask(p)
    if a in ("hm", "price", "gm"):
        xs = _xs(v)
        return sum(xs) / Integer(len(xs))
    if a == "speed":
        vs = list(v["vs"])
        return sum(vs) / Integer(len(vs))
    if a == "hm2":
        return 2 * v["G"] - v["A"]
    raise ValueError(a)


def m2(v, p):
    """Drops the n in the H.M.: 1 / sum(1 / x_i), i.e. ab / (a + b) for two numbers."""
    a = _ask(p)
    if a in ("hm", "price"):
        return 1 / sum(Rational(1) / x for x in _xs(v))
    if a == "speed":
        return 1 / sum(Rational(1) / s for s in v["vs"])
    if a == "hm2":
        x, y = _pair(v)
        return x * y / (x + y)
    raise ValueError("no H.M. formula here")


def m3(v, p):
    """Stops at the transformed average: the A.M. of the reciprocals (H.M.) or of the exponents (G.M.)."""
    a = _ask(p)
    if a in ("hm", "price"):
        xs = _xs(v)
        return sum(Rational(1) / x for x in xs) / len(xs)
    if a == "speed":
        vs = list(v["vs"])
        return sum(Rational(1) / s for s in vs) / len(vs)
    if a == "gm":
        b = Integer(p["base"])
        ks = []
        for x in _xs(v):
            k = 0
            while x > 1 and x % b == 0:
                x, k = x / b, k + 1
            if x != 1:
                raise ValueError("not a power of the base")
            ks.append(k)
        return Rational(sum(ks), len(ks))
    raise ValueError(a)


def m4(v, p):
    """Uses the plain H.M. of the speeds whatever the distances (it is right only for equal distances)."""
    if _ask(p) != "speed":
        raise ValueError("only for average speed")
    vs = list(v["vs"])
    return len(vs) / sum(Rational(1) / s for s in vs)


def m5(v, p):
    """Weights each speed by its distance: sum(d_i v_i) / sum(d_i), not by its time."""
    if _ask(p) != "speed":
        raise ValueError("only for average speed")
    legs = _legs(v)
    return sum(d * s for d, s in legs) / sum(d for d, _ in legs)


def m6(v, p):
    """Leaves out the root: the product x_1 x_2 ... x_n as the G.M., or G = A H for two numbers."""
    a = _ask(p)
    if a == "gm":
        return Mul(*_xs(v))
    if a == "hm2":
        return v["G"] / v["A"]
    raise ValueError(a)


MODELS = {"key": key, "C09-M1": m1, "C09-M2": m2, "C09-M3": m3, "C09-M4": m4, "C09-M5": m5, "C09-M6": m6}
