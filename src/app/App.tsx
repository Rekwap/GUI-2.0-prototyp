import { useEffect, useRef, useState } from 'react';
import svgPaths from "./imports/svg-3klf9qq62w";
import taraSvgPaths from "./imports/svg-ghfkmimwkx";
import heightSvgPaths from "./imports/svg-8ngzldbm4z";
import bsaSvgPaths from "./imports/svg-krb2rzta1j";
import bsaMeasuredSvgPaths from "./imports/svg-o2rf5qpy0b";
import manualHeightSvgPaths from "./imports/svg-h9j444dobs";
import preTareSvgPaths from "./imports/svg-xw56jxzzbe";
import taraSvgPathsInfo from "./imports/svg-e8hequr364";
import lockedSvgPaths from "./imports/svg-erwvuembw9";
import heightMeasuredSvgPaths from "./imports/svg-knpa00cabo";
import { imgHistory2 } from "./imports/svg-uwx1h";
import { Switch } from "./components/ui/switch";
import { Label } from "./components/ui/label";
import PreTare from "./imports/PreTare";
import ManualTareInput from "./components/ManualTareInput";
import ManualHeightInput from "./components/ManualHeightInput";
import BsaBmi from "./imports/BsaBmi";
import ScanPatientId from "./imports/ScanPatientId";
import ScanPatientId34320 from "./imports/ScanPatientId-3-4320";
import Id from "./imports/Id";
import Id34414 from "./imports/Id-3-4414";
import WeightMeasurement from "./imports/WeightMeasurement";
import StatusBarPortrait from "./imports/StatusBarPortrait";
import StatusBarPortrait34583 from "./imports/StatusBarPortrait-3-4583";
import ScanBothIds from "./imports/ScanBothIds";
import StatusBarPortraitBoth from "./imports/StatusBarPortraitBoth";
import HeightCalibration from "./components/HeightCalibration";
import Network from "./components/Network";
import ServerConnection from "./components/ServerConnection";
import { TactileHeightScreen } from "./flows/TactileHeight";
import { SendHeightFlow } from "./flows/SendHeight";
import { UltrasonicHeightScreen } from "./flows/UltrasonicHeight";
import { DeviceModeScreen, SelfMeasurementFlow } from "./flows/SelfMeasurement";
import HeightConfirmation from "./components/HeightConfirmation";
import TactileHeightMeasurementComplete from "./components/TactileHeightMeasurementComplete";
import ControlPanel from "./components/ControlPanel";
import PreviousValueScreen from "./imports/Height-48-399";
import Dialog from "./imports/Dialog";
import HeightRequiredScreen from "./imports/ScanPatientId-89-225";
import ProgressHeigthMeasurementIcon from "./imports/ProgressHeigthMeasurement";
import ProgressHeigthMeasurementMid from "./imports/ProgressHeigthMeasurement-90-280";
import ProgressHeigthMeasurementTop from "./imports/ProgressHeigthMeasurement-90-317";
import DataSaved from "./imports/ScanPatientId-99-680";
import { BmiSettingsProvider, useBmiSettings } from './contexts/BmiSettingsContext';
import MenuComponent from './imports/Menu';
import InfoComponent from './imports/Info';
import SettingsComponent from './imports/Settings';
import ServiceComponent from './imports/Service';
import DisplayComponent from './imports/Display';
import LanguageComponent from './imports/Language';
import DialogRestartComponent from './imports/DialogRestart';
import BmiBsaMenu from './components/BmiBsaMenu';
import { MainScreen, type HeightPanelProps, type LoginBanner } from './main-screen/MainScreen';
import { TareAssistant } from './flows/TareAssistant';
import { FigmaScreen } from './figma-screens/FigmaScreen';
import { SCREENS } from './figma-screens/screens';
import { MenuFlow } from './flows/MenuFlow';
import { RecallScreen, ScanIdScreen, IdConfirmedScreen, OverviewScreen, TransmittingScreen, DataSavedScreen, IntegrationInfoScreen } from './flows/SendFlow';

// Wrapper component for consistent layout
function ScreenWrapper({ children, controls }: { children: React.ReactNode; controls: React.ReactNode}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center gap-8 bg-gray-100">
      {children}
      {controls}
    </div>
  );
}

function TechnicalWeighingDataPortrait({ isMetric }: { isMetric: boolean }) {
  return (
    <div className="absolute h-[36px] left-[16px] top-[12px] w-[228px]" data-name="Technical Weighing Data (Portrait)">
      <p className="absolute bottom-[5.26%] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-0 right-[25.27%] text-[#656d89] text-[13px] top-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {isMetric ? 'Max 360 kg' : 'Max 790 lbs'}
      </p>
    </div>
  );
}

function Locked24X24() {
  return (
    <div className="absolute right-[51px] size-[24px] top-[163px]" data-name="locked_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="locked_24x24">
          <path d={lockedSvgPaths.p1025e600} fill="var(--fill-0, #656D89)" id="lock" />
        </g>
      </svg>
    </div>
  );
}

function Frame1256({ weight, onClick, preTareValues, taredWeight, rawWeight }: { weight: string; onClick: () => void; preTareValues: string[]; taredWeight: string | null; rawWeight: string }) {
  // Simply display the weight as is - tare calculations are handled in the parent component
  return (
    <div 
      onClick={onClick}
      className="absolute content-stretch flex gap-[10px] h-[71px] items-center justify-end left-[13px] top-[86px] w-[246px] cursor-pointer"
    >
      <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#191c24] text-[83px] text-nowrap text-right whitespace-pre cursor-pointer" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {parseFloat(weight).toFixed(2)}
      </p>
    </div>
  );
}

function LibaryWeightDetails({ weight, onWeightClick, preTareValues, taredWeight, rawWeight, isMetric, isReweighting }: { weight: string; onWeightClick: () => void; preTareValues: string[]; taredWeight: string | null; rawWeight: string; isMetric: boolean; isReweighting: boolean }) {
  // Use rawWeight for lock logic since 'weight' is now formatted (could be lbs)
  // Hide lock during reweight animation
  const isWeightLocked = parseFloat(rawWeight) !== 0 && !isReweighting;
  const showNet = taredWeight !== null || preTareValues.length > 0;
  
  return (
    <div className="absolute bg-[#e7ebf7] h-[200px] left-0 overflow-clip top-[50px] w-[272px]" data-name="libary_Weight + Details">
      <TechnicalWeighingDataPortrait isMetric={isMetric} />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[256px] size-[27px] text-[#191c24] text-[20px] text-right top-[165px] translate-x-[-100%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {isMetric ? 'kg' : 'lbs'}
      </p>
      {isWeightLocked && <Locked24X24 />}
      {showNet && (
        <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] right-[16px] text-[#656d89] text-[20px] text-nowrap text-right top-[59px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          Net
        </p>
      )}
      <Frame1256 weight={weight} onClick={onWeightClick} preTareValues={preTareValues} taredWeight={taredWeight} rawWeight={rawWeight} />
    </div>
  );
}

function Frame1250() {
  return <div className="absolute h-[33px] left-[calc(50%+0.5px)] top-[calc(50%-64.5px)] translate-x-[-50%] translate-y-[-50%] w-[132px]" />;
}

function Group1232() {
  return (
    <div className="h-[30px] relative shrink-0 w-[22.181px]">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-[-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 31">
          <g id="Group 1232">
            <path d={svgPaths.p28552900} fill="var(--stroke-0, #191C24)" id="Arrow 1" />
            <line id="Line 3" stroke="var(--stroke-0, #191C24)" strokeWidth="2" x1="14" x2="22" y1="1" y2="1" />
            <line id="Line 4" stroke="var(--stroke-0, #191C24)" strokeWidth="2" x1="13.5332" x2="22.1835" y1="30" y2="30" />
            <path d={svgPaths.p175fca00} fill="var(--fill-0, #191C24)" id="Vector" />
            <circle cx="6" cy="3.5" fill="var(--fill-0, #191C24)" id="Ellipse 3" r="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProgressHeigthMeasurement({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-white box-border content-stretch flex gap-[10px] items-center left-[calc(50%+0.091px)] px-[30px] py-[8px] rounded-[54px] shadow-[0px_2px_6px_0px_#191c24] top-[28px] translate-x-[-50%] cursor-pointer hover:shadow-[0px_2px_8px_0px_#191c24] transition-shadow" 
      data-name="Progress Heigth Measurement"
    >
      <Group1232 />
      <div className="flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#191c24] text-[16px] text-center w-[112px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">{`Height `}</p>
      </div>
    </button>
  );
}

function Group1232Bsa() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16.992px]">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 24">
          <g id="Group 1232">
            <path d={bsaSvgPaths.pdc29900} fill="var(--stroke-0, #191C24)" id="Arrow 1" />
            <line id="Line 3" stroke="var(--stroke-0, #191C24)" x1="10.9938" x2="16.9938" y1="0.5" y2="0.5" />
            <line id="Line 4" stroke="var(--stroke-0, #191C24)" x1="10.9938" x2="16.9938" y1="23.5" y2="23.5" />
            <path d={bsaSvgPaths.p2c334580} fill="var(--fill-0, #191C24)" id="Vector" />
            <ellipse cx="4.80073" cy="2.00002" fill="var(--fill-0, #191C24)" id="Ellipse 3" rx="1.99998" ry="2.00002" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1310() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center justify-center left-1/2 top-[5px] translate-x-[-50%] w-[24px]">
      <Group1232Bsa />
    </div>
  );
}

function ReweightBsa() {
  return (
    <div className="absolute bg-[#98b0d8] bottom-0 h-[36px] left-1/2 overflow-clip rounded-bl-[18px] rounded-br-[18px] translate-x-[-50%] w-[100px]" data-name="Reweight">
      <Frame1310 />
    </div>
  );
}

