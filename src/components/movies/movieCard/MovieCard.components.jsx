import React from 'react'
import './MovieCard.styles.scss'

import { Card } from 'react-bootstrap'

const MovieCard = () => {
    return (
        <Card className='bg-dark text-white'>
            <Card.Img varient='top' src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nIlAKIrLKxOeoEnc0Urb65yNCp.jpg" alt='Movie Thumbnail' />
            <div className='card-'>
                Star Trek
            </div>

        </Card>
    )
}

export default MovieCard
