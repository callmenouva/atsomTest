import re, json, sys

def clean_js_to_json(js_str):
    # Rimuovi commenti lineari (non sicurissimo se ci sono URLs, ma data.js non ne ha)
    js_str = re.sub(r'//.*', '', js_str)
    
    # Aggiungi quotes alle chiavi
    js_str = re.sub(r'([\{\,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)(\s*:)', r'\1"\2"\3', js_str)
    
    # Rimuovi trailing commas
    js_str = re.sub(r',\s*\}', '\n}', js_str)
    js_str = re.sub(r',\s*\]', '\n]', js_str)
    
    return js_str

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

match = re.search(r'const stavData\s*=\s*\{\s*stops:\s*(\[.*\])\s*\};?', text, re.DOTALL)
if not match:
    print("Formato stavData non trovato")
    sys.exit(1)

stops_str = match.group(1)
json_str = clean_js_to_json(stops_str)

try:
    stops = json.loads(json_str)
    print("OK, stops parsati:", len(stops))
except Exception as e:
    print("Errore parsing JSON:", e)
    # Mostriamo dove ha fallito (ultimi/prossimi 50 chars)
    import traceback
    traceback.print_exc()
    # Write the problematic string to a temp file for inspection
    with open('failed_json.txt', 'w', encoding='utf-8') as f2:
        f2.write(json_str)

