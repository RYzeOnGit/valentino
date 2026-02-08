import { useRef, useEffect } from 'react'
import './CatValentineFinalPage.css'

export default function CatValentineFinalPage({ isActive, onRestart }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (isActive && videoRef.current) {
      const video = videoRef.current
      
      const handleLoadedMetadata = () => {
        video.play().catch(() => {
          // Silently handle autoplay errors
        })
      }

      if (video.readyState >= 2) {
        handleLoadedMetadata()
      } else {
        video.addEventListener('loadedmetadata', handleLoadedMetadata)
      }

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }
  }, [isActive])

  return (
    <div 
      className={`book-page page-cat-valentine-final ${isActive ? 'active' : ''}`}
    >
      {/* Background - maroon with frame */}
      <div className="cvf-background">
        <div className="cvf-frame">
          {/* Paper card */}
          <div className="cvf-paper">
            {/* Top title */}
            <div className="cvf-title">I love you my BEBI</div>

            {/* Cat and heart emoji decorations */}
            <div className="cvf-emoji cvf-emoji-1">🐱</div>
            <div className="cvf-emoji cvf-emoji-2">😺</div>
            <div className="cvf-emoji cvf-emoji-3">😻</div>
            <div className="cvf-emoji cvf-emoji-4">😽</div>
            <div className="cvf-emoji cvf-emoji-5">🐾</div>
            <div className="cvf-emoji cvf-emoji-6">💖</div>
            <div className="cvf-emoji cvf-emoji-7">💘</div>
            <div className="cvf-emoji cvf-emoji-8">💝</div>
            <div className="cvf-emoji cvf-emoji-9">💕</div>
            <div className="cvf-emoji cvf-emoji-10">❤️</div>
            <div className="cvf-emoji cvf-emoji-11">✨</div>
            <div className="cvf-emoji cvf-emoji-12">✨</div>
            <div className="cvf-emoji cvf-emoji-13">⭐</div>
            <div className="cvf-emoji cvf-emoji-14">💫</div>
            <div className="cvf-emoji cvf-emoji-15">🐱</div>
            <div className="cvf-emoji cvf-emoji-16">😺</div>
            <div className="cvf-emoji cvf-emoji-17">💖</div>
            <div className="cvf-emoji cvf-emoji-18">💘</div>

            {/* Centered video frame */}
            <div className="cvf-videoFrame">
              <video
                ref={videoRef}
                className="cvf-video"
                src="/assets/WhatsApp Video 2026-02-08 at 7.47.41 AM.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Restart button */}
            <button className="cvf-restartBtn" onClick={onRestart}>
              Again 😺💘
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

