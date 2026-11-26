"""C06 Bakelite and other resins: named answers. Phenol and formaldehyde (acid or base catalyst) give o- and
p-hydroxymethylphenols, then linear Novolac, which on heating with more formaldehyde cross-links to Bakelite, a
thermosetting resin. Melamine-formaldehyde resin makes unbreakable crockery. Glyptal (from ethylene glycol and phthalic
acid) is used in paints and lacquers.
M1 swaps formaldehyde for benzaldehyde; M2 for acetaldehyde; M3 swaps phenol for benzyl alcohol; M4 thinks Novolac is
the final cross-linked resin; M5 thinks it is a polyamide; M6 thinks it is a rubber; M7 credits weak van der Waals
forces; M8 thinks Bakelite is linear; M9 thinks it has no oxygen; M10 confuses melamine with rubber; M11 with nylon
fibres; M12 with Teflon; M13 confuses glyptal with Nomex; M14 with Thiokol; M15 with Saran."""
from ._table import table_models

ANSWERS = {
    "bakelite": {"key": "formaldehyde_phenol", "C06-M1": "benzaldehyde_phenol", "C06-M2": "acetaldehyde_phenol",
                 "C06-M3": "formaldehyde_benzyl_alcohol"},
    "novolac": {"key": "linear_intermediate", "C06-M4": "final_resin", "C06-M5": "polyamide", "C06-M6": "rubber"},
    "thermoset": {"key": "network", "C06-M7": "van_der_waals", "C06-M8": "linear", "C06-M9": "no_oxygen"},
    "melamine": {"key": "crockery", "C06-M10": "tyres", "C06-M11": "clothing", "C06-M12": "non_stick"},
    "paint": {"key": "glyptal", "C06-M13": "nomex", "C06-M14": "thiokol", "C06-M15": "saran"},
}
MODELS = table_models("C06", ANSWERS, 15)
