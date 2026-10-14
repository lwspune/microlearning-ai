"""Content verifier — enforces AUTHORING.md rules 1-3 on exported content.

Usage: python verify/verify_content.py <exported-chapter.json | dir of them>...
Exit code 1 if any item fails.
"""
import importlib
import json
import sys
from pathlib import Path
from itertools import combinations

from sympy import I, FiniteSet, MatrixBase, Poly, Rational, S, Set, Symbol, Tuple, simplify, sqrt, symbols, sympify

X, Y = symbols("x y", real=True)
_LOCALS = {"I": I, "x": X, "y": Y}


def _expr(s):
    return sympify(s, locals=_LOCALS)


# Options may be written in omega, a non-real cube root of unity; values compare by its true value.
OMEGA = Symbol("omega")
OMEGA_VALUE = Rational(-1, 2) + sqrt(3) / 2 * I


def _true_value(e):
    return e.subs(OMEGA, OMEGA_VALUE) if hasattr(e, "subs") else e


def _structured(e):
    """Python containers from sympify (`{1, 2}`, `{}`, `(1, 2)`) as sympy objects."""
    if isinstance(e, (set, frozenset)):
        return FiniteSet(*e)
    if isinstance(e, dict) and not e:
        return S.EmptySet
    if isinstance(e, (tuple, list)):
        return Tuple(*e)
    return e


def _same_value(a, b):
    """Numbers by value; sets as sets; matrices and tuples entry by entry."""
    a, b = _structured(_true_value(_structured(a))), _structured(_true_value(_structured(b)))
    if isinstance(a, Set) or isinstance(b, Set):
        if not (isinstance(a, Set) and isinstance(b, Set)):
            return False
        a, b = a.simplify() if isinstance(a, FiniteSet) else a, b.simplify() if isinstance(b, FiniteSet) else b
        return a.symmetric_difference(b) == S.EmptySet
    if isinstance(a, MatrixBase) or isinstance(b, MatrixBase):
        return isinstance(a, MatrixBase) and isinstance(b, MatrixBase) and a.shape == b.shape and all(
            _same_value(x, y) for x, y in zip(a, b)
        )
    if isinstance(a, Tuple) or isinstance(b, Tuple):
        return isinstance(a, Tuple) and isinstance(b, Tuple) and len(a) == len(b) and all(
            _same_value(x, y) for x, y in zip(a, b)
        )
    return simplify(a - b) == 0


def _same_locus(p, q):
    """Polynomials define the same locus if one is a nonzero multiple of the other."""
    p, q = Poly(simplify(p).expand(), X, Y), Poly(simplify(q).expand(), X, Y)
    if p.is_zero or q.is_zero:
        return p.is_zero and q.is_zero
    monoms = set(p.monoms()) | set(q.monoms())
    pc = [p.coeff_monomial(m) for m in monoms]
    qc = [q.coeff_monomial(m) for m in monoms]
    k = next(b / a for a, b in zip(pc, qc) if a != 0)
    return all(simplify(b - k * a) == 0 for a, b in zip(pc, qc))


def _on_locus(point, locus):
    """A locus is a polynomial in x, y (the set where it is 0) or, for rays and
    regions, a membership test taking the point."""
    if callable(locus):
        return bool(locus(point))
    return simplify(locus.subs({X: point.as_real_imag()[0], Y: point.as_real_imag()[1]})) == 0


def _project(result, ask):
    if not ask or ask == "z":
        return result
    return sympify(ask, locals={**_LOCALS, "z": result})


def _load_models(chapter_slug):
    module = importlib.import_module("models." + chapter_slug.replace("-", "_"))
    return module.MODELS


def verify_item(item, models):
    errors = []
    iid = item["id"]
    spec = item["verify"]
    kind = spec["kind"]
    inputs = {k: _expr(v) for k, v in spec["inputs"].items()}
    params = spec.get("params") or {}
    options = item["options"]

    correct = [o for o in options if o["correct"]]
    if len(correct) != 1:
        return [f"{iid}: needs exactly one correct option, found {len(correct)}"]

    # Which model produces each option.
    labelled = []
    for o in options:
        if o["correct"]:
            labelled.append((o, "key"))
        elif not o.get("misconceptionId"):
            errors.append(f"{iid} option {o['key']}: untagged distractor (every wrong option needs a misconception)")
        else:
            labelled.append((o, o["misconceptionId"]))
    for o, mid in labelled:
        if mid not in models:
            errors.append(f"{iid} option {o['key']}: {mid} has no model")
    if errors:
        return errors

    outputs = {}
    for o, mid in labelled:
        try:
            outputs[mid] = models[mid](inputs, params)
        except ValueError as e:
            errors.append(f"{iid} option {o['key']}: {mid} model does not apply ({e})")
    if errors:
        return errors

    if kind == "value":
        values = {o["key"]: _expr(o["value"]) for o in options}
        for o, mid in labelled:
            got = _project(outputs[mid], spec.get("ask"))
            if not _same_value(got, values[o["key"]]):
                what = "key" if mid == "key" else mid
                errors.append(f"{iid} option {o['key']}: {what} model gives {got}, option shows {values[o['key']]}")
        for a, b in combinations(options, 2):
            if _same_value(values[a["key"]], values[b["key"]]):
                errors.append(f"{iid}: options {a['key']} and {b['key']} show the same value")

    elif kind == "locus":
        values = {o["key"]: _expr(o["value"]) for o in options}
        for o, mid in labelled:
            if not _same_locus(outputs[mid], values[o["key"]]):
                what = "key" if mid == "key" else mid
                errors.append(f"{iid} option {o['key']}: {what} model gives {outputs[mid]} = 0, option shows {values[o['key']]} = 0")
        for a, b in combinations(options, 2):
            if _same_locus(values[a["key"]], values[b["key"]]):
                errors.append(f"{iid}: options {a['key']} and {b['key']} are the same locus")

    elif kind == "point":
        points = {o["key"]: _expr(o["value"]) for o in options}
        for o, mid in labelled:
            for _, other in labelled:
                on = _on_locus(points[o["key"]], outputs[other])
                if other == mid and not on:
                    errors.append(f"{iid} option {o['key']}: not on its own {mid} locus")
                if other != mid and on:
                    errors.append(f"{iid} option {o['key']} ({mid}): also on the {other} locus, so it can't separate them")
    else:
        errors.append(f"{iid}: unknown verify kind {kind!r}")

    return errors


def verify_chapter(chapter):
    models = _load_models(chapter["chapter"])
    errors = []
    for concept in chapter["concepts"]:
        cmodels = models.get(concept["id"])
        for item in concept["items"]:
            if cmodels is None:
                errors.append(f"{item['id']}: concept {concept['id']} has no models")
                continue
            errors.extend(verify_item(item, cmodels))
    return errors


def main(args):
    paths = []
    for a in map(Path, args):
        paths.extend(sorted(a.glob("*.json")) if a.is_dir() else [a])
    if not paths:
        print("no exported chapters found")
        return 1
    failed = False
    for path in paths:
        chapter = json.loads(path.read_text(encoding="utf-8"))
        errors = verify_chapter(chapter)
        n = sum(len(c["items"]) for c in chapter["concepts"])
        for e in errors:
            print("FAIL", e)
        print(f"{chapter['chapter']}: {n} items checked, {len(errors)} problem(s)")
        failed = failed or bool(errors)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
