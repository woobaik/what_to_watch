import React, { useEffect } from 'react'
import './MovieDetailPage.styles.scss'

import { connect } from 'react-redux'
import { fetchMovie, fetchCast, fetchMovieKeywords, cleanUpMovie } from '../../../redux/movieRedux/movieActions'


import HorizontalDivider from '../../layouts/divider/HorizontalDivider.component'
import MovieDetailInfo from './movieDetailInfo/MovieDetailinfo.component'
import VideoDetailHeader from '../../commonComponent/VideoDetailHeader/VideoDetailHeader.component'

const MovieDetailPage = (props) => {
    console.log('MOVIEDETAIL', props)
    useEffect(() => {
        props.fetchMovieData()
        props.fetchCastData()
        props.fetchMovieKeywords()

        return props.cleanUpMovie
        // eslint-disable-next-line 
    }, [])
    return (
        <div className='Movie-detail-page'>
            {/* backdrop_path={props.movie.backdrop_path} title={title} video={video} overview={overview} poster_path={poster_path} */}
            <VideoDetailHeader poster_path={props.movie.poster_path} backdrop_path={props.movie.backdrop_path} title={props.movie.title} video={props.movie.video} overview={props.movie.overview} release_date={props.movie.release_date} />
            <HorizontalDivider />
            <MovieDetailInfo status={props.movie.status} release_date={props.movie.release_date} original_language={props.movie.original_language} runtime={props.movie.runtime} budget={props.movie.budget} revenue={props.movie.revenue} genres={props.movie.genres} />

        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        movie: state.movies.movie,
        cast: state.cast
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('MAP STATE TO PROPS', ownProps)
    const movieId = ownProps.match.params.query.split('-')[0]
    return {
        fetchMovieData: () => { return dispatch(fetchMovie(movieId)) },
        fetchCastData: () => { return dispatch(fetchCast(movieId)) },
        fetchMovieKeywords: () => { return dispatch(fetchMovieKeywords(movieId)) },
        cleanUpMovie: () => { return dispatch(cleanUpMovie()) }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage)
