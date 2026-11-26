"""C02 Functional groups and homologous series: named answers. Alcohols: CnH2n+1OH. Successive members differ by CH2
(14 u). The third higher homologue of propanoic acid is hexanoic acid. CH3COCH3 has a ketone group. Aniline is an aromatic
carbocyclic (homocyclic) compound: its N is outside the ring.
M1 adds OH to the alkane formula; M2 uses the alkene's H count; M3 uses the alkyne's H count; M4 says CH3; M5 says one C
only; M6 says H2; M7 counts two steps; M8 counts one step; M9 changes the functional group; M10 says aldehyde; M11 says
ether; M12 says carboxylic acid; M13 calls aniline heterocyclic; M14 alicyclic; M15 acyclic."""
from ._mix import mixed_models

TABLE = {
    "alcohols": {"key": "cn_h2n1_oh", "C02-M1": "cn_h2n2_oh", "C02-M2": "cn_h2n_oh", "C02-M3": "cn_h2n_minus1_oh"},
    "differ": {"key": "ch2", "C02-M4": "ch3", "C02-M5": "one_c", "C02-M6": "h2"},
    "homologue": {"key": "hexanoic", "C02-M7": "pentanoic", "C02-M8": "butanoic", "C02-M9": "hexanal"},
    "acetone": {"key": "ketone", "C02-M10": "aldehyde", "C02-M11": "ether", "C02-M12": "carboxylic"},
    "aniline": {"key": "carbocyclic_aromatic", "C02-M13": "heterocyclic", "C02-M14": "alicyclic", "C02-M15": "acyclic"},
}
MODELS = mixed_models("C02", TABLE, 15)
