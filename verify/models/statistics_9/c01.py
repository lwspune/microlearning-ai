"""C01 Primary and secondary data: answer models (the key, and one per misconception).

Each situation is a tag in params["s"] (a list, numbered from 1):
  obs            the investigator collects it first-hand by visiting, counting or measuring;
  ask            the investigator collects it first-hand by asking people (house to house, interview);
  rec-off-now    taken from an office's records (school, Talathi, forest office), current figures;
  rec-off-past   taken from an office's records, figures of earlier years;
  pub-now        taken from a newspaper, report or website, current figures;
  pub-past       taken from a newspaper, report or website, figures of earlier years.
params["ask"]:
  primary    the set of situation numbers that are primary data (EmptySet if none);
  secondary  the set of situation numbers that are secondary data;
  pair       the classification of two situations, Tuple(Symbol("primary"|"secondary"), ...).
"""
from sympy import FiniteSet, Integer, S, Symbol, Tuple

P, Q = Symbol("primary"), Symbol("secondary")


def _src(tag):
    return tag.split("-")[0]


def _official(tag):
    return "off" in tag.split("-")


def _recent(tag):
    return "past" not in tag.split("-")


def _answer(p, is_primary):
    tags = p["s"]
    if p["ask"] == "pair":
        return Tuple(*[P if is_primary(t) else Q for t in tags])
    want = p["ask"] == "primary"
    nums = [Integer(i) for i, t in enumerate(tags, 1) if is_primary(t) == want]
    return FiniteSet(*nums) if nums else S.EmptySet


# The definition: primary data is collected first-hand by the investigator for this purpose.
def key(v, p):
    return _answer(p, lambda t: _src(t) in ("obs", "ask"))


# M1: an office's records are the original, official source, so data taken from them is primary.
def m1(v, p):
    return _answer(p, lambda t: _src(t) in ("obs", "ask") or (_src(t) == "rec" and _official(t)))


# M2: data got by asking people is secondary: the investigator only hears it, so it is second-hand.
def m2(v, p):
    return _answer(p, lambda t: _src(t) == "obs")


# M3: 'secondary' means old: fresh, current figures are primary wherever they come from.
def m3(v, p):
    return _answer(p, _recent)


# M4 (slip): the two definitions swapped: records are primary, first-hand data is secondary.
def m4(v, p):
    return _answer(p, lambda t: _src(t) not in ("obs", "ask"))


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
