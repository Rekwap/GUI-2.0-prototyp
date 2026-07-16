import React from 'react';

/**
 * Landscape-Bühne: 480×272-Karte mittig auf dunklem Hintergrund,
 * rechts daneben das ControlPanel. Spiegelt das Portrait-Layout,
 * nur in Landscape-Kartengröße.
 */
export default function ScreenFrameLandscape({
  children,
  controls,
  zoomLevel = 100,
  dataName,
}: {
  children: React.ReactNode;
  controls?: React.ReactNode;
  zoomLevel?: number;
  dataName?: string;
}) {
  return (
    <div
      className="h-screen w-full flex items-center justify-center overflow-auto"
      style={{ gap: 'calc(2rem + 20px)', backgroundColor: '#202225' }}
    >
      <div
        className="bg-white relative shadow-[0px_4px_10px_2px_rgba(155,161,179,0.4)] w-[480px] h-[272px] flex-shrink-0"
        data-name={dataName}
        style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'center center' }}
      >
        {children}
      </div>
      {controls}
    </div>
  );
}
