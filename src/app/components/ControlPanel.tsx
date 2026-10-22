import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

interface ControlPanelProps {
  heightMode: 'manual' | 'ultrasonic' | 'tactile';
  onHeightModeChange: (mode: 'manual' | 'ultrasonic' | 'tactile') => void;
  heightRequired: boolean;
  onHeightRequiredChange: (required: boolean) => void;
  installationMode: 'integrated' | 'standalone' | 'simpleprint';
  onInstallationModeChange: (mode: 'integrated' | 'standalone' | 'simpleprint') => void;
  isMetric: boolean;
  onIsMetricChange: (metric: boolean) => void;
  loginMode: 'user-only' | 'patient-only' | 'both';
  onLoginModeChange: (mode: 'user-only' | 'patient-only' | 'both') => void;
  testHeight: string;
  onTestHeightChange: (height: string) => void;
  testWeight?: string;
  onTestWeightChange?: (weight: string) => void;
  /** Global pre-tare (kg), applied before every measurement. Empty = off. */
  pretare?: string;
  onPretareChange?: (kg: string) => void;
  /** Simulate the patient stepping off the scale (ends assistant tares). */
  onStepOff?: () => void;
  uniqueId?: string;
  onReset?: () => void;
  zoomLevel?: number;
  onZoomLevelChange?: (zoom: number) => void;
  /** Simulate a barcode scan (direct login without the send wizard). */
  onScanBarcode?: (kind: 'patient' | 'user') => void;
  /** Self-measurement: only ultrasonic height measurement is available. */
  ultrasonicOnly?: boolean;
  /** Simple print: a printout is being produced (no feedback on the device screen). */
  printing?: boolean;
}

function ScanButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className="ml-auto -my-[2px] flex items-center justify-center size-[20px] rounded-[4px] text-gray-500 hover:text-black hover:bg-gray-300 cursor-pointer"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <rect x="1" y="2" width="1.5" height="12" /><rect x="3.5" y="2" width="1" height="12" /><rect x="5.5" y="2" width="2" height="12" />
        <rect x="8.5" y="2" width="1" height="12" /><rect x="10.5" y="2" width="1.5" height="12" /><rect x="13" y="2" width="2" height="12" />
      </svg>
    </button>
  );
}

