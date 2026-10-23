// Start screen "Choose mode" and the self-measurement flow (GUI 2.1, section
// "07.05.2026" and "23.04.2026_Overview variants" → weight only), configuration:
// integrated, ultrasonic, login patient only, no persistent pre-tare;
// "Height Required" switches between the weight + height and the weight-only flow;
// stand-alone / simple print (not integrated): no barcode scan, results are noted
// down by the patient resp. printed. Screens are 1:1 Figma exports;
// this file only adds behaviour and timing.
import { useEffect, useRef, useState } from 'react';
import { FigmaScreen, HitArea, type FNode as FigmaNode } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';
import { DEMO_PATIENT } from './SendFlow';

const KG_TO_LBS = 2.20462;

/** Device mode: Guided (professional) vs. Self-Measurement. */
export function DeviceModeScreen({ onGuided, onSelf, pretareText }: { onGuided: () => void; onSelf: () => void; pretareText?: string }) {
  // With persistent pre-tare: variant with the "Pre-tare" footer (Figma 14010:59908).
  if (pretareText) {
    return (
      <FigmaScreen
        data={SCREENS.deviceModePt}
        text={{ 'I14010:59909;12922:60431': pretareText }}
        onClick={{ 'I14010:59909;12922:60657': onGuided, 'I14010:59909;12922:60686': onSelf }}
      />
    );
  }
  return (
    <FigmaScreen
      data={SCREENS.deviceMode}
      onClick={{ 'I14010:59911;12922:60657': onGuided, 'I14010:59911;12922:60686': onSelf }}
    />
  );
}

/** Self-measurement start: "Step onto the scale." */
export function StepOnScaleScreen({ onStepOn, lang, onLanguage }: { onStepOn?: () => void; lang?: string; onLanguage?: () => void }) {
  return (
    <FigmaScreen data={SCREENS.stepOnScale} text={lang ? { 'I14010:59948;12929:26775': lang } : undefined}>
      {/* Stepping onto the platform is simulated by tapping the scale. */}
      {onStepOn && <HitArea x={0} y={50} w={272} h={430} label="Step onto the scale" onClick={onStepOn} />}
      {onLanguage && <HitArea x={172} y={0} w={100} h={50} label="Language" onClick={onLanguage} />}
    </FigmaScreen>
  );
}

/* Language selection (Figma 14010:59913, component "Language" temporary/selected). */
const LANGS: { code: string; row: string }[] = [
  { code: 'eng', row: 'I14952:8106;14944:54403' },
  { code: 'deu', row: 'I14952:8111;15085:7947' },
  { code: 'esp', row: 'I14952:8112;15744:23' },
  { code: 'fra', row: 'I14952:8107;15744:55' },
  { code: 'ita', row: 'I14952:8108;15744:86' },
  { code: 'por', row: 'I14952:8109;15744:119' },
  { code: 'ind', row: 'I14952:8110;15744:152' }, // Nederlands replaced by Indonesia (flag from Figma flags_32x32=ID)
];
const PAGING_ROW = '14944:53609';

/** "selected" variant: highlight in the row background, check button instead of paging. */
function languageData(selected: number | null): FigmaNode {
  if (selected === null) return SCREENS.smLanguage as FigmaNode;
  const target = LANGS[selected].row;
  const clone = (n: FigmaNode): FigmaNode => {
    const c = n.c?.map(clone);
    if (n.i === target) {
      // Highlight sits above the separator, below label and flag (as in the "selected" variant).
      const kids = c ?? [];
      return { ...n, c: [kids[0], { x: 5, y: 4, w: 250, h: 44, t: 'F', f: '#98a7d8', r: 4 } as FigmaNode, ...kids.slice(1)].filter(Boolean) };
    }
    if (n.i === PAGING_ROW) return { x: 56, y: 428, w: 160, h: 40, t: 'S', k: 'iv3b3an' } as FigmaNode;
    return c ? { ...n, c } : n;
  };
  return clone(SCREENS.smLanguage as FigmaNode);
}

export function LanguageScreen({ onBack, onConfirm }: { onBack: () => void; onConfirm: (code: string) => void }) {
  const [sel, setSel] = useState<number | null>(null);
  return (
    <FigmaScreen data={languageData(sel)}>
      <HitArea x={0} y={0} w={50} h={50} label="Back" onClick={onBack} />
      {LANGS.map((l, i) => (
        <HitArea key={l.code} x={6} y={58 + 52 * i} w={260} h={52} label={l.code} onClick={() => setSel(i)} />
      ))}
      {sel !== null && <HitArea x={56} y={428} w={160} h={40} label="Confirm language" onClick={() => onConfirm(LANGS[sel].code)} />}
    </FigmaScreen>
  );
}

