"""C02 Tests for a parallelogram: answer models (the key, and one per misconception).

An item names a quadrilateral and the facts known about it, in the item's own letters:
  params["quad"]   its vertices in order ("APCQ"); they stand for A, B, C, D below
  params["o"]      the point where the diagonals meet (optional), standing for O
  params["form"]   "decide":   params["facts"] (comma list); the answer names the conclusion:
                               Symbol("<test>_test"), Symbol("<kind>_property") or Symbol("not_necessarily")
                   "complete": params["given"] (comma list) and params["cands"] (";" list of single facts,
                               "none" for 'no further fact is needed'); the answer is the candidate that
                               completes a proof, as a Symbol (see _name)
                   "enough":   params["cands"] (";" list of comma lists); the answer is the set that proves it
                   "solve":    params oa, oc, ob, od, the four parts of the diagonals as expressions in x;
                               the answer is the value of x that makes the diagonals bisect each other
A fact is "XY=ZW" (equal segments), "XY||ZW" (parallel segments) or "X=Y" (equal angles at X and Y).

The key reads the facts against the definition (both pairs of opposite sides parallel) and the four
tests of the book. Each misconception replaces that reading with the student's own rule.
"""
from sympy import Eq, Symbol, solve, sympify

X = Symbol("x", real=True)

TESTS = ["definition", "one_pair", "sides", "angles", "diagonals"]


# ---------- facts in canonical letters A, B, C, D, O ----------

def _map(p):
    m = dict(zip(p["quad"], "ABCD"))
    if p.get("o"):
        m[p["o"]] = "O"
    return m


def _fact(tok, m):
    tok = tok.strip()
    if "||" in tok:
        a, b = tok.split("||")
        return ("par", frozenset({frozenset(m[c] for c in a), frozenset(m[c] for c in b)}))
    a, b = tok.split("=")
    if len(a) == 1:
        return ("ang", frozenset({m[a], m[b]}))
    return ("eq", frozenset({frozenset(m[c] for c in a), frozenset(m[c] for c in b)}))


def _facts(s, m):
    return {_fact(t, m) for t in s.split(",") if t.strip()} if s and s != "none" else set()


def S(a, b):
    return frozenset({frozenset(a), frozenset(b)})


OPP_SIDES = [S("AB", "CD"), S("AD", "BC")]
HALVES = [S("AO", "OC"), S("BO", "OD")]
OPP_ANGS = [frozenset("AC"), frozenset("BD")]
ADJ_SIDES = [S("AB", "BC"), S("BC", "CD"), S("CD", "DA"), S("DA", "AB")]
ADJ_HALVES = [S("AO", "OB"), S("BO", "OC"), S("CO", "OD"), S("DO", "OA")]
ADJ_ANGS = [frozenset("AB"), frozenset("BC"), frozenset("CD"), frozenset("DA")]
DIAGS = S("AC", "BD")


def _true_test(F):
    """The test (or the definition) these facts satisfy, straight from the book; None if none."""
    eq = lambda s: ("eq", s) in F
    par = lambda s: ("par", s) in F
    ang = lambda a: ("ang", a) in F
    if all(par(s) for s in OPP_SIDES):
        return "definition"
    if any(eq(s) and par(s) for s in OPP_SIDES):
        return "one_pair"
    if all(eq(s) for s in OPP_SIDES):
        return "sides"
    if all(ang(a) for a in OPP_ANGS):
        return "angles"
    if all(eq(s) for s in HALVES):
        return "diagonals"
    return None


# ---------- the students' rules ----------

def _m1_test(F):
    """One pair of opposite sides parallel and the OTHER pair congruent."""
    a, b = OPP_SIDES
    if (("par", a) in F and ("eq", b) in F) or (("par", b) in F and ("eq", a) in F):
        return "one_pair"
    return None


def _m2_test(F):
    """Equal diagonals make the diagonals test."""
    return "diagonals" if ("eq", DIAGS) in F else None


def _m3_test(F):
    """One of the two pairs a test needs is enough (congruent parts read first)."""
    if any(("eq", s) in F for s in OPP_SIDES):
        return "sides"
    if any(("ang", a) in F for a in OPP_ANGS):
        return "angles"
    if any(("eq", s) in F for s in HALVES):
        return "diagonals"
    if any(("par", s) in F for s in OPP_SIDES):
        return "definition"
    return None


