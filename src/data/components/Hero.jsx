import React, { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import Blob from './Blob'
import Typewriter from './Typewriter'
import { personalInfo } from '../data/data'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('[data-anim]')
    els?.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 200 + i * 120)
    })
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Blob />

      {/* Subtle grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 0,
      }} />

      {/* Noise grain overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        zIndex: 0,
        opacity: 0.4,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '640px' }}>
          {/* Greeting line */}
          <div data-anim style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            fontWeight: '400',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{
              display: 'inline-block',
              width: '32px',
              height: '1px',
              background: 'var(--accent)',
            }} />
            Hello, I'm
          </div>

          {/* Name */}
          <h1 data-anim style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 8vw, 88px)',
            fontWeight: '800',
            lineHeight: '1',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}>
            {personalInfo.name}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </h1>

          {/* Typewriter role */}
          <div data-anim style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 3.5vw, 36px)',
            fontWeight: '600',
            color: 'var(--text-secondary)',
            marginBottom: '28px',
            letterSpacing: '-0.01em',
            minHeight: '46px',
          }}>
            I'm a{' '}
            <Typewriter
              words={personalInfo.taglines}
              speed={75}
              deleteSpeed={40}
              pause={2200}
            />
          </div>

          {/* Bio */}
          <p data-anim style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontWeight: '300',
            color: 'var(--text-secondary)',
            lineHeight: '1.75',
            marginBottom: '44px',
            maxWidth: '520px',
          }}>
            I focus on building end-to-end intelligent systems — from raw data pipelines to deployed products that solve real-world problems.
          </p>

          {/* CTAs */}
          <div data-anim style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              style={{
                padding: '14px 32px',
                background: 'var(--accent)',
                color: '#080808',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.03em',
                borderRadius: '4px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.25s ease',
                border: '1px solid var(--accent)',
              }}
              onMouseEnter={e => {
                e.target.style.background = 'transparent'
                e.target.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.target.style.background = 'var(--accent)'
                e.target.style.color = '#080808'
              }}
            >
              View Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: '400',
                letterSpacing: '0.03em',
                borderRadius: '4px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
                border: '1px solid var(--border)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = 'var(--accent)'
                e.target.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'var(--border)'
                e.target.style.color = 'var(--text-primary)'
              }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links */}
          <div data-anim style={{
            marginTop: '56px',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Find me on</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              GitHub
            </a>
            <span style={{ color: 'var(--text-muted)' }}>—</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        zIndex: 2,
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
        <style>{`@keyframes scrollPulse { 0%,100%{opacity:0.3;transform:scaleY(0.8)} 50%{opacity:1;transform:scaleY(1)} }`}</style>
      </div>
    </section>
  )
}

export default Hero