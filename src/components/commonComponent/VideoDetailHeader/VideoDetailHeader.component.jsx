import React from "react"
import "./VideoDetailHeader.styles.scss"

import { FaPlay, FaRegFileImage } from "react-icons/fa"

const movieDetailHeaderStyle = poster_path => {
  return {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_face${poster_path})`
  }
}

const MovieDetailHeader = props => {
  //backdrop_path={backdrop_path} title={title} video={video} overview={overview}

  return (
    <div
      className="Movie-detail-header"
      style={movieDetailHeaderStyle(props.backdrop_path)}>
      <div className="movie-detail-header-summary">
        <div className="movie-detail-header-movie-poster">
          {props.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`}
              alt="poster"
            />
          ) : (
            <div className="no-image">
              <FaRegFileImage />
              <div className="no-image-text">
                We don't have image for {props.title} yet.
              </div>
            </div>
          )}
        </div>
        <div className="movie-detail-header-info">
          <div className="movie-detail-header-info-title">
            {props.title}
            <span className="movie-detail-header-info-title-year">
              {" "}
              {props.release_date
                ? `(${props.release_date.split("-")[0]})`
                : ""}
            </span>
          </div>
          {props.video ? (
            <div
              className="movie-detail-header-info-icons"
              onClick={() => props.videoModal()}>
              <FaPlay /> Play Trailer
            </div>
          ) : null}

          <div className="movie-detail-header-info-overview">
            <h3>Overview</h3>
            {props.overview}
          </div>

          <div className="movie-detail-header-info-featured-crew">
            <h3>Featured Crew</h3>
            <div className="featured-crew-list">
              <div className="featured-crew-person">
                <div>Frank Darabont</div>
                <div>Director, Writer</div>
              </div>
              <div className="featured-crew-person">
                <div>Stephen King</div>
                <div>Novel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailHeader
