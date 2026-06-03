import MenuLayout, { MenuLayoutItem } from '../components/MenuLayout';

export default function Settings({ 
  onBack, 
  onHome, 
  onDisplayClick,
  onWeightClick,
  onNetworkClick,
  onRS232Click,
  onHeightClick,
  onAudioClick,
  onBatteryClick,
  showControlPanel,
  onToggleControlPanel
}: { 
  onBack?: () => void; 
  onHome?: () => void; 
  onDisplayClick?: () => void;
  onWeightClick?: () => void;
  onNetworkClick?: () => void;
  onRS232Click?: () => void;
  onHeightClick?: () => void;
  onAudioClick?: () => void;
  onBatteryClick?: () => void;
  showControlPanel?: boolean;
  onToggleControlPanel?: () => void;
}) {
  const items: MenuLayoutItem[] = [
    {
      label: 'Display',
      onClick: onDisplayClick,
      showLanguageIcon: true
    },
    {
      label: 'Weight',
      onClick: onWeightClick
    },
    {
      label: 'Network',
      onClick: onNetworkClick
    },
    {
      label: 'RS232',
      onClick: onRS232Click
    },
    {
      label: 'Height',
      onClick: onHeightClick
    },
    {
      label: 'Audio',
      onClick: onAudioClick
    },
    {
      label: 'Battery',
      onClick: onBatteryClick
    },
    {
      label: `Control Panel ${showControlPanel ? '(Ein)' : '(Aus)'}`,
      onClick: onToggleControlPanel
    }
  ];

  return (
    <MenuLayout
      title="Settings"
      items={items}
      onBack={onBack}
      onHome={onHome}
    />
  );
}