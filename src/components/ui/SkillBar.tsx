import React from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, className = '' }) => {
  const percentage = (level / 5) * 100;
  
  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-navy">{name}</span>
        <span className="text-sm text-navy/70">{level}/5</span>
      </div>
      <div className="h-2 bg-cream rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;