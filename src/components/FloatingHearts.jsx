import { useEffect } from 'react'

export default function FloatingHearts() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div')
      heart.innerHTML = '💕'
      heart.style.position = 'fixed'
      heart.style.left = Math.random() * 100 + '%'
      heart.style.bottom = '-50px'
      heart.style.fontSize = (Math.random() * 20 + 15) + 'px'
      heart.style.opacity = '0.7'
      heart.style.pointerEvents = 'none'
      heart.style.zIndex = '5'
      heart.style.animation = `float ${Math.random() * 3 + 3}s ease-in-out forwards`
      document.body.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 6000)
    }

    const interval = setInterval(createHeart, 1000)
    return () => clearInterval(interval)
  }, [])

  return null
}

