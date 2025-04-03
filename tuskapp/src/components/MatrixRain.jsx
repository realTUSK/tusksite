'use client'
import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Matrix rain settings
    const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const fontSize = 16
    let drops = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drops = Array(Math.floor(canvas.width / fontSize)).fill(1)
    }

    // Initial setup
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    function draw() {
      // Semi-transparent black for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)]
        
        // Vary the color
        const red = 120 + Math.floor(Math.random() * 50)
        const blue = 180 + Math.floor(Math.random() * 75)
        ctx.fillStyle = `rgba(${red}, 0, ${blue}, 0.8)`

        // First character in column is brighter
        if (drops[i] * fontSize < fontSize) {
          ctx.fillStyle = '#FFF'
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset when off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    // Animation loop
    function animate() {
      draw()
      setTimeout(() => {
        requestAnimationFrame(animate)
      }, 1000 / 30) // 30 FPS
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
    />
  )
} 