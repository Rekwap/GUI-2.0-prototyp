import svgPaths from "./svg-xw56jxzzbe";
import clothingSvgPaths from "./svg-f5fajhrjb0";
import chairSvgPaths from "./svg-aw3rjo52fj";
import Frame1352 from "./Frame1352";
import TareBg241X96 from "./TareBg241X96";

function Info() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="info">
          <mask height="24" id="mask0_3_2424" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_2424)">
            <path d={svgPaths.p3c98ec00} fill="var(--fill-0, #1C1B1F)" id="info_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InfoSmall50X50() {
  return (
    <div className="absolute right-0 size-[50px] top-0" data-name="info_small_50x50">
      <Info />
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_3_1714" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1714)">
            <path d={svgPaths.p1c2bdd80} fill="var(--fill-0, #191C24)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X24() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center overflow-visible p-0 relative size-[50px]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos />
        </div>
      </div>
    </button>
  );
}

function PortraitHeaderWhite({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Tare Assistant</p>
      </div>
      <InfoSmall50X50 />
      <button onClick={onBack} className="absolute flex items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%] cursor-pointer">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-visible p-0 relative size-[50px]">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none scale-y-[-100%]">
                <div className="relative size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <mask height="24" id="mask0_3_1714" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                      </mask>
                      <g mask="url(#mask0_3_1714)">
                        <path d={svgPaths.p1c2bdd80} fill="var(--fill-0, #191C24)" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Info1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="info">
          <mask height="24" id="mask0_3_2424" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_2424)">
            <path d={svgPaths.p3c98ec00} fill="var(--fill-0, #1C1B1F)" id="info_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InfoSmall50X51() {
  return (
    <div className="absolute left-[calc(85.714%-11.143px)] size-[50px] top-0" data-name="info_small_50x50">
      <Info1 />
    </div>
  );
}

function TareValue({ weight, onWeightClick, isMetric }: { weight: string; onWeightClick?: (e?: React.MouseEvent) => void; isMetric: boolean }) {
  return (
    <div onClick={onWeightClick} className="absolute bg-[#98b0d8] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[8px] overflow-clip px-[12px] py-[4px] rounded-[4px] top-[56px] w-[225px] cursor-pointer" data-name="Tare Value">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.5px)] text-[#191c24] text-[20px] text-center top-[16.5px] translate-x-[-50%] translate-y-[-50%] w-[160px] cursor-pointer" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">-{weight} {isMetric ? 'kg' : 'lbs'}</p>
      </div>
    </div>
  );
}

