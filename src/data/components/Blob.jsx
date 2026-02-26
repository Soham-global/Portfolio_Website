import React, { useEffect, useRef } from 'react'

const Blob = () => {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -1000, y: -1000 })
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    // Blob parameters
    const NUM_POINTS = 8
    const CENTER_X = width * 0.72
    const CENTER_Y = height * 0.5
    let baseRadius = Math.min(width, height) * 0.22

    const points = []
    for (let i = 0; i < NUM_POINTS; i++) {
      const angle = (i / NUM_POINTS) * Math.PI * 2
      points.push({
        angle,
        baseAngle: angle,
        radius: baseRadius,
        targetRadius: baseRadius,
        speed: 0.008 + Math.random() * 0.006,
        offset: Math.random() * Math.PI * 2,
        noiseAmp: 0.12 + Math.random() * 0.1,
      })
    }

    let blobX = CENTER_X
    let blobY = CENTER_Y
    let targetX = CENTER_X
    let targetY = CENTER_Y
    let time = 0

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    // Gentle autonomous drift
    const driftPoints = [
      { x: width * 0.68, y: height * 0.45 },
      { x: width * 0.74, y: height * 0.55 },
      { x: width * 0.70, y: height * 0.52 },
      { x: width * 0.76, y: height * 0.48 },
    ]
    let driftIndex = 0
    let driftTimer = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      time += 0.005

      // Drift target
      driftTimer++
      if (driftTimer > 180) {
        driftIndex = (driftIndex + 1) % driftPoints.length
        driftTimer = 0
      }

      // Check cursor proximity
      const dx = mouse.current.x - blobX
      const dy = mouse.current.y - blobY
      const dist = Math.sqrt(dx * dx + dy * dy)
      const repelRadius = baseRadius * 1.5

      if (dist < repelRadius) {
        // Cursor is near — move away softly
        const repelStrength = (1 - dist / repelRadius) * 60
        targetX = driftPoints[driftIndex].x - (dx / dist) * repelStrength
        targetY = driftPoints[driftIndex].y - (dy / dist) * repelStrength
      } else {
        targetX = driftPoints[driftIndex].x
        targetY = driftPoints[driftIndex].y
      }

      blobX += (targetX - blobX) * 0.012
      blobY += (targetY - blobY) * 0.012

      // Compute blob vertices
      const verts = points.map((p, i) => {
        const proximityFactor = dist < repelRadius ? (1 - dist / repelRadius) : 0
        const noisyRadius = p.radius * (1 + Math.sin(time * 1.5 + p.offset) * p.noiseAmp + proximityFactor * 0.3 * Math.sin(time * 3 + i))
        const angle = p.baseAngle + Math.sin(time * 0.7 + p.offset) * 0.15
        return {
          x: blobX + Math.cos(angle) * noisyRadius,
          y: blobY + Math.sin(angle) * noisyRadius,
        }
      })

      // Draw blob with smooth catmull-rom-like curve
      ctx.beginPath()
      for (let i = 0; i < verts.length; i++) {
        const curr = verts[i]
        const next = verts[(i + 1) % verts.length]
        const mid = { x: (curr.x + next.x) / 2, y: (curr.y + next.y) / 2 }
        if (i === 0) ctx.moveTo(mid.x, mid.y)
        else ctx.quadraticCurveTo(curr.x, curr.y, mid.x, mid.y)
      }
      const first = verts[0]
      const second = verts[1]
      ctx.quadraticCurveTo(
        verts[verts.length - 1].x,
        verts[verts.length - 1].y,
        (verts[verts.length - 1].x + first.x) / 2,
        (verts[verts.length - 1].y + first.y) / 2
      )
      ctx.closePath()

      // Gradient fill
      const grad = ctx.createRadialGradient(blobX - 30, blobY - 30, 0, blobX, blobY, baseRadius * 1.2)
      grad.addColorStop(0, 'rgba(200, 169, 126, 0.18)')
      grad.addColorStop(0.5, 'rgba(180, 140, 90, 0.08)')
      grad.addColorStop(1, 'rgba(200, 169, 126, 0.0)')
      ctx.fillStyle = grad
      ctx.fill()

      // Subtle stroke
      ctx.strokeStyle = 'rgba(200, 169, 126, 0.15)'
      ctx.lineWidth = 1
      ctx.stroke()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

export default Blob