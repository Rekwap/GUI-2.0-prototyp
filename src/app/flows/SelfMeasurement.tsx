// Start screen "Choose mode" and the self-measurement flow (GUI 2.1, section
// "07.05.2026"), configuration: integrated, height required, ultrasonic,
// login patient only, no persistent pre-tare. Screens are 1:1 Figma exports;
// this file only adds behaviour and timing.
import { useEffect, useRef, useState } from 'react';
import { FigmaScreen, HitArea } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';
import { DEMO_PATIENT } from './SendFlow';

const KG_TO_LBS = 2.20462;

/** Device mode: Guided (professional) vs. Self-Measurement. */
export function DeviceModeScreen({ onGuided, onSelf }: { onGuided: () => void; onSelf: () => void }) {
  return (
    <FigmaScreen
      data={SCREENS.deviceMode}
      onClick={{ 'I14010:59911;12922:60657': onGuided, 'I14010:59911;12922:60686': onSelf }}
    />
  );
}

/** Self-measurement start: "Step onto the scale." */
export function StepOnScaleScreen({ onStepOn }: { onStepOn?: () => void }) {
  return (
    <FigmaScreen data={SCREENS.stepOnScale}>
      {/* Stepping onto the platform is simulated by tapping the scale. */}
      {onStepOn && <HitArea x={0} y={50} w={272} h={430} label="Step onto the scale" onClick={onStepOn} />}
    </FigmaScreen>
  );
}

type Step =
  | 'start' | 'remove' | 'scan' | 'welcome'
  | 'weigh' | 'weighLocked' | 'yourWeight'
  | 'postureBad' | 'postureOk' | 'countdown' | 'heightProgress' | 'heightDone' | 'yourHeight'
  | 'overview' | 'sending' | 'ok' | 'dataSaved';

/** Automatic transitions (ms) as annotated in Figma. */
const AUTO: Partial<Record<Step, [number, Step]>> = {
  welcome: [3000, 'weigh'],
  weighLocked: [1000, 'yourWeight'],
  postureBad: [1000, 'postureOk'],
  postureOk: [1600, 'postureBad'],
  heightProgress: [2000, 'heightDone'],
  heightDone: [2000, 'yourHeight'],
  sending: [1500, 'ok'],
  dataSaved: [3000, 'start'],
};

export type SelfMeasurementProps = {
  /** Simulated patient weight (kg) and height (cm) from the control panel. */
  weightKg: number;
  heightCm: number;
  isMetric: boolean;
  formatImperialHeight: (cm: string) => string;
};

/** Two buttons of "button-self_272x72" (repeat | next) are one SVG: hit areas. */
function RepeatNext({ onRepeat, onNext }: { onRepeat: () => void; onNext: () => void }) {
  return (
    <>
      <HitArea x={12} y={410} w={72} h={56} label="Repeat" onClick={onRepeat} />
      <HitArea x={96} y={410} w={164} h={56} label="Next" onClick={onNext} />
    </>
  );
}

