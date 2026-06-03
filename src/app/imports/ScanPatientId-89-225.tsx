import svgPaths from "./svg-0qvy5d8clv";
import { imgArrowForwardIos } from "./svg-wetmr";
import ProgressHeigthMeasurement from "./ProgressHeigthMeasurement";

function Close() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="close">
          <mask height="32" id="mask0_89_240" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_89_240)">
            <path d={svgPaths.p325d2280} fill="var(--fill-0, #191C24)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close50X({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="absolute content-stretch flex gap-[10px] items-center justify-center right-0 size-[50px] top-0 cursor-pointer" data-name="close_50x50">
      <Close />
    </button>
  );
}

function PortraitHeaderWhite({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
      <Close50X onClick={onClose} />
    </div>
  );
}

function Forward48X32Default() {
  return (
    <div className="absolute h-[20px] left-[calc(50%-0.113px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-18px_-6px] mask-size-[48px_32px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[11.775px]" data-name="arrow_forward_ios" style={{ maskImage: `url('${imgArrowForwardIos}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
        <path d={svgPaths.pd794cc0} fill="var(--fill-0, #191C24)" id="arrow_forward_ios" />
      </svg>
    </div>
  );
}

function Forward48X() {
  return (
    <div className="absolute h-[32px] left-[calc(50%+92px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="forward_48x32">
      <Forward48X32Default />
    </div>
  );
}

function Next({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="absolute bg-white h-[56px] left-1/2 overflow-clip rounded-[8px] shadow-[0px_2px_6px_0px_#191c24] top-[417px] translate-x-[-50%] w-[256px] cursor-pointer hover:bg-gray-50 transition-colors" data-name="Next">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 not-italic text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[128px]">
        <p className="leading-[normal]">Start</p>
      </div>
      <Forward48X />
    </button>
  );
}

export default function ScanPatientId({ onProceed, onBack }: { onProceed: () => void; onBack: () => void }) {
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Scan Patient ID">
      <PortraitHeaderWhite onClose={onBack} />
      <div className="absolute font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[normal] left-1/2 text-[#191c24] text-[24px] text-center top-[220px] translate-x-[-50%] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0">{`Height is required for Sending Data. `}</p>
        <p>&nbsp;</p>
      </div>
      <Next onClick={onProceed} />
      <div className="absolute left-1/2 size-[80px] top-[122px] translate-x-[-50%]">
        <ProgressHeigthMeasurement />
      </div>
      <p className="absolute font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center top-[328px] translate-x-[-50%] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Press Start to measure Height
      </p>
    </div>
  );
}