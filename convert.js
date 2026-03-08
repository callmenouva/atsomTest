const fs = require('fs');

const code = fs.readFileSync('c:/Users/mella/Documents/MyATSOM/data.js', 'utf8');
const stavDataString = code.replace('const stavData =', 'module.exports =');
fs.writeFileSync('c:/Users/mella/Documents/MyATSOM/temp_data.js', stavDataString);
const stavData = require('c:/Users/mella/Documents/MyATSOM/temp_data.js');

const timeToMins = t => {
    let ts = typeof t === 'string' ? t : t.time;
    let [h, m] = ts.split(':');
    return parseInt(h) * 60 + parseInt(m);
};

const getVar = t => {
    return typeof t === 'string' ? null : t.variation;
};

const getTimeStr = t => {
    return typeof t === 'string' ? t : t.time;
};

let newStops = stavData.stops.map(s => {
    return {
        id: s.id,
        name: s.name,
        lat: s.lat,
        lng: s.lng
    };
});

let linesMap = {};

// 1. Raccogliere eventi
let events = [];
stavData.stops.forEach(stop => {
    if (!stop.routes) return;
    stop.routes.forEach(route => {
        let line = route.line;
        let dest = route.destination;
        let legend = route.legend || {};

        if (!linesMap[line]) {
            linesMap[line] = {
                id: line,
                name: line,
                description: `Linea ${line}`,
                color: line === 'Z553' ? '#e11d48' : (line === 'Z551' ? '#3b82f6' : '#10b981'), // default colors
                dayTypes: {
                    feriale_scolastico: [],
                    feriale_non_scolastico: [],
                    sabato_scolastico: [],
                    sabato_non_scolastico: [],
                    festivo: []
                }
            };
        }

        Object.keys(route.times).forEach(dayType => {
            let timesArray = route.times[dayType] || [];
            timesArray.forEach(t => {
                events.push({
                    stopId: stop.id,
                    line: line,
                    dest: dest,
                    dayType: dayType,
                    time: getTimeStr(t),
                    mins: timeToMins(t),
                    variation: getVar(t),
                    legend: legend
                });
            });
        });
    });
});

let groups = {};
events.forEach(e => {
    let key = `${e.line}::${e.dayType}::${e.dest}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(e);
});

Object.keys(groups).forEach(key => {
    let [line, dayType, dest] = key.split('::');
    let groupEvents = groups[key];
    groupEvents.sort((a, b) => a.mins - b.mins);

    let trips = [];

    while (groupEvents.length > 0) {
        let current = groupEvents.shift();
        let trip = [current];
        let lastEvent = current;
        let usedStops = new Set([current.stopId]);

        while (true) {
            let bestCandidate = null;
            let bestScore = -Infinity;
            for (let i = 0; i < groupEvents.length; i++) {
                let e = groupEvents[i];
                if (e.mins >= lastEvent.mins && e.mins <= lastEvent.mins + 50 && !usedStops.has(e.stopId)) {
                    let score = -(e.mins - lastEvent.mins);
                    if (e.variation === lastEvent.variation) score += 100;
                    else if (!e.variation && !lastEvent.variation) score += 50;
                    else if (e.variation && lastEvent.variation && e.variation !== lastEvent.variation) score -= 200;

                    if (score > bestScore) {
                        bestScore = score;
                        bestCandidate = e;
                    }
                }
            }
            if (!bestCandidate || bestScore < -150) break;
            trip.push(bestCandidate);
            lastEvent = bestCandidate;
            usedStops.add(bestCandidate.stopId);
            groupEvents.splice(groupEvents.indexOf(bestCandidate), 1);
        }
        trips.push(trip);
    }

    let prefix = dayType.split('_').map(w => w[0].toUpperCase()).join('');
    trips.forEach((tStops, idx) => {
        // Find variations used in this trip
        let variations = tStops.map(t => t.variation).filter(Boolean);
        let legendMappings = {};
        tStops.forEach(t => Object.assign(legendMappings, t.legend));

        let tripId = `${line}_${prefix}_${idx + 1}`;
        let finalStops = tStops.map(ts => {
            let res = { stopId: ts.stopId, time: ts.time };
            if (ts.variation) res.variation = ts.variation;
            return res;
        });

        linesMap[line].dayTypes[dayType].push({
            tripId: tripId,
            destination: dest,
            stops: finalStops,
            legend: legendMappings
        });
    });
});

let finalLines = Object.values(linesMap);

let outputJS = `const stavData = {
    // 1. ANAGRAFICA FERMATE (Flat List)
    stops: ${JSON.stringify(newStops, null, 4)},

    // 2. LINEE E CORSE (Trip-centric)
    lines: ${JSON.stringify(finalLines, null, 4)}
};

// Evita errori in esecuzione browser
if (typeof window !== "undefined") {
    window.stavData = stavData;
}
if (typeof module !== "undefined") {
    module.exports = stavData;
}
`;

fs.writeFileSync('c:/Users/mella/Documents/MyATSOM/data_new.js', outputJS);
console.log("Conversione completata. Dati salvati in data_new.js");
