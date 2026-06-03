import MenuLayout, { MenuLayoutItem } from '../components/MenuLayout';

export default function Info({ 
  onBack, 
  onHome, 
  onUserManualClick, 
  onHelpClick, 
  onAboutClick 
}: { 
  onBack?: () => void; 
  onHome?: () => void; 
  onUserManualClick?: () => void; 
  onHelpClick?: () => void; 
  onAboutClick?: () => void 
}) {
  const items: MenuLayoutItem[] = [
    {
      label: 'User Manual',
      onClick: onUserManualClick
    },
    {
      label: 'Help',
      onClick: onHelpClick
    },
    {
      label: 'About',
      onClick: onAboutClick
    }
  ];

  return (
    <MenuLayout
      title="Info"
      items={items}
      onBack={onBack}
      onHome={onHome}
    />
  );
}
