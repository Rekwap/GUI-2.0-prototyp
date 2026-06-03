# iScale GUI 2.0 Prototyp

Ein interaktiver Prototyp für die iScale medizinische Waage, entwickelt mit React und Tailwind CSS.

## Features

- **Gewichtsmessung** mit Tara-Funktionalität
- **Höhenmessung** (Ultraschall, Taktil, Manuell)
- **BMI/BSA Berechnung** mit verschiedenen Formeln
- **Patient/Benutzer Login-Flows**
- **Einstellungen und Menüsystem**
- **Metrisch/Imperial Einheiten**
- **Responsive Control Panel** für Tests

## Installation

```bash
# Dependencies installieren
pnpm install

# Entwicklungsserver starten
pnpm run dev
```

## Verwendung

Nach dem Start öffnet sich der Prototyp im Browser. Verwenden Sie das Control Panel auf der rechten Seite, um verschiedene Modi und Einstellungen zu testen:

- **Login Mode**: Patient-only, User-only, oder Both
- **Height Mode**: Manual, Ultrasonic, oder Tactile
- **Installation Mode**: Integrated oder Standalone
- **Unit System**: Metric oder Imperial
- **Height Required**: An/Aus für Send-Workflow
- **Test Height**: Ziel-Höhenwert für Messungen
- **Zoom Level**: 50-150% für iPad Display-Tests

## Hauptbildschirme

1. **Main Screen**: Gewichts- und Höhenanzeige
2. **Tare Assistant**: Vor-Tara und manuelle Tara-Eingabe
3. **Height Measurement**: Verschiedene Höhenmess-Modi
4. **Patient/User Login**: Barcode-Scan-Simulation
5. **Overview**: Messungsübersicht vor dem Senden
6. **Menu & Settings**: Konfiguration und Kalibrierung

## Technologie-Stack

- **React 18** mit TypeScript
- **Tailwind CSS 4.0** für Styling
- **Vite** als Build-Tool
- **shadcn/ui** Komponenten
- **Figma Make** Integration

## Projekt-Struktur

```
src/
├── app/
│   ├── App.tsx              # Hauptkomponente
│   ├── components/          # React-Komponenten
│   ├── contexts/            # Context Provider
│   └── imports/             # Figma-Importe
├── styles/                  # CSS-Dateien
└── ...
```

## Entwickelt mit

Erstellt in Figma Make - Die offizielle Figma Web-Anwendungs-Builder.

## Lizenz

Proprietär
