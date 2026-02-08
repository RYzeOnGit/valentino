import { useState } from 'react'

export default function ValentinePage({ onYes }) {
  const [noClickCount, setNoClickCount] = useState(0)
  const [noButtonStyle, setNoButtonStyle] = useState({})

  const handleNoClick = () => {
    const newCount = noClickCount + 1
    
    if (noClickCount < 2) {
      const maxX = window.innerWidth - 200
      const maxY = window.innerHeight - 100
      const randomX = Math.random() * maxX
      const randomY = Math.random() * maxY
      
      setNoButtonStyle({
        position: 'absolute',
        left: `${randomX}px`,
        top: `${randomY}px`,
        transition: 'all 0.3s ease'
      })
      setNoClickCount(newCount)
    } else {
      alert('Haha, you can\'t escape! 😸')
      setNoClickCount(0)
      setNoButtonStyle({})
    }
  }

  return (
    <div className="container">
      <div className="hearts-background">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="heart"></div>
        ))}
      </div>
      
      <div className="content">
        <div className="cat-emoji">🐱</div>
        <h1 className="title">Will you be my valentine?</h1>
        <div className="buttons-container">
          <button className="btn btn-yes" onClick={onYes}>
            Yes 💕
          </button>
          <button 
            className="btn btn-no" 
            onClick={handleNoClick}
            style={noButtonStyle}
          >
            ARE BAR HAN RE
          </button>
        </div>
      </div>
    </div>
  )
}

