"""C10 Angles of a triangle: answer models (the key, and one per misconception).

Inputs A, B: two angles of the triangle (symbols, usually x and y); C = pi - A - B.
params["form"] names the left side L of the identity the item asks about:
  sin2     sin 2A + sin 2B - sin 2C
  sinsum   sin A + sin B + sin C
  cossum   cos A + cos B + cos C
  tanfull  tan A + tan B
  tanhalf  tan(A/2) + tan(B/2)

The key is L itself with C = pi - A - B put in: no identity is used.
Each misconception is the book's own derivation of L, run with the student's rule at the steps where
the book uses A + B + C = pi. A rule says what the student takes A + B to be in terms of C (full
angles), and (A + B)/2 in terms of C/2 (half angles); the step that turns a ratio of C back into one
of A + B uses the same belief read backwards. The derivation's other steps are exact identities, so
the student's final expression, evaluated in the real triangle, is what the derivation gives here.
"""
from sympy import Symbol, cos, pi, simplify, sin, tan

_REAL = {"x": Symbol("x", real=True), "y": Symbol("y", real=True)}
_C = Symbol("C", real=True)


def _real(e):
    """Inputs drafted with plain symbols: make x and y real, as the verifier does."""
    return e.subs({s: _REAL[s.name] for s in getattr(e, "free_symbols", set()) if s.name in _REAL})


def _angles(v):
    return _real(v["A"]), _real(v["B"])


def _lhs(form, A, B, C):
    return {
        "sin2": sin(2 * A) + sin(2 * B) - sin(2 * C),
        "sinsum": sin(A) + sin(B) + sin(C),
        "cossum": cos(A) + cos(B) + cos(C),
        "tanfull": tan(A) + tan(B),
        "tanhalf": tan(A / 2) + tan(B / 2),
    }[form]


class _Rule:
    """full(c): the student's A + B for C = c; half(h): their (A + B)/2 for C/2 = h.
    Each is c -> k - c, c -> c or c -> -c, so it is undone by the same shape of map.
    tan_add: tan(A + B) taken as tan A + tan B.  ccm: the student's cos P - cos Q."""

    def __init__(self, full=None, half=None, tan_add=False, ccm=None):
        self.full, self.half, self.tan_add = full, half, tan_add
        self.ccm = ccm or (lambda P, Q: -2 * sin((P + Q) / 2) * sin((P - Q) / 2))
        self.used_ccm = False

    def map(self, kind):
        m = self.full if kind == "full" else self.half
        if m is None:
            raise ValueError(f"this mistake is about {'half' if kind == 'full' else 'full'} angles only")
        return m

    def back(self, kind):
        """The same belief read backwards: from A + B (or its half) to the student's C (or C/2)."""
        m = self.map(kind)
        k, slope = m(0), m(1) - m(0)
        return lambda s: (s - k) / slope


def _split(g, arg):
    """g = sigma * r(arg) with r sin or cos: (sigma, r, the other one)."""
    for r, o in ((sin, cos), (cos, sin)):
        q = simplify(g / r(arg))
        if q.is_number:
            return q, r, o
    raise ValueError(f"{g} is not a ratio of {arg}")


def _cos_pair(a, b, rule):
    """a + b as the student finishes it: when it is cos P - cos Q, through their formula."""
    (s1, f1), (s2, f2) = a.as_coeff_Mul(), b.as_coeff_Mul()
    if f1.func == cos and f2.func == cos and s1 == -s2:
        rule.used_ccm = True
        return s1 * rule.ccm(f1.args[0], f2.args[0])
    return a + b


