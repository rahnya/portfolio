import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../ui/ProjectCard';
import projects from '../../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="section bg-cream/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <h2 className="section-title">Mes réalisations</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={1} className="mb-8">
          <div className="flex items-center justify-center flex-wrap gap-2">
            <div className="bg-white p-1 rounded-full shadow-md flex items-center mr-3">
              <Filter size={16} className="ml-3 text-navy/60" />
              
              <div className="flex overflow-x-auto py-1 px-2 scrollbar-hide">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      filter === category
                        ? 'bg-primary text-white'
                        : 'text-navy hover:bg-primary/10'
                    }`}
                    onClick={() => setFilter(category)}
                  >
                    {category === 'all' ? 'Tous' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;