export default function ControlPanel({
  heightMode,
  onHeightModeChange,
  heightRequired,
  onHeightRequiredChange,
  installationMode,
  onInstallationModeChange,
  isMetric,
  onIsMetricChange,
  loginMode,
  onLoginModeChange,
  testHeight,
  onTestHeightChange,
  testWeight,
  onTestWeightChange,
  pretare,
  onPretareChange,
  onStepOff,
  uniqueId = '',
  onReset,
  zoomLevel = 100,
  onZoomLevelChange,
  onScanBarcode,
  ultrasonicOnly = false,
  printing = false
}: ControlPanelProps) {
  return (
    <div className="flex flex-col h-[480px] w-[320px] p-6 bg-[rgb(233,233,233)] rounded-lg shadow-md flex-shrink-0 overflow-auto">
      <div className="flex flex-col gap-4">
        <p className="text-[#d4183d] font-extrabold uppercase tracking-wide text-lg leading-tight">Only for internal use</p>

        {/* Switches Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <Switch id={`height-required${uniqueId}`} checked={heightRequired} onCheckedChange={onHeightRequiredChange} />
            <Label htmlFor={`height-required${uniqueId}`}>Height Required</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id={`unit-system${uniqueId}`} checked={!isMetric} onCheckedChange={(checked) => onIsMetricChange(!checked)} />
            <Label htmlFor={`unit-system${uniqueId}`}>Imperial (lbs / ft'in)</Label>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t" />

        {/* Installation Section */}
        <div className="flex flex-col gap-2">
          <Label>Installation</Label>
          <div className="flex flex-col gap-1">
            {([['integrated', 'Integrated'], ['standalone', 'Stand Alone'], ['simpleprint', 'Simple Print']] as const).map(([value, label]) => (
              <div key={value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`installation-${value}${uniqueId}`}
                  name={`installation${uniqueId}`}
                  checked={installationMode === value}
                  onChange={() => onInstallationModeChange(value)}
                />
                <Label htmlFor={`installation-${value}${uniqueId}`}>{label}</Label>
                {value === 'simpleprint' && printing && <span className="text-xs text-gray-600 italic">Printing…</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="border-t" />

        {/* Height measurement mode section */}
        <div className="flex flex-col gap-2">
          <Label>Height Measurement Mode</Label>
          <div className="flex flex-col gap-1">
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`height-ultrasonic${uniqueId}`}
                name={`height-mode${uniqueId}`}
                checked={ultrasonicOnly || heightMode === 'ultrasonic'} 
                onChange={() => onHeightModeChange('ultrasonic')} 
                disabled={ultrasonicOnly}
              />
              <Label htmlFor={`height-ultrasonic${uniqueId}`}>Ultrasonic</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`height-manual${uniqueId}`}
                name={`height-mode${uniqueId}`}
                checked={!ultrasonicOnly && heightMode === 'manual'} 
                onChange={() => onHeightModeChange('manual')} 
                disabled={ultrasonicOnly}
              />
              <Label htmlFor={`height-manual${uniqueId}`} className={ultrasonicOnly ? 'opacity-40' : undefined}>Manual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`height-tactile${uniqueId}`}
                name={`height-mode${uniqueId}`}
                checked={!ultrasonicOnly && heightMode === 'tactile'} 
                onChange={() => onHeightModeChange('tactile')} 
                disabled={ultrasonicOnly}
              />
              <Label htmlFor={`height-tactile${uniqueId}`} className={ultrasonicOnly ? 'opacity-40' : undefined}>Tactile</Label>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t" />

        {/* Login Mode Section */}
        <div className="flex flex-col gap-2">
          <Label>Login Mode</Label>
          <div className="flex flex-col gap-1">
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`login-patient${uniqueId}`}
                name={`login-mode${uniqueId}`}
                checked={loginMode === 'patient-only'} 
                onChange={() => onLoginModeChange('patient-only')} 
              />
              <Label htmlFor={`login-patient${uniqueId}`}>Patient Only</Label>
              {onScanBarcode && <ScanButton label="Patient-Barcode scannen" onClick={() => onScanBarcode('patient')} />}
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`login-user${uniqueId}`}
                name={`login-mode${uniqueId}`}
                checked={loginMode === 'user-only'} 
                onChange={() => onLoginModeChange('user-only')} 
              />
              <Label htmlFor={`login-user${uniqueId}`}>User Only</Label>
              {onScanBarcode && <ScanButton label="User-Barcode scannen" onClick={() => onScanBarcode('user')} />}
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`login-both${uniqueId}`}
                name={`login-mode${uniqueId}`}
                checked={loginMode === 'both'} 
                onChange={() => onLoginModeChange('both')} 
              />
              <Label htmlFor={`login-both${uniqueId}`}>Both</Label>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t" />

        {/* Test values: weight, height, global pre-tare */}
        <div className="grid grid-cols-3 gap-2">
          {onTestWeightChange && (
          <div className="flex flex-col gap-1 min-w-0">
            <Label htmlFor={`test-weight${uniqueId}`} className="text-xs">Weight (kg)</Label>
            <Input
              type="text"
              inputMode="decimal"
              id={`test-weight${uniqueId}`}
              value={testWeight || ''}
              onChange={(e) => onTestWeightChange(e.target.value)}
              placeholder="54.80"
              className="w-full h-8 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          )}
          <div className="flex flex-col gap-1 min-w-0">
            <Label htmlFor={`test-height${uniqueId}`} className="text-xs">Height (cm)</Label>
            <Input
              type="text"
              inputMode="decimal"
              id={`test-height${uniqueId}`}
              value={testHeight || ''}
              onChange={(e) => onTestHeightChange(e.target.value)}
              placeholder="167.7"
              className="w-full h-8 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {onPretareChange && (
          <div className="flex flex-col gap-1 min-w-0">
            <Label htmlFor={`pretare${uniqueId}`} className="text-xs">Pre-tare (kg)</Label>
            <Input
              type="text"
              inputMode="decimal"
              id={`pretare${uniqueId}`}
              value={pretare || ''}
              onChange={(e) => onPretareChange(e.target.value)}
              placeholder="0.00"
              className="w-full h-8 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          )}
        </div>
        {onStepOff && (
          <button
            type="button"
            onClick={onStepOff}
            className="-mt-2 self-start text-xs text-gray-700 underline underline-offset-2 hover:text-black cursor-pointer"
          >
            Step off scale
          </button>
        )}
      </div>
      
      {/* Reset Button */}
      {onReset && (
        <div className="mt-auto border-t pt-4">
          <button 
            onClick={onReset}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-center w-full"
          >
            Reset
          </button>
        </div>
      )}

      {/* Zoom Control Section - Below Reset */}
      {onZoomLevelChange && (
        <div className="border-t pt-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor={`zoom-level${uniqueId}`} className="text-xs text-gray-600">Zoom ({zoomLevel}%)</Label>
              <button 
                onClick={() => onZoomLevelChange(100)}
                className="text-xs px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              >
                Reset
              </button>
            </div>
            <Slider 
              id={`zoom-level${uniqueId}`}
              min={50}
              max={150}
              step={1}
              value={[zoomLevel]}
              onValueChange={(value) => onZoomLevelChange(value[0])}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>50%</span>
              <span>100%</span>
              <span>150%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
