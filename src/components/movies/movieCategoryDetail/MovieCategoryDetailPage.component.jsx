import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { css } from "@emotion/core"
import "./MovieCategoryDetailPage.style.scss"
import { Container } from "react-bootstrap"
import MovieCard from "../movieCategoryDetailCard/MovieCategoryDetailCard.component"
import SyncLoader from "react-spinners/SyncLoader"
import ReactPaginate from "../../layouts/paginate/Paginate.component"

import { fetchMovieList } from "../../../redux/movieRedux/movieActions"
import { fetchTvList } from "../../../redux/tvRedux/tvActions"

const override = css`
  display: block;
  margin: 0 auto;
  height: 85vh;
  text-align: center;
  padding-top: 40vh;
  background-color: lightyellow;
`
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
  const [pageNumber, setPageNumber] = useState(0)

  useEffect(() => {
    props.fetchVideoList(pageNumber)
    // eslint-disable-next-line
  }, [props.match.params, pageNumber])

  if (props.loading) {
    return (
      <SyncLoader
        css={override}
        size={20}
        //size={"150px"} this also works
        color={"#3cb"}
        loading={true}
        margin={5}
      />
    )
  }
  return (
    <Container className="Movie-category-detail-page">
      <div className="movie-category-detail-title">
        {titleMaker(props.match.url)}
      </div>
      <div className="category-detail-paginate-container">
        <ReactPaginate
          currentPage={pageNumber}
          pageChange={number => setPageNumber(number)}
        />
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
      <div className="category-detail-paginate-container">
        <ReactPaginate
          currentPage={pageNumber}
          pageChange={number => setPageNumber(number)}
        />
      </div>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.url.slice(0, 4) === "/tvs") {
    return {
      videoList: state.tvs.tvList,
      loading: state.tvs.loading
    }
  }
  return {
    videoList: state.movies.movies,
    loading: state.movies.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const query = ownProps.match.params.query
    ? ownProps.match.params.query.replace(/-/g, "_")
    : "popular"

  if (ownProps.match.url.slice(0, 4) === "/tvs") {
    return {
      fetchVideoList: pageNumber => dispatch(fetchTvList(query, pageNumber))
    }
  }

  return {
    fetchVideoList: pagenumber => dispatch(fetchMovieList(query, pagenumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategoryDetail)
