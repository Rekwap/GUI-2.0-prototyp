import { useState } from 'react';
import MenuLayout, { MenuLayoutItem } from '../components/MenuLayout';

export default function Display({ 
  onBack, 
  onHome,
  onLanguageClick,
  onUnitsClick,
  onClearValuesClick,
  onBrightnessClick,
  onStandbyClick,
  onNameFormatClick,
  onDateFormatClick,
  onBmiBsaClick
}: { 
  onBack?: () => void; 
  onHome?: () => void; 
  onLanguageClick?: () => void;
  onUnitsClick?: () => void;
  onClearValuesClick?: () => void;
  onBrightnessClick?: () => void;
  onStandbyClick?: () => void;
  onNameFormatClick?: () => void;
  onDateFormatClick?: () => void;
  onBmiBsaClick?: () => void;
}) {
  const [currentPage, setCurrentPage] = useState(1);

  // All menu items
  const allItems: MenuLayoutItem[] = [
    {
      label: 'Language',
      onClick: onLanguageClick,
      showLanguageIcon: true
    },
    {
      label: 'Units',
      onClick: onUnitsClick
    },
    {
      label: 'Clear Values',
      onClick: onClearValuesClick
    },
    {
      label: 'Brightness',
      onClick: onBrightnessClick
    },
    {
      label: 'Standby',
      onClick: onStandbyClick
    },
    {
      label: 'Name Format',
      onClick: onNameFormatClick
    },
    {
      label: 'Date Format',
      onClick: onDateFormatClick
    },
    {
      label: 'BMI / BSA',
      onClick: onBmiBsaClick
    }
  ];

  // Split items into pages - 7 items per page (to leave space for paging element)
  const itemsPerPage = 7;
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allItems.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <MenuLayout
      title="Display"
      items={currentItems}
      onBack={onBack}
      onHome={onHome}
      paging={{
        currentPage,
        totalPages,
        onPrevPage: handlePrevPage,
        onNextPage: handleNextPage
      }}
    />
  );
}
