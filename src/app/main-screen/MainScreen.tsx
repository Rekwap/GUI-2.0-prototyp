// Main screen (weight / tare / height + BMI / button bar) — 1:1 with the
// Figma handover "GUI 2.1 (Scale Up)", components:
//   Status Bar (Portrait), libary_Weight + Details, Libary_TARA,
//   libary_Height + BMI, Button Bar (integrated).
import type { ReactNode } from 'react';
import { Box, COLORS, Icon, Text, resetButton, usePressed } from './primitives';
import { useT } from '../i18n';

import menuIcon from './assets/icons/menu.svg';
import wifiIcon from './assets/icons/wifi.svg';
import bannerBg from './assets/icons/bannerBg.svg';
import logoutIcon from './assets/icons/logout.svg';
import dotOnline from './assets/icons/dotOnline.svg';
import dotOffline from './assets/icons/dotOffline.svg';
import warningBanner from './assets/icons/warningBanner.svg';
import lockedIcon from './assets/icons/locked.svg';
import laundryIcon from './assets/icons/laundry.svg';
import reweightIcon from './assets/icons/reweight.svg';
import reheightIcon from './assets/icons/reheight.svg';
import tare24Icon from './assets/icons/tare24.svg';
import closeIcon from './assets/icons/close.svg';
import buttonBarBg from './assets/icons/buttonBar.svg';
import tare48Icon from './assets/icons/tare48.svg';
import recall48Icon from './assets/icons/recall48.svg';
import send48Icon from './assets/icons/send48.svg';
import send48StandaloneIcon from './assets/icons/send48Standalone.svg';
import print48Icon from './assets/icons/print48.svg';
import saved48Icon from './assets/icons/saved48.svg';
import printStatusIcon from './assets/icons/printStatus.svg';
// Button without its outlined label; the label is live text (KEY_HEIGHT), as in Figma.
import heightButton from './assets/icons/heightButtonBase.svg';
import stepsIcon from './assets/icons/steps@4x.png';

/* ------------------------------------------------------------------ */
/* Status bar (0–50)                                                    */
/* ------------------------------------------------------------------ */

export type LoginBanner =
  | { kind: 'none' }
  | { kind: 'both'; patientOnline: boolean; userOnline: boolean }
  | { kind: 'patient' }
  | { kind: 'user' };

export type StatusBarProps = {
  login: LoginBanner;
  /** Shows the small warning banner (count is part of the Figma asset: "1"). */
  warning?: boolean;
  onMenu?: () => void;
  onLogout?: () => void;
  /** Simple print: printer icon left of the network icon. */
  printer?: boolean;
};

export function StatusBar({ login, warning, onMenu, onLogout, printer }: StatusBarProps) {
  return (
    <>
      <Box x={0} y={0} w={272} h={50} style={{ background: COLORS.panel }} />
      <button type="button" onClick={onMenu} aria-label="Menu" style={{ ...resetButton, position: 'absolute', left: 0, top: 0, width: 50, height: 50 }}>
        <Icon src={menuIcon} x={0} y={0} w={50} h={50} />
      </button>
      <Icon src={wifiIcon} x={222} y={0} w={50} h={50} />
      {printer && <Icon src={printStatusIcon} x={172} y={0} w={50} h={50} />}
      {warning && login.kind === 'none' && <Icon src={warningBanner} x={94} y={0} w={84} h={44} />}
      {login.kind !== 'none' && <LoginBannerView login={login} onLogout={onLogout} />}
    </>
  );
}

