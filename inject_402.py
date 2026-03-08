import json
import codecs

data_path = 'data.js'
with codecs.open(data_path, 'r', 'utf-8') as f:
    text = f.read()

# Cerchiamo l'apertura precisa della corsa 401 come l'ha inserita l'utente
search = '{\n                        "tripId": "401",'

idx_start = text.find(search)
if idx_start == -1:
    print("Non trovo la 401 col pattern")
    exit(1)

idx_legend = text.find('"legend": {', idx_start)
idx_end = text.find('}', text.find('}', idx_legend) + 1) + 1

original_401 = text[idx_start:idx_end]

# Generiamo la stringa hardcoded per la 402 (fatta a mano, validata)
str_402 = """{
                        "tripId": "402",
                        "destination": "Abbiategrasso FS",
                        "stops": [
                            {
                                "stopId": "stop_mil_bis",
                                "time": "08:30"
                            },
                            {
                                "stopId": "stop_mil_bis/cic",
                                "time": "08:31"
                            },
                            {
                                "stopId": "stop_mil_lore",
                                "time": "08:33"
                            },
                            {
                                "stopId": "stop_cors_17",
                                "time": "08:34"
                            },
                            {
                                "stopId": "stop_cors_vig/liberazione",
                                "time": "08:35"
                            },
                            {
                                "stopId": "stop_cors_ces",
                                "time": "08:36"
                            },
                            {
                                "stopId": "stop_cors_italia",
                                "time": "08:37"
                            },
                            {
                                "stopId": "stop_ces_vig/gramsci",
                                "time": "08:38"
                            },
                            {
                                "stopId": "stop_trez_vinci/cellini",
                                "time": "08:41"
                            },
                            {
                                "stopId": "stop_trez_colombo/moro",
                                "time": "08:42"
                            },
                            {
                                "stopId": "stop_trez_colombo/curiel",
                                "time": "08:43"
                            },
                            {
                                "stopId": "stop_trez_vinci/poste",
                                "time": "08:44"
                            },
                            {
                                "stopId": "stop_trez_vinci/centro",
                                "time": "08:45"
                            },
                            {
                                "stopId": "stop_trez_vinci/pergolesi",
                                "time": "08:46"
                            },
                            {
                                "stopId": "stop_trez_vinci/kennedy",
                                "time": "08:47"
                            },
                            {
                                "stopId": "stop_trez_zano",
                                "time": "08:48"
                            },
                            {
                                "stopId": "stop_gagg_fs",
                                "time": "08:49"
                            },
                            {
                                "stopId": "stop_gagg_bett2",
                                "time": "08:51"
                            },
                            {
                                "stopId": "stop_gagg_rosa",
                                "time": "08:53"
                            },
                            {
                                "stopId": "stop_gagg_bett",
                                "time": "08:54"
                            },
                            {
                                "stopId": "stop_verm_nav",
                                "time": "08:55"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "08:57",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:58",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:59",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_gudo_corn",
                                "time": "09:03"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:06",
                                "variation": "Direzione Abbiategrasso"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:07",
                                "variation": "Direzione Abbiategrasso"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "09:08",
                                "variation": "Direzione Abbiategrasso"
                            },
                            {
                                "stopId": "stop_abb_fs",
                                "time": "09:18"
                            }
                        ],
                        "legend": {
                            "Direzione Gudo Visconti": "A",
                            "Direzione Abbiategrasso": "B"
                        }
                    }"""

combined_block = original_401 + ',\n                    ' + str_402
new_text = text.replace(original_401, combined_block)

with codecs.open(data_path, 'w', 'utf-8') as f:
    f.write(new_text)
    
print("Corsa 402 generata e array JSON rimesso in piedi.")
