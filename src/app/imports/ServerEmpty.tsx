import svgPaths from "./svg-y8idtjejp1";

function ArrowForwardIos() {
  return (
    <div className="relative size-[26px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="arrow_forward_ios">
          <mask height="26" id="mask0_40_1224" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_40_1224)">
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
      <div className="basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[20px] text-center text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Server Connection</p>
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

function Frame() {
  return <div className="absolute bg-white h-[416px] left-[6px] rounded-[8px] top-[calc(50%+26px)] translate-y-[-50%] w-[260px]" />;
}

function Edit() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[6px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <mask height="24" id="mask0_40_1220" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_40_1220)">
            <path d={svgPaths.p178ae200} fill="var(--fill-0, #1C1B1F)" id="edit_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextInput272X() {
  return (
    <div className="absolute h-[36px] right-[22px] rounded-[4px] top-[calc(50%-26px)] translate-y-[-50%] w-[228px]" data-name="text input_272x36">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[228px]">
        <Edit />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[22px] top-[calc(50%-41.5px)] translate-y-[-50%]">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[22px] text-[#191c24] text-[20px] top-[calc(50%-61.5px)] translate-y-[-50%] w-[168px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Server Port</p>
      </div>
      <TextInput272X />
    </div>
  );
}

function Edit1() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[6px]" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit">
          <mask height="24" id="mask0_40_1220" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_40_1220)">
            <path d={svgPaths.p178ae200} fill="var(--fill-0, #1C1B1F)" id="edit_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextInput272X1() {
  return (
    <div className="absolute h-[36px] right-[22px] rounded-[4px] top-[calc(50%-109px)] translate-y-[-50%] w-[228px]" data-name="text input_272x36">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[228px]">
        <Edit1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[22px] top-[calc(50%-124.5px)] translate-y-[-50%]">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[22px] text-[#191c24] text-[20px] top-[calc(50%-144.5px)] translate-y-[-50%] w-[168px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Server Address</p>
      </div>
      <TextInput272X1 />
    </div>
  );
}

export default function ServerEmpty() {
  return (
    <div className="bg-[#191c24] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Server_empty">
      <HeaderPortrait />
      <Frame />
      <Group />
      <Group1 />
    </div>
  );
}