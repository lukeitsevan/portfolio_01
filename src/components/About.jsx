import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>01.</span> About Me
        </h2>
        <p className="section-subtitle">Background, motivation, and engineering focus</p>

        <div className="grid-2" style={{ alignItems: 'start' }}>
          <div className="card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Building Privacy-Preserving & Scalable AI</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
              I am an undergraduate Computer Science student specializing in AI & Machine Learning at PES University, Bangalore[cite: 1]. My primary technical focus lies at the intersection of machine learning systems, privacy-preserving algorithms, and distributed computing[cite: 1].
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              I enjoy solving problems where algorithmic models meet privacy constraints[cite: 1] — such as enabling multi-institutional healthcare analytics without exposing sensitive genomic or patient datasets[cite: 1].
            </p>
          </div>

          <div className="card" style={{ borderLeft: '3px solid var(--text-accent)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="font-mono" style={{ color: 'var(--text-accent)' }}>&gt;</span> Currently Exploring & Learning
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                "Differential Privacy mechanisms in multi-node ML training setups[cite: 1]",
                "Explainable AI (XAI) modules for interpretable medical risk scores[cite: 1]",
                "Database design & backend microservice architectures[cite: 1]",
                "Distributed systems performance & statistical data analysis[cite: 1]"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--accent-green)', fontFamily: 'var(--font-mono)' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;