import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './MovieCategoryDetailPage.style.scss'
import { Container } from 'react-bootstrap'
import MovieCard from '../movieCategoryDetailCard/MovieCategoryDetailCard.component'

import { fetchMovieList } from '../../../redux/movieRedux/movieActions'



const MovieCategoryDetail = (props) => {





    useEffect(() => {
        props.fetchMovieList()
    }, [])

    console.log(props)
    return (
        <Container className='Movie-category-detail-page'>
            <div className='movie-category-detail-title'>
                Popular Movies
                </div>
            <div className='Movie-category-detail-page-content'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        videoList: state.movies ? state.movies : state.tvList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('mapDispatchToProps', ownProps)
    const query = ownProps.match.params.query ? ownProps.match.params.query.replace('-', '_') : 'popular'
    return {
        fetchMovieList: () => dispatch(fetchMovieList(query))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MovieCategoryDetail)
