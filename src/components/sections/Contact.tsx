import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-gradient-to-b from-cream/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="section-title">Contact</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-10">
          <AnimatedSection delay={1}>
            <h3 className="text-2xl font-display font-bold text-primary mb-6">
              Travaillons ensemble
            </h3>
            
            <p className="text-navy/80 mb-8">
              Vous avez un projet en tête ? Vous souhaitez collaborer ou simplement discuter ? 
              N'hésitez pas à me contacter, je serai ravie d'échanger avec vous.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Email</h4>
                  <p className="text-navy/70">rahnyapro@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-secondary/10 text-secondary mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Téléphone</h4>
                  <p className="text-navy/70">+33 7 69 43 07 54</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-accent/10 text-accent-dark mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Localisation</h4>
                  <p className="text-navy/70">Toulon, France</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rahnya-lanyeri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              
              <a 
                href="https://github.com/rahnya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-navy/10 text-navy hover:bg-navy hover:text-white transition-all"
              >
                <Github size={20} />
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={2}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;