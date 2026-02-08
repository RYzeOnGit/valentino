import { useRef, useEffect } from 'react'
import './RoadTimelinePage.css'

export default function RoadTimelinePage({ isActive, onTurnPage }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (isActive && videoRef.current) {
      const video = videoRef.current
      
      const handleLoadedMetadata = () => {
        video.currentTime = 5
        video.play().catch(err => {
          console.log('Video autoplay prevented:', err)
        })
      }

      if (video.readyState >= 1) {
        // Video already loaded
        handleLoadedMetadata()
      } else {
        video.addEventListener('loadedmetadata', handleLoadedMetadata)
      }

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }
  }, [isActive])

  // Timeline pins data - positioned along the road
  const timelinePins = [
    {
      id: 'pin1',
      xPct: 75,
      yPct: 85,
      text: 'we started talking',
      rotation: -5
    },
    {
      id: 'pin2',
      xPct: 65,
      yPct: 70,
      text: 'emily murphy park',
      rotation: 3
    },
    {
      id: 'pin3',
      xPct: 50,
      yPct: 55,
      text: 'cuddles',
      rotation: -2
    },
    {
      id: 'pin4',
      xPct: 35,
      yPct: 40,
      text: 'two days went by',
      rotation: 4
    },
    {
      id: 'pin5',
      xPct: 25,
      yPct: 25,
      text: '11.04.2025',
      rotation: -3
    }
  ]

  return (
    <div 
      className={`book-page page-road-timeline ${isActive ? 'active' : ''}`}
      onClick={isActive && onTurnPage ? onTurnPage : undefined}
    >
      {/* Background - burgundy/maroon with vignette */}
      <div className="road-timeline-background">
        {/* Thin white frame */}
        <div className="road-timeline-frame">
          {/* Typography - top */}
          <div className="road-typography">
            <div className="road-title-script">so let's go all the way</div>
            <div className="road-title-serif">TONIGHT</div>
          </div>

          {/* Road SVG */}
          <div className="road-container">
            <svg 
              className="road-svg" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              {/* Road path - winding from bottom-right to upper-left with perspective */}
              {/* Wider at bottom, narrower at top */}
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#2a2a2a" />
                  <stop offset="100%" stopColor="#1a1a1a" />
                </linearGradient>
              </defs>
              
              {/* Main road path with varying width */}
              <path
                d="M 75 90 Q 70 80, 65 70 Q 60 60, 50 55 Q 40 50, 35 40 Q 30 30, 25 25"
                stroke="url(#roadGradient)"
                strokeWidth="4"
                fill="none"
                className="road-asphalt"
                strokeLinecap="round"
              />
              
              {/* Dashed center line */}
              <path
                d="M 75 90 Q 70 80, 65 70 Q 60 60, 50 55 Q 40 50, 35 40 Q 30 30, 25 25"
                stroke="#fff"
                strokeWidth="1"
                strokeDasharray="2 2"
                fill="none"
                className="road-center-line"
                opacity="0.9"
              />
            </svg>
          </div>

          {/* Timeline pins */}
          <div className="timeline-pins-container">
            {timelinePins.map(pin => (
              <div
                key={pin.id}
                className="timeline-pin"
                style={{
                  left: `${pin.xPct}%`,
                  top: `${pin.yPct}%`,
                  transform: `translate(-50%, -50%) rotate(${pin.rotation}deg)`
                }}
              >
                <div className="pin-icon">📍</div>
                <div 
                  className="pin-text"
                  style={{
                    transform: `rotate(${-pin.rotation}deg)`
                  }}
                >
                  {pin.text}
                </div>
              </div>
            ))}
          </div>

          {/* Video frame - near top of road */}
          <div className="video-frame-container">
            <div className="video-frame">
              <video
                ref={videoRef}
                src="/assets/WhatsApp Video 2026-02-08 at 7.55.27 AM.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="road-video"
              />
            </div>
          </div>

          {/* Bottom-right sticker */}
          <div className="road-sticker">
            <div className="sticker-plate">
              I ♥ YOU
            </div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}