def _m5_test(F):
    """Adjacent parts may stand in for opposite ones: each of a test's two pairs may be adjacent."""
    def two(opp, adj, kind):
        hits = [s for s in opp + adj if (kind, s) in F]
        return len(hits) >= 2 and any(s in adj for s in hits)
    if two(OPP_SIDES, ADJ_SIDES, "eq"):
        return "sides"
    if two(OPP_ANGS, ADJ_ANGS, "ang"):
        return "angles"
    if two(HALVES, ADJ_HALVES, "eq"):
        return "diagonals"
    return None


# ---------- answers in each form ----------

def _name(tok):
    tok = tok.strip()
    return "none_needed" if tok == "none" else tok.replace("||", "_par_").replace("=", "_eq_")


def _raise(why):
    raise ValueError(why)


def _set_name(s):
    return "_and_".join(_name(t) for t in s.split(","))


def _decide(p, rule):
    t = rule(_facts(p["facts"], _map(p)))
    return Symbol(f"{t}_test") if t else Symbol("not_necessarily")


def _complete(p, rule):
    m = _map(p)
    G = _facts(p["given"], m)
    cands = p["cands"].split(";")
    if rule(G):  # the given facts already pass the rule: nothing more is needed
        return Symbol(_name("none")) if "none" in cands else _raise("the given facts already prove it")
    picks = [c for c in cands if c != "none" and rule(G | _facts(c, m))]
    if len(picks) != 1:
        raise ValueError(f"{len(picks)} candidates fit")
    return Symbol(_name(picks[0]))


def _enough(p, rule):
    m = _map(p)
    picks = [c for c in p["cands"].split(";") if rule(_facts(c, m))]
    if len(picks) != 1:
        raise ValueError(f"{len(picks)} sets fit")
    return Symbol(_set_name(picks[0]))


def _parts(p):
    return [sympify(p[k], locals={"x": X}) for k in ("oa", "oc", "ob", "od")]


def _solve(eq, parts):
    sols = solve(eq, X)
    if len(sols) != 1:
        raise ValueError(f"{len(sols)} solutions")
    if any(e.subs(X, sols[0]) <= 0 for e in parts):
        raise ValueError("a length is not positive")
    return sols[0]


def _apply(v, p, rule, numeric=None):
    form = p["form"]
    if form == "solve":
        if numeric is None:
            raise ValueError("no numeric form")
        return numeric(_parts(p))
    out = {"decide": _decide, "complete": _complete, "enough": _enough}[form](p, rule)
    if rule is not _true_test and out == key(v, p):
        raise ValueError("agrees with the key here")
    return out


def _key_x(parts):
    oa, oc, ob, od = parts
    x = _solve(Eq(oa, oc), parts)
    if ob.subs(X, x) != od.subs(X, x):
        raise ValueError("the other diagonal is not bisected")
    return x


def key(v, p):
    return _apply(v, p, _true_test, _key_x)


def m1(v, p):
    return _apply(v, p, _m1_test)


def m2(v, p):
    def numeric(parts):
        oa, oc, ob, od = parts
        return _solve(Eq(oa + oc, ob + od), parts[:1])
    return _apply(v, p, _m2_test, numeric)


def m3(v, p):
    return _apply(v, p, _m3_test)


def m4(v, p):
    """Quotes a property of a parallelogram (the converse) as the reason: the property of the first stated part."""
    if p["form"] != "decide":
        raise ValueError("decide items only")
    kind, s = sorted(_facts(p["facts"], _map(p)), key=lambda f: (f[0] != "eq", f[0]))[0]
    if kind == "eq" and s in OPP_SIDES:
        return Symbol("sides_property")
    if kind == "ang" and s in OPP_ANGS:
        return Symbol("angles_property")
    if kind == "eq" and s in HALVES:
        return Symbol("diagonals_property")
    raise ValueError("no property quoted")


def m5(v, p):
    def numeric(parts):
        oa, oc, ob, od = parts
        return _solve(Eq(oa, ob), parts[:1])
    return _apply(v, p, _m5_test, numeric)


def m6(v, p):
    """Solves for x correctly but answers with the length OA."""
    if p["form"] != "solve":
        raise ValueError("solve items only")
    parts = _parts(p)
    return parts[0].subs(X, _key_x(parts))


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4, "C02-M5": m5, "C02-M6": m6}
