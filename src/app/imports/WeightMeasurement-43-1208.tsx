import svgPaths from "./svg-hh1q654w8g";
import { imgHistory2 } from "./svg-ju2ob";

function TechnicalWeighingDataPortrait() {
  return (
    <div className="absolute h-[36px] left-[16px] top-[12px] w-[228px]" data-name="Technical Weighing Data (Portrait)">
      <p className="absolute bottom-[5.26%] font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-0 right-[25.27%] text-[#656d89] text-[13px] top-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Max 360 kg
      </p>
    </div>
  );
}

function Locked24X() {
  return (
    <div className="absolute right-[51px] size-[24px] top-[163px]" data-name="locked_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="locked_24x24">
          <path d={svgPaths.p1025e600} fill="var(--fill-0, #656D89)" id="lock" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[71px] items-center justify-end left-[13px] top-[86px] w-[246px]">
      <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#191c24] text-[83px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        0.00
      </p>
    </div>
  );
}

function LibaryWeightDetails() {
  return (
    <div className="absolute bg-[#e7ebf7] h-[200px] left-0 overflow-clip top-[50px] w-[272px]" data-name="libary_Weight + Details">
      <TechnicalWeighingDataPortrait />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[256px] size-[27px] text-[#191c24] text-[20px] text-right top-[165px] translate-x-[-100%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        kg
      </p>
      <Locked24X />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] right-[16px] text-[#656d89] text-[20px] text-nowrap text-right top-[59px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Net
      </p>
      <Frame3 />
    </div>
  );
}

function LibaryHeightBmi() {
  return <div className="absolute bg-white h-[170px] left-0 top-[310px] w-[272px]" data-name="libary_Height + BMI" />;
}

function ButtonBar480X() {
  return (
    <div className="absolute h-[72px] left-0 overflow-clip top-0 w-[272px]" data-name="button-bar_480x72">
      <div className="absolute bg-white h-[56px] left-[8px] opacity-[0.84] rounded-[8px] top-[8px] w-[256px]">
        <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_6px_0px_#191c24]" />
      </div>
    </div>
  );
}

function Tare48X() {
  return (
    <div className="absolute h-[32px] left-1/2 top-0 translate-x-[-50%] w-[48px]" data-name="tare_48x32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 32">
        <g id="tare_48x32">
          <mask height="32" id="mask0_43_948" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="48" />
          </mask>
          <g mask="url(#mask0_43_948)">
            <g id=">T<">
              <path d={svgPaths.p3a83da00} fill="#191C24" />
              <path d={svgPaths.p2dff8600} fill="#191C24" />
              <path d={svgPaths.p34579700} fill="#191C24" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-[82px]" data-name="Button">
      <div className="absolute bottom-[8px] flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[16px] justify-center leading-[0] left-[calc(50%-0.5px)] text-[#8b8d91] text-[13px] text-center translate-x-[-50%] translate-y-[50%] w-[91px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">TARE</p>
      </div>
      <Tare48X />
    </div>
  );
}

function History() {
  return (
    <div className="absolute left-[12px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-12px_-4px] mask-size-[48px_32px] size-[24px] top-[4px]" data-name="history_2" style={{ maskImage: `url('${imgHistory2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="history_2">
          <mask height="24" id="mask0_43_962" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_43_962)">
            <path d={svgPaths.p20499e80} fill="var(--fill-0, #191C24)" id="history_2_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Recall48X() {
  return (
    <div className="absolute h-[32px] left-1/2 top-0 translate-x-[-50%] w-[48px]" data-name="Recall_48x32">
      <History />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-[82px]" data-name="Button">
      <div className="absolute bottom-[8px] flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[16px] justify-center leading-[0] left-[calc(50%-0.5px)] text-[#8b8d91] text-[13px] text-center translate-x-[-50%] translate-y-[50%] w-[91px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">RECALL</p>
      </div>
      <Recall48X />
    </div>
  );
}

function Send48X() {
  return (
    <div className="absolute h-[32px] left-1/2 top-0 translate-x-[-50%] w-[48px]" data-name="send_48x32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 32">
        <g id="send_48x32">
          <g id="Vector">
            <path d={svgPaths.p2ee28600} fill="#06A94E" />
            <path d="M3 6L16 6V9H3V6Z" fill="#06A94E" />
            <path d="M16 17H8V14H16V17Z" fill="#06A94E" />
            <path d="M12 22H16V25H12V22Z" fill="#06A94E" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#daf2e5] h-[48px] overflow-clip relative rounded-[4px] shrink-0 w-[82px]" data-name="Button">
      <div className="absolute bottom-[8px] flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[16px] justify-center leading-[0] left-[calc(50%-0.5px)] text-[#06a94e] text-[13px] text-center translate-x-[-50%] translate-y-[50%] w-[91px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">SEND</p>
      </div>
      <Send48X />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-px items-center left-1/2 top-[12px] translate-x-[-50%]">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function ButtonBar() {
  return (
    <div className="absolute h-[72px] left-1/2 top-[calc(50%+204px)] translate-x-[-50%] translate-y-[-50%] w-[272px]" data-name="Button Bar">
      <ButtonBar480X />
      <Frame2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="menu">
          <mask height="32" id="mask0_43_938" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_43_938)">
            <path d={svgPaths.p1e3de500} fill="var(--fill-0, #191C24)" id="settings" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Menu50X() {
  return (
    <div className="absolute left-0 size-[50px] top-0" data-name="menu_50x50">
      <Menu />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 1122">
          <mask height="24" id="mask0_43_942" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_43_942)">
            <path d={svgPaths.pb103300} fill="var(--fill-0, #656D89)" id="wifi" />
            <path d={svgPaths.p14960480} fill="var(--fill-0, #656D89)" id="wifi_2" />
            <path d={svgPaths.p3daa9100} fill="var(--fill-0, #656D89)" id="wifi_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wifi50X() {
  return (
    <div className="absolute left-[222px] size-[50px] top-0" data-name="wifi_50x50">
      <Frame />
    </div>
  );
}

function StatusBarPortrait() {
  return (
    <div className="absolute bg-[#e7ebf7] h-[50px] left-0 top-0 w-[272px]" data-name="Status Bar (Portrait)">
      <Menu50X />
      <Wifi50X />
    </div>
  );
}

function Reweight24X() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="reweight_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reweight_24x24">
          <mask height="24" id="mask0_3_1011" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1011)">
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

function Frame1() {
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
          <mask height="24" id="mask0_43_1212" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_43_1212)">
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
    <div className="absolute bottom-[20px] content-stretch flex gap-[12px] items-center left-[13px]" data-name="Tare Value">
      <Reweight />
      <TaraValue />
    </div>
  );
}

function LibaryTara() {
  return (
    <div className="absolute h-[60px] right-0 top-[250px] w-[272px]" data-name="Libary_TARA">
      <TareValue />
    </div>
  );
}

export default function WeightMeasurement() {
  return (
    <div className="bg-[#e7ebf7] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Weight Measurement">
      <LibaryWeightDetails />
      <LibaryHeightBmi />
      <ButtonBar />
      <StatusBarPortrait />
      <LibaryTara />
    </div>
  );
}