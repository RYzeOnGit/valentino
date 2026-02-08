import { useState } from 'react'
import MagazineCover from './MagazineCover'
import CalendarPage from './CalendarPage'
import ValentineEnvelopePage from './ValentineEnvelopePage'
import RoadTimelinePage from './RoadTimelinePage'
import NoRegretsPage from './NoRegretsPage'
import YeahWeCanPage from './YeahWeCanPage'
import YouAndIHeartPage from './YouAndIHeartPage'
import CauseYouMakeMePage from './CauseYouMakeMePage'
import TeenageDreamPlayerPage from './TeenageDreamPlayerPage'
import CatValentineFinalPage from './CatValentineFinalPage'

export default function MagazineBook() {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageTurn = () => {
    if (currentPage < 9) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleRestart = () => {
    setCurrentPage(0)
  }

  return (
    <div className="magazine-book">
      <div className="book-container">
        <MagazineCover 
          isTurned={currentPage > 0}
          onTurnPage={handlePageTurn}
        />
        <CalendarPage 
          isActive={currentPage === 1}
          onTurnPage={handlePageTurn}
        />
        <ValentineEnvelopePage 
          isActive={currentPage === 2}
          onTurnPage={handlePageTurn}
        />
        <RoadTimelinePage 
          isActive={currentPage === 3}
          onTurnPage={handlePageTurn}
        />
        <NoRegretsPage 
          isActive={currentPage === 4}
          onTurnPage={handlePageTurn}
        />
        <YeahWeCanPage 
          isActive={currentPage === 5}
          onTurnPage={handlePageTurn}
        />
        <YouAndIHeartPage 
          isActive={currentPage === 6}
          onTurnPage={handlePageTurn}
        />
        <CauseYouMakeMePage 
          isActive={currentPage === 7}
          onTurnPage={handlePageTurn}
        />
        <TeenageDreamPlayerPage 
          isActive={currentPage === 8}
          onTurnPage={handlePageTurn}
        />
        <CatValentineFinalPage 
          isActive={currentPage === 9}
          onRestart={handleRestart}
        />
      </div>
    </div>
  )
}

