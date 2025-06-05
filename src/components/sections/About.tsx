import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brush, BookOpen, Coffee } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SkillBar from '../ui/SkillBar';
import { skills } from '../../data/experiences';

const About: React.FC = () => {
  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  const skillCategories = [
    { title: 'Frontend', icon: <Code2 size={20} />, skills: frontendSkills },
    { title: 'Backend', icon: <BookOpen size={20} />, skills: backendSkills },
    { title: 'Design', icon: <Brush size={20} />, skills: designSkills },
    { title: 'Outils', icon: <Coffee size={20} />, skills: toolsSkills },
  ];
  
  return (
    <section id="about" className="section bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="section-title">À mon sujet</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={1}>
            <div className="relative">
              <div className="w-full rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="moi.jpg" 
                  alt="Rahnya travaillant sur un projet" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={2}>
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Qui suis-je ?
            </h3>
            
            <p className="text-navy/80 mb-4">
              Je m'appelle Rahnya Lanyeri, j'ai 20 ans et je suis actuellement en deuxième année de BUT Métiers du Multimédia et de l'Internet, 
              parcours Développement Web et Dispositifs Interactifs.
            </p>
            
            <p className="text-navy/80 mb-6">
              Passionnée par le développement web et le design d'interfaces, je m'efforce de créer des expériences numériques 
              qui allient esthétique et fonctionnalité. J'aime particulièrement travailler sur des projets qui ont un impact positif 
              et qui répondent à de véritables besoins utilisateurs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-primary">
                <Code2 size={20} className="mr-2" />
                <span>Développement</span>
              </div>
              
              <div className="flex items-center text-secondary">
                <Brush size={20} className="mr-2" />
                <span>Design UI/UX</span>
              </div>
              
              <div className="flex items-center text-accent-dark">
                <BookOpen size={20} className="mr-2" />
                <span>Apprentissage continu</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection delay={3} className="mt-16">
          <h3 className="text-2xl font-display font-bold text-primary mb-8">
            Mes compétences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full text-primary mr-3">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-navy">
                    {category.title}
                  </h4>
                </div>
                
                <div>
                  {category.skills.map(skill => (
                    <SkillBar key={skill.id} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;