import React from 'react'
import './MovieCategory.styles.scss'

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

export default MovieCategories
