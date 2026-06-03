import svgPaths from "./svg-xqpasv2mjm";

function CheckCircle() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[14px]" data-name="check_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_circle">
          <mask height="24" id="mask0_57_928" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_57_928)">
            <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 107" r="10" />
            <path d={svgPaths.pfbfd380} fill="var(--fill-0, #06A94E)" id="check_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function UserId() {
  return (
    <div className="bg-white relative size-full" data-name="User ID">
      <CheckCircle />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[36px] text-[#06a94e] text-[20px] top-[12px] w-[132px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        User ID
      </p>
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[36px] text-[#191c24] text-[20px] text-nowrap top-[39px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Dr. Becker
      </p>
    </div>
  );
}