function Reweight1({ onClick, displayLabel }: { onClick: () => void; displayLabel: string }) {
  return (
    <div onClick={onClick} className="absolute h-[72px] left-[13px] rounded-[18px] top-[10px] w-[54px] cursor-pointer" data-name="Reweight">
      <div className="h-[72px] overflow-clip relative rounded-[inherit] w-[54px]">
        <ReweightBsa />
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[calc(50%+18px)] text-[#8b8d91] text-[20px] text-nowrap text-right top-[calc(50%-17px)] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre">{displayLabel}</p>
        </div>
        <div className="absolute bg-white h-[2px] left-0 top-[34px] w-[100px]" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#c9cacb] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Group1252({ onClick, displayLabel }: { onClick: () => void; displayLabel: string }) {
  return (
    <div className="absolute contents left-[13px] top-[10px]">
      <Reweight1 onClick={onClick} displayLabel={displayLabel} />
    </div>
  );
}

function Group1232BsaMeasured() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16.992px]">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 24">
          <g id="Group 1232">
            <path d={bsaMeasuredSvgPaths.pdc29900} fill="var(--stroke-0, #8B8D91)" id="Arrow 1" />
            <line id="Line 3" stroke="var(--stroke-0, #8B8D91)" x1="10.9938" x2="16.9938" y1="0.5" y2="0.5" />
            <line id="Line 4" stroke="var(--stroke-0, #8B8D91)" x1="10.9938" x2="16.9938" y1="23.5" y2="23.5" />
            <path d={bsaMeasuredSvgPaths.p2c334580} fill="var(--fill-0, #8B8D91)" id="Vector" />
            <ellipse cx="4.80073" cy="2.00002" fill="var(--fill-0, #8B8D91)" id="Ellipse 3" rx="1.99998" ry="2.00002" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1309() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center justify-center left-1/2 top-[41px] translate-x-[-50%] w-[24px]">
      <Group1232BsaMeasured />
    </div>
  );
}

function ReweightBsaMeasured() {
  return <div className="absolute bg-[#98b0d8] bottom-[38px] h-[36px] left-1/2 rounded-bl-[18px] rounded-br-[18px] translate-x-[-50%] w-[100px]" data-name="Reweight" />;
}

