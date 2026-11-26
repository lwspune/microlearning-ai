"""C06 Electrophilic substitution in aniline: named answers. NH2 strongly activates the ortho and para positions;
bromine water gives 2,4,6-tribromoaniline at once, with no catalyst; for one para product the NH2 is first acetylated,
then substituted, then hydrolysed; in strong acid aniline becomes the anilinium ion, which directs meta, so nitration
gives much m-nitroaniline; heating with conc. H2SO4 gives sulphanilic acid; with AlCl3 the NH2 forms a salt, so
Friedel-Crafts reactions fail.
M1 stops at one bromine, as for benzene; M2 thinks NH2 directs meta; M3 thinks a Lewis acid is needed; M4 forgets that
NH2 over-activates the ring; M5 thinks the anilinium ion still directs para; M6 thinks HNO3 turns NH2 into NO2; M7 blames
crowding; M8 thinks NH2 is replaced; M9 thinks the salt does not change on heating; M10 thinks NH2 deactivates the ring;
M11 thinks AlCl3 oxidises aniline."""
from ._table import table_models

ANSWERS = {
    "bromine": {"key": "tribromo", "C06-M1": "p_bromo", "C06-M2": "m_bromo", "C06-M3": "no_reaction"},
    "para": {"key": "acetylate_first", "C06-M4": "bromine_water", "C06-M3": "br2_febr3", "C06-M5": "protonate_first"},
    "nitration": {"key": "anilinium_meta", "C06-M2": "nh2_meta", "C06-M6": "nh2_oxidised", "C06-M7": "crowding"},
    "sulphanilic": {"key": "sulphanilic", "C06-M2": "meta_acid", "C06-M8": "benzenesulfonic", "C06-M9": "salt_only"},
    "friedel": {"key": "lewis_salt", "C06-M10": "nh2_deactivates", "C06-M7": "crowding", "C06-M11": "oxidised"},
}
MODELS = table_models("C06", ANSWERS, 11)
