import svgPaths from "./svg-xonfs6rdc4";
import imgImage2 from "figma:asset/a907051a8b9cc6c5b544be7a5e5270bc30fea462.png";

function ArrowForwardIos() {
  return (
    <div className="relative size-[26px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="arrow_forward_ios">
          <mask height="26" id="mask0_38_487" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_38_487)">
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

function LinearAdjustment() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" data-name="Linear Adjustment">
      <div className="basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Integration</p>
      </div>
    </div>
  );
}

function HeaderPortrait() {
  return (
    <div className="absolute bg-[#191c24] h-[50px] left-0 top-0 w-[272px]" data-name="Header (Portrait)">
      <Back50X50 />
      <LinearAdjustment />
    </div>
  );
}

function Frame263() {
  return (
    <div className="absolute bg-[#191c24] left-1/2 overflow-clip rounded-[12.273px] size-[180px] top-[212px] translate-x-[-50%]">
      <div className="absolute left-1/2 rounded-[8.182px] size-[164px] top-[8px] translate-x-[-50%]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8.182px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Frame988() {
  return (
    <div className="absolute bg-white h-[416px] left-[6px] rounded-[8px] top-[calc(50%+26px)] translate-y-[-50%] w-[260px]">
      <div className="absolute font-['Noto_Sans:Display_Bold',_sans-serif] font-bold h-[172px] leading-[normal] left-1/2 text-[#191c24] text-[0px] text-[20px] text-center top-[32px] translate-x-[-50%] w-[232px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          This system is not connected to an EMR.
        </p>
        <p className="font-['Noto_Sans:Regular',_sans-serif] font-normal mb-0" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          {" "}
        </p>
        <p className="mb-0">Scan QR code</p>
        <p>to see benefits for integration.</p>
      </div>
      <Frame263 />
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-[#191c24] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Menu">
      <HeaderPortrait />
      <Frame988 />
    </div>
  );
}