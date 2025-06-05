import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import ExperienceCard from '../ui/ExperienceCard';
import { experiences, education } from '../../data/experiences';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  
  return (
    <section id="experience" className="section bg-gradient-to-b from-white to-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="section-title">Mon parcours</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={1} className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white p-1 rounded-full shadow-md">
              <button
                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                  activeTab === 'experience' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-navy hover:bg-primary/10'
                }`}
                onClick={() => setActiveTab('experience')}
              >
                <Briefcase size={18} className="mr-2" />
                Expérience
              </button>
              
              <button
                className={`flex items-center px-6 py-3 rounded-full transition-all ${
                  activeTab === 'education' 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-navy hover:bg-primary/10'
                }`}
                onClick={() => setActiveTab('education')}
              >
                <GraduationCap size={18} className="mr-2" />
                Formation
              </button>
            </div>
          </div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'experience' ? (
              <div className="max-w-3xl mx-auto">
                {experiences.map((experience, index) => (
                  <ExperienceCard key={experience.id} experience={experience} index={index} />
                ))}
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="flex mb-8"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-accent rounded-full my-2"></div>
                      <div className="w-0.5 bg-primary/30 h-full"></div>
                    </div>
                    
                    <motion.div 
                      className="card flex-1 p-6 mx-4 border-l-4 border-accent bg-white"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-center text-sm text-navy/60 mb-2">
                        <GraduationCap size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-medium text-accent-dark mb-3">
                        {edu.institution}
                      </h4>
                      
                      <p className="text-navy/80">{edu.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;