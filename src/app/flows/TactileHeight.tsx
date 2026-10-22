// Tactile height measurement (GUI 2.1, section "HEIGHT - TACTILE MEASUREMENT").
// One 1:1 Figma screen (metric: tactile_rod_0, imperial: Height ft'in) whose
// value follows the head slide. Moving the head slide is simulated by tapping
// the value panel or the rod icon; the screen itself never changes layout.
import { useEffect, useRef, useState } from 'react';
import { FigmaScreen, HitArea } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';

/** Lowest position of the head slide (cm) — measurements below need the kids button. */
const ROD_MIN_CM = 120;

export type TactileHeightProps = {
  isMetric: boolean;
  /** Height the simulated head slide moves to (cm). */
  targetCm: number;
  /** Start value (cm), e.g. the last measurement when repeating. */
  initialCm?: number;
  /** Imperial display format (cm → ft'in"). */
  formatImperial: (cm: string) => string;
  onBack: () => void;
  onConfirm: (cm: string) => void;
  /** "< 120 cm" / "< 47 in": manual entry for children. */
  onKids: () => void;
};

export function TactileHeightScreen({ isMetric, targetCm, initialCm, formatImperial, onBack, onConfirm, onKids }: TactileHeightProps) {
  const [cm, setCm] = useState(initialCm ?? ROD_MIN_CM);
  const raf = useRef<number | null>(null);
  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);

  const moveHeadSlide = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    const from = cm;
    const to = Math.max(ROD_MIN_CM, targetCm);
    const t0 = performance.now();
    const dur = 1200;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      setCm(from + (to - from) * e);
      raf.current = k < 1 ? requestAnimationFrame(step) : null;
    };
    raf.current = requestAnimationFrame(step);
  };

  const value = cm.toFixed(1);
  const p = isMetric ? 'I11103:20608;' : 'I11168:24415;';
  return (
    <FigmaScreen
      data={isMetric ? SCREENS.tactileMetric : SCREENS.tactileImperial}
      text={{ [p + '11078:31502;10631:2236']: isMetric ? value : formatImperial(value) }}
      onClick={{ [p + '11038:20551;10670:14620']: onBack }}
    >
      {/* Head slide simulation: value panel + rod icon */}
      <HitArea x={6} y={56} w={260} h={220} label="Move head slide" onClick={moveHeadSlide} />
      <HitArea x={96} y={286} w={80} h={80} label="Move head slide" onClick={moveHeadSlide} />
      <HitArea x={8} y={416} w={72} h={56} label="Kids (manual entry)" onClick={onKids} />
      <HitArea x={92} y={416} w={172} h={56} label="Confirm" onClick={() => onConfirm(value)} />
    </FigmaScreen>
  );
}
