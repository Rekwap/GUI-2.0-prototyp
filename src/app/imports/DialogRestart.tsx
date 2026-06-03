import svgPaths from "./svg-h28ir9h03r";

function Check() {
  return (
    <div className="absolute inset-0 rounded-[80px]" data-name="Check">
      <div aria-hidden="true" className="absolute border-[#191c24] border-[3px] border-solid inset-0 pointer-events-none rounded-[80px]" />
    </div>
  );
}

function Close() {
  return (
    <div className="absolute inset-[10%_35.29%]" data-name="close">
      <div className="absolute left-[8px] size-[24.201px] top-[7.9px]" data-name="close">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <path d={svgPaths.pb1e0300} fill="var(--fill-0, #191C24)" id="close" />
        </svg>
      </div>
    </div>
  );
}

function CancelButton({ onClick, isPressed }: { onClick?: () => void; isPressed?: boolean }) {
  const handlePressStart = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.currentTarget.dataset.pressed = 'true';
  };
  
  const handlePressEnd = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.currentTarget.dataset.pressed = 'false';
    onClick?.();
  };
  
  const handlePressCancel = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.currentTarget.dataset.pressed = 'false';
  };
  
  return (
    <button 
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressCancel}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onTouchCancel={handlePressCancel}
      className="absolute h-[50px] left-1/2 top-[387px] translate-x-[-50%] w-[136px] cursor-pointer group"
    >
      <Check />
      <div className="absolute inset-0 bg-[#c9cacb] rounded-[80px] opacity-0 group-data-[pressed=true]:opacity-100 transition-opacity" />
      <Close />
    </button>
  );
}

function Check1() {
  return <div className="absolute bg-[#191c24] inset-0 rounded-[80px]" data-name="Check" />;
}

function Check2() {
  return (
    <div className="absolute h-[21.015px] left-[calc(50%-0.014px)] top-[calc(50%-0.046px)] translate-x-[-50%] translate-y-[-50%] w-[28.395px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 22">
        <g id="check">
          <path d={svgPaths.p32793d80} fill="var(--fill-0, white)" id="check_2" />
        </g>
      </svg>
    </div>
  );
}

function ConfirmButton({ onClick }: { onClick?: () => void }) {
  const handlePressStart = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.currentTarget.dataset.pressed = 'true';
  };
  
  const handlePressEnd = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.currentTarget.dataset.pressed = 'false';
    onClick?.();
  };
  
  const handlePressCancel = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    e.currentTarget.dataset.pressed = 'false';
  };
  
  return (
    <button 
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressCancel}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onTouchCancel={handlePressCancel}
      className="absolute h-[50px] left-[calc(50%+1px)] top-[329px] translate-x-[-50%] w-[136px] cursor-pointer group"
    >
      <div className="absolute inset-0 bg-[#c9cacb] rounded-[80px] opacity-0 group-data-[pressed=true]:opacity-100 transition-opacity" />
      <Check1 />
      <Check2 />
    </button>
  );
}

function Frame988({ onConfirm, onCancel }: { onConfirm?: () => void; onCancel?: () => void }) {
  return (
    <div className="absolute bg-white h-[448px] left-[16px] rounded-[8px] top-1/2 translate-y-[-50%] w-[240px]">
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[216px] leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center top-[90px] translate-x-[-50%] w-[224px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Are you sure you want to restart? Unsaved changes may be lost.
      </p>
      <p className="absolute font-['Noto_Sans:Display_Bold',_sans-serif] font-bold leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center top-[24px] translate-x-[-50%] w-[224px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Restart?
      </p>
      <CancelButton onClick={onCancel} />
      <ConfirmButton onClick={onConfirm} />
    </div>
  );
}

function RestartConfirmDialog({ onConfirm, onCancel }: { onConfirm?: () => void; onCancel?: () => void }) {
  return (
    <div className="bg-[#191c24] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full" data-name="Dialog_restart">
      <Frame988 onConfirm={onConfirm} onCancel={onCancel} />
    </div>
  );
}

export default function DialogRestart({ 
  onConfirm, 
  onCancel
}: { 
  onConfirm?: () => void; 
  onCancel?: () => void;
}) {
  return (
    <RestartConfirmDialog 
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}
