import React from 'react';

const TechnicalFoundations = () => {
  const categories = [
    {
      title: "Machine Learning & Data Science",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Statistical Analysis (ANOVA, Hypothesis Testing)", "Time Series Analysis Basics"],
      capability: "Capable of modeling tabular & time series data, conducting rigorous statistical hypothesis testing, and implementing predictive ML pipelines."
    },
    {
      title: "Languages & Core Systems",
      skills: ["Java", "Python", "C", "JavaScript"],
      capability: "Proficient in object-oriented software design, memory management fundamentals, and writing structured cross-platform code."
    },
    {
      title: "Full-Stack Development & Databases",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "HTML5", "CSS3"],
      capability: "Able to build responsive, accessible web interfaces and design RESTful APIs backed by relational or document databases."
    },
    {
      title: "DevOps, Tools & Prototyping",
      skills: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Canva"],
      capability: "Experienced with version control workflows, containerized app environments, and user interface prototyping."
    }
  ];

  return (
    <section id="foundations" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        <h2 className="section-title">
          <span style={{ color: 'var(--text-accent)', fontFamily: 'var(--font-mono)' }}>04.</span> Technical Foundations
        </h2>
        <p className="section-subtitle">Core computer science domain competencies and practical execution abilities[cite: 1]</p>

        <div className="grid-2">
          {categories.map((cat, idx) => (
            <div key={idx} className="card">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>{cat.title}</h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {cat.skills.map((s, i) => (
                  <span key={i} className="chip-tech">{s}</span>
                ))}
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px dashed var(--border-color)', paddingTop: '0.75rem' }}>
                <strong style={{ color: 'var(--text-accent)' }}>Execution Focus:</strong> {cat.capability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalFoundations;