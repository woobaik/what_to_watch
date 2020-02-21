import React from 'react'
import './MovieDetailInfoRightstyles.scss'

import { connect } from 'react-redux'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLink } from 'react-icons/fa'

import ISO6391 from 'iso-639-1'

const stringifyReleaseDate = (release_date) => {
    if (!release_date) {
        return 'FETCHING...'
    }
    const releaseDateArray = release_date.split('-')
    let year = releaseDateArray[0]
    let month = releaseDateArray[1]
    let date = releaseDateArray[2].length > 1 ? releaseDateArray[2] : releaseDateArray[2].split('')[1]

    const fullDate = new Date(year, month, date);
    month = fullDate.toLocaleString('default', { month: 'long' })

    return `${month} ${date}, ${year}`
}

const runtimeCalculator = (runtime) => {
    if (!runtime) {
        return 'FETCHING...'
    }
    let hours = Math.floor(runtime / 60)
    let mins = runtime % 60
    return `${hours}h ${mins}m`
}


const MovieDetailInfoRight = ({ videoInfo, videoKeywords }) => {

    console.log('KEYWORDS', videoKeywords)

    return (
        <div className='MovieDetailInfoRight'>
            <div className='social-icons'>
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaInstagram />
                <FaLink />
            </div>

            <div className='right-info-items'>
                <h5>Facts</h5>
            </div>

            <div className='right-info-item'>
                <h5>Status</h5>
                <h6>{videoInfo.status}</h6>

            </div>
            <div className='right-info-item'>
                <h5>Release Information</h5>
                <h6>{stringifyReleaseDate(videoInfo.release_date)}</h6>
                <h6>Theatrical</h6>
            </div>
            <div className='right-info-item'>
                <h5>Original Language</h5>
                {/* ISO6391 is a external library for fetcing full name from shorten name */}
                <h6>{ISO6391.getName(videoInfo.original_language)}</h6>
            </div>
            <div className='right-info-item'>
                <h5>Runtime</h5>
                <h6>{runtimeCalculator(videoInfo.runtime)}</h6>
            </div>
            <div className='right-info-item'>
                <h5>Budget</h5>
                <h6>${videoInfo.budget ? videoInfo.budget.toLocaleString() : 'FETCHING...'}.00</h6>
            </div>
            <div className='right-info-item'>
                <h5>Revenue</h5>
                <h6>${videoInfo.revenue ? videoInfo.revenue.toLocaleString() : 'FETCHING...'}.00</h6>
            </div>
            <div className='right-info-item'>
                <h5>Genres</h5>
                <ul className='button-holder'>
                    {videoInfo.genres ? videoInfo.genres.map(genre => {
                        return <button key={genre.id} className='custom-button'>{genre.name.toUpperCase()}</button>
                    }) : 'FETCHING'}

                </ul>
            </div>
            <div className='right-info-item'>
                <h5>Keywords</h5>
                <ul className='button-holder'>
                    {videoKeywords.keywords ? videoKeywords.keywords.map(keyword => {
                        return <button key={keyword.id} className='custom-button'>{keyword.name}</button>
                    }) : 'FETCHING...'}
                </ul>
            </div>
            <div className='right-info-'>
                <h5>Content Score</h5>
                100
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log('MAPSTATEPROPS', state.movies)
    return {
        videoInfo: state.movies.movie,
        videoKeywords: state.movies.keywords
    }
}
export default connect(mapStateToProps)(MovieDetailInfoRight)