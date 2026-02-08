import './YeahWeCanPage.css'

// 3 NEW images - not used in any previous pages
// TODO: Replace these with actual cutout image files if they don't exist yet
// Using images from 7.55.27 AM series as placeholders
const cutouts = [
  {
    id: 'cutout1',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (3).jpeg",
    alt: "Cutout 1",
    xPct: 12,
    yPct: 100,
    scale: 1,
    rot: -3
  },
  {
    id: 'cutout2',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (4).jpeg",
    alt: "Cutout 2",
    xPct: 50,
    yPct: 115,
    scale: 1.05,
    rot: 2
  },
  {
    id: 'cutout3',
    src: "/assets/WhatsApp Image 2026-02-08 at 7.55.27 AM (5).jpeg",
    alt: "Cutout 3",
    xPct: 88,
    yPct: 100,
    scale: 0.98,
    rot: -2
  }
]

// Word search grid - 8x6 grid with DANCE vertically in column 2 (rows 0-4)
const wordSearchGrid = [
  ['Y', 'D', 'K', 'M', 'F', 'X', 'P', 'M'],
  ['M', 'A', 'B', 'L', 'Q', 'K', 'N', 'R'],
  ['E', 'N', 'B', 'W', 'S', 'N', 'V', 'C'],
  ['H', 'C', 'U', 'X', 'L', 'G', 'K', 'A'],
  ['A', 'E', 'O', 'Q', 'N', 'J', 'C', 'E'],
  ['Q', 'O', 'H', 'T', 'R', 'M', 'G', 'H']
]

export default function YeahWeCanPage({ isActive, onTurnPage }) {
  return (
    <div 
      className={`book-page page-yeah-we-can ${isActive ? 'active' : ''}`}
      onClick={isActive && onTurnPage ? onTurnPage : undefined}
    >
      {/* Background - burgundy/maroon with gradient/vignette */}
      <div className="ywc-background">
        {/* Thin white frame */}
        <div className="ywc-frame">
          {/* Headline */}
          <div className="ywc-headline">YEAH WE CAN</div>

          {/* Paper card */}
          <div className="ywc-paper-card">
            {/* Word search grid */}
            <div className="word-search-container">
              <div className="word-search-grid">
                {wordSearchGrid.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid-row">
                    {row.map((letter, colIndex) => (
                      <div 
                        key={`${rowIndex}-${colIndex}`}
                        className={`grid-cell ${colIndex === 1 && rowIndex >= 0 && rowIndex <= 4 ? 'dance-column' : ''}`}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              
              {/* Vertical oval highlight around DANCE */}
              <div className="dance-highlight-oval"></div>
            </div>

            {/* Subtitle */}
            <div className="ywc-subtitle">until we die.</div>
          </div>

          {/* Bottom cutout stickers (3 photos) */}
          <div className="cutouts-container">
            {cutouts.map(cutout => (
              <div
                key={cutout.id}
                className="cutout-sticker"
                style={{
                  left: `${cutout.xPct}%`,
                  top: `${cutout.yPct}%`,
                  transform: `translate(-50%, -100%) rotate(${cutout.rot}deg) scale(${cutout.scale})`,
                }}
              >
                <img src={cutout.src} alt={cutout.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}

