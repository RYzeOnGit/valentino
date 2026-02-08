export default function MagazineCover({ isTurned, onTurnPage }) {
  return (
    <div 
      className={`book-page page-cover ${isTurned ? 'turned' : ''}`}
      onClick={onTurnPage}
    >
      <div className="magazine-cover">
        <img 
          src="/assets/valentinescover.jpeg" 
          alt="Valentine's Magazine Cover" 
          className="cover-image"
        />
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}

