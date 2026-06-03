import svgPaths from "./svg-uh48catmdr";
import BannerBig312X from "./BannerBig312X36-93-637";

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

interface StatusBarPortraitBothProps {
  onLogout?: () => void;
  onMenuClick?: () => void;
  missingPerson?: 'patient' | 'user' | null;
}

export default function StatusBarPortraitBoth({ onLogout, onMenuClick, missingPerson = null }: StatusBarPortraitBothProps) {
  return (
    <div className="bg-[#e7ebf7] relative size-full" data-name="Status Bar (Portrait)">
      <div className="absolute h-[50px] left-0 top-0 w-[272px]">
        <Menu50X50 onClick={onMenuClick} />
        <Wifi50X50 />
      </div>
      <div className="absolute h-[56px] left-[50px] top-0 w-[172px] z-10">
        <BannerBig312X onLogout={onLogout} missingPerson={missingPerson} />
      </div>
    </div>
  );
}
