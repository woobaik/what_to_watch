import React, { useEffect } from 'react'
import './MovieMainPage.styles.scss'

import { connect } from 'react-redux'
import { fetchMovieList } from '../../../redux/movieRedux/movieActions'
import { fetchTvList } from '../../../redux/tvRedux/tvActions'

import MovieNavBar from '../movieNavBar/MovieNavigationBar.component'
import MovieCategory from '../movieCategory/MovieCategory.component'
import HorizontalDivider from '../../layouts/divider/HorizontalDivider.component'
import { Container } from 'react-bootstrap'


const MovieMainPage = ({ fetchMovieList }) => {
    useEffect(() => {
        fetchMovieList()
        fetchTvList()
        // eslint-disable-next-line 
    }, [])
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

const mapStateToProps = (state) => {
    return {
        movieList: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieList: () => { dispatch(fetchMovieList()) },
        fetchTvList: () => { dispatch(fetchTvList()) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MovieMainPage)