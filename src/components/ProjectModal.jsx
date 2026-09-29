import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close modal">&times;</button>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span className={`chip chip-status-${project.status.toLowerCase()}`}>{project.status}</span>
            <span className="code-tag">{project.subtitle}</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-main)' }}>{project.title}</h2>
        </div>

        {/* Stat Chips */}
        {project.results && project.results.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {project.results.map((r, i) => (
              <div key={i} className="stat-chip">
                <span className="label">{r.label}</span>
                <span className="value">{r.value}</span>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          <div>
            <h4 style={{ color: 'var(--text-accent)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>// MOTIVATION & PROBLEM</h4>
            <p>{project.problem}</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-accent)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>// OBJECTIVE</h4>
            <p>{project.objective}</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-accent)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>// PERSONAL CONTRIBUTION</h4>
            <p>{project.personalContribution}</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-accent)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>// HIGH-LEVEL METHODS</h4>
            <p>{project.methods}</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-accent)', marginBottom: '0.3rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>// REAL-WORLD RELEVANCE & LIMITATIONS</h4>
            <p style={{ marginBottom: '0.5rem' }}><strong>Relevance:</strong> {project.realWorldRelevance}</p>
            <p><strong>Limitations & Future Work:</strong> {project.limitations}</p>
          </div>

          <div>
            <h4 style={{ color: 'var(--text-accent)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>// EVIDENCE & RESOURCES</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {project.evidenceLinks.repo ? (
                <a href={project.evidenceLinks.repo} target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Repo</a>
              ) : (
                <span className="btn btn-secondary btn-disabled">Repository link: add URL here</span>
              )}

              {project.evidenceLinks.paper && (
                <span className="btn btn-secondary btn-disabled">{project.evidenceLinks.paper}</span>
              )}

              {project.evidenceLinks.demo ? (
                <a href={project.evidenceLinks.demo} target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
              ) : (
                <span className="btn btn-secondary btn-disabled">Demo link: add URL here</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;