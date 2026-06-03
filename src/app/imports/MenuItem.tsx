import svgPaths from "./svg-1yp8ussmlm";

function MenuBackground() {
  return (
    <div className="absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText() {
  return (
    <div className="absolute h-[27px] left-[12px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[188px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Info</p>
      </div>
    </div>
  );
}

function ArrowForwardIos1() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_20_760" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_760)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X24() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos1 />
        </div>
      </div>
    </div>
  );
}

export default function MenuItem() {
  return (
    <div className="relative size-full" data-name="Menu Item">
      <MenuBackground />
      <div className="absolute bg-[#c9cacb] h-[44px] left-[1.92%] right-[1.92%] rounded-[4px] top-[4px]" />
      <MenuText />
      <GuideArrow24X24 />
    </div>
  );
}