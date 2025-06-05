import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Palette, Monitor } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const titles = ["Développeuse Web", "Conceptrice UI/UX", "Créatrice", "Étudiante en MMI"];
  const [titleIndex, setTitleIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [titles.length]);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 text-primary/20"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <Code size={80} />
      </motion.div>
      
      <motion.div 
        className="absolute top-2/3 right-1/4 text-secondary/20"
        animate={{
          x: mousePosition.x * -0.01,
          y: mousePosition.y * -0.01,
        }}
        transition={{ type: 'spring', stiffness: 30 }}
      >
        <Palette size={60} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 left-1/3 text-accent/20"
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * 0.015,
        }}
        transition={{ type: 'spring', stiffness: 40 }}
      >
        <Monitor size={70} />
      </motion.div>
      
      {/* Custom cursor */}
      <motion.div
        className="custom-cursor bg-gradient-to-r from-primary to-secondary"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: '20px',
          height: '20px',
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy"
            >
              Bonjour, je suis <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Rahnya Lanyeri
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 h-12 flex items-center"
            >
              <h2 className="text-xl md:text-2xl font-medium text-navy/80">
                {/* Animated job title */}
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {titles[titleIndex]}
                </motion.span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-navy/70 text-lg max-w-lg"
            >
              Passionnée par le développement web et l'expérience utilisateur. 
              Actuellement en deuxième année de BUT MMI, je conçois et développe 
              des interfaces modernes et intuitives.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button onClick={scrollToProjects} variant="primary">
                Voir mes projets
              </Button>
              <Button onClick={scrollToContact} variant="outline">
                Me contacter
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-lg relative overflow-hidden">
              <div className="absolute inset-2 bg-cream rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Rahnya Lanyeri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-16 h-16 bg-accent rounded-lg animate-float" />
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-primary-light rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            window.scrollTo({
              top: aboutSection.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-navy/70 hover:text-secondary transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;