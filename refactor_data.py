import re, json, sys

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Trova dove finiscono gli stops e iniziano le lines
match = re.search(r'const stavData\s*=\s*(.*?);\s*(if\s*\(typeof window|\Z)', text, re.DOTALL)
if not match:
    # Try another approach using string split
    pass

def dict_to_js(d):
    return json.dumps(d, indent=4)

# We can try to extract just the lines array
lines_match = re.search(r'lines:\s*(\[.*\])\s*\}\s*;?\s*(//\s*Compatibilità)?', text, re.DOTALL)
stops_match = re.search(r'stops:\s*(\[.*?\])\s*,\s*// 2\. LINEE', text, re.DOTALL)

if not lines_match or not stops_match:
    print("Non riesco a parsare la struttura data.js")
    sys.exit(1)
    
lines_json = lines_match.group(1)
stops_json = stops_match.group(1)

# Pulizia commenti JSON e trailing commas se presenti
def clean_json(js_str):
    js_str = re.sub(r'//.*', '', js_str)
    js_str = re.sub(r',\s*\}', '\n}', js_str)
    js_str = re.sub(r',\s*\]', '\n]', js_str)
    return js_str

try:
    stops = json.loads(clean_json(stops_json))
    lines = json.loads(clean_json(lines_json))
except Exception as e:
    print("Errore JSON:", e)
    sys.exit(1)

# Refactor
for line in lines:
    line_legend = {}
    
    # Extract legends
    for day_type, trips in line.get('dayTypes', {}).items():
        for trip in trips:
            if 'legend' in trip:
                line_legend.update(trip['legend'])
                del trip['legend']
                
    line['legend'] = line_legend
    
# Re-generate data.js
output_js = f"""const stavData = {{
    // 1. ANAGRAFICA FERMATE (Flat List)
    stops: {json.dumps(stops, indent=4)},

    // 2. LINEE E CORSE (Trip-centric)
    lines: {json.dumps(lines, indent=4)}
}};

// Compatibilità
if (typeof window !== "undefined") {{
    window.stavData = stavData;
}}
if (typeof module !== "undefined") {{
    module.exports = stavData;
}}
"""

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Data refactored successfully.")
