// Menu per structure "30.06.26_Menustruktur" (Figma 16566:37260).
// All pages are reachable and rendered 1:1 from Figma; settings themselves are not functional.
import { useEffect, useState } from 'react';
import { FigmaScreen, HitArea } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';

type Hit = { x: number; y: number; w: number; h: number; to: string };
type Page = {
  s: keyof typeof SCREENS;
  rows?: (string | null)[];   // list rows from y=58, 52 px each
  prev?: string;              // paging (replaces current page)
  next?: string;
  hits?: Hit[];               // extra buttons; to = page | 'back' | '!restart'
  dialog?: boolean;           // no back/home in header
  auto?: [string, number];    // replace with page after ms
};

const CHECK_40: Hit = { x: 56, y: 422, w: 160, h: 40, to: 'back' };
const YESNO_96: Hit = { x: 56, y: 366, w: 160, h: 96, to: 'back' };
const KEYPAD_OK = (to: string): Hit => ({ x: 2, y: 418, w: 268, h: 58, to });

const PAGES: Record<string, Page> = {
  menu: { s: 'mMenu', rows: ['info', 'settings', 'service', 'restart'] },
  info: { s: 'mInfo', rows: ['userManual', 'help', 'aboutSystem'] },
  userManual: { s: 'mUserManual' },
  help: { s: 'mHelp' },
  aboutSystem: { s: 'mAboutSystem', next: 'aboutVersion' },
  aboutVersion: { s: 'mAboutVersion', prev: 'aboutSystem', next: 'aboutManufacturer' },
  aboutManufacturer: { s: 'mAboutManufacturer', prev: 'aboutVersion' },

  settings: { s: 'mSettings', rows: ['display1', 'weight', 'networkOn', 'rs232', 'audio', 'battery'] },
  display1: { s: 'mDisplay1', rows: ['language1', 'units', 'clearValues', 'brightness', 'standby', 'nameFormat', 'dateFormat'], next: 'display2' },
  display2: { s: 'mDisplay2', rows: ['bmiBsa'], prev: 'display1' },
  language1: { s: 'mLanguage1', next: 'language2' },
  language2: { s: 'mLanguage2', prev: 'language1', next: 'language3' },
  language3: { s: 'mLanguage3', prev: 'language2' },
  units: { s: 'mUnits' },
  clearValues: { s: 'mClearValues' },
  brightness: { s: 'mBrightness', hits: [CHECK_40] },
  standby: { s: 'mStandby' },
  nameFormat: { s: 'mNameFormat' },
  dateFormat: { s: 'mDateFormat' },
  bmiBsa: { s: 'mBmiBsa' },

  // "Pre-Tare Presets" removed (menu structure 30.06 lists only Pre-tare).
  weight: { s: 'mWeight', rows: ['autohold', 'sensitivity', 'tareScan', 'pretare'] },
  autohold: { s: 'mAutohold', hits: [YESNO_96] },
  sensitivity: { s: 'mSensitivity' },
  tareScan: { s: 'mTareScan' },
  pretare: { s: 'mPretare', hits: [{ x: 56, y: 330, w: 160, h: 40, to: 'pretareKeypad' }, { x: 112, y: 418, w: 48, h: 48, to: 'back' }] },
  pretareKeypad: { s: 'mPretareKeypad', hits: [{ x: 2, y: 85, w: 50, h: 50, to: 'back' }, KEYPAD_OK('<pretareSet')] },
  pretareSet: { s: 'mPretareSet', hits: [{ x: 56, y: 330, w: 160, h: 40, to: 'pretareKeypad' }, { x: 112, y: 418, w: 48, h: 48, to: 'back' }] },

  networkOn: { s: 'mNetworkOn', rows: ['=networkOff', 'wifiSearch', 'server', 'identification'] },
  networkOff: { s: 'mNetworkOff', rows: ['=networkOn', null, 'server', 'identification'] },
  wifiSearch: { s: 'mWifiSearch', auto: ['wifiList', 1500] },
  wifiList: { s: 'mWifiList' },
  server: { s: 'mServer' },
  identification: { s: 'mIdentification', rows: ['clearData'] },
  clearData: { s: 'mClearData', hits: [KEYPAD_OK('back')] },
  rs232: { s: 'mRs232', rows: ['protocol', null] },
  protocol: { s: 'mProtocol' },
  audio: { s: 'mAudio', rows: [null, null, null, 'audioLanguage', 'volume'] },
  audioLanguage: { s: 'mAudioLanguage' },
  volume: { s: 'mVolume', hits: [CHECK_40] },
  battery: { s: 'mBattery' },

  service: { s: 'mService', rows: ['infoDisplay', 'configMode', 'calibration', 'servicePin', 'factoryReset', 'settingsLock'] },
  infoDisplay: { s: 'mInfoDisplay', next: 'infoInterface' },
  infoInterface: { s: 'mInfoInterface', prev: 'infoDisplay', next: 'infoWeight' },
  infoWeight: { s: 'mInfoWeight', prev: 'infoInterface', next: 'infoVerification' },
  infoVerification: { s: 'mInfoVerification', prev: 'infoWeight' },
  configMode: { s: 'mConfigMode', hits: [YESNO_96] },
  calibration: { s: 'mCalibration', hits: [CHECK_40] },
  servicePin: { s: 'mServicePin', hits: [KEYPAD_OK('=serviceTools')] },
  serviceTools: { s: 'mServiceTools', rows: ['adjustment', 'loadCells'] },
  adjustment: { s: 'mAdjustment' },
  loadCells: { s: 'mLoadCells' },
  factoryReset: {
    s: 'mFactoryReset', dialog: true,
    hits: [{ x: 69, y: 344, w: 136, h: 50, to: 'back' }, { x: 68, y: 402, w: 136, h: 50, to: 'back' }],
  },
  settingsLock: { s: 'mSettingsLock', hits: [YESNO_96] },

  restart: {
    s: 'mRestart', dialog: true,
    hits: [{ x: 69, y: 344, w: 136, h: 50, to: '!restart' }, { x: 68, y: 402, w: 136, h: 50, to: 'back' }],
  },
};

