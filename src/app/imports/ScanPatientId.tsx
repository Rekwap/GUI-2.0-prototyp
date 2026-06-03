import svgPaths from "./svg-aso1mwin0j";

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
    <button onClick={(e) => { e.stopPropagation(); onClick(); }} className="absolute content-stretch flex gap-[10px] items-center justify-center right-0 size-[50px] top-0 cursor-pointer" data-name="close_50x50">
      <Close />
    </button>
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
    <div onClick={onClick} className="absolute left-[96px] size-[80px] top-[90px] cursor-pointer" data-name="barcode_reader_80x80">
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

export default function ScanPatientId({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px]" data-name="Scan Patient ID">
      <PortraitHeaderWhite onClose={onCancel} />
      <BarcodeReader80X80 onClick={onConfirm} />
      <div onClick={onConfirm} className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[165px] leading-[normal] left-[calc(50%-124px)] text-[#191c24] text-[24px] top-[239px] w-[248px] cursor-pointer" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0">Scan Patient ID to</p>
        <p>proceed with sending</p>
      </div>
    </div>
  );
}