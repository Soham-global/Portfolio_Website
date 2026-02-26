import React, { useEffect, useRef } from 'react'
import { certifications } from '../data/data'

const icons = {
  microsoft: (
    <svg width="20" height="20" viewBox="0 0 21 21" fill="none">
      <rect x="0" y="0" width="10" height="10" fill="#F25022"/>
      <rect x="11" y="0" width="10" height="10" fill="#7FBA00"/>
      <rect x="0" y="11" width="10" height="10" fill="#00A4EF"/>
      <rect x="11" y="11" width="10" height="10" fill="#FFB900"/>
    </svg>
  ),
  datacamp: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#03EF62"/>
      <path d="M8 7l8 5-8 5V7z" fill="#05192D"/>
    </svg>
  ),
  techsaksham: (
    <div style={{
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      background: 'linear-gradient(135deg, #0078d4, #00bcf2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '9px',
      fontWeight: '700',
      color: '#fff',
    }}>AI</div>
  ),
}

const Certifications = () => {
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="certifications" ref={sectionRef} style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div className="section-label">Certifications</div>
          <h2 className="section-title">
            Credentials &<br />
            <span style={{ color: 'var(--accent)' }}>recognition.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {certifications.map((cert, i) => (
            <div
              key={i}
              data-reveal
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
                padding: '24px 26px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(200,169,126,0.2)'
                e.currentTarget.style.background = 'var(--bg-card-hover)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
            >
              <div style={{
                flexShrink: 0,
                marginTop: '2px',
              }}>
                {icons[cert.icon]}
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                  lineHeight: '1.4',
                }}>
                  {cert.title}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.03em',
                }}>
                  {cert.issuer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications