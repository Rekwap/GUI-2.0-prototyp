import svgPaths from "./svg-yekobn6633";
import { imgArrowForwardIos } from "./svg-gdyih";

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
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">User ID</p>
      </div>
      <Close50X50 onClick={onClose} />
    </div>
  );
}

function UserGreen80X80Px() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
      <g id="user green 80 x 80 px">
        <mask height="80" id="mask0_3_4427" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="80" x="0" y="0">
          <rect fill="var(--fill-0, #D9D9D9)" height="80" id="Bounding box" width="80" />
        </mask>
        <g mask="url(#mask0_3_4427)">
          <path d={svgPaths.p3b553900} id="person" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
          <path d="M25 51L25 61" id="Vector 91" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
          <path d="M30 56H20" id="Vector 92" stroke="var(--stroke-0, #191C24)" strokeWidth="2.5" />
          <circle cx="60" cy="60" fill="var(--fill-0, white)" id="Ellipse 100" r="20" />
        </g>
        <mask height="41" id="mask1_3_4427" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="40" y="39">
          <rect fill="var(--fill-0, #D9D9D9)" height="40" id="Bounding box_2" width="40" x="40" y="39.9995" />
        </mask>
        <g mask="url(#mask1_3_4427)">
          <path d={svgPaths.p1d71b280} fill="var(--fill-0, #06A94E)" id="check_circle" />
        </g>
      </g>
    </svg>
  );
}

function Patient80X80() {
  return (
    <div className="absolute left-[96px] size-[80px] top-[90px]" data-name="patient_80x80">
      <UserGreen80X80Px />
    </div>
  );
}

function Forward48X32Default() {
  return (
    <div className="absolute h-[20px] left-[calc(50%-0.113px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-18px_-6px] mask-size-[48px_32px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[11.775px]" data-name="arrow_forward_ios" style={{ maskImage: `url('${imgArrowForwardIos}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
        <path d={svgPaths.pd794cc0} fill="var(--fill-0, #191C24)" id="arrow_forward_ios" />
      </svg>
    </div>
  );
}

function Forward48X32() {
  return (
    <div className="absolute h-[32px] left-[calc(50%+92px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[48px]" data-name="forward_48x32">
      <Forward48X32Default />
    </div>
  );
}

function Next({ onClick }: { onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="absolute bg-white h-[56px] left-[8px] overflow-clip rounded-[8px] shadow-[0px_2px_6px_0px_#191c24] top-[416px] w-[256px] cursor-pointer hover:shadow-[0px_2px_8px_0px_#191c24] transition-shadow" 
      data-name="Next"
    >
      <div className="absolute flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 not-italic text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[128px]">
        <p className="leading-[normal]">Next</p>
      </div>
      <Forward48X32 />
    </div>
  );
}

export default function Id({ onClose, onNext }: { onClose: () => void; onNext: () => void }) {
  return (
    <div className="bg-white absolute inset-0" data-name="User ID">
      <PortraitHeaderWhite onClose={onClose} />
      <Patient80X80 />
      <div className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-1/2 text-[#191c24] text-[24px] text-center top-[239px] translate-x-[-50%] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0">Dr. Becker</p>
        <p>&nbsp;</p>
      </div>
      <Next onClick={onNext} />
    </div>
  );
}