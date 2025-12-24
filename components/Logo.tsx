
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon'; // Future-proofing if needed
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Using the provided logo image URL */}
      <img 
        src="https://content.instruct-ai.com/api/v1/files/5465551c-99ea-46be-a90e-b2d9760777e4?apiKey=${process.env.API_KEY}" 
        alt="TriO Blockchain Labs" 
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
