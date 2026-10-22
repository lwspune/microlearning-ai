"""C04 Arcs and central angles: answer models (the key, and one per misconception).

Every item walks once round a circle (or once along a semicircle) through its named points.
params["pieces"] lists the arcs met on the way, in order, each a token:
  c:<name>   an arc whose central angle is the input <name> (degrees)
  a:<name>   an arc whose measure is the input <name> (degrees)
  e:<i>      an arc congruent to piece i (cut off by a congruent chord)
  x          the arc asked for (exactly one)
params["total"] is "360" (the whole circle) or "180" (a semicircle on a diameter).
params["answer"], optional, lists the piece indices whose arcs make up the arc asked for
(default: the x piece alone). params["mirror"], for C04-M4, is the piece the student wrongly
takes the unknown to equal. Answers are measures in degrees.
"""
from sympy import Integer

CIRCLE = Integer(360)


def _measures(v, p, central=lambda a: a, total=None):
    """Each piece's measure, the unknown found by walking round to the total."""
    pieces = p["pieces"]
    total = Integer(p["total"]) if total is None else total
    known = {}
    for i, tok in enumerate(pieces):
        kind, _, arg = tok.partition(":")
        if kind == "c":
            known[i] = central(v[arg])
        elif kind == "a":
            known[i] = v[arg]
    for i, tok in enumerate(pieces):
        if tok.startswith("e:"):
            known[i] = known[int(tok[2:])]
    unknown = [i for i, tok in enumerate(pieces) if tok == "x"]
    if len(unknown) != 1:
        raise ValueError("exactly one unknown arc")
    known[unknown[0]] = total - sum(m for i, m in known.items() if i != unknown[0])
    return known, unknown[0]


def _answer(known, x, p):
    idx = [int(i) for i in p.get("answer", [str(x)])]
    if any(known[i] <= 0 for i in known):
        raise ValueError("an arc would not be positive")
    ans = sum(known[i] for i in idx)
    if not 0 < ans < CIRCLE:
        raise ValueError("not an arc of the circle")
    return ans


def key(v, p):
    """An arc measures its central angle; arcs met in turn add up to the whole (360 or 180)."""
    known, x = _measures(v, p)
    return _answer(known, x, p)


def m1(v, p):
    """Gives the other arc with the same two end points (minor for major, or the reverse)."""
    return CIRCLE - key(v, p)


def m2(v, p):
    """Takes the whole circle as 180 degrees (a semicircle as 90)."""
    known, x = _measures(v, p, total=Integer(p["total"]) / 2)
    return _answer(known, x, p)


def m3(v, p):
    """Takes an arc to be twice its central angle."""
    if not any(t.startswith("c:") for t in p["pieces"]):
        raise ValueError("no central angle")
    known, x = _measures(v, p, central=lambda a: 2 * a)
    return _answer(known, x, p)


def m4(v, p):
    """Thinks the arcs between two congruent chords are congruent too: unknown = the mirror piece."""
    if "mirror" not in p:
        raise ValueError("no pair of congruent chords")
    known, x = _measures(v, p)
    known[x] = known[int(p["mirror"])]
    return _answer(known, x, p)


def m5(v, p):
    """Leaves out the arc that is given only by its central angle (counts it as nothing)."""
    if not any(t.startswith("c:") for t in p["pieces"]):
        raise ValueError("no central angle")
    known, x = _measures(v, p, central=lambda a: Integer(0))
    known = {i: m for i, m in known.items() if not p["pieces"][i].startswith("c:")}
    return _answer(known, x, p)


MODELS = {"key": key, "C04-M1": m1, "C04-M2": m2, "C04-M3": m3, "C04-M4": m4, "C04-M5": m5}
