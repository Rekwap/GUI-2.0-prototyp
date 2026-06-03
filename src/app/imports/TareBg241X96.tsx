import svgPaths from "./svg-o3d0k6qboa";
import { img } from "./svg-34ikl";

function Frame() {
  return (
    <div className="absolute h-[27px] left-[121px] top-[15px] w-[48px]">
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-end leading-[0] left-0 text-[#191c24] text-[20px] top-[calc(50%+13.5px)] translate-y-[-100%] w-[48px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">TARE</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[71px] top-[12px]">
      <div className="absolute h-[32px] left-[71px] top-[12px] w-[48px]" data-name="tare_48x32">
        <div className="absolute h-[20.5px] left-[calc(50%-0.001px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.999px_-5.995px] mask-size-[48px_32px] top-[calc(50%+0.245px)] translate-x-[-50%] translate-y-[-50%] w-[28px]" data-name=">T<" style={{ maskImage: `url('${img}')` }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 21">
            <g id=">T<">
              <path d={svgPaths.p39d5c840} fill="#191C24" />
              <path d={svgPaths.p15962cf0} fill="#191C24" />
              <path d={svgPaths.p31d52b00} fill="#191C24" />
            </g>
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}

export default function TareBg241X({ weight, onTareConfirm, onWeightClick, isMetric, onInfoClick }: { weight: string; onTareConfirm: () => void; onWeightClick?: () => void; isMetric: boolean; onInfoClick?: () => void }) {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Tare_bg_241x96">
      <div onClick={onTareConfirm} className="overflow-clip relative rounded-[inherit] size-full cursor-pointer hover:bg-gray-50 transition-colors">
        <div onClick={(e) => {
          e.stopPropagation();
          onTareConfirm();
        }} className="absolute bg-[#98b0d8] box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[8px] overflow-clip px-[12px] py-[4px] rounded-[4px] top-[56px] w-[225px] cursor-pointer" data-name="Tare Value">
          <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#191c24] text-[20px] text-center top-[16.5px] translate-x-[-50%] translate-y-[-50%] w-[160px] pointer-events-none" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[normal]">-{weight} {isMetric ? 'kg' : 'lbs'}</p>
          </div>
        </div>
        <div className="pointer-events-none">
          <Group />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d4d7] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_6px_0px_#191c24]" />
    </div>
  );
}