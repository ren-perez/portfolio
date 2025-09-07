'use client'
import React from 'react';

interface FlowingRaysBackgroundProps {
  // Color customization (RGB values as strings, e.g., "249,115,22")
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  
  // Background settings
  showBackground?: boolean;
  backgroundColor?: string;
  
  // Opacity and intensity controls
  opacity?: number;
  threadOpacity?: number;
  pulseIntensity?: number;
  
  // Animation settings
  animationSpeed?: number;
  threadCount?: number;
  
  // Hero text background settings
  showHeroBackground?: boolean;
  heroBackgroundIntensity?: number;
  
  // Size and positioning
  viewBox?: string;
  className?: string;
}

export default function FlowingRaysBackground({
  primaryColor = "249,115,22", // orange-500
  secondaryColor = "251,146,60", // orange-400
  accentColor = "234,88,12", // orange-600
  showBackground = true,
  backgroundColor = "black",
  opacity = 1,
  threadOpacity = 1,
  pulseIntensity = 1,
  animationSpeed = 1,
  threadCount = 36,
  showHeroBackground = true,
  heroBackgroundIntensity = 0.6,
  viewBox = "0 -100 1200 800",
  className = ""
}: FlowingRaysBackgroundProps) {
  
  // Predefined thread paths from the original design
  const threadPaths = [
    "M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340",
    "M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370",
    "M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330",
    "M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390",
    "M60 725 Q220 600 380 550 Q540 500 680 530 Q820 560 960 470 Q1100 380 1280 350",
    "M150 735 Q300 660 480 610 Q660 560 800 590 Q940 620 1080 530 Q1220 440 1400 410",
    "M40 715 Q190 585 340 535 Q490 485 630 515 Q770 545 910 455 Q1050 365 1250 335",
    "M100 728 Q260 630 420 580 Q580 530 720 560 Q860 590 1000 500 Q1140 410 1320 380",
    "M30 722 Q170 595 310 545 Q450 495 590 525 Q730 555 870 465 Q1010 375 1180 345",
    "M90 732 Q240 625 390 575 Q540 525 680 555 Q820 585 960 495 Q1100 405 1300 375",
    "M70 727 Q210 605 360 555 Q510 505 650 535 Q790 565 930 475 Q1070 385 1260 355",
    "M110 738 Q270 645 430 595 Q590 545 730 575 Q870 605 1010 515 Q1150 425 1380 395",
    "M45 718 Q185 588 325 538 Q465 488 605 518 Q745 548 885 458 Q1025 368 1220 338",
    "M130 721 Q290 630 460 580 Q630 530 770 560 Q910 590 1050 500 Q1190 410 1350 380",
    "M25 713 Q165 583 305 533 Q445 483 585 513 Q725 543 865 453 Q1005 363 1200 333",
    "M85 719 Q235 605 385 555 Q535 505 675 535 Q815 565 955 475 Q1095 385 1320 355"
  ];

  // Thread properties
  const threadProperties = [
    { strokeWidth: 0.8, opacity: 0.8, radius: 2, duration: 4, fadeType: 1, pulseType: 1 },
    { strokeWidth: 1.5, opacity: 0.7, radius: 3, duration: 5, fadeType: 2, pulseType: 2 },
    { strokeWidth: 1.2, opacity: 0.8, radius: 2.5, duration: 4.5, fadeType: 3, pulseType: 1 },
    { strokeWidth: 0.6, opacity: 0.6, radius: 1.5, duration: 5.5, fadeType: 1, pulseType: 3 },
    { strokeWidth: 1.0, opacity: 0.7, radius: 2.2, duration: 4.2, fadeType: 2, pulseType: 2 },
    { strokeWidth: 1.3, opacity: 0.6, radius: 2.8, duration: 5.2, fadeType: 3, pulseType: 1 },
    { strokeWidth: 0.9, opacity: 0.8, radius: 2, duration: 4.8, fadeType: 1, pulseType: 3 },
    { strokeWidth: 1.4, opacity: 0.7, radius: 3, duration: 5.8, fadeType: 2, pulseType: 2 },
    { strokeWidth: 0.5, opacity: 0.6, radius: 1.2, duration: 6, fadeType: 3, pulseType: 1 },
    { strokeWidth: 1.1, opacity: 0.8, radius: 2.5, duration: 4.3, fadeType: 1, pulseType: 3 },
    { strokeWidth: 0.4, opacity: 0.5, radius: 1, duration: 5.7, fadeType: 2, pulseType: 2 },
    { strokeWidth: 1.5, opacity: 0.7, radius: 3.2, duration: 4.7, fadeType: 3, pulseType: 1 },
    { strokeWidth: 0.7, opacity: 0.6, radius: 1.8, duration: 5.3, fadeType: 1, pulseType: 3 },
    { strokeWidth: 1.0, opacity: 0.8, radius: 2.3, duration: 4.9, fadeType: 2, pulseType: 2 },
    { strokeWidth: 0.3, opacity: 0.4, radius: 0.8, duration: 6.2, fadeType: 3, pulseType: 1 },
    { strokeWidth: 1.5, opacity: 0.9, radius: 3.2, duration: 4.1, fadeType: 1, pulseType: 2 }
  ];

  // Generate additional paths if threadCount > 16
  const generateAdditionalPath = (index: number): string => {
    const baseIndex = index % 16;
    const variation = Math.floor(index / 16) * 20;
    const startY = 720 + variation;
    const path = threadPaths[baseIndex];
    
    // Simple variation by adding offset to Y coordinates
    return path.replace(/(\d+) (\d+)/g, (match, x, y) => {
      const newY = parseInt(y) + (variation * 0.5);
      return `${x} ${newY}`;
    });
  };

  const getThreadPath = (index: number): string => {
    return index < threadPaths.length ? threadPaths[index] : generateAdditionalPath(index);
  };

  const getThreadProps = (index: number) => {
    return threadProperties[index % threadProperties.length];
  };

  return (
    <div 
      className={`fixed inset-0 w-screen h-screen ${showBackground ? `bg-${backgroundColor}` : ''} ${className}`} 
      style={{ opacity }}
    >
      {/* Flowing wave rays overlay */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Neon pulse gradients */}
            <radialGradient id="neonPulse1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={`rgba(255,255,255,${pulseIntensity})`} />
              <stop offset="30%" stopColor={`rgba(${primaryColor},${pulseIntensity})`} />
              <stop offset="70%" stopColor={`rgba(${primaryColor},${pulseIntensity * 0.8})`} />
              <stop offset="100%" stopColor={`rgba(${primaryColor},0)`} />
            </radialGradient>
            
            <radialGradient id="neonPulse2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={`rgba(255,255,255,${pulseIntensity * 0.9})`} />
              <stop offset="25%" stopColor={`rgba(${secondaryColor},${pulseIntensity * 0.9})`} />
              <stop offset="60%" stopColor={`rgba(${accentColor},${pulseIntensity * 0.7})`} />
              <stop offset="100%" stopColor={`rgba(${accentColor},0)`} />
            </radialGradient>
            
            <radialGradient id="neonPulse3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={`rgba(255,255,255,${pulseIntensity})`} />
              <stop offset="35%" stopColor={`rgba(${secondaryColor},${pulseIntensity})`} />
              <stop offset="75%" stopColor={`rgba(${accentColor},${pulseIntensity * 0.6})`} />
              <stop offset="100%" stopColor={`rgba(${accentColor},0)`} />
            </radialGradient>

            {/* Full-screen hero text background gradients */}
            {showHeroBackground && (
              <>
                <radialGradient id="heroTextBg" cx="25%" cy="40%" r="80%">
                  <stop offset="0%" stopColor={`rgba(${primaryColor},${heroBackgroundIntensity * 0.2})`} />
                  <stop offset="30%" stopColor={`rgba(${secondaryColor},${heroBackgroundIntensity * 0.15})`} />
                  <stop offset="60%" stopColor={`rgba(${accentColor},${heroBackgroundIntensity * 0.1})`} />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
                
                <radialGradient id="heroTextBg2" cx="75%" cy="60%" r="70%">
                  <stop offset="0%" stopColor={`rgba(${secondaryColor},${heroBackgroundIntensity * 0.15})`} />
                  <stop offset="40%" stopColor={`rgba(${primaryColor},${heroBackgroundIntensity * 0.1})`} />
                  <stop offset="80%" stopColor={`rgba(${accentColor},${heroBackgroundIntensity * 0.05})`} />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>

                {/* Bottom darkening gradient */}
                <linearGradient id="bottomDarkening" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                  <stop offset="50%" stopColor="rgba(0,0,0,0)" />
                  <stop offset="75%" stopColor="rgba(0,0,0,0.2)" />
                  <stop offset="90%" stopColor="rgba(0,0,0,0.4)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.7)" />
                </linearGradient>
              </>
            )}

            {/* Thread fade gradients */}
            <linearGradient id="threadFade1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="15%" stopColor={`rgba(${primaryColor},${threadOpacity * 0.8})`} />
              <stop offset="85%" stopColor={`rgba(${primaryColor},${threadOpacity * 0.8})`} />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
            
            <linearGradient id="threadFade2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="12%" stopColor={`rgba(${secondaryColor},${threadOpacity * 0.7})`} />
              <stop offset="88%" stopColor={`rgba(${secondaryColor},${threadOpacity * 0.7})`} />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>
            
            <linearGradient id="threadFade3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,1)" />
              <stop offset="18%" stopColor={`rgba(${accentColor},${threadOpacity * 0.8})`} />
              <stop offset="82%" stopColor={`rgba(${accentColor},${threadOpacity * 0.8})`} />
              <stop offset="100%" stopColor="rgba(0,0,0,1)" />
            </linearGradient>

            {/* Filters */}
            <filter id="heroTextBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feTurbulence baseFrequency="0.5" numOctaves="3" result="noise" />
              <feColorMatrix in="noise" type="saturate" values="0" result="monoNoise" />
              <feComponentTransfer in="monoNoise" result="alphaAdjustedNoise">
                <feFuncA type="discrete" tableValues="0.02 0.04 0.06 0.08" />
              </feComponentTransfer>
              <feComposite in="blur" in2="alphaAdjustedNoise" operator="multiply" result="noisyBlur" />
              <feMerge>
                <feMergeNode in="noisyBlur" />
              </feMerge>
            </filter>
            
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g>
            {/* Full-screen hero text background shapes */}
            {showHeroBackground && (
              <>
                {/* Large ellipse covering most of the screen */}
                <ellipse
                  cx="600"
                  cy="400"
                  rx="800"
                  ry="500"
                  fill="url(#heroTextBg)"
                  filter="url(#heroTextBlur)"
                  opacity={heroBackgroundIntensity}
                />
                
                {/* Secondary ellipse for additional coverage */}
                <ellipse
                  cx="900"
                  cy="500"
                  rx="600"
                  ry="400"
                  fill="url(#heroTextBg2)"
                  filter="url(#heroTextBlur)"
                  opacity={heroBackgroundIntensity * 0.7}
                />
                
                {/* Extra large ellipse for full screen coverage */}
                <ellipse
                  cx="600"
                  cy="300"
                  rx="1000"
                  ry="600"
                  fill="url(#heroTextBg)"
                  filter="url(#heroTextBlur)"
                  opacity={heroBackgroundIntensity * 0.3}
                />

                {/* Bottom darkening overlay */}
                <rect
                  x="0"
                  y="0"
                  width="1200"
                  height="800"
                  fill="url(#bottomDarkening)"
                  opacity="1"
                />
              </>
            )}

            {/* Generate flowing threads */}
            {Array.from({ length: Math.min(threadCount, 50) }, (_, i) => {
              const props = getThreadProps(i);
              const path = getThreadPath(i);
              const adjustedDuration = props.duration / animationSpeed;
              
              return (
                <g key={i}>
                  <path
                    id={`thread${i + 1}`}
                    d={path}
                    stroke={`url(#threadFade${props.fadeType})`}
                    strokeWidth={props.strokeWidth}
                    fill="none"
                    opacity={props.opacity * threadOpacity}
                  />
                  <circle 
                    r={props.radius * pulseIntensity} 
                    fill={`url(#neonPulse${props.pulseType})`} 
                    opacity="1" 
                    filter="url(#neonGlow)"
                  >
                    <animateMotion dur={`${adjustedDuration}s`} repeatCount="indefinite">
                      <mpath href={`#thread${i + 1}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* CSS-based noise pattern for mobile fallback */}
      <div 
        className="absolute inset-0 w-full h-full md:hidden opacity-30"
        style={{
          background: `
            radial-gradient(circle at 25% 40%, rgba(${primaryColor}, ${heroBackgroundIntensity * 0.15}) 0%, transparent 60%),
            radial-gradient(circle at 75% 60%, rgba(${secondaryColor}, ${heroBackgroundIntensity * 0.1}) 0%, transparent 50%),
            linear-gradient(180deg, 
              rgba(0,0,0,0.1) 0%, 
              rgba(0,0,0,0.15) 40%, 
              rgba(0,0,0,0.3) 60%, 
              rgba(0,0,0,0.6) 80%, 
              rgba(0,0,0,0.9) 100%
            )
          `,
          filter: 'blur(8px)',
        }}
      />

      {/* Additional CSS noise texture */}
      <div 
        className="absolute inset-0 w-full h-full md:hidden opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(${primaryColor}, 0.03) 2px,
              rgba(${primaryColor}, 0.03) 3px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(${secondaryColor}, 0.02) 2px,
              rgba(${secondaryColor}, 0.02) 3px
            )
          `
        }}
      />

      <style jsx>{`
        @keyframes pulse1 {
          0%, 100% { 
            opacity: ${pulseIntensity * 0.4}; 
            transform: scale(${0.8 * pulseIntensity}); 
          }
          50% { 
            opacity: ${pulseIntensity}; 
            transform: scale(${1.2 * pulseIntensity}); 
          }
        }
        @keyframes pulse2 {
          0%, 100% { 
            opacity: ${pulseIntensity * 0.3}; 
            transform: scale(${0.9 * pulseIntensity}); 
          }
          50% { 
            opacity: ${pulseIntensity}; 
            transform: scale(${1.1 * pulseIntensity}); 
          }
        }
        @keyframes pulse3 {
          0%, 100% { 
            opacity: ${pulseIntensity * 0.5}; 
            transform: scale(${0.7 * pulseIntensity}); 
          }
          50% { 
            opacity: ${pulseIntensity}; 
            transform: scale(${1.3 * pulseIntensity}); 
          }
        }
      `}</style>
    </div>
  );
}

// Example usage component showing different color schemes
export function FlowingRaysDemo() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Full screen background with dark bottom */}
      <FlowingRaysBackground 
        heroBackgroundIntensity={0.8}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Flowing Rays</h1>
          <p className="text-xl opacity-80">Full screen animated background component</p>
        </div>
      </div>
    </div>
  );
}