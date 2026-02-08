import { useState } from 'react'
import MagazineCover from './MagazineCover'
import CalendarPage from './CalendarPage'

export default function MagazineBook() {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageTurn = () => {
    if (currentPage < 1) {
      setCurrentPage(1)
    }
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
        />
      </div>
    </div>
  )
}

