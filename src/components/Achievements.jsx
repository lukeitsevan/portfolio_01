import React from 'react';

const Achievements = () => {
  const education = [
    { degree: "B.Tech in Computer Science Engineering (AI & ML Specialization)", institute: "PES University, Bangalore", period: "2023 - Present", metric: "CPI: 8.64 / 10" },
    { degree: "ISC (Class XII)", institute: "St. Joseph's Boys' High School, Bangalore", period: "2022", metric: "Percentage: 90.2%" },
    { degree: "ICSE (Class X)", institute: "St. Joseph's Boys' High School, Bangalore", period: "2020", metric: "Percentage: 96.8%" }
  ];

  return (
    <section className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">
          <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>06.</span> Education & Honors
        </h2>
        <p className="section-subtitle">Academic background and institutional milestones[cite: 1]</p>

        <div className="grid-3">
          {education.map((edu, idx) => (
            <div key={idx} className="card">
              <span className="code-tag" style={{ marginBottom: '0.5rem' }}>{edu.period}</span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: '0.4rem 0', color: 'var(--text-main)' }}>{edu.degree}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{edu.institute}</p>
              <div className="stat-chip" style={{ display: 'inline-flex' }}>
                <span className="value" style={{ fontSize: '0.85rem' }}>{edu.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;