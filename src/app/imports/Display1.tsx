import svgPaths from "./svg-5i6pnqz2ht";

function ArrowForwardIos() {
  return (
    <div className="relative size-[26px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="arrow_forward_ios">
          <mask height="26" id="mask0_20_1376" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_20_1376)">
            <path d={svgPaths.p7c54c00} fill="var(--fill-0, white)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Back50X50() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%]" data-name="back_50x50">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

function Home50X50() {
  return (
    <div className="absolute left-[222px] size-[50px] top-0" data-name="home_50x50">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="home_50x50">
          <path d={svgPaths.p2fa81c00} fill="var(--fill-0, white)" id="home" />
        </g>
      </svg>
    </div>
  );
}

function LinearAdjustment() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" data-name="Linear Adjustment">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Display</p>
      </div>
    </div>
  );
}

function HeaderPortrait() {
  return (
    <div className="absolute bg-[#191c24] h-[50px] left-0 top-0 w-[272px]" data-name="Header (Portrait)">
      <Back50X50 />
      <Home50X50 />
      <LinearAdjustment />
    </div>
  );
}

function Background() {
  return <div className="absolute bg-white h-[416px] left-[6px] rounded-[8px] top-[calc(50%+26px)] translate-y-[-50%] w-[260px]" data-name="Background" />;
}

function MenuBackground() {
  return <div className="absolute bg-white inset-0 overflow-clip rounded-bl-[8px] rounded-br-[8px]" data-name="Menu_background" />;
}

function ArrowDropDown() {
  return (
    <div className="relative size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <mask height="24" id="mask0_20_1937" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" id="Bounding box" stroke="var(--stroke-0, black)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_20_1937)">
            <path d="M12 17.95L2 8H22L12 17.95Z" fill="var(--fill-0, #8B8D91)" id="arrow_drop_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PagingArrowTop50X50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] inset-[1.92%_74.61%_1.92%_6.15%] items-center justify-center" data-name="paging_arrow_top_50x50">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
}

function ArrowDropDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_drop_down">
          <mask height="24" id="mask0_20_1941" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" id="Bounding box" stroke="var(--stroke-0, black)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_20_1941)">
            <path d="M12 17.95L2 8H22L12 17.95Z" fill="var(--fill-0, #191C24)" id="arrow_drop_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PagingArrowBottom50X50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] inset-[1.92%_6.15%_1.92%_74.61%] items-center justify-center" data-name="paging_arrow_bottom_50x50">
      <ArrowDropDown1 />
    </div>
  );
}

function Frame1243() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-0 top-1/2 translate-y-[-50%] w-[24px]">
      <div className="bg-[#191c24] h-[8px] rounded-[4px] shrink-0 w-full" />
      <div className="bg-[#d9d9d9] rounded-[4px] shrink-0 size-[8px]" />
    </div>
  );
}

function PortraitPaging() {
  return (
    <div className="absolute inset-[19.23%_45.38%]" data-name="Portrait/paging">
      <Frame1243 />
    </div>
  );
}

function Group1165() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[422px] w-[260px]">
      <MenuBackground />
      <PagingArrowTop50X50 />
      <PagingArrowBottom50X50 />
      <PortraitPaging />
    </div>
  );
}

function MenuBackground1() {
  return (
    <div className="absolute bg-white h-[52px] left-0 overflow-clip rounded-tl-[8px] rounded-tr-[8px] top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText() {
  return (
    <div className="absolute h-[27px] left-[12px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Language</p>
      </div>
    </div>
  );
}

function Language24X24() {
  return (
    <div className="absolute left-[200px] size-[24px] top-1/2 translate-y-[-50%]" data-name="language_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="language_24x24">
          <rect fill="white" height="24" width="24" />
          <mask height="24" id="mask0_20_1933" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_1933)">
            <path d={svgPaths.p580740} fill="var(--fill-0, #8B8D91)" id="language" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowForwardIos3() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_20_1110" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_1110)">
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
          <ArrowForwardIos3 />
        </div>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="absolute h-[52px] left-[6px] overflow-clip top-[58px] w-[260px]" data-name="Menu Item">
      <MenuBackground1 />
      <MenuText />
      <Language24X24 />
      <GuideArrow24X24 />
    </div>
  );
}

function MenuBackground2() {
  return (
    <div className="absolute bg-white h-[52px] overflow-clip right-0 top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText1() {
  return (
    <div className="absolute h-[27px] right-[66px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Clear Values</p>
      </div>
    </div>
  );
}

function ArrowForwardIos5() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_20_1110" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_1110)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X25() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos5 />
        </div>
      </div>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[162px] w-[260px]" data-name="Menu Item">
      <MenuBackground2 />
      <MenuText1 />
      <GuideArrow24X25 />
    </div>
  );
}

function MenuBackground3() {
  return (
    <div className="absolute bg-white h-[52px] overflow-clip right-0 top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText2() {
  return (
    <div className="absolute h-[27px] right-[66px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Brightness</p>
      </div>
    </div>
  );
}

function ArrowForwardIos7() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_20_1110" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_1110)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X26() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos7 />
        </div>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[214px] w-[260px]" data-name="Menu Item">
      <MenuBackground3 />
      <MenuText2 />
      <GuideArrow24X26 />
    </div>
  );
}

function MenuBackground4() {
  return (
    <div className="absolute bg-white h-[52px] overflow-clip right-0 top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText3() {
  return (
    <div className="absolute h-[27px] right-[66px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Standby</p>
      </div>
    </div>
  );
}

function ArrowForwardIos9() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_20_1110" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_1110)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X27() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos9 />
        </div>
      </div>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[266px] w-[260px]" data-name="Menu Item">
      <MenuBackground4 />
      <MenuText3 />
      <GuideArrow24X27 />
    </div>
  );
}

function MenuBackground5() {
  return (
    <div className="absolute bg-white h-[52px] overflow-clip right-0 top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText4() {
  return (
    <div className="absolute h-[27px] right-[66px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Name Format</p>
      </div>
    </div>
  );
}

function ArrowForwardIos11() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_20_1110" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_1110)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X28() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos11 />
        </div>
      </div>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[318px] w-[260px]" data-name="Menu Item">
      <MenuBackground5 />
      <MenuText4 />
      <GuideArrow24X28 />
    </div>
  );
}

function MenuBackground6() {
  return (
    <div className="absolute bg-white h-[52px] overflow-clip right-0 top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText5() {
  return (
    <div className="absolute h-[27px] right-[66px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Date Format</p>
      </div>
    </div>
  );
}

function ArrowForwardIos13() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_20_1110" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_1110)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X29() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos13 />
        </div>
      </div>
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[370px] w-[260px]" data-name="Menu Item">
      <MenuBackground6 />
      <MenuText5 />
      <GuideArrow24X29 />
    </div>
  );
}

function MenuBackground7() {
  return (
    <div className="absolute bg-white h-[52px] overflow-clip right-0 top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText6() {
  return (
    <div className="absolute h-[27px] right-[66px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Units</p>
      </div>
    </div>
  );
}

function ArrowForwardIos15() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_20_1110" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_20_1110)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X30() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos15 />
        </div>
      </div>
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[110px] w-[260px]" data-name="Menu Item">
      <MenuBackground7 />
      <MenuText6 />
      <GuideArrow24X30 />
    </div>
  );
}

export default function Display1() {
  return (
    <div className="bg-[#191c24] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Display_1">
      <HeaderPortrait />
      <Background />
      <Group1165 />
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem5 />
      <MenuItem6 />
    </div>
  );
}