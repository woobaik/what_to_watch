import React, { connect, Fragment } from 'react'
import './MovieCategoryDetailPage.style.scss'
import { Container } from 'react-bootstrap'
import MovieCard from '../movieCategoryDetailCard/MovieCategoryDetailCard.component'


const MovieCategoryDetail = (props) => {


    return (
        <Container className='Movie-category-detail-page'>
            <div className='movie-category-detail-title'>
                Popular Movies
                </div>
            <div className='Movie-category-detail-page-content'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>

        </Container>



    )
}





export default MovieCategoryDetail
