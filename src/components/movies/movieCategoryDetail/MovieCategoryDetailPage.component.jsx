import React from 'react'
import './MovieCategoryDetailPage.style.scss'
import { Container } from 'react-bootstrap'
import MovieCard from '../movieCategoryDetailCard/MovieCategoryDetailCard.component'

const MovieCategoryDetail = () => {
    return (
        <Container className='Movie-category-detail-page'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />

        </Container>

    )
}

export default MovieCategoryDetail
