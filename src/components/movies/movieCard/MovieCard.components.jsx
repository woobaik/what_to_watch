import React from 'react'
import './MovieCard.styles.scss'

import { Card } from 'react-bootstrap'

const MovieCard = ({ video }) => {
    return (
        <Card className='bg-dark text-white'>
            <Card.Img varient='top' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${video.poster_path}`} alt='Movie Thumbnail' />
            <div className='card-'>
                {video.title ? video.title : video.name}
            </div>
        </Card>
    )
}

export default MovieCard
