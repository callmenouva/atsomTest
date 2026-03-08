const fs = require('fs');

try {
    const data = fs.readFileSync('data.js', 'utf8');

    // Troviamo l'inizio del blocco della corsa 401
    const searchString = '"tripId": "401"';
    let startIndex = data.indexOf(searchString);
    if (startIndex === -1) throw new Error("Corsa 401 non trovata");

    // Risaliamo all'inizio dell'oggetto {
    startIndex = data.lastIndexOf('{', startIndex);

    // Troviamo la fine trovando "legend" e poi la sua chiusura }
    const legendIndex = data.indexOf('"legend"', startIndex);
    let endIndex = data.indexOf('}', legendIndex);
    endIndex = data.indexOf('}', endIndex + 1) + 1; // Fine oggetto trip

    const trip401Str = data.substring(startIndex, endIndex);

    // Usiamo eval per parsare la stringa JS-like (non JSON puro) in oggetto
    // Avvolgiamo in parentesi per farla valutare come espressione
    const trip401 = eval('(' + trip401Str + ')');

    // Clona
    const trip402 = JSON.parse(JSON.stringify(trip401));
    trip402.tripId = "402";
    trip402.destination = "Abbiategrasso FS";

    // Inverti fermate
    trip402.stops.reverse();

    // Riallocazione tempi plausibile d'esempio (+2m per tratta)
    let currentMins = 8 * 60 + 30; // 08:30 simulata (si modificherà a mano dal file per perfezione)
    trip402.stops.forEach((stop) => {
        let h = Math.floor(currentMins / 60).toString().padStart(2, '0');
        let m = (currentMins % 60).toString().padStart(2, '0');
        stop.time = `${h}:${m}`;
        currentMins += 2;

        if (stop.variation) {
            stop.variation = stop.variation.includes('Milano') ? 'Direzione Gudo Visconti' : 'Direzione Milano';
        }
    });

    // Inverti legend rule
    trip402.legend = {
        'Direzione Milano': 'A',
        'Direzione Gudo Visconti': 'B'
    };

    // Ora ricostruiamo a stringa indentata manualmente
    // L'oggetto trip401 originale va reinserito con una virgola che l'utente aveva obliato "},"
    // Poi passiamo la stringa nuova.
    const trip402Str = JSON.stringify(trip402, null, 28)
        .replace(/\\n/g, '\n                        ')
        .replace(/"([^"]+)":/g, '"$1":'); // standard JSON structure per il nuovo

    // Fix sintassi della 401: L'utente l'ha lasciata senza virgola alla fine del blocco array
    // Nel file orginale era: 
    // "legend": { ... }
    // }
    // ],
    // Devo sostituire l'oggetto con l'oggetto + virgola + la sua copia.

    // Siccome JSON.stringify fa schifo su una indentazione così grande custom 
    // usiamo questo approccio string-based bruto:

    let injectedStr = trip401Str + ',\n                    ' + JSON.stringify(trip402, null, 4).split('\n').map(l => '                    ' + l).join('\n').trimStart();

    const finalData = data.replace(trip401Str, injectedStr);

    fs.writeFileSync('data.js', finalData);
    console.log("Success");
} catch (e) {
    console.error(e);
}
