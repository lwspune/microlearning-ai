"""C07 Diazonium salts: named answers. Aniline with NaNO2 and dil. HCl at 273-278 K gives benzenediazonium chloride;
the azo group is -N=N- between two carbons; ethanol (or H3PO2) replaces N2 by H; CuCN/KCN (Sandmeyer) replaces it by CN;
coupling with phenol in alkaline solution gives p-hydroxyazobenzene, an orange dye.
M1 thinks the reaction runs warm, giving phenol; M2 treats aniline like a secondary amine, giving the N-nitroso compound;
M3 thinks NaNO2 nitrates the ring; M4 takes an N-N single bond for azo; M5 takes N-N=O for azo; M6 thinks two amino
groups make an azo compound; M7 thinks ethanol gives the ether; M8 confuses ethanol with warm water; M9 thinks the ethyl
group goes onto the ring; M10 thinks the reagent restores aniline; M11 confuses the nitrile with the isocyanide; M12
thinks the cyanide is hydrolysed at once; M13 thinks the phenoxide replaces N2; M14 thinks chloride replaces N2; M15
thinks coupling goes ortho."""
from ._table import table_models

ANSWERS = {
    "diazotise": {"key": "diazonium", "C07-M1": "phenol", "C07-M2": "n_nitroso", "C07-M3": "nitrobenzene"},
    "azo": {"key": "hydroxyazobenzene", "C07-M4": "hydrazine", "C07-M5": "nitrosamine", "C07-M6": "ethylenediamine"},
    "ethanol": {"key": "benzene", "C07-M7": "phenetole", "C07-M8": "phenol", "C07-M9": "ethylbenzene"},
    "cyanide": {"key": "benzonitrile", "C07-M10": "aniline", "C07-M11": "isocyanide", "C07-M12": "benzoic_acid"},
    "coupling": {"key": "p_hydroxyazobenzene", "C07-M13": "diphenyl_ether", "C07-M14": "chlorobenzene",
                 "C07-M15": "o_hydroxyazobenzene"},
}
MODELS = table_models("C07", ANSWERS, 15)