function Reweight1BsaMeasured({ onClick, displayLabel }: { onClick: () => void; displayLabel: string }) {
  return (
    <div onClick={onClick} className="absolute h-[72px] left-[13px] rounded-[18px] top-[10px] w-[54px] cursor-pointer" data-name="Reweight">
      <div className="h-[72px] overflow-clip relative rounded-[inherit] w-[54px]">
        <Frame1309 />
        <ReweightBsaMeasured />
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Bold',_sans-serif] font-bold justify-center leading-[0] left-[calc(50%+18px)] text-[#191c24] text-[20px] text-nowrap text-right top-[calc(50%-17px)] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre">{displayLabel}</p>
        </div>
        <div className="absolute bg-white h-[2px] left-0 top-[34px] w-[100px]" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#c9cacb] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Group1253({ onClick, displayLabel }: { onClick: () => void; displayLabel: string }) {
  return (
    <div className="absolute contents left-[13px] top-[10px]">
      <Reweight1BsaMeasured onClick={onClick} displayLabel={displayLabel} />
    </div>
  );
}

// Helper function to convert cm to ft'in format with eighths precision
function convertCmToFeetInches(cm: string | null): string {
  if (!cm) return '-';
  const numericValue = parseFloat(cm);
  if (isNaN(numericValue)) return cm;
  
  const totalInches = numericValue / 2.54;
  const feet = Math.floor(totalInches / 12);
  const remainingInches = totalInches % 12;
  
  // Round to nearest eighth
  const eighths = Math.round(remainingInches * 8);
  const wholeInches = Math.floor(eighths / 8);
  const fractionEighths = eighths % 8;
  
  // Map eighths to Unicode fraction characters
  const eighthsMap: { [key: number]: string } = {
    0: '',
    1: '⅛',
    2: '¼',
    3: '⅜',
    4: '½',
    5: '⅝',
    6: '¾',
    7: '⅞'
  };
  
  const fractionString = eighthsMap[fractionEighths] || '';
  
  return `${feet}'${wholeInches}${fractionString}"`;
}

// Helper components for height measured display
function HeightMeasuredIcon({ color }: { color: string }) {
  return (
    <div className="h-[24px] relative shrink-0 w-[16.994px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 24">
        <g id="Group 1232">
          <path d={heightMeasuredSvgPaths.p32824040} fill={color} id="Arrow 1" />
          <line id="Line 3" stroke={color} x1="10.9939" x2="16.9939" y1="0.5" y2="0.5" />
          <line id="Line 4" stroke={color} x1="10.9939" x2="16.9939" y1="23.5" y2="23.5" />
          <path d={heightMeasuredSvgPaths.p1457d980} fill={color} id="Vector" />
          <ellipse cx="4.80081" cy="2.00002" fill={color} id="Ellipse 3" rx="1.99998" ry="2.00002" />
        </g>
      </svg>
    </div>
  );
}

function HeightMeasuredBmi({ onClick, displayLabel }: { onClick: () => void; displayLabel: string }) {
  // displayLabel ist der AKTIVE Wert (was gerade angezeigt wird)
  // BMI = grauer Hintergrund oben (bei BMI)
  // m² = grauer Hintergrund unten (bei BSA)
  const isBmi = displayLabel === "BMI";
  const textColor = "#191C24"; // Der angezeigte Text ist immer schwarz (aktiv)
  const iconColor = "#191C24"; // Icon ist immer schwarz

  return (
    <div 
      onClick={onClick} 
      className="bg-white h-[88px] relative rounded-full w-[40px] cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="BMI"
    >
      <div className="h-[88px] overflow-clip relative rounded-full w-[40px]">
        {/* Grauer Hintergrund - hinter Icon */}
        <div 
          className="absolute bg-[#d9d9d9] h-[44px] w-[87px]" 
          style={{ 
            top: isBmi ? '0px' : '44px',
            ...(isBmi ? { left: '-16px' } : { right: '-16px' })
          }}
        />
        
        {/* Icon - fest positioniert, immer schwarz */}
        <div className="absolute left-1/2 top-[53px] -translate-x-1/2">
          <div className="rotate-90">
            <HeightMeasuredIcon color={iconColor} />
          </div>
        </div>
        
        {/* Text - fest positioniert, dunkelgrau */}
        <div className="absolute left-1/2 top-[22px] -translate-x-1/2">
          <div className="rotate-90">
            <p 
              className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium text-[16px] w-[40px] text-center"
              style={{ 
                fontVariationSettings: "'CTGR' 100, 'wdth' 100",
                color: '#8B8D91',
                marginLeft: '-20px'
              }}
            >
              {displayLabel}
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-full" />
    </div>
  );
}

function BsaMeasuredHeight({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-white h-[88px] relative rounded-[18px] w-[48px] cursor-pointer hover:bg-gray-50 transition-colors" data-name="Height">
      <div className="h-[88px] overflow-clip relative rounded-[inherit] w-[48px]">
        <div className="absolute bg-[#d9d9d9] h-[40px] left-[-16px] top-0 w-[87px]" />
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-1/2 top-[53px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <HeightMeasuredFrame />
          </div>
        </div>
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%+13.5px)] top-[calc(50%-22px)] translate-x-[-100%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "23" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] relative text-[#8b8d91] text-[20px] text-nowrap text-right" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              <p className="leading-[normal] whitespace-pre">BSA</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function LibaryHeightBmi({ showHeightMeasured, showBsa, onHeightClick, onBsaClick, onBsaBackClick, heightValue, bsaValue, isHeightUpdating, heightLoadingBars, onHeightValueClick, isMetric, rawWeight, hasEverMeasured, displayLabel }: { showHeightMeasured: boolean; showBsa: boolean; onHeightClick: () => void; onBsaClick: () => void; onBsaBackClick: () => void; heightValue: string | null; bsaValue: string; isHeightUpdating: boolean; heightLoadingBars: number; onHeightValueClick: () => void; isMetric: boolean; rawWeight: string; hasEverMeasured: boolean; displayLabel: string }) {
  
  if (!showHeightMeasured) {
    return (
      <div className="absolute bg-white h-[170px] left-0 top-[310px] w-[272px]" data-name="libary_Height + BMI">
        <Frame1250 />
        <ProgressHeigthMeasurement onClick={onHeightClick} />
      </div>
    );
  }

  if (showBsa) {
    return (
      <div className="absolute bg-white h-[170px] left-0 top-[310px] w-[272px]" data-name="libary_Height + BMI">
        {bsaValue !== 'missing' && bsaValue !== '---' && (
          <p className="absolute bottom-[106px] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[27px] leading-[normal] right-[16px] text-[#191c24] text-[20px] text-right translate-y-[100%] w-auto" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {displayLabel === 'BMI' ? 'BMI' : 'm²'}
          </p>
        )}
        <p 
          onClick={onHeightValueClick}
          className="absolute bottom-[159px] font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold h-[65px] leading-[normal] left-[calc(50%+120px)] text-[#191c24] text-[48px] text-right translate-x-[-100%] translate-y-[100%] w-[121px] cursor-pointer z-10 hover:opacity-80 transition-opacity" 
          style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
        >
          {bsaValue}
        </p>
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[16px] top-[26px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "88" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <BsaBmi onClick={onBsaBackClick} displayLabel={displayLabel} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bg-white h-[170px] left-0 top-[310px] w-[272px]" data-name="libary_Height + BMI">
      {/* Show height unit only when not updating */}
      {!isHeightUpdating && (
        <p className="absolute bottom-[106px] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[27px] leading-[normal] right-[16px] text-[#191c24] text-[20px] text-right translate-y-[100%] w-auto" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          {isMetric ? 'cm' : 'ft\'in'}
        </p>
      )}
      {/* Show loading graphic during update, otherwise show height value */}
      {isHeightUpdating ? (
        <div className="absolute left-1/2 size-[80px] top-[14px] translate-x-[-50%]">
          {heightLoadingBars === 0 && <ProgressHeigthMeasurementIcon />}
          {heightLoadingBars === 1 && <ProgressHeigthMeasurementMid />}
          {heightLoadingBars === 2 && <ProgressHeigthMeasurementTop />}
        </div>
      ) : (
        <p 
          onClick={onHeightValueClick}
          className="absolute bottom-[159px] font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold h-[65px] leading-[normal] left-[calc(50%+120px)] text-[#191c24] text-[48px] text-right translate-x-[-100%] translate-y-[100%] w-[121px] cursor-pointer"
          style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
        >
          {heightValue}
        </p>
      )}
      {hasEverMeasured && !isHeightUpdating && (
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[16px] top-[26px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "88" } as React.CSSProperties}>
          <div className="flex-none rotate-[270deg]">
            <HeightMeasuredBmi onClick={onBsaClick} displayLabel={displayLabel} />
          </div>
        </div>
      )}
    </div>
  );
}

function ButtonBar480X72() {
  return (
    <div className="absolute h-[72px] left-0 overflow-clip top-0 w-[272px]" data-name="button-bar_480x72">
      <div className="absolute bg-white h-[56px] left-[8px] opacity-[0.84] rounded-[8px] top-[8px] w-[256px]">
        <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_6px_0px_#191c24]" />
      </div>
    </div>
  );
}

function Tare48X32() {
  return (
    <div className="absolute h-[32px] left-1/2 top-0 translate-x-[-50%] w-[48px]" data-name="tare_48x32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 32">
        <g id="tare_48x32">
          <mask height="32" id="mask0_3_887" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_3_887)">
            <g id=">T<">
              <path d={svgPaths.p3a83da00} fill="#191C24" />
              <path d={svgPaths.p2dff8600} fill="#191C24" />
              <path d={svgPaths.p34579700} fill="#191C24" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="bg-white h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-[82px] cursor-pointer hover:bg-gray-50 transition-colors" data-name="Button">
      <div className="absolute bottom-[8px] flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[16px] justify-center leading-[0] left-[calc(50%-0.5px)] text-[#8b8d91] text-[13px] text-center translate-x-[-50%] translate-y-[50%] w-[91px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">TARE</p>
      </div>
      <Tare48X32 />
    </button>
  );
}

function History2() {
  return (
    <div className="absolute left-[12px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-12px_-4px] mask-size-[48px_32px] size-[24px] top-[4px]" data-name="history_2" style={{ maskImage: `url('${imgHistory2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="history_2">
          <mask height="24" id="mask0_3_878" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_878)">
            <path d={svgPaths.p20499e80} fill="var(--fill-0, #191C24)" id="history_2_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Recall48X32() {
  return (
    <div className="absolute h-[32px] left-1/2 top-0 translate-x-[-50%] w-[48px]" data-name="Recall_48x32">
      <History2 />
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-white h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-[82px] cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="Button"
    >
      <div className="absolute bottom-[8px] flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[16px] justify-center leading-[0] left-[calc(50%-0.5px)] text-[#8b8d91] text-[13px] text-center translate-x-[-50%] translate-y-[50%] w-[91px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">RECALL</p>
      </div>
      <Recall48X32 />
    </button>
  );
}

function Send48X32({ isStandalone }: { isStandalone?: boolean }) {
  const fillColor = isStandalone ? "#191C24" : "#06A94E";
  return (
    <div className="absolute h-[32px] left-1/2 top-0 translate-x-[-50%] w-[48px]" data-name="send_48x32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 32">
        <g id="send_48x32">
          <g id="Vector">
            <path d={svgPaths.p2ee28600} fill={fillColor} />
            <path d="M3 6L16 6V9H3V6Z" fill={fillColor} />
            <path d="M16 17H8V14H16V17Z" fill={fillColor} />
            <path d="M12 22H16V25H12V22Z" fill={fillColor} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2({ onClick, isStandalone }: { onClick: () => void; isStandalone: boolean }) {
  return (
    <button 
      onClick={onClick} 
      className={`h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-[82px] cursor-pointer transition-colors ${
        isStandalone 
          ? 'bg-white hover:bg-gray-50' 
          : 'bg-[#daf2e5] hover:bg-[#c5e8d5]'
      }`} 
      data-name="Button"
    >
      <div 
        className={`absolute bottom-[8px] flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[16px] justify-center leading-[0] left-[calc(50%-0.5px)] text-[13px] text-center translate-x-[-50%] translate-y-[50%] w-[91px] ${
          isStandalone ? 'text-[#656d89]' : 'text-[#06a94e]'
        }`} 
        style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}
      >
        <p className="leading-[normal]">SEND</p>
      </div>
      <Send48X32 isStandalone={isStandalone} />
    </button>
  );
}

function Frame1239({ onTareClick, onSendClick, onRecallClick, isStandalone }: { onTareClick: () => void; onSendClick: () => void; onRecallClick: () => void; isStandalone: boolean }) {
  return (
    <div className="absolute content-stretch flex gap-px items-center left-1/2 top-[12px] translate-x-[-50%]">
      <Button onClick={onTareClick} />
      <Button1 onClick={onRecallClick} />
      <Button2 onClick={onSendClick} isStandalone={isStandalone} />
    </div>
  );
}

function ButtonBar({ onTareClick, onSendClick, onRecallClick, isStandalone }: { onTareClick: () => void; onSendClick: () => void; onRecallClick: () => void; isStandalone: boolean }) {
  return (
    <div className="absolute h-[72px] left-[calc(50%-1px)] top-[calc(50%+204px)] translate-x-[-50%] translate-y-[-50%] w-[272px]" data-name="Button Bar">
      <ButtonBar480X72 />
      <Frame1239 onTareClick={onTareClick} onSendClick={onSendClick} onRecallClick={onRecallClick} isStandalone={isStandalone} />
    </div>
  );
}



function Reweight24X24() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="reweight_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reweight_24x24">
          <mask height="24" id="mask0_3_1011" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1011)">
            <path d={taraSvgPaths.p3f15cd80} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Reweight({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className="bg-[#98b0d8] h-[36px] overflow-clip relative rounded-[30px] shrink-0 w-[54px] cursor-pointer hover:bg-[#8aa0c8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#98b0d8]" 
      data-name="Reweight"
    >
      <Reweight24X24 />
    </button>
  );
}

function TareValue({ onReweight, isReweighting }: { onReweight: () => void; isReweighting?: boolean }) {
  return (
    <div className="absolute bottom-[12px] left-[13px]" data-name="Tare Value">
      <Reweight onClick={onReweight} disabled={isReweighting} />
    </div>
  );
}

function Reweight24X24Info() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="reweight_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reweight_24x24">
          <mask height="24" id="mask0_3_1015" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1015)">
            <path d={taraSvgPathsInfo.p3f15cd80} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ReweightInfo({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button onClick={onClick} disabled={disabled} className="bg-[#98b0d8] h-[36px] overflow-clip relative rounded-[30px] shrink-0 w-[54px] cursor-pointer hover:bg-[#8aa0c8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#98b0d8]" data-name="Reweight">
      <Reweight24X24Info />
    </button>
  );
}

function Tare24X24Info() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[6px]" data-name="Tare_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Tare_24x24">
          <g id=">T<">
            <path d={taraSvgPathsInfo.p2d3a6b80} fill="#191C24" />
            <path d={taraSvgPathsInfo.p3b55f880} fill="#191C24" />
            <path d={taraSvgPathsInfo.p244e1400} fill="#191C24" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close24X24Info() {
  return (
    <div className="absolute left-[104px] size-[24px] top-[2px]" data-name="close_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close_24x24">
          <mask height="24" id="mask0_3_867" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_867)">
            <path d={taraSvgPathsInfo.p18d83600} fill="var(--fill-0, #191C24)" id="close" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TaraValueInfo({ taredWeight, preTareValues, onRemove, isMetric }: { taredWeight: string | null; preTareValues: string[]; onRemove: () => void; isMetric: boolean }) {
  const totalPreTare = preTareValues.reduce((sum, value) => sum + parseFloat(value), 0);
  const manualTare = taredWeight ? parseFloat(taredWeight) : 0;
  const totalTare = totalPreTare + manualTare;
  
  // Don't render if tare value is 0
  if (totalTare === 0) {
    return null;
  }
  
  const kgToLbs = (kg: number): number => kg * 2.20462;
  const displayValue = isMetric ? totalTare.toFixed(2) : kgToLbs(totalTare).toFixed(2);
  const unit = isMetric ? 'kg' : 'lbs';
  
  return (
    <div className="bg-[#98b0d8] h-[36px] relative rounded-[80px] shrink-0 w-[180px]" data-name="TARA Value">
      <Tare24X24Info />
      <div className="absolute h-[28px] left-[40px] top-[4px] w-[135px]" data-name="value + x">
        <div className="absolute h-[27px] left-0 top-px w-[100px]">
          <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[50px] text-[#191c24] text-[20px] text-center top-0 translate-x-[-50%] w-[100px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            -{displayValue} {unit}
          </p>
        </div>
        <button onClick={onRemove} className="cursor-pointer">
          <Close24X24Info />
        </button>
      </div>
    </div>
  );
}

function LibaryTara({ showButton, onReweight, taredWeight, preTareValues, onRemoveTare, weight, rawWeight, isMetric, isReweighting }: { showButton: boolean; onReweight: () => void; taredWeight: string | null; preTareValues: string[]; onRemoveTare: () => void; weight: string; rawWeight: string; isMetric: boolean; isReweighting?: boolean }) {
  if (taredWeight || preTareValues.length > 0) {
    return (
      <div className="absolute h-[60px] right-0 top-[250px] w-[272px]" data-name="Libary_TARA">
        <div className="absolute bottom-[12px] content-stretch flex gap-[12px] items-start left-[13px]" data-name="Tare Value">
          <div style={{ visibility: showButton ? 'visible' : 'hidden' }}>
            <ReweightInfo onClick={onReweight} disabled={isReweighting} />
          </div>
          <TaraValueInfo taredWeight={taredWeight} preTareValues={preTareValues} onRemove={onRemoveTare} isMetric={isMetric} />
        </div>
      </div>
    );
  }

  if (!showButton) {
    return <div className="absolute h-[60px] right-0 top-[250px] w-[272px]" data-name="Libary_TARA" />;
  }

  return (
    <div className="absolute h-[60px] right-0 top-[250px] w-[272px]" data-name="Libary_TARA">
      <TareValue onReweight={onReweight} isReweighting={isReweighting} />
    </div>
  );
}

function AppContent() {
  const { selectedMode, getDisplayLabel } = useBmiSettings();
  const [weight, setWeight] = useState('0.00');
  const [rawWeight, setRawWeight] = useState('0.00'); // Store the actual weight from scale
  const [heightMeasured, setHeightMeasured] = useState(false);
  const [showBsa, setShowBsa] = useState(false);
  const [manualHeight, setManualHeight] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [heightValue, setHeightValue] = useState<string | null>(null);
  const [showTareAssistant, setShowTareAssistant] = useState(false);
  const [taredWeight, setTaredWeight] = useState<string | null>(null);
  const [preTareValues, setPreTareValues] = useState<string[]>([]);
  const [showManualTare, setShowManualTare] = useState(false);
  const [showTareInfo, setShowTareInfo] = useState(false);
  // Mother/Child tare active (shows the mother/child icon on the main screen)
  const [motherMode, setMotherMode] = useState(false);
  const [heightRequired, setHeightRequired] = useState(true); // Control whether height is required for sending
  const [isHeightUpdating, setIsHeightUpdating] = useState(false);
  const [heightLoadingBars, setHeightLoadingBars] = useState(0);
  
  // Login mode: 'user-only' | 'patient-only' | 'both'
  const [loginMode, setLoginMode] = useState<'user-only' | 'patient-only' | 'both'>('patient-only');
  
  // Height measurement mode: 'manual' | 'ultrasonic' | 'tactile'
  const [heightMode, setHeightMode] = useState<'manual' | 'ultrasonic' | 'tactile'>('ultrasonic');
  
  // Zoom level for iPad display (50-150%)
  const [zoomLevel, setZoomLevel] = useState(100);
  
  // Tactile height state
  const [showTactileHeight, setShowTactileHeight] = useState(false);
  const [showTactileComplete, setShowTactileComplete] = useState(false);
  
  // Patient ID flow
  const [showScanPatientId, setShowScanPatientId] = useState(false);
  const [showPatientId, setShowPatientId] = useState(false);
  const [isPatientLoggedIn, setIsPatientLoggedIn] = useState(false);
  
  // User ID flow
  const [showScanUserId, setShowScanUserId] = useState(false);
  const [showUserIdConfirmed, setShowUserIdConfirmed] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // Direct login by barcode scan (outside the send wizard): feedback screen for 3 s, then main screen with banner.
  const [directLogin, setDirectLogin] = useState<'patient' | 'user' | null>(null);
  useEffect(() => {
    if (!directLogin) return;
    const t = setTimeout(() => setDirectLogin(null), 3000);
    return () => clearTimeout(t);
  }, [directLogin]);
  // Tare-by-Scanning: "Read pre-tare" for 3 s, then the scanned value is the tare (overrides the persistent pre-tare).
  const [tareBarcodeKg, setTareBarcodeKg] = useState('0.60');
  const [tareScan, setTareScan] = useState<number | null>(null);
  const handleBarcodeScan = (kind: 'patient' | 'user') => {
    if (kind === 'patient') setIsPatientLoggedIn(true);
    else setIsUserLoggedIn(true);
    setDirectLogin(kind);
  };
  
  // Both mode flow
  const [showScanBothIds, setShowScanBothIds] = useState(false);
  const [firstScannedId, setFirstScannedId] = useState<'patient' | 'user' | null>(null);
  
  const [showOverview, setShowOverview] = useState(false);
  
  // Menu state
  const [showMenu, setShowMenu] = useState(false);
  const [booting, setBooting] = useState(false);
  const bootTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentMenuScreen, setCurrentMenuScreen] = useState<'main' | 'info' | 'settings' | 'service' | 'restart' | 'display' | 'language' | 'bmiBsa'>('main');
  
  // Height Calibration state
  const [showHeightCalibration, setShowHeightCalibration] = useState(false);
  
  // Integration Info state
  const [showIntegrationInfo, setShowIntegrationInfo] = useState(false);
  
  // Network state
  const [showNetwork, setShowNetwork] = useState(false);
  const [wifiEnabled, setWifiEnabled] = useState(false);
  
  // Server Connection state
  const [showServerConnection, setShowServerConnection] = useState(false);
  const [serverAddress, setServerAddress] = useState('');
  const [serverPort, setServerPort] = useState('');
  
  // Installation mode: integrated (EMR, default) | stand-alone | simple print
  const [installationMode, setInstallationMode] = useState<'integrated' | 'standalone' | 'simpleprint'>('integrated');
  // Start screen "Choose mode": guided (professional) measurement or self-measurement.
  const [deviceMode, setDeviceMode] = useState<'choose' | 'guided' | 'self'>('choose');
  // Stand-alone: CONFIRM opens the "Integration" info screen (QR code).
  const [showStandaloneInfo, setShowStandaloneInfo] = useState(false);
  // Simple print: printing gives no feedback on the device; shown in the control panel only.
  const [printing, setPrinting] = useState(false);
  useEffect(() => {
    if (!printing) return;
    const t = setTimeout(() => setPrinting(false), 2500);
    return () => clearTimeout(t);
  }, [printing]);
  
  // Unit system: 'metric' | 'imperial'
  const [isMetric, setIsMetric] = useState(true);
  
  // Reweight animation state
  const [isReweighting, setIsReweighting] = useState(false);
  
  // Show reweight button state
  const [showReweightButton, setShowReweightButton] = useState(false);
  
  // Track if a weight measurement has ever been taken
  const [hasEverMeasured, setHasEverMeasured] = useState(false);
  
  // Test height for display (in cm)
  const [testHeight, setTestHeight] = useState('167.7');
  // Simulated patient weight in kg (Control Panel).
  const [testWeight, setTestWeight] = useState('54.80');
  
  // Control Panel visibility (visible by default)
  const [showControlPanel, setShowControlPanel] = useState(true);
  const [pretare, setPretare] = useState('');
  // Persistent (global) pre-tare: suspended once an assistant tare overrides it, back after stepping off.
  const [ptSuspended, setPtSuspended] = useState(false);
  // Temp. pre-tare from Tare-by-Scanning (scans add up).
  const [scanKg, setScanKg] = useState(0);
  // After stepping off, the height area shows "Scale ready" until the next patient steps on.
  const [steppedOff, setSteppedOff] = useState(false);
  
  // Previous value screen state
  const [showPreviousValue, setShowPreviousValue] = useState(false);
  
  // Missing data dialog state
  const [showMissingDataDialog, setShowMissingDataDialog] = useState(false);
  
  // Height required prompt screen state
  const [showHeightRequiredPrompt, setShowHeightRequiredPrompt] = useState(false);
  // Height required but missing when sending: "Send with Height" flow (Figma 10795:26042).
  const [showSendHeight, setShowSendHeight] = useState(false);
  // Ultrasonic measurement screens (Figma 11125:33087), from Height / re-measure on the main screen.
  const [showUltrasonic, setShowUltrasonic] = useState(false);
  
  // Height confirmation screen state
  const [showHeightConfirmation, setShowHeightConfirmation] = useState(false);
  
  // Data saved screen state
  const [showDataSaved, setShowDataSaved] = useState(false);
  const [showTransmitting, setShowTransmitting] = useState(false);
  // After sending: integration data (logins) cleared, CONFIRM shows SAVED until the next measurement.
  const [sent, setSent] = useState(false);
  const savedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Last sent measurement, shown by RECALL
  const [lastSent, setLastSent] = useState<{ weightKg: number; tareKg: number; time: number; heightCm: string | null } | null>(null);
  
  // Track if we should show overview after height measurement (when triggered from Send button)
  const [pendingSendAfterHeight, setPendingSendAfterHeight] = useState(false);
  
  // Track if height required prompt came from send wizard flow (vs. height button flow)
  const [heightRequiredFromSendWizard, setHeightRequiredFromSendWizard] = useState(false);
  
  // Computed: logged in if required IDs are scanned
  const isLoggedIn = 
    (loginMode === 'user-only' && isUserLoggedIn) ||
    (loginMode === 'patient-only' && isPatientLoggedIn) ||
    (loginMode === 'both' && isUserLoggedIn && isPatientLoggedIn);

  // Conversion functions
  const kgToLbs = (kg: number): number => kg * 2.20462;
  const lbsToKg = (lbs: number): number => lbs / 2.20462;
  const cmToInches = (cm: number): number => cm / 2.54;
  const inchesToCm = (inches: number): number => inches * 2.54;
  
  const formatHeight = (heightInCm: string | null): string => {
    if (!heightInCm) return testHeight; // Default display value from Control Panel
    if (!isMetric) {
      return convertCmToFeetInches(heightInCm);
    }
    const cm = parseFloat(heightInCm);
    return isNaN(cm) ? heightInCm : cm.toFixed(1);
  };
  
  const formatWeight = (weightInKg: string): string => {
    if (!isMetric) {
      const lbs = kgToLbs(parseFloat(weightInKg));
      return lbs.toFixed(2);
    }
    return weightInKg;
  };

  // Calculate BSA or BMI based on selected mode
  // BSA formulas:
  // - DuBois: BSA [m²] = √(height [cm] × weight [kg] / 3600)
  // - Haycock: BSA = 0.024265 × height^0.3964 × weight^0.5378
  // - Mosteller: BSA = √(height × weight / 3600)
  // BMI formula: BMI = weight [kg] / (height [m])²
  const calculateBsaOrBmi = (mode: string): string => {
    const weightNum = parseFloat(weight); // Net weight in kg (gross minus tare / pre-tare)
    
    // Use testHeight instead of heightValue
    if (!testHeight) {
      return '---';
    }
    
    const heightNum = parseFloat(heightValue ?? testHeight); // measured / entered height
    
    // Show --- for zero, negative, or invalid weight
    if (weightNum <= 0 || isNaN(weightNum)) {
      return '---';
    }
    
    // No height (0 or invalid) → no BMI/BSA
    if (isNaN(heightNum) || heightNum <= 0) {
      return '---';
    }
    
    // BMI calculation
    if (mode === 'bmi') {
      const heightInMeters = heightNum / 100; // Convert cm to meters
      const bmi = weightNum / (heightInMeters * heightInMeters);
      return bmi.toFixed(1);
    }
    
    // BSA calculations
    if (mode === 'bsa-haycock') {
      const bsa = 0.024265 * Math.pow(heightNum, 0.3964) * Math.pow(weightNum, 0.5378);
      return bsa.toFixed(1);
    }
    
    // DuBois and Mosteller use the same formula
    const bsa = Math.sqrt((heightNum * weightNum) / 3600);
    return bsa.toFixed(1);
  };

  const bsaValue = calculateBsaOrBmi(selectedMode);

  /*
   * Tare model (seca spec "Persistent Pre-Tare / Global Deduction"):
   *   Persistent pre-tare (PT) + temp. pre-tare (scans + clothing) + tare (set to zero / mother & child).
   *   Scan: PT on, adds to temp.      Tare / Mother&Child: PT off, temp cleared, new tare.
   *   Main screen X: PT on, temp and tare cleared.      Clothing: PT off, replaces the clothing part of temp.
   *   Clear values (step off): PT on, temp and tare cleared.      PT setting change: PT on, temp cleared.
   */
  const persistentKg = Math.max(0, parseFloat(pretare) || 0);
  const ptActive = persistentKg > 0 && !ptSuspended;
  const clothingKg = preTareValues.reduce((sum, v) => sum + parseFloat(v), 0);
  const tareOverride = taredWeight !== null || preTareValues.length > 0 || motherMode || scanKg > 0;
  const tareKgNow = () => clothingKg + scanKg + (taredWeight ? parseFloat(taredWeight) : 0) + (ptActive ? persistentKg : 0);
  /** Net weight (kg) for a given tare composition, applied to the reading if someone is on the scale. */
  const applyNet = (tareKg: number) => {
    const raw = parseFloat(rawWeight);
    setWeight((raw === 0 ? -tareKg : raw - tareKg).toFixed(2));
  };

  useEffect(() => {
    if (tareScan === null) return;
    const t = setTimeout(() => {
      const kg = tareScan;
      setTareScan(null);
      const nextScan = scanKg + kg;
      setScanKg(nextScan);
      setPtSuspended(false);
      applyNet(clothingKg + nextScan + (taredWeight ? parseFloat(taredWeight) : 0) + persistentKg);
    }, 3000);
    return () => clearTimeout(t);
  }, [tareScan]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePretareChange = (kg: string) => {
    setPretare(kg);
    setPtSuspended(false);
    setScanKg(0);
    setPreTareValues([]);
    const pt = Math.max(0, parseFloat(kg) || 0);
    if (parseFloat(rawWeight) !== 0 && !motherMode) applyNet(pt + (taredWeight ? parseFloat(taredWeight) : 0));
  };

  // Step off: assistant tares end, the persistent pre-tare applies again.
  const handleStepOff = () => {
    setSent(false);
    setRawWeight('0.00');
    setWeight('0.00');
    setTaredWeight(null);
    setPreTareValues([]);
    setScanKg(0);
    setMotherMode(false);
    setShowReweightButton(false);
    setIsReweighting(false);
    setPtSuspended(false);
    // The next patient starts fresh: height/BMI are cleared too.
    setHeightMeasured(false);
    setHeightValue(null);
    setShowBsa(false);
    // ... and the login (patient / user) ends.
    setIsPatientLoggedIn(false);
    setIsUserLoggedIn(false);
    setFirstScannedId(null);
    setSteppedOff(true);
  };

  const handleWeightClick = () => {
    setSent(false);
    setSteppedOff(false);
    // If tared and showing 0.00, show baby weight (3.8 kg)
    if (taredWeight !== null && parseFloat(weight) === 0) {
      const babyWeight = 3.8;
      // rawWeight should be the tared value + baby weight
      const totalRawWeight = parseFloat(taredWeight) + babyWeight;
      setRawWeight(totalRawWeight.toFixed(2));
      
      // Displayed weight is just the baby weight (net)
      const displayWeight = babyWeight; // weight state is always kg
      setWeight(displayWeight.toFixed(2));
      return;
    }
    
    // Only allow one measurement - prevent multiple clicks
    if (parseFloat(rawWeight) !== 0) {
      return;
    }
    // Show reweight button after measurement
    setShowReweightButton(true);
    // Mark that a measurement has been taken
    setHasEverMeasured(true);
    // Add the test weight (Control Panel) to the current displayed weight
    const kg = parseFloat(testWeight) || 0;
    const net = kg - tareKgNow();
    setWeight(net.toFixed(2));
    setRawWeight(kg.toFixed(2));
  };

  // Changing the test weight while a patient is on the scale updates the reading live.
  const handleTestWeightChange = (value: string) => {
    setTestWeight(value);
    const kg = parseFloat(value);
    if (isNaN(kg) || parseFloat(rawWeight) === 0 || taredWeight !== null) return;
    const net = kg - tareKgNow();
    setRawWeight(kg.toFixed(2));
    setWeight(net.toFixed(2));
  };

  // Changing the test height updates a measured height live (like the weight); a manual entry stays.
  const handleTestHeightChange = (value: string) => {
    setTestHeight(value);
    if (heightMode === 'manual' || heightValue === null || isNaN(parseFloat(value))) return;
    setHeightValue(value);
  };

  const handleReweight = () => {
    setSent(false);
    setIsReweighting(true);
    // Use rawWeight (stored in kg) instead of weight (could be lbs or affected by tare)
    const measuredWeight = parseFloat(rawWeight);
    setWeight('0.00');
    // Don't reset rawWeight - keep the measured value
    setTimeout(() => {
      // Calculate tare if active
      const totalTare = tareKgNow();
      
      // Calculate net weight (subtract tare from measured weight)
      const netWeight = measuredWeight - totalTare;
      
      // Convert to display unit (metric or imperial)
      const displayWeight = netWeight; // weight state is always kg
      setWeight(displayWeight.toFixed(2));
      setIsReweighting(false);
      setShowReweightButton(true);
      // rawWeight stays at 54.80
    }, 800);
  };

  // Start height workflow based on height mode
  const startHeightWorkflow = () => {
    if (heightMode === 'manual') {
      setShowManualInput(true);
    } else if (heightMode === 'tactile') {
      setShowTactileHeight(true);
    } else {
      // Ultrasonic: full-screen measurement (no measuring inside the main screen)
      setShowUltrasonic(true);
    }
  };

  const handleHeightClick = () => {
    startHeightWorkflow();
  };

  const handleBsaClick = () => {
    setShowBsa(true);
  };

  const handleBsaBackClick = () => {
    setShowBsa(false);
  };

  const handleHeightValueClick = () => {
    if (heightMode === 'manual') {
      setShowManualInput(true);
    } else if (heightMode === 'tactile') {
      // Reset and show tactile height flow again
      setShowTactileHeight(true);
    } else {
      // Ultrasonic: repeat shows the measurement screens again
      setShowUltrasonic(true);
    }
  };

  const handleManualInputBack = () => {
    setShowManualInput(false);
    setPendingSendAfterHeight(false); // Reset pending state
    
    // If no weight is present, we likely came from height required prompt
    const hasWeight = parseFloat(rawWeight) > 0;
    if (!hasWeight && heightRequired) {
      setShowHeightRequiredPrompt(true);
    }
  };

  const handleManualInputClose = () => {
    setShowManualInput(false);
    setHeightMeasured(true);
  };

  const handleManualInputSave = (height: string) => {
    setSent(false);
    setHeightValue(height);
    setHeightMeasured(true);
    setShowManualInput(false);
    
    // If we were triggered from Send button, check if we should show overview
    if (pendingSendAfterHeight) {
      setPendingSendAfterHeight(false);
      
      // Check if all required data is present
      const hasWeight = parseFloat(rawWeight) > 0;
      const hasLogin = isLoggedIn;
      
      if (hasWeight && hasLogin) {
        // All data present - show overview
        setShowOverview(true);
      }
      // If data missing, just return to main screen (showManualInput is already false)
    }
  };

  const handleTactileHeightMeasured = (height: string) => {
    // First screen clicked - show animation screen
    setShowTactileHeight(false);
    setShowTactileComplete(true);
  };

  const handleTactileHeightComplete = (measured?: string) => {
    setSent(false);
    // Height confirmed - save the value shown by the head slide and return to main
    const height = measured ?? testHeight;
    setHeightValue(height);
    setHeightMeasured(true);
    setShowTactileHeight(false);
    setShowTactileComplete(false);
    
    // If we were triggered from Send button, check if we should show overview
    if (pendingSendAfterHeight) {
      setPendingSendAfterHeight(false);
      
      // Check if all required data is present
      const hasWeight = parseFloat(rawWeight) > 0;
      const hasLogin = isLoggedIn;
      
      if (hasWeight && hasLogin) {
        // All data present - show overview
        setShowOverview(true);
      }
      // If data missing, just return to main screen (showTactileComplete is already false)
    }
  };

  const handleTactileHeightCancel = () => {
    setShowTactileHeight(false);
    setShowTactileComplete(false);
    setPendingSendAfterHeight(false); // Reset pending state
    
    // If no weight is present and this was called from height required prompt
    const hasWeight = parseFloat(rawWeight) > 0;
    if (!hasWeight && heightRequired) {
      setShowHeightRequiredPrompt(true);
    }
  };

  const handleTareClick = () => {
    setShowTareAssistant(true);
  };

  const handleTareBack = () => {
    setShowTareAssistant(false);
  };

  const handleTareConfirm = () => {
    setSent(false);
    // Close the tare assistant when confirming
    setShowTareAssistant(false);
    
    // Apply tare to current weight
    // The measured weight stays in rawWeight, but displayed weight becomes 0.00
    // This preserves the measurement for the tare badge
    setTaredWeight(rawWeight); // Set taredWeight so Tare info shows in Main Screen
    setPtSuspended(true); // "Set to zero": PT off, temp cleared, new tare
    setScanKg(0);
    setPreTareValues([]);
    setWeight('0.00');
    // Don't reset rawWeight - keep it to show tare badge
  };

  const handlePreTareConfirm = (values: string[]) => {
    setPreTareValues(values);
    setPtSuspended(true);
    setShowTareAssistant(false);
    
    // Recalculate displayed weight
    const measuredWeight = parseFloat(rawWeight);
    const totalPreTare = values.reduce((sum, value) => sum + parseFloat(value), 0);
    const manualTare = taredWeight ? parseFloat(taredWeight) : 0;
    const totalTare = totalPreTare + manualTare;
    const netWeight = measuredWeight - totalTare;
    
    // Convert to display unit
    const displayWeight = netWeight; // weight state is always kg
    setWeight(displayWeight.toFixed(2));
  };

  const handleManualTareClick = () => {
    setShowManualTare(true);
    setShowTareAssistant(false);
  };

  const handleManualTareBack = () => {
    setShowManualTare(false);
    setShowTareAssistant(true);
  };

  const handleManualTareConfirm = (value: string) => {
    setTaredWeight(value);
    setPtSuspended(true);
    setShowManualTare(false);
    setShowTareAssistant(false);
    
    // Recalculate displayed weight
    const measuredWeight = parseFloat(rawWeight);
    const totalPreTare = preTareValues.reduce((sum, val) => sum + parseFloat(val), 0);
    const manualTare = parseFloat(value);
    const totalTare = totalPreTare + manualTare;
    const netWeight = measuredWeight - totalTare;
    
    // Convert to display unit
    const displayWeight = netWeight; // weight state is always kg
    setWeight(displayWeight.toFixed(2));
  };

  // Main screen ×: temp and tare cleared, the persistent pre-tare applies again immediately.
  const handleRemoveTare = () => {
    setTaredWeight(null);
    setPreTareValues([]);
    setScanKg(0);
    setMotherMode(false);
    setPtSuspended(false);
    applyNet(persistentKg);
  };

  const handleSendClick = () => {
    // No weight measured → nothing can be sent ("No weight value", Figma 19616:86388), in every installation mode, before anything else
    if (!(parseFloat(rawWeight) > 0)) {
      setShowMissingDataDialog(true);
      return;
    }

    if (installationMode === 'simpleprint') {
      setPrinting(true);
      return;
    }
    if (installationMode !== 'integrated') {
      setShowStandaloneInfo(true);
      return;
    }
    // Check if we're logged in (if required)
    if (!isLoggedIn) {
      if (loginMode === 'both') {
        setShowScanBothIds(true);
      } else if (loginMode === 'patient-only') {
        setShowScanPatientId(true);
      } else if (loginMode === 'user-only') {
        setShowScanUserId(true);
      }
      return;
    }

    // Check if height is required and measured
    if (heightRequired && !heightMeasured) {
      setShowSendHeight(true);
      return;
    }

    // All checks passed - show overview
    setShowOverview(true);
  };

  const handleRecallClick = () => {
    setShowPreviousValue(true);
  };

  const handleOverviewClose = () => {
    setShowOverview(false);
  };

  const handleOverviewSend = () => {
    setShowOverview(false);
    // Remember the sent values for RECALL
    const tareKg = tareKgNow();
    setLastSent({ weightKg: parseFloat(rawWeight) - tareKg, tareKg, time: Date.now(), heightCm: heightMeasured ? (heightValue ?? testHeight) : null });
    // Transmitting data ... → Data saved → main screen
    setShowTransmitting(true);
    setTimeout(() => {
      setShowTransmitting(false);
      setShowDataSaved(true);
      // The interface deletes all integration data after the transfer (Figma 19620:86390).
      setIsPatientLoggedIn(false);
      setIsUserLoggedIn(false);
      setFirstScannedId(null);
      setSent(true);
      if (savedTimer.current) clearTimeout(savedTimer.current);
      savedTimer.current = setTimeout(() => setShowDataSaved(false), 3000);
    }, 1500);
  };

  const handleLogout = () => {
    // Reset only login states
    setIsPatientLoggedIn(false);
    setIsUserLoggedIn(false);
    setFirstScannedId(null);
    
    // Keep all measurement states - person is still on the scale!
    // weight, rawWeight, heightMeasured, heightValue, taredWeight, preTareValues, etc. all stay
  };

  // Helper to check next step after login
  const proceedAfterLogin = () => {
    const hasWeight = parseFloat(rawWeight) > 0;
    const hasHeight = heightMeasured;
    
    // Flow logic after login
    if (hasWeight && (!heightRequired || hasHeight)) {
      // All data present - show overview
      setShowOverview(true);
    } else if (hasWeight && heightRequired && !hasHeight) {
      // Weight present but height missing and required - "Send with Height" flow
      setShowSendHeight(true);
    }
    // Else: return to main screen (no action needed)
  };

  // ID confirmation screens (2 s, or tap). In login mode "Both" the patient confirmation leads to
  // "Scan the user ID", the user confirmation then continues (Figma 19618:86389).
  const idTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bothNext = useRef<'none' | 'second' | 'done'>('none');
  const idConfirmed = () => {
    if (idTimer.current) { clearTimeout(idTimer.current); idTimer.current = null; }
    setShowPatientId(false);
    setShowUserIdConfirmed(false);
    if (bothNext.current === 'second') {
      bothNext.current = 'none';
      setShowScanBothIds(true);
      return;
    }
    if (bothNext.current === 'done') {
      bothNext.current = 'none';
      setFirstScannedId(null);
    }
    proceedAfterLogin();
  };
  const showIdConfirmation = (kind: 'patient' | 'user') => {
    if (kind === 'patient') setShowPatientId(true); else setShowUserIdConfirmed(true);
    if (idTimer.current) clearTimeout(idTimer.current);
    idTimer.current = setTimeout(idConfirmed, 2000);
  };

  const handleScanPatientIdConfirm = () => {
    setIsPatientLoggedIn(true);
    setShowScanPatientId(false);
    showIdConfirmation('patient');
  };

  const handlePatientIdNext = () => idConfirmed();

  const handleScanPatientIdCancel = () => {
    setShowScanPatientId(false);
  };

  const handleScanUserIdConfirm = () => {
    setIsUserLoggedIn(true);
    setShowScanUserId(false);
    showIdConfirmation('user');
  };

  const handleUserIdNext = () => idConfirmed();

  const handleScanUserIdCancel = () => {
    setShowScanUserId(false);
  };

  const handleScanBothIdsConfirm = (id: 'patient' | 'user') => {
    if (id === 'patient') setIsPatientLoggedIn(true); else setIsUserLoggedIn(true);
    setShowScanBothIds(false);
    if (!firstScannedId) {
      setFirstScannedId(id);
      bothNext.current = 'second';
    } else {
      bothNext.current = 'done';
    }
    showIdConfirmation(id);
  };

  const handleScanBothIdsCancel = () => {
    bothNext.current = 'none';
    setShowScanBothIds(false);
    setFirstScannedId(null);
    setIsPatientLoggedIn(false);
    setIsUserLoggedIn(false);
  };

  const handleMenuClick = () => {
    setShowMenu(true);
    setCurrentMenuScreen('main');
  };

  const handleMenuClose = () => {
    setShowMenu(false);
    setCurrentMenuScreen('main');
  };

  const handleMenuBack = () => {
    setCurrentMenuScreen('main');
  };

  const handleRestartClick = () => {
    setCurrentMenuScreen('restart');
  };

  const handleRestartConfirm = () => {
    handleReset();
    setShowMenu(false);
    setCurrentMenuScreen('main');
  };

  const handleRestartCancel = () => {
    setCurrentMenuScreen('main');
  };

  const handleHeightCalibrationBack = () => {
    setShowHeightCalibration(false);
    setShowMenu(true);
  };

  const handleHeightCalibrationHome = () => {
    setShowHeightCalibration(false);
  };

  const handleIntegrationInfoBack = () => {
    setShowIntegrationInfo(false);
    setShowMenu(true);
  };

  const handleNetworkBack = () => {
    setShowNetwork(false);
    setShowMenu(true);
  };

  const handleNetworkHome = () => {
    setShowNetwork(false);
  };

  const handleServerConnectionBack = () => {
    setShowServerConnection(false);
    setShowMenu(true);
  };

  const handleServerConnectionHome = () => {
    setShowServerConnection(false);
  };

  const handleReset = () => {
    setSent(false);
    // Device restart: boot screen briefly, then Choose mode.
    setBooting(true);
    if (bootTimer.current) clearTimeout(bootTimer.current);
    bootTimer.current = setTimeout(() => setBooting(false), 800);
    setShowSendHeight(false);
    setShowUltrasonic(false);
    setDeviceMode('choose');
    setWeight('0.00');
    setMotherMode(false);
    setRawWeight('0.00');
    setHeightMeasured(false);
    setHeightValue(null);
    setShowBsa(false);
    setTaredWeight(null);
    setPreTareValues([]);
    setScanKg(0);
    setPtSuspended(false);
    setSteppedOff(false);
    setShowReweightButton(false);
    setIsPatientLoggedIn(false);
    setIsUserLoggedIn(false);
    setHasEverMeasured(false);
    setFirstScannedId(null);
  };

  const handleUltrasonicConfirm = (cm: string) => {
    setSent(false);
    setHeightValue(cm);
    setHeightMeasured(true);
    setShowUltrasonic(false);
  };

  const handleSendHeightConfirm = (cm: string) => {
    setSent(false);
    setHeightValue(cm);
    setHeightMeasured(true);
    setShowSendHeight(false);
    setShowOverview(true);
  };

  const handleToggleControlPanel = () => {
    setShowControlPanel(!showControlPanel);
  };

  const handleMissingDataConfirm = () => {
    setShowMissingDataDialog(false);
  };

  const handleMissingDataCancel = () => {
    setShowMissingDataDialog(false);
  };

  const handleHeightRequiredBack = () => {
    setShowHeightRequiredPrompt(false);
    setHeightRequiredFromSendWizard(false); // Reset flag
  };

  const handleHeightRequiredProceed = () => {
    setShowHeightRequiredPrompt(false);
    
    // Only set pendingSendAfterHeight if coming from send wizard
    if (heightRequiredFromSendWizard) {
      setPendingSendAfterHeight(true);
      setHeightRequiredFromSendWizard(false); // Reset flag
    }
    
    if (heightMode === 'manual') {
      setShowManualInput(true);
    } else if (heightMode === 'tactile') {
      setShowTactileHeight(true);
    } else {
      // Ultrasonic mode
      handleHeightClick();
    
    }
  };

  const handleHeightConfirmationConfirm = () => {
    setShowHeightConfirmation(false);
    
    // If we were triggered from Send button, check if we should show overview
    if (pendingSendAfterHeight) {
      setPendingSendAfterHeight(false);
      
      // Check if all required data is present
      const hasWeight = parseFloat(rawWeight) > 0;
      const hasLogin = isLoggedIn;
      
      if (hasWeight && hasLogin) {
        // All data present - show overview
        setShowOverview(true);
      }
      // If data missing, just return to main screen
    }
    // If not from Send button, just return to main screen (no overview)
  };

  const handleHeightConfirmationCancel = () => {
    setShowHeightConfirmation(false);
    setPendingSendAfterHeight(false); // Reset pending state
    // Reset height measurement
    setHeightMeasured(false);
    setHeightValue(null);
    // Show height required prompt again
    setShowHeightRequiredPrompt(true);
  };

  const handleHeightConfirmationRepeat = () => {
    setShowHeightConfirmation(false);
    // Reset height measurement
    setHeightMeasured(false);
    setHeightValue(null);
    // Show ultrasonic height measurement again
    // Standard workflow: Start the height measurement with animation
    handleHeightClick();
  
  };

  // Show different screens based on state
  if (deviceMode !== 'guided') {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name={deviceMode === 'choose' ? 'Device Mode' : 'Self-Measurement'}
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          {booting
            ? <FigmaScreen data={SCREENS.bootScreen} />
            : deviceMode === 'choose'
            ? <DeviceModeScreen onGuided={() => setDeviceMode('guided')} onSelf={() => setDeviceMode('self')} pretareText={persistentKg > 0 ? `${(isMetric ? persistentKg : kgToLbs(persistentKg)).toFixed(2)} ${isMetric ? 'kg' : 'lbs'}` : undefined} />
            : <SelfMeasurementFlow
                weightKg={(parseFloat(testWeight) || 0) - persistentKg}
                pretareKg={persistentKg}
                heightCm={parseFloat(testHeight) || 0}
                isMetric={isMetric}
                heightRequired={heightRequired}
                installation={installationMode}
                onPrint={() => setPrinting(true)}
                formatImperialHeight={convertCmToFeetInches}
              />}
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            uniqueId="-device"
            printing={printing}
            ultrasonicOnly={deviceMode === 'self'}
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showMenu) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Menu"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <MenuFlow onClose={handleMenuClose} onRestart={handleRestartConfirm} controlPanel={showControlPanel} onToggleControlPanel={handleToggleControlPanel} />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-menu"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showHeightCalibration) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Height Calibration"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <HeightCalibration 
            onBack={handleHeightCalibrationBack}
            onHome={handleHeightCalibrationHome}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-calibration"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showIntegrationInfo) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Integration Info"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <IntegrationInfoScreen onBack={handleIntegrationInfoBack} />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-integration"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showNetwork) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Network"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <Network 
            onBack={handleNetworkBack}
            onHome={handleNetworkHome}
            wifiEnabled={wifiEnabled}
            onWifiEnabledChange={setWifiEnabled}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-network"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showServerConnection) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Server Connection"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <ServerConnection 
            onBack={handleServerConnectionBack}
            onHome={handleServerConnectionHome}
            serverAddress={serverAddress}
            serverPort={serverPort}
            onServerAddressChange={setServerAddress}
            onServerPortChange={setServerPort}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-server"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showTactileHeight) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Tactile Height"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <TactileHeightScreen 
            isMetric={isMetric}
            targetCm={parseFloat(testHeight) || 0}
            initialCm={heightMeasured && heightValue ? parseFloat(heightValue) : undefined}
            formatImperial={convertCmToFeetInches}
            onBack={handleTactileHeightCancel}
            onConfirm={handleTactileHeightComplete}
            onKids={() => { setShowTactileHeight(false); setShowManualInput(true); }}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-tactile"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showTactileComplete) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Tactile Height Complete"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <TactileHeightMeasurementComplete 
            onConfirm={handleTactileHeightComplete}
            onBack={handleTactileHeightCancel}
            targetHeight={testHeight}
            isMetric={isMetric}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-tactile-complete"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showHeightConfirmation) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Height Confirmation"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <HeightConfirmation 
            onConfirm={handleHeightConfirmationConfirm}
            onBack={handleHeightConfirmationCancel}
            onRepeat={handleHeightConfirmationRepeat}
            height={heightValue || testHeight}
            isMetric={isMetric}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-confirmation"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showTareAssistant) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Tare Assistant"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <TareAssistant
            isMetric={isMetric}
            onBack={handleTareBack}
            onTare={handleTareConfirm}
            onMotherChild={(adultKg, childKg) => {
              // Adult weight becomes the tare, child stays on the scale (net = child)
              setTaredWeight(adultKg.toFixed(2));
              setPreTareValues([]);
              setScanKg(0);
              setRawWeight((adultKg + childKg).toFixed(2));
              setWeight(childKg.toFixed(2));
              setMotherMode(true);
              setPtSuspended(true);
              setShowReweightButton(true);
              setHasEverMeasured(true);
              setShowTareAssistant(false);
            }}
            onClothing={(valueKg) => {
              // Clothing replaces the previous clothing value; scanned tares stay; PT off.
              const values = valueKg > 0 ? [valueKg.toFixed(2)] : [];
              setPreTareValues(values);
              setPtSuspended(true);
              applyNet(valueKg + scanKg + (taredWeight ? parseFloat(taredWeight) : 0));
              setShowTareAssistant(false);
            }}
            initialClothingKg={preTareValues.reduce((sum, v) => sum + parseFloat(v), 0)}
            minClothingKg={persistentKg}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-tare"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showManualTare) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Manual Tare"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <ManualTareInput 
            onBack={handleManualTareBack}
            onConfirm={handleManualTareConfirm}
            isMetric={isMetric}
            initialValue={taredWeight}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-manual-tare"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showUltrasonic) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Ultrasonic Height"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <UltrasonicHeightScreen
            isMetric={isMetric}
            targetCm={parseFloat(testHeight) || 0}
            formatImperial={convertCmToFeetInches}
            onBack={() => setShowUltrasonic(false)}
            onConfirm={handleUltrasonicConfirm}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-ultrasonic"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showSendHeight) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Send with Height"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <SendHeightFlow
            heightMode={heightMode}
            isMetric={isMetric}
            targetCm={parseFloat(testHeight) || 0}
            formatImperial={convertCmToFeetInches}
            onBack={() => setShowSendHeight(false)}
            onConfirm={handleSendHeightConfirm}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-send-height"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showManualInput) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Manual Height Input"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <ManualHeightInput 
            onBack={handleManualInputBack}
            onClose={handleManualInputBack}
            onConfirm={handleManualInputSave}
            initialValue={heightValue || testHeight}
            isMetric={isMetric}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-manual-height"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showHeightRequiredPrompt) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Height Required"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <HeightRequiredScreen 
            onBack={handleHeightRequiredBack}
            onProceed={handleHeightRequiredProceed}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-height-required"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showStandaloneInfo) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Integration"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <IntegrationInfoScreen onBack={() => setShowStandaloneInfo(false)} />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={(m) => { setInstallationMode(m); if (m === 'integrated') setShowStandaloneInfo(false); }}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            uniqueId="-integration"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (directLogin) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name={directLogin === 'patient' ? 'Patient ID Confirmed' : 'User ID Confirmed'}
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <IdConfirmedScreen kind={directLogin} onNext={() => setDirectLogin(null)} />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-direct-login"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showScanPatientId) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Scan Patient ID"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <ScanIdScreen kind="patient" onScan={handleScanPatientIdConfirm} onCancel={handleScanPatientIdCancel} />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-scan-patient"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showPatientId) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Patient ID Confirmed"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <IdConfirmedScreen kind="patient" onNext={handlePatientIdNext} />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-patient-id"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showScanUserId) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Scan User ID"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <ScanIdScreen kind="user" onScan={handleScanUserIdConfirm} onCancel={handleScanUserIdCancel} />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-scan-user"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showUserIdConfirmed) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="User ID Confirmed"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <IdConfirmedScreen kind="user" onNext={handleUserIdNext} />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-user-id"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showScanBothIds) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Scan Both IDs"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          {/* Patient + user: scan the patient ID first, then the user ID */}
          <ScanIdScreen
            kind={firstScannedId ? (firstScannedId === 'patient' ? 'user' : 'patient') : 'patient'}
            either={!firstScannedId}
            onScan={() => handleScanBothIdsConfirm(firstScannedId ? (firstScannedId === 'patient' ? 'user' : 'patient') : 'patient')}
            onCancel={handleScanBothIdsCancel}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-both-ids"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showOverview) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Overview"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <OverviewScreen
            weight={parseFloat(formatWeight(weight)).toFixed(2)}
            height={heightMeasured ? formatHeight(heightValue ?? testHeight) : null}
            isMetric={isMetric}
            patient={isPatientLoggedIn}
            user={isUserLoggedIn}
            onClose={handleOverviewClose}
            onSend={handleOverviewSend}
          />
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-overview"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showDataSaved || showTransmitting) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
          data-name="Data Saved"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          {showTransmitting ? <TransmittingScreen /> : <DataSavedScreen onClose={() => { if (savedTimer.current) clearTimeout(savedTimer.current); setShowDataSaved(false); }} />}
        </div>
        {showControlPanel && (
          <ControlPanel 
            heightMode={heightMode}
            onHeightModeChange={setHeightMode}
            heightRequired={heightRequired}
            onHeightRequiredChange={setHeightRequired}
            installationMode={installationMode}
            onInstallationModeChange={setInstallationMode}
            isMetric={isMetric}
            onIsMetricChange={setIsMetric}
            loginMode={loginMode}
            onLoginModeChange={setLoginMode}
            testHeight={testHeight}
            testWeight={testWeight}
            onTestWeightChange={handleTestWeightChange}
            onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
            uniqueId="-data-saved"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
      <div 
        className="bg-[#e7ebf7] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0 device-screen" 
        data-name="iScale (Portrait)"
        style={{ 
          transform: `scale(${zoomLevel / 100})`,
          transformOrigin: 'center center'
        }}
      >
        {(() => {
          // GUI 2.1 main screen (1:1 with Figma handover, see ./main-screen)
          const totalTare = tareKgNow();
          // Empty scale with persistent pre-tare: the reading shows the deduction as a negative net value.
          const emptyPt = parseFloat(rawWeight) === 0 && !motherMode && totalTare > 0;
          const ptOnly = ptActive && totalTare === persistentKg;
          const tareText = totalTare === 0 ? null : `-${isMetric ? totalTare.toFixed(2) : kgToLbs(totalTare).toFixed(2)} ${isMetric ? 'kg' : 'lbs'}`;
          const login: LoginBanner =
            loginMode === 'both' && (isUserLoggedIn || isPatientLoggedIn)
              ? { kind: 'both', patientOnline: isPatientLoggedIn, userOnline: isUserLoggedIn }
              : isUserLoggedIn && isPatientLoggedIn
                ? { kind: 'both', patientOnline: true, userOnline: true }
                : isUserLoggedIn
                  ? { kind: 'user' }
                  : isPatientLoggedIn
                    ? { kind: 'patient' }
                    : { kind: 'none' };
          const label = getDisplayLabel();
          // Empty scale: no height measurement possible, the height area shows "Scale ready".
          const height: HeightPanelProps = parseFloat(rawWeight) === 0 && !heightMeasured && !isHeightUpdating
            ? { state: 'stepOnScale' }
            : !heightMeasured
            ? { state: 'start', onHeight: handleHeightClick }
            : isHeightUpdating
              ? {
                  state: 'measuring',
                  indicator: heightLoadingBars === 0 ? <ProgressHeigthMeasurementIcon /> : heightLoadingBars === 1 ? <ProgressHeigthMeasurementMid /> : <ProgressHeigthMeasurementTop />,
                }
              : {
                  state: 'value',
                  value: formatHeight(heightValue ?? testHeight),
                  unit: isMetric ? 'cm' : 'ft\'in"',
                  bmiValue: bsaValue,
                  bmiLabel: label === 'BSA' ? 'm²' : label,
                  onReheight: handleHeightValueClick,
                  onValueClick: handleHeightValueClick,
                };
          return (
            <MainScreen
              statusBar={{ login, onMenu: handleMenuClick, onLogout: handleLogout, printer: installationMode === 'simpleprint' }}
              weight={{
                state: 'value',
                value: emptyPt ? (-(isMetric ? totalTare : kgToLbs(totalTare))).toFixed(2) : parseFloat(formatWeight(weight)).toFixed(2),
                unit: isMetric ? 'kg' : 'lbs',
                rangeText: isMetric ? 'Max 360 kg' : 'Max 790 lbs',
                showNet: totalTare > 0 || taredWeight !== null,
                locked: parseFloat(rawWeight) !== 0 && !isReweighting,
                showBaby: motherMode,
                onValueClick: handleWeightClick,
              }}
              tare={{
                showReweight: showReweightButton,
                tareText,
                calculating: isReweighting && tareText !== null,
                reweightDisabled: isReweighting,
                onReweight: handleReweight,
                onRemoveTare: handleRemoveTare,
                // Persistent pre-tare alone cannot be removed here (no ×).
                hideRemove: ptOnly,
              }}
              height={height}
              buttons={{ onTare: handleTareClick, onRecall: handleRecallClick, onConfirm: handleSendClick, standalone: installationMode !== 'integrated', print: installationMode === 'simpleprint', saved: sent && installationMode === 'integrated' }}
            />
          );
        })()}

        {/* Tare-by-Scanning feedback: "Read pre-tare" (3 s) */}
        {tareScan !== null && (
          <div className="absolute inset-0 z-50">
            <FigmaScreen
              data={SCREENS.tareScanRead}
              text={{
                'I16748:52105;16748:52046;10631:2249': (-(isMetric ? tareScan : kgToLbs(tareScan))).toFixed(2),
                'I16748:52105;16748:52046;10631:2245': isMetric ? 'kg' : 'lbs',
              }}
            />
          </div>
        )}

        {/* Previous Value Screen Overlay */}
        {showPreviousValue && (
          <div className="absolute inset-0 z-50">
            {(() => {
              const tareNow = tareKgNow();
              const rec = lastSent ?? { weightKg: parseFloat(rawWeight) - tareNow, tareKg: tareNow, time: Date.now(), heightCm: heightMeasured ? (heightValue ?? testHeight) : null };
              // Recalled height with BMI/BSA from the recalled values.
              const recH = rec.heightCm !== null ? parseFloat(rec.heightCm) : NaN;
              const recW = rec.weightKg; // net weight, as on the main screen
              const label = getDisplayLabel();
              const ratio = selectedMode === 'bmi'
                ? recW / Math.pow(recH / 100, 2)
                : selectedMode === 'bsa-haycock'
                  ? 0.024265 * Math.pow(recH, 0.3964) * Math.pow(recW, 0.5378)
                  : Math.sqrt((recH * recW) / 3600);
              const recallHeight = !isNaN(recH) && recW > 0 && recH > 0 && isFinite(ratio)
                ? { value: formatHeight(rec.heightCm), unit: isMetric ? 'cm' : 'ft\'in"', bmi: ratio.toFixed(1), bmiLabel: label === 'BSA' ? 'm²' : label }
                : undefined;
              return (
                <RecallScreen
                  weightKg={rec.weightKg}
                  tareKg={rec.tareKg}
                  minutesAgo={Math.max(1, Math.round((Date.now() - rec.time) / 60000))}
                  isMetric={isMetric}
                  height={recallHeight}
                  onClose={() => setShowPreviousValue(false)}
                />
              );
            })()}
          </div>
        )}
        
        {/* Missing Data Dialog Overlay */}
        {showMissingDataDialog && (
          <div className="absolute inset-0 z-50">
            <FigmaScreen data={SCREENS.noWeight} onClick={{ 'I10681:16523;10074:13792': handleMissingDataConfirm }} />
          </div>
        )}
      </div>
      {showControlPanel && (
        <ControlPanel 
          heightMode={heightMode}
          onHeightModeChange={setHeightMode}
          heightRequired={heightRequired}
          onHeightRequiredChange={setHeightRequired}
          installationMode={installationMode}
          onInstallationModeChange={setInstallationMode}
          isMetric={isMetric}
          onIsMetricChange={setIsMetric}
          loginMode={loginMode}
          onLoginModeChange={setLoginMode}
          testHeight={testHeight}
          testWeight={testWeight}
          onTestWeightChange={handleTestWeightChange}
          onTestHeightChange={handleTestHeightChange}
            pretare={pretare}
            onPretareChange={handlePretareChange}
          uniqueId="-main"
            printing={printing}
          onStepOff={parseFloat(rawWeight) !== 0 || tareOverride || heightMeasured ? handleStepOff : undefined}
          onScanBarcode={handleBarcodeScan}
          tareBarcode={tareBarcodeKg}
          onTareBarcodeChange={setTareBarcodeKg}
          onScanTare={() => { const kg = parseFloat(tareBarcodeKg); if (kg > 0) setTareScan(kg); }}
          onReset={handleReset}
          zoomLevel={zoomLevel}
          onZoomLevelChange={setZoomLevel}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BmiSettingsProvider>
      <AppContent />
    </BmiSettingsProvider>
  );
}
