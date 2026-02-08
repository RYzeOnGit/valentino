export default function CalendarDay({ day, valentines }) {
  return (
    <div className={`calendar-day ${valentines ? 'valentines-day' : ''}`}>
      <span className="day-number">{day}</span>
      {valentines && (
        <div className="valentine-heart-sticker">
          <span className="heart-icon">❤️</span>
        </div>
      )}
    </div>
  )
}
