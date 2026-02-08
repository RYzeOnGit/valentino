import { useRef } from 'react'

export function useAudio(startTime = 30) {
  const audioRef = useRef(null)

  const play = () => {
    if (!audioRef.current) return

    const audio = audioRef.current
    if (audio.readyState >= 2) {
      audio.currentTime = startTime
      audio.play().catch(e => console.log('Audio play error:', e))
    } else {
      const handleCanPlay = () => {
        audio.removeEventListener('canplaythrough', handleCanPlay)
        audio.currentTime = startTime
        audio.play().then(() => {
          setTimeout(() => {
            if (Math.abs(audio.currentTime - startTime) > 1) {
              audio.currentTime = startTime
            }
          }, 200)
        }).catch(e => console.log('Audio play error:', e))
      }
      audio.addEventListener('canplaythrough', handleCanPlay, { once: true })
      audio.load()
    }
  }

  return { audioRef, play }
}

