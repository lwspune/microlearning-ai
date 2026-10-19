"""C12 Lines of regression: answer models (the key, and one per misconception).

p["ask"] picks the question type; p["of"] is "yx" (y on x) or "xy" (x on y):
  coef     the regression coefficient b_of, from v["sx"], v["sy"], v["r"]
           or from v["cov"], v["vx"], v["vy"] (the covariance and the two variances)
  line     the regression line of p["of"] from v["mx"], v["my"], v["sx"], v["sy"], v["r"],
           as a polynomial in x, y (the line is where it is 0)
  fit      the line of y on x fitted to the points v["xs"], v["ys"] (tuples), as a polynomial
  predict  from the points v["xs"], v["ys"]: the estimate of y at x = v["at"] (of = "yx")
           or of x at y = v["at"] (of = "xy")
Variances divide by n.
"""
from sympy import S, Symbol, diff, solve, sqrt, symbols

X = Symbol("x", real=True)
Y = Symbol("y", real=True)


def _ask(p):
    return p["ask"]


def _of(p):
    return p.get("of", "yx")


def _data(v):
    return [S(a) for a in v["xs"]], [S(b) for b in v["ys"]]


def _stats(v, p):
    """(mean x, mean y, var x, var y, cov) from whichever inputs the item gives."""
    if _ask(p) in ("fit", "predict"):
        xs, ys = _data(v)
        n = len(xs)
        mx, my = sum(xs) / n, sum(ys) / n
        vx = sum((a - mx) ** 2 for a in xs) / n
        vy = sum((b - my) ** 2 for b in ys) / n
        cov = sum((a - mx) * (b - my) for a, b in zip(xs, ys)) / n
        return mx, my, vx, vy, cov
    mx, my = S(v.get("mx", 0)), S(v.get("my", 0))
    if "cov" in v:
        return mx, my, S(v["vx"]), S(v["vy"]), S(v["cov"])
    sx, sy, r = S(v["sx"]), S(v["sy"]), S(v["r"])
    return mx, my, sx**2, sy**2, r * sx * sy


def _least_squares(xs, ys):
    """Slope and intercept of y = a + b x minimising the sum of squared vertical misses."""
    a, b = symbols("a b")
    sse = sum((yy - a - b * xx) ** 2 for xx, yy in zip(xs, ys))
    sol = solve([diff(sse, a), diff(sse, b)], [a, b], dict=True)[0]
    return sol[a], sol[b]


def _line(of, b, mx, my, x_int=None):
    """The line of `of` with coefficient b through (mx, my), as a polynomial (= 0)."""
    if of == "yx":
        return Y - my - b * (X - mx)
    return X - mx - b * (Y - my)


def _estimate(line, of, at):
    """Read the asked variable off a line: y at x = at (of yx) or x at y = at (of xy)."""
    if of == "yx":
        return solve(line.subs(X, at), Y)[0]
    return solve(line.subs(Y, at), X)[0]


def _coefs(v, p):
    mx, my, vx, vy, cov = _stats(v, p)
    return cov / vx, cov / vy  # b_yx, b_xy


def key(v, p):
    a, of = _ask(p), _of(p)
    if a in ("fit", "predict"):
        xs, ys = _data(v)
        if of == "yx":
            c, b = _least_squares(xs, ys)  # y = c + b x
            line = Y - c - b * X
        else:
            c, b = _least_squares(ys, xs)  # x = c + b y
            line = X - c - b * Y
        return line if a == "fit" else _estimate(line, of, S(v["at"]))
    mx, my, vx, vy, cov = _stats(v, p)
    # From the definition: the slope is cov / (variance of the given variable), and the line
    # goes through the mean point.
    b = cov / vx if of == "yx" else cov / vy
    if a == "coef":
        return b
    if a == "line":
        return _line(of, b, mx, my)
    raise ValueError(a)


def _answer(v, p, of_line, b, intercept_mean=False):
    """Builds the answer of the asked type from a line of `of_line` with coefficient b."""
    a, of = _ask(p), _of(p)
    mx, my, vx, vy, cov = _stats(v, p)
    if intercept_mean:
        line = Y - my - b * X if of_line == "yx" else X - mx - b * Y
    else:
        line = _line(of_line, b, mx, my)
    if a in ("line", "fit"):
        return line
    if a == "predict":
        return _estimate(line, of, S(v["at"]))
    raise ValueError(a)


def m1(v, p):
    """Uses the other coefficient: b_xy in the line of y on x (sigma_x over sigma_y, or cov / var y)."""
    byx, bxy = _coefs(v, p)
    b = bxy if _of(p) == "yx" else byx
    if _ask(p) == "coef":
        return b
    return _answer(v, p, _of(p), b)


def m2(v, p):
    """Uses the other line: gives (or predicts from) the line of x on y when y on x is asked."""
    if _ask(p) == "coef":
        raise ValueError("needs a line")
    byx, bxy = _coefs(v, p)
    other = "xy" if _of(p) == "yx" else "yx"
    return _answer(v, p, other, bxy if other == "xy" else byx)


def m3(v, p):
    """Drops r: takes the coefficient as the ratio of the S.D.s, sigma_y / sigma_x."""
    mx, my, vx, vy, cov = _stats(v, p)
    b = sqrt(vy / vx) if _of(p) == "yx" else sqrt(vx / vy)
    if _ask(p) == "coef":
        return b
    return _answer(v, p, _of(p), b)


def m4(v, p):
    """Forgets the line goes through the mean point: y = y-bar + b_yx x (no x - x-bar)."""
    if _ask(p) == "coef":
        raise ValueError("needs a line")
    byx, bxy = _coefs(v, p)
    return _answer(v, p, _of(p), byx if _of(p) == "yx" else bxy, intercept_mean=True)


def m5(v, p):
    """Fits with uncentred sums: slope sum(xy) / sum(x^2), then the line through the means."""
    if _ask(p) not in ("fit", "predict"):
        raise ValueError("only for raw data")
    xs, ys = _data(v)
    sxy = sum(a * b for a, b in zip(xs, ys))
    b = sxy / sum(a**2 for a in xs) if _of(p) == "yx" else sxy / sum(b**2 for b in ys)
    return _answer(v, p, _of(p), b)


def m6(v, p):
    """Takes the regression coefficient to be r itself."""
    mx, my, vx, vy, cov = _stats(v, p)
    r = cov / sqrt(vx * vy)
    if _ask(p) == "coef":
        return r
    return _answer(v, p, _of(p), r)


MODELS = {"key": key, "C12-M1": m1, "C12-M2": m2, "C12-M3": m3, "C12-M4": m4, "C12-M5": m5, "C12-M6": m6}
