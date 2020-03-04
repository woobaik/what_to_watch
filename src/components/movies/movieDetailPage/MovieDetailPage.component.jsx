import React, { useEffect } from "react"
import "./MovieDetailPage.styles.scss"

import { connect } from "react-redux"
import {
  fetchMovie,
  fetchCast,
  fetchMovieKeywords,
  cleanUpMovie
} from "../../../redux/movieRedux/movieActions"
import {
  fetchTvData,
  fechTvKeyWords,
  fetchTVcredit
} from "../../../redux/tvRedux/tvActions"
import { css } from "@emotion/core"

import SyncLoader from "react-spinners/SyncLoader"
import HorizontalDivider from "../../layouts/divider/HorizontalDivider.component"
import MovieDetailInfo from "./movieDetailInfo/MovieDetailinfo.component"
import VideoDetailHeader from "../../commonComponent/VideoDetailHeader/VideoDetailHeader.component"

const override = css`
  display: block;
  margin: 0 auto;
  height: 85vh;
  text-align: center;
  padding-top: 40vh;
  background-color: lightyellow;
`

const MovieDetailPage = props => {
  console.log("Movie Detail", props)
  useEffect(() => {
    props.fetchVideoeData()
    props.fetchCastData()
    props.fetchVideoKeywords()
    return () => {
      props.cleanUpMovie()
    }
    // eslint-disable-next-line
  }, [])

  // decide whether video data is movie or tv show
  let videoData = {}
  if (props.match.url.slice(0, 3) === "/tv") {
    videoData = props.tv
  } else {
    videoData = props.movie
  }

  // loading spinner
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
    <div className="Movie-detail-page">
      {/* backdrop_path={props.movie.backdrop_path} title={title} video={video} overview={overview} poster_path={poster_path} */}
      <VideoDetailHeader
        poster_path={videoData.poster_path}
        backdrop_path={videoData.backdrop_path}
        title={videoData.title ? videoData.title : videoData.name}
        video={videoData.video}
        overview={videoData.overview}
        release_date={
          videoData.release_date
            ? videoData.release_date
            : videoData.first_air_date
        }
      />

      <HorizontalDivider />
      <MovieDetailInfo
        status={videoData.status}
        release_date={videoData.release_date}
        original_language={videoData.original_language}
        runtime={videoData.runtime}
        budget={videoData.budget}
        revenue={videoData.revenue}
        genres={videoData.genres}
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  let loadingValue = undefined

  if (ownProps.match.url.slice(0, 3) === "/tv") {
    loadingValue = state.tvs.loading
  } else {
    loadingValue = state.movies.loading
  }

  return {
    movie: state.movies.movie,
    cast: state.casts,
    tv: state.tvs.tv,
    loading: loadingValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const movieId = ownProps.match.params.query.split("-")[0]

  if (ownProps.match.url.slice(0, 3) === "/tv") {
    return {
      fetchVideoeData: () => {
        return dispatch(fetchTvData(movieId))
      },
      fetchCastData: () => {
        return dispatch(fetchTVcredit(movieId))
      },
      fetchVideoKeywords: () => {
        return dispatch(fechTvKeyWords(movieId))
      },
      cleanUpMovie: () => {
        return dispatch(cleanUpMovie())
      }
    }
  }
  return {
    fetchVideoeData: () => {
      return dispatch(fetchMovie(movieId))
    },
    fetchCastData: () => {
      return dispatch(fetchCast(movieId))
    },
    fetchVideoKeywords: () => {
      return dispatch(fetchMovieKeywords(movieId))
    },
    cleanUpMovie: () => {
      return dispatch(cleanUpMovie())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)
