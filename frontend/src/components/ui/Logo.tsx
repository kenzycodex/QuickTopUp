
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'dark' 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-primary-600';
  const bgGradient = variant === 'light' 
    ? 'from-white to-primary-100' 
    : 'from-primary-500 to-primary-600';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} aspect-square bg-gradient-to-br ${bgGradient} rounded-xl flex items-center justify-center shadow-lg`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`w-1/2 h-1/2 ${variant === 'light' ? 'text-primary-600' : 'text-white'}`}
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className={`font-bold text-xl ${textColor}`}>
        QuickTopUp
      </span>
    </div>
  );
};

export default Logo;
