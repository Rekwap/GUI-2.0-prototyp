import React, { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-r310f5omvr";

interface ManualHeightInputProps {
  onBack: () => void;
  onClose: () => void;
  onConfirm: (value: string) => void;
  initialValue?: string | null;
  isMetric: boolean;
}

export default function ManualHeightInput({ onBack, onClose, onConfirm, initialValue, isMetric }: ManualHeightInputProps) {
  // Convert initial value if needed
  const getInitialDisplayValue = () => {
    if (!initialValue) return '0';
    if (!isMetric) {
      // Convert cm to total inches for display
      const totalInches = parseFloat(initialValue) / 2.54;
      const feet = Math.floor(totalInches / 12);
      const remainingInches = totalInches % 12;
      const wholeInches = Math.floor(remainingInches);
      const fractionalPart = remainingInches - wholeInches;
      
      // Convert fractional part to eighths
      const eighths = Math.round(fractionalPart * 8);
      
      if (eighths === 0) {
        return `${feet}'${wholeInches}"`;
      } else {
        // Map eighths to fraction Unicode characters
        const fractionMap: { [key: number]: string } = {
          1: '⅛',
          2: '¼',
          3: '⅜',
          4: '½',
          5: '⅝',
          6: '¾',
          7: '⅞'
        };
        return `${feet}'${wholeInches}" ${fractionMap[eighths] || ''}`;
      }
    }
    return initialValue;
  };
  
  const [inputValue, setInputValue] = useState(getInitialDisplayValue());
  const [imperialStep, setImperialStep] = useState<'feet' | 'inches' | 'eighths'>('feet');

  // Auto-add ' after first digit in imperial mode
  useEffect(() => {
    if (!isMetric && imperialStep === 'feet' && inputValue.length > 0 && inputValue !== '0' && !inputValue.includes("'")) {
      // Check if we have 1-2 digits entered (feet)
      const digitsOnly = inputValue.replace(/[^0-9]/g, '');
      if (digitsOnly.length > 0 && digitsOnly.length <= 2) {
        // When user types first digit for feet, add the ' and move to inches step
        setInputValue(digitsOnly + "'");
        setImperialStep('inches');
      }
    }
  }, [inputValue, isMetric, imperialStep]);

  // Check if we're in eighths mode (after " is added)
  const isEighthsMode = !isMetric && inputValue.includes('"') && !inputValue.includes(' ');
  
  // Check if an eighth has already been entered
  const hasEighth = !isMetric && inputValue.includes('" ');

  // Map numbers to eighths Unicode fractions
  const eighthsMap: { [key: string]: string } = {
    '1': '⅛',
    '2': '¼',
    '3': '⅜',
    '4': '½',
    '5': '⅝',
    '6': '¾',
    '7': '⅞'
  };

  const handleNumberClick = (num: string) => {
    if (isMetric) {
      // Metric mode: allow max 5 characters (e.g., "999.9" or "199.5")
      if (inputValue.length < 5) {
        // If input is empty or just "0", replace with the number
        if (!inputValue || inputValue === '0') {
          setInputValue(num);
        } else {
          setInputValue(prev => prev + num);
        }
      }
    } else {
      // Imperial mode: wizard flow
      if (imperialStep === 'feet') {
        // Allow up to 2 digits for feet
        const currentFeet = inputValue.replace(/[^0-9]/g, '');
        if (currentFeet.length < 2) {
          // If input is empty or just "0", replace with the number
          if (!inputValue || inputValue === '0') {
            setInputValue(num);
          } else {
            setInputValue(prev => prev + num);
          }
        }
      } else if (imperialStep === 'inches') {
        // inches step - allow up to 2 digits after the '
        const parts = inputValue.split("'");
        const inchPart = parts[1] ? parts[1].replace(/"/g, '') : '';
        if (inchPart.length < 2) {
          // Remove trailing " if exists, add number, then add " back
          const withoutQuote = inputValue.replace(/"/g, '');
          const newValue = withoutQuote + num + '"';
          setInputValue(newValue);
          // After adding ", move to eighths step
          if (!withoutQuote.includes('"')) {
            setImperialStep('eighths');
          }
        }
      } else if (imperialStep === 'eighths') {
        // Only allow 1-7 for eighths, and only if no eighth already entered
        if (['1', '2', '3', '4', '5', '6', '7'].includes(num) && !hasEighth) {
          // Add the fraction
          const fraction = eighthsMap[num];
          setInputValue(prev => prev + ' ' + fraction);
        }
        // 8, 9, 0 do nothing in eighths mode
      }
    }
  };

  const handleDecimalClick = () => {
    if (isMetric) {
      // Only add decimal if not already present and there's already input
      if (!inputValue.includes('.') && inputValue.length > 0) {
        setInputValue(prev => prev + '.');
      }
    }
    // In imperial mode, decimal is not used
  };

  const handleBackspace = () => {
    if (!isMetric) {
      // Imperial mode - handle backspace with wizard logic
      const newValue = inputValue.slice(0, -1);
      setInputValue(newValue);
      
      // Update step based on what's in the value
      if (newValue.includes('" ')) {
        // Still in eighths mode with partial fraction
        setImperialStep('eighths');
      } else if (newValue.includes('"')) {
        // Back to eighths mode (just deleted the fraction)
        setImperialStep('eighths');
      } else if (newValue.includes("'")) {
        // Back to inches mode
        setImperialStep('inches');
      } else {
        // Back to feet mode
        setImperialStep('feet');
      }
    } else {
      setInputValue(prev => prev.slice(0, -1));
    }
  };

  const handleConfirm = () => {
    // Prevent confirming just a decimal point or empty
    if (inputValue === '.' || inputValue === "'" || !inputValue) {
      return;
    }
    
    // Convert value if imperial
    let valueToSend = inputValue || '0';
    if (!isMetric) {
      // Parse feet, inches, and eighths from format f'i" f/8 (e.g., "5'6" ½")
      const parts = inputValue.split("'");
      const feet = parseInt(parts[0] || '0');
      
      // Split the inch part by " to separate inches from fraction
      const inchParts = (parts[1] || '').split('"');
      const inchesStr = inchParts[0] || '0';
      const inches = parseInt(inchesStr);
      
      // Parse the fraction if present
      let fractionalInches = 0;
      if (inchParts[1] && inchParts[1].trim()) {
        const fractionStr = inchParts[1].trim();
        // Map Unicode fractions back to decimal
        const fractionValues: { [key: string]: number } = {
          '⅛': 0.125,
          '¼': 0.25,
          '⅜': 0.375,
          '½': 0.5,
          '⅝': 0.625,
          '¾': 0.75,
          '⅞': 0.875,
          // Also support text fractions for backwards compatibility
          '1/8': 0.125,
          '1/4': 0.25,
          '3/8': 0.375,
          '1/2': 0.5,
          '5/8': 0.625,
          '3/4': 0.75,
          '7/8': 0.875
        };
        fractionalInches = fractionValues[fractionStr] || 0;
      }
      
      const totalInches = feet * 12 + inches + fractionalInches;
      const cm = totalInches * 2.54;
      valueToSend = cm.toFixed(1);
    }
    
    onConfirm(valueToSend);
  };

  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[272px] h-[480px]" data-name="10px unterkante">
      {/* Header */}
      <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">Height</p>
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
          {inputValue && inputValue !== '0' && !(inputValue === "'" || inputValue === '"') && (
            <button 
              onClick={() => {
                setInputValue('0');
                if (!isMetric) setImperialStep('feet');
              }} 
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
            <p className="leading-[normal] whitespace-pre">{inputValue.length > 0 ? inputValue : '0'}</p>
          </div>

          {/* Unit Label */}
          <div className="absolute h-[27px] left-[180px] top-[76px] w-[88px]" />
          <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[calc(50%+122px)] text-[#191c24] text-[20px] text-right top-[calc(50%+3.5px)] translate-x-[-100%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[normal]">{isMetric ? 'cm' : "ft'in"}</p>
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
          className={`absolute bottom-[248px] h-[60px] left-[2px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '⅛' : '1'}
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('2')} 
          className={`absolute bottom-[248px] h-[60px] left-[92px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '¼' : '2'}
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('3')} 
          className={`absolute bottom-[248px] h-[60px] left-[182px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '⅜' : '3'}
          </p>
        </button>

        {/* Numbers - Row 3: 4, 5, 6 */}
        <button 
          onClick={() => handleNumberClick('4')} 
          className={`absolute bottom-[186px] h-[60px] left-[2px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '½' : '4'}
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('5')} 
          className={`absolute bottom-[186px] h-[60px] left-[92px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '⅝' : '5'}
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('6')} 
          className={`absolute bottom-[186px] h-[60px] left-[182px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '¾' : '6'}
          </p>
        </button>

        {/* Numbers - Row 2: 7, 8, 9 */}
        <button 
          onClick={() => handleNumberClick('7')} 
          className={`absolute bottom-[124px] h-[60px] left-[2px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '⅞' : '7'}
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('8')} 
          className={`absolute bottom-[124px] h-[60px] left-[92px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${isEighthsMode || hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={isEighthsMode || hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '' : '8'}
          </p>
        </button>

        <button 
          onClick={() => handleNumberClick('9')} 
          className={`absolute bottom-[124px] h-[60px] left-[182px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${isEighthsMode || hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={isEighthsMode || hasEighth}
        >
          <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] text-[#191c24] text-[24px] text-center w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {isEighthsMode && !hasEighth ? '' : '9'}
          </p>
        </button>

        {/* Bottom Row: Decimal Point, 0, Backspace */}
        {/* Decimal Point (only in metric mode) */}
        {isMetric && (
          <button 
            onClick={handleDecimalClick} 
            className="absolute bottom-[62px] h-[60px] left-[calc(50%-90px)] rounded-[6px] translate-x-[-50%] w-[88px] flex items-center justify-center z-10 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <p className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[49.286px] leading-[normal] text-[#191c24] text-[24px] text-center w-[49.28px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              .
            </p>
          </button>
        )}

        {/* 0 Button */}
        <button 
          onClick={() => handleNumberClick('0')} 
          className={`absolute bottom-[62px] h-[60px] left-[92px] w-[88px] flex items-center justify-center z-10 rounded-[6px] ${isEighthsMode || hasEighth ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-gray-100 transition-colors'}`}
          disabled={isEighthsMode || hasEighth}
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
