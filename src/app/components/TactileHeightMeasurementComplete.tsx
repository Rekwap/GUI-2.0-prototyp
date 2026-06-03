import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-k0iq0134a3';
import { img } from '../imports/svg-vy494';

interface TactileHeightMeasurementCompleteProps {
  onConfirm: () => void;
  onBack: () => void;
  isMetric: boolean;
  targetHeight: string;
}

function Frame5({ value }: { value: string }) {
  return (
    <div className="content-stretch flex gap-[10px] h-[71px] items-center justify-end relative shrink-0 w-[246px]">
      <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#191c24] text-[83px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {value}
      </p>
    </div>
  );
}

function Frame6({ value }: { value: string }) {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[71px] items-center justify-end left-1/2 top-[80px] translate-x-[-50%] w-[246px]">
      <Frame5 value={value} />
    </div>
  );
}

function CheckCircle() {
  return <div className="absolute bottom-[222px] contents left-[12px]" data-name="check_circle" />;
}

function Frame3() {
  return <div className="absolute bottom-[5px] h-[27px] left-[215px] w-[37px]" />;
}

function Frame4() {
  return <div className="absolute bottom-0 h-[49px] left-[145px] w-[68px]" />;
}

function Frame1() {
  return <div className="absolute bottom-[5px] h-[27px] left-[104px] w-[36px]" />;
}

function Frame2() {
  return <div className="absolute bottom-0 h-[49px] left-[14px] w-[88px]" />;
}

function ArrowForwardIos() {
  return (
    <div className="relative size-[24px]" data-name="arrow_forward_ios">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_150_503" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_150_503)">
            <path d={svgPaths.p1c2bdd80} fill="var(--fill-0, #191C24)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Check() {
  return (
    <div className="absolute contents left-[calc(50%+0.469px)] top-[calc(50%-0.371px)] translate-x-[-50%] translate-y-[-50%]" data-name="check">
      <div className="absolute h-[17.258px] left-[calc(50%+0.469px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5px_-7px] mask-size-[32px_32px] top-[calc(50%-0.371px)] translate-x-[-50%] translate-y-[-50%] w-[22.939px]" data-name="check" style={{ maskImage: `url('${img}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
          <path d={svgPaths.p3adeb500} fill="var(--fill-0, #191C24)" id="check" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[15.28%_41.54%_15.28%_40.07%]">
      <Check />
    </div>
  );
}

export default function TactileHeightMeasurementComplete({ 
  onConfirm, 
  onBack, 
  isMetric,
  targetHeight 
}: TactileHeightMeasurementCompleteProps) {
  const [animatedValue, setAnimatedValue] = useState('0.0');
  
  // Animate the value from 0 to target over 2 seconds
  useEffect(() => {
    const targetValue = parseFloat(targetHeight);
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out animation for smoother finish
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (targetValue - startValue) * easeProgress;
      
      setAnimatedValue(currentValue.toFixed(1));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [targetHeight]);
  
  return (
    <div 
      className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px]"
      data-name="Height"
    >
      <div className="absolute bg-[#e7ebf7] bottom-[202px] h-[220px] left-1/2 overflow-clip rounded-[12px] translate-x-[-50%] w-[264px]" data-name="Weight + Details">
        <div className="absolute bottom-[206px] h-[36px] left-[16px] w-[228px]" data-name="Technical Weighing Data (Portrait)" />
        <p className="absolute font-['Noto_Sans:Display_Medium',sans-serif] font-medium h-[27px] leading-[normal] right-[12px] text-[#191c24] text-[20px] text-right top-[159px] w-[60px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          cm
        </p>
        <div className="absolute overflow-clip right-[51px] size-[24px] top-[173px]" data-name="locked_24x24" />
        <Frame6 value={animatedValue} />
        <CheckCircle />
        <Frame3 />
        <Frame4 />
        <Frame1 />
        <Frame2 />
      </div>
      <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
        <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[24px] text-center top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[172px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
          <p className="leading-[normal]">Height</p>
        </div>
        <div className="absolute flex items-center justify-center left-0 size-[50px] top-1/2 translate-y-[-50%]">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <button 
              onClick={onBack}
              className="box-border content-stretch cursor-pointer flex gap-[10px] items-center justify-center overflow-visible p-0 relative size-[50px]" 
              data-name="guide arrow_24x24"
            >
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none scale-y-[-100%]">
                  <ArrowForwardIos />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 size-[80px] top-[290px] translate-x-[-50%]" data-name="Tactile Height Measurement">
        <div className="absolute inset-[53.13%_16.25%_12.5%_73.75%]">
          <div className="absolute bottom-[-3.64%] left-[-12.5%] right-[-12.5%] top-0" style={{ "--fill-0": "rgba(25, 28, 36, 1)", "--stroke-0": "rgba(25, 28, 36, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 29">
              <path d="M1 1.00001V27.5H9V0" id="Vector 87" stroke="var(--stroke-0, #191C24)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[11.28%_12.5%_43.78%_12.5%]">
          <div className="absolute inset-[-2.78%_-1.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 38">
              <path d={svgPaths.pb91f100} fill="var(--fill-0, #191C24)" id="Vector 88" stroke="var(--stroke-0, #191C24)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[38.75%_61.25%_11.25%_38.75%] items-center justify-center">
          <div className="flex-none h-px rotate-[90deg] w-[40px]">
            <div className="relative size-full">
              <div className="absolute bottom-[-5.77px] left-0 right-0 top-[-5.77px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 12">
                  <path d={svgPaths.p2ccffe80} fill="var(--stroke-0, #191C24)" id="Arrow 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute bottom-[106px] font-['Noto_Sans:Display_Medium',sans-serif] font-medium h-[27px] leading-[normal] left-1/2 text-[#191c24] text-[20px] text-center translate-x-[-50%] translate-y-[100%] w-[240px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Align rod with patient
      </p>
      <button 
        onClick={onConfirm}
        className="absolute bottom-0 h-[72px] left-1/2 translate-x-[-50%] w-[272px] cursor-pointer" 
        data-name="button-check_480x72"
      >
        <div className="absolute inset-0 overflow-clip" data-name="button-bar_480x72">
          <div className="absolute bg-white h-[56px] left-[8px] rounded-[8px] top-[8px] w-[256px]">
            <div aria-hidden="true" className="absolute border border-[#e7ebf7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.5),0px_2px_6px_0px_#191c24]" />
          </div>
        </div>
        <Frame />
      </button>
    </div>
  );
}
