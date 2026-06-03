import svgPaths from "../imports/svg-7o6blewxkv";
import { useState } from "react";

interface PasswordKeyboardProps {
  value: string;
  onValueChange: (value: string) => void;
  onBack?: () => void;
  onHome?: () => void;
  onConfirm?: () => void;
  label?: string;
}

// Header Components
function ArrowForwardIos() {
  return (
    <div className="relative size-[26px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g>
          <mask height="26" id="mask0_arrow_forward" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" width="26" />
          </mask>
          <g mask="url(#mask0_arrow_forward)">
            <path d={svgPaths.p7c54c00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute content-stretch flex gap-[10px] items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%] cursor-pointer">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowForwardIos />
        </div>
      </div>
    </button>
  );
}

function HomeButton({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute left-[222px] size-[50px] top-0 cursor-pointer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g>
          <path d={svgPaths.p2fa81c00} fill="var(--fill-0, white)" />
        </g>
      </svg>
    </button>
  );
}

function Header({ onBack, onHome, label }: { onBack?: () => void; onHome?: () => void; label?: string }) {
  return (
    <div className="absolute bg-[#191c24] h-[50px] left-0 top-0 w-[272px]">
      <BackButton onClick={onBack} />
      <HomeButton onClick={onHome} />
      <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]">
        <div className="basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[24px] text-center text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">{label || 'Server Adress'}</p>
        </div>
      </div>
    </div>
  );
}

