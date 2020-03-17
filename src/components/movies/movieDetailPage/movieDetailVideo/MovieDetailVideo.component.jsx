import React from "react"
import "./MovieDetailVideo.style.scss"

import ReactPlayer from "react-player"

const MovieDetailVideo = props => {
  return (
    <div className="Movie-detail-video">
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?v=${props.vId}`}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default MovieDetailVideo
