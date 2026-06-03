import svgPaths from "./svg-ksf91knyxw";

function Group() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16.994px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 24">
        <g id="Group 1232">
          <path d={svgPaths.p32824040} fill="var(--stroke-0, #8B8D91)" id="Arrow 1" />
          <line id="Line 3" stroke="var(--stroke-0, #8B8D91)" x1="10.9939" x2="16.9939" y1="0.5" y2="0.5" />
          <line id="Line 4" stroke="var(--stroke-0, #8B8D91)" x1="10.9939" x2="16.9939" y1="23.5" y2="23.5" />
          <path d={svgPaths.p1457d980} fill="var(--fill-0, #8B8D91)" id="Vector" />
          <ellipse cx="4.80081" cy="2.00002" fill="var(--fill-0, #8B8D91)" id="Ellipse 3" rx="1.99998" ry="2.00002" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative w-[24px]">
      <Group />
    </div>
  );
}

export default function Bmi({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="bg-white relative rounded-[18px] size-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="BMI">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#d9d9d9] h-[44px] left-[-16px] top-[44px] w-[87px]" />
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-1/2 top-[53px] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <Frame />
          </div>
        </div>
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(50%+13.5px)] top-[calc(50%-22px)] translate-x-[-100%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "40", "--transform-inner-height": "23" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] relative text-[#191c24] text-[20px] text-nowrap text-right" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              <p className="leading-[normal] whitespace-pre">BSA</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}