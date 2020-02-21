import React from 'react'
import './MovieCategoryDetailCard.styles.scss'

import { withRouter } from 'react-router-dom'
const MovieCategoryDetailCard = (props) => {
    // key={movie.id} poster={poster_path} title={title} release_date={movie.release_date} overview={movie.overview}



    const navigateToMovieDetail = () => {
        let urlSafeTitle = props.title.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(/\s/g, '-')
        let slug = props.id + '-' + urlSafeTitle
        console.log(slug)
        props.history.push(`/movie/${slug}`)
    }
    return (

        <div className='Movie-category-detail-card' onClick={navigateToMovieDetail}>
            <div className='category-detail-card-image'>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.poster}`} alt='movie poster' />
            </div>
            <div className='category-detail-card-content'>
                <div className='category-detail-card-header'>
                    <div className='category-detail-card-title'>
                        {props.title}
                    </div>
                    <div className='category-detail-card-release-date'>
                        {props.release_date}
                    </div>
                </div>
                <div className='category-detail-card-stroy'>
                    {props.overview.length > 254 ? props.overview.slice(0, 254) + '...' : props.overview}
                </div>
                <div className='category-detail-card-footer'>
                    More Info
                </div>

            </div>
        </div >
    )
}

export default withRouter(MovieCategoryDetailCard)
