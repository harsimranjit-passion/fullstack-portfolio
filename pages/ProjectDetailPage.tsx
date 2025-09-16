
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import AnimatedPage from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectIndex = projects.findIndex(p => p.id === id);
  const project = projects[projectIndex];
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <AnimatedPage>
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-serif text-white">Project Not Found</h1>
          <p className="mt-4 mb-8">The project you are looking for does not exist.</p>
          <Link to="/projects" className="text-gold hover:underline">Back to Projects</Link>
        </div>
      </AnimatedPage>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <AnimatedPage>
      <div className="pt-24">
        {/* Hero */}
        <div className="relative h-96 bg-neutral-800">
          <img src={project.gallery[0]} alt={`${project.title} hero`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-serif text-white text-center"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left Column: Details */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1"
            >
              <h2 className="font-serif text-2xl text-white mb-4">Overview</h2>
              <p className="mb-8">{project.description}</p>
              
              <h3 className="font-serif text-xl text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map(tech => (
                  <span key={tech} className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>

              <h3 className="font-serif text-xl text-white mb-4">Project Info</h3>
              <ul className="space-y-2 mb-8">
                <li><strong>Year:</strong> {project.year}</li>
              </ul>

              <div className="flex space-x-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-gold text-background font-bold py-2 px-6 rounded-full transition-transform hover:scale-105">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-neutral-600 text-neutral-text font-bold py-2 px-6 rounded-full transition-colors hover:bg-neutral-800">GitHub</a>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-serif text-3xl text-white mb-6">Case Study</h2>
              <p className="text-lg leading-relaxed">{project.longDescription}</p>

              <h2 className="font-serif text-3xl text-white mt-12 mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    className="aspect-video rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="border-t border-gold/10">
          <div className="container mx-auto px-6 py-8 flex justify-between items-center">
            <div>
              {prevProject && (
                <Link to={`/projects/${prevProject.id}`} className="group">
                  <span className="text-sm text-neutral-500">Previous Project</span>
                  <p className="text-lg text-white group-hover:text-gold transition-colors">&larr; {prevProject.title}</p>
                </Link>
              )}
            </div>
            <div>
              {nextProject && (
                <Link to={`/projects/${nextProject.id}`} className="group text-right">
                  <span className="text-sm text-neutral-500">Next Project</span>
                  <p className="text-lg text-white group-hover:text-gold transition-colors">{nextProject.title} &rarr;</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for Image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              layoutId={selectedImage}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking on image
            />
             <motion.button 
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
                whileHover={{scale: 1.2, color: '#D4AF37'}}
            >
                &times;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
};

export default ProjectDetailPage;
