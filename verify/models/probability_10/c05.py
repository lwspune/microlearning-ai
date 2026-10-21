"""C05 A pack of cards: answer models (the key, and one per misconception).

One card is drawn from a well shuffled pack of v["N"] = 52 playing cards. The event is named by params:
  colour  "red" | "black" | "any"
  suit    "spades" | "clubs" | "hearts" | "diamonds" | "any"
  rank    "face" (king, queen, jack) | "ace" | "king" | "any"
  neg     "yes" for "not ...", the cards outside that event; "no" (default) for the event itself
The answer is P(event) as a Rational.

The key builds the 52 cards (4 suits of 13) and counts the ones that meet every condition.
"""
from sympy import Rational

SUITS = {"spades": "black", "clubs": "black", "hearts": "red", "diamonds": "red"}
RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
PACK = [(s, r) for s in SUITS for r in RANKS]
FACE = {"J", "Q", "K"}


def _rank_ok(r, want, face=FACE):
    return want == "any" or (want == "face" and r in face) or (want == "ace" and r == "A") or (want == "king" and r == "K")


def _meets(card, p, face=FACE):
    s, r = card
    colour, suit = p.get("colour", "any"), p.get("suit", "any")
    return ((colour == "any" or SUITS[s] == colour) and (suit == "any" or s == suit)
            and _rank_ok(r, p.get("rank", "any"), face))


def _count(cards, p, face=FACE):
    return sum(1 for c in cards if _meets(c, p, face))


def _neg(p):
    return p.get("neg", "no") == "yes"


def _prob(n, v, p):
    """P from a count of the event's cards, taking the complement for a "not" event."""
    total = v["N"]
    return Rational(total - n, total) if _neg(p) else Rational(n, total)


def _group(p):
    """The colour or suit condition of a two-condition event ("red" in "red face card")."""
    if p.get("rank", "any") == "any":
        raise ValueError("needs a rank condition as well")
    if p.get("suit", "any") != "any":
        return {"suit": p["suit"]}
    if p.get("colour", "any") != "any":
        return {"colour": p["colour"]}
    raise ValueError("needs a colour or suit condition")


def key(v, p):
    assert v["N"] == len(PACK)
    return _prob(_count(PACK, p), v, p)


def m1(v, p):
    """Counts the aces as face cards: 4 face cards a suit, 16 in the pack."""
    if p.get("rank") != "face":
        raise ValueError("face-card events only")
    return _prob(_count(PACK, p, face=FACE | {"A"}), v, p)


def m2(v, p):
    """Forgets that every rank comes in all 4 suits: one ace, one king, three face cards in the pack."""
    if p.get("rank", "any") == "any":
        raise ValueError("needs a rank condition")
    suits = [s for s in SUITS if (p.get("suit", "any") in ("any", s)) and (p.get("colour", "any") in ("any", SUITS[s]))]
    one_suit = [c for c in PACK if c[0] == suits[0]]
    return _prob(_count(one_suit, p), v, p)


def m3(v, p):
    """Reads "red face card" as red cards plus face cards: adds the two counts."""
    if _neg(p):
        raise ValueError("not modelled for a 'not' event")
    group = _group(p)
    return Rational(_count(PACK, group) + _count(PACK, {"rank": p["rank"]}), v["N"])


def m4(v, p):
    """For "not a ..." finds the probability of the event itself, not of the other cards."""
    if not _neg(p):
        raise ValueError("'not' events only")
    return Rational(_count(PACK, p), v["N"])


def m5(v, p):
    """Divides by the cards of that colour or suit (26 or 13), not by all 52 cards of the pack."""
    if _neg(p):
        raise ValueError("not modelled for a 'not' event")
    group = _group(p)
    return Rational(_count(PACK, p), _count(PACK, group))


def m6(v, p):
    """Writes the fraction upside down: n(S) over n(A)."""
    k = key(v, p)
    if k == 0:
        raise ValueError("impossible event")
    return 1 / k


MODELS = {"key": key, "C05-M1": m1, "C05-M2": m2, "C05-M3": m3, "C05-M4": m4, "C05-M5": m5, "C05-M6": m6}
