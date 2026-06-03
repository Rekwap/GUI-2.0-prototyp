import svgPaths from "./svg-h9j444dobs";

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

function PortraitHeaderWhite() {
  return (
    <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Height</p>
      </div>
      <div className="absolute flex items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <GuideArrow24X24 />
        </div>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <mask height="24" id="mask0_3_1707" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1707)">
            <path d={svgPaths.p167351a0} fill="var(--fill-0, #191C24)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close50X50() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[calc(50%-109px)] size-[50px] top-0 translate-x-[-50%]" data-name="close_50x50">
      <Close />
    </div>
  );
}

function Frame1109() {
  return (
    <div className="absolute h-[27px] left-[180px] top-[127px] w-[88px]">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[20px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[88px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">ft’in</p>
      </div>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="absolute bg-white bottom-[256px] h-[166px] left-1/2 rounded-[6px] translate-x-[-50%] w-[268px]" data-name="Menu Item">
      <div className="h-[166px] overflow-clip relative rounded-[inherit] w-[268px]">
        <Close50X50 />
        <Frame1109 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e7ea] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.75)]" />
    </div>
  );
}

function Backspace() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="backspace">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="backspace">
          <mask height="24" id="mask0_3_1703" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1703)">
            <path d={svgPaths.p1b79600} fill="var(--fill-0, #191C24)" id="backspace_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function KeyboardBack24X24() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[24px] top-[calc(50%-0.12px)] translate-x-[-50%] translate-y-[-50%]" data-name="keyboard_back_24x24">
      <Backspace />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-[#c9cacb] bottom-[1.76px] h-[60.241px] left-[2px] rounded-[6px] w-[88px]" data-name=".">
      <div className="h-[60.241px] overflow-clip relative rounded-[inherit] w-[88px]">
        <KeyboardBack24X24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Group1094() {
  return (
    <div className="absolute bottom-[1.76px] contents left-[2px]">
      <Component />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-white bottom-[64px] h-[60px] left-[2px] rounded-[6px] w-[88px]" data-name="7">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component601() {
  return (
    <div className="absolute bg-white bottom-[126px] h-[60px] left-[2px] rounded-[6px] w-[88px]" data-name="601">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component602() {
  return (
    <div className="absolute bg-white bottom-[188px] h-[60px] left-[2px] rounded-[6px] w-[88px]" data-name="602">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-white bottom-[64px] h-[60px] left-[182px] rounded-[6px] w-[88px]" data-name="9">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute bg-white bottom-[126px] h-[60px] left-[182px] rounded-[6px] w-[88px]" data-name="6">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component603() {
  return (
    <div className="absolute bg-white bottom-[188px] h-[60px] left-[182px] rounded-[6px] w-[88px]" data-name="603">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component0() {
  return (
    <div className="absolute bg-white bottom-[2px] h-[60px] left-[92px] rounded-[6px] w-[88px]" data-name="0">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-white bottom-[64px] h-[60px] left-[92px] rounded-[6px] w-[88px]" data-name="8">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-[#c9cacb] bottom-[126px] h-[60px] left-[92px] rounded-[6px] w-[88px]" data-name="5">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component604() {
  return (
    <div className="absolute bg-white bottom-[188px] h-[60px] left-[92px] rounded-[6px] w-[88px]" data-name="604">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Check24X24() {
  return (
    <div className="absolute left-1/2 size-[24px] top-[calc(50%+0.723px)] translate-x-[-50%] translate-y-[-50%]" data-name="check_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_24x24">
          <path d={svgPaths.p3f798800} fill="var(--fill-0, #241919)" id="check" />
        </g>
      </svg>
    </div>
  );
}

function Frame279() {
  return (
    <div className="absolute bg-[#98b0d8] bottom-[2px] h-[60px] left-[calc(50%+90px)] rounded-[8px] translate-x-[-50%] w-[88px]">
      <div className="h-[60px] overflow-clip relative rounded-[inherit] w-[88px]">
        <Check24X24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#aec6ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group969() {
  return (
    <div className="absolute bottom-[1.76px] contents left-[2px]">
      <Group1094 />
      <Component7 />
      <Component601 />
      <Component602 />
      <Component9 />
      <Component6 />
      <Component603 />
      <Component0 />
      <Component8 />
      <Component5 />
      <Component604 />
      <Frame279 />
    </div>
  );
}

function Group1090() {
  return (
    <div className="absolute contents font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%+1.475px)] text-[#191c24] text-[24px] text-center top-[calc(50%+121.5px)] translate-x-[-50%] translate-y-[-50%]">
      <p className="absolute h-[47.529px] left-[calc(50%-86.429px)] top-[calc(50%+126.541px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        7
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%-86.429px)] top-[calc(50%+67.49px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        4
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%-86.429px)] top-[calc(50%+7px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        1
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%+89.379px)] top-[calc(50%+126.541px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        9
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%+89.379px)] top-[calc(50%+67.49px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        6
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%+89.379px)] top-[calc(50%+7px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        3
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%+0.926px)] top-[calc(50%+188.471px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        0
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%+0.926px)] top-[calc(50%+127.981px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        8
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%+0.926px)] top-[calc(50%+67.49px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        5
      </p>
      <p className="absolute h-[47.529px] left-[calc(50%+0.926px)] top-[calc(50%+7px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        2
      </p>
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <mask height="24" id="mask0_3_1707" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1707)">
            <path d={svgPaths.p167351a0} fill="var(--fill-0, #191C24)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close50X51() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[calc(50%-208px)] size-[50px] top-[calc(50%-59px)] translate-x-[-50%] translate-y-[-50%]" data-name="close_50x50">
      <Close1 />
    </div>
  );
}

export default function Test004() {
  return (
    <div className="bg-[#e7ebf7] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="test004">
      <PortraitHeaderWhite />
      <MenuItem />
      <Group969 />
      <div className="absolute bg-[#e7ebf7] h-[167px] left-[319px] top-[211px] w-[2px]" />
      <div className="absolute bg-[#e7ebf7] h-[167px] left-[319px] top-[105px] w-[2px]" />
      <Group1090 />
      <Close50X51 />
    </div>
  );
}