export default function PasswordKeyboard({
  value,
  onValueChange,
  onBack,
  onHome,
  onConfirm,
  label
}: PasswordKeyboardProps) {
  const [isNumeric, setIsNumeric] = useState(false);

  const handleKeyPress = (key: string) => {
    onValueChange(value + key);
  };

  const handleBackspace = () => {
    onValueChange(value.slice(0, -1));
  };

  const handleClear = () => {
    onValueChange('');
  };

  const toggleKeyboard = () => {
    setIsNumeric(!isNumeric);
  };

  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full">
      <Header onBack={onBack} onHome={onHome} label={label} />
      
      {/* Keyboard Group */}
      <div className="absolute contents left-1/2 top-[188px] translate-x-[-50%]">
        {!isNumeric ? (
          <>
            {/* Row 1: q w e r t z u i o p - bottom-[236px] */}
            <button onClick={() => handleKeyPress('q')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%-121.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('w')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%-94.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('e')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%-67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('r')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%-40.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('t')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%-13.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('z')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%+13.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('u')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%+40.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('i')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%+67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('o')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%+94.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('p')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%+121.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Row 2: a s d f g h j k l . - bottom-[178px] */}
            <button onClick={() => handleKeyPress('a')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%-121.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('s')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%-94.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('d')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%-67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('f')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%-40.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('g')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%-13.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('h')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%+13.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('j')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%+40.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('k')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%+67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('l')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%+94.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('.')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%+121.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Row 3: y x c v b n m - bottom-[120px] */}
            <button onClick={() => handleKeyPress('y')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%-81.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('x')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%-54.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('c')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%-27.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('v')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%-0.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('b')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%+26.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('n')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%+53.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('m')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%+80.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Shift button */}
            <button className="absolute bg-[#c9cacb] bottom-[120px] h-[56px] left-[calc(50%-115px)] rounded-[6px] translate-x-[-50%] w-[38px] cursor-pointer">
              <div className="h-[56px] overflow-clip relative rounded-[inherit] w-[38px]">
                <div className="absolute left-1/2 rounded-[2px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[38px]">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[23px] py-[8px] relative w-[38px]">
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                          <g>
                            <mask height="24" id="mask0_shift" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                              <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                            </mask>
                            <g mask="url(#mask0_shift)">
                              <path d={svgPaths.p210dda00} fill="var(--fill-0, #191C24)" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Backspace button */}
            <button onClick={handleBackspace} className="absolute bg-[#c9cacb] bottom-[120px] h-[56px] left-[calc(50%+114.5px)] rounded-[6px] translate-x-[-50%] w-[39px] cursor-pointer hover:bg-[#b9babb]">
              <div className="h-[56px] overflow-clip relative rounded-[inherit] w-[39px]">
                <div className="absolute left-[calc(50%-0.5px)] overflow-clip rounded-[2px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g>
                        <mask height="24" id="mask0_backspace" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                          <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                        </mask>
                        <g mask="url(#mask0_backspace)">
                          <path d={svgPaths.p1b79600} fill="var(--fill-0, #191C24)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Text Labels für die Tasten */}
            <div className="absolute contents font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[24px] text-center top-[calc(50%-20px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
              <p className="absolute h-[46px] left-[calc(50%-122px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>q</p>
              <p className="absolute h-[46px] left-[calc(50%-95px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>w</p>
              <p className="absolute h-[46px] left-[calc(50%-68px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>e</p>
              <p className="absolute h-[46px] left-[calc(50%-41px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>r</p>
              <p className="absolute h-[46px] left-[calc(50%-14px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>t</p>
              <p className="absolute h-[46px] left-[calc(50%+13px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>z</p>
              <p className="absolute h-[46px] left-[calc(50%+40px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>u</p>
              <p className="absolute h-[46px] left-[calc(50%+67px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>i</p>
              <p className="absolute h-[46px] left-[calc(50%+94px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>o</p>
              <p className="absolute h-[46px] left-[calc(50%+121px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>p</p>
            </div>

            <div className="absolute contents font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[24px] text-center top-[calc(50%+38px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
              <p className="absolute h-[46px] left-[calc(50%+121px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>.</p>
              <p className="absolute h-[46px] left-[calc(50%-122px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>a</p>
              <p className="absolute h-[46px] left-[calc(50%-95px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>s</p>
              <p className="absolute h-[46px] left-[calc(50%-68px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>d</p>
              <p className="absolute h-[46px] left-[calc(50%-41px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>f</p>
              <p className="absolute h-[46px] left-[calc(50%-14px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>g</p>
              <p className="absolute h-[46px] left-[calc(50%+13px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>h</p>
              <p className="absolute h-[46px] left-[calc(50%+40px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>j</p>
              <p className="absolute h-[46px] left-[calc(50%+67px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>k</p>
              <p className="absolute h-[46px] left-[calc(50%+94px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>l</p>
            </div>

            <div className="absolute contents font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[24px] text-center top-[calc(50%+96px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
              <p className="absolute h-[46px] left-[calc(50%-81.5px)] top-[calc(50%+73px)] translate-x-[-50%] w-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>y</p>
              <p className="absolute h-[46px] left-[calc(50%-55px)] top-[calc(50%+73px)] translate-x-[-50%] w-[16px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>x</p>
              <p className="absolute h-[46px] left-[calc(50%-27.5px)] top-[calc(50%+73px)] translate-x-[-50%] w-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>c</p>
              <p className="absolute h-[46px] left-[calc(50%-1px)] top-[calc(50%+73px)] translate-x-[-50%] w-[16px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>v</p>
              <p className="absolute h-[46px] left-[calc(50%+26.5px)] top-[calc(50%+73px)] translate-x-[-50%] w-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>b</p>
              <p className="absolute h-[46px] left-[calc(50%+53px)] top-[calc(50%+73px)] translate-x-[-50%] w-[16px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>n</p>
              <p className="absolute h-[46px] left-[calc(50%+80.5px)] top-[calc(50%+73px)] translate-x-[-50%] w-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>m</p>
            </div>
          </>
        ) : (
          <>
            {/* Numeric keyboard - 0-9 */}
            {/* Row 1: 1 2 3 */}
            <button onClick={() => handleKeyPress('1')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%-67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('2')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%-0.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('3')} className="absolute bg-white bottom-[236px] h-[56px] left-[calc(50%+67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Row 2: 4 5 6 */}
            <button onClick={() => handleKeyPress('4')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%-67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('5')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%-0.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('6')} className="absolute bg-white bottom-[178px] h-[56px] left-[calc(50%+67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Row 3: 7 8 9 */}
            <button onClick={() => handleKeyPress('7')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%-67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('8')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%-0.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>
            <button onClick={() => handleKeyPress('9')} className="absolute bg-white bottom-[120px] h-[56px] left-[calc(50%+67.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Row 4: 0 */}
            <button onClick={() => handleKeyPress('0')} className="absolute bg-white bottom-[62px] h-[56px] left-[calc(50%-0.5px)] rounded-[6px] translate-x-[-50%] w-[25px] cursor-pointer hover:bg-gray-100">
              <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Backspace button */}
            <button onClick={handleBackspace} className="absolute bg-[#c9cacb] bottom-[120px] h-[56px] left-[calc(50%+114.5px)] rounded-[6px] translate-x-[-50%] w-[39px] cursor-pointer hover:bg-[#b9babb]">
              <div className="h-[56px] overflow-clip relative rounded-[inherit] w-[39px]">
                <div className="absolute left-[calc(50%-0.5px)] overflow-clip rounded-[2px] size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g>
                        <mask height="24" id="mask0_backspace_num" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                          <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                        </mask>
                        <g mask="url(#mask0_backspace_num)">
                          <path d={svgPaths.p1b79600} fill="var(--fill-0, #191C24)" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
            </button>

            {/* Text Labels für die Zahlen */}
            <div className="absolute contents font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[24px] text-center top-[calc(50%-20px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
              <p className="absolute h-[46px] left-[calc(50%-68px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>1</p>
              <p className="absolute h-[46px] left-[calc(50%-1px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>2</p>
              <p className="absolute h-[46px] left-[calc(50%+67px)] top-[calc(50%-43px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>3</p>
            </div>

            <div className="absolute contents font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[24px] text-center top-[calc(50%+38px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
              <p className="absolute h-[46px] left-[calc(50%-68px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>4</p>
              <p className="absolute h-[46px] left-[calc(50%-1px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>5</p>
              <p className="absolute h-[46px] left-[calc(50%+67px)] top-[calc(50%+15px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>6</p>
            </div>

            <div className="absolute contents font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[24px] text-center top-[calc(50%+96px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
              <p className="absolute h-[46px] left-[calc(50%-68px)] top-[calc(50%+73px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>7</p>
              <p className="absolute h-[46px] left-[calc(50%-1px)] top-[calc(50%+73px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>8</p>
              <p className="absolute h-[46px] left-[calc(50%+67px)] top-[calc(50%+73px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>9</p>
            </div>

            <div className="absolute contents font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[24px] text-center top-[calc(50%+154px)] translate-x-[-50%] translate-y-[-50%] pointer-events-none">
              <p className="absolute h-[46px] left-[calc(50%-1px)] top-[calc(50%+131px)] translate-x-[-50%] w-[14px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>0</p>
            </div>
          </>
        )}

        {/* Bottom Row - 123/ABC button, Space bar, / button */}
        <button onClick={toggleKeyboard} className="absolute bg-[#c9cacb] bottom-[62px] h-[56px] left-[calc(50%-110px)] rounded-[6px] translate-x-[-50%] w-[48px] cursor-pointer hover:bg-[#b9babb]">
          <div className="h-[56px] overflow-clip relative rounded-[inherit] w-[48px]">
            <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[20px] text-center top-[calc(50%-14px)] translate-x-[-50%] w-[51px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              {isNumeric ? 'ABC' : '123'}
            </p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </button>

        {/* Space bar */}
        <button onClick={() => handleKeyPress(' ')} className="absolute bg-white bottom-[62px] h-[56px] left-1/2 rounded-[6px] translate-x-[-50%] w-[168px] cursor-pointer hover:bg-gray-100">
          <div aria-hidden="true" className="absolute border border-[#c8c9cc] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </button>

        {/* / button */}
        <button onClick={() => handleKeyPress('/')} className="absolute bg-[#c9cacb] bottom-[62px] h-[56px] left-[calc(50%+110px)] rounded-[6px] translate-x-[-50%] w-[48px] cursor-pointer hover:bg-[#b9babb]">
          <div className="h-[56px] overflow-clip relative rounded-[inherit] w-[48px]">
            <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[46px] leading-[normal] left-[calc(50%-0.5px)] text-[#191c24] text-[24px] text-center top-[calc(50%-19px)] translate-x-[-50%] w-[15px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
              /
            </p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </button>
      </div>

      {/* Password Display Area */}
      <div className="absolute bg-white bottom-[296px] h-[126px] left-1/2 rounded-[6px] translate-x-[-50%] w-[268px]">
        <div className="h-[126px] overflow-clip relative rounded-[inherit] w-[268px]">
          {/* Clear button (X) */}
          {value.length > 0 && (
            <button 
              onClick={handleClear}
              className="absolute content-stretch flex gap-[10px] items-center justify-center left-[calc(50%-109px)] size-[50px] top-0 translate-x-[-50%] cursor-pointer z-10"
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <mask height="24" id="mask0_close" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                      <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                    </mask>
                    <g mask="url(#mask0_close)">
                      <path d={svgPaths.p167351a0} fill="var(--fill-0, #191C24)" />
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          )}
          
          {/* Password text */}
          <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium h-[63px] leading-[normal] left-[calc(50%-121px)] text-[#191c24] text-[24px] top-[50px] w-[240px] overflow-hidden text-ellipsis" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            {value}
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e6e7ea] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.75)]" />
      </div>

      {/* Confirm button */}
      <button onClick={onConfirm} className="absolute bg-[#98b0d8] bottom-[4px] h-[56px] left-1/2 rounded-[6px] translate-x-[-50%] w-[268px] cursor-pointer hover:bg-[#8aa5d0]">
        <div className="h-[56px] overflow-clip relative rounded-[inherit] w-[268px]">
          <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g>
                <path d={svgPaths.p3f798800} fill="var(--fill-0, #241919)" />
              </g>
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#aec6ed] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.75)]" />
      </button>

      {/* Separator lines */}
      <div className="absolute bg-white h-[114px] left-[27px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[113px] left-[54px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[113px] left-[81px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[113px] left-[108px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[113px] left-[135px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[113px] left-[162px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[113px] left-[189px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[57px] left-[202px] top-[304px] w-[2px]" />
      <div className="absolute bg-white h-[56px] left-[175px] top-[304px] w-[2px]" />
      <div className="absolute bg-white h-[56px] left-[148px] top-[304px] w-[2px]" />
      <div className="absolute bg-white h-[57px] left-[229px] top-[304px] w-[2px]" />
      <div className="absolute bg-white h-[113px] left-[216px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[113px] left-[243px] top-[186px] w-[2px]" />
      <div className="absolute bg-white h-[56px] left-[121px] top-[304px] w-[2px]" />
      <div className="absolute bg-white h-[57px] left-[94px] top-[304px] w-[2px]" />
      <div className="absolute bg-white h-[57px] left-[41px] top-[304px] w-px" />
    </div>
  );
}