"""C08 Rank in the dictionary: answer models (the key, and one per misconception).

params["word"]: a word (or digit string) with all its characters different.
params["ask"]: "rank" (the word's position when all arrangements of its letters are listed in
dictionary order), "before" (how many arrangements come before it), or "word" (the k-th
arrangement in that list; inputs k). A word answer is a named answer, Symbol("AINMRE").
"""
from itertools import permutations
from math import factorial

from sympy import Integer, Symbol


def _letters(p):
    w = p["word"]
    if len(set(w)) != len(w):
        raise ValueError("letters must all be different")
    return w, sorted(w)


def _listing(p):
    """Every arrangement of the letters, in dictionary order."""
    _, s = _letters(p)
    return ["".join(x) for x in permutations(s)]  # permutations of a sorted list come out sorted


def key(v, p):
    """Straight from the definition: list every arrangement in order and look the word up."""
    w, _ = _letters(p)
    words = _listing(p)
    if p["ask"] == "word":
        return Symbol(words[int(v["k"]) - 1])
    pos = words.index(w) + 1
    return Integer(pos if p["ask"] == "rank" else pos - 1)


def _count(w, smaller, block):
    """Sum over the places of (smaller letters at that place) x (block size for that place)."""
    n = len(w)
    return sum(smaller(i) * block(n, i) for i in range(n))


def _remaining_smaller(w):
    return lambda i: sum(1 for c in w[i + 1:] if c < w[i])


def _rank_from(before, p):
    """A student's 'before' count turned into what the question asks for."""
    return Integer(before + 1 if p["ask"] == "rank" else before)


def m1(v, p):
    """Takes the number of words before the word as its rank: forgets the + 1 (rank asked), or
    adds it when the count before is asked."""
    w, _ = _letters(p)
    if p["ask"] == "word":
        raise ValueError("the k-th word is C08-M5")
    before = _listing(p).index(w)
    return Integer(before if p["ask"] == "rank" else before + 1)


def m2(v, p):
    """At each place, counts the letters of the whole word smaller than the letter there,
    including letters already fixed in earlier places."""
    if p["ask"] == "word":
        raise ValueError("modelled on rank questions only")
    w, _ = _letters(p)
    before = _count(w, lambda i: sum(1 for c in w if c < w[i]), lambda n, i: factorial(n - i - 1))
    return _rank_from(before, p)


def _fill(k, s, block):
    """The k-th word when each choice at place i is taken to cover block(len, i) words."""
    s, out, n = list(s), [], len(s)
    k -= 1
    for i in range(n):
        b = block(n, i)
        j = min(k // b, len(s) - 1)
        out.append(s.pop(j))
        k -= j * b
    return "".join(out)


def m3(v, p):
    """Counts one factorial too many at each place: (letters left including this one)! instead of
    (letters after this place)!, e.g. 6! words per first letter for a 6-letter word."""
    w, s = _letters(p)
    big = lambda n, i: factorial(n - i)
    if p["ask"] == "word":
        return Symbol(_fill(int(v["k"]), s, big))
    return _rank_from(_count(w, _remaining_smaller(w), big), p)


def m4(v, p):
    """Stops after the first letter: counts the words starting with each smaller first letter
    and takes the word to be the first one of its own block (the rest of the letters in order)."""
    w, s = _letters(p)
    n = len(w)
    if p["ask"] == "word":
        first = s[(int(v["k"]) - 1) // factorial(n - 1)]
        return Symbol(first + "".join(c for c in s if c != first))
    before = sum(1 for c in s if c < w[0]) * factorial(n - 1)
    return _rank_from(before, p)


def m5(v, p):
    """For the k-th word, takes k as the number of words before it: gives the (k + 1)-th word."""
    if p["ask"] != "word":
        raise ValueError("modelled on k-th word questions only")
    return Symbol(_listing(p)[int(v["k"])])


MODELS = {"key": key, "C08-M1": m1, "C08-M2": m2, "C08-M3": m3, "C08-M4": m4, "C08-M5": m5}
