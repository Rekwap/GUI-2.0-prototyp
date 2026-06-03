import MenuLayout, { MenuLayoutItem } from '../components/MenuLayout';

export default function Menu({ 
  onBack, 
  onHome, 
  onClose,
  onInfoClick, 
  onSettingsClick, 
  onServiceClick, 
  onRestartClick,
  onIntegrationInfoClick,
  onServerConnectionClick,
  showControlPanel,
  onToggleControlPanel
}: { 
  onBack?: () => void; 
  onHome?: () => void; 
  onClose?: () => void;
  onInfoClick?: () => void; 
  onSettingsClick?: () => void; 
  onServiceClick?: () => void; 
  onRestartClick?: () => void;
  onIntegrationInfoClick?: () => void;
  onServerConnectionClick?: () => void;
  showControlPanel?: boolean;
  onToggleControlPanel?: () => void;
}) {
  const items: MenuLayoutItem[] = [
    // {
    //   label: 'Info',
    //   onClick: onInfoClick
    // },
    {
      label: 'Settings',
      onClick: onSettingsClick,
      showLanguageIcon: true
    },
    // {
    //   label: 'Service',
    //   onClick: onServiceClick
    // },
    {
      label: 'Restart',
      onClick: onRestartClick
    }
  ];

  return (
    <MenuLayout
      title="Menu"
      items={items}
      onBack={onBack || onClose}
      onHome={onHome || onClose}
    />
  );
}