import re, json, sys

def clean_js_to_json(js_str):
    js_str = re.sub(r'//.*', '', js_str)
    js_str = re.sub(r'([\{\,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)(\s*:)', r'\1"\2"\3', js_str)
    js_str = re.sub(r',\s*\}', '\n}', js_str)
    js_str = re.sub(r',\s*\]', '\n]', js_str)
    return js_str

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

match = re.search(r'stops:\s*(\[.*?\]),?\s*// 2\. LINEE', text, re.DOTALL)
if not match:
    match = re.search(r'stops:\s*(\[.*\])', text, re.DOTALL)
stops_str = match.group(1)
json_str = clean_js_to_json(stops_str)

try:
    stops = json.loads(json_str)
except Exception as e:
    print("Errore parsing JSON:", e)
    sys.exit(1)

def time_to_mins(t):
    if isinstance(t, str):
        ts = t
    else:
        ts = t.get('time', '00:00')
    parts = ts.split(':')
    return int(parts[0]) * 60 + int(parts[1])

def get_var(t):
    if isinstance(t, str): return None
    v = t.get('variation')
    return str(v).strip() if v else None

def get_time(t):
    if isinstance(t, str): return t
    return t.get('time')

new_stops = []
for s in stops:
    new_stops.append({
        "id": s["id"],
        "name": s["name"],
        "lat": s["lat"],
        "lng": s["lng"]
    })

lines_map = {}
events = []

for stop in stops:
    routes = stop.get('routes', [])
    for route in routes:
        line = route.get('line')
        dest = route.get('destination')
        legend = route.get('legend', {})
        
        if line not in lines_map:
            color = '#10b981'
            if line == 'Z553': color = '#e11d48'
            elif line == 'Z551': color = '#3b82f6'
            elif line == 'Z559': color = '#f59e0b'
            
            lines_map[line] = {
                "id": line,
                "name": line,
                "description": f"Linea {line}",
                "color": color,
                "legend": {},
                "dayTypes": {
                    "feriale_scolastico": [],
                    "feriale_non_scolastico": [],
                    "sabato_scolastico": [],
                    "sabato_non_scolastico": [],
                    "festivo": []
                }
            }
            
        times_dict = route.get('times', {})
        for day_type, times_array in times_dict.items():
            for t in times_array:
                events.append({
                    "stopId": stop["id"],
                    "line": line,
                    "dest": dest,
                    "dayType": day_type,
                    "time": get_time(t),
                    "mins": time_to_mins(t),
                    "variation": get_var(t),
                    "legend": legend
                })

groups = {}
for e in events:
    key = f"{e['line']}::{e['dayType']}::{e['dest']}"
    if key not in groups:
        groups[key] = []
    groups[key].append(e)

for key, group_events in groups.items():
    parts = key.split('::')
    line, day_type, dest = parts[0], parts[1], parts[2]
    
    group_events.sort(key=lambda x: x['mins'])
    
    trips = []
    
    while len(group_events) > 0:
        current = group_events.pop(0)
        trip = [current]
        last_event = current
        used_stops = set([current['stopId']])
        
        while True:
            best_candidate = None
            best_score = float('-inf')
            
            for e in group_events:
                if e['mins'] >= last_event['mins'] and e['mins'] <= last_event['mins'] + 50 and e['stopId'] not in used_stops:
                    score = -(e['mins'] - last_event['mins'])
                    if e['variation'] == last_event['variation']:
                        score += 100
                    elif not e['variation'] and not last_event['variation']:
                        score += 50
                    elif e['variation'] and last_event['variation'] and e['variation'] != last_event['variation']:
                        score -= 200
                        
                    if score > best_score:
                        best_score = score
                        best_candidate = e
                        
            if not best_candidate or best_score < -150:
                break
                
            trip.append(best_candidate)
            last_event = best_candidate
            used_stops.add(best_candidate['stopId'])
            group_events.remove(best_candidate)
            
        if len(trip) > 0:
            trips.append(trip)
            
    prefix = "".join([w[0].upper() for w in day_type.split('_')])
    for idx, t_stops in enumerate(trips):
        for ts in t_stops:
            lines_map[line]['legend'].update(ts['legend'])
            
        clean_dest = re.sub(r'[^a-zA-Z0-9]', '', dest)[:4]
        trip_id = f"{line}_{prefix}_{clean_dest}_{idx+1}"
        
        final_stops = []
        for ts in t_stops:
            res = {"stopId": ts['stopId'], "time": ts['time']}
            if ts['variation']: res['variation'] = ts['variation']
            final_stops.append(res)
            
        lines_map[line]['dayTypes'][day_type].append({
            "tripId": trip_id,
            "destination": dest,
            "stops": final_stops
        })

final_lines = list(lines_map.values())

output_js = f"""const stavData = {{
    // 1. ANAGRAFICA FERMATE (Flat List)
    stops: {json.dumps(new_stops, indent=4)},

    // 2. LINEE E CORSE (Trip-centric)
    lines: {json.dumps(final_lines, indent=4)}
}};

// Compatibilità
if (typeof window !== "undefined") {{
    window.stavData = stavData;
}}
if (typeof module !== "undefined") {{
    module.exports = stavData;
}}
"""

with open('data_new.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Conversione completata in data_new.js!")
