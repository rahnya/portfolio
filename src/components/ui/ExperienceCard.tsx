import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { Experience } from '../../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className={`flex items-stretch mb-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-secondary rounded-full my-2"></div>
        <div className="w-0.5 bg-primary/30 h-full"></div>
      </div>
      
      {/* Content */}
      <div 
        className={`card flex-1 p-6 mx-4 border-l-4 ${isEven ? 'border-secondary' : 'border-accent'} bg-white`}
      >
        <div className="flex items-center text-sm text-navy/60 mb-2">
          <CalendarDays size={16} className="mr-2" />
          <span>{experience.period}</span>
        </div>
        
        <h3 className="text-xl font-bold text-primary mb-1">
          {experience.title}
        </h3>
        <h4 className="text-lg font-medium text-secondary mb-3">
          {experience.company}
        </h4>
        
        <p className="text-navy/80 mb-4">{experience.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span 
              key={i} 
              className={`text-xs px-2 py-1 rounded-full ${
                isEven 
                  ? 'bg-secondary/10 text-secondary' 
                  : 'bg-accent/10 text-accent-dark'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;