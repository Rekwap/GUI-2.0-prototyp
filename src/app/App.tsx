import { useState } from 'react';
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
import IntegrationInfo from "./components/IntegrationInfo";
import Network from "./components/Network";
import ServerConnection from "./components/ServerConnection";
import TactileHeight from "./components/TactileHeight";
import UltrasonicHeightMeasurement from "./components/UltrasonicHeightMeasurement";
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
import HeightMeasurementOngoing from "./imports/ScanPatientId-148-1041";
import { BmiSettingsProvider, useBmiSettings } from './contexts/BmiSettingsContext';
import MenuComponent from './imports/Menu';
import InfoComponent from './imports/Info';
import SettingsComponent from './imports/Settings';
import ServiceComponent from './imports/Service';
import DisplayComponent from './imports/Display';
import LanguageComponent from './imports/Language';
import DialogRestartComponent from './imports/DialogRestart';
import BmiBsaMenu from './components/BmiBsaMenu';
import ScreenFrameLandscape from './components/landscape/ScreenFrameLandscape';
import MainScreenLandscape from './components/landscape/MainScreenLandscape';
import TareAssistantLandscapeA from './components/landscape/TareAssistantLandscapeA';
import TareAssistantLandscapeB from './components/landscape/TareAssistantLandscapeB';

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
  const displayValue = isMetric ? totalTare.toFixed(2) : kgToLbs(totalTare).toFixed(1);
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
  const [heightRequired, setHeightRequired] = useState(true); // Control whether height is required for sending
  const [isHeightUpdating, setIsHeightUpdating] = useState(false);
  const [heightLoadingBars, setHeightLoadingBars] = useState(0);
  
  // Login mode: 'user-only' | 'patient-only' | 'both'
  const [loginMode, setLoginMode] = useState<'user-only' | 'patient-only' | 'both'>('patient-only');
  
  // Height measurement mode: 'manual' | 'ultrasonic' | 'tactile'
  const [heightMode, setHeightMode] = useState<'manual' | 'ultrasonic' | 'tactile'>('ultrasonic');
  
  // Alternative workflow for ultrasonic height measurement
  const [ultrasonicAlternativeWorkflow, setUltrasonicAlternativeWorkflow] = useState(false);
  
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
  
  // Both mode flow
  const [showScanBothIds, setShowScanBothIds] = useState(false);
  const [firstScannedId, setFirstScannedId] = useState<'patient' | 'user' | null>(null);
  
  const [showOverview, setShowOverview] = useState(false);
  
  // Menu state
  const [showMenu, setShowMenu] = useState(false);
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
  
  // Installation mode: 'integrated' | 'standalone'
  const [installationMode, setInstallationMode] = useState<'integrated' | 'standalone'>('integrated');
  
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
  
  // Control Panel visibility (visible by default)
  const [showControlPanel, setShowControlPanel] = useState(true);

  // Layout: aktuell fix Landscape (Portrait bleibt als Code erhalten, wird nicht gerendert).
  // Kein Portrait/Landscape-Umschalter – nur die Variante wird gewechselt.
  const layout: 'portrait' | 'landscape' = 'landscape';
  // Landscape A/B-Vergleichsvariante
  const [landscapeVariant, setLandscapeVariant] = useState<'A' | 'B'>('A');
  
  // Previous value screen state
  const [showPreviousValue, setShowPreviousValue] = useState(false);
  
  // Missing data dialog state
  const [showMissingDataDialog, setShowMissingDataDialog] = useState(false);
  
  // Height required prompt screen state
  const [showHeightRequiredPrompt, setShowHeightRequiredPrompt] = useState(false);
  
  // Ultrasonic height measurement screen state (from height required prompt)
  const [showUltrasonicHeightMeasurement, setShowUltrasonicHeightMeasurement] = useState(false);
  
  // Height confirmation screen state
  const [showHeightConfirmation, setShowHeightConfirmation] = useState(false);
  
  // Data saved screen state
  const [showDataSaved, setShowDataSaved] = useState(false);
  
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
    return heightInCm;
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
    const weightNum = parseFloat(rawWeight); // Use rawWeight (always in kg) instead of weight (could be lbs)
    
    // Use testHeight instead of heightValue
    if (!testHeight) {
      return '---';
    }
    
    const heightNum = parseFloat(testHeight);
    
    // Show --- for zero, negative, or invalid weight
    if (weightNum <= 0 || isNaN(weightNum)) {
      return '---';
    }
    
    if (isNaN(heightNum)) {
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

  const handleWeightClick = () => {
    // If tared and showing 0.00, show baby weight (3.8 kg)
    if (taredWeight !== null && parseFloat(weight) === 0) {
      const babyWeight = 3.8;
      // rawWeight should be the tared value + baby weight
      const totalRawWeight = parseFloat(taredWeight) + babyWeight;
      setRawWeight(totalRawWeight.toFixed(2));
      
      // Displayed weight is just the baby weight (net)
      const displayWeight = isMetric ? babyWeight : kgToLbs(babyWeight);
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
    // Add 54.80 to the current displayed weight
    const currentWeight = parseFloat(weight);
    const newWeight = currentWeight + 54.80;
    setWeight(newWeight.toFixed(2));
    setRawWeight('54.80');
  };

  const handleReweight = () => {
    setIsReweighting(true);
    // Use rawWeight (stored in kg) instead of weight (could be lbs or affected by tare)
    const measuredWeight = parseFloat(rawWeight);
    setWeight('0.00');
    // Don't reset rawWeight - keep the measured value
    setTimeout(() => {
      // Calculate tare if active
      const totalPreTare = preTareValues.reduce((sum, value) => sum + parseFloat(value), 0);
      const manualTare = taredWeight ? parseFloat(taredWeight) : 0;
      const totalTare = totalPreTare + manualTare;
      
      // Calculate net weight (subtract tare from measured weight)
      const netWeight = measuredWeight - totalTare;
      
      // Convert to display unit (metric or imperial)
      const displayWeight = isMetric ? netWeight : kgToLbs(netWeight);
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
      // Ultrasonic mode
      if (ultrasonicAlternativeWorkflow) {
        // Alternative workflow: Show UltrasonicHeightMeasurement screen
        setShowUltrasonicHeightMeasurement(true);
      } else {
        // Standard workflow: Start the height measurement with animation
        setHeightMeasured(true);
        setIsHeightUpdating(true);
        setHeightLoadingBars(0);
        
        // Animate bars sequentially - repeat animation twice
        // First cycle
        setTimeout(() => setHeightLoadingBars(1), 300);
        setTimeout(() => setHeightLoadingBars(2), 600);
        // Second cycle (repeat)
        setTimeout(() => setHeightLoadingBars(0), 900);
        setTimeout(() => setHeightLoadingBars(1), 1200);
        setTimeout(() => setHeightLoadingBars(2), 1500);
        
        // After 1800ms, show the height value
        setTimeout(() => {
          setHeightValue(testHeight); // Set the measured height from Control Panel
          setIsHeightUpdating(false);
          setHeightLoadingBars(0);
        }, 1800);
      }
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
      // Ultrasonic mode
      if (ultrasonicAlternativeWorkflow) {
        // Alternative workflow: Show fullscreen UltrasonicHeightMeasurement screen
        setShowUltrasonicHeightMeasurement(true);
      } else {
        // Standard workflow: Start the loading animation - repeat the measurement animation
        setIsHeightUpdating(true);
        setHeightLoadingBars(0);
        
        // Animate bars sequentially - repeat animation twice
        // First cycle
        setTimeout(() => setHeightLoadingBars(1), 300);
        setTimeout(() => setHeightLoadingBars(2), 600);
        // Second cycle (repeat)
        setTimeout(() => setHeightLoadingBars(0), 900);
        setTimeout(() => setHeightLoadingBars(1), 1200);
        setTimeout(() => setHeightLoadingBars(2), 1500);
        
        // After 1800ms, show the height value again
        setTimeout(() => {
          setIsHeightUpdating(false);
          setHeightLoadingBars(0);
          // Height value stays the same (167.7) but the animation gives visual feedback
        }, 800);
      }
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

  const handleTactileHeightComplete = () => {
    // Animation screen confirmed - save height and return to main
    const height = testHeight; // Use the target height from control panel
    setHeightValue(height);
    setHeightMeasured(true);
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
    // Close the tare assistant when confirming
    setShowTareAssistant(false);
    
    // Apply tare to current weight
    // The measured weight stays in rawWeight, but displayed weight becomes 0.00
    // This preserves the measurement for the tare badge
    setTaredWeight(rawWeight); // Set taredWeight so Tare info shows in Main Screen
    setWeight('0.00');
    // Don't reset rawWeight - keep it to show tare badge
  };

  const handlePreTareConfirm = (values: string[]) => {
    setPreTareValues(values);
    setShowTareAssistant(false);
    
    // Recalculate displayed weight
    const measuredWeight = parseFloat(rawWeight);
    const totalPreTare = values.reduce((sum, value) => sum + parseFloat(value), 0);
    const manualTare = taredWeight ? parseFloat(taredWeight) : 0;
    const totalTare = totalPreTare + manualTare;
    const netWeight = measuredWeight - totalTare;
    
    // Convert to display unit
    const displayWeight = isMetric ? netWeight : kgToLbs(netWeight);
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
    setShowManualTare(false);
    setShowTareAssistant(false);
    
    // Recalculate displayed weight
    const measuredWeight = parseFloat(rawWeight);
    const totalPreTare = preTareValues.reduce((sum, val) => sum + parseFloat(val), 0);
    const manualTare = parseFloat(value);
    const totalTare = totalPreTare + manualTare;
    const netWeight = measuredWeight - totalTare;
    
    // Convert to display unit
    const displayWeight = isMetric ? netWeight : kgToLbs(netWeight);
    setWeight(displayWeight.toFixed(2));
  };

  const handleRemoveTare = () => {
    setTaredWeight(null);
    setPreTareValues([]);
    
    // Reset weight to raw weight
    const displayWeight = isMetric ? parseFloat(rawWeight) : kgToLbs(parseFloat(rawWeight));
    setWeight(displayWeight.toFixed(2));
  };

  const handleSendClick = () => {
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

    // Check if weight is measured
    const hasWeight = parseFloat(rawWeight) > 0;
    if (!hasWeight) {
      setShowMissingDataDialog(true);
      return;
    }

    // Check if height is required and measured
    if (heightRequired && !heightMeasured) {
      // Mark that we should show overview after height measurement
      setPendingSendAfterHeight(true);
      
      // Start the height workflow directly instead of showing a prompt
      if (heightMode === 'manual') {
        setShowManualInput(true);
      } else if (heightMode === 'tactile') {
        setShowTactileHeight(true);
      } else {
        // Ultrasonic mode
        if (ultrasonicAlternativeWorkflow) {
          // Alternative workflow: Show UltrasonicHeightMeasurement screen
          setShowUltrasonicHeightMeasurement(true);
        } else {
          // Standard workflow: Start the height measurement with animation
          setHeightMeasured(true);
          setIsHeightUpdating(true);
          setHeightLoadingBars(0);
          
          // Animate bars sequentially - repeat animation twice
          // First cycle
          setTimeout(() => setHeightLoadingBars(1), 300);
          setTimeout(() => setHeightLoadingBars(2), 600);
          // Second cycle (repeat)
          setTimeout(() => setHeightLoadingBars(0), 900);
          setTimeout(() => setHeightLoadingBars(1), 1200);
          setTimeout(() => setHeightLoadingBars(2), 1500);
          
          // After 1800ms, show the height value and automatically show overview
          setTimeout(() => {
            setHeightValue(testHeight);
            setIsHeightUpdating(false);
            setHeightLoadingBars(0);
            // Automatically show overview after height measurement completes
            setPendingSendAfterHeight(false);
            setShowOverview(true);
          }, 1800);
        }
      }
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
    setShowDataSaved(true);
    
    // Hide DataSaved after 2 seconds
    setTimeout(() => {
      setShowDataSaved(false);
    }, 2000);
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
      // Weight present but height missing and required - show height required prompt from send wizard
      setHeightRequiredFromSendWizard(true);
      setShowHeightRequiredPrompt(true);
    }
    // Else: return to main screen (no action needed)
  };

  const handleScanPatientIdConfirm = () => {
    setIsPatientLoggedIn(true);
    setShowScanPatientId(false);
    setShowPatientId(true);
    
    // Auto-proceed after 2 seconds
    setTimeout(() => {
      setShowPatientId(false);
      proceedAfterLogin();
    }, 2000);
  };

  const handlePatientIdNext = () => {
    setShowPatientId(false);
    proceedAfterLogin();
  };

  const handleScanPatientIdCancel = () => {
    setShowScanPatientId(false);
  };

  const handleScanUserIdConfirm = () => {
    setIsUserLoggedIn(true);
    setShowScanUserId(false);
    setShowUserIdConfirmed(true);
    
    // Auto-proceed after 2 seconds
    setTimeout(() => {
      setShowUserIdConfirmed(false);
      proceedAfterLogin();
    }, 2000);
  };

  const handleUserIdNext = () => {
    setShowUserIdConfirmed(false);
    proceedAfterLogin();
  };

  const handleScanUserIdCancel = () => {
    setShowScanUserId(false);
  };

  const handleScanBothIdsConfirm = (id: 'patient' | 'user') => {
    if (!firstScannedId) {
      // First scan
      setFirstScannedId(id);
      if (id === 'patient') {
        setIsPatientLoggedIn(true);
      } else {
        setIsUserLoggedIn(true);
      }
    } else {
      // Second scan - both IDs now scanned
      if (id === 'patient') {
        setIsPatientLoggedIn(true);
      } else {
        setIsUserLoggedIn(true);
      }
      setShowScanBothIds(false);
      setFirstScannedId(null);
      
      // Check next step after login
      proceedAfterLogin();
    }
  };

  const handleScanBothIdsCancel = () => {
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

  const handleIntegrationInfoHome = () => {
    setShowIntegrationInfo(false);
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
    setWeight('0.00');
    setRawWeight('0.00');
    setHeightMeasured(false);
    setHeightValue(null);
    setShowBsa(false);
    setTaredWeight(null);
    setPreTareValues([]);
    setShowReweightButton(false);
    setIsPatientLoggedIn(false);
    setIsUserLoggedIn(false);
    setHasEverMeasured(false);
    setFirstScannedId(null);
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
      if (ultrasonicAlternativeWorkflow) {
        setShowUltrasonicHeightMeasurement(true);
      } else {
        handleHeightClick();
      }
    }
  };

  const handleUltrasonicHeightMeasurementContinue = (height: string) => {
    setHeightValue(height);
    setHeightMeasured(true);
    setShowUltrasonicHeightMeasurement(false);
    // Show height confirmation
    setShowHeightConfirmation(true);
  };

  const handleUltrasonicHeightMeasurementCancel = () => {
    setShowUltrasonicHeightMeasurement(false);
    setPendingSendAfterHeight(false); // Reset pending state
    
    // If no weight is present, show height required prompt again
    const hasWeight = parseFloat(rawWeight) > 0;
    if (!hasWeight && heightRequired) {
      setShowHeightRequiredPrompt(true);
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
    if (ultrasonicAlternativeWorkflow) {
      setShowUltrasonicHeightMeasurement(true);
    } else {
      // Standard workflow: Start the height measurement with animation
      handleHeightClick();
    }
  };

  // ---- LANDSCAPE-Renderpfad (Portrait bleibt unberührt darunter) ----
  if (layout === 'landscape') {
    const landscapeControls = showControlPanel ? (
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
        onTestHeightChange={setTestHeight}
        ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
        onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
        uniqueId="-landscape"
        onReset={handleReset}
        zoomLevel={zoomLevel}
        onZoomLevelChange={setZoomLevel}
        landscapeVariant={landscapeVariant}
        onLandscapeVariantChange={setLandscapeVariant}
      />
    ) : null;

    // Tare Assistant (A/B) – nutzt dieselbe Engine-Logik wie das Portrait-PreTare
    if (showTareAssistant) {
      const TareAssistant = landscapeVariant === 'A' ? TareAssistantLandscapeA : TareAssistantLandscapeB;
      return (
        <ScreenFrameLandscape zoomLevel={zoomLevel} controls={landscapeControls} dataName="Tare Assistant (Landscape)">
          <TareAssistant
            weight={formatWeight(weight)}
            isMetric={isMetric}
            taredWeight={taredWeight}
            activePreTareValues={preTareValues}
            onPreTareToggle={(value: string) => {
              const newValues = preTareValues.includes(value)
                ? preTareValues.filter(v => v !== value)
                : [...preTareValues, value];
              setPreTareValues(newValues);
              const measuredWeight = parseFloat(rawWeight);
              const totalPreTare = newValues.reduce((sum, v) => sum + parseFloat(v), 0);
              const manualTare = taredWeight ? parseFloat(taredWeight) : 0;
              const netWeight = measuredWeight - (totalPreTare + manualTare);
              setWeight((isMetric ? netWeight : kgToLbs(netWeight)).toFixed(2));
              setShowTareAssistant(false);
            }}
            onManualTareClick={handleManualTareClick}
            onTareConfirm={handleTareConfirm}
            onBack={handleTareBack}
          />
        </ScreenFrameLandscape>
      );
    }

    // Manuelle Tara-Eingabe (interim: bestehende Portrait-Komponente im Portrait-Kärtchen)
    if (showManualTare) {
      return (
        <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
          <div
            className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0"
            data-name="Manual Tare (Landscape interim)"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'center center' }}
          >
            <ManualTareInput onBack={handleManualTareBack} onConfirm={handleManualTareConfirm} isMetric={isMetric} initialValue={taredWeight} />
          </div>
          {landscapeControls}
        </div>
      );
    }

    // Landscape-Hauptscreen (Einstieg)
    return (
      <ScreenFrameLandscape zoomLevel={zoomLevel} controls={landscapeControls} dataName="iScale (Landscape)">
        <MainScreenLandscape
          weight={formatWeight(weight)}
          rawWeight={rawWeight}
          isMetric={isMetric}
          taredWeight={taredWeight}
          preTareValues={preTareValues}
          installationMode={installationMode}
          bmiLabel={getDisplayLabel()}
          showReweightButton={showReweightButton}
          isReweighting={isReweighting}
          onMenuClick={handleMenuClick}
          onTareClick={handleTareClick}
          onRecallClick={handleRecallClick}
          onSendClick={handleSendClick}
          onReweight={handleReweight}
          onRemoveTare={handleRemoveTare}
        />
      </ScreenFrameLandscape>
    );
  }

  // Show different screens based on state
  if (showMenu) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Menu"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <div className="absolute inset-0">
            {currentMenuScreen === 'main' && (
              <MenuComponent 
                onClose={handleMenuClose}
                onInfoClick={() => setCurrentMenuScreen('info')}
                onSettingsClick={() => setCurrentMenuScreen('settings')}
                onServiceClick={() => setCurrentMenuScreen('service')}
                onIntegrationInfoClick={() => {
                  setShowMenu(false);
                  setCurrentMenuScreen('main');
                  setShowIntegrationInfo(true);
                }}
                onServerConnectionClick={() => {
                  setShowMenu(false);
                  setCurrentMenuScreen('main');
                  setShowServerConnection(true);
                }}
                onRestartClick={handleRestartClick}
                showControlPanel={showControlPanel}
                onToggleControlPanel={handleToggleControlPanel}
              />
            )}
            {currentMenuScreen === 'info' && (
              <InfoComponent
                onBack={handleMenuBack}
                onHome={handleMenuClose}
                onUserManualClick={() => console.log('User Manual clicked')}
                onHelpClick={() => console.log('Help clicked')}
                onAboutClick={() => console.log('About clicked')}
              />
            )}
            {currentMenuScreen === 'settings' && (
              <SettingsComponent
                onBack={handleMenuBack}
                onHome={handleMenuClose}
                onDisplayClick={() => setCurrentMenuScreen('display')}
                onWeightClick={() => console.log('Weight clicked')}
                onNetworkClick={() => {
                  setShowMenu(false);
                  setCurrentMenuScreen('main');
                  setShowNetwork(true);
                }}
                onRS232Click={() => console.log('RS232 clicked')}
                onHeightClick={() => {
                  setShowMenu(false);
                  setCurrentMenuScreen('main');
                  setShowHeightCalibration(true);
                }}
                onAudioClick={() => console.log('Audio clicked')}
                onBatteryClick={() => console.log('Battery clicked')}
                showControlPanel={showControlPanel}
                onToggleControlPanel={handleToggleControlPanel}
              />
            )}
            {currentMenuScreen === 'service' && (
              <ServiceComponent
                onBack={handleMenuBack}
                onHome={handleMenuClose}
                onModuleInfoClick={() => console.log('Module Info clicked')}
                onConfigurationModeClick={() => console.log('Configuration Mode clicked')}
                onServiceToolsClick={() => console.log('Service Tools clicked')}
                onFactoryResetClick={() => console.log('Factory Reset clicked')}
                onSettingsLockClick={() => console.log('Settings Lock clicked')}
              />
            )}
            {currentMenuScreen === 'restart' && (
              <DialogRestartComponent
                onConfirm={handleRestartConfirm}
                onCancel={handleRestartCancel}
              />
            )}
            {currentMenuScreen === 'display' && (
              <DisplayComponent
                onBack={handleMenuBack}
                onHome={handleMenuClose}
                onLanguageClick={() => setCurrentMenuScreen('language')}
                onUnitsClick={() => console.log('Units clicked')}
                onClearValuesClick={() => console.log('Clear Values clicked')}
                onBrightnessClick={() => console.log('Brightness clicked')}
                onStandbyClick={() => console.log('Standby clicked')}
                onNameFormatClick={() => console.log('Name Format clicked')}
                onDateFormatClick={() => console.log('Date Format clicked')}
                onBmiBsaClick={() => setCurrentMenuScreen('bmiBsa')}
              />
            )}
            {currentMenuScreen === 'language' && (
              <LanguageComponent
                onBack={handleMenuBack}
                onHome={handleMenuClose}
              />
            )}
            {currentMenuScreen === 'bmiBsa' && (
              <BmiBsaMenu
                onBack={handleMenuBack}
                onHome={handleMenuClose}
              />
            )}
          </div>
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Integration Info"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <IntegrationInfo 
            onBack={handleIntegrationInfoBack}
            onHome={handleIntegrationInfoHome}
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Tactile Height"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <TactileHeight 
            onBack={handleTactileHeightCancel}
            onMeasured={handleTactileHeightMeasured}
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
            uniqueId="-tactile-complete"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showUltrasonicHeightMeasurement) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Ultrasonic Height Measurement"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <HeightMeasurementOngoing 
            onClose={handleUltrasonicHeightMeasurementCancel}
            onMeasured={handleUltrasonicHeightMeasurementContinue}
            targetHeight={testHeight}
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
            uniqueId="-ultrasonic"
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Tare Assistant"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <PreTare 
            onBack={handleTareBack}
            weight={weight}
            onTareConfirm={handleTareConfirm}
            onPreTareToggle={(value: string) => {
              const newValues = preTareValues.includes(value) 
                ? preTareValues.filter(v => v !== value)
                : [...preTareValues, value];
              setPreTareValues(newValues);
              
              // Recalculate displayed weight
              const measuredWeight = parseFloat(rawWeight);
              const totalPreTare = newValues.reduce((sum, value) => sum + parseFloat(value), 0);
              const manualTare = taredWeight ? parseFloat(taredWeight) : 0;
              const totalTare = totalPreTare + manualTare;
              const netWeight = measuredWeight - totalTare;
              
              // Convert to display unit
              const displayWeight = isMetric ? netWeight : kgToLbs(netWeight);
              setWeight(displayWeight.toFixed(2));
              
              // Close the tare assistant and go back to main screen
              setShowTareAssistant(false);
            }}
            activePreTareValues={preTareValues}
            onManualTareClick={handleManualTareClick}
            taredWeight={taredWeight}
            isMetric={isMetric}
            onInfoClick={() => setShowTareInfo(true)}
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
            uniqueId="-manual-tare"
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
            uniqueId="-height-required"
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Scan Patient ID"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <ScanPatientId 
            onConfirm={handleScanPatientIdConfirm}
            onCancel={handleScanPatientIdCancel}
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Patient ID Confirmed"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <Id onClose={handlePatientIdNext} onNext={handlePatientIdNext} />
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Scan User ID"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <ScanPatientId34320 
            onConfirm={handleScanUserIdConfirm}
            onCancel={handleScanUserIdCancel}
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="User ID Confirmed"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <Id34414 onClose={handleUserIdNext} onNext={handleUserIdNext} />
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Scan Both IDs"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <ScanBothIds 
            onConfirm={handleScanBothIdsConfirm}
            onCancel={handleScanBothIdsCancel}
            firstScannedId={firstScannedId}
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Overview"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <WeightMeasurement 
            onClose={handleOverviewClose}
            onSend={handleOverviewSend}
            weight={formatWeight(weight)}
            height={heightValue ? formatHeight(heightValue) : undefined}
            bmi={bsaValue !== '---' ? bsaValue : undefined}
            loginMode={loginMode}
            isMetric={isMetric}
            displayLabel={getDisplayLabel()}
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
            uniqueId="-overview"
            onReset={handleReset}
            zoomLevel={zoomLevel}
            onZoomLevelChange={setZoomLevel}
          />
        )}
      </div>
    );
  }

  if (showDataSaved) {
    return (
      <div className="h-screen w-full flex items-center justify-center overflow-auto" style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}>
        <div 
          className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
          data-name="Data Saved"
          style={{ 
            transform: `scale(${zoomLevel / 100})`,
            transformOrigin: 'center center'
          }}
        >
          <DataSaved />
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
            onTestHeightChange={setTestHeight}
            ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
            onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
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
        className="bg-[#e7ebf7] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px] flex-shrink-0" 
        data-name="iScale (Portrait)"
        style={{ 
          transform: `scale(${zoomLevel / 100})`,
          transformOrigin: 'center center'
        }}
      >
        {isUserLoggedIn && isPatientLoggedIn ? (
          <StatusBarPortraitBoth onLogout={handleLogout} onMenuClick={handleMenuClick} />
        ) : isUserLoggedIn && !isPatientLoggedIn ? (
          <StatusBarPortrait34583 onLogout={handleLogout} onMenuClick={handleMenuClick} />
        ) : (
          <StatusBarPortrait showPatientBanner={isPatientLoggedIn} onLogout={handleLogout} onMenuClick={handleMenuClick} />
        )}
        <LibaryWeightDetails weight={formatWeight(weight)} onWeightClick={handleWeightClick} preTareValues={preTareValues} taredWeight={taredWeight} rawWeight={rawWeight} isMetric={isMetric} isReweighting={isReweighting} />
        <LibaryHeightBmi showHeightMeasured={heightMeasured} showBsa={showBsa} onHeightClick={handleHeightClick} onBsaClick={handleBsaClick} onBsaBackClick={handleBsaBackClick} heightValue={formatHeight(testHeight)} bsaValue={bsaValue} isHeightUpdating={isHeightUpdating} heightLoadingBars={heightLoadingBars} onHeightValueClick={handleHeightValueClick} isMetric={isMetric} rawWeight={rawWeight} hasEverMeasured={hasEverMeasured} displayLabel={getDisplayLabel()} />
        <ButtonBar onTareClick={handleTareClick} onSendClick={handleSendClick} onRecallClick={handleRecallClick} isStandalone={installationMode === 'standalone'} />
        <LibaryTara showButton={showReweightButton} onReweight={handleReweight} taredWeight={taredWeight} preTareValues={preTareValues} onRemoveTare={handleRemoveTare} weight={weight} rawWeight={rawWeight} isMetric={isMetric} isReweighting={isReweighting} />
        
        {/* Previous Value Screen Overlay */}
        {showPreviousValue && (
          <div className="absolute inset-0 z-50">
            <PreviousValueScreen onClose={() => setShowPreviousValue(false)} />
          </div>
        )}
        
        {/* Missing Data Dialog Overlay */}
        {showMissingDataDialog && (
          <div className="absolute inset-0 z-50">
            <Dialog 
              missingData={{
                weight: parseFloat(rawWeight) === 0,
                height: heightRequired && !heightMeasured,
                patientId: (loginMode === 'patient-only' || loginMode === 'both') && !isPatientLoggedIn,
                userId: (loginMode === 'user-only' || loginMode === 'both') && !isUserLoggedIn
              }}
              onConfirm={handleMissingDataConfirm}
              onCancel={handleMissingDataCancel}
            />
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
          onTestHeightChange={setTestHeight}
          ultrasonicAlternativeWorkflow={ultrasonicAlternativeWorkflow}
          onUltrasonicAlternativeWorkflowChange={setUltrasonicAlternativeWorkflow}
          uniqueId="-main"
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
