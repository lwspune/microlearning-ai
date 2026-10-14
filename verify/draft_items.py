"""Drafts check items from the answer models, so option values are never
computed by hand and an option's text always matches its value.

Usage: python verify/draft_items.py <spec.py>
Prints TypeScript `items: [...]` entries to paste into the concept file.
`npm run content:verify` then re-checks them independently.

A spec file defines CHAPTER (e.g. "complex_numbers") and ITEMS, a list of:
  dict(
    id="C02-Q1",
    stem=r"$i^{43} = ?$",
    kind="value",                      # value | locus | point (see ItemVerify)
    inputs={"n": "43"},                 # sympy expressions, as strings
    params={"op": "pow"},               # optional
    ask=None,                           # optional projection, an expression in z
    models=["key", "C02-M1", "C02-M2", "C02-M3"],  # key first, then one per distractor
    text={"C02-M1": "the real axis"},   # optional per-model text overrides (else LaTeX of the value)
    fmt="pair",                         # optional: pair (x = .., y = ..) | point ((x, y)) | intercepts | pm (±(..)) | quadrant
    value={"key": "x-2"},               # optional per-model value overrides (loci/points)
    source='{ kind: "authored" }',      # optional, TypeScript literal
  )
The correct option's letter varies with the item id, so it isn't always A.
"""
import hashlib
import importlib
import importlib.util
import sys
from pathlib import Path

from sympy import I, latex, simplify, symbols, sympify, expand

sys.path.insert(0, str(Path(__file__).parent))

KEYS = ["A", "B", "C", "D"]


def _ts_string(s: str) -> str:
    """A TypeScript String.raw template literal (the content files use `t`)."""
    assert "`" not in s and "${" not in s, f"can't embed {s!r} in a template literal"
    return f"t`{s}`"


_XR, _YR = symbols("x y", real=True)


def cartesian_text(poly) -> str:
    """A locus polynomial (= 0) as completed squares for a circle, x = c / y = mx + c for a line."""
    from sympy import Poly

    p = Poly(expand(poly), _XR, _YR)
    if p.is_zero:
        return "every point of the plane"
    if p.total_degree() == 2:
        p = Poly(p.as_expr() / p.coeff_monomial(_XR**2), _XR, _YR)
        h, k = -p.coeff_monomial(_XR) / 2, -p.coeff_monomial(_YR) / 2
        rhs = simplify(h**2 + k**2 - p.coeff_monomial(1))
        sq = lambda v, c: f"{latex(v)}^2" if c == 0 else f"\\left({latex(v - c)}\\right)^2"
        return f"${sq(_XR, h)} + {sq(_YR, k)} = {latex(rhs)}$"
    cx, cy, c0 = p.coeff_monomial(_XR), p.coeff_monomial(_YR), p.coeff_monomial(1)
    if cy == 0:
        return f"$x = {latex(-c0 / cx)}$"
    return f"$y = {latex(simplify(-cx / cy * _XR - c0 / cy))}$"


def polar_text(val) -> str:
    """LaTeX r(cos θ + i sin θ) for a value. θ is matched exactly against multiples
    of π/24 (sympy often can't simplify arg() of a sum of surds) and the match is
    confirmed symbolically; r is de-nested, so √(6 + 4√2) prints as 2 + √2."""
    from sympy import Abs, N, Rational, arg, cos, pi, sin, sqrtdenest

    r = sqrtdenest(simplify(Abs(val)))
    k = round(float(N(arg(val))) / float(N(pi)) * 24)
    th = Rational(k, 24) * pi
    assert simplify(val - r * (cos(th) + I * sin(th))) == 0, f"no exact angle for {val}"
    # θ = 0 still printed in polar form, so the option doesn't give itself away.
    angle = f"\\left({latex(th)}\\right)" if th < 0 else latex(th)
    trig = f"\\cos {angle} + i\\sin {angle}"
    if r == 1:
        return f"${trig}$"
    radius = f"\\left({latex(r)}\\right)" if r.is_Add else latex(r)
    return f"${radius}\\left({trig}\\right)$"


