
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group"
    >
      <Link to={`/projects/${project.id}`} className="block overflow-hidden rounded-lg">
        <div className="relative aspect-[4/3] bg-neutral-800">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-gold border border-gold px-4 py-2 rounded-full text-sm">View Details</span>
          </div>
        </div>
        <div className="p-4 bg-neutral-900/50">
          <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors duration-300">{project.title}</h3>
          <p className="text-sm mt-1 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map(tech => (
              <span key={tech} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
