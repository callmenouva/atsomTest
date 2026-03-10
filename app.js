document.addEventListener('DOMContentLoaded', () => {
    // --- MAPPA (LEAFLET) ---
    let map;
    let markers = [];

    if (document.getElementById('map')) {
        map = L.map('map', { zoomControl: false }).setView([45.41, 8.95], 11);
        window.appMap = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.control.zoom({ position: 'topright' }).addTo(map);

        const stopIcon = L.divIcon({
            className: 'custom-map-marker',
            html: `<div class="marker-pin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>`,
            iconSize: [36, 36], // Managed via CSS, but good to have
            iconAnchor: [18, 36]
        });

        // Pre-calculate lines passing through each stop to avoid doing it on every render
        stavData.stops.forEach(stop => {
            stop.passingLines = [];
            stavData.lines.forEach(line => {
                let passesHere = false;
                for (let dayVariant in line.dayTypes) {
                    const variantTrips = line.dayTypes[dayVariant];
                    if (variantTrips && variantTrips.some(trip => trip.stops.some(st => st.stopId === stop.id))) {
                        passesHere = true;
                        break;
                    }
                }
                if (passesHere) {
                    stop.passingLines.push({
                        id: line.id,
                        color: line.color,
                        txColor: line.txColor
                    });
                }
            });
        });

        stavData.stops.forEach(stop => {
            if (stop.lat && stop.lng) {
                const marker = L.marker([stop.lat, stop.lng], { icon: stopIcon }).addTo(map);
                marker.on('click', () => {
                    openStopDetails(stop);
                });
                markers.push({ stop, marker });
            }
        });

        // Event listeners to update markers and list on map changes
        map.on('moveend', () => {
            if (!activeStop || activeStop.id === "user_location_stop") {
                renderLists(searchInput.value ? searchInput.value.toLowerCase().trim() : "");
            }
        });

        map.on('zoomend', () => {
            if (!activeStop || activeStop.id === "user_location_stop") {
                renderLists(searchInput.value ? searchInput.value.toLowerCase().trim() : "");
            }
        });

        // Helper function for empty state button
        window.centerMapOnAllStops = function () {
            if (window.appMap && typeof stavData !== 'undefined' && stavData.stops) {
                const validStops = stavData.stops.filter(s => s.lat && s.lng);
                if (validStops.length > 0) {
                    const bounds = L.latLngBounds(validStops.map(s => [s.lat, s.lng]));
                    window.appMap.fitBounds(bounds, { padding: [40, 40] });
                }
            }
        };
    }

    // Riferimenti DOM
    const searchInput = document.getElementById('stop-searchInput');
    const searchResults = document.getElementById('search-results');

    // Riferimenti Modal
    const stopDetailsSheet = document.getElementById('stop-details');
    const overlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Riferimenti Contenuti Modal
    const stopNameHeader = document.getElementById('stop-name');
    const navBtn = document.getElementById('nav-btn');
    const routesContainer = document.getElementById('routes-container');

    // Riferimenti Day Chips
    const dayChips = document.querySelectorAll('.day-chip');

    // Riferimenti Highlight Card
    const highlightCard = document.getElementById('next-bus-highlight');
    const highlightBadge = document.querySelector('.highlight-badge');
    const hMins = document.getElementById('highlight-minutes');
    const hLine = document.getElementById('highlight-line-name');
    const hDest = document.getElementById('highlight-dest-name');
    const hExactTime = document.getElementById('highlight-exact-time');

    // Date Settings
    const SCHOOL_END_DATE_2026 = new Date('2026-06-08T00:00:00');

    // Splash Screen logic
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 800); // 800ms mostra un po' il logo, poi sfuma
    }

    // Festività con Servizio SOSPESO (Mese 0-indicizzato, quindi 0=Gen, 4=Mag, 7=Ago, 11=Dic)
    const suspendedDates = [
        { month: 0, date: 1 },   // 1 Gennaio - Capodanno
        { month: 4, date: 1 },   // 1 Maggio - Festa dei Lavoratori
        { month: 7, date: 15 },  // 15 Agosto - Ferragosto
        { month: 11, date: 25 }  // 25 Dicembre - Natale
    ];

    // Festività Nazionali Regolari (trattate come Domenica/Festivo)
    const nationalHolidays = [
        { month: 3, date: 25 },  // 25 Aprile - Liberazione
        { month: 5, date: 2 }    // 2 Giugno - Festa Repubblica
    ];

    // Controlla se una data (oggi) matcha un array di giorni specifici
    function isDateInArray(testDate, dateArray) {
        const m = testDate.getMonth();
        const d = testDate.getDate();
        return dateArray.some(holiday => holiday.month === m && holiday.date === d);
    }

    // Calcola il tipo di giorno odierno REALE
    function getTodayDayType() {
        const today = new Date();
        const dayIndex = today.getDay(); // 0 = Domenica, 6 = Sabato

        // 1) Controllo Festività Nazionale (Trattato come Domenica)
        if (isDateInArray(today, nationalHolidays) || dayIndex === 0) {
            return 'festivo';
        }

        // 2) Controllo Sabato (Scolastico vs Non Scolastico)
        if (dayIndex === 6) {
            return (today >= SCHOOL_END_DATE_2026) ? 'sabato_non_scolastico' : 'sabato_scolastico';
        }

        // 3) Feriale: Controllo Scolastico vs Non Scolastico (dall'8 Giugno 2026 in poi)
        if (today >= SCHOOL_END_DATE_2026) {
            return 'feriale_non_scolastico';
        }

        return 'feriale_scolastico';
    }

    // Controlla e mostra il banner se il servizio è sospeso totalmente oggi
    function checkSuspendedService() {
        const today = new Date();
        const banner = document.getElementById('suspended-banner');

        if (isDateInArray(today, suspendedDates)) {
            banner.classList.remove('hidden');
        } else {
            banner.classList.add('hidden');
        }
    }

    // Esegui controllo al caricamento
    checkSuspendedService();

    let currentInterval = null;
    let activeStop = null;
    let nextBusInterval = null;

    // Stato: Giorno Selezionato (Inizializzato a Oggi)
    let selectedDayType = getTodayDayType();

    // 1. Inizializza i chips in base al giorno odierno
    dayChips.forEach(chip => {
        if (chip.dataset.day === selectedDayType) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }

        // Click Listener sul Chip
        chip.addEventListener('click', () => {
            dayChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            selectedDayType = chip.dataset.day;
            updateModalData(); // Ricarica coi nuovi dati
        });
    });

    // 2. Logica di ricerca e geolocalizzazione
    const nearbySection = document.getElementById('nearby-section');
    const nearbyResults = document.getElementById('nearby-results');
    const allStopsTitle = document.getElementById('all-stops-title');

    let userLocation = null;

    // Distanza di Haversine (restituisce km)
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        if (!lat1 || !lon1 || !lat2 || !lon2) return Infinity;
        const R = 6371; // Raggio della terra in km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    // Avvia il tracciamento in tempo reale della posizione dell'utente
    if ("geolocation" in navigator) {
        let userMarker = null;

        navigator.geolocation.watchPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                // Opzionale: se usiamo la geolocalizzazione mostriamo o aggiorniamo un marker blu dell'utente
                if (map) {
                    if (!userMarker) {
                        const userIcon = L.divIcon({
                            className: 'custom-map-marker user-marker',
                            html: `<div class="marker-pin" style="background:#0984e3; border-color:#fff;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg></div>`,
                            iconSize: [36, 36],
                            iconAnchor: [18, 36]
                        });
                        userMarker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon, zIndexOffset: 1000 }).addTo(map);

                        userMarker.on('click', async () => {
                            let addressString = "Indirizzo in fase di recupero...";

                            // Fake Stop per mostrare l'UI della posizione utente
                            const userStop = {
                                id: "user_location_stop",
                                name: "La tua posizione",
                                lat: userLocation.lat, // snapshotte the current moment
                                lng: userLocation.lng, // snapshotte the current moment
                                routes: [], // Niente rotte, quindi nessun orario
                                isUserLocation: true // custom flag let's pass it anyway
                            };

                            // Mostriamo provvisoriamente il popup
                            highlightCard.classList.add('hidden');
                            openStopDetails(userStop);

                            try {
                                // Reverse geocoding via OpenStreetMap Nominatim
                                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${userLocation.lat}&lon=${userLocation.lng}&format=json&addressdetails=1`);
                                const data = await response.json();

                                if (data && data.address) {
                                    const a = data.address;
                                    const street = a.road || a.pedestrian || a.isolated_dwelling || "";
                                    const houseNumber = a.house_number ? ` ${a.house_number}` : "";
                                    const city = a.city || a.town || a.village || a.municipality || "";
                                    const postcode = a.postcode || "";
                                    const province = a.county || a.state || "";

                                    addressString = `${street}${houseNumber}, ${city}, ${postcode}, ${province}`;
                                    // Pulisce stringa da virgole iniziali/finali vuote se mancano dati
                                    addressString = addressString.replace(/^[\s,]+/, '').replace(/[\s,]+$/, '').trim();
                                } else {
                                    addressString = "Impossibile recuperare l'indirizzo";
                                }
                            } catch (e) {
                                addressString = "Errore durante il recupero indirizzo";
                                console.error(e);
                            }

                            // Modifichiamo l'UI al volo se è aperto
                            if (activeStop && activeStop.id === "user_location_stop") {
                                // Cambiamo il subtitle o un box per mostrare l'indirizzo
                                const subtitleEl = document.querySelector('.subtitle');
                                if (subtitleEl) {
                                    subtitleEl.innerHTML = `<div style="font-size: 0.95rem; font-weight: normal; margin-top:-10px; margin-bottom: 20px; line-height: 1.4;">${addressString}</div>`;
                                }
                                // Nascondi i selettori giorno dato che non ci sono mezzi
                                const chipsContainer = document.querySelector('.day-chips-container');
                                if (chipsContainer) chipsContainer.style.display = 'none';
                            }
                        });
                    } else {
                        // Se il marker esiste già, aggiorniamo solo la sua posizione
                        userMarker.setLatLng([userLocation.lat, userLocation.lng]);
                    }
                }

                // Ricalcola e renderizza con le distanze
                // Solo se l'utente non sta guardando una fermata specifica oppure sta guardando se stesso
                if (!activeStop || activeStop.id === "user_location_stop") {
                    renderLists(searchInput.value ? searchInput.value.toLowerCase().trim() : "");
                }
            },
            (error) => {
                console.warn("Geolocalizzazione rifiutata o non disponibile", error);
                if (!userLocation) {
                    renderLists(searchInput.value ? searchInput.value.toLowerCase().trim() : ""); // Renderizza normalmente se non avevamo ancora lo user
                }
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    }

    searchInput.addEventListener('input', (e) => {
        renderLists(e.target.value.toLowerCase().trim());
    });

    function renderLists(query = '') {
        searchResults.innerHTML = '';
        nearbyResults.innerHTML = '';

        let stopsToRender = [...stavData.stops];

        // Se c'è la geolocalizzazione, calcola distanze
        if (userLocation) {
            stopsToRender.forEach(stop => {
                stop.distance = getDistanceFromLatLonInKm(userLocation.lat, userLocation.lng, stop.lat, stop.lng);
            });
        } else {
            stopsToRender.forEach(stop => stop.distance = Infinity);
        }

        const mapZoom = map ? map.getZoom() : 0;
        const MIN_ZOOM = 14;

        // Gestione visibilità marker sulla mappa
        if (map) {
            if (mapZoom < MIN_ZOOM) {
                markers.forEach(m => {
                    if (map.hasLayer(m.marker)) map.removeLayer(m.marker);
                });
            } else {
                markers.forEach(m => {
                    if (!map.hasLayer(m.marker)) map.addLayer(m.marker);
                });
            }
        }

        // === RICERCA ATTIVA ==============================
        if (query.length > 0) {
            nearbySection.classList.add('hidden');
            allStopsTitle.textContent = "Risultati ricerca";

            let searchItems = [];

            // 1. Cerca nelle Linee (es. Z553)
            stavData.lines.forEach(line => {
                if (line.id.toLowerCase().includes(query) || line.name.toLowerCase().includes(query)) {
                    // Estrai destinazioni uniche per questa linea
                    const destinations = new Set();
                    for (let day in line.dayTypes) {
                        line.dayTypes[day].forEach(trip => {
                            destinations.add(trip.destination);
                        });
                    }

                    destinations.forEach(dest => {
                        searchItems.push({
                            type: 'line',
                            lineId: line.id,
                            lineName: line.name,
                            color: line.color,
                            txColor: line.txColor,
                            destination: dest
                        });
                    });
                }
            });

            // 2. Cerca nelle Fermate
            const filteredStops = stopsToRender.filter(stop => stop.name.toLowerCase().includes(query));
            if (userLocation) {
                filteredStops.sort((a, b) => a.distance - b.distance);
            }

            // Unisci risultati (Linee prima, poi Fermate)
            filteredStops.forEach(stop => {
                searchItems.push({
                    type: 'stop',
                    ...stop
                });
            });

            if (searchItems.length === 0) {
                searchResults.innerHTML = '<div style="text-align:center; padding: 2rem 1rem; color:var(--text-muted);">Nessuna fermata o linea trovata per questa ricerca.</div>';
                return;
            }

            appendStopsToList(searchItems, searchResults);
            return;
        }

        // === NESSUNA RICERCA ==============================

        nearbySection.classList.add('hidden');

        // Se lo zoom è troppo basso
        if (map && mapZoom < MIN_ZOOM) {
            allStopsTitle.textContent = "Fermate sulla mappa";
            searchResults.innerHTML = `
                <div class="empty-state-container">
                    <img src="img/LentePiu.png" alt="Zoom In" class="empty-state-img">
                    <div class="empty-state-title">Non vedi nulla?</div>
                    <div class="empty-state-subtitle">Aumenta lo zoom per visualizzare le fermate ed i servizi disponibili.</div>
                </div>
            `;
            return;
        }

        // Se lo zoom è sufficiente (o se non c'è mappa per qualche motivo)
        allStopsTitle.textContent = "Fermate visibili";

        if (map) {
            const bounds = map.getBounds();
            // Filtra solo le fermate visibili nel current bound
            stopsToRender = stopsToRender.filter(stop => {
                if (!stop.lat || !stop.lng) return false;
                return bounds.contains([stop.lat, stop.lng]);
            });

            if (stopsToRender.length === 0) {
                searchResults.innerHTML = `
                    <div class="empty-state-container">
                        <img src="img/LentePuntoDiDomanda.png" alt="Zona senza STAV" class="empty-state-img">
                        <div class="empty-state-title">STAV non è qui!</div>
                        <div class="empty-state-subtitle">Spostati nell'area di servizio per scoprire le fermate.</div>
                        <button onclick="if(window.centerMapOnAllStops) window.centerMapOnAllStops()" class="btn-return-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            Torna all'area STAV
                        </button>
                    </div>
                `;
                return;
            }
        }

        // Ordina alfabeticamente per la view della lista
        stopsToRender.sort((a, b) => a.name.localeCompare(b.name));
        appendStopsToList(stopsToRender, searchResults);
    }

    function appendStopsToList(itemsArray, listElement, showDistance = false) {
        itemsArray.forEach(item => {
            const li = document.createElement('li');

            if (item.type === 'line') {
                li.className = 'line-result-card';
                li.addEventListener('click', () => openGenericLineTimeline(item.lineId, item.destination));

                li.innerHTML = `
                    <div class="line-result-header">
                        <div class="ticket-line-chip" style="background-color: ${item.color}; color: ${item.txColor}; font-size: 1rem; padding: 4px 10px;">
                            ${item.lineId}
                        </div>
                        <div class="line-result-dest">
                            <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">Direzione</span>
                            <span style="font-weight: 600;">${item.destination}</span>
                        </div>
                        <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                `;
            } else {
                // E' una fermata (compatibilità con type='stop' o oggetti stop normali)
                const stop = item.type === 'stop' ? item : { ...item };
                li.className = 'stop-ticket-card';
                li.addEventListener('click', () => openStopDetails(stop));

                let distanceHtml = '';
                if (showDistance && stop.distance !== Infinity) {
                    let distStr = stop.distance < 1 ? Math.round(stop.distance * 1000) + ' m' : stop.distance.toFixed(1) + ' km';
                    distanceHtml = `<div class="stop-ticket-distance">${distStr}</div>`;
                }

                let linesHtml = '';
                if (stop.passingLines && stop.passingLines.length > 0) {
                    const uniqueLines = Array.from(new Map(stop.passingLines.map(l => [l.id, l])).values());
                    linesHtml = uniqueLines.map(l =>
                        `<div class="ticket-line-chip" style="background-color: ${l.color}; color: ${l.txColor};">${l.id}</div>`
                    ).join('');
                } else {
                    linesHtml = '<div style="font-size:0.8rem; color:var(--text-muted); padding:2px 0;">Nessuna linea</div>';
                }

                li.innerHTML = `
                    <div class="stop-ticket-header">
                        <div class="stop-ticket-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div class="stop-ticket-name">${stop.name}</div>
                        ${distanceHtml}
                    </div>
                    <div class="stop-ticket-divider"></div>
                    <div class="stop-ticket-footer">
                        ${linesHtml}
                    </div>
                `;
            }
            listElement.appendChild(li);
        });
    }

    // Navigazione Rapida dalla Timeline a una Fermata
    window.openStopFromTimeline = function (stopId) {
        const stop = stavData.stops.find(s => s.id === stopId);
        if (stop) {
            closeModal(); // Chiude eventuale timeline e dettagli correnti

            setTimeout(() => {
                openStopDetails(stop);
                // Centra la mappa sulla nuova fermata con zoom 16
                if (window.appMap && stop.lat && stop.lng) {
                    window.appMap.flyTo([stop.lat - 0.005, stop.lng], 16, { animate: true });
                }
            }, 300); // Attende la fine dell'animazione di chiusura
        }
    };

    // Apertura Timeline Generica per una Linea
    function openGenericLineTimeline(lineId, destination) {
        const line = stavData.lines.find(l => l.id === lineId);
        if (!line) return;

        // Trova tutte le variazioni per questa destinazione
        const variationsMap = new Map(); // pathName -> trip con più fermate per quel pathName

        for (let day in line.dayTypes) {
            line.dayTypes[day].forEach(trip => {
                if (trip.destination === destination) {
                    // Trova il nome del path. Assumiamo che la prima fermata con 'variation' definisca il path, 
                    // oppure default "Principale"
                    let pathName = "Principale";
                    const firstVariationStop = trip.stops.find(s => s.variation);
                    if (firstVariationStop) {
                        pathName = firstVariationStop.variation;
                    }

                    const existingTrip = variationsMap.get(pathName);
                    if (!existingTrip || trip.stops.length > existingTrip.stops.length) {
                        variationsMap.set(pathName, trip);
                    }
                }
            });
        }

        if (variationsMap.size === 0) return;

        // Seleziona la prima variante (o "Principale" se esiste)
        let activeVariation = variationsMap.has("Principale") ? "Principale" : Array.from(variationsMap.keys())[0];
        let bestTrip = variationsMap.get(activeVariation);

        // Riutilizziamo la bottom sheet, ma nascondiamo routesContainer e mostriamo in-sheet-timeline
        activeStop = null; // Nessuna fermata attiva in questo stato
        stopNameHeader.textContent = `${lineId} - Verso ${destination}`;

        const chipsContainer = document.querySelector('.day-chips-container');
        if (chipsContainer) chipsContainer.style.display = 'none';

        const subtitleEl = document.querySelector('.subtitle');
        if (subtitleEl) subtitleEl.textContent = 'Percorso della linea';

        if (navBtn) {
            navBtn.onclick = () => {
                window.showTripOnMap(bestTrip.tripId, lineId);
            };
        }

        overlay.classList.remove('hidden');
        stopDetailsSheet.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        routesContainer.style.display = 'none';

        // Ripuliamo eventuali timeline esistenti
        const existingTimeline = stopDetailsSheet.querySelector('.in-sheet-timeline');
        if (existingTimeline) {
            existingTimeline.remove();
        }

        renderGenericTimeline(variationsMap, activeVariation, line);
    }

    window.switchGenericTimelineVariation = function (pathName, lineId) {
        // Ripeschiamo la linea e la mappa delle variazioni attualmente renderizzate
        // Questo richiede di ricostruire o ripassare variationsMap, che per semplicità chiameremo ricreando openGenericLineTimeline
        // Ma per non ricalcolare rifacciamo il calcolo
        const line = stavData.lines.find(l => l.id === lineId);
        if (!line) return;

        let dest = stopNameHeader.textContent.split(' - Verso ')[1];
        if (!dest) return;

        const variationsMap = new Map();
        for (let day in line.dayTypes) {
            line.dayTypes[day].forEach(trip => {
                if (trip.destination === dest) {
                    let pName = "Principale";
                    const fvStop = trip.stops.find(s => s.variation);
                    if (fvStop) pName = fvStop.variation;

                    const exTrip = variationsMap.get(pName);
                    if (!exTrip || trip.stops.length > exTrip.stops.length) {
                        variationsMap.set(pName, trip);
                    }
                }
            });
        }

        renderGenericTimeline(variationsMap, pathName, line);
    };

    function renderGenericTimeline(variationsMap, activeVariation, line) {
        let timelineEl = stopDetailsSheet.querySelector('.in-sheet-timeline');
        if (timelineEl) {
            timelineEl.remove();
        }

        const trip = variationsMap.get(activeVariation);
        if (!trip) return;

        timelineEl = document.createElement('div');
        timelineEl.className = 'in-sheet-timeline slide-in-right-premium';
        stopDetailsSheet.querySelector('.sheet-content').appendChild(timelineEl);

        timelineEl.style.display = 'flex';
        timelineEl.style.flexDirection = 'column';
        timelineEl.style.flex = '1';
        timelineEl.style.overflowY = 'hidden';

        void timelineEl.offsetWidth;
        timelineEl.classList.add('slide-in-right');

        let tabsHtml = '';
        if (variationsMap.size > 1) {
            tabsHtml = `<div class="variations-tabs-container">`;
            for (let [pName, pTrip] of variationsMap.entries()) {
                const isActive = pName === activeVariation ? 'active' : '';
                tabsHtml += `
                    <button class="variation-tab ${isActive}" onclick="window.switchGenericTimelineVariation('${pName}', '${line.id}')">
                        ${pName}
                    </button>
                `;
            }
            tabsHtml += `</div>`;
        }

        let html = `
            <div class="timeline-header" style="position: sticky; top: 0; background: var(--bg-deep); z-index: 10; padding: 1rem 0; border-bottom: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 1rem; width: 100%;">
                    <button class="back-btn" onclick="window.closeTripDetail()" style="padding: 0.5rem; background: var(--bg-card); border-radius: 50%; border: none; color: white; cursor: pointer;">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </button>
                    <div class="header-text" style="flex: 1;">
                        <h2 style="font-size:1.2rem; font-weight:800; margin:0;">Linea ${line.name}</h2>
                        <p style="opacity:0.6; margin:0; font-size:0.85rem;">Dir. ${trip.destination}</p>
                    </div>
                    <button onclick="window.showTripOnMap('${trip.tripId}', '${line.id}')" style="padding: 0.5rem 0.8rem; background: ${line.color}; border: none; cursor: pointer; border-radius: 8px; color: #fff; text-decoration: none; display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 600; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
                        Mappa
                    </button>
                </div>
                ${tabsHtml}
            </div>
            <div class="timeline-scroll" style="flex: 1; overflow-y: auto; padding: 1rem 0 3rem 0; position: relative;">
        `;

        trip.stops.forEach((s, idx) => {
            const stopInfo = stavData.stops.find(fs => fs.id === s.stopId);
            const stopName = stopInfo ? stopInfo.name : 'Fermata';

            html += `
                <div id="generic-timeline-row-${s.stopId}" class="timeline-row" style="cursor: pointer; transition: background-color 1s ease-out;" onclick="window.openStopFromTimeline('${s.stopId}')">
                    <div class="timeline-graphic">
                        <div class="timeline-line" style="background:${line.color}"></div>
                        <div class="timeline-node" style="border-color:${line.color};"></div>
                    </div>
                    <div class="timeline-content" style="padding-top: 10px; padding-bottom: 10px;">
                        <div class="stop-name">${stopName}</div>
                    </div>
                    ${idx < trip.stops.length - 1 ? `
                    <div class="timeline-chevron">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    ` : ''}
                </div>
            `;
        });

        html += `</div>`;
        timelineEl.innerHTML = html;
    }

    // 3. Aprire i dettagli della fermata (BOTTOM SHEET MODAL)
    function openStopDetails(stop) {
        activeStop = stop;
        stopNameHeader.textContent = stop.name;

        // Quando apro, resetto il chip a "Oggi", a meno che non si voglia mantenere la selezione
        selectedDayType = getTodayDayType();
        dayChips.forEach(c => {
            c.classList.toggle('active', c.dataset.day === selectedDayType);
        });

        const chipsContainer = document.querySelector('.day-chips-container');
        if (chipsContainer) chipsContainer.style.display = 'flex'; // Reset display se era nascosto dal marker utente

        // Reset subtitle se era stato sporcato dall'indirizzo utente
        const subtitleEl = document.querySelector('.subtitle');
        if (subtitleEl) subtitleEl.textContent = 'Tutte le corse da questa fermata';

        overlay.classList.remove('hidden');
        stopDetailsSheet.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        if (map && stop.lat && stop.lng) {
            // Sposta la mappa centrata leggermente più in alto per via del bottom sheet
            map.flyTo([stop.lat - 0.005, stop.lng], 15, { animate: true });
        }

        updateModalData();

        // 3.5. Impostazione Link Navigatore (Richiesta Sistema Operativo)
        if (navBtn) {
            navBtn.onclick = () => {
                if (!stop.lat || !stop.lng) {
                    alert('Coordinate mancanti per questa fermata.');
                    return;
                }
                // Rileva se il dispositivo è mobile
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

                if (isMobile) {
                    // Il protocollo 'geo:' fa si che il sistema operativo mobile chieda 
                    // all'utente quale app di mappe vuole usare.
                    const url = `geo:${stop.lat},${stop.lng}?q = ${stop.lat},${stop.lng} `;
                    window.location.href = url;
                } else {
                    // Su PC, apri direttamente Google Maps in una nuova scheda
                    const url = `https://www.google.com/maps/dir/?api=1&destination=${stop.lat},${stop.lng}`;
                    window.open(url, '_blank');
                }
            };
        }

        if (currentInterval) clearInterval(currentInterval);
        currentInterval = setInterval(updateModalData, 60000);
    }

    // 4. Chiudere il Modal
    function closeModal() {
        if (currentInterval) clearInterval(currentInterval);
        activeStop = null;

        overlay.classList.add('hidden');
        stopDetailsSheet.classList.add('hidden');
        document.body.style.overflow = '';

        // Reset della vista interna orari (se era aperta la timeline corsa)
        const timelineEl = stopDetailsSheet.querySelector('.in-sheet-timeline');
        if (timelineEl) {
            timelineEl.style.display = 'none';
            timelineEl.classList.remove('slide-in-right', 'slide-out-right');
        }
        if (routesContainer) {
            routesContainer.style.display = 'block';
            routesContainer.classList.remove('fade-in-left', 'fade-out-left');
        }
    }

    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    const sheetHandle = document.querySelector('.sheet-handle');
    let startY = 0;
    sheetHandle.addEventListener('touchstart', (e) => startY = e.touches[0].clientY);
    sheetHandle.addEventListener('touchend', (e) => {
        const endY = e.changedTouches[0].clientY;
        if (endY - startY > 30) closeModal();
    });

    // 5. Logica Core: Calcolo Tempi e Renderizzazione Linee

    // Mappa fissa delle variazioni -> simboli greci
    const VARIATION_SYMBOLS = {
        "Via Rosate": "δ",
        "Via Rosate Via Einstein": "β",
        "Via Einstein": "ε",
        "Via Monzoro": "μ",
        "Via Assiano Via Bestazzo": "α",
        "Via MI - Via Lombardi/Amsa": "λ",
        "Via Monzoro e MI - Via Lombardi/Amsa": "φ",
        "Via Assiano": "η",
        "Via Monzoro Via Einstein Via Bestazzo": "ζ",
        "Via Einstein Via Bestazzo Via Monzoro Via MI - Via Lombardi/Amsa": "ω",
        "Via Einstein Via Bestazzo": "θ",
        "Via Monzoro ": "μ" // Spazio extra trovato in data.js
    };

    function updateModalData() {
        if (!activeStop) return;

        routesContainer.innerHTML = '';
        const now = new Date();
        const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();
        const isToday = (selectedDayType === getTodayDayType());

        let absoluteNextTrip = null;

        // Raggruppa i trip passanti per linea e destinazione
        const routesMap = {};

        stavData.lines.forEach(line => {
            const dayTrips = line.dayTypes[selectedDayType] || [];
            dayTrips.forEach(trip => {
                const stopEntries = trip.stops.filter(s => s.stopId === activeStop.id);
                stopEntries.forEach(stopEntry => {
                    const key = `${line.id}::${trip.destination}`;
                    if (!routesMap[key]) {
                        routesMap[key] = {
                            line: line,
                            destination: trip.destination,
                            trips: [],
                            legend: {}
                        };
                    }
                    routesMap[key].trips.push({
                        tripId: trip.tripId,
                        time: stopEntry.time,
                        variation: stopEntry.variation,
                        fullTrip: trip
                    });
                    if (line.legend) {
                        Object.assign(routesMap[key].legend, line.legend);
                    } else if (trip.legend) {
                        // Supporto retrocompatibile se qualche trip ha ancora la propria legenda
                        Object.assign(routesMap[key].legend, trip.legend);
                    }
                });
            });
        });

        const routes = Object.values(routesMap);

        if (routes.length === 0) {
            routesContainer.innerHTML = '<p style="text-align:center; padding:2rem; color:var(--text-muted); font-size: 0.95rem;">Nessuna corsa prevista per questo giorno.</p>';
        }

        routes.forEach(route => {
            route.trips.sort((a, b) => a.time.localeCompare(b.time));

            const routeEl = document.createElement('div');
            routeEl.className = 'route-card';

            // INTRODUZIONE ACCORDION - Header cliccabile
            const headerHTML = `
                <div class="route-header" style="border-left: 4px solid ${route.line.color}">
                    <span class="route-line" style="background:${route.line.color}">${route.line.name}</span>
                    <span class="route-dest" style="flex:1; margin-left:10px;">${route.destination}</span>
                    <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            `;

            let timesHTML = '<div class="accordion-content"><div class="times-grid">';

            let nextTripIndex = -1;
            const routeVariations = new Set();
            const hasCustomLegend = Object.keys(route.legend).length > 0;
            const currentLegend = hasCustomLegend ? route.legend : VARIATION_SYMBOLS;

            // Calcola il prossimo bus SOLO se stiamo guardando il giorno odierno
            if (isToday) {
                for (let i = 0; i < route.trips.length; i++) {
                    const t = route.trips[i];
                    const [timeH, timeM] = t.time.split(':').map(Number);
                    const timeTotalMinutes = timeH * 60 + timeM;

                    if (timeTotalMinutes >= currentTotalMinutes) {
                        nextTripIndex = i;
                        const diffMinutes = timeTotalMinutes - currentTotalMinutes;
                        if (!absoluteNextTrip || diffMinutes < absoluteNextTrip.diff) {
                            absoluteNextTrip = {
                                line: route.line.name,
                                dest: t.variation ? `${route.destination} (${t.variation})` : route.destination,
                                timeStr: t.time,
                                diff: diffMinutes
                            };
                        }
                        break;
                    }
                }
            }

            route.trips.forEach((t, index) => {
                const timeStr = t.time;
                const variationStr = t.variation;

                // Se la stringa matchia una chiave del dictionary mostriamo il custom
                // Se non matcha, generiamo noi una lettera sequenziale A, B, C temporanea.
                let symbol = null;
                if (variationStr) {
                    if (currentLegend[variationStr]) {
                        symbol = currentLegend[variationStr];
                    } else if (!hasCustomLegend) {
                        // Fallback per vecchie stringhe corte non mappate e autogenerazione
                        symbol = currentLegend[variationStr] || "?";
                    } else {
                        // La linea ha una mappa, ma questa variations manca: diamo noi un id per fallback?
                        // Attualmente data.js non ha tutte le map compilate.
                        let keys = Object.keys(currentLegend);
                        let idx = keys.indexOf(variationStr);
                        if (idx === -1) {
                            keys.push(variationStr);
                            currentLegend[variationStr] = String.fromCharCode(65 + keys.length - 1);
                        }
                        symbol = currentLegend[variationStr];
                    }
                }

                if (variationStr) routeVariations.add(variationStr);

                let badgeClass = 'future';
                if (isToday) {
                    if (index < nextTripIndex || (nextTripIndex === -1 && index >= 0)) {
                        badgeClass = 'past';
                    } else if (index === nextTripIndex) {
                        badgeClass = 'next';
                    }
                }

                timesHTML += `<div class="time-badge ${badgeClass}" onclick="event.stopPropagation(); window.openTripDetail('${t.tripId}', '${route.line.id}', '${activeStop.id}')" title="Clicca per mappa percorso">
                    <span>${timeStr}</span>
                    ${symbol ? `<span class="time-variation">${symbol}</span>` : ''}
                </div>`;
            });

            timesHTML += '</div>'; // Chiude times-grid

            // Aggiunta Legenda se ci sono variazioni
            if (routeVariations.size > 0) {
                timesHTML += '<div class="times-legend">';
                routeVariations.forEach(v => {
                    const sym = currentLegend[v] || "?";
                    timesHTML += `
                        <div class="legend-item">
                            <span class="legend-symbol">${sym}</span>
                            <span>${v}</span>
                        </div>
                    `;
                });
                timesHTML += '</div>';
            }

            timesHTML += '</div>'; // Chiude accordion-content
            routeEl.innerHTML = headerHTML + timesHTML;

            // Accordion Interactivity
            const routeHeader = routeEl.querySelector('.route-header');
            routeHeader.addEventListener('click', () => {
                const isOpen = routeEl.classList.contains('accordion-open');
                if (isOpen) {
                    routeEl.classList.remove('accordion-open');
                } else {
                    routeEl.classList.add('accordion-open');
                }
            });

            routesContainer.appendChild(routeEl);
        });

        // 5.5 Aggiungi connessioni alla fine della lista (nella bottom sheet principale della fermata)
        if (activeStop && activeStop.connections && activeStop.connections.length > 0) {
            const separator = document.createElement('div');
            separator.className = 'popup-separator';
            separator.style.margin = '16px 0 12px 0';

            const connectionsTitle = document.createElement('div');
            connectionsTitle.style.fontSize = '0.9rem';
            connectionsTitle.style.color = 'var(--text-white)';
            connectionsTitle.style.marginBottom = '12px';
            connectionsTitle.textContent = 'Altre corrispondenze:';

            const connectionsWrapper = document.createElement('div');
            connectionsWrapper.className = 'popup-connections-container';
            connectionsWrapper.style.padding = '0 0px 16px 0px';

            activeStop.connections.forEach(conn => {
                const connDiv = document.createElement('div');
                connDiv.className = 'popup-connection-pill';
                connDiv.innerHTML = `
                    <div class="popup-connection-icon-wrapper" style="background-color: ${conn.color};">
                        <img src="${conn.icon}" class="popup-connection-icon" alt="${conn.name} icon">
                    </div>
                    <span>${conn.name}</span>
                `;
                connectionsWrapper.appendChild(connDiv);
            });

            routesContainer.appendChild(separator);
            routesContainer.appendChild(connectionsTitle);
            routesContainer.appendChild(connectionsWrapper);
        }

        // 6. Aggiornamento Highlight Card (Prossimo Bus)
        if (nextBusInterval) {
            clearInterval(nextBusInterval);
            nextBusInterval = null;
        }

        const updateHighlightCard = () => {
            if (!activeStop || activeStop.isUserLocation || !isToday || !absoluteNextTrip) {
                highlightCard.classList.add('hidden');
                return;
            }

            const now = new Date();
            const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();
            // Ricordiamo che absoluteNextTrip.diff era calcolato off-static `currentTotalMinutes` al lancio.
            // Ricalcoliamolo con il passing time effettivo (timeToMinsMap(absoluteNextTrip.time))
            const timeToMinsMap = t => {
                let [h, m] = t.split(':').map(Number);
                return h * 60 + m;
            };

            let tripMins = timeToMinsMap(absoluteNextTrip.timeStr);
            // Gestione corse oltre la mezzanotte
            if (tripMins < 240 && currentTotalMinutes >= 18 * 60) {
                tripMins += 24 * 60;
            }
            const liveDiff = tripMins - currentTotalMinutes;

            if (liveDiff > 120 || liveDiff < 0) {
                highlightCard.classList.add('hidden');
            } else {
                highlightCard.classList.remove('hidden');
                hMins.textContent = liveDiff === 0 ? "Ora" : liveDiff;
                hLine.textContent = `Linea ${absoluteNextTrip.line}`;
                hDest.textContent = `dir. ${absoluteNextTrip.dest}`;
                hExactTime.textContent = absoluteNextTrip.timeStr;

                if (liveDiff <= 5) {
                    hMins.style.color = '#ff4757';
                    highlightBadge.textContent = "In Arrivo";
                    highlightBadge.classList.add('urgent');
                } else {
                    hMins.style.color = 'var(--text-white)';
                    highlightBadge.textContent = "Prossimo Bus";
                    highlightBadge.classList.remove('urgent');
                }
            }
        };

        if (isToday && absoluteNextTrip && (!activeStop.isUserLocation)) {
            updateHighlightCard();
            // Aggiorna ogni minuto
            nextBusInterval = setInterval(updateHighlightCard, 60000);
        } else {
            highlightCard.classList.add('hidden');
        }

        if (activeStop && activeStop.isUserLocation) {
            highlightCard.classList.add('hidden');
        }
    }

    // --- TIMELINE IN-SHEET ---
    window.openTripDetail = function (tripId, lineId, highlightStopId = null) {
        const line = stavData.lines.find(l => l.id === lineId);
        if (!line) return;

        let trip = null;
        Object.values(line.dayTypes).forEach(trips => {
            const found = trips.find(t => t.tripId === tripId);
            if (found) trip = found;
        });
        if (!trip) return;

        // Anima uscita della lista corse
        routesContainer.classList.remove('fade-in-left');
        routesContainer.classList.add('fade-out-left-premium');

        setTimeout(() => {
            routesContainer.style.display = 'none';
            routesContainer.classList.remove('fade-out-left-premium');

            // Cerca se esiste già un div timeline, altrimenti crealo
            let timelineEl = stopDetailsSheet.querySelector('.in-sheet-timeline');
            if (timelineEl) {
                // Elimina per rimpiazzarlo se esiste già
                timelineEl.remove();
            }

            timelineEl = document.createElement('div');
            timelineEl.className = 'in-sheet-timeline slide-in-right-premium';
            stopDetailsSheet.querySelector('.sheet-content').appendChild(timelineEl);

            timelineEl.style.display = 'flex';
            timelineEl.style.flexDirection = 'column';
            timelineEl.style.flex = '1';
            timelineEl.style.overflowY = 'hidden'; // Gestito dallo scroll interno

            // Resetta animazioni e forza reflow
            timelineEl.classList.remove('slide-out-right');
            void timelineEl.offsetWidth;
            timelineEl.classList.add('slide-in-right');

            const now = new Date();
            const curMins = now.getHours() * 60 + now.getMinutes();

            const timeToMinsMap = t => {
                let [h, m] = t.split(':').map(Number);
                return h * 60 + m;
            };

            // Sostituiamo il link OSM con un pulsante interno
            let html = `
                <div class="timeline-header" style="position: sticky; top: 0; background: var(--bg-deep); z-index: 10; padding: 1rem 0; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 1rem;">
                    <button class="back-btn" onclick="window.closeTripDetail()" style="padding: 0.5rem; background: var(--bg-card); border-radius: 50%; border: none; color: white; cursor: pointer;">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    </button>
                    <div class="header-text" style="flex: 1;">
                        <h2 style="font-size:1.2rem; font-weight:800; margin:0;">Linea ${line.name}</h2>
                        <p style="opacity:0.6; margin:0; font-size:0.85rem;">Dir. ${trip.destination}</p>
                    </div>
                    <button onclick="window.showTripOnMap('${tripId}', '${lineId}')" style="padding: 0.5rem 0.8rem; background: ${line.color}; border: none; cursor: pointer; border-radius: 8px; color: #fff; text-decoration: none; display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 600; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
                        Mappa
                    </button>
                </div>
                <div class="timeline-scroll" style="flex: 1; overflow-y: auto; padding: 1rem 0 3rem 0; margin-top: 1rem; position: relative;">
                    <div id="bus-tracker" class="bus-tracker-icon" style="display: none; background: ${line.color}">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                    </div>
            `;

            trip.stops.forEach((s, idx) => {
                const stopInfo = stavData.stops.find(fs => fs.id === s.stopId);
                const stopMins = timeToMinsMap(s.time);

                const isTodayLoc = (selectedDayType === getTodayDayType());
                const isPassed = isTodayLoc && stopMins < curMins;
                const isNext = isTodayLoc && !isPassed && (idx === 0 || timeToMinsMap(trip.stops[idx - 1].time) < curMins);

                html += `
                    <div id="timeline-row-${s.stopId}" class="timeline-row ${isPassed ? 'passed' : ''} ${isNext ? 'next' : ''}" style="${highlightStopId === s.stopId ? 'background-color: rgba(255, 235, 59, 0.4); border-radius: 8px; transition: background-color 1s ease-out;' : 'transition: background-color 1s ease-out;'}">
                        <div class="timeline-graphic">
                            <div class="timeline-line" style="background:${line.color}"></div>
                            <div class="timeline-node" style="border-color:${line.color};"></div>
                        </div>
                        <div class="timeline-content" style="padding-top: 10px; padding-bottom: 10px;">
                            <div class="stop-name" style="${highlightStopId === s.stopId ? 'font-weight: bold;' : ''}">${stopInfo ? stopInfo.name : 'Fermata'}</div>
                            <div class="stop-details">
                                <span class="stop-time badge" style="${highlightStopId === s.stopId ? 'background: var(--text-color); color: var(--bg-card);' : ''}">${s.time}</span>
                                ${s.variation ? `<span class="stop-variation badge">${s.variation}</span>` : ''}
                            </div>
                        </div>
                        ${idx < trip.stops.length - 1 ? `
                        <div class="timeline-chevron">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                        ` : ''}
                    </div>
                `;
            });

            html += `</div>`;
            timelineEl.innerHTML = html;

            // Logica per posizionare il bus
            let trackingAnimationFrame = null;
            const updateBusPosition = () => {
                if (!document.getElementById('bus-tracker') || !document.body.contains(timelineEl)) {
                    if (trackingAnimationFrame) cancelAnimationFrame(trackingAnimationFrame);
                    return; // Sheet chiuso
                }

                const now = new Date();
                const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
                const isTodayLoc = (selectedDayType === getTodayDayType());
                const busIcon = document.getElementById('bus-tracker');

                if (!isTodayLoc) {
                    busIcon.style.display = 'none';
                    return;
                }

                const rows = timelineEl.querySelectorAll('.timeline-row');
                let lastStopSecs = -1;
                let nextStopSecs = -1;
                let lastStopEl = null;
                let nextStopEl = null;

                for (let i = 0; i < trip.stops.length; i++) {
                    const stopSecs = timeToMinsMap(trip.stops[i].time) * 60;
                    if (stopSecs <= currentSeconds) {
                        lastStopSecs = stopSecs;
                        lastStopEl = rows[i];
                        if (!rows[i].classList.contains('passed')) {
                            rows[i].classList.add('passed');
                            rows[i].classList.remove('next');
                        }
                    } else if (stopSecs > currentSeconds && nextStopSecs === -1) {
                        nextStopSecs = stopSecs;
                        nextStopEl = rows[i];
                        if (!rows[i].classList.contains('next')) {
                            rows[i].classList.add('next');
                            rows[i].classList.remove('passed');
                        }
                    } else {
                        rows[i].classList.remove('passed', 'next');
                    }
                }

                if (lastStopEl && nextStopEl) {
                    // Corsa in corso
                    const totalDiff = nextStopSecs - lastStopSecs;
                    const elapsed = currentSeconds - lastStopSecs;
                    const percentage = elapsed / totalDiff;

                    const lastY = lastStopEl.offsetTop + 11; // Centro del cerchio
                    const nextY = nextStopEl.offsetTop + 11;
                    const currentY = lastY + ((nextY - lastY) * percentage);

                    const graphic = lastStopEl.querySelector('.timeline-graphic');
                    const currentX = lastStopEl.offsetLeft + graphic.offsetLeft + (graphic.offsetWidth / 2);

                    busIcon.style.display = 'flex';
                    busIcon.style.top = `${currentY}px`;
                    busIcon.style.left = `${currentX}px`;
                } else if (lastStopEl && !nextStopEl && currentSeconds <= lastStopSecs + 300) {
                    // Capolinea d'arrivo (mostra per 5 minuti post arrivo)
                    const graphic = lastStopEl.querySelector('.timeline-graphic');
                    const currentX = lastStopEl.offsetLeft + graphic.offsetLeft + (graphic.offsetWidth / 2);

                    busIcon.style.display = 'flex';
                    busIcon.style.top = `${lastStopEl.offsetTop + 11}px`;
                    busIcon.style.left = `${currentX}px`;
                } else {
                    busIcon.style.display = 'none';
                }

                // Chiama costantemente al prossimo frame visivo
                trackingAnimationFrame = requestAnimationFrame(updateBusPosition);
            };

            setTimeout(() => {
                const busIcon = document.getElementById('bus-tracker');
                if (busIcon) busIcon.style.transition = 'none'; // la transizione CSS urterebbe requestAnimationFrame

                trackingAnimationFrame = requestAnimationFrame(updateBusPosition);

                // Auto-scroll alla fermata evidenziata se presente
                if (highlightStopId) {
                    const highlightEl = document.getElementById(`timeline-row-${highlightStopId}`);
                    if (highlightEl) {
                        highlightEl.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });

                        // Rimuovi evidenziazione flash giallo dopo 1.5 secondi
                        setTimeout(() => {
                            highlightEl.style.backgroundColor = 'transparent';
                        }, 1500);
                    }
                }

            }, 100);

            // Forza un lieve ri-scroll in alto al container principale se necessario
            // ma solo se l'utente non ha chiesto una highlight stop
            if (!highlightStopId) {
                stopDetailsSheet.scrollTop = 0;
            }

        }, 200); // 200ms per completare fade-out
    };

    window.closeTripDetail = function () {
        const timelineEl = stopDetailsSheet.querySelector('.in-sheet-timeline');
        if (timelineEl) {
            timelineEl.classList.remove('slide-in-right-premium');
            timelineEl.classList.add('slide-out-right-premium');

            setTimeout(() => {
                timelineEl.style.display = 'none';
                routesContainer.style.display = 'block';
                // Mostra di nuovo con animazione inversa
                void routesContainer.offsetWidth; // Reflow
                routesContainer.classList.add('fade-in-left-premium');
                // Auto cleanup classes per evitare ghosting
                setTimeout(() => routesContainer.classList.remove('fade-in-left-premium', 'fade-out-left-premium'), 500);
            }, 400); // 400ms per completare slide out
        } else {
            routesContainer.style.display = 'block';
        }
    };

    // --- LOGICA MAPPA PERCORSO (IN-APP) ---
    let currentMapPolyline = null;
    let currentMapDecorator = null;
    let currentMapMarkers = [];

    window.showTripOnMap = async function (tripId, lineId) {
        if (!map) return;

        const line = stavData.lines.find(l => l.id === lineId);
        if (!line) return;

        let trip = null;
        Object.values(line.dayTypes).forEach(trips => {
            const found = trips.find(t => t.tripId === tripId);
            if (found) trip = found;
        });
        if (!trip) return;

        // Recupera le fermate come lat,lng
        const stopPoints = trip.stops.map(s => {
            const st = stavData.stops.find(fs => fs.id === s.stopId);
            return st ? [st.lat, st.lng] : null;
        }).filter(Boolean);

        if (stopPoints.length === 0) return;

        // Nascondi il modal overlay e falli abbassare ma mantenendolo leggermente visibile (peek)
        stopDetailsSheet.classList.add('map-peek');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';

        // Nascondi i marker blu globali della mappa temporaneamente
        markers.forEach(m => {
            if (map.hasLayer(m.marker)) {
                map.removeLayer(m.marker);
            }
        });

        // Abbassa il pannello principale se serve (nascondi l'expanded mode) e nascondilo visivamente
        const mainPanel = document.getElementById('main-panel');
        if (mainPanel) {
            mainPanel.classList.remove('expanded');
            mainPanel.classList.add('map-hidden');
        }

        // Mostra il pulsante "Chiudi Percorso"
        const closeRouteBtn = document.getElementById('close-route-btn');
        if (closeRouteBtn) closeRouteBtn.classList.remove('hidden');

        // Pulisci eventuali disegni vecchi prima di tracciare il nuovo
        clearTripFromMap();

        const mapLoader = document.getElementById('map-loader');
        if (mapLoader) mapLoader.classList.remove('hidden');

        let routePolylineData = null;
        let allCoordinates = [];
        let hasError = false;

        try {
            // L'API gratuita di Valhalla (su openstreetmap.de) supporta max 20 punti per chiamata
            if (stopPoints.length > 1) {
                const chunkSize = 19; // 19 nuovi punti + 1 di sovrapposizione = 20 max
                const chunks = [];
                for (let i = 0; i < stopPoints.length; i += chunkSize) {
                    let chunk = stopPoints.slice(i, i + chunkSize + 1);
                    if (chunk.length > 1) chunks.push(chunk);
                }

                const decodePolyline = (str, precision = 6) => {
                    let index = 0, lat = 0, lng = 0, coordinates = [], shift = 0, result = 0, byte = null, latitude_change, longitude_change, factor = Math.pow(10, precision);
                    while (index < str.length) {
                        byte = null; shift = 0; result = 0;
                        do {
                            byte = str.charCodeAt(index++) - 63;
                            result |= (byte & 0x1f) << shift;
                            shift += 5;
                        } while (byte >= 0x20);
                        latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
                        shift = result = 0;
                        do {
                            byte = str.charCodeAt(index++) - 63;
                            result |= (byte & 0x1f) << shift;
                            shift += 5;
                        } while (byte >= 0x20);
                        longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
                        lat += latitude_change;
                        lng += longitude_change;
                        coordinates.push([lat / factor, lng / factor]);
                    }
                    return coordinates;
                };

                for (const chunk of chunks) {
                    const reqData = {
                        locations: chunk.map(p => ({ lat: p[0], lon: p[1] })),
                        costing: "auto",
                        units: "km"
                    };

                    const encodedJson = encodeURIComponent(JSON.stringify(reqData));
                    const valhallaUrl = `https://valhalla1.openstreetmap.de/route?json=${encodedJson}`;

                    const resp = await fetch(valhallaUrl);
                    if (resp.ok) {
                        const data = await resp.json();
                        if (data.trip && data.trip.legs && data.trip.legs.length > 0) {
                            data.trip.legs.forEach(leg => {
                                if (leg.shape) {
                                    const decodedCoords = decodePolyline(leg.shape, 6);
                                    allCoordinates = allCoordinates.concat(decodedCoords);
                                }
                            });
                        } else {
                            hasError = true;
                            break;
                        }
                    } else {
                        console.warn(`Errore API Valhalla: ${resp.status}`);
                        hasError = true;
                        break;
                    }
                }
            }

            if (!hasError && allCoordinates.length > 0) {
                routePolylineData = allCoordinates;
            } else {
                routePolylineData = null; // Forza il fallback
            }

        } catch (e) {
            console.warn("API Routing (Valhalla) fallita. Uso fallback (linee dritte):", e);
        } finally {
            if (mapLoader) mapLoader.classList.add('hidden');
        }

        try {
            // Fallback se l'API fallisce o se punti > 100
            if (!routePolylineData) {
                routePolylineData = stopPoints;
            }

            // 2. Disegna la linea (bordo colorato + interno bianco)
            // Sfondo spesso colorato
            const outerLine = L.polyline(routePolylineData, {
                color: line.color,
                weight: 8, // Ridotto come richiesto
                opacity: 1,
                lineJoin: 'round',
                lineCap: 'round'
            }).addTo(map);

            // Interno più sottile per dare l'effetto di un binario/tubo colorato se necessario, 
            // ma l'utente ha mandato uno screenshot dove la linea è 100% colorata e spessa, 
            // quindi manteniamo una singola linea colorata molto spessa, stile UI moderna.
            currentMapPolyline = outerLine;

            // 3. Aggiungi frecce all'interno di cerchi bianchi con bordi colorati
            if (L.polylineDecorator) {
                // Creiamo un icona HTML customizzata per la freccia direzionale
                const arrowIcon = L.divIcon({
                    className: 'route-arrow-marker',
                    html: `<div style="width: 100%; height: 100%; border-radius: 50%; background: #fff; border: 4px solid ${line.color}; display: flex; align-items: center; justify-content: center;">
                               <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="${line.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(-90deg); flex-shrink: 0; margin-left: 2px;">
                                   <polyline points="9 18 15 12 9 6"></polyline>
                               </svg>
                           </div>`,
                    iconSize: [22, 22],
                    iconAnchor: [11, 11]
                });

                currentMapDecorator = L.polylineDecorator(currentMapPolyline, {
                    patterns: [
                        { offset: '5%', repeat: '300px', symbol: L.Symbol.marker({ rotate: true, markerOptions: { icon: arrowIcon } }) }
                    ]
                }).addTo(map);
            }

            // 4. Aggiungi cerchi molto visibili per indicare le singole fermate
            const stopIcon = L.divIcon({
                className: 'route-stop-marker-html',
                html: `<div style="width: 100%; height: 100%; border-radius: 50%; background: #fff; border: 4px solid ${line.color};"></div>`,
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            trip.stops.forEach((s) => {
                const stopData = stavData.stops.find(fs => fs.id === s.stopId);
                if (!stopData) return;

                const latlng = [stopData.lat, stopData.lng];
                const marker = L.marker(latlng, {
                    icon: stopIcon,
                    zIndexOffset: 1000 // Sopra la linea
                }).addTo(map);

                // Calcolo delle linee che passano per questa fermata
                let passingLinesHTML = '';
                stavData.lines.forEach(otherLine => {
                    let passesHere = false;
                    for (let dayVariant in otherLine.dayTypes) {
                        const variantTrips = otherLine.dayTypes[dayVariant];
                        if (variantTrips && variantTrips.some(t => t.stops.some(st => st.stopId === s.stopId))) {
                            passesHere = true;
                            break;
                        }
                    }
                    if (passesHere) {
                        passingLinesHTML += `<div class="popup-line-chip" style="background-color: ${otherLine.color};">${otherLine.id}</div>`;
                    }
                });

                // Gestione connessioni/interscambi (es. Metro, Treni)
                let connectionsHTML = '';
                if (stopData.connections && stopData.connections.length > 0) {
                    let connectionItems = stopData.connections.map(conn => {
                        return `
                            <div class="popup-connection-pill">
                                <div class="popup-connection-icon-wrapper" style="background-color: ${conn.color};">
                                    <img src="${conn.icon}" class="popup-connection-icon" alt="${conn.name} icon">
                                </div>
                                <span>${conn.name}</span>
                            </div>
                        `;
                    }).join('');

                    connectionsHTML = `
                        <div class="popup-separator"></div>
                        <div style="font-size: 0.9rem; margin-bottom: 8px; color: var(--text-white);">Altre corrispondenze:</div>
                        <div class="popup-connections-container">
                            ${connectionItems}
                        </div>
                    `;
                }

                const popupContent = `
                    <div class="custom-popup-content">
                        <div class="popup-header">
                            <span class="popup-time">${s.time}</span>
                        </div>
                        <div class="popup-stop-name">${stopData.name}</div>
                        <div class="popup-lines-container">
                            ${passingLinesHTML}
                        </div>
                        ${connectionsHTML}
                    </div>
                `;

                marker.bindPopup(popupContent, {
                    className: 'atsom-map-popup',
                    closeButton: false,
                    minWidth: 200
                });

                currentMapMarkers.push(marker);
            });

            // 5. Adatta i bound della mappa al percorso
            map.fitBounds(currentMapPolyline.getBounds(), { padding: [50, 50] });

        } catch (e) {
            console.error("Errore nel tracciato mappa:", e);
        }
    };

    window.closeTripFromMapClick = function () {
        clearTripFromMap();

        // Riporta i marker blu globali sulla mappa
        markers.forEach(m => {
            if (!map.hasLayer(m.marker)) {
                map.addLayer(m.marker);
            }
        });

        // Nascondi il pulsante Close Route
        const closeRouteBtn = document.getElementById('close-route-btn');
        if (closeRouteBtn) closeRouteBtn.classList.add('hidden');

        // Riapri completamente il modal (leva peek e ridai overlay)
        stopDetailsSheet.classList.remove('map-peek');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Ripristina il pannello di ricerca sottostante
        const mainPanel = document.getElementById('main-panel');
        if (mainPanel) {
            mainPanel.classList.remove('map-hidden');
        }
    };

    function clearTripFromMap() {
        if (currentMapPolyline && map.hasLayer(currentMapPolyline)) {
            map.removeLayer(currentMapPolyline);
        }
        currentMapPolyline = null;

        if (currentMapDecorator && map.hasLayer(currentMapDecorator)) {
            map.removeLayer(currentMapDecorator);
        }
        currentMapDecorator = null;

        currentMapMarkers.forEach(marker => {
            if (map.hasLayer(marker)) map.removeLayer(marker);
        });
        currentMapMarkers = [];
    }

    // Aggiungi event listener dal bottone close in app.html se esiste
    const closeRouteBtnDOM = document.getElementById('close-route-btn');
    if (closeRouteBtnDOM) {
        closeRouteBtnDOM.addEventListener('click', window.closeTripFromMapClick);
    }

    renderLists();

    // --- MAIN BOTTOM PANEL INTERACTIVITY ---
    const mainPanel = document.getElementById('main-panel');
    const mainPanelHandle = document.getElementById('main-panel-handle');

    if (mainPanel && mainPanelHandle) {
        let isExpanded = false;

        let isDraggingHandle = false;
        let startYHandle = 0;

        let isDraggingList = false;
        let startYList = 0;
        let listScrollStart = 0;

        const handleDragStart = (clientY) => {
            isDraggingHandle = true;
            startYHandle = clientY;
            mainPanel.classList.add('dragging');
            mainPanel.style.setProperty('--drag-y', `0px`);
            document.body.style.userSelect = 'none'; // Previene la selezione del testo da PC
        };

        const handleDragMove = (clientY) => {
            if (!isDraggingHandle) return;
            let deltaY = clientY - startYHandle;

            // Effetto molla se supero i limiti
            if (isExpanded && deltaY < 0) {
                deltaY = deltaY * 0.2; // Resistenza se è già aperto
            } else if (!isExpanded && deltaY > 0) {
                deltaY = deltaY * 0.2; // Resistenza se è già in basso
            }

            mainPanel.style.setProperty('--drag-y', `${deltaY}px`);
        };

        const handleDragEnd = (clientY) => {
            if (!isDraggingHandle) return;
            isDraggingHandle = false;
            document.body.style.userSelect = '';
            mainPanel.classList.remove('dragging');

            let deltaY = clientY - startYHandle;
            mainPanel.style.setProperty('--drag-y', `0px`);

            // Se il movimento è stato piccolissimo, interpretalo come click (toggle)
            if (Math.abs(deltaY) < 5) {
                isExpanded = !isExpanded;
                mainPanel.classList.toggle('expanded', isExpanded);
                if (!isExpanded) searchInput.blur();
                return;
            }

            // Snap alla posizione vicina
            if (!isExpanded && deltaY < -40) {
                isExpanded = true;
                mainPanel.classList.add('expanded');
            } else if (isExpanded && deltaY > 40) {
                isExpanded = false;
                mainPanel.classList.remove('expanded');
                searchInput.blur();
            }
        };

        // Touch sulla maniglia
        mainPanelHandle.addEventListener('touchstart', (e) => handleDragStart(e.touches[0].clientY), { passive: true });
        mainPanelHandle.addEventListener('touchmove', (e) => handleDragMove(e.touches[0].clientY), { passive: true });
        mainPanelHandle.addEventListener('touchend', (e) => handleDragEnd(e.changedTouches[0].clientY), { passive: true });

        // Mouse sulla maniglia (per test da Computer)
        mainPanelHandle.addEventListener('mousedown', (e) => handleDragStart(e.clientY));
        document.addEventListener('mousemove', (e) => handleDragMove(e.clientY));
        document.addEventListener('mouseup', (e) => handleDragEnd(e.clientY));

        // Drag sulla lista per trascinare il pannello in basso (se si è in cima)
        mainPanel.addEventListener('touchstart', (e) => {
            if (isDraggingHandle) return;
            if (e.target.closest('#search-results')) { // o un target generico nel pannello
                startYList = e.touches[0].clientY;
                listScrollStart = searchResults.scrollTop;
            } else {
                startYList = null;
            }
        }, { passive: true });

        mainPanel.addEventListener('touchmove', (e) => {
            if (isDraggingHandle || startYList === null || !isExpanded) return;

            if (listScrollStart <= 0) {
                let deltaY = e.touches[0].clientY - startYList;
                if (deltaY > 0) { // dragging down to close
                    isDraggingList = true;
                    mainPanel.classList.add('dragging');
                    mainPanel.style.setProperty('--drag-y', `${deltaY}px`);
                }
            }
        }, { passive: true });

        mainPanel.addEventListener('touchend', (e) => {
            if (isDraggingList) {
                isDraggingList = false;
                mainPanel.classList.remove('dragging');
                let deltaY = e.changedTouches[0].clientY - startYList;
                mainPanel.style.setProperty('--drag-y', `0px`);

                if (deltaY > 50) {
                    isExpanded = false;
                    mainPanel.classList.remove('expanded');
                    searchInput.blur();
                }
            }
        }, { passive: true });

        // Espandi automaticamente quando si clicca la barra di ricerca
        searchInput.addEventListener('focus', () => {
            if (!isExpanded) {
                isExpanded = true;
                mainPanel.classList.add('expanded');
            }
        });
    }

    // --- LOGICA PWA & OBBLIGO INSTALLAZIONE ---

    // Registrazione Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.error('Service Worker registration failed', err));
    }

    // Nota: La logica di installazione è gestita in index.html (landing page).
    // app.js si occupa solo del funzionamento dell'app standalone.
});
