import React, { useState } from 'react';
import svgPaths from "../imports/svg-r310f5omvr";

interface ManualTareInputProps {
  onBack: () => void;
  onConfirm: (value: string) => void;
  initialValue?: string | null;
  isMetric: boolean;
}

export default function ManualTareInput({ onBack, onConfirm, initialValue, isMetric }: ManualTareInputProps) {
  // Convert initial value if needed
  const getInitialDisplayValue = () => {
    if (!initialValue) return '';
    if (!isMetric) {
      // Convert kg to lbs for display
      const lbs = parseFloat(initialValue) * 2.20462;
      return lbs.toFixed(2);
    }
    return initialValue;
  };
  
  const [inputValue, setInputValue] = useState(getInitialDisplayValue());

  const handleNumberClick = (num: string) => {
    // Allow max 5 characters (e.g., "999.9" or "99.99")
    if (inputValue.length < 5) {
      setInputValue(prev => prev + num);
    }
  };

  const handleDecimalClick = () => {
    // Only add decimal if not already present and there's already input
    if (!inputValue.includes('.') && inputValue.length > 0) {
      setInputValue(prev => prev + '.');
    }
  };

  const handleBackspace = () => {
    setInputValue(prev => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    // Prevent confirming just a decimal point
    if (inputValue === '.') {
      return;
    }
    
    // Convert value if imperial
    let valueToSend = inputValue || '0';
    if (!isMetric) {
      // Convert lbs to kg
      const lbs = parseFloat(valueToSend);
      const kg = lbs / 2.20462;
      valueToSend = kg.toFixed(2);
    }
    
    onConfirm(valueToSend);
  };

  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[272px] h-[480px]" data-name="10px unterkante">
      {/* Header */}
      <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">Manual Tare</p>
        </div>
        <button onClick={onBack} className="absolute flex items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%] cursor-pointer">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-visible p-0 relative size-[50px]">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none scale-y-[-100%]">
                  <div className="relative size-[24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p1c2bdd80} fill="var(--fill-0, #191C24)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Menu Item - Display Area */}
      <div className="absolute bg-white bottom-[318px] h-[104px] left-1/2 rounded-[6px] translate-x-[-50%] w-[268px]" data-name="Menu Item">
        <div className="h-[104px] overflow-clip relative rounded-[inherit] w-[268px]">
          {/* Delete/Clear Button (X) */}
          {inputValue && inputValue !== '0' && (
            <button 
              onClick={() => setInputValue('')} 
              className="absolute content-stretch flex gap-[10px] items-center justify-center left-[calc(50%-109px)] size-[50px] top-[31px] translate-x-[-50%] cursor-pointer z-10" 
              data-name="close_50x50"
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p167351a0} fill="var(--fill-0, #191C24)" />
                </svg>
              </div>
            </button>
          )}

          {/* Input Display Value */}
          <div className="absolute flex flex-col font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+0.5px)] text-[48px] text-black text-center text-nowrap top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[normal] whitespace-pre">{inputValue || '0'}</p>
          </div>

          {/* Unit Label */}
          <div className="absolute h-[27px] left-[180px] top-[76px] w-[88px]" />
          <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[calc(50%+122px)] text-[#191c24] text-[20px] text-right top-[calc(50%+3.5px)] translate-x-[-100%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[normal]">{isMetric ? 'kg' : 'lbs'}</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e6e7ea] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.75)]" />
      </div>

      {/* Keyboard */}
      <div className="absolute h-[314px] left-0 top-[162px] w-[272px]">
        {/* Key Buttons Backgrounds - Row 4 (top) */}
        <div className="absolute bg-white bottom-[248px] h-[60px] left-[2px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>
        <div className="absolute bg-white bottom-[248px] h-[60px] left-[92px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>
        <div className="absolute bg-white bottom-[248px] h-[60px] left-[182px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>

        {/* Key Buttons Backgrounds - Row 3 */}
        <div className="absolute bg-white bottom-[186px] h-[60px] left-[2px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>
        <div className="absolute bg-white bottom-[186px] h-[60px] left-[92px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>
        <div className="absolute bg-white bottom-[186px] h-[60px] left-[182px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>

        {/* Key Buttons Backgrounds - Row 2 */}
        <div className="absolute bg-white bottom-[124px] h-[60px] left-[2px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>
        <div className="absolute bg-white bottom-[124px] h-[60px] left-[92px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>
        <div className="absolute bg-white bottom-[124px] h-[60px] left-[182px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>

        {/* Key Buttons Backgrounds - Row 1 (bottom) */}
        <div className="absolute bg-white bottom-[62px] h-[60px] left-[calc(50%-90px)] rounded-[6px] translate-x-[-50%] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>
        <div className="absolute bg-white bottom-[62px] h-[60px] left-[92px] rounded-[6px] w-[88px]">
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </div>

        {/* Numbers - Row 4: 1, 2, 3 */}
        <button 
          onClick={() => handleNumberClick('1')} 
          className="absolute bottom-[248px] h-[60px] left-[2px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            1
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('2')} 
          className="absolute bottom-[248px] h-[60px] left-[92px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            2
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('3')} 
          className="absolute bottom-[248px] h-[60px] left-[182px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            3
          </p>
        </button>

        {/* Numbers - Row 3: 4, 5, 6 */}
        <button 
          onClick={() => handleNumberClick('4')} 
          className="absolute bottom-[186px] h-[60px] left-[2px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            4
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('5')} 
          className="absolute bottom-[186px] h-[60px] left-[92px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            5
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('6')} 
          className="absolute bottom-[186px] h-[60px] left-[182px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            6
          </p>
        </button>

        {/* Numbers - Row 2: 7, 8, 9 */}
        <button 
          onClick={() => handleNumberClick('7')} 
          className="absolute bottom-[124px] h-[60px] left-[2px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            7
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('8')} 
          className="absolute bottom-[124px] h-[60px] left-[92px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            8
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('9')} 
          className="absolute bottom-[124px] h-[60px] left-[182px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            9
          </p>
        </button>

        {/* Bottom Row: Decimal Point, 0, Backspace */}
        {/* Decimal Point */}
        <button 
          onClick={handleDecimalClick} 
          className="absolute bottom-[62px] h-[60px] left-[calc(50%-90px)] rounded-[6px] translate-x-[-50%] w-[88px] flex items-center justify-center z-10 cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[49.286px] leading-[normal] text-[#191c24] text-[24px] text-center w-[49.28px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            .
          </p>
        </button>

        {/* 0 Button */}
        <button 
          onClick={() => handleNumberClick('0')} 
          className="absolute bottom-[62px] h-[60px] left-[92px] w-[88px] flex items-center justify-center z-10 rounded-[6px] cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            0
          </p>
        </button>

        {/* Backspace Button */}
        <button 
          onClick={handleBackspace} 
          className="absolute bg-white bottom-[62px] h-[60px] left-[182px] rounded-[6px] w-[88px] cursor-pointer z-10 hover:bg-gray-100 transition-colors"
        >
          <div className="h-[60px] overflow-clip relative rounded-[inherit] w-[88px]">
            <div className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1b79600} fill="var(--fill-0, #191C24)" />
                </svg>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </button>

        {/* Confirm Button (blue check button) */}
        <button 
          onClick={handleConfirm} 
          className="absolute bg-[#98b0d8] bottom-[4px] h-[56px] left-1/2 rounded-[8px] translate-x-[-50%] w-[268px] cursor-pointer hover:bg-[#8aa0c8] transition-colors z-10"
        >
          <div className="h-[56px] overflow-clip relative rounded-[inherit] w-[268px]">
            <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3f798800} fill="var(--fill-0, #241919)" />
              </svg>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#aec6ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </button>
      </div>
    </div>
  );
}