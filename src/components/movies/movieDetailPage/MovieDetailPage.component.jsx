import React from 'react'
import './MovieDetailPage.styles.scss'

import HorizontalDivider from '../../layouts/divider/HorizontalDivider.component'

import MovieDetailHeader from './movieDetailHeader/MovieDetailHeader.component'

const MovieDetailPage = () => {
    return (
        <div className='Movie-detail-page'>
            <MovieDetailHeader />
            <HorizontalDivider />


        </div>
    )
}

export default MovieDetailPage
