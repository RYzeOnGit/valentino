export default function Celebration({ showUnboxButton, onUnbox }) {
  return (
    <div className="celebration">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="confetti"></div>
      ))}
      <h2>Yay! 💖🐱💖</h2>
      <p>You made the right choice!</p>
      {showUnboxButton && (
        <button 
          className="btn btn-unbox" 
          onClick={onUnbox}
        >
          Unbox Your Surprise 🎁
        </button>
      )}
    </div>
  )
}

