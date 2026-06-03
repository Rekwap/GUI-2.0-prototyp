import svgPaths from "./svg-mxyg6yta4u";

function DotYellow() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dot">
          <mask height="24" id="mask0_93_661" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_93_661)">
            <path d={svgPaths.p5539500} fill="var(--fill-0, #F8A100)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DotYellow24X() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[30px]" data-name="dot_24x24">
      <DotYellow />
    </div>
  );
}

function Logout() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="logout">
          <mask height="24" id="mask0_93_657" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="23" id="Bounding box" stroke="var(--stroke-0, black)" width="23" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_93_657)">
            <path d={svgPaths.p3de82680} fill="var(--fill-0, #191C24)" id="logout_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute right-[5px] size-[24px] top-[16px] cursor-pointer">
      <Logout />
    </div>
  );
}

function DotGreen() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dot">
          <mask height="24" id="mask0_93_653" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_93_653)">
            <path d={svgPaths.p5539500} fill="var(--fill-0, #06A94E)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DotGreen24X() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[6px]" data-name="dot_24x24">
      <DotGreen />
    </div>
  );
}

function DotGreen24XUser() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[30px]" data-name="dot_24x24">
      <DotGreen />
    </div>
  );
}

function DotYellow24XPatient() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[6px]" data-name="dot_24x24">
      <DotYellow />
    </div>
  );
}

interface BannerBig312XProps {
  onLogout?: () => void;
  missingPerson?: 'patient' | 'user' | null;
}

export default function BannerBig312X({ onLogout, missingPerson = null }: BannerBig312XProps) {
  const patientDot = missingPerson === 'patient' ? <DotYellow24XPatient /> : <DotGreen24X />;
  const userDot = missingPerson === 'user' ? <DotYellow24X /> : <DotGreen24XUser />;
  
  return (
    <div className="bg-white relative rounded-bl-[8px] rounded-br-[8px] shadow-[0px_2px_6px_0px_#191c24] size-full" data-name="banner_big_312x36">
      {userDot}
      <p className="absolute font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[normal] left-[28px] text-[#191c24] text-[20px] top-[27px] w-[113px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        User
      </p>
      <Frame onClick={onLogout} />
      {patientDot}
      <p className="absolute font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[normal] left-[28px] text-[#191c24] text-[20px] top-[3px] w-[113px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Patient
      </p>
    </div>
  );
}