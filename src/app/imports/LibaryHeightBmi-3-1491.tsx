import svgPaths from "./svg-o2rf5qpy0b";

function Frame1250() {
  return <div className="absolute h-[33px] left-[calc(50%+0.5px)] top-[calc(50%-64.5px)] translate-x-[-50%] translate-y-[-50%] w-[132px]" />;
}

function Group1232() {
  return (
    <div className="h-[24px] relative shrink-0 w-[16.992px]">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 24">
          <g id="Group 1232">
            <path d={svgPaths.pdc29900} fill="var(--stroke-0, #8B8D91)" id="Arrow 1" />
            <line id="Line 3" stroke="var(--stroke-0, #8B8D91)" x1="10.9938" x2="16.9938" y1="0.5" y2="0.5" />
            <line id="Line 4" stroke="var(--stroke-0, #8B8D91)" x1="10.9938" x2="16.9938" y1="23.5" y2="23.5" />
            <path d={svgPaths.p2c334580} fill="var(--fill-0, #8B8D91)" id="Vector" />
            <ellipse cx="4.80073" cy="2.00002" fill="var(--fill-0, #8B8D91)" id="Ellipse 3" rx="1.99998" ry="2.00002" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1309() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center justify-center left-1/2 top-[41px] translate-x-[-50%] w-[24px]">
      <Group1232 />
    </div>
  );
}

function Reweight() {
  return <div className="absolute bg-[#98b0d8] bottom-[38px] h-[36px] left-1/2 rounded-bl-[18px] rounded-br-[18px] translate-x-[-50%] w-[100px]" data-name="Reweight" />;
}

function Reweight1() {
  return (
    <div className="absolute h-[72px] left-[13px] rounded-[18px] top-[10px] w-[54px]" data-name="Reweight">
      <div className="h-[72px] overflow-clip relative rounded-[inherit] w-[54px]">
        <Frame1309 />
        <Reweight />
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Bold',_sans-serif] font-bold justify-center leading-[0] left-[calc(50%+18px)] text-[#191c24] text-[20px] text-nowrap text-right top-[calc(50%-17px)] translate-x-[-100%] translate-y-[-50%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal] whitespace-pre">BSA</p>
        </div>
        <div className="absolute bg-white h-[2px] left-0 top-[34px] w-[100px]" />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#c9cacb] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Group1253() {
  return (
    <div className="absolute contents left-[13px] top-[10px]">
      <Reweight1 />
    </div>
  );
}

export default function LibaryHeightBmi() {
  return (
    <div className="bg-white relative shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="libary_Height + BMI">
      <p className="absolute bottom-[102px] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[27px] leading-[normal] right-[17.54px] text-[#191c24] text-[20px] text-right translate-y-[100%] w-[28.459px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        m²
      </p>
      <Frame1250 />
      <Group1253 />
      <p className="absolute bottom-[153px] font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold h-[65px] leading-[normal] left-[calc(50%+120px)] text-[#191c24] text-[48px] text-right translate-x-[-100%] translate-y-[100%] w-[121px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        19.9
      </p>
    </div>
  );
}