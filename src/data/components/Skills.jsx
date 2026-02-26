import React, { useEffect, useRef } from 'react'
import { skills } from '../data/data'

const Skills = () => {
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
              }, i * 80)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div className="section-label">Skills</div>
          <h2 className="section-title">
            Tools of the<br />
            <span style={{ color: 'var(--accent)' }}>trade.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
        }}>
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={category}
              data-reveal
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s ease ${i * 0.07}s`,
                padding: '28px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                transition: 'border-color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '16px',
                fontWeight: '500',
              }}>
                {category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {items.map((skill, j) => (
                  <span
                    key={j}
                    style={{
                      padding: '6px 14px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = 'var(--accent-dim)'
                      e.target.style.borderColor = 'rgba(200,169,126,0.3)'
                      e.target.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = 'rgba(255,255,255,0.04)'
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.color = 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills