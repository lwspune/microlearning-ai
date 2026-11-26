"""C01 Kirchhoff's current law: answer models (the key, and one per misconception).

params["ask"] picks the question:
  "chain": Solved Ex.9.1's chain of junctions B, C, D. I1 enters B, I2 leaves B; I3 runs B -> C; I4 leaves C;
           I5 runs C -> D; I7 leaves D; I6 runs on from D. Inputs I1, I2, I4, I7; answer I6, in A.
  "node":  one junction. Inputs c1, c2, ... ; params["dirs"] = "in,out,..." for them; the unknown current leaves.
           params["ang"] = the directions (degrees) the arrows point, for the vector model; params["misread"] and
           params["drop"] = which current (1-based) the arrow-misreading and branch-dropping models touch.
  "div":   current I reaches a junction and divides between R1 and R2 in parallel; answer the current in R2.
  "law", "ac": named answers.

The key works from conservation of charge: the currents into a junction add up to the currents out of it
(current is a scalar), and parallel branches share one potential difference, so I2 R2 = I1 R1.
"""
import math

from sympy import Symbol

from physics import sig

NAMED = {
    "law": {"key": "charge", "C01-M6": "energy", "C01-M3": "momentum", "C01-M8": "mass"},
    "ac": {"key": "instantaneous", "C01-M7": "dc_only", "C01-M6": "junction_energy", "C01-M10": "used_up"},
}


def _chain(v, *, add_all=False, misread=False, drop=False):
    i1, i2, i4, i7 = v["I1"], v["I2"], v["I4"], v["I7"]
    i3 = i1 + i2 if add_all else i1 - i2
    i5 = i3 + i4 if (add_all or misread) else i3 - i4  # misread: the book's slip, adding I4 at C
    if drop:
        return i5  # forgets the I7 branch at D
    return i5 + i7 if add_all else i5 - i7


def _node(v, p, *, add_all=False, misread=False, drop=False, vector=False):
    dirs = p["dirs"].split(",")
    cs = [v[f"c{k + 1}"] for k in range(len(dirs))]
    if vector:
        ang = [math.radians(float(a)) for a in p["ang"].split(",")]
        x = sum(float(c) * math.cos(a) for c, a in zip(cs, ang))
        y = sum(float(c) * math.sin(a) for c, a in zip(cs, ang))
        return math.hypot(x, y)
    tot = 0
    for k, (c, d) in enumerate(zip(cs, dirs)):
        if drop and k + 1 == int(p["drop"]):
            continue
        if misread and k + 1 == int(p["misread"]):
            d = "in" if d == "out" else "out"
        tot += c if (d == "in" or add_all) else -c
    return tot


def _div(v, *, equal=False, direct=False, whole=False):
    i, r1, r2 = v["I"], v["R1"], v["R2"]
    if equal:
        return i / 2
    if whole:
        return i
    return i * (r2 if direct else r1) / (r1 + r2)


def _solve(v, p, **kw):
    ask = p["ask"]
    if ask == "chain":
        if kw.get("vector") or kw.get("split"):
            raise ValueError("does not apply to this item")
        return sig(_chain(v, **kw))
    if ask == "node":
        if kw.get("split"):
            raise ValueError("does not apply to this item")
        return sig(_node(v, p, **kw))
    if ask == "div":
        s = kw.get("split")
        if s is None and not kw.get("drop"):
            if kw:
                raise ValueError("does not apply to this item")
            return sig(_div(v))
        return sig(_div(v, equal=s == "equal", direct=s == "direct", whole=bool(kw.get("drop"))))
    raise ValueError(f"unknown ask {ask}")


def key(v, p):
    if p["ask"] in NAMED:
        return Symbol(NAMED[p["ask"]]["key"])
    return _solve(v, p)


def _m(mid, asks=(), **kw):
    def model(v, p):
        if p["ask"] in NAMED:
            if mid not in NAMED[p["ask"]]:
                raise ValueError("does not apply to this item")
            return Symbol(NAMED[p["ask"]][mid])
        if p["ask"] not in asks:
            raise ValueError("does not apply to this item")
        return _solve(v, p, **kw)
    return model


MODELS = {
    "key": key,
    "C01-M1": _m("C01-M1", ("chain", "node"), add_all=True),  # adds every current, in or out
    "C01-M2": _m("C01-M2", ("chain", "node"), misread=True),  # takes a current that leaves as one that enters
    "C01-M3": _m("C01-M3", ("node",), vector=True),  # adds currents as vectors
    "C01-M4": _m("C01-M4", ("div",), split="equal"),  # current splits equally between branches
    "C01-M5": _m("C01-M5", ("div",), split="direct"),  # more current through the larger resistance
    "C01-M6": _m("C01-M6"),  # the junction law conserves energy
    "C01-M7": _m("C01-M7"),  # Kirchhoff's laws hold only for steady DC
    "C01-M8": _m("C01-M8"),  # current as a flow of matter: the law conserves mass
    "C01-M9": _m("C01-M9", ("chain", "node", "div"), drop=True),  # drops one branch at a junction
    "C01-M10": _m("C01-M10"),  # a resistor uses up part of the current
}
