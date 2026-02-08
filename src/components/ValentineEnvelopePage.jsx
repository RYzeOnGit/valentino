import './ValentineEnvelopePage.css'

// Photo placement data - percentage-based positioning relative to photo cluster
const photos = [
  { 
    id: 'p1', 
    src: "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (2).jpeg",
    alt: "Memory 1",
    xPct: 0, 
    yPct: 0, 
    wPct: 45, 
    rot: -5, 
    style: 'stamp' 
  },
  { 
    id: 'p2', 
    src: "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (6).jpeg",
    alt: "Memory 2",
    xPct: 50, 
    yPct: 0, 
    wPct: 45, 
    rot: 4, 
    style: 'stamp' 
  },
  { 
    id: 'p3', 
    src: "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (7).jpeg",
    alt: "Memory 3",
    xPct: 0, 
    yPct: 50, 
    wPct: 45, 
    rot: -3, 
    style: 'polaroid' 
  },
  { 
    id: 'p4', 
    src: "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (8).jpeg",
    alt: "Memory 4",
    xPct: 50, 
    yPct: 50, 
    wPct: 45, 
    rot: 5, 
    style: 'polaroid' 
  },
]

export default function ValentineEnvelopePage({ isActive, onTurnPage }) {
  return (
    <div 
      className={`book-page ve-page ${isActive ? 'active' : ''}`}
      onClick={isActive && onTurnPage ? onTurnPage : undefined}
    >
      {/* Background - dark red */}
      <div className="ve-background">
        {/* Lighter red mid-layer rectangle */}
        <div className="ve-mid-layer">
          {/* White card on top */}
          <div className="ve-white-card">
            {/* Main text on card */}
            <div className="ve-card-text">
              <div className="ve-card-top">YEAH, YOU'LL BE MY</div>
              <div className="ve-card-main">Valentine</div>
              <div className="ve-card-subtitle">(valentine)</div>
            </div>
            
            {/* Tulip sticker - positioned over "tine" */}
            <div className="ve-tulip-sticker">🌷</div>
            
            {/* Postage stamp - top right */}
            <div className="ve-postage-stamp">
              <span className="ve-postage-num">21</span>
              <span className="ve-postage-heart">❤️</span>
              <span className="ve-postage-num">22</span>
            </div>
          </div>

          {/* Photo cluster - top left */}
          <div className="ve-photo-cluster">
            {photos.map(photo => (
              <div
                key={photo.id}
                className={`ve-photo ve-photo-${photo.style}`}
                style={{
                  left: `${photo.xPct}%`,
                  top: `${photo.yPct}%`,
                  width: `${photo.wPct}%`,
                  transform: `rotate(${photo.rot}deg)`
                }}
              >
                <div className="ve-photo-frame">
                  <img src={photo.src} alt={photo.alt} />
                </div>
              </div>
            ))}
          </div>

          {/* Text bubbles - right side */}
          <div className="ve-text-bubbles">
            <div className="ve-bubble ve-bubble-1">
              <span className="ve-bubble-heart">💗</span>
              <span className="ve-bubble-text">I love you</span>
            </div>
            <div className="ve-bubble ve-bubble-2">
              <span className="ve-bubble-heart">💗</span>
              <span className="ve-bubble-text">with all my</span>
            </div>
            <div className="ve-bubble ve-bubble-3">
              <span className="ve-bubble-heart">💗</span>
              <span className="ve-bubble-text">heart.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}
