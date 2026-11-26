"""C04 Atomic and ionic radii: named answers. Radii grow down a group (a new shell each period: Cl 99 < Br 114 < I 133
pm) and shrink across a period; a cation is smaller than its atom and shrinks as its charge rises (Fe2+ > Fe3+); for
isoelectronic ions more protons mean a smaller ion (F- 133 > Na+ 98; N3- > F-): Na > Na+ > Mg2+.
M1 thinks nuclear charge falls down a group; M2 credits atomic mass; M3 credits electron pairing; M4 thinks F- has more
electrons; M5 credits Na being a metal; M6 gives F- an extra shell; M7 thinks cations are larger than atoms; M8 thinks
higher charge means larger; M9 thinks more protons mean larger; M10 thinks higher charge means larger; M11 thinks ions of
one element are equal; M12 thinks data are needed; M13 thinks larger negative charge means smaller; M14 thinks
isoelectronic ions are equal; M15 thinks different elements cannot be compared."""
from ._mix import mixed_models

TABLE = {
    "halogens": {"key": "new_shell", "C04-M1": "charge_falls", "C04-M2": "mass", "C04-M3": "pairing"},
    "f_na": {"key": "more_protons", "C04-M4": "f_more_electrons", "C04-M5": "na_metal", "C04-M6": "f_extra_shell"},
    "na_series": {"key": "na_naplus_mg", "C04-M7": "naplus_na_mg", "C04-M8": "mg_naplus_na", "C04-M9": "na_mg_naplus"},
    "iron": {"key": "fe2_larger", "C04-M10": "fe3_larger", "C04-M11": "equal", "C04-M12": "need_data"},
    "n_f": {"key": "f_minus", "C04-M13": "n3_minus", "C04-M14": "equal", "C04-M15": "cannot_compare"},
}
MODELS = mixed_models("C04", TABLE, 15)
