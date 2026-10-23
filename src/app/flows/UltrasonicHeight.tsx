// Ultrasonic height measurement (GUI 2.1, section "HEIGHT - ULTRASONIC MEASUREMENT", Figma 11125:33087).
// Height (main screen) or re-measure → full-screen "Meas. in progress …" (image loop, 600 ms per image)
// → result with steppers, repeat and check. Check / back return to the main screen.
import { useEffect, useRef, useState } from 'react';
import { FigmaScreen, HitArea } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';

const INCH = 2.54;

/** Stepper limits and increments: 30–300 cm in 0.5 cm, or 1'0"–9'0" in ¼ in. */
export function stepperRange(isMetric: boolean) {
  return isMetric ? { inc: 0.5, lo: 30, hi: 300, label: '0.5 cm' } : { inc: 0.25, lo: 12, hi: 108, label: '1/4 in' };
}

/**
 * One stepper press. The first press rounds up / down to the next x.0 / x.5 (¼ in imperial);
 * after that it moves by one increment. Values stay within the limits.
 */
export function stepHeight(cm: number, dir: 1 | -1, isMetric: boolean, first: boolean): number {
  const { inc, lo, hi } = stepperRange(isMetric);
  const v = isMetric ? cm : cm / INCH;
  const k = v / inc;
  const aligned = Math.abs(k - Math.round(k)) < 1e-6;
  let next = first && !aligned ? (dir > 0 ? Math.ceil(k) : Math.floor(k)) * inc : (Math.round(k) + dir) * inc;
  next = Math.min(hi, Math.max(lo, next));
  return isMetric ? next : next * INCH;
}

export function atLimit(cm: number, isMetric: boolean) {
  const { lo, hi } = stepperRange(isMetric);
  const v = isMetric ? cm : cm / INCH;
  return { min: v <= lo + 1e-6, max: v >= hi - 1e-6 };
}

const MEAS = [SCREENS.ussMeas1, SCREENS.ussMeas2, SCREENS.ussMeas3];
const MEAS_P = ['I12364:25982;', 'I12364:25984;', 'I12364:25986;'];

export function UltrasonicHeightScreen({ isMetric, targetCm, formatImperial, onBack, onConfirm }: {
  isMetric: boolean;
  /** Height delivered by the simulated sensor (control panel). */
  targetCm: number;
  formatImperial: (cm: string) => string;
  onBack: () => void;
  onConfirm: (cm: string) => void;
}) {
  const [measuring, setMeasuring] = useState(true);
  const [frame, setFrame] = useState(0);
  const [cm, setCm] = useState(0);
  const [pressed, setPressed] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => clear, []);

  const measure = () => {
    clear();
    setMeasuring(true);
    setFrame(0);
    setPressed(false);
    timers.current.push(setTimeout(() => setFrame(1), 600), setTimeout(() => setFrame(2), 1200));
    timers.current.push(setTimeout(() => { setCm(targetCm); setMeasuring(false); }, 1800));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(measure, []);

  const unit = isMetric ? 'cm' : 'ft\'in"';
  const show = (v: number) => (isMetric ? v.toFixed(1) : formatImperial(v.toFixed(1)));

  if (measuring) {
    const p = MEAS_P[frame];
    return <FigmaScreen data={MEAS[frame]} text={{ [p + '11078:31502;10631:2236']: show(0), [p + '11078:31502;10631:2232']: unit }} />;
  }

  const lim = atLimit(cm, isMetric);
  const data = lim.min ? SCREENS.ussMin : lim.max ? SCREENS.ussMax : SCREENS.ussResult;
  const p = lim.min ? 'I12364:26027;' : lim.max ? 'I12364:26029;' : 'I12364:25988;';
  const press = (dir: 1 | -1) => { setCm(v => stepHeight(v, dir, isMetric, !pressed)); setPressed(true); };
  return (
    <FigmaScreen
      data={data}
      text={{
        [p + '11133:54414;10631:2236']: show(cm),
        [p + '11133:54414;10631:2232']: unit,
        [p + '12144:23112']: stepperRange(isMetric).label,
      }}
      onClick={{ [p + '11133:54415;10670:14620']: onBack }}
    >
      {!lim.min && <HitArea x={66} y={320} w={50} h={50} label="Minus" onClick={() => press(-1)} />}
      {!lim.max && <HitArea x={156} y={320} w={50} h={50} label="Plus" onClick={() => press(1)} />}
      <HitArea x={8} y={416} w={72} h={56} label="Measure again" onClick={measure} />
      <HitArea x={92} y={416} w={172} h={56} label="Confirm" onClick={() => onConfirm(cm.toFixed(1))} />
    </FigmaScreen>
  );
}
