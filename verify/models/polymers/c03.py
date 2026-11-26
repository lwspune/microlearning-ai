"""C03 Addition and condensation polymerization: named answers. Addition (chain growth): unsaturated monomers join with
no loss of atoms, usually by free radicals from an initiator such as benzoyl peroxide, in three steps (initiation,
propagation, termination): polythene, PVC, Teflon, polystyrene. Condensation (step growth): bifunctional monomers join,
losing a small molecule (water, HCl, methanol) each step: nylons, terylene (PET), Bakelite.
M1 thinks every polymer forms by addition; M2 confuses polymerization with alkylation; M3 thinks water is added; M4 thinks
any polymer with a long carbon chain grows by addition; M5 thinks two monomers heated together add; M6 thinks
cross-linked polymers grow by addition; M7 confuses free-radical with cationic initiation; M8 thinks water starts the
chain; M9 thinks every addition polymerization uses a Ziegler-Natta catalyst; M10 puts propagation first; M11 puts
termination before propagation; M12 mixes in condensation; M13 confuses condensation with addition; M14 thinks
condensation needs free radicals; M15 thinks condensation needs C=C bonds."""
from ._table import table_models

ANSWERS = {
    "pet": {"key": "condensation", "C03-M1": "addition", "C03-M2": "alkylation", "C03-M3": "hydration"},
    "chain": {"key": "polythene", "C03-M4": "nylon66", "C03-M5": "terylene", "C03-M6": "bakelite"},
    "initiator": {"key": "radical_peroxide", "C03-M7": "proton", "C03-M8": "water", "C03-M9": "ziegler_natta"},
    "steps": {"key": "init_prop_term", "C03-M10": "prop_init_term", "C03-M11": "init_term_prop", "C03-M12": "cond_prop_term"},
    "condensation": {"key": "loses_small_molecule", "C03-M13": "no_atoms_lost", "C03-M14": "free_radical", "C03-M15": "needs_c_c_double"},
}
MODELS = table_models("C03", ANSWERS, 15)
