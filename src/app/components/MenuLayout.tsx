import { useState } from 'react';
import svgPaths from "../imports/svg-64v2u10c6x";
import radioSvgPaths from "../imports/svg-v5rjc67sbe";

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

function LanguageIcon() {
  return (
    <div className="absolute left-[200px] size-[24px] top-1/2 translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <mask height="24" id="mask0_language" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
          </mask>
          <g mask="url(#mask0_language)">
            <path d={svgPaths.p580740} fill="var(--fill-0, #8B8D91)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Radio Button Components
function RadioButtonUnselected() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 1082">
          <circle cx="12" cy="12" id="Ellipse 102" r="10.5" stroke="var(--stroke-0, #191C24)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function RadioButtonSelected() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 1082">
          <circle cx="12" cy="12" fill="var(--fill-0, #191C24)" id="Ellipse 102" r="11" stroke="var(--stroke-0, #191C24)" strokeWidth="2" />
          <path clipRule="evenodd" d={radioSvgPaths.p37725d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
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

function Header({ title, onBack, onHome }: { title: string; onBack?: () => void; onHome?: () => void }) {
  return (
    <div className="absolute bg-[#191c24] h-[50px] left-0 top-0 w-[272px]">
      <BackButton onClick={onBack} />
      <HomeButton onClick={onHome} />
      <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]">
        <div className="basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">{title}</p>
        </div>
      </div>
    </div>
  );
}

// Menu Item Component
interface MenuItemProps {
  label: string;
  onClick?: () => void;
  showLanguageIcon?: boolean;
  showRadioButton?: boolean;
  radioSelected?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  isPressed?: boolean;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onMouseLeave?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  onTouchCancel?: () => void;
}

function MenuItem({ label, onClick, showLanguageIcon, showRadioButton, radioSelected, isFirst, isLast, isPressed, onMouseDown, onMouseUp, onMouseLeave, onTouchStart, onTouchEnd, onTouchCancel }: MenuItemProps) {
  const roundedClasses = isFirst ? 'rounded-tl-[8px] rounded-tr-[8px]' : isLast ? 'rounded-bl-[8px] rounded-br-[8px]' : '';
  
  return (
    <button 
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchCancel}
      className="h-[52px] relative shrink-0 w-[260px] cursor-pointer"
    >
      {/* Background */}
      <div className={`absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px] ${roundedClasses}`}>
        <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
      </div>
      
      {/* Pressed State */}
      {isPressed && <div className="absolute bg-[#c9cacb] h-[44px] left-[1.92%] right-[1.92%] rounded-[4px] top-[4px]" />}
      
      {/* Text */}
      <div className={`absolute h-[27px] top-[calc(50%+0.5px)] translate-y-[-50%] ${
        showRadioButton
          ? 'left-[12px] w-[206px]'
          : showLanguageIcon
            ? 'left-[12px] w-[182px]'
            : 'left-[12px] w-[182px]'
      }`}>
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px] text-left" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">{label}</p>
        </div>
      </div>
      
      {/* Language Icon */}
      {showLanguageIcon && <LanguageIcon />}
      
      {/* Radio Button */}
      {showRadioButton && (
        <div className="absolute content-stretch flex gap-[10px] items-center right-[12px] size-[24px] top-1/2 translate-y-[-50%]" data-name="radio button_24x24">
          {radioSelected ? <RadioButtonSelected /> : <RadioButtonUnselected />}
        </div>
      )}
      
      {/* Arrow (only if not radio button) */}
      {!showRadioButton && (
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

// Paging Component
interface PagingProps {
  currentPage: number;
  totalPages: number;
  onPrevPage?: () => void;
  onNextPage?: () => void;
}

function ArrowDropDown() {
  return (
    <div className="relative size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <mask height="24" id="mask0_arrow_drop" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" stroke="var(--stroke-0, black)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_arrow_drop)">
            <path d="M12 17.95L2 8H22L12 17.95Z" fill="var(--fill-0, #8B8D91)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowDropDownDark() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <mask height="24" id="mask0_arrow_drop_dark" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" stroke="var(--stroke-0, black)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_arrow_drop_dark)">
            <path d="M12 17.95L2 8H22L12 17.95Z" fill="var(--fill-0, #191C24)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PagingElement({ currentPage, totalPages, onPrevPage, onNextPage }: PagingProps) {
  const [upPressed, setUpPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);

  const handleUpClick = () => {
    if (currentPage > 1 && onPrevPage) {
      onPrevPage();
    }
  };

  const handleDownClick = () => {
    if (currentPage < totalPages && onNextPage) {
      onNextPage();
    }
  };

  return (
    <div className="h-[52px] relative shrink-0 w-[260px]">
      {/* Background */}
      <div className="absolute bg-white inset-0 overflow-clip rounded-bl-[8px] rounded-br-[8px]" />
      
      {/* Up Arrow (disabled if first page) */}
      <button 
        onClick={handleUpClick}
        onTouchStart={() => currentPage > 1 && setUpPressed(true)}
        onTouchEnd={() => setUpPressed(false)}
        onTouchCancel={() => setUpPressed(false)}
        onMouseDown={() => currentPage > 1 && setUpPressed(true)}
        onMouseUp={() => setUpPressed(false)}
        onMouseLeave={() => setUpPressed(false)}
        disabled={currentPage <= 1}
        className="absolute content-stretch flex flex-col gap-[10px] inset-[1.92%_74.61%_1.92%_6.15%] items-center justify-center cursor-pointer disabled:cursor-default"
      >
        <div 
          className={`flex items-center justify-center relative shrink-0 transition-opacity ${
            upPressed ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <div className="flex-none rotate-[180deg]">
            <ArrowDropDown />
          </div>
        </div>
      </button>
      
      {/* Down Arrow (active if not last page) */}
      <button
        onClick={handleDownClick}
        onTouchStart={() => currentPage < totalPages && setDownPressed(true)}
        onTouchEnd={() => setDownPressed(false)}
        onTouchCancel={() => setDownPressed(false)}
        onMouseDown={() => currentPage < totalPages && setDownPressed(true)}
        onMouseUp={() => setDownPressed(false)}
        onMouseLeave={() => setDownPressed(false)}
        disabled={currentPage >= totalPages}
        className="absolute content-stretch flex flex-col gap-[10px] inset-[1.92%_6.15%_1.92%_74.61%] items-center justify-center cursor-pointer disabled:cursor-default"
      >
        <div 
          className={`flex items-center justify-center relative shrink-0 transition-opacity ${
            downPressed ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <ArrowDropDownDark />
        </div>
      </button>
      
      {/* Page Indicators */}
      <div className="absolute inset-[19.23%_45.38%]">
        <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-0 top-1/2 translate-y-[-50%] w-[24px]">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div 
              key={index}
              className={`${index === currentPage - 1 ? 'bg-[#191c24]' : 'bg-[#d9d9d9]'} rounded-[4px] shrink-0 size-[8px]`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Main Layout Component
export interface MenuLayoutItem {
  label: string;
  onClick?: () => void;
  showLanguageIcon?: boolean;
  showRadioButton?: boolean;
  radioSelected?: boolean;
}

export interface MenuLayoutProps {
  title: string;
  items: MenuLayoutItem[];
  onBack?: () => void;
  onHome?: () => void;
  paging?: PagingProps;
}

export default function MenuLayout({ title, items, onBack, onHome, paging }: MenuLayoutProps) {
  const [pressedStates, setPressedStates] = useState<Record<number, boolean>>({});

  const handlePressStart = (index: number) => {
    setPressedStates(prev => ({ ...prev, [index]: true }));
  };

  const handlePressEnd = (index: number) => {
    setPressedStates(prev => ({ ...prev, [index]: false }));
    items[index]?.onClick?.();
  };

  const handlePressCancel = (index: number) => {
    setPressedStates(prev => ({ ...prev, [index]: false }));
  };

  return (
    <div className="bg-[#191c24] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full">
      <Header title={title} onBack={onBack} onHome={onHome} />
      
      {/* Menu Container */}
      <div className="absolute bg-white h-[416px] left-1/2 rounded-[8px] top-[calc(50%+26px)] translate-x-[-50%] translate-y-[-50%] w-[260px]">
        <div className="absolute content-stretch flex flex-col items-start justify-center left-0 top-0">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              label={item.label}
              onClick={item.onClick}
              showLanguageIcon={item.showLanguageIcon}
              showRadioButton={item.showRadioButton}
              radioSelected={item.radioSelected}
              isFirst={index === 0}
              isLast={index === items.length - 1 && !paging}
              isPressed={pressedStates[index]}
              onMouseDown={() => handlePressStart(index)}
              onMouseUp={() => handlePressEnd(index)}
              onMouseLeave={() => handlePressCancel(index)}
              onTouchStart={() => handlePressStart(index)}
              onTouchEnd={() => handlePressEnd(index)}
              onTouchCancel={() => handlePressCancel(index)}
            />
          ))}
          
          {/* Paging Element */}
          {paging && <PagingElement {...paging} />}
        </div>
      </div>
    </div>
  );
}