def option_text(val, fmt) -> str:
    """An option's text, written from its value so the two can't disagree."""
    if fmt == "pair":  # a complex value standing for the pair (x, y)
        r, i = val.as_real_imag()
        return f"$x = {latex(r)},\\ y = {latex(i)}$"
    if fmt == "point":  # a complex value standing for the point (x, y)
        r, i = simplify(val).as_real_imag()
        return f"$({latex(r)}, {latex(i)})$"
    if fmt == "intercepts":  # x-intercept + i * y-intercept: the points (a, 0) and (0, b)
        r, i = simplify(val).as_real_imag()
        return f"$({latex(r)}, 0)$ and $(0, {latex(i)})$"
    if fmt == "pm":  # a +/- pair of roots, given by one member
        return f"$\\pm({latex(val)})$"
    if fmt == "conjpair":  # a conjugate pair a ± bi, given by one member
        r, i = val.as_real_imag()
        part = latex(simplify(abs(i)) * I)
        return f"$\\pm {part}$" if r == 0 else f"${latex(r)} \\pm {part}$"
    if fmt == "polar":  # r(cos θ + i sin θ)
        return polar_text(val)
    if fmt == "cartesian":  # a locus polynomial in x, y
        return cartesian_text(val)
    if fmt == "quadrant":
        return f"Quadrant {['I', 'II', 'III', 'IV'][int(val) - 1]}"
    return f"${latex(val)}$"


def draft(spec_path: str) -> str:
    spec_mod = importlib.util.spec_from_file_location("spec", spec_path)
    spec = importlib.util.module_from_spec(spec_mod)
    spec_mod.loader.exec_module(spec)
    models = importlib.import_module("models." + spec.CHAPTER).MODELS

    out = []
    for it in spec.ITEMS:
        cid = it["id"].split("-")[0]
        cm = models[cid]
        inputs = {k: sympify(v, locals={"I": I}) for k, v in it["inputs"].items()}
        params = it.get("params", {})
        values = {}
        for m in it["models"]:
            v = cm[m](inputs, params)
            if it.get("ask"):
                v = sympify(it["ask"], locals={"I": I, "z": v})
            values[m] = it.get("value", {}).get(m, v)
        # Distinct options (rule 3, value kind); the verifier re-checks every kind.
        if it.get("kind", "value") == "value":
            vs = [simplify(sympify(values[m]) if isinstance(values[m], str) else values[m]) for m in it["models"]]
            for i in range(len(vs)):
                for j in range(i + 1, len(vs)):
                    from verify_content import _same_value

                    assert not _same_value(vs[i], vs[j]), f"{it['id']}: {it['models'][i]} and {it['models'][j]} give the same value {vs[i]}"

        # Vary the correct position deterministically by item id.
        shift = int(hashlib.sha256(it["id"].encode()).hexdigest(), 16) % len(it["models"])
        order = it["models"][shift:] + it["models"][:shift]

        lines = []
        for key, m in zip(KEYS, order):
            v = values[m]
            value_str = v if isinstance(v, str) else str(simplify(v))
            val = simplify(sympify(value_str, locals={"I": I, "x": _XR, "y": _YR}))
            text = it.get("text", {}).get(m) or option_text(val, it.get("fmt"))
            correct = m == "key"
            tag = "" if correct else f', misconceptionId: "{m}"'
            lines.append(
                f'        {{ key: "{key}", text: {_ts_string(text)}, correct: {"true" if correct else "false"}{tag}, value: "{value_str}" }},'
            )
        verify = [f'kind: "{it.get("kind", "value")}"', "inputs: { " + ", ".join(f'{k}: "{v}"' for k, v in it["inputs"].items()) + " }"]
        if params:
            verify.append("params: { " + ", ".join(
                f'{k}: ' + ("[" + ", ".join(f'"{x}"' for x in v) + "]" if isinstance(v, list) else f'"{v}"') for k, v in params.items()
            ) + " }")
        if it.get("ask"):
            verify.append(f'ask: "{it["ask"]}"')
        out.append(
            "    {\n"
            f'      id: "{it["id"]}",\n'
            f'      source: {it.get("source", "{ kind: \"authored\" }")},\n'
            f"      stem: {_ts_string(it['stem'])},\n"
            f"      verify: {{ {', '.join(verify)} }},\n"
            "      options: [\n" + "\n".join(lines) + "\n      ],\n"
            "    },"
        )
    return "\n".join(out)


if __name__ == "__main__":
    print(draft(sys.argv[1]))
