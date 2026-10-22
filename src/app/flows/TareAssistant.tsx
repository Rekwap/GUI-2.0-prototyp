// Tare Assistant (GUI 2.1, section "0227_PRE TARE Flow"): menu, info dialog,
// Mother/Child guided tare and Clothing/Accessories pre-tare. Screens are the
// 1:1 Figma exports; this file only adds behaviour.
import { useEffect, useState } from 'react';
import { FigmaScreen, HitArea } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';

const KG_TO_LBS = 2.20462;

/** Simulated weights for the prototype (same values as the Figma flow). */
export const ADULT_KG = 54.8;
export const CHILD_KG = 3.8;

type Step = 'menu' | 'info' | 'mcIntro' | 'mcAdult0' | 'mcAdultMeasuring' | 'mcAdultTared' | 'mcTakeChild' | 'mcChild' | 'clothing';

export type TareAssistantProps = {
  isMetric: boolean;
  onBack: () => void;
  /** "TARE" option: tare the current load. */
  onTare: () => void;
  /** Mother/Child finished: adult weight is the tare, child is on the scale. */
  onMotherChild: (adultKg: number, childKg: number) => void;
  /** Clothing/Accessories confirmed with a pre-tare value (kg). */
  onClothing: (valueKg: number) => void;
  initialClothingKg?: number;
  /** Persistent pre-tare (kg): preselected and the lower limit of the clothing value. */
  minClothingKg?: number;
};

