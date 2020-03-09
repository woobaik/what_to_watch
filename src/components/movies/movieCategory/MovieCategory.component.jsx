import React from "react"
import "./MovieCategory.styles.scss"
import { connect } from "react-redux"

import MovieCard from "../movieCard/MovieCard.components"
import { CardDeck } from "react-bootstrap"

const videoCoverList = videoList => {
  const limitVideo4 = videoList.slice(0, 4)
  return limitVideo4
}

const MovieCategories = props => {
  let videoList = []
  if (props.categoryName === "On TV") {
    videoList = videoCoverList(props.tvList.tvList)
  } else {
    videoList = videoCoverList(props.movieList.movies)
  }
  return (
    <div className="card-deck">
      <div className="category-title">{props.categoryName}</div>

      <div className="Moive-category">
        {videoList.map(video => {
          return <MovieCard key={video.id} video={video} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movieList: state.movies,
    tvList: state.tvs
  }
}

export default connect(mapStateToProps)(MovieCategories)
