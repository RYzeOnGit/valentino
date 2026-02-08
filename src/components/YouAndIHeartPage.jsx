import './YouAndIHeartPage.css'

// 10 NEW images - not used in any previous pages
// TODO: Replace these with actual image files if they don't exist yet
// Using images from 7.55.27 AM series as placeholders
const photos = [
  {
    id: 'p1',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (1).jpeg",
    alt: "Photo 1",
    isMain: true
  },
  {
    id: 'p2',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (2).jpeg",
    alt: "Photo 2",
    isMain: false
  },
  {
    id: 'p3',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (6).jpeg",
    alt: "Photo 3",
    isMain: false
  },
  {
    id: 'p4',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (7).jpeg",
    alt: "Photo 4",
    isMain: false
  },
  {
    id: 'p5',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (8).jpeg",
    alt: "Photo 5",
    isMain: false
  },
  {
    id: 'p6',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (9).jpeg",
    alt: "Photo 6",
    isMain: false
  },
  {
    id: 'p7',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (10).jpeg",
    alt: "Photo 7",
    isMain: false
  },
  {
    id: 'p8',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (11).jpeg",
    alt: "Photo 8",
    isMain: false
  },
  {
    id: 'p9',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (12).jpeg",
    alt: "Photo 9",
    isMain: false
  },
  {
    id: 'p10',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (13).jpeg",
    alt: "Photo 10",
    isMain: false
  }
]

// Heart layout positions - percentage-based for responsiveness
// Arranged to form a heart silhouette: two lobes at top, wider mid-sides, taper to point
const heartLayout = [
  // Main center photo (largest)
  { id: 'p1', xPct: 30, yPct: 52, size: 'main' },
  // Top lobes
  { id: 'p2', xPct: 10, yPct: 14, size: 'small', rot: -8, scale: 1.0 },
  { id: 'p3', xPct: 90, yPct: 14, size: 'small', rot: 7, scale: 1.0 },
  // Upper sides
  { id: 'p4', xPct: 12, yPct: 40, size: 'small', rot: -6, scale: 0.95 },
  { id: 'p5', xPct: 78, yPct: 40, size: 'small', rot: 6, scale: 0.95 },
  // Mid sides
  { id: 'p6', xPct: 26, yPct: 58, size: 'small', rot: 5, scale: 1.0 },
  { id: 'p7', xPct: 80, yPct: 58, size: 'small', rot: -5, scale: 1.0 },
  // Lower taper
  { id: 'p8', xPct: 10, yPct: 90, size: 'small', rot: 6, scale: 0.95 },
  { id: 'p9', xPct: 62, yPct: 78, size: 'small', rot: -6, scale: 0.95 },
  // Point
  { id: 'p10', xPct: 90, yPct: 86, size: 'small', rot: 0, scale: 0.9 }
]

export default function YouAndIHeartPage({ isActive, onTurnPage }) {
  const mainPhoto = photos.find(p => p.isMain)
  const otherPhotos = photos.filter(p => !p.isMain)

  return (
    <div 
      className={`book-page page-you-and-i ${isActive ? 'active' : ''}`}
      onClick={isActive && onTurnPage ? onTurnPage : undefined}
    >
      {/* Background - off-white with maroon border */}
      <div className="youi-background">
        {/* Thin maroon frame */}
        <div className="youi-frame">
          {/* Top title */}
          <div className="youi-title">
            <div className="youi-title-line1">you</div>
            <div className="youi-title-line2">& I</div>
          </div>

          {/* Sparkles and hearts decorations */}
          <div className="sparkle sparkle-1"></div>
          <div className="sparkle sparkle-2"></div>
          <div className="sparkle sparkle-3"></div>
          <div className="sparkle sparkle-4"></div>
          <div className="sparkle sparkle-5"></div>
          <div className="sparkle sparkle-6"></div>
          <div className="heart-decoration heart-1"></div>
          <div className="heart-decoration heart-2"></div>
          <div className="heart-decoration heart-3"></div>
          <div className="heart-decoration heart-4"></div>
          <div className="heart-decoration heart-5"></div>
          <div className="heart-decoration heart-6"></div>

          {/* Heart-shaped photo collage */}
          <div className="heart-collage-container">
            <div className="heart-collage">
              {/* Main center photo */}
              <div className="heart-photo heart-main">
                <img src={mainPhoto.src} alt={mainPhoto.alt} />
              </div>

              {/* Surrounding photos */}
              {otherPhotos.map((photo, index) => {
                const layout = heartLayout.find(l => l.id === photo.id)
                const rot = layout.rot || 0
                const scale = layout.scale || 1.0
                return (
                  <div
                    key={photo.id}
                    className={`heart-photo heart-${layout.size}`}
                    style={{
                      left: `${layout.xPct}%`,
                      top: `${layout.yPct}%`,
                      transform: `translate(-50%, -50%) rotate(${rot}deg) scale(${scale})`
                    }}
                  >
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom caption */}
          <div className="youi-caption">
            <div className="youi-caption-line1">we'll be young</div>
            <div className="youi-caption-line2">forever</div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}

