import React from "react"
import "./MovieDetailInfo.styles.scss"

import MovieDetailInfoLeft from "./movieDetailInfoLeft/MovieDetailInfoLeft.component"
import MovieDetailInfoRight from "./movieDetailInfoRight/MovieDetailInfoRight.component"

const MovieDetailinfo = () => {
  // status = { props.movie.status } release_date = { props.movie.release_date } original_language = { props.movie.original_language } runtime = { props.movie.runtime } budget = { props.movie.budget } revenue = { props.movie.revenue } genres = { props.movie.genres }
  return (
    <div className="Movie-detail-info">
      <div className="movie-detail-info-right">
        <MovieDetailInfoRight />
      </div>
      <div className="movie-detail-info-left">
        <MovieDetailInfoLeft />
      </div>
    </div>
  )
}

export default MovieDetailinfo
