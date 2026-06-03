import svgPaths from "./svg-hq8w2izuq8";
import UserId from "./UserId";

function TechnicalWeighingDataPortrait({ isMetric }: { isMetric: boolean }) {
  return (
    <div className="absolute h-[36px] left-[16px] top-[12px] w-[228px]" data-name="Technical Weighing Data (Portrait)">
    </div>
  );
}

function Locked24X24() {
  return (
    <div className="absolute right-[51px] size-[24px] top-[174px]" data-name="locked_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="locked_24x24"></g>
      </svg>
    </div>
  );
}

function Frame1256({ weight }: { weight: string }) {
  return (
    <div className="content-stretch flex gap-[10px] h-[71px] items-center justify-end relative shrink-0 w-[246px]">
      <p className="font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#191c24] text-[83px] text-nowrap text-right whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {weight}
      </p>
    </div>
  );
}

function Frame1257({ weight }: { weight: string }) {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[71px] items-center justify-end left-1/2 top-[80px] translate-x-[-50%] w-[246px]">
      <Frame1256 weight={weight} />
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[8px]" data-name="check_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_circle">
          <mask height="24" id="mask0_3_3971" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_3971)">
            <circle cx="12" cy="12" fill="var(--fill-0, white)" id="Ellipse 107" r="10" />
            <path d={svgPaths.pfbfd380} fill="var(--fill-0, #06A94E)" id="check_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1208({ showBmi, displayLabel }: { showBmi: boolean; displayLabel?: string }) {
  if (!showBmi) return null;
  return (
    <div className="absolute bottom-[9px] h-[27px] left-[215px] w-[37px]">
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] right-0 text-[#191c24] text-[20px] text-nowrap text-right top-[calc(50%-14.5px)] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {displayLabel === 'BMI' ? 'BMI' : displayLabel === 'BSA' ? 'm²' : 'BSA'}
      </p>
    </div>
  );
}

function Frame1209({ bmi }: { bmi?: string }) {
  if (!bmi) return null;
  return (
    <div className="absolute bottom-[4px] h-[49px] left-[143px] w-[68px]">
      <p className="absolute font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] right-0 text-[#191c24] text-[36px] text-nowrap text-right top-[calc(50%-25.5px)] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {bmi}
      </p>
    </div>
  );
}

function Frame1206({ showHeight, isMetric }: { showHeight: boolean; isMetric: boolean }) {
  if (!showHeight) return null;
  return (
    <div className="absolute bottom-[9px] h-[27px] left-[106px] w-[36px]">
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-0 text-[#191c24] text-[20px] text-nowrap top-[calc(50%-14.5px)] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {isMetric ? 'cm' : "ft'in"}
      </p>
    </div>
  );
}

function Frame1207({ height }: { height?: string }) {
  if (!height) return null;
  return (
    <div className="absolute bottom-[4px] h-[49px] left-[14px] w-[88px]">
      <p className="absolute font-['Noto_Sans:Display_SemiBold',_sans-serif] font-semibold leading-[normal] left-[88px] text-[#191c24] text-[36px] text-nowrap text-right top-[calc(50%-25.5px)] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {height}
      </p>
    </div>
  );
}

export default function WeightDetails({ weight, height, bmi, loginMode, isMetric = true, displayLabel }: { weight: string; height?: string; bmi?: string; loginMode?: 'user-only' | 'patient-only' | 'both'; isMetric?: boolean; displayLabel?: string }) {
  const showHeight = !!height;
  const showBmi = !!bmi;
  const isUserOnly = loginMode === 'user-only';
  
  return (
    <div className="bg-[#e7ebf7] overflow-clip relative rounded-[12px] size-full" data-name="Weight + Details">
      <TechnicalWeighingDataPortrait isMetric={isMetric} />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[calc(50%+120px)] size-[27px] text-[#191c24] text-[20px] text-right top-[159px] translate-x-[-100%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        {isMetric ? 'kg' : 'lbs'}
      </p>
      <Locked24X24 />
      <Frame1257 weight={weight} />
      {!isUserOnly && (
        <>
          <CheckCircle />
          <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[12px] text-[#191c24] text-[20px] top-[33px] w-[240px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            Jane Doe
          </p>
          <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[12px] text-[#191c24] text-[13px] text-nowrap top-[60px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            1995/07/24
          </p>
          <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-[44px] text-[#06a94e] text-[20px] text-nowrap top-[6px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            Patient ID
          </p>
        </>
      )}
      <Frame1208 showBmi={showBmi} displayLabel={displayLabel} />
      <Frame1209 bmi={bmi} />
      <Frame1206 showHeight={showHeight} isMetric={isMetric} />
      <Frame1207 height={height} />
    </div>
  );
}