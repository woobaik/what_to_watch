import React from "react"
import { withRouter } from "react-router-dom"
import "./MovieCard.styles.scss"

import { Card } from "react-bootstrap"

// movie overview truncate

const truncateOverview = overview => {
  if (overview.length > 550) {
    return overview.slice(0, 550) + "..."
  }

  return overview
}

const MovieCard = props => {
  const navigateToMovieDetail = () => {
    let videoTitle = props.video.title || props.video.name
    let urlSafeTitle = videoTitle
      .toLowerCase()
      .replace(/[&#,+()/$~%.'":*?<>{}]/g, "")
      .replace(/\s/g, "-")
    let slug = props.video.id + "-" + urlSafeTitle
    if (props.video.title) {
      props.history.push(`/movie/${slug}`)
    } else if (props.video.name) {
      props.history.push(`/tv/${slug}`)
    }
  }
  return (
    <div className="Card" onClick={navigateToMovieDetail}>
      <div className="movieCard">
        <div className="movie-image-container">
          <Card.Img
            varient="top"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.video.poster_path}`}
            alt="Movie Thumbnail"
          />
          <div className="movieCard-overlay">
            <div className="movieCard-overlay-text">
              {truncateOverview(props.video.overview)}
            </div>
          </div>
        </div>

        <div className="card-title">
          {props.video.title ? props.video.title : props.video.name}
        </div>
      </div>
    </div>
  )
}

export default withRouter(MovieCard)
