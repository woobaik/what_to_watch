import React, { useEffect } from 'react'
import './MovieMainPage.styles.scss'

import { connect } from 'react-redux'
import { fetchMovieList } from '../../../redux/movieRedux/movieActions'
import { fetchTvList } from '../../../redux/tvRedux/tvActions'

import MovieCategory from '../movieCategory/MovieCategory.component'
import { Container } from 'react-bootstrap'


const MovieMainPage = ({ fetchTvList, fetchMovieList }) => {

    useEffect(() => {
        fetchMovieList()
        fetchTvList()
        // eslint-disable-next-line 
    }, [])
    return (
        <div className='Movie-main-page'>
            <Container>
                <MovieCategory categoryName='On TV' />
                <MovieCategory categoryName='In Theaters' />
            </Container>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieList: () => { dispatch(fetchMovieList()) },
        fetchTvList: () => { dispatch(fetchTvList()) }
    }
}



export default connect(null, mapDispatchToProps)(MovieMainPage)