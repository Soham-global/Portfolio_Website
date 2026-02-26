import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/data'

const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

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

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_name: 'Soham',
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      })
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    fontWeight: '300',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <section id="contact" ref={sectionRef} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            Let's work<br />
            <span style={{ color: 'var(--accent)' }}>together.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '80px',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left */}
          <div data-reveal style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: '1.8',
              fontWeight: '300',
              marginBottom: '40px',
            }}>
              I'm currently open to new opportunities — whether it's full-time roles, internships, or interesting collaborations. If you have a project in mind or just want to say hello, my inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>Email</div>
                <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>LinkedIn</div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  linkedin.com/in/sohamkalsi
                </a>
              </div>
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>GitHub</div>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  github.com/Soham-global
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            data-reveal
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'all 0.6s ease 0.2s',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
              <div>
                <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hi..."
                required
                rows={6}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                padding: '14px 32px',
                background: status === 'success' ? 'rgba(60,180,100,0.15)' : 'var(--accent)',
                border: `1px solid ${status === 'success' ? 'rgba(60,180,100,0.4)' : 'var(--accent)'}`,
                borderRadius: '6px',
                color: status === 'success' ? 'rgb(60,200,100)' : '#080808',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.03em',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: status === 'sending' ? 0.6 : 1,
                transition: 'all 0.25s ease',
                alignSelf: 'flex-start',
              }}
            >
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Sending...'}
              {status === 'success' && '✓ Message Sent!'}
              {status === 'error' && 'Something went wrong — try again'}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

export default Contact