function LoginBannerView({ login, onLogout }: { login: Exclude<LoginBanner, { kind: 'none' }>; onLogout?: () => void }) {
  // Banner frame: 184×64 at (44,0) incl. shadow; children positioned relative to it.
  return (
    <Box x={44} y={0} w={184} h={64}>
      <Icon src={bannerBg} x={0} y={0} w={184} h={64} />
      {login.kind === 'both' ? (
        <>
          <Icon src={login.patientOnline ? dotOnline : dotOffline} x={14} y={11} w={12} h={12} />
          <Text x={34} y={3} w={113} h={27} size={20} weight="medium">Patient</Text>
          <Icon src={login.userOnline ? dotOnline : dotOffline} x={14} y={35} w={12} h={12} />
          <Text x={34} y={27} w={113} h={27} size={20} weight="medium">User</Text>
        </>
      ) : (
        <>
          <Icon src={dotOnline} x={14} y={22} w={12} h={12} />
          <Text x={34} y={15} w={113} h={27} size={20} weight="medium">{login.kind === 'patient' ? 'Patient' : 'User'}</Text>
        </>
      )}
      <button type="button" onClick={onLogout} aria-label="Logout" style={{ ...resetButton, position: 'absolute', left: 149, top: 16, width: 24, height: 24 }}>
        <Icon src={logoutIcon} x={0} y={0} w={24} h={24} />
      </button>
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Weight + details (50–250)                                           */
/* ------------------------------------------------------------------ */

export type WeightPanelProps =
  | { state: 'error' }
  | {
      state: 'value';
      value: string;
      unit: 'kg' | 'lbs';
      /** First metrology line, e.g. "Max 360 kg". */
      rangeText: string;
      /** Optional second range line (dual-range scales), shown in light blue. */
      secondRangeText?: string;
      showNet?: boolean;
      locked?: boolean;
      /** Mother/baby icon (pre-tare "mother" mode). */
      showBaby?: boolean;
      onValueClick?: () => void;
    };

export function WeightPanel(props: WeightPanelProps) {
  const t = useT();
  return (
    <Box x={0} y={50} w={272} h={200} style={{ background: COLORS.panel, overflow: 'hidden' }}>
      {props.state === 'error' ? (
        <Text x={14} y={88} w={244} h={81} size={20} weight="medium" align="center" wrap>
          Weight measurement not available
        </Text>
      ) : (
        <>
          <Text x={16} y={12} w={228} h={18} size={13} weight="medium" color={COLORS.textSecondary}>{props.rangeText}</Text>
          {props.secondRangeText && (
            <Text x={16} y={30} w={228} h={18} size={13} weight="medium" color={COLORS.textSecondRange}>{props.secondRangeText}</Text>
          )}
          {props.showNet && <Text x={216} y={59} w={40} h={27} size={20} weight="medium" color={COLORS.textSecondary} align="right">{t('KEY_NET', 'Net')}</Text>}
          {/* Value: auto-width text, right edge at x=260, top 65 */}
          <Text x={0} y={65} w={260} size={83} weight="semibold" align="right" onClick={props.onValueClick}>{props.value}</Text>
          {props.showBaby && <Icon src={laundryIcon} x={168} y={165} w={24} h={24} />}
          {props.locked && <Icon src={lockedIcon} x={196} y={165} w={24} h={24} />}
          <Text x={224} y={162} w={32} h={27} size={24} weight="medium" align="right">{props.unit}</Text>
        </>
      )}
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Tare row (250–308)                                                  */
/* ------------------------------------------------------------------ */

export type TareRowProps = {
  showReweight: boolean;
  /** Tare value text, e.g. "-12.00 kg"; null hides the chip. */
  tareText: string | null;
  calculating?: boolean;
  /** Recall variant: chip without the remove (×) button. */
  hideRemove?: boolean;
  reweightDisabled?: boolean;
  onReweight?: () => void;
  onRemoveTare?: () => void;
};

function Pill({ x, y, icon, color, onClick, disabled }: { x: number; y: number; icon: string; color: string; onClick?: () => void; disabled?: boolean }) {
  const [pressed, handlers] = usePressed();
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...handlers}
      style={{ ...resetButton, position: 'absolute', left: x, top: y, width: 54, height: 36, borderRadius: 30, overflow: 'hidden', background: pressed ? COLORS.pillPressed : color }}
    >
      <Icon src={icon} x={15} y={6} w={24} h={24} />
    </button>
  );
}

export function TareRow({ showReweight, tareText, calculating, hideRemove, reweightDisabled, onReweight, onRemoveTare }: TareRowProps) {
  const chipX = showReweight ? 78 : 12;
  return (
    <Box x={0} y={250} w={272} h={58} style={{ background: COLORS.panel }}>
      {showReweight && <Pill x={12} y={6} icon={reweightIcon} color={COLORS.pill} onClick={onReweight} disabled={reweightDisabled} />}
      {(tareText !== null || calculating) && (
        <Box x={chipX} y={6} w={182} h={36} style={{ background: calculating ? COLORS.pillPressed : COLORS.pill, borderRadius: 80 }}>
          <Icon src={tare24Icon} x={8} y={6} w={24} h={24} />
          <Text x={40} y={5} w={100} h={27} size={20} weight="medium" align="center">{calculating ? '...' : tareText}</Text>
          {!calculating && !hideRemove && (
            <button type="button" onClick={onRemoveTare} aria-label="Remove tare" style={{ ...resetButton, position: 'absolute', left: 146, top: 6, width: 24, height: 24 }}>
              <Icon src={closeIcon} x={0} y={0} w={24} h={24} />
            </button>
          )}
        </Box>
      )}
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Height + BMI (308–408) and button bar (408–480)                      */
/* ------------------------------------------------------------------ */

export type HeightPanelProps =
  | { state: 'start'; onHeight?: () => void }
  | { state: 'stepOnScale' }
  /** Ultrasonic measurement in progress (indicator not yet in the Figma handover). */
  | { state: 'measuring'; indicator: ReactNode }
  | {
      state: 'value';
      /** e.g. "167.7" or 5'7¼" */
      value: string;
      /** "cm" or ft'in" */
      unit: string;
      bmiValue: string;
      /** "BMI" or "m²" (BSA) */
      bmiLabel: string;
      onReheight?: () => void;
      onValueClick?: () => void;
      onBmiClick?: () => void;
    };

export function HeightPanel(props: HeightPanelProps) {
  const t = useT();
  return (
    <Box x={0} y={308} w={272} h={100} style={{ background: COLORS.white }}>
      {props.state === 'start' && (
        <button type="button" onClick={props.onHeight} aria-label="Height" style={{ ...resetButton, position: 'absolute', left: 28, top: 20, width: 216, height: 58 }}>
          <Icon src={heightButton} x={0} y={0} w={216} h={58} />
          <Text x={74} y={16} w={104} h={22} size={16} weight="medium" color={COLORS.text} align="center" valign="center">{t('KEY_HEIGHT', 'Height')}</Text>
        </button>
      )}
      {props.state === 'stepOnScale' && (
        <>
          <Icon src={stepsIcon} x={96} y={12} w={80} h={50} />
          <Text x={12} y={62} w={248} h={27} size={20} weight="bold" align="center">{t('KEY_STEPON', 'Scale ready')}</Text>
        </>
      )}
      {props.state === 'measuring' && <Box x={96} y={14} w={80} h={80}>{props.indicator}</Box>}
      {props.state === 'value' && (
        <>
          <Pill x={12} y={20} icon={reheightIcon} color={COLORS.panel} onClick={props.onReheight} />
          <Text x={70} y={4.5} w={140} h={65} size={48} weight="semibold" align="right" onClick={props.onValueClick}>{props.value}</Text>
          <Text x={210} y={35} w={46} h={27} size={20} weight="medium" align="right">{props.unit}</Text>
          <div onClick={props.onBmiClick} style={{ cursor: props.onBmiClick ? 'pointer' : undefined }}>
            {/* BMI value: auto-width, right edge at x=210, top 63 */}
            <Text x={0} y={63} w={210} size={24} weight="semibold" align="right">{props.bmiValue}</Text>
            <Text x={210} y={68} w={46} h={27} size={20} weight="medium" align="right">{props.bmiLabel}</Text>
          </div>
        </>
      )}
    </Box>
  );
}

export type ButtonBarProps = {
  onTare?: () => void;
  onRecall?: () => void;
  onConfirm?: () => void;
  /** Stand-alone version: CONFIRM is shown like the other buttons (not highlighted). */
  standalone?: boolean;
  /** Simple print: third button is PRINT (prints only, no screen change). */
  print?: boolean;
  /** After sending: third button shows SAVED (check icon) until the next measurement. */
  saved?: boolean;
};

function BarButton({ x, icon, label, active, onClick }: { x: number; icon: string; label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ ...resetButton, position: 'absolute', left: x, top: 12, width: 82, height: 48, borderRadius: 4, overflow: 'hidden', background: active ? COLORS.confirmBg : COLORS.white }}
    >
      <Icon src={icon} x={17} y={0} w={48} h={32} />
      <Text x={0} y={32} w={82} h={16} size={13} weight="medium" align="center" valign="center" color={active ? COLORS.confirm : COLORS.label}>{label}</Text>
    </button>
  );
}

export function ButtonBar({ onTare, onRecall, onConfirm, standalone, print, saved }: ButtonBarProps) {
  const t = useT();
  return (
    <Box x={0} y={408} w={272} h={72} style={{ background: COLORS.white }}>
      <Icon src={buttonBarBg} x={0} y={0} w={272} h={72} />
      <BarButton x={12} icon={tare48Icon} label={t('KEY_TARE', 'TARE')} onClick={onTare} />
      <BarButton x={95} icon={recall48Icon} label={t('KEY_RECALL', 'RECALL')} onClick={onRecall} />
      {saved
        ? <BarButton x={178} icon={saved48Icon} label={t('KEY_SAVED', 'Saved').toUpperCase()} active />
        : print
        ? <BarButton x={178} icon={print48Icon} label={t('KEY_PRINT', 'PRINT')} onClick={onConfirm} />
        : <BarButton x={178} icon={standalone ? send48StandaloneIcon : send48Icon} label={t('KEY_SEND_HOME', 'CONFIRM')} active={!standalone} onClick={onConfirm} />}
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Composite                                                            */
/* ------------------------------------------------------------------ */

export type MainScreenProps = {
  statusBar: StatusBarProps;
  weight: WeightPanelProps;
  tare: TareRowProps;
  height: HeightPanelProps;
  buttons: ButtonBarProps;
};

export function MainScreen({ statusBar, weight, tare, height, buttons }: MainScreenProps) {
  // Paint order follows Figma: weight, height, status bar (banner overlaps weight), tare.
  return (
    <div style={{ position: 'relative', width: 272, height: 480, overflow: 'hidden', background: COLORS.panel }} data-name="Main Screen">
      <WeightPanel {...weight} />
      <HeightPanel {...height} />
      <ButtonBar {...buttons} />
      <TareRow {...tare} />
      <StatusBar {...statusBar} />
    </div>
  );
}
