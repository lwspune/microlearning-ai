"""Figure builders for Linear Programming content (xy-plane figures as Python dicts).

Constraints are written as in the models: "3*x + 2*y <= 12". A figure's
feasible region is the overlap of one halfPlane per constraint (plus x, y >= 0),
and FigureView keeps the side on the LEFT of each halfPlane's direction, so
the direction is derived from the inequality here and never typed by hand.
"""
from fractions import Fraction

from sympy import Rational

from models.linear_programming import NONNEG, con, x, y


def _num(v):
    """A plain int or float for the figure literal."""
    v = Rational(v)
    return int(v) if v.q == 1 else float(v)


def coeffs(s):
    f, op, c = con(s)
    return f.coeff(x), f.coeff(y), op, c


def point_on(s):
    a, b, _, c = coeffs(s)
    return [_num(0), _num(c / b)] if b != 0 else [_num(c / a), _num(0)]


def half_plane(s):
    """The halfPlane shape for one constraint: walking p1 -> p2 keeps the region on the left."""
    a, b, op, c = coeffs(s)
    d = (-b, a) if op == "<=" else (b, -a)  # left normal of (-b, a) is (-a, -b): the side where f decreases
    p1 = point_on(s)
    p2 = [_num(p1[0] + d[0]), _num(p1[1] + d[1])]
    return {"kind": "halfPlane", "through": [p1, p2]}


def region(cons, nonneg=True, **extra):
    shapes = [half_plane(s) for s in list(cons) + (NONNEG if nonneg else [])]
    return {"kind": "region", "within": shapes, **extra}


def line(s, **extra):
    """The whole boundary line of a constraint (or of an equation 'a*x + b*y = c')."""
    if "<" not in s and ">" not in s:
        s = s.replace("=", "<=")
    a, b, _, c = coeffs(s)
    p1 = point_on(s)
    p2 = [_num(p1[0] - b), _num(p1[1] + a)]
    return {"kind": "line", "through": [p1, p2], **extra}


def point(pt, **extra):
    return {"kind": "point", "at": [_num(pt[0]), _num(pt[1])], **extra}


def label(at, text, **extra):
    return {"kind": "label", "at": [_num(at[0]), _num(at[1])], "label": text, **extra}


def figure(alt, xmax, ymax, elements, margin=None):
    """An xy figure showing [−margin, xmax] × [−margin, ymax], so both axes are drawn."""
    m = margin if margin is not None else max(xmax, ymax) / 10
    return {"alt": alt, "axes": "xy", "view": {"x": [-m, xmax], "y": [-m, ymax]}, "elements": elements}


def plain(s):
    """A constraint as a plain-text label: '3x + 2y ≤ 12'."""
    out = s.replace("*", "").replace("<=", "≤").replace(">=", "≥").replace("-", "−")
    return out


__all__ = ["Fraction", "figure", "half_plane", "label", "line", "plain", "point", "region"]
