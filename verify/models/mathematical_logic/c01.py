"""C01 Statements and truth values: answer models (the key, and one per misconception).

Each sentence is described by a tag in params["s"] (a list, one tag per sentence, numbered from 1):
  decl:none:T   a declarative sentence with no variable, true (decl:none:F, false);
  decl:bound:T  a declarative sentence with a variable whose value is fixed or covered
                ("when x = 7", "for all θ", "if x is a whole number then ..."), true (or :F);
  decl:free     an open sentence: its truth depends on x (or on who "he" is);
  ask:fact      a question with a definite answer ("Is 2 an even number?");
  ask           any other question; cmd  a command or request.
params["ask"]:
  set       the set of sentence numbers that are statements (a FiniteSet);
  count     how many of the sentences are statements;
  classify  one sentence (s has one tag): Symbol("true_statement"), Symbol("false_statement"),
            Symbol("open_sentence") (not a statement), or Symbol("not_statement_false")
            (the M1 belief: "not a statement, because it is false").
"""
from sympy import FiniteSet, Integer, Symbol


def _parts(tag):
    return tag.split(":")


def _is_statement(tag):
    """The definition: a declarative sentence that is either true or false, not both."""
    form, *rest = _parts(tag)
    return form == "decl" and rest[0] != "free"


def _truth(tag):
    return _parts(tag)[2]


def _answer(p, statement, verdict):
    """Apply a rule (statement: tag -> bool; verdict: tag -> named answer) to the question asked."""
    tags = p["s"]
    if p["ask"] == "set":
        return FiniteSet(*[Integer(i) for i, t in enumerate(tags, 1) if statement(t)])
    if p["ask"] == "count":
        return Integer(sum(1 for t in tags if statement(t)))
    if p["ask"] == "classify":
        (tag,) = tags
        return verdict(tag)
    raise ValueError(f"unknown ask {p['ask']}")


def _key_verdict(tag):
    if not _is_statement(tag):
        return Symbol("open_sentence") if tag == "decl:free" else Symbol("not_statement")
    return Symbol("true_statement") if _truth(tag) == "T" else Symbol("false_statement")


def key(v, p):
    return _answer(p, _is_statement, _key_verdict)


# M1: a false sentence is not a statement (a statement must be true).
def _m1_statement(t):
    return _is_statement(t) and _truth(t) == "T"


def m1(v, p):
    def verdict(t):
        if not (_is_statement(t) and _truth(t) == "F"):
            raise ValueError("M1 only differs on a false statement")
        return Symbol("not_statement_false")
    return _answer(p, _m1_statement, verdict)


# M2: any sentence with a variable is an open sentence, even when the variable is fixed or covered.
def _m2_statement(t):
    return _is_statement(t) and _parts(t)[1] != "bound"


def m2(v, p):
    def verdict(t):
        if not t.startswith("decl:bound"):
            raise ValueError("M2 only differs on a statement with a fixed or covered variable")
        return Symbol("open_sentence")
    return _answer(p, _m2_statement, verdict)


# M3: a sentence with x is a statement, true because some value of x makes it true.
def _m3_statement(t):
    return _is_statement(t) or t == "decl:free"


def m3(v, p):
    def verdict(t):
        if t not in ("decl:free", "decl:bound:F"):
            raise ValueError("M3 only differs on an open sentence or a false sentence with x")
        return Symbol("true_statement")
    return _answer(p, _m3_statement, verdict)


# M4: a question with a definite answer is a statement.
def _m4_statement(t):
    return _is_statement(t) or t == "ask:fact"


def m4(v, p):
    def verdict(t):
        if t != "ask:fact":
            raise ValueError("M4 only differs on a question with a definite answer")
        return Symbol("true_statement")
    return _answer(p, _m4_statement, verdict)


MODELS = {"key": key, "C01-M1": m1, "C01-M2": m2, "C01-M3": m3, "C01-M4": m4}
