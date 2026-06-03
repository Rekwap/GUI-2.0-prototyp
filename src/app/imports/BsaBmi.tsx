import svgPaths from "./svg-mlzd8i159h";

function BsaIcon({ color }: { color: string }) {
  return (
    <div className="h-[24px] relative shrink-0 w-[16.994px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 24">
        <g id="Group 1232">
          <path d={svgPaths.p32824040} fill={color} id="Arrow 1" />
          <line id="Line 3" stroke={color} x1="10.9939" x2="16.9939" y1="0.5" y2="0.5" />
          <line id="Line 4" stroke={color} x1="10.9939" x2="16.9939" y1="23.5" y2="23.5" />
          <path d={svgPaths.p1457d980} fill={color} id="Vector" />
          <ellipse cx="4.80081" cy="2.00002" fill={color} id="Ellipse 3" rx="1.99998" ry="2.00002" />
        </g>
      </svg>
    </div>
  );
}

export default function BsaBmi({ onClick, displayLabel }: { onClick?: () => void; displayLabel: string }) {
  // displayLabel ist der AKTIVE Wert (was gerade angezeigt wird)
  // BMI = grauer Hintergrund oben (bei BMI)
  // BSA/m² = grauer Hintergrund unten (bei BSA)
  const isBmi = displayLabel === "BMI";
  const textColor = "#191C24"; // Der angezeigte Text ist immer schwarz (aktiv)
  const iconColor = "#8B8D91"; // Icon ist immer grau

  return (
    <div 
      onClick={onClick} 
      className="bg-white h-[88px] relative rounded-full w-[40px] cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="BSA / BMI"
    >
      <div className="h-[88px] overflow-clip relative rounded-full w-[40px]">
        {/* Grauer Hintergrund - oben für BMI, unten für BSA/m² */}
        <div 
          className="absolute bg-[#d9d9d9] h-[44px] w-[87px]" 
          style={{ 
            top: isBmi ? '44px' : '0px',
            ...(isBmi ? { right: '-16px' } : { left: '-16px' })
          }}
        />
        
        {/* Icon - fest positioniert, immer grau */}
        <div className="absolute left-1/2 top-[53px] -translate-x-1/2">
          <div className="rotate-90">
            <BsaIcon color={iconColor} />
          </div>
        </div>
        
        {/* Text - fest positioniert, immer schwarz */}
        <div className="absolute left-1/2 top-[22px] -translate-x-1/2">
          <div className="rotate-90">
            <p 
              className="font-['Noto_Sans:Display_Medium',_sans-serif] font-medium text-[16px] w-[40px] text-center"
              style={{ 
                fontVariationSettings: "'CTGR' 100, 'wdth' 100",
                color: textColor,
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