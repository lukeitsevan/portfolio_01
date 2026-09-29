import React from 'react';

const Research = () => {
  const publications = [
    {
      title: "Differentially Private Federated Learning Framework for Severity-Aware Crohn's Disease Prediction and Prevention",
      venue: "IEEE CIBCB 2026, Athens, Greece",
      status: "Accepted Conference Paper",
      role: "Co-Author / Lead Researcher",
      summary: "Introduced a novel privacy-preserving framework combining Differential Privacy (DP) with Federated Learning (FL) and Explainable AI (XAI) modules to compute multi-hospital clinical risk predictions without centralizing raw patient genomic datasets.",
      codeUrl: null,
      paperUrl: null
    }
  ];

  if (publications.length === 0) return null;

  return (
    <section id="research" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>03.</span> Research & Publications
        </h2>
        <p className="section-subtitle">Peer-reviewed conference proceedings and research contributions[cite: 1]</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {publications.map((pub, idx) => (
            <div key={idx} className="card" style={{ borderLeft: '3px solid var(--accent-purple)' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="chip chip-status-research">{pub.status}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{pub.venue}</span>
              </div>

              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{pub.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-accent)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>Role: {pub.role}</p>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{pub.summary}</p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="btn btn-secondary btn-disabled">Paper PDF: add URL here</span>
                <span className="btn btn-secondary btn-disabled">Slides: add URL here</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;