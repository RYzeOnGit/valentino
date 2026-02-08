import './NoRegretsPage.css'

// 6 NEW images - not used in any previous pages
// TODO: Replace these with actual image files if they don't exist yet
const polaroids = [
  {
    id: 'polaroid1',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (9).jpeg",
    alt: "Memory 1",
    xPct: 32,
    yPct: 72,
    rot: -6
  },
  {
    id: 'polaroid2',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (10).jpeg",
    alt: "Memory 2",
    xPct: 50,
    yPct: 85,
    rot: 7
  }
]

const filmFrames = [
  {
    id: 'frame1',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (11).jpeg",
    alt: "Frame 1",
    frameNum: '37A'
  },
  {
    id: 'frame2',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (12).jpeg",
    alt: "Frame 2",
    frameNum: '38A'
  },
  {
    id: 'frame3',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.26 AM (1).jpeg",
    alt: "Frame 3",
    frameNum: '39'
  },
  {
    id: 'frame4',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.26 AM (2).jpeg",
    alt: "Frame 4",
    frameNum: '40'
  }
]

export default function NoRegretsPage({ isActive, onTurnPage }) {
  return (
    <div 
      className={`book-page page-no-regrets ${isActive ? 'active' : ''}`}
      onClick={isActive && onTurnPage ? onTurnPage : undefined}
    >
      {/* Background - burgundy/maroon with gradient/vignette */}
      <div className="no-regrets-background">
        {/* Thin white frame */}
        <div className="no-regrets-frame">
          {/* Left headline */}
          <div className="no-regrets-headline">
            <div className="headline-word">NO</div>
            <div className="headline-word">REGRETS</div>
            <div className="headline-word">JUST</div>
            <div className="headline-word">LOVE..</div>
          </div>

          {/* Two polaroids (center-left) */}
          <div className="polaroids-container">
            {polaroids.map((polaroid, index) => (
              <div
                key={polaroid.id}
                className="polaroid-photo"
                style={{
                  left: `${polaroid.xPct}%`,
                  top: `${polaroid.yPct}%`,
                  transform: `translate(-50%, -50%) rotate(${polaroid.rot}deg)`,
                  zIndex: index === 0 ? 2 : 1
                }}
              >
                <div className="polaroid-border">
                  <img src={polaroid.src} alt={polaroid.alt} />
                </div>
              </div>
            ))}
            
            {/* Doodles */}
            <div className="doodle-heart">💗</div>
            <div className="doodle-sparkle-1">✨</div>
            <div className="doodle-sparkle-2">⭐</div>
          </div>

          {/* Right filmstrip (4 frames) */}
          <div className="filmstrip-container">
            <div className="filmstrip">
              {/* Frame numbers along the edge */}
              <div className="filmstrip-numbers">
                <div className="frame-number">37</div>
                <div className="frame-number">38</div>
                <div className="frame-number">39</div>
                <div className="frame-number">40</div>
              </div>
              
              {/* Film frames */}
              <div className="film-frames">
                {filmFrames.map((frame, index) => (
                  <div key={frame.id} className="film-frame">
                    {index > 0 && <div className="frame-separator"></div>}
                    <div className="frame-label">{frame.frameNum}</div>
                    <div className="frame-image">
                      <img src={frame.src} alt={frame.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}

