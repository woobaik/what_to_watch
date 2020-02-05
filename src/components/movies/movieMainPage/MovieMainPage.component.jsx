import React from 'react'
import './MovieMainPage.styles.scss'

import MovieNavBar from '../movieNavBar/MovieNavigationBar.component'
import MovieCategory from '../movieCategory/MovieCategory.component'
import { Container } from 'react-bootstrap'
const MovieMainPage = props => {
    return (
        <div className='Movie-main-page'>
            <MovieNavBar />
            <Container>

                <MovieCategory categoryName='On TV' />


            </Container>



        </div>
    )
}





export default MovieMainPage