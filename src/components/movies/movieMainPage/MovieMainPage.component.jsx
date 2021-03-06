import React, { useEffect, Fragment } from "react"
import { css } from "@emotion/core"

import SyncLoader from "react-spinners/SyncLoader"
import "./MovieMainPage.styles.scss"

import { connect } from "react-redux"
import { fetchMovieList } from "../../../redux/movieRedux/movieActions"
import { fetchTvList } from "../../../redux/tvRedux/tvActions"

import MovieCategory from "../movieCategory/MovieCategory.component"
import LandingHero from "../../layouts/landingHero/LandingHero.component.jsx"

//LOADING SPINNER
const override = css`
	display: block;
	margin: 0 auto;
	height: 85vh;
	width: 100vw;
	text-align: center;
	padding-top: 40vh;
	background-color: lightyellow;
`

const MovieMainPage = (props) => {
	useEffect(() => {
		props.fetchMovieList()
		props.fetchTvList()
		// eslint-disable-next-line
	}, [])

	if (props.loading) {
		return (
			<SyncLoader
				css={override}
				size={20}
				color={"#3cb"}
				loading={true}
				margin={5}
			/>
		)
	}

	return (
		<Fragment>
			<LandingHero />
			<div className="Movie-main-page">
				<MovieCategory categoryName="On TV" />
				<MovieCategory categoryName="In Theaters" />
			</div>
		</Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		loading: state.movies.loading && state.tvs.loading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMovieList: () => {
			dispatch(fetchMovieList())
		},
		fetchTvList: () => {
			dispatch(fetchTvList())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieMainPage)
