// Gemeinsame Props für die Landscape-Tare-Assistent-Varianten.
// Spiegelt die Handler des Portrait-`PreTare`, damit beide Varianten
// dieselbe Engine-Logik nutzen.
export interface TareAssistantLandscapeProps {
  weight: string;                          // aktuell angezeigtes (Netto-)Gewicht
  isMetric: boolean;
  taredWeight: string | null;
  activePreTareValues: string[];
  onPreTareToggle: (value: string) => void; // Preset an/aus + zurück zum Hauptscreen
  onManualTareClick: () => void;            // manuelle Tara-Eingabe öffnen
  onTareConfirm: () => void;                // aktuelles Gewicht als Tara übernehmen
  onBack: () => void;                       // Assistent schließen
}

// Preset-Werte wie im Portrait-Assistenten (kg)
export const PRE_TARE_PRESETS = ['0.50', '1.00', '2.00'];
