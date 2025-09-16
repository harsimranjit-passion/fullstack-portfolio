
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import AnimatedPage from '../components/AnimatedPage';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const ProjectListPage: React.FC = () => {
  return (
    <AnimatedPage>
      <div className="container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-5xl text-white text-center mb-4">Selected Works</h1>
          <p className="text-center max-w-2xl mx-auto mb-16">
            A curated collection of projects that showcase my skills in design, development, and problem-solving. Each piece represents a unique challenge and a commitment to quality.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default ProjectListPage;
