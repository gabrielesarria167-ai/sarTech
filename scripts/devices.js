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
                "iPhone X", "iPhone 8 Plus", "iPhone 8",
                
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
                // Serie A — un modello rappresentativo per generazione/anno
                "Galaxy A57 (2026)", "Galaxy A56 (2025)", "Galaxy A55 (2024)", "Galaxy A54 (2023)",
                "Galaxy A53 (2022)", "Galaxy A52 (2021)", "Galaxy A51 (2020)", "Galaxy A50 (2019)",
                "Galaxy A8 (2018)", "Galaxy A5 (2017)",
                
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
                
            ],

            "Redmi": [
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
                "Moto G77 (2026)", "Moto G96 (2025)", "Moto G85 (2024)", "Moto G84 (2023)",
                "Moto G82 (2022)", "Moto G100 (2021)", "Moto G9 Plus (2020)",
                "Moto G7 Plus (2019)", "Moto G6 Plus (2018)", "Moto G5S Plus (2017)",
                
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

            "Altra marca": []
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

            "Altra marca": []
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
            "Dell": ["XPS", "Inspiron", "Latitude", "Vostro", "Alienware", ],
            "HP": ["Pavilion", "EliteBook", "ProBook", "Spectre", "Envy", "Omen", "ZBook", ],
            "Lenovo": ["ThinkPad", "IdeaPad", "Legion", "Yoga", "LOQ", ],
            "Asus": ["ZenBook", "VivoBook", "ROG", "TUF Gaming", "ExpertBook", ],
            "Acer": ["Aspire", "Swift", "Predator", "Nitro", "TravelMate", ],
            "Microsoft": ["Surface Laptop", "Surface Pro", "Surface Go", "Surface Laptop Studio", ],
        }
    }
};