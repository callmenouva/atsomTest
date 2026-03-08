import json
import re

try:
    with open('data.js', 'r', encoding='utf-8') as f:
        data = f.read()

    # Estrae il blocco della corsa 401
    start_idx = data.find('{"tripId": "401"')
    if start_idx == -1:
         # Proviamo con spaziatura diversa
         start_idx = data.find('"tripId": "401"')
         start_idx = data.rfind('{', 0, start_idx)
         
    legend_idx = data.find('"legend": {', start_idx)
    end_idx = data.find('}', data.find('}', legend_idx) + 1) + 1
    
    trip401_str = data[start_idx:end_idx]
    
    # Pulizia basilare per estrarre l'oggetto JSON
    # Aggiungi quote alle keys
    json_str = re.sub(r'([{,]\s*)([a-zA-Z0-9_]+)\s*:', r'\1"\2":', trip401_str)
    # Rimuovi trailing commas
    json_str = re.sub(r',\s*}', '}', json_str)
    json_str = re.sub(r',\s*\]', ']', json_str)
    
    trip401 = json.loads(json_str)
    
    # Crea corsa 402 invertita
    import copy
    trip402 = copy.deepcopy(trip401)
    trip402['tripId'] = '402'
    trip402['destination'] = 'Abbiategrasso FS'
    trip402['stops'].reverse()
    
    current_mins = 8 * 60 + 30 # 08:30 (scaglionata dalla precedente)
    for stop in trip402['stops']:
        h = str(current_mins // 60).zfill(2)
        m = str(current_mins % 60).zfill(2)
        stop['time'] = f"{h}:{m}"
        current_mins += 2
        
        if 'variation' in stop:
             if 'Milano' in stop['variation']:
                 stop['variation'] = 'Direzione Gudo Visconti'
             else:
                 stop['variation'] = 'Direzione Milano'
                 
    trip402['legend'] = {
        'Direzione Milano': 'A',
        'Direzione Gudo Visconti': 'B'
    }
    
    # Formattazione per reinserimento JS (indenti etc)
    trip402_str = json.dumps(trip402, indent=28).replace('\\n', '\n')
    
    # Sistemiamo il JSON malformato dell'utente e inseriamo la 402
    # L'utente ha inserito "sabato_scolastico": [ { ... } ], 
    # Manca la virgola tra il 401 e il nuovo, ecc.
    
    # In data.js l'oggetto finisce in trip401_str.
    # Lo rimpiazziamo con la sua versione corretta json_str + la copia 402.
    # Così garantiamo JSON valido.
    
    formatted_trip401 = json.dumps(trip401, indent=28).replace('\\n', '\n')
    # Regolazione identazione
    split_401 = formatted_trip401.split('\n')
    split_401 = [line.lstrip() for line in split_401]
    
    def re_indent(obj):
         s = json.dumps(obj)
         # Per un embedding veloce su data.js non standard formattiamo le robe vitali
         return s
         
    # Una via piu pulita dato che data.js è JS object non JSON puro:
    # Usiamo il multireplace file content standard dopo lo script oppure formattiamo custom
    
    new_data = data.replace(trip401_str, trip401_str + ',\n                    ' + json.dumps(trip402, indent=24))
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_data)
        
    print("Success")

except Exception as e:
    import traceback
    traceback.print_exc()
