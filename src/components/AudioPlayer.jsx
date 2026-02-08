import { forwardRef } from 'react'

const AudioPlayer = forwardRef((props, ref) => (
  <audio 
    ref={ref}
    id="backgroundMusic" 
    loop 
    preload="auto"
  >
    <source src="/assets/Stephen_Dawes_-_Teenage_Dream_(Lyric_Video)_128k.mp3" type="audio/mpeg" />
  </audio>
))

AudioPlayer.displayName = 'AudioPlayer'

export default AudioPlayer

