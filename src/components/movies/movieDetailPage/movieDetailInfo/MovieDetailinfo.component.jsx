import React from 'react'
import './MovieDetailInfo.styles.scss'

import MovieDetailInfoRight from './movieDetailInfoRight/MovieDetailInfoRight.component'

const MovieDetailinfo = () => {
    return (
        <div className='Movie-detail-info'>
            <div className='movie-detail-info-left'></div>
            <div className='movie-detail-info-right'>
                <MovieDetailInfoRight />
            </div>
        </div>
    )
}

export default MovieDetailinfo
