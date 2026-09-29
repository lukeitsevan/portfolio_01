import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '650px' }}>
        <h2 className="section-title" style={{ justifyContent: 'center' }}>
          <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>07.</span> Get In Touch
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
          I am always open to discussing research collaborations, machine learning systems projects, and software engineering opportunities[cite: 1].
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="mailto:evanluke7700@gmail.com" className="btn btn-primary">
            Send Email (evanluke7700@gmail.com)[cite: 1]
          </a>
          <a href="https://linkedin.com/in/evanlukedsouza" target="_blank" rel="noreferrer" className="btn btn-secondary">
            LinkedIn Profile[cite: 1]
          </a>
          <a href="https://github.com/lukeitsevan" target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitHub Profile[cite: 1]
          </a>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Designed for GitHub Pages deployment • Built with React & Vite
        </p>
      </div>
    </section>
  );
};

export default Contact;