import { useState } from 'react';
import svgPaths from "../imports/svg-y8idtjejp1";
import { Input } from "./ui/input";
import PasswordKeyboard from "./PasswordKeyboard";

// Icons
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

// Header Components
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

function Header({ onBack, onHome }: { onBack?: () => void; onHome?: () => void }) {
  return (
    <div className="absolute bg-[#191c24] h-[50px] left-0 top-0 w-[272px]">
      <BackButton onClick={onBack} />
      <HomeButton onClick={onHome} />
      <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-1/2 top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]">
        <div className="basis-0 flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[20px] text-center text-white" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">Server Connection</p>
        </div>
      </div>
    </div>
  );
}

// Edit Icon for Input Fields
function EditIcon() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[6px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <mask height="24" id="mask0_edit" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
          </mask>
          <g mask="url(#mask0_edit)">
            <path d={svgPaths.p178ae200} fill="var(--fill-0, #1C1B1F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Input Field Component
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onClick?: () => void;
  placeholder?: string;
  topPosition: string;
  labelTop: string;
  inputTop: string;
}

function InputField({ label, value, onChange, onClick, placeholder, topPosition, labelTop, inputTop }: InputFieldProps) {
  return (
    <div className={`absolute contents left-[22px] ${topPosition} translate-y-[-50%]`}>
      {/* Label */}
      <div className={`absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[22px] text-[#191c24] text-[20px] ${labelTop} translate-y-[-50%] w-[168px]`} style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">{label}</p>
      </div>
      
      {/* Input Container */}
      <div className={`absolute h-[36px] right-[22px] rounded-[4px] ${inputTop} translate-y-[-50%] w-[228px]`}>
        <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[228px]">
          <EditIcon />
          <Input 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onClick={onClick}
            placeholder={placeholder}
            readOnly={!!onClick}
            className="h-[36px] w-full pl-[40px] pr-[8px] border-none rounded-[4px] text-[16px] bg-transparent focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
          />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

export interface ServerConnectionProps {
  onBack?: () => void;
  onHome?: () => void;
  serverAddress?: string;
  serverPort?: string;
  onServerAddressChange?: (value: string) => void;
  onServerPortChange?: (value: string) => void;
}

export default function ServerConnection({ 
  onBack, 
  onHome,
  serverAddress = '',
  serverPort = '',
  onServerAddressChange,
  onServerPortChange
}: ServerConnectionProps) {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [editingField, setEditingField] = useState<'address' | 'port' | null>(null);
  const [tempValue, setTempValue] = useState('');

  const handleInputClick = (field: 'address' | 'port') => {
    setEditingField(field);
    setTempValue(field === 'address' ? serverAddress : serverPort);
    setShowKeyboard(true);
  };

  const handleKeyboardConfirm = () => {
    if (editingField === 'address') {
      onServerAddressChange?.(tempValue);
    } else if (editingField === 'port') {
      onServerPortChange?.(tempValue);
    }
    setShowKeyboard(false);
    setEditingField(null);
  };

  const handleKeyboardBack = () => {
    setShowKeyboard(false);
    setEditingField(null);
  };

  if (showKeyboard && editingField) {
    return (
      <PasswordKeyboard
        value={tempValue}
        onValueChange={setTempValue}
        onBack={handleKeyboardBack}
        onHome={onHome}
        onConfirm={handleKeyboardConfirm}
        label={editingField === 'address' ? 'Server Address' : 'Server Port'}
      />
    );
  }

  return (
    <div className="bg-[#191c24] relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] size-full">
      <Header onBack={onBack} onHome={onHome} />
      
      {/* Background */}
      <div className="absolute bg-white h-[416px] left-1/2 rounded-[8px] top-[calc(50%+26px)] translate-x-[-50%] translate-y-[-50%] w-[260px]" />
      
      {/* Server Address Input */}
      <InputField 
        label="Server Address"
        value={serverAddress}
        onChange={onServerAddressChange || (() => {})}
        onClick={() => handleInputClick('address')}
        placeholder=""
        topPosition="top-[calc(50%-124.5px)]"
        labelTop="top-[calc(50%-144.5px)]"
        inputTop="top-[calc(50%-109px)]"
      />
      
      {/* Server Port Input */}
      <InputField 
        label="Server Port"
        value={serverPort}
        onChange={onServerPortChange || (() => {})}
        onClick={() => handleInputClick('port')}
        placeholder=""
        topPosition="top-[calc(50%-33.5px)]"
        labelTop="top-[calc(50%-53.5px)]"
        inputTop="top-[calc(50%-18px)]"
      />
    </div>
  );
}