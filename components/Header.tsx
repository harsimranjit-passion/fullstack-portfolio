
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#D4AF37',
    textShadow: '0 0 5px rgba(212, 175, 55, 0.5)',
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-lg shadow-gold/5' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-white transition-colors hover:text-gold">
          DC
        </Link>
        <div className="flex items-center space-x-8">
          <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-neutral-text transition-colors hover:text-gold tracking-wider">
            Home
          </NavLink>
          <NavLink to="/projects" style={({ isActive }) => isActive ? activeLinkStyle : {}} className="text-neutral-text transition-colors hover:text-gold tracking-wider">
            Projects
          </NavLink>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
