import { useState } from 'react';
import svgPaths from "../imports/svg-64v2u10c6x";
import { Switch } from "./ui/switch";

// Icons
function ArrowForwardIos() {
  return (
    <div className="relative size-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g>
          <mask height="26" id="mask0_arrow_forward" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" width="26" />
          </mask>
          <g mask="url(#mask0_arrow_forward)">
            <path d={svgPaths.p7c54c00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowForwardIosSmall() {
  return (
    <div className="relative size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <mask height="24" id="mask0_arrow_forward_small" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
          </mask>
          <g mask="url(#mask0_arrow_forward_small)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Header Components
function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%] cursor-pointer">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowForwardIos />
        </div>
      </div>
    </button>
  );
}

function HomeButton({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute left-[222px] size-[50px] top-0 cursor-pointer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g>
          <path d={svgPaths.p2fa81c00} fill="var(--fill-0, white)" />
        </g>
      </svg>
    </button>
  );
}

function Header({ onBack, onHome }: { onBack?: () => void; onHome?: () => void }) {
  return (
    <div className="absolute bg-[#191c24] h-[50px] left-0 top-0 w-[272px]">
      <BackButton onClick={onBack} />
      <HomeButton onClick={onHome} />
      <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]">
        <div className="basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">Network</p>
        </div>
      </div>
    </div>
  );
}

// Menu Items
interface MenuItemWithSwitchProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  isFirst?: boolean;
}

function MenuItemWithSwitch({ label, enabled, onChange, isFirst }: MenuItemWithSwitchProps) {
  const roundedClasses = isFirst ? 'rounded-tl-[8px] rounded-tr-[8px]' : '';
  
  return (
    <div className="h-[52px] relative shrink-0 w-[260px]">
      {/* Background */}
      <div className={`absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px] ${roundedClasses}`}>
        <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
      </div>
      
      {/* Text */}
      <div className="absolute h-[27px] left-[12px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]">
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">{label}</p>
        </div>
      </div>
      
      {/* Switch */}
      <div className="absolute content-stretch flex gap-[10px] h-[24px] items-center right-[12px] top-1/2 translate-y-[-50%]">
        <Switch checked={enabled} onCheckedChange={onChange} />
      </div>
    </div>
  );
}

interface MenuItemWithArrowProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

function MenuItemWithArrow({ label, onClick, disabled }: MenuItemWithArrowProps) {
  const [isPressed, setIsPressed] = useState(false);
  
  const textColor = disabled ? 'text-[#8b8d91]' : 'text-[#191c24]';
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => !disabled && setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      className={`h-[52px] relative shrink-0 w-[260px] ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
    >
      {/* Background */}
      <div className="absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px]">
        <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
      </div>
      
      {/* Pressed State */}
      {isPressed && !disabled && <div className="absolute bg-[#c9cacb] h-[44px] left-[1.92%] right-[1.92%] rounded-[4px] top-[4px]" />}
      
      {/* Text */}
      <div className="absolute h-[27px] left-[12px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]">
        <div className={`absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] ${textColor} text-[20px]`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">{label}</p>
        </div>
      </div>
      
      {/* Arrow (only if not disabled) */}
      {!disabled && (
        <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <ArrowForwardIosSmall />
            </div>
          </div>
        </div>
      )}
    </button>
  );
}

function EmptyMenuItem() {
  return (
    <div className="h-[52px] relative shrink-0 w-[260px]">
      <div className="absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px]" />
    </div>
  );
}

export interface NetworkProps {
  onBack?: () => void;
  onHome?: () => void;
  wifiEnabled?: boolean;
  onWifiEnabledChange?: (enabled: boolean) => void;
  onServerConnectionClick?: () => void;
  onIdentificationClick?: () => void;
}

export default function Network({ 
  onBack, 
  onHome, 
  wifiEnabled = false, 
  onWifiEnabledChange,
  onServerConnectionClick,
  onIdentificationClick 
}: NetworkProps) {
  return (
    <div className="bg-[#191c24] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full">
      <Header onBack={onBack} onHome={onHome} />
      
      {/* Background */}
      <div className="absolute bg-white h-[416px] left-1/2 rounded-[8px] top-[calc(50%+26px)] translate-x-[-50%] translate-y-[-50%] w-[260px]">
        {/* Menu Items Container */}
        <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-0">
          {/* Enable WiFi with Switch */}
          <MenuItemWithSwitch 
            label="Enable WiFi" 
            enabled={wifiEnabled}
            onChange={onWifiEnabledChange || (() => {})}
            isFirst
          />
          
          {/* WiFi Connection - disabled when WiFi is off */}
          <MenuItemWithArrow 
            label="WiFi Connection" 
            disabled={!wifiEnabled}
          />
          
          {/* Server Connection */}
          <MenuItemWithArrow 
            label="Server Connection" 
            onClick={onServerConnectionClick}
          />
          
          {/* Identification */}
          <MenuItemWithArrow 
            label="Identification" 
            onClick={onIdentificationClick}
          />
          
          {/* Empty menu items */}
          <EmptyMenuItem />
          <EmptyMenuItem />
          <EmptyMenuItem />
        </div>
      </div>
    </div>
  );
}
