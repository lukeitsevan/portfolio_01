import React, { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Foundations', href: '#foundations' },
    { name: 'Hackathons', href: '#competitions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(11, 15, 25, 0.85)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
        <a href="#" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
          evan<span style={{ color: 'var(--text-accent)' }}>.dsouza</span>()
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '1.5rem' }} className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text-accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;