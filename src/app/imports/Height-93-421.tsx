import svgPaths from "./svg-4hkwitjnhk";
import { imgCheck } from "./svg-ojhx2";

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[71px] items-center justify-end right-[7px] top-[78px] w-[246px]">
      <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#191c24] text-[83px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        167.7
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents right-[7px] top-[78px]">
      <p className="absolute font-['Noto_Sans:Display_Medium',sans-serif] font-medium h-[27px] leading-[normal] right-[10px] text-[#191c24] text-[20px] text-right top-[157px] w-[79px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        cm
      </p>
      <Frame1 />
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
          <mask height="24" id="mask0_93_437" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_93_437)">
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
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
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

function Frame2() {
  return (
    <div className="absolute left-[96px] size-[80px] top-[290px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Frame 1342">
          <path d={svgPaths.p295f8500} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBar480X() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="button-bar_480x72">
      <div className="absolute bg-white h-[56px] left-[8px] rounded-[8px] top-[8px] w-[256px]">
        <div aria-hidden="true" className="absolute border border-[#e7ebf7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.5),0px_2px_6px_0px_#191c24]" />
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="absolute contents left-[calc(50%+0.469px)] top-[calc(50%-0.371px)] translate-x-[-50%] translate-y-[-50%]" data-name="check">
      <div className="absolute h-[17.258px] left-[calc(50%+0.469px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-7px] mask-size-[32px_32px] top-[calc(50%-0.371px)] translate-x-[-50%] translate-y-[-50%] w-[22.939px]" data-name="check" style={{ maskImage: `url('${imgCheck}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
          <path d={svgPaths.p3adeb500} fill="var(--fill-0, #191C24)" id="check" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[15.28%_41.54%_15.28%_40.07%]">
      <Check />
    </div>
  );
}

function ButtonCheck480X() {
  return (
    <div className="absolute bottom-0 h-[72px] left-1/2 translate-x-[-50%] w-[272px]" data-name="button-check_480x72">
      <ButtonBar480X />
      <Frame />
    </div>
  );
}

export default function Height() {
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Height">
      <LibaryWeightDetails />
      <PortraitHeaderWhite />
      <p className="absolute bottom-[106px] font-['Noto_Sans:Display_Medium',sans-serif] font-medium h-[27px] leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center translate-x-[-50%] translate-y-[100%] w-[240px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Repeat
      </p>
      <Frame2 />
      <ButtonCheck480X />
    </div>
  );
}