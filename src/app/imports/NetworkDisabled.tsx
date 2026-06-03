import svgPaths from "./svg-mpazj8btvl";

function ArrowForwardIos() {
  return (
    <div className="relative size-[26px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="arrow_forward_ios">
          <mask height="26" id="mask0_40_1102" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_40_1102)">
            <path d={svgPaths.p7c54c00} fill="var(--fill-0, white)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Back50X() {
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

function Home50X() {
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
        <p className="leading-[normal]">Network</p>
      </div>
    </div>
  );
}

function HeaderPortrait() {
  return (
    <div className="absolute bg-[#191c24] h-[50px] left-0 top-0 w-[272px]" data-name="Header (Portrait)">
      <Back50X />
      <Home50X />
      <LinearAdjustment />
    </div>
  );
}

function Background() {
  return <div className="absolute bg-white h-[416px] left-[6px] rounded-[8px] top-[calc(50%+26px)] translate-y-[-50%] w-[260px]" data-name="Background" />;
}

function MenuBackground() {
  return (
    <div className="absolute bg-white h-[52px] left-0 overflow-clip rounded-tl-[8px] rounded-tr-[8px] top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function Language() {
  return (
    <div className="absolute h-[27px] left-[12px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="language">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Enable WiFi</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 24">
        <g id="Frame 1081">
          <path d={svgPaths.p294859b0} fill="var(--fill-0, #8B8D91)" id="Rectangle 604" />
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 101" r="10" />
          <path d={svgPaths.p84e2b80} fill="var(--fill-0, #8B8D91)" id="close (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function ToggleButtons50X() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[24px] items-center right-[12px] top-1/2 translate-y-[-50%]" data-name="toggle buttons_50x24">
      <Frame />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="absolute h-[52px] left-[6px] overflow-clip top-[58px] w-[260px]" data-name="Menu Item">
      <MenuBackground />
      <Language />
      <ToggleButtons50X />
    </div>
  );
}

function MenuBackground1() {
  return (
    <div className="absolute bg-white h-[52px] overflow-clip right-0 top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText() {
  return (
    <div className="absolute h-[27px] right-[66px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" data-name="Menu text">
      <div className="absolute bottom-[7.41%] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 not-italic right-0 text-[#191c24] text-[20px] top-[3.7%]">
        <p className="leading-[normal]">Server Connection</p>
      </div>
    </div>
  );
}

function ArrowForwardIos1() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_40_1083" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_40_1083)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X() {
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

function MenuItem1() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[162px] w-[260px]" data-name="Menu Item">
      <MenuBackground1 />
      <MenuText />
      <GuideArrow24X />
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
      <div className="absolute bottom-[7.41%] flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 not-italic right-0 text-[#191c24] text-[20px] top-[3.7%]">
        <p className="leading-[normal]">Identification</p>
      </div>
    </div>
  );
}

function ArrowForwardIos2() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_40_1083" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_40_1083)">
            <path d={svgPaths.p11310700} fill="var(--fill-0, #8B8D91)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function GuideArrow24X1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[7px] size-[24px] top-1/2 translate-y-[-50%]" data-name="guide arrow_24x24">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <ArrowForwardIos2 />
        </div>
      </div>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="absolute h-[52px] left-[6px] top-[214px] w-[260px]" data-name="Menu Item">
      <MenuBackground2 />
      <MenuText1 />
      <GuideArrow24X1 />
    </div>
  );
}

function MenuBackground3() {
  return <div className="absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px]" data-name="Menu_background" />;
}

function MenuItem3() {
  return (
    <div className="absolute h-[52px] left-[6px] overflow-clip top-[266px] w-[260px]" data-name="Menu Item">
      <MenuBackground3 />
    </div>
  );
}

function MenuBackground4() {
  return <div className="absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px]" data-name="Menu_background" />;
}

function MenuItem4() {
  return (
    <div className="absolute h-[52px] left-[6px] overflow-clip top-[318px] w-[260px]" data-name="Menu Item">
      <MenuBackground4 />
    </div>
  );
}

function MenuBackground5() {
  return <div className="absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px]" data-name="Menu_background" />;
}

function MenuItem5() {
  return (
    <div className="absolute h-[52px] left-[6px] overflow-clip top-[370px] w-[260px]" data-name="Menu Item">
      <MenuBackground5 />
    </div>
  );
}

function MenuBackground6() {
  return (
    <div className="absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="absolute h-[52px] left-[6px] overflow-clip top-[110px] w-[260px]" data-name="Menu Item">
      <MenuBackground6 />
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[12px] text-[#8b8d91] text-[20px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[182px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">WiFi Connection</p>
      </div>
    </div>
  );
}

export default function NetworkDisabled() {
  return (
    <div className="bg-[#191c24] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Network_disabled">
      <HeaderPortrait />
      <Background />
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