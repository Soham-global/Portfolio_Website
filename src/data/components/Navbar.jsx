import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { personalInfo } from '../data/data'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '0 40px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,8,8,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '20px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
      }}>
        {personalInfo.name}<span style={{ color: 'var(--accent)' }}>.</span>
      </div>

      {/* Desktop Links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
      }} className="nav-desktop">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: '400',
              letterSpacing: '0.05em',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              textDecoration: 'none',
            }}
            activeStyle={{ color: 'var(--text-primary)' }}
            onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={personalInfo.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '8px 20px',
            border: '1px solid var(--accent)',
            borderRadius: '4px',
            color: 'var(--accent)',
            fontSize: '13px',
            fontWeight: '500',
            letterSpacing: '0.05em',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            background: 'transparent',
          }}
          onMouseEnter={e => {
            e.target.style.background = 'var(--accent)'
            e.target.style.color = '#080808'
          }}
          onMouseLeave={e => {
            e.target.style.background = 'transparent'
            e.target.style.color = 'var(--accent)'
          }}
        >
          Resume
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          flexDirection: 'column',
          gap: '5px',
        }}
        className="hamburger"
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '22px',
            height: '1.5px',
            background: 'var(--text-primary)',
            transition: 'all 0.3s ease',
            transformOrigin: 'center',
            transform: menuOpen
              ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
              : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
              : 'scaleX(0)'
              : 'none',
          }} />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(8,8,8,0.98)',
          borderBottom: '1px solid var(--border)',
          padding: '24px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar