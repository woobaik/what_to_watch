import React from "react"
import "./MovieDetailVideo.style.scss"

import ReactPlayer from "react-player"

const MovieDetailVideo = ({ url }) => {
  return (
    <div className="Movie-detail-video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=O_49H_N43jQ&list=RDO_49H_N43jQ&start_radio=1"
        controls="true"
      />
    </div>
  )
}

export default MovieDetailVideo
