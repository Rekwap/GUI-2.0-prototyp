import MenuLayout, { MenuLayoutItem } from '../components/MenuLayout';

export default function Service({ 
  onBack, 
  onHome, 
  onModuleInfoClick,
  onConfigurationModeClick,
  onServiceToolsClick,
  onFactoryResetClick,
  onSettingsLockClick
}: { 
  onBack?: () => void; 
  onHome?: () => void; 
  onModuleInfoClick?: () => void;
  onConfigurationModeClick?: () => void;
  onServiceToolsClick?: () => void;
  onFactoryResetClick?: () => void;
  onSettingsLockClick?: () => void;
}) {
  const items: MenuLayoutItem[] = [
    {
      label: 'Module Info',
      onClick: onModuleInfoClick
    },
    {
      label: 'Configuration Mode',
      onClick: onConfigurationModeClick
    },
    {
      label: 'Service Tools',
      onClick: onServiceToolsClick
    },
    {
      label: 'Factory Reset',
      onClick: onFactoryResetClick
    },
    {
      label: 'Settings Lock',
      onClick: onSettingsLockClick
    }
  ];

  return (
    <MenuLayout
      title="Service"
      items={items}
      onBack={onBack}
      onHome={onHome}
    />
  );
}
