import svgPaths from "./svg-o6tru0f9i8";
import ScanPatientId89225 from "./ScanPatientId-89-225";

function CheckEmpty() {
  return null;
}

function Close() {
  return (
    <div className="absolute inset-[10%_35.29%]" data-name="close">
      <div className="absolute left-[8px] size-[24.201px] top-[7.9px]" data-name="close">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <path d={svgPaths.pb1e0300} fill="var(--fill-0, #191C24)" id="close" />
        </svg>
      </div>
    </div>
  );
}

function CancelButton({ onClick }: { onClick: () => void }) {
  return null;
}

function CheckFilled() {
  return <div className="absolute bg-[#191c24] inset-0 rounded-[80px]" data-name="Check" />;
}

function CheckIcon() {
  return (
    <div className="absolute h-[21.015px] left-[calc(50%-0.014px)] top-[calc(50%-0.046px)] translate-x-[-50%] translate-y-[-50%] w-[28.395px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 22">
        <g id="check">
          <path d={svgPaths.p2afabe70} fill="var(--fill-0, white)" id="check_2" />
        </g>
      </svg>
    </div>
  );
}

function ConfirmButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="absolute h-[50px] left-[calc(50%+1px)] top-[386px] translate-x-[-50%] w-[136px] cursor-pointer hover:opacity-80 transition-opacity">
      <CheckFilled />
      <CheckIcon />
    </button>
  );
}

interface MissingData {
  weight: boolean;
  height: boolean;
  patientId: boolean;
  userId: boolean;
}

function Frame({ missingData, onConfirm, onCancel }: { missingData: MissingData; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="absolute bg-white h-[448px] left-[16px] rounded-[8px] top-1/2 translate-y-[-50%] w-[240px]">
      <div className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[88px] leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center top-[91px] translate-x-[-50%] w-[224px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          Some required data is missing:
        </p>
      </div>
      <div className="absolute font-['Noto_Sans:Display_Bold',_sans-serif] font-bold leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center top-[190px] translate-x-[-50%] w-[224px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {missingData.weight && <p className="mb-0">Weight</p>}
        {missingData.height && <p className="mb-0">Height</p>}
        {missingData.patientId && <p className="mb-0">Patient ID</p>}
        {missingData.userId && <p className="mb-0">User ID</p>}
      </div>
      <p className="absolute font-['Noto_Sans:Display_Bold',_sans-serif] font-bold leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center top-[24px] translate-x-[-50%] w-[224px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Check data for sending
      </p>
      <CancelButton onClick={onCancel} />
      <ConfirmButton onClick={onConfirm} />
    </div>
  );
}

export default function Dialog({ missingData, onConfirm, onCancel }: { missingData: MissingData; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Dialog">
      <ScanPatientId89225 onNext={onConfirm} onClose={onCancel} />
    </div>
  );
}