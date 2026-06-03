import { useState } from 'react';
import MenuLayout, { MenuLayoutItem } from './MenuLayout';
import { useBmiSettings, BmiMode } from '../contexts/BmiSettingsContext';

export default function BmiBsaMenu({ 
  onBack, 
  onHome
}: { 
  onBack?: () => void; 
  onHome?: () => void; 
}) {
  const { selectedMode, setSelectedMode } = useBmiSettings();
  
  // Map the context mode to local state type
  const getLocalMode = (mode: BmiMode): 'bmi' | 'dubois' | 'haycock' | 'mosteller' | 'waist' => {
    switch (mode) {
      case 'bmi': return 'bmi';
      case 'bsa-dubois': return 'dubois';
      case 'bsa-haycock': return 'haycock';
      case 'bsa-mosteller': return 'mosteller';
      case 'waist': return 'waist';
      default: return 'bmi';
    }
  };

  const getContextMode = (local: 'bmi' | 'dubois' | 'haycock' | 'mosteller' | 'waist'): BmiMode => {
    switch (local) {
      case 'bmi': return 'bmi';
      case 'dubois': return 'bsa-dubois';
      case 'haycock': return 'bsa-haycock';
      case 'mosteller': return 'bsa-mosteller';
      case 'waist': return 'waist';
    }
  };

  const localMode = getLocalMode(selectedMode);

  const menuItems: MenuLayoutItem[] = [
    {
      label: 'BMI',
      onClick: () => setSelectedMode('bmi'),
      showRadioButton: true,
      radioSelected: localMode === 'bmi'
    },
    {
      label: 'BSA (DuBois)',
      onClick: () => setSelectedMode('bsa-dubois'),
      showRadioButton: true,
      radioSelected: localMode === 'dubois'
    },
    {
      label: 'BSA (Haycock)',
      onClick: () => setSelectedMode('bsa-haycock'),
      showRadioButton: true,
      radioSelected: localMode === 'haycock'
    },
    {
      label: 'BSA (Mosteller)',
      onClick: () => setSelectedMode('bsa-mosteller'),
      showRadioButton: true,
      radioSelected: localMode === 'mosteller'
    },
    {
      label: 'Waist Circumference',
      onClick: () => setSelectedMode('waist'),
      showRadioButton: true,
      radioSelected: localMode === 'waist'
    }
  ];

  return (
    <MenuLayout
      title="BMI / BSA"
      items={menuItems}
      onBack={onBack}
      onHome={onHome}
    />
  );
}