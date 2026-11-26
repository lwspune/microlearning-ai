"""C02 Naming halogen derivatives: answer models (the key, and one per misconception).

Each item describes one compound by its parent chain or ring (params, all strings):
  n      the number of carbons in the correct parent (the longest chain, or the ring: 6),
  ring   "" for a chain, "benzene" or "cyclohexane" for a ring,
  db     for an alkene, the lower carbon of the C=C counted from the chain's left end, else "",
  subs   the substituents on that parent, "2:chloro,4:methyl", positions from the left end
         (for a ring, positions round the ring in one direction from any start),
  drawn  optional: the chain a student reads straight off the written formula, in the same
         "n;db;subs" form (e.g. "5;;2:chloro,4:ethyl"), when that is shorter than the longest chain.
Every model numbers the parent by its own rule and writes the name; the answer is a named Symbol
whose text is the name (NAMES maps the Symbol back to it).
"""
from sympy import Symbol

HALO = {"fluoro", "chloro", "bromo", "iodo"}
STEM = {3: "prop", 4: "but", 5: "pent", 6: "hex", 7: "hept", 8: "oct"}
MULT = {1: "", 2: "di", 3: "tri", 4: "tetra"}
NAMES = {}


def _subs(s):
    return [(int(a), b) for a, b in (x.split(":") for x in s.split(",") if x)]


def _numberings(n, ring, db):
    """Every allowed numbering as (map old position -> new locant, double-bond locant or None)."""
    out = []
    if ring:
        for start in range(1, n + 1):
            for d in (1, -1):
                out.append(({p: (d * (p - start)) % n + 1 for p in range(1, n + 1)}, None))
    else:
        out.append(({p: p for p in range(1, n + 1)}, int(db) if db else None))
        out.append(({p: n + 1 - p for p in range(1, n + 1)}, n - int(db) if db else None))
    return out


def _name(n, ring, db, subs, num, dbl, alkyl_first=False):
    groups = {}
    for p, g in subs:
        groups.setdefault(g, []).append(num[p])
    order = sorted(groups, key=lambda g: ((g in HALO) if alkyl_first else False, g))
    parts = []
    for g in order:
        locs = sorted(groups[g])
        loc = ",".join(map(str, locs))
        if ring and len(subs) == 1:
            parts.append(g)
        else:
            parts.append(f"{loc}-{MULT[len(locs)]}{g}")
    prefix = "-".join(parts)
    if ring:
        parent = ring
    elif dbl:
        parent = f"{STEM[n]}-{dbl}-ene"
    else:
        parent = f"{STEM[n]}ane"
    return prefix + parent


def _choose(n, ring, db, subs, rule):
    """The numbering a rule picks. rule lists criteria in order: 'db', 'halo', 'alkyl', 'all', 'alpha'."""
    def score(c):
        num, dbl = c
        out = []
        for r in rule:
            if r == "db":
                out.append(dbl or 0)
            elif r == "halo":
                out.append(sorted(num[p] for p, g in subs if g in HALO))
            elif r == "alkyl":
                out.append(sorted(num[p] for p, g in subs if g not in HALO))
            elif r == "all":
                out.append(sorted(num[p] for p, _ in subs))
            elif r == "alpha":
                out.append([num[p] for p, g in sorted(subs, key=lambda s: (s[1], s[0]))])
        return out
    return min(_numberings(n, ring, db), key=score)


def _answer(n, ring, db, subs, rule, alkyl_first=False):
    num, dbl = _choose(n, ring, db, subs, rule)
    name = _name(n, ring, db, subs, num, dbl, alkyl_first)
    ident = "nm_" + "".join(ch if ch.isalnum() else "_" for ch in name)
    NAMES[ident] = name
    return Symbol(ident)


def _args(p):
    return int(p["n"]), p.get("ring", ""), p.get("db", ""), _subs(p["subs"])


KEY_RULE = ["db", "all", "alpha"]


def key(v, p):
    """Longest chain; the C=C gets the lowest locant, then the lowest locant set, then the
    prefix first in alphabetical order; prefixes cited alphabetically."""
    return _answer(*_args(p), KEY_RULE)


def m1(v, p):
    """Treats the halogen as the principal group: numbers from the end that gives it the lowest number."""
    return _answer(*_args(p), ["halo", "db", "all", "alpha"])


def m2(v, p):
    """Takes the chain as written in a straight line, not the longest chain through a branch."""
    if not p.get("drawn"):
        raise ValueError("the written chain is the longest chain")
    n, db, subs = p["drawn"].split(";")
    return _answer(int(n), "", db, _subs(subs), KEY_RULE)


def m3(v, p):
    """Cites alkyl prefixes before halogen prefixes instead of in alphabetical order."""
    return _answer(*_args(p), KEY_RULE, alkyl_first=True)


def m4(v, p):
    """Gives the alkyl branch the lowest number first, as if the chain were numbered from the branch."""
    return _answer(*_args(p), ["alkyl", "db", "all", "alpha"])


MODELS = {"key": key, "C02-M1": m1, "C02-M2": m2, "C02-M3": m3, "C02-M4": m4}
