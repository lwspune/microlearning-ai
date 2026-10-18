"""C02 Chain rule with exponentials and logarithms: answer models (the key, and one per misconception).

params["form"] says what y is:
  exp      y = e^u                     inputs: u
  pow      y = a^u                     inputs: a, u
  loga     y = log_a(u)                inputs: a, u
  logprod  y = log(top / bot)          inputs: top, bot (products of powers; bot may be 1)
Optional input `at`: the item asks for dy/dx at x = at.
The key is sympy's derivative of y as one expression, never the rules being taught.
"""
from sympy import E, Mul, diff, exp, log, nan, oo, simplify, zoo


def _x(*exprs):
    """The symbol called x (the verifier parses x as real, draft_items as plain)."""
    for e in exprs:
        for s in e.free_symbols:
            if s.name == "x":
                return s
    raise ValueError("no x in the inputs")


def _at(d, x, v):
    """dy/dx as an expression, or its value at x = at when the item gives a point."""
    if "at" in v:
        d = d.subs(x, v["at"])
        if d.has(oo, -oo, zoo, nan):
            raise ValueError(f"undefined at {v['at']}")
    return simplify(d)


def _y(v, p):
    f = p["form"]
    if f == "exp":
        return exp(v["u"])
    if f == "pow":
        return v["a"] ** v["u"]
    if f == "loga":
        return log(v["u"]) / log(v["a"])
    if f == "logprod":
        return log(v["top"]) - log(v["bot"])
    raise ValueError(f"unknown form {f}")


def _factors(e, x):
    """A product as (base, exponent) pairs; e^g comes out as (E, g)."""
    out = []
    for f in Mul.make_args(e):
        if not f.has(x):
            continue
        if f.func == exp:
            out.append((E, f.args[0]))
        else:
            out.append(f.as_base_exp())
    return out


def _logterm(b, n, x, rule):
    """d/dx of n log b, with the inner factor b' handled by `rule`."""
    d = diff(n, x) * log(b)
    if b.has(x):
        db = diff(b, x)
        d += n * {"right": db / b, "forget": 1 / b, "divide": 1 / (b * db)}[rule]
    return d


def _logprod(v, x, rule, add_bot=False, base_e=False):
    total = 0
    for side, sign in (("top", 1), ("bot", -1)):
        for b, n in _factors(v[side], x):
            if base_e and not b.has(x) and b != E:
                total += sign * diff(n, x)  # log a^g taken as g
                continue
            s = 1 if (add_bot and side == "bot") else sign
            total += s * _logterm(b, n, x, rule)
    return total


def _inner(v):
    u = v["u"]
    x = _x(u)
    return u, diff(u, x), x


def key(v, p):
    x = _x(*v.values())
    return _at(diff(_y(v, p), x), x, v)


def m1(v, p):
    """Forgets the inner derivative u': e^u, a^u log a, 1/u (and 1/(u log a) for log_a u)."""
    f = p["form"]
    if f == "logprod":
        x = _x(v["top"], v["bot"])
        return _at(_logprod(v, x, "forget"), x, v)
    u, du, x = _inner(v)
    if f == "exp":
        return _at(exp(u), x, v)
    if f == "pow":
        return _at(v["a"] ** u * log(v["a"]), x, v)
    return _at(1 / (u * log(v["a"])), x, v)


def m2(v, p):
    """Uses the power rule on a variable exponent: d/dx a^u = u a^(u - 1) u'."""
    f = p["form"]
    if f not in ("exp", "pow"):
        raise ValueError("needs an exponential")
    u, du, x = _inner(v)
    a = E if f == "exp" else v["a"]
    return _at(u * a ** (u - 1) * du, x, v)


def m3(v, p):
    """Puts log a on the wrong side: a^u u'/log a, and u' log a / u for log_a u."""
    f = p["form"]
    if f not in ("pow", "loga") or v["a"] == E:
        raise ValueError("needs a base a other than e")
    u, du, x = _inner(v)
    if f == "pow":
        return _at(v["a"] ** u * du / log(v["a"]), x, v)
    return _at(du * log(v["a"]) / u, x, v)


def m4(v, p):
    """Treats base a like e, dropping log a: a^u u', u'/u for log_a u, log a^g = g."""
    f = p["form"]
    if f == "logprod":
        x = _x(v["top"], v["bot"])
        if not any(not b.has(x) and b != E for s in ("top", "bot") for b, _ in _factors(v[s], x)):
            raise ValueError("no a^g factor")
        return _at(_logprod(v, x, "right", base_e=True), x, v)
    if f not in ("pow", "loga") or v["a"] == E:
        raise ValueError("needs a base a other than e")
    u, du, x = _inner(v)
    if f == "pow":
        return _at(v["a"] ** u * du, x, v)
    return _at(du / u, x, v)


def m5(v, p):
    """Adds the log of the denominator: log(A/B) taken as log A + log B."""
    if p["form"] != "logprod" or v["bot"] == 1:
        raise ValueError("needs a log of a quotient")
    x = _x(v["top"], v["bot"])
    return _at(_logprod(v, x, "right", add_bot=True), x, v)


def m6(v, p):
    """Divides by the inner derivative instead of multiplying: e^u/u', a^u log a/u', 1/(u u')."""
    f = p["form"]
    if f == "logprod":
        x = _x(v["top"], v["bot"])
        return _at(_logprod(v, x, "divide"), x, v)
    u, du, x = _inner(v)
    if f == "exp":
        return _at(exp(u) / du, x, v)
    if f == "pow":
        return _at(v["a"] ** u * log(v["a"]) / du, x, v)
    return _at(1 / (u * du * log(v["a"])), x, v)


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
