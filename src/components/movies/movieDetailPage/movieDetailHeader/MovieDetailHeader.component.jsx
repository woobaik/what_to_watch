import React from 'react'
import './MovieDetailHeader.styles.scss'

import { FaPlay } from 'react-icons/fa'

const MovieDetailHeader = () => {
    return (
        <div className='Movie-detail-header'>
            <div className="movie-detail-header-summary">
                <div className='movie-detail-header-movie-poster'>
                    <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/2CAL2433ZeIihfX1Hb2139CX0pW.jpg" alt='poster' />
                </div>
                <div className='movie-detail-header-info'>
                    <div className='movie-detail-header-info-title'>
                        Dilwale Dulhania Le Jayenge
                        <span className='movie-detail-header-info-title-year'> (1995)</span>
                    </div>
                    <div className="movie-detail-header-info-icons">
                        <FaPlay />  Play Trailer
                    </div>
                    <div className="movie-detail-header-info-overview">
                        <h3>Overview</h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, recusandae similique harum dolor molestiae tempore quod corrupti totam porro pariatur delectus dignissimos iusto a provident accusamus nam fuga possimus aliquid.
                    </div>

                    <div className="movie-detail-header-info-featured-crew">
                        <h3>Featured Crew</h3>
                        <div className="featured-crew-list">
                            <div className='featured-crew-person'>
                                <div>Frank Darabont</div>
                                <div>Director, Writer</div>
                            </div>
                            <div className='featured-crew-person'>
                                <div>Stephen King</div>
                                <div>Novel</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailHeader
