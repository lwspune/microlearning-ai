"""C06 Structural isomerism: answer models (the key, and one per misconception).

An item gives two compounds with the same formula, params["a"] and params["b"], written like the book:
"[Co(NH3)5(NO2)]Cl2", "[Cr(H2O)5Cl]Cl2.H2O", "[Cu(NH3)4][PtCl4]". The key classifies the pair from the
definitions:
  coordination: both compounds are a complex cation and a complex anion, the ligands swapped between metals;
  linkage:      the same ligands, ions and water, except that an ambidentate ligand binds through another atom
                (NO2 / ONO, SCN / NCS);
  solvate:      water moves between the coordination sphere and water of crystallisation;
  ionisation:   otherwise, an anion is swapped between the coordination sphere and the ionisation sphere.
Each misconception applies its own (wrong) naming rule to the true kind; a model raises ValueError where
its rule gives the key or does not apply.
"""
import re
from collections import Counter

from sympy import Symbol

# Ambidentate pairs: the same ligand bound through a different donor atom.
SAME = {"ONO": "NO2", "NCS": "SCN"}

_LIG = r"NH3|H2O|NO2|ONO|SCN|NCS|CN|en|SO4|Cl|Br|F"
_TOKEN = re.compile(r"\((%s)\)(\d*)|(%s)(\d*)" % (_LIG, _LIG))
_METAL = re.compile(r"^(Co|Cr|Pt|Cu|Fe|Ni|Mn)")


def _ligands(body):
    m = _METAL.match(body)
    if not m:
        raise ValueError(f"no metal in {body}")
    rest, out, pos = body[m.end():], Counter(), 0
    while pos < len(rest):
        t = _TOKEN.match(rest, pos)
        if not t:
            raise ValueError(f"cannot read {rest[pos:]}")
        name = t.group(1) or t.group(3)
        out[name] += int(t.group(2) or t.group(4) or 1)
        pos = t.end()
    return m.group(1), out


def parse(formula):
    """-> (spheres [(metal, Counter)], ions outside Counter, water of crystallisation)."""
    main, _, water = formula.partition(".")
    n_water = int(water[:-3] or 1) if water else 0
    spheres = [_ligands(b) for b in re.findall(r"\[([^\]]+)\]", main)]
    outside = Counter()
    for t in _TOKEN.finditer(re.sub(r"\[[^\]]+\]", " ", main)):
        outside[t.group(1) or t.group(3)] += int(t.group(2) or t.group(4) or 1)
    return spheres, outside, n_water


def _norm(c):
    out = Counter()
    for k, n in c.items():
        out[SAME.get(k, k)] += n
    return out


def kind(p):
    a, b = parse(p["a"]), parse(p["b"])
    if len(a[0]) == 2 and len(b[0]) == 2:
        return "coordination"
    (sa, oa, wa), (sb, ob, wb) = a, b
    la, lb = sa[0][1], sb[0][1]
    if oa == ob and wa == wb and la != lb and _norm(la) == _norm(lb):
        return "linkage"
    if la["H2O"] != lb["H2O"]:
        return "solvate"
    return "ionisation"


def key(v, p):
    return Symbol(kind(p))


def _rule(mapping):
    def model(v, p):
        k = kind(p)
        if k not in mapping:
            raise ValueError("does not apply to this pair")
        return Symbol(mapping[k])
    return model


MODELS = {
    "key": key,
    # Thinks linkage isomers are any pair where a ligand changes what it is linked to (another metal, or the
    # outside of the bracket), not a change of donor atom.
    "C06-M1": _rule({"ionisation": "linkage", "coordination": "linkage", "solvate": "linkage"}),
    # Thinks any change inside the coordination sphere makes coordination isomers.
    "C06-M2": _rule({"ionisation": "coordination", "linkage": "coordination", "solvate": "coordination"}),
    # Calls every exchange across the bracket ionisation, without checking whether water or a second complex
    # ion is what moved.
    "C06-M3": _rule({"solvate": "ionisation", "coordination": "ionisation"}),
    # Confuses structural isomers with geometric (cis-trans) isomers.
    "C06-M4": _rule({k: "geometric" for k in ("ionisation", "linkage", "coordination", "solvate")}),
    # Takes nitro and nitrito (or thiocyanato-S and -N) as different ligands, so the pair are not isomers.
    "C06-M5": _rule({"linkage": "not_isomers"}),
}
