import svgPaths from "./svg-zpd14d542k";

function Dot() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dot">
          <mask height="24" id="mask0_3_4107" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_4107)">
            <path d={svgPaths.p5539500} fill="var(--fill-0, #06A94E)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Dot24X24() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[30px]" data-name="dot_24x24">
      <Dot />
    </div>
  );
}

function Logout() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="logout">
          <mask height="24" id="mask0_3_4100" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" id="Bounding box" stroke="var(--stroke-0, black)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_3_4100)">
            <path d={svgPaths.p3de82680} fill="var(--fill-0, #191C24)" id="logout_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1118() {
  return (
    <div className="absolute right-[5px] size-[24px] top-[16px]">
      <Logout />
    </div>
  );
}

function Dot1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dot">
          <mask height="24" id="mask0_3_4107" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_4107)">
            <path d={svgPaths.p5539500} fill="var(--fill-0, #06A94E)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Dot24X25() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[6px]" data-name="dot_24x24">
      <Dot1 />
    </div>
  );
}

export default function BannerBig312X36() {
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shadow-[0px_2px_6px_0px_#191c24] size-full" data-name="banner_big_312x36">
      <Dot24X24 />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[28px] text-[#191c24] text-[20px] top-[27px] w-[113px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Anwender
      </p>
      <Frame1118 />
      <Dot24X25 />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[28px] text-[#191c24] text-[20px] top-[3px] w-[113px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Patient
      </p>
    </div>
  );
}