function Tare48X32() {
  return (
    <div className="absolute h-[32px] left-[71px] top-[12px] w-[48px]" data-name="tare_48x32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 32">
        <g id="tare_48x32">
          <mask height="32" id="mask0_3_2420" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_3_2420)">
            <g id=">T<">
              <path d={svgPaths.p1f21e600} fill="#191C24" />
              <path d={svgPaths.p33039f00} fill="#191C24" />
              <path d={svgPaths.p361bb280} fill="#191C24" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1131() {
  return (
    <div className="absolute h-[27px] left-[121px] top-[15px] w-[48px]">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-end leading-[0] left-0 text-[#191c24] text-[20px] top-[calc(50%+13.5px)] translate-y-[-100%] w-[48px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">TARE</p>
      </div>
    </div>
  );
}

function Group1136() {
  return (
    <div className="absolute contents left-[71px] top-[12px]">
      <Tare48X32 />
      <Frame1131 />
    </div>
  );
}

function TareBg241X96Wrapper({ weight, onTareConfirm, onWeightClick, isMetric, onInfoClick }: { weight: string; onTareConfirm: () => void; onWeightClick?: () => void; isMetric: boolean; onInfoClick?: () => void }) {
  return (
    <div className="absolute h-[96px] right-[16px] rounded-[8px] top-[12px] w-[241px]" data-name="Tare_bg_241x96">
      <TareBg241X96 weight={weight} onTareConfirm={onTareConfirm} onWeightClick={onWeightClick} isMetric={isMetric} onInfoClick={onInfoClick} />
    </div>
  );
}

function TareValue1({ taredWeight, isMetric }: { taredWeight: string | null; isMetric: boolean }) {
  const displayText = taredWeight ? `-${taredWeight} ${isMetric ? 'kg' : 'lbs'}` : 'Add Manually';
  const isActive = taredWeight !== null;
  
  return (
    <div className={`absolute ${isActive ? 'bg-[#374267]' : 'bg-[#98b0d8]'} box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[8px] overflow-clip px-[12px] py-[4px] rounded-[4px] top-[56px] w-[225px]`} data-name="Tare Value">
      <div className={`absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.5px)] ${isActive ? 'text-white' : 'text-[#191c24]'} text-[20px] text-center top-[16.5px] translate-x-[-50%] translate-y-[-50%] w-[160px]`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">{displayText}</p>
      </div>
    </div>
  );
}

function Dialpad({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute left-0 size-[36px] top-0" data-name="dialpad">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="dialpad">
          <mask height="36" id="mask0_3_2410" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="36" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="36" id="Bounding box" width="36" />
          </mask>
          <g mask="url(#mask0_3_2410)">
            <path d={svgPaths.p2dfb8c10} fill={isActive ? "white" : "var(--fill-0, #191C24)"} id="dialpad_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Manual36X36({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute left-[calc(50%-0.5px)] size-[36px] top-[12px] translate-x-[-50%]" data-name="Manual_36x36">
      <Dialpad isActive={isActive} />
    </div>
  );
}

function TareBg241X97({ onManualTareClick, taredWeight, isMetric }: { onManualTareClick: () => void; taredWeight: string | null; isMetric: boolean }) {
  const taredValue = taredWeight ? parseFloat(taredWeight) : 0;
  const isActive = taredWeight !== null && taredValue !== 0;
  
  return (
    <div onClick={onManualTareClick} className={`absolute ${isActive ? 'bg-[#6e84cd]' : 'bg-white'} h-[96px] left-[15px] rounded-[8px] top-[120px] w-[241px] cursor-pointer ${!isActive && 'hover:bg-gray-50'} transition-colors`} data-name="Tare_bg_241x96">
      <div className="h-[96px] overflow-clip relative rounded-[inherit] w-[241px]">
        <TareValue1 taredWeight={taredWeight} isMetric={isMetric} />
        <Manual36X36 isActive={isActive} />
        {isActive && (
          <div className="absolute inset-0 pointer-events-none shadow-[1px_1px_1px_0px_inset_rgba(0,0,0,0.25),-1px_-1px_1px_0px_inset_rgba(255,255,255,0.5),-1px_-1px_4px_0px_inset_rgba(255,255,255,0.25),-4px_-5px_5px_0px_inset_rgba(255,255,255,0.25),5px_5px_6px_0px_inset_rgba(0,0,0,0.25),4px_6px_4px_0px_inset_rgba(0,0,0,0.25)]" />
        )}
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_6px_0px_#191c24]" />
    </div>
  );
}

function Group319({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute h-[30.858px] left-[calc(50%-0.067px)] top-[calc(50%+0.129px)] translate-x-[-50%] translate-y-[-50%] w-[32.267px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-4.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <g id="Group 319">
            <path d={svgPaths.p37771844} id="Vector 57" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
            <path d={svgPaths.p2762ba28} id="Vector 58" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
            <circle cx="27.03" cy="26.8711" id="Ellipse 62" r="3.98638" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
            <circle cx="5.23638" cy="26.8711" id="Ellipse 63" r="3.98638" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Roller36X36({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute left-[calc(50%-74px)] size-[36px] top-[8px] translate-x-[-50%]" data-name="roller_36x36">
      <Group319 isSelected={isSelected} />
    </div>
  );
}

function Clothing36X36({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute left-[calc(50%-74px)] size-[36px] top-[8px] translate-x-[-50%]" data-name="clothing_36x36">
      <div className="absolute h-[32px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[24px]" data-name="Vector">
        <div className="absolute inset-[-3.91%_-5.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 35">
            <path d={clothingSvgPaths.p1e305d00} fill="none" id="Vector" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TareValue2({ isSelected, isMetric, displayValue }: { isSelected: boolean; isMetric: boolean; displayValue: string }) {
  return (
    <div className={`absolute ${isSelected ? 'bg-[#374267]' : 'bg-[#98b0d8]'} box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[calc(50%+36px)] overflow-clip px-[12px] py-[4px] rounded-[4px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[136px]`} data-name="Tare Value">
      <div className={`basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 ${isSelected ? 'text-white' : 'text-[#191c24]'} text-[20px] text-center`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">-{displayValue} {isMetric ? 'kg' : 'lbs'}</p>
      </div>
    </div>
  );
}

function PreTare224X52({ onPreTareConfirm, isSelected, isMetric }: { onPreTareConfirm: (value: string) => void; isSelected: boolean; isMetric: boolean }) {
  const displayValue = isMetric ? '0.50' : '1.10';
  return (
    <div onClick={() => onPreTareConfirm('0.50')} className={`${isSelected ? 'bg-[#6e84cd]' : 'bg-white'} h-[52px] overflow-clip relative rounded-[4px] shrink-0 w-[224px] cursor-pointer ${!isSelected && 'hover:bg-gray-50'} transition-colors`} data-name="PreTare_224x52">
      <Clothing36X36 isSelected={isSelected} />
      <TareValue2 isSelected={isSelected} isMetric={isMetric} displayValue={displayValue} />
      {isSelected && (
        <div className="absolute inset-0 pointer-events-none shadow-[1px_1px_1px_0px_inset_rgba(0,0,0,0.25),-1px_-1px_1px_0px_inset_rgba(255,255,255,0.5),-1px_-1px_4px_0px_inset_rgba(255,255,255,0.25),-4px_-5px_5px_0px_inset_rgba(255,255,255,0.25),5px_5px_6px_0px_inset_rgba(0,0,0,0.25),4px_6px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      )}
    </div>
  );
}

function Group752({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute h-[32.4px] left-[calc(50%-0.349px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[27.202px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-3.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 34">
          <g id="Group 752">
            <path d={svgPaths.pe207100} id="Vector 59" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
            <path d={svgPaths.p1056aa80} id="Ellipse 64" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
            <path d="M9.97383 9.71277H21.7612" id="Vector 60" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
            <path d="M19.0411 26.9404H27.2015" id="Vector 61" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Chair36X36({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute left-[calc(50%-74px)] size-[36px] top-[8px] translate-x-[-50%]" data-name="chair_36x36">
      <div className="absolute h-[29px] left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[32px]" data-name="Vector">
        <div className="absolute inset-[-4.31%_-3.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
            <path d={chairSvgPaths.p29db2040} id="Vector" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TareValue3({ isSelected, isMetric, displayValue }: { isSelected: boolean; isMetric: boolean; displayValue: string }) {
  return (
    <div className={`absolute ${isSelected ? 'bg-[#374267]' : 'bg-[#98b0d8]'} bottom-[10px] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] right-[8px] rounded-[4px] w-[136px]`} data-name="Tare Value">
      <div className={`basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 ${isSelected ? 'text-white' : 'text-[#191c24]'} text-[20px] text-center`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">-{displayValue} {isMetric ? 'kg' : 'lbs'}</p>
      </div>
    </div>
  );
}

function PreTare224X53({ onPreTareConfirm, isSelected, isMetric }: { onPreTareConfirm: (value: string) => void; isSelected: boolean; isMetric: boolean }) {
  const displayValue = isMetric ? '1.00' : '2.20';
  return (
    <div onClick={() => onPreTareConfirm('1.00')} className={`${isSelected ? 'bg-[#6e84cd]' : 'bg-white'} h-[52px] overflow-clip relative rounded-[4px] shrink-0 w-[224px] cursor-pointer ${!isSelected && 'hover:bg-gray-50'} transition-colors`} data-name="PreTare_224x52">
      <Chair36X36 isSelected={isSelected} />
      <TareValue3 isSelected={isSelected} isMetric={isMetric} displayValue={displayValue} />
      {isSelected && (
        <div className="absolute inset-0 pointer-events-none shadow-[1px_1px_1px_0px_inset_rgba(0,0,0,0.25),-1px_-1px_1px_0px_inset_rgba(255,255,255,0.5),-1px_-1px_4px_0px_inset_rgba(255,255,255,0.25),-4px_-5px_5px_0px_inset_rgba(255,255,255,0.25),5px_5px_6px_0px_inset_rgba(0,0,0,0.25),4px_6px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      )}
    </div>
  );
}

function Group1003({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute inset-[3.57%_14.29%_1.79%_14.29%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 35">
        <g id="Group 1003">
          <path d={svgPaths.p2b302e40} id="Rectangle 715" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
          <path d={svgPaths.p2521a900} id="Vector 264" stroke={isSelected ? "white" : "#191C24"} strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Mark36X36({ isSelected }: { isSelected: boolean }) {
  return (
    <div className="absolute left-[20px] size-[36px] top-[8px]" data-name="mark_36x36">
      <Group1003 isSelected={isSelected} />
    </div>
  );
}

function TareValue4({ isSelected, isMetric, displayValue }: { isSelected: boolean; isMetric: boolean; displayValue: string }) {
  return (
    <div className={`absolute ${isSelected ? 'bg-[#374267]' : 'bg-[#98b0d8]'} bottom-[10px] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[4px] right-[8px] rounded-[4px] w-[136px]`} data-name="Tare Value">
      <div className={`basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 ${isSelected ? 'text-white' : 'text-[#191c24]'} text-[20px] text-center`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">-{displayValue} {isMetric ? 'kg' : 'lbs'}</p>
      </div>
    </div>
  );
}

function PreTare224X54({ onPreTareConfirm, isSelected, isMetric }: { onPreTareConfirm: (value: string) => void; isSelected: boolean; isMetric: boolean }) {
  const displayValue = isMetric ? '2.00' : '4.41';
  return (
    <div onClick={() => onPreTareConfirm('2.00')} className={`${isSelected ? 'bg-[#6e84cd]' : 'bg-white'} h-[52px] overflow-clip relative rounded-[4px] shrink-0 w-[224px] cursor-pointer ${!isSelected && 'hover:bg-gray-50'} transition-colors`} data-name="PreTare_224x52">
      <Mark36X36 isSelected={isSelected} />
      <TareValue4 isSelected={isSelected} isMetric={isMetric} displayValue={displayValue} />
      {isSelected && (
        <div className="absolute inset-0 pointer-events-none shadow-[1px_1px_1px_0px_inset_rgba(0,0,0,0.25),-1px_-1px_1px_0px_inset_rgba(255,255,255,0.5),-1px_-1px_4px_0px_inset_rgba(255,255,255,0.25),-4px_-5px_5px_0px_inset_rgba(255,255,255,0.25),5px_5px_6px_0px_inset_rgba(0,0,0,0.25),4px_6px_4px_0px_inset_rgba(0,0,0,0.25)]" />
      )}
    </div>
  );
}

function Frame1262({ onPreTareToggle, activePreTareValues, isMetric }: { onPreTareToggle: (value: string) => void; activePreTareValues: string[]; isMetric: boolean }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start justify-end left-[8px] top-[8px]">
      <PreTare224X52 onPreTareConfirm={onPreTareToggle} isSelected={activePreTareValues.includes('0.50')} isMetric={isMetric} />
      <PreTare224X53 onPreTareConfirm={onPreTareToggle} isSelected={activePreTareValues.includes('1.00')} isMetric={isMetric} />
      <PreTare224X54 onPreTareConfirm={onPreTareToggle} isSelected={activePreTareValues.includes('2.00')} isMetric={isMetric} />
    </div>
  );
}

function PresetBg244X188({ onPreTareToggle, activePreTareValues, isMetric }: { onPreTareToggle: (value: string) => void; activePreTareValues: string[]; isMetric: boolean }) {
  return (
    <div className="absolute h-[188px] left-[15px] top-[228px] w-[240px]" data-name="Preset_bg_244x188">
      <div className="absolute bg-white inset-0 rounded-[8px]">
        <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_6px_0px_#191c24]" />
      </div>
      <Frame1262 onPreTareToggle={onPreTareToggle} activePreTareValues={activePreTareValues} isMetric={isMetric} />
    </div>
  );
}

function PreTare({ weight, onTareConfirm, onPreTareToggle, activePreTareValues, onManualTareClick, taredWeight, onWeightClick, isMetric, onInfoClick }: { weight: string; onTareConfirm: () => void; onPreTareToggle: (value: string) => void; activePreTareValues: string[]; onManualTareClick: () => void; taredWeight: string | null; onWeightClick?: () => void; isMetric: boolean; onInfoClick?: () => void }) {
  return (
    <div className="absolute bg-white h-[430px] left-0 top-[50px] w-[272px]" data-name="Pre-Tare">
      <TareBg241X96Wrapper weight={weight} onTareConfirm={onTareConfirm} onWeightClick={onWeightClick} isMetric={isMetric} onInfoClick={onInfoClick} />
      <TareBg241X97 onManualTareClick={onManualTareClick} taredWeight={taredWeight} isMetric={isMetric} />
      <PresetBg244X188 onPreTareToggle={onPreTareToggle} activePreTareValues={activePreTareValues} isMetric={isMetric} />
    </div>
  );
}

export default function PreTare1({ onBack, weight, onTareConfirm, onPreTareToggle, activePreTareValues, onManualTareClick, taredWeight, onWeightClick, isMetric, onInfoClick }: { onBack: () => void; weight: string; onTareConfirm: () => void; onPreTareToggle: (value: string) => void; activePreTareValues: string[]; onManualTareClick: () => void; taredWeight: string | null; onWeightClick?: () => void; isMetric: boolean; onInfoClick?: () => void }) {
  return (
    <div className="bg-[#e7ebf7] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px]" data-name="Pre-Tare">
      <PortraitHeaderWhite onBack={onBack} />
      <InfoSmall50X51 />
      <PreTare weight={weight} onTareConfirm={onTareConfirm} onPreTareToggle={onPreTareToggle} activePreTareValues={activePreTareValues} onManualTareClick={onManualTareClick} taredWeight={taredWeight} onWeightClick={onWeightClick} isMetric={isMetric} onInfoClick={onInfoClick} />
    </div>
  );
}