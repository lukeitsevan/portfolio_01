import React from 'react';

const Competitions = () => {
  const competitions = [
    {
      name: "Terrathon 2025",
      type: "Inter-College Hackathon",
      result: "1st Place Winner",
      description: "Designed and built an accessibility-focused dual-interface financial assistant in React & Node.js integrating Gemini API for multi-language translation.",
      learned: "Engineered prompt pipelines for low-latency translation and built inclusive, high-contrast UI components for elderly usability.",
      evidence: "1st Place Award Record (Terrathon 2025)"
    }
  ];

  return (
    <section id="competitions" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>05.</span> Competitions & Hackathons
        </h2>
        <p className="section-subtitle">Competitive building and rapid engineering achievements[cite: 1]</p>

        <div className="grid-2">
          {competitions.map((comp, idx) => (
            <div key={idx} className="card" style={{ borderTop: '3px solid var(--accent-amber)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="code-tag" style={{ color: 'var(--accent-amber)', borderColor: 'rgba(251, 191, 36, 0.3)' }}>{comp.result}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{comp.type}</span>
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{comp.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{comp.description}</p>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '4px' }}>
                <strong style={{ color: 'var(--text-main)' }}>Key Takeaway:</strong> {comp.learned}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;