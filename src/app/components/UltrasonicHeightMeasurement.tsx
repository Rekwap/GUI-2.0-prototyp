import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-ls8t1jk175";
import ProgressHeigthMeasurementIcon from "../imports/ProgressHeigthMeasurement";
import ProgressHeigthMeasurementMid from "../imports/ProgressHeigthMeasurement-90-280";
import ProgressHeigthMeasurementTop from "../imports/ProgressHeigthMeasurement-90-317";

interface UltrasonicHeightMeasurementProps {
  onBack: () => void;
  onMeasured: (height: string) => void;
  isMetric: boolean;
  onConfirm?: () => void;
  initialHeight?: string;
  targetHeight?: string;
}

function Close() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="close">
          <mask height="32" id="mask0_90_841" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="32" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="32" id="Bounding box" width="32" />
          </mask>
          <g mask="url(#mask0_90_841)">
            <path d={svgPaths.p325d2280} fill="var(--fill-0, #191C24)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close50X({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute content-stretch cursor-pointer flex gap-[10px] items-center justify-center right-0 size-[50px] top-0" 
      data-name="close_50x50"
    >
      <Close />
    </button>
  );
}

function PortraitHeaderWhite({ onBack }: { onBack: () => void }) {
  return (
    <div className="absolute bg-white h-[50px] left-0 top-0 w-[272px]" data-name="Portrait_Header_white">
      <Close50X onClick={onBack} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents font-['Noto_Sans:Display_Medium',sans-serif] font-medium leading-[0] left-1/2 text-[#191c24] text-center top-[230px] translate-x-[-50%]">
      <div className="absolute h-[99px] leading-[normal] left-1/2 text-[24px] top-[230px] translate-x-[-50%] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0">
          <span className="font-['Noto_Sans:Display_Medium',sans-serif] font-medium" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            Height measurement ongoing
          </span>
          .
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute leading-[normal] left-1/2 text-[20px] top-[339px] translate-x-[-50%] w-[248px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="mb-0">{`Note: stand upright `}</p>
        <p className="mb-0">and look straight.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default function UltrasonicHeightMeasurement({ onBack, onMeasured, isMetric, onConfirm, initialHeight, targetHeight = '167.7' }: UltrasonicHeightMeasurementProps) {
  const [animationStage, setAnimationStage] = useState(0);
  const [isMeasured, setIsMeasured] = useState(false);
  
  useEffect(() => {
    // Animation sequence: 0 -> 1 -> 2 -> 0 -> 1 -> 2 (two cycles)
    const timings = [300, 300, 300, 300, 300, 300]; // Each stage duration
    let currentStage = 0;
    
    const runAnimation = () => {
      const timeouts: NodeJS.Timeout[] = [];
      
      timings.forEach((delay, index) => {
        const timeout = setTimeout(() => {
          currentStage = (index + 1) % 3;
          setAnimationStage(currentStage);
          
          // After the second cycle completes, mark as measured
          if (index === timings.length - 1) {
            setTimeout(() => {
              setIsMeasured(true);
              onMeasured(targetHeight);
              if (onConfirm) {
                onConfirm();
              }
            }, 300);
          }
        }, timings.slice(0, index + 1).reduce((sum, val) => sum + val, 0));
        
        timeouts.push(timeout);
      });
      
      return timeouts;
    };
    
    const timeouts = runAnimation();
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [onMeasured, onConfirm, targetHeight]);
  
  return (
    <div className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[272px] h-[480px]" data-name="Ultrasonic Height Measurement">
      <PortraitHeaderWhite onBack={onBack} />
      <Group />
      
      {/* Animated progress indicator */}
      <div className="absolute left-1/2 size-[80px] top-[112px] translate-x-[-50%]">
        {animationStage === 0 && <ProgressHeigthMeasurementIcon />}
        {animationStage === 1 && <ProgressHeigthMeasurementMid />}
        {animationStage === 2 && <ProgressHeigthMeasurementTop />}
      </div>
    </div>
  );
}
