import svgPaths from "./svg-r310f5omvr";

function ArrowForwardIos() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_44_239" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_44_239)">
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

function Close() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <mask height="24" id="mask0_44_235" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_44_235)">
            <path d={svgPaths.p167351a0} fill="var(--fill-0, #191C24)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close50X() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[calc(50%-109px)] size-[50px] top-[31px] translate-x-[-50%]" data-name="close_50x50">
      <Close />
    </div>
  );
}

function Frame2() {
  return <div className="absolute h-[27px] left-[180px] top-[76px] w-[88px]" />;
}

function MenuItem() {
  return (
    <div className="absolute bg-white bottom-[318px] h-[104px] left-1/2 rounded-[6px] translate-x-[-50%] w-[268px]" data-name="Menu Item">
      <div className="h-[104px] overflow-clip relative rounded-[inherit] w-[268px]">
        <Close50X />
        <div className="absolute flex flex-col font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+0.5px)] text-[48px] text-black text-center text-nowrap top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre">166.2</p>
        </div>
        <Frame2 />
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[calc(50%+122px)] text-[#191c24] text-[20px] text-right top-[calc(50%+3.5px)] translate-x-[-100%] translate-y-[-50%] w-[60px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">cm</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e6e7ea] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.75)]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute bg-white bottom-[124px] h-[60px] left-[2px] rounded-[6px] w-[88px]" data-name="7">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute bg-white bottom-[186px] h-[60px] left-[2px] rounded-[6px] w-[88px]" data-name="601">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute bg-white bottom-[248px] h-[60px] left-[2px] rounded-[6px] w-[88px]" data-name="602">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute bg-white bottom-[124px] h-[60px] left-[182px] rounded-[6px] w-[88px]" data-name="9">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute bg-white bottom-[186px] h-[60px] left-[182px] rounded-[6px] w-[88px]" data-name="6">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-white bottom-[248px] h-[60px] left-[182px] rounded-[6px] w-[88px]" data-name="603">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-white bottom-[62px] h-[60px] left-[92px] rounded-[6px] w-[88px]" data-name="0">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute bg-white bottom-[124px] h-[60px] left-[92px] rounded-[6px] w-[88px]" data-name="8">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute bg-white bottom-[186px] h-[60px] left-[92px] rounded-[6px] w-[88px]" data-name="5">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute bg-white bottom-[248px] h-[60px] left-[92px] rounded-[6px] w-[88px]" data-name="604">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Check24X() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="check_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_24x24">
          <path d={svgPaths.p3f798800} fill="var(--fill-0, #241919)" id="check" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#98b0d8] bottom-[4px] h-[56px] left-1/2 rounded-[8px] translate-x-[-50%] w-[268px]">
      <div className="h-[56px] overflow-clip relative rounded-[inherit] w-[268px]">
        <Check24X />
      </div>
      <div aria-hidden="true" className="absolute border border-[#aec6ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
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

function KeyboardBack24X() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="keyboard_back_24x24">
      <Backspace />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-white bottom-[62px] h-[60px] left-[182px] rounded-[6px] w-[88px]" data-name=".">
      <div className="h-[60px] overflow-clip relative rounded-[inherit] w-[88px]">
        <KeyboardBack24X />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-[62px] contents left-[182px]">
      <Component />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[4px] contents left-[2px]">
      <Component4 />
      <Component7 />
      <Component8 />
      <Component6 />
      <Component3 />
      <Component9 />
      <Component1 />
      <Component5 />
      <Component2 />
      <Component10 />
      <Frame />
      <Group1 />
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close">
          <mask height="24" id="mask0_44_235" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_44_235)">
            <path d={svgPaths.p167351a0} fill="var(--fill-0, #191C24)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close50X1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[calc(50%-208px)] size-[50px] top-[calc(50%-49px)] translate-x-[-50%] translate-y-[-50%]" data-name="close_50x50">
      <Close1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white bottom-[62px] h-[60px] left-[calc(50%-90px)] rounded-[6px] translate-x-[-50%] w-[88px]">
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[calc(50%-90px)] top-[358px] translate-x-[-50%]">
      <Frame1 />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[49.286px] leading-[normal] left-[calc(50%-91.76px)] text-[#191c24] text-[24px] text-center top-[calc(50%+127.644px)] translate-x-[-50%] w-[49.28px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        .
      </p>
    </div>
  );
}

export default function Component10PxUnterkante() {
  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="10px unterkante">
      <PortraitHeaderWhite />
      <MenuItem />
      <Group />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%-90.429px)] text-[#191c24] text-[24px] text-center top-[calc(50%+66.541px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        7
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%-90.429px)] text-[#191c24] text-[24px] text-center top-[calc(50%+7.49px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        4
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%-90.429px)] text-[#191c24] text-[24px] text-center top-[calc(50%-53px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        1
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%+89.379px)] text-[#191c24] text-[24px] text-center top-[calc(50%+66.541px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        9
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%+89.379px)] text-[#191c24] text-[24px] text-center top-[calc(50%+7.49px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        6
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%+89.379px)] text-[#191c24] text-[24px] text-center top-[calc(50%-53px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        3
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%+0.926px)] text-[#191c24] text-[24px] text-center top-[calc(50%+128.471px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        0
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%+0.926px)] text-[#191c24] text-[24px] text-center top-[calc(50%+67.981px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        8
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%+0.926px)] text-[#191c24] text-[24px] text-center top-[calc(50%+7.49px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        5
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[47.529px] leading-[normal] left-[calc(50%+0.926px)] text-[#191c24] text-[24px] text-center top-[calc(50%-53px)] translate-x-[-50%] w-[7.142px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        2
      </p>
      <Close50X1 />
      <Group2 />
    </div>
  );
}