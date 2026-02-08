export default function MagazineCover({ isTurned, onTurnPage }) {
  // Placeholder for easy image swap
  const coverImage = "/assets/valentinescover.jpeg"

  return (
    <div 
      className={`book-page page-cover ${isTurned ? 'turned' : ''}`}
      onClick={onTurnPage}
    >
      <div className="valentines-cover-container">
        {/* Frame - white border around entire cover */}
        <div className="cover-frame">
          {/* Background image - full bleed */}
          <div className="cover-background">
            <img 
              src={coverImage}
              alt="Valentine's Magazine Cover" 
              className="cover-bg-image"
            />
            
            {/* Background overlay - warm film effect with grain and vignette */}
            <div className="cover-overlay"></div>
            <div className="cover-grain"></div>
            <div className="cover-vignette"></div>
          </div>

          {/* Masthead - "VALENTINES" */}
          <div className="cover-masthead">
            VALENTINES
          </div>

          {/* Left side metadata - "SPECIAL EDITION" */}
          <div className="cover-left-text">
            SPECIAL EDITION
          </div>

          {/* Right side text block */}
          <div className="cover-right-text">
            <div>VALENTINES</div>
            <div>ADDITION</div>
            <div>A YEAR</div>
            <div>BRIGHTER, A</div>
            <div>YEAR CUTER</div>
          </div>

          {/* Bottom gradient overlay for text contrast */}
          <div className="cover-bottom-gradient"></div>

          {/* Bottom headline */}
          <div className="cover-bottom-headline">
            <div className="cover-feature-label">FEATURE COUPLE OF THE YEAR</div>
            <div className="cover-names">
              <div>RYAN &</div>
              <div>ROOSH</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}
