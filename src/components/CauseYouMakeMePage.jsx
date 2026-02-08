import './CauseYouMakeMePage.css'

// 6 NEW images - not used in any previous pages
// TODO: Replace these with actual image files if they don't exist yet
// Using unused images from 7.55.27 AM series as placeholders
const photos = [
  {
    id: 'p1',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (14).jpeg",
    alt: "Photo 1",
    isMain: true
  },
  {
    id: 'p2',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (15).jpeg",
    alt: "Photo 2",
    isMain: false
  },
  {
    id: 'p3',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (16).jpeg",
    alt: "Photo 3",
    isMain: false
  },
  {
    id: 'p4',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (17).jpeg",
    alt: "Photo 4",
    isMain: false
  },
  {
    id: 'p5',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (18).jpeg",
    alt: "Photo 5",
    isMain: false
  },
  {
    id: 'p6',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (19).jpeg",
    alt: "Photo 6",
    isMain: false
  }
]

// Photo layout - percentage-based for responsiveness
const layout = [
  // Main polaroid near center (largest)
  { id: 'p1', x: 50, y: 45, w: 48, rot: -2, variant: 'polaroid' },
  // Medium polaroids top-left and top-right
  { id: 'p2', x: 25, y: 25, w: 32, rot: -5, variant: 'polaroid' },
  { id: 'p3', x: 75, y: 25, w: 32, rot: 6, variant: 'polaroid' },
  // Small mini-prints along bottom
  { id: 'p4', x: 20, y: 75, w: 22, rot: 4, variant: 'mini' },
  { id: 'p5', x: 50, y: 80, w: 22, rot: -3, variant: 'mini' },
  { id: 'p6', x: 80, y: 75, w: 22, rot: 5, variant: 'mini' }
]

export default function CauseYouMakeMePage({ isActive, onTurnPage }) {
  const mainPhoto = photos.find(p => p.isMain)
  const otherPhotos = photos.filter(p => !p.isMain)

  return (
    <div 
      className={`book-page page-cause-you-make-me ${isActive ? 'active' : ''}`}
      onClick={isActive && onTurnPage ? onTurnPage : undefined}
    >
      {/* Background - maroon/burgundy with vignette */}
      <div className="cymm-background">
        {/* Thin white frame */}
        <div className="cymm-frame">
          {/* Off-white paper card */}
          <div className="cymm-paper-card">
            {/* Headline text */}
            <div className="cymm-headline">Cause you make me</div>

            {/* Photo collage */}
            <div className="cymm-collage">
              {/* Main polaroid */}
              <div
                className="cymm-photo cymm-main-polaroid"
                style={{
                  left: `${layout.find(l => l.id === 'p1').x}%`,
                  top: `${layout.find(l => l.id === 'p1').y}%`,
                  width: `${layout.find(l => l.id === 'p1').w}%`,
                  transform: `translate(-50%, -50%) rotate(${layout.find(l => l.id === 'p1').rot}deg)`
                }}
              >
                <img src={mainPhoto.src} alt={mainPhoto.alt} />
              </div>

              {/* Other photos */}
              {otherPhotos.map((photo) => {
                const photoLayout = layout.find(l => l.id === photo.id)
                return (
                  <div
                    key={photo.id}
                    className={`cymm-photo cymm-${photoLayout.variant}`}
                    style={{
                      left: `${photoLayout.x}%`,
                      top: `${photoLayout.y}%`,
                      width: `${photoLayout.w}%`,
                      transform: `translate(-50%, -50%) rotate(${photoLayout.rot}deg)`
                    }}
                  >
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                )
              })}
            </div>

            {/* Secondary text */}
            <div className="cymm-secondary-text">Feel like I'm living a</div>

            {/* Cute doodles/stickers */}
            <div className="cymm-doodle cymm-doodle-heart-1">💕</div>
            <div className="cymm-doodle cymm-doodle-heart-2">💖</div>
            <div className="cymm-doodle cymm-doodle-sparkle-1">✨</div>
            <div className="cymm-doodle cymm-doodle-sparkle-2">✨</div>
            <div className="cymm-doodle cymm-doodle-bow">🎀</div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}

