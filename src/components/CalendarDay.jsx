export default function CalendarDay({ day, photo, stacked, yellow, heart, valentines }) {
  return (
    <div className={`calendar-day ${valentines ? 'valentines-day' : ''}`}>
      <span className="day-number">{day}</span>
      {heart && <span className="heart-small">💗</span>}
      {photo && (
        <div className={`sticker ${stacked ? 'sticker-stacked' : ''} ${yellow ? 'sticker-yellow' : ''}`}>
          <div className="tape"></div>
          {yellow && <div className="hearts-above">❤️ ❤️</div>}
          <img src={photo} alt={`Memory ${day}`} />
        </div>
      )}
    </div>
  )
}

