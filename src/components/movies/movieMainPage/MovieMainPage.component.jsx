import React, { useEffect } from "react"
import { css } from "@emotion/core"

import ClipLoader from "react-spinners/ClipLoader"
import "./MovieMainPage.styles.scss"

import { connect } from "react-redux"
import { fetchMovieList } from "../../../redux/movieRedux/movieActions"
import { fetchTvList } from "../../../redux/tvRedux/tvActions"

import MovieCategory from "../movieCategory/MovieCategory.component"
import { Container } from "react-bootstrap"

//LOADING SPINNER
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const MovieMainPage = props => {
  useEffect(() => {
    props.fetchMovieList()
    props.fetchTvList()
    // eslint-disable-next-line
  }, [])
  if (props.loading) {
    return (
      <ClipLoader
        css={override}
        size={150}
        //size={"150px"} this also works
        color={"#123abc"}
        loading={true}
      />
    )
  }
  return (
    <div className="Movie-main-page">
      <Container>
        <MovieCategory categoryName="On TV" />
        <MovieCategory categoryName="In Theaters" />
      </Container>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: !(state.movies.loading && state.tvs.loading)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchMovieList: () => {
      dispatch(fetchMovieList())
    },
    fetchTvList: () => {
      dispatch(fetchTvList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieMainPage)
