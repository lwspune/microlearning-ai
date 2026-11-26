"""C03 Preparing alkenes and their isomers: named answers. Alcoholic KOH removes HX (1-chloropropane -> propene); hot
60% H2SO4 dehydrates propan-2-ol to propene; elimination favours the more substituted alkene (2-bromobutane -> but-2-ene,
Saytzeff); zinc removes Br2 from 1,2-dibromopropane, giving propene. CH3-C(C2H5)=C(C2H5)-CH3 shows geometrical
isomerism; alkenes with =CH2 or two identical groups on one carbon do not.
M1 expects reduction; M2 removes two HX; M3 expects substitution by OH; M4 expects reduction; M5 expects an ether; M6
expects oxidation; M7 picks the less substituted alkene; M8 expects reduction; M9 expects substitution; M10 picks a =CH2
alkene; M11 picks an alkene with two methyls on one carbon; M12 picks none; M13 expects reduction; M14 removes too much;
M15 expects a diol."""
from ._mix import mixed_models

TABLE = {
    "chloropropane": {"key": "propene", "C03-M1": "propane", "C03-M2": "propyne", "C03-M3": "propanol"},
    "dehydration": {"key": "propene", "C03-M4": "propane", "C03-M5": "ether", "C03-M6": "propanal"},
    "saytzeff": {"key": "but_2_ene", "C03-M7": "but_1_ene", "C03-M8": "butane", "C03-M9": "butan_2_ol"},
    "geometric": {"key": "option_c", "C03-M10": "option_a", "C03-M11": "option_b", "C03-M12": "none"},
    "dehalogenation": {"key": "propene", "C03-M13": "propane", "C03-M14": "propyne", "C03-M15": "diol"},
}
MODELS = mixed_models("C03", TABLE, 15)
