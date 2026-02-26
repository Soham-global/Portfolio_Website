import React, { useState, useEffect } from 'react'

const Typewriter = ({ words, speed = 80, deleteSpeed = 40, pause = 2000 }) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pause)
      return () => clearTimeout(timeout)
    }

    const currentWord = words[wordIndex]

    if (!isDeleting && text === currentWord) {
      setIsPaused(true)
      return
    }

    if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setText(prev =>
        isDeleting
          ? prev.slice(0, -1)
          : currentWord.slice(0, prev.length + 1)
      )
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, isPaused, wordIndex, words, speed, deleteSpeed, pause])

  return (
    <span style={{ color: 'var(--accent)' }}>
      {text}
      <span
        style={{
          display: 'inline-block',
          width: '3px',
          height: '1em',
          background: 'var(--accent)',
          marginLeft: '3px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }}
      />
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </span>
  )
}

export default Typewriter