import React, { useEffect, useRef, useState } from 'react'
import { experiences } from '../data/data'

const Experience = () => {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const exp = experiences[active]

  return (
    <section id="experience" ref={sectionRef} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div className="section-label">Experience</div>
          <h2 className="section-title">Where I've<br /><span style={{ color: 'var(--accent)' }}>worked.</span></h2>
        </div>

        <div
          className="exp-grid"
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '0',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            overflow: 'hidden',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          {/* Tab list */}
          <div style={{
            borderRight: '1px solid var(--border)',
            background: 'var(--bg-card)',
          }}>
            {experiences.map((e, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  textAlign: 'left',
                  background: active === i ? 'var(--bg-card-hover)' : 'transparent',
                  border: 'none',
                  borderLeft: active === i ? '2px solid var(--accent)' : '2px solid transparent',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: active === i ? '600' : '400',
                  marginBottom: '4px',
                  transition: 'all 0.2s',
                }}>
                  {e.company}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                  {e.duration.split(' ')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ padding: '40px 44px', background: 'var(--bg-card)', minHeight: '280px' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '4px',
            }}>
              {exp.role}
            </div>
            <div style={{
              fontSize: '14px',
              color: 'var(--accent)',
              marginBottom: '6px',
              fontWeight: '500',
            }}>
              {exp.company}
            </div>
            <div style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              {exp.duration}
            </div>
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              fontWeight: '300',
              marginBottom: '24px',
            }}>
              {exp.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {exp.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Experience