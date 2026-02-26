import React, { useEffect, useRef } from 'react'
import { projects, personalInfo } from '../data/data'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll('[data-reveal]')
            els.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1'
                el.style.transform = 'translateY(0)'
              }, i * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div className="section-label">Projects</div>
          <h2 className="section-title">
            Things I've<br />
            <span style={{ color: 'var(--accent)' }}>built.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
          gap: '20px',
          marginBottom: '48px',
        }} className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              data-reveal
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
                padding: '32px',
                background: 'var(--bg-card)',
                border: `1px solid ${project.highlight ? 'rgba(200,169,126,0.2)' : 'var(--border)'}`,
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(200,169,126,0.3)'
                e.currentTarget.style.background = 'var(--bg-card-hover)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = project.highlight ? 'rgba(200,169,126,0.2)' : 'var(--border)'
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
            >
              {/* Top bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  {project.highlight && (
                    <div style={{
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      marginBottom: '8px',
                      fontWeight: '500',
                    }}>
                      Featured
                    </div>
                  )}
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    lineHeight: '1.3',
                  }}>
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '12px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                    marginLeft: '16px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  <GithubIcon />
                  Code
                </a>
              </div>

              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
                fontWeight: '300',
                flexGrow: 1,
              }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map((tag, j) => (
                  <span key={j} className="tag" style={{ fontSize: '10px' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More on GitHub */}
        <div data-reveal style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'all 0.6s ease 0.5s',
          textAlign: 'center',
        }}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '500',
              letterSpacing: '0.05em',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            <GithubIcon />
            View more on GitHub
            <ArrowIcon />
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Projects