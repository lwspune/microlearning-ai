"""C11 Proving triangle identities: answer models (the key, and one per misconception).

Items are "L equals" questions: params {"form": name}, no inputs. Every value is written in the
sides a, b, c and the circumradius R (plain symbols), so options compare as rational functions.

Each form is the student's route through L, written against an environment of rules:
  S(X)          sin X as a side:      key a/(2R)                    (M4: a itself)
  Co(X)         cos X as sides:       key (b^2 + c^2 - a^2)/(2bc)   (M2: no 2; M3: signs reversed)
  K             the factor 2R in a = 2R sin A                       (M4: 1)
  sum_sin(X,Y)  sin(X + Y) by the angle sum: key sin(pi - Z) = sin Z (M1: sin(-Z) = -sin Z)
  proj(X, Y)    x cos Y - y cos X:    key from Co                   (M6: the third side z)
  diff_sin(X,Y) sin(X - Y) = proj(X, Y)/K                           (M5: sin X - sin Y)
A model whose rule the route never uses raises ValueError (it would only repeat the key).

The key takes the route with the right rules, then is checked numerically against L evaluated
with real angles (from acos of the cosine rule) in two concrete triangles, so a wrong route
can't pass as the key.
"""
from sympy import Symbol, acos, pi, sin, cos, tan, N, Rational

a, b, c, R = Symbol("a"), Symbol("b"), Symbol("c"), Symbol("R")
SIDE = {"A": a, "B": b, "C": c}


def _third(X, Y):
    (Z,) = [n for n in "ABC" if n not in (X, Y)]
    return Z


class Env:
    def __init__(self, rule=None):
        self.rule = rule
        self.used = set()

    @property
    def K(self):
        if self.rule == "M4":
            self.used.add("M4")
            return 1
        return 2 * R

    def S(self, X):
        if self.rule == "M4":
            self.used.add("M4")
            return SIDE[X]
        return SIDE[X] / (2 * R)

    def Co(self, X):
        x = SIDE[X]
        y, z = [SIDE[n] for n in "ABC" if n != X]
        if self.rule == "M2":
            self.used.add("M2")
            return (y**2 + z**2 - x**2) / (y * z)
        if self.rule == "M3":
            self.used.add("M3")
            return (x**2 - y**2 - z**2) / (2 * y * z)
        return (y**2 + z**2 - x**2) / (2 * y * z)

    def tan(self, X):
        return self.S(X) / self.Co(X)

    def sum_sin(self, X, Y):
        Z = _third(X, Y)
        if self.rule == "M1":
            self.used.add("M1")
            return -self.S(Z)
        return self.S(Z)

    def proj(self, X, Y):
        if self.rule == "M6":
            self.used.add("M6")
            return SIDE[_third(X, Y)]
        return SIDE[X] * self.Co(Y) - SIDE[Y] * self.Co(X)

    def diff_sin(self, X, Y):
        if self.rule == "M5":
            self.used.add("M5")
            return self.S(X) - self.S(Y)
        return self.proj(X, Y) / self.K


# form: (route through L, L written straight in angles A, B, C and sides a, b, c, R)
FORMS = {
    # Misc I Q.9: ac cos B - bc cos A = c(a cos B - b cos A)
    "accosB": (lambda e: c * e.proj("A", "B"), lambda A, B, C, a, b, c, R: a * c * cos(B) - b * c * cos(A)),
    # Misc II Q.6: sin(A - B)/sin(A + B)
    "sinAmB_over_sinApB": (
        lambda e: e.diff_sin("A", "B") / e.sum_sin("A", "B"),
        lambda A, B, C, a, b, c, R: sin(A - B) / sin(A + B),
    ),
    # Misc II Q.11(iii): a^2 sin(B - C)
    "a2sinBmC": (lambda e: a**2 * e.diff_sin("B", "C"), lambda A, B, C, a, b, c, R: a**2 * sin(B - C)),
    # Misc II Q.17: (b^2 + c^2 - a^2) tan A
    "tanA": (lambda e: (b**2 + c**2 - a**2) * e.tan("A"), lambda A, B, C, a, b, c, R: (b**2 + c**2 - a**2) * tan(A)),
    # Misc II Q.11(i): c sin(A - B), with c = 2R sin C = 2R sin(A + B)
    "csinAmB": (
        lambda e: e.K * e.sum_sin("A", "B") * e.diff_sin("A", "B"),
        lambda A, B, C, a, b, c, R: c * sin(A - B),
    ),
}

TRIANGLES = [(4, 5, 6), (5, 7, 9)]


def _check(form, value):
    """L in real angles must equal the side-form value in two concrete triangles."""
    for sa, sb, sc in TRIANGLES:
        A = acos(Rational(sb**2 + sc**2 - sa**2, 2 * sb * sc))
        B = acos(Rational(sa**2 + sc**2 - sb**2, 2 * sa * sc))
        C = pi - A - B
        r = sa / (2 * sin(A))
        true = N(FORMS[form][1](A, B, C, sa, sb, sc, r), 30)
        got = N(value.subs({a: sa, b: sb, c: sc, R: r}), 30)
        if abs(true - got) > 1e-20:
            raise ValueError(f"{form}: route gives {value}, not L")


def key(v, p):
    value = (FORMS[p["form"]][0](Env())).simplify()
    _check(p["form"], value)
    return value


def _model(rule):
    def m(v, p):
        e = Env(rule)
        value = FORMS[p["form"]][0](e).simplify()
        if rule not in e.used:
            raise ValueError(f"{rule} has no step in form {p['form']}")
        if (value - key(v, p)).simplify() == 0:
            raise ValueError(f"{rule} gives the key on form {p['form']}")
        return value

    m.__doc__ = rule
    return m


m1 = _model("M1")  # A + B = -C (drops the pi): sin(A + B) = -sin C
m2 = _model("M2")  # cos A = (b^2 + c^2 - a^2)/(bc): drops the 2
m3 = _model("M3")  # cos A = (a^2 - b^2 - c^2)/(2bc): transposes with the signs reversed
m4 = _model("M4")  # sin A = a: drops the 2R of the sine rule
m5 = _model("M5")  # sin(X - Y) = sin X - sin Y
m6 = _model("M6")  # reads x cos Y - y cos X as the projection rule: the third side

MODELS = {"key": key, "C11-M1": m1, "C11-M2": m2, "C11-M3": m3, "C11-M4": m4, "C11-M5": m5, "C11-M6": m6}
