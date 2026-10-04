import React from 'react';

interface SkyOneLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const SkyOneLogo: React.FC<SkyOneLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showSubtitle = true
}) => {
  // Height sizing
  const sizeClasses = {
    sm: 'h-9 md:h-10',
    md: 'h-11 md:h-13',
    lg: 'h-14 md:h-18',
    xl: 'h-20 md:h-26'
  };

  const isDark = variant === 'dark';
  const blueColor = isDark ? '#60A5FA' : '#024BB2';
  const redColor = '#E5192D';
  const textColor = isDark ? '#FFFFFF' : '#024BB2';
  const subtextColor = '#E5192D';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 520 220"
        className={`${sizeClasses[size]} w-auto max-w-full block`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SkyOne International Courier Service"
        role="img"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isDark ? '#3B82F6' : '#0046B8'} />
            <stop offset="100%" stopColor={isDark ? '#60A5FA' : '#024BB2'} />
          </linearGradient>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5192D" />
            <stop offset="100%" stopColor="#F43F5E" />
          </linearGradient>
        </defs>

        {/* Dynamic Flight Swoosh Trajectory into Supersonic Dart */}
        <path
          d="M 270 65 C 330 45, 410 40, 480 20"
          stroke={redColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Supersonic Paper Airplane / Flight Arrow Dart */}
        <g transform="translate(480, 20) rotate(15)">
          <path
            d="M 0 0 L -30 -12 L -20 0 L -30 12 Z"
            fill={redColor}
          />
          <path
            d="M 0 0 L -20 0 L -28 3 Z"
            fill="#B91C1C"
          />
        </g>

        {/* Main Brandmark: SKY (Bold Italic Blue) */}
        <g transform="skewX(-16)">
          <text
            x="75"
            y="98"
            fontFamily="'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="68"
            fill={blueColor}
            letterSpacing="-1.5px"
          >
            SKY
          </text>

          {/* ONE in Red: 'O' with forward-pointing arrow cutout, 'NE' in bold italic red */}
          {/* 'O' Badge */}
          <g transform="translate(235, 42)">
            {/* Red slanted stadium / rounded rectangle */}
            <rect
              x="0"
              y="0"
              width="68"
              height="60"
              rx="18"
              fill={redColor}
            />
            {/* White dynamic arrow cutout inside the O */}
            <path
              d="M 18 42 L 44 18 M 28 18 L 46 17 L 45 35"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* 'NE' in Red */}
          <text
            x="312"
            y="98"
            fontFamily="'Cabinet Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="68"
            fill={redColor}
            letterSpacing="-1.5px"
          >
            NE
          </text>
        </g>

        {/* Lower Left Red Swoosh Underline */}
        <path
          d="M 45 125 C 90 105, 170 102, 255 103"
          stroke={redColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 45 125 C 38 127, 32 131, 35 136 C 40 143, 65 133, 105 124 Z"
          fill={redColor}
        />

        {showSubtitle && (
          <>
            {/* INTERNATIONAL */}
            <text
              x="260"
              y="142"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="800"
              fontSize="23"
              fill={textColor}
              letterSpacing="9px"
            >
              INTERNATIONAL
            </text>

            {/* Courier & Cargo Service flanked by horizontal divider rules */}
            <line
              x1="95"
              y1="172"
              x2="155"
              y2="172"
              stroke={subtextColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <text
              x="260"
              y="178"
              textAnchor="middle"
              fontFamily="'Plus Jakarta Sans', sans-serif"
              fontWeight="600"
              fontSize="19"
              fill={subtextColor}
              letterSpacing="1px"
            >
              Courier &amp; Cargo Service
            </text>
            <line
              x1="365"
              y1="172"
              x2="425"
              y2="172"
              stroke={subtextColor}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </div>
  );
};
