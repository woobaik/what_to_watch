import React, { useEffect } from "react"
import { connect } from "react-redux"
import "./MovieCategoryDetailPage.style.scss"
import { Container } from "react-bootstrap"
import MovieCard from "../movieCategoryDetailCard/MovieCategoryDetailCard.component"

import { fetchMovieList } from "../../../redux/movieRedux/movieActions"
import { fetchTvList } from "../../../redux/tvRedux/tvActions"

// title maker depending props.match.params.query
const titleMaker = query => {
  // now_playing, popular, top_rated, upcoming
  switch (query) {
    case "/movies/popular":
      return "Popular Movies"

    case "/movies/top-rated":
      return "Top Rated Movies"

    case "/movies/now-playing":
      return "Now Playing in Theaters"

    case "/movies/upcoming":
      return "Upcomig Movies"

    case "/tvs":
      return "Popular TV Shows"

    case "/tvs/top-rated":
      return "Top Rated TV Shows"

    case "/tvs/on-the-air":
      return "Currently Airing TV Shows"

    case "/tvs/airing-today":
      return "TV Shows Airing Today"

    default:
      return "Popular Movies"
  }
}

const MovieCategoryDetail = props => {
  useEffect(() => {
    props.fetchVideoList()
    // eslint-disable-next-line
  }, [props.match.params])

  return (
    <Container className="Movie-category-detail-page">
      <div className="movie-category-detail-title">
        {titleMaker(props.match.url)}
      </div>
      <div className="Movie-category-detail-page-content">
        {props.match.url.slice(0, 4) === "/tvs"
          ? props.videoList.map(movie => {
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.name}
                  release_date={movie.first_air_date}
                  overview={movie.overview}
                />
              )
            })
          : props.videoList.map(movie => {
              return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  release_date={movie.release_date}
                  overview={movie.overview}
                />
              )
            })}
      </div>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.url.slice(0, 4) === "/tvs") {
    return {
      videoList: state.tvs.tvList
    }
  }
  return {
    videoList: state.movies ? state.movies.movies : state.tvs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const query = ownProps.match.params.query
    ? ownProps.match.params.query.replace(/-/g, "_")
    : "popular"

  if (ownProps.match.url.slice(0, 4) === "/tvs") {
    return {
      fetchVideoList: () => dispatch(fetchTvList(query))
    }
  }
  // if (ownProps.match.url.slice(0,3)) {

  // }
  return {
    fetchVideoList: () => dispatch(fetchMovieList(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategoryDetail)
