// "Send with Height" (GUI 2.1, section "Measuring in between when height is required", Figma 10795:26042).
// Height required but not measured when sending: Add a value → NEXT → measurement by height mode
// (ultrasonic / tactile / manual) → check → overview. Back arrows return to the main screen.
import { useEffect, useRef, useState } from 'react';
import { FigmaScreen, HitArea } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';
import { useT } from '../i18n';
import ManualHeightInput from '../components/ManualHeightInput';

type Step = 'add' | 'ussMeasuring' | 'ussResult' | 'tactile' | 'manual';

/** Lowest position of the head slide (cm) — measurements below need the kids button. */
const ROD_MIN_CM = 120;
const INCH = 2.54;

export function SendHeightFlow({ heightMode, isMetric, targetCm, formatImperial, onBack, onConfirm }: {
  heightMode: 'ultrasonic' | 'manual' | 'tactile';
  isMetric: boolean;
  /** Height delivered by the simulated sensor / head slide (control panel). */
  targetCm: number;
  formatImperial: (cm: string) => string;
  onBack: () => void;
  onConfirm: (cm: string) => void;
}) {
  const t = useT();
  const [step, setStep] = useState<Step>('add');
  const [cm, setCm] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const raf = useRef<number | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
    if (raf.current) cancelAnimationFrame(raf.current);
  }, []);

  const unit = isMetric ? 'cm' : 'ft\'in"';
  const show = (v: number) => (isMetric ? v.toFixed(1) : formatImperial(v.toFixed(1)));

  const measureUltrasonic = () => {
    setStep('ussMeasuring');
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => { setCm(targetCm); setStep('ussResult'); }, 1800);
  };

  const next = () => {
    if (heightMode === 'manual') setStep('manual');
    else if (heightMode === 'tactile') { setCm(ROD_MIN_CM); setStep('tactile'); }
    else measureUltrasonic();
  };

  const moveHeadSlide = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    const from = cm;
    const to = Math.max(ROD_MIN_CM, targetCm);
    const t0 = performance.now();
    const stepFn = (now: number) => {
      const k = Math.min(1, (now - t0) / 1200);
      setCm(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      raf.current = k < 1 ? requestAnimationFrame(stepFn) : null;
    };
    raf.current = requestAnimationFrame(stepFn);
  };

  switch (step) {
    case 'add': {
      const p = 'I11178:33490;';
      return (
        <FigmaScreen
          data={SCREENS.hrAddValue}
          text={{ [p + '11178:34009;10631:2236']: show(0), [p + '11178:34009;10631:2232']: unit }}
          onClick={{ [p + '11178:34010;10670:14624']: onBack, [p + '11178:34046']: next }}
        />
      );
    }
    case 'ussMeasuring': {
      const p = 'I11178:34108;';
      return (
        <FigmaScreen
          data={SCREENS.hrUssMeasuring}
          text={{ [p + '11078:31502;10631:2236']: show(0), [p + '11078:31502;10631:2232']: unit }}
          onClick={{ [p + '11038:20551;10670:14624']: onBack }}
        />
      );
    }
    case 'ussResult': {
      const p = 'I11178:33521;';
      // Steps: 0.5 cm (metric) / ¼ in (imperial, the display resolution).
      const stepCm = isMetric ? 0.5 : INCH / 4;
      return (
        <FigmaScreen
          data={SCREENS.hrUssResult}
          text={{
            [p + '11133:54414;10631:2236']: show(cm),
            [p + '11133:54414;10631:2232']: unit,
            [p + '12144:23112']: isMetric ? '0.5 cm' : '¼ in',
          }}
          onClick={{ [p + '11133:54415;10670:14624']: onBack }}
        >
          <HitArea x={66} y={320} w={50} h={50} label="Minus" onClick={() => setCm(v => Math.max(0, v - stepCm))} />
          <HitArea x={156} y={320} w={50} h={50} label="Plus" onClick={() => setCm(v => v + stepCm)} />
          <HitArea x={8} y={416} w={72} h={56} label="Measure again" onClick={measureUltrasonic} />
          <HitArea x={92} y={416} w={172} h={56} label="Confirm" onClick={() => onConfirm(cm.toFixed(1))} />
        </FigmaScreen>
      );
    }
    case 'tactile': {
      const p = 'I11178:33076;';
      return (
        <FigmaScreen
          data={SCREENS.hrTactile}
          text={{
            [p + '11078:31502;10631:2236']: show(cm),
            [p + '11078:31502;10631:2232']: unit,
            ...(isMetric ? {} : { [p + '11053:31211;11053:31221']: t('KEY_MIN_LENGTH_IMPERIAL', '< 47 in') }),
          }}
          onClick={{ [p + '11038:20551;10670:14624']: onBack }}
        >
          {/* Head slide simulation: value panel + rod icon */}
          <HitArea x={6} y={56} w={260} h={220} label="Move head slide" onClick={moveHeadSlide} />
          <HitArea x={96} y={286} w={80} h={80} label="Move head slide" onClick={moveHeadSlide} />
          <HitArea x={8} y={416} w={72} h={56} label="Kids (manual entry)" onClick={() => setStep('manual')} />
          <HitArea x={92} y={416} w={172} h={56} label="Confirm" onClick={() => onConfirm(cm.toFixed(1))} />
        </FigmaScreen>
      );
    }
    case 'manual':
      // Metric: 1:1 Figma keypad (11178:33117). Imperial has no Figma frame here → existing ft'in keypad.
      return isMetric
        ? <ManualKeypad onBack={onBack} onConfirm={onConfirm} />
        : <ManualHeightInput onBack={onBack} onClose={onBack} onConfirm={onConfirm} initialValue={null} isMetric={false} />;
  }
}

/** "Add a value" keypad for a metric height (cm, one decimal). */
function ManualKeypad({ onBack, onConfirm }: { onBack: () => void; onConfirm: (cm: string) => void }) {
  const [v, setV] = useState('');
  const type = (k: string) => setV(cur => {
    if (k === '.') return cur.includes('.') ? cur : (cur || '0') + '.';
    const [int, dec] = cur.split('.');
    if (dec !== undefined) return dec.length >= 1 ? cur : cur + k;
    if (int.length >= 3) return cur;
    return int === '0' ? k : cur + k;
  });
  const col = [3, 93, 183];
  const row = [172, 234, 296, 358];
  const keys: [string, number, number][] = [
    ['1', 0, 0], ['2', 1, 0], ['3', 2, 0],
    ['4', 0, 1], ['5', 1, 1], ['6', 2, 1],
    ['7', 0, 2], ['8', 1, 2], ['9', 2, 2],
    ['.', 0, 3], ['0', 1, 3],
  ];
  const cm = parseFloat(v);
  return (
    <FigmaScreen
      data={SCREENS.hrManual}
      text={{ 'I11178:33119;10033:18776': v === '' ? '0.0' : v }}
      onClick={{ 'I11178:33330;11926:32949': onBack, 'I11178:33119;10301:21684': () => setV('') }}
    >
      {keys.map(([k, c, r]) => <HitArea key={k} x={col[c]} y={row[r]} w={86} h={58} label={k} onClick={() => type(k)} />)}
      <HitArea x={col[2]} y={row[3]} w={86} h={58} label="Delete" onClick={() => setV(cur => cur.slice(0, -1))} />
      <HitArea x={3} y={420} w={266} h={56} label="Confirm" onClick={() => { if (cm > 0) onConfirm(cm.toFixed(1)); }} />
    </FigmaScreen>
  );
}
