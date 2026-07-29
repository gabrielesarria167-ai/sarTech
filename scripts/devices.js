// device catalog 2017-22/08/2026

const icons = {
    smartphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18.5" x2="13" y2="18.5"/></svg>`,
    tablet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>`,
    computer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="12" rx="1.5"/><line x1="2" y1="19" x2="22" y2="19"/></svg>`
};

const deviceCatalog = {

    "Smartphone": {
        icon: icons.smartphone,
        brands: {

            "Apple": [
                "iPhone 17e",
                "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17", "iPhone Air",
                "iPhone 16e", "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
                "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
                "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone SE (2022)",
                "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 Mini",
                "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 Mini", "iPhone SE (2020)",
                "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
                "iPhone XS Max", "iPhone XS", "iPhone XR",
                "iPhone X"
            ],

            "Samsung": [
                // Serie S
                "Galaxy S26 Ultra", "Galaxy S26+", "Galaxy S26",
                "Galaxy S25 Ultra", "Galaxy S25 Edge", "Galaxy S25+", "Galaxy S25", "Galaxy S25 FE",
                "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S24 FE",
                "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S23 FE",
                "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22",
                "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy S21 FE",
                "Galaxy S20 Ultra", "Galaxy S20+", "Galaxy S20", "Galaxy S20 FE",
                "Galaxy S10+", "Galaxy S10", "Galaxy S10e", "Galaxy S10 5G", "Galaxy S10 Lite",
                "Galaxy S9+", "Galaxy S9",
                "Galaxy S8+", "Galaxy S8", "Galaxy S8 Active",
                // Serie Note
                "Galaxy Note 20 Ultra", "Galaxy Note 20",
                "Galaxy Note 10+", "Galaxy Note 10", "Galaxy Note 10 Lite",
                "Galaxy Note 9",
                "Galaxy Note 8",
                // Serie Z Fold
                "Galaxy Z Fold 7", "Galaxy Z Fold 6", "Galaxy Z Fold 5", "Galaxy Z Fold 4",
                "Galaxy Z Fold 3", "Galaxy Z Fold 2", "Galaxy Fold",
                // Serie Z Flip
                "Galaxy Z Flip 7 FE", "Galaxy Z Flip 7", "Galaxy Z Flip 6", "Galaxy Z Flip 5",
                "Galaxy Z Flip 4", "Galaxy Z Flip 3", "Galaxy Z Flip 5G", "Galaxy Z Flip",
                // Serie A 
                "Galaxy A90 5G (A908 / 2019)", "Galaxy A80 (A805 / 2019)", "Galaxy A73 5G (A736 / 2022)",
                "Galaxy A73 (A735 / 2022)", "Galaxy A72 (A725 / 2021)", "Galaxy A71 5G (A716 / 2020)",
                "Galaxy A71 (A715 / 2020)", "Galaxy A70S (A707 / 2019)", "Galaxy A70 (A705 / 2019)",
                "Galaxy A60 (A606 / 2019)", "Galaxy A57 5G (A576 / 2026)", "Galaxy A56 5G (A566 / 2025)",
                "Galaxy A55 (A556 / 2024)", "Galaxy A54 5G (A546 / 2023)", "Galaxy A53 5G (A536 / 2022)",
                "Galaxy A52s (A528 / 2021)", "Galaxy A52 5G (A526 / 2021)", "Galaxy A52 4G (A525 / 2021)",
                "Galaxy A51 5G (A516 / 2020)", "Galaxy A51 4G (A515 / 2019)", "Galaxy A50s (A507 / 2019)",
                "Galaxy A50 (A505 / 2019)", "Galaxy A42 5G (A426 / 2020)", "Galaxy A41 (A415 / 2020)",
                "Galaxy A40S (A407 / 2019)", "Galaxy A40 (A405 / 2019)", "Galaxy A37 5G (A376 / 2026)",
                "Galaxy A36 5G (A366 / 2025)", "Galaxy A35 5G (A356 / 2024)", "Galaxy A34 5G (A346 / 2023)",
                "Galaxy A33 5G (A336 / 2022)", "Galaxy A32 5G (A326 / 2021)", "Galaxy A32 4G (A325 / 2021)",
                "Galaxy A31 (A315 / 2020)", "Galaxy A30s (A307 / 2019)", "Galaxy A30 (A305 / 2019)",
                "Galaxy A27 5G (A276 / 2026)", "Galaxy A26 5G (A266 / 2025)", "Galaxy A25 5G (A256 / 2023)",
                "Galaxy A24 (A245 / 2023)", "Galaxy A23 5G (A236 / 2022)", "Galaxy A23 (A235 / 2022)", "Galaxy A22 5G (A226 / 2021)",
                "Galaxy A22 4G (A225 / 2021)", "Galaxy A21s (A217 / 2020)", "Galaxy A21 (A215 / 2020)", "Galaxy A20s (A207 / 2019)",
                "Galaxy A20e (A20e / 2019)", "Galaxy A20 (A205 / 2019)", "Galaxy A17 5G (A176 / 2025)", "Galaxy A17 4G (A175 / 2025)",
                "Galaxy A16 5G (A166 / 2024)", "Galaxy A16 4G (A165 / 2024)", "Galaxy A15 5G (A156 / 2023)", "Galaxy A15 (A155 / 2023)",
                "Galaxy A14 5G (A146 / 2023)", "Galaxy A14 (A145 / 2023)", "Galaxy A13s (A137 / 2022)", "Galaxy A13 5G (A136 / 2021)",
                "Galaxy A13 (A135 / 2022)", "Galaxy A12 Nacho (A127 / 2021)", "Galaxy A12 (A125 / 2020)", "Galaxy A11 (A115 / 2020)",
                "Galaxy A10s (A107 / 2019)", "Galaxy A10e (A10e / 2019)", "Galaxy A10 (A105 / 2019)", "Galaxy A07 5G (A076 / 2026)",
                "Galaxy A07 4G (A075 / 2025)", "Galaxy A06 5G (A066 / 2025)", "Galaxy A06 (A065 / 2024)", "Galaxy A05S (A057 / 2023)",
                "Galaxy A05 (A055 / 2023)", "Galaxy A04S (A047 / 2022)", "Galaxy A04 (A045 / 2022)", "Galaxy A04E (A042 / 2022)",
                "Galaxy A03s (A037 / 2021)", "Galaxy A03 (A035 / 2021)", "Galaxy A03 Core (A032 / 2021)", "Galaxy A02s (A025 / 2020)",
                "Galaxy A02 (A022 / 2020)", "Galaxy A2 Core (A260 / 2019)", "Galaxy A01 Core (A013 / 2020)", "Galaxy A01 (A015 / 2020)"
            ],

            "Google": [
                "Pixel 10 Pro XL", "Pixel 10 Pro", "Pixel 10",
                "Pixel 9a",
                "Pixel 9 Pro XL", "Pixel 9 Pro Fold", "Pixel 9 Pro", "Pixel 9", "Pixel 8a",
                "Pixel 8 Pro", "Pixel 8", "Pixel Fold", "Pixel 7a",
                "Pixel 7 Pro", "Pixel 7", "Pixel 6a",
                "Pixel 6 Pro", "Pixel 6", "Pixel 5a 5G",
                "Pixel 5", "Pixel 4a 5G", "Pixel 4a",
                "Pixel 4 XL", "Pixel 4", "Pixel 3a XL", "Pixel 3a",
                "Pixel 3 XL", "Pixel 3",
                "Pixel 2 XL", "Pixel 2",
            ],

            "Xiaomi": [
                "Xiaomi 16 Ultra", "Xiaomi 16 Pro Max", "Xiaomi 16 Pro", "Xiaomi 16",
                "Xiaomi 15 Ultra", "Xiaomi 15T Pro", "Xiaomi 15T", "Xiaomi 15 Pro", "Xiaomi 15",
                "Xiaomi 14 Ultra", "Xiaomi 14T Pro", "Xiaomi 14T", "Xiaomi 14 Pro", "Xiaomi 14",
                "Xiaomi 13 Ultra", "Xiaomi 13T Pro", "Xiaomi 13T", "Xiaomi 13 Pro", "Xiaomi 13",
                "Xiaomi 12S Ultra", "Xiaomi 12T Pro", "Xiaomi 12 Pro", "Xiaomi 12",
                "Mi 11 Ultra", "Mi 11",
                "Mi 10 Ultra", "Mi 10 Pro", "Mi 10",
                "Mi 9T Pro", "Mi 9",
                "Mi 8 Pro", "Mi 8", "Mi Mix 3",
                "Mi 6", "Mi Mix 2",
                "Redmi Note 15 Pro", "Redmi Note 15",
                "Redmi Note 14 Pro+", "Redmi Note 14 Pro", "Redmi Note 14",
                "Redmi Note 13 Pro+", "Redmi Note 13 Pro", "Redmi Note 13",
                "Redmi Note 12 Pro+", "Redmi Note 12 Pro", "Redmi Note 12",
                "Redmi Note 11 Pro+", "Redmi Note 11 Pro", "Redmi Note 11",
                "Redmi Note 10 Pro", "Redmi Note 10S", "Redmi Note 10",
                "Redmi Note 9S", "Redmi Note 9 Pro", "Redmi Note 9",
                "Redmi Note 8 Pro", "Redmi Note 8",
                "Redmi Note 7 Pro", "Redmi Note 7",
                "Redmi Note 6 Pro", "Redmi Note 5 Pro", "Redmi Note 5",
                "Redmi Note 4",
                "Redmi K70 Pro", "Redmi K60",
                "Redmi 13 5G", "Redmi 12", "Redmi 10", "Redmi 9",
            ],

            "Realme": [
                "Realme GT8 Pro",
                "Realme GT7T", "Realme GT7 Pro", "Realme GT7",
                "Realme GT6T", "Realme GT6",
                "Realme GT3", "Realme GT Neo5",
                "Realme GT2 Pro", "Realme GT2", "Realme GT Neo3",
                "Realme GT Master Edition", "Realme GT",
                "Realme 16 Pro", "Realme 15 Pro", "Realme 14 Pro",
                "Realme 13 Pro", "Realme 12 Pro", "Realme 11 Pro",
                "Realme 10", "Realme 9", "Realme 8", "Realme 7", "Realme 6",
                "Realme 5", "Realme 3", "Realme 1",
            ],

            "Motorola": [
                // Serie Razr (pieghevoli)
                "Razr 60 Ultra", "Razr 60",
                "Razr 50 Ultra", "Razr 50",
                "Razr 40 Ultra", "Razr 40",
                "Razr 2022",
                "Razr 5G",
                "Razr (2019)",
                // Serie Edge
                "Edge 60 Pro", "Edge 60 Fusion", "Edge 60",
                "Edge 50 Ultra", "Edge 50 Pro", "Edge 50",
                "Edge 40 Pro", "Edge 40",
                "Edge 30 Pro", "Edge 30 Ultra", "Edge 30",
                "Edge 20 Pro", "Edge 20",
                "Edge Plus (2020)", "Edge (2020)",
                // Serie G — un modello rappresentativo per anno
                "Moto G47 (XT2625 / 2026)", "Moto G37 Power (XT2625 / 2026)",
                "Moto G37 (XT2625 / 2026)", "Moto G17 Power (XT2623 / 2026)",
                "Moto G17 (XT2623 / 2026)", "Moto G77 (XT2621 / 2026)",
                "Moto G67 (XT2621-2 / 2026)", "Moto G Power (XT2617 / 2026)",
                "Moto G Play (XT2615 / 2026)", "Moto G 5G (XT2613 / 2026)",
                "Moto G Stylus 5G (XT2619 / 2026)", "Moto G06 Power (XT2535-10 /2025)",
                "Moto G06 (XT2535 / 2025)", "Moto G57 Power (XT2537-5 / 2025)",
                "Moto G57 (XT2537 / 2025)", "Moto G67 Power 5G (XT2533 / 2025)",
                "Moto G96 (XT2531 / 2025)", "Moto G56 5G (XT2529 / 2025)",
                "Moto G86 (XT2527 / 2025)", "Moto G05 (XT2523 / 2025)",
                "Moto G15 Power (XT2521-5 / 2025)", "Moto G15 (XT2521 / 2025)",
                "Moto G Stylus 5G (XT2517 / 2025)", "Moto G Power (XT2515 / 2025)",
                "Moto G 5G (XT2513 / 2025)", "Moto G75 5G (XT2437 / 2024)",
                "Moto G55 5G (XT2435 / 2024)", "Moto G35 (XT2433 / 2024)",
                "Moto G64 5G (XT2431 / 2024)", "Moto G85 (XT2427 / 2024)",
                "Moto G24 Power (XT2425 / 2024)", "Moto G24 (XT2423 / 2024)",
                "Moto G04 / G04s (XT2421 / 2024)", "Moto G Stylus 5G (XT2419 / 2024)",
                "Moto G 5G (XT2417 / 2024)", "Moto G Power 5G (XT2415 / 2024)",
                "Moto G Play (XT2413 / 2024)", "Moto G45 5G (XT2369 / 2024)",
                "Moto G34 (XT2363 / 2023)", "Moto G84 (XT2347 / 2023)",
                "Moto G14 (XT2341 / 2023)", "Moto G54 (XT2343 / 2023)",
                "Moto G53 (XT2335 / 2022)", "Moto G23 (XT2333 / 2023)",
                "Moto G13 (XT2331 / 2023)", "Moto G Stylus 4G (XT2317 / 2023)",
                "Moto G Stylus 5G (XT2315 / 2023)", "Moto G 5G (XT2313 / 2023)",
                "Moto G Power 5G (XT2311 / 2023)", "Moto G Play (XT2271 / 2023)",
                "Moto G73 (XT2327 / 2022)", "Moto G32 (XT2235 / 2022)",
                "Moto G42 (XT2233 / 2022)", "Moto G22 (XT2231 / 2022)",
                "Moto G82 5G (XT2225-1 / 2022)", "Moto G71S (XT2225-2/ 2022)", 
                "Moto G62 5G (XT2223 / 2022)", "Moto G52 (XT2221 / 2022)", 
                "Moto G Stylus 5G (XT2215 / 2022)", "Moto G 5G (XT2213 / 2022)",
                "Moto G Stylus 4G (XT2211 / 2022)", "Moto G200 5G (XT2175 / 2022)", 
                "Moto G31 (XT2173 / 2021)", "Moto G51 5G (XT2171 / 2021)", 
                "Moto G71 5G (XT2169 / 2022)", "Moto G Power (XT2165 / 2022)", 
                "Moto G41 (XT2167 / 2022)", "Moto G Pure (XT2163 / 2021)", 
                "Moto G50 5G (XT2149 / 2021)", "Moto G40 Fusion (XT2147 / 2021)", 
                "Moto G50 (XT2137 / 2021)", "Moto G60 (XT2135 / 2021)", 
                "Moto G60S (XT2133 / 2021)", "Moto G Stylus 5G (XT2131 / 2021)", 
                "Moto G30 (XT2129 / 2021)", "Moto G20 (XT2128 / 2021)", 
                "Moto G10 Power (XT2127-4 / 2021)", "Moto G10 (XT2127-2 / 2021)", 
                "Moto G100 (XT2125 / 2021)", "Moto G Power (XT2117 / 2021)", 
                "Moto G Stylus 6.8 (XT2115 / 2021)", "Moto G Play (XT2093 / 2021)"
            ],

            "Huawei": [
                // Serie Mate (incl. pieghevoli Mate X)
                "Mate 80 Pro", "Mate 80",
                "Mate X6", "Mate XT", "Mate 70 Pro", "Mate 70",
                "Mate X5", "Mate X3", "Mate 60 Pro", "Mate 60",
                "Mate Xs 2", "Mate 50 Pro", "Mate 50",
                "Mate X2",
                "Mate Xs", "Mate 40 Pro", "Mate 40",
                "Mate X", "Mate 30 Pro", "Mate 30",
                "Mate 20 Pro", "Mate 20",
                "Mate 10 Pro", "Mate 10",
                // Serie P / Pura (rinominata "Pura" dal 2024)
                "Pura 80 Ultra", "Pura 80 Pro", "Pura 80",
                "Pura 70 Ultra", "Pura 70 Pro", "Pura 70",
                "P60 Pro", "P60",
                "P50 Pro", "P50",
                "P40 Pro", "P40",
                "P30 Pro", "P30",
                "P20 Pro", "P20",
                "P10 Plus", "P10",
                // Serie Nova — un modello rappresentativo per anno
                "Nova 13 (2025)", "Nova 12 Pro (2024)", "Nova 11 Pro (2023)", "Nova 10 Pro (2022)",
                "Nova 9 (2021)", "Nova 7 (2020)", "Nova 5T (2019)", "Nova 3 (2018)", "Nova 2 (2017)",
            ],

        }
    },

    "Tablet": {
        icon: icons.tablet,
        brands: {

            "Apple": [
                // iPad Pro 13" / 12.9" (il formato è passato da 12.9" a 13" nel 2024)
                "iPad Pro 13\" (2025)", "iPad Pro 13\" (2024)",
                "iPad Pro 12.9\" (2022)", "iPad Pro 12.9\" (2021)", "iPad Pro 12.9\" (2020)",
                "iPad Pro 12.9\" (2018)", "iPad Pro 12.9\" (2017)",
                // iPad Pro 11" (e l'ultimo 10.5" prima del cambio formato)
                "iPad Pro 11\" (2025)", "iPad Pro 11\" (2024)", "iPad Pro 11\" (2022)",
                "iPad Pro 11\" (2021)", "iPad Pro 11\" (2020)", "iPad Pro 11\" (2018)",
                "iPad Pro 10.5\" (2017)",
                // iPad Air
                "iPad Air 13\" (2026)", "iPad Air 11\" (2026)",
                "iPad Air 13\" (2025)", "iPad Air 11\" (2025)",
                "iPad Air 13\" (2024)", "iPad Air 11\" (2024)",
                "iPad Air 5 (2022)", "iPad Air 4 (2020)", "iPad Air 3 (2019)",
                // iPad (base)
                "iPad 11ª gen. (2025)", "iPad 10ª gen. (2022)", "iPad 9ª gen. (2021)",
                "iPad 8ª gen. (2020)", "iPad 7ª gen. (2019)", "iPad 6ª gen. (2018)", "iPad 5ª gen. (2017)",
                // iPad mini
                "iPad mini 7 (2024)", "iPad mini 6 (2021)", "iPad mini 5 (2019)",
            ],

            "Samsung": [
                // Serie Tab S (fascia alta)
                "Tab S11 11\" (2025)", "Tab S10 Lite 10.9\" (2025)",
                "Tab S10 FE+ 13.1\" (2025)", "Tab S10 FE 10.9\" (2025)",
                "Tab S10 Ultra 14.6\" (2024)", "Tab S10+ 12.4\" (2024)",
                "Tab S9 FE+ 12.4\" (2023)", "Tab S9 FE 10.9\" (2023)",
                "Tab S9 Ultra 14.6\" (2023)", "Tab S9+ 12.4\" (2023)", "Tab S9 11\" (2023)",
                "Tab S8 Ultra 14.6\" (2022)", "Tab S8+ 12.4\" (2022)", "Tab S8 11\" (2022)",
                "Tab S7 FE 12.4\" (2021)", "Tab S7+ 12.4\" (2020)", "Tab S7 11\" (2020)",
                "Tab S6 Lite 10.4\" (2020)", "Tab S6 10.5\" (2019)", "Tab S5e 10.5\" (2019)",
                "Tab S4 10.5\" (2018)", "Tab S3 9.7\" (2017)",
                // Serie Tab A (fascia media/entry) — un modello per generazione
                "Tab A11+ 11\" (2025)", "Tab A11 8.7\" (2025)",
                "Tab A9+ 11\" (2023)", "Tab A9 8.7\" (2023)",
                "Tab A8 10.5\" (2021)", "Tab A7 10.4\" (2020)",
                "Tab A 10.5\" (2018)", "Tab A 8.0\" (2017)",
            ],

            "Xiaomi": [
                "Xiaomi Pad 7 Pro (2025)", "Xiaomi Pad 7 (2024)",
                "Xiaomi Pad 6S Pro (2024)", "Xiaomi Pad 6 Pro (2023)", "Xiaomi Pad 6 (2023)",
                "Xiaomi Pad 5 Pro (2021)", "Xiaomi Pad 5 (2021)",
                "Redmi Pad Pro (2024)", "Redmi Pad SE (2023)", "Redmi Pad (2022)",
            ],

            "Huawei": [
                "MatePad Edge (2026)",
                "MatePad Pro 13.2\" (2023)", "MatePad Pro 11\" (2022)", "MatePad Pro 2021 (2021)",
                "MatePad 11.5\" S (2024)", "MatePad 11.5\" (2023)", "MatePad 11 (2023)",
                "MatePad Air (2023)", "MatePad 11 (2021)", "MatePad (2022)", "MatePad (2020)",
                "MatePad SE (2022)",
            ],

            "Lenovo": [
                "Tab P12 (2023)", "Tab P11 (2022)",
                "Tab M10 (2022)", "Tab M9 (2023)", "Yoga Tab 13 (2022)",
            ],

        }
    },

    "Computer": {
        icon: icons.computer,
        brands: {

            "Apple": [
                // MacBook Pro — chip + taglio + anno: molti clienti riconoscono il proprio
                // Mac dal chip ("è un M2 Pro") prima ancora che dall'anno esatto.
                "MacBook Pro 14\"/16\" M5 Pro/M5 Max (2026)",
                "MacBook Pro 14\" M5 (2025)",
                "MacBook Pro 14\"/16\" M4/M4 Pro/M4 Max (2024)",
                "MacBook Pro 14\"/16\" M3/M3 Pro/M3 Max (2023)",
                "MacBook Pro 14\"/16\" M2 Pro/M2 Max (2023)",
                "MacBook Pro 13\" M2 (2022)",
                "MacBook Pro 14\"/16\" M1 Pro/M1 Max (2021)",
                "MacBook Pro 13\" M1 (2020)", "MacBook Pro 13\" Intel (2020)",
                "MacBook Pro 16\" Intel (2019)",
                "MacBook Pro 13\"/15\" Intel (2018)", "MacBook Pro 13\"/15\" Intel (2017)",
                // MacBook Air
                "MacBook Air 13\"/15\" M5 (2026)",
                "MacBook Air 13\"/15\" M4 (2025)",
                "MacBook Air 13\"/15\" M3 (2024)",
                "MacBook Air 13\"/15\" M2 (2023)",
                "MacBook Air 13\" M2 (2022)",
                "MacBook Air 13\" M1 (2020)", "MacBook Air 13\" Intel (2020)",
                "MacBook Air 13\" Intel (2019)", "MacBook Air 13\" Intel (2018)",
                // MacBook Neo — nuova linea economica, debuttata marzo 2026
                "MacBook Neo 13\" A18 Pro (2026)",
                // iMac
                "iMac 24\" M5 (2026)", "iMac 24\" M4 (2024)", "iMac 24\" M3 (2023)", "iMac 24\" M1 (2021)",
                "iMac 27\" Intel (2020)", "iMac 21.5\"/27\" Intel (2017-2019)",
                // Mac mini
                "Mac mini M5/M5 Pro (2026)", "Mac mini M4/M4 Pro (2024)",
                "Mac mini M2/M2 Pro (2023)", "Mac mini M1 (2020)", "Mac mini Intel (2018)",
                // Mac Studio
                "Mac Studio M5 Max (2026)", "Mac Studio M4 Max/M3 Ultra (2025)",
                "Mac Studio M2 Max/M2 Ultra (2023)", "Mac Studio M1 Max/M1 Ultra (2022)",
            ],

            "Samsung": [
                "Galaxy Book5 Pro (2025)", "Galaxy Book4 Ultra (2024)", "Galaxy Book4 Pro (2024)",
                "Galaxy Book3 Ultra 16\" (2023)", "Galaxy Book3 Pro 16\" (2023)", "Galaxy Book3 Pro 15.6\" (2023)",
                "Galaxy Book2 Pro 360 15.6\" (2022)", "Galaxy Book2 Pro 360 13.3\" (2022)", "Galaxy Book2 12\" (2022)",
                "Galaxy Book Pro 360 13.3\" (2021)", "Galaxy Book Pro 15.6\" (2021)",
                "Galaxy Book Flex 15.6\" (2020)", "Galaxy Book Ion 15.6\" (2020)",
                "Galaxy Book 15.6\" (2017)",
            ],

            // Marchi Windows: qui elenco le LINEE di prodotto, non modello+anno —
            // un cliente sa dire "è un HP Pavilion", raramente sa dire l'anno o il chip esatto.
            "Dell": ["XPS", "Inspiron", "Latitude", "Vostro", "Alienware"],
            "HP": ["Pavilion", "EliteBook", "ProBook", "Spectre", "Envy", "Omen", "ZBook"],
            "Lenovo": ["ThinkPad", "IdeaPad", "Legion", "Yoga", "LOQ"],
            "Asus": ["ZenBook", "VivoBook", "ROG", "TUF Gaming", "ExpertBook"],
            "Acer": ["Aspire", "Swift", "Predator", "Nitro", "TravelMate"],
            "Microsoft": ["Surface Laptop", "Surface Pro", "Surface Go", "Surface Laptop Studio"],

        }
    }
};