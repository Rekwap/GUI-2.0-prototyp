import { useState, useEffect } from 'react';
import { 
  HeaderPortrait,
  Frame988,
  Frame989,
  Frame990,
  Frame991,
  Frame992,
  Frame993,
  Frame994,
  Frame995,
  Frame996,
  Frame997,
  Frame998,
  Frame999
} from '../imports/Frame1259';

// Screen wrapper that combines the fixed header with changing content
function Screen({ 
  children, 
  onBack, 
  onHome, 
  onButtonClick,
  hideBackHomeIcons = false
}: { 
  children: React.ReactNode; 
  onBack?: () => void;
  onHome?: () => void;
  onButtonClick?: () => void;
  hideBackHomeIcons?: boolean;
}) {
  return (
    <div className="relative w-[272px] h-[480px] bg-white overflow-hidden">
      {/* Fixed Header */}
      <div className="absolute left-0 top-0 w-[272px] h-[50px]">
        <HeaderPortrait />
        {/* Hide back and home icons during diashows */}
        {hideBackHomeIcons && (
          <>
            <div className="absolute left-0 top-0 w-[50px] h-[50px] bg-[#191c24] z-10" />
            <div className="absolute right-0 top-0 w-[50px] h-[50px] bg-[#191c24] z-10" />
          </>
        )}
      </div>
      
      {/* Content area with white box */}
      <div className="absolute left-0 top-[50px] w-[272px] h-[430px] relative">
        {children}
      </div>
      
      {/* Overlay invisible buttons for interactivity */}
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute left-0 top-0 w-[50px] h-[50px] z-50 cursor-pointer opacity-0"
          aria-label="Back"
        />
      )}
      {onHome && (
        <button 
          onClick={onHome}
          className="absolute right-0 top-0 w-[50px] h-[50px] z-50 cursor-pointer opacity-0"
          aria-label="Home"
        />
      )}
      {onButtonClick && (
        <button 
          onClick={onButtonClick}
          className="absolute bottom-[12px] left-1/2 translate-x-[-50%] w-[184px] h-[40px] z-50 cursor-pointer opacity-0"
          aria-label="Next"
        />
      )}
    </div>
  );
}

export default function HeightCalibration({ 
  onBack, 
  onHome 
}: { 
  onBack?: () => void; 
  onHome?: () => void; 
}) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isRotating2, setIsRotating2] = useState(false);

  const handleNext = () => {
    if (currentScreen < 11) {
      if (currentScreen === 2) {
        // Starting the first rotation when clicking "Start" on screen 2
        setIsRotating(true);
        setCurrentScreen(3);
      } else if (currentScreen === 7) {
        // Starting the second rotation when clicking "Continue" on screen 7
        setIsRotating2(true);
        setCurrentScreen(8);
      } else {
        setCurrentScreen(currentScreen + 1);
      }
    } else {
      // Finish calibration
      onBack?.();
    }
  };

  const handleBack = () => {
    if (currentScreen > 0 && currentScreen < 3) {
      // Allow back on screens 0-2
      setCurrentScreen(currentScreen - 1);
    } else if (currentScreen === 0) {
      // On first screen, go back to settings
      onBack?.();
    }
    // During calibration Diashow (screens 3-10) and success (11), disable back
  };

  // Rotation logic for frames 991, 992, 993 (screens 3, 4, 5) for 4.6 seconds
  useEffect(() => {
    if (!isRotating) return;

    let rotationIndex = 0; // 0 = screen 3, 1 = screen 4, 2 = screen 5
    const rotationFrames = [3, 4, 5]; // Frame991, Frame992, Frame993
    const rotationInterval = 800; // 800ms per frame
    const totalDuration = 4600; // 4.6 seconds total
    
    let elapsedTime = 0;
    
    // Interval to rotate through frames
    const interval = setInterval(() => {
      elapsedTime += rotationInterval;
      
      if (elapsedTime >= totalDuration) {
        // Stop rotation and move to screen 6 (Frame994)
        clearInterval(interval);
        setIsRotating(false);
        setCurrentScreen(6);
      } else {
        // Rotate to next frame
        rotationIndex = (rotationIndex + 1) % 3;
        setCurrentScreen(rotationFrames[rotationIndex]);
      }
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [isRotating]);

  // Second rotation logic for frames 996, 997, 998 (screens 8, 9, 10) for 4.6 seconds
  useEffect(() => {
    if (!isRotating2) return;

    let rotationIndex = 0; // 0 = screen 8, 1 = screen 9, 2 = screen 10
    const rotationFrames = [8, 9, 10]; // Frame996, Frame997, Frame998
    const rotationInterval = 800; // 800ms per frame
    const totalDuration = 4600; // 4.6 seconds total
    
    let elapsedTime = 0;
    
    // Interval to rotate through frames
    const interval = setInterval(() => {
      elapsedTime += rotationInterval;
      
      if (elapsedTime >= totalDuration) {
        // Stop rotation and move to screen 11 (Frame999 - Success)
        clearInterval(interval);
        setIsRotating2(false);
        setCurrentScreen(11);
      } else {
        // Rotate to next frame
        rotationIndex = (rotationIndex + 1) % 3;
        setCurrentScreen(rotationFrames[rotationIndex]);
      }
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [isRotating2]);

  // Array of content frames
  const contentFrames = [
    Frame988,   // 0: Info
    Frame989,   // 1: Kalibrierstab
    Frame990,   // 2: Kein Gewicht
    Frame991,   // 3: Start
    Frame992,   // 4: Calibrating 1
    Frame993,   // 5: Calibrating 2
    Frame994,   // 6: First step completed
    Frame995,   // 7: Next screen
    Frame996,   // 8: Screen
    Frame997,   // 9: Screen
    Frame998,   // 10: Screen
    Frame999,   // 11: Success
  ];

  const CurrentContent = contentFrames[currentScreen];
  const showButton = currentScreen <= 2 || currentScreen === 6 || currentScreen === 7 || currentScreen === 11; // Button at start, Frame994, Frame995, and success
  const showBackButton = (currentScreen < 3 || currentScreen === 6 || currentScreen === 7 || currentScreen === 11) && !isRotating && !isRotating2; // Back enabled at Frame994 and Frame995, but hidden during diashows
  const showHomeButton = !isRotating && !isRotating2; // Hide home button during diashows
  const hideBackHomeIcons = isRotating || isRotating2; // Hide icons during both diashows

  return (
    <Screen
      onBack={showBackButton ? handleBack : undefined}
      onHome={showHomeButton ? onHome : undefined}
      onButtonClick={showButton ? handleNext : undefined}
      hideBackHomeIcons={hideBackHomeIcons}
    >
      <CurrentContent />
    </Screen>
  );
}
