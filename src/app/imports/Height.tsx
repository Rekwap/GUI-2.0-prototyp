import svgPaths from "./svg-sic50hswdh";

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[71px] items-center justify-end right-[7px] top-[78px] w-[246px]">
      <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#191c24] text-[83px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        0.0
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents right-[7px] top-[78px]">
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[27px] leading-[normal] right-[10px] text-[#191c24] text-[20px] text-right top-[157px] w-[79px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        cm
      </p>
      <Frame />
    </div>
  );
}

function LibaryWeightDetails() {
  return (
    <div className="absolute bg-[#e7ebf7] bottom-[198px] h-[224px] overflow-clip right-[6px] rounded-[12px] w-[260px]" data-name="libary_Weight + Details">
      <Group />
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_46_395" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_46_395)">
            <path d={svgPaths.p1c2bdd80} fill="var(--fill-0, #191C24)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X() {
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

function PortraitHeaderWhite() {
  return (
    <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Height</p>
      </div>
      <div className="absolute flex items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <GuideArrow24X />
        </div>
      </div>
    </div>
  );
}

function TactileHeightMeasurement() {
  return (
    <div className="absolute left-1/2 size-[80px] top-[290px] translate-x-[-50%]" data-name="Tactile Height Measurement">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Tactile Height Measurement">
          <path d="M59 43.5V70H67V42.5" id="Vector 87" stroke="var(--stroke-0, #191C24)" strokeWidth="2" />
          <path d={svgPaths.p3cd37b80} fill="var(--fill-0, #191C24)" id="Vector 88" stroke="var(--stroke-0, #191C24)" strokeWidth="2" />
          <g id="Group 746">
            <path d="M23 38C23 46.5 26.4 64 50 64" id="Vector 88_2" stroke="var(--stroke-0, #191C24)" strokeWidth="2" />
            <path d={svgPaths.p2e322200} fill="var(--fill-0, #191C24)" id="Polygon 9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Height() {
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Height">
      <LibaryWeightDetails />
      <PortraitHeaderWhite />
      <TactileHeightMeasurement />
      <p className="absolute bottom-[106px] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[27px] leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center translate-x-[-50%] translate-y-[100%] w-[240px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Fold up tactile height rod
      </p>
    </div>
  );
}