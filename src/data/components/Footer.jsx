import React from 'react'
import { personalInfo } from '../data/data'

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '32px 40px',
    }}>
      <div style={{
        maxWidth: 'var(--container-width)',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '16px',
          fontWeight: '700',
          color: 'var(--text-muted)',
          letterSpacing: '-0.02em',
        }}>
          {personalInfo.name}<span style={{ color: 'var(--accent)' }}>.</span>
        </div>

        <div style={{
          fontSize: '12px',
          color: 'var(--text-muted)',
          fontWeight: '300',
        }}>
          Designed & built by Soham · {new Date().getFullYear()}
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: 'GitHub', href: personalInfo.github },
            { label: 'LinkedIn', href: personalInfo.linkedin },
            { label: 'Email', href: `mailto:${personalInfo.email}` },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer