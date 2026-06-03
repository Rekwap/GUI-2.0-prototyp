import { useState } from 'react';
import MenuLayout, { MenuLayoutItem } from '../components/MenuLayout';

export default function Language({ 
  onBack, 
  onHome 
}: { 
  onBack?: () => void; 
  onHome?: () => void; 
}) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  const languages = ['English', 'Deutsch', 'Français', 'Español'];

  const items: MenuLayoutItem[] = languages.map(lang => ({
    label: lang,
    onClick: () => setSelectedLanguage(lang),
    showRadioButton: true,
    radioSelected: selectedLanguage === lang
  }));

  return (
    <MenuLayout
      title="Language"
      items={items}
      onBack={onBack}
      onHome={onHome}
    />
  );
}
