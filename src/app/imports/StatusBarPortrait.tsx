import svgPaths from "./svg-u9aqbxwgp4";

function Menu() {
  return (
    <div className="absolute left-1/2 size-[32px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="menu">
          <mask height="32" id="mask0_3_871" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_3_871)">
            <path d={svgPaths.p1e3de500} fill="var(--fill-0, #191C24)" id="settings" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Menu50X50({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute left-0 size-[50px] top-0 cursor-pointer" data-name="menu_50x50">
      <Menu />
    </button>
  );
}

function Frame1122() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 1122">
          <mask height="24" id="mask0_3_898" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_898)">
            <path d={svgPaths.pb103300} fill="var(--fill-0, #656D89)" id="wifi" />
            <path d={svgPaths.p14960480} fill="var(--fill-0, #656D89)" id="wifi_2" />
            <path d={svgPaths.p3daa9100} fill="var(--fill-0, #656D89)" id="wifi_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wifi50X50() {
  return (
    <div className="absolute left-[222px] size-[50px] top-0" data-name="wifi_50x50">
      <Frame1122 />
    </div>
  );
}

function Dot() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dot">
          <mask height="24" id="mask0_3_4104" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_4104)"></g>
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

function Frame1118({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="absolute right-[5px] size-[24px] top-[16px] cursor-pointer">
      <Logout />
    </button>
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

function BannerBig312X36({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="absolute bg-white h-[56px] left-1/2 rounded-bl-[8px] rounded-br-[8px] shadow-[0px_2px_6px_0px_#191c24] top-0 translate-x-[-50%] w-[172px] z-50" data-name="banner_big_312x36">
      <Dot24X24 />
      <Frame1118 onClick={onLogout} />
      <Dot24X25 />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[28px] text-[#191c24] text-[20px] top-[3px] w-[113px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Patient
      </p>
    </div>
  );
}

export default function StatusBarPortrait({ showPatientBanner = false, onLogout, onMenuClick }: { showPatientBanner?: boolean; onLogout?: () => void; onMenuClick?: () => void }) {
  return (
    <div className="absolute bg-[#e7ebf7] h-[50px] left-0 top-0 w-[272px]" data-name="Status Bar (Portrait)">
      <Menu50X50 onClick={onMenuClick} />
      <Wifi50X50 />
      {showPatientBanner && onLogout && <BannerBig312X36 onLogout={onLogout} />}
    </div>
  );
}