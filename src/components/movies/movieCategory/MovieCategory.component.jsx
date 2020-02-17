import React, { useEffect } from 'react'
import './MovieCategory.styles.scss'
import { connect } from 'react-redux'


import MovieCard from '../movieCard/MovieCard.components'
import { CardDeck } from 'react-bootstrap'

import { fetchMovieList } from '../../../redux/movieRedux/movieActions'
import { fetchTvList } from '../../../redux//tvRedux/tvActions'

const MovieCategories = (props) => {
    console.log('movieCategory props', props)
    useEffect(() => {
        props.fetchMovieList()
        props.fetchTvList()
    }, [])

    return (
        <CardDeck bsPrefix='card-deck'>
            <div className='category-title'>
                {props.categoryName}
            </div>

            <div className='Moive-category'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </CardDeck>

    )
}


const mapStateToProps = (state) => {
    return {
        movieList: state.movies,
        tvList: state.tvs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieList: () => dispatch(fetchMovieList()),
        fetchTvList: () => dispatch(fetchTvList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategories)
