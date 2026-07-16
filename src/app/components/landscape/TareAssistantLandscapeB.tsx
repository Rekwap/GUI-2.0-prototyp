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
 * PLATZHALTER – Variante B (Layout: linke Anzeige + rechtes Preset-Raster).
 * Wird 1:1 durch den gelieferten Figma-Frame ersetzt.
 * Nutzt bereits die echten Engine-Handler.
 */
export default function TareAssistantLandscapeB({
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
    <div style={{ position: 'relative', width: 480, height: 272, background: C.white, overflow: 'hidden', fontFamily: FONT, display: 'flex' }}>
      {/* Linke Spalte: Anzeige + Aktionen */}
      <div style={{ width: 200, height: '100%', background: C.displayBg, padding: 16, display: 'flex', flexDirection: 'column' }}>
        <button onClick={onBack} style={{ alignSelf: 'flex-start', border: 'none', background: 'transparent', fontSize: 14, color: C.passiveGrey, cursor: 'pointer', padding: 0 }}>‹ Zurück</button>
        <span style={{ marginTop: 8, fontSize: 15, fontWeight: 600, color: C.textPrimary }}>
          Tara-Assistent <span style={{ fontSize: 11, color: C.green }}>· B</span>
        </span>
        <div style={{ marginTop: 'auto' }}>
          <div style={{ fontSize: 13, color: C.passiveGrey }}>Aktuell</div>
          <div style={{ fontSize: 44, fontWeight: 600, color: C.textPrimary, lineHeight: 1 }}>{weight}</div>
          <div style={{ fontSize: 16, color: C.passiveGrey }}>{unit}</div>
        </div>
      </div>

      {/* Rechte Spalte: Preset-Raster + Aktionen */}
      <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flex: 1 }}>
          {PRE_TARE_PRESETS.map((v) => {
            const active = activePreTareValues.includes(v);
            return (
              <button
                key={v}
                onClick={() => onPreTareToggle(v)}
                style={{ borderRadius: 8, border: `1px solid ${active ? C.blue : '#D3D4D7'}`, background: active ? C.blue : C.white, color: C.textPrimary, fontSize: 18, fontWeight: 500, cursor: 'pointer' }}
              >
                {v} {unit}
              </button>
            );
          })}
          <button onClick={onManualTareClick} style={{ borderRadius: 8, border: `1px dashed #B7BEd0`, background: C.white, color: C.passiveGrey, fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>
            Manuell…
          </button>
        </div>
        <button onClick={onTareConfirm} style={{ height: 44, borderRadius: 4, border: 'none', background: C.greenBg, fontSize: 14, fontWeight: 600, color: C.green, cursor: 'pointer' }}>
          Als Tara übernehmen
        </button>
      </div>
    </div>
  );
}
