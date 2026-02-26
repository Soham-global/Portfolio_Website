import React, { useEffect, useRef } from 'react'
import { about, personalInfo, achievements } from '../data/data'

const About = () => {
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
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div className="section-label">About</div>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>
            Turning data into<br />
            <span style={{ color: 'var(--accent)' }}>decisions.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }} className="about-grid">
          {/* Left: Text */}
          <div>
            {about.description.split('\n\n').map((para, i) => (
              <p
                key={i}
                data-reveal
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `all 0.6s ease ${i * 0.1}s`,
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  fontWeight: '300',
                  marginBottom: '20px',
                }}
              >
                {para}
              </p>
            ))}

            <div data-reveal style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.6s ease 0.3s',
              marginTop: '32px',
            }}>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}>Core strengths</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {about.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '12px' }}>▸</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '300' }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Achievement cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {achievements.map((item, i) => (
              <div
                key={i}
                data-reveal
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: `all 0.6s ease ${0.2 + i * 0.1}s`,
                  padding: '24px 28px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,169,126,0.25)'
                  e.currentTarget.style.background = 'var(--bg-card-hover)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                <span style={{ fontSize: '24px', lineHeight: 1 }}>{item.icon}</span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}>{item.title}</div>
                  <div style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    fontWeight: '300',
                  }}>{item.description}</div>
                </div>
              </div>
            ))}

            {/* Education card */}
            <div
              data-reveal
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.6s ease 0.5s',
                padding: '24px 28px',
                background: 'var(--accent-dim)',
                border: '1px solid rgba(200,169,126,0.2)',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>Education</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>
                B.Tech — Computer Science & Engineering
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '300' }}>
                Guru Nanak Dev University · CGPA 7.46
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>2022 – Present</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}

export default About