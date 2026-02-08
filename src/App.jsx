import { useState } from 'react'
import ValentinePage from './components/ValentinePage'
import Celebration from './components/Celebration'
import MagazineBook from './components/MagazineBook'
import FloatingHearts from './components/FloatingHearts'
import AudioPlayer from './components/AudioPlayer'
import { useAudio } from './hooks/useAudio'
import './index.css'

function App() {
  const [showCelebration, setShowCelebration] = useState(false)
  const [showMagazine, setShowMagazine] = useState(false)
  const [showUnboxButton, setShowUnboxButton] = useState(false)
  const { audioRef, play: playAudio } = useAudio(30)

  const handleYes = () => {
    setShowCelebration(true)
    setTimeout(() => {
      setShowUnboxButton(true)
    }, 1500)
  }

  const handleUnbox = () => {
    setShowCelebration(false)
    setShowMagazine(true)
    playAudio()
  }

  return (
    <>
      <FloatingHearts />
      <AudioPlayer ref={audioRef} />
      
      {!showCelebration && !showMagazine && (
        <ValentinePage onYes={handleYes} />
      )}
      
      {showCelebration && (
        <Celebration 
          showUnboxButton={showUnboxButton}
          onUnbox={handleUnbox}
        />
      )}
      
      {showMagazine && (
        <MagazineBook />
      )}
    </>
  )
}

export default App

