
import React from 'react';
import { Link } from 'react-router-dom';
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
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TechBadge: React.FC<{ name: string }> = ({ name }) => (
    <motion.div variants={fadeIn} className="bg-neutral-800 text-gold-light py-2 px-4 rounded-md text-center transition-all duration-300 hover:bg-gold hover:text-background hover:shadow-lg hover:shadow-gold/20">
        {name}
    </motion.div>
);

const LandingPage: React.FC = () => {
  const featuredProjects = projects.slice(0, 2);
  const techStack = ["React", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "GraphQL", "Next.js", "Python"];

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.1),rgba(255,255,255,0))] -z-10"></div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-10 px-4"
        >
          <motion.h1 variants={fadeIn} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-serif text-white mb-4">
            Crafting Luxury Digital Experiences
          </motion.h1>
          <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="text-lg md:text-xl text-neutral-text max-w-2xl mx-auto mb-8">
            A full-stack developer specializing in bespoke web applications with a focus on premium design and flawless performance.
          </motion.p>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.4 }}>
            <Link 
              to="/projects"
              className="inline-block bg-gold text-background font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-20 md:py-32 bg-black/20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
                <img 
                    src="https://picsum.photos/seed/profile/500/500" 
                    alt="Profile" 
                    className="rounded-full aspect-square object-cover mx-auto w-2/3 md:w-full max-w-sm border-4 border-gold/50 shadow-2xl shadow-gold/10"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-serif text-4xl text-white mb-6">About Me</h2>
                <p className="mb-6">
                    With over a decade of experience in web development, I blend artistry with technology to build exceptional digital products. My passion lies in creating seamless user interfaces and robust backend systems that not only look beautiful but also deliver powerful functionality. I thrive on solving complex problems and turning ambitious ideas into reality.
                </p>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {techStack.map(tech => <TechBadge key={tech} name={tech} />)}
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl text-white text-center mb-12">Featured Projects</h2>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
            <div className="text-center mt-12">
               <Link 
                to="/projects"
                className="text-gold text-lg transition-all hover:underline decoration-gold underline-offset-4"
              >
                View All Projects &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default LandingPage;
