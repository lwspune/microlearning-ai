"""C05 Allotropes of carbon and phosphorus: named answers. Carbon: diamond (each C sp3-bonded to four others in a 3D
network: hard, insulating), graphite (sp2 layers with one delocalised electron per C: soft, conducting), fullerenes (C60,
a cage of pentagons and hexagons). Emerald is a silicate gem, not carbon. White phosphorus (discrete P4, strained 60
degree angles) is far more reactive than polymeric red phosphorus.
M1 doubts the bucky ball; M2 doubts diamond; M3 doubts graphite; M4 credits ions in graphite; M5 calls graphite a metal;
M6 calls graphite sp3; M7 gives diamond delocalised electrons; M8 gives diamond layers; M9 gives diamond ionic bonds; M10
puts the strain in red phosphorus; M11 calls white phosphorus polymeric; M12 gives P4 triple bonds; M13 calls C60 a chain;
M14 calls it layered; M15 calls it a hydrocarbon."""
from ._mix import mixed_models

TABLE = {
    "not_carbon": {"key": "emerald", "C05-M1": "bucky_ball", "C05-M2": "diamond", "C05-M3": "graphite"},
    "graphite": {"key": "delocalised_sp2", "C05-M4": "ions", "C05-M5": "metal", "C05-M6": "sp3"},
    "diamond": {"key": "sp3_network", "C05-M7": "delocalised", "C05-M8": "layers", "C05-M9": "ionic"},
    "white_p": {"key": "strained_p4", "C05-M10": "red_strained", "C05-M11": "white_polymeric", "C05-M12": "triple_bonds"},
    "c60": {"key": "cage", "C05-M13": "chain", "C05-M14": "layered", "C05-M15": "hydrocarbon"},
}
MODELS = mixed_models("C05", TABLE, 15)
