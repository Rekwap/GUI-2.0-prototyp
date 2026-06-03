import svgPaths from "./svg-srl6anr34s";

function Reweight24X() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="reweight_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reweight_24x24">
          <mask height="24" id="mask0_3_1015" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1015)">
            <path d={svgPaths.p3f15cd80} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Reweight() {
  return (
    <div className="bg-[#98b0d8] h-[36px] overflow-clip relative rounded-[30px] shrink-0 w-[54px]" data-name="Reweight">
      <Reweight24X />
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

function Frame() {
  return (
    <div className="absolute h-[27px] left-0 top-px w-[100px]">
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[50px] text-[#191c24] text-[20px] text-center top-0 translate-x-[-50%] w-[100px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        -54.8 kg
      </p>
    </div>
  );
}

function Close24X() {
  return (
    <div className="absolute left-[104px] size-[24px] top-[2px]" data-name="close_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close_24x24">
          <mask height="24" id="mask0_43_1301" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_43_1301)">
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
      <Frame />
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
    <div className="absolute bottom-[20px] content-stretch flex gap-[12px] items-center left-[13px]" data-name="Tare Value">
      <Reweight />
      <TaraValue />
    </div>
  );
}

export default function LibaryTara() {
  return (
    <div className="relative size-full" data-name="Libary_TARA">
      <TareValue />
    </div>
  );
}