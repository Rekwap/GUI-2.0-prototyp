import svgPaths from "./svg-ls8t1jk175";

function Close() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="close">
          <mask height="32" id="mask0_90_841" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_90_841)">
            <path d={svgPaths.p325d2280} fill="var(--fill-0, #191C24)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close50X() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-0 size-[50px] top-0" data-name="close_50x50">
      <Close />
    </div>
  );
}

function PortraitHeaderWhite() {
  return (
    <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
      <Close50X />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[0] left-1/2 text-[#191c24] text-center top-[214px] translate-x-[-50%]">
      <div className="absolute h-[99px] leading-[normal] left-1/2 text-[24px] top-[214px] translate-x-[-50%] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0">
          <span className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            Height measurement ongoing
          </span>
          .
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute leading-[normal] left-1/2 text-[20px] top-[323px] translate-x-[-50%] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0">{`Note: tand upright `}</p>
        <p className="mb-0">and look straight.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function ProgressHeigthMeasurement() {
  return (
    <div className="absolute left-1/2 size-[80px] top-[96px] translate-x-[-50%]" data-name="Progress Heigth Measurement">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Progress Heigth Measurement">
          <path d={svgPaths.pfd6a900} fill="var(--stroke-0, #191C24)" id="Arrow 1" />
          <line id="Line 3" stroke="var(--stroke-0, #191C24)" strokeWidth="2" x1="46" x2="62" y1="11" y2="11" />
          <line id="Line 4" stroke="var(--stroke-0, #191C24)" strokeWidth="2" x1="45.0674" x2="62.368" y1="69" y2="69" />
          <path d={svgPaths.p2d12a100} fill="var(--fill-0, #191C24)" id="Vector" />
          <circle cx="30" cy="15" fill="var(--fill-0, #191C24)" id="Ellipse 3" r="5" />
        </g>
      </svg>
    </div>
  );
}

export default function ScanPatientId() {
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Scan Patient ID">
      <PortraitHeaderWhite />
      <Group />
      <ProgressHeigthMeasurement />
    </div>
  );
}