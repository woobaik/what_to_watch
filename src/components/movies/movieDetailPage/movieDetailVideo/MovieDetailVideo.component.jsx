import React from "react"
import "./MovieDetailVideo.style.scss"

import ReactPlayer from "react-player"

const MovieDetailVideo = props => {
  return (
    <div className="Movie-detail-video">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${props.vId}`}
        controls={true}
      />
    </div>
  )
}

export default MovieDetailVideo
