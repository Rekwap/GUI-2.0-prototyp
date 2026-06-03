import React, { createContext, useContext, useState, ReactNode } from 'react';

export type BmiMode = 'bmi' | 'bsa-dubois' | 'bsa-haycock' | 'bsa-mosteller' | 'waist';

interface BmiSettingsContextType {
  selectedMode: BmiMode;
  setSelectedMode: (mode: BmiMode) => void;
  getDisplayLabel: () => string;
}

const BmiSettingsContext = createContext<BmiSettingsContextType | undefined>(undefined);

export function BmiSettingsProvider({ children }: { children: ReactNode }) {
  const [selectedMode, setSelectedMode] = useState<BmiMode>('bmi');

  const getDisplayLabel = () => {
    switch (selectedMode) {
      case 'bmi':
        return 'BMI';
      case 'bsa-dubois':
      case 'bsa-haycock':
      case 'bsa-mosteller':
        return 'BSA';
      case 'waist':
        return 'Waist';
      default:
        return 'BMI';
    }
  };

  return (
    <BmiSettingsContext.Provider value={{ selectedMode, setSelectedMode, getDisplayLabel }}>
      {children}
    </BmiSettingsContext.Provider>
  );
}

export function useBmiSettings() {
  const context = useContext(BmiSettingsContext);
  if (context === undefined) {
    throw new Error('useBmiSettings must be used within a BmiSettingsProvider');
  }
  return context;
}