def _derive(form, A, B, rule):
    C = _C
    if form == "sin2":
        # 2 sin(A + B) cos(A - B) - 2 sin C cos C: change sin(A + B), take out the common ratio of C,
        # and change the other ratio of C back into one of A + B.
        g = sin(rule.map("full")(C))
        sg, r, o = _split(g, C)
        e = 2 * r(C) * _cos_pair(sg * cos(A - B), -o(rule.back("full")(A + B)), rule)
    elif form == "sinsum":
        # 2 sin((A+B)/2) cos((A-B)/2) + 2 sin(C/2) cos(C/2), the same moves with half angles.
        g = sin(rule.map("half")(C / 2))
        sg, r, o = _split(g, C / 2)
        e = 2 * r(C / 2) * _cos_pair(sg * cos((A - B) / 2), o(rule.back("half")((A + B) / 2)), rule)
    elif form == "cossum":
        # 2 cos((A+B)/2) cos((A-B)/2) + cos C, with cos C written in the half-angle ratio that came out
        # (1 - 2 sin^2(C/2) or 2 cos^2(C/2) - 1) so a factor can be taken out.
        g = cos(rule.map("half")(C / 2))
        sg, r, o = _split(g, C / 2)
        k = 1 if r == sin else -1
        e = k + 2 * r(C / 2) * _cos_pair(sg * cos((A - B) / 2), -k * r(rule.back("half")((A + B) / 2)), rule)
    elif form in ("tanfull", "tanhalf"):
        kind = "full" if form == "tanfull" else "half"
        a, b, c = (A, B, C) if kind == "full" else (A / 2, B / 2, C / 2)
        t = tan(rule.map(kind)(c))  # the student's tan(a + b)
        e = t if rule.tan_add else t * (1 - tan(a) * tan(b))
    else:
        raise ValueError(f"unknown form {form}")
    return e.subs(_C, pi - A - B)


def key(v, p):
    A, B = _angles(v)
    return simplify(_lhs(p["form"], A, B, pi - A - B))


def _student(rule, v, p):
    A, B = _angles(v)
    return simplify(_derive(p["form"], A, B, rule))


def m1(v, p):
    """Ignores the allied-angle change: a ratio of A + B is the same ratio of C (cos(A + B) = cos C,
    tan(A + B) = tan C), and a ratio of (A + B)/2 the same ratio of C/2."""
    return _student(_Rule(full=lambda c: c, half=lambda h: h), v, p)


def m2(v, p):
    """Halves C but not pi: (A + B)/2 = pi - C/2, so sin((A+B)/2) = sin(C/2), cos((A+B)/2) = -cos(C/2)."""
    return _student(_Rule(half=lambda h: pi - h), v, p)


def m3(v, p):
    """Gives full angles the co-function switch: sin(A + B) = cos C, cos(A + B) = sin C, tan(A + B) = cot C."""
    return _student(_Rule(full=lambda c: pi / 2 - c), v, p)


def m4(v, p):
    """tan(A + B) = tan A + tan B (with the allied-angle step right)."""
    if not p["form"].startswith("tan"):
        raise ValueError("only for a tan item")
    return _student(_Rule(full=lambda c: pi - c, half=lambda h: pi / 2 - h, tan_add=True), v, p)


def m5(v, p):
    """Drops the pi: A + B = -C, so sin(A + B) = -sin C, cos(A + B) = cos C; halves likewise."""
    return _student(_Rule(full=lambda c: -c, half=lambda h: -h), v, p)


def m6(v, p):
    """cos P - cos Q = 2 sin((P+Q)/2) sin((P-Q)/2): the minus sign of the sum-to-product formula lost."""
    rule = _Rule(full=lambda c: pi - c, half=lambda h: pi / 2 - h,
                 ccm=lambda P, Q: 2 * sin((P + Q) / 2) * sin((P - Q) / 2))
    out = _student(rule, v, p)
    if not rule.used_ccm:
        raise ValueError("the derivation has no cos P - cos Q step")
    return out


MODELS = {"key": key, "C10-M1": m1, "C10-M2": m2, "C10-M3": m3, "C10-M4": m4, "C10-M5": m5, "C10-M6": m6}
