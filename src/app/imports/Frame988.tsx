import svgPaths from "./svg-fw13h1ldhl";

function Check() {
  return <div className="absolute bg-[#191c24] inset-0 rounded-[80px]" data-name="Check" />;
}

function Primary184X40() {
  return (
    <div className="absolute inset-[87.5%_19.23%_2.88%_19.23%]" data-name="primary_184x40">
      <Check />
    </div>
  );
}

function Group1084() {
  return (
    <div className="absolute contents left-[19.23%] right-[19.23%] top-[364px]">
      <Primary184X40 />
      <div className="absolute flex flex-col font-['Noto_Sans:Display_Medium',_sans-serif] font-medium justify-center leading-[0] left-[19.23%] right-[19.23%] text-[20px] text-center text-white top-[calc(50%+175.5px)] translate-y-[-50%]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[normal]">Okay</p>
      </div>
    </div>
  );
}

function Group1195() {
  return (
    <div className="absolute h-[211.454px] left-[calc(50%+0.486px)] top-[46.77px] translate-x-[-50%] w-[63.029px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 212">
        <g id="Group 1195">
          <g id="Group 1194">
            <ellipse cx="31.5149" cy="190.611" fill="var(--fill-0, black)" id="Ellipse 112" rx="31.5144" ry="20.8402" />
            <ellipse cx="31.5149" cy="189.596" fill="var(--fill-0, #5B5858)" id="Ellipse 110" rx="31.5144" ry="20.8402" />
          </g>
          <rect fill="var(--fill-0, #D9D9D9)" height="169.771" id="Rectangle 786" width="12.1991" x="25.4147" y="20.3308" />
          <ellipse cx="31.5144" cy="21.8545" fill="var(--fill-0, black)" id="Ellipse 111" rx="31.5144" ry="20.8402" />
          <ellipse cx="31.5144" cy="20.8402" fill="var(--fill-0, #5B5858)" id="Ellipse 109" rx="31.5144" ry="20.8402" />
          <path d={svgPaths.p1ea70f00} fill="var(--fill-0, #888888)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame988() {
  return (
    <div className="bg-white relative rounded-[8px] size-full">
      <Group1084 />
      <Group1195 />
      <p className="absolute font-['Noto_Sans:Display_Medium',_sans-serif] font-medium leading-[normal] left-1/2 text-[#191c24] text-[16px] text-center top-[292px] translate-x-[-50%] w-[244px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        Für diesen Prozess wird der mitgelieferte Kalibrierstab benötigt.
      </p>
    </div>
  );
}