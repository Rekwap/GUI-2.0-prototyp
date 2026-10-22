// Recall, identification and send screens (GUI 2.1, sections "Integration"
// and "0227_PRE TARE Flow"). Screens are the 1:1 Figma exports; this file
// only maps state onto them.
import { FigmaNode, FigmaScreen, HitArea, findNode } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';

const KG_TO_LBS = 2.20462;

export const DEMO_PATIENT = { name: 'Jane Doe', dob: '1995/07/24' };
export const DEMO_USER = { name: 'Dr. Becker' };

function weightText(kg: number, isMetric: boolean) {
  return (isMetric ? kg : kg * KG_TO_LBS).toFixed(2);
}

/* ------------------------------------------------------------------ */
/* Recall                                                               */
/* ------------------------------------------------------------------ */

export function RecallScreen({ weightKg, tareKg, minutesAgo, isMetric, onClose }: { weightKg: number; tareKg: number; minutesAgo: number; isMetric: boolean; onClose: () => void }) {
  const p = 'I12561:40069;12067:4852;';
  const unit = isMetric ? 'kg' : 'lbs';
  return (
    <FigmaScreen
      data={SCREENS.recall}
      text={{
        [p + '10631:2249']: weightText(weightKg, isMetric),
        [p + '10631:2245']: unit,
        [p + '10631:2256']: `${minutesAgo} min ago.`,
        [p + '10631:2257;9948:73']: `-${weightText(tareKg, isMetric)} ${unit}`,
      }}
      hide={tareKg > 0 ? [] : [p + '10631:2257']}
      onClick={{ 'I12561:40069;11191:19108': onClose }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Identification                                                       */
/* ------------------------------------------------------------------ */

export function ScanIdScreen({ kind, onScan, onCancel }: { kind: 'patient' | 'user'; onScan: () => void; onCancel: () => void }) {
  return (
    <FigmaScreen data={kind === 'patient' ? SCREENS.scanPatient : SCREENS.scanUser}>
      {/* Tapping the screen simulates a barcode scan. */}
      <HitArea x={0} y={50} w={272} h={430} label="Simulate scan" onClick={onScan} />
      <HitArea x={222} y={0} w={50} h={50} label="Cancel" onClick={onCancel} />
    </FigmaScreen>
  );
}

export function IdConfirmedScreen({ kind, onNext }: { kind: 'patient' | 'user'; onNext: () => void }) {
  if (kind === 'patient') {
    return (
      <FigmaScreen
        data={SCREENS.patientId}
        text={{ 'I16555:37279;10120:394': DEMO_PATIENT.name + '\n', 'I16555:37279;10120:395': DEMO_PATIENT.dob }}
      >
        <HitArea x={0} y={0} w={272} h={480} label="Continue" onClick={onNext} />
      </FigmaScreen>
    );
  }
  return (
    <FigmaScreen data={SCREENS.userId} text={{ 'I10657:12140;10120:400': DEMO_USER.name + '\n' }}>
      <HitArea x={0} y={0} w={272} h={480} label="Continue" onClick={onNext} />
    </FigmaScreen>
  );
}

/* ------------------------------------------------------------------ */
/* Overview → Transmitting → Data saved                                 */
/* ------------------------------------------------------------------ */

export type OverviewProps = {
  /** Net weight as displayed (in the current unit). */
  weight: string;
  /** Formatted height (e.g. "167.7" or 5'7¼"), null when not measured. */
  height: string | null;
  isMetric: boolean;
  patient: boolean;
  user: boolean;
  onClose: () => void;
  onSend: () => void;
};

const OVERVIEW_VARIANTS = {
  anon: { data: () => SCREENS.overviewAnon, p: 'I10631:11869;' },
  patient: { data: () => SCREENS.overviewPatient, p: 'I10658:13292;' },
  patientHeight: { data: () => SCREENS.overviewPatientHeight, p: 'I10658:13351;' },
  user: { data: () => SCREENS.overviewUser, p: 'I10658:13470;' },
  userHeight: { data: () => SCREENS.overviewUserHeight, p: 'I10674:12332;' },
};

export function OverviewScreen({ weight, height, isMetric, patient, user, onClose, onSend }: OverviewProps) {
  const hasHeight = height !== null;
  const variantKey: keyof typeof OVERVIEW_VARIANTS = patient
    ? hasHeight ? 'patientHeight' : 'patient'
    : user ? (hasHeight ? 'userHeight' : 'user') : hasHeight ? 'userHeight' : 'anon';
  const { data, p } = OVERVIEW_VARIANTS[variantKey];
  const hide: string[] = [];
  // Height without any ID: reuse the user+height layout without the user block.
  if (!patient && !user && hasHeight) hide.push(p + '10631:2027');

  // Patient + user: patient layout plus the user block from the user layout.
  const userSource = hasHeight ? SCREENS.overviewUserHeight : SCREENS.overviewUser;
  const userPrefix = hasHeight ? 'I10674:12332;' : 'I10658:13470;';
  const userBlock = patient && user ? findNode(userSource, userPrefix + '10631:2027') : undefined;

  return (
    <FigmaScreen
      data={data()}
      hide={hide}
      text={{
        [p + '10631:2280;10631:2184']: weight,
        [p + '10631:2280;10631:2180']: isMetric ? 'kg' : 'lbs',
        [p + '10631:2280;10631:2195']: height ?? '',
        [p + '10631:2280;10631:2194']: isMetric ? 'cm' : 'ft\'in"',
        [p + '10631:2280;10631:2189']: DEMO_PATIENT.name,
        [p + '10631:2280;10631:2190']: DEMO_PATIENT.dob,
        [p + '10631:2033']: DEMO_USER.name,
      }}
      onClick={{ [p + '10631:2024;10670:14627']: onClose, [p + '10675:4034;10675:4025']: onSend }}
    >
      {userBlock && <FigmaNode node={userBlock} text={{ [userPrefix + '10631:2033']: DEMO_USER.name }} />}
    </FigmaScreen>
  );
}

export function TransmittingScreen() {
  return <FigmaScreen data={SCREENS.transmitting} />;
}

export function DataSavedScreen() {
  return <FigmaScreen data={SCREENS.dataSaved} />;
}

/* ------------------------------------------------------------------ */
/* Stand-alone: CONFIRM → Integration info (no EMR connection)          */
/* ------------------------------------------------------------------ */

export function IntegrationInfoScreen({ onBack }: { onBack: () => void }) {
  // QR code is a raster image in Figma: rendered from the original at 4x (icon index).
  return <FigmaScreen data={SCREENS.integration} onClick={{ 'I11178:31354;10049:14366;10008:1414': onBack }} />;
}