type Step =
  | 'start' | 'remove' | 'scan' | 'noBarcode' | 'welcome'
  | 'weigh' | 'weighLocked' | 'yourWeight'
  | 'postureBad' | 'postureOk' | 'countdown' | 'heightProgress' | 'heightDone' | 'yourHeight'
  | 'overview' | 'sending' | 'ok' | 'dataSaved'
  | 'woSending' | 'woOk' | 'woDataSaved'
  | 'saNote' | 'saStepOff' | 'saNoteWo' | 'saStepOffWo'
  | 'spNote' | 'spStepOff' | 'spNoteWo' | 'spStepOffWo';

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
  woSending: [1500, 'woOk'],
  woDataSaved: [3000, 'start'],
  saStepOff: [3000, 'start'],
  saStepOffWo: [3000, 'start'],
  spStepOff: [3000, 'start'],
  spStepOffWo: [3000, 'start'],
};

export type SelfMeasurementProps = {
  /** Simulated patient weight (kg) and height (cm) from the control panel. */
  weightKg: number;
  heightCm: number;
  isMetric: boolean;
  /** Height required: weight + height flow; otherwise weight only. */
  heightRequired: boolean;
  /** Integrated (EMR): barcode login + sending. Stand-alone: note down result. Simple print: printout. */
  installation: 'integrated' | 'standalone' | 'simpleprint';
  /** Simple print: printout is triggered automatically with the result screen. */
  onPrint?: () => void;
  formatImperialHeight: (cm: string) => string;
  /** Persistent pre-tare (kg); weightKg is already net. 0 = off (no "Pre-tare" row, no "Net"). */
  pretareKg?: number;
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

export function SelfMeasurementFlow({ weightKg, heightCm, isMetric, heightRequired, installation, onPrint, formatImperialHeight, pretareKg = 0 }: SelfMeasurementProps) {
  const integrated = installation === 'integrated';
  const print = installation === 'simpleprint';
  const [step, setStep] = useState<Step>('start');
  // Language selection is only shown (prototype): the language itself does not change.
  const [langFrom, setLangFrom] = useState<Step | null>(null);
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

  // Simple print: prints automatically when the result is shown.
  useEffect(() => {
    if (step === 'spNote' || step === 'spNoteWo') onPrint?.();
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  // Weighing: value settles from 0.00 to the patient weight, then locks.
  useEffect(() => {
    if (step !== 'weigh') return;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      setShownKg(-pretareKg + (weightKg + pretareKg) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) raf.current = requestAnimationFrame(tick);
      else { raf.current = null; setStep('weighLocked'); }
    };
    setShownKg(-pretareKg);
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
  const pt = pretareKg > 0;
  const ptText = `${w(pretareKg)} ${wUnit}`;
  const startCountdown = () => { setCount(3); setStep('countdown'); };

  if (langFrom) {
    return <LanguageScreen onBack={() => setLangFrom(null)} onConfirm={() => setLangFrom(null)} />;
  }

  switch (step) {
    case 'start':
      return <StepOnScaleScreen onStepOn={go('remove')} onLanguage={() => setLangFrom('start')} />;

    case 'remove':
      return <FigmaScreen data={SCREENS.smRemove} onClick={{ 'I14010:59770;13152:46117;13152:49129': go(integrated ? 'scan' : 'weigh') }} />;

    case 'scan':
      return (
        <FigmaScreen data={SCREENS.smScan}>
          {/* Tapping the screen simulates scanning the patient barcode. */}
          <HitArea x={0} y={50} w={272} h={350} label="Simulate scan" onClick={go('welcome')} />
          <HitArea x={172} y={0} w={100} h={50} label="Language" onClick={() => setLangFrom('scan')} />
          <HitArea x={12} y={410} w={248} h={56} label="No barcode?" onClick={go('noBarcode')} />
        </FigmaScreen>
      );

    case 'noBarcode':
      // "Don't have a barcode yet?" dialog (Figma 14582:48727); check returns to the scan screen.
      return (
        <FigmaScreen data={SCREENS.smNoBarcode}>
          <HitArea x={68} y={402} w={136} h={50} label="OK" onClick={go('scan')} />
        </FigmaScreen>
      );

    case 'welcome':
      return <FigmaScreen data={SCREENS.smWelcome} text={{ 'I14010:59800;12929:26861': DEMO_PATIENT.name + '\n' }} />;

    case 'weigh':
    case 'weighLocked': {
      const locked = step === 'weighLocked';
      // Weight-only flow uses the 2-step progress variants.
      const [data, p] = heightRequired
        ? locked ? [SCREENS.smWeighLocked, 'I14010:59828;'] : [SCREENS.smWeigh, 'I14010:59841;']
        : locked ? [SCREENS.woWeighLocked, 'I14010:59830;'] : [SCREENS.woWeigh, 'I14010:59844;'];
      return (
        <FigmaScreen
          data={data}
          text={{
            [p + '13152:46913;13202:63216;13202:63011']: w(locked ? weightKg : shownKg),
            [p + '13152:46913;13202:63216;13202:63009']: wUnit,
            [p + '13854:39522']: ptText,
          }}
          // No persistent pre-tare: no "Pre-tare" row, no "Net".
          // Metrology lines (>|1|< Max=…) are not shown.
          hide={[p + '13152:46955', ...(pt ? [] : [p + '14138:35745', p + '13854:39522', p + '13152:46913;14131:37789'])]}
        />
      );
    }

    case 'yourWeight': {
      if (!heightRequired) {
        // With persistent pre-tare: variant with "Net" and the "Pre-tare" row (Figma 14010:59822).
        const p = pt ? 'I14010:59823;14217:74274;' : 'I14529:37769;14217:74274;';
        return (
          <FigmaScreen
            data={pt ? SCREENS.woYourWeightPt : SCREENS.woYourWeight}
            text={{ [p + '13202:63011']: w(weightKg), [p + '13202:63009']: wUnit, 'I14010:59823;13854:39537': ptText }}
          >
            <RepeatNext onRepeat={go('weigh')} onNext={go(integrated ? 'woSending' : print ? 'spNoteWo' : 'saNoteWo')} />
          </FigmaScreen>
        );
      }
      const p = 'I14010:59820;';
      return (
        <FigmaScreen
          data={SCREENS.smYourWeight}
          text={{ [p + '14217:74274;13202:63011']: w(weightKg), [p + '14217:74274;13202:63009']: wUnit, [p + '13854:39537']: ptText }}
          hide={pt ? [] : [p + '13854:39536', p + '13854:39537', p + '14161:36762']}
        >
          <RepeatNext onRepeat={go('weigh')} onNext={go('postureBad')} />
        </FigmaScreen>
      );
    }

    case 'woSending':
      return (
        <FigmaScreen
          data={SCREENS.woSending}
          text={{
            'I14529:38108;14525:8967;13202:63011': w(weightKg),
            'I14529:38108;14525:8967;13202:63009': wUnit,
            'I14529:38108;14525:8969': DEMO_PATIENT.name,
          }}
        />
      );

    case 'woOk':
      return (
        <FigmaScreen
          data={SCREENS.woOk}
          text={{
            'I14531:38224;14526:9108;13202:63011': w(weightKg),
            'I14531:38224;14526:9108;13202:63009': wUnit,
            'I14531:38224;14526:9110': DEMO_PATIENT.name,
          }}
          onClick={{ 'I14531:38224;14526:9111': go('woDataSaved') }}
        />
      );

    case 'woDataSaved':
      return <FigmaScreen data={SCREENS.woDataSaved} />;

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
          <RepeatNext onRepeat={go('postureBad')} onNext={go(integrated ? 'overview' : print ? 'spNote' : 'saNote')} />
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
    case 'saNote': {
      const p = 'I14524:31163;13202:62980;';
      return (
        <FigmaScreen
          data={SCREENS.saNote}
          text={{ [p + '13202:62961']: w(weightKg), [p + '13202:62958']: wUnit, [p + '13202:62952']: h, [p + '13202:62957']: hUnit }}
          onClick={{ 'I14524:31163;14087:39278': go('saStepOff') }}
        />
      );
    }

    case 'saNoteWo':
      return (
        <FigmaScreen
          data={SCREENS.saNoteWo}
          text={{ 'I14529:38176;14526:9108;13202:63011': w(weightKg), 'I14529:38176;14526:9108;13202:63009': wUnit }}
          onClick={{ 'I14529:38176;14526:9111': go('saStepOffWo') }}
        />
      );

    case 'saStepOff':
      return <FigmaScreen data={SCREENS.saStepOff} />;

    case 'saStepOffWo':
      return <FigmaScreen data={SCREENS.saStepOffWo} />;
    case 'spNote': {
      const p = 'I14531:38875;13202:62980;';
      return (
        <FigmaScreen
          data={SCREENS.spNote}
          text={{ [p + '13202:62961']: w(weightKg), [p + '13202:62958']: wUnit, [p + '13202:62952']: h, [p + '13202:62957']: hUnit }}
          onClick={{ 'I14531:38875;14087:39278': go('spStepOff') }}
        />
      );
    }

    case 'spNoteWo':
      return (
        <FigmaScreen
          data={SCREENS.spNoteWo}
          text={{ 'I14531:39024;14526:9108;13202:63011': w(weightKg), 'I14531:39024;14526:9108;13202:63009': wUnit }}
          onClick={{ 'I14531:39024;14526:9111': go('spStepOffWo') }}
        />
      );

    case 'spStepOff':
      return <FigmaScreen data={SCREENS.spStepOff} />;

    case 'spStepOffWo':
      return <FigmaScreen data={SCREENS.spStepOffWo} />;
  }
}
