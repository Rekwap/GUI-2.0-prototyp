import svgPaths from "./svg-erwvuembw9";

function TechnicalWeighingDataPortrait() {
  return (
    <div className="absolute h-[36px] left-[16px] top-[12px] w-[228px]" data-name="Technical Weighing Data (Portrait)">
      <p className="absolute bottom-[5.26%] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-0 right-[25.27%] text-[#656d89] text-[13px] top-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Max 360 kg
      </p>
    </div>
  );
}

function Locked24X24() {
  return (
    <div className="absolute right-[51px] size-[24px] top-[174px]" data-name="locked_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="locked_24x24">
          <path d={svgPaths.p1025e600} fill="var(--fill-0, #656D89)" id="lock" />
        </g>
      </svg>
    </div>
  );
}

function Frame1256() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[71px] items-center justify-end left-[13px] top-[97px] w-[246px]">
      <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#191c24] text-[83px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        54.80
      </p>
    </div>
  );
}

export default function LibaryWeightDetails() {
  return (
    <div className="bg-[#e7ebf7] relative size-full" data-name="libary_Weight + Details">
      <TechnicalWeighingDataPortrait />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[256px] size-[27px] text-[#191c24] text-[20px] text-right top-[176px] translate-x-[-100%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        kg
      </p>
      <Locked24X24 />
      <Frame1256 />
    </div>
  );
}