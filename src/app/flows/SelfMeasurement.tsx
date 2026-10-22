// Start screen "Choose mode" and the self-measurement flow (GUI 2.1, section
// "07.05.2026"). Screens are 1:1 Figma exports; raster parts (illustrations
// whose SVG export embeds bitmaps or is too large) are Figma renders at 4x.
import { FigmaScreen, HitArea } from '../figma-screens/FigmaScreen';
import { SCREENS } from '../figma-screens/screens';
import scaleStepOn from '../figma-screens/assets/scale-step-on@4x.png';
import removeItems from '../figma-screens/assets/remove-items@4x.png';

function Raster({ src, w, h }: { src: string; w: number; h: number }) {
  return <img src={src} alt="" draggable={false} style={{ display: 'block', width: w, height: h, maxWidth: 'none' }} />;
}

/** Device mode: Guided (professional) vs. Self-Measurement. */
export function DeviceModeScreen({ onGuided, onSelf }: { onGuided: () => void; onSelf: () => void }) {
  return (
    <FigmaScreen
      data={SCREENS.deviceMode}
      onClick={{ 'I14010:59911;12922:60657': onGuided, 'I14010:59911;12922:60686': onSelf }}
    />
  );
}

/** Self-measurement start: "Step onto the scale." */
export function StepOnScaleScreen({ onStepOn }: { onStepOn?: () => void }) {
  const p = 'I14010:59948;';
  return (
    <FigmaScreen
      data={SCREENS.stepOnScale}
      replace={{
        [p + '15654:50504']: <Raster src={scaleStepOn} w={192} h={143} />,
        [p + '14488:36007']: <Raster src={removeItems} w={184} h={36} />,
      }}
    >
      {/* Stepping onto the platform is simulated by tapping the scale. */}
      {onStepOn && <HitArea x={40} y={195} w={192} h={143} label="Step onto the scale" onClick={onStepOn} />}
    </FigmaScreen>
  );
}
