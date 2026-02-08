import CalendarDay from './CalendarDay'

const calendarData = [
  // Week 1
  { day: 1, photo: '/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (1).jpeg' },
  { day: 2, photo: '/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (4).jpeg', stacked: true },
  { day: 3 },
  { day: 4 },
  { day: 5 },
  { day: 6, photo: '/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (5).jpeg', yellow: true },
  { day: 7 },
  // Week 2
  { day: 8, photo: '/assets/WhatsApp Image 2026-02-08 at 7.47.41 AM (3).jpeg' },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13, heart: true },
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
  { day: 23, photo: '/assets/WhatsApp Image 2026-02-08 at 7.55.26 AM (1).jpeg' },
  { day: 24 },
  { day: 25 },
  { day: 26, photo: '/assets/WhatsApp Image 2026-02-08 at 7.55.26 AM (3).jpeg' },
  { day: 27 },
  { day: 28 },
]

export default function CalendarPage({ isActive }) {
  return (
    <div 
      className={`book-page page-calendar ${isActive ? 'active' : ''}`}
    >
      <div className="scrapbook-frame">
        <div className="scrapbook-paper">
          <div className="calendar-header">
            <div className="header-every">every</div>
            <div className="header-february">February</div>
          </div>
          
          <div className="calendar-container">
            <div className="calendar-grid">
              <div className="calendar-weekdays">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                  <div key={day}>{day}</div>
                ))}
              </div>
              
              <div className="calendar-days">
                {calendarData.map(({ day, photo, stacked, yellow, heart, valentines }) => (
                  <CalendarDay
                    key={day}
                    day={day}
                    photo={photo}
                    stacked={stacked}
                    yellow={yellow}
                    heart={heart}
                    valentines={valentines}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bottom-stickers">
            <div className="sticker-label you-mine">You're mine.</div>
            <div className="sticker-label love-note">
              I have So So SO MUCH LOVE FOR YOU in my HEART
            </div>
          </div>
        </div>
      </div>
      <div className="page-turn-hint">Tap to turn page →</div>
    </div>
  )
}

