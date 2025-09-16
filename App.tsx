
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/projects" element={<ProjectListPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </HashRouter>
  );
};

export default App;