export function SelfMeasurementFlow({ weightKg, heightCm, isMetric, formatImperialHeight }: SelfMeasurementProps) {
  const [step, setStep] = useState<Step>('start');
  const [shownKg, setShownKg] = useState(0);
  const [count, setCount] = useState(3);
  const raf = useRef<number | null>(null);

  // Timed transitions
  useEffect(() => {
    const a = AUTO[step];
    if (!a) return;
    const t = setTimeout(() => setStep(a[1]), a[0]);
    return () => clearTimeout(t);
  }, [step]);

  // Weighing: value settles from 0.00 to the patient weight, then locks.
  useEffect(() => {
    if (step !== 'weigh') return;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      setShownKg(weightKg * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf.current = requestAnimationFrame(tick);
      else { raf.current = null; setStep('weighLocked'); }
    };
    setShownKg(0);
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [step, weightKg]);

  // Height countdown 3 → 2 → 1 → measurement
  useEffect(() => {
    if (step !== 'countdown') return;
    if (count === 0) { setStep('heightProgress'); return; }
    const t = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [step, count]);

  const w = (kg: number) => (isMetric ? kg : kg * KG_TO_LBS).toFixed(2);
  const wUnit = isMetric ? 'kg' : 'lbs';
  const h = isMetric ? heightCm.toFixed(1) : formatImperialHeight(heightCm.toFixed(1));
  const hUnit = isMetric ? 'cm' : 'ft\'in"';
  const go = (s: Step) => () => setStep(s);
  const startCountdown = () => { setCount(3); setStep('countdown'); };

  switch (step) {
    case 'start':
      return <StepOnScaleScreen onStepOn={go('remove')} />;

    case 'remove':
      return <FigmaScreen data={SCREENS.smRemove} onClick={{ 'I14010:59770;13152:46117;13152:49129': go('scan') }} />;

    case 'scan':
      return (
        <FigmaScreen data={SCREENS.smScan}>
          {/* Tapping the screen simulates scanning the patient barcode. */}
          <HitArea x={0} y={50} w={272} h={350} label="Simulate scan" onClick={go('welcome')} />
        </FigmaScreen>
      );

    case 'welcome':
      return <FigmaScreen data={SCREENS.smWelcome} text={{ 'I14010:59800;12929:26861': DEMO_PATIENT.name + '\n' }} />;

    case 'weigh':
    case 'weighLocked': {
      const locked = step === 'weighLocked';
      const p = locked ? 'I14010:59828;' : 'I14010:59841;';
      return (
        <FigmaScreen
          data={locked ? SCREENS.smWeighLocked : SCREENS.smWeigh}
          text={{
            [p + '13152:46913;13202:63216;13202:63011']: w(locked ? weightKg : shownKg),
            [p + '13152:46913;13202:63216;13202:63009']: wUnit,
          }}
          // No persistent pre-tare: no "Pre-tare" row, no "Net".
          hide={[p + '14138:35745', p + '13854:39522', p + '13152:46913;14131:37789']}
        />
      );
    }

    case 'yourWeight': {
      const p = 'I14010:59820;';
      return (
        <FigmaScreen
          data={SCREENS.smYourWeight}
          text={{ [p + '14217:74274;13202:63011']: w(weightKg), [p + '14217:74274;13202:63009']: wUnit }}
          hide={[p + '13854:39536', p + '13854:39537', p + '14161:36762']}
        >
          <RepeatNext onRepeat={go('weigh')} onNext={go('postureBad')} />
        </FigmaScreen>
      );
    }

    case 'postureBad':
      return <FigmaScreen data={SCREENS.smPostureBad} onClick={{ 'I14010:59862;13166:56266;13152:49129': startCountdown }} />;
    case 'postureOk':
      return <FigmaScreen data={SCREENS.smPostureOk} onClick={{ 'I14010:59864;13166:56266;13152:49129': startCountdown }} />;

    case 'countdown':
      return <FigmaScreen data={SCREENS.smCountdown} text={{ 'I14010:59867;15932:53092': String(Math.max(count, 1)) }} />;

    case 'heightProgress':
      return <FigmaScreen data={SCREENS.smHeightProgress} />;

    case 'heightDone':
      return <FigmaScreen data={SCREENS.smHeightDone} />;

    case 'yourHeight': {
      const p = 'I14218:30980;14217:74774;';
      return (
        <FigmaScreen data={SCREENS.smYourHeight} text={{ [p + '13202:63011']: h, [p + '13202:63009']: hUnit }}>
          <RepeatNext onRepeat={go('postureBad')} onNext={go('overview')} />
        </FigmaScreen>
      );
    }

    case 'overview':
    case 'sending':
    case 'ok': {
      const [data, p] =
        step === 'overview' ? [SCREENS.smOverview, 'I15626:53931;13202:62964;']
          : step === 'sending' ? [SCREENS.smSending, 'I14010:59883;13202:62964;']
            : [SCREENS.smOk, 'I14010:59885;13202:62980;'];
      const top = p.split(';')[0] + ';';
      const nameId = step === 'ok' ? top + '13989:44354' : top + '14531:38826';
      return (
        <FigmaScreen
          data={data}
          text={{
            [p + '13202:62961']: w(weightKg),
            [p + '13202:62958']: wUnit,
            [p + '13202:62952']: h,
            [p + '13202:62957']: hUnit,
            [nameId]: DEMO_PATIENT.name,
          }}
          onClick={step === 'ok' ? { 'I14010:59885;14087:39278': go('dataSaved') } : undefined}
        >
          {step === 'overview' && <RepeatNext onRepeat={go('weigh')} onNext={go('sending')} />}
        </FigmaScreen>
      );
    }

    case 'dataSaved':
      return <FigmaScreen data={SCREENS.smDataSaved} />;
  }
}
