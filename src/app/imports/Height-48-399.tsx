import svgPaths from "./svg-kc8a07rkcl";
import { imgCheck } from "./svg-y07io";

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[71px] items-center justify-end right-[7px] top-[78px] w-[246px]">
      <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#191c24] text-[83px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        105.2
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents right-[7px] top-[78px]">
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[27px] leading-[normal] right-[10px] text-[#191c24] text-[20px] text-right top-[157px] w-[79px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        kg
      </p>
      <Frame2 />
    </div>
  );
}

function LibaryWeightDetails() {
  return (
    <div className="absolute bg-[#e7ebf7] bottom-[170px] h-[252px] overflow-clip right-[6px] rounded-[12px] w-[260px]" data-name="libary_Weight + Details">
      <Group />
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_48_414" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_48_414)"></g>
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
        <p className="leading-[normal]">Previous Value</p>
      </div>
      <div className="absolute flex items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <GuideArrow24X />
        </div>
      </div>
    </div>
  );
}

function LibaryHeightBmi() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[66.25%]" data-name="libary_Height + BMI">
      <p className="absolute bottom-[106px] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[27px] leading-[normal] right-[16px] text-[#191c24] text-[20px] text-right translate-y-[100%] w-[28.459px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        cm
      </p>
      <p className="absolute bottom-[159px] font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold h-[65px] leading-[normal] right-[16px] text-[#191c24] text-[48px] text-right translate-y-[100%] w-[121px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        176.7
      </p>
      <p className="absolute bottom-[159px] font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold h-[65px] leading-[normal] right-[256px] text-[#191c24] text-[48px] translate-x-[100%] translate-y-[100%] w-[95px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
      2.27
      </p>
      <p className="absolute bottom-[106px] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[27px] leading-[normal] right-[256px] text-[#191c24] text-[20px] translate-x-[100%] translate-y-[100%] w-[88.425px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
      BSA      m²
      </p>
      <div className="absolute h-[49px] left-1/2 top-[10px] translate-x-[-50%] w-0">
        <div className="absolute bottom-0 left-[-1px] right-[-1px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 49">
            <path d="M1 0V49" id="Vector 162" stroke="var(--stroke-0, #191C24)" strokeWidth="2" />
          </svg>
        </div>
      </div>
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

function Tare24X() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[6px]" data-name="Tare_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Tare_24x24">
          <g id=">T<">
            <path d={svgPaths.p2d3a6b80} fill="#191C24" />
            <path d={svgPaths.p3b55f880} fill="#191C24" />
            <path d={svgPaths.p244e1400} fill="#191C24" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[27px] left-0 top-px w-[100px]">
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[50px] text-[#191c24] text-[20px] text-center top-0 translate-x-[-50%] w-[100px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        -20.00 kg
      </p>
    </div>
  );
}

function Close24X() {
  return (
    <div className="absolute left-[104px] size-[24px] top-[2px] hidden" data-name="close_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close_24x24">
          <mask height="24" id="mask0_48_403" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_48_403)">
            <path d={svgPaths.p18d83600} fill="var(--fill-0, #191C24)" id="close" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ValueX() {
  return (
    <div className="absolute h-[28px] left-[40px] top-[4px] w-[135px]" data-name="value + x">
      <Frame1 />
      <Close24X />
    </div>
  );
}

function TaraValue() {
  return (
    <div className="bg-[#98b0d8] h-[36px] relative rounded-[80px] shrink-0 w-[180px]" data-name="TARA Value">
      <Tare24X />
      <ValueX />
    </div>
  );
}

function TareValue() {
  return (
    <div className="absolute bottom-[17px] content-stretch flex gap-[12px] items-center justify-end left-[13px] w-[246px]" data-name="Tare Value">
      <TaraValue />
    </div>
  );
}

function LibaryTara() {
  return (
    <div className="absolute bottom-[35.42%] left-0 right-0 top-[52.08%]" data-name="Libary_TARA">
      <TareValue />
    </div>
  );
}

export default function Height({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Height">
      <LibaryWeightDetails />
      <PortraitHeaderWhite />
      <LibaryHeightBmi />
      <button onClick={onClose} className="absolute bottom-0 h-[72px] left-1/2 translate-x-[-50%] w-[272px] cursor-pointer">
        <ButtonCheck480X />
      </button>
      <p className="absolute bottom-[366px] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] right-[16px] text-[#656d89] text-[16px] text-right translate-y-[100%] w-[124px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        5 min ago
      </p>
      <LibaryTara />
    </div>
  );
}