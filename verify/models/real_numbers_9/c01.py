"""C01 Terminating and recurring decimals: answer models (the key, and one per misconception).

A fraction is a string "p/q" (p may be negative; not always in lowest terms).

Value items: inputs {"p", "q"}; the answer is the number the student writes, as an exact
  Rational (a recurring decimal such as 0.3(18) is its exact value 7/22).
Count items: params {"ask": "terminating" | "recurring", "fracs": ["13/5", ...]}; the answer is
  how many of the fractions have that kind of decimal form.
Pick items: params {"pick": "terminating" | "recurring", "fracs": [...]}; the key is the one
  fraction that truly has that form; a misconception's answer is the other fraction its wrong
  rule gives that form. Names are Symbol("f_<p>_<q>").
"""
from sympy import Integer, Rational, Symbol, floor, n_order


def _pq(s):
    p, q = s.split("/")
    return int(p), int(q)


def _strip(q, primes=(2, 5)):
    for t in primes:
        while q % t == 0:
            q //= t
    return q


def _lowest_q(s):
    p, q = _pq(s)
    return Rational(p, q).q


# Each rule says whether the student calls the decimal form of "p/q" terminating.
def _true(s):
    return _strip(_lowest_q(s)) == 1


def _unreduced(s):                 # M1: tests q before reducing p/q to lowest terms
    return _strip(_pq(s)[1]) == 1


def _any_2_or_5(s):                # M2: one factor 2 or 5 in q is enough
    q = _lowest_q(s)
    return q == 1 or q % 2 == 0 or q % 5 == 0


def _only_2s(s):                   # M3: forgets 5; only q = 2^m terminates
    return _strip(_lowest_q(s), (2,)) == 1


def _two_places(s):                # M4: divides to two places; still going means recurring
    p, q = _pq(s)
    return (Rational(p, q) * 100).is_integer


RULES = {"key": _true, "C01-M1": _unreduced, "C01-M2": _any_2_or_5, "C01-M3": _only_2s,
         "C01-M4": _two_places}


def _name(s):
    p, q = _pq(s)
    return Symbol(f"f_{p}_{q}".replace("-", "m"))


def _has(rule, s, ask):
    return rule(s) if ask == "terminating" else not rule(s)


def _classify(name, p):
    rule = RULES.get(name)
    if rule is None:
        raise ValueError("this mistake is about writing the decimal, not classifying it")
    if "fracs" not in p:
        raise ValueError("this mistake is about classifying, not writing the decimal")
    if "ask" in p:
        return Integer(sum(1 for s in p["fracs"] if _has(rule, s, p["ask"])))
    truth = [s for s in p["fracs"] if _has(_true, s, p["pick"])]
    if len(truth) != 1:
        raise ValueError(f"{len(truth)} fractions truly {p['pick']}")
    if name == "key":
        return _name(truth[0])
    hits = [s for s in p["fracs"] if s != truth[0] and _has(rule, s, p["pick"])]
    if len(hits) != 1:
        raise ValueError(f"this mistake picks {len(hits)} other fractions")
    return _name(hits[0])


def _expansion(x):
    """|x| as (integer part, non-repeating digits, repeating digits), digits as strings."""
    x = abs(x)
    q = x.q
    core = _strip(q)
    pre = max(_count(q, 2), _count(q, 5))
    per = 0 if core == 1 else int(n_order(10, core))
    whole = int(floor(x))
    frac = x - whole
    digits = str(int(frac * 10 ** (pre + per))).rjust(pre + per, "0") if pre + per else ""
    return whole, digits[:pre], digits[pre:]


def _count(q, t):
    k = 0
    while q % t == 0:
        q //= t
        k += 1
    return k


def _value(v):
    return Rational(v["p"], v["q"])


def key(v, p):
    if "fracs" in p:
        return _classify("key", p)
    return _value(v)


def _sign(x):
    return -1 if x < 0 else 1


def m1(v, p):
    return _classify("C01-M1", p)


def m2(v, p):
    return _classify("C01-M2", p)


def m3(v, p):
    return _classify("C01-M3", p)


def m4(v, p):
    """Cuts the division off after two decimal places."""
    if "fracs" in p:
        return _classify("C01-M4", p)
    x = _value(v)
    if (x * 100).is_integer:
        raise ValueError("the decimal ends within two places")
    return _sign(x) * floor(abs(x) * 100) / 100


def m5(v, p):
    """Writes the repeating block once and stops, with no bar."""
    if "fracs" in p:
        raise ValueError("a writing mistake, not a classifying one")
    x = _value(v)
    whole, pre, rep = _expansion(x)
    if not rep:
        raise ValueError("the decimal terminates")
    return _sign(x) * (whole + Rational(int(pre + rep), 10 ** len(pre + rep)))


def m6(v, p):
    """Puts the bar over the whole decimal part, the non-repeating digits too."""
    if "fracs" in p:
        raise ValueError("a writing mistake, not a classifying one")
    x = _value(v)
    whole, pre, rep = _expansion(x)
    if not rep or not pre:
        raise ValueError("no non-repeating digits for the bar to cover wrongly")
    return _sign(x) * (whole + Rational(int(pre + rep), 10 ** len(pre + rep) - 1))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4, "C01-M5": m5,
          "C01-M6": m6}
