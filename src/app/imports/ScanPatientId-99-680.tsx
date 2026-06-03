import svgPaths from "./svg-vzsndca38s";

function CheckCircle80X80Px() {
  return (
    <div className="absolute left-[96px] size-[80px] top-[150px]" data-name="check_circle 80 x 80 px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="check_circle 80 x 80 px">
          <mask height="80" id="mask0_99_702" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="80" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="80" id="Bounding box" width="80" />
          </mask>
          <g mask="url(#mask0_99_702)">
            <circle cx="40" cy="40" fill="var(--fill-0, white)" id="Ellipse 108" r="33" />
            <path d={svgPaths.p28e56c0} fill="var(--fill-0, #06A94E)" id="check_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function ScanPatientId() {
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Scan Patient ID">
      <p className="absolute font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[normal] left-1/2 text-[#191c24] text-[24px] text-center top-[239px] translate-x-[-50%] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <span style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>{`Data `}</span>s<span style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>aved</span>
      </p>
      <CheckCircle80X80Px />
    </div>
  );
}