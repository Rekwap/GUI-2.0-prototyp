import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";

interface ControlPanelProps {
  heightMode: 'manual' | 'ultrasonic' | 'tactile';
  onHeightModeChange: (mode: 'manual' | 'ultrasonic' | 'tactile') => void;
  heightRequired: boolean;
  onHeightRequiredChange: (required: boolean) => void;
  installationMode: 'integrated' | 'standalone';
  onInstallationModeChange: (mode: 'integrated' | 'standalone') => void;
  isMetric: boolean;
  onIsMetricChange: (metric: boolean) => void;
  loginMode: 'user-only' | 'patient-only' | 'both';
  onLoginModeChange: (mode: 'user-only' | 'patient-only' | 'both') => void;
  testHeight: string;
  onTestHeightChange: (height: string) => void;
  ultrasonicAlternativeWorkflow: boolean;
  onUltrasonicAlternativeWorkflowChange: (enabled: boolean) => void;
  uniqueId?: string;
  onReset?: () => void;
  zoomLevel?: number;
  onZoomLevelChange?: (zoom: number) => void;
  landscapeVariant?: 'A' | 'B';
  onLandscapeVariantChange?: (variant: 'A' | 'B') => void;
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
  ultrasonicAlternativeWorkflow,
  onUltrasonicAlternativeWorkflowChange,
  uniqueId = '',
  onReset,
  zoomLevel = 100,
  onZoomLevelChange,
  landscapeVariant,
  onLandscapeVariantChange
}: ControlPanelProps) {
  return (
    <div className="flex flex-col h-[480px] w-[320px] p-6 bg-[rgb(233,233,233)] rounded-lg shadow-md flex-shrink-0 overflow-auto">
      <div className="flex flex-col gap-4">
        {/* Switches Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <Switch id={`height-required${uniqueId}`} checked={heightRequired} onCheckedChange={onHeightRequiredChange} />
            <Label htmlFor={`height-required${uniqueId}`}>Height Required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={`installation-mode${uniqueId}`} checked={installationMode === 'standalone'} onCheckedChange={(checked) => onInstallationModeChange(checked ? 'standalone' : 'integrated')} />
            <Label htmlFor={`installation-mode${uniqueId}`}>Stand Alone (Send disabled)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={`unit-system${uniqueId}`} checked={!isMetric} onCheckedChange={(checked) => onIsMetricChange(!checked)} />
            <Label htmlFor={`unit-system${uniqueId}`}>Imperial (lbs / ft'in)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id={`ultrasonic-alt-workflow${uniqueId}`} checked={ultrasonicAlternativeWorkflow} onCheckedChange={onUltrasonicAlternativeWorkflowChange} />
            <Label htmlFor={`ultrasonic-alt-workflow${uniqueId}`}>Ultrasonic Alt. Workflow</Label>
          </div>
        </div>

        {/* Landscape-Variante A/B (nur wenn aktiviert) */}
        {onLandscapeVariantChange && (
          <>
            <div className="border-t" />
            <div className="flex flex-col gap-2">
              <Label>Landscape-Variante</Label>
              <div className="flex flex-col gap-1">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`landscape-variant-a${uniqueId}`}
                    name={`landscape-variant${uniqueId}`}
                    checked={landscapeVariant === 'A'}
                    onChange={() => onLandscapeVariantChange('A')}
                  />
                  <Label htmlFor={`landscape-variant-a${uniqueId}`}>Variante A</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`landscape-variant-b${uniqueId}`}
                    name={`landscape-variant${uniqueId}`}
                    checked={landscapeVariant === 'B'}
                    onChange={() => onLandscapeVariantChange('B')}
                  />
                  <Label htmlFor={`landscape-variant-b${uniqueId}`}>Variante B</Label>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Separator */}
        <div className="border-t" />

        {/* Höhenmessung Modus Section */}
        <div className="flex flex-col gap-2">
          <Label>Höhenmessung Modus</Label>
          <div className="flex flex-col gap-1">
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`height-ultrasonic${uniqueId}`}
                name={`height-mode${uniqueId}`}
                checked={heightMode === 'ultrasonic'} 
                onChange={() => onHeightModeChange('ultrasonic')} 
              />
              <Label htmlFor={`height-ultrasonic${uniqueId}`}>Ultraschall</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`height-manual${uniqueId}`}
                name={`height-mode${uniqueId}`}
                checked={heightMode === 'manual'} 
                onChange={() => onHeightModeChange('manual')} 
              />
              <Label htmlFor={`height-manual${uniqueId}`}>Manuell</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="radio" 
                id={`height-tactile${uniqueId}`}
                name={`height-mode${uniqueId}`}
                checked={heightMode === 'tactile'} 
                onChange={() => onHeightModeChange('tactile')} 
              />
              <Label htmlFor={`height-tactile${uniqueId}`}>Taktil</Label>
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

        {/* Test Height Section */}
        <div className="flex flex-col gap-2">
          <Label htmlFor={`test-height${uniqueId}`}>Test Height (cm)</Label>
          <Input 
            type="text" 
            id={`test-height${uniqueId}`}
            value={testHeight || ''}
            onChange={(e) => onTestHeightChange(e.target.value)}
            placeholder="167.7"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
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
