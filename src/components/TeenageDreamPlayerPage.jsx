import './TeenageDreamPlayerPage.css'

// 5 NEW images - the LAST 5 unused images from the project
// TODO: Replace these with actual image files if they don't exist yet
// Using the last 5 unused images as placeholders
const images = [
  "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (20).jpeg",
  "/assets/WhatsApp Image 2026-02-08 at 7.55.26 AM (4).jpeg",
  "/assets/WhatsApp Image 2026-02-08 at 7.55.26 AM.jpeg",
  "/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM.jpeg",
  "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM.jpeg"
]

export default function TeenageDreamPlayerPage({ isActive, onTurnPage }) {
  return (
    <div 
      className={`book-page page-teenage-dream-player ${isActive ? 'active' : ''}`}
      onClick={isActive && onTurnPage ? onTurnPage : undefined}
    >
      {/* Background - maroon with frame */}
      <div className="tdp-background">
        <div className="tdp-frame">
          {/* Decorative photos around player */}
          <div className="tdp-photo tdp-photo-1">
            <img src={images[0]} alt="Photo 1" />
          </div>
          <div className="tdp-photo tdp-photo-2">
            <img src={images[1]} alt="Photo 2" />
          </div>
          <div className="tdp-photo tdp-photo-3">
            <img src={images[2]} alt="Photo 3" />
          </div>
          <div className="tdp-photo tdp-photo-4">
            <img src={images[3]} alt="Photo 4" />
          </div>
          <div className="tdp-photo tdp-photo-5">
            <img src={images[4]} alt="Photo 5" />
          </div>

          {/* Cute decorations */}
          <div className="tdp-deco tdp-deco-heart-1">💕</div>
          <div className="tdp-deco tdp-deco-heart-2">💖</div>
          <div className="tdp-deco tdp-deco-heart-3">❤️</div>
          <div className="tdp-deco tdp-deco-sparkle-1">✨</div>
          <div className="tdp-deco tdp-deco-sparkle-2">✨</div>
          <div className="tdp-deco tdp-deco-sparkle-3">⭐</div>
          <div className="tdp-deco tdp-deco-bow">🎀</div>
          <div className="tdp-deco tdp-deco-star">💫</div>

          {/* Music player card */}
          <div className="tdp-player-card">
            {/* Top bar with back arrow and waveform */}
            <div className="tdp-player-top">
              <svg className="tdp-back-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg className="tdp-wave-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12C3 12 6 9 9 9C12 9 15 12 15 12C15 12 18 9 21 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3 15C3 15 6 12 9 12C12 12 15 15 15 15C15 15 18 12 21 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Song info */}
            <div className="tdp-song-info">
              <div className="tdp-song-title">Teenage Dream</div>
              <div className="tdp-song-artist">Stephen Dawes</div>
            </div>

            {/* Progress bar */}
            <div className="tdp-progress-container">
              <div className="tdp-time tdp-time-left">0:14</div>
              <div className="tdp-progress-bar">
                <div className="tdp-progress-line">
                  <div className="tdp-progress-knob"></div>
                </div>
              </div>
              <div className="tdp-time tdp-time-right">-2:44</div>
            </div>

            {/* Controls */}
            <div className="tdp-controls">
              <button className="tdp-control-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M11 6L5 12L11 18M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="tdp-control-btn tdp-play-pause">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="4" height="16" fill="white"/>
                  <rect x="14" y="4" width="4" height="16" fill="white"/>
                </svg>
              </button>
              <button className="tdp-control-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M13 6L19 12L13 18M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Volume bar */}
            <div className="tdp-volume-container">
              <svg className="tdp-volume-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 9C19.5 10.5 19.5 13.5 19 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="tdp-volume-bar">
                <div className="tdp-volume-line">
                  <div className="tdp-volume-knob"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}

