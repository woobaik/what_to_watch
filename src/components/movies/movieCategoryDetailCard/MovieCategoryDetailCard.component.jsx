import React from "react"
import { IoIosImage } from "react-icons/io"
import "./MovieCategoryDetailCard.styles.scss"

import { withRouter } from "react-router-dom"
const MovieCategoryDetailCard = props => {
  // key={movie.id} poster={poster_path} title={title} release_date={movie.release_date} overview={movie.overview}

  // getting slug for url address, remove symbols allow only character and numbers
  const navigateToMovieDetail = () => {
    let urlSafeTitle = props.title
      .toLowerCase()
      .replace(/[&#,+()/$~%.'":*?<>{}]/g, "")
      .replace(/\s/g, "-")
    let slug = props.id + "-" + urlSafeTitle
    let condition = props.match.url.split("/")[1]
    if (condition === "tvs") {
      props.history.push(`/tv/${slug}`)
    } else if (condition === "movies") {
      props.history.push(`/movie/${slug}`)
    }
  }
  return (
    <div className="Movie-category-detail-card" onClick={navigateToMovieDetail}>
      <div className="category-detail-card-image">
        {props.poster ? (
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.poster}`}
            alt="movie poster"
          />
        ) : (
          <div className="category-detail-card-no-image">
            <IoIosImage />
          </div>
        )}
      </div>
      <div className="category-detail-card-content">
        <div className="category-detail-card-header">
          <div className="category-detail-card-title">{props.title}</div>
          <div className="category-detail-card-release-date">
            {props.release_date}
          </div>
        </div>
        <div className="category-detail-card-stroy">
          {props.overview.length > 254
            ? props.overview.slice(0, 254) + "..."
            : props.overview}
        </div>
        <div className="category-detail-card-footer">More Info</div>
      </div>
    </div>
  )
}

export default withRouter(MovieCategoryDetailCard)
