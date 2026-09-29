import React from 'react';

const Projects = ({ projects, onSelectProject }) => {
  return (
    <section id="projects" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">
          <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>02.</span> Technical Projects
        </h2>
        <p className="section-subtitle">Real-world systems, capstone research, and full-stack implementations[cite: 1]</p>

        <div className="grid-2">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="card" 
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
              onClick={() => onSelectProject(project)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                  <span className={`chip chip-status-${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {project.subtitle}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                  {project.summary}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="chip-tech">{t}</span>
                  ))}
                </div>

                <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Inspect Technical Evidence & Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;