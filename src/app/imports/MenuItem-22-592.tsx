function MenuBackground() {
  return (
    <div className="absolute bg-white h-[52px] left-0 overflow-clip top-0 w-[260px]" data-name="Menu_background">
      <div className="absolute bg-[#8b8d91] h-px left-[8px] top-[51px] w-[244px]" />
    </div>
  );
}

function MenuText() {
  return (
    <div className="absolute h-[27px] left-[12px] top-[calc(50%+0.5px)] translate-y-[-50%] w-[206px]" data-name="Menu text">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium inset-0 justify-center leading-[0] text-[#191c24] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Deutsch</p>
      </div>
    </div>
  );
}

function Frame1082() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame 1082">
          <circle cx="12" cy="12" id="Ellipse 102" r="10.5" stroke="var(--stroke-0, #191C24)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function RadioButton24X24() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center right-[12px] size-[24px] top-1/2 translate-y-[-50%]" data-name="radio button_24x24">
      <Frame1082 />
    </div>
  );
}

export default function MenuItem() {
  return (
    <div className="relative size-full" data-name="Menu Item">
      <MenuBackground />
      <MenuText />
      <RadioButton24X24 />
    </div>
  );
}