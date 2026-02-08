export default function StickerPhoto({ photo, style = 'stamp', showTape = false }) {
  const { id, src, alt, xPct, yPct, wPct, rot } = photo
  
  const inlineStyle = {
    position: 'absolute',
    left: `${xPct}%`,
    top: `${yPct}%`,
    width: `${wPct}%`,
    transform: `rotate(${rot}deg)`,
    zIndex: 3
  }

  return (
    <div className={`sticker-photo sticker-${style}`} style={inlineStyle}>
      {showTape && <div className="sticker-tape"></div>}
      {style === 'stamp' && <div className="stamp-edge"></div>}
      <div className={`photo-frame ${style === 'polaroid' ? 'polaroid-frame' : ''}`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

