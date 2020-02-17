import React from 'react'
import './MovieCategory.styles.scss'
import { connect } from 'react-redux'


import MovieCard from '../movieCard/MovieCard.components'
import { CardDeck } from 'react-bootstrap'

const MovieCategories = (props) => {
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



export default connect(mapStateToProps)(MovieCategories)
