import React, {useState} from 'react';
import ReactPlayer from 'react-player';
const VideoPlayer = React.forwardRef(({fadeOut, url, playing, setStarted, setEnded}, ref) => {
  //used to fade the video out
  const [opacity, setOpacity] = useState(1);

  //add styling for fadeout depending on the supplied boolean
  const fadeOutStyles =
    fadeOut
      ? {
        transition: 'opacity 0.5s',
        opacity: opacity
      }
      : {}
  return (
    <ReactPlayer
      ref = {ref}
      style={{pointerEvents: 'none', ...fadeOutStyles}}
      url={url}
      playing = {playing}
      onPlay={() => {
        setOpacity(0)
        setStarted(true)
      }}
      onEnded={() => {
        setEnded(true)
      }}
    />
  )
}) 
export default VideoPlayer
