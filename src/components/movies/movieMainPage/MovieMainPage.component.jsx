import React from 'react'
import './MovieMainPage.styles.scss'

import MovieNavBar from '../movieNavBar/MovieNavigationBar.component'
import MovieCategory from '../movieCategory/MovieCategory.component'
import HorizontalDivider from '../../layouts/divider/HorizontalDivider.component'
import { Container } from 'react-bootstrap'


const MovieMainPage = props => {
    return (
        <div className='Movie-main-page'>
            <MovieNavBar />
            <HorizontalDivider />
            <Container>
                <MovieCategory categoryName='On TV' />
                <MovieCategory categoryName='In Theaters' />
            </Container>



        </div>
    )
}





export default MovieMainPage