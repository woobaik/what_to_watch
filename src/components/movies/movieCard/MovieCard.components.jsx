import React from 'react'
import { withRouter } from 'react-router-dom'
import './MovieCard.styles.scss'

import { Card } from 'react-bootstrap'


const MovieCard = (props) => {

    const navigateToMovieDetail = () => {
        let videoTitle = props.video.title || props.video.name
        let urlSafeTitle = videoTitle.toLowerCase().replace(/[&#,+()/$~%.'":*?<>{}]/g, '').replace(/\s/g, '-')
        let slug = props.video.id + '-' + urlSafeTitle
        if (props.video.title) {
            props.history.push(`/movie/${slug}`)
        } else if (props.video.name) {
            props.history.push(`/tv/${slug}`)
        }
        
    }
    return (
        <Card className='bg-dark text-white' onClick={navigateToMovieDetail} >
            <div className='movieCard'>
                <Card.Img varient='top' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${props.video.poster_path}`} alt='Movie Thumbnail' />
                <div className='card-'>
                    {props.video.title ? props.video.title : props.video.name}
                </div>
            </div>
        </Card>
    )
}

export default withRouter(MovieCard)
