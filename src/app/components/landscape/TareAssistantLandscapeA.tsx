import { TareAssistantLandscapeProps, PRE_TARE_PRESETS } from './tareAssistantTypes';

const C = {
  displayBg: '#E7EBF7',
  textPrimary: '#191C24',
  passiveGrey: '#656D89',
  blue: '#98B0D8',
  green: '#06A94E',
  greenBg: '#DAF2E5',
  white: '#FFFFFF',
};
const FONT = "'Noto Sans:Display Medium', 'Noto Sans', sans-serif";

/**
 * PLATZHALTER – Variante A (Layout: horizontale Preset-Reihe).
 * Wird 1:1 durch den gelieferten Figma-Frame ersetzt.
 * Nutzt bereits die echten Engine-Handler.
 */
export default function TareAssistantLandscapeA({
  weight,
  isMetric,
  activePreTareValues,
  onPreTareToggle,
  onManualTareClick,
  onTareConfirm,
  onBack,
}: TareAssistantLandscapeProps) {
  const unit = isMetric ? 'kg' : 'lbs';
  return (
    <div style={{ position: 'relative', width: 480, height: 272, background: C.white, overflow: 'hidden', fontFamily: FONT }}>
      {/* Header */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 480, height: 44, background: C.displayBg, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
        <button onClick={onBack} style={{ border: 'none', background: 'transparent', fontSize: 14, color: C.passiveGrey, cursor: 'pointer' }}>‹ Zurück</button>
        <span style={{ fontSize: 15, fontWeight: 600, color: C.textPrimary }}>Tara-Assistent</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: C.green, border: `1px solid ${C.green}`, borderRadius: 4, padding: '2px 6px' }}>A</span>
      </div>

      {/* aktuelles Gewicht */}
      <div style={{ position: 'absolute', top: 58, left: 16, fontSize: 13, color: C.passiveGrey }}>Aktuell</div>
      <div style={{ position: 'absolute', top: 46, right: 16, fontSize: 40, fontWeight: 600, color: C.textPrimary }}>
        {weight} <span style={{ fontSize: 18 }}>{unit}</span>
      </div>

      {/* Preset-Reihe (horizontal) */}
      <div style={{ position: 'absolute', top: 108, left: 16, right: 16, display: 'flex', gap: 10 }}>
        {PRE_TARE_PRESETS.map((v) => {
          const active = activePreTareValues.includes(v);
          return (
            <button
              key={v}
              onClick={() => onPreTareToggle(v)}
              style={{ flex: 1, height: 72, borderRadius: 8, border: `1px solid ${active ? C.blue : '#D3D4D7'}`, background: active ? C.blue : C.white, color: C.textPrimary, fontSize: 18, fontWeight: 500, cursor: 'pointer' }}
            >
              {v} {unit}
            </button>
          );
        })}
      </div>

      {/* Aktionen */}
      <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, display: 'flex', gap: 10 }}>
        <button onClick={onManualTareClick} style={{ flex: 1, height: 48, borderRadius: 4, border: `1px solid #D3D4D7`, background: C.white, fontSize: 14, fontWeight: 500, color: C.textPrimary, cursor: 'pointer' }}>
          Manuell eingeben
        </button>
        <button onClick={onTareConfirm} style={{ flex: 1, height: 48, borderRadius: 4, border: 'none', background: C.greenBg, fontSize: 14, fontWeight: 600, color: C.green, cursor: 'pointer' }}>
          Als Tara übernehmen
        </button>
      </div>
    </div>
  );
}
