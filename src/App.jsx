import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Research from './components/Research';
import TechnicalFoundations from './components/TechnicalFoundations';
import Competitions from './components/Competitions';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { projectsData } from './data/projectsData';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BackgroundCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects projects={projectsData} onSelectProject={setSelectedProject} />
        <Research />
        <TechnicalFoundations />
        <Competitions />
        <Achievements />
        <Contact />
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;