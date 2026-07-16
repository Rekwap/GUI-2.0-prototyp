import menuIcon from '../../assets/landscape-icons/menu.png';
import wifiIcon from '../../assets/landscape-icons/wifi.png';
import reweightIcon from '../../assets/landscape-icons/reweight.png';
import tarePillIcon from '../../assets/landscape-icons/tare-pill.png';
import closeIcon from '../../assets/landscape-icons/close.png';
import lockIcon from '../../assets/landscape-icons/lock.png';
import btnTareIcon from '../../assets/landscape-icons/btn-tare.png';
import btnRecallIcon from '../../assets/landscape-icons/btn-recall.png';
import btnBmiIcon from '../../assets/landscape-icons/btn-bmi.png';
import btnSendGreenIcon from '../../assets/landscape-icons/btn-send-green.png';
import btnSendBlackIcon from '../../assets/landscape-icons/btn-send-black.png';

// seca tokens (identisch zum HTML-Prototyp)
const C = {
  displayBg: '#E7EBF7',
  textPrimary: '#191C24',
  passiveGrey: '#656D89',
  blue: '#98B0D8',
  btnGrey: '#8B8D91',
  green: '#06A94E',
  greenBg: '#DAF2E5',
  white: '#FFFFFF',
};

const FONT = "'Noto Sans:Display Medium', 'Noto Sans', sans-serif";
const FONT_SEMI = "'Noto Sans:Display SemiBold', 'Noto Sans', sans-serif";

const KG_TO_LBS = 2.20462;

export interface MainScreenLandscapeProps {
  weight: string;              // Netto-Gewicht, bereits einheitengerecht formatiert
  rawWeight: string;           // gemessenes Gewicht in kg
  isMetric: boolean;
  taredWeight: string | null;
  preTareValues: string[];
  installationMode: 'integrated' | 'standalone';
  bmiLabel: string;            // 'BMI' | 'BSA'
  showReweightButton: boolean;
  isReweighting?: boolean;
  onMenuClick?: () => void;
  onTareClick: () => void;
  onRecallClick: () => void;
  onSendClick: () => void;
  onReweight: () => void;
  onRemoveTare: () => void;
}

export default function MainScreenLandscape({
  weight,
  rawWeight,
  isMetric,
  taredWeight,
  preTareValues,
  installationMode,
  bmiLabel,
  showReweightButton,
  isReweighting = false,
  onMenuClick,
  onTareClick,
  onRecallClick,
  onSendClick,
  onReweight,
  onRemoveTare,
}: MainScreenLandscapeProps) {
  const unit = isMetric ? 'kg' : 'lbs';
  const tareActive = taredWeight !== null || preTareValues.length > 0;
  const netLabel = tareActive ? 'Net' : 'Gross';
  const maxLabel = isMetric ? 'Max 500 kg' : 'Max 1102 lbs';
  const isStandalone = installationMode === 'standalone';
  const weightLocked = parseFloat(rawWeight) !== 0 && !isReweighting;

  // Tara-Gesamtwert
  const totalTareKg =
    preTareValues.reduce((s, v) => s + parseFloat(v), 0) +
    (taredWeight ? parseFloat(taredWeight) : 0);
  const tareDisplay = isMetric ? totalTareKg : totalTareKg * KG_TO_LBS;

  const buttons: { label: string; icon: string; send?: boolean; onClick: () => void }[] = [
    { label: 'TARE', icon: btnTareIcon, onClick: onTareClick },
    { label: 'RECALL', icon: btnRecallIcon, onClick: onRecallClick },
    { label: bmiLabel, icon: btnBmiIcon, onClick: () => {} },
    {
      label: 'SEND',
      icon: isStandalone ? btnSendBlackIcon : btnSendGreenIcon,
      send: !isStandalone,
      onClick: onSendClick,
    },
  ];

  return (
    <div
      style={{ position: 'relative', width: 480, height: 272, background: C.white, overflow: 'hidden', fontFamily: FONT }}
      data-name="iScale (Landscape)"
    >
      {/* Statusbar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 480, height: 50, background: C.displayBg }}>
        <button
          onClick={onMenuClick}
          style={{ position: 'absolute', left: 19, top: 13, width: 24, height: 24, padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' }}
          aria-label="Menü"
        >
          <img src={menuIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain', display: 'block' }} />
        </button>
        <img src={wifiIcon} alt="" style={{ position: 'absolute', left: 453, top: 13, width: 24, height: 24, objectFit: 'contain' }} />
      </div>

      {/* Weight-Zone */}
      <div style={{ position: 'absolute', left: 0, bottom: 0, width: 480, height: 222, background: C.displayBg }}>
        <div style={{ position: 'absolute', left: 16, top: 12, fontSize: 13, fontWeight: 500, color: C.passiveGrey }}>{maxLabel}</div>

        {weightLocked && (
          <img src={lockIcon} alt="" style={{ position: 'absolute', right: 16, top: 60, width: 24, height: 24, objectFit: 'contain' }} />
        )}

        <div style={{ position: 'absolute', right: 74, top: 22, fontSize: 106, lineHeight: 1, fontWeight: 600, color: C.textPrimary, letterSpacing: '-2px', fontFamily: FONT_SEMI, fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          {weight}
        </div>
        <div style={{ position: 'absolute', right: 20, top: 75, fontSize: 24, fontWeight: 500, color: C.textPrimary }}>{unit}</div>
        <div style={{ position: 'absolute', right: 20, top: 117, fontSize: 24, fontWeight: 500, color: C.passiveGrey }}>{netLabel}</div>

        {/* Tara-Reihe */}
        {tareActive && (
          <div style={{ position: 'absolute', left: 16, bottom: 76, display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={onReweight}
              disabled={!showReweightButton || isReweighting}
              style={{ width: 54, height: 36, background: C.blue, borderRadius: 30, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', opacity: showReweightButton ? 1 : 0.5 }}
              aria-label="Reweight"
            >
              <img src={reweightIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />
            </button>
            <div style={{ width: 180, height: 36, background: C.blue, borderRadius: 80, display: 'flex', alignItems: 'center', paddingLeft: 8, gap: 8, color: C.textPrimary }}>
              <img src={tarePillIcon} alt="" style={{ width: 24, height: 24, flex: 'none', objectFit: 'contain' }} />
              <span style={{ flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 500 }}>
                -{tareDisplay.toFixed(isMetric ? 2 : 1)} {unit}
              </span>
              <button onClick={onRemoveTare} style={{ width: 24, height: 24, flex: 'none', padding: 0, border: 'none', background: 'transparent', cursor: 'pointer' }} aria-label="Tara entfernen">
                <img src={closeIcon} alt="" style={{ width: 24, height: 24, objectFit: 'contain' }} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Button-Bar */}
      <div style={{ position: 'absolute', left: 8, top: 208, width: 464, height: 56, background: C.white, border: `1px solid ${C.displayBg}`, borderRadius: 8, boxShadow: '0 2px 6px rgba(25,28,36,.18)', display: 'flex', overflow: 'hidden' }}>
        {buttons.map((b, i) => (
          <button
            key={i}
            onClick={b.onClick}
            style={{ width: 107, height: 48, margin: 4, borderRadius: 4, border: 'none', background: b.send ? C.greenBg : C.white, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 6, gap: 2, cursor: 'pointer' }}
          >
            <span style={{ height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={b.icon} alt="" style={{ height: 26, width: 'auto', objectFit: 'contain' }} />
            </span>
            <span style={{ fontSize: 13, fontWeight: 500, color: b.send ? C.green : C.btnGrey }}>{b.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
