const stavData = {
    // 1. ANAGRAFICA FERMATE (Flat List)
    stops: [
        {
            "id": "stop_abb_vv",
            "name": "Abbiategrasso - P.za Vittorio Veneto",
            "lat": 45.400911,
            "lng": 8.913239
        },
        {
            "id": "stop_s_stef_tic",
            "name": "S. Stefano Ticino - T. Stazione FS",
            "lat": 45.480969,
            "lng": 8.916486
        },
        {
            "id": "stop_abb_fs",
            "name": "Abbiategrasso - Stazione FS",
            "lat": 45.397611,
            "lng": 8.920136
        },
        {
            "id": "stop_mil_rom",
            "name": "Milano Romolo M2/FS",
            "lat": 45.4435,
            "lng": 9.1678
        },
        {
            "id": "stop_gud_sp30",
            "name": "Gudo Visconti - SP30",
            "lat": 45.371138,
            "lng": 8.99577
        },
        {
            "id": "stop_gudo_corn",
            "name": "Gudo Visconti - Via Cornaggia",
            "lat": 45.3735,
            "lng": 8.997646
        },
        {
            "id": "stop_zelo_sp30",
            "name": "Zelo Surrigone - SP30",
            "lat": 45.385671,
            "lng": 8.982221
        },
        {
            "id": "stop_verm_sp30",
            "name": "Vermezzo - SP30/Via Roma",
            "lat": 45.392439,
            "lng": 8.977617
        },
        {
            "id": "stop_verm_cim",
            "name": "Vermezzo - Cimitero",
            "lat": 45.396541,
            "lng": 8.975189
        },
        {
            "id": "stop_verm_nav",
            "name": "Vermezzo - Naviglio",
            "lat": 45.402706,
            "lng": 8.973638
        },
        {
            "id": "stop_gagg_bett",
            "name": "Gaggiano - C.na Bettola",
            "lat": 45.403381,
            "lng": 8.984171
        },
        {
            "id": "stop_gagg_rosa",
            "name": "Gaggiano - La Rosa",
            "lat": 45.404441,
            "lng": 9.000919
        },
        {
            "id": "stop_gagg_bett2",
            "name": "Gaggiano - La Bettolina",
            "lat": 45.405114,
            "lng": 9.011338
        },
        {
            "id": "stop_gagg_fs",
            "name": "Gaggiano - Stazione FS",
            "lat": 45.409384,
            "lng": 9.031786
        },
        {
            "id": "stop_gagg_gasp",
            "name": "Gaggiano - Via De Gasperi",
            "lat": 45.407751,
            "lng": 9.044060
        },
        {
            "id": "stop_gagg_polo/vinci",
            "name": "Gaggiano - Via M. Polo/Da Vinci",
            "lat": 45.409649,
            "lng": 9.043807
        },
        {
            "id": "stop_gagg_polo/corn",
            "name": "Gaggiano - Via M. Polo/Al Cornicione",
            "lat": 45.408481,
            "lng": 9.040012
        },
        {
            "id": "stop_gagg_roma",
            "name": "Gaggiano - Via Roma",
            "lat": 45.406447,
            "lng": 9.034104
        },
        {
            "id": "stop_gagg_gramsci",
            "name": "Gaggiano - Via Gramsci",
            "lat": 45.405319,
            "lng": 9.033610
        },
        {
            "id": "stop_gagg_corn",
            "name": "Gaggiano - Via Al Cornicione",
            "lat": 45.404687,
            "lng": 9.038558
        },
        {
            "id": "stop_gagg_corn/roma",
            "name": "Gaggiano - Via Al Cornicione/Roma",
            "lat": 45.407721,
            "lng": 9.039100
        },
        {
            "id": "stop_gagg_cim",
            "name": "Gaggiano - Cimitero",
            "lat": 45,3963679,
            "lng": 9,0301294
        },
        {
            "id": "stop_vig",
            "name": "Vigano",
            "lat": 45,3799770,
            "lng": 9,0282039
        },
        {
            "id": "stop_vig2",
            "name": "Vigano",
            "lat": 45,3796602,
            "lng": 9,0284486
        },
        {
            "id": "stop_vito",
            "name": "San Vito",
            "lat": 45.419784,
            "lng": 9.015116
        },
        {
            "id": "stop_trez_zano",
            "name": "Trezzano sul Naviglio - Stab. Zanoletti",
            "lat": 45.413722,
            "lng": 9.039740
        },
        {
            "id": "stop_trez_vinci/kennedy",
            "name": "Trezzano sul Naviglio - Via Da Vinci/Kennedy",
            "lat": 45.415959,
            "lng": 9.045596
        },
        {
            "id": "stop_trez_vinci/pergolesi",
            "name": "Trezzano sul Naviglio - Via Da Vinci/Pergolesi",
            "lat": 45.418491,
            "lng": 9.052169
        },
        {
            "id": "stop_trez_vinci/centro",
            "name": "Trezzano sul Naviglio - Via Da Vinci/Centro",
            "lat": 45.420398,
            "lng": 9.057053
        },
        {
            "id": "stop_trez_vinci/poste",
            "name": "Trezzano sul Naviglio - Via Da Vinci/Poste",
            "lat": 45.422176,
            "lng": 9.061668
        },
        {
            "id": "stop_trez_colombo/curiel",
            "name": "Trezzano sul Naviglio - V.le Colombo/Curiel",
            "lat": 45.423306,
            "lng": 9.064664
        },
        {
            "id": "stop_trez_colombo/curiel2",
            "name": "Trezzano sul Naviglio - V.le Colombo/Curiel",
            "lat": 45.424131,
            "lng": 9.065638
        },
        {
            "id": "stop_trez_colombo/moro",
            "name": "Trezzano sul Naviglio - V.le Colombo/Moro",
            "lat": 45.425020,
            "lng": 9.069172
        },
        {
            "id": "stop_trez_colombo/moro2",
            "name": "Trezzano sul Naviglio - V.le Colombo/Moro",
            "lat": 45.425196,
            "lng": 9.068449
        },
        {
            "id": "stop_trez_colombo/cellini",
            "name": "Trezzano sul Naviglio - V.le Colombo/Cellini",
            "lat": 45.426336,
            "lng": 9.072598
        },
        {
            "id": "stop_trez_colombo/cellini2",
            "name": "Trezzano sul Naviglio - V.le Colombo/Cellini",
            "lat": 45.426561,
            "lng": 9.071974
        },
        {
            "id": "stop_ces_vig/gramsci",
            "name": "Cesano Boscone - Nuova Vigevanese/Gramsci",
            "lat": 45.431397,
            "lng": 9.085251
        },
        {
            "id": "stop_cors_italia",
            "name": "Corsico - Viale Italia",
            "lat": 45.435976,
            "lng": 9.098308
        },
        {
            "id": "stop_cors_italia2",
            "name": "Corsico - Viale Italia",
            "lat": 45.436695,
            "lng": 9.099986
        },
        {
            "id": "stop_cors_ces",
            "name": "Corsico - Via Cesano",
            "lat": 45.437090,
            "lng": 9.101936
        },
        {
            "id": "stop_cors_vig/liberazione",
            "name": "Corsico - Nuova Vigevanese/Liberazione",
            "lat": 45.438166,
            "lng": 9.105278
        },
        {
            "id": "stop_cors_17",
            "name": "Corsico - Nuova Vigevanese 17",
            "lat": 45.442011,
            "lng": 9.113271
        },
        {
            "id": "stop_cors_172",
            "name": "Corsico - Nuova Vigevanese 17",
            "lat": 45.442698,
            "lng": 9.113975
        },
        {
            "id": "stop_mil_lore",
            "name": "Milano - Lorenteggio",
            "lat": 45.443407,
            "lng": 9.116356
        },
        {
            "id": "stop_mil_lore2",
            "name": "Milano - Lorenteggio",
            "lat": 45.443776,
            "lng": 9.116312
        },
        {
            "id": "stop_mil_lore/bis",
            "name": "Milano - Via Lorenteggio/Bisceglie",
            "lat": 45.445161,
            "lng": 9.120574
        },
        {
            "id": "stop_mil_bis/cic",
            "name": "Milano - Via Bisceglie/Ciconi",
            "lat": 45.452409,
            "lng": 9.117395
        },
        {
            "id": "stop_mil_bis/cic2",
            "name": "Milano - Via Bisceglie/Ciconi",
            "lat": 45.451962,
            "lng": 9.117621
        },
        {
            "id": "stop_mil_bis",
            "name": "Milano - Bisceglie M1",
            "lat": 45.454872,
            "lng": 9.113259
        },
    ],

    // 2. LINEE E CORSE (Trip-centric)
    lines: [
        {
            "id": "Z551",
            "name": "Z551",
            "description": "Linea Z551",
            "color": "#3b82f6",
            "dayTypes": {
                "feriale_scolastico": [
                    {
                        "tripId": "Z551_FS_Mila_1",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:30",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_2",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:45"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_3",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:02",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_4",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:10",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_5",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:17",
                                "variation": "Via Assiano Via Bestazzo"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_6",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:27",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_7",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:27",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_8",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:32",
                                "variation": "Via Monzoro Via Bestazzo"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_9",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:15",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_10",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:50",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_11",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:19",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_12",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:44",
                                "variation": "Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_13",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:16",
                                "variation": "Via Assiano"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_14",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:46"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_15",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:16"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_16",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:43",
                                "variation": "Via Monzoro Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_17",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:16"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_18",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:46"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_19",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:11",
                                "variation": "Via Einstein Via Monzoro Via Bestazzo"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_20",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:47",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_21",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:12",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_22",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:17",
                                "variation": "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_23",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:37",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_24",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:12",
                                "variation": "Via Einstein Via Bestazzo"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_25",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:52",
                                "variation": "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_26",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:15",
                                "variation": "Via Einstein Via Assiano"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_27",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:45",
                                "variation": "Via Monzoro"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_28",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:10",
                                "variation": "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_29",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:43",
                                "variation": "Via Monzoro Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_30",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:09",
                                "variation": "Via Monzoro Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_31",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:43",
                                "variation": "Via Assiano Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_32",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:14",
                                "variation": "Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_33",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:44"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_34",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:18",
                                "variation": "Via MI - Via Lombardi/Amsa"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FS_Mila_35",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:52"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    }
                ],
                "feriale_non_scolastico": [
                    {
                        "tripId": "Z551_FNS_Mila_1",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:05"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FNS_Mila_2",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:20"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_FNS_Mila_3",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:00"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    }
                ],
                "sabato_scolastico": [
                    {
                        "tripId": "Z551_SS_Mila_1",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SS_Mila_2",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SS_Mila_3",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SS_Mila_4",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SS_Mila_5",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SS_Mila_6",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    }
                ],
                "sabato_non_scolastico": [
                    {
                        "tripId": "Z551_SNS_Mila_1",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SNS_Mila_2",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SNS_Mila_3",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SNS_Mila_4",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SNS_Mila_5",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    },
                    {
                        "tripId": "Z551_SNS_Mila_6",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Monzoro": "M",
                            "Via Assiano": "A",
                            "Via MI - Via Lombardi/Amsa": "L",
                            "Via Monzoro Via MI - Via Lombardi/Amsa": "ML",
                            "Via Monzoro Via Bestazzo": "MB",
                            "Via Assiano Via Bestazzo": "AB",
                            "Via Einstein Via Bestazzo": "EB",
                            "Via Einstein Via Assiano": "EA",
                            "Via Einstein Via Monzoro Via Bestazzo": "EMB",
                            "Via Einstein Via Bestazzo Via Assiano Via MI - Via Lombardi/Amsa": "S",
                            "Via Monzoro Via Assiano Via MI - Via Lombardi/Amsa": "F",
                            "Via Assiano Via MI - Via Lombardi/Amsa": "G"
                        }
                    }
                ],
                "festivo": []
            }
        },
        {
            "id": "Z552",
            "name": "Z552",
            "description": "Linea Z552",
            "color": "#10b981",
            "dayTypes": {
                "feriale_scolastico": [
                    {
                        "tripId": "Z552_FS_SSte_1",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:25"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_SSte_2",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:20"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_SSte_3",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:50"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_SSte_4",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_SSte_5",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:18"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_SSte_6",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:20"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_SSte_7",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_SSte_8",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:50"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "07:07"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "08:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "10:27"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "12:57"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "14:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_Abbi_6",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "15:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_Abbi_7",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "15:57"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FS_Abbi_8",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "17:29"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "feriale_non_scolastico": [
                    {
                        "tripId": "Z552_FNS_SSte_1",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:25"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_SSte_2",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:20"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_SSte_3",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:50"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_SSte_4",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_SSte_5",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:50"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "07:07"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "08:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "10:27"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "14:12"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_FNS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "17:29"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "sabato_scolastico": [
                    {
                        "tripId": "Z552_SS_SSte_1",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_SSte_2",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_SSte_3",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_SSte_4",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_SSte_5",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_SSte_6",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SS_Abbi_6",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "sabato_non_scolastico": [
                    {
                        "tripId": "Z552_SNS_SSte_1",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_SSte_2",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_SSte_3",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_SSte_4",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_SSte_5",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_SSte_6",
                        "destination": "S. Stefano T. Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z552_SNS_Abbi_6",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_s_stef_tic",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "festivo": []
            }
        },
        {
            "id": "Z553",
            "name": "Z553",
            "description": "Linea Z553",
            "color": "#e11d48",
            "dayTypes": {
                "feriale_scolastico": [
                    {
                        "tripId": "Z553_FS_Mila_1",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "04:40"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_2",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:20"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "05:52"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "05:54"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_3",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:40"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_4",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:40",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_5",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:07"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:37"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:39"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_6",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_7",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:22",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:12"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:13"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_8",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:54",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:42"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:43"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_9",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:55"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_10",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:24",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_11",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:54"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:55"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_12",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:25"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_13",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:10"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_14",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:50"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_15",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:10"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_16",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:50"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "11:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "11:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_17",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:10"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_18",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:50"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:35"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:36"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_19",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:11",
                                "variation": "Via Einstein"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_20",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:16",
                                "variation": "Via Rosate Via Einstein"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_21",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_22",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:50"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:33"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:34"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_23",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:12",
                                "variation": "Via Rosate Via Einstein"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_24",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:17",
                                "variation": "Via Einstein"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_25",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_26",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:50"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:38"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:39"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_27",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:17",
                                "variation": "Via Einstein"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:47"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:48"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_28",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:17",
                                "variation": "Via Rosate Via Einstein"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_29",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_30",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:34",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_31",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:48",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:29"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_32",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:02",
                                "variation": "Via Einstein"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_33",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:10",
                                "variation": "Via Rosate Via Einstein"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_34",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:42"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:04"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:05"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_35",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:04",
                                "variation": "Via Rosate Via Einstein"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:24"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "17:15"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_36",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:42"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:24"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_37",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:02"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_38",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:08",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_39",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:42"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_40",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:34"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:35"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "19:15"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_41",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:18",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_42",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:10"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:53"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:54"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_43",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:41",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_44",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_45",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "22:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_46",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "23:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Mila_1",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:50"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Mila_2",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "07:35"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Mila_3",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "08:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Mila_4",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "12:50"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Mila_5",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "14:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Mila_6",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "18:20"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "08:00"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "09:00"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "19:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "20:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_1",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:51"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:51"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "07:30"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_2",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:06",
                                "variation": "Via Einstein"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:06",
                                "variation": "Via Einstein"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "08:30"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_3",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:00"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_4",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:00"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_5",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:36"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:36"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_6",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "11:47"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "11:47"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_7",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:51"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:51"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_8",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:27"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:27"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_9",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:09"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:09"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_10",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:11"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:11"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_11",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:36"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:36"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_12",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:16"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:16"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_13",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:37"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:37"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_14",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:17"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:17"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_15",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:58"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:58"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "17:15"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_16",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:44"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:44"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "18:15"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_17",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:23"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:23"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_18",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:58"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:58"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "19:15"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_19",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:38"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:38"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_20",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:19"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:19"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_21",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "21:22"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "21:22"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_22",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "22:11"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "22:11"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_FS_Abbi_1",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_2",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_3",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_4",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "17:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_5",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FS_Abbi_6",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "19:15"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "feriale_non_scolastico": [
                    {
                        "tripId": "Z553_FNS_Mila_1",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "04:40"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_2",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:20"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:01"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:02"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_3",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:50",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:40"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:41"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_4",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:11"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_5",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:22",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_6",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:13"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:14"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_7",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:54",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:43"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:44"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_8",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:55"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_9",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:24",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_10",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:54"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:55"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_11",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:25"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_12",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:38",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_13",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_14",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_15",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_16",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "11:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "11:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_17",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_18",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_19",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_20",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:29"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_21",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_22",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:50"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_23",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:10"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:48"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:49"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_24",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_25",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:34",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:23"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:24"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_26",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:07"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_27",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:08",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_28",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:42"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:04"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:05"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_29",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:48",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_30",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:22"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:44"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_31",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:28",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_32",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:02"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:24"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_33",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:08",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_34",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:42"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_35",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:35"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:35"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_36",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:18",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_37",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:10"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:53"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:54"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_38",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:41",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_39",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_40",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "21:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_41",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "22:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_42",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "23:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Mila_1",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:50"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Mila_2",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "08:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Mila_3",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "12:50"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Mila_4",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "18:20"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "08:00"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "19:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_1",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "07:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_2",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_3",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "18:15"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_1",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_2",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_FNS_Abbi_3",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "sabato_scolastico": [
                    {
                        "tripId": "Z553_SS_Mila_1",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "04:40"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_2",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:20"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:01"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:02"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_3",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:50",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_4",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:50",
                                "variation": "Via Einstein"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_5",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:38"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_6",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_7",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:59"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_8",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_9",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_10",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_11",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_12",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_13",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_14",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_15",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_16",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_17",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_18",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:10",
                                "variation": "Via Rosate Via Einstein"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:29"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_19",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_20",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:14",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_21",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:14",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:29"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_22",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_23",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_24",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_25",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_26",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_27",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_28",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:29"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_29",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_30",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_31",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_32",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:00"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_33",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:41",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:53"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:54"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_34",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_35",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "21:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_36",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "22:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Mila_1",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Mila_2",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Mila_3",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Mila_4",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Mila_5",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Mila_6",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_6",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_1",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_2",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:03"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:03"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_3",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:05"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_4",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:05"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_5",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "11:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "11:05"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_6",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:05"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_7",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:05"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_8",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:16"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:16"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_9",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:00"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_10",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:07"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:07"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_11",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:02"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:02"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_12",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:05"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_13",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:08"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:08"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_14",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:08"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:08"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_15",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:05"
                            },
                            {
                                "stopId": "stop_mil_rom",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A",
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_16",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "21:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "21:25"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_17",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "22:07"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "22:07"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SS_Abbi_1",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_2",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_3",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_4",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_5",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SS_Abbi_6",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "sabato_non_scolastico": [
                    {
                        "tripId": "Z553_SNS_Mila_1",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "04:40"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_2",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:20"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:01"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:02"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_3",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:50",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_4",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:38"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_5",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_6",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:44",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:59"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_7",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_8",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_9",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:44",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_10",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:44",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_11",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_12",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:44",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:59"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_13",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_14",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_15",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:58"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:59"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_16",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:44",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_17",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_18",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_19",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_20",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:29"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_21",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_22",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:28"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:29"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_23",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:14",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_24",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:00"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:38"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:39"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_25",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:24",
                                "variation": "Via Rosate"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_26",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:41",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:53"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:54"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_27",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_28",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "21:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_29",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "22:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Mila_1",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Mila_2",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Mila_3",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Mila_4",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Mila_5",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Mila_6",
                        "destination": "Milano Romolo",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_6",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_1",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "06:16"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:16"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_2",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "08:05"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_3",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "12:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_4",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "14:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_5",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_6",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "20:45"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:45"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_1",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_2",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_3",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_4",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_5",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z553_SNS_Abbi_6",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "festivo": [
                    {
                        "tripId": "Z553_F_Mila_1",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:00",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:11"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:12"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Mila_2",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:30",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:40"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:41"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Mila_3",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Mila_4",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:30",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:41"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:42"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Mila_5",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Mila_6",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:15",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:29"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Mila_7",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:30",
                                "variation": "Via Rosate"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:44"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:44"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Mila_8",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:50"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Mila_9",
                        "destination": "Milano Romolo M2/FS",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE",
                            "Via Einstein": "E"
                        }
                    },
                    {
                        "tripId": "Z553_F_Abbi_1",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:36"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:36"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_F_Abbi_2",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "11:06"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "11:06"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_F_Abbi_3",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_mil_rom",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Via Rosate": "R",
                            "Via Rosate Via Einstein": "RE"
                        }
                    },
                    {
                        "tripId": "Z553_F_Abbi_4",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:14"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:14"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_F_Abbi_5",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:58"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:58"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_F_Abbi_6",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:27"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:27"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_F_Abbi_7",
                        "destination": "Abbiategrasso - P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "21:54"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "21:54"
                            }
                        ],
                        "legend": {
                            "Via Einstein": "A"
                        }
                    },
                    {
                        "tripId": "Z553_F_Abbi_1",
                        "destination": "Abbiategrasso P.le Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    }
                ]
            }
        },
        {
            "id": "Z559",
            "name": "Z559",
            "description": "Linea Z559",
            "color": "#f59e0b",
            "dayTypes": {
                "feriale_scolastico": [
                    {
                        "tripId": "Z559_FS_Mage_1",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:38"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_2",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:33"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_3",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:49"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_4",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_5",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:19"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_6",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:24"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_7",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:51"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_8",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:13"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_9",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:40"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_10",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:55"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_11",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:33"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_12",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:18"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_13",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:05"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_14",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:48"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_15",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:33"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_16",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:45"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_17",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:25"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_18",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_19",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:53"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_20",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:20"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_21",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:48"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_22",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_23",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_24",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:30"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_25",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_26",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:24"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_27",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_28",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:20"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_29",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:57"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_30",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:37"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_31",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:13"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_32",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:18"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FS_Mage_33",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "21:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    }
                ],
                "feriale_non_scolastico": [
                    {
                        "tripId": "Z559_FNS_Mage_1",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "05:47"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_2",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:32"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_3",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:07"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_4",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:22"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_5",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "07:46"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_6",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:38"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_7",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:48"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_8",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "09:33"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_9",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "10:18"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_10",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "11:48"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_11",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:33"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_12",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:18"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_13",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "13:58"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_14",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:20"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_15",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:48"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_16",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_17",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_18",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "15:30"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_19",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_20",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "16:24"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_21",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_22",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:20"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_23",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "17:57"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_24",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:37"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_25",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "19:13"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_26",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:18"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_FNS_Mage_27",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "21:03"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    }
                ],
                "sabato_scolastico": [
                    {
                        "tripId": "Z559_SS_Mage_1",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SS_Mage_2",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SS_Mage_3",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SS_Mage_4",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SS_Mage_5",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SS_Mage_6",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    }
                ],
                "sabato_non_scolastico": [
                    {
                        "tripId": "Z559_SNS_Mage_1",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SNS_Mage_2",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SNS_Mage_3",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SNS_Mage_4",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SNS_Mage_5",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    },
                    {
                        "tripId": "Z559_SNS_Mage_6",
                        "destination": "Magenta - Via Tragella",
                        "stops": [
                            {
                                "stopId": "stop_abb_vv",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "\u2b95 CASSINETTA Via Roma": "A"
                        }
                    }
                ],
                "festivo": []
            }
        },
        {
            "id": "Z560",
            "name": "Z560",
            "description": "Linea Z560",
            "color": "#EB6894",
            "dayTypes": {
                "feriale_scolastico": [
                    {
                        "tripId": "101",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:24"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "06:32",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:34",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:35",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_gudo_corn",
                                "time": "06:36",
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:41",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:42",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "06:45",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_nav",
                                "time": "06:46"
                            },
                            {
                                "stopId": "stop_gagg_bett",
                                "time": "06:47"
                            },
                            {
                                "stopId": "stop_gagg_rosa",
                                "time": "06:49"
                            },
                            {
                                "stopId": "stop_gagg_bett2",
                                "time": "06:51"
                            },
                            {
                                "stopId": "stop_gagg_fs",
                                "time": "06:53"
                            },
                            {
                                "stopId": "stop_trez_zano",
                                "time": "06:55"
                            },
                            {
                                "stopId": "stop_trez_vinci/kennedy",
                                "time": "06:56"
                            },
                            {
                                "stopId": "stop_trez_vinci/pergolesi",
                                "time": "06:58"
                            },
                            {
                                "stopId": "stop_trez_vinci/centro",
                                "time": "06:59"
                            },
                            {
                                "stopId": "stop_trez_vinci/poste",
                                "time": "07:00"
                            },
                            {
                                "stopId": "stop_trez_colombo/curiel",
                                "time": "07:01"
                            },
                            {
                                "stopId": "stop_trez_colombo/moro",
                                "time": "07:02"
                            },
                            {
                                "stopId": "stop_trez_colombo/cellini",
                                "time": "07:04"
                            },
                            {
                                "stopId": "stop_ces_vig/gramsci",
                                "time": "07:07"
                            },
                            {
                                "stopId": "stop_cors_italia",
                                "time": "07:09"
                            },
                            {
                                "stopId": "stop_cors_ces",
                                "time": "07:10"
                            },
                            {
                                "stopId": "stop_cors_vig/liberazione",
                                "time": "07:11"
                            },
                            {
                                "stopId": "stop_cors_17",
                                "time": "07:13"
                            },
                            {
                                "stopId": "stop_mil_lore",
                                "time": "07:14"
                            },
                            {
                                "stopId": "stop_mil_bis/cic",
                                "time": "07:16"
                            },
                            {
                                "stopId": "stop_mil_bis",
                                "time": "07:18"
                            },
                        ],
                        "legend": {
                            "Direzione Gudo Visconti": "A",
                            "Direzione Milano": "B"
                        }
                    },
                    {
                        "tripId": "103",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:45"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "06:59",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:00",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:01",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_gudo_corn",
                                "time": "07:04",
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:07",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:08",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "07:09",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_nav",
                                "time": "07:16"
                            },
                            {
                                "stopId": "stop_gagg_bett",
                                "time": "07:17"
                            },
                            {
                                "stopId": "stop_gagg_rosa",
                                "time": "07:18"
                            },
                            {
                                "stopId": "stop_gagg_bett2",
                                "time": "07:19"
                            },
                            {
                                "stopId": "stop_gagg_fs",
                                "time": "07:21"
                            },
                            {
                                "stopId": "stop_trez_zano",
                                "time": "07:22"
                            },
                            {
                                "stopId": "stop_trez_vinci/kennedy",
                                "time": "07:23"
                            },
                            {
                                "stopId": "stop_trez_vinci/pergolesi",
                                "time": "07:24"
                            },
                            {
                                "stopId": "stop_trez_vinci/centro",
                                "time": "07:25"
                            },
                            {
                                "stopId": "stop_trez_vinci/poste",
                                "time": "07:26"
                            },
                            {
                                "stopId": "stop_trez_colombo/curiel",
                                "time": "07:27"
                            },
                            {
                                "stopId": "stop_trez_colombo/moro",
                                "time": "07:28"
                            },
                            {
                                "stopId": "stop_trez_colombo/cellini",
                                "time": "07:30"
                            },
                            {
                                "stopId": "stop_ces_vig/gramsci",
                                "time": "07:32"
                            },
                            {
                                "stopId": "stop_cors_italia",
                                "time": "07:36"
                            },
                            {
                                "stopId": "stop_cors_ces",
                                "time": "07:37"
                            },
                            {
                                "stopId": "stop_cors_vig/liberazione",
                                "time": "07:38"
                            },
                            {
                                "stopId": "stop_cors_17",
                                "time": "07:39"
                            },
                            {
                                "stopId": "stop_mil_lore",
                                "time": "07:40"
                            },
                            {
                                "stopId": "stop_mil_bis/cic",
                                "time": "07:45"
                            },
                            {
                                "stopId": "stop_mil_bis",
                                "time": "07:48"
                            },
                        ],
                        "legend": {
                            "Direzione Gudo Visconti": "A",
                            "Direzione Milano": "B"
                        }
                    },
                    {
                        "tripId": "102",
                        "destination": "Abbiategrasso - Stazione FS",
                        "stops": [
                            {
                                "stopId": "stop_mil_bis",
                                "time": "15:02"
                            },
                            {
                                "stopId": "stop_mil_bis/cic",
                                "time": "15:03"
                            },
                            {
                                "stopId": "stop_mil_lore/bis",
                                "time": "15:05"
                            },
                            {
                                "stopId": "stop_mil_lore",
                                "time": "15:07"
                            },
                            {
                                "stopId": "stop_cors_172",
                                "time": "15:07"
                            },
                            {
                                "stopId": "stop_cors_vig/liberazione",
                                "time": "15:09"
                            },
                            {
                                "stopId": "stop_cors_italia2",
                                "time": "15:10"
                            },
                            {
                                "stopId": "stop_ces_vig/gramsci",
                                "time": "15:13"
                            },
                            {
                                "stopId": "stop_trez_colombo/cellini2",
                                "time": "15:15"
                            },
                            {
                                "stopId": "stop_trez_colombo/moro2",
                                "time": "15:16"
                            },
                            {
                                "stopId": "stop_trez_colombo/curiel2",
                                "time": "15:18"
                            },
                            {
                                "stopId": "stop_gagg_fs",
                                "time": "15:24"
                            },
                            {
                                "stopId": "stop_gagg_bett2",
                                "time": "15:26"
                            },
                            {
                                "stopId": "stop_gagg_rosa",
                                "time": "15:27"
                            },
                            {
                                "stopId": "stop_gagg_bett",
                                "time": "15:28"
                            },
                            {
                                "stopId": "stop_verm_nav",
                                "time": "15:29"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "15:31",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:32",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:33",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_gudo_corn",
                                "time": "15:36"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:40",
                                "variation": "Direzione Abbiategrasso"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:41",
                                "variation": "Direzione Abbiategrasso"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "15:42",
                                "variation": "Direzione Abbiategrasso"
                            },
                            {
                                "stopId": "stop_abb_fs",
                                "time": "15:50"
                            }
                        ],
                        "legend": {
                            "Direzione Gudo Visconti": "A",
                            "Direzione Abbiategrasso": "B"
                        }
                    }
                ],
                "feriale_non_scolastico": [
                ],
                "sabato_scolastico": [
                    {
                        "tripId": "401",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:33"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "06:43",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:44",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:45",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_gudo_corn",
                                "time": "06:49",
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:52",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:53",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "06:54",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_nav",
                                "time": "06:56"
                            },
                            {
                                "stopId": "stop_gagg_bett",
                                "time": "06:57"
                            },
                            {
                                "stopId": "stop_gagg_rosa",
                                "time": "06:58"
                            },
                            {
                                "stopId": "stop_gagg_bett2",
                                "time": "06:59"
                            },
                            {
                                "stopId": "stop_gagg_fs",
                                "time": "07:01"
                            },
                            {
                                "stopId": "stop_trez_zano",
                                "time": "07:02"
                            },
                            {
                                "stopId": "stop_trez_vinci/kennedy",
                                "time": "07:03"
                            },
                            {
                                "stopId": "stop_trez_vinci/pergolesi",
                                "time": "07:04"
                            },
                            {
                                "stopId": "stop_trez_vinci/centro",
                                "time": "07:05"
                            },
                            {
                                "stopId": "stop_trez_vinci/poste",
                                "time": "07:06"
                            },
                            {
                                "stopId": "stop_trez_colombo/curiel",
                                "time": "07:07"
                            },
                            {
                                "stopId": "stop_trez_colombo/moro",
                                "time": "07:08"
                            },
                            {
                                "stopId": "stop_trez_vinci/cellini",
                                "time": "07:09"
                            },
                            {
                                "stopId": "stop_ces_vig/gramsci",
                                "time": "07:12"
                            },
                            {
                                "stopId": "stop_cors_italia",
                                "time": "07:13"
                            },
                            {
                                "stopId": "stop_cors_ces",
                                "time": "07:14"
                            },
                            {
                                "stopId": "stop_cors_vig/liberazione",
                                "time": "07:15"
                            },
                            {
                                "stopId": "stop_cors_17",
                                "time": "07:16"
                            },
                            {
                                "stopId": "stop_mil_lore",
                                "time": "07:17"
                            },
                            {
                                "stopId": "stop_mil_bis/cic",
                                "time": "07:20"
                            },
                            {
                                "stopId": "stop_mil_bis",
                                "time": "07:21"
                            },
                        ],
                        "legend": {
                            "Direzione Gudo Visconti": "A",
                            "Direzione Milano": "B"
                        }
                    }
                ],
                "sabato_non_scolastico": [

                ],
                "festivo": [
                ]
            }
        },
        {
            "id": "Z557",
            "name": "Z557",
            "description": "Linea Z557",
            "color": "#0B9DDD",
            "dayTypes": {
                "feriale_scolastico": [
                    {
                        "tripId": "101",
                        "destination": "San Vito",
                        "stops": [
                            {
                                "stopId": "stop_gagg_gasp",
                                "time": "06:53",
                            },
                            {
                                "stopId": "stop_gagg_polo/vinci",
                                "time": "06:55",
                            },
                            {
                                "stopId": "stop_gagg_polo/corn",
                                "time": "06:56",
                            },
                            {
                                "stopId": "stop_gagg_roma",
                                "time": "06:57",
                            },
                            {
                                "stopId": "stop_gagg_fs",
                                "time": "06:01",
                            },
                            {
                                "stopId": "stop_vito",
                                "time": "07:05",
                            },

                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "103",
                        "destination": "San Vito",
                        "stops": [
                            {
                                "stopId": "stop_gagg_gasp",
                                "time": "06:53",
                            },
                            {
                                "stopId": "stop_gagg_polo/vinci",
                                "time": "06:55",
                            },
                            {
                                "stopId": "stop_gagg_polo/corn",
                                "time": "06:56",
                            },
                            {
                                "stopId": "stop_gagg_roma",
                                "time": "06:57",
                            },
                            {
                                "stopId": "stop_gagg_fs",
                                "time": "06:01",
                            },
                            {
                                "stopId": "stop_vito",
                                "time": "07:05",
                            },

                        ],
                        "legend": {}
                    },
                ],
                "feriale_non_scolastico": [
                ],
                "sabato_scolastico": [
                    {
                        "tripId": "401",
                        "destination": "Milano Bisceglie M1",
                        "stops": [
                            {
                                "stopId": "stop_abb_fs",
                                "time": "06:33"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "06:43",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:44",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:45",
                                "variation": "Direzione Gudo Visconti"
                            },
                            {
                                "stopId": "stop_gudo_corn",
                                "time": "06:49",
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:52",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:53",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_cim",
                                "time": "06:54",
                                "variation": "Direzione Milano"
                            },
                            {
                                "stopId": "stop_verm_nav",
                                "time": "06:56"
                            },
                            {
                                "stopId": "stop_gagg_bett",
                                "time": "06:57"
                            },
                            {
                                "stopId": "stop_gagg_rosa",
                                "time": "06:58"
                            },
                            {
                                "stopId": "stop_gagg_bett2",
                                "time": "06:59"
                            },
                            {
                                "stopId": "stop_gagg_fs",
                                "time": "07:01"
                            },
                            {
                                "stopId": "stop_trez_zano",
                                "time": "07:02"
                            },
                            {
                                "stopId": "stop_trez_vinci/kennedy",
                                "time": "07:03"
                            },
                            {
                                "stopId": "stop_trez_vinci/pergolesi",
                                "time": "07:04"
                            },
                            {
                                "stopId": "stop_trez_vinci/centro",
                                "time": "07:05"
                            },
                            {
                                "stopId": "stop_trez_vinci/poste",
                                "time": "07:06"
                            },
                            {
                                "stopId": "stop_trez_colombo/curiel",
                                "time": "07:07"
                            },
                            {
                                "stopId": "stop_trez_colombo/moro",
                                "time": "07:08"
                            },
                            {
                                "stopId": "stop_trez_vinci/cellini",
                                "time": "07:09"
                            },
                            {
                                "stopId": "stop_ces_vig/gramsci",
                                "time": "07:12"
                            },
                            {
                                "stopId": "stop_cors_italia",
                                "time": "07:13"
                            },
                            {
                                "stopId": "stop_cors_ces",
                                "time": "07:14"
                            },
                            {
                                "stopId": "stop_cors_vig/liberazione",
                                "time": "07:15"
                            },
                            {
                                "stopId": "stop_cors_17",
                                "time": "07:16"
                            },
                            {
                                "stopId": "stop_mil_lore",
                                "time": "07:17"
                            },
                            {
                                "stopId": "stop_mil_bis/cic",
                                "time": "07:20"
                            },
                            {
                                "stopId": "stop_mil_bis",
                                "time": "07:21"
                            },
                        ],
                        "legend": {
                            "Direzione Gudo Visconti": "A",
                            "Direzione Milano": "B"
                        }
                    }
                ],
                "sabato_non_scolastico": [

                ],
                "festivo": [
                ]
            }
        },
        {
            "id": "Z554",
            "name": "Z554",
            "description": "Linea Z554",
            "color": "#10b981",
            "dayTypes": {
                "feriale_scolastico": [
                    {
                        "tripId": "Z554_FS_Bubb_1",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FS_Bubb_2",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FS_Bubb_3",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FS_Bubb_4",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "17:15"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:15"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FS_Bubb_5",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:15"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FS_Bubb_6",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "19:15"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:15"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FS_Alba_1",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_2",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FS_Alba_3",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:23"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:23"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_4",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_5",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_6",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "11:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "11:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_7",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_8",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_9",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_10",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_11",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "17:15"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_12",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_13",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "19:15"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_14",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FS_Alba_15",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    }
                ],
                "feriale_non_scolastico": [
                    {
                        "tripId": "Z554_FNS_Bubb_1",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FNS_Bubb_2",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FNS_Bubb_3",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:15"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_FNS_Alba_1",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_2",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_3",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:23"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:23"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_4",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "09:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "09:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_5",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "10:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "10:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_6",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "11:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "11:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_7",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_8",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_9",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_10",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "15:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "15:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_11",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_12",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_13",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_14",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_FNS_Alba_15",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    }
                ],
                "sabato_scolastico": [
                    {
                        "tripId": "Z554_SS_Bubb_1",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:16"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SS_Bubb_2",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SS_Bubb_3",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SS_Bubb_4",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SS_Bubb_5",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SS_Bubb_6",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:45"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SS_Alba_1",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SS_Alba_2",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_3",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_4",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_5",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_6",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_7",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_8",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_9",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_10",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SS_Alba_11",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    }
                ],
                "sabato_non_scolastico": [
                    {
                        "tripId": "Z554_SNS_Bubb_1",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "06:16"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SNS_Bubb_2",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:05"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SNS_Bubb_3",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SNS_Bubb_4",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SNS_Bubb_5",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:02"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SNS_Bubb_6",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:45"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SNS_Alba_1",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_SNS_Alba_2",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "07:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "07:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_3",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "08:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "08:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_4",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "12:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "12:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_5",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_6",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "14:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "14:24"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_7",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "16:24"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "16:24"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_8",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "17:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_9",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "18:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "18:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_10",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "19:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "19:25"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    },
                    {
                        "tripId": "Z554_SNS_Alba_11",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "20:25"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "20:25"
                            },
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    }
                ],
                "festivo": [
                    {
                        "tripId": "Z554_F_Bubb_1",
                        "destination": "Bubbiano - Via Europa",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z554_F_Alba_1",
                        "destination": "Albairate - Via Indipendenza/Marconi",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_zelo_sp30",
                                "time": "13:30"
                            },
                            {
                                "stopId": "stop_verm_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Via Vermezzo Centro": "A"
                        }
                    }
                ]
            }
        },
        {
            "id": "Z555",
            "name": "Z555",
            "description": "Linea Z555",
            "color": "#10b981",
            "dayTypes": {
                "feriale_scolastico": [
                    {
                        "tripId": "Z555_FS_Bina_1",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:24"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_2",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:00"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_3",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:12"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_4",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:24"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_5",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "10:19"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_6",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:41"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_7",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:38"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_8",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:38",
                                "variation": "Dest. Casorate Ospedale"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_9",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:43"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_10",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:43",
                                "variation": "Dest. Casorate Ospedale"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_11",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "15:28"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_12",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "16:48"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_13",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "19:01"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FS_Bina_14",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "23:43",
                                "variation": "Dest. Casorate Ospedale"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    }
                ],
                "feriale_non_scolastico": [
                    {
                        "tripId": "Z555_FNS_Bina_1",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FNS_Bina_2",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FNS_Bina_3",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_FNS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "07:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_FNS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_FNS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:15"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "sabato_scolastico": [
                    {
                        "tripId": "Z555_SS_Bina_1",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SS_Bina_2",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SS_Bina_3",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SS_Bina_4",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SS_Bina_5",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SS_Bina_6",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SS_Abbi_6",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "sabato_non_scolastico": [
                    {
                        "tripId": "Z555_SNS_Bina_1",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SNS_Bina_2",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SNS_Bina_3",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SNS_Bina_4",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SNS_Bina_5",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SNS_Bina_6",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_SNS_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "06:16"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SNS_Abbi_2",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "08:05"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SNS_Abbi_3",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "12:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SNS_Abbi_4",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "14:30"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SNS_Abbi_5",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "18:02"
                            }
                        ],
                        "legend": {}
                    },
                    {
                        "tripId": "Z555_SNS_Abbi_6",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "20:45"
                            }
                        ],
                        "legend": {}
                    }
                ],
                "festivo": [
                    {
                        "tripId": "Z555_F_Bina_1",
                        "destination": "Binasco - P.le Autolinee",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {
                            "Dest. Casorate Ospedale": "A"
                        }
                    },
                    {
                        "tripId": "Z555_F_Abbi_1",
                        "destination": "Abbiategrasso P.za Vittorio Veneto",
                        "stops": [
                            {
                                "stopId": "stop_gud_sp30",
                                "time": "13:30"
                            }
                        ],
                        "legend": {}
                    }
                ]
            }
        }
    ]
};

// Compatibilità
if (typeof window !== "undefined") {
    window.stavData = stavData;
}
if (typeof module !== "undefined") {
    module.exports = stavData;
}



