"""C16 Divisors and factorials. N = p^a q^b r^c has (a+1)(b+1)(c+1) divisors and sum of divisors the product of
(1 + p + ... + p^a); the power of a prime p in n! is [n/p] + [n/p^2] + ...; trailing zeros of n! are the power of 5.
params["q"]:
  "count": inputs N. "even": inputs N (even divisors). "legendre": inputs n, p. "zeros": inputs n. "sum": inputs N.
M1 multiplies the exponents; M2 adds one to their sum; M3 drops 1 and N; M4 counts every divisor; M5 counts the odd ones;
M6 drops two choices of 2; M7 takes the first term only; M8 stops at p^2; M9 multiplies the terms; M10 counts multiples
of 5 only; M11 counts the 2s; M12 counts multiples of 10; M13 counts instead of summing; M14 adds the factors;
M15 leaves out N itself."""
from sympy import divisor_count, divisor_sigma, factorint, floor

from ._mix import mixed_models


def _exps(N):
    return list(factorint(N).values())


def _prod(xs):
    out = 1
    for x in xs:
        out *= x
    return out


def _leg(n, p, stop=None):
    total, q, k = 0, p, 1
    while q <= n and (stop is None or k <= stop):
        total += floor(n / q)
        q, k = q * p, k + 1
    return total


def _terms(n, p):
    out, q = [], p
    while q <= n:
        out.append(floor(n / q))
        q *= p
    return out


TABLE = {
    "count": {"key": lambda v: divisor_count(v["N"]), "C16-M1": lambda v: _prod(_exps(v["N"])),
              "C16-M2": lambda v: sum(_exps(v["N"])) + 1, "C16-M3": lambda v: divisor_count(v["N"]) - 2},
    "even": {"key": lambda v: divisor_count(v["N"]) - divisor_count(v["N"] // 2 ** factorint(v["N"])[2]),
             "C16-M4": lambda v: divisor_count(v["N"]), "C16-M5": lambda v: divisor_count(v["N"] // 2 ** factorint(v["N"])[2]),
             "C16-M6": lambda v: (factorint(v["N"])[2] - 1) * _prod([e + 1 for p, e in factorint(v["N"]).items() if p != 2])},
    "legendre": {"key": lambda v: _leg(v["n"], v["p"]), "C16-M7": lambda v: floor(v["n"] / v["p"]),
                 "C16-M8": lambda v: _leg(v["n"], v["p"], stop=2), "C16-M9": lambda v: _prod(_terms(v["n"], v["p"]))},
    "zeros": {"key": lambda v: _leg(v["n"], 5), "C16-M10": lambda v: floor(v["n"] / 5), "C16-M11": lambda v: _leg(v["n"], 2),
              "C16-M12": lambda v: floor(v["n"] / 10)},
    "sum": {"key": lambda v: divisor_sigma(v["N"]), "C16-M13": lambda v: divisor_count(v["N"]),
            "C16-M14": lambda v: sum(sum(p ** k for k in range(e + 1)) for p, e in factorint(v["N"]).items()),
            "C16-M15": lambda v: divisor_sigma(v["N"]) - v["N"]},
}
MODELS = mixed_models("C16", TABLE, 15)
