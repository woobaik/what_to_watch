import React, { useEffect } from 'react'
import './MovieCategory.styles.scss'
import { connect } from 'react-redux'


import MovieCard from '../movieCard/MovieCard.components'
import { CardDeck } from 'react-bootstrap'

import { fetchMovieList } from '../../../redux/movieRedux/movieActions'

const MovieCategories = (props) => {
    console.log('movieCategory props', props)
    useEffect(() => {
        props.fetchMovieList()
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
        movieList: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return { fetchMovieList: () => dispatch(fetchMovieList()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategories)
