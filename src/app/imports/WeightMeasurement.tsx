import svgPaths from "./svg-8mcag6kcff";
import WeightDetailsComponent from "./WeightDetails";
import UserId from "./UserId";

function Close() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="close">
          <mask height="32" id="mask0_3_3478" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_3_3478)">
            <path d={svgPaths.p325d2280} fill="var(--fill-0, #191C24)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close50X50({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="absolute content-stretch flex gap-[10px] items-center justify-center right-0 size-[50px] top-0 cursor-pointer" data-name="close_50x50">
      <Close />
    </button>
  );
}

function PortraitHeaderWhite({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Overview</p>
      </div>
      <Close50X50 onClick={onClose} />
    </div>
  );
}



function Send() {
  return (
    <div className="absolute h-[32px] left-[calc(50%+92px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 32">
        <g id="send">
          <mask height="32" id="mask0_3_3962" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="48" x="0" y="0">
            <path d="M0 0H48V32H0V0Z" fill="var(--fill-0, #D9D9D9)" id="Bounding box" />
          </mask>
          <g mask="url(#mask0_3_3962)">
            <path d={svgPaths.p14769370} fill="var(--fill-0, #06A94E)" id="send_2" />
            <path d="M3 6L16 6V9H3V6Z" fill="var(--fill-0, #06A94E)" id="send_3" />
            <path d={svgPaths.p32eadd00} fill="var(--fill-0, #06A94E)" id="send_4" />
            <path d="M12.75 22H16V25H12.75V22Z" fill="var(--fill-0, #06A94E)" id="send_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Send1({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="absolute bg-[#daf2e5] h-[56px] left-[8px] overflow-clip rounded-[8px] shadow-[0px_2px_6px_0px_#191c24] top-[416px] w-[256px] cursor-pointer hover:bg-[#c5e8d5] transition-colors" data-name="Send">
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 not-italic text-[#06a94e] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[128px]">
        <p className="leading-[normal]">SEND</p>
      </div>
      <Send />
    </button>
  );
}

export default function WeightMeasurement({ onClose, onSend, weight, height, bmi, loginMode, isMetric = true, displayLabel }: { onClose: () => void; onSend: () => void; weight: string; height?: string; bmi?: string; loginMode?: 'user-only' | 'patient-only' | 'both'; isMetric?: boolean; displayLabel?: string }) {
  const showUserId = loginMode === 'user-only' || loginMode === 'both';
  
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px]" data-name="Weight Measurement">
      <PortraitHeaderWhite onClose={onClose} />
      <div className="absolute bottom-[162px] h-[262px] left-[4px] w-[264px]">
        <WeightDetailsComponent weight={weight} height={height} bmi={bmi} loginMode={loginMode} isMetric={isMetric} displayLabel={displayLabel} />
      </div>
      {showUserId && (
        <div className="absolute left-[16px] right-[16px] top-[330px] h-[52px]">
          <UserId />
        </div>
      )}
      <Send1 onClick={onSend} />
    </div>
  );
}