export function TareAssistant({ isMetric, onBack, onTare, onMotherChild, onClothing, initialClothingKg = 0, minClothingKg = 0 }: TareAssistantProps) {
  const [step, setStep] = useState<Step>('menu');
  // Clothing value is kept in display units (kg: 0.5 steps, lbs: 1.0 steps).
  const [clothing, setClothing] = useState(() => {
    const v = isMetric ? initialClothingKg : Math.round(initialClothingKg * KG_TO_LBS);
    const min = isMetric ? minClothingKg : Math.ceil(minClothingKg * KG_TO_LBS - 1e-9);
    return Math.max(v, min);
  });
  const minClothing = isMetric ? minClothingKg : Math.ceil(minClothingKg * KG_TO_LBS - 1e-9);

  // Adult weight settles, then the scale tares automatically.
  useEffect(() => {
    if (step !== 'mcAdultMeasuring') return;
    const t = setTimeout(() => setStep('mcAdultTared'), 1500);
    return () => clearTimeout(t);
  }, [step]);

  const fmt = (kg: number) => (isMetric ? kg : kg * KG_TO_LBS).toFixed(2);
  const unit = isMetric ? 'kg' : 'lbs';
  const tareChip = `-${fmt(ADULT_KG)} ${unit}`;

  switch (step) {
    case 'menu': {
      const p = 'I12411:25337;';
      return (
        <FigmaScreen
          data={SCREENS.tareAssistant}
          onClick={{
            [p + '12085:21876;12085:21851']: onBack,
            [p + '12085:21876;12085:21852']: () => setStep('info'),
            [p + '12372:27052']: () => setStep('mcIntro'),
            [p + '12372:27063']: () => setStep('clothing'),
            [p + '12383:47039']: onTare,
          }}
        />
      );
    }
    case 'info':
      return <FigmaScreen data={SCREENS.tareInfo} onClick={{ 'I13227:44085;10074:13792': () => setStep('menu') }} />;

    case 'mcIntro':
      return (
        <FigmaScreen
          data={SCREENS.motherChildIntro}
          onClick={{
            'I13578:74816;12397:55242;11926:32936': () => setStep('menu'),
            'I13578:74816;12397:55325': () => setStep('mcAdult0'),
          }}
        />
      );

    case 'mcAdult0': {
      const p = 'I13578:74818;';
      return (
        <FigmaScreen
          data={SCREENS.motherChildAdult0}
          text={{ [p + '12067:4973;10631:2245']: unit }}
          onClick={{ [p + '12067:3712;10670:14620']: () => setStep('mcIntro'), [p + '12067:4973']: () => setStep('mcAdultMeasuring') }}
        />
      );
    }
    case 'mcAdultMeasuring': {
      const p = 'I13578:74820;12406:';
      return (
        <FigmaScreen
          data={SCREENS.motherChildAdultMeasuring}
          text={{ [p + '4738;10631:2249']: fmt(ADULT_KG), [p + '4738;10631:2245']: unit }}
          onClick={{ [p + '4739;10670:14620']: () => setStep('mcIntro') }}
        />
      );
    }
    case 'mcAdultTared': {
      const p = 'I13578:74826;12406:';
      return (
        <FigmaScreen
          data={SCREENS.motherChildAdultTared}
          text={{ [p + '4738;10631:2249']: fmt(0), [p + '4738;10631:2245']: unit, [p + '4738;10631:2257;9948:73']: tareChip }}
          onClick={{ [p + '4739;10670:14620']: () => setStep('mcIntro') }}
        >
          <HitArea x={8} y={416} w={72} h={56} label="Reweigh" onClick={() => setStep('mcAdultMeasuring')} />
          <HitArea x={92} y={416} w={172} h={56} label="Next" onClick={() => setStep('mcTakeChild')} />
        </FigmaScreen>
      );
    }
    case 'mcTakeChild': {
      const p = 'I13578:74828;12067:';
      return (
        <FigmaScreen
          data={SCREENS.motherChildTakeChild}
          text={{ [p + '4973;10631:2249']: fmt(0), [p + '4973;10631:2245']: unit, [p + '4973;10631:2257;9948:73']: tareChip }}
          onClick={{ [p + '3712;10670:14620']: () => setStep('mcIntro'), [p + '4973']: () => setStep('mcChild') }}
        />
      );
    }
    case 'mcChild': {
      const p = 'I13578:74824;12406:';
      return (
        <FigmaScreen
          data={SCREENS.motherChildChild}
          text={{ [p + '4738;10631:2249']: fmt(CHILD_KG), [p + '4738;10631:2245']: unit, [p + '4738;10631:2257;9948:73']: tareChip }}
          onClick={{ [p + '4739;10670:14620']: () => setStep('mcIntro') }}
        >
          <HitArea x={8} y={416} w={72} h={56} label="Reweigh" onClick={() => setStep('mcTakeChild')} />
          <HitArea x={92} y={416} w={172} h={56} label="Next" onClick={() => onMotherChild(ADULT_KG, CHILD_KG)} />
        </FigmaScreen>
      );
    }
    case 'clothing': {
      const zero = clothing <= minClothing;
      // Exports: minus disabled at 0 / at the persistent pre-tare (…0) vs. enabled; kg vs. lbs step label.
      const key = isMetric ? (zero ? 'clothingKg0' : 'clothingKg') : zero ? 'clothingLbs0' : 'clothingLbs';
      const p = { clothingKg0: 'I12806:29684;', clothingKg: 'I12806:30028;', clothingLbs0: 'I12806:29821;', clothingLbs: 'I12806:29948;' }[key];
      const step = isMetric ? 0.5 : 1;
      return (
        <FigmaScreen
          data={SCREENS[key]}
          text={{ [p + '12065:21441;10631:2236']: clothing.toFixed(1) }}
          onClick={{
            [p + '12065:21442;10670:14620']: () => setStep('menu'),
            [p + '12065:21481']: () => onClothing(isMetric ? clothing : clothing / KG_TO_LBS),
          }}
        >
          <HitArea x={66} y={320} w={50} h={50} label="Minus" onClick={() => setClothing(v => Math.max(minClothing, +(v - step).toFixed(1)))} />
          <HitArea x={156} y={320} w={50} h={50} label="Plus" onClick={() => setClothing(v => +(v + step).toFixed(1))} />
        </FigmaScreen>
      );
    }
  }
}
