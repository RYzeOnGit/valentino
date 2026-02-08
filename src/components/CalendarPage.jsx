import './CalendarPage.css'
import CalendarDay from './CalendarDay'

const calendarData = [
  // Week 1 - Feb 2026 starts on Saturday
  { day: 1 },
  { day: 2 },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  // Week 2
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14, valentines: true },
  // Week 3
  { day: 15 },
  { day: 16 },
  { day: 17 },
  { day: 18 },
  { day: 19 },
  { day: 20 },
  { day: 21 },
  // Week 4
  { day: 22 },
  { day: 23 },
  { day: 24 },
  { day: 25 },
  { day: 26 },
  { day: 27 },
  { day: 28 },
]

export default function CalendarPage({ isActive, onTurnPage }) {
  return (
    <div 
      className={`book-page page-calendar ${isActive ? 'active' : ''}`}
      onClick={isActive && onTurnPage ? onTurnPage : undefined}
    >
      {/* Background - deep maroon/burgundy */}
      <div className="cal-background">
        {/* Paper card - off-white, centered */}
        <div className="cal-paper-card">
          {/* Title - "every February" */}
          <div className="cal-title">
            <span className="cal-title-every">every</span>
            <span className="cal-title-february">February</span>
          </div>
          
          {/* Calendar Container - position: relative for sticker positioning */}
          <div className="cal-wrapper">
            {/* Calendar Grid */}
            <div className="cal-grid">
              <div className="cal-weekdays">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              
              <div className="cal-days">
                {calendarData.map(({ day, valentines }) => (
                  <CalendarDay
                    key={day}
                    day={day}
                    valentines={valentines}
                  />
                ))}
              </div>
            </div>

            {/* Stickers/Photos positioned relative to calendar-wrapper */}
            {/* Photo near Feb 1-2 (left, partially off edge) */}
            <div className="cal-sticker cal-photo-1">
              <div className="cal-tape"></div>
              <div className="cal-polaroid">
                <img src="/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (1).jpeg" alt="Memory 1" />
              </div>
            </div>

            {/* Photo near Feb 5-6 (tilted, yellow border) */}
            <div className="cal-sticker cal-photo-2">
              <div className="cal-tape"></div>
              <div className="cal-polaroid cal-polaroid-yellow">
                <div className="cal-hearts">❤️ ❤️</div>
                <img src="/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (5).jpeg" alt="Memory 2" />
              </div>
            </div>

            {/* Photo near Feb 10-11 (small, tilted) */}
            <div className="cal-sticker cal-photo-3">
              <div className="cal-tape"></div>
              <div className="cal-polaroid">
                <img src="/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (4).jpeg" alt="Memory 3" />
              </div>
            </div>

            {/* Photo near Feb 8 or right edge (vertical) */}
            <div className="cal-sticker cal-photo-4">
              <div className="cal-tape"></div>
              <div className="cal-polaroid">
                <img src="/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (3).jpeg" alt="Memory 4" />
              </div>
            </div>

            {/* Photo near Feb 27-28 (bottom-center, hanging below) */}
            <div className="cal-sticker cal-photo-5">
              <div className="cal-tape"></div>
              <div className="cal-polaroid">
                <img src="/assets/WhatsApp Image 2026-02-08 at 7.55.26 AM (3).jpeg" alt="Memory 5" />
              </div>
            </div>
          </div>

          {/* Bottom stickers */}
          {/* Bottom-left "You're mine." with heart outline */}
          <div className="cal-sticker cal-you-mine">
            <div className="cal-heart-outline">💗</div>
            <div className="cal-you-mine-text">You're mine.</div>
          </div>

          {/* Bottom-right love note heart sticker */}
          <div className="cal-sticker cal-love-note">
            <div className="cal-love-note-heart">
              <div className="cal-love-note-text">I HAVE SO SO SO MUCH LOVE FOR YOU IN MY HEART THAT IT DOESN'T FIT</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}
