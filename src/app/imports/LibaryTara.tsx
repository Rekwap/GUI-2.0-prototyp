import svgPaths from "./svg-ghfkmimwkx";

function Reweight24X24() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="reweight_24x24">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reweight_24x24">
          <mask height="24" id="mask0_3_1011" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_3_1011)">
            <path d={svgPaths.p3f15cd80} fill="var(--fill-0, #1C1B1F)" id="autorenew" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Reweight() {
  return (
    <div className="bg-[#98b0d8] h-[36px] overflow-clip relative rounded-[30px] shrink-0 w-[54px]" data-name="Reweight">
      <Reweight24X24 />
    </div>
  );
}

function TareValue() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[13px] top-[12px]" data-name="Tare Value">
      <Reweight />
    </div>
  );
}

export default function LibaryTara() {
  return (
    <div className="relative size-full" data-name="Libary_TARA">
      <TareValue />
    </div>
  );
}