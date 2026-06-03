import svgPaths from "./svg-tuobwpdjci";

function Close({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[32px] cursor-pointer" 
      data-name="close"
      onClick={onClick}
    >
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
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-0 size-[50px] top-0" data-name="close_50x50">
      <Close onClick={onClick} />
    </div>
  );
}

function PortraitHeaderWhite({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
      <Close50X50 onClick={onClose} />
    </div>
  );
}

function BarcodeReader80X80({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="absolute left-[96px] size-[80px] top-[90px] cursor-pointer" 
      data-name="barcode_reader_80x80"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="barcode_reader_80x80">
          <mask height="80" id="mask0_3_3576" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="80" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="79" id="Bounding box" stroke="var(--stroke-0, #191C24)" width="79" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_3_3576)">
            <path d={svgPaths.p64af500} id="Vector 89" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
            <path d={svgPaths.p13895700} id="barcode_reader" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
            <path d="M63.5 23.5H76.5" id="Vector 96" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
            <path d="M63 32L74.5 37" id="Vector 97" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
            <path d="M74.5 10L63 15" id="Vector 98" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
            <path d="M31 53L35.5 35.5" id="Vector 101" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function ScanBothIds({ onClose, onScanPatient, onScanUser }: { 
  onClose: () => void; 
  onScanPatient: () => void;
  onScanUser: () => void;
}) {
  return (
    <div className="bg-white absolute inset-0" data-name="Scan Both IDs">
      <PortraitHeaderWhite onClose={onClose} />
      <BarcodeReader80X80 onClick={onScanPatient} />
      <div className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[165px] leading-[normal] left-[calc(50%-124px)] text-[#191c24] text-[24px] top-[239px] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0">Scan Patient ID or</p>
        <p className="mb-0">User ID to proceed</p>
        <p className="mb-0">with sending</p>
        <p>&nbsp;</p>
      </div>
      
      {/* Invisible clickable areas for Patient ID and User ID */}
      <div 
        className="absolute left-[24px] top-[180px] w-[100px] h-[120px] cursor-pointer opacity-0 hover:opacity-10 hover:bg-blue-500 transition-opacity"
        onClick={onScanPatient}
        title="Patient ID"
      />
      <div 
        className="absolute right-[24px] top-[180px] w-[100px] h-[120px] cursor-pointer opacity-0 hover:opacity-10 hover:bg-green-500 transition-opacity"
        onClick={onScanUser}
        title="User ID"
      />
    </div>
  );
}