type Props = { onClose: () => void; onRestart: () => void; controlPanel: boolean; onToggleControlPanel: () => void };

export function MenuFlow({ onClose, onRestart, controlPanel, onToggleControlPanel }: Props) {
  const [stack, setStack] = useState<string[]>(['menu']);
  const id = stack[stack.length - 1];
  const page = PAGES[id];

  // '=page' replaces the current page (toggle, paging, auto-advance); 'page' pushes.
  const go = (to: string) => {
    if (to === 'back') return stack.length > 1 ? setStack(stack.slice(0, -1)) : onClose();
    if (to === '!restart') return onRestart();
    if (to.startsWith('=')) return setStack([...stack.slice(0, -1), to.slice(1)]);
    if (to.startsWith('<')) return setStack([...stack.slice(0, -2), to.slice(1)]); // pop two, push
    setStack([...stack, to]);
  };

  useEffect(() => {
    if (!page.auto) return;
    const [to, ms] = page.auto;
    const t = setTimeout(() => setStack((s) => [...s.slice(0, -1), to]), ms);
    return () => clearTimeout(t);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <FigmaScreen data={SCREENS[page.s]}>
      {!page.dialog && <HitArea x={0} y={0} w={50} h={50} label="Back" onClick={() => go('back')} />}
      {!page.dialog && <HitArea x={222} y={0} w={50} h={50} label="Home" onClick={onClose} />}
      {page.rows?.map((to, i) =>
        to ? <HitArea key={i} x={6} y={58 + 52 * i} w={260} h={52} label={to} onClick={() => go(to)} /> : null,
      )}
      {page.prev && <HitArea x={22} y={423} w={50} h={50} label="Previous page" onClick={() => go('=' + page.prev)} />}
      {page.next && <HitArea x={200} y={423} w={50} h={50} label="Next page" onClick={() => go('=' + page.next)} />}
      {page.hits?.map((h, i) => (
        <HitArea key={'h' + i} x={h.x} y={h.y} w={h.w} h={h.h} label={h.to} onClick={() => go(h.to)} />
      ))}
      {id === 'menu' && (
        // Prototype-only entry (not part of the device GUI): deliberately styled apart, in brackets.
        <button
          type="button"
          onClick={onToggleControlPanel}
          style={{
            position: 'absolute', left: 6, top: 58 + 52 * 4, width: 260, height: 52, padding: '0 12px',
            background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
            fontFamily: "'Noto Sans Display', sans-serif", fontWeight: 500, fontSize: 16, color: '#8b8d91',
          }}
        >
          [Control Panel: {controlPanel ? 'on' : 'off'}]
        </button>
      )}
    </FigmaScreen>
  );
}
