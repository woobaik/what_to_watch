import React from 'react'
import './MovieDetailInfo.styles.scss'

import MovieDetailInfoLeft from './movieDetailInfoLeft/MovieDetailInfoLeft.component'
import MovieDetailInfoRight from './movieDetailInfoRight/MovieDetailInfoRight.component'

const MovieDetailinfo = () => {
    return (
        <div className='Movie-detail-info'>
            <div className='movie-detail-info-left'>
                <MovieDetailInfoLeft />
            </div>
            <div className='movie-detail-info-right'>
                <MovieDetailInfoRight />
            </div>
        </div>
    )
}

export default MovieDetailinfo
