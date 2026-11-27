"""C11 Coefficient sums by calculus. Keys summed straight from the definition with sympy.
params["q"]:
  "r": sum r C(n, r); inputs n. "frac": sum C(n, r)/(r + 1); inputs n. "sq": sum C(n, r)^2; inputs n.
  "r2": sum r^2 C(n, r); inputs n. "alt": sum (-1)^r r C(n, r); inputs n.
M1 forgets to differentiate; M2 keeps 2^n; M3 uses n - 1; M4 forgets the -1; M5 integrates only 2^n; M6 integrates
the wrong power; M7 squares 2^n; M8 forgets the squares; M9 squares the middle one; M10 uses n^2; M11 stops at the
first derivative; M12 differentiates twice without the first; M13 forgets the sign; M14 gives -n; M15 gives n."""
from sympy import Rational, Sum, Symbol, binomial

from ._mix import mixed_models

r = Symbol("r", integer=True, nonnegative=True)


def _s(expr, n):
    return Sum(expr, (r, 0, n)).doit()


TABLE = {
    "r": {"key": lambda v: _s(r * binomial(v["n"], r), v["n"]), "C11-M1": lambda v: 2 ** v["n"], "C11-M2": lambda v: v["n"] * 2 ** v["n"],
          "C11-M3": lambda v: (v["n"] - 1) * 2 ** (v["n"] - 1)},
    "frac": {"key": lambda v: _s(binomial(v["n"], r) / (r + 1), v["n"]), "C11-M4": lambda v: Rational(2 ** (v["n"] + 1), v["n"] + 1),
             "C11-M5": lambda v: Rational(2 ** v["n"], v["n"] + 1), "C11-M6": lambda v: Rational(2 ** v["n"] - 1, v["n"])},
    "sq": {"key": lambda v: _s(binomial(v["n"], r) ** 2, v["n"]), "C11-M7": lambda v: 4 ** v["n"], "C11-M8": lambda v: 2 ** v["n"],
           "C11-M9": lambda v: binomial(v["n"], v["n"] // 2) ** 2},
    "r2": {"key": lambda v: _s(r ** 2 * binomial(v["n"], r), v["n"]), "C11-M10": lambda v: v["n"] ** 2 * 2 ** (v["n"] - 1),
           "C11-M11": lambda v: v["n"] * 2 ** (v["n"] - 1), "C11-M12": lambda v: v["n"] * (v["n"] - 1) * 2 ** (v["n"] - 2)},
    "alt": {"key": lambda v: _s((-1) ** r * r * binomial(v["n"], r), v["n"]), "C11-M13": lambda v: v["n"] * 2 ** (v["n"] - 1),
            "C11-M14": lambda v: -v["n"], "C11-M15": lambda v: v["n"]},
}
MODELS = mixed_models("C11", TABLE, 15)
