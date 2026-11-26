"""C08 Fertilisers, cement, glass and paints: named answers. Urea and ammonium sulfate supply nitrogen, superphosphate
of lime phosphorus, potash potassium. Portland cement is made by heating limestone and clay; gypsum is added to slow
its setting. Ordinary glass is sand fused with soda ash and limestone. A paint is a pigment (colour) in a binder (a
drying oil such as linseed oil), thinned with turpentine, with a drier to speed drying.
M1 says phosphorus; M2 potassium; M3 calcium; M4 nitrogen; M5 potassium; M6 sulfur; M7 sand alone; M8 cement's raw
materials; M9 bauxite; M10 thinks gypsum speeds setting; M11 colours it; M12 waterproofs it; M13 calls the oil the
pigment; M14 the thinner; M15 the drier."""
from ._mix import mixed_models

TABLE = {
    "urea": {"key": "nitrogen", "C08-M1": "phosphorus", "C08-M2": "potassium", "C08-M3": "calcium"},
    "superphosphate": {"key": "phosphorus", "C08-M4": "nitrogen", "C08-M5": "potassium", "C08-M6": "sulfur"},
    "glass": {"key": "sand_soda_lime", "C08-M7": "sand_only", "C08-M8": "limestone_clay", "C08-M9": "bauxite"},
    "gypsum": {"key": "slows_setting", "C08-M10": "speeds_setting", "C08-M11": "adds_colour", "C08-M12": "waterproofs"},
    "linseed": {"key": "binder", "C08-M13": "pigment", "C08-M14": "thinner", "C08-M15": "drier"},
}
MODELS = mixed_models("C08", TABLE, 15)
