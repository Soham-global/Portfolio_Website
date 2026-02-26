import React, { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const dotRef = useRef(null)
  const glowRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const glowPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth < 768) return

    const dot = dotRef.current
    const glow = glowRef.current

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    const animate = () => {
      glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.08
      glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.08
      glow.style.transform = `translate(${glowPos.current.x - 200}px, ${glowPos.current.y - 200}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    const onMouseEnter = () => {
      dot.style.opacity = '1'
      glow.style.opacity = '1'
    }

    const onMouseLeave = () => {
      dot.style.opacity = '0'
      glow.style.opacity = '0'
    }

    // Scale dot on hoverable elements
    const onLinkEnter = () => {
      dot.style.transform += ' scale(2.5)'
      dot.style.background = 'var(--accent)'
    }
    const onLinkLeave = () => {
      dot.style.background = '#fff'
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseleave', onMouseLeave)

    const hoverables = document.querySelectorAll('a, button, [data-hover]')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onLinkEnter)
      el.addEventListener('mouseleave', onLinkLeave)
    })

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: 0,
          transition: 'opacity 0.3s, background 0.2s',
          willChange: 'transform',
        }}
      />
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,169,126,0.12) 0%, rgba(200,169,126,0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  )
}

export